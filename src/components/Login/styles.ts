import styled from 'styled-components';

export const Background = styled.div`
display: flex;
flex-direction: row;
align-items: center;
width: 100%;
height: 100%;
background: rgb(18, 18, 20);
`;

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  margin: 25%;

  @media (max-width: 720px) {
    flex-direction: column;
  }

  img {
    width: 100px;
    height: 100px;
  }

  h1 {
    color: var(--color-white);
    margin-bottom: 24px;
    font-size: 54px;
    line-height: 64px;
  }

  .right,
  .left {
    flex: 1;
    height: auto;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-around;
    text-align: left;
  }

  
   
  .left {
    border-radius: 5px;  
    margin-right: 10%;
    background: var(--color-card);

    form {
      margin: 10% 10% 15% 10%;
      color: var(--color-white);
      text-align: center;

      section {
        margin-bottom: 5%;
      }

      input {
        width: 100%;
        padding: 12px 20px;
        margin: 8px 0;
        font-size: 16px;
        display: inline-block;
        border-radius: 5px;  
        background-color: var(--color-background);
        color: var(--color-white);
        transition: ease-in-out, width .35s ease-in-out;
      }

      input:focus {
        border: 2px solid var(--color-header);        
      }

      input.is-invalid {
        border-color: 2px solid red;
      }

      a {
        font-size: 14px;
        font-weight: 600;
        color: var(--color-header);
        margin: 8px 0px 24px;
        opacity: 0.8;
        transition: opacity 0.2s ease 0s;
        align-self: flex-start;
        text-decoration: none;
        transition: 0.3s;
      }

      a:hover {
        opacity: 1.0;
      }

      button {
        background-color: var(--color-header);
        color: var(--color-white);
        font-size: 16px;
        padding: 14px 20px;
        margin: 8px 0;
        border: none;
        cursor: pointer;
        width: 100%;
        border-radius: 5px;  
        transition: 0.3s;
        font-weight: bold;
        height: 50px;
        text-transform: uppercase;
      }

      button:hover {
        opacity: 0.8;
      }
    }
  }
`;


