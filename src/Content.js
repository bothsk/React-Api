import { useState, useEffect } from "react";
import { Grid, Container } from "@material-ui/core";
import Itemcard from "./ItemCard";
import axios from "axios";
import { makeStyles } from "@material-ui/core/styles";
import { setAccessToken } from "./auth";

let accessToken;

const useStyles = makeStyles(() => ({
  top: {
    marginTop: "0.25rem",
  },
}));

// xs, sm, md, lg, and xl
const Content = () => {
  const classes = useStyles();

  const [items, setItems] = useState([]);

  const fetchToken = async () => {
    try {
      accessToken = await axios.get("http://localhost:4000/refresh", {
        withCredentials: true,
        credentials: "include",
      });
      accessToken = accessToken.data.status.token;
      setAccessToken(accessToken);
      return true;
    } catch {
      console.log("Need to redirect to login");
    }
  };

  const fetchData = async () => {
    let itemsData;
    console.log({ test: accessToken });

    try {
      itemsData = await axios.get("http://localhost:4000/api/shop", {
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      });
      const items = itemsData.data;
      setItems(items);
    } catch (e) {
      console.log({ message: "error after get shop" });
    }
  };

  const all = async () => {
    await fetchToken();
    await fetchData();
  };

  useEffect(() => {
    all();
  }, []);

  // eslint-disable-line react-hooks/exhaustive-deps

  return (
    <Container maxWidth="lg">
      <Grid container className={classes.top} spacing={4}>
        {items.map((item) => (
          <Grid item xs={12} sm={6} md={4} key={item._id}>
            <Itemcard
              id={item._id}
              name={item.name}
              des={item.des}
              price={item.price}
            />
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default Content;
