/** @jsxImportSource @emotion/react */

import { useEffect, useState } from "react";
import CustomInput from "../../components/CustomInput/CustomInput";
import * as s from "./styles";
import { changePasswordRequest } from "../../apis/account/accountApis";
import { usePrincipalState } from "../../store/usePrincipalStore";

function ChangePassword() {
  const [currentPassword, setCurrentPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [message, setMessage] = useState("");
  const { logout } = usePrincipalState();

  const saveBtnOnClickHandler = () => {
    changePasswordRequest({
      oldPassword: currentPassword,
      newPassword: confirmPassword,
    })
      .then((response) => {
        if (response.data.status === "success") {
          alert(response.data.message);
          logout();
          return;
        } else if (response.data.status === "failed") {
          setMessage(response.data.message);
          return;
        }
      })
      .catch((error) => {
        console.log(error.message);
      });
  };

  useEffect(() => {
    const passwordRegex =
      /^(?=.*[a-zA-Z])(?=.*[0-9])(?=.*[!@#$%^&*?_]).{8,16}$/;

    if (newPassword && !passwordRegex.test(newPassword)) {
      setMessage(
        "Password must be 8–16 characters long and include letters, numbers, and special characters"
      );
    } else if (confirmPassword && newPassword !== confirmPassword) {
      setMessage("Passwords do not match");
    } else {
      setMessage("");
    }
  }, [newPassword, confirmPassword]);

  return (
    <div css={s.background}>
      <div css={s.container}>
        <div css={s.detailCardHeader}>Change passwrod</div>
        <div css={s.detailContent}>
          <CustomInput
            labelText={"Current password"}
            name={"currentPassword"}
            type={"password"}
            placeholder={"Enter current password"}
            item={currentPassword}
            setItem={setCurrentPassword}
          />
          <CustomInput
            labelText={"New password"}
            name={"newPassword"}
            type={"password"}
            placeholder={"Enter new password"}
            item={newPassword}
            setItem={setNewPassword}
          />
          <CustomInput
            labelText={"Confirm password"}
            name={"confirmPassword"}
            type={"password"}
            placeholder={"Confirm new password"}
            item={confirmPassword}
            setItem={setConfirmPassword}
          />
        </div>
        <div css={s.footer}>
          <button
            css={s.saveButton}
            onClick={saveBtnOnClickHandler}
            disabled={
              message.length > 0 ||
              !currentPassword ||
              !newPassword ||
              !confirmPassword
            }
          >
            Save
          </button>

          <p>{message}</p>
        </div>
      </div>
    </div>
  );
}

export default ChangePassword;
