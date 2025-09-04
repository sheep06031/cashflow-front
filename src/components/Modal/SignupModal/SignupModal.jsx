/** @jsxImportSource @emotion/react */
import * as s from "./styles";
import Modal from "../Modal";
import { IoClose } from "react-icons/io5";
import { useEffect, useState } from "react";
import { sendMailRequest, signupRequest } from "../../../apis/auth/authApis";

function SignUpModal({ onClose }) {
  const [step, setStep] = useState("form");
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [code, setCode] = useState("");
  const [message, setMessage] = useState("");
  const [timeLeft, setTimeLeft] = useState(300);

  const handleSendMail = (e) => {
    e.preventDefault();
    if (
      username.trim().length === 0 ||
      password.trim().length === 0 ||
      confirmPassword.trim().length === 0 ||
      email.trim().length === 0
    ) {
      setMessage("Please fill all fields");
      return;
    }

    if (password !== confirmPassword) {
      setMessage("Passwords do not match");
      return;
    }
    setStep("loading");
    sendMailRequest({ username: username, email: email, password: password })
      .then((response) => {
        if (response.data.status === "success") {
          setStep("verify");
          setMessage("Verification code has been sent to your email");
        } else {
          setStep("form");
          setMessage(response.data.message);
        }
      })
      .catch((err) => {
        setStep("form");
        setMessage(err.message);
      });
  };

  const handleResend = (e) => {
    e.preventDefault();
    setStep("loading");
    sendMailRequest({ username: username, email: email, password: password })
      .then((response) => {
        if (response.data.status === "success") {
          setStep("verify");
          setMessage("New verification code has been sent to your email");
        } else {
          setStep("verify");
          setMessage(response.data.message);
        }
      })
      .catch((err) => {
        setStep("verify");
        setMessage(err.message);
      })
      .finally(setCode(""));
  };

  const handleVerify = (e) => {
    e.preventDefault();
    if (!code) {
      setMessage("Enter the verification code");
      return;
    }
    setStep("loading");
    signupRequest(
      { username: username, email: email, password: confirmPassword },
      code
    )
      .then((response) => {
        if (response.data.status === "success") {
          setStep("success");
        } else {
          setStep("verify");
          setMessage(response.data.message);
        }
      })
      .catch((err) => {
        setStep("form");
        setMessage(err.message);
      })
      .finally(setCode(""));
  };

  useEffect(() => {
    if (password.length > 0) {
      const passwordRegex =
        /^(?=.*[a-zA-Z])(?=.*[0-9])(?=.*[!@#$%^&*?_]).{8,16}$/;
      if (!passwordRegex.test(password)) {
        setMessage(
          "Password must be 8–16 characters long and include letters, numbers, and special characters"
        );
        return;
      }
    }

    if (email.length > 0) {
      const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/i;
      if (!emailRegex.test(email)) {
        setMessage("Please enter a valid email address");
        return;
      }
    }

    setMessage("");
  }, [password, email]);

  useEffect(() => {
    if (step === "verify") {
      setTimeLeft(300);
      const timer = setInterval(() => {
        setTimeLeft((prev) => {
          if (prev <= 1) {
            clearInterval(timer);
            return 0;
          }
          return prev - 1;
        });
      }, 1000);

      return () => clearInterval(timer);
    }
  }, [step]);

  const formatTime = (seconds) => {
    const m = Math.floor(seconds / 60)
      .toString()
      .padStart(2, "0");
    const s = (seconds % 60).toString().padStart(2, "0");
    return `${m}:${s}`;
  };

  return (
    <Modal onClose={onClose}>
      <div css={s.signupBox}>
        <div css={s.headerRow}>
          <button css={s.closeBtn} onClick={onClose}>
            <IoClose />
          </button>
        </div>

        {step === "form" && (
          <>
            <h1>Sign Up</h1>
            <form onSubmit={handleSendMail}>
              <input
                type="text"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                placeholder="ID"
              />
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Email"
              />
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Password"
              />
              <input
                type="password"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                placeholder="Confirm Password"
              />
              <button type="submit">Sign Up</button>
              <div className={`error-box ${message ? "show" : ""}`}>
                <p>{message}</p>
              </div>
            </form>
          </>
        )}

        {step === "loading" && (
          <div css={s.loadingBox}>
            <img
              src="https://raw.githubusercontent.com/Tarikul-Islam-Anik/Animated-Fluent-Emojis/master/Emojis/Smilies/Thinking%20Face.png"
              alt="Loading..."
              width="250"
              height="250"
            />
            <h2>Loading...</h2>
          </div>
        )}

        {step === "verify" && (
          <>
            <h1>Verifying</h1>
            <form css={s.codeContainer} onSubmit={handleVerify}>
              <span>
                <input
                  type="text"
                  placeholder="Enter 5-digit code"
                  value={code}
                  onChange={(e) => setCode(e.target.value)}
                />
                <div css={s.timer}>{formatTime(timeLeft)}</div>
              </span>

              <div css={s.btnContainer}>
                <button onClick={handleResend}>Resend code</button>
                <button type="submit">Verify</button>
              </div>
              <div className={`error-box ${message ? "show" : ""}`}>
                <p>{message}</p>
              </div>
            </form>
          </>
        )}
        {step === "success" && (
          <div css={s.successBox}>
            <img
              src="https://raw.githubusercontent.com/Tarikul-Islam-Anik/Animated-Fluent-Emojis/master/Emojis/Smilies/Partying%20Face.png"
              alt="Partying Face"
              width="250"
              height="250"
            />
            <h1>Welcome 🎉</h1>
            <p>Your account has been created successfully!</p>
          </div>
        )}
      </div>
    </Modal>
  );
}

export default SignUpModal;
