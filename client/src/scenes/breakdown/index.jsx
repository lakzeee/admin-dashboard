import React from "react";
import { Box } from "@mui/material";
import { Header } from "components/header";
import { BreakdownChart } from "components/breakdown-chart";

export const BreakDown = () => {
  return (
    <Box m="1.5rem 2.5rem">
      <Header title="BREAKDOWN" subtitle="Breakdown of sales by category" />
      <Box mt="40px" height="75vh">
        <BreakdownChart />
      </Box>
    </Box>
  );
};
