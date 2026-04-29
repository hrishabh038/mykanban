import { lazy, Suspense } from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import PageLoading from "./error/PageLoading";
//auth
const Auth = lazy(() => import("./auth/Auth"));
const Login = lazy(() => import("./auth/Login"));
const Register = lazy(() => import("./auth/Register"));
//error
const NotFound = lazy(() => import("./error/NotFound"));
//project
const Project = lazy(() => import("./project/Project"));

const Routing = () => {
  return (
    <Suspense fallback={<PageLoading />}>
      <Routes>
        {/* ERROR */}
        <Route path="*" element={<NotFound />} />
        <Route path="/page-loading" element={<PageLoading />} />
        {/* AUTH */}
        <Route path="/auth" element={<Navigate to="/auth/login" replace />} />
        <Route path="auth" element={<Auth />}>
          <Route path="login" element={<Login />} />
          <Route path="register" element={<Register />} />
        </Route>
        {/* PROJECT */}
        <Route path="/project/:projectId" element={<Project />} />
      </Routes>
    </Suspense>
  );
};

export default Routing;
