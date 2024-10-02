import Badge from "../../../common/components/bage";

type TecnologyListProps = {
  technologies: string[];
};

function TecnologyList({ technologies }: TecnologyListProps) {
  return (
    <div className="flex flex-wrap gap-x-1.5 gap-y-2">
      {technologies.map((technology, index) => (
        <Badge key={index}>{technology}</Badge>
      ))}
    </div>
  );
}

export default TecnologyList;
