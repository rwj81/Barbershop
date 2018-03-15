# Barber Shop Experiment

This is my first website and reflects my attempt to incorporate a number of methods I learned during my Code Louisville Front End Web Development class.

This is a hypothetical business website for a real small business down the street from my home.  The business, Hubbard lane Barber Shop, has been around for years.  However, they have no web site and rely on word of mouth and the fact that they've been around for decades.  I'm often surprised at how many local businesses have no formal web presence, and/or control over their web presence on various social media and public sites.  While I'm currently a customer at the shop, my thinning hair means that I won't be for long. Perhaps with this site I can leave a lasting impression once I'm no longer needed as a customer.

## How to View

The site is hosted on GitHub at https://rwj81.github.io/barber_shop_experiment/index.html

If you access the site via my GitHub repository you can start from index.html 'Home' page.  The other two pages are linked back to the home page as well as to each other via a navigation bar.  

I discovered MAMP on Treehouse and used that to operate a local server.  This was helpful for some of my links to work properly, but it was crucial for my JSON file to work properly.  If you cannot get my AJAX function to work properly I recommend operating via something like MAMP or accessing that via the version on my GitHub site as linked above, because it is running off the same files. 

## Format

The "Home" page (index.html) contains all of the crucial functions of the site.  There's a "Staff" page (staff.html) with slightly embellished bios for the barbers.  There's also a "Specials" page (specials.html) with an HTML form to submit information and sign up for special offers. This doesn't go anywhere yet but would be an area for possible back-end work.

## Methodology

### Responsive:

I flirted with CSS Grid but ended up using Flexbox for the majority of the pages to achieve responsive design.  I did employ media queries for the navigation buttons.    I tested the site on different computers using both Firefox and Chrome, and their respective developer tools options and on my IPhone using Safari.  

### CSS: 

I utilized two CSS files; One that is completely not my own (normalize.css) and one that is almost entirely my own (style.css).  I have many class and id selectors.  Some of these were used to employ flexbox, such as ‘.container’ and ‘.one .two .three .four .five .six’.  Others were used to attach background images (opensource) via ‘#containerBackground’, ‘#specialsBackground’, ‘#staffBackground’.  These are just a few examples.

### API:

I used a Google Maps API on the Home page to provide a map for the shop's location and experiment with the concept.  

### AJAX/JSON:

I used an AJAX function (app.js) with JavaScript to pull data from a JSON file (staffstatus.json) to allow users to check the availability of each of the barbers on any given day. This started with a function from the Treehouse course. However, I customized it for this application.  I wanted to load the JSON file with data for each barber and each day of the week to show when they would be in the shop.  I noticed that a lot of customers will have a preferred barber, and some will even depart the shop to come back another day if they learn their favorite is not at work.  I tried two different ways to sort the data (and kept both in the JSON file).  I settled on the getDay function to return a numerical value for the day of the week and then assigned boolean values for each barber for each corresponding day.  If you check this on a Sunday or Monday, they'll all be unavailable because the shop is closed those days.  I had also tried to run a more complex version that first converted the day's number value (ex. sunday = 0) to a weekday by name and then pull that boolean value from the JSON, but I ran low on time.  It seems unnecessarily complex when the first approach works.  However, I left it commented out in the file in case I want to return to it later.

### Audio:

I recorded three sounds myself at home; clippers, scissors, and shaving cream and converted them to MP3 format (buzzfinal.mp3, clipsfinal.mp3 and shavingcreamfinal.mp3).  I then added mouseover event listeners with JavaScript to the navigation elements and one to the shop logo/banner that also has some CSS transformation. These are the same on each of the pages for each respective action, linked to the same file (app.js).  I tried to make these applicable and kind of fun without making them too obnoxious; mostly they are just a learning exercise.  

### HTML Form and Related Alerts:

The “Specials” page has its own separate JavaScript file (specials.js).  I used JQuery here, just for practice, to throw up an alert to get customers to sign up using the HTML form on this page.  I also have another alert triggered after submitting the information that inserts the person’s name into a ‘thank  you’ message once they have signed up.  I used ‘SweetAlert’ to style the alert boxes to make them look better and more unique than the browser defaults. 

### Links:

The footer, common throughout all pages, has PNG images linked to real-world pages for the shop on Yelp, Better Business Bureau and Facebook.  

### Optimization:

I’ve experimented several times with the ‘audit’ feature of Chrome Developer Tools.  My results are all over the place, depending on when I run the audit. The only constant is a 97% Accessibility score.  My best practices and performance scores run closer to 65-75% and my progressive web app score is usually lower still.  Given more time I would probably change my PNG files to another format and maybe work on the other graphics more.


## Results and Reflection

I think this is a functional site. It contains real and useful information for customers of the barber shop.  Every time I learned a new process I wanted to start over, but instead I decided to plug ahead and incorporate a little piece of many of the topics from the Treehouse courses.  Though I have a long way to go I believe this represents much of what I have learned this far. 




