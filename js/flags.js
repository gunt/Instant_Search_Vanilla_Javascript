// displaying the data
// Now, we need to create the structure of our list in order 
// to display the data and for that we're going to create all the 
// elements that we need (ul, li, headings, etc) inside of a function 
// and we'll insert them into the results div we declared in our HTML.

let countries;

const fetchCountries = async () => {
    countries = await fetch(
        'https://restcountries.eu/rest/v2/all?fields=name;population;flag'
    ).then(res => res.json());
};

const results = document.getElementById('results');

const showCountries = async () => {
    //getting the data
    await fetchCountries();

    const ul = document.createElement('ul');
    ul.classList.add('countries');

    countries.forEach(country => {
        //creating the structure
        const li = document.createElement('li');
        li.classList.add('country-item');
    }
}
