import {Alert, HStack, Text, Toast, VStack} from 'native-base';
import {VariantType} from 'native-base/lib/typescript/components/types';
type IToast = {
  message: string;
  variant?: VariantType<'Alert'>;
};

const toast = {
  success: ({message, variant = 'outline'}: IToast) => {
    Toast.show({
      description: message,
      placement: 'top',
      render: () => {
        return (
          <Alert
            w="100%"
            variant={variant}
            colorScheme="success"
            status="success">
            <VStack space={2} flexShrink={1} w="100%">
              <HStack
                flexShrink={1}
                space={2}
                alignItems="center"
                justifyContent="space-between">
                <HStack space={2} flexShrink={1} alignItems="center">
                  <Alert.Icon />
                  <Text color={'white'}>{message}</Text>
                </HStack>
              </HStack>
            </VStack>
          </Alert>
        );
      },
    });
  },
  error: ({message, variant = 'solid'}: IToast) => {
    Toast.show({
      description: message,
      placement: 'top',
      render: () => {
        return (
          <Alert w="100%" variant={variant} colorScheme="error" status="error">
            <VStack space={2} flexShrink={1} w="100%">
              <HStack
                flexShrink={1}
                space={2}
                alignItems="center"
                justifyContent="space-between">
                <HStack space={2} flexShrink={1} alignItems="center">
                  <Alert.Icon />
                  <Text color={'white'}>{message}</Text>
                </HStack>
              </HStack>
            </VStack>
          </Alert>
        );
      },
    });
  },
  warning: ({message, variant = 'solid'}: IToast) => {
    Toast.show({
      description: message,
      placement: 'top',
      render: () => {
        return (
          <Alert
            w="100%"
            variant={variant}
            colorScheme="warning"
            status="warning">
            <VStack space={2} flexShrink={1} w="100%">
              <HStack
                flexShrink={1}
                space={2}
                alignItems="center"
                justifyContent="space-between">
                <HStack space={2} flexShrink={1} alignItems="center">
                  <Alert.Icon />
                  <Text color={'white'}>{message}</Text>
                </HStack>
              </HStack>
            </VStack>
          </Alert>
        );
      },
    });
  },
  info: ({message, variant = 'solid'}: IToast) => {
    Toast.show({
      description: message,
      placement: 'top',
      render: () => {
        return (
          <Alert w="100%" variant={variant} colorScheme="info" status="info">
            <VStack space={2} flexShrink={1} w="100%">
              <HStack
                flexShrink={1}
                space={2}
                alignItems="center"
                justifyContent="space-between">
                <HStack space={2} flexShrink={1} alignItems="center">
                  <Alert.Icon />
                  <Text color={'white'}>{message}</Text>
                </HStack>
              </HStack>
            </VStack>
          </Alert>
        );
      },
    });
  },
};

export default toast;
