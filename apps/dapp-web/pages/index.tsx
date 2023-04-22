import { useState } from "react";
import { Button } from "ui";

export default function Web() {
	const [username, setUsername] = useState("");

	return (
		<div className="p-4">
			<div className="w-1/2 mb-4">
				<label
					htmlFor="username"
					className="block text-sm font-medium leading-6 text-gray-900"
				>
					Username
				</label>

				<div className="mt-2">
					<input
						type="username"
						name="username"
						id="username"
						className="block w-full rounded-md border-0 p-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
						placeholder="caruso33"
						value={username}
						onChange={(e) => setUsername(e.target.value)}
					/>
				</div>
			</div>

			<Button variant="primary" size="large" label="Get Channel Ids" />
		</div>
	);
}
