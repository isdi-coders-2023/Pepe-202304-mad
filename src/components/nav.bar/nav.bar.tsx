export default function NavBar() {
  return (
    <>
      <nav className="nav-bar">
        <ul>
          <li>
            <button className="create-button">Create</button>
          </li>
          <li>
            <button className="favorite-button">Favorite</button>
          </li>
          <li>
            <select className="filter-button">
              <option value="film">Film</option>
              <option value="homeworld">Homeworld</option>
            </select>
          </li>
        </ul>
      </nav>
    </>
  );
}
