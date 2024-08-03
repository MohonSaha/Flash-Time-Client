import { keyframes, styled, Tooltip, tooltipClasses } from "@mui/material";

const subtleBounce = keyframes`
0% {
  transform: scale(0.9);
  opacity: 0;
}
50% {
  transform: scale(1.05);
  opacity: 0.8;
}
100% {
  transform: scale(1);
  opacity: 1;
}
`;
export const CustomTooltip = styled(({ className, ...props }) => (
  <Tooltip {...props} arrow classes={{ popper: className }} />
))(({ theme }) => ({
  [`& .${tooltipClasses.tooltip}`]: {
    backgroundColor: "#f50057",
    color: "white",
    fontSize: "1em",
    animation: `${subtleBounce} 0.6s ease`, // Apply bounce animation
  },
  [`& .${tooltipClasses.arrow}`]: {
    color: "#f50057",
  },
}));
