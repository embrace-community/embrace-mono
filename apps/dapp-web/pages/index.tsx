import Image from "next/image";
import { Layout } from "../components/Layout";

export default function Web() {
	return (
		<Layout topNavigation={false}>
			<div className="flex flex-row items-center justify-center my-4">
				<Image
					src="/images/embrace-new.png"
					width={120}
					height={120}
					alt="Embrace"
					unoptimized
				/>

				<Image
					src="/images/embrace-community.png"
					width={360}
					height={100}
					alt="Embrace"
					className="mx-4 "
					unoptimized
				/>
			</div>
		</Layout>
	);
}
