import styled from 'styled-components'

export const Wrapper = styled.div`
  /* border-right: 1px solid grey; */
  flex-direction: column;
  margin-left: 10px;
  padding-left: 10%;
`
export const TagItem = styled.div`
  margin-bottom: 18px;
  font-size: medium;
  display: flex;
  &:hover {
    cursor: pointer;
    color: tomato;
  }
`
export const TagDot = styled.div`
  width: 14px;
  height: 14px;
  margin-top: 5px;
  margin-right: 12px;
  border-radius: 100%;
  background-color: ${props => props.color};
  display: inline-block;
  opacity: ${props => (props.active === props.title ? 1 : 0.7)};
`

export const TagTitle = styled.div`
  color: ${props => (props.active === props.title ? props.color : '#799CA0')};
  font-weight: ${props => (props.active === props.title ? 'bold' : 'normal')};
`