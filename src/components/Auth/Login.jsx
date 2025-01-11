import { useState } from 'react';
import PropTypes from 'prop-types'; // Import prop-types for prop validation

// Login component to handle user login functionality
const Login = ({ handleLogin }) => { // Destructure handleLogin from props
    // State to manage the email and password inputs
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    // Function to handle form submission
    const submitHandler = (e) => {
        e.preventDefault(); // Prevent default form submission behavior
        handleLogin(email, password); // Call the passed handleLogin function with email and password
        setEmail(""); // Reset the email field
        setPassword(""); // Reset the password field
    };

    return (
        <div className='flex h-screen w-screen items-center justify-center'>
            {/* Container for the login form */}
            <div className='border-2 border-[#0095D0] p-20 rounded-xl'>
                <form
                    onSubmit={submitHandler} // Attach the submit handler to the form
                    className='flex flex-col items-center justify-center'>
                    {/* Input field for email */}
                    <input
                        value={email} // Bind input value to the email state
                        onChange={(e) => setEmail(e.target.value)} // Update state on change
                        required // Make the field required
                        className='outline-none bg-transparent border-2 border-[#0095D0] text-xl py-3 px-5 rounded-full placeholder:text-gray-400'
                        type='email' // Specify input type as email
                        placeholder='Enter your email' // Placeholder text
                    />
                    {/* Input field for password */}
                    <input
                        value={password} // Bind input value to the password state
                        onChange={(e) => setPassword(e.target.value)} // Update state on change
                        required // Make the field required
                        className='outline-none bg-transparent border-2 border-[#0095D0] text-xl py-3 px-5 rounded-full mt-3 placeholder:text-gray-400'
                        type='password' // Specify input type as password
                        placeholder='Enter your password' // Placeholder text
                    />
                    {/* Submit button */}
                    <button
                        type="submit" // Button type as submit
                        className='mt-7 text-white outline-none border-2 hover:bg-[#0095D0] bg-[#0095D0] font-semibold text-lg py-2 px-8 w-full rounded-full placeholder:text-white border-none'>
                        Log In
                    </button>
                </form>
            </div>
        </div>
    );
};

// PropTypes validation for the component
Login.propTypes = {
    handleLogin: PropTypes.func.isRequired, // Ensure handleLogin is passed and is a function
};

export default Login;
