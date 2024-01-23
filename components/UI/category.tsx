import Image from "next/image";

interface Props {
  children?: React.ReactNode;
  name: string;
}

function Category({ name, children }: Props) {
  return (
    <article>
      <div>{children}</div>
      <div>
        <h3>{name}</h3>
      </div>
    </article>
  );
}

export default Category;
