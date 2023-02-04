import React from 'react'
import { useState} from 'react'
import { useDispatch } from 'react-redux'
import { createAuthUserWithEmailAndPassword, createUserDocumentFromAuth,auth} from '../../utils/firebase/firebase.utils'
import FormInput from '../form-input/Form-input.component'
import CustomButton from '../button/custom-button.component'
import "./sign-up-form.styles.scss"
import { signUpStart } from '../../store/user/user.action'
const defaultFormFields = {displayName:"",email:"",password:"",confirmPassword:""}


const SignUpForm = () => {
    const [formFields,setFormFields] = useState(defaultFormFields)
    const {displayName,email,password,confirmPassword} = formFields
    const dispatch = useDispatch()
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
            dispatch(signUpStart(email,password,displayName))
            resetFormFields()
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