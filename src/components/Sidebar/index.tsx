import React from 'react';
import StickyBox from 'react-sticky-box';

import List from '../List';
import FollowSuggestion from '../FollowSuggestion';
import News from '../News';

import {
  Container,
  SearchWrapper,
  SearchInput,
  SearchIcon,
  Body
} from './styles';

const Sidebar: React.FC = () => {
  return (
    <Container>
      <SearchWrapper>
        <SearchInput placeholder="Buscar no Twitter" />
        <SearchIcon />
      </SearchWrapper>

      <StickyBox>
        <Body>
          <List
            title="Talvez você custa"
            elements={[
              <FollowSuggestion
                name="nome 1"
                nickname="@nome1"
              />,
              <FollowSuggestion
                name="nome 2"
                nickname="@nome2"
              />,
              <FollowSuggestion
                name="nome 3"
                nickname="@nome3"
              />,
            ]}
          />

          <List
            title="Talvez você curta"
            elements={[
              <News />,
              <News />,
              <News />
            ]}
          />
        </Body>
      </StickyBox>
    </Container>
  );
}

export default Sidebar;
