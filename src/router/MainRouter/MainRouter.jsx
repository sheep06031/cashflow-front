import { Route, Routes } from "react-router-dom";
import Overview from "../../pages/Overview/Overview";
import Home from "../../pages/Home/Home";
import ProtectedRoute from "../../components/ProtectedRoute/ProtectedRoute";
import Transaction from "../../pages/Transaction/Transaction";
import Feedbacks from "../../pages/Feedbacks/Feedbacks";
import MyPage from "../../pages/MyPage/MyPage";

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
      </Routes>
    </>
  );
}

export default MainRouter;
