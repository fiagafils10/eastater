import axios from "axios";

export const baseUrl = 'https://bayut.p.rapidapi.com' 
const options = {
  method: 'GET',
  url: baseUrl,
  headers: {
    // 'X-RapidAPI-Key': '',
    'X-RapidAPI-Host': 'bayut.p.rapidapi.com'
  }
};


export const fetchBayutApi = async (url) => {

    const {data} = await axios.get((`${baseUrl}${url}`), options)

    return data

}
