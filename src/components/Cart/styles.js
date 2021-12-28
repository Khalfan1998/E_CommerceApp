import { makeStyles } from "@material-ui/core/styles";

export default makeStyles((theme) => ({
  toolbar: theme.mixins.toolbar,
  title: {
    fontSize: "30px",
    marginTop: "5%",
  },
  emptyButton: {
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
    backgroundColor: "black",
    minWidth: "150px",
  },
  link: {
    textDecoration: "none",
  },
  subtotalsize: {
    fontSize: "30px",
  },
  cardDetails: {
    display: "flex",
    marginTop: "10%",
    width: "100%",
    justifyContent: "space-between",
  },
}));
