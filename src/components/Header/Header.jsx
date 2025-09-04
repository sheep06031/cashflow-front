/** @jsxImportSource @emotion/react */
import * as s from "./styles";

import { IoIosMenu } from "react-icons/io";
import { FaLock, FaUser } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import SignInModal from "../Modal/SigninModal/SigninModal";
import SignUpModal from "../Modal/SignupModal/SignupModal";
import logo from "../../assets/headerlogo.png";
import { MdLogout } from "react-icons/md";
import { usePrincipalState } from "../../store/usePrincipalStore";

function Header({ toggled, setToggled }) {
  const [openSignin, setOpenSignin] = useState(false);
  const [openSignup, setOpenSignup] = useState(false);
  const navigate = useNavigate();
  const { isLoggedIn, logout } = usePrincipalState();

  const onClickNavHandler = (path) => {
    navigate(path);
  };

  const onClickLogoutBtn = () => {
    logout();
  };

  return (
    <nav css={s.navBar}>
      {isLoggedIn ? (
        <button
          css={s.sideBarToggleBtn(toggled)}
          onClick={() => {
            setToggled((prev) => !prev);
          }}
        >
          <IoIosMenu />
        </button>
      ) : (
        <></>
      )}

      <ul>
        <li
          onClick={() => {
            onClickNavHandler("/");
          }}
        >
          <img src={logo} alt="CashFlow Logo" css={s.logo} />
        </li>
        {isLoggedIn ? (
          <li css={s.userContainer}>
            <div>
              <p onClick={() => onClickLogoutBtn()}>
                <MdLogout />
              </p>
              <p onClick={() => navigate("/mypage")}>
                <FaUser />
              </p>
            </div>
          </li>
        ) : (
          <li css={s.authBtnContainer}>
            <div>
              <button id="signinBtn" onClick={() => setOpenSignin(true)}>
                Sign in
              </button>
              <button id="signupBtn" onClick={() => setOpenSignup(true)}>
                Sign up
              </button>
            </div>
          </li>
        )}
      </ul>

      {openSignin && <SignInModal onClose={() => setOpenSignin(false)} />}
      {openSignup && <SignUpModal onClose={() => setOpenSignup(false)} />}
    </nav>
  );
}

export default Header;
