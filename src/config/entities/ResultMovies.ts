import { Movie } from "./Movie";

export interface ResultMovies {
    total: number;
    page : number;
    movies: Movie[];
}