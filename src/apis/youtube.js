import axios from 'axios';

const KEY = 'AIzaSyCo6T9QyonjNtq6YUxHpGRywDb7YPQszPs';


export default axios.create({
  baseURL: "https://www.googleapis.com/youtube/v3",
  params: {
    part: "snippet",
    maxResults: 5,
    key: KEY
  }
});