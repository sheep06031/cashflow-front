/** @jsxImportSource @emotion/react */
import * as s from "./styles";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { GrGraphQl } from "react-icons/gr";
import { MdOutlinePayment } from "react-icons/md";
import { usePrincipalState } from "../../store/usePrincipalStore";
import { AiFillOpenAI } from "react-icons/ai";
import { FaLock, FaUser } from "react-icons/fa";



function Sidebar({ toggled }) {
  const navigate = useNavigate();
  const { principal } = usePrincipalState();
  const location = useLocation();
  const [selcted, setSelected] = useState(1);

  useEffect(() => {
    if (location.pathname.startsWith("/overview")) {
      setSelected(1);
    } else if (location.pathname.startsWith("/transaction")) {
      setSelected(2);
    } else if (location.pathname.startsWith("/feedback")) {
      setSelected(3);
    } else if (location.pathname.startsWith("/mypage")) {
      setSelected(4);
    } else if (location.pathname.startsWith("/chagepassword")) {
      setSelected(5);
    }
  }, [location.pathname]);

  return (
    <aside css={s.sidebar(toggled)}>
      <div css={s.menuItem(selcted)}>
        <span>Service</span>
        <div
          onClick={() => {
            navigate("/overview");
            setSelected(1);
          }}
        >
          <GrGraphQl />
          Overview
        </div>
        <div
          onClick={() => {
            navigate("/transaction");
            setSelected(2);
          }}
        >
          <MdOutlinePayment />
          Transactions
        </div>
        <div
          onClick={() => {
            navigate("/feedbacks");
            setSelected(3);
          }}
        >
          <AiFillOpenAI />
          Feedbacks
        </div>
        <span>Account</span>
        <div
          onClick={() => {
            navigate("/mypage");
            setSelected(4);
          }}
        >
          <FaUser />
          My Page
        </div>
        <div
          onClick={() => {
            navigate("/changepassword");
            setSelected(5);
          }}
        >
          <FaLock />
          Security
        </div>
      </div>
      <div css={s.footer}>
        <div css={s.subtitle}>Logged in as:</div>
        <div>{principal?.username}</div>
      </div>
    </aside>
  );
}

export default Sidebar;
