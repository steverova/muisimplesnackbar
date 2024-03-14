/* eslint-disable react-hooks/exhaustive-deps */
import { createContext, useState, useMemo } from "react";
import PropTypes from "prop-types";
import SnackBar from "../components/SnackBar";

export const SnackBarContext = createContext();

export const SnackBarProvider = ({ children }) => {
  const [callSnackBar, setCallSnackBar] = useState(false);
  const [options, setOptions] = useState({
    message: "This is a placeholder message :)",
    severity: "success",
    variant: "filled",
  });

  const openSnackBar = {
    open: () => {
      setCallSnackBar(true);
    },
    close: () => {
      setCallSnackBar(false);
    },
    success: (message) => {
      openSnackBarWithSeverity(message, "success");
    },
    info: (message) => {
      openSnackBarWithSeverity(message, "info");
    },
    warning: (message) => {
      openSnackBarWithSeverity(message, "warning");
    },
    error: (message) => {
      openSnackBarWithSeverity(message, "error");
    },
  };

  const openSnackBarWithSeverity = (message, severity) => {
    setCallSnackBar(true);
    setOptions({
      message: message,
      severity: severity,
      variant: "filled",
    });
  };

  const contextValue = useMemo(
    () => ({
      callSnackBar,
      openSnackBar,
    }),
    [callSnackBar]
  );

  return (
    <SnackBarContext.Provider value={contextValue}>
      <SnackBar options={options} />
      {children}
    </SnackBarContext.Provider>
  );
};

SnackBarProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default SnackBarContext;
