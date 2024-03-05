const NextButton = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={16}
    height={16}
    fill="none"
    cursor="pointer"
    {...props}
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M6.4 12.8 11.2 8 6.4 3.2"
    />
  </svg>
);
export default NextButton;
