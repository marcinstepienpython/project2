# HolidayPal

A Single Page Application helping user manage their next trip. The application shows the destinatnion provided by the user on the map. It gives information about hotels and restaurants available in the area. More over application presents a nice image of the selected location. The main goal of the project is to show a sample application of google maps API.

## UX

HolidayPal is designed for users willing to travel and visit new places. The layout of the webstie consists of 5 sections:

THE LAYOUT:

- MAIN NAVIGATION:

  - User will have a possibiliy to register/login to use customized services.

- SEARCH SECTION:

  - User provides information about desired destination
  - User provides information about desired activity (e.g. golf near tramore)

- MAP:

  - displaying map of selected destination together with hotel and restaurant markers.

- LIST OF HOTELS AND RESTAURANTS:

  - List of recommened hotels and restaurants (at the moment listing of 5 objects)

- DESTINATION PICTURE:
  - Presentation of one image provided by google maps search.

USER SCENARIOS:

1. User wants is planning their vistin in Doolin. By entering "Doolin" in the search box, he/she gets the map of possible places to stay and nearby restaurants. By selecting marker on a map the user get the rating of the place. By zooming in the user gets an access to all informarion provided by google maps.

2. User wants to find outdoor activities in a selected destination. By entering 'golf tramore', he/she gets information about golf clubs in the area. The map and listing below the map shows recommended places to stay or to have lunch.

## Features

HolidayPal is an initial project with an aim to build a travel recommendation portal for users seeking information about locations, hotels and restaurants in selected areas.

### Existing Features

- Search: user is able to enter desired location or activity. Based on his/her entry the system returns information available through google maps API.
- Google Maps: user is able to take full advantage of functionality offered by google maps.

### Features Left to Implement

- myAccount: user will be able to create account to use personalised services such as: initial booking, discounts, rating, payment.

- Rating system: currently system provides listing based on first 5 objects returned from google maps API. Future system will include own rating system based on user opinions.

## Technologies Used

HolidayPal uses following frameworks:

- [Bootstrap](https://getbootstrap.com/)

  - The project uses **Bootstrap** to simplify managing layout and CSS elements.

- [Google Fonts](https://fonts.google.com/)

  - The project uses **Google Fonts** to display beautiful and free fonts.

- [JQuery](https://jquery.com)

  - The project uses **JQuery** to simplify DOM manipulation.

- [Google Maps Platform](https://developers.google.com/maps/documentation/)
  - The project uses **Maps JavaScript API** to provide information and presentation of desired locations.

The site has been created using:

- HTML
- CSS
- JavaScript

## Testing

Basic set-up:

1. Added boostrap framework and tested by creating simple container and jumbotron classes.
2. Added font-awesome and tested by displaying icons.
3. Added and tested external js file. The file will be used for getting data from google maps API.

Layout:

1. Testing site responsiveness:
   - google developer tools:
     - site has been tested on all available devices (Galaxy, iPhone, iPad)
   - mobile phones (Huawei P8, iPhone 8, iPhone 6)
   - tablets (Samsung Galaxy Tab)

Google Maps API:

1. Testing user scenarios:

   - test: Doolin -> success: system provides user with accurate information from the destination. All the markers are presented on the map and in the listing below the map. System presents beautifull picture of Doolin seaside.

   - test: golf tramore -> success: systems returns relevant data from Tramore. Golf clubs as well as hotels and restaurants are shown. System presents nice picture ot Tramore Golf Club

   - test: Honolulu, Toivakka, Finland -> failure: system doesn't show anything. This location is a tiny island close to Finland. No hotels, no restaurants. System doesn't receive expected data from google maps API. This error should be addressed in future.

   - test: Alleghe, Province of Belluno, Italy -> success: all data received from google maps API. Information presented on the map and in the listing. Picture of Alleghe shown below the listing.

## Deployment

The Application has been deployed to GitHub Pages. There is no difference between development and production version of the system. No environemnt variables have been used.

The application is available here: https://marcinstepienpython.github.io/project2/

### Content

- All data presented on maps, listings and pictures are received through google maps API.

### Media

- Search Box background image: travelimagetransparent.png obtained from https://bento.cdn.pbs.org/hostedbento-prod/filer_public/master%20images/SECE/Travel/travelimagetransparent.png

### Acknowledgements

- I received inspiration for this project mainly from my own experience in using the Internet as a source of information for travel destination.
