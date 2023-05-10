import Skill from "./Components/Skill";

const experiences = [
  {
    icon: "bi bi-browser-chrome",
    title: "Vue.js2",
    description: "With 1 year of experience using Vue.js v2, I have developed over 50 components, managed states with Vuex, and made API requests using Axios. Proficient in working with Pug language and HTML syntax in component development."
  },{
    icon: "bi bi-phone",
    title: "Flutter",
    description: "With 1 year of experience using Flutter, I have expertise in flutter_bloc for state management, retrieving data from Firebase, and implementing clean architecture in mobile app development."
  },
  {
    icon: "bi bi-file-earmark-text",
    title: "Next.js",
    description: "Skilled in using appDir and NextAuth for authentication, with experience in both API REST development and front-end development. Proficient in executing database queries using Prisma for seamless data management."
  },{
    icon: "bi bi-filetype-json",
    title: "Django",
    description: "Experienced in using Django's Model-View-Template pattern, Simple JWT for authentication, and Django REST framework for building API-driven applications, effectively utilizing Django's robust capabilities for web development."
  },
  {
    icon: "bi bi-database",
    title: "Databases",
    description: "Experienced in working with both relational and non-relational databases, including PostgreSQL, SQL Server, Supabase, Firebase, and MongoDB. Proficient in creating SQL scripts for efficient database management and operations."
  },{
    icon: "bi bi-terminal",
    title: "Scripts",
    description: "Proficient in creating scripts using Batch and Bash for automating repetitive tasks, streamlining processes, and improving overall efficiency in various workflows."
  },{
    icon: "bi bi-box",
    title: "Docker",
    description: "Experienced in using Docker for containerization, creating custom Docker images, and managing containers effectively, streamlining application deployment, and ensuring consistency across development environments."
  },{
    icon: "bi bi-git",
    title: "Git",
    description: "With 2 years of experience using Git for version control, I have effectively managed code changes and collaborated on projects, utilizing remote repositories such as GitHub and GitLab to ensure seamless teamwork and efficient development processes."
  },{
    icon: "bi bi-keyboard",
    title: "Programing languages",
    description: "Experienced in programming languages such as Java, C, and C++, with proficiency in various programming paradigms including structural, object-oriented, and functional programming. This diverse skill set allows for adaptability and versatility across a wide range of projects and technologies."
  }
]


const Skills = () => {
  return (
    <section id="skills" className="services">
      <div className="container">

        <div className="section-title">
          <h2>Skills</h2>
        </div>

        <div className="row">
          {experiences.map(skill => (
            <Skill 
            key={skill.title}
            title={skill.title}
              icon={skill.icon}
              description={skill.description}
            />
          ))}
        </div>

      </div>
    </section>
  )
}

export default Skills;