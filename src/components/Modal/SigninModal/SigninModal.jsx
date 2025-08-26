/** @jsxImportSource @emotion/react */
import * as s from "./styles";
import Modal from "../Modal";
import { IoClose } from "react-icons/io5";
import { signinRequest } from "../../../apis/auth/authApis";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { useQueryClient } from "@tanstack/react-query";

function SignInModal({ onClose }) {
  const navigate = useNavigate();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");
  const queryClient = useQueryClient();

  const signinOnSubmitHandler = (e) => {
    e.preventDefault();

    if (username.trim().length === 0 || password.trim().length === 0) {
      setMessage("Please fill in both username and password");
      return;
    } else {
      signinRequest({
        username: username,
        password: password,
      })
        .then((response) => {
          if (response.data.status === "success") {
            localStorage.setItem("accessToken", response.data.data);
            onClose();
            window.location.href = "/overview"
          } else if (response.data.status === "failed") {
            setMessage(response.data.message);
            return;
          }
        })
        .catch((error) => {
          setMessage(error.message);
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
        <h1>Sign In</h1>
        <form onSubmit={signinOnSubmitHandler}>
          <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            placeholder="ID"
          />
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Password"
          />
          <button type="submit">Sign In</button>
          <div className={`error-box ${message ? "show" : ""}`}>
            <p>{message}</p>
          </div>
        </form>
      </div>
    </Modal>
  );
}

export default SignInModal;
