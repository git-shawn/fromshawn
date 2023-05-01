import DocCard, { DocPreview } from "@/components/docs/doc-preview"
import { useState, useEffect } from "react";
import { useRouter } from 'next/router'
import { InferGetStaticPropsType } from "next"
import fs from "fs"
import { serialize } from "next-mdx-remote/serialize"
import styles from '@/styles/Docs.module.css'
import path from "path"

export default function Home({ postPreviews }: InferGetStaticPropsType<typeof getStaticProps>) {
  const router = useRouter()
  const { tag } = router.query
  const [filter, setFilter] = useState("all");

  useEffect(() => {
    if (tag != undefined) {
      setFilter(tag as string)
    }
  }, [router])

  return (
    <div className={styles["main"]}>
      <div className={styles["doc-filter-bar"]}>
        <select
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
            let j = Number(c[2]+c[0]+c[1]);
            let d = b.date.split('/').reverse();
            let k = Number(d[2]+d[0]+d[1]);
            console.log("first: " + j);
            console.log("second: " + k);
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