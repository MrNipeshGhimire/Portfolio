import { ArrowRight } from "lucide-react";
import { useEffect, useState } from "react";
import Typed from "typed.js"; // Import Typed.js
import nipeshImage from '../images/nipesh.jpg';

const HeroSection = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);

    // Initialize Typed.js instance
    const options = {
      strings: ["Nipesh Ghimire", "Full Stack Developer", "Graphic Designer"],
      typeSpeed: 150, // Typing speed
      backSpeed: 150, // Deleting speed
      backDelay: 3000, // Time to wait before starting to delete the text
      startDelay: 500, // Initial delay before starting typing
      loop: true, // Loop through the strings
      showCursor: true, // Show the cursor
    };

    // Initialize Typed.js and target the element with the class "typed-text"
    const typed = new Typed(".typed-text", options);

    // Cleanup function to destroy Typed.js instance when component unmounts
    return () => {
      typed.destroy();
    };
  }, []);
 
  return (
    <section
      id="home"
      className="min-h-screen flex items-center pt-16 bg-gradient-to-b from-white to-gray-50"
    >
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="order-2 md:order-1">
            <p
              className={`text-primary font-semibold mb-4 transform transition-all duration-700 delay-300 ${
                isVisible ? "opacity-100" : "opacity-0 translate-y-10"
              }`}
            >
              Hello, I'm
            </p>
            <h1
              className={`text-4xl md:text-5xl lg:text-5xl font-bold mb-6 transform transition-all duration-700 delay-500 ${
                isVisible ? "opacity-100" : "opacity-0 translate-y-10"
              }`}
            >
              <span className="typed-text text-primary" />
            </h1>
            <p
              className={`text-lg text-muted-foreground mb-8 max-w-lg transform transition-all duration-700 delay-700 ${
                isVisible ? "opacity-100" : "opacity-0 translate-y-10"
              }`}
            >
              A passionate Full Stack Web Developer specializing in building exceptional digital experiences using modern technologies, with a 
              strong expertise in Django for crafting robust
              and scalable web applications.
            </p>
            <div
  className={`flex space-x-4 transform transition-all duration-700 delay-900 ${
    isVisible ? "opacity-100" : "opacity-0 translate-y-10"
  }`}
>
  <a
    href="#works"
    className="btn btn-primary btn-lg flex items-center gap-2 font-semibold text-sm whitespace-nowrap sm:text-base"
  >
    View My Work
    {/* <ArrowRight size={16} /> */}
  </a>
  <a
    href="#contact"
    className="btn btn-secondary btn-lg font-semibold text-sm whitespace-nowrap sm:text-base"
  >
    Contact Me
  </a>
</div>

          </div>
          <div className="order-1 md:order-2 flex justify-center">
            <div
              className={`w-64 h-64 md:w-80 md:h-80 bg-gradient-to-tr from-primary/20 to-primary/60 rounded-full overflow-hidden flex items-center justify-center transform transition-all duration-1000 ${
                isVisible ? "opacity-100 scale-100" : "opacity-0 scale-90"
              } animate-float`}
            >
              <img
                src={nipeshImage}
                alt="Profile"
                className="w-60 h-60 md:w-72 md:h-72 object-cover rounded-full border-4 border-white"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
