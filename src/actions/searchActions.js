import { 
    GET_SEARCH_ARRAY,
    DELETE_ITEM 
} from './types'
import { calendar } from '../resources/calendar.json'
import { contacts } from '../resources/contacts.json'
import { dropbox } from '../resources/dropbox.json'
import { slack } from '../resources/slack.json'
import { tweet } from '../resources/tweet.json'


export const getSearchArray = (res) => dispatch => {

    const cal = calendar.filter(c => c.matching_terms.includes(res))
    const con = contacts.filter(c => c.matching_terms.includes(res))
    const drop = dropbox.filter(c => c.matching_terms.includes(res))
    const slac = slack.filter(c => c.matching_terms.includes(res))
    const twt = tweet.filter(c => c.matching_terms.includes(res))
    const data = {
        calendar: cal,
        contacts: con,
        dropbox: drop,
        slack: slac,
        tweet: twt
    }

    dispatch({
        type : GET_SEARCH_ARRAY,
        payload : data
    })
} 

export const onDelete = data => dispatch => {
    console.log('data', data)
    dispatch({
        type: DELETE_ITEM,
        payload: data.id
    })
}