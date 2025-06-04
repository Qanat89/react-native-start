import { View, Text, Pressable, StyleSheet } from 'react-native'
import React from 'react'
import MaterialIcons from '@expo/vector-icons/MaterialIcons';


type Props ={
    onPress: ()=> void;
};

export default function CircleButton({onPress}: Props) {

  return (
    <View style= {styles.circleButtonContainer}>
        <Pressable style = {styles.circleButton} onPress={onPress}>
            <MaterialIcons name='add' size={39} color="#25292"/>
        </Pressable>
    </View>
  )
}

 const styles = StyleSheet.create({
    circleButtonContainer: {
        width: 84,
        height: 84,
        marginHorizontal: 60,
        borderWidth: 4,
        borderColor: '#ffd33d',
        borderRadius: 43,
        padding: 3,
    },
    circleButton:{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius:43,
        backgroundColor: '#fff',

    }
 })