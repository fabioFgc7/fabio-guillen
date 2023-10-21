import { useTheme } from "../components/context/DarkContext";
import { Project } from "../types";
import { GitHubIcon, LinkIcon } from "../components/mi_icons/Icons";
import { Link } from "react-router-dom";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { proyectos } from "../data/data";
const items: Project[] = proyectos.map((el) => el);
console.log(items);
const Project = () => {
  const { mode } = useTheme();
  return (
    <section
      id='work' // Generated by https://quicktype.io
      className='w-full md:space-y-10 space-y-5 lg:h-[60vh]  overflow-hidden'>
      <h2
        className={`w-full text-center text-2xl font-bold ${
          mode ? "text-[#00ADB5]" : "text-[#222831] "
        } `}
        data-aos='title-animation'>
        Proyectos
      </h2>
      <Carousel
        transitionTime={1000}
        showArrows={true}
        showStatus={false}
        showThumbs={false}
        autoPlay={true}
        centerMode={true}
        interval={5000}
        infiniteLoop={true}
        centerSlidePercentage={100}
        swipeable={true}
        ariaLabel={`botton`}
        className='flex  gap-5 justify-center items-center  space-x-10 duration-300 ease-in transition-all'>
        {items.map((item) => (
          <div
            className={`w-full flex justify-center  `}
            key={item.id}
            data-aos={item.animatedAos}>
            <div
              className={`md:w-1/2 w-4/5 sm:w-4/6  relative  flex flex-col items-center justify-center duration-300 ease-out rounded-xl   overflow-hidden group: ${
                mode
                  ? "bg-[#393E46] border-[#393E46] border-2 hover:text-[#EEEEEE]"
                  : "bg-[#CBF1F5] "
              }     hover:border-[#00ADB5]  p-2 group  `}>
              <img
                className='w-60 lg:h-72  md:h-60 h-52 group-hover:scale-110 transition-all duration-300 ease-in rounded-md'
                src={item.image}
                alt={item.title}
              />
              <div
                className={` ${
                  mode
                    ? "bg-[#000] group-hover:text-[#eee]"
                    : "bg-[#CBF1F5] group-hover:text-[#000]"
                }    absolute h-full -bottom-full  py-1  bg-opacity-80 group-hover:bottom-0 transition-all duration-500 ease flex flex-col items-center`}>
                <h1 className='text-center text-[16px] font-semibold font-serif '>
                  {item.title}
                </h1>
                <p className='text-center text-sm font-serif  px-2  '>
                  {item.description}
                </p>
                <Link
                  to={`/fabio-guillen/${item.id}`}
                  className={` rounded-md text-center  md:mt-4 mt-1 px-2 md:py-[3px] transition-all duration-500 ease-in font-semibold   ${
                    mode
                      ? "border-[#00ADB5] hover:bg-[#00ADB5] border-2 "
                      : " hover:bg-[#71C9CE] border-2 border-[#71C9CE]"
                  } } `}>
                  Ver mas
                </Link>

                <div className='absolute w-full md:bottom-20 bottom-8 flex gap-3 justify-center  items-end'>
                  <a
                    href={item.enlance.linkPage}
                    target='_blank'
                    rel='noopener noreferrer'
                    className=''>
                    <LinkIcon />
                  </a>
                  <a
                    href={item.enlance.linkGitHub}
                    target='_blank'
                    rel='noopener noreferrer'
                    className=''>
                    <GitHubIcon />
                  </a>
                </div>
              </div>
            </div>
          </div>
        ))}
      </Carousel>
    </section>
  );
};

export default Project;