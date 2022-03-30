import React from "react";
import Box from "@mui/material/Box";
import LinearProgress from "@mui/material/LinearProgress";
import Typography from "@mui/material/Typography";
import * as PropTypes from "prop-types";

const BorderLinearProgress = (props) => {
  return (
    <div>
      <Typography color="#ccc">{props.title}</Typography>
      <Box sx={{ display: "flex", alignItems: "center" }}>
        <Box sx={{ width: "100%", mr: 1 }}>
          <LinearProgress {...props} />
        </Box>
        <Box>
          <Typography color="#ccc">{props.value}%</Typography>
        </Box>
      </Box>
    </div>
  );
};

export default BorderLinearProgress;

BorderLinearProgress.propTypes = {
  value: PropTypes.oneOfType([PropTypes.number, PropTypes.string]).isRequired,
  title: PropTypes.string.isRequired,
};
