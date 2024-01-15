import { useTheme } from "../context/DarkContext";
export const MiCv = () => {
  const { mode } = useTheme();

  return (
    <div className=' flex justify-center'>
      <a
        href='/public/cv/fabio-guillen-frontend-developer.pdf'
        target='_blank'
        rel='noopener noreferrer'
        // data-aos='zoom-in'
        className={`inline-block hover:scale-105 ${
          mode
            ? "bg-[#222831] after:bg-[#00ADB5] border-2 border-[#00ADB5]"
            : "bg-[#A6E3E9] after:bg-[#71C9CE] border-2 border-[#71C9CE]"
        } mt-4 rounded-lg  px-3 z-10  py-[3px] overflow-hidden  transition-all duration-300 after:ease-in   relative after:absolute after:w-full after:h-full after:transition-all after:duration-500 md:after:right-full after:right-full after:-z-10 after:bottom-0   hover:after:right-0    `}>
        Mi curriculum
      </a>
    </div>
  );
};
