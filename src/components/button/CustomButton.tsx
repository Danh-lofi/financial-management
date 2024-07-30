import React from 'react';
import {
  TouchableOpacity,
  Text,
  StyleSheet,
  ActivityIndicator,
} from 'react-native';
import {COLORS, FONT_SIZE} from '../../theme/theme';

type IProps = {
  onPress: () => void;
  title: string;
  isLoading?: boolean;
};
const CustomButton = ({onPress, title, isLoading = false}: IProps) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      style={[styles.button, isLoading && {backgroundColor: COLORS.secondaryLightColor}]}
      disabled={isLoading}>
      {isLoading && (
        <ActivityIndicator size="small" color={COLORS.backgroundColor} style={{marginRight: 10}} />
      )}
      <Text style={[styles.text]}>{title}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    paddingVertical: 18,
    borderRadius: 25,
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'center',
    marginVertical: 10,
    backgroundColor: COLORS.backgroundBtn,
  },
  text: {
    fontSize: FONT_SIZE.medium,
    fontWeight: 'bold',
    color: COLORS.backgroundColor,
  },
});

export default CustomButton;
