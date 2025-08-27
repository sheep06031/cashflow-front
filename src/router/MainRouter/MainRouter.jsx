import { Route, Routes } from "react-router-dom";
import Overview from "../../pages/Overview/Overview";
import Home from "../../pages/Home/Home";
import ProtectedRoute from "../../components/ProtectedRoute/ProtectedRoute";

function MainRouter() {
  return (
    <>
      <Routes>
        <Route element={<ProtectedRoute />}>
          <Route path="/overview" element={<Overview />} />
        </Route>
        <Route path="/" element={<Home />} />
      </Routes>
    </>
  );
}

export default MainRouter;
