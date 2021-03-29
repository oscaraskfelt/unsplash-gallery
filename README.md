# Unsplash visualisation for the frontend challenge

Infinity scroll gallery of unsplash images


## Application

### Structure

Consists of App, ImageContainer, Image, and a modal component.
Uses the App component as controller feeding the image container with a list of images rendered in the image component.
Clicking on an image opens it up in a modal with controls to switch image in the modal.

### Styling

Styled with styled components.
A globalstyle for basic styling and variables for central management.
Style files for components resides within component folder.

### Todo
Add lazyloading 
Add more tests
More work on usability 
Possibly rework ImageComponent and use height/width to determine better proportions

## Run
### `yarn`
To install the dependencies

### `yarn start`
Runs the app in the development mode [http://localhost:3000](http://localhost:3000).

### `yarn test`

Launches a limited amount of test (1). The tests needs to be further developed, this falls outside my experience.

## Deployment

Currently lives on:  [https://prodtest-navy.vercel.app/](https://prodtest-navy.vercel.app/)

