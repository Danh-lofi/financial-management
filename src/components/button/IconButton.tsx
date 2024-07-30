import {IconProp} from '@fortawesome/fontawesome-svg-core';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import React from 'react';
import {StyleSheet, TouchableOpacity, View} from 'react-native';

type IProps = {
  icon: IconProp;
  onPress: () => void;
};
const IconButton = ({icon, onPress}: IProps) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={onPress}>
        <FontAwesomeIcon icon={icon} style={[styles.icon]} />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {},
  icon: {},
});

export default IconButton;
