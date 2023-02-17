import SignUpForm from "../../components/sign-up-form/sign-up-form.component";
import SignInForm from "../../components/sign-in-form/sign-in-form.component";
import "./authentication.styles.scss"
const Authentication = () => {
     return (
			<div className="authentication-container">
            {/* <button onClick={logGoogleUser}>Sign in with Google Popup</button> */}
            {/* <button onClick={signInWithGoogleRedirect}>Sign in with Redirect</button> */}
			<SignInForm/>
			<SignUpForm/>
			</div>
    )
}
   export default Authentication