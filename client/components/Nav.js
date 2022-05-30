export default function Nav() {
  return (
    <nav>
      <div class="nav-logo">
        <img src="#" alt="e-learning app logo" />
      </div>
      <div class="nav-search">
        <select name="Categories" id="course-selection">
          <option>All</option>
          <option>Category 1</option>
          <option>Category 2</option>
          <option>Category 3</option>
          <option>Category 4</option>
        </select>
        <input type="text" name="search" id="search-bar" />
      </div>
      <div>
        <a href="#">instructor mode</a>
      </div>
      <div>
        <a href="#">Account/login</a>
      </div>
    </nav>
  );
}