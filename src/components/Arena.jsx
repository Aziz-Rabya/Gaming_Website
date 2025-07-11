import { useEffect } from "react";

const Arena = () => {
  useEffect(() => {
    const observer = new IntersectionObserver((entries, obs) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const video = entry.target;
          const src = video.getAttribute("data-src");
          if (src) {
            const source = document.createElement("source");
            source.src = src;
            source.type = "video/webm";
            video.appendChild(source);
            video.load();
            obs.unobserve(video);
          }
        }
      });
    });

    document.querySelectorAll("video.lazy").forEach((video) => {
      observer.observe(video);
    });
  }, []);

  return (
    <div className="md:min-h-[90%] p-0 lg:p-8 md:mt-0 mt-60">
      <div className="realative z-10 pt-6 text-center">
        <h1
          className="text-5xl font-bold tracking-widest mb-28"
          style={{
            textShadow:
              "0 0 10px rgba(255, 255, 255, 0.7), 0 0 20px rgba(167, 139, 250, 0.5)",
          }}
        >
          Arena
        </h1>
      </div>

      <div className="lg:max-w-[90%] w-[90%] mx-auto grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
        {/* Left side */}
        <div className="md:col-span-1 space-y-4 md:space-y-6">
          <div className="relative overflow-hidden rounded-3xl border border-white aspect-[4.4/4] transform transition-transform duration-300 hover:scale-105">
            <div className="absolute h-full w-full">
              <img src="/images/bento-card1.png" alt="bento" />
              <button className="absolute bottom-0 h-16 w-full bg-black bg-opacity-70 text-2xl font-bold hover:text-yellow-400 transition-all duration-300 text-nowrap">
                <i className="bx bxs-store-alt bx-flip-horizontal"></i> NFT
                STORE
              </button>
            </div>
          </div>

          <div className="relative overflow-hidden rounded-3xl border border-white aspect-[4.5/4] transform transition-transform duration-300 hover:scale-105">
            <video
              className="lazy w-full h-full object-cover"
              autoPlay
              loop
              muted
              playsInline
              preload="none"
              data-src="https://res.cloudinary.com/defwlou35/video/upload/v1752268777/Bento-Card2_hkk421.webm"
              poster="/images/bento-card2-poster.jpg"
            ></video>
          </div>
        </div>

        {/* Right side */}
        <div className="md:col-span-2 space-y-4 md:space-y-6">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 md:gap-6">
            {/* Scoriox */}
            <a
              href="https://example.com/scoriox"
              target="_blank"
              rel="noopener noreferrer"
              className="relative overflow-hidden rounded-3xl border border-white aspect-square transform transition-transform duration-300 hover:scale-105 block"
            >
              <video
                className="lazy w-full h-full object-cover"
                autoPlay
                loop
                muted
                playsInline
                preload="none"
                data-src="https://res.cloudinary.com/defwlou35/video/upload/v1752269310/Bento-Card3_qbio25.webm"
              ></video>
              <h1 className="absolute bottom-2 left-1/2 transform -translate-x-1/2 z-10 font-extrabold text-2xl">
                Scoriox
              </h1>
            </a>
            {/* Floralynx */}
            <a
              href="https://example.com/floralynx"
              target="_blank"
              rel="noopener noreferrer"
              className="relative overflow-hidden rounded-3xl border border-white aspect-square transform transition-transform duration-300 hover:scale-105 block"
            >
              <video
                className="lazy w-full h-full object-cover"
                autoPlay
                loop
                muted
                playsInline
                preload="none"
                data-src="https://res.cloudinary.com/defwlou35/video/upload/v1752268706/Bento-Card4_f82pwi.webm"
              ></video>
              <h1 className="absolute bottom-2 left-1/2 transform -translate-x-1/2 z-10 font-extrabold text-2xl">
                Floralynx
              </h1>
            </a>
            {/* Titanor */}
            <a
              href="https://example.com/titanor"
              target="_blank"
              rel="noopener noreferrer"
              className="relative overflow-hidden rounded-3xl border border-white aspect-square transform transition-transform duration-300 hover:scale-105 block"
            >
              <video
                className="lazy w-full h-full object-cover"
                autoPlay
                loop
                muted
                playsInline
                preload="none"
                data-src="https://res.cloudinary.com/defwlou35/video/upload/v1752268752/Bento-Card5_vcrb72.webm"
              ></video>
              <h1 className="absolute bottom-2 left-1/2 transform -translate-x-1/2 z-10 font-extrabold text-2xl">
                Titanor
              </h1>
            </a>
          </div>

          <div className="relative overflow-hidden rounded-3xl border border-white aspect-[16/9] md:col-span-2 transform transition-transform duration-300 hover:scale-[1.02]">
            <img src="/images/bento-card.png" alt="bento" />
            <button className="absolute bottom-0 h-16 w-full bg-black bg-opacity-70 text-2xl font-bold hover:text-yellow-400 transition-all duration-300 text-nowrap">
              <i className="bx bx-link"></i> Buy Now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Arena;
