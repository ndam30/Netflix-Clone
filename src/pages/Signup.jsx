import { useState } from 'react';
import {Link, useNavigate} from 'react-router-dom'
import { UserAuth } from '../context/AuthContext';

const Signup = () => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const {user, signUp}  = UserAuth()

    const navigate = useNavigate();

    const handleSubmit = async (e)=>{
        e.preventDefault()
        try{
            await signUp(email, password);
            navigate('/');
        }
        catch(error){
            console.log(error)
        }
    }

    return ( 
        <div className="w-full h-screen">
        <img className=" hidden sm:block absolute w-full h-screen object-cover" src="https://assets.nflxext.com/ffe/siteui/vlv3/a1543997-c1fd-4946-92d3-b0a3648b92c7/d1f70c0e-b01d-4de3-84fa-219a8115288e/CM-en-20220808-popsignuptwoweeks-perspective_alpha_website_large.jpg" alt="/" />
        <div className="bg-black/60 fixed top-0 left-0 w-full h-screen"></div>
        <div className="fixed w-full px-4 py-24 z-50">
            <div className="max-w-[450px] h-[600px] mx-auto bg-black/75 text-white">
                <div className="max-w-[350px] mx-auto py-16">
                    <h1 className="text-3xl font-bold">Sign Up</h1>
               <form onSubmit={handleSubmit} className="w-full flex flex-col py-4">
                     <input 
                     onChange={(e)=>setEmail(e.target.value)}
                     className="p-3 my-2 bg-gray-700 rounded" type='email' placeholder="email" autoComplete="email"></input>
                     <input
                      onChange={(e)=>setPassword(e.target.value)}
                     className="p-3 my-2 bg-gray-700 rounded" type='password' placeholder="password" autoComplete="current-password"></input>
                    <button className="bg-red-600 py-3 my-6 rounded font-bold ">Sign Up</button> 
                     <div className="flex justify-between items-center text-sm text-gray-600">
                        <p ><input className="mr-2" type='checkbox'/> Remember me</p>
                        <p>Need me?</p>
                     </div>
                     <p className="py-6"><span className="text-gray-600">Already subscribe to MyMovieTv?.</span>
                     <Link to='/login'>
                     Sign In
                     </Link>
                     </p>
               </form>
                </div>
            </div>
        </div>
    </div>
     );
}
 
export default Signup;