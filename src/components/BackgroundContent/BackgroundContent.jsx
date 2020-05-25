import React from "react";
import { format, differenceInMonths } from "date-fns";
import styles from "./BackgroundContent.module.scss";
import { ReactComponent as Clock } from "../../images/clock.svg";

const content = [
  {
    position: "Front-End Tech-Lead",
    company: {
      name: "Aera Technology",
      url: "https://aeratechnology.com",
    },
    startDate: new Date(2019, 4, 1),
    endDate: null,
    content: (
      <div>
        <p>
          At Aera, I have an active role in all features and design decisions, definining and developing front-end
          architectures applied in a large distributed development team.
        </p>
        <p>
          Tech stack includes: micro-frontends with ReactJs & Redux, sass modules, webpack, babel integrated within the
          Aera suite of apps
        </p>
      </div>
    ),
  },
  {
    position: "Front-End Engineer",
    company: {
      name: "Deloitte Digital",
      url: "https://www.deloittedigital.com",
    },
    startDate: new Date(2019, 0, 1),
    endDate: new Date(2020, 4, 1),
    content: (
      <div>
        <p>
          At Deloitte Digital, I worked on a digital transformation project for Prudential, one of UK's largest
          financial institutions.
        </p>
        <ul className={styles.deloitteList}>
          <li>
            Built a digital suite of secure web applications following a micro-frontend architecture using{" "}
            <span className={styles.highlightedSpan}>ReactJS, Redux, Typescript, Webpack, CSS Modules, JWT.</span>
          </li>
          <li>
            Acted as <span className={styles.highlightedSpan}>Front-End Lead</span> across four feature teams in
            Bucharest by taking architectural decisions, code reviewing, helping other devs write clean, scalable and
            testable code.
          </li>
          <li>
            Hold <span className={styles.highlightedSpan}>daily stand-up meetings across the front-end devs</span>,
            where each developer was sharing what they worked on / whether they had any blockers. These meetings were
            also used to debate various architectures / implementations.
          </li>
          <li>
            Was actively involved in <span className={styles.highlightedSpan}>Deloitte's recruitment process</span> by
            working closely with the managers across various projects and aiming to hire passionate and knowledgeable
            developers
          </li>
        </ul>
      </div>
    ),
  },
  {
    position: "Full-Stack Developer",
    company: {
      name: "Questia Group",
      url: "http://questiagroup.com",
    },
    startDate: new Date(2015, 9, 1),
    endDate: new Date(2017, 11, 1),
    content: (
      <div>
        <p>
          I began my web development career at Questia Group, a young and fast growing company focusing on real time
          surveys and analytics. Here, I've developed responsive, secure websites using AngularJS and BackboneJS on the
          front-end, and PHP Symfony2 and Java Hibernate on the back-end.
        </p>
        <p>
          I also built a hybrid iOS/Android app using Ionic and Cordova that allowed users to easily access the
          platforms from their phones, as the main website was not optimized for mobile.
        </p>
      </div>
    ),
  },
];

const getYearsAndMonths = (months) => {
  const years = Math.round(months / 12);
  const remainingMonths = months % 12;
  let stringTemplate = "";

  if (years === 1) stringTemplate = `${years} year `;
  if (years > 1) stringTemplate = `${years} years `;

  if (stringTemplate && remainingMonths) stringTemplate += "& ";

  if (remainingMonths === 1) stringTemplate += `${remainingMonths} month`;
  if (remainingMonths > 1) stringTemplate += `${remainingMonths} months`;

  return stringTemplate;
};

const BackgroundContent = () => (
  <div>
    <p className={styles.workExperienceHeader}>WORK EXPERIENCE</p>
    {content.map((job) => (
      <div className={styles.job} key={job.company.name}>
        <div className={styles.position}>
          <p>
            {job.position},{" "}
            <a href={job.company.url} rel="noopener noreferrer" target="_blank">
              {job.company.name}
            </a>
          </p>
        </div>

        <div className={styles.date}>
          <span>
            {format(job.startDate, "MMM, YYY")} - {job.endDate ? format(job.endDate, "MMM, YYY") : "Present"}
          </span>

          <span className={styles.time}>
            <Clock />
            <span className={styles.period}>
              {getYearsAndMonths(differenceInMonths(job.endDate || Date.now(), job.startDate))}
            </span>
          </span>
        </div>

        <div className={styles.description}>{job.content}</div>
      </div>
    ))}
  </div>
);

export default BackgroundContent;
