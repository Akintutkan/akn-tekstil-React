import React from 'react'
import { useState } from 'react'
import { createAuthUserWithEmailAndPassword, createUserDocumentFromAuth,auth} from '../../utils/firebase/firebase.utils'
import FormInput from '../form-input/Form-input.component'
import CustomButton from '../button/custom-button.component'
import "./sign-up-form.styles.scss"
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
    <div className='sing-up-container'>
        <h2>Dont have an account?</h2>
        <span>sign Up with your email and password</span>
        <form onSubmit={handleSubmit}>
            <FormInput label="Display Name" type="text" required onChange={handleChange} name="displayName" value={displayName}/>
            <FormInput label="Email"type="email" required onChange={handleChange} name="email" value={email}/>
            <FormInput label="Password"type="password" required onChange={handleChange} name="password" value={password}/>
            <FormInput label="Confirm Password"type="password" required onChange={handleChange} name="confirmPassword" value={confirmPassword}/>
            <CustomButton  buttonType="inverted" type="submit">Sign up</CustomButton>
        </form>
    </div>
  )
}

export default SignUpForm