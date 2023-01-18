import React from 'react'
import { useState } from 'react'
import { createAuthUserWithEmailAndPassword, createUserDocumentFromAuth } from '../../utils/firebase/firebase.utils'

const defaultFormFields = {displayName:"",email:"",password:"",confirmPassword:""}


const SignUpForm = () => {
    const [formFields,setFormFields] = useState(defaultFormFields)
    const {displayName,email,password,confirmPassword} = formFields
    console.log(formFields)
    const resetFormFields = () =>{
        setFormFields(defaultFormFields)
    }
    const handleSubmit = async(e) => {
        e.preventDefault()
        if(password !== confirmPassword){
            alert("Girdiğiniz parolalar birbiriyle uyuşmuyor");
            return
        }
        try {
            const {user} = await createAuthUserWithEmailAndPassword(email,password);
            resetFormFields()
            await createUserDocumentFromAuth(user,{displayName})
        }catch(error){
            if(error.code === "auth/email-already-in-use"){
              alert("Cannot create user,email already in use")  
            }else{
            console.log("user creation encountered an error",error)
            }
        }
    }
    const handleChange = (e) => {
        const {name,value}= e.target
        setFormFields({...formFields,[name]: value})

    }
  return (
    <div>
        <h1>sign Up with your email and password</h1>
        <form onSubmit= {() =>{}}>
            <label>Display Name</label>
            <input type="text" required onChange={handleChange} name="displayName" value={displayName}/>
            <label>Email</label>
            <input type="email" required onChange={handleChange} name="email" value={email}/>
            <label>Password</label>
            <input type="password" required onChange={handleChange} name="password" value={password}/>
            <label>Confirm Password</label>
            <input type="password" required onChange={handleChange} name="confirmPassword" value={confirmPassword}/>
            <button type="submit">Sign up</button>
        </form>
    </div>
  )
}

export default SignUpForm