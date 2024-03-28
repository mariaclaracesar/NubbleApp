import React from 'react';
import {SafeAreaView, View} from 'react-native';

import {ThemeProvider} from '@shopify/restyle';
import {Button} from './src/components/Button/Button';
import {Text} from './src/components/Text/Text';
import {theme} from './src/theme/theme';

function App(): JSX.Element {
  return (
    <ThemeProvider theme={theme}>
      <SafeAreaView>
        <View style={{paddingHorizontal: 24}}>
          <Text preset="headingLarge" semiBold>
            Coffstack
          </Text>

          <Button loading title="Primary" marginBottom="s12" />
          <Button disabled title="desabilit" marginBottom="s12" />
          <Button preset="outline" title="outline" marginBottom="s12" />

          <Button
            disabled
            preset="outline"
            title="Outline"
            marginBottom="s12"
          />

          <Button loading title="Loading" marginBottom="s12" />
        </View>
      </SafeAreaView>
    </ThemeProvider>
  );
}

export default App;
