

function Post() {
    return (
        <div className="createBlog">
            <form className="createBlogPost">
                <div className="createBlogButtons">
                    <label htmlFor="fileInput" className="imageButton"></label>
                    <input type="file" className="fileUpload"></input>
                    <input type="text" placeholder="Blog Post Title Here" className="createBlogTitle"></input>
                </div>
                <div className="createBlogContent">
                    <textarea placeHolder="Start typing!" type="text" className="blogContent2"></textarea>
                </div>
                <button className="submitButton">Finalize your story!</button>
            </form>
        </div>
    )
}

export default Post;