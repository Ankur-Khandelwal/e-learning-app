import App from "/src/App";
import Login from "./Login";

export default function Nav() {
  return (
    <nav>
      <div class="nav-logo">
        <img src="#" alt="e-learning app logo" />
      </div>
      <div class="nav-search">
        <select name="Categories" id="course-selection">
          <option>All</option>
          <option>Course 1</option>
          <option>Course 2</option>
          <option>Course 3</option>
          <option>Course 4</option>
        </select>
        <input type="text" name="search" id="search-bar" />
      </div>
      <div>
        <a href={<App />} id="nav-item">
          instructor mode
        </a>
      </div>
      <div>
        <a href={<Login />} id="nav-item">
          Account/login
        </a>
      </div>
    </nav>
  );
}
