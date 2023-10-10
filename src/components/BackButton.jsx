import { useNavigate } from "react-router-dom";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import { IconButton } from "@mui/material";

const BackButton = () => {
  const navigate = useNavigate();
  const goBack = () => {
    navigate(-1);
  };
  return (
    <>
      <IconButton aria-label="back" onClick={goBack}>
        <ArrowBackIosNewIcon />
      </IconButton>
    </>
  );
};

export default BackButton;
