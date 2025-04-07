
import { useEffect, useState } from "react";

const SkillsSection = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const element = document.getElementById("skills");
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

  const skills = [
    { name: "HTML5 & CSS3", percentage: 95 },
    { name: "JavaScript", percentage: 80 },
    { name: "Python", percentage: 90 },
    { name: "Django", percentage: 80 },
    { name: "React.js", percentage: 65 },
    { name: "Adobe Illustrator", percentage: 75 },
    { name: "Photoshop", percentage: 85 },
    { name: "Database Management", percentage: 75 },
  ];

  const technicalSkills = [
    { name: "HTML5", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" },
    { name: "CSS3", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg" },
    { name: "JavaScript", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" },
    {name: "Django",icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/django/django-plain.svg"  },
    {
      name: "PHP",
      icon: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSunGUSJUd4U2Tccp6KRamz46QsV18h5Qr9FfA9ZIpNGHhjPSac93yzjCAgsHWRjWqh5RA&usqp=CAU"
    },
    {name: "React", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" },
    { name: "TypeScript", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg" },
    { name: "Python", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" },
    { name: "Git", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg" },
    { name: "MySQL", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg"},
    { name: "Figma", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg" },
    {
      name: "Adobe Photoshop",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/photoshop/photoshop-plain.svg"
    },
    {
      name: "Adobe Illustrator",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/illustrator/illustrator-plain.svg"
    },
     ];

  return (
    <section id="skills" className="section-padding bg-gray-50">
      <div className="container">
        <h2 className={`section-title transform transition-all duration-700 ${
          isVisible ? "animate-active" : "animate-fade-up"
        }`}>
          My Skills
        </h2>
        <p className={`section-subtitle transform transition-all duration-700 delay-100 ${
          isVisible ? "animate-active" : "animate-fade-up"
        }`}>
          Technologies and skills I've acquired throughout my journey
        </p>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div className="space-y-6">
            <h3 className={`text-xl font-semibold mb-6 transform transition-all duration-700 delay-200 ${
              isVisible ? "animate-active" : "animate-fade-up"
            }`}>
              Technical Expertise
            </h3>
            
            {skills.map((skill, index) => (
              <div 
                key={index}
                className={`transform transition-all duration-700 ${
                  isVisible ? "animate-active" : "animate-fade-up"
                }`}
                style={{ transitionDelay: `${300 + index * 100}ms` }}
              >
                <div className="flex justify-between mb-2">
                  <span className="font-medium">{skill.name}</span>
                  <span className="text-muted-foreground">{skill.percentage}%</span>
                </div>
                <div className="h-2 bg-gray-200 rounded-full overflow-hidden">
                  <div 
                    className="h-full bg-primary rounded-full transition-all duration-1000 ease-out"
                    style={{ 
                      width: isVisible ? `${skill.percentage}%` : "0%",
                      transitionDelay: `${400 + index * 100}ms`
                    }}
                  ></div>
                </div>
              </div>
            ))}
          </div>

          <div>
            <h3 className={`text-xl font-semibold mb-6 transform transition-all duration-700 delay-200 ${
              isVisible ? "animate-active" : "animate-fade-up"
            }`}>
              Technology Stack
            </h3>
            
            <div className="grid grid-cols-3 md:grid-cols-4 gap-6">
              {technicalSkills.map((tech, index) => (
                <div 
                  key={index}
                  className={`flex flex-col items-center transform transition-all duration-700 ${
                    isVisible ? "animate-active" : "animate-fade-up"
                  }`}
                  style={{ transitionDelay: `${300 + index * 50}ms` }}
                >
                  <div className="bg-white p-4 rounded-full shadow-md mb-3 w-16 h-16 flex items-center justify-center">
                    <img src={tech.icon} alt={tech.name} className="w-10 h-10" />
                  </div>
                  <span className="text-sm text-center">{tech.name}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
