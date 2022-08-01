import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import axios from "axios";
import { Box } from "@mui/material";
import { makeStyles } from "@mui/styles";
import AddInput from "./AddInput";
import AddItemButton from "./AddItemButton";
import AddHeader from "./AddHeader";
import { getAllCategory } from "../../Store/itemspagereducer/thunkCreators";

const useStyles = makeStyles(() => ({
  addItem: {
    position: "relative",
    width: "100%",
    height: "100%",
    backgroundColor: "#fafafe",
  },
  root: {
    width: "80%",
    height: "100%",
    position: "relative",
    margin: "0 auto",
  },
}));

const instance = axios.create();

const AddItem = ({ changeView }) => {
  const [image, setImage] = useState("");

  const category = useSelector((state) => state.items.categories);

  const dispatch = useDispatch();

  const [itemDetails, setItemDetails] = useState({
    name: "",
    unit: "",
    note: "",
  });

  const classes = useStyles();

  const input = [
    {
      name: "name",
      id: "name",
      placeholder: "Enter item name",
      type: "text",
    },
    {
      name: "note (optional)",
      id: "note",
      placeholder: "Enter a note (optional)",
      type: "textarea",
    },
    {
      name: "Measurement unit (optional)",
      id: "unit",
      placeholder: "e.g (kg or Litre) (optional)",
      type: "text",
    },
    {
      name: "Image (optional)",
      id: "img",
      placeholder: "Upload Image (optional)",
      type: "text",
    },
  ];
  const uploadPicture = async (file) => {
    const formData = new FormData();
    formData.append("file", file);
    formData.append("upload_preset", "sd31ytp8");
    const { data } = await instance.post(
      "https://api.cloudinary.com/v1_1/duj88gras/image/upload",
      formData
    );
    return data;
  };

  const handleUpload = async (images) => {
    let img = images[0];
    const response = await uploadPicture(img);
    setImage(response.url);
  };

  const handleInput = (e) => {
    const { id, value } = e.target;
    setItemDetails((prevState) => ({ ...prevState, [id]: value }));
  };

  useEffect(() => {
    dispatch(getAllCategory());
  }, []);

  return (
    <Box className={classes.addItem}>
      <Box className={classes.root}>
        <AddHeader />
        <form>
          <Box className={classes.formInput}>
            {input.map((el) => (
              <AddInput
                name={el.name}
                placeholder={el.placeholder}
                type={el.type}
                id={el.id}
                handle={handleInput}
                imgUpload={handleUpload}
              />
            ))}
          </Box>
        </form>
        <AddItemButton change={changeView} />
      </Box>
    </Box>
  );
};

export default AddItem;
