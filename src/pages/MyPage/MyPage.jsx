/** @jsxImportSource @emotion/react */
import { useEffect, useState } from "react";
import CustomInput from "../../components/CustomInput/CustomInput";
import { usePrincipalState } from "../../store/usePrincipalStore";
import * as s from "./styles";
// labelText, name, type, placeholder, item, setItem, disabled
function MyPage() {
  const { principal } = usePrincipalState();
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [birthday, setBirthday] = useState();

  useEffect(() => {}, []);

  return (
    <div css={s.background}>
      <div css={s.container}>
        <div css={s.detailCardHeader}>Account Details</div>
        <div css={s.detailContent}>
          <CustomInput
            labelText={"Username (how you Signin on the site)"}
            name={"username"}
            type={"text"}
            placeholder={principal?.username}
            disabled={"disabled"}
          />
          <div css={s.name}>
            <CustomInput
              labelText={"First name"}
              name={"firstName"}
              type={"text"}
              placeholder={"ex: GilDong"}
              item={firstName}
              setItem={setFirstName}
            />
            <CustomInput
              labelText={"Last name"}
              name={"lastName"}
              type={"text"}
              placeholder={"ex: Hong"}
              item={lastName}
              setItem={setLastName}
            />
          </div>
          <CustomInput
            labelText={"Email address"}
            name={"email"}
            type={"text"}
            placeholder={principal?.email}
            disabled={"disabled"}
          />
          <div css={s.bottom}>
            <div css={s.birthday}>
              <CustomInput
                labelText={"Birthday"}
                name={"birthday"}
                type={"date"}
                item={birthday}
                setItem={setBirthday}
              />
            </div>
            <div css={s.btnContainer}>
              <button css={s.saveButton}>Save</button>
              <button css={s.cancelButton}>Cancel</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MyPage;
