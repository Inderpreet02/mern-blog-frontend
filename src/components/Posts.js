import "./Posts.css"
import Post from "./Post";

const Posts = ({posts}) => {
    console.log(posts);
    return (
        <div className="posts">
            {posts && posts.map((p, __i__) => (
                <Post key={__i__} post={p}/>
            ))}
        </div>
    );
}
 
export default Posts;