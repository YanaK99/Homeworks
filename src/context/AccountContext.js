import PropTypes from "prop-types";
import React, { createContext, useState } from "react";

const AccountContext = createContext({
    isAuthorized: false,
    setIsAuthorized: () => {},
});

/**
 *
 * @param root0
 * @param root0.children
 */
export function AccountContextProvider({ children }) {
    const [isAuthorized, setIsAuthorized] = useState(false);
    const login = () => {
        localStorage.setItem("user", true);
        setIsAuthorized(true);
    };
    const logout = () => {
        localStorage.removeItem("user");
        setIsAuthorized(false);
};

    return (
        // eslint-disable-next-line react/jsx-no-constructed-context-values
        <AccountContext.Provider value={{ isAuthorized, login, logout }}>
            {children}
        </AccountContext.Provider>
    );
}

AccountContextProvider.propTypes = {
    children: PropTypes.node.isRequired,
};

export default AccountContext;
