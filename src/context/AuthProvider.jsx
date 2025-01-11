// Use of file, local storage se data utahyega and visible krega data
// Importing necessary hooks and utilities
import { createContext, useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { getLocalStorage, setLocalStorage } from '../utils/localStorage';

// Creating AuthContext to provide user data throughout the app
export const AuthContext = createContext();

const AuthProvider = ({ children }) => {
    // Declaring state to store user data fetched from localStorage
    const [userData, setUserData] = useState(null);

    useEffect(() => {
        // Setting localStorage if needed (you can remove or update this if not required)
        setLocalStorage();

        // Fetching employees data from localStorage
        const { employees } = getLocalStorage();

        // Updating the state with fetched employee data
        setUserData(employees);
    }, []); // Empty dependency array ensures this effect runs once after initial render

    return (
        <div>
            {/* Providing user data and setter function via context to the child components */}
            <AuthContext.Provider value={[userData, setUserData]}>
                {children}
            </AuthContext.Provider>
        </div>
    );
};

// Prop validation to ensure `children` prop is passed to the provider
AuthProvider.propTypes = {
    children: PropTypes.node.isRequired,
};

export default AuthProvider;
