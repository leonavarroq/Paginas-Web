interface form {
  data: {
    nombre: string;
    email: string;
    mensaje: string;
  };
}

function Alert({ data }: form) {
  console.log(data);
  return (
    <>
      <div
        className="bg-blue-100 border-t border-b border-blue-500 text-blue-700 px-4 py-3"
        role="alert"
      >
        <p className="font-bold">Informational message</p>
        <p className="text-sm">Mensaje enviado con exito</p>
      </div>
    </>
  );
}

export default Alert;
