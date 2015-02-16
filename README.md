angular-hamburger-helper
========================

what is angular-hamburger-helper?
---------------------------------

angular-hamburger-helper is a directive written in angular that provides a 
"[hamburger](http://blogs.wsj.com/digits/2013/03/18/whats-a-hamburger-button-a-guide-to-app/)" icon commonly used to 
denote a menu icon.  In some application states if the menu is not available you will want this to be replaced with a 
back arrow. 

you can see a live demo [here](https://infomofo.github.io/angular-hamburger-helper/).

it should look like 

![a spinning hamburger that turns into an arrow](/../gh-pages/images/hamburger_menu.gif?raw=true)

um why?
-------

this transition was inspired by the [delightful details](http://www.google.com/design/spec/animation/delightful-details.html#delightful-details-delightful-details) 
section of google's material-design specification.

oh ok
-----

how do i use it?
----------------

1. install the module using bower at the command line:

        bower install infomofo/angular-hamburger-helper

2. include the css file in your html file:


        <link rel="stylesheet" href="bower_components/angular-hamburger-helper/ng-hamburger-helper.css"/>

3. include the javascript file in your html file:

        <script type='text/javascript' src='bower_components/angular-hamburger-helper/ng-hamburger-helper.js'></script>

4. include the hamburger helper service in your angular module config:

        var app = angular.module('YourApp',['hamburgerHelper']);

5. use the directive in your html file.  the directive appears as a 44x44 hamburger icon, when "variable" evaluates to true it will 
    rotate and transform into a backwards arrow.

        <ng-hamburger-helper></ng-hamburger-helper>

6. use the hamburgerHelper service to toggle the state of the button:

        


but i want it to be pink or bigger or something
-----------------------------------------------

you can style the icon with some css:

    
    .hamburger-helper {     
      /* modifying the height or width will also require modifying the font-size to ensure that the arrow head still lines up */
      height: 44px;
      font-size: 22px;
	    width: 44px;
      /* this affects the speed of the rotation */
	    transition: transform 0.3s; 
    }
    
    .hamburger-helper span {
      /* the height of the hamburger bars and width of the arrow */
	    height: 0.3em; 
    }
    
    .hamburger-helper span,
    .hamburger-helper span:after,
    .hamburger-helper span:before {
      /* the color of the hamburger and arrow */
	    background-color: #fff;
    }
    
    .hamburger-helper span:after,
    .hamber-helper span:before {
      /* this affects the speed that the hamburger buns are transformed into the arrow */
      transition: transform 0.3s;
    }
    



