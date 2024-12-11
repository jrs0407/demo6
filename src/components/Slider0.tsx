import React from 'react';
import { FlatList, StyleSheet, View, Image } from 'react-native';
import { Movie } from '../config/entities/Movie';

interface SliderProps {
    movie: Movie[];
    loadMore: () => void; // Función para cargar más películas
    loading: boolean; 
}

export default function Slider({ movie, loadMore, loading }: SliderProps) {
    return (
        <View style={styles.container}>
            <FlatList
                data={movie}
                horizontal
                keyExtractor={(item) => item.id.toString()}
                renderItem={({ item }) => (
                    <Image
                        source={{ uri: `https://image.tmdb.org/t/p/original${item.poster}` }}
                        style={styles.image}
                    />
                )}
                onEndReached={loadMore} // Llama a la función al alcanzar el final del scroll
            />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        height: 300,
    },
    image: {
        width: 150,
        height: 225,
    },
});
