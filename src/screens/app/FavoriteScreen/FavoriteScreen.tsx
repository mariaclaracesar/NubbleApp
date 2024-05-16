import React from 'react';

import {Screen, Text} from '@components';
import {AppTabScreenProps} from '@routes';

export function FavoriteScreen({}: AppTabScreenProps<'FavoriteScreen'>) {
  return (
    <Screen>
      <Text preset="headingSmall">Favorite Screen</Text>
    </Screen>
  );
}
