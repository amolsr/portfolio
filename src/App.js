import AppBar from "./components/Appbar";
import "./App.css";
import {
  Grid,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  makeStyles,
  Typography,
  useTheme,
} from "@material-ui/core";
import PhoneIcon from "@material-ui/icons/Phone";
import EmailIcon from "@material-ui/icons/Email";
import HomeIcon from "@material-ui/icons/Home";

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundImage: `url(${process.env.PUBLIC_URL}/image/background1.jpg)`,
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    padding: theme.spacing(0, 5),
  },
}));

function App() {
  const classes = useStyles();
  const theme = useTheme();
  return (
    <div className={classes.root}>
      <AppBar>
        <Grid
          container
          style={{ height: "93vh" }}
          direction="column"
          justify="center"
          alignItems="flex-start"
        >
          <Grid item xs={13}>
            <Typography
              variant="h3"
              align="left"
              style={{ color: theme.palette.primary.main }}
              gutterBottom
            >
              Amol Saini
            </Typography>
          </Grid>
          <Grid item xs={13}>
            <List dense="true">
              <ListItem>
                <ListItemIcon>
                  <PhoneIcon />
                </ListItemIcon>
                <ListItemText primary="8126544009" />
              </ListItem>
              <ListItem>
                <ListItemIcon>
                  <EmailIcon />
                </ListItemIcon>
                <ListItemText primary="amol.saini567@gmail.com" />
              </ListItem>
              <ListItem>
                <ListItemIcon>
                  <HomeIcon />
                </ListItemIcon>
                <ListItemText primary="Ghaziabad, Uttar Pradesh, India" />
              </ListItem>
            </List>
          </Grid>
        </Grid>
      </AppBar>
    </div>
  );
}

export default App;
