# Scramble

There is currently no central place for golfers to find area tournaments. This app aims to fill that gap. Often these tourneys are hosted by local organizations as fundraisers so making them more available will be a hole-in-one for all.

## Getting Started

These below instructions will get this app running on your local machine.


### Prerequisites

There are a few prerequisites for getting this running, which will be installed when you run ```npm install``` (which I'll mention later). Version details regarding these are below.

```
 "angular": "^1.6.4",
 "angular-route": "^1.6.4",
 "angular-ui-bootstrap": "^2.5.0",
 "leaflet": "1.2.0",
 "bootstrap": "^4.0.0-beta",
 "grunt": "^0.4.5",
 "grunt-contrib-jshint": "^0.11.2",
 "grunt-contrib-nodeunit": "~0.4.1",
 "grunt-contrib-sass": "^0.9.2",
 "grunt-contrib-uglify": "~0.5.0",
 "grunt-contrib-watch": "^0.6.1",
 "jquery": "^3.2.1",
 "jshint": "^2.9.1",
 "jshint-stylish": "^2.1.0",
 "matchdep": "^0.3.0"
```

### Installing

Follow these steps to get up and running with Scramble. If you are just wanting to use the API, [click here](http://www.github.com/tylerb33).

Step 1 - Open your terminal. Run the below commands in the order they appear. These will get the API running on your local server:

```
git clone https://github.com/tylerb33/Scramble.git
cd Scramble
cd API
cd scramble
rails db:migrate
rails db:seed
rails server
```
***NOTE***: this will populate the app with seed data, if you'd like to skip having this initial data in your instance of the app then just remove ```rails db:seed``` where you see it in the above.

Step 2 - Without closing this tab, open a new tab within your Terminal.

Step 3 - Go back to the highest level of the cloned repository (into the Scramble directory), then run the below commands. These will get the client side of the app running:

```
cd scramble-app
cd lib
npm install
../
hs -o
```
Step 4 - In your browser, navigate to the URL returned from running the ```hs -o``` command. Usually, it is: ```localhost:8080```.

Step 5 - On the initial use of this app you'll need to create a user. Just click Register on the initial page to do so!

## Built With

* [AngularJS 1.6](https://angularjs.org/) - Web framework used for client side of the app
* [Ruby on Rails (API)](http://rubyonrails.org/) - Web framework used to build the API for the app
* [SQLite3](https://www.sqlite.org/) - Database engine
* [Bootstrap 4](https://getbootstrap.com/) - Front end component library

