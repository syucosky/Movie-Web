import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { getMovies } from '../store/slices/movie';
import { Card } from './card/Card';
import './CardList.css'
import Container from '@mui/material/Container';
import { Box, Grid } from '@mui/material';
const CardList = () => {

    const dispatch = useDispatch();
    const {isLoading, movies, page} = useSelector(state => state.movie);

    useEffect(() => {
        dispatch( getMovies() );
    }, []);

  return (
    <>
    <h1>Movies</h1>
    <Grid container justifyContent="center" spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
          {
          movies.map( movie => (
                <Card key={movie.id} title={movie.title} description={movie.overview}posterPath={movie.poster_path}/>   
            ))
          }
    </Grid> 
    </>
  )
}

export default CardList