
import { useEffect, useState } from "react";
import { ExternalLink, Github } from "lucide-react";
import moodNet from '../images/moodNet.jpg'; 
import ecommerce from '../images/ecommerce.png'; 
import tourImg from '../images/tour.jpg'; 
import portfolioImg from '../images/portfolio.jpg'; 


const WorksSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [activeTab, setActiveTab] = useState("all");

  useEffect(() => {
    const handleScroll = () => {
      const element = document.getElementById("works");
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

  const projects = [
    {
      id: 1,
      title: "E-Commerce Platform",
      category: "web",
      image: ecommerce,
      description: "A full-featured e-commerce platform with product management, cart and checkout",
      tech: ["Html", "css", "Django", "mySql"],
      liveLink: "#",
      githubLink: "#",
    },
    {
      id: 2,
      title: "Vehicle Rental System",
      category: "web",
      image: 'https://images.pexels.com/photos/70912/pexels-photo-70912.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
      description: "A web app for renting, booking the vehicles online",
      tech: ["Html", "css", "Javascript","php","mySql"],
      liveLink: "#",
      githubLink: "https://github.com/MrNipeshGhimire/VehicleRentalSystem",
    },
    {
      id: 3,
      title: "Expense Tracker",
      category: "web",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=1470&auto=format&fit=crop",
      description: "A web app for tracking the daily expenses and incomes",
      tech: ["Html","Tailwind Css", "Django", "mySql"],
      liveLink: "#",
      githubLink: "https://github.com/MrNipeshGhimire/ExpenseTracker",
    },
    {
      id: 4,
      title: "MoodNet",
      category: "Web",
      image: moodNet,
      description: "A web app for individuals with mental health issues to track their daily mood, consult doctors, and interact with AI chatbots.",
      tech: ["React", "Tailwind css","Django", "MySql"],
      liveLink: "#",
      githubLink: "#",
    },
    {
      id: 5,
      title: "Travel Package Design",
      category: "design",
      image: tourImg,
      description: "Travel package design for Pokhara created using Adobe Illustrator and Photoshop.",
      tech: ["Adobe Illustrator", "Photoshop"],
      liveLink: "#",
      githubLink: "#",
    },
    {
      id: 6,
      title: "Portfolio Website",
      category: "web",
      image: portfolioImg,
      description: "Personal portfolio website with modern design",
      tech: ["React", "Tailwind CSS", "Django","mySql"],
      liveLink: "#",
      githubLink: "https://github.com/MrNipeshGhimire/Portfolio",
    },
  ];

  const filteredProjects = activeTab === "all" 
    ? projects 
    : projects.filter(project => project.category === activeTab);

  const categories = [
    { id: "all", name: "All" },
    { id: "web", name: "Web Apps" },
    { id: "mobile", name: "Mobile Apps" },
    { id: "design", name: "Design" },
  ];

  return (
    <section id="works" className="section-padding bg-white">
      <div className="container">
        <h2 className={`section-title transform transition-all duration-700 ${
          isVisible ? "animate-active" : "animate-fade-up"
        }`}>
          My Works
        </h2>
        <p className={`section-subtitle transform transition-all duration-700 delay-100 ${
          isVisible ? "animate-active" : "animate-fade-up"
        }`}>
          Check out some of my recent projects
        </p>

        <div className={`flex justify-center mb-12 transform transition-all duration-700 delay-200 ${
          isVisible ? "animate-active" : "animate-fade-up"
        }`}>
          <div className="flex space-x-2 p-1 bg-gray-100 rounded-lg">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setActiveTab(category.id)}
                className={`px-4 py-2 rounded-md font-medium transition-all ${
                  activeTab === category.id
                    ? "bg-primary text-white shadow-sm"
                    : "hover:bg-gray-200"
                }`}
              >
                {category.name}
              </button>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, index) => (
            <div
              key={project.id}
              className={`bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-all group transform transition-all duration-700 ${
                isVisible ? "animate-active" : "animate-fade-up"
              }`}
              style={{ transitionDelay: `${300 + index * 100}ms` }}
            >
              <div className="relative overflow-hidden h-48">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-primary/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center space-x-4">
                  <a
                    href={project.liveLink}
                    className="bg-white text-primary p-2 rounded-full hover:bg-gray-100 transition-colors"
                  >
                    <ExternalLink size={20} />
                  </a>
                  <a
                    href={project.githubLink}
                    className="bg-white text-primary p-2 rounded-full hover:bg-gray-100 transition-colors"
                  >
                    <Github size={20} />
                  </a>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2 text-foreground">
                  {project.title}
                </h3>
                <p className="text-muted-foreground mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((tech, i) => (
                    <span
                      key={i}
                      className="text-xs font-medium bg-secondary px-2 py-1 rounded"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WorksSection;
