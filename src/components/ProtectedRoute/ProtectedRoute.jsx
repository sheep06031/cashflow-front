
import { Navigate, useLocation } from "react-router-dom";
import { useQueryClient } from "@tanstack/react-query";

function ProtectedRoute({ children }) {
  const queryClient = useQueryClient();
	const principalData = queryClient.getQueryData(["getPrincipal"]);
  const location = useLocation();


  if (principalData === undefined) {
    return <Navigate to="/" replace />;
  }

  if (principalData && location.pathname === "/") {
    return <Navigate to="/overview" replace />;
  }

  return children;
}

export default ProtectedRoute;
