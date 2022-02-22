import { useEffect, useState } from "react";
import axios from "axios";
import moment from "moment";

const useFetch = (url, isCovidData) => {
const ourRequest = axios.CancelToken.source()
const [data, setDataCovid] = useState([]);
const [isLoading, setIsLoading] = useState(true);
const [isError, setIsError] = useState(false);
useEffect(()=> {
        
    async function fetchData() {
        try{
            let responsive = await axios.get(url,
                {cancelToken: ourRequest.token})
            let data = responsive && responsive.data ? responsive.data : [];
            if(data && data.length > 0 && isCovidData === true){data.map(item => {
            item.Date = moment(item.Date).format('DD/MM/YYYY')
            return item;
        })}
        setDataCovid(data);
        setIsLoading(false);
        setIsError(true);
    }catch (e){
        setIsError(false)
        setIsLoading(false)
    }
        
}
    fetchData();
    return () => {
        ourRequest.cancel() 
    }
    },[url]);
    return{
        data, isError, isLoading
    }
}
export default useFetch;