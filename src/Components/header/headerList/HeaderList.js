import React from "react";

import { HeaderNavigation } from "./HeaderListStyled";

const HeaderList = ({ data }) => {
  return (
    <HeaderNavigation>
      <ul className="navigationList">
        {data.map((headerItem) => (
          <li key={headerItem} className="navigationListItem">
            <a href={`${headerItem}`} className="navigationListItemAnchor">
              {headerItem}
            </a>
          </li>
        ))}
      </ul>
    </HeaderNavigation>
  );
};

export default HeaderList;
