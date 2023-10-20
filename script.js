const googleDatabase = [
    'cats.com',
    'souprecipes.com',
    'flowers.com',
    'animal.com',
    'catpictures.com',
    'myfavoritecat.com',
    'myfavoritecat2.com',
]

const googleSearch = (searchinput) => {
    const matches = googleDatabase.filter ((website) => {
        return website.includes(searchinput)
    })
    return matches.length > 3 ? matches.slice(0,3) : matches;
}

console.log (googleSearch('flow'))