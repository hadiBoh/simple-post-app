import { Link } from "react-router-dom";
const Home = ({ posts }) => {

  return (
    <div className="home-post">
      {posts.length > 0 ? posts.map(post => {
        return (
          <article className="post-wrapper" key={post.id}>
            <h2 className="post-title"><Link className="home-post-link" to={`/post/${post.id}`}>{post.title}</Link></h2>
            <h4 className="post-datetime">{post.datetime}</h4>
            <p className="post-body">{post.body.length > 25 ? post.body.slice(0, 25) + "..." : post.body}</p>
          </article>
        )
      })
        : <p>no item to show</p>}

    </div>
  )
}

export default Home