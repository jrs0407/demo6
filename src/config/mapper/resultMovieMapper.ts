import { ResultMovies } from "../entities/ResultMovies";
import { MoviesResponse, Result } from "../Responses/dataMovies";
import { movieMapper } from "./movieMapper";


export const resultMovieMapper = (item : MoviesResponse) : ResultMovies => {
    return {
        total: item.total_pages,
        page: item.page,
        movies: item.results.map((item: Result) => movieMapper(item)),
    };
}