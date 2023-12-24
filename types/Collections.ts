import { Database } from "@/types/database.types";

export type PostType = Database["public"]["Tables"]["blog_post"]["Row"];
export type CategoryType = Database["public"]["Tables"]["blog_category"]["Row"];
export type AuthorType = Database["public"]["Tables"]["blog_author"]["Row"];

export interface PostWithAuthorCategoryType
  extends Omit<PostType, "author" | "category"> {
  blog_author: AuthorType;
  category: CategoryType;
}
