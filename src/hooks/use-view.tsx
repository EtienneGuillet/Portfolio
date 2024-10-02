import { useWindowSize } from "./use-window-size";

export function useView() {
  const isDesktopView = (useWindowSize().width || 0) - 1023 > 0;

  return {
    isDesktopView,
    isTabletView: !isDesktopView,
  };
}
