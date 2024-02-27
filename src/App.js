import { useEffect, useState } from "react";
import axios from "axios";
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';

function App() {

  const [kavy, nastavKav] = useState([]);
  const [selectedItem, setSelectedItem] = useState("");

  useEffect(() => {
    axios.get("https://api.sampleapis.com/coffee/hot")
      .then(odpoved => {
        nastavKav(odpoved.data)
      })
  }, [])
  return (
    <>
    <img style={{ width: "50px"}} src={selectedItem.image}></img><br/>
      {selectedItem.title} <br/>
      {selectedItem.description} <br/>
      {selectedItem.ingredients}
    

      <Grid container spacing={2}>
        {
          kavy.map(kava => (
            <Grid item xs={2}>
              <Paper onClick={() => setSelectedItem(kava)}>
                <img style={{ width: "50px", padding: "50px" }} src={kava.image}></img>{kava.title}

              </Paper >
            </Grid>
          ))
        }</Grid>
    </>
  );
}

export default App;
