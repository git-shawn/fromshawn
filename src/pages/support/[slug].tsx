import fs from "fs"
import { join } from 'path';
import { GetStaticPaths, GetStaticProps } from 'next';
import { ParsedUrlQuery } from "querystring"
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

const POSTS_PATH = join(process.cwd(), '/src/_docs');
export interface ArticleProps extends ParsedUrlQuery {
  slug: string;
}

export const getStaticPaths: GetStaticPaths<ArticleProps> = async () => {
  const paths = fs.readdirSync(POSTS_PATH)
    .map((path) => path.replace(/\.mdx?$/, ''))
    .map((slug) => ({ params: { slug } }));

  return {
    paths,
    fallback: false,
  };
};

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