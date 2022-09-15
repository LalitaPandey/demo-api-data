import React, { useState, useEffect } from "react";

import AppBar from "@mui/material/AppBar";
import Button from "@mui/material/Button";
// import CameraIcon from "@mui/icons-material/PhotoCamera";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import CssBaseline from "@mui/material/CssBaseline";
import Grid from "@mui/material/Grid";
import Stack from "@mui/material/Stack";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import Link from "@mui/material/Link";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { CardActionArea } from "@mui/material";

const theme = createTheme();

export default function DisplayPage() {
  const [data, setData] = React.useState([]);
  const [secondData, setSecondData] = React.useState([]);

  const apidatas = () => {
    fetch("https://assessment.api.vweb.app/users ")
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        console.log(data, "datas");
        setData(data);
        apidatas2();
      });
  };

  const apidatas2 = () => {
    fetch(" https://assessment.api.vweb.app/products ")
      .then((res) => {
        return res.json();
      })
      .then((secondData) => {
        console.log(secondData, "SecondData");
        setSecondData(secondData);
      });
  };

  const handleApi = () => {
    apidatas();
  };

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />

      <Box
        sx={{
          bgcolor: "grey",
          pt: 8,
          pb: 6,
          boxShadow: "inherit",
        }}
      >
        <Container maxWidth="sm">
          <Typography
            component="h1"
            variant="h2"
            align="center"
            color="text.primary"
            gutterBottom
          >
            Sample App
          </Typography>
          <Typography
            variant="h5"
            align="center"
            color="text.secondary"
            paragraph
          >
            Something short and leading about the collection below—its contents,
            the creator, etc. Make it short and sweet, but not too short so
            folks don&apos;t simply skip over it entirely.
          </Typography>
          <Stack
            sx={{ pt: 4 }}
            direction="row"
            spacing={2}
            justifyContent="center"
          >
            <Button variant="contained" onClick={handleApi}>
              products
            </Button>
            <Button variant="outlined">Secondary action</Button>
          </Stack>
        </Container>
      </Box>
      <Container sx={{ py: 8 }} maxWidth="md">
        <div style={{ display: "grid", justifyContent: "center" }}>
          <Card
            sx={{ width:"100%", backgroundColor: "grey", marginTop: "20px" }}
          >
            <CardActionArea>
              <CardMedia
                // component="img"
                height="140"
                // image="/static/images/cards/contemplative-reptile.jpg"
                alt="green iguana"
              />
              {data.map((sec) => {
                return (
                  <CardContent>
                    <Typography
                      gutterBottom
                      variant="h3"
                      component="div"
                      color="lightgreen"
                    >
                      {sec.user_id} : {sec.name} (products)
                    </Typography>
                    {secondData.map((item) => {
                      return (
                        <Typography variant="body2" color="purple"sx={{width:"800px",fontSize:"30px"}} >
                          {item.user_id}  {item.name}
                         
                        </Typography>
                      );
                    })}
                  </CardContent>
                );
              })}
            </CardActionArea>
          </Card>
        </div>
      </Container>
    </ThemeProvider>
  );
}
