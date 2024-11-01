## File structure:
- index.html
- main.js
- reset.css
- styles.css
- bonus/  
Code challenge implemented with minimum requirements. Main focus on CSS part.

## Folder "bonus" contains extended implementation:
- bonus/content.js  
- bonus/index.html
- bonus/main.js
- bonus/navbar.js
- bonus/reset.css
- bonus/styles.css  

### The next features implemented:
1. Display the current time of the selected city
2. Save the selected city after page reload
3. Added browser navigation Back/Forward

## Implementation details: 
1. Navigation is implemented through the URL to make it more obvious. Other approaches exist, like saving state in local storage or session storage, but I think changing the URL better fits here.
2. Also, in this case, I save the state inside the URL query. I did this on purpose to avoid unintentional page reloads.
3. Timezones are hardcoded because of library usage restrictions.
4. The content of the navigation.json file is copypasted inside the main.js file because without the server it's impossible to load file contents due to CORS policy. I didn't add any of the live servers(like http-server or live-server) because of library usage restrictions.
5. Also, without servers, it's impossible to use ES6 modules(due to CORS policy), so I used IIFE modules for logic encapsulation.
