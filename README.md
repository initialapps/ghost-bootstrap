# ghost-bootstrap
A simple bootstrap starter theme for ghost

Sorry, this readme is not useful yet.  Give me a bit...

sudo npm install gulp-cli -g


setup routes with yml

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
