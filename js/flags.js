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
}
