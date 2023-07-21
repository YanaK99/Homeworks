import { Route, Navigate } from "react-router-dom";

/**
 *
 * @param root0
 * @param root0.element
 */
function PrivateRoute({ element: Element, ...rest }) {
    const isAuthorized = Boolean(localStorage.getItem("user"));

    const renderRoute = (properties) => {
        if (isAuthorized) {
            return <Element {...properties} isAuthorized={isAuthorized} />;
        }

        return <Navigate to="*" />;
    };

    return <Route {...rest} element={renderRoute} />;
}

export default PrivateRoute;
