import defaultSvgPropType from "./DefaultSVGPropType";

const XIcon = ({
  width = "25px",
  height = "25px",
  onClick = () => {}
}: defaultSvgPropType) => (
  <svg
    enable-background="new 0 0 256 256"
    id="Layer_1"
    width={width}
    height={height}
    className="cursor-pointer transition duration-150 hover:fill-primary"
    version="1.1"
    viewBox="0 0 256 256"
    xmlSpace="preserve"
    xmlns="http://www.w3.org/2000/svg"
    xmlnsXlink="http://www.w3.org/1999/xlink"
    onClick={onClick}
  >
    <path d="M137.051,128l75.475-75.475c2.5-2.5,2.5-6.551,0-9.051s-6.551-2.5-9.051,0L128,118.949L52.525,43.475  c-2.5-2.5-6.551-2.5-9.051,0s-2.5,6.551,0,9.051L118.949,128l-75.475,75.475c-2.5,2.5-2.5,6.551,0,9.051  c1.25,1.25,2.888,1.875,4.525,1.875s3.275-0.625,4.525-1.875L128,137.051l75.475,75.475c1.25,1.25,2.888,1.875,4.525,1.875  s3.275-0.625,4.525-1.875c2.5-2.5,2.5-6.551,0-9.051L137.051,128z" />
  </svg>
);

export default XIcon;
