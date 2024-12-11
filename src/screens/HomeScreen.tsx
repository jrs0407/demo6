import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import { useMovies } from '../hooks/useMovies';
import Slider from '../components/Slider0';

export default function HomeScreen() {
    const { nowPlaying, loadMore, loading } = useMovies();

    return (
        <View style={styles.container}>
          <Text>SCROLL INFINITO</Text>
            <Slider
                movie={nowPlaying}
                loadMore={loadMore} // Llama a la función para cargar más películas
                loading={loading} // Indica si está cargando
            />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
    },
});

/**
//HOMESCREEN CON BOTONES
import { StyleSheet, Text, View} from 'react-native'
import React from 'react'
import { useMovies } from '../hooks/useMovies'
import MovieComponent from '../components/MovieComponet';
import Slider from '../components/Slider';
import Slider2 from '../components/Slider2';

export default function HomeScreen() {
    const { nowPlaying, loading, currentPage, totalPages, nextPage, prevPage,  } = useMovies();
    return (
        <View>
            <Slider2
                movie={nowPlaying}
                height={300}
                onNext={nextPage}
                onPrev={prevPage}
                currentPage={currentPage}
                totalPages={totalPages}
            />
        </View>
    )
}
/**
 * <Text>NOWPLAYING</Text>
            <Slider movie={nowPlaying} height={300}/>
            <Text>POPULAR</Text>
            <Slider movie={popular} height={300}/>
 */

  //          const styles = StyleSheet.create({})
 