/** @jsxImportSource @emotion/react */
import * as s from "./styles";

import { IoIosMenu } from "react-icons/io";
import { FaUser } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

function Header({ toggled, setToggled }) {
  const navigate = useNavigate();

  const onClickNavHandler = (path) => {
    navigate(path);
  };

  return (
    <nav css={s.navBar}>
      <button
        css={s.sideBarToggleBtn(toggled)}
        onClick={() => {
          setToggled((prev) => !prev);
        }}
      >
        <IoIosMenu />
      </button>
      <ul>
        <li onClick={() => {onClickNavHandler("/overview")}}>Cashflow</li>
        <li css={s.user}>
          <FaUser />
        </li>
      </ul>
    </nav>
  );
}

export default Header;
