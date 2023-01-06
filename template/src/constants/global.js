import {Platform, Dimensions} from 'react-native';
import {hasNotch} from 'react-native-device-info';

export const IS_ANDROID = Platform.OS === 'android';
export const IS_IOS = Platform.OS === 'ios';
export const WIDTH_DEVICE = Dimensions.get('screen').width;
export const HEIGHT_DEVICE = Dimensions.get('window').height;
export const SCREEN = Dimensions.get('screen');

export const HAS_NOTCH = hasNotch();
