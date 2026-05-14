import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

// WEBSITE
import Home from "./pages/Home";

// ADMIN
import Login from "./admin/pages/Login";
import Dashboard from "./admin/pages/Dashboard";
import Users from "./admin/pages/Users";
import Donations from "./admin/pages/Donations";
import Messages from "./admin/pages/Messages";

import AdminLayout from "./admin/layouts/AdminLayout";

import ProtectedRoute from "./admin/components/ProtectedRoutes";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* WEBSITE */}

        <Route path="/" element={<Home />} />

        {/* ADMIN LOGIN */}

        <Route path="/admin/login" element={<Login />} />

        {/* ADMIN PANEL */}

        <Route
          path="/admin"
          element={
            <ProtectedRoute>
              <AdminLayout />
            </ProtectedRoute>
          }
        >
          <Route path="dashboard" element={<Dashboard />} />

          <Route path="users" element={<Users />} />

          <Route path="donations" element={<Donations />} />

          <Route path="messages" element={<Messages />} />
        </Route>

        {/* 404 */}

        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </BrowserRouter>
  );
}
