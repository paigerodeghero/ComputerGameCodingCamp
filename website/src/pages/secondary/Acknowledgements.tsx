import { Box, Typography } from "@mui/material";
import {
  SecondaryPageHost,
} from "../../layout/SecondaryPage";

const Acknowledgements = () => {
  return (
    <SecondaryPageHost>
      <Typography textAlign={"center"} variant="h3">
        Acknowledgements
      </Typography>

      <Typography marginTop={3} textAlign="center" variant="h5">
        Companies
      </Typography>

      <Box display="flex" justifyContent="space-between" alignItems="center">
        
      </Box>


    </SecondaryPageHost>

  );
};

export default Acknowledgements;
