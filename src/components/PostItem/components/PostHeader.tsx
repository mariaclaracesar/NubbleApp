import React from 'react';
import {Pressable} from 'react-native';

import {Post} from '@domain';
import {useNavigation} from '@react-navigation/native';

import {Box, ProfileAvatar, Text} from '@components';

type Props = Pick<Post, 'author'>;

export function PostHeader({author}: Props) {
  const navigation = useNavigation();

  function navigateToProfile() {
    navigation.navigate('ProfileScreen', {userId: author.id});
  }

  return (
    <Pressable onPress={navigateToProfile}>
      <Box mb="s16" flexDirection="row" alignItems="center">
        <ProfileAvatar imageURL={author.profileURL} />
        <Text ml="s12" semiBold preset="paragraphMedium">
          {author.userName}
        </Text>
      </Box>
    </Pressable>
  );
}
