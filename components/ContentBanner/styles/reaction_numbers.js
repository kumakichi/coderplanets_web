import styled from 'styled-components'

import { theme, cs, animate } from '../../../utils'

export const NumbersWrapper = styled.div`
  ${cs.flex('align-center')};
  margin-top: -2.1rem;
`
export const NumbersInfo = styled(NumbersWrapper)`
  margin-top: 0;
`
// background: ${theme('banner.numberHoverBg')};
export const NumberSection = styled.div`
  ${cs.flexColumn('justify-center')};

  padding: 0 5px;
  border-radius: 4px;

  &:hover {
    background: ${({ dead }) => (dead ? '' : theme('banner.numberHoverBg'))};
    cursor: ${({ dead }) => (dead ? '' : 'pointer')};
  }
`
export const NumberTitle = styled.div`
  color: ${theme('banner.numberDesc')};
  &:hover {
    color: ${({ dead }) => (dead ? '' : '#f1c48f')};
    text-decoration: ${({ dead }) => (dead ? '' : 'underline')};
    animation: ${animate.pulseRule};
  }
`
export const NumberItem = styled.div`
  font-size: 1.5rem;
  color: ${theme('banner.number')};
  &:hover {
    color: ${({ dead }) => (dead ? '' : '#f1c48f')};
    text-decoration: ${({ dead }) => (dead ? '' : 'underline')};
    animation: ${animate.pulseRule};
  }
`
export const NumberDivider = styled.div`
  border: 1px solid;
  border-color: ${theme('banner.numberDivider')};
  height: 70%;
  align-self: center;
  margin-left: 10px;
  margin-right: 10px;
`