import { getCartById } from "~/server/queries";

async function Page({ params: { id } }: { params: { id: string } }) {
  // const cart = await getCartById(id);

  return (
    <>
      <article>{/* <h3>{cart.question}</h3> */}</article>
    </>
  );
}

export default Page;
