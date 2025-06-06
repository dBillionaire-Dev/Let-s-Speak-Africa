
export interface Author {
  name: string;
  image?: string;
  social?: string;
}

export interface BlogPost {
  id: string; // Changed from number to string for UUID
  title: string;
  excerpt: string;
  content: string;
  author: Author;
  date: string;
  readTime: string;
  category: string;
  image: string;
  likes: number;
  published: boolean;
}

export interface Comment {
  id: string; // Changed from number to string for UUID
  postId: string; // Changed from number to string for UUID
  author: string;
  content: string;
  date: string;
  isAnonymous: boolean;
}
