import axios from "axios";

const baseURL = process.env.REACT_APP_projects_api_url;

export async function fetchProjects(page=1) {
    const url = `${baseURL}?pagination[page]=${page}`;
    const response = await axios.get(url);
    return response.data.data;
}

export default { fetchProjects };


