import { Work } from "@/components/work";

interface Props {
  works: {
    title: string;
    tasks: string[];
  }[];
}
export const WorksList = ({ works }: Props) => {
  return (
    <ul className={"flex flex-col gap-4"}>
      {works.map((work, index) => (
        <Work key={index} title={work.title} tasks={work.tasks} />
      ))}
    </ul>
  );
};
