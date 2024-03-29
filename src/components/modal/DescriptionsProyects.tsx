import { useTheme } from "../context/DarkContext";
import { Procesos } from "./Procesos";
import { Tecnologias_Y_Caracteristicas } from "./Tecnologias_Y_Caracteristicas";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { Project } from "../../types";
import { Link } from "react-router-dom";
import { ArrowLeft } from "../mi_icons/Icons";
import { proyectos } from "../../data/data";
export const DescriptionsProyects = () => {
  const [elementos, setElementos] = useState<Project[]>([]);
  const { id } = useParams();
  useEffect(() => {
    const detalles = proyectos.find((el: Project) => el.id === id);
    if (detalles) {
      setElementos([detalles]);
    }
  }, [id]);
  const { mode } = useTheme();
  return (
    <section className={` w-full   p-2 h-full   `}>
      <Link
        id='work'
        to='/fabio-guillen/'
        className='fixed z-10'>
        <ArrowLeft />
      </Link>
      <section className='w-full flex justify-center  '>
        {elementos.map(
          ({
            title,
            caracteristicasDestacadas,
            leccionesAprendidas,
            fechaFinalizacion,
            tecnologiasUtilizadas,
            procesoDesarrollo,
            resultadosYLogros,
            id,
          }) => {
            return (
              <div
                key={id}
                className={`max-w-5xl flex flex-col  gap-2  justify-center animate-flip-down animate-delay-500 transition-all duration-300 ease-in  `}>
                <h2
                  className={`w-full text-center md:text-2xl font-bold text-lg ${
                    mode ? "text-[#00ADB5]" : "text-[#222831] "
                  } `}>
                  {title}
                </h2>
                <div className='w-full'>
                  <Tecnologias_Y_Caracteristicas
                    caracteristicasDestacadas={caracteristicasDestacadas}
                    tecnologiasUtilizadas={tecnologiasUtilizadas}
                    fechaFinalizacion={fechaFinalizacion}
                  />
                </div>

                <div className=' w-full  grid   gap-2  '>
                  <Procesos procesoDesarrollo={procesoDesarrollo} />
                  <div
                    className={`gap-2  border-[2px] max-w-5xl p-2 rounded-md ${
                      mode ? "border-[#00ADB5]" : "border-[#71C9CE]"
                    }`}>
                    <p className='text-lg'>Resultados y Logros:</p>
                    <p>{resultadosYLogros}</p>
                  </div>
                  <div
                    className={`border-[2px] max-w-5xl p-2 rounded-md ${
                      mode ? "border-[#00ADB5]" : "border-[#71C9CE]"
                    }`}>
                    <p className='text-lg'>Lecciones aprendidas:</p>
                    <p className='leading-normal'>{leccionesAprendidas}</p>
                  </div>
                  <h3
                    className={` gap-2  border-[2px] rounded-md p-2 md:w-auto max-w-5xl  ${
                      mode ? "border-[#00ADB5]" : "border-[#71C9CE]"
                    }`}>
                    Fechas de finalización: <span>{fechaFinalizacion} </span>
                  </h3>
                </div>
              </div>
            );
          }
        )}
      </section>
    </section>
  );
};
