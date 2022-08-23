import React, { useState, useMemo, useCallback } from "react";
import { useSelector, useDispatch } from "react-redux";
import DatalistInput, { useComboboxControls } from "react-datalist-input";
import axios from "axios";
import { Box } from "@mui/material";
import { makeStyles } from "@mui/styles";
import AddInput from "./AddInput";
import AddItemButton from "./AddItemButton";
import AddHeader from "./AddHeader";
import { addNewItem } from "../../Store/itemspagereducer/thunkCreators";
import Loading from "../Loading";

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
  formInput: {
    width: "100%",
    display: "flex",
    flexDirection: "column",
    rowGap: 10,
  },
}));

const instance = axios.create();

const AddItem = ({ changeView, alert }) => {
  const [image, setImage] = useState("");

  const dispatch = useDispatch();

  const { setValue, value } = useComboboxControls();

  const category = useSelector((state) => state.items);

  const { categories, loadingItems, isLoading } = category;

  const onSelect = useCallback((selectedItem) => {
    setValue(selectedItem.value);
  }, []);

  const items = useMemo(
    () =>
      categories.map((option) => ({
        id: option.id,
        value: option.name,
        ...option,
      })),
    [value]
  );

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
    response.url !== "" && alert("Image successfully uploaded", "success");
  };

  const handleInput = (e) => {
    const { id, value } = e.target;
    setItemDetails((prevState) => ({ ...prevState, [id]: value }));
  };

  const submitItemDetails = async () => {
    const { name, unit, note } = itemDetails;
    if (name === "" || value === "") {
      alert("Item name or category cannot be empty", "error");
      return;
    }
    await dispatch(addNewItem(name, image, note, unit, value));
    setItemDetails({ name: "", note: "", unit: "" });
    setImage("");
    changeView("cart");
  };

  return (
    <Box className={classes.addItem}>
      {isLoading ? (
        <Loading />
      ) : (
        <Box className={classes.root}>
          <AddHeader />
          <form>
            <Box className={classes.formInput}>
              {input.map((el) => (
                <AddInput
                  key={el.name}
                  name={el.name}
                  placeholder={el.placeholder}
                  type={el.type}
                  id={el.id}
                  handle={handleInput}
                  imgUpload={handleUpload}
                />
              ))}
              <DatalistInput
                label="Category"
                placeholder="Select or choose a category"
                items={items}
                onSelect={onSelect}
                value={value}
                setValue={setValue}
              />
            </Box>
          </form>
          <AddItemButton
            change={changeView}
            submit={submitItemDetails}
            loading={loadingItems}
            alert={alert}
          />
        </Box>
      )}
    </Box>
  );
};

export default AddItem;
