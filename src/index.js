import { Notify } from 'notiflix';
import debounce from 'lodash.debounce';
import { fetchCountries } from './js/fetchCountries';
import { refs } from './js/refs';
import './css/styles.css';
import { clearCountryInfo, clearCountryList, markupCountryInfo, markupCountryList } from './js/render-functions';


const DEBOUNCE_DELAY = 300;

//fetchCountries().then(data => { console.log(data) });

refs.input.addEventListener('input', debounce(onInput, DEBOUNCE_DELAY));

function onInput(evt) {
    const inputValue = evt.target.value.trim();
    if (!inputValue) {
        clearCountryInfo();
        clearCountryList();
        return;
    }
    fetchCountries(inputValue)
        .then(countries => {
            if (countries.length > 10) {
                clearCountryInfo();
                clearCountryList();

                Notify.info('Too many matches found. Please enter a more spesific name!');
            }
                
            if (countries.length >= 2 && countries.length <= 10) {
                clearCountryInfo();
                markupCountryList(countries);
                Notify.success('Hurray! We draw countries list');
            }
            if (countries.length === 1) {
                clearCountryList();
                markupCountryInfo(countries);
                Notify.success('This is your country!');
            }
            console.log(countries);
        
        })
        .catch(err => {
            clearCountryInfo();
            clearCountryList();
            Notify.failure('Oopps, there is no country with that name');
            console.error(err);
        });
}