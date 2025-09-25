export default function Footer() {
  return (
    <>
      <section className="p-6 px-4 md:px-8 bg-black bottom-0">
        <div className="">
          <div className="grid grid-cols-3">
            <div className="md:flex justify-center items-center">
              <p className="font-bold text-sm lg:text-lg mr-2">Telefono:</p>
              <span className="text-left text-sm lg:text-lg"> +58 (012) 345-6789</span>
            </div>
            <div className="md:flex justify-center items-center">
              <p className="font-bold text-sm lg:text-lg mr-2">Correo:</p>
              <span className="text-left text-sm lg:text-lg">hello@example.com</span>
            </div>
            <div className="md:flex justify-center items-center">
              <p className="font-bold text-sm lg:text-lg mr-2">Direccion:</p>
              <span className="text-left text-sm lg:text-lg">Barquisimeto, Lara, Venezuela</span>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
