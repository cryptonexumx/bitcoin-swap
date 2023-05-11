import {
  Avatar,
  Box,
  Container,
  Stack,
  Grid,
  Typography,
  Divider,
  Link,
} from "@mui/material";
import { experimentalStyled as styled } from "@mui/material/styles";
import Paper from "@mui/material/Paper";
import React, { useEffect } from "react";
import actions from "../../store/actions";
import { useSelector } from "react-redux";

const Item = styled(Paper)(({ theme, color }) => ({
  backgroundColor: "#161e2e",
  padding: theme.spacing(2),
  //textAlign: "center",
  color: color,
  marginInline: 10,
  marginBlock: 10,
  borderRadius: 20,
}));

function HomeBody({ balance, price }) {
  const Inscriptions = useSelector((state) => state.HomeReducer.Inscriptions);

  useEffect(() => {
    actions.getInscriptions();
  }, []);

  return (
    <Box>
      <Stack
        flexDirection={"row"}
        sx={{
          backgroundColor: "#0d1321",
        }}
      >
        <Stack
          flex={1}
          alignItems={"center"}
          sx={{
            margin: 1,
            backgroundColor: "#0d1321",
          }}
        >
          <Box
            sx={{
              width: "100%",
              height: "100%",
              backgroundColor: "#fc9b2b",
              paddingInline: 3,
              paddingBottom: 3,
              borderRadius: 4,
            }}
          >
            <p>Bitcoin</p>
            <svg
              width="110"
              height="150"
              viewBox="0 0 112 155"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M103.512 47.7063C101.884 30.7796 87.2728 25.107 68.8091 23.4891V0H54.5215V22.8622C50.7701 22.8622 46.9277 22.933 43.1157 23.0139V0H28.828L28.8179 23.4689C25.7238 23.5296 22.6802 23.5903 19.7175 23.5903V23.5195L0.0101153 23.5094V38.7778C0.0101153 38.7778 10.5666 38.5756 10.3846 38.7677C16.1785 38.7677 18.0592 42.1247 18.6053 45.0267V71.7819C19.0097 71.7819 19.5254 71.8021 20.1119 71.883H18.6053L18.5951 109.367C18.3424 111.187 17.2705 114.089 13.2259 114.099C13.4079 114.261 2.84135 114.099 2.84135 114.099L0 131.167H18.6053C22.0634 131.167 25.471 131.228 28.8078 131.248L28.8179 155H43.0954V131.501C47.0086 131.582 50.8004 131.612 54.5114 131.612L54.5013 155H68.7889V131.299C92.8139 129.923 109.65 123.867 111.733 101.298C113.421 83.1271 104.877 75.0075 91.2365 71.7314C99.5381 67.525 104.725 60.093 103.512 47.7063ZM83.5113 98.4865C83.5113 116.232 53.1261 114.22 43.4291 114.22V82.7428C53.1261 82.7631 83.5113 79.9824 83.5113 98.4865ZM76.8579 54.0867C76.8579 70.2348 51.4981 68.344 43.4291 68.3541V39.8193C51.5082 39.8193 76.868 37.251 76.8579 54.0867Z"
                fill="#FEFAF1"
              />
            </svg>
            <Stack
              sx={{
                marginTop: 3,
              }}
              flexDirection={"row"}
              justifyContent={"space-between"}
            >
              <Box>{price?.last_trade_price || "0.000"} USD</Box>
              <Box>
                {price
                  ? (
                      ((price?.last_trade_price - price?.price_24h) /
                        price?.last_trade_price) *
                      100
                    ).toFixed(2)
                  : "0.00"}{" "}
                %
              </Box>
            </Stack>
          </Box>
        </Stack>
        <Stack
          flex={1}
          sx={{
            margin: 1,
            backgroundColor: "#0d1321",
          }}
        >
          <Box
            sx={{
              width: "100%",
              height: "100%",
              backgroundColor: "#22bc89",
              paddingInline: 3,
              paddingBottom: 3,
              borderRadius: 4,
            }}
          >
            <p>Tether</p>
            <svg
              width="169"
              height="155"
              viewBox="0 0 169 155"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M101.243 52.0646V31.4236H148.418V0H19.9867V31.4236H67.1614V52.0646C28.844 53.836 0 61.4224 0 70.5106C0 79.5988 28.844 87.1851 67.1614 88.9565V155H101.281V88.9565C139.56 87.1851 168.327 79.5988 168.327 70.5106C168.289 61.4224 139.522 53.836 101.243 52.0646ZM101.281 83.3727C100.319 83.4112 95.3893 83.7193 84.3754 83.7193C75.5566 83.7193 69.395 83.4882 67.2 83.3727V83.4112C33.3497 81.9093 8.04859 76.0174 8.04859 68.9702C8.04859 61.923 33.3112 56.0311 67.2 54.5292V77.4808C69.4335 77.6348 75.7492 78.0199 84.5295 78.0199C95.0427 78.0199 100.319 77.5963 101.32 77.4808V54.4522C135.132 55.954 160.356 61.846 160.356 68.8932C160.279 75.9404 135.055 81.8323 101.281 83.3727Z"
                fill="white"
              />
            </svg>
            {/* <Box>0.000000 BTC</Box> */}
            <Stack
              sx={{
                marginTop: 3,
              }}
              flexDirection={"row"}
              justifyContent={"space-between"}
            >
              <Box>12345.67 USD</Box>
              <Box>20 %</Box>
            </Stack>
          </Box>
        </Stack>
        <Stack
          sx={{
            flex: 1,
            margin: 1,
            backgroundColor: "#161e2e",
            alignItems: "center",
            justifyContent: "center",
            borderRadius: 4,
          }}
        >
          <Avatar
            size="lg"
            src={require("../../assets/images/Bitcoin.png")}
            sx={{
              width: 80,
              height: 80,
            }}
          />
          <Box
            component={"h5"}
            sx={{
              color: "#fff",
              padding: 0,
              margin: 0,
              marginTop: 3,
            }}
          >
            My Balance
          </Box>
          <Box
            component={"h2"}
            sx={{
              color: "#fff",
              padding: 0,
              margin: 0,
              marginTop: 0.2,
            }}
          >
            {balance === "" ? "0.0000" : balance} BTC
          </Box>
          <Box
            component={"p"}
            sx={{
              color: "#fff",
              padding: 0,
              margin: 0,
              marginTop: 0.2,
            }}
          >
            {balance === ""
              ? "0.0000"
              : (price?.last_trade_price * parseFloat(balance)).toFixed(4)}{" "}
            USD
          </Box>
        </Stack>
      </Stack>
      <Box
        sx={{
          backgroundColor: "#0d1321",
          color: "#fff",
          padding: 2,
        }}
      >
        <Typography
          sx={{
            fontSize: 32,
            fontWeight: "bold",
            textAlign: "center",
          }}
        >
          Latest Inscriptions
        </Typography>
      </Box>
      {Inscriptions && (
        <Grid
          container
          sx={{
            backgroundColor: "#0d1321",
          }}
        >
          {Inscriptions?.results.map((item, index) => (
            <Grid
              xs={2}
              sm={4}
              md={4}
              key={index}
              sx={{
                backgroundColor: "#0d1321",
              }}
            >
              <Item color="#fff">
                <Box
                  component={"h3"}
                  sx={{
                    color: "#fc9b2b",
                    marginBottom: 0,
                  }}
                >
                  Inscription #{item.number}
                </Box>
                <Stack
                  flexDirection={"row"}
                  justifyContent={"space-between"}
                  sx={{}}
                >
                  <Box
                    component={"p"}
                    sx={{
                      color: "#667085",
                      marginBlock: 0,
                    }}
                  >
                    {item.content_type}
                  </Box>
                  <Box
                    component={"p"}
                    sx={{
                      color: "#667085",
                      marginBlock: 0,
                    }}
                  >
                    {new Date(item.timestamp).toLocaleString()}
                  </Box>
                </Stack>
                <Typography
                  sx={{
                    color: "#fc9b2b",
                    marginTop: 3,
                    textAlign: 'center',
                    fontWeight: 'bold'
                  }}
                >
                  OWNER
                </Typography>
                <Box
                  component={"h5"}
                  sx={{
                    color: "#fff",
                    marginBottom: 0,
                    //border: 1,
                    textAlign: "center",
                    backgroundColor: "#0d1321",
                    padding: 2,
                    borderRadius: 10,
                  }}
                >
                  {item.address.slice(0, 31) +
                    "\n" +
                    item.address.slice(31, item.length)}
                </Box>
                <Stack alignItems={'center'} sx={{
                  marginTop: 2,
                  marginBottom: 2.5
                }}>
                <Link href={`https://ordiscan.com/inscription/${item.number}`} target="_blank" >View More</Link>
                </Stack>
              </Item>
            </Grid>
          ))}
        </Grid>
      )}
    </Box>
  );
}

export default HomeBody;
