import styled from 'styled-components'

export const StyledHeaderProjectList = styled.div`
  .header-top {
    display: flex;
    align-items: center;
    justify-content: space-between;

    @media (max-width: 768px) {
      flex-direction: column;
      align-items: start;
    }
  }
`
