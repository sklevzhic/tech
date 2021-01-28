import Post from "./Post";

const Posts = (props) => {

    return (
        <div className="row">
            <Post posts={props.posts}/>
        </div>
    )
}
export default Posts