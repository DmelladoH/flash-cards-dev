import CssSVG from "~/components/svgs/categories/css";
import HtmlSVG from "~/components/svgs/categories/html";
import ReactSvg from "~/components/svgs/categories/react";
import { WebPerformanceSVG } from "~/components/svgs/categories/webPerformanceSvg";
import JavaScriptSVG from "~/components/svgs/javaScriptSvg";
import { Category } from "~/types";

export const categories: Category[] = [
  {
    id: "JavaScript",
    svg: JavaScriptSVG,
    name: "JavaScript",
    href: "/JavaScript",
  },
  {
    id: "Performance",
    svg: WebPerformanceSVG,
    name: "Web performance",
    href: "/Performance",
  },
  { id: "React", svg: ReactSvg, name: "React", href: "/React" },
  { id: "Html", svg: HtmlSVG, name: "HTML", href: "/Html" },
  { id: "Css", svg: CssSVG, name: "CSS", href: "/Css" },
];
