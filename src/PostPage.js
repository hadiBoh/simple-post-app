import { useParams, Link } from "react-router-dom"
const PostPage = ({ posts, handleDelete, populate }) => {
  const index = parseInt(useParams().id)
  const post = posts.find(post => post.id === index)

  return (
    <div className='post'>
      {post &&
        <article className="post-wrapper-full">
          <h2 className="post-title">{post.title}</h2>
          <h4 className="post-datetime">{post.datetime}</h4>
          <p className="post-body">{post.body}</p>
          <div className="btn-container">
            <button className="post-delete" onClick={() => handleDelete(index)}>Delete</button>
            <Link to={`../edit/${index}`}><button className="post-edit" onClick={() => populate(index)}>Edit</button></Link>
          </div>
        </article>

      }
      {
        !post &&
        <h2>no such a post</h2>
      }
    </div>
  )
}

export default PostPage