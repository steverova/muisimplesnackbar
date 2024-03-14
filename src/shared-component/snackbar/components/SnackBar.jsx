import Snackbar from "@mui/material/Snackbar";
import useSnackBarContext from "../context/SnackBarContext";
import Slide from "@mui/material/Slide";
import { Alert } from "@mui/material";

export default function SnackBar({ options }) {
  const { callSnackBar, openSnackBar } = useSnackBarContext();

  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }
    openSnackBar.close();
  };

  function SlideTransition(props) {
    return <Slide {...props} direction="up" />;
  }

  return (
    <div>
      <Snackbar
        open={callSnackBar}
        autoHideDuration={6000}
        onClose={handleClose}
        TransitionComponent={SlideTransition}
      >
        <Alert
          onClose={handleClose}
          severity={options.severity}
          variant={options.variant}
          sx={{ width: "100%" }}
        >
          {options.message}
        </Alert>
      </Snackbar>
    </div>
  );
}
