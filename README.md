# Readable Project
 
## Overview
Readable is a content and comment web app. Users will be able to post content to predefined categories, comment on their posts and other users' posts, and vote on posts and comments. Users will also be able to edit and delete posts and comments.

## How to
* Install all project dependencies with `npm install`
* Start the development server with `npm start`

## Development Notes
* The project is structured by nature (action, component, container, reducer) as it is a relatively small.
* Most application state is managed by the Redux store. Form inputs and controlled components use state handled by the component.
* Special thanks to Dan Abramov for the great free courses [Getting Started with Redux](https://egghead.io/courses/getting-started-with-redux) and [Building React Applications with Idiomatic Redux](https://egghead.io/courses/building-react-applications-with-idiomatic-redux).
* "Presentational and Container Components" is a great pattern to follow, it is very well explained [here](https://medium.com/@dan_abramov/smart-and-dumb-components-7ca2f9a7c7d0) by Dan Abramov.
* More practice is needed.

## Potential Improvements
### Here are some improvements that are left behind due to the time limit.
* Should add transition or loading effects, so that users will not notice the DOM change.
* When clicking a post link, it lands to post detail page. But it doesn't land at the top of the page, if the clicked link is in the middle of the page. (Weird bug...)
* If creating a new post under a category, the category field should be pre-populated, or just create the post under that category.
* Edit comment should really happen on the same page where the comment is displayed, instead of showing a separate page with just a form.
* Should add notifications, for example, after a post is sucessfully deleted.

## Backend Server

This project connects the backend server provided [here](https://github.com/udacity/reactnd-project-readable-starter). 


## Create React App

This project was bootstrapped with [Create React App](https://github.com/facebookincubator/create-react-app).
More information on how to perform common tasks can be found [here](https://github.com/facebookincubator/create-react-app/blob/master/packages/react-scripts/template/README.md).