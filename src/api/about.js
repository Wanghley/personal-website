import axios from "axios";

const baseURL = process.env.REACT_APP_cms_base_url;
const token = process.env.REACT_APP_cms_api_token;

const fetchAbout = async () => {
    try {
        const response = await axios.get(`${baseURL}/api/about`, {
        headers: {
            Authorization: `${token}`,
        },
        });
        return response.data;
    }
    catch (error) {
        return;
    }
}

export default fetchAbout;