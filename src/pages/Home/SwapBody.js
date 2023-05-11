import {
  Box,
  Button,
  Container,
  Grid,
  Stack,
  TextField,
  IconButton,
  Modal,
  Typography,
  InputAdornment,
} from "@mui/material";
import React, { useState } from "react";
import { useSelector } from "react-redux";

import SearchIcon from "@mui/icons-material/Search";
import ImportExportIcon from "@mui/icons-material/ImportExport";

import actions from "../../store/actions";

function SwapBody() {
  const [Key, setKey] = useState("swap-1");
  const [OpenModal, setOpenModal] = useState(false);
  const [SearchResult1, setSearchResult1] = useState("");
  const [SearchResult2, setSearchResult2] = useState("");
  const [ContractAddress, setContractAddress] = useState("");

  const SearchData = useSelector((state) => state.HomeReducer.SearchData);

  return (
    <Grid
      container
      spacing={0}
      direction="column"
      alignItems="center"
      style={{
        minHeight: "100vh",
        backgroundColor: "#0d1321",
        paddingTop: 150,
      }}
    >
      <Stack
        sx={{
          borderWidth: 1,
          width: "50%",
          backgroundColor: "#161e2e",
          padding: "50px",
          borderRadius: 5,
        }}
      >
        <Box
          component={"h3"}
          sx={{
            margin: 0,
            marginBottom: 3,
            color: "#fc9b2b",
          }}
        >
          SWAP
        </Box>
        <Stack
          flexDirection={"row"}
          alignItems={"center"}
          justifyContent={'center'}
          sx={{
            backgroundColor: "#161e2e",
          }}
        >
          <TextField
            placeholder="0"
            id="swap-1"
            type="number"
            sx={{
              backgroundColor: "#fff",
              width: "80%",
              height: "100%",
              borderTopRightRadius: 0,
              borderBottomRightRadius: 0,
            }}
            inputProps={{ inputMode: "numeric", pattern: "[0-9]*" }}
            onChange={(e) => {
              console.log(e.nativeEvent.target.value);
            }}
            required
          />
          <Button
            sx={{
              padding: 0,
              paddingBlock: 0.5,
              color: "#fff",
              backgroundColor: "#fc9b2b",
              borderTopLeftRadius: 0,
              borderBottomLeftRadius: 0,
              "&:hover": {
                backgroundColor: "#fc9b2b",
              },
            }}
            onClick={() => {
              setOpenModal(true);
              setKey("swap-1");
            }}
          >
            {Key === "swap-1" && SearchResult1 === "" ? (
              "SELECT CRYPTO"
            ) : (
              <Typography
                sx={{
                  paddingBlock: 1.5,
                }}
              >
                {SearchResult1}
              </Typography>
            )}
          </Button>
        </Stack>
        <Stack>
          <IconButton
            color="none"
            aria-label="upload picture"
            component="label"
            sx={{
              marginBlock: 1,
            }}
          >
            <ImportExportIcon
              sx={{
                color: "#fff",
              }}
            />
          </IconButton>
        </Stack>
        <Stack
          flexDirection={"row"}
          alignItems={"center"}
          justifyContent={'center'}
          sx={{
            backgroundColor: "#161e2e",
          }}
        >
          <TextField
            placeholder="0"
            id="swap-2"
            type="number"
            sx={{
              backgroundColor: "#fff",
              width: "80%",
              height: "100%",
              borderTopRightRadius: 0,
              borderBottomRightRadius: 0,
            }}
            inputProps={{ inputMode: "numeric", pattern: "[0-9]*" }}
            onChange={(e) => {
              console.log(e.nativeEvent.target.value);
            }}
            required
          />
          <Button
            sx={{
              padding: 0,
              paddingBlock: 0.5,
              color: "#fff",
              backgroundColor: "#fc9b2b",
              borderTopLeftRadius: 0,
              borderBottomLeftRadius: 0,
              "&:hover": {
                backgroundColor: "#fc9b2b",
              },
            }}
            onClick={() => {
              setOpenModal(true);
              setKey("swap-2");
            }}
          >
            {SearchResult2 === "" ? (
              "SELECT CRYPTO"
            ) : (
              <Typography
                sx={{
                  paddingBlock: 1.5,
                }}
              >
                {SearchResult2}
              </Typography>
            )}
          </Button>
        </Stack>
        <Button
          sx={{
            padding: 0,
            paddingBlock: 2,
            marginTop: 3,
            color: "#fff",
            backgroundColor: "#fc9b2b",
            "&:hover": {
              backgroundColor: "#fc9b2b",
            },
          }}
        >
          SWAP
        </Button>
      </Stack>
      <Modal
        open={OpenModal}
        onClose={() => {
          setOpenModal(false);
        }}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box
          sx={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            width: 400,
            backgroundColor: "#fff",
            boxShadow: 24,
            p: 5,
            borderRadius: 2,
          }}
        >
          <Stack
            flexDirection={"row"}
            alignItems={"center"}
            sx={
              {
                //backgroundColor: 'yellow'
              }
            }
          >
            <TextField
              placeholder="Search By Inscription"
              required
              id="outlined"
              label="Search By Inscription"
              defaultValue=""
              sx={{
                width: "100%",
              }}
              onChange={(e) => {
                setContractAddress(e.nativeEvent.target.value);
              }}
            />
            <Button
              sx={{
                backgroundColor: "#d9d7d7",
                padding: 2,
              }}
              onClick={() => {
                console.log(ContractAddress);
                actions.Search(ContractAddress);
              }}
            >
              <SearchIcon
                sx={{
                  color: "#000",
                }}
              />
            </Button>
          </Stack>
          {SearchData ? (
            SearchData?.op === "deploy" ? (
              <Stack
                sx={{
                  marginTop: 2,
                  alignItems: "center",
                }}
              >
                <Button
                  sx={{
                    border: 1,
                    width: "30%",
                    textAlign: "center",
                    padding: 0.6,
                    borderRadius: 10,
                    boxShadow: 0,
                  }}
                  variant="contained"
                  onClick={() => {
                    if (Key === "swap-1") {
                      setSearchResult1(SearchData?.tick);
                    } else if (Key === "swap-2") {
                      setSearchResult2(SearchData?.tick);
                    }
                    setOpenModal(false);
                  }}
                >
                  <Typography>{SearchData?.tick}</Typography>
                </Button>
              </Stack>
            ) : (
              <Typography
                sx={{
                  textAlign: "center",
                  marginTop: 2,
                  color: "red",
                }}
              >
                Token Not Found
              </Typography>
            )
          ) : (
            <Typography
              sx={{
                textAlign: "center",
                marginTop: 2,
                color: "red",
              }}
            >
              {SearchData}
            </Typography>
          )}
        </Box>
      </Modal>
    </Grid>
  );
}

export default SwapBody;
