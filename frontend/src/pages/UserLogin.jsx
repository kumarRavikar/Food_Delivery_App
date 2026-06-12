import React from 'react'
import AuthForm from '../components/AuthForm'
import axios from 'axios'
const UserLogin = () => {
  const handleSubmit = async(e) => {
    e.preventDefault(); 
    const email = e.target.email.value;
    const password = e.target.password.value;
      await axios.post("http://localhost:3000/api/user/login",
        {email,password},{
          withCredentials:true
        }
      )
  }
  return (
    <>
     <AuthForm
    title="Welcome back"
    subtitle="Login to continue ordering your favorite meals."
    showName={false}
    submitLabel="Login"
    bottomText="Don't have an account?"
    bottomLinkText="Register"
    bottomLinkTo="/user/register"
  /></>
  )
}

export default UserLogin
