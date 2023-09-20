// components/Forum.tsx

"use client";
import React, { useState } from "react";

export default function Form() {
  const [posts, setPosts] = useState<string[]>([]);
  const [newPost, setNewPost] = useState<string>("");

  const handleAddPost = () => {
    if (newPost.trim() !== "") {
      setPosts([...posts, newPost]);
      setNewPost("");
    }
  };

  return (
    <div>
      <h1>Forum</h1>
      <div>
        <input
          type="text"
          placeholder="Enter your post..."
          value={newPost}
          onChange={(e) => setNewPost(e.target.value)}
        />
        <button onClick={handleAddPost}>Add Post</button>
      </div>
      <div>
        {posts.map((post, index) => (
          <div key={index}>{post}</div>
        ))}
      </div>
    </div>
  );
}
