import { useState } from "react"
import { signInWithGooglePopup, createUserDocumentFromAuth} from "../../utils/firebase/firebase.utils"

const formValues = {email:"",password:""}
const SignIn = () => {
    const logGoogleUser = async () => {
       const {user} = await signInWithGooglePopup()
       const userDocRef = await createUserDocumentFromAuth(user)
    }
    const [form,setForm] = useState(formValues)
    const onChangeInput =(e) =>{
        setForm({...form, [e.target.name]:e.target.value})
    }
    const onSubmit = (e) => {
		e.preventDefault(); // Form bildirildiğinde sayfanın yenilenme işlemini durdurmak için kullandık
		if (form.email === "" || form.password === "") {
			return false;
		}
    }
    return (
        <form onSubmit={onSubmit} // submit olduğunda çalışsın 
		> 
			<div>
				<input
					name="email"
                    type="email"
					placeholder="Email"
					value={form.email}
					onChange={onChangeInput} // onchange olduğunda onChangeinput fonk çalışsın
				/>
			</div>

			<div>
				<input
					name="password"
                    type="password"
					placeholder="Password"
					value={form.password}
					onChange={onChangeInput}
				/>
			</div>

			<div className="btn">
            <button onClick={logGoogleUser}>Sign in with Google Popup</button>
			</div>
		</form>
      
     
    )
   }
   export default SignIn