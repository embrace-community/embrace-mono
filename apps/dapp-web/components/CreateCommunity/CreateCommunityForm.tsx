import { Input } from "../FormElements/Input";

export const CreateCommunityForm = () => {
	return (
		<div className="w-full flex flex-col items-center mt-8">
			<Input type="lg" placeholder="community name" />
		</div>
	);
};
