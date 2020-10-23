import { Card, CardActions, CardContent, CardHeader, Chip, IconButton, makeStyles, Typography } from '@material-ui/core'
import React from 'react'
import ContactPhoneIcon from '@material-ui/icons/ContactPhone';
import CalendarTodayIcon from '@material-ui/icons/CalendarToday';
import DescriptionIcon from '@material-ui/icons/Description';
import FlareIcon from '@material-ui/icons/Flare';
import TwitterIcon from '@material-ui/icons/Twitter';
import { Delete } from '@material-ui/icons';
import { connect } from 'react-redux';
import { onDelete } from '../../actions/searchActions';

const useStyles = makeStyles({
    root: {
      height:300,
      margin: '2% 0%',
      backgroundColor:'#BAD1E4'
    },
    bullet: {
      display: 'inline-block',
      margin: '0 2px',
      transform: 'scale(0.8)',
    },
    title: {
      fontSize: 14,
    },
    pos: {
      marginBottom: 12,
    },
})
const ContentItem = ({cal, con, drop, slk, twt, onDelete, searchInfo:{ deleted }}) => {
    const classes = useStyles()

    return (
        <div>
        <Card className={classes.root} variant="outlined" >
            
            {cal && <Typography component='div'>
                <CardHeader
                    avatar={
                        <IconButton aria-label="icon">
                            <CalendarTodayIcon/>
                        </IconButton>
                    }
                    action={
                        <IconButton onClick={() => onDelete(cal)} aria-label="delete">
                            <Delete  />
                        </IconButton>
                    }
                    // subheader="September 14, 2016"
                />
                <CardContent>
                    <Typography className={classes.title} color="black" gutterBottom>
                        <b>{cal.title}</b>
                    </Typography>
                    <Typography className={classes.pos} color="textSecondary">
                        {cal.invitees}
                    </Typography>
                    <Typography variant="body2" component="p">
                        {cal.date}
                    </Typography>
                </CardContent></Typography>}
            {con && <Typography component='div'>
                <CardHeader
                    avatar={
                        <IconButton aria-label="icon">
                            <ContactPhoneIcon/>
                        </IconButton>
                    }
                    action={
                        <IconButton onClick={() => onDelete(con)} aria-label="delete">
                            <Delete />
                        </IconButton>
                    }
                    // subheader="September 14, 2016"
                />
                <CardContent>
                
                <Typography className={classes.title} color="black" gutterBottom>
                    <b>{con.name}</b>
                </Typography>
                <Typography className={classes.pos} color="textSecondary">
                    {con.company}
                </Typography>
                <Typography style={{margin: '1% 0%'}}>
                {con.emails.map((email) => (
                    <Chip style={{margin: '0% 1%'}} variant="outlined" size="small" label={email}/>
                ))}
                </Typography>
                <Typography style={{margin: '1% 0%'}}>
                {con.phones.map((phone) => (
                    <Chip style={{margin: '0% 1%'}} variant="outlined" size="small" label={phone}/>
                ))}
                </Typography>
                <Typography variant="body2" component="p">
                    {con.last_contact}
                </Typography>
            </CardContent>
            </Typography>}
            {drop && <Typography component='div'>
                <CardHeader
                    avatar={
                        <IconButton aria-label="icon">
                            <DescriptionIcon/>
                        </IconButton>
                    }
                    action={
                        <IconButton onClick={() => onDelete(drop)} aria-label="delete">
                            <Delete />
                        </IconButton>
                    }
                    // subheader="September 14, 2016"
                />
            <CardContent>
                <Typography className={classes.title} color="black" gutterBottom>
                    <b>{drop.title}</b> 
                </Typography>
                <Typography className={classes.pos} color="textSecondary">
                    {drop.path}
                </Typography>
                <Typography variant="body2" component="p">
                    {drop.created}
                </Typography>
            </CardContent></Typography>}
            {slk && <Typography component='div'>
                <CardHeader
                    avatar={
                        <IconButton aria-label="icon">
                            <FlareIcon/>
                        </IconButton>
                    }
                    action={
                        <IconButton onClick={() => onDelete(slk)} aria-label="delete">
                            <Delete />
                        </IconButton>
                    }
                    // subheader="September 14, 2016"
                />
            <CardContent>
                <Typography className={classes.title} color="black" gutterBottom>
                    <b> {slk.channel}</b>
                </Typography>
                <Typography className={classes.pos} color="textSecondary">
                    {slk.author}
                </Typography>
                <Typography className={classes.pos} color="textSecondary">
                    {slk.message}
                </Typography>
                <Typography variant="body2" component="p">
                    {slk.timestamp}
                </Typography>
            </CardContent></Typography> }
            {twt && <Typography component='div'>
                <CardHeader
                    avatar={
                        <IconButton aria-label="icon">
                            <TwitterIcon/>
                        </IconButton>
                    }
                    action={
                        <IconButton onClick={() => onDelete(twt)} aria-label="delete">
                            <Delete />
                        </IconButton>
                    }
                    // subheader="September 14, 2016"
                />
            <CardContent>
                <Typography className={classes.title} color="black" gutterBottom>
                    <b> {twt.user}</b>
                </Typography>
                <Typography className={classes.pos} color="textSecondary">
                    {twt.message}
                </Typography>
                <Typography variant="body2" component="p">
                    {twt.timestamp}
                </Typography>
            </CardContent></Typography> }
        </Card>
        
        </div>
    )
}

const mapStateToProps = state => ({
    searchInfo: state.searchInfo
})

export default connect(mapStateToProps, { onDelete }) (ContentItem)
