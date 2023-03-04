import React, { Suspense } from "react";
import { Routes, Route } from "react-router-dom";
import Loader from "./components/loader";
import routes from "./routes";
import "./App.css";

const App = () => {
    const [loading, setLoading] = React.useState(false);
    const handleLoading = () => {
        setLoading((prev) => !prev);
    };

    const menu = routes.map((route, index) => (
        <Route
            key={index}
            path={route.path}
            name={route.name}
            element={<route.element handleLoading={handleLoading} />}
        />
    ));
    return (
        <div className="App">
            {loading && <Loader />}
            <Suspense fallback={<Loader />}>
                <Routes>{menu}</Routes>
            </Suspense>
        </div>
    );
};

export default App;
