import * as React from 'react';
import { View, Text, Image } from 'react-native';


function DetailScreen({ navigation, route }) {
  const { user } = route.params;
  const { name, bio, avatar_url } = user;


    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Image
         style={{
           width: 120,
           height: 120,
           borderRadius: 60,
           marginBottom: 20,
           borderWidth: 5,
           borderColor: 'white',
         }}
         source={{ uri: avatar_url }}></Image>
        <Text style= {{ fontSize:20 }}>name</Text>
        <Text>bio</Text>
      </View>
    );
  }

  export default DetailScreen;