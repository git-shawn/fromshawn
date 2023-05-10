import DocCard, { DocPreview } from "@/components/docs/doc-preview"
import { useState, useEffect, useRef } from "react";
import { useRouter } from 'next/router'
import { InferGetStaticPropsType } from "next"
import fs from "fs"
import { serialize } from "next-mdx-remote/serialize"
import styles from '@/styles/Docs.module.css'
import path from "path"
import Head from "next/head";

export default function Home({ postPreviews }: InferGetStaticPropsType<typeof getStaticProps>) {
  const router = useRouter()
  const { tag } = router.query
  const pickerRef = useRef<HTMLSelectElement>(null);
  const [filter, setFilter] = useState("all");

  useEffect(() => {
    if (tag != undefined) {
      setFilter(tag as string);
      if (pickerRef.current) {
        pickerRef.current.value = tag as string
      }
    }
  }, [router, tag])

  return (
    <>
      <Head>
        <title>Shawn Davis — Support</title>
        <meta name="description" content="Learn everything you need to know about applications made by Shawn Davis." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/shared-assets/favicon.ico" />
        <meta property="og:title" content="Shawn Davis - Support" />
        <meta property="og:description" content="Learn everything you need to know about applications made by Shawn Davis." />
        <meta property="og:image" content="/previews/social-box-support.png" />
      </Head>
      <div className={styles["main"]}>
        <div className={styles["doc-filter-bar"]}>
          <select
            ref={pickerRef}
            onChange={(e) => {
              setFilter(e.target.value);
            }}
            name="doc-type"
            id="doc-type">
            <option value="all">All Documents</option>
            <option value="qrpop">QR Pop</option>
            <option value="rerouter">Rerouter</option>
          </select>
        </div>

        <div className={styles["doc-cards"]}>
          {postPreviews
            .sort((a, b) => {
              // MM/DD/YY
              let c = a.date.split('/').reverse();
              let j = Number(c[2] + c[0] + c[1]);
              let d = b.date.split('/').reverse();
              let k = Number(d[2] + d[0] + d[1]);
              return k - j;
            })
            .map((postPreview, i) => {
              return (
                (postPreview.tag == filter || filter == "all") ?
                  <div
                    className={styles["doc-card"]}
                    key={i}>
                    <DocCard docPreview={postPreview} />
                  </div>
                  : null
              )
            })}
        </div>
      </div>
    </>
  )
}

export async function getStaticProps() {
  // get all MDX files
  const postFilePaths = fs.readdirSync("src/_docs").filter((postFilePath) => {
    return path.extname(postFilePath).toLowerCase() === ".mdx"
  })

  const postPreviews: DocPreview[] = []

  // read the frontmatter for each file
  for (const postFilePath of postFilePaths) {
    const postFile = fs.readFileSync(`src/_docs/${postFilePath}`, "utf8")

    const serializedPost = await serialize(postFile, {
      parseFrontmatter: true,
    })

    postPreviews.push({
      ...serializedPost.frontmatter,
      slug: postFilePath.replace(".mdx", ""),
    } as DocPreview)
  }

  return {
    props: {
      postPreviews: postPreviews,
    },
    revalidate: 60,
  }
}