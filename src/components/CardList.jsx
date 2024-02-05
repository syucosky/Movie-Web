import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getMovies} from "../store/slices/movie";
import { Card } from "./card/Card";
import "./CardList.css";
import { Box, Button, Grid, Modal, Typography } from "@mui/material";


const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: '80%', 
  maxWidth: 400,
  bgcolor: 'background.paper',
  boxShadow: 24,
  p: 2,
};


const CardList = () => {

  const dispatch = useDispatch();
  
  useEffect(() => {
    dispatch(getMovies());
  }, []);

  const {movies, page } = useSelector((state) => state.movie);
  const [open, setOpen] = useState(false);
  const [selectedBoxId, setSelectedBoxId] = useState([{}]);


  const handleOpen = (boxId) => {
    setOpen(true);
    const movie = movies.find(movie => movie.id.toString() === boxId.toString());
    if (movie) {
      setSelectedBoxId(movie);
    } else {
      setSelectedBoxId({
        title: "No title",
        overview: "No overview",
      });
    }
  };
  const handleClose = () => {
    setOpen(false);
    setSelectedBoxId({title: "No title",
    overview: "No overview",});
  };

  return (
    <>
      <h1>Peliculas</h1>
      <Grid
        container
        justifyContent="center"
        spacing={{ xs: 1, md: 2 }}
        columns={{ xs: 4, sm: 8, md: 12 }}
      >
        {movies.map((movie) => (
          
          <Button key={movie.id} onClick={(e) => {
            handleOpen(e.currentTarget.dataset.buttonKey
              );
          }}
          data-button-key={movie.id}>
            <Card key={movie.id} movie={movie} />
          </Button>
        ))}
        <Button onClick={() => dispatch(getMovies(page + 1))}>Cargar más</Button>
      </Grid>
      <div>
        <Modal
          open={open}
          onClose={handleClose}
          aria-labelledby="responsive-modal-title"
          aria-describedby="responsive-modal-description"
        >
          <Box sx={style}>
            <Typography id="responsive-modal-title" variant="h6" component="h2">
              {selectedBoxId.title}
            </Typography>
            
            <Typography id="responsive-modal-description" sx={{ mt: 2 }}>
              {selectedBoxId.overview}
            </Typography>
          </Box>
        </Modal>
      </div>
    </>
  );
};
export default CardList;
