import type { BlogPost } from "../types/blogPost";

const getPosts = (): BlogPost[] => {
  const posts = Object.values(
    import.meta.glob("../pages/posts/*.md", { eager: true }),
  ) as BlogPost[];
  return posts.toSorted((a, b) =>
    b.frontmatter.published.localeCompare(a.frontmatter.published),
  );
};

export default getPosts;
