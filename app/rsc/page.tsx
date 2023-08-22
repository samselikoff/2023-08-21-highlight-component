import { revalidatePath } from "next/cache";
import { Highlight } from "../page";

export default function Page2() {
  let d = Math.floor(+new Date() / 1000 / 10);

  console.log("rendering");
  return (
    <div className="m-20">
      <form
        action={async () => {
          "use server";
          revalidatePath("/");
        }}
      >
        <button>Refresh</button>
      </form>
      <div className="mt-8">
        <Highlight when={d}>
          <p>{d}</p>
        </Highlight>
      </div>
    </div>
  );
}
