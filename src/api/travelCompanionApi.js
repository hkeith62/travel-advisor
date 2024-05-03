/**
    Title: Google maps API
    Author: Keith Hall
    Date: 05/30/2021
    Description: Google maps API for portfolio website.
*/
/* eslint-disable consistent-return */
import axios from 'axios';

   export const getPlacesData = async (type, sw, ne) => {
        try {
            const { data: { data } } = await axios.get(`https://travel-advisor.p.rapidapi.com/${type}/list-in-boundary`, {
            params: {
              bl_latitude: sw.lat,
              tr_latitude: ne.lat,
              bl_longitude: sw.lng,
              tr_longitude: ne.lng,
            },
            /* Google maps API */
            headers: {
              'X-RapidAPI-Key':"692a66377dmsh86d28b071e20563p1c9d2djsn7d5097b67e32" /* Public API key */
              'X-RapidAPI-Host': 'travel-advisor.p.rapidapi.com',
            }
          });
            return data;

        }catch (error) {
            console.log('error')
        }
    }
    /* Google maps and weather API */
    export const getWeatherData = async (lat, lng) => {
      try {
        if (lat && lng) {
          const { data } = await axios.get('https://open-weather-map27.p.rapidapi.com/weather', {
            headers: {
              'X-RapidAPI-Key': process.env.REACT_APP_RAPID_API_TRAVEL_API_KEY, 
              'X-RapidAPI-Host': 'open-weather-map27.p.rapidapi.com',
            }
          });
          return data;
        }
      } catch (error) {
        console.log(error);
      }
    };
    
  
