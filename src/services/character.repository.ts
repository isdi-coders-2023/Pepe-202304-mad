import { Character } from "../models/character";

export class characterRepository {
  url: string;
  constructor() {
    this.url = "https://swapi.dev/api/people/";
  }

  async getAll() {
    const response = await fetch(this.url);
    if (!response.ok) {
      const message = `Error: ${response.status}. ${response.statusText}`;
      throw new Error(message);
    }

    const characterList = await response.json();
    return characterList.results;
  }

  async getCharacter(url: Character["url"]) {
    const response = await fetch(url);
    const search = await response.json();
    const character: Character = {
      id: search.url.split("/")[5],
      name: search.name,
      height: search.height,
      image:
        "https://starwars-visualguide.com/assets/img/characters/" +
        search.url +
        ".jpg",
      mass: search.mass,
      hair_color: search.hair_color,
      eye_color: search.eye_color,
      birth_year: search.birth_year,
      gender: search.gender,
      homeworld: search.homeworld,
      url: search.url,
    };
    return character;
  }
}
