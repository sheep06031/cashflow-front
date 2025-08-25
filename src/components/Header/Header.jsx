/** @jsxImportSource @emotion/react */
import * as s from "./styles";

import { IoIosMenu } from "react-icons/io";
import { FaUser } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import SignInModal from "../Modal/SigninModal/SigninModal";
import SignUpModal from "../Modal/SignupModal/SignupModal";

function Header({ toggled, setToggled, isLogin, setIsLogin }) {
  const [openSignin, setOpenSignin] = useState(false);
  const [openSignup, setOpenSignup] = useState(false);
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
        <li
          onClick={() => {
            onClickNavHandler("/");
          }}
        >
          Cashflow
        </li>
        <li css={!isLogin ? s.authBtnContainer : s.user}>
          {!isLogin ? (
            <div>
              <button id="signinBtn" onClick={() => setOpenSignin(true)}>Sign in</button>
              <button id="signupBtn" onClick={() => setOpenSignup(true)}>Sign up</button>
            </div>
          ) : (
            <FaUser />
          )}
        </li>
      </ul>

      {openSignin && <SignInModal onClose={() => setOpenSignin(false)} setIsLogin={setIsLogin}/>}
      {openSignup && <SignUpModal onClose={() => setOpenSignup(false)} />}
    </nav>
  );
}

export default Header;
