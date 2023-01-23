import React from 'react'
import { useState, useContext } from 'react'
import { signInWithGooglePopup, createUserDocumentFromAuth,signInAuthUserWithEmailAndPassword} from '../../utils/firebase/firebase.utils'
import FormInput from '../form-input/Form-input.component'
import CustomButton from '../button/custom-button.component'
import { UserContext } from '../../contexts/user.context'
import "./sign-in-form.styles.scss"
const defaultFormFields = {email:"",password:""}


const SignInForm = () => {
    const [formFields,setFormFields] = useState(defaultFormFields)
    const {email,password} = formFields
    console.log(formFields)

    const {setCurrentUser} = useContext(UserContext)
    const resetFormFields = () =>{
        setFormFields(defaultFormFields)
    }
    const signInWithGoogle = async () => {
        const {user} = await signInWithGooglePopup()
        await createUserDocumentFromAuth(user)
     }
    const handleSubmit = async(e) => {
        e.preventDefault()
        try {
            const {user} = await signInAuthUserWithEmailAndPassword(email,password)
            setCurrentUser(user)
            resetFormFields()
        }catch(error){
            switch(error.code){
                case "auth/wrong-password":
                    alert("incorrect password for email");
                    break;
                    case "auth/user-not-found":
                        alert("no user associated with this email");
                        break;
                        default:
                            console.log(error)
            }
           
        }
    }
    const handleChange = (e) => {
        const {name,value}= e.target
        setFormFields({...formFields,[name]: value})

    }
  return (
    <div className='sing-up-container'>
        <h2>Already have an account?</h2>
        <span>sign in with your email and password</span>
        <form onSubmit={handleSubmit}>
            <FormInput  label="Email"type="email" required onChange={handleChange} name="email" value={email}/>
            <FormInput label="Password"type="password" required onChange={handleChange} name="password" value={password}/>
            <div className='buttons-container'>
            <CustomButton type="submit">Sign in</CustomButton>
            <CustomButton  type="button" buttonType="google" onClick={signInWithGoogle}>Google Sign in</CustomButton>
            </div>
        </form>
    </div>
  )
}

export default SignInForm