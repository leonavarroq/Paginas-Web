export default function TextoAnimado() {
  const marginLeft = "20px";
  const transitionTime = "3s";
  const color = "text-white";
  const newText = "Ejemplo";
  return (
    <>
      <div>
        <h2
          className=""
          style={{
            margin: "auto",
            marginTop: 50,
            marginLeft: `${marginLeft}`,
            transition: `margin ${transitionTime}`,
            color: `${color}`,
            fontSize: "34px",
          }}
        >
          {" "}
          {newText}
        </h2>
      </div>
    </>
  );
}
