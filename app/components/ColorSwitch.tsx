import { DarkIcon } from "./icons/color-scheme/Dark";
import { LightIcon } from "./icons/color-scheme/Light";

interface ColorSwitchProps {
  toggle: () => void;
  currentColor: "light" | "dark";
}

export function ColorSwitch({
  toggle,
  currentColor,
}: Readonly<ColorSwitchProps>) {
  return (
    <button
      onClick={toggle}
      className="text-gray-500 hover:text-gray-900 dark:hover:text-gray-100 p-2 rounded-sm hover:bg-gray-100 dark:hover:bg-white/5  transition-colors aspect-square border border-gray-200 dark:border-gray-700"
    >
      {currentColor === "dark" ? (
        <DarkIcon className="h-4 w-4" />
      ) : (
        <LightIcon className="h-4 w-4" />
      )}
    </button>
  );
}
