// const envs = ["NEXT_PUBLIC_OAUTH_CLIENT_ID"];

// for (const env of envs) {
// 	console.log(env,process.env[env]);
// 	console.log(process.env["NEXT_PUBLIC_OAUTH_CLIENT_ID"]);
// 	if (!process.env[env]) {
//         console.log('here')
// 		throw new Error(`Missing environment variable ${env}`);
// 	}
// }

const env = { oauth_client_id: process.env.NEXT_PUBLIC_OAUTH_CLIENT_ID };

export default env;
