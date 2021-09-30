import styled from 'styled-components';

export const HeaderNavigation = styled.nav`
  .navigationList {
    list-style: none;
    display: flex;
    flex-direction: column;
    justify-content: center;
  }
  .navigationListItemAnchor {
    text-decoration: none;
    color: #819ff5;
    text-transform: uppercase;
    &:hover {
      color: #5f73a1;
    }
  }

  @media screen and (min-width: 768px) {
    .navigationList {
      flex-direction: row;
    }

    .navigationListItem:not(:last-child) {
      margin-right: 20px;
    }
  }
`;
