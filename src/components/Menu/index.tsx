import React, { useEffect, useState, useRef, useCallback } from 'react';

import {
  Container,
  Item,
  ChatIcon,
  ThunderIcon,
  OutboxIcon,
  CogIcon,
  ChartIcon,
  QuestionIcon,
  PaintIcon,
  Line
} from './styles';

export interface PropsOfContainer {
  top?: number;
  height?: number;
  isVisible?: boolean;
  refBtn: Node;
}

interface Responses {
  closeMenu: Function;

}

type Props = PropsOfContainer & Responses;

const Menu: React.FC<Props> = ({ top, isVisible, closeMenu, refBtn }) => {

  const containerRef = useRef<HTMLDivElement>(null);

  const [height, setHeight] = useState(0);

  useEffect(() => {
    if(isVisible) {
      const heightOfContainer = (document.getElementById('container-menu') as HTMLDivElement).offsetHeight;
      setHeight(heightOfContainer);
    }
  }, [isVisible]);

  const handleClick = async (event: { target: MouseEvent; }) => {
    if(!(containerRef.current ! as any).contains(event.target)) {
      await closeMenu(false);
      return;
    }
  }

  useEffect(() => {
    document.addEventListener<any>('click', handleClick);

    return () => {
      document.addEventListener<any>('click', handleClick);
    }
  }, []);

  return (
    <Container
      id="container-menu"
      height={height}
      top={top}
      isVisible={isVisible}
      className="menu-twitter"
      ref={containerRef}
    >
      <Item className="menu-twitter">
        <ChatIcon className="menu-twitter" />
        <span className="menu-twitter">Tópicos</span>
      </Item>
      <Item className="menu-twitter">
        <ThunderIcon className="menu-twitter" />
        <span className="menu-twitter">Moments</span>
      </Item>
      <Item className="menu-twitter">
        <OutboxIcon className="menu-twitter" />
        <span className="menu-twitter" >Anúncios do Twitter</span>
      </Item>
      <Item className="menu-twitter">
        <ChartIcon className="menu-twitter" />
        <span className="menu-twitter" >Estatísticas</span>
      </Item>
      <Line />
      <Item className="menu-twitter">
        <CogIcon className="menu-twitter" />
        <span className="menu-twitter" >Configurações e privacidade</span>
      </Item>
      <Item className="menu-twitter">
        <QuestionIcon className="menu-twitter" />
        <span className="menu-twitter" >Central de Ajuda</span>
      </Item>
      <Item className="menu-twitter">
        <PaintIcon className="menu-twitter" />
        <span className="menu-twitter" >Tela</span>
      </Item>
    </Container>
  );
}

export default Menu;
