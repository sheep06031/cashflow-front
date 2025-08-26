/** @jsxImportSource @emotion/react */
import { useQueryClient } from "@tanstack/react-query";
import * as s from "./styles";

function Sidebar({ toggled }) {
  const queryClient = useQueryClient();
  const principalData = queryClient.getQueryData(["getPrincipal"]);
  const principalUser = principalData?.data.data;
  return (
    <aside css={s.sidebar(toggled)}>
      <p>사이드바 내용</p>
      <div css={s.footer}>
        <div css={s.subtitle}>Logged in as:</div>
        <div>{principalUser?.username}</div>
      </div>
    </aside>
  );
}

export default Sidebar;
