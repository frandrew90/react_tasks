import styled from "styled-components";

export const HeaderNavigation = styled.nav`
  .navigationList {
    list-style: none;
    display: flex;
  }
  .navigationListItem:not(:last-child) {
    margin-right: 20px;
  }
  .navigationListItemAnchor {
    text-decoration: none;
    color: #819ff5;
    text-transform: uppercase;
    &:hover {
      color: #5f73a1;
    }
  }
`;
