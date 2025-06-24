export default function AboutSection() {
  const skills = [
    { name: "React", level: "Advanced", percentage: 85 },
    { name: "DSA", level: "Intermediate", percentage: 70 },
    { name: "UI/UX Design", level: "Advanced", percentage: 90 },
    { name: "JavaScript", level: "Advanced", percentage: 80 },
    { name: "HTML/CSS", level: "Advanced", percentage: 95 },
    { name: "Spring Boot", level: "Learning", percentage: 40 },
  ];

  return (
    <section id="about" className="bg-white py-16 px-6 md:px-20">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-4xl font-bold text-gray-800 mb-6 text-center">
          About Me
        </h2>

        <p className="text-lg text-gray-700 mb-4 leading-relaxed">
          Hi! I’m{" "}
          <span className="font-semibold text-indigo-600">Sakshi Gupta</span>, a
          final-year B.Tech student majoring in Information Science and
          Engineering at <strong>REVA University</strong>, Bangalore. I’m
          passionate about building clean, responsive web applications and
          combining technology with creativity to solve real-world problems.
        </p>

        <p className="text-lg text-gray-700 mb-4 leading-relaxed">
          My strengths lie in full-stack development, UI/UX design, and
          Javascript programming. I’m currently learning
          <strong> React</strong> and practicing <strong>DSA</strong> to crack
          top tech interviews. Beyond tech, I have a creative side — I’ve worked
          as a freelance graphic designer on Fiverr and collaborated with brands
          as a content creator, leading teams and managing digital campaigns.
        </p>

        <p className="text-lg text-gray-700 mb-4 leading-relaxed">
          I’m actively involved in hackathons, tech events, and coding contests.
          I also love exploring AI prompt engineering, staying up-to-date with
          new tools, and engaging with developer communities.
        </p>

        <p className="text-lg text-gray-700 leading-relaxed">
          Whether it’s designing intuitive user interfaces or automating backend
          logic, I believe in building projects that are both functional and
          delightful to use. I'm always eager to collaborate, learn, and take on
          exciting challenges!
        </p>

        {/* Skills Section */}
        <div className="mt-12">
          <h3 className="text-2xl font-bold text-gray-800 mb-6 text-center">
            My Skills
          </h3>

          {skills.map((skill, idx) => (
            <div key={idx} className="mb-4">
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
      </div>
    </section>
  );
}
