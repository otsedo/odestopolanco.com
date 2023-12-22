export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[]

export interface Database {
  public: {
    Tables: {
      blog_author: {
        Row: {
          bio: string | null
          created_at: string
          email: string
          id: number
          name: string
          password: string
          photo_url: string
        }
        Insert: {
          bio?: string | null
          created_at?: string
          email: string
          id?: number
          name: string
          password: string
          photo_url: string
        }
        Update: {
          bio?: string | null
          created_at?: string
          email?: string
          id?: number
          name?: string
          password?: string
          photo_url?: string
        }
        Relationships: []
      }
      blog_category: {
        Row: {
          created_at: string
          id: number
          name: string
          slug: string
        }
        Insert: {
          created_at?: string
          id?: number
          name: string
          slug: string
        }
        Update: {
          created_at?: string
          id?: number
          name?: string
          slug?: string
        }
        Relationships: []
      }
      blog_comment: {
        Row: {
          comment: string
          created_at: string
          email: string
          id: number
          name: string
        }
        Insert: {
          comment: string
          created_at?: string
          email: string
          id?: number
          name: string
        }
        Update: {
          comment?: string
          created_at?: string
          email?: string
          id?: number
          name?: string
        }
        Relationships: []
      }
      blog_post: {
        Row: {
          author: number
          category: number
          content: string
          created_at: string
          excerpt: string | null
          feature_image: string
          featured: boolean
          id: number
          image: string | null
          published: boolean
          slug: string
          title: string
        }
        Insert: {
          author: number
          category: number
          content: string
          created_at: string
          excerpt?: string | null
          feature_image: string
          featured: boolean
          id?: number
          image?: string | null
          published: boolean
          slug: string
          title: string
        }
        Update: {
          author?: number
          category?: number
          content?: string
          created_at?: string
          excerpt?: string | null
          feature_image?: string
          featured?: boolean
          id?: number
          image?: string | null
          published?: boolean
          slug?: string
          title?: string
        }
        Relationships: [
          {
            foreignKeyName: "blog_post_author_fkey"
            columns: ["author"]
            isOneToOne: false
            referencedRelation: "blog_author"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "blog_post_category_fkey"
            columns: ["category"]
            isOneToOne: false
            referencedRelation: "blog_category"
            referencedColumns: ["id"]
          }
        ]
      }
    }
    Views: {
      [_ in never]: never
    }
    Functions: {
      [_ in never]: never
    }
    Enums: {
      [_ in never]: never
    }
    CompositeTypes: {
      [_ in never]: never
    }
  }
}

export type Tables<
  PublicTableNameOrOptions extends
    | keyof (Database["public"]["Tables"] & Database["public"]["Views"])
    | { schema: keyof Database },
  TableName extends PublicTableNameOrOptions extends { schema: keyof Database }
    ? keyof (Database[PublicTableNameOrOptions["schema"]]["Tables"] &
        Database[PublicTableNameOrOptions["schema"]]["Views"])
    : never = never
> = PublicTableNameOrOptions extends { schema: keyof Database }
  ? (Database[PublicTableNameOrOptions["schema"]]["Tables"] &
      Database[PublicTableNameOrOptions["schema"]]["Views"])[TableName] extends {
      Row: infer R
    }
    ? R
    : never
  : PublicTableNameOrOptions extends keyof (Database["public"]["Tables"] &
      Database["public"]["Views"])
  ? (Database["public"]["Tables"] &
      Database["public"]["Views"])[PublicTableNameOrOptions] extends {
      Row: infer R
    }
    ? R
    : never
  : never

export type TablesInsert<
  PublicTableNameOrOptions extends
    | keyof Database["public"]["Tables"]
    | { schema: keyof Database },
  TableName extends PublicTableNameOrOptions extends { schema: keyof Database }
    ? keyof Database[PublicTableNameOrOptions["schema"]]["Tables"]
    : never = never
> = PublicTableNameOrOptions extends { schema: keyof Database }
  ? Database[PublicTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Insert: infer I
    }
    ? I
    : never
  : PublicTableNameOrOptions extends keyof Database["public"]["Tables"]
  ? Database["public"]["Tables"][PublicTableNameOrOptions] extends {
      Insert: infer I
    }
    ? I
    : never
  : never

export type TablesUpdate<
  PublicTableNameOrOptions extends
    | keyof Database["public"]["Tables"]
    | { schema: keyof Database },
  TableName extends PublicTableNameOrOptions extends { schema: keyof Database }
    ? keyof Database[PublicTableNameOrOptions["schema"]]["Tables"]
    : never = never
> = PublicTableNameOrOptions extends { schema: keyof Database }
  ? Database[PublicTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Update: infer U
    }
    ? U
    : never
  : PublicTableNameOrOptions extends keyof Database["public"]["Tables"]
  ? Database["public"]["Tables"][PublicTableNameOrOptions] extends {
      Update: infer U
    }
    ? U
    : never
  : never

export type Enums<
  PublicEnumNameOrOptions extends
    | keyof Database["public"]["Enums"]
    | { schema: keyof Database },
  EnumName extends PublicEnumNameOrOptions extends { schema: keyof Database }
    ? keyof Database[PublicEnumNameOrOptions["schema"]]["Enums"]
    : never = never
> = PublicEnumNameOrOptions extends { schema: keyof Database }
  ? Database[PublicEnumNameOrOptions["schema"]]["Enums"][EnumName]
  : PublicEnumNameOrOptions extends keyof Database["public"]["Enums"]
  ? Database["public"]["Enums"][PublicEnumNameOrOptions]
  : never
