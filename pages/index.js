import { useState } from "react";
import { MdLocalPhone } from "react-icons/md";
import { FaLinkedinIn } from "react-icons/fa6";
import { SiGmail } from "react-icons/si";
import { TiLocation } from "react-icons/ti";
import Image from "next/image";
import { RiProjectorFill } from "react-icons/ri";
import { FaAward } from "react-icons/fa6";

const StaticResume = () => {
  const [displaySkills, setDisplaySkills] = useState(true);

  const resumeSubHeading = `text-lg md:text-xl lg:text-2xl w-full border rounded-3xl p-2 px-4 mt-3 mb-3 text-black`;
  const educationStyling = `text-base desktop:text-lg font-bold mt-5 text-black`;
  const primaryBtn = `bg-gradient-to-r from-blue_col via-purple_col to-pink_col px-5 py-2 rounded-lg text-white`;

  const skillData = [
    "React.Js",
    "Next.Js",
    "Tailwind CSS",
    "JavaScript (ES6+)",
    "TypeScript",
    "HTML5",
    "CSS3",
    "SCSS",
  ];

  const experienceData = [
    {
      title: "UK - AOD",
      technologies: "React, Next.js",
      features: "Multi-page web assignments showcasing dynamic pages and responsive layouts.",
    },
    {
      title: "Weather App",
      technologies: "JavaScript, CSS, API Integration",
      features: "A weather forecasting app displaying real-time data using API.",
    },
  ];

  const education = [
    {
      title: "Metric",
      institute: "The Anjum School, Baldia Town Karachi | (2022)",
    },
    {
      title: "Intermediate in Pre-engineering",
      institute: "Boys Degree College, Baldia Town Karachi | (2023)",
    },
    {
      title: "GIAIC - Governor House Sindh IT",
      institute: "Summer 2024",
    },
    {
      title: "Internet JavaScript, React",
      institute: "Govt. Degree College, Baldia Town Karachi",
    },
  ];

  const contact = [
    {
      icon: <MdLocalPhone />,
      title: "(+92) 03428106303",
    },
    {
      icon: <SiGmail />,
      title: "femidahaseeb7@gmail.com",
    },
    {
      icon: <TiLocation />,
      title: "Karachi, Pakistan",
    },
  ];

  return (
    <div id="content" className="resumediv mt-8 flex flex-col-reverse lg:flex-row flex-wrap md:flex-row justify-center rounded-lg border-2 mx-auto w-full max-w-lg md:max-w-4xl lg:max-w-5xl bg-white">
      {/* Left Section */}
      <div className="left bg-zinc-300 text-black p-4 md:p-4 sm:p-6 lg:p-8 rounded-lg lg:rounded-l-lg w-full lg:w-1/3 md:w-1/3">
        <div className="hidden md:block flex justify-center items-center rounded-full bg-slate-100 mb-12 border-2 border-slate-100 w-20 h-20 md:w-28 md:h-28 lg:w-48 lg:h-48 mx-auto">
          <img className="mx-auto w-full h-full  object-cover" src="https://media.licdn.com/dms/image/v2/D4E03AQEc3Ip8ES3zzA/profile-displayphoto-shrink_400_400/profile-displayphoto-shrink_400_400/0/1725449916514?e=1736985600&v=beta&t=Pcp3N0qZdEJeLNwl8AplZcWiybqm23JqRXQ1HklB75c" alt="profile" width={500} height={300} priority />
        </div>
        <h2 className={`${resumeSubHeading} bg-white border border-primary-color`}>About Me</h2>
        <p className="text-sm desktop:text-base my-~6">
          I am a dedicated front-end developer with expertise in JavaScript, HTML, CSS, and Tailwind CSS. I am passionate about creating responsive, intuitive, and high-performance web applications. Currently, I am actively seeking internship opportunities to apply my skills and gain hands-on experience.
        </p>

        <h2 className={`${resumeSubHeading} bg-white border border-primary-color`}>Contact</h2>
        <div className="flex flex-col items-start w-full">
          {contact.map((crnt, index) => (
            <div key={index} className="flex items-center w-full">
              <div className="bg-primary-color w-10 h-10 flex justify-center items-center p-2 my-2 rounded-full">
                {crnt.icon}
              </div>
              <p className="text-sm desktop:text-base mb-4 mt-2 ml-2 min-w-0 break-words">{crnt.title}</p>
            </div>
          ))}
        </div>

        <div className="flex flex-col items-start w-full">
          <div className="flex items-center w-full">
            <div className="bg-primary-color w-10 h-10 flex justify-center items-center p-2 my-2 rounded-full">
              <FaLinkedinIn />
            </div>
            <p className="text-sm desktop:text-base mb-4 mt-2 ml-2 min-w-0 break-words">
              <a className="underline" href="https://www.linkedin.com/in/syedabdulhaseeb7/" target="_blank" rel="noopener noreferrer">
                LinkedIn Profile Link
              </a>
            </p>
          </div>
        </div>

        <h2 className={`${resumeSubHeading} bg-white mt-6 border border-primary-color`}>Languages</h2>
        <p className="text-sm desktop:text-base my-5">English , Urdu</p>

        <h2 className={`${resumeSubHeading} bg-white mt-6 border border-primary-color`}>Skills</h2>
        {displaySkills && (
          <ul>
            {skillData.map((skills, ind) => (
              <li className={`text-sm desktop:text-base font-bold mt-5 ms-3 list-disc`} key={ind}>
                {skills}
              </li>
            ))}
          </ul>
        )}

        <button className={`${primaryBtn} my-5`} onClick={() => setDisplaySkills(!displaySkills)}>
          {displaySkills ? "Hide" : "Show"}
        </button>
      </div>

      {/* Right Section */}
      <div className="right p-4 sm:p-6 lg:p-8 w-full lg:w-2/3 md:w-2/3 md:p-6">
        <div className="flex justify-center items-center mb-8 lg:mb-12 md:mx-auto md:my-3 my-6">
          <img className="w-20 h-20 md:w-28 md:h-28 lg:w-48 lg:h-48 rounded-full object-cover border-2 border-slate-100 bg-slate-100 block md:hidden lg:hidden" src="https://media.licdn.com/dms/image/v2/D4E16AQFXBxRYTC1h8w/profile-displaybackgroundimage-shrink_350_1400/profile-displaybackgroundimage-shrink_350_1400/0/1725450795018?e=1736985600&v=beta&t=UoDY0dkkkzPJhTCIS_XKwBetWyb3jkIC9noFn1nJqMk" alt="profile" width={500} height={300} priority />
          <div>
            <h2 className="text-center text-xl sm:text-2xl md:text-5xl lg:text-6xl font-bold text-zinc-800">Abdul Haseeb</h2>
            <h2 className={`text-center text-lg sm:text-xl md:text-3xl lg:text-5xl font-bold mt-2 mb-6 text-purple_col text-zinc-800`} style={{ fontFamily: "Dancing Script" }}>
              Front End Developer
            </h2>
          </div>
        </div>

        <h2 className={`${resumeSubHeading} bg-primary-color`}>Education</h2>
        <ul className="mb-6">
          {education.map((crnt, ind) => (
            <div key={ind}>
              <li className={`${educationStyling} list-disc ms-4 mb-1 text-gray-800`}>{crnt.title}</li>
              <p className={`desktop:text-base text-gray-800`}>{crnt.institute}</p>
            </div>
          ))}
        </ul>

        <h2 className={`${resumeSubHeading} bg-primary-color text-gray-800`}>Academic Projects</h2>
        <div>
          {experienceData.map((crnt, index) => (
            <div className="mt-5" key={index}>
              <h4 className="text-2xl font-bold text-gray-800">{crnt.title}</h4>
              <h5 className="my-2 text-gray-800">
                <span className="font-bold text-gray-800">Technologies Used: </span>{crnt.technologies}
              </h5>
              <p className="my-2 text-gray-800">
                <span className="font-bold text-gray-800">Features: </span>{crnt.features}
              </p>
              <hr className="my-2" />
            </div>
          ))}
        </div>

        <h2 className={`${resumeSubHeading} bg-primary-color text-gray-800`}>Position of Responsibility</h2>
        <div>
          <h4 className="text-2xl font-bold text-gray-800">GIAIC - Governor House</h4>
          <p className="text-gray-800">Summer 2024 - Present</p>
          <p className="text-gray-800">Organized hackathons and conducted sessions for 300+ college students on Web Development-related topics.</p>
        </div>

        <h2 className={`${resumeSubHeading} bg-primary-color text-gray-800`}>Achievements / Hobbies</h2>
        <div className="flex gap-4 my-2">
          <div>
            <FaAward className="text-yellow-500" />
            <h4 className="font-bold text-gray-800">Top 5 Finalist</h4>
            <p className="text-gray-800">National Web Development Competition</p>
          </div>
          <div>
            <RiProjectorFill className="text-purple-500" />
            <h4 className="font-bold text-gray-800">Web Developer</h4>
            <p className="text-gray-800">Summer 2024</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StaticResume;
