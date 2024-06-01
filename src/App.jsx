import React from 'react'
import './App.css'
import Header from './Components/Header'
import 'bootstrap/dist/css/bootstrap.min.css';
import Footer from './Components/Footer';
import SideBar from './Components/SideBar';
import CreatePost from './Components/CreatePost';
import PostList from './Components/PostList';
import {useState} from 'react';
import PostListProvider from './store/post-list-store';

const App = () => {
  const [selectedTab,setSelectedTab] = useState("Home");

  return (
    <PostListProvider>
    <div className='app-container'>
      <SideBar selectedTab={selectedTab} setSelectedTab={setSelectedTab}/>
         <div className='content'>
             <Header/>
             {
                selectedTab === "Home" ?  <PostList/> : <CreatePost/>
             }
             
            
             <Footer/>
        </div>
    </div>
    </PostListProvider>
  )
}

export default App
