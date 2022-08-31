import axios from 'axios';
import { useContext, useState, useEffect } from 'react';
import { Context } from '../context/Context';

function Post() {
    const [title, setTitle] = useState("")
    const [content, setContent] = useState("")
    const [file, setFile] = useState(null)
    const { user } = useContext(Context)
    const handleSubmit = async (event) => {
        event.preventDefault();
        const newPost = { username: user.username, title, content }
        if(file) {
            const data = new FormData();
            const fileName = Date.now() + file.name;
            data.append("name", fileName)
            data.append("file", file)
            newPost.postImage = fileName
            try {
                await axios.post("/upload", data)
            } catch (error) {

            }
            try {
                const res = await axios.post("/posts", newPost);
                window.location.replace("/post/" + res.data._id)
            } catch (error) {

            }
    }
    }
    
    return (
        <div className="createBlog">
            {file && (
                <img className="blogImage" src={URL.createObjectURL(file)} alt="" />
            )}
            <form className="createBlogPost" onSubmit={handleSubmit}>
                <div className="createBlogButtons">
                    <label htmlFor="fileInput" className="imageButton"></label>
                    <input type="file" className="fileUpload" onChange={event => setFile(event.target.files[0])}></input>
                    <input type="text" placeholder="Blog Post Title Here" className="createBlogTitle" onChange={event => setTitle(event.target.value)}></input>
                </div>
                <div className="createBlogContent">
                    <textarea placeHolder="Start typing!" type="text" className="blogContent2" onChange={event => setContent(event.target.value)}></textarea>
                </div>
                <button className="submitButton" type="submit">Finalize your story!</button>
            </form>
        </div>
    )
}

export default Post;