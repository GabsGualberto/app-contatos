import React, { useState } from 'react';
import { Button, StyleSheet, TextInput, View, Text, ScrollView, FlatList } from "react-native";

export default function App() {
  const [contatos, setContatos] = useState([]);
  const [nomeContato, setNome] = useState("");
  const [telContato, setTel] = useState("");
  const [contadorContatos, setContadorContatos] = useState(0);


  const capturarContato = (contato) =>{
    setNome(contato);
  }
  const capturarTelefone = (contato) =>{
    setTel(contato);
  }

  const adicionarContato = () =>{
    setContatos((contatos) => {
      setContadorContatos(contadorContatos + 1);
      return [...contatos, {key: contadorContatos.toString(),nome: nomeContato, telefone: telContato}]
    });
  }
  return (
    <View style={styles.container}>
      <View style={styles.contatoTextView}>
          <TextInput style={styles.contatoText} placeholder='Nome do contato' onChangeText={capturarContato}/>
          <TextInput style={styles.contatoText} placeholder='Telefone do contato' onChangeText={capturarTelefone}/>
          <View style={styles.contatoButtonView}> 
              <Button title='Adicionar Contato' onPress={adicionarContato} />
          </View>
      </View>
      <View style={styles.flatListView}>
        <Text style={styles.contatosNaLista}>Contatos: </Text>
      </View>
      <View style={styles.flatListView}>
        <FlatList 
          data={contatos}
          renderItem={
            contato =>(
              <View style={styles.contatosNaLista}>
                <Text>{contato.item.nome} {contato.item.telefone} </Text>
              </View>
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