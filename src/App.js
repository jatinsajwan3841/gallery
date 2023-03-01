import React, { Suspense } from "react";
import { Routes, Route } from "react-router-dom";
import Loader from "./components/loader";
import routes from "./routes";
import "./App.css";

const menu = routes.map((route, index) => (
    <Route
        key={index}
        path={route.path}
        name={route.name}
        element={<route.element />}
    />
));

const App = () => {
    return (
        <div className="App">
            <Suspense fallback={<Loader />}>
                <Routes>{menu}</Routes>
            </Suspense>
        </div>
    );
};

export default App;
