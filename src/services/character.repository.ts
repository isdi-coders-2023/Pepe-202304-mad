import { Character } from "../models/character";
import { ApiResponse } from "./types";

export class characterRepository {
  localUrl: string;
  constructor() {
    this.localUrl = "http://localhost:3000/books/characters/";
  }

  async getAll(url: string) {
    const response = await fetch(url);
    if (!response.ok) {
      const message = `Error: ${response.status}. ${response.statusText}`;
      throw new Error(message);
    }

    const characterList = await response.json();

    return characterList as ApiResponse;
  }

  async getCharacter(url: Character["url"]) {
    const response = await fetch(url);
    const search = await response.json();

    const homeworldResponse = await fetch(search.homeworld);
    const homeworldData = await homeworldResponse.json();

    const character: Character = {
      id: Number(search.url.split("/")[5]),
      name: search.name,
      height: search.height,
      image:
        "https://starwars-visualguide.com/assets/img/characters/" +
        search.url.split("/")[5] +
        ".jpg",
      mass: search.mass,
      hair_color: search.hair_color,
      eye_color: search.eye_color,
      birth_year: search.birth_year,
      gender: search.gender,
      homeworld: homeworldData.name,
      url: search.url,
    };
    return character as Character;
  }

  async create(item: Character) {
    const response = await fetch(this.localUrl, {
      method: "POST",
      body: JSON.stringify(item),
      headers: { "Content-Type": "application/json" },
    });
    return response.json();
  }

  async update(id: Character["id"], item: Character) {
    const response = await fetch(this.localUrl + id, {
      method: "PATCH",
      body: JSON.stringify(item),
      headers: { "Content-Type": "application/json" },
    });
    return response.json();
  }

  async delete(id: Character["id"]) {
    const response = await fetch(this.localUrl + id, {
      method: "DELETE",
    });
    return response.ok;
  }
}
