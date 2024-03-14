import Button from "@mui/material/Button";
import useSnackBarContext from "./shared-component/snackbar/context/SnackBarContext";

export default function App() {
  const { openSnackBar } = useSnackBarContext();

  return (
    <div style={{display: 'flex', gap: '1rem' }}>
      <Button
        onClick={() => openSnackBar.success("Success Message")}
        variant="contained"
        color="success"
      >
        Success
      </Button>
      <Button
        onClick={() => openSnackBar.warning("Warning Message")}
        variant="contained"
        color="warning"
      >
        Warning
      </Button>
      <Button
        onClick={() => openSnackBar.info("Info Message")}
        variant="contained"
        color="info"
      >
        Info
      </Button>
      <Button
        onClick={() => openSnackBar.error("Error Message")}
        variant="contained"
        color="error"
      >
        Error
      </Button>
    </div>
  );
}
