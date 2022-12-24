import { InputProps } from "./input/Input";

export function getInputClass(
  height: InputProps["height"],
  bgColor: InputProps["bgColor"],
  error: InputProps["error"]
) {
  let inputClass = `leading-5 ${height} rounded-lg text-sm appearance-none rounded-[10px] w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none`;

  return error
    ? `${inputClass} border border-red-300 bg-red-light`
    : `${inputClass} ${bgColor}`;
}
