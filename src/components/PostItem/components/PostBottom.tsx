import React from 'react';

import {Post} from '@domain';

import {Box, Text} from '@components';

type Props = Pick<Post, 'author' | 'text' | 'commentCount'>;

export function PostBottom({author, text, commentCount}: Props) {
  const commentText = getCommentText(commentCount);

  return (
    <Box>
      <Text mt="s16" preset="paragraphMedium" bold>
        {author.userName}
      </Text>

      <Text preset="paragraphMedium" color="gray1">
        {text}
      </Text>

      {commentText && (
        <Text mt="s8" preset="paragraphSmall" bold color="primary">
          {commentText}
        </Text>
      )}
    </Box>
  );
}

function getCommentText(commentCount: number): string | null {
  if (commentCount === 0) {
    return null;
  } else if (commentCount === 1) {
    return 'Ver comentário';
  } else {
    return `Ver ${commentCount} comentários`;
  }
}
