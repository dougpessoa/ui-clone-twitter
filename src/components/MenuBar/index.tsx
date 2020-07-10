import React, { useEffect, useState, useRef } from 'react';

import Button from '../Button';

import Menu from '../Menu';

import {
  Container,
  Topside,
  Logo,
  MenuButton,
  HomeIcon,
  BellIcon,
  EmailIcon,
  ProfileIcon,
  Botside,
  Avatar,
  ProfileData,
  ExitIcon,
  HashIcon,
  BookmarkIcon,
  ListIcon,
  DotsCircleIcon,
} from './styles';

interface Props {
  refBtn?: Node;
}

const MenuBar: React.FC<Props> = ({ refBtn }) => {

  const btnMoreRef = useRef<HTMLButtonElement>();

  const [top, setTop] = useState(0);

  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const topOfBtn = (document.getElementById("btn-tweet") as HTMLDivElement).offsetTop;

    setTop(topOfBtn);
  }, []);

  return (
    <Container>
      <Menu
        top={top}
        isVisible={isVisible}
        closeMenu={(e: boolean) => setIsVisible(e)}
        refBtn={btnMoreRef}
      />
      <Topside>
        <Logo />

        <MenuButton>
          <HomeIcon />
          <span>Página Inicial</span>
        </MenuButton>

        <MenuButton className="hash">
          <HashIcon />
          <span>Explorar</span>
        </MenuButton>

        <MenuButton>
          <BellIcon />
          <span>Notificações</span>
        </MenuButton>

        <MenuButton>
          <EmailIcon />
          <span>Mensagens</span>
        </MenuButton>

        <MenuButton>
          <BookmarkIcon />
          <span>Itens salvos</span>
        </MenuButton>

        <MenuButton>
          <ListIcon />
          <span>Listas</span>
        </MenuButton>

        <MenuButton className="active">
          <ProfileIcon />
          <span>Perfil</span>
        </MenuButton>

        <MenuButton
          onClick={() => setIsVisible(true)}
          className="dots"
          ref={btnMoreRef}
        >
          <DotsCircleIcon />
          <span>Mais</span>
        </MenuButton>

        <Button id="btn-tweet">
          <span>Tweetar</span>
        </Button>
      </Topside>

      <Botside>
        <Avatar />

        <ProfileData>
          <strong>Doug</strong>
          <span>@doug</span>
        </ProfileData>

        <ExitIcon />
      </Botside>
    </Container>
  );
}

export default MenuBar;
