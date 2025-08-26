/** @jsxImportSource @emotion/react */
import * as s from "./styles";
import { useQuery } from "@tanstack/react-query";
import { useState } from "react";
import Header from "../Header/Header";
import Sidebar from "../Sidebar/Sidebar";
import { getPrincipalRequest } from "../../apis/auth/authApis";

function Layout({ children }) {
  const [toggled, setToggled] = useState(false);
  const accessToken = localStorage.getItem("accessToken");
	const { data, isLoading } = useQuery({
		queryKey: ["getPrincipal"],
		queryFn: getPrincipalRequest,
		enabled: !!accessToken,
	});
  return (
    <>
      <Header toggled={toggled} setToggled={setToggled}/>
      <Sidebar toggled={toggled} />
      <div css={s.page(toggled)}>
        {children}
      </div>
    </>
  );
}

export default Layout;
