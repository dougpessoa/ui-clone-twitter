import React from 'react';

import {
  Container,
  Retweeted,
  RetweetIcon,
  Body,
  Avatar,
  Content,
  Header,
  ImageContent,
  Dot,
  Description,
  Icons,
  Status,
  RetweetedIcon,
  CommentIcon,
  LikeIcon,
  ShareIcon
} from './styles';

const Tweet: React.FC = () => {
  return (
    <Container>
      <Retweeted>
        <RetweetIcon />
        Doug retweetou
      </Retweeted>

      <Body>
        <Avatar />

        <Content>
          <Header>
            <strong>Douglas</strong>
            <span>@doug</span>

            <Dot />

            <time>27 de jun</time>
          </Header>

          <Description>Esse é um tweet</Description>

          <ImageContent />

          <Icons>
            <Status>
              <CommentIcon />
              18
            </Status>

            <Status>
              <RetweetedIcon />
              18
            </Status>

            <Status>
              <LikeIcon />
              18
            </Status>

            <Status>
              <ShareIcon />
            </Status>
          </Icons>
        </Content>
      </Body>
    </Container>
  );
}

export default Tweet;
