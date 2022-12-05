import React from "react";

import Box from "@mui/material/Box";
import LinearProgress from "@mui/material/LinearProgress";
import Typography from "@mui/material/Typography";
import * as PropTypes from "prop-types";

type Props = {
  title: string;
  value: number;
  variant?: "buffer" | "determinate" | "indeterminate" | "query";
  color?:
    | "inherit"
    | "primary"
    | "secondary"
    | "error"
    | "info"
    | "success"
    | "warning"
    | undefined;
  sx?: Array<object> | object;
};
const BorderLinearProgress = ({
  title,
  value,
  variant = "indeterminate",
  color = "primary",
  sx = {},
}: Props) => {
  return (
    <div>
      <Typography color="#ccc">{title}</Typography>
      <Box sx={{ display: "flex", alignItems: "center" }}>
        <Box sx={{ width: "100%", mr: 1 }}>
          <LinearProgress variant={variant} value={value} color={color} sx={sx} />
        </Box>
        <Box>
          <Typography color="#ccc">{value}%</Typography>
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
