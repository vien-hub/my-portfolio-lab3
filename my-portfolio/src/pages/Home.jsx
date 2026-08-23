import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div>
      <h1>Welcome to My Portfolio</h1>
      <p>Hi, I'm a developer building modern web applications.</p>
      <Link to="/projects">Explore My Projects →</Link>
    </div>
  );
}