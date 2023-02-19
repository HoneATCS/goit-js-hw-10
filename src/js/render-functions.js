import { refs } from "./refs";

export function clearCountryInfo() {
    refs.countryInfo.innerHTML = '';
}
export function clearCountryList() {
    refs.countryList.innerHTML = '';
}

export function markupCountryList(country) {
    const markup = country.map(({ flags, name }) => {
        return `<li>
        <img src="${flags.svg}" width="70" height="50"/>
        <h2>${name.official}</h2>
        </li>`;
    })
        .join('');
    refs.countryList.innerHTML = markup;
}


export function markupCountryInfo(country) {
  const markup = country.map(({ name, capital, population, flags, languages }) => {
      return `<li>
        <img src="${flags.svg}" alt="${flags.alt}" width="70" height="50"/> 
        <h2>${name.official}</h2>
        <p>Capital: ${capital}</p>
        <p>Population: ${population}</p>
        <p>Languages: ${Object.values(languages).join(',')}</p>
      </li>`;
    })
    .join('');

  refs.countryInfo.innerHTML = markup;
}