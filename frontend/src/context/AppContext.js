// src/context/AppContext.js
import React, { createContext, useState, useContext, useEffect } from 'react';
import { googleLogout } from "@react-oauth/google";
import { jwtDecode } from "jwt-decode";
import { login, getPosts, getMyPosts, deletePost, updatePost, createPost } from "../apis/apis";

// Create a new context
const AppContext = createContext();

// Create a provider component
export const AppProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [posts, setPosts] = useState([]);
  const [userPosts, setUserPosts] = useState([]);
  const fetchPosts = async () => {
    await getPosts().then(retrievedPosts => setPosts(retrievedPosts));
  };

  const fetchUserPosts = async (owner) => {
    await getMyPosts(owner).then(retrievedPosts => setUserPosts(retrievedPosts));
  };

  const createPostFn = async (post) => {
    await createPost(post);
    await fetchUserPosts(post.owner);
    await fetchPosts();
    
  }

  const deletePostFn = async (owner, post_id) => {
    await deletePost(post_id);
    await fetchUserPosts(owner);
    await fetchPosts();
  };

  const updatePostFn = async (owner, post) => {
    console.log(post)
    await updatePost(post);
    await fetchUserPosts(owner);
    await fetchPosts();
  }

  useEffect(() => {
    if (user) {
      fetchUserPosts(user._id);
    }
    fetchPosts();
  }, [user]);

  const loginUser = async (loginObject) => {
    const userObj = jwtDecode(loginObject.credential);
    const loginResponse = await login({ name: userObj.name, email: userObj.email, picture: userObj.picture});
    if (!loginResponse) {
      setUser(null);
    } else {
      setUser(loginResponse)
    }
  };

  const logoutUser = () => {
    googleLogout();
    setUser(null);
  };


  return (
    <AppContext.Provider value={
      { user, loginUser, logoutUser, fetchPosts, posts, userPosts, setUserPosts, deletePostFn,
        updatePostFn, createPostFn }
      }>
      {children}
    </AppContext.Provider>
  );
};

// Custom hook to consume the context
export const useAppContext = () => useContext(AppContext);
