"use client"
import Image from "next/image";

import Link from "next/link";
import { useEffect, useState } from "react";






export default function Home() {

  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        const data = await fetch("http://localhost:3000/api/blogs"); // URL'nin doğru formatta olduğundan emin olun
        const dataJson = await data.json();
        setBlogs(dataJson); // blogs'u güncelle
      } catch (error) {
        console.error("Veri çekme hatası:", error);
      }
    };

    fetchBlogs(); // async işlevi çağır
  }, []);


  const handleDelete = async (id) => {
    try {
      const response = await fetch(`http://localhost:3000/api/blogs/${id}`, { method: "DELETE" })
      if (response.ok) {
        setBlogs(blogs.filter(blog => blog._id !== id));
      }
      else {
        console.log("silme işlemi hatalı")
      }
    }
    catch (err) {
      console.log(err);
    }
  }


  return (

    <div>
      <h1> blogs</h1>
      <table>
        <thead>
          <tr>
            <th>Title</th>
            <th>Author</th>
            <th>Date</th>
            <th>Action</th>
            <th>Delete</th>
          </tr>
        </thead>
        <tbody>
          {blogs.map((b, index) => (
            <tr key={index}>
              <td>{b.title}</td>
              <td>{b.author}</td>
              <td>{b.createdAt}</td>
              <td>
                <Link href={`/${b._id}`}>İçeriğe git</Link>
              </td>
              <td>
                <button onClick={() => handleDelete(b._id)} >Delete Blog</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div >
  );
}
