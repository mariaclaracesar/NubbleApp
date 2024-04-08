import React from 'react';
import {SafeAreaView, View} from 'react-native';

import {ThemeProvider} from '@shopify/restyle';
import {Box} from './src/components/Box/Box';
import {Icon} from './src/components/Icon/Icon';
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

          <Box flexDirection="row" justifyContent="space-between">
            <Icon name="eyeOff" color="error" />
            <Icon name="eyeOn" />
          </Box>
        </View>
      </SafeAreaView>
    </ThemeProvider>
  );
}

export default App;
