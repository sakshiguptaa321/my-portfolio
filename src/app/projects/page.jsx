const projects = [
  {
    title: "Smart Building & Flat Maintenance Portal",
    description:
      "A web platform to log, manage, and resolve flat maintenance issues with features like complaint tracking, admin dashboard, and payment logs.",
    tech: "HTML, CSS, JavaScript, Spring Boot, MySQL",
    role: "Full Stack Developer",
    github: "https://github.com/sakshiguptaa321", // Update to actual repo if available
    demo: "#", // Add live demo URL if hosted
  },
  {
    title: "Interview Preparation Tracker",
    description:
      "A productivity tool to track coding goals, DSA progress, and motivational reminders built as part of React learning.",
    tech: "React, Next.js, Tailwind CSS, Firebase",
    role: "Frontend Developer (Learning Project)",
    github: "https://github.com/sakshiguptaa321", // Update to actual repo if available
    demo: "#", // Add live demo URL if hosted
  },
  {
    title: "AI Career Path Recommender",
    description:
      "Recommends personalized career paths using ML models based on user preferences like interests and skill level.",
    tech: "Python, Flask, Scikit-learn",
    role: "ML Developer & Backend",
    github: "https://github.com/sakshiguptaa321", // Update to actual repo if available
    demo: "#", // Add live demo URL if hosted
  },
];

export default function ProjectPage() {
  return (
    <section id="projects" className="bg-gray-50 py-16 px-6 md:px-20">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">Projects</h2>
          <p className="text-gray-600 text-lg">
            A few projects I've worked on, combining development, design, and
            real-world problem solving.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl shadow-md p-6 hover:shadow-xl transition"
            >
              <h3 className="text-2xl font-semibold text-indigo-600 mb-2">
                {project.title}
              </h3>
              <p className="text-gray-700 mb-4">{project.description}</p>
              <ul className="text-sm text-gray-600 mb-4">
                <li>🔧 Tech Stack: {project.tech}</li>
                <li>🎯 Role: {project.role}</li>
              </ul>
              <div className="flex gap-4">
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-indigo-600 font-medium hover:underline"
                >
                  GitHub
                </a>
                <a
                  href={project.demo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-indigo-600 font-medium hover:underline"
                >
                  Live Demo
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
