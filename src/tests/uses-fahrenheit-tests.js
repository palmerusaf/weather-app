import { filterWeatherData } from "../modules/filter-data";
import { getCurrentForecastFromWeatherServer } from "../modules/api-fetch";

let listOfFAreas = [];
fn("Montserrat");
fn("Ngerulmud,Palau");
fn("British Virgin Islands");
fn("Turks And Caicos Islands");
fn("Saint Kitts And Nevis");
fn("Marshall Islands");
fn("Bermuda");
fn("Cayman Islands");
fn("Barbuda");
fn("Micronesia");
fn("Bahamas");
fn("Belize");
fn("Liberia");
fn("united states of america");
fn("london");

function getCountryFromData(data) {
  const country = data.location.country;
  listOfFAreas.push(country);
}

function filterTest(data) {
  filterWeatherData(data);
}

function fn(name) {
  getCurrentForecastFromWeatherServer(name).then(filterTest);
}
