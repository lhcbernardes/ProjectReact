import styled from "styled-components";

export const Background = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  width: 100%;
  height: 100%;
  background: rgb(18, 18, 20);
`;

export const Form = styled.form`
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
    transition: ease-in-out, width 0.35s ease-in-out;
  }

  input:focus {
    border: 2px solid var(--color-primary);
  }

  input.invalid {
    border-color: 2px solid red;
  }

  a {
    font-size: 14px;
    font-weight: 600;
    color: var(--color-primary);
    margin: 8px 0px 24px;
    opacity: 0.8;
    transition: opacity 0.2s ease 0s;
    align-self: flex-start;
    text-decoration: none;
    transition: 0.3s;
  }

  a:hover {
    opacity: 1;
  }

  button {
    background-color: var(--color-primary);
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

  .checkbox-wrapper {
    display: flex;
    align-items: baseline;
    justify-content: space-between;
  }

  .checkbox {
    vertical-align: top;
    display: inline-block;
    width: 15px;
    margin-top: 15px;
    display: flex;
    align-content: center;
  }

  .checkbox-label {
    white-space: normal;
    display: inline-block;
  }
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

 h4 {
  margin: 5%;
  color: var(--color-primary);
  text-transform: uppercase;
  }
`;

export const Left = styled.div`
  flex: 1;
  height: auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: left;
  border-radius: 5px;
  margin-right: 10%;
  background: var(--color-card);
`;

export const Right = styled.div`
  flex: 1;
  height: auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: left;
`;
