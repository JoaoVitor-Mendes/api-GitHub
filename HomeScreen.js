import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet, TouchableOpacity, ActivityIndicator} from 'react-native';
import axios from 'axios';


function HomeScreen({ navigation } ) {
    const [user, setUser] = useState('fukhaos');
    const [loading, setLoading] = useState(false);

    const url = `https://api.github.com/users/${user}`;

    const submit = async() => {
      setLoading(true);
      
      try {
        const response = await axios.get(url);
        navigation.navigate('Detail', { user: response.data });
      } catch (error) {
        alert("Usuário não encontrado");
      }

      setLoading(false);
    };

    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text style={styles.title}>Busca usuário:</Text>
        
        <TextInput style={styles.input} value={user} onChangeText={setUser} />
        
        <TouchableOpacity
        disabled={loading}
        style={styles.button} 
        onPress={()=>{
         //   navigation.navigate('Detail');
         submit();
        }}
    >
        
      {loading === false && <Text style={styles.textButton}>Buscar</Text> }
      {loading === true && <ActivityIndicator color= 'white' />}
</TouchableOpacity>
      </View>
    );
  }


  const styles = StyleSheet.create({
      title: {
          fontSize: 20,
      },
      input: {
          width: 200,
          height: 40,
          borderRadius: 4,
          textAlign: 'center',
          marginVertical: 10,
          backgroundColor: 'white',
      },
      button: {
        width: 200,
        height: 40,
        borderRadius: 4,
        textAlign: 'center',
        marginVertical: 10,
        backgroundColor: 'red',
        alignItems: 'center',
        justifyContent: 'center',
      },
      textButton: {
          color: 'white',
          fontWeight: 'bold',
      }
 });

  export default HomeScreen;