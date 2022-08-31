import { Link } from 'react-router-dom';

function BlogPost({post}) {
    const PF = "localhost:5000/images/"
    return (
        <div className="blogPost">
            {post.photo && (
                <img className="blogImage" src={PF + post.postImage} alt="" />
            )}
            <div className="blogInfo">
                <div className="blogTags">
                    {post.categories.map((c) => (
                    <span>
                        {c.name}
                    </span>
                    ))}
                </div>
                <Link className="link" to={`/post/${post._id}`}>
                    <span className="blogTitle">
                        {post.title}
                    </span>
                </Link>
                <hr/>
                <img src ={PF + post.postImage} alt=""/>
                <span className="blogTime">{post.createdAt}</span>
                <p className="blogContent">{post.content}</p>
            </div>
        </div>
    )
}

export default BlogPost;