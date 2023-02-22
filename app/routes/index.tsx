import { WorksList } from "@/components/works-list";
import { Socials } from "@/components/socials";

const works = [
  {
    title: "Lead Front at Hostnfly for 5 years",
    tasks: [
      "Mentoring with two or three senior and junior developers",
      "Building a new website for the Hostnfly platform",
      "Building a new React Native application for Hostnfly partners",
    ],
  },
  {
    title: "Senior FE at Ulysse Travel",
    tasks: [
      "Adding new features on the website such as managing luggage, managing the booking process...",
      "Working on the new React Native application for Ulysse customers",
    ],
  },
  {
    title: "Teacher at EEMI and Hetic",
    tasks: [
      "Teaching React and React Native to students",
      "Teaching Javascript and Typescript to students",
    ],
  },
];

export default function Index() {
  return (
    <>
      <div className={"mb-8"}>
        <h2 className={"text-md mb-3.5 font-title font-bold tracking-wider"}>
          A few words about me
        </h2>
        <p className={"text-md mb-3.5 font-body leading-relaxed"}>
          Greetings! My name is David, also known as sephi. I possess
          approximately a decade of experience as a front-end developer.
          Presently, I am in search of freelance opportunities for brief
          projects.
        </p>
        <p className={"text-md font-body leading-relaxed"}>
          I worked the past couple of years at Hostnfly as a Lead Frontend
          Developer
        </p>
        <p className={"mt-4 tracking-wide text-gold-300"}>
          I am now CTO at fractible.io
        </p>
      </div>
      <Socials />
      {/* Experiences */}
      <div className={"mt-20"}>
        <h3 className={"mb-10 font-title text-xl font-bold"}>
          Some of my work
        </h3>
        <WorksList works={works} />
      </div>

      {/* Skills  */}
    </>
  );
}
