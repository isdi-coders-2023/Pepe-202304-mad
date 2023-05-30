export default function NavBar() {
  return (
    <>
      <nav className="nav-bar">
        <ul>
          <li className="create-button"></li>
          <button>Create</button>
          <li className="favorite-button">
            <button>Favorite</button>
          </li>
          <li className="filter-button">
            <select>
              <option value="film">Film</option>
              <option value="homeworld">Homeworld</option>
            </select>
          </li>
        </ul>
      </nav>
    </>
  );
}
