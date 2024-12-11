import { Config } from "../config/Config";
import { Movie } from "../config/entities/Movie";
import { movieMapper } from "../config/mapper/movieMapper";
import { Result } from "../config/Responses/dataMovies";
import { HttpError } from "./http/HttpError";
import { HttpFactory } from "./http/HttpFactory";
import { HttpFactory2 } from "./http/HttpFactory2";
import { HttpFetch } from "./http/HttpFetch";

export class FilmAdapter {

    static ROUTES = {
        nowPlaying: "/now_playing",
        popular : "/popular",
    }
/*
    static async getMovies(route: string): Promise<Movie[] | null> {
        

            //Dos posibles factorias implementadas en HttpFactory.ts y HttpFactory2.ts
          
        
        // const http = HttpFactory.build();
        const http = HttpFactory2.build();
        if (!Reflect.has(FilmAdapter.ROUTES, route)) route = FilmAdapter.ROUTES.nowPlaying;
        if (Reflect.has(FilmAdapter.ROUTES, route)) route = FilmAdapter.ROUTES.nowPlaying;
        const movies = await http.getFilms(route);
        if (movies instanceof HttpError) return null;
        const dataMovies = movies.results.map((item: Result) => movieMapper(item));
        return dataMovies;
    }
    */

    static async getMovies(route: string, page: number = 1): Promise<Movie[] | null> {
        try {
            const http = HttpFactory2.build();
            const fullRoute = `${route}?api_key=${Config.moviesAPI.key}&page=${page}`;
            console.log("Obteniendo peliculas de:", `${Config.moviesAPI.url_base}${fullRoute}`);
            const movies = await http.getFilms(fullRoute);
            if (movies instanceof HttpError) {
                console.error("Error obteniendo peliculas:", movies.getError);
                return null;
            }
            console.log("Peliculas obtenidas:", movies.results);
            return movies.results.map((item: Result) => movieMapper(item));
        } catch (error) {
            console.error("Error en FilmAdapter.getMovies:", error);
            return null;
        }
    }
}