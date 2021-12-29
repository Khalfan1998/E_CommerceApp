import { makeStyles } from "@material-ui/core/styles";

export default makeStyles((theme) => ({
  toolbar: theme.mixins.toolbar,
  title: {
    fontSize: "30px",
    marginTop: "5%",
  },
  emptyButton: {
    //zIndex: 5,
    transform: "translate(-20.4vh, -24vh)",
    backgroundColor: "black",
    minWidth: "150px",
    [theme.breakpoints.down("xs")]: {
      marginBottom: "5px",
    },
    [theme.breakpoints.up("xs")]: {
      marginRight: "20px",
    },
  },
  checkoutButton: {
    transform: "translate(-43vh, -33vh)",
    color: "black",
    backgroundColor: "#F1C55B",
    minWidth: "150px",
    zIndex: 5,
  },
  link: {
    textDecoration: "none",
  },
  subtotalsize: {
    transform: "translate(92vh, -43vh)",
    fontSize: "30px",
  },
  /*imgborder: {
    transform: "translate(70vh, -85vh)",
    zIndex: -5,
  },*/
  cardDetails: {
    display: "flex",
    marginTop: "10%",
    width: "100%",
    justifyContent: "space-between",
  },
}));
