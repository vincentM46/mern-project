import axios from 'axios';

export async function randomAdvice() {
    const response = await axios.get('https://api.adviceslip.com/advice')
    return response
};
export async function searchAdvice(keywords) {
    const url = `https://api.adviceslip.com/advice/search/${keywords}`
    const { data } = await axios.get(url)
    return data
};