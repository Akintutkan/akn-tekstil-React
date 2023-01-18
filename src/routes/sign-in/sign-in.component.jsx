import { useState,} from "react"
import { getRedirectResult } from "firebase/auth"
import { auth,signInWithGooglePopup,signInWithGoogleRedirect, createUserDocumentFromAuth} from "../../utils/firebase/firebase.utils"

const formValues = {email:"",password:""}
const SignIn = () => {
	// useEffect(async() =>{
	// 	const response = await getRedirectResult(auth);
	// 	if(response){
	// 		const userDocRef = await createUserDocumentFromAuth(response.user)
	// 	}
	// },[]);

    const logGoogleUser = async () => {
       const {user} = await signInWithGooglePopup()
       const userDocRef = await createUserDocumentFromAuth(user)
    }
	// const logGoogleRedirectUser = async () => {
	// 	const {user} = await signInWithGoogleRedirect()
	// 	console.log({user})
	//  }


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
            {/* <button onClick={signInWithGoogleRedirect}>Sign in with Redirect</button> */}
			</div>
		</form>
      
     
    )
   }
   export default SignIn