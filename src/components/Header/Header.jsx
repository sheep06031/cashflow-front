/** @jsxImportSource @emotion/react */
import * as s from "./styles";

import { IoIosMenu } from "react-icons/io";
import { FaUser } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import SignInModal from "../Modal/SigninModal/SigninModal";
import SignUpModal from "../Modal/SignupModal/SignupModal";
import logo from "../../assets/headerlogo.png";
import { MdLogout } from "react-icons/md";

function Header({ toggled, setToggled, isLogin, setIsLogin }) {
  const [openSignin, setOpenSignin] = useState(false);
  const [openSignup, setOpenSignup] = useState(false);
  const navigate = useNavigate();

  const onClickNavHandler = (path) => {
    navigate(path);
  };

  const onClickLogoutBtn = () => {
    localStorage.removeItem("accessToken");
    window.location.href = "/";
  };

  return (
    <nav css={s.navBar}>
      {!isLogin ? (
        <></>
      ) : (
        <button
          css={s.sideBarToggleBtn(toggled)}
          onClick={() => {
            setToggled((prev) => !prev);
          }}
        >
          <IoIosMenu />
        </button>
      )}

      <ul>
        <li
          onClick={() => {
            onClickNavHandler("/");
          }}
        >
          <img src={logo} alt="CashFlow Logo" css={s.logo} />
        </li>
        <li css={!isLogin ? s.authBtnContainer : s.userContainer}>
          {!isLogin ? (
            <div>
              <button id="signinBtn" onClick={() => setOpenSignin(true)}>
                Sign in
              </button>
              <button id="signupBtn" onClick={() => setOpenSignup(true)}>
                Sign up
              </button>
            </div>
          ) : (
            <div>
              <p onClick={() => onClickLogoutBtn()}>
                <MdLogout />
              </p>
              <p>
                <FaUser />
              </p>
            </div>
          )}
        </li>
      </ul>

      {openSignin && (
        <SignInModal
          onClose={() => setOpenSignin(false)}
          setIsLogin={setIsLogin}
        />
      )}
      {openSignup && <SignUpModal onClose={() => setOpenSignup(false)} />}
    </nav>
  );
}

export default Header;
