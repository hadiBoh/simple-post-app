import Header from './Header'
import Nav from './Nav'
import Home from './Home'
import AddPost from './AddPost'
import EditPost from './EditPost'
import PostPage from './PostPage'
import Missing from './Missing'
import About from './About'
import Footer from './Footer'
import { useState , useEffect } from 'react'
import {Route,Routes,useNavigate} from 'react-router-dom'

function App() {
  const [searchbar,setSearchbar] = useState("")
  const [searchedItems,setSearchedItems] = useState([])
  const [title,setTitle] = useState('')
  const [body,setBody] = useState('')
  const [editTitle,setEditTitle] = useState('')
  const [editBody,setEditBody] = useState('')
  const [posts, setPosts] = useState([
    {
      id: 1,
      title: "First Title",
      datetime: "3/21/2022",
      body: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique libero dicta sunt rem. Dolore cum ad maxime? Aperiam vitae nemo, atque obcaecati sapiente laudantium maxime illum omnis. Tenetur, placeat porro."
    },
    {
      id: 2,
      title: "Second Title",
      datetime: "9/24/2020",
      body: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique libero dicta sunt rem. Dolore cum ad maxime? Aperiam vitae nemo, atque obcaecati sapiente laudantium maxime illum omnis. Tenetur, placeat porro."
    },
    {
      id: 3,
      title: "third Title",
      datetime: "3/21/2002",
      body: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique libero dicta sunt rem. Dolore cum ad maxime? Aperiam vitae nemo, atque obcaecati sapiente laudantium maxime illum omnis. Tenetur, placeat porro."
    },
    {
      id: 4,
      title: "Forth Title",
      datetime: "9/24/2017",
      body: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique libero dicta sunt rem. Dolore cum ad maxime? Aperiam vitae nemo, atque obcaecati sapiente laudantium maxime illum omnis. Tenetur, placeat porro."
    },
    {
      id: 5,
      title: "Fifth Title",
      datetime: "9/14/2015",
      body: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique libero dicta sunt rem. Dolore cum ad maxime? Aperiam vitae nemo, atque obcaecati sapiente laudantium maxime illum omnis. Tenetur, placeat porro."
    }
  ])
  
  const history = useNavigate()
  function handleDelete(id){
    const remaningPosts = posts.filter(post=> post.id !== parseInt(id)) 
    setPosts(remaningPosts)
    history("/")
  }
  useEffect(()=>{
    const filteredItems = posts.filter(post=> post.title.toLocaleLowerCase().includes(searchbar.toLocaleLowerCase()) || post.body.toLocaleLowerCase().includes(searchbar.toLocaleLowerCase()))
    setSearchedItems(filteredItems)
  },[searchbar,posts])

  function handleSubmit(e){
    e.preventDefault()
    if (title === "" ) {
      alert('title cant be empty')
      return
    }
    const nextid = posts.length > 0 ? posts[posts.length-1].id +1 : 1
    const day = new Date().getDay()
    const month = new Date().getMonth()
    const year = new Date().getFullYear()

    const newpost = {id:nextid,
                      title:`${title}`,
                      datetime:`${month}/${day}/${year}`,
                      body:`${body}`
                    }
    setPosts([...posts,newpost])
    setTitle("")
    setBody("")
    history("/")
  }
  function populate(id){
    const post = posts.find(post=> post.id === id)
    setEditTitle(post.title)
    setEditBody(post.body)
  }
  function handleUpdate(id,e){
    e.preventDefault()
    if (editTitle === "" ) {
      alert('title cant be empty')
      return
    }
    const day = new Date().getDay()
    const month = new Date().getMonth()
    const year = new Date().getFullYear()
    const editid = parseInt(id)
    const newpost = {id:editid,
      title:`${editTitle}`,
      datetime:`${month}/${day}/${year}`,
      body:`${editBody}`
    }
    
    const result = posts.map(post=> post.id === editid ? newpost : post)
    setPosts(result)
    setEditTitle("")
    setEditBody("")
    history("/")
  }
  return (
    <div className="App">
      <Header/>
      <Nav searchbar={searchbar} setSearchbar={setSearchbar}/>
      <Routes>
        <Route path='/' element={<Home posts={searchedItems} />}/>
        <Route path='/post' element={<AddPost
          title={title} setTitle={setTitle} body={body} setBody={setBody} handleSubmit={handleSubmit}
        />}/>
        <Route path='/edit/:id' element={<EditPost
          editTitle={editTitle} setEditTitle={setEditTitle} editBody={editBody} setEditBody={setEditBody} handleUpdate={handleUpdate}
        />}/>
        <Route path='/post/:id' element={<PostPage posts={posts}  handleDelete={handleDelete} populate={populate}/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='*' element={<Missing/>}/>
      </Routes>
      <Footer/>
    </div>
  );
}

export default App;
