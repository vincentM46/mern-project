import { useEffect, useState } from 'react';
import BlogPosts from "../components/BlogPosts";
import Header from "../components/Header";
import axios from 'axios';
import { useLocation } from 'react-router-dom';

function HomePage() {
    const [posts, setPosts] = useState([]);
    const { search } = useLocation();

    useEffect(() => {
        const fetchPosts = async () => {
            const res = await axios.get("/posts" + search)
            setPosts(res.data)
        };
        fetchPosts()
    }, [search])
    return (
        <div>
            <Header/>
            <div className="blogBox">
                <BlogPosts posts={posts}/>
            </div>
        </div>
    )
}

export default HomePage;