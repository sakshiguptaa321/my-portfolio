import Link from "next/link";

export default function Home() {
  const skills = [
    { name: "React", level: "Advanced", percentage: 85 },
    { name: "DSA", level: "Intermediate", percentage: 70 },
    { name: "UI/UX Design", level: "Advanced", percentage: 90 },
    { name: "JavaScript", level: "Advanced", percentage: 80 },
    { name: "HTML/CSS", level: "Advanced", percentage: 95 },
    { name: "Spring Boot", level: "Learning", percentage: 40 },
  ];

  return (
    <>
      {/* Hero Section */}
      <section className="min-h-screen flex items-center bg-white px-6 md:px-20 py-12">
        <div className="max-w-7xl mx-auto flex flex-col-reverse md:flex-row items-center gap-10">
          {/* Left Section: Text Content */}
          <div className="md:w-1/2">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
              Hi, I'm <span className="text-indigo-600">Sakshi Gupta</span> 👋
            </h1>
            <p className="text-xl text-gray-600 mb-4">
              Final-Year Engineering Student | Web Developer | Content Creator
            </p>
            <p className="text-gray-700 mb-6 leading-relaxed">
              I'm currently pursuing B.Tech in Information Science & Engineering
              at REVA University, Bangalore. I’m passionate about building
              intuitive web applications and love creating content that educates
              and inspires.
            </p>

            <div className="flex flex-wrap gap-4">
              <Link
                href="/projects"
                className="bg-indigo-600 text-white px-6 py-3 rounded-xl shadow hover:bg-indigo-700 transition"
              >
                View My Projects
              </Link>
              <a
                href="sakshi_resume.pdf"
                download
                className="border border-indigo-600 text-indigo-600 px-6 py-3 rounded-xl hover:bg-indigo-50 transition"
              >
                Download Resume
              </a>
            </div>
          </div>

          {/* Right Section: Image Illustration */}
          <div className="md:w-1/2">
            <img
              src="profile-pic.jpg"
              alt="Sakshi Gupta Illustration"
              className="w-full max-w-md mx-auto rounded-full shadow-lg object-cover md:object-contain"
            />
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="bg-gray-50 py-12 px-6 md:px-20">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-10">
            My Skills
          </h2>

          {skills.map((skill, idx) => (
            <div key={idx} className="mb-5">
              <div className="flex justify-between mb-1">
                <span className="text-sm font-medium text-gray-700">
                  {skill.name}
                </span>
                <span className="text-sm text-gray-500">{skill.level}</span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-3">
                <div
                  className="bg-indigo-600 h-3 rounded-full transition-all duration-700 ease-in-out"
                  style={{ width: `${skill.percentage}%` }}
                ></div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
