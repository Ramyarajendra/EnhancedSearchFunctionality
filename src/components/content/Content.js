import { Grid } from '@material-ui/core';
import React, { useEffect } from 'react'
import { connect } from 'react-redux';
import { getSearchArray } from '../../actions/searchActions';
import ContentItem from './ContentItem';

const Content = ({res, getSearchArray, searchInfo: {searchArr, deleted}}) => {
    useEffect(() => {
        if(res) {
            getSearchArray(res.toLowerCase())
        }
    },[res])
    console.log('searchInfo',searchArr)
    return (
        // <div style={{margin: '2% 0%'}}>
        <Grid container spacing={2}>
            {searchArr.calendar && searchArr.calendar.map( cal => (
                !deleted.includes(cal.id) && <Grid item xs={6}><ContentItem key={cal.id} cal={cal}/></Grid>
            ))}
            {searchArr.contacts && searchArr.contacts.map( con => (
                !deleted.includes(con.id) && <Grid item xs={6}><ContentItem key={con.id} con={con}/></Grid>
            ))}
            {searchArr.dropbox && searchArr.dropbox.map( drop => (
                !deleted.includes(drop.id) && <Grid item xs={6}><ContentItem key={drop.id} drop={drop}/></Grid>
            ))}
            {searchArr.slack && searchArr.slack.map( slk => (
                !deleted.includes(slk.id) && <Grid item xs={6}><ContentItem key={slk.id} slk={slk}/></Grid>
            ))}
            {searchArr.tweet && searchArr.tweet.map( twt => (
                !deleted.includes(twt.id) && <Grid item xs={6}><ContentItem key={twt.id} twt={twt}/></Grid>
            ))}
        </Grid>
        // </div>
    )
}

const mapStateToProps = state => ({
    searchInfo: state.searchInfo
})
export default connect(mapStateToProps, { getSearchArray })(Content)
