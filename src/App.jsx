import { useFetchPosts } from "./utils/fetchPosts";
import "./App.css";

function App() {
  // Destructured the posts, error, and isLoading states from the useFetchPosts hook
  const { posts, error, isLoading } = useFetchPosts();

  // If the data is still loading, display a "Loading..." message
  if (isLoading) {
    return <h1 className="loading-indicator">Loading...</h1>;
  }

  // If there's an error, display an error message
  if (error) {
    return <h1 className="error-message">Data fetching failed</h1>;
  }
