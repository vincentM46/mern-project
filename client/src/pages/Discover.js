import BlogPosts from '../components/BlogPosts';

function AboutPage() {
    const [BlogPosts, setBlogPosts] = useState([]);
    // const { search } = useLocation();

    useEffect(() => {
        const fetchBlogPosts = async () => {
            const res = await axios.get("/posts")
            setBlogPosts(res.data)
        }
        fetchBlogPosts()
    }, [])
    return (
        <div>
            <BlogPosts/>
        </div>
    )
}

export default AboutPage;