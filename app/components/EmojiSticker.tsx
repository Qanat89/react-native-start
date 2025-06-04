import { View, Text, ImageSourcePropType } from 'react-native'
import React from 'react'
import { Image } from 'expo-image';


type Props = {
    imageSize: number;
    stickerSource: ImageSourcePropType;
};

export default function EmojiSticker({imageSize, stickerSource}: Props) {

  return (
    <View style={{top: -350}}>
        <Image source={stickerSource} style={{width:imageSize, height:imageSize}}/>   
    </View>
  );
}