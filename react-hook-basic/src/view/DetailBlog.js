import { useParams } from "react-router-dom";
import { useHistory } from "react-router-dom";

const DetailBlog = () => {
    let {id} = useParams();
    let history = useHistory();
    const handleBackData = () => {
        history.push('/blog');
    }
    return(
        <>
        <div>{id}</div>
        <br />
        <div onClick= {handleBackData}>&lt;-- Back</div>
        </>
    )
}

export default DetailBlog;