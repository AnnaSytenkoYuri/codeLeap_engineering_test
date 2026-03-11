export interface Post {
  username: string;
  title: string;
  content: string;
  created_datetime: string;
  author_ip: string;
}

export interface CreatePostTDO {
  username: string;
  title: string;
  content: string;
}

export interface PostResponse {
  count: number;
  next: string | null;
  previous: string | null;
  results: Post[];
}
