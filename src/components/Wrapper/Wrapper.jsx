import supabase from "../../helper/supabaseClient";
import { useEffect, useState } from "react";
import { Navigate } from "react-router-dom";

function Wrapper({ children }) {
  const [authenticated, setAuthenticated] = useState(null);

  useEffect(() => {
    const checkSession = async () => {
      const { data: { session } } = await supabase.auth.getSession();
      setAuthenticated(!!session);
    };

    checkSession();
  }, []);

  // show loading while checking session
  if (authenticated === null) return <div>Loading...</div>;

  // redirect if not logged in
   if (!authenticated) return <Navigate to="/login" replace />;

  return <>{children}</>;
}

export default Wrapper;

