import {useAppTheme} from '@hooks';
import {ThemeColors} from '@theme';
import React from 'react';
import {
  ActivityIndicatorProps,
  ActivityIndicator as RNActivityIndicator,
} from 'react-native';

interface Props extends Omit<ActivityIndicatorProps, 'color'> {
  color: ThemeColors;
}

export function ActivityIndicator({color}: Props) {
  const {colors} = useAppTheme();

  return <RNActivityIndicator color={colors[color]} />;
}
