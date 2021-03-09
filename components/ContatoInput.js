import React, { useState } from 'react';
import { Button, StyleSheet, TextInput, View } from 'react-native';

const ContatoInput = (props) => {
    const [nomeContato, setNome] = useState("");
    const [telContato, setTel] = useState("");

    
  const capturarContato = (contato) =>{
    setNome(contato);
  }
  const capturarTelefone = (contato) =>{
    setTel(contato);
  }

    return(
        <View style={styles.contatoView}>
            <TextInput
            placeholder='Nome do contato'
            style={styles.contatoInputText}
            onChangeText={capturarContato}
            
        />
            <TextInput
            placeholder='Telefone do contato'
            style={styles.contatoInputText}
            onChangeText={capturarTelefone}
            
        />
        <Button
        title="Adicionar contato"
        onPress={()=> props.onAdicionarContato({nome: nomeContato, telefone: telContato})}
        style={styles.contatoButton}
        />
        </View>
    );
}

const styles = StyleSheet.create({
    contatoView:{
       
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: 8
    },
    contatoInputText:{
        width: '80%',
        borderBottomColor: 'black',
        borderBottomWidth: 1,
        padding: 2,
        marginBottom: 4,
        textAlign: 'center'
    },
    contatoButton:{
        width: '80%',
        marginTop: 30,
        marginBottom: 30
    }
})

export default ContatoInput;