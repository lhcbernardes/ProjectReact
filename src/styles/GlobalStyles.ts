import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  span {
    display: flex;
    align-items: center;
  }
  html, body, #root {
    height: 100%;
    width: 100%;
    background: var(--color-background);
  }
  *, button, input {
    font-family: -apple-system,system-ui,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Fira Sans,Ubuntu,Oxygen,Oxygen Sans,Cantarell,Droid Sans,Apple Color Emoji,Segoe UI Emoji,Segoe UI Symbol,Lucida Grande,Helvetica,Arial,sans-serif;
  }

  a {
    font-size: 14px;
    font-weight: 600;
    color: var(--color-white);
    opacity: 0.8;
    transition: opacity 0.2s ease 0s;
    text-decoration: none;
    transition: 0.3s;
  }

  label {
        font-size: 18px;
        font-weight: 600;
        color: var(--color-header);
        margin: 8px 0px 24px;
        opacity: 0.8;
        transition: opacity 0.2s ease 0s;
        align-self: flex-start;
        text-decoration: none;
        transition: 0.3s;
  }

 
  
  :root {
    --color-header: #8257E5;
    --color-linkedin: #0077b5;
    --color-input: #e1e9ee;
    --color-icons: #c7d1d8;
    --color-hashtag: #7a8b98;
    --color-card: #202024;
    --color-background: #1a1921;
    --color-ad-text: #434649;
    --color-panel: #fff;
    --color-link: #0073b1;
    --color-black: rgba(0,0,0,.9);
    --color-gray: rgba(0,0,0,.6);
    --color-separator: rgba(0,0,0,0.15);
    --color-white: #FFF;
  }
`;
