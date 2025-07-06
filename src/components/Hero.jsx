
const Hero = () => {
  return (
    <main className='relative w-full h-screen overflow-hidden flex justify-center mb-[10%]'>
        <video src='public\videos\Hero.webm'
        autoPlay
        loop
        muted
        playsInline
        className='w-full h-[95%]
         object-cover absolute top-0 left-0 z-10'>
        </video>

        <div className='absolute bottom-[15%] flex flex-col items-center gap-5 z-20'>
            <img src="\images\illu-text.png"
             alt="Illu-text"
             className='md:w-[30rem] w-[20rem]'
              />
              <h1 className='md:text-2xl text-1xl font-bold'>Explore, Capture, Conquer</h1>
              <div className='md:w-[75%] w-[60%] h-[0.1px] bg-[#baba]'></div>
                <button className="h-10 px-6
                bg-gradient-to-r from-purple-500
                to-indigo-600 rounded-lg
                font-medium text-nowrap hover:opacity-70
                transition-all duration-300">
                    Play Now
                </button>

                <div className='flex items-center gap-5 text-3xl font-extrabold text-gray-200'>
                    <img className='md:h-16 h-12' src="\images\illu-logo.png" alt="illu-logo" />ZERO
                </div>

                <p className='max-w-[80%] text-center text-[#babaff]'>
                    Notice: Illuvium Games are in Beta.
                    Participation involves resk. Read our full Disclaimer here.
                </p>
            </div>
            <div className='absolute bottom-5 right-1/2 translate-x-1/2 z-30 flex flex-col items-center'>
                <div className='w-6 h-10 border-2 border-[#babaff] rounded-full flex justify-center items-start p-1'>
                    <div className='w-1 h-2 bg-[#babaff] rounded-full animate-bounce'></div>
                </div>
                <p className='text-[#babaff] text-sm mt-2'>Scroll Down</p>
            </div>  
    </main>
  )
}

export default Hero
