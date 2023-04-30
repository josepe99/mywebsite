import ResumeItem from './components/ResumeItem';
import { MY_NAME } from '@/app/constants';

const Resume = () => {
  return (
    <section id="resume" className="resume">
      <div className="container">

        <div className="section-title">
          <h2>Resume</h2>
          <p>I am going to talk you about somes of my experiences and trajectory in the technology world, I have more projects but for personal reasons I can talk in public about that</p>
        </div>

        <div className="row">
          <div className="col-lg-6" data-aos="fade-up">
            <ResumeItem 
              title="Education"
              subtitle="Computer Engineering"
              time="2019 - actually"
              place="National University of Asuncion, Paraguay"
              resume="I am at 3th years of the career, I studied basic programing concepts like queues, stacks trees, B+Tree, AVL Trees using C and Java, I studied software development methodologies and improving agile"
              items={["I learned programing paradigms",
                      "I learned script asymptotic cost",
                      "Databases concepts"]}
            />

            <ResumeItem 
              title="Job Experience"
              subtitle="Full stack developer"
              time="2022"
              place="Eko Factory S.R.L, Paraguay"
              resume="I worked 4 months as full stack developer in 2 projects"
              items={["Api rest development with laravel 8",
                      "Api rest consuming with axios in javascript",
                      "Front-end development with Vuejs 2",
                      "Endpoints and templates development with django",
                      "Teltonika gps decode with nodejs",
                      "SQL functions with PGSQL language"]}
            />

          </div>
          <div className="col-lg-6" data-aos="fade-up" data-aos-delay="100">
            <ResumeItem 
              title="Job Experience"
              subtitle="Full stack developer"
              time="Actually"
              place="Databiz S.A., Paraguay"
              resume="Actually I have 7 months in this enterprise developing endpoints, schedules, fron-end fixes, back-end fixes and features. I am working in various projects: National Police dataentry, Facebook Bussiness profile scrapper"
              items={["Api rest with django restapi and express",
                      "Schedules with airflow",
                      "Front-end with vuejs",
                      "Express and sequelize in back-end",
                      "Django api rest",
                      "JWT"]}
            />

            <ResumeItem 
              title="Individual Jobs"
              subtitle="Web and mobile developer"
              time="Actually"
              place="In my house"
              resume="For train my skills I am helping to a friend with his e-commerce development, for this project I am using Next-js, flutter and supabase."
              items={["Api rest with next-js",
                      "Authentication with next-auth",
                      "Algolia for search in the web",
                      "JWT strategy",
                      "Mobile development with flutter"]}
            />
          </div>
        </div>

      </div>
    </section>
  )
}

export default Resume;