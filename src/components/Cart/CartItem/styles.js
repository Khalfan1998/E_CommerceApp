import { makeStyles } from "@material-ui/core/styles";

export default makeStyles(() => ({
  media: {
    height: 230,
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
