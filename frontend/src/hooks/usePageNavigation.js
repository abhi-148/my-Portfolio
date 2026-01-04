import { useEffect } from "react";

const pages = ["hero", "about", "skills", "projects", "auth", "contact"];

export default function usePageNavigation(page, setPage) {
  useEffect(() => {
    const index = pages.indexOf(page);

    const onKey = (e) => {
      if (e.key === "ArrowRight" && index < pages.length - 1)
        setPage(pages[index + 1]);
      if (e.key === "ArrowLeft" && index > 0)
        setPage(pages[index - 1]);
    };

    const onWheel = (e) => {
      if (e.deltaY > 0 && index < pages.length - 1)
        setPage(pages[index + 1]);
      if (e.deltaY < 0 && index > 0)
        setPage(pages[index - 1]);
    };

    window.addEventListener("keydown", onKey);
    window.addEventListener("wheel", onWheel);

    return () => {
      window.removeEventListener("keydown", onKey);
      window.removeEventListener("wheel", onWheel);
    };
  }, [page, setPage]);
}
