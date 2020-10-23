import React, { useState } from 'react'
import TextField from '@material-ui/core/TextField';
import { Button, Container, Grid } from '@material-ui/core';
import Content from '../content/Content';


const SearchBar = () => {
    const [searchResult, setSearchResult]= useState(null)
    const [showContent, setShowContent] = useState(null)
    const onClick = () =>{
        setShowContent(searchResult)
    }
    return (
        <div>
            <Grid container spacing={1} style={{'marginTop':'8%'}} >
                <Grid item xs={6}>
                    <TextField id="coordinates" fullWidth label="Enter Text" value={searchResult} onChange={(e)=> setSearchResult(e.target.value)} size='small' type="search" variant="outlined"/>
                </Grid>
                <Grid item xs={2}>
                    <Button fullWidth id='get_coordinates' color='primary' onClick={onClick} variant="outlined">Search</Button>
                </Grid>
            </Grid>
           <Content res= {showContent}/>
        </div>
    )
}

export default SearchBar
