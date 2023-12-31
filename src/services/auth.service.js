import axios from "axios";
const apiUrl = import.meta.env.VITE_API_AUTH;

export const registerAuthService = async (info) => {
    try {
        const url = `${apiUrl}register`
        const { data } = await axios.post(url, {
            //body: JSON.stringify(info)
            ...info
        }, {
            headers: {
                "Content-Type": "application/json",
            }

        })

        return data


    } catch (error) {
        throw error.response.data.message
    }
}

export const loginAuthService = async (info) => {
    try {
        const url = `${apiUrl}login`
        const { data } = await axios.post(url,
            {
                //body : JSON.stringify(info)
                ...info
            }, {
            headers: {
                "Content-Type": "application/json",
            }
        }
        )
        //console.log(data);
        return data


    } catch (error) {
        //console.log(error);
        throw error.response.data.message
    }
}

export const profileAuthService = async (token) => {
    try {
        const url = `${apiUrl}profile`
        const { data } = await axios.get(url,{
            headers:{
                authorization : token
            }
        })
        // console.log(data);
        return data
    } catch (error) {
        throw error.response.data.message
    }
}

export const toggleFavoriteDrinkUser = async (drinkPayload,token) => {
    console.log('drinkPayload', drinkPayload)
    try {
        const url = `${apiUrl}favorites`
        const { data } = await axios.post(url, {
            //body: JSON.stringify(info)
            ...drinkPayload
        }, {
            headers: {
                authorization : token,
            }

        })
        return data
    } catch (error) {
        throw error.response.data.message
    }
}