"use client";
import { useEffect, useState } from "react";
import axios from "axios";
import { useParams, useRouter } from "next/navigation";

export default function EditBlogPage() {
  const { id } = useParams();
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const router = useRouter();

  useEffect(() => {
    axios.get(`${process.env.NEXT_PUBLIC_API_URL}/posts/${id}`)
      .then(res => {
        setTitle(res.data.title);
        setContent(res.data.content);
      })
      .catch(err => console.error(err));
  }, [id]);

  const handleEditBlog = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      await axios.put(`${process.env.NEXT_PUBLIC_API_URL}/posts/${id}`,
        { title, content },
        { headers: { Authorization: `Bearer ${localStorage.getItem("token")}` } }
      );
      router.push("/manage-blogs");
    } catch {
      alert("Failed to update blog");
    }
  };

  return (
    <div className="max-w-lg mx-auto bg-white p-6 rounded shadow">
      <h1 className="text-2xl font-bold mb-4">Edit Blog</h1>
      <form onSubmit={handleEditBlog} className="space-y-4">
        <input
          type="text"
          placeholder="Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className="w-full p-2 border rounded"
          required
        />
        <textarea
          placeholder="Content"
          value={content}
          onChange={(e) => setContent(e.target.value)}
          className="w-full p-2 border rounded h-40"
          required
        />
        <button type="submit" className="w-full bg-yellow-500 text-white py-2 rounded">
          Update Blog
        </button>
      </form>
    </div>
  );
}
