import React, {FC} from 'react';
import {Pressable, GestureResponderEvent, Text} from 'react-native';
import {useStyles} from '../../config/styles';
import {DeepPartial} from '../../models/utility/deepPartial';
import {buttonStyles, ButtonStyles} from './Button.styles';

export interface ButtonProps {
  content: string;
  onPress: (event: GestureResponderEvent) => void;
  styleOverrides?: DeepPartial<ButtonStyles>;
}

export const Button: FC<ButtonProps> = props => {
  const styles = useStyles(buttonStyles, props.styleOverrides);
  return (
    <Pressable onPress={props.onPress} style={styles.pressable}>
      <Text style={styles.text}>{props.content}</Text>
    </Pressable>
  );
};
