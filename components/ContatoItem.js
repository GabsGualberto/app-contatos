import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

const ContatoItem = (props) =>{
    return(
        <TouchableOpacity onLongPress={props.onDelete.bind(this, props.chave)}>
            <View style={styles.contatoNaLista}>
                <Text>{props.contato} {props.tel}</Text>
            </View>
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create ({
    contatoNaLista: {
    padding: 12,
    backgroundColor: '#CCC',
    borderBottomColor: '#000',
    borderWidth: 1,
    marginBottom: 8,
    borderRadius: 8
    }
    });


export default ContatoItem;