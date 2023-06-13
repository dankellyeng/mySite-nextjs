import work from './work.module.scss';
import { fetchEntries } from '../../utils/api/contentful';
import Image from 'next/image';

async function getData() {
  const res = await fetch(
    `https://cdn.contentful.com/spaces/${process.env.CONTENTFUL_SPACE_ID}/entries?access_token=${process.env.CONTENTFUL_ACCESS_KEY}`
  );
  return res.json()
}

export default async function Work() {
  const data = await getData();
  let projects = data.items;

  return (
  <div className={work.page}>
    <div className={work.work}>
      <div className={work.header} >W O R K</div>
        <div className={work.projectList}>
        <div className={work.subHeader}>EDUCATION</div>
        {projects.map((project, index) => {
        return(
        project.fields.type === "education" && 
           <div key={index}>
            <WorkCard
              key={project.fields.title}
              title={project.fields.title}
              desc={project.fields.description}
              year={project.fields.year}
              company={project.fields.company}
              companyLink={project.fields.companyLink}
              image={project.fields.image}
            />
            <hr className={work.solid} />
          </div>
  )}
      )}
        </div>   
        <div className={work.projectList}>
        <div className={work.subHeader} >EMPLOYMENT</div>
        {projects?.map((project, index) => {
        return(
        project.fields.type === "employment" && 
           <div key={index}>
            <WorkCard
              key={project.fields.title}
              title={project.fields.title}
              desc={project.fields.description}
              year={project.fields.year}
              company={project.fields.company}
              companyLink={project.fields.companyLink}
              image={project.fields.image}
            />
            <hr className={work.solid} />
          </div>
  )}
      )}
        </div>   
        <div className={work.projectList}>
        <div className={work.subHeader} >PROJECTS</div>
        {projects?.map((project, index) => {
        return(
        project.fields.type === "project" && 
           <div key={index}>
            <WorkCard
              key={project.fields.title}
              title={project.fields.title}
              desc={project.fields.description}
              year={project.fields.year}
              company={project.fields.company}
              companyLink={project.fields.companyLink}
              image={project.fields.image}
              type={project.fields.type}
            />
            <hr className={work.solid} />
          </div>
  )}
      )}
        </div>   
    </div>
 </div>
  )};


  const WorkCard = ({
    title,
    desc,
    year,
    company = '',
    companyLink,
    image,
    type = '',
  }) => {
    return (
      <div className={work.workCard}>
        <div className={work.workCardText}>
        <a
          href={companyLink}
          target="_blank"
          className={work.cardHeader}
        >
          {title.toUpperCase()}
        </a>
        <p className={work.year}>
          {year}
        </p>
        <p>
          {desc}
        </p>
        </div>
          <div className={work.image}>
            <Image width={type === "project" ? 400 : 200} height={200} src={image} alt={title} />
          </div>
      </div>
    );
  };