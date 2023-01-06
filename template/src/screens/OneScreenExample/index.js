import React from 'react';
import {SafeAreaView, Text, Platform} from 'react-native';
import FastImage from 'react-native-fast-image';
import {hasNotch} from 'react-native-device-info';
import {useNetInfo} from '@react-native-community/netinfo';

import {Images} from '@constants';

import {styles} from './styles';

export const OneScreenExample = () => {
  const netInfo = useNetInfo();
  
  return (
    <SafeAreaView style={styles.container}>
      <Text style={{fontSize: 20, fontWeight: '700'}}>
        React Native Boilerplate
      </Text>
      <FastImage source={Images.Splash.Logo} style={styles.image} />
      <Text style={styles.title}>Come on, let's start coding!</Text>
      {hasNotch() ? <Text>Notch : YES </Text> : <Text>Notch : NO</Text>}
      {Platform.OS === 'android' ? (
        <Text>This is Android</Text>
      ) : (
        <Text>This is iOS</Text>
      )}
      <Text>Type: {netInfo?.type}</Text>
      {netInfo?.isConnected ? (
        <Text>Connected</Text>
      ) : (
        <Text>Not Connected</Text>
      )}
    </SafeAreaView>
  );
};
