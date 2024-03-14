import { useContext } from "react";
import { SnackBarContext } from "../context/SnackBarContextProvider";
const useSnackBarContext = () => useContext(SnackBarContext);

export default useSnackBarContext;
