import { Grid, Pagination } from '@mui/material'
import { useEffect, useState } from 'react'
import { getFilterSeries } from '../../helpers'
import { useGenreStore, useGetSeries } from '../../hooks'
import { Navbar } from '../components/Navbar'
import { SerieCard } from '../components/SerieCard'
import { Sidebar } from '../components/Sidebar'

export const SeriesPage = () => {
  
  const [series, setSeries] = useState([]);
  const {id, type} = useGenreStore();

  const seriesLimit =  6;

  const getAllSeries = async (from, limit) => {
    const series = await useGetSeries(from, limit);
    setSeries(series);
  }

  useEffect(() => {
    getAllSeries(0, seriesLimit)
  }, [])

  const filterSeries = async () => {
    if (type !== 'series') return;
    const seriesFiltered = await getFilterSeries(id, 0 , seriesLimit);
    setSeries(seriesFiltered);
  }
  
  useEffect(() => {
    filterSeries()
  }, [id])
  
  const handleChangePages = async (e) => {
    const fromSeriesIndex = (Number(e.target.innerText) - 1) * 6;
    id != '' && type == 'series' ? await getFilterSeries(id, fromSeriesIndex , seriesLimit) 
                                : await getAllSeries(fromSeriesIndex, seriesLimit);
  }
  return (
    <>
      <Navbar/>
      <Grid container sx={{'display': 'flex'}}>
        <Grid container item sm={2} xs={0} sx={{minHeight: '94.2vh'}}>
            <Sidebar/>
        </Grid>
        <Grid container item sm={10} xs={0}>
          {
            series?.map(serie => <SerieCard key ={serie._id} Serie={serie}/>)
          }

          <Grid container item sm={10} className="justify-content-center mt-3">
            <Pagination count={10} variant="outlined" color="secondary" onChange={handleChangePages}/>
          </Grid>

        </Grid>
      </Grid>
    </>
  )
}
