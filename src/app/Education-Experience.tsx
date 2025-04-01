/* eslint-disable react/no-children-prop */
import React from "react";
import { Timeline } from "../components/Timeline";
import Link from "next/link";

const EducationExperience = () => {

  return (
    <div className="w-full">
      <Timeline data={data} />
    </div>
  );
};

export default EducationExperience;

const ListItem: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <li className="flex items-start">
      <svg className="w-5 h-5 text-purple-500 mr-2 mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
      </svg>
      <span className="text-gray-600">{children}</span>
    </li>
  )
}

const data = [
  {
    title: "From Oct 2024",
    content: (
      <div>
        <p className="text-neutral-800 text-4xl md:text-2xl font-semibold mb-8">
          Senior Manager at <Link className="text-blue-500" href="https://www.kotaksecurities.com/" target="_blank">Kotak Securities</Link>
        </p>
        <ul className="list-disc leading-5 pl-0 sm:leading-7 sm:pl-5 space-y-1">
          <ListItem>Working on <a href="https://www.kotaksecurities.com/" className="text-blue-500" target="_blank">kotaksecurities.com</a> Landing page developed with NextJS and Strapi with SSG (Static Site Generation)</ListItem>
          <ListItem children="Developed modular, reusable components using NextJS and a custom Design System, implementing them within Strapi CMS to enable non-technical stakeholders to configure component properties without developer intervention." />
          <ListItem children="Architected and implemented a GraphQL-based data retrieval system that seamlessly connects Strapi CMS with a NextJS frontend, ensuring optimal performance and maintainability." />
        </ul>
      </div>
    ),
  },
  {
    title: "Jan 2023 - Sept 2024",
    content: (
      <div>
        <p className="text-neutral-800 text-4xl md:text-2xl font-semibold mb-8">
          Senior Software Engineer at <Link className="text-blue-500" href="https://www.demandhelm.com" target="_blank">DemandHelm</Link>
        </p>
        <ul className="list-disc leading-5 pl-0 sm:leading-7 sm:pl-5 space-y-1">
          <ListItem children="Revamped the Sign up and Login process of our React app using AWS Cognito, introducing a mandatory TOTP-based Multi-Factor Authentication(MFA) process for enhanced security." />
          <ListItem children="Implemented Code Splitting and Lazy Loading with React Suspense, significantly reducing initial load time." />
          {/* <ListItem children="Created a private NPM library using GitHub packages for our shared components enabling consistent usage across multiple repositories. Added Storybook, Chromatic and Vitest for TDD." /> */}
          {/* <ListItem children="Developed a secure, internal company use, conversational AI Chatbot, inspired by ChatGPT, utilizing GPT-4 APIs, with Google authentication for access control deploying it on AWS Amplify." /> */}
          <ListItem children="Created Table component using TanStack Table which can be resized, searchable, sorted & paginated. Added Virtualization to enhance performance by rendering only visible rows & avoiding over-population of DOM." />
          <ListItem children="Utilized Lighthouse & Profiler to optimize performance bottlenecks, improving the overall efficiency." />
          <ListItem children="Migrated our landing page from React JS to Next JS, improving performance, Web Vitals and SEO optimization." />
        </ul>
      </div>
    ),
  },
  {
    title: "Mar 2021 - Dec 2022",
    content: (
      <div>
        <p className="text-neutral-800 text-4xl md:text-2xl font-semibold mb-8">
          Software Engineer at <Link className="text-blue-500" href="https://www.demandhelm.com" target="_blank">DemandHelm</Link>
        </p>
        <ul className="list-disc leading-5 pl-0 sm:leading-7 sm:pl-5 space-y-1">
          <ListItem children="Utilized Styled Components, TypeScript and React hooks to develop reusable functional components, translating Figma designs into web pages." />
          <ListItem children="Crafted stunning data visualizations by employing various chart types using Chart JS & ReCharts." />
          <ListItem children="Led the implementation of Flagsmith (Feature Flags), Google Analytics and Microsoft Clarity for analytics." />
          {/* <ListItem children="Implemented an Error Boundary to manage edge cases, presenting distinct error pages according to errors." /> */}
          {/* <ListItem children="Contributed to upgrading from Webpack to Vite, React v14 to v18, TSLint to ESLint, Moment to Date-fns, etc." /> */}
        </ul>
      </div>
    ),
  },
  {
    title: "Mar 2020 - Feb 2021",
    content: (
      <div>
        <p className="text-neutral-800 text-4xl md:text-2xl font-semibold mb-8">
          Post Graduation Diploma from <span className="text-blue-500">CDAC</span>
        </p>
        <ul className="list-disc leading-5 pl-0 sm:leading-7 sm:pl-5 space-y-1">
          <ListItem children="Specialization: Advanced Computing" />
          <ListItem children="Official percentage: 83.9%" />
          <ListItem children="Vidyanidhi Infotech (SM VITA), Centre for Development of Advanced Computing (CDAC)" />
        </ul>
      </div>
    ),
  },
  {
    title: "Oct 2018 - Feb 2020",
    content: (
      <div>
        <p className="text-neutral-800 text-4xl md:text-2xl font-semibold mb-8">
          Systems Engineer at <Link href="https://www.infosys.com/" target="_blank" className="text-blue-500">Infosys</Link>
        </p>
        <ul className="list-disc leading-5 pl-0 sm:leading-7 sm:pl-5 space-y-1">
          <ListItem children="Architected an automation script using Python & Sikuli to perform front end automation of daily DBA activities related to user management." />
          <ListItem children="Attained team’s target to reduce manual work of ticket solving by 120-man hours per month by automating the processes following agile methodology." />
          <ListItem children="Enhanced team’s resolution SLA from 98.25% to 98.85% by solving the tickets through the automated scripts over a period of 8 months." />
        </ul>
      </div>
    ),
  },

  {
    title: "June 2018 - Oct 2018",
    content: (
      <div>
        <p className="text-neutral-800 text-4xl md:text-2xl font-semibold mb-8">
          Systems Engineer Trainee at <Link href="https://www.infosys.com/" target="_blank" className="text-blue-500">Infosys</Link>
        </p>
        <ul className="list-disc leading-5 pl-0 sm:leading-7 sm:pl-5 space-y-1">
          <ListItem children="Developed a project to perform Procurement to Pay (P2P) Automation (Requisition, Invoice, Purchase Order, Supply) using Oracle E-Business Suite." />
          <ListItem children="It included migrating the data from external files to Oracle EBS using SQL Loader, creating Reports on them using Oracle Reports and Oracle Workflow Administrator" />
        </ul>
      </div>
    ),
  },
  {
    title: "June 2014 - Mar 2014",
    content: (
      <div>
        <p className="text-neutral-800 text-4xl md:text-2xl font-semibold mb-8">
          Bachelors of Engineering from <span className="text-blue-500">Mumbai University</span>
        </p>
        <ul className="list-disc leading-5 pl-0 sm:leading-7 sm:pl-5 space-y-1">
          <ListItem children="Specialization: Computer Science" />
          <ListItem children="CGPA: 7.91 / 10" />
          <ListItem children="Thakur College of Engineering and Technology (TCET), Mumbai University" />
        </ul>
      </div>
    ),
  },
];