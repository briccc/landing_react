import video1 from '../assets/video1.mp4';
import video2 from '../assets/video2.mp4';

export const HeroSection = () => {
  return (
    <div className="flex flex-col items-center mt-6 lg:mt-20">
      <h2 className="text-4xl-sm:text-6xl lg:text-7xl text-center tracking-wide">
        Compra con las 3 B's:
        <span className="bg-gradient-to-r from-indigo-500 to-indigo-800 text-transparent bg-clip-text">
          {" "}
          Bueno, Bonito y Barato
        </span>
      </h2>
      <p className="mt-10 text-lg text-center text-neutral-500 max-w-4xl">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta incidunt
        consequuntur natus quaerat illum deleniti aspernatur, recusandae, sunt
        rem quas fuga sapiente, tempore sed dolores odio. Error beatae illum
        eveniet?
      </p>
      <div className="flex justify-center my-10">
        <a
          href=""
          className="bg-gradient-to-r from-indigo-500 to-indigo-800 py-3 px-4 mx-3 rounded-md"
        >
          Empezar
        </a>
        <a href="" className="py-3 px-4 mx-3 rounded-md border">Documentación</a>
      </div>

      <div className="flex mt-10 justify-center">
        <video src={video1} autoPlay loop muted className="rounded-lg w-1/2 border border-indigo-700 shadow-indigo-400 mx-2 my-4">
           Tu navegador no soporta la etiqueta de video.
        </video>
        <video src={video2} autoPlay loop muted className="rounded-lg w-1/2 border border-indigo-700 shadow-indigo-400 mx-2 my-4">
           Tu navegador no soporta la etiqueta de video.
        </video>
      </div>
    </div>
  );
};
