import { useEffect } from "react";
// @ts-ignore
import AOS from "aos";

export function useAos() {
  useEffect(() => {
    AOS.init({
      easing: "ease-out-sine",
      duration: "600",
    });
    AOS.refresh();
  }, []);
}
