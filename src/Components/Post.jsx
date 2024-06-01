import React, { useContext } from 'react'
import { MdDelete } from "react-icons/md";
import { PostList } from '../store/post-list-store';

const Post = ({post}) => {
  const {deletePost}= useContext(PostList);
  return (
    <div className="card post-card" style={{width: "30rem"}}>
    <div className="card-body">
      <h5 className="card-title">{post.title}</h5>
      <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger" onClick={()=>deletePost(post.id)}>
      <MdDelete />
    {/* <span className="visually-hidden">unread messages</span> */}
    </span>
      <p className="card-text">{post.body}</p>
      {/* <a href="#" className="btn btn-primary">Go somewhere</a> */}
      {
         post.tags.map((tag)=>{
          return(
            <span key={tag} className="badge text-bg-primary hastag">{tag}</span>
            )
         })
      }
      <div className="alert alert-warning reaction" role="alert">
  This post has been reacted by {post.reactions} person
</div>
      
    </div>
  </div>
  )
}

export default Post
