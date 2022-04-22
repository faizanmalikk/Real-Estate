import axios from "axios";

export const baseUrl = 'https://bayut.p.rapidapi.com'

export const fetchApi = async (url)=>{
    const {data} = await axios.get((url),{
    headers: {
        'X-RapidAPI-Host': 'bayut.p.rapidapi.com',
        'X-RapidAPI-Key': 'd611e7e35fmsh879f313b7dfce02p1482dajsn63ebe2e60020'
      }

})
return data
}