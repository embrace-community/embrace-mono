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
      style={{
        backgroundColor: primary ? "green" : "blue",
        color: "white",
        fontSize: size === "large" ? "24px" : "14px",
      }}
    >
      {label}
    </button>
  );
};
