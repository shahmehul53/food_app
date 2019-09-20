import axios from 'axios';

export default axios.create({
    baseURL: 'https://api.yelp.com/v3/businesses',
    headers: {
        Authorization: 'Bearer 9AaREnw9cn8e-I9trizG33ATVRpNDlmsJDnqM9Yt940oJv8OjbYnVeOvfbyfX-pBHQpYLvhON4M_O9vemve6Ogbu3V257zMNHjPcE2Jpcfh_B_0fv-ZZzRzzH3WEXXYx'
    }
});

