import * as React from "react";
import { styled, createTheme, ThemeProvider } from "@mui/material/styles";
import DataTable from "react-data-table-component";
import { useSelector } from "react-redux";

import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import CssBaseline from "@mui/material/CssBaseline";
import MuiDrawer from "@mui/material/Drawer";
import Box from "@mui/material/Box";
import MuiAppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import List from "@mui/material/List";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import Link from "@mui/material/Link";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";

import MenuIcon from "@mui/icons-material/Menu";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ManageAccountsIcon from "@mui/icons-material/ManageAccounts";
import ConfirmationNumberIcon from "@mui/icons-material/ConfirmationNumber";
import PixIcon from "@mui/icons-material/Pix";
import MoneyIcon from "@mui/icons-material/Money";

import actions from "../../store/actions";

import HomeBody from "./HomeBody";
import SwapBody from "./SwapBody";

function Copyright(props) {
  return (
    <Typography
      variant="body2"
      color="text.secondary"
      align="center"
      {...props}
    >
      {"Copyright © "}
      <Link color="inherit" href="https://vipaywallet.io">
        vipaywallet.io
      </Link>{" "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}

const drawerWidth = 240;

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open }) => ({
  // zIndex: theme.zIndex.drawer + 1,
  transition: theme.transitions.create(["width", "margin"], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(["width", "margin"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));

const Drawer = styled(MuiDrawer, {
  shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open }) => ({
  "& .MuiDrawer-paper": {
    position: "relative",
    whiteSpace: "nowrap",
    width: drawerWidth,
    transition: theme.transitions.create("width", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
    boxSizing: "border-box",
    ...(!open && {
      overflowX: "hidden",
      transition: theme.transitions.create("width", {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
      }),
      width: theme.spacing(7),
      [theme.breakpoints.up("sm")]: {
        width: theme.spacing(9),
      },
    }),
    backgroundColor: "#0d1321",
    elevation: 0,
    borderRightWidth: 0.5,
    borderRightColor: "rgba(252, 155, 43, 0.6)",
  },
}));

const mdTheme = createTheme();

function DashboardContent() {
  const [open, setOpen] = React.useState(true);
  const [key, setKey] = React.useState("home");
  const [loading, setLoading] = React.useState(false);
  const [Address, setAddress] = React.useState("");
  const [Balance, setBalance] = React.useState("");
  const [Network, setNetwork] = React.useState("");

  const Price = useSelector((state) => state.HomeReducer.Price);

  React.useEffect(() => {
    actions.getPrice();
  }, []);

  return (
    <ThemeProvider theme={mdTheme}>
      <Box sx={{ display: "flex" }}>
        <CssBaseline />
        <AppBar
          elevation={0}
          position="absolute"
          open={true}
          sx={{
            backgroundColor: "#0d1321",
          }}
        >
          <Toolbar
            sx={{
              pr: "24px",
              justifyContent: "flex-end",
            }}
          >
            {Address === "" ? (
              <Button
                variant="contained"
                sx={{
                  elevation: 0,
                  backgroundColor: "#fc9b2b",
                  "&:hover": {
                    backgroundColor: "#fc9b2b",
                  },
                }}
                onClick={async () => {
                  const unisat = window.unisat;
                  const [address] = await unisat.requestAccounts();
                  const balance = await unisat.getBalance();
                  const network = await unisat.getNetwork();

                  setAddress(address);
                  setBalance(balance.confirmed / 100000000);
                  setNetwork(network);
                  console.log(network);
                }}
              >
                CONNECT
              </Button>
            ) : (
              <Button
                variant="contained"
                sx={{
                  elevation: 0,
                  backgroundColor: "#fc9b2b",
                  "&:hover": {
                    backgroundColor: "#fc9b2b",
                  },
                }}
                onClick={async () => {
                  setAddress("");
                  setBalance("");
                  setNetwork("");
                }}
              >
                {Address.substring(0, 5).toLowerCase() +
                  "....." +
                  Address.substring(
                    Address.length - 5,
                    Address.length
                  ).toLowerCase()}
                {` (${Network})`}
              </Button>
            )}
          </Toolbar>
        </AppBar>
        <Drawer variant="permanent" open={open}>
          <Toolbar
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              px: [1],
            }}
          >
            <Box
              component="img"
              sx={{
                height: 60,
                width: 550,
                borderWidth: 1,
                borderColor: "#fff",
              }}
              alt="The house from the offer."
              src={require("../../assets/images/logo.png")}
            />
          </Toolbar>
          {/* <Divider /> */}
          <List component="nav">
            <ListItemButton
              sx={{
                backgroundColor: key === "home" ? "#fc9b2b" : "#0d1321",
                marginInline: "15px",
                marginBlock: "10px",
                borderRadius: "10px",
                "&:hover": {
                  backgroundColor: "#fc9b2b",
                },
              }}
              onClick={() => setKey("home")}
            >
              <ListItemIcon>
                <ManageAccountsIcon
                  sx={{
                    color: "#fff",
                  }}
                />
              </ListItemIcon>
              <ListItemText
                sx={{
                  color: "#fff",
                }}
                primary="Home"
              />
            </ListItemButton>
            <ListItemButton
              sx={{
                backgroundColor: key === "swap" ? "#fc9b2b" : "#0d1321",
                marginInline: "15px",
                marginBlock: "10px",
                borderRadius: "10px",
                "&:hover": {
                  backgroundColor: "#fc9b2b",
                },
              }}
              onClick={() => setKey("swap")}
            >
              <ListItemIcon>
                <ConfirmationNumberIcon
                  sx={{
                    color: "#fff",
                  }}
                />
              </ListItemIcon>
              <ListItemText
                sx={{
                  color: "#fff",
                }}
                primary="swap"
              />
            </ListItemButton>
            <ListItemButton
              sx={{
                backgroundColor: key === "about" ? "#fc9b2b" : "#0d1321",
                marginInline: "15px",
                borderRadius: "10px",
                "&:hover": {
                  backgroundColor: "#fc9b2b",
                },
              }}
              onClick={() => setKey("about")}
            >
              <ListItemIcon>
                <MoneyIcon
                  sx={{
                    color: "#fff",
                  }}
                />
              </ListItemIcon>
              <ListItemText
                sx={{
                  color: "#fff",
                }}
                primary="About"
              />
            </ListItemButton>
            <ListItemButton
              sx={{
                backgroundColor: key === "marketplace" ? "#fc9b2b" : "#0d1321",
                marginInline: "15px",
                borderRadius: "10px",
                "&:hover": {
                  backgroundColor: "#fc9b2b",
                },
              }}
              onClick={() => setKey("marketplace")}
            >
              <ListItemIcon>
                <MoneyIcon
                  sx={{
                    color: "#fff",
                  }}
                />
              </ListItemIcon>
              <ListItemText
                sx={{
                  color: "#fff",
                }}
                primary="Marketplace"
              />
            </ListItemButton>
            <ListItemButton
              sx={{
                backgroundColor: key === "pools" ? "#fc9b2b" : "#0d1321",
                marginInline: "15px",
                borderRadius: "10px",
                "&:hover": {
                  backgroundColor: "#fc9b2b",
                },
              }}
              onClick={() => setKey("pools")}
            >
              <ListItemIcon>
                <MoneyIcon
                  sx={{
                    color: "#fff",
                  }}
                />
              </ListItemIcon>
              <ListItemText
                sx={{
                  color: "#fff",
                }}
                primary="Pools"
              />
            </ListItemButton>
            <ListItemButton
              sx={{
                backgroundColor: key === "inscribe" ? "#fc9b2b" : "#0d1321",
                marginInline: "15px",
                borderRadius: "10px",
                "&:hover": {
                  backgroundColor: "#fc9b2b",
                },
              }}
              onClick={() => setKey("inscribe")}
            >
              <ListItemIcon>
                <MoneyIcon
                  sx={{
                    color: "#fff",
                  }}
                />
              </ListItemIcon>
              <ListItemText
                sx={{
                  color: "#fff",
                }}
                primary="Inscribe"
              />
            </ListItemButton>
            <ListItemButton
              sx={{
                backgroundColor: key === "wallet" ? "#fc9b2b" : "#0d1321",
                marginInline: "15px",
                borderRadius: "10px",
                "&:hover": {
                  backgroundColor: "#fc9b2b",
                },
              }}
              onClick={() => setKey("wallet")}
            >
              <ListItemIcon>
                <MoneyIcon
                  sx={{
                    color: "#fff",
                  }}
                />
              </ListItemIcon>
              <ListItemText
                sx={{
                  color: "#fff",
                }}
                primary="Wallet"
              />
            </ListItemButton>
          </List>
        </Drawer>
        <Box
          component="main"
          sx={{
            backgroundColor: (theme) =>
              theme.palette.mode === "light" ? "#0d1321" : "#0d1321",
            flexGrow: 1,
            height: "100vh",
            overflow: "auto",
          }}
        >
          <Toolbar />
          <Container
            // maxWidth="lg"
            sx={{ backgroundColor: "#0d1321" }}
          >
            <Grid container spacing={3}>
              {/* Chart */}
              <Grid item xs={12} md={12} lg={12}>
                <Paper
                  sx={{
                    display: "flex",
                    flexDirection: "column",
                    //height: 240,
                  }}
                >
                  {key === "home" ? (
                    <HomeBody balance={Balance} price={Price} />
                  ) : key === "swap" ? (
                    <SwapBody />
                  ) : key === "about" ? (
                    <h1>ABOUT</h1>
                  ) : key === "marketplace" ? (
                    <h1>COMING SOON</h1>
                  ) : key === "pools" ? (
                    <h1>COMING SOON</h1>
                  ) : key === "inscribe" ? (
                    <h1>COMING SOON</h1>
                  ) : key === "wallet" ? (
                    <h1>COMING SOON</h1>
                  ) : null}
                </Paper>
              </Grid>
            </Grid>
          </Container>
        </Box>
      </Box>
    </ThemeProvider>
  );
}

export default function Dashboard() {
  return <DashboardContent />;
}
