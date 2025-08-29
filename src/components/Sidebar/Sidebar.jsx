/** @jsxImportSource @emotion/react */
import { useQueryClient } from "@tanstack/react-query";
import * as s from "./styles";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import { GrGraphQl } from "react-icons/gr";
import { MdOutlinePayment } from "react-icons/md";

function Sidebar({ toggled }) {
  const navigate = useNavigate();
  const queryClient = useQueryClient();
  const principalData = queryClient.getQueryData(["getPrincipal"]);
  const principalUser = principalData?.data.data;
  const [selcted, setSelected] = useState(1);

  return (
    <aside css={s.sidebar(toggled)}>
      <div css={s.menuItem(selcted)}>
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
            navigate("/");
            setSelected(3);
          }}
        >
          Feedback
        </div>
      </div>
      <div css={s.footer}>
        <div css={s.subtitle}>Logged in as:</div>
        <div>{principalUser?.username}</div>
      </div>
    </aside>
  );
}

export default Sidebar;
