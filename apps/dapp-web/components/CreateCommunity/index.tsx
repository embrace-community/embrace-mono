import { CreateCommunityBanner } from "./CreateCommunityBanner";
import { CreateCommunityForm } from "./CreateCommunityForm";

export const CreateCommunity = () => {
	return (
		<div className="w-full h-full flex flex-col gap-40 items-center">
			<CreateCommunityBanner />
			<CreateCommunityForm />
		</div>
	);
};
