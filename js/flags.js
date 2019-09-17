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

        const country_flag = document.createElement('img');
        // Setting the image source
        country_flag.src = country.flag;
        country_flag.classList.add('country-flag');

        const country_name = document.createElement('h3');
        country_name.innterText = country.name;
        country_name.classList.add('country-name');

        const country_info = document.createElement('div');
        country_info.classList.add('country-info');

        const country_population = document.createElement('h2');
        country_population.innerText = numberWithComas(country.population);
        country_population.classList.add('country-population');

        const country_population_text = document.createElement('h5');
        country_population_text.innerText = 'Population';
        country_population_text.classList.add('country-population-text');

        country_info.appendChild(country_population);
        country_info.appendChild(country_population_text);

        li.appendChild(country_flag);
        li.appendChild
    }
}
