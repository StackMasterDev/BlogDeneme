"use client"
import { useRouter } from "next/navigation";
import { useState } from "react";
export default function page() {
    const [formData, setFormData] = useState({ title: "", content: "", author: "" });

    const router = useRouter();

    const handleSubmit = async (e) => {
        e.preventDefault();

        const res = await fetch("/api/blogs", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(formData),
        });


        if (res.ok) {
            router.push("/")
        }

    }
    return (
        <div>
            <form onSubmit={handleSubmit}>
                <h1>blog ekle</h1>
                <input
                    type="text"
                    placeholder="başlık"
                    value={formData.title}
                    onChange={(e) => setFormData({ ...formData, title: e.target.value })}
                />
                <input
                    type="text"
                    placeholder="yazar"
                    value={formData.author}
                    onChange={(e) => setFormData({ ...formData, author: e.target.value })}
                />

                <textarea
                    placeholder="içerik"
                    value={formData.content}
                    onChange={(e) => setFormData({ ...formData, content: e.target.value })}
                />
                <button type="submit"> Gönder</button>
            </form>
        </div>
    )
}