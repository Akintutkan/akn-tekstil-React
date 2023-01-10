import { useState } from "react"
import { signInWithGooglePopup, createUserDocumentFromAuth} from "../../utils/firebase/firebase.utils"

const SignIn = () => {
    const logGoogleUser = async () => {
       const {user} = await signInWithGooglePopup()
       const userDocRef = await createUserDocumentFromAuth(user)
       const [form,setForm] = useState("") 
    }
    return (
        <form //onSubmit={onSubmit} // submit olduğunda çalışsın 
		> 
			<div>
				<input
					name="email"
                    type="email"
					placeholder="Email"
					value={form.fullname}
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