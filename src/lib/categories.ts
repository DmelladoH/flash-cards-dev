import AccessibilitySvg from "~/components/svgs/categories/accessibility";
import CssSVG from "~/components/svgs/categories/css";
import HtmlSVG from "~/components/svgs/categories/html";
import ReactSvg from "~/components/svgs/categories/react";
import WebSvg from "~/components/svgs/categories/web";
import { WebPerformanceSVG } from "~/components/svgs/categories/webPerformanceSvg";
import JavaScriptSVG from "~/components/svgs/javaScriptSvg";
import type { Category } from "~/types";

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
  { id: "Web", svg: WebSvg, name: "Web", href: "/Web" },
  {
    id: "Accessibility",
    svg: AccessibilitySvg,
    name: "Accessibility",
    href: "/Accessibility",
  },
];
