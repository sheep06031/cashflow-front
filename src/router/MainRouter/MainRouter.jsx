import { Route, Routes } from "react-router-dom";
import Overview from "../../pages/Overview/Overview";
import Home from "../../pages/Home/Home";
import ProtectedRoute from "../../components/ProtectedRoute/ProtectedRoute";
import Transaction from "../../pages/Transaction/Transaction";
import Feedbacks from "../../pages/Feedbacks/Feedbacks";
import MyPage from "../../pages/MyPage/MyPage";
import ChangePassword from "../../pages/Changepassword/ChangePassword";

function MainRouter() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
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
        <Route
          path="/feedbacks"
          element={
            <ProtectedRoute>
              <Feedbacks />
            </ProtectedRoute>
          }
        />
        <Route
          path="/mypage"
          element={
            <ProtectedRoute>
              <MyPage />
            </ProtectedRoute>
          }
        />
        <Route
          path="/changepassword"
          element={
            <ProtectedRoute>
              <ChangePassword />
            </ProtectedRoute>
          }
        />
      </Routes>
    </>
  );
}

export default MainRouter;
