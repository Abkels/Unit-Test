const googleDatabase = [
    'cats.com',
    'souprecipes.com',
    'flowers.com',
    'animal.com',
    'catpictures.com',
    'myfavoritecat.com',
    'myfavoritecat2.com',
]

// const googleSearch = (searchinput) => {
//     const matches = googleDatabase.filter ((website) => {
//         return website.includes(searchinput);
//     })
//     return matches.length > 3 ? matches.slice(0,3) : matches;
// }

// applying dependency injection by adding another parameter to the function

const googleSearch = (searchinput, db) => {
    const matches = db.filter ((website) => {
        return website.includes(searchinput);
    })
    return matches.length > 3 ? matches.slice(0,3) : matches;
}

// console.log (googleSearch('flower', googleDatabase));

module.exports = googleSearch

/*In real life situation you will not be exporting a database into a test and have the test go into a database. It will be too expensive, slow and a headache. You will have to mock it, for which the mock will have a dummy database for we to test on so iy=t can be faster */