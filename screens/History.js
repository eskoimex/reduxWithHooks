import React from 'react';
import {Text, View, TouchableOpacity} from 'react-native';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

const History = ({navigation}) => {
  return (
 <View style={{flex: 1, marginTop: 20, paddingHorizontal: 20}}>
    <View style={{flexDirection: 'row', paddingRight: 30, justifyContent:'space-between'}}>
         <TouchableOpacity onPress={() => navigation.goBack()}>
             <MaterialIcons name="arrow-back" color="black" size={42}/>
         </TouchableOpacity>
          <TouchableOpacity  onPress={() => navigation.navigate('Home')}>
             <MaterialIcons name="home" color="black" size={42}/>
         </TouchableOpacity>
         </View>
     
         <View style={{ justifyContent: 'center', alignItems: 'center' }}>
            <Text style={{ fontSize: 32, alignSelf:'center'}}>History Screen</Text>

        </View> 
     </View>
  );
};

export default History;
