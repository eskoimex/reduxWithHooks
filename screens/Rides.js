import React, {useEffect} from 'react';
import {View, Text, FlatList, Image, TouchableOpacity} from 'react-native';
import {useSelector, useDispatch} from 'react-redux';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import {getRides } from '../redux/actions';

const Rides = ({navigation}) => {
  const {rides} = useSelector(state => state.ridesReducer);
  const dispatch = useDispatch();
  const fetchRides = () => dispatch(getRides());


  useEffect(() => {
    fetchRides();
  }, []);


 
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
      <Text style={{fontSize: 22}}>Available Rides</Text>
      <View style={{flex: 1, marginTop: 12}}>
        <FlatList
          data={rides}
          keyExtractor={item => item.id.toString()}
          renderItem={({item}) => {
            const IMAGE_URL =
              item.thumbnailUrl;
            return (
              <View style={{marginVertical: 12}}>
                <View style={{flexDirection: 'row', flex: 1}}>
                  <Image
                    source={{
                      uri: IMAGE_URL,
                    }}
                    resizeMode="cover"
                    style={{width: 100, height: 150, borderRadius: 10}}
                  />
                  <View style={{flex: 1, marginLeft: 12}}>
                    <View>
                      <Text style={{fontSize: 22, paddingRight: 16}}>
                        {item.title}
                      </Text>
                    </View>
                    <View
                      style={{
                        flexDirection: 'row',
                        marginTop: 10,
                        alignItems: 'center',
                      }}>
                     
                    </View>
                  </View>
                </View>
              </View>
            );
          }}
        />
      </View>
    </View>
  );
};

export default Rides;
