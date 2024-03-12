import Image from "next/image";

interface Props {
  img: string;
  name: string;
}

function Category({ name, img }: Props) {
  return (
    <article className="rounded-sm p-2 grid justify-center">
      <Image src={img} alt={name} width={100} height={100} />
      <div>
        <h3 className="text-slate-100 text-center text-xl">{name}</h3>
      </div>
    </article>
  );
}

export default Category;
