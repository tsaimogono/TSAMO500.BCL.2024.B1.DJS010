import { useState, useEffect } from "react";

// Custom hook to fetch posts from API
export const useFetchPosts = () => {
  // Initialize state variables for posts, error, and loading status
  const [posts, setPosts] = useState([]);
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  
  // effect hook to fetch posts when component mounts
  useEffect(() => {
    const fetchPosts = async () => {
      setIsLoading(true)
      try {
        // Fetch posts from API
        const response = await fetch(
          "https://jsonplaceholder.typicode.com/posts"
        );