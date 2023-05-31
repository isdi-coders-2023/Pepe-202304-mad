import { Character } from "../models/character";

export type ApiResponse = {
  results: Character[];
  next: string | null;
  previous: string | null;
};
