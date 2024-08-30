import React from "react";
import { Timeline } from "../components/Timeline";
import Link from "next/link";

const EducationExperience = () => {
  const data = [
    {
      title: "Jan 2023",
      content: (
        <div>
          <p className="text-neutral-800 text-4xl md:text-2xl font-semibold mb-8">
            Senior Software Engineer at <Link className="text-blue-500" href="https://www.demandhelm.com" target="_blank">DemandHelm</Link>
          </p>
          <ul className="list-disc leading-7 pl-5 space-y-1">
            <ListItem point="Revamped the Sign up and Login process of our React app using AWS Cognito & Identity JS, introducing a mandatory TOTP-based Multi-Factor Authentication (MFA) process for enhanced security" />
            <ListItem point="Implemented Code Splitting and Lazy Loading with React Suspense, significantly reducing initial load time." />
            <ListItem point="Created a private NPM library using GitHub packages for our shared components & utilities, enabling consistent usage across multiple repositories. Added Storybook, Chromatic and Vitest for TDD." />
            <ListItem point="Developed a secure, internal company use, conversational AI Chatbot, inspired by ChatGPT, utilizing GPT-4 APIs, with Google authentication for access control on React JS. Deployed it using AWS Amplify." />
            <ListItem point="Created Table component using TanStack Table which can be resized, searchable, sorted & paginated. Added Virtualization to enhance performance by rendering only visible rows & avoiding over-population of DOM." />
            <ListItem point="Utilized Lighthouse & Profiler to optimize performance bottlenecks, improving the overall efficiency. Migrated our landing page from React JS to Next JS, improving performance, Web Vitals and SEO optimization." />
            <ListItem point="Crafted pages for initiating new Amazon campaigns. Implemented custom hooks to generate the body to be sent to Amazon. Employed React Hook Form in conjunction with Zod for form validations and error handling." />
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
          <ul className="list-disc leading-7 pl-5 space-y-1">
            <ListItem point="Utilized Styled Components, TypeScript and React hooks to develop reusable functional components, translating Figma designs into web pages. Managed global state & API calls with Redux Toolkit(RTK) Query." />
            <ListItem point="Crafted stunning data visualizations by employing various chart types using Chart JS & ReCharts." />
            <ListItem point="Led the implementation of Flagsmith (Feature Flags), Google Analytics and Microsoft Clarity for analytics." />
            <ListItem point="Implemented an Error Boundary to manage edge cases, presenting distinct error pages according to errors." />
            <ListItem point="Contributed to upgrading from Webpack to Vite, React v14 to v18, TSLint to ESLint, Moment to Date-fns, etc." />
            <ListItem point="Developed mobile App using React Native (POC) with login feature. Integrated Expo Push Notification service to trigger notifications to registered users on the app whenever data was received in AWS S3." />
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
          <ul className="list-disc leading-7 pl-5 space-y-1">
            <ListItem point="Specialization: Advanced Computing" />
            <ListItem point="Official percentage: 83.9%" />
            <ListItem point="Vidyanidhi Infotech (SM VITA), Centre for Development of Advanced Computing (CDAC)" />
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
          <ul className="list-disc leading-7 pl-5 space-y-1">
            <ListItem point="Developed and architected an automation script using Python on an automation tool of Infosys, with Sikuli to perform front end automation of daily DBA activities related to user management." />
            <ListItem point="Attained team’s target to reduce manual work of ticket solving by 120-man hours per month by automating the process of solving certain set of tickets and following agile methodology." />
            <ListItem point="Enhanced team’s resolution SLA from 98.25% to 98.85% by solving the tickets through the automated scripts over a period of 8 months." />
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
          <ul className="list-disc leading-7 pl-5 space-y-1">
            <ListItem point="Developed a project to perform Procurement to Pay (P2P) Automation (Requisition, Invoice, Purchase Order, Supply) using Oracle E-Business Suite." />
            <ListItem point="It included migrating the data from external files to Oracle EBS using SQL Loader, creating Reports on them using Oracle Reports and Oracle Workflow Administrator" />
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
          <ul className="list-disc leading-7 pl-5 space-y-1">
            <ListItem point="Specialization: Computer Science" />
            <ListItem point="CGPA: 7.91 / 10" />
            <ListItem point="Thakur College of Engineering and Technology (TCET), Mumbai University" />
          </ul>
        </div>
      ),
    },
  ];
  return (
    <div className="w-full">
      <Timeline data={data} />
    </div>
  );
}
export default EducationExperience;

const ListItem: React.FC<{ point: string }> = ({ point }) => {
  return (
    <li className="flex items-start">
      <svg className="w-5 h-5 text-purple-500 mr-2 mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
      </svg>
      <span className="text-gray-600">{point}</span>
    </li>
  )
}