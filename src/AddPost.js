
const AddPost = ({title,setTitle,body,setBody,handleSubmit}) => {
  return (
    <form className="new" onSubmit={handleSubmit}>
        <label>enter tilte:</label>
        <input required type="text" placeholder="enter title" value={title} onChange={(e)=>setTitle(e.target.value)}></input>
        <label>enter body:</label>
        <textarea placeholder="enter body" value={body} onChange={(e)=>setBody(e.target.value)}></textarea>
        <button className="add-btn" onClick={handleSubmit}>Add Post</button>
    </form>
  )
}

export default AddPost