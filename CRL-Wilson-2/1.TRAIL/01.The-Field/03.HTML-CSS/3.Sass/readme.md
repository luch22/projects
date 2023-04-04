# SASS

- SOLO
- duration: `1 day`
- repository: `learning-sass`

## Learning Objectives

 - understand the added value of using SASS to write your CSS code
 - have a first hands-on experience at writing SASS

## Introduction

The SASS (file extension: scss) is a *frontend* development tool, which generates css from a language similar to CSS, but with powerful features. By writing your stylesheets in sass rather than directly in CSS, you get nice stuff that can **decrease your working time** (your Labor Union will be happy), make your **code more reusable** from one project to another (your boss will be happy), more readable too, thanks to improved syntax, including **functions** (called "mixin" in the sass world) and **variables**.

![nice](./assets/nice.gif)

## Let's start

- [SASS Presentation](https://docs.google.com/presentation/d/1gEZrPANsPNGJl-JDfYH_YSHSB9ba-Ss98r69TfPWVQE/edit?usp=sharing)

- official site: http://sass-lang.com

## Setup

To be able to write SASS code, you need software that runs on your development machine, and that will "watch" the SASS files. Whenever the sass file  is saved, the corresponding CSS file will be generated again.

## Using vscode ? -> Live Sass Compiler

- For a simple installation, I propose you this extension vs code [Live Sass Compiler](https://marketplace.visualstudio.com/items?itemName=ritwickdey.live-sass)

## otherwise

- Install Sass with the instructions found on https://sass-lang.com/install
- After the installation type `sass -v` in your terminal, it should display the latest version.


## Ready, Steady, Go !

- Create the repository: `learning-sass`
- Create a basic html file :  `index.html`, just so we have something to play with.
- Create a folder and call it `assets` : it will contain all static files necessary for the visual look of the interface you are going to create. Images, css, javascript, fonts ... 
- This "assets" folder structure has become a form of convention among frontend developers. Of course, it's up to you to get away from it, if you like reinventing the wheel.
- Create a `style.scss` file and configure your sass application to generate the `style.css` file each time the "source" file (style.scss) is modified.
- Make sure that your html file contains a `<link rel="stylesheet" ... >` refering to your.css file (and not to the.scss file).

## Ok, next

- Experiment with these [basic SASS features](./learning-sass/readme.md)

## Conclusion

At this point, you should have felt the added value of writing your CSS code using SASS.  From today on, we wish you to use SASS for every project because we want to see smiles on your face. Not like this guy:

![sassy](./assets/sassy.gif)





