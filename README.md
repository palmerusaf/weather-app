# Weather-app

## Description

This is a simple weather application were the user can enter a location and receive the current weather information in the area.

## Live Preview

[Link](https://palmerusaf.github.io/weather-app)

## Purpose

The purpose of this project was to put into practice async programming concept in javascript. Additionally, I learned how to use an API from weatherapi.com.

## Features

- Able to toggle between F and C
- Application will default to F or C depending if the country uses it. I.E. USA defaults to F UK defaults to C
- Displays loading messages
- Displays error messages if location not found, connection error, search box empty etc.
- Changes background depending on if its daytime at searched location

## Known Issues

- When the weather information initially renders both celsius and fahrenheit are displayed overlapping one another. I believe this is caused because the animation on render has to finish before the transition to hide one element occurs. This issue isn't really noticeable because the animation finishes quickly.
- Sometimes when searching U.S. locations the temperature is defaulted to celsius instead of fahrenheit. This happens rarely but seems to occur if the user has entered a street address. This may be a parsing error occurring in the filter-data module.

## Opportunities for Improvement

- The stylesheet code is very messy. This mostly due to many on the fly redesigns.
- The individual modules are not as orthogonal as I'd like. In the past I've used the pubsub pattern to help with this but choose not to here.
- The render-data module is very messy and should probably be broken up.
- It would have been better to export objects with the same name as the filename and then implement methods on those objects. I found myself opening modules just to look up the export function names. Implementing the module pattern/using classes would allow looking up methods with EMMET.
- UX/Styling could use a lot of improvement, especially when projects start getting larger.
- The app could use more features. Currently, it only displays current weather conditions. The display container itself could be made interactive, allowing more data to be displayed.

## Lessons Learned

- I learned [here](https://stackoverflow.com/a/46254706) I can prevent iPhone's annoy zoom on form feature by setting setting maximum-scale=1. This great because my previous work around involved setting font to 16px, which isn't always desirable.
- I can access my debug live server from any device on my wifi network by entering {ip}:{port number}/{file path to index.html}. This is a game changer as it allows me realtime debugging on iPhone and other mobile devices without publishing to github. This makes css debug much faster without polluting my git logs
- I learned how to use javascript's error handling with try catch blocks and throws.
- I learned that when it comes to styling sometimes less is better, especially if the app doesn't do much to begin with.
- You cannot make a http request from a https site.
- Finally, I learned how to use async await functions, API calls, and promises.
