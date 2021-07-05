import ColorLuminance from "../../functions/ColorLuminance"

export default function SimpleTextContainer({ color, text, position }) {
  return (
    <div
      style={{
        height: 70,
        backgroundColor: color,
        padding: 10,
        borderRadius: 15,
        display: "flex",
        flexDirection: "row",
      }}
    >
      <div
        style={{
          height: 45,
          width: 45,
          backgroundColor: ColorLuminance(color, 0.1),
          margin: "auto",
          borderRadius: 10,
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          fontSize: 36,
          color: "white",
          boxShadow: "0px 7px 15px -10px #000000",
          WebkitBoxShadow: "0px 7px 15px -10px #000000",
        }}
      >
        {position}.
      </div>
      <div
        style={{
          display: "flex",
          flex: 4,
          marginLeft: 15,
          borderLeft: `2px solid ${ColorLuminance(color, 0.2)}`,
          alignItems: "center",
          paddingLeft: 20,
          fontSize: 24,
          color: "white",
          fontWeight: 500,
        }}
      >
        {text}
      </div>
    </div>
  );
}
