import {
  Github, Instagram, Linkedin, TrendingUp,
} from 'lucide-react';
import React from 'react';
import { useSelector } from 'react-redux';

function AboutmePage() {
  const theme = useSelector((state) => state.changeTheme.value);

  return (
    <div className="flex justify-center">
      <div className="max-w-wrap w-full flex flex-wrap gap-2 p-4 md:justify-center ">
        <div
          className={`${theme} border-2 p-3 rounded-xl border-primary text-left w-[100%] text-6xl md:text-8xl lg:p-6  bg-accent text-textClr`}
        >
          <span>FORGET. </span>
          <br />
          <span className="font-extrabold underline">ABOUT. </span>
          <br />
          <span className="font-extrabold underline">ME. </span>
          <br />
          <span className="font-bold">NOT. </span>
          <br />
        </div>

        <div className={`${theme} flex gap-2 lg:gap-6 lg:p-5  text-2xl uppercase font-bold border-2 border-primary bg-white p-3 rounded-xl mt-3 text-primary`}>
          Ichsan Sandy
        </div>
        <div
          className={`${theme} flex items-center gap-2 lg:gap-6 lg:p-5 border-2 border-primary bg-accent p-3 rounded-xl mt-3 `}
        >
          <a
            className="hover:text-primary hover:scale-125 lg:scale-150 lg:hover:scale-[200%] "
            href="http://github.com/ichsansandy"
            target="_blank"
            rel="noreferrer"
          >
            <Github className={`${theme} text-textClr`} />
          </a>
          <a
            className="hover:text-primary hover:scale-125 lg:scale-150 lg:hover:scale-[200%] "
            href="https://www.linkedin.com/in/ichsans/"
            target="_blank"
            rel="noreferrer"
          >
            <Linkedin className={`${theme} text-textClr`} />
          </a>
          <a
            className="hover:text-primary hover:scale-125 lg:scale-150 lg:hover:scale-[200%] "
            href="https://www.instagram.com/ichsans__/"
            target="_blank"
            rel="noreferrer"
          >
            <Instagram className={`${theme} text-textClr`} />
          </a>
        </div>
        <div className={`${theme} flex gap-1 lg:gap-3 items-center lg:p-5 text-xl font-bold border-2 border-primary bg-primary p-3 rounded-xl mt-3 text-textClr`}>
          <TrendingUp />
          Stockwise &copy;2023
        </div>
      </div>
    </div>
  );
}

export default AboutmePage;
