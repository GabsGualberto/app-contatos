import React, { useState } from 'react';
import { Button, StyleSheet, TextInput, View, Text, ScrollView, FlatList } from "react-native";
import ContatoInput from './components/ContatoInput';
import ContatoItem from './components/ContatoItem';


export default function App() {
  const [contatos, setContatos] = useState([]);
  const [contadorContatos, setContadorContatos] = useState(0);


  const removerContato = (keyASerRemovida) => {
    setContatos (contatos => {
      return contatos.filter((contato) => {
        return contato.key !== keyASerRemovida
      })
    })
  }
  const adicionarContato = (contato) =>{
    setContatos((contatos) => {
      setContadorContatos(contadorContatos + 1);
      return [...contatos, {key: contadorContatos.toString(),nome: contato.nome, telefone: contato.telefone}]
    });
  }
  return (
    <View style={styles.container}>
    <ContatoInput onAdicionarContato ={adicionarContato}/>
      <View style={styles.flatListView}>
        <Text style={styles.contatosNaLista}>Contatos: </Text>
      </View>
      <View style={styles.flatListView}>
        <FlatList 
          data={contatos}
          renderItem={
            contato =>(
              <ContatoItem 
              contato={contato.item.nome} 
              tel={contato.item.telefone}
              chave ={contato.item.key}
              onDelete={removerContato}
              />
            )
          }
        />
      </View>
    </View>
    );
  }
  const styles = StyleSheet.create({
    container: {
      padding: 50,
      flex: 1
      },
      contatoTextView: {
        justifyContent: 'space-between',
        alignItems: 'center'
      },
      contatoText:{
        width: '80%',
        borderBottomColor: 'black',
        borderBottomWidth: 1,
        padding: 2,
        marginBottom: 4,
        textAlign: 'center'
      },
      contatoButtonView:{
        width: '80%',
        marginTop: 30,
        marginBottom: 30
      },
      contatosNaLista:{
        padding: 12,
        backgroundColor: '#CCC',
        borderColor: 'black',
        borderWidth: 1,
        marginBottom: 8,
        borderRadius: 8,
        alignItems: 'center'
      },
      flatListView:{
        width: '80%',
        alignSelf: 'center',
        textAlign:'center'
      }
  });