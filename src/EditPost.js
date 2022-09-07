import { useParams } from "react-router-dom"
const EditPost = ({editTitle,setEditTitle,editBody,setEditBody,handleUpdate}) => {
    const id = useParams().id
    return (
      <form className="new" onSubmit={(e)=>e.preventDefault()}>
          <label>enter tilte:</label>
          <input type="text" placeholder="enter title" required value={editTitle} onChange={(e)=>setEditTitle(e.target.value)}></input>
          <label>enter body:</label>
          <textarea placeholder="enter body" value={editBody} onChange={(e)=>setEditBody(e.target.value)}></textarea>
          <button className="edit-btn" onClick={(e)=>handleUpdate(id,e)}>Edit Post</button>
      </form>
    )
  }
  
  export default EditPost