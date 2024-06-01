import React from 'react'
import { useRef } from 'react';
import PostListProvider from '../store/post-list-store';
import { useContext } from 'react';
import { PostList } from '../store/post-list-store';

const CreatePost = () => {
  const {addPost} = useContext(PostList);

   const userIdElement= useRef();
   const postTitleElement= useRef();
   const postBodyElement= useRef();
   const reactionsElement= useRef();
   const tagsElement= useRef();   

   const handleSubmit = (event) =>{
         event.preventDefault();
       
          const userId = userIdElement.current.value;
          const title = postTitleElement.current.value;
          const body = postBodyElement.current.value;
          const reactions =reactionsElement.current.value;
          // let tags = tagsElement.current.value.split(/(\s+)/);
          const tags = tagsElement.current.value.split(" ");

          userIdElement.current.value="";
          postTitleElement.current.value="";
          postBodyElement.current.value="";
          reactionsElement.current.value="";
          tagsElement.current.value="";

           addPost(userId,title,body,reactions,tags);

        }

  return (
    <form className='create-post' onSubmit={handleSubmit}>
      
  <div className="mb-3">
    <label htmlFor="userId" className="form-label">Enter Your User Id here</label>
    <input type="text"
     ref={userIdElement} 
    className="form-control" 
    placeholder='Your UserId'
    id="userId"
    />
  </div>

  <div className="mb-3">
    <label htmlFor="title" className="form-label">Post Title</label>
    <input type="text"
    ref={postTitleElement} 
    className="form-control" 
    placeholder='how are you feeling today ...'
    id="title"
    />
  </div>
  
  <div className="mb-3">
    <label htmlFor="body" className="form-label">Post Content</label>
    <textarea type="text" rows={4} 
    className="form-control"
    ref={postBodyElement} 
    placeholder='Tell us more about it ...'
    id="body"
    />
  </div>

  
  <div className="mb-3">
    <label htmlFor="reactions" className="form-label">Number of Reactions</label>
    <input type="text"
    ref={reactionsElement} 
    className="form-control" 
    placeholder='how many people reacted on your post ...'
    id="reactions"
    />
  </div>

  <div className="mb-3">
    <label htmlFor="tags" className="form-label">Enter your hastags here</label>
    <input type="text"
    ref={tagsElement} 
    className="form-control" 
    placeholder=' Please Enter tags using space ...'
    id="tags"
    />
  </div>

  <button type="submit" className="btn btn-primary">Post</button>
</form>
  )
}

export default CreatePost
