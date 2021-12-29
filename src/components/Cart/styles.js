import { makeStyles } from "@material-ui/core/styles";

export default makeStyles((theme) => ({
  toolbar: theme.mixins.toolbar,
  title: {
    fontSize: "30px",
    marginTop: "5%",
  },
  emptyButton: {
    transform: "translate(-20.4vh, -47vh)",
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
    transform: "translate(-43vh, -57vh)",
    color: "black",
    backgroundColor: "#F1C55B",
    minWidth: "150px",
  },
  link: {
    textDecoration: "none",
  },
  subtotalsize: {
    transform: "translate(92vh, -67vh)",
    fontSize: "30px",
  },
  cardDetails: {
    display: "flex",
    marginTop: "10%",
    width: "100%",
    justifyContent: "space-between",
  },
}));
