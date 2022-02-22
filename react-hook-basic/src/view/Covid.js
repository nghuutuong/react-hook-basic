import moment from 'moment';
import useFetch from '../customize/fetch';
const Covid = () => {
    // const today = new Date(new Date().setHours(0,0,0,0));
    const today = moment().startOf('days');
    const priorDate  = moment().subtract(30, 'days');
    const {data: dataCovid, isError, isLoading} = 
    useFetch(`https://api.covid19api.com/country/vietnam?from=${priorDate.toISOString()}&to=${today.toISOString()}`, true)
    return (
        <table>
        <thead>
            <tr>
                <th>Date</th>
                <th>Confirmed</th>
                <th>Active</th>
                <th>Deaths</th>
                <th>Recovered</th>
            </tr>
        </thead>
        <tbody>
        {isError === false && isLoading === false && dataCovid && dataCovid.length > 0 && dataCovid.map((item, index) => {
            return(
            <tr key = {item.ID}>
                <td>{item.Date}</td>
                <td>{item.Confirmed}</td>
                <td>{item.Active}</td>
                <td>{item.Deaths}</td>
                <td>{item.Recovered}</td>
            </tr>
            )
            })
        }
        {isLoading === true && <tr>Loading.....</tr> }
        {isError === true && <tr>Something Wrong.....</tr> }
        </tbody>
        </table>
    )
}
export default Covid;