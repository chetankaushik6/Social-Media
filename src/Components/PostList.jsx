import React, { useState } from 'react'
import Post from './Post'
import { PostList as postListData } from "../store/post-list-store";
import { useContext, useEffect } from 'react';
import WelcomeMsg from './WelcomeMsg';
import LoadingSpinner from './LoadingSpinner';



const PostList = () => {
    const {postList,addInitialPost}= useContext(postListData);
   const [fetching,setFetching] = useState(false);

   useEffect(()=>{
    
    const controller = new AbortController();
    const signal =controller.signal;
    
    setFetching(true);
     console.log('fetching started');

     fetch('https://dummyjson.com/posts')
       .then(res => res.json())
       .then(data => {
        // console.log(data.posts);
        addInitialPost(data.posts);
        // addInitialPost([]);
         console.log('fetching done')
         setFetching(false);
        });
      
       console.log('fetching ended');
   
      return()=>{
               console.log('Clean up ...');
               controller.abort();  
          }
      },[])
    


    // const onGetPostClick = () =>{
               
    //   fetch('https://dummyjson.com/posts')
    //  .then(res => res.json())
    //   .then(data => addInitialPost(data.posts));
    // }
    // console.log(postList);
    return (
    <div>
      {/* { postList.length === 0 ? <WelcomeMsg onGetPostClick={onGetPostClick}/> : null} */}
      { fetching && <LoadingSpinner/> }
      {/* <LoadingSpinner/> */}
      { !fetching && postList.length === 0 ? <WelcomeMsg/> : null}

      { !fetching &&
         postList.map((post)=>{
             return <Post key={post.id} post={post}/>
         })
      }
    </div>
  )
}


export default PostList



