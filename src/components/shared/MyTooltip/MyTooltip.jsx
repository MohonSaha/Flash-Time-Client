import { keyframes, styled, Tooltip, tooltipClasses } from "@mui/material";

const subtleBounce = keyframes`
0% {
  transform: scale(0.9);
  opacity: 0;
}
50% {
  transform: scale(1.03);
  opacity: 1;
}
100% {
  transform: scale(1);
  opacity: 1;
}
`;

export const CustomTooltip = styled(({ className, ...props }) => (
  <Tooltip {...props} arrow classes={{ popper: className }} />
  // eslint-disable-next-line no-unused-vars
))(({ theme }) => ({
  [`& .${tooltipClasses.tooltip}`]: {
    backgroundColor: "#279a65",
    color: "white",
    fontSize: "12px",
    animation: `${subtleBounce} 0.6s ease-in-out`, // Apply bounce animation
    boxShadow: "0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23)",
  },
  [`& .${tooltipClasses.arrow}`]: {
    color: "#279a65",
  },
}));
