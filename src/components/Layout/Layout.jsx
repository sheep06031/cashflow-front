/** @jsxImportSource @emotion/react */
import * as s from "./styles";

import { useState } from "react";
import Header from "../Header/Header";
import Sidebar from "../Sidebar/Sidebar";

function Layout({ children }) {
  const [toggled, setToggled] = useState(false);
  return (
    <>
      <Header toggled={toggled} setToggled={setToggled} />
      <Sidebar toggled={toggled} />
      <div css={s.page(toggled)}>
        {children}
      </div>
    </>
  );
}

export default Layout;
