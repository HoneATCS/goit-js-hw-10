const URL = 'https://restcountries.com/v3.1/name/';
const searchParams = 'fields=name,capital,population,languages,flags';

export function fetchCountries(name) {
    return fetch(`${URL}${name}?${searchParams}`).then(response => {
        console.log(response);
        if (!response.ok) {
            throw new Error(response.status);
        }
        return response.json();
    });
}