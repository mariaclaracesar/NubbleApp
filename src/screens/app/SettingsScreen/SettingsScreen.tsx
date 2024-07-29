import React from 'react';

import {useAuthSignOut} from '@domain';

import {Button, Screen, Text} from '@components';
import {AppScreenProps} from '@routes';

export function SettingsScreen({}: AppScreenProps<'SettingsScreen'>) {
  const {isLoading, signOut} = useAuthSignOut();

  return (
    <Screen canGoBack title="Configurações">
      <Text preset="headingSmall" />
      <Button loading={isLoading} title="Sair da conta" onPress={signOut} />
    </Screen>
  );
}
