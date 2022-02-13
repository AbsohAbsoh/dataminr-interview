import {DeepPartial} from './../models/utility/deepPartial';
import {Theme, ThemeContext} from './theme';
import {useContext} from 'react';
import deepmerge from 'deepmerge';

export const useStyles = <T>(
  styleBuilder: (theme: Theme) => T,
  overrides?: DeepPartial<T>,
): T => {
  const theme = useContext(ThemeContext);
  const styles = styleBuilder(theme);
  if (overrides) {
    return deepmerge(styles, overrides as Partial<T>);
  }
  return styles;
};
