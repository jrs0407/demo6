import { useEffect, useState } from "react"
import { Movie } from "../config/entities/Movie";
import { FilmAdapter } from "../adapter/FilmAdapter";

export const useMovies = () => {
    const [nowPlaying, setNowPlaying] = useState<Movie[]>([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [loading, setLoading] = useState(false);

    const loadMovies = async () => {
        if (loading) return; 
        setLoading(true);
        try {
            const movies = await FilmAdapter.getMovies(FilmAdapter.ROUTES.nowPlaying, currentPage);
            if (movies) {
                setNowPlaying((prev) => [...prev, ...movies]); // Agrega películas a la lista 
                setCurrentPage((prev) => prev + 1); // Incrementa el número de página
            }
        } catch (error) {
            console.error("Error al cargar películas:", error);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        loadMovies(); // Carga inicial
    }, []);

    return {
        nowPlaying,
        loading,
        loadMore: loadMovies, // función para cargar más películas
    };
};

/**
 * // USEMOVIES INICIAL 
 * export const useMovies = () => {
    const [nowPlaying, setNowPlaying] = useState<Movie[]>([]);
    const [popular, setPopular] = useState<Movie[]>([]);

    const [loading, setLoading] =useState(false);
    const loadMovies = async () => {
        const movies = await FilmAdapter.getMovies(FilmAdapter.ROUTES.nowPlaying);
        if (movies != null) {
            console.log('NOWPLAYING');
            console.log(movies);
            setNowPlaying(movies);
            setLoading(true);
        }
    }
    
    const loadMovies2 = async () => {
        const movies2 = await FilmAdapter.getMovies(FilmAdapter.ROUTES.popular);
        if (movies2 != null) {
            console.log('POPULAR');
            console.log(movies2);
            setPopular(movies2);
            setLoading(true);
        }
    }
    useEffect(() => {
      loadMovies();
      loadMovies2();
    }, [])
    
    return {
        nowPlaying, loading, popular
    }
    
}* 
 */


/**
 *  SCROLL VIEW CON BOTONES
 * export const useMovies = () => {
    const [nowPlaying, setNowPlaying] = useState<Movie[]>([]);
    const [currentPage, setCurrentPage] = useState(1); //pagina actual por defecto la 1
    const [totalPages, setTotalPages] = useState(20); // Valor maximo de paginas a pasar, es ajustable
    const [loading, setLoading] = useState(false);

    const loadMovies = async (page: number) => {
        console.log("Peliculas de la página:", page);
        setLoading(true);
        const movies = await FilmAdapter.getMovies(FilmAdapter.ROUTES.nowPlaying, page);
        if (movies) {
            setNowPlaying(movies);
        } else {
            console.error("Error al obtener las peliculas");
        }
        setLoading(false);
    };

    useEffect(() => {
        loadMovies(currentPage); // Cargar la página inicial
    }, [currentPage]);

    const nextPage = () => {
        if (currentPage < totalPages) {
            setCurrentPage(currentPage + 1);
        }
    };

    const prevPage = () => {
        if (currentPage > 1) {
            setCurrentPage(currentPage - 1);
        }
    };

    return {
        nowPlaying,
        loading,
        currentPage,
        totalPages,
        nextPage,
        prevPage,
    };
};


 * 
 */
 