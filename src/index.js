const getJSON = async url => {
    const response = await fetch(url);
    if(!response.ok) // check if response worked (no 404 errors etc...)
        throw new Error(response.statusText);
    
    const data = response.json(); // get JSON from the response
    return data; // returns a promise, which resolves to this data value
    }

const randomAnimePic = () => {
    getJSON("https://danbooru.donmai.us/posts/random.json").then(data => {
        //console.log(`\x1b[34m${data?.large_file_url}\x1b[89m`);
        console.log(data?.large_file_url);
    }).catch(error => {
        console.error(error);
    });
};

module.exports = {
    randomAnimePic
    };