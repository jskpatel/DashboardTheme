import { useEffect } from "react";
import { useSelector } from "react-redux";
import { Route, Routes } from "react-router-dom";
import { themes } from "./components/themeContext/ThemeContext";
import AdminLayout from "./layout/AdminLayout";
import Dashboard from "./pages/Dashboard";
import GoogleAds from "./pages/GoogleAds";
import Ringba from "./pages/Ringba";

function App() {
  const { themeMode } = useSelector((state) => state.persist);
  useEffect(() => {
    switch (themeMode) {
      case themes.dark:
        document.body.classList.add("darkMode");
        break;
      case themes.light:
        document.body.classList.remove("darkMode");
        break;
      default:
        document.body.classList.remove("darkMode");
        break;
    }
  }, [themeMode]);
  return (
    <>
      <Routes>
        <Route
          exact
          path="/"
          element={
            <AdminLayout>
              <Dashboard />
            </AdminLayout>
          }
        />
        <Route
          exact
          path="/dashboard"
          element={
            <AdminLayout>
              <Dashboard />
            </AdminLayout>
          }
        />
        <Route
          exact
          path="/google-ads"
          element={
            <AdminLayout>
              <GoogleAds />
            </AdminLayout>
          }
        />
        <Route
          exact
          path="/ringba"
          element={
            <AdminLayout>
              <Ringba />
            </AdminLayout>
          }
        />
      </Routes>
    </>
  );
}

export default App;
