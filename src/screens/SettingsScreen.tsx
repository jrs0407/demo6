import { StyleSheet, Text, View, Image } from 'react-native';
import { useMovies } from '../hooks/useMovies';
import Slider from '../components/Slider0';
import React from 'react'

export default function SettingsScreen() {
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
// /wIGJnIFQlESkC2rLpfA8EDHqk4g.jpg
const styles = StyleSheet.create({
  container: {
      flex: 1,
      backgroundColor: '#000',
  },
});