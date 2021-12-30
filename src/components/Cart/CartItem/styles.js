import { makeStyles } from "@material-ui/core/styles";

export default makeStyles(() => ({
  //image size and position
  media: {
    height: 150,
    width: "25%",
    marginTop: "5%",
    marginLeft: "5%",
  },
  cardContent: {
    display: "flex",
    justifyContent: "space-between",
  },
  cardContainer: {
    border: "2px solid black",
    width: "1000px",
  },
  removeButton: {
    backgroundColor: "black",
  },
  removeContainer: {
    marginTop: "10%",
  },
  textName: {
    marginLeft: "30%",
    fontSize: "30px",
  },
  textPrice: {
    fontSize: "30px",
  },
  cartActions: {
    justifyContent: "space-between",
  },
  buttons: {
    border: "1px solid black",
    marginLeft: "30%",
    display: "flex",
    alignItems: "center",
  },
}));
