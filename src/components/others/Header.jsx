import 'react';
import { setLocalStorage } from '../../utils/localStorage'; // Utility function for localStorage handling (currently unused)

// Header component displays a personalized greeting and a logout button
const Header = (props) => {
    
    // Log out the user: clears the logged-in user from localStorage and updates the user state
    const logOutUser = () => {
        // Clear the 'loggedInUser' from localStorage to log out the user
        localStorage.setItem('loggedInUser', '');

        // Call the changeUser function passed from parent to reset the user state
        props.changeUser('');

        // Optionally, page reloads to reflect the changes (this is commented out)
        // window.location.reload(); 
    }

    // const [username, setUsername] = useState('')

    // if (!data){
    //     setUsername('Admin')
    // } else {
    //     setUsername(data.firstName)
    // }
    
    return (
        <div className='flex items-end justify-between'>
            {/* Personalized greeting */}
            <h1 className='text-2xl font-medium'>
                Hello <br /> 
                <span className='text-3xl font-semibold'>
                    Jagriti👋 {/* Hardcoded name for now */}
                </span>
            </h1>
            {/* Log out button */}
            <button 
                onClick={logOutUser} 
                className='bg-red-600 text-lg text-white px-5 py-2 rounded font-medium'
            >
                Log Out
            </button>
        </div>
    );
}

export default Header;
