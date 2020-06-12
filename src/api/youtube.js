import axios from 'axios';

const KEY = 'AIzaSyDXx_06sp-E6C72ORs99nc0dDrdiNHfEXs';

export default axios.create({
  baseURL: "https://www.googleapis.com/youtube/v3",
  params: {
    part: 'snippet',
    type: 'video',
    maxResults: 5,
    key: KEY
  }
});
