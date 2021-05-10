import styled , { createGlobalStyle} from 'styled-components';
import { Link } from 'react-scroll'

export const GlobalStyle = createGlobalStyle`
 * {
     box-sizing: border-box;
     margin: 0;
     padding: 0;
     font-family: 'Source Sans Pro' , sans-serif;
 }
`;
export const Button = styled(Link)`
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 50px;
    white-space: nowrap;
    cursor: pointer;;
    outline: none;
    border: none;
    transition: all .5s ease-in-out;
    color: ${({dark}) => (dark ? '#010606' : '#fff')};
    background: ${({primary}) => (primary ? '#01bf71' : '#010606')};
    padding: ${({big}) => (big ? '14px 48px' : '12px 30px')};
    font-size: ${({fontBig}) => (fontBig ? '20px' : '16px')};
    &:hover {
        transition: all .5s ease-in-out;
        background: ${({primary}) => (primary ? '#fff' : '#01bf71')};
    }
`