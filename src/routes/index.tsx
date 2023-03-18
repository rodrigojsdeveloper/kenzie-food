import { Route, Routes } from "react-router-dom";
import { Header } from "../components/Header";
import { NavCategories } from "../components/NavCategories";
import { SignIn } from "../pages/SignIn";
import { SignUp } from "../pages/SignUp";

const AllRoutes = () => {
  return (
    <Routes>
      <Route path="/signin" element={<SignIn />} />
      <Route path="/signup" element={<SignUp />} />
      <Route path="/" element={<NavCategories />} />
    </Routes>
  );
};

export { AllRoutes };
