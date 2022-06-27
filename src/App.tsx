import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import { Dashboard } from "./pages/Dashboard";
import { Login } from "./pages/Login";
import { Error } from "./pages/Error";
import { AuthWrapper } from "./pages/AuthWrapper";
import { PrivateRoute } from "./pages/PrivateRoute";

export function App() {
  return (
    <AuthWrapper>
      <Router>
        <Routes>
          <Route
            path="/"
            element={
              <PrivateRoute>
                <Dashboard />
              </PrivateRoute>
            }
          />
          <Route path="/login" element={<Login />} />
          <Route path="*" element={<Error />} />
        </Routes>
      </Router>
    </AuthWrapper>
  );
}
