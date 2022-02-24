import defaultSvgPropType from "./DefaultSVGPropType";

const ChartIcon = ({ color = "#030229" }: defaultSvgPropType) => {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M7.33 2.00049H16.669C20.07 2.00049 21.99 3.92949 22 7.33049V16.6705C22 20.0705 20.07 22.0005 16.669 22.0005H7.33C3.929 22.0005 2 20.0705 2 16.6705V7.33049C2 3.92949 3.929 2.00049 7.33 2.00049ZM12.049 17.8605C12.48 17.8605 12.839 17.5405 12.879 17.1105V6.92049C12.919 6.61049 12.77 6.29949 12.5 6.13049C12.219 5.96049 11.879 5.96049 11.61 6.13049C11.339 6.29949 11.19 6.61049 11.219 6.92049V17.1105C11.27 17.5405 11.629 17.8605 12.049 17.8605ZM16.65 17.8605C17.07 17.8605 17.429 17.5405 17.48 17.1105V13.8305C17.509 13.5095 17.36 13.2105 17.089 13.0405C16.82 12.8705 16.48 12.8705 16.2 13.0405C15.929 13.2105 15.78 13.5095 15.82 13.8305V17.1105C15.86 17.5405 16.219 17.8605 16.65 17.8605ZM8.219 17.1105C8.179 17.5405 7.82 17.8605 7.389 17.8605C6.959 17.8605 6.599 17.5405 6.56 17.1105V10.2005C6.53 9.88949 6.679 9.58049 6.95 9.41049C7.219 9.24049 7.56 9.24049 7.83 9.41049C8.099 9.58049 8.25 9.88949 8.219 10.2005V17.1105Z"
        fill={color}
      />
    </svg>
  );
};

export default ChartIcon;