import React, {FC} from 'react';
import {Text} from 'react-native';
import {useStyles} from '../../config/styles';
import {DeepPartial} from '../../models/utility/deepPartial';
import {ParagraphStyles, paragraphStyles} from './Paragraph.styles';

export interface ParagraphProps {
  styleOverrides?: DeepPartial<ParagraphStyles>;
}

export const Paragraph: FC<ParagraphProps> = ({children, styleOverrides}) => {
  const styles = useStyles(paragraphStyles, styleOverrides);
  return <Text style={styles.paragraph}>{children}</Text>;
};
