import { useEffect } from "react";
import { supabase } from "../lib/supabase";
import axios from "../services/api";
import { useNavigate } from "react-router-dom";

export default function AuthCallback() {
  const nav = useNavigate();

  useEffect(() => {
    finishLogin();
  }, []);

  async function finishLogin() {
    const { data } = await supabase.auth.getSession();

    if (!data.session) {
      nav("/login");
      return;
    }

    const email = data.session.user.email;

    // ✅ check domain
    if (!email.endsWith(import.meta.env.VITE_ALLOWED_DOMAIN)) {
      alert("Only KMITL email allowed");
      await supabase.auth.signOut();
      nav("/login");
      return;
    }

    // ✅ ส่ง JWT ไป backend
    const token = data.session.access_token;

    const res = await axios.post("/auth/login", {
      token
    });

    // backend จะ return role
    const role = res.data.role;

    if (role === "Admin") nav("/dashboard");
    else if (role === "Maintenance") nav("/jobs");
    else nav("/report");
  }

  return <div className="p-10">Signing in...</div>;
}
