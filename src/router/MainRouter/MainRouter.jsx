import { Route, Routes } from "react-router-dom";
import Overview from "../../pages/Overview/Overview";
import Home from "../../pages/Home/Home";
import ProtectedRoute from "../../components/ProtectedRoute/ProtectedRoute";
import Transaction from "../../pages/Transaction/Transaction";

function MainRouter() {
  return (
    <>
      <Routes>
        <Route
          path="/overview"
          element={
            <ProtectedRoute>
              <Overview />
            </ProtectedRoute>
          }
        />
        <Route
          path="/transaction"
          element={
            <ProtectedRoute>
              <Transaction />
            </ProtectedRoute>
          }
        />
        <Route path="/" element={<Home />} />
      </Routes>
    </>
  );
}

export default MainRouter;
