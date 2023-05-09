import Image from "next/image";

export default function Footer() {
	return (
		<footer className="mx-auto my-2 p-3">
			<Image
				src="/images/footer.png"
				width={160}
				height={30}
				alt="Embrace Foundation"
				unoptimized
			/>
		</footer>
	);
}
