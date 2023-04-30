import Skill from "./Components/Skill";

const experiences = [
  {
    icon: "bi bi-briefcase",
    title: "Vue.js2",
    description: "Description"
  }
]


const Skills = () => {
  return (
    <section id="skills" className="services">
      <div className="container">

        <div className="section-title">
          <h2>Skills</h2>
          <p>Magnam dolores commodi suscipit. Necessitatibus eius consequatur ex aliquid fuga eum quidem. Sit sint consectetur velit. Quisquam quos quisquam cupiditate. Et nemo qui impedit suscipit alias ea. Quia fugiat sit in iste officiis commodi quidem hic quas.</p>
        </div>

        <div className="row">
          {experiences.map(skill => (
            <Skill 
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