import React, { useState }from 'react';
import { StyleSheet, Text, View, FlatList } from 'react-native';

import Header from './src/Header';

import List from './src/List';

export default function App() {
const[feed, setFeed] = useState([
  {
    id:'1',
    nome:'matheus silva',
    descricao:'mais um dia de muitos bugs',
    imgperfil:'https://sujeitoprogramador.com/instareact/fotoPerfil1.png',
    imgpublicaao:'https://sujeitoprogramador.com/instareact/fotoPerfil1.png',
    likeada: true,
    likers:10
  },
  {
    id:'2',
    nome:'matheus silva',
    descricao:'mais um dia de muitos bugs',
    imgperfil:'https://sujeitoprogramador.com/instareact/fotoPerfil1.png',
    imgpublicaao:'https://sujeitoprogramador.com/instareact/fotoPerfil1.png',
    likeada: true,
    likers:1
  },
  {
    id:'3',
    nome:'matheus silva',
    descricao:'mais um dia de muitos bugs',
    imgperfil:'https://sujeitoprogramador.com/instareact/fotoPerfil1.png',
    imgpublicaao:'https://sujeitoprogramador.com/instareact/fotoPerfil1.png',
    likeada: true,
    likers:1
  },
  {
    id:'4',
    nome:'matheus silva',
    descricao:'mais um dia de muitos bugs',
    imgperfil:'https://sujeitoprogramador.com/instareact/fotoPerfil1.png',
    imgpublicaao:'https://sujeitoprogramador.com/instareact/fotoPerfil1.png',
    likeada: false,
    likers:0
  },
  {
    id:'5',
    nome:'matheus silva',
    descricao:'mais um dia de muitos bugs',
    imgperfil:'https://sujeitoprogramador.com/instareact/fotoPerfil1.png',
    imgpublicaao:'https://sujeitoprogramador.com/instareact/fotoPerfil1.png',
    likeada: true,
    likers:1
  },
])

  return (
    <View style={styles.container}>
        <Header />

        <FlatList
        showsVerticalScrollIndicator={false}
        keyExtractor={(item) => item.id}

        data={feed}
        renderItem={ ({ item }) => <List data={item} />}
        
        />
     </View>
          
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 30
   
  },
});
