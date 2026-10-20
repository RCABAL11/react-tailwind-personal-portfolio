import { ArrowUpRight, TableOfContents } from "lucide-react";
import { AnimatedBorderButton } from "@/components/AnimatedBorderButton";

const projects = [
  {
    title: "Integrated Academic Management System",
    description:
      "A full-stack web application built from scratch to automate an entire college's grading workflow. Features secure authentication and role-based access control to streamline manual processing for faculty and administrators.",
    image: "/projects/project4.png",
    tags: ["Laravel", "Blade", "Bootstrap", "MySQL"],
    link: "https://github.com/RCABAL11/iams.git",
    github: "https://github.com/RCABAL11/iams.git",
  },
  {
    title: "Personal Developer Portfolio",
    description:
      "A responsive, modern portfolio website designed and developed to showcase my technical projects and skills. Built with a component-based architecture, featuring smooth animations, a dark-mode UI, and a fully mobile-responsive layout.",
    image: "/projects/project4.png",
    tags: ["React", "Tailwind CSS", "Vercel"],
    link: "#project",
    github: "#project",
  },
  {
    title: "Car Dealership Website",
    description:
      "A dynamic vehicle inventory platform that allows users to browse available cars, filter by specifications, and view detailed listings. Built with a focus on clean database architecture and an intuitive user interface.",
    image: "/projects/project2.png",
    tags: ["PHP Native", "Bootstrap", "MySQL"],
    link: "#",
    github: "#",
  },
  {
    title: "Hotel Booking Reservation",
    description:
      "A web-based reservation system that streamlines the room booking process. Includes availability checking, secure reservation forms, and a dashboard for managing bookings without page reloads using AJAX.",
    image: "/projects/project3.png",
    tags: ["PHP Native", "AJAX", "Bootstrap", "MySQL"],
    link: "#",
    github: "#",
  },
];

export const Projects = () => {
  return (
    <section id="projects" className="py-32 relative overflow-hidden">
      {/* BG Glows */}
      <div className="absolute top-1/4 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 left-0 w-64 h-64 bg-highlight/5 rounded-full blur-3xl" />
      <div className="container mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div className="text-center mx-auto max-w-3xl mb-16">
          <span className="text-secondary-foreground text-sm font-medium tracking-wider uppercase animate-fade-in">
            Featured Work
          </span>
          <h2 className="text-4xl md:text-5xl font-bold mt-4 mb-6 animate-fade-in animation-delay-100 text-secondary-foreground">
            Project that
            <span className="font-serif italic font-normal text-white">
              {" "}
              make an impact.
            </span>
          </h2>
          <p className="text-muted-foreground animate-fade-in animation-delay-200">
            A selection of my recent works, from complex web application to
            innovative tools that solve real-world problems.
          </p>
        </div>
        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, idx) => (
            <div
              key={idx}
              className="group glass rounded-2xl overflow-hidden animate-fade-in md:row-span-1"
              style={{ animationDelay: `${(idx + 1) * 100}ms` }}
            >
              <div className="relative overflow-hidden aspect-video">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-linear-to-t from-card via-card/50 to-transparent opacity-60" />

                {/* Overlay Links */}
                <div className="absolute inset-0 flex items-center justify-center gap-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <a
                    href={project.link}
                    className="p-3 rounded-full glass hover:bg-primary hover:text-primary-foreground transition-all"
                  >
                    <ArrowUpRight className="w-5 h-5" />
                  </a>
                  {/* <a href="" className="p-3 rounded-full glass hover:bg-primary hover:text-primary-foreground transition-all">
                    <Github className="w-5 h-5" />
                  </a> */}
                </div>
              </div>

              {/* Content */}
              <div className="p-6 space-y-4">
                <div className="flex items-start justify-between">
                  <h3 className="text-xl font-semibold group-hover:text-primary transition-colors">{project.title}</h3>
                  <ArrowUpRight className="w-5 h-5 text-muted-foreground group-hover:text-primary group-hover:translate-x-1 group-hover:-translate-y-1 transition-all"/>
                </div>
                <p className="text-muted-foreground text-sm">{project.description}</p>
                <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag, tagIdx) => (
                        <span key={tagIdx} className="px-4 py-1.5 rounded-full bg-surface text-xs font-medium border border-border/50 text-muted-foreground hover:border-primary/50 hover:text-primary transition-all duration-300">{tag}</span>
                    ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* View All CTAs */}
        <div className="text-center mt-12 animate-fade-in animation-delay-500">
            <AnimatedBorderButton>
                View All Projects
                <ArrowUpRight className="w-5 h-5"/>
            </AnimatedBorderButton>
        </div>
      </div>
    </section>
  );
};
