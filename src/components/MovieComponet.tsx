import {View, Text, FlatList, Image} from 'react-native'
import React from 'react'
import { Movie } from '../config/entities/Movie';
interface props{
    loading:boolean;
    nowPlaying:Movie[];
}

export default function MovieComponent({loading, nowPlaying}: props){
    if (!loading) {
        return(
            <View>
                <Text>Cargando...</Text>
            </View>
        )       
    }
    return (
        <View>
            <FlatList
                data={nowPlaying}
                renderItem={({ item }) => <Text>{item.poster}</Text>}
                keyExtractor={item => 'id' + item.id}

            />
            
        </View>
    );
    
}