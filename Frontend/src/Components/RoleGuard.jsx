import { Navigate, Outlet } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

/*
ใช้แบบ:
<Route element={<RoleGuard allow={["Admin"]} />}>
  <Route path="/dashboard" element={<Dashboard />} />
</Route>
*/

export default function RoleGuard({ allow }) {
  const { user, role, loading } = useAuth();

  // ระหว่างโหลด session
  if (loading) {
    return <div className="p-6">Loading...</div>;
  }

  // ยังไม่ login
  if (!user) {
    return <Navigate to="/login" replace />;
  }

  // role ไม่ตรง
  if (!allow.includes(role)) {
    return <Navigate to="/unauthorized" replace />;
  }

  return <Outlet />;
}
