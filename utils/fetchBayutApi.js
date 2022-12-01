import axios from "axios";

export const baseUrl = 'https://bayut.p.rapidapi.com' 
const options = {
  method: 'GET',
  url: baseUrl,
  headers: {
    'X-RapidAPI-Key': '4d6d0fe8camsha41c061c6d44a9bp14e960jsn20e2de25bebf',
    'X-RapidAPI-Host': 'bayut.p.rapidapi.com'
  }
};


export const fetchBayutApi = async (url) => {

    const {data} = await axios.get((`${baseUrl}${url}`), options)

    return data

}
