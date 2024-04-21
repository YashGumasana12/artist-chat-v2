'use client'
import React, { useState } from 'react';
import Link from 'next/link';
import { IoChatbubblesSharp } from "react-icons/io5";
import { TbMusicQuestion } from "react-icons/tb";
import { RiChatVoiceFill } from "react-icons/ri";
import { RiLogoutCircleRLine } from "react-icons/ri";
import { color } from '../theme/theme';

const activeLinkStyle = {
  color: 'white',
  backgroundColor: 'white',
  borderRadius: '5px',
};

const inactiveLinkStyle = {
  color: '#5B6F90',
  backgroundColor: 'transparent',
};





const VerticalNavbar: React.FC<{ activeScreen: string }> = () => {
  const [activeScreen, setActiveScreen] = useState('');

  return (
    <nav className="bg-[#010019] parent md:h-full">
      <div className="flex flex-col items-start justify-start h-full ">
        <div className="bg-[#041934]">
          {/* <header className="text-white text-4xl font-bold">tweqt</header> */}
          <img src='/images/Designer (6).png' alt="ChatBuzz Icon" className="h-20 w-20 " />
          {/* <img src={Logo} alt="ChatBuzz Icon" className="h-6 w-6 mr-5" /> */}

        </div>



        <div className="flex flex-col justify-center child w-full px-4 gap-y-4">

          <Link href="/Pages/ChatBuzz" className={"text-navlink active:text-activelink px-3 active:bg-darkblue w-full py-3 font-bold flex items-center  justify-center mt-4 "}
            style={activeScreen === 'ChatBuzz' ? activeLinkStyle : inactiveLinkStyle}
            onClick={() => setActiveScreen('ChatBuzz')}
          >
            {/* <img src={activeScreen === 'ChatBuzz' ? '/images/activeicons/chatbuzz.png' : '/images/navicons/chatbuzz.png'} alt="ChatBuzz Icon" className="h-6 w-6 mr-5" /> */}
            <RiChatVoiceFill className='h-6 w-6  '
              style={{
                color: color.svg,
              }}
            />
            {/* <p>CHATBUZZ</p> */}
          </Link>

          <Link href="/Pages/Team" className={"text-navlink active:text-activelink px-3 active:bg-darkblue w-full py-3 font-bold flex items-center justify-center"}
            style={activeScreen === 'Team' ? activeLinkStyle : inactiveLinkStyle}
            onClick={() => setActiveScreen('Team')}
          >
            {/* <img src={activeScreen === 'Team' ? '/images/activeicons/team.png' : '/images/navicons/team.png'} alt="Team Icon" className="h-6 w-6 mr-5" /> */}
            <TbMusicQuestion className={`h-6 w-6 `}
              style={{
                color: color.svg,
              }}
            />
            {/* <p>TEAM</p> */}
          </Link>


          <Link href="/Pages/Projects" className={"text-navlink active:text-activelink px-3 active:bg-darkblue w-full py-3 font-bold flex items-center  justify-center"}
            style={activeScreen === 'Projects' ? activeLinkStyle : inactiveLinkStyle}
            onClick={() => setActiveScreen('Projects')}

          >
            {/* <img src={activeScreen === 'Projects' ? '/images/activeicons/project.png' : '/images/navicons/project.png'} alt="Projects Icon" className="h-6 w-6 mr-5" /> */}
            <IoChatbubblesSharp className={`h-6 w-6 `}
              style={{
                color: color.svg,
              }}
            />

            {/* <p>PROJECTS</p> */}
          </Link>


          <Link href="/Pages/Settings" className={"text-navlink active:text-activelink px-3 active:bg-darkblue w-full py-3 font-bold flex items-center  justify-center"}
            style={activeScreen === 'Settings' ? activeLinkStyle : inactiveLinkStyle}
            onClick={() => setActiveScreen('Settings')}
          >
            {/* <img src={activeScreen === 'Settings' ? '/images/activeicons/settings.png' : '/images/navicons/settings.png'} alt="Settings Icon" className="h-6 w-6 mr-5" /> */}
            <RiLogoutCircleRLine className={`h-6 w-6 `}
              style={{
                color: color.svg,
              }}
            />
            {/* <p>SETTINGS</p> */}
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default VerticalNavbar;
