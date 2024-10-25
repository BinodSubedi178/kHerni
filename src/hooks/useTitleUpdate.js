import { useEffect } from "react";

export const useTitleUpdate = (title) => {
  useEffect(() => {
    document.title = `${title} | kHerni?`;
  });
};
