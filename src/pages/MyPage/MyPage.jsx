/** @jsxImportSource @emotion/react */
import { useEffect, useState } from "react";
import CustomInput from "../../components/CustomInput/CustomInput";
import { usePrincipalState } from "../../store/usePrincipalStore";
import * as s from "./styles";
import {
  getDetailRequest,
  updateDetailRequest,
} from "../../apis/account/accountApis";
import { FaSadCry } from "react-icons/fa";

function MyPage() {
  const { principal } = usePrincipalState();
  const [firstName, setFirstName] = useState("None");
  const [lastName, setLastName] = useState("None");
  const [birthday, setBirthday] = useState("");
  const [isEdit, setIsEdit] = useState(false);

  const editBtnOnClickHandler = () => {
    setIsEdit((prev) => !prev);
  };

  const saveBtnOnClickHandler = () => {
    updateDetailRequest({
      firstname: firstName,
      lastname: lastName,
      birthday: birthday,
    })
      .then((response) => {
        if (response.data.status === "success") {
          alert(response.data.message);
          setIsEdit(false);
          return;
        } else if (response.data.status === "failed") {
          alert(response.data.message);
          return;
        }
      })
      .catch((error) => {
        console.log(error.message);
      });
  };

  useEffect(() => {
    const getDetail = () => {
      getDetailRequest()
        .then((response) => {
          if (response.data.status === "success") {
            const userDetail = response.data.data;

            setFirstName(userDetail.firstname || "None");
            setLastName(userDetail.lastname || "None");
            setBirthday(userDetail.birthday || "");
          } else if (response.data.status === "failed") {
            alert(response.data.message);
          }
        })
        .catch((error) => {
          console.log(error.message);
        });
    };
    getDetail();
  }, []);

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
            disabled={true}
          />
          <div css={s.name}>
            <CustomInput
              labelText={"First name"}
              name={"firstName"}
              type={"text"}
              placeholder={"ex: GilDong"}
              item={firstName}
              setItem={setFirstName}
              disabled={!isEdit}
            />
            <CustomInput
              labelText={"Last name"}
              name={"lastName"}
              type={"text"}
              placeholder={"ex: Hong"}
              item={lastName}
              setItem={setLastName}
              disabled={!isEdit}
            />
          </div>
          <CustomInput
            labelText={"Email address"}
            name={"email"}
            type={"text"}
            placeholder={principal?.email}
            disabled={true}
          />
          <div css={s.bottom}>
            <div css={s.birthday}>
              <CustomInput
                labelText={"Birthday"}
                name={"birthday"}
                type={"date"}
                item={birthday}
                setItem={setBirthday}
                disabled={!isEdit}
              />
            </div>
            <div css={s.btnContainer}>
              {isEdit ? (
                <>
                  <button css={s.saveButton} onClick={saveBtnOnClickHandler}>
                    Save
                  </button>
                  <button css={s.cancelButton} onClick={editBtnOnClickHandler}>
                    Cancel
                  </button>
                </>
              ) : (
                <>
                  <button css={s.editButton} onClick={editBtnOnClickHandler}>
                    Edit
                  </button>
                </>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MyPage;
