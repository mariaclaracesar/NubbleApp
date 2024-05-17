import React from 'react';

import {Box, BoxProps, Icon} from '@components';
import {useAppSafeArea} from '@hooks';

import {SimpleLogo} from '../../../../brand';

export function HomeHeader() {
  const {top} = useAppSafeArea();

  return (
    <Box {...$wrapper} style={{paddingTop: top}}>
      <SimpleLogo width={70} />

      <Box flexDirection="row">
        <Box mr="s24">
          <Icon name="search" />
        </Box>

        <Box mr="s24">
          <Icon name="bell" />
        </Box>
        <Icon name="chat" />
      </Box>
    </Box>
  );
}

const $wrapper: BoxProps = {
  flexDirection: 'row',
  justifyContent: 'space-between',
  paddingHorizontal: 's24',
  paddingBottom: 's24',
};
