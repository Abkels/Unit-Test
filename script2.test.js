import fetch from 'node-fetch';
import swapi from './script2';
// const fetch = require('node-fetch');
// const swapi = require('./script2')

// it('calls swapi to get people', (done) => {
//     expect.assertions(1)
//     swapi.getPeople(fetch).then(data => {
//         expect(data.count).toEqual(87);
//         done()
//     });
// });
// Alternatively
it('calls swapi to get people', () => {
    expect.assertions(1)
    return swapi.getPeople(fetch).then(data => {
        expect(data.count).toEqual(87);
    });
});

it('call swapi to get people', ()=>{
    expect.assertions(2)
    return swapi.getPeople(fetch).then(data => {
        expect(data.count).toEqual(87)
        expect(data.results.length).toBeGreaterThan(5)
    });
})



/*When running an asynchronous test always do expect.assertions to test that ur assertions are being tested 

u can check for jest cheatsheet to help you with testing
*/