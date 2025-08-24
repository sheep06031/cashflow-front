/** @jsxImportSource @emotion/react */
import * as s from "./styles";

function Sidebar({ toggled }) {
  return (
    <aside css={s.sidebar(toggled)}>
      <p>사이드바 내용</p>
      <div css={s.footer}>
        <div css={s.subtitle}>Logged in as:</div>
        <div>JUYEOP KIM</div>
      </div>
    </aside>
  );
}

export default Sidebar;
