import axios from 'axios'

const instance = axios.create({
    baseURL: 'https://the-one-api.herokuapp.com/v1'
})

instance.defaults.headers.common = {'Authorization': `Bearer ${process.env.REACT_APP_LOTR_API_KEY}`}

export default instance