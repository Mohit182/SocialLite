import axios from "axios";

const url = "https://localhost:5001/stories";

export const fetchStories = async () => axios.get(url);