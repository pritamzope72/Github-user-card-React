import React, { useState } from 'react';

function Card() {
    const [username, setUsername] = useState('');
    const [userData, setUserData] = useState(null);

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const response = await fetch(`https://api.github.com/users/${username}`);
            const data = await response.json();

            if (data.message === 'Not Found') {
                alert('User not found. Please enter a valid GitHub username.');
            } else {
                setUserData(data);
                console.log(data)
            }
        } catch (error) {
            console.error('Error fetching GitHub API:', error);
        }
    };

    const logout = ()=>{
        localStorage.clear()
        window.location.reload()
    }
  

    return (
        <>
        <div className="App min-h-screen flex items-center justify-center bg-gradient-to-br from-indigo-400 to-pink-500">
            <div className="text-center text-white">
                <h1 className="text-4xl font-bold mb-6">GitHub User Card</h1>
                <form onSubmit={handleSubmit} className="mb-4">
                    <label htmlFor="username" className="block text-gray-200 mb-2">Enter GitHub Username:</label>
                    <input
                        type="text"
                        id="username"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                        className="border border-gray-300 p-2 ml-2 focus:outline-none focus:border-indigo-500 rounded-full"
                        required
                    />
                    <button type="submit" className="bg-indigo-500 text-white px-4 py-2 ml-2 hover:bg-indigo-600 focus:outline-none focus:bg-indigo-600 rounded-full " >
                        Get User Info
                    </button>
                    <button
                      className="px-4 py-2 bg-red-500 text-white mx-2 cursor-pointer hover:bg-red-600 m-3 rounded-full"
                      onClick={logout}>
                      Logout
                    </button>
                   
                </form>

                {userData && (
                    <>
                    <div className="card max-w-sm mx-auto bg-white border shadow-lg rounded p-6" >
                        <img src={userData.avatar_url} alt="User Avatar" className="rounded-full mx-auto mb-4" />
                        <h2 className="text-gray-600 text-xl font-bold mb-2">{userData.login}</h2>
                        <p className="text-gray-600 mb-2">Name: {userData.name}</p>
                        <p className="text-gray-600 mb-2">Public Repos: {userData.public_repos}</p>
                        <p className="text-gray-600 mb-2">Public Gists: {userData.public_gists}</p>
                        <p className="text-gray-600">Profile Created At: {new Date(userData.created_at).toLocaleDateString('en-US')}</p>
                    </div>
                      
                </>   
                )}
            </div>
        </div>
        </>
    );
}

export default Card;
