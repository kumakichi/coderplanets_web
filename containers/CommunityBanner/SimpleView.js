import React from 'react'

// import { ICON_CMD } from '../../config'
import Tabber from '../../components/Tabber'

import {
  Wrapper,
  BannerContentWrapper,
  TabberWrapper,
} from './styles/simple_view'

import { tabberChange } from './logic'

const SimpleView = ({ community, activeThread }) => (
  <Wrapper>
    <BannerContentWrapper>
      <TabberWrapper>
        <Tabber
          source={community.threads}
          onChange={tabberChange}
          active={activeThread}
        />
      </TabberWrapper>
    </BannerContentWrapper>
  </Wrapper>
)

export default SimpleView
