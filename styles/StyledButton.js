import styled from 'styled-components'

export const LinkButton = styled.div`
  color: white;
  cursor: pointer;
  padding: 0.2rem;
  border-radius: 6px;
  transition: 0.2s all;

  &:hover {
    cursor: pointer;
  }
`

export const CardButton = styled.div`
  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
  width: fit-content;
  padding: 0.8rem 1.2rem;
  border-radius: 6px;
  cursor: pointer;

  @media (max-width: 768px) {
    padding: 0.4rem 0.8rem;
  }
`
