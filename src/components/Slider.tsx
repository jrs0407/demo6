import { ScrollView, StyleSheet, Text, View, Image } from 'react-native'
import React from 'react'
import { Movie } from '../config/entities/Movie'

interface Movies {
    movie: Movie[],
    height: number
}
export default function Slider({ movie, height }: Movies) {
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
        </View>
    )
}

const styles = StyleSheet.create({
    contenedor: {
        height: 400,
        
    },
    imagen: {
         
        width: 150, 
        margin: 1, 
       
    }
})