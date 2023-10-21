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

// Mocks and Spies
// creating a mock
it('get people returns count and result', ()=> {
    const mockFetch = jest.fn() //allows you to spy in jest
    .mockreturnValue(Promise.resolve({
        json: ()=> Promise.resolve({
            count: 87,
            results: [0,1,2,3,4,5]
        })
    }))

    expect.assertions(4)
    return swapi.getPeople(mockFetch).then(data => {
        expect(mockFetch.mockcalls.length).toBe(1);
        expect(mockFetch).toBeCalledWith('https://swapi.dev/api/people');
        expect(data.count).toEqual(87)
        expect(data.results.length).toBeGreaterThan(5)
    })
})

/*When running an asynchronous test always do expect.assertions to test that ur assertions are being tested 

u can check for jest cheatsheet to help you with testing
*/

