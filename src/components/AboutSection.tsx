
import { useEffect, useState } from "react";
import { CheckCircle } from "lucide-react";

const AboutSection = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const element = document.getElementById("about");
      if (element) {
        const position = element.getBoundingClientRect();
        if (position.top < window.innerHeight * 0.75) {
          setIsVisible(true);
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // Check on mount

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const keyPoints = [
    "5+ years of experience in web development",
    "Worked with 20+ satisfied clients globally",
    "Completed 50+ successful projects",
    "Passionate about clean, efficient code",
  ];

  return (
    <section id="about" className="section-padding bg-white">
      <div className="container">
        <h2 className={`section-title transform transition-all duration-700 ${
          isVisible ? "animate-active" : "animate-fade-up"
        }`}>
          About Me
        </h2>
        <p className={`section-subtitle transform transition-all duration-700 delay-100 ${
          isVisible ? "animate-active" : "animate-fade-up"
        }`}>
          Get to know more about me and my background
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className={`transform transition-all duration-700 delay-200 ${
            isVisible ? "animate-active" : "animate-fade-up"
          }`}>
            <div className="bg-secondary rounded-lg overflow-hidden shadow-md">
              <img
                src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=1472&auto=format&fit=crop"
                alt="Working on laptop"
                className="w-full h-96 object-cover"
              />
            </div>
          </div>

          <div>
            <h3 className={`text-2xl font-bold mb-4 transform transition-all duration-700 delay-300 ${
              isVisible ? "animate-active" : "animate-fade-up"
            }`}>
              Full Stack Developer & Graphic Designer
            </h3>
            <p className={`text-muted-foreground mb-6 transform transition-all duration-700 delay-400 ${
              isVisible ? "animate-active" : "animate-fade-up"
            }`}>
              I'm a passionate developer with expertise in creating responsive web applications 
              with modern technologies. I enjoy bringing ideas to life through code, focusing on 
              both functionality and aesthetics to deliver exceptional user experiences.
            </p>
            <p className={`text-muted-foreground mb-6 transform transition-all duration-700 delay-500 ${
              isVisible ? "animate-active" : "animate-fade-up"
            }`}>
              With a problem-solving mindset and attention to detail, I strive to write clean, 
              efficient code that meets business needs while providing intuitive interfaces for users.
            </p>

            <ul className="space-y-2">
              {keyPoints.map((point, index) => (
                <li 
                  key={index}
                  className={`flex items-center gap-2 transform transition-all duration-700 ${
                    isVisible ? "animate-active" : "animate-fade-up"
                  }`}
                  style={{ transitionDelay: `${600 + index * 100}ms` }}
                >
                  <CheckCircle className="text-primary" size={20} />
                  <span>{point}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
