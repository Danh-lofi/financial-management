import React from 'react';
import {TouchableOpacity, Text, StyleSheet} from 'react-native';
import { COLORS, FONT_SIZE } from '../../theme/theme';

type IProps = {
  onPress: () => void;
  title: string;
};
const CustomButton = ({
  onPress,
  title,
}: IProps) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      style={[styles.button]}>
      <Text style={[styles.text]}>{title}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    paddingVertical: 18,
    borderRadius: 25,
    alignItems: 'center',
    marginVertical: 10,
    backgroundColor: COLORS.backgroundBtn
    
  },
  text: {
    fontSize: FONT_SIZE.medium,
    fontWeight: 'bold',
    color: COLORS.backgroundColor,
  },
});

export default CustomButton;
