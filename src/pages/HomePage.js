import BlogPosts from "../components/BlogPosts";
import Header from "../components/Header";

function HomePage() {
    return (
        <div>
            <Header/>
            <div className="homePage">
                <BlogPosts/>
            </div>
        </div>
    )
}

export default HomePage;