// lib/api.js

import fs from 'fs';
import { join } from 'path';
import matter from 'gray-matter';

const postsDirectory = join(process.cwd(), "src/_docs/");

export function getPostSlugs(path) {
    const fullPath = join(postsDirectory, path);
    return fs.readdirSync(fullPath);
}

export function getPostBySlug(slug, fields, path) {
    const dirPath = join(postsDirectory, path);
    const realSlug = slug.replace(/\.md$/, "");
    const fullPath = join(dirPath, `${realSlug}.md`);
    try {
        const fileContents = fs.readFileSync(fullPath, "utf8");
        const { data, content } = matter(fileContents);
        const items = {};

        fields.forEach((field) => {
            if (field === "slug") {
                items[field] = realSlug;
            }

            if (field === "content") {
                items[field] = content;
            }

            if (typeof data[field] !== "undefined") {
                items[field] = data[field];
            }
        });

        return items;

    } catch (err) {
        return null;
    }
}

export function getAllPosts(fields, path) {
    const slugs = getPostSlugs(path);
    const posts = slugs
        .map((slug) => getPostBySlug(slug, fields, path))
        .filter(n => n)
        .sort((post1, post2) => (post1.date > post2.date ? -1 : 1));
    return posts;
}