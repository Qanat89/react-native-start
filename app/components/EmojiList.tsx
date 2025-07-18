import { View, Text, ImageSourcePropType, Platform, StyleSheet,FlatList,Pressable } from 'react-native'
import React, { useState } from 'react'
import { Image } from 'expo-image';
type Props={
    onSelect:(image:ImageSourcePropType)=>void;
    onCloseModal: ()=> void;
};


export default function EmojiList({onSelect, onCloseModal}: Props) {
    const [emoji] = useState<ImageSourcePropType[]>([
        require('@/assets/images/image 1.png'),
        require('@/assets/images/image 2.png'),
        require('@/assets/images/image 3.png'),
        require('@/assets/images/image 4.png'),
        require('@/assets/images/image 5.png')
        
    ]
    );
  return (
    <FlatList
    horizontal
    showsHorizontalScrollIndicator={Platform.OS ==='web'}
    data={emoji}
    contentContainerStyle={styles.listContainer}
    renderItem={({item, index})=>(
        <Pressable onPress={()=>{
            onSelect(item);
            onCloseModal();
        }}>
            <Image source = {item} key={index} style={styles.image}/>
        </Pressable>
    )}
    />
  );
}
const styles = StyleSheet.create({
    listContainer:{
            borderTopRightRadius: 10,
            borderTopLeftRadius: 10,
            paddingHorizontal: 20,
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-between',
    },
    image:{
         width: 100,
         height: 100,
         marginRight: 20,
    }
})