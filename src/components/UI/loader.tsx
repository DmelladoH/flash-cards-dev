import { LoaderSVG } from "../svgs/loader";

export default function Loader() {
  return (
    <div className="flex h-full flex-col items-center justify-center gap-5">
      <div className="flex justify-center">
        <LoaderSVG />
      </div>
      <p className="">Randomizing cards...</p>
    </div>
  );
}
