import { Database, Tables, Enums } from "@/types/database.types";

// export type PostType = Database["public"]["Tables"]["blog_post"]["Row"];
// export type AuthorType = Database["public"]["Tables"]["blog_author"]["Row"];
// export type CategoryType = Database["public"]["Tables"]["blog_category"]["Row"];

export type PostWithAuthorCategoryType =
  Database["public"]["Tables"]["blog_post"]["Row"] &
    Database["public"]["Tables"]["blog_category"]["Row"] &
    Database["public"]["Tables"]["blog_author"]["Row"];
