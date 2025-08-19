import ProjectsText from "./ProjectsText";
import SingleProject from "./SingleProject";
import { motion } from "framer-motion";
import { fadeIn } from "../../framerMotion/variants";

const projects = [
  {
    name: "Appoinment System",
    year: "web app",
    align: "right",
    image: "/public/images/website-img-1.jpg",
    link: "https://appointment-react-app-72baa.web.app",
  },
  {
    name: "Movie App",
    year: "web app",
    align: "left",
    image: "/public/images/website-img-2.webp",
    link: "https://movie-app-a981b.web.app",
  },
  {
    name: "Donation campaign",
    year: "web app",
    align: "right",
    image: "/public/images/website-img-3.jpg",
    link: "https://donation-campaign-6xdruetp8-amina-elahi-sarders-projects.vercel.app/",
  },
  {
    name: "Coffee Shop",
    year: "web app",
    align: "left",
    image: "/public/images/website-img-4.jpg",
    link: "https://coffee-shop-2v8lppypb-amina-elahi-sarders-projects.vercel.app/",
  },
];

const ProjectsMain = () => {
  return (
    <div id="projects" className="max-w-[1200px] mx-auto px-4">
      <motion.div
        variants={fadeIn("top", 0)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.7 }}
      >
        <ProjectsText />
      </motion.div>
      <div className="flex flex-col gap-20 max-w-[900px] mx-auto mt-12">
        {projects.map((project, index) => {
          return (
            <SingleProject
              key={index}
              name={project.name}
              year={project.year}
              align={project.align}
              image={project.image}
              link={project.link}
            />
          );
        })}
      </div>
    </div>
  );
};

export default ProjectsMain;
