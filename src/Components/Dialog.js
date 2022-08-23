import * as React from 'react';
import { Box, DialogTitle } from "@mui/material"
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import { makeStyles } from "@mui/styles"
// import Slide from '@mui/material/Slide';
// import { TransitionProps } from '@mui/material/transitions';

// const Transition = React.forwardRef(function Transition(
//   props: TransitionProps & {
//     children: React.ReactElement<any, any>;
//   },
//   ref: React.Ref<unknown>,
// ) {
//   return <Slide direction="up" ref={ref} {...props} />;
// });

const useStyles = makeStyles(() => ({
  cancelBtn: {
    position: "relative",
    backgroundColor: "transparent",
    width: 50,
    border: "none",
    cursor: "pointer",
    outline: "none",
    height: 20,
    color: "#34333a",
    fontWeight: 700,
  },
  completeBtn: {
    position: "relative",
    backgroundColor: "#eb5757",
    width: 88,
    height: 50,
    borderRadius: 12,
    color: "#fff",
    fontWeight: 700,
    border: "none",
    outline: "none",
    cursor: "pointer",
  },
}))



export default function AlertDialogSlide({ open, close, complete }) {
  const classes = useStyles()

  const handleClose = () => {
    close(false)
  }
 
  return (
    <Box className={classes.modalCont}>
      <Dialog
        open={open}
        keepMounted
        onClose={handleClose}
        aria-describedby="alert-dialog-slide-description"
        PaperProps={{
          style: {
            borderRadius: '12px',
          },
        }}
      >
        <DialogContent>
        <DialogTitle>{"Cancel List?"}</DialogTitle>
          <DialogContentText id="alert-dialog-slide-description">
           Are you sure you want to cancel this shopping List?
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <button className={classes.cancelBtn} onClick={handleClose}>Cancel</button>
          <button className={classes.completeBtn} onClick={() => complete("cancelled")}>Yes</button>
        </DialogActions>
      </Dialog>
    </Box>
  );
}
