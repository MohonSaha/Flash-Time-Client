/* eslint-disable react/prop-types */
import Accordion from "@mui/material/Accordion";
import AccordionDetails from "@mui/material/AccordionDetails";
import AccordionSummary from "@mui/material/AccordionSummary";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

const AccordionItem = ({
  panel,
  expanded,
  handleChange,
  title,
  //   summary,
  details,
}) => {
  return (
    <Accordion
      sx={{
        border: "1px solid #ccc", // Add red border
        borderRadius: "4px", // Optional: adjust the border radius
        "&:not(:last-child)": {
          marginBottom: "10px", // Optional: add spacing between accordions
        },
        "&:before": {
          display: "none", // Optional: removes the default MUI divider line
        },
      }}
      expanded={expanded === panel}
      onChange={handleChange(panel)}
    >
      <AccordionSummary
        expandIcon={<ExpandMoreIcon />}
        aria-controls={`${panel}-content`}
        id={`${panel}-header`}
      >
        <Typography
          sx={{ width: "100%", flexShrink: 0, fontSize: 18, fontWeight: 600 }}
        >
          {title}
        </Typography>
        {/* <Typography sx={{ color: "text.secondary" }}>{summary}</Typography> */}
      </AccordionSummary>
      <AccordionDetails>
        <Typography>{details}</Typography>
      </AccordionDetails>
    </Accordion>
  );
};

export default AccordionItem;
