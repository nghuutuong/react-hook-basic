import useFetch from "../customize/fetch";
import "./Blog.scss"
import { Link } from "react-router-dom";
const Blog = () => {
    
    const {data: dataBlog, isError, isLoading} = 
    useFetch(`https://jsonplaceholder.typicode.com/posts`, false)
    let newDataBlog = [];
    if(dataBlog && dataBlog.length > 0){
        newDataBlog = dataBlog.slice(0, 10)
    }
    return(
        <>
            <div className="container">
            {newDataBlog && newDataBlog.length >0 && newDataBlog.map((item, index) => {
                return(
                    <div className="blog-single">
                        <div className="blog-index">Blog {index + 1}</div>
                        <div className="blog" key={item.id}>
                            <div className="title">{item.title}</div>
                            <div className="content">{item.body}</div>
                            <button>
                                <Link to={`/blog/${item.id}`}>View Blog</Link>
                                
                            </button>
                        </div>
                    </div>
                )
            })}
            </div>
        </>
    )
}
export default Blog;