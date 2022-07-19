import React from "react";
import { Box } from "@mui/material"
import { makeStyles } from "@mui/styles"
import ItemHeader from "./ItemHeader"
import CategoryItem from "./CategoryItem"

const useStyles = makeStyles((theme) => ({
  itemsPage: {
    width: '100%',
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
    rowGap: 50,
  },
  items: {
    position: 'relative',
    display: 'flex',
    flexDirection: 'column',
    rowGap: 25,
    width: '100%',
    height: '75%',
    overflow: 'scroll',
    [theme.breakpoints.down('md')]: {
      height: '90%'
    }
  }
}))

const ItemsPage = ({ changeView }) => {
  const classes= useStyles()
  const list = [{category:'meat', items:[{name: 'Chicken and chips', measurement_unit:'kg'},{name: 'meat', measurement_unit:'kg'},{name: 'meat', measurement_unit:'kg'}, {name: 'meat', measurement_unit:'kg'},{name: 'meat', measurement_unit:'kg'},{name: 'meat', measurement_unit:'kg'},{name: 'meat', measurement_unit:'kg'},{name: 'meat', measurement_unit:'kg'},{name: 'meat', measurement_unit:'kg'},{name: 'meat', measurement_unit:'kg'},{name: 'meat', measurement_unit:'kg'},]}, {category:'meat', items:[{name: 'meat', measurement_unit:'kg'},{name: 'meat', measurement_unit:'kg'},{name: 'meat', measurement_unit:'kg'}]}, {category:'meat', items:[{name: 'meat', measurement_unit:'kg'},{name: 'meat', measurement_unit:'kg'},{name: 'meat', measurement_unit:'kg'}]}, {category:'meat', items:[{name: 'meat', measurement_unit:'kg'},{name: 'meat', measurement_unit:'kg'},{name: 'meat', measurement_unit:'kg'}]}]
  return (
    <Box className={classes.itemsPage}>
      <ItemHeader />
      <Box className={classes.items}>
        {
          list.map((listItem) => <CategoryItem key={listItem.category} name={listItem.category} list={listItem.items} changeView={changeView} />)
        }
      </Box>
    </Box>
  );
};

export default ItemsPage;
