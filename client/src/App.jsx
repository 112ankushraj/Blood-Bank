import { Route, Routes } from "react-router-dom";
import "./App.css";
import HomePage from "./pages/HomePage";
import Login from "./pages/auth/Login";
import Register from "./pages/auth/Register";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";
import ProtectedRoute from "./components/Routes/ProtectedRoute";
import PublicRoute from "./components/Routes/PublicRoute";
import DonarPage from "./pages/Dashboard/DonarPage";
import Hospital from "./pages/Dashboard/Hospital";
import OrganisationPage from "./pages/Dashboard/OrganisationPage";
import Consumer from "./pages/Dashboard/Consumer";
import Donation from "./pages/Donation";
import Analytics from "./pages/Dashboard/Analytics";
import DonarList from "./pages/Admin/DonarList";
import HospitalList from "./pages/Admin/HospitalList";
import OrgList from "./pages/Admin/OrgList";
import AdminHome from "./pages/Admin/AdminHome";

function App() {
  return (
    <>
      <ToastContainer />
      <Routes>
        <Route
          path="/"
          element={
            <ProtectedRoute>
              <HomePage />
            </ProtectedRoute>
          }
        />
         <Route
          path="/donar"
          element={
            <ProtectedRoute>
              <DonarPage/>
            </ProtectedRoute>
          }
        />

        <Route
          path="/hospital"
          element={
            <ProtectedRoute>
              <Hospital/>
            </ProtectedRoute>
          }
        />

        <Route
          path="/admin"
          element={
            <ProtectedRoute>
              <AdminHome/>
            </ProtectedRoute>
          }
        />
         <Route
          path="/donar-list"
          element={
            <ProtectedRoute>
              <DonarList/>
            </ProtectedRoute>
          }
        />

        <Route
          path="/hospital-list"
          element={
            <ProtectedRoute>
              <HospitalList/>
            </ProtectedRoute>
          }
        />

        <Route
          path="/org-list"
          element={
            <ProtectedRoute>
              <OrgList/>
            </ProtectedRoute>
          }
        />

         <Route
          path="/analytics"
          element={
            <ProtectedRoute>
              <Analytics/>
            </ProtectedRoute>
          }
        />

         <Route
          path="/consumer"
          element={
            <ProtectedRoute>
              <Consumer/>
            </ProtectedRoute>
          }
        />

         <Route
          path="/donation"
          element={
            <ProtectedRoute>
             <Donation/>
            </ProtectedRoute>
          }
        />
        
        


        <Route
          path="/organisation"
          element={
            <ProtectedRoute>
             <OrganisationPage/>
            </ProtectedRoute>
          }
        />
        
        <Route
          path="/login" element={
            <PublicRoute>
              <Login />
            </PublicRoute>
          }
        />
        <Route
          path="/register"
          element={
            <PublicRoute>
              <Register />
            </PublicRoute>
          }
        />
      </Routes>
    </>
  );
}

export default App;
