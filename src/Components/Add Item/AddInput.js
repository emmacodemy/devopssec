import React from "react";
import { Box } from "@mui/material";
import { makeStyles } from "@mui/styles";
import { Upload } from "@mui/icons-material";
import "./input.css";

const useStyles = makeStyles(() => ({
  imgCont: {
    position: "absolute",
    top: 27,
    display: "flex",
    width: "100%",
    justifyContent: "flex-end",
    alignItems: "center",
  },
  inputText: {
    position: "relative",
    display: "flex",
    flexDirection: "column"
  },
}));

const AddInput = ({ name, type, placeholder, handle, id, imgUpload }) => {
  const classes = useStyles();
  return (
    <Box className={classes.inputText}>
      <label htmlFor={id}>{name}</label>
      <Box>
        {id === "note" ? (
          <textarea
            id={id}
            name={name}
            type={type}
            placeholder={placeholder}
            onInput={(e) => handle(e)}
          />
        ) : (
          <input
            id={id}
            name={name}
            type={type}
            placeholder={placeholder}
            onInput={(e) => handle(e)}
          />
        )}
        {id === "img" && (
          <Box className={classes.imgCont}>
            <input
              accept="image/*"
              className="img-input"
              style={{ display: "none" }}
              id="imgop"
              type="file"
              onChange={(e) => imgUpload(e.target.files)}
            />
            <label htmlFor="imgop">
                <Upload style={{ color: "#f9a109", cursor: "pointer" }} />
            </label>
          </Box>
        )}
      </Box>
    </Box>
  );
};

export default AddInput;
