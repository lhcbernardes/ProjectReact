import styled from 'styled-components';

export const Container = styled.div`
  padding-bottom: 12px;

  .profile-cover {
    width: 100%;
    background: var(--color-primary);
  }

  .profile-picture {
    width: 100%;
    height: 100%;
    display: flex;
  }

  h1 {
    font-size: 25px;
    font-weight: 600;
    text-align: center;
    color: var(--color-secondary);
  }

  h2 {
    margin-top: 4px;
    font-size: 20px;
    font-weight: 400;
    text-align: center;
    color: var(--color-gray);
  }

  .separator {
    width: 100%;
    border-bottom: 1px solid var(--color-separator);
    margin: 16px 0 12px;
  }

  .key-value {
    display: flex;
    align-items: center;
    justify-content: space-between;
    font-size: 12px;
    margin: 0 12px;
    font-weight: 600;

    .key {
      color: var(--color-gray);
    }
    .value {
      color: var(--color-link);
    }
  }
`;
