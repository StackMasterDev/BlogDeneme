

const page = async ({ params }) => {

    const res = await fetch(`http://localhost:3000/api/blogs/${params.id}`)

    const blog = await res.json();

    return (
        <div>

            <div>
                yazar: {blog.author}
            </div>
            <div>
                başlık : {blog.title}
            </div>
            <div>
                içerik: {blog.content}
            </div>

        </div>


    )
}

export default page;