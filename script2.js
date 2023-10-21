// Asynchronous test
// const fetch = require('node-fetch')

// Dependency injection
// const getPeople = fetch => {
//     return fetch('https://swapi.dev/api/people').then(response => response.json()).then(data => {
//         console.log(data);
//         return {
//             count: data.count,
//             results: data.results
//         }    
//     })
// }

// getPeople(fetch)

import fetch from "node-fetch";

const getPeople = async () => {
    try {
        const getRequest = await fetch('https://swapi.dev/api/people');
        const data = await getRequest.json();
        // console.log(data); 
        return {
            count: data.count,
            results: data.results,
        }
    } catch (error) {
        console.error(error)
    }
};

// getPeople();

module.exports = getPeople

// writing the test for script2 we will have to remove the console.log(data) and the getPeople()









// In real life scenario, you will have API calls that asynchronous
// In node wont work because it is implemented by the browser and its on the window object. Also in node there is no fetch, so we will have to install node-fetch