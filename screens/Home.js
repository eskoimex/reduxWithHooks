import React from 'react';
import {Text, View, TouchableOpacity} from 'react-native';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';


const Home = ({navigation}) => {
  return (
    <View style={{flex: 1, marginTop: 20, paddingHorizontal: 20}}>
      <View>
         <TouchableOpacity onPress={() => navigation.openDrawer()}>
             <MaterialIcons name="reorder" color="black" size={42}/>
         </TouchableOpacity>
         <View style={{ justifyContent: 'center', alignItems: 'center' }}>
            <Text style={{ fontSize: 32, alignSelf:'center'}}>Welcome to Gokada.</Text>
            <Text>I can't wait to be a part of this great team.</Text>

        </View> 
     </View>
     </View>
  );
};

export default Home;
