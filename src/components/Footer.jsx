import 'boxicons/css/boxicons.min.css';
import { footer } from 'framer-motion/client';

const Footer = () => {
    return (
        <footer className="bg-gray-900 text-white py-8 px-4 mt-12">
            <div className="max-w-4xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
                <div className="flex items-center gap-4">
                    <img className="h-10" src="/images/illu-text.png" alt="illu-text" />
                    <img className="h-16" src="/images/illu-logo.png" alt="illu_logo" />
                </div>
                <div className="flex justify-center items-center gap-6 mt-4 md:mt-0">
                    <a
                        href="https://www.facebook.com"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:text-blue-500 transition-colors"
                        aria-label="Facebook"
                    >
                        <i className="bx bxl-facebook-square text-3xl"></i>
                    </a>
                    <a
                        href="https://www.instagram.com"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:text-pink-400 transition-colors"
                        aria-label="Instagram"
                    >
                        <i className="bx bxl-instagram text-3xl"></i>
                    </a>
                    <a
                        href="https://www.twitter.com"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:text-blue-400 transition-colors"
                        aria-label="Twitter"
                    >
                        <i className="bx bxl-twitter text-3xl"></i>
                    </a>
                </div>
            </div>
            <div className="text-center text-gray-400 text-sm mt-6">
                &copy; {new Date().getFullYear()} Gaming Website. All rights reserved.
            </div>
        </footer>
    );
}

export default Footer
