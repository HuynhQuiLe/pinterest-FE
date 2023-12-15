import "react-toastify/dist/ReactToastify.css";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import MainLayout from "./layout/MainLayout";

import IntroLayout from "./layout/IntroLayout";
import IntroHomePage from "./pages/Home/IntroHomePage";
import Loading from "./components/Loading/Loading";
import HomePage from "./pages/home/HomePage";

import { useSelector } from "react-redux";
import { ToastContainer } from "react-toastify";
import AudioSound from "./components/Audio/Audio";
import { userLocalStorage } from "./api/localStorage";
import DetailPage from "./pages/Detail/DetailPage";
import CreatePage from "./pages/Create/CreatePage";
import PersonalLayout from "./layout/PersonalLayout";
import SavedPage from "./pages/Personal/SavedPage";
import CreatedPage from "./pages/Personal/CreatedPage";
import AccountPage from "./pages/Account/AccountPage";

function App() {
  // const { user } = useSelector((state) => state.userSlice);
  const user = userLocalStorage.get();

  return (
    <>
      <Routes>
        <Route path="/" element={user ? <MainLayout /> : <IntroLayout />}>
          <Route index element={user ? <HomePage /> : <IntroHomePage />} />
          <Route path="details/:photo_id" element={<DetailPage />} />
          <Route path="create" element={<CreatePage />} />
          {/* personal */}
          <Route path="personal/*" element={<PersonalLayout />}>
            <Route path="saved" element={<SavedPage />} />
            <Route path="created" element={<CreatedPage />} />
          </Route>

          <Route path="profile" element={<AccountPage />} />
        </Route>
      </Routes>
      <Loading />
      <ToastContainer />
      <AudioSound />
    </>
  );
}

export default App;
