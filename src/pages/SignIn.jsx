import { useState } from "react";
import { auth } from "C:/Users/Aya Bani/projets/e-commerce/firebaseConfig.js"; 
import { signInWithEmailAndPassword } from "firebase/auth"; 
import { useNavigate } from "react-router-dom"; 

const SignIn = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");
    const [success, setSuccess] = useState("");
    const navigate = useNavigate(); 


    const handleSignIn = async (e) => {
        e.preventDefault();
        setError("");
        setSuccess("");

        try {
            const userCredential = await signInWithEmailAndPassword(auth, email, password);
            navigate('/welcome');
            console.log("User signed in:", userCredential.user);
        } catch (error) {
            if (error.code === "auth/wrong-password") {
                setError("Incorrect password. Please try again.");
            } else if (error.code === "auth/user-not-found") {
                setError("No account found with this email.");
            } else if (error.code === "auth/too-many-requests") {
                setError("Too many failed attempts. Please try again later.");
            } else {
                setError(`Error signing in: ${error.message}`);
            }
            console.error("Error signing in:", error.code, error.message);
        }
    };

    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-100">
            <div className="bg-white shadow-md rounded-lg p-8 w-full max-w-md">
            <h1 className="text-3xl font-bold text-center text-[#000000] mb-6">Sign In</h1>
            <form onSubmit={handleSignIn} className="space-y-4">
                    <div>
                        <input
                            type="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            placeholder="Email"
                            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
                            required
                        />
                    </div>
                    <div>
                        <input
                            type="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            placeholder="Password"
                            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
                            required
                        />
                    </div>
                    {error && <p className="text-red-500 text-sm text-center">{error}</p>}
                    {success && <p className="text-green-500 text-sm text-center">{success}</p>}
                    <button type="submit" className="w-full bg-gray-700 text-white font-bold py-2 rounded-md mt-6 hover:bg-black transition-colors duration-300">
                        Sign In
                    </button>
                </form>
            </div>
        </div>
    );
};

export default SignIn;
