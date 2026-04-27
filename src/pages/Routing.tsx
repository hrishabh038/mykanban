import React, { lazy, Suspense } from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import PageLoading from "./error/PageLoading";

type Props = {};

//auth
const Auth = lazy(() => import("./auth/Auth"));
const Login = lazy(() => import("./auth/Login"));
const Register = lazy(() => import("./auth/Register"));
//common
const Home = lazy(() => import("./common/Home"));
const PrivacyPolicy = lazy(() => import("./common/PrivacyPolicy"));
const TermsOfService = lazy(() => import("./common/TermsOfService"));
//User
const Profile = lazy(() => import("./common/Profile"));
//error
const NotFound = lazy(() => import("./error/NotFound"));

const Routing = (props: Props) => {
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
        {/* COMMON */}
        <Route path="/" element={<Navigate to="/home" replace />} />
        <Route path="home" element={<Home />} />
        <Route path="/privacy-policy" element={<PrivacyPolicy />} />
        <Route path="/terms-of-service" element={<TermsOfService />} />
        {/* USER */}
        <Route path="/profile/:username" element={<Profile />} />
      </Routes>
    </Suspense>
  );
};

export default Routing;
