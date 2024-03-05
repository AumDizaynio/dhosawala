import * as React from "react";
const Hamburger = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={28}
    height={24}
    viewBox="0 0 28 24"
    fill="none"
    {...props}
  >
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M0 2C0 1.46957 0.210714 0.96086 0.585786 0.585787C0.960859 0.210714 1.46957 0 2 0H26C26.5304 0 27.0391 0.210714 27.4142 0.585787C27.7893 0.96086 28 1.46957 28 2C28 2.53043 27.7893 3.03914 27.4142 3.41421C27.0391 3.78929 26.5304 4 26 4H2C1.46957 4 0.960859 3.78929 0.585786 3.41421C0.210714 3.03914 0 2.53043 0 2Z"
      fill="#1A750B"
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M0 12C0 11.4696 0.210714 10.9609 0.585786 10.5858C0.960859 10.2107 1.46957 10 2 10H14C14.5304 10 15.0391 10.2107 15.4142 10.5858C15.7893 10.9609 16 11.4696 16 12C16 12.5304 15.7893 13.0391 15.4142 13.4142C15.0391 13.7893 14.5304 14 14 14H2C1.46957 14 0.960859 13.7893 0.585786 13.4142C0.210714 13.0391 0 12.5304 0 12Z"
      fill="#1A750B"
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M0 22C0 21.4696 0.210714 20.9609 0.585786 20.5858C0.960859 20.2107 1.46957 20 2 20H26C26.5304 20 27.0391 20.2107 27.4142 20.5858C27.7893 20.9609 28 21.4696 28 22C28 22.5304 27.7893 23.0391 27.4142 23.4142C27.0391 23.7893 26.5304 24 26 24H2C1.46957 24 0.960859 23.7893 0.585786 23.4142C0.210714 23.0391 0 22.5304 0 22Z"
      fill="#1A750B"
    />
  </svg>
);
export default Hamburger;
