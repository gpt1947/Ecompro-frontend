import React ,{useState}from 'react'
import {Link} from 'react-router-dom'
 import axios from 'axios'
import Logo from './Logo'
import Button from './Button'
import Input from './Input'
import {useNavigate} from 'react-router-dom'
 import { toast } from 'react-hot-toast'

function Login() {
    const nevigate = useNavigate()
    const [udata, setUdata] = useState({
        email: "",
        password: ""
    });

    // console.log(udata);


    const senddata = async (e) => {
       const {email,password}=udata;
       try{
        const data=await axios.post('http://localhost:5000/api/v1/users/login',{
            email,password
        })

        if(data.error){
            toast.error(data.error)
        }
        else{
            // console.log(data)
            // setUdata({})
            // toast.success('login successfully ,welcome')
             nevigate("/")
            
        }
       }catch(error){
          toast.error(error)
       }

    }


  return (
    <div
    className='flex items-center justify-center w-full py-14'
    >
        <div className={`mx-auto w-full max-w-lg bg-gray-100 rounded-xl p-10 border border-black/10`}>
        <div className="mb-2 flex justify-center">
                    <span className="inline-block w-full max-w-[100px]">
                        <Logo width="100%" />
                    </span>
        </div>
        <h2 className="text-center text-2xl font-bold leading-tight">Sign in to your account</h2>
        <p className="mt-2 text-center text-base text-black/60">
                    Don&apos;t have any account?&nbsp;
                    <Link
                        to="/signup"
                        className="font-medium text-primary transition-all duration-200 hover:underline"
                    >
                        Sign Up
                    </Link>
        </p>
        <form onSubmit={senddata} className='mt-8'>
            <div className='space-y-5'>
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
                <Button
                type="submit"
                className="w-full"
                >Sign in</Button>
            </div>
        </form>
        </div>
    </div>
  )
}

export default Login