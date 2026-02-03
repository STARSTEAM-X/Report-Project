import { supabase } from "../lib/supabase";

export default function Login() {
  const login = async () => {
    await supabase.auth.signInWithOAuth({
      provider: "google",
      options: {
        redirectTo: "http://localhost:5173/auth/callback"
      }
    });
  };

  return (
    <button
      onClick={login}
      className="px-6 py-3 bg-red-500 text-white rounded"
    >
      Sign in with Google
    </button>
  );
}
