# Unsplash visualisation for the frontend challenge

Infinity scroll gallery of unsplash images


## Application

### Structure

Consists of App, ImageContainer, Image, and a modal component.
Since the scope of the app is pretty small the data fetching is done in the app component which then feeds the image container with a list of images rendered in the image component.
Clicking on an image in the image container opens it up in a modal with controls to switch image in the modal.

## Scroll

The app uses the Intersection Observer API for the infinity scroll. 
It used a custom solution at first, but that did not work on a phone so I turned to Intersection Observer as a solution.

### Styling

- Styled with styled components.
- A globalstyle for basic styling and variables for central management.
- Style files for components resides within component folder.
- Uses react-feather for icons.

### Todo
Add lazyloading. 
Add more tests.
More work on usability.
Possibly rework ImageComponent and use height/width to determine better proportions instead of using it as background image in full size. 
Add a surprise.

## Run
### `yarn`
To install the dependencies

### `yarn start`
Runs the app in the development mode [http://localhost:3000](http://localhost:3000).

### `yarn test`

Launches a limited amount of test (1). The tests needs to be further developed, this falls outside my experience.

## Deployment

Currently lives on:  [https://prodtest-navy.vercel.app/](https://prodtest-navy.vercel.app/)

