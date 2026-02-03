import { Routes, Route } from "react-router-dom";




// User pages
import Home from "./Pages/User/Home";

// Admin pages
import AdminDashboard from "./Pages/Admin/Dashboard";

// Maintenance pages
import Maintenance from "./Pages/Maintenance";

// Public routes
import NotFound from "./Pages/NotFound";
import RequireRole from "./Components/RequireRole";

function App() {
return (
    <Routes>

      {/* Admin routes */}
      <Route element={<RequireRole role="Admin" />}>
        <Route path="/dashboard" element={<AdminDashboard />} />
      </Route>

      {/* User routes */}
      <Route element={<RequireRole role="Maintenance" />}>
        <Route path="/" element={<Home />} />
      </Route>

      {/* User routes */}
      <Route element={<RequireRole role="User" />}>
        <Route path="/" element={<Home />} />
      </Route>

      {/* Public route */}
      <Route path="*" element={<NotFound />} />
      <Route path="/auth/callback" element={<AuthCallback />} />

    </Routes>
  );
}

export default App;