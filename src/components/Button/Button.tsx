import React, {FC} from 'react';
import {
  GestureResponderEvent,
  Text,
  TouchableOpacity,
  TouchableOpacityProps,
} from 'react-native';
import {useStyles} from '../../config/styles';
import {DeepPartial} from '../../models/utility/deepPartial';
import {buttonStyles, ButtonStyles} from './Button.styles';

export interface ButtonProps extends Pick<TouchableOpacityProps, 'testID'> {
  content: string;
  onPress: (event: GestureResponderEvent) => void;
  styleOverrides?: DeepPartial<ButtonStyles>;
}

export const Button: FC<ButtonProps> = props => {
  const styles = useStyles(buttonStyles, props.styleOverrides);
  return (
    <TouchableOpacity
      onPress={props.onPress}
      style={styles.container}
      testID={props.testID}>
      <Text style={styles.text}>{props.content}</Text>
    </TouchableOpacity>
  );
};
