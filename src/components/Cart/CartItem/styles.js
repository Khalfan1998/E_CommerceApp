import { makeStyles } from "@material-ui/core/styles";

export default makeStyles(() => ({
  //image size and position
  media: {
    height: 150,
    width: "50%",
    marginLeft: "25%",
  },
  cardContent: {
    display: "flex",
    justifyContent: "space-between",
  },
  textName: {
    fontSize: "20px",
  },
  textPrice: {
    fontSize: "15px",
  },
  cartActions: {
    justifyContent: "space-between",
  },
  buttons: {
    display: "flex",
    alignItems: "center",
  },
}));
