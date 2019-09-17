let countries;

const fetchCountries = async () => {
    countries = await fetch(
        'https://restcountries.eu/rest/v2/all?fields=name;population;flag'
    ).then(res => res.json());
};