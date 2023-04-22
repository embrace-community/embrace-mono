import { Button } from "ui";
import { GoogleLogin } from "@react-oauth/google";
export default function Web() {
	return (
		<div className="bg-slate-950">
			<Button variant="primary" size="large" label="Web" />
			<GoogleLogin
				onSuccess={(credentialResponse) => {
					console.log(credentialResponse);
				}}
				onError={() => {
					console.log("Login Failed");
				}}
			/>
			;
		</div>
	);
}
