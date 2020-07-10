import styled, { css } from 'styled-components';

import {
  BarChart2,
  PaintBrush,
  Question,
  LightningBolt,
  Cog,
  Chat1,
  ArrowRightUp
} from '../../styles/Icons';

import { PropsOfContainer } from '.';

export const Container = styled.div<PropsOfContainer>`

  width: 200px;


  position: absolute;
  margin-top: ${(props) => `calc(${props.top}px - (${props.height}px + 20px))`};

  display: ${(props) => props.isVisible ? 'flex' : 'none' };
  flex-direction: column;

  border-radius: 7px;
  box-shadow: rgba(255, 255, 255, 0.2) 0px 0px 15px, rgba(255, 255, 255, 0.15) 0px 0px 3px 1px;

  background: var(--primary);
`;

export const Item = styled.div`
  display: flex;
  align-items: center;
  padding: 13px;
  cursor: pointer;

  > span {
    font-size: 16px;
  }

  &:hover {
    background: rgba(255, 255, 255, 0.08);
  }

  &:first-child {
    border-radius: 7px 7px 0 0;
  }

  &:last-child {
    border-radius: 0 0 7px 7px;
  }
`;

const iconCSS = css`
  width: 24px;
  height: 24px;
  margin-right: 10px;

  color: var(--white);
`;

export const ChatIcon = styled(Chat1)`
  ${iconCSS}
  -moz-transform:    scaleX(-1);
  -o-transform:      scaleX(-1);
  -webkit-transform: scaleX(-1);
  transform:         scaleX(-1);
`;

export const ThunderIcon = styled(LightningBolt)`
  ${iconCSS}
`;

export const OutboxIcon = styled(ArrowRightUp)`
  ${iconCSS}
`;

export const ChartIcon = styled(BarChart2)`
  ${iconCSS}
`;

export const CogIcon = styled(Cog)`
  ${iconCSS}
`;

export const QuestionIcon = styled(Question)`
  ${iconCSS}
`;

export const PaintIcon = styled(PaintBrush)`
  ${iconCSS}
`;

export const Line = styled.div`
  width: 100%;
  height: 0.1px;
  background: var(--white);
`;

