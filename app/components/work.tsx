interface Props {
  title: string;
  tasks: string[];
}

export const Work = ({ title, tasks }: Props) => {
  return (
    <article className={"rounded-sm p-5"}>
      <h4 className={"mb-3 font-title text-lg font-bold"}>{title}</h4>
      <ul className={"flex flex-col gap-1"}>
        {tasks.map((task, index) => (
          <li className={"text-gray-400"} key={index}>
            {task}
          </li>
        ))}
      </ul>
    </article>
  );
};
