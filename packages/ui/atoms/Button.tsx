interface Props {
  primary?: boolean;
  size?: "small" | "large";
  label?: string;
}

export const Button = ({
  primary = false,
  label = "Default",
  size = "small",
}: Props) => {
  return (
    <button
      // style={{
      //   backgroundColor: primary ? "green" : "blue",
      //   color: "white",
      //   fontSize: size === "large" ? "24px" : "14px",
      // }}
      className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
    >
      {label}
    </button>
  );
};
