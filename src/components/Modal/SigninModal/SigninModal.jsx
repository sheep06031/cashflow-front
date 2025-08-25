/** @jsxImportSource @emotion/react */
import * as s from "./styles";
import Modal from "../Modal";
import { IoClose } from "react-icons/io5";
import { signinRequest } from "../../../apis/auth/authApis";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

function SignInModal({ onClose, setIsLogin }) {
  const navigate = useNavigate();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const signinOnSubmitHandler = (e) => {
    e.preventDefault();

    if (username.trim().length === 0 || password.trim().length === 0) {
      alert("아이디 또는 비밀번호를 입력해주세요.");
      return;
    } else {
      signinRequest({
        username: username,
        password: password,
      })
        .then((response) => {
          if (response.data.status === "success") {
            localStorage.setItem("accessToken", response.data.data);
            setIsLogin(true);
            onClose();
            alert(response.data.message);
            navigate("/overview");
          } else if (response.data.status === "failed") {
            alert(response.data.message);
            return;
          }
        })
        .catch((error) => {
          alert(error.message);
        });
    }
  };

  return (
    <Modal onClose={onClose}>
      <div css={s.signInBox}>
        <div css={s.headerRow}>
          <button css={s.closeBtn} onClick={onClose}>
            <IoClose />
          </button>
        </div>
        <h2>Sign In</h2>
        <form onSubmit={signinOnSubmitHandler}>
          <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            placeholder="Id"
          />
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Password"
          />
          <button type="submit">Sign In</button>
        </form>
      </div>
    </Modal>
  );
}

export default SignInModal;
