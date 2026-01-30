import { Navbar } from "@/components/Navbar";
import { TileProjects } from "@/components/TileProjects";
import { Footer } from "@/components/Footer";

const Projects = () => (
  <div className="min-h-screen">
    <Navbar />
    <TileProjects />
    <Footer />
  </div>
);

export default Projects;
