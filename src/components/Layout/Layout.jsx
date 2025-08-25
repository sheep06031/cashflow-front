/** @jsxImportSource @emotion/react */
import * as s from "./styles";

import { useState } from "react";
import Header from "../Header/Header";
import Sidebar from "../Sidebar/Sidebar";

function Layout({ isLogin, setIsLogin ,children }) {
  const [toggled, setToggled] = useState(false);
  return (
    <>
      <Header toggled={toggled} setToggled={setToggled} isLogin={isLogin} setIsLogin={setIsLogin}/>
      <Sidebar toggled={toggled} />
      <div css={s.page(toggled)}>
        {children}
      </div>
    </>
  );
}

export default Layout;
