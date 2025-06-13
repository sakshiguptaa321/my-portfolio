import Link from "next/link";

export default function Home() {
  return (
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
  );
}
