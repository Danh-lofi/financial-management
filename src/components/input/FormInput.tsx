import {IconDefinition} from '@fortawesome/fontawesome-svg-core';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import React, {useState} from 'react';
import {
  KeyboardTypeOptions,
  StyleSheet,
  TextInput,
  Touchable,
  TouchableOpacity,
  View,
} from 'react-native';
import {COLORS, FONT_SIZE} from '../../theme/theme';
import {faEye, faEyeSlash} from '@fortawesome/free-solid-svg-icons';

type IProps = {
  value: string;
  onChangeText: (text: string) => void;
  placeholder?: string;
  style?: object;
  keyboardType?: KeyboardTypeOptions;
  icon: IconDefinition;
  // onSubmitEditing: () => void;
  isPassword?: boolean;
};
const FormInput = ({
  value,
  onChangeText,
  placeholder,
  keyboardType = 'default',
  style,
  icon,
  isPassword = false,
}: IProps) => {
  const [isFocused, setIsFocused] = useState<boolean>(false);
  const [isHidden, setIsHidden] = useState<boolean>(true);

  return (
    <View style={[styles.container, isFocused && styles.inputFocused]}>
      <FontAwesomeIcon icon={icon} style={[styles.icon]} />
      <TextInput
        value={value}
        secureTextEntry={isPassword && isHidden}
        onChangeText={onChangeText}
        placeholder={placeholder}
        keyboardType={keyboardType}
        style={[styles.input, style]}
        placeholderTextColor={COLORS.secondaryLightColor}
        onFocus={() => setIsFocused(true)}
        onBlur={() => setIsFocused(false)}
      />
      {isPassword && (
        <TouchableOpacity onPress={() => setIsHidden(!isHidden)}>
          <FontAwesomeIcon
            icon={isHidden ? faEyeSlash : faEye}
            style={[styles.iconHidden]}
          />
        </TouchableOpacity>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    borderRadius: 25,
    backgroundColor: '#183153',
    paddingVertical: 5,
  },
  icon: {
    marginLeft: 20,
    color: COLORS.secondaryLightColor,
    fontSize: FONT_SIZE.extraLarge,
    height: 50,
  },
  input: {
    flex: 1,
    paddingHorizontal: 10,
    color: COLORS.primaryLightColor,
    fontSize: FONT_SIZE.medium,
  },
  inputFocused: {
    borderColor: COLORS.mainColor,
    borderWidth: 1,
  },
  iconHidden: {
    marginRight: 20,
    color: COLORS.secondaryLightColor,
    fontSize: FONT_SIZE.extraLarge,
    height: 50,
  },
});

export default FormInput;
