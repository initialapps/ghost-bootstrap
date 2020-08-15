# ghost-bootstrap

A simple and minimal bootstrap starter theme for ghost.  

This is meant to be a simple starter theme for anyone to customize using bootstrap.  [You can demo the theme here](https://ghost-bootstrap.initialapps.com/).

## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes. 

### Prerequisites

* Install [npm](https://nodejs.org).

* Install [Ghost Local](https://docs.ghost.org/install/local/).

* Navigate to the ghost local link provided in the terminal, and follow the setup instructions.

Or, simply download the zip file directly from github and upload directly to ghost.  This is not really recommended for development, but should still work.  

### Installing

#### Setting up the theme

From the directory that you've installed ghost local, move into the themes folder:

```
cd conent/themes
```

Clone the repo:

```
git clone git@github.com:initialapps/ghost-bootstrap.git
```

Go back to the directory that you've installed ghost local, and restart ghost local:
```
cd - // if needed, or navigat to the main ghost directory however you please
ghost restart
```
Finally, navigate to the ghost local link provided in the terminal.  When logged into ghost, click **Settings > Design**.  Scroll to the bottom and activate the **ghost-bootstrap** theme.

#### Setting up your routes
This theme supports a home page, and separate blog page.  In order to do this in ghost, you must upload a custom **routes.yml** file.  You can download your current file, when logged into ghost local, by clicking **Settings > Design** in the left sidebar and scrolling to **Routes** at the bottom.

You should edit this file to look like this:

```
routes:
  /:
    controller: channel
    template: home

collections:
  /blog/:
    permalink: /{slug}/
    template: index

taxonomies:
  tag: /tag/{slug}/
  author: /author/{slug}/
```
Once complete, upload back to your ghost local blog by clicking the upload button just above where you downloaded.


### Developing
* You can add to the theme css by editing the css theme file at **assets>css>screen.css**

* You can add to the theme js by editing the js theme file at **assets>js>main.js** 

## Deployment

Vendor css and js files are built using gulp and output as **assets/css/build.css** and  **assets/js/build.js**.  Feel free to add your custom scripts to the gulpfile (gulpfile.js) and use [gulp](https://gulpjs.com/).

The easiest way to deploy the theme is to just download the zip file from **Settings > Design** area when running ghost locally.  Then uploading the theme to your live site.  Be sure to add your **routes.yml** file as well.

## Built With

* [Bootstrap](https://getbootstrap.com/) - Front end library
* [jQuery](https://jquery.com/) - Javascript dependency and library that we all use
* [Animate.css](https://daneden.github.io/animate.css/) - Because I use these animations a lot.
* [wow.js](https://wowjs.uk/) - To reveal animate.css on scroll
* [fitvids](http://fitvidsjs.com/) - Because the ghost casper theme used this and I think it's cool
 

## Authors

* **Andrew Akagawa** - *Initial work* - [InitialApps](https://github.com/initialapps/)

## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details

## Acknowledgments

* Thanks to all who contributed to everything in this package.json file!
* Thanks to [ghost](https://ghost.org/) for the very nice blogging platform.
