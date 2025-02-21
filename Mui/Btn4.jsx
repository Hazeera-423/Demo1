

import React from "react";
import Button from "@mui/material/Button";

export default function ColorButtons() {
  return (
    <div style={{ display: "flex", gap: "10px" }}>
      <Button variant="contained" color="primary">Primary</Button>
      <Button variant="contained" color="secondary">Secondary</Button>
      <Button variant="contained" color="success">Success</Button>
      <Button variant="contained" color="error">Error</Button>

      <Button variant="outlined" color="primary" size="small">Small</Button>
      <Button variant="outlined" color="secondary" size="medium">Medium</Button>
      <Button variant="outlined" color="error" size="large">Large</Button>
    </div>
  );
}
