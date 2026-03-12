import axios from "axios";
import type { CreatePostTDO, PostResponse } from "../types/post";

const API_URL = "https://dev.codeleap.co.uk/careers/";

export const api = axios.create({
  baseURL: API_URL,
  headers: {
    "Content-Type": "application/json",
  },
});

export async function getPost() {
  const { data } = await api.get<PostResponse>("");
  return data.results;
}

export async function createPost(post: CreatePostTDO) {
  await api.post("", post);
}


export async function deletePost(id: number) {
  await api.delete(`${id}/`);
}

export async function updatePost(id: number, title: string, content: string) {
  await api.patch(`${id}/`, {
    title,
    content,
  });
}

