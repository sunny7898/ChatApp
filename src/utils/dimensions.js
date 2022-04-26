import {Dimensions} from 'react-native';

export const getHeight = () => Dimensions.get('screen').height;
export const getWidth = () => Dimensions.get('screen').width;
export const getFontScale = () => Dimensions.get('screen').fontScale;
export const calcWidth = parts => getWidth() / parts;
export const calcHeight = parts => getHeight() / parts;
export const calcWidthPercent = percent => getWidth() * (percent / 100);
export const calcHeightPercent = percent => getHeight() * (percent / 100);