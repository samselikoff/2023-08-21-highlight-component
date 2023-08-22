import { read, update } from "../actions";

export default async function Page2() {
  await new Promise((resolve) => setTimeout(resolve, 1000));

  let i = await read();
  return (
    <div className="m-20">
      <p>Post 1</p>
      <p>i is {i}</p>

      <form action={update}>
        <button>Update</button>
      </form>
    </div>
  );
}
