import axios from 'axios';
export const getUsers = async() => {

    return await axios.get(`https://localhost:8000/users`)
        .then(res => {
            if (res.data) {
                return res.data

            } else {
                return false
            }
        })
        .catch(err => {
            console.log(err)
            return false;
        });
}