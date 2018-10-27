import styled from 'styled-components'

import Img from '../../Img'
import { theme } from '../../../utils'

export const LableWrapper = styled.div`
  display: flex;
  align-items: center;
`
export const Icon = styled(Img)`
  fill: ${({ active }) =>
    active ? theme('tabs.headerActive') : theme('tabs.header')};

  width: ${({ small }) => (small ? '13px' : '15px')};
  height: ${({ small }) => (small ? '13px' : '15px')};
  display: block;
  margin-right: 5px;
  margin-top: 1px;
`
