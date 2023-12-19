export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
}

export interface category {
  name: string;
}

export interface author {
  name: string;
  photo_url: string;
}

export interface BlogPostProps {
  post: {
    created_at: Date;
    title: string;
    image: string;
    content: string;
    excerpt: string;
    category: category;
    blog_author: author;
  };
}

export interface BlogPost {
  created_at: Date;
  title: string;
  image: string;
  content: string;
  excerpt: string;
  author: string;
  author_photo: string;
  category: string;
}
