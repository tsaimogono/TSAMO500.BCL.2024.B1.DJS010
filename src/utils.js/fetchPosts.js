import { useState, useEffect } from "react";

// Custom hook to fetch posts from API
export const useFetchPosts = () => {
  // Initialize state variables for posts, error, and loading status
  const [posts, setPosts] = useState([]);
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
