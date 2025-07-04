import { useState } from 'react';
import { Star } from 'lucide-react';
import {motion, AnimatePresence} from 'framer-motion';
import Spline from '@splinetool/react-spline';

const Characters = () => {
  const [selectedAvatar, setselectedAvatar] = useState("VIKI");

  const Avatar = {
    VIKI: {
      name: "VIKI",
      power: 75,
      stable: 95,
      penetrate: 30,
      portable: 80,
      stars: 3,
    },
    EVA: {
      name: "EVA",
      power: 90,
      stable: 80,
      penetrate: 70,
      portable: 60,
      stars: 4,
    }
  };

  const currentAvatar = Avatar[selectedAvatar];

return (
  <div className="relative w-full min-h-screen overflow-hidden pb-[10%]">
    {/* section title */}
    <div className="relative z-10 pt-10 text-center">
      <h1
        className="text-5xl font-bold tracking-widest mb-10"
        style={{ textShadow: "0 0 10px rgba(255, 255, 255, 0.7)" }}
      >
        Fighters
      </h1>
    </div>

    {/* main content area - responsive layout */}
    <div className="relative z-10 w-full px-4 flex justify-center">
      <div className="w-full max-w-6xl flex flex-col lg:flex-row gap-8">
        {/* LEFT SECTION (Stats + Cards) */}
        <div className="flex-1 flex flex-col space-y-6">
          {/* selected avatar info card */}
          <div className="bg-gray-900/80 backdrop-blur-sm rounded-lg p-6 border border-gray-800 shadow-[0_0_15px_rgba(167,139,250,0.2)]">
            <h1 className="text-2xl font-semibold mb-4">{currentAvatar.name}</h1>

            {/* Avatar statistics */}
            <div className="space-y-4 mb-8">
              {[
                { label: "Power", value: currentAvatar.power },
                { label: "Stable", value: currentAvatar.stable },
                { label: "Penetrate", value: currentAvatar.penetrate },
                { label: "Portable", value: currentAvatar.portable },
              ].map(({ label, value }) => (
                <div className="flex items-center gap-2" key={label}>
                  <span className="w-24 text-gray-400">{label}</span>
                  <div className="flex-1 h-4 bg-gray-800 rounded-full overflow-hidden">
                    <div
                      className="h-full bg-gradient-to-r from-violet-600 to-white transition-all duration-500"
                      style={{ width: `${value}%` }}
                    />
                  </div>
                  <span className="ml-2 text-sm text-gray-300 font-medium">{value}</span>
                </div>
              ))}
            </div>

            {/* action buttons */}
            <div className="flex gap-3">
              <button className="px-4 py-1 bg-violet-900 text-white rounded-md font-semibold hover:opacity-70 transition-all duration-300">
                Proficient
              </button>
              <button className="px-4 py-1 bg-violet-900 text-white rounded-md font-semibold hover:opacity-70 transition-all duration-300">
                Redemption
              </button>
            </div>
          </div>

          {/* avatar selection cards */}
          <div className="grid grid-cols-2 gap-4">
            {/* VIKI card */}
            <div
              className="relative bg-gray-900/70 backdrop-blur-sm rounded-lg p-3 border flex flex-col items-center cursor-pointer transition-all duration-300"
              onClick={() => setselectedAvatar("VIKI")}
            >
              <div className="text-lg mb-2">VIKI</div>
              <div className="w-20 h-20 bg-gray-800/50 rounded-md flex items-center justify-center mb-2">
                <img src="/images/VIKI.png" alt="VIKI" />
              </div>
              <div className="flex">
                {[...Array(3)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-violet-400 text-violet-500" />
                ))}
              </div>
              {selectedAvatar === "VIKI" && (
                <div className="absolute inset-0 border-2 border-violet-500 rounded-lg pointer-events-none"></div>
              )}
            </div>

            {/* EVA card */}
            <div
              className="relative bg-gray-900/70 backdrop-blur-sm rounded-lg p-3 border flex flex-col items-center cursor-pointer transition-all duration-300"
              onClick={() => setselectedAvatar("EVA")}
            >
              <div className="text-lg mb-2">EVA</div>
              <div className="w-20 h-20 bg-gray-800/50 rounded-md flex items-center justify-center mb-2">
                <img src="/images/EVA.png" alt="EVA" />
              </div>
              <div className="flex">
                {[...Array(4)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-violet-400 text-violet-500" />
                ))}
              </div>
              {selectedAvatar === "EVA" && (
                <div className="absolute inset-0 border-2 border-violet-500 rounded-lg pointer-events-none"></div>
              )}
            </div>
          </div>
        </div> 
        {/* RIGHT SECTION (Avatar Image) */}      
        <div className='relative md:w:2/4 w-full
        md:h-full h-80
        flex items-center
        justify-center overflow-hidden'>
          <AnimatePresence mode='wait'>
            {selectedAvatar === "VIKI" ? (
              <motion.div key="VIKI"
              className='absolute inset-0'
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "-100%" }}
              transition={{ duration: 0.5 }}>
                <Spline scene="https://prod.spline.design/lobG1w4eQDlZHK9p/scene.splinecode" />
              </motion.div>
            ) : (
              <motion.div key="EVA"
              className='absolute inset-0'
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "-100%" }}
              transition={{ duration: 0.5 }}>
                 <Spline scene="https://prod.spline.design/fnhY0tfF8acuU91C/scene.splinecode" />
              </motion.div>
            )}
          </AnimatePresence>
        </div> 
      </div>
    </div>
  </div>
);
}
export default Characters;
