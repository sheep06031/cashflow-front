/** @jsxImportSource @emotion/react */
import * as s from "./styles";
import { useQuery } from "@tanstack/react-query";
import { useEffect, useState } from "react";
import Header from "../Header/Header";
import Sidebar from "../Sidebar/Sidebar";
import { getPrincipalRequest } from "../../apis/auth/authApis";
import { usePrincipalState } from "../../store/usePrincipalStore";

function Layout({ children }) {
  const [toggled, setToggled] = useState(false);
  const accessToken = localStorage.getItem("accessToken");
  const {login } = usePrincipalState();
	const { data, isLoading  } = useQuery({
		queryKey: ["getPrincipal"],
		queryFn: getPrincipalRequest,
		enabled: !!accessToken,
	});
  useEffect(() => {
    if(data?.data.status === "success") {
      login(data?.data.data)
    }
  },[data, login])

  if (isLoading) {
    return <div>Loading...</div>; 
  }

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
