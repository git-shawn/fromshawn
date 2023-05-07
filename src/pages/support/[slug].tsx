import fs from "fs"
import path from "path"
import { GetStaticPropsContext, InferGetStaticPropsType } from "next"
import { serialize } from "next-mdx-remote/serialize"
import { MDXRemote } from "next-mdx-remote"
import Head from "next/head"
import React from "react"
import MDXPillButton from "@/components/docs/pill-button"
import MDXDisclaimerText from "@/components/docs/disclaimer-text"
import styles from '@/styles/Docs.module.css'

export default function SupportDocsPage({ source }: InferGetStaticPropsType<typeof getStaticProps>) {
  return (
    <div>
      <Head>
        <title>{source.frontmatter.title as string}</title>
        <meta name="description" content={source.frontmatter.description as string} />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div
        className={`${styles["main"]} ${styles["prominent-title"]}`}>
        <MDXRemote
          {...source}
          components={{
            MDXPillButton,
            MDXDisclaimerText
          }}
        />
      </div>
    </div>
  )
}

export const fetchPostSlugs = () => fs.promises.readdir(path.join(process.cwd(), "src/_docs"));

export async function getStaticPaths() {
  const slugs = await fetchPostSlugs();

  return {
    paths: slugs?.map((slug) => ({ params: { slug } })),
    fallback: false,
  };
}

export async function getStaticProps(
  ctx: GetStaticPropsContext<{
    slug: string
  }>,
) {
  const { slug } = ctx.params!

  const postFile = fs.readFileSync(`src/_docs/${slug}.mdx`)

  const mdxSource = await serialize(postFile, { parseFrontmatter: true })
  return {
    props: {
      source: mdxSource,
    },
    revalidate: 60,
  }
}