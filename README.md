# dog-therapy-ng

Simple Angular app with TypeScript to display randomised dog photos :smiley:

You can also get randomised dog photos by breed; it should have a dropdown selection if the dog breeds are successfully fetched from the API,
otherwise an input field will be shown to search by. Search queries submitted by the input field are trimmed & lowercased to make it suitable for the API.

https://vokenny.github.io/dog-therapy-ng

Uses the [Dog API](https://dog.ceo/dog-api/documentation/) to source the random images.

<img src="./src/assets/dog-therapy-ng-demo.gif" alt="dog-theraypy-ng demo" width="75%" height="auto">

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 11.2.5.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `docs/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).
