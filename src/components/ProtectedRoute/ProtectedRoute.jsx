import { useQuery } from "@tanstack/react-query";
import { Navigate, Outlet } from "react-router-dom";
import { getPrincipalRequest } from "../../apis/auth/authApis";

function ProtectedRoute({ children }) {
  const accessToken = localStorage.getItem("accessToken");
  const { data: principalData, isLoading } = useQuery({
    queryKey: ["getPrincipal"],
    queryFn: getPrincipalRequest,
    enabled: !!accessToken,
  });

  if (!accessToken) {
    return <Navigate to="/" replace />;
  }

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (!principalData || principalData.data?.status === "failed") {
    return <Navigate to="/" replace />;
  }

  return children;
}

export default ProtectedRoute;
