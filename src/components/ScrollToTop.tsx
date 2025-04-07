
import { useEffect } from "react";

const ScrollToTop = () => {
  useEffect(() => {
    // When the component mounts, scroll to the top of the page
    window.scrollTo(0, 0);

    // Add scroll event listener
    const handleScroll = () => {
      const sections = document.querySelectorAll("section");
      sections.forEach((section) => {
        const sectionTop = section.getBoundingClientRect().top;
        const triggerPoint = window.innerHeight * 0.75;
        
        if (sectionTop < triggerPoint) {
          section.querySelectorAll(".animate-fade-up, .animate-fade-in").forEach((element) => {
            element.classList.add("animate-active");
          });
        }
      });
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // Check on initial load

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return null;
};

export default ScrollToTop;
