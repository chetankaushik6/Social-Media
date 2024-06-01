import { createContext, useCallback, useReducer } from "react";


export const PostList = createContext({
   postList : [],
   addPost : () => {},
   addInitialPost : ()=>{},
   deletePost : () => {},

});

const postListReducer = (currentPostList, action) =>{
    const newPostList = currentPostList;
    if(action.type === "DELETE_POST"){
      return newPostList.filter((post)=>{
            return post.id !== action.payload.postId;
       })
    }
    else if(action.type === "ADD_POST"){
       return [action.payload,...newPostList];
    }
 
    else if(action.type === "ADD_INITIAL_POST"){
      return action.payload.posts;
   }


   return newPostList;
}

// const postListReducer = (currentPostList, action) => {
//    if (action.type === "DELETE_POST") {
//        return currentPostList.filter((post) => {
//            return post.id !== action.payload.postId;
//        });
//    }
//    return currentPostList;
// }

const PostListProvider = ({children}) =>{
   
   // const [postList,dispatchPostList] =useReducer(postListReducer,addInitialPost);
   const [postList,dispatchPostList] =useReducer(postListReducer,[]);
   
   
   const addPost =(userId,title,body,reactions,tags) =>{
      //  console.log(`userId: ${userId}\ntitle: ${title} \nbody: ${body} \nreactions: ${reactions} \ntags${tags}`);
      
      dispatchPostList({
         type :"ADD_POST",
         payload:{
            id:Date.now(),
            userId,
            title,
            body,
            reactions,
            tags,
         }
      })
   }

   const addInitialPost =(posts) =>{
      
      dispatchPostList({
         type :"ADD_INITIAL_POST",
         payload:{
            posts,
         }
      })
   }

   const deletePost = useCallback((postId) =>{
      //  console.log('post id :' +postId);
      dispatchPostList({
            type: "DELETE_POST",
            payload:{
               postId,
            },
      })
   },[dispatchPostList])
   

   return <PostList.Provider value={{
      postList ,
      addPost,
      addInitialPost,
      deletePost,
   }}>
                     {children}
          </PostList.Provider>
}

// const DEFAULT_POST_LIST = [
//    {
//    id :1,
//    title : "go to mumbai",
//    body : "hi friends ,I'm going to mumbai & I hope to enjoy a lot",
//    reactions: 0,
//    userId : 1,
//    tags :["vacation","mumbai","enjoying"],
//    },
//       {
//       id :2,
//       title : "pass ho gye",
//       body : "itni masti k baad bhi paas ho gye it,s unbelievable for me ",
//       reactions: 15,
//       userId : 2,
//       tags :["graduate","unbelievable","enjoying "],
//       }
   

// ];

export default PostListProvider