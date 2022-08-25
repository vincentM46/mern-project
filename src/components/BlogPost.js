import cat from '../images/cat.png';

function BlogPost() {
    return (
        <div className="blogPost">
            <img className="blogImage" alt="" src={cat}/>
            <div className="blogInfo">
                <div className="blogTags">
                    <span>Music</span>
                    <span>Life</span>
                </div>
                <span className="blogTitle">asdfsafsaoidfsaofasofa</span>
                <hr/>
                <span className="blogTime">1 hour ago</span>
                <p className="blogContent">Lorem ipsum asdfasdfasfasdfasLorem ipsum asdfasdfasfasdfasLorem ipsum asdfasdfasfasdfasLorem ipsum asdfasdfasfasdfasLorem ipsum asdfasdfasfasdfasLorem ipsum asdfasdfasfasdfasLorem ipsum asdfasdfasfasdfasLorem ipsum asdfasdfasfasdfasLorem ipsum asdfasdfasfasdfasLorem ipsum asdfasdfasfasdfasLorem ipsum asdfasdfasfasdfasLorem ipsum asdfasdfasfasdfasLorem ipsum asdfasdfasfasdfasLorem ipsum asdfasdfasfasdfasLorem ipsum asdfasdfasfasdfasLorem ipsum asdfasdfasfasdfasLorem ipsum asdfasdfasfasdfasLorem ipsum asdfasdfasfasdfasLorem ipsum asdfasdfasfasdfasLorem ipsum asdfasdfasfasdfasLorem ipsum asdfasdfasfasdfasLorem ipsum asdfasdfasfasdfasLorem ipsum asdfasdfasfasdfasLorem ipsum asdfasdfasfasdfasLorem ipsum asdfasdfasfasdfasLorem ipsum asdfasdfasfasdfasLorem ipsum asdfasdfasfasdfasLorem ipsum asdfasdfasfasdfasLorem ipsum asdfasdfasfasdfasLorem ipsum asdfasdfasfasdfasLorem ipsum asdfasdfasfasdfasLorem ipsum asdfasdfasfasdfasLorem ipsum asdfasdfasfasdfasLorem ipsum asdfasdfasfasdfasLorem ipsum asdfasdfasfasdfasLorem ipsum asdfasdfasfasdfas</p>
            </div>
        </div>
    )
}

export default BlogPost;