import "./styles/post.css";
import "./styles/suggestions.css";
import "./styles/navbar.css";
import "./styles/details.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "./components/Navbar";
import Details from "./components/Details";
import Suggestions from "./components/Suggestions";
import CreatePost from "./components/CreatePost";
import Posts from "./components/Posts";

export default function App() {
  return (
    <div>
      <Navbar />
      <Details />
      <Suggestions />
      <div style={{ width: "600px", margin: "0 auto" }}>
        <CreatePost />
        <Posts />
      </div>
    </div>
  );
}
/*{loading && "Loading..."}
<p style={{ color: "red" }} role="alert">
{error}
</p>*/
