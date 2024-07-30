import {
  faEye,
  faEyeSlash,
  IconDefinition,
} from '@fortawesome/free-solid-svg-icons';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {
  Box,
  FormControl,
  Icon,
  Input,
  Pressable,
  Stack,
  WarningOutlineIcon,
} from 'native-base';
import {StyleSheet} from 'react-native';
import {COLORS, FONT_SIZE} from '../../theme/theme';
import {useState} from 'react';

type IProps = {
  value: string;
  onChangeText: (text: string) => void;
  placeholder?: string;
  icon: IconDefinition;
  label?: string;
  helperText?: string;
  errorText?: string;
  isInvalid?: boolean;
  isDisabled?: boolean;
  isPassword?: boolean;
};
const FormInput = ({
  icon,
  label,
  placeholder,
  value,
  onChangeText,
  helperText,
  errorText,
  isInvalid = false,
  isDisabled = false,
  isPassword = false,
}: IProps) => {
  const [isHidden, setIsHidden] = useState<boolean>(true);

  return (
    <Box w="100%">
      <FormControl isInvalid={isInvalid} isDisabled={isDisabled}>
        <Stack mx="4">
          {!!label && <FormControl.Label>{label}</FormControl.Label>}
          <Input
            type={isHidden && isPassword ? 'password' : 'text'}
            isReadOnly={isDisabled}
            value={value}
            onChangeText={onChangeText}
            borderRadius={10}
            backgroundColor={COLORS.bgInput}
            color={COLORS.primaryLightColor}
            w={{
              base: '100%',
            }}
            InputLeftElement={
              !!icon && (
                <Icon
                  as={<FontAwesomeIcon icon={icon} style={[styles.icon]} />}
                  size={5}
                  ml="2"
                  color="muted.400"
                />
              )
            }
            InputRightElement={
              isPassword ? (
                <Pressable onPress={() => setIsHidden(!isHidden)}>
                  <FontAwesomeIcon
                    icon={isHidden ? faEyeSlash : faEye}
                    style={[styles.iconHidden]}
                  />
                </Pressable>
              ) : (
                <></>
              )
            }
            placeholder={placeholder}
          />
          {!!helperText && (
            <FormControl.HelperText>
              Must be atleast 6 characters.
            </FormControl.HelperText>
          )}
          {!!errorText && (
            <FormControl.ErrorMessage
              leftIcon={<WarningOutlineIcon size="xs" />}>
              {errorText}
            </FormControl.ErrorMessage>
          )}
        </Stack>
      </FormControl>
    </Box>
  );
};

const styles = StyleSheet.create({
  container: {
    // flexDirection: 'row',
    // alignItems: 'center',
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
