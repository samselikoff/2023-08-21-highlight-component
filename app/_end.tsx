import Link from "next/link";
import Highlight from "./components/highlight";
import RefreshButton from "./components/refresh-button";
import Counter from "./components/counter";

let count = 0;
export default function Home({
  searchParams,
}: {
  searchParams: { [key: string]: string | string[] | undefined };
}) {
  let page = typeof searchParams.page === "string" ? +searchParams.page : 1;

  count += 20;

  return (
    <div className="mb-20 p-20">
      <div className="flex gap-2">
        <RefreshButton>Update count</RefreshButton>
        <Link
          href={`?page=${page + 1}`}
          className="rounded bg-gray-700 px-3 py-2 font-medium text-white"
        >
          Next page
        </Link>
      </div>

      <div className="mt-20 grid grid-cols-3 gap-12">
        <Highlight trigger={count} duration={75} className="group">
          <div className="overflow-hidden rounded-lg border border-white/[0.15] bg-gray-900 p-3 text-sky-500 shadow transition duration-1000 group-data-[state=on]:bg-sky-500 group-data-[state=on]:text-white group-data-[state=on]:duration-75 md:px-4 md:py-5">
            <dt className="truncate text-sm font-medium text-white/50">
              Count
            </dt>
            <dd className="relative origin-center truncate text-lg font-semibold tabular-nums md:mt-2 md:text-xl md:tracking-tight">
              <Counter value={count} />
            </dd>
          </div>
        </Highlight>

        <Highlight trigger={page} duration={1000} className="group">
          <div className="overflow-hidden rounded-lg border border-white/[0.15] bg-gray-900 p-3 text-sky-500 shadow transition duration-1000 group-data-[state=on]:scale-125 group-data-[state=on]:shadow-xl group-data-[state=on]:duration-[250ms] md:px-4 md:py-5">
            <dt className="truncate text-sm font-medium text-white/50">
              Current page
            </dt>
            <dd className="relative origin-center truncate text-lg font-semibold tabular-nums md:mt-2 md:text-xl md:tracking-tight">
              {page}
            </dd>
          </div>
        </Highlight>
      </div>
    </div>
  );
}
