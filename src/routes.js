import React from "react";

const Home = React.lazy(() => import("./components/home"));
const Login = React.lazy(() => import("./components/signIn"));
const SignUp = React.lazy(() => import("./components/signUp"));

const routes = [
    {
        path: "/",
        name: "Home",
        secure: false,
        element: Home,
    },
    {
        path: "/login",
        name: "Login",
        secure: false,
        element: Login,
    },
    {
        path: "/signup",
        name: "Sign Up",
        secure: false,
        element: SignUp,
    },
];

export default routes;
