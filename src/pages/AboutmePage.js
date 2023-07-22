import { Github, Instagram, Linkedin } from 'lucide-react';
import React from 'react';
import { useSelector } from 'react-redux';

function AboutmePage() {
  const theme = useSelector((state) => state.changeTheme.value);

  return (
    <div className="flex justify-center">
      <div className="max-w-wrap w-full flex flex-col gap-2 p-4 items-center">
        <div className="text-center">
          If you have any question or want to say &quot;Hello&quot;?
          <br />
          You can reach me here
        </div>
        <div
          className={`${theme} flex flex-col items-center justify-center w-[50%] border-2 border-primary p-3 rounded-xl mt-3 gap-2 max-w-[150px] lg:max-w-[250px] lg:text-xl lg:p-7 lg:gap-5`}
        >
          <img
            alt="Ichsan profile"
            className={`${theme} w-20 lg:w-32 aspect-square rounded-full border-accent border-2 overflow-hidden`}
            src="https://avatars.githubusercontent.com/u/108980933?v=4"
          />
          <h1>Ichsan Sandy</h1>
          <div className={`${theme} flex gap-2 lg:gap-6 `}>
            <a className="hover:text-primary lg:scale-150 " href="http://github.com/ichsansandy" target="_blank" rel="noreferrer">
              <Github />
            </a>
            <a className="hover:text-primary lg:scale-150" href="https://www.linkedin.com/in/ichsans/" target="_blank" rel="noreferrer">
              <Linkedin />
            </a>
            <a className="hover:text-primary lg:scale-150" href="https://www.instagram.com/ichsans__/" target="_blank" rel="noreferrer">
              <Instagram />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AboutmePage;
