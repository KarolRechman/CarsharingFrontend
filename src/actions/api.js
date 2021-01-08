import axios from "axios";


const httpRequest = axios.create({
    baseURL: 'https://localhost:44311/api/User/'
});

export default {

    user() {
        return {
            fetchAll: () => httpRequest.get(),
            fetchById: id => httpRequest.get(id),
            create: newRecord => httpRequest.post(newRecord),
            update: (id, updatedRecord) => httpRequest.put(id, updatedRecord),
            delete: id => httpRequest.delete(id)
        }
    }

//     const baseUrl = "http://localhost:60671/api/"



// export default {

//     user(url = 'https://localhost:44311/api/User/') {
//         return {
//             fetchAll: () => axios.get(url),
//             fetchById: id => axios.get(url + id),
//             create: newRecord => axios.post(url, newRecord),
//             update: (id, updateRecord) => axios.put(url + id, updateRecord),
//             delete: id => axios.delete(url + id)
//         }
//     }
}

