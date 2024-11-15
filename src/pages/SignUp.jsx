import { useState } from "react";
import { auth } from "C:/Users/Aya Bani/projets/e-commerce/firebaseConfig.js"; 
import { createUserWithEmailAndPassword } from "firebase/auth"; 

const SignUp = () => {
    const [name, setName] = useState("");
    const [lastname, setLastname] = useState("");
    const [email, setEmail] = useState("");
    const [phoneNumber, setPhoneNumber] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [error, setError] = useState("");
    const [success, setSuccess] = useState("");

    const handleSignUp = async (e) => {
        e.preventDefault(); 
        setError(""); 
        
        if (password !== confirmPassword) {
            setError("Passwords do not match");
            return;
        }

        if (!email.includes('@')) {
            setError("Please enter a valid email address");
            return;
        }

        try {
            const userCredential = await createUserWithEmailAndPassword(auth, email, password);
            setSuccess("User signed up successfully");
        } catch (error) {
            setError(error.message); 
            console.error("Error signing up:", error.message);
        }
    };
      
    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-100">
            <div className="bg-white shadow-md rounded-lg p-8 w-full max-w-md">
                <h1 className="text-3xl font-bold text-center text-[#000000] mb-6">Sign Up</h1>
                
                <form onSubmit={handleSignUp}>
                    <div>
                        <label htmlFor="name" className="block text-gray-700 font-semibold mb-2">Name</label>
                        <input 
                            type="text" 
                            name="name" 
                            id="name" 
                            className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-[#D9D9D9]" 
                            placeholder="Enter your name"
                            value={name} 
                            onChange={(e) => setName(e.target.value)} 
                        />
                    </div>
                    <div>
                        <label htmlFor="lastname" className="block text-gray-700 font-semibold mb-2">Last Name</label>
                        <input 
                            type="text" 
                            name="lastname" 
                            id="lastname" 
                            className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-[#D9D9D9]" 
                            placeholder="Enter your lastname"
                            value={lastname}
                            onChange={(e) => setLastname(e.target.value)}
                        />
                    </div>
                    <div>
                        <label htmlFor="email" className="block text-gray-700 font-semibold mb-2">Email</label>
                        <input 
                            type="email" 
                            name="email" 
                            id="email" 
                            className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-[#D9D9D9]" 
                            placeholder="Enter your email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                        />
                    </div>
                    <div>
                        <label htmlFor="phonenumber" className="block text-gray-700 font-semibold mb-2">Phone Number</label>
                        <input 
                            type="tel" 
                            name="phonenumber" 
                            id="phonenumber" 
                            className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-[#D9D9D9]" 
                            placeholder="Enter your phone number"
                            value={phoneNumber}
                            onChange={(e) => setPhoneNumber(e.target.value)}
                        />
                    </div>
                    <div>
                        <label htmlFor="password" className="block text-gray-700 font-semibold mb-2">Password</label>
                        <input 
                            type="password" 
                            name="password" 
                            id="password" 
                            className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-[#D9D9D9]" 
                            placeholder="Enter your password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                        />
                    </div>
                    <div>
                        <label htmlFor="confirm-password" className="block text-gray-700 font-semibold mb-2">Confirm Password</label>
                        <input 
                            type="password" 
                            name="confirm-password" 
                            id="confirm-password" 
                            className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-[#D9D9D9]" 
                            placeholder="Confirm your password"
                            value={confirmPassword}
                            onChange={(e) => setConfirmPassword(e.target.value)}
                        />
                    </div>
                    {error && <p className="text-red-500">{error}</p>} 
                    {success && <p className="text-green-500">{success}</p>}
                    <button type="submit" className="w-full bg-gray-700 text-white font-bold py-2 rounded-md mt-6 hover:bg-black transition-colors duration-300">
                        Sign Up
                    </button>
                </form>
            </div>
        </div>
    );
}

export default SignUp;