import { ScrollView, StyleSheet, Text, View, Image, Button } from 'react-native';
import React from 'react';
import { Movie } from '../config/entities/Movie';

interface Movies {
    movie: Movie[];
    height: number;
    onNext: () => void;
    onPrev: () => void;
    currentPage: number;
    totalPages: number;
}

export default function Slider({ movie, height, onNext, onPrev, currentPage, totalPages }: Movies) {
    if (!movie || movie.length === 0) {
        return <Text>No hay peliculas</Text>; //En caso de que no haya peliculas
    }

    return (
        <View style={[styles.contenedor, { height }]}>
            <ScrollView horizontal showsHorizontalScrollIndicator={true}>
                {movie.map((item) => (
                    <Image
                        key={item.id}
                        source={{ uri: `https://image.tmdb.org/t/p/original${item.poster}` }}
                        style={styles.imagen}
                    />
                ))}
            </ScrollView>
            <View style={styles.estilo}>
                <Button title="PREV" onPress={onPrev} disabled={currentPage === 1} /> 
                <Text style={styles.pageInfo}>
                    Pagina {currentPage} de {totalPages}
                </Text>
                <Button title="NEXT" onPress={onNext} disabled={currentPage === totalPages} />
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    contenedor: {
        height: 400,
    },
    imagen: {
        width: 150,
        margin: 1,
    },
    estilo: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginTop: 10,
    },
    pageInfo: {
        fontSize: 16,
    },
});
