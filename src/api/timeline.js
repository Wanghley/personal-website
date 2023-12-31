import axios from "axios";

const baseURL = process.env.REACT_APP_timeline_api_url;

export async function fetchTimeline(nextPage = 1, prevData = null) {
  try {
    const url = `${baseURL}?pagination[page]=${nextPage}&sort=Year:asc`;
    const response = await axios.get(url);

    const updatedData = {
        ...response.data,
        data: prevData ? [...prevData.data, ...response.data] : response.data
    };
    // const updatedData = {
    //   ...response.data.data,
    //   data: prevData ? [...prevData.data.data, ...response.data.data] : response.data.data
    // };

    if (response.data.meta.pagination.pageCount <= nextPage+1) { // If there are no more pages, return the data
        return updatedData.data.data;
    } else {
      return fetchTimeline(nextPage + 1, updatedData);
    }
  } catch (e) {
    console.error(e);
    throw e; // Rethrow the error for the caller to handle
  }
}

export default fetchTimeline;