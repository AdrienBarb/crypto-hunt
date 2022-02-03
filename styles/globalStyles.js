import styled, { createGlobalStyle } from 'styled-components'
import { normalize } from 'styled-normalize'

export const GlobalStyle = createGlobalStyle`
    ${normalize}
    * {
        text-decoration: none;
    }

    html {
        box-sizing: border-box;
        font-size: 16px;
    }

    body {
        background: black;
        color: white;
        overflow-x: hidden;
        font-family: 'Rubik';
    }

    a {
        text-decoration: none;
        color: inherit;
    }

    #fp-nav {
        left: 17px !important;
        width: fit-content;
        @media (max-width: 768px) {
            left: 6px !important;
        }

    }
    
    #fp-nav ul li .fp-tooltip .fp-right {
        left: 20px !important;
        color: #1E5871 !important;
        overflow: inherit;
    }

    #fp-nav ul li a span {
        background: #e16f64;
    }
`

export const StyledLayout = styled.div`
  margin: 0 auto;
`
