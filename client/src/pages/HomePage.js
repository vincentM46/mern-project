import BlogPost from "../components/BlogPost";
import Header from "../components/Header";

function HomePage() {
    return (
        <div>
            <Header/>
            <div className="blogBox">
                <BlogPost/>
                <BlogPost/>
            </div>
        </div>
    )
}

export default HomePage;