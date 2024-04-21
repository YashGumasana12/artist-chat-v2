

'use client'

import React, { useState } from 'react';
import Link from 'next/link';

const activeLinkStyle = {
  color: '#8B98AB',
  backgroundColor: '#21324E',
};

const inactiveLinkStyle = {
  color: '#5B6F90',
  backgroundColor: 'transparent',
};

const VerticalNavbar: React.FC = () => {
  const [activeScreen, setActiveScreen] = useState('');

  return (
    <nav className="bg-navblue parent md:h-full">
      <div className="flex flex-col items-start justify-start h-full">
        <div className="bg-darkblue py-4 px-16">
          <header className="text-white text-4xl font-bold">tweqt</header>
        </div>

        <div className="flex flex-col child w-full pt-10">
          <Link href="/Pages/Dashboard">
            <p
              style={activeScreen === 'Dashboard' ? activeLinkStyle : inactiveLinkStyle}
              onClick={() => setActiveScreen('Dashboard')}
              className="text-navlink child w-full py-3 pl-4 font-bold flex items-center mb-4"
            >
              <img src={activeScreen === 'Dashboard' ? '/images/activecons/dashboard.png' : '/images/navicons/dashboard.png'} alt="Dashboard Icon" className="h-6 w-6 mr-5" />
              <p>DASHBOARD</p>
            </p>
          </Link>


        </div>
      </div>
    </nav>
  );
};

export default VerticalNavbar;
