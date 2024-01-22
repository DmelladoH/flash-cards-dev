import Image from "next/image";

interface Props {
  icon: string;
  name: string;
}

function Category({ icon, name }: Props) {
  console.log({ icon, name });
  return (
    <article>
      <div>
        <Image src={icon} alt={name} width={100} height={100} />
      </div>
      <div>
        <h3>{name}</h3>
      </div>
    </article>
  );
}

export default Category;
