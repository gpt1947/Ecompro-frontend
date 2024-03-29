import { useState } from 'react'
import {useNavigate} from 'react-router-dom'
import Logo from './Logo'
import { Link } from 'react-router-dom'
import Input from './Input'
import Button from './Button'
import { toast } from 'react-hot-toast'
import axios from 'axios'
// import fetch from 'node-fetch';

function Signup() {
    const nevigate=useNavigate()
    const [udata, setUdata] = useState({
            name: "",
        email: "",
        password: ""
    });

    // console.log(udata);


    const senddata = async (e) => {
       const {name ,email,password}=udata;
       try{
        const {data}=await axios.post('http://localhost:5000/api/v1/users/register',{
            name,email,password
        })
        // console.log(data);

        if(data.error){
            toast.error("Somethig are Wrong")
        }
        else{
            // console.log(data)
            // setUdata({})
            // toast.success('register successfully ,welcome')
             nevigate("/login");
        }
       }catch(error){
        toast.error("Wrong")
       }

    }

  return (
    <div className="flex items-center justify-center py-10">
            <div className={`mx-auto w-full max-w-lg bg-gray-100 rounded-xl p-10 border border-black/10`}>
            <div className="mb-2 flex justify-center">
                    <span className="inline-block w-full max-w-[100px]">
                        <Logo width="100%" />
                    </span>
                </div>
                <h2 className="text-center text-2xl font-bold leading-tight">Sign up to create account</h2>
                <p className="mt-2 text-center text-base text-black/60">
                    Already have an account?&nbsp;
                    <Link
                        to="/login"
                        className="font-medium text-primary transition-all duration-200 hover:underline"
                    >
                        Sign In
                    </Link>
                </p>

                <form onSubmit={senddata}>
                    <div className='space-y-5'>
                        <Input
                        label="Full Name: "
                        placeholder="Enter your full name"
                        value={udata.name}
                        onChange={(e)=>setUdata({...udata,name:e.target.value})}
                        
                        id="name"
                        />
                        <Input
                        label="Email: "
                        placeholder="Enter your email"
                        type="email"
                        value={udata.email}
                        onChange={(e)=>setUdata({...udata,email:e.target.value})}
                        
                        id="email"
                        />
                        <Input
                        label="Password: "
                        type="password"
                        placeholder="Enter your password"
                        value={udata.password}
                        onChange={(e)=>setUdata({...udata,password:e.target.value})}
                        
                        id="password"
                        />
                        <Button type="submit" className="w-full">
                            Create Account
                        </Button>
                    </div>
                </form>
            </div>

    </div>
  )
}

export default Signup