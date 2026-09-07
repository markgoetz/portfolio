import type { BlogPost } from "../types/blogPost";

const getPosts = (): BlogPost[] => {
  const posts = Object.values(
    import.meta.glob("../pages/posts/*.md", { eager: true }),
  );
  return posts as BlogPost[];
};

export default getPosts;
