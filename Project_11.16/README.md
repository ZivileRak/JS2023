General presentation
Project Overview: SPA Equipment Webshop
Project team: Inga and Živilė

1. Frontend:

Home Page (Home.jsx):

Displays a header with the webshop name and a welcome message.
Provides information on the benefits of having a spa at home.
Includes a link to the product list.
Displays a relevant image.

Product Page (Product.jsx):

Fetches and displays a list of spa equipment products from the backend (MySQL).
Each product includes its name, description, price, and an "Order" button.
If user wants to buy products, he is directed to the shopping cart.

Shopping Cart Page (ShopCart.jsx):

Manages a shopping cart, allowing users to increment, decrement, and remove items.
Displays a checkout button and calculates the total price.
Provides a message when an order is placed.

Register Page (Register.jsx):

Allows users to register by providing a name, surname, email, and password.
Validates input and handles registration errors.
Displays a link to the login page.

Login Page (Login.jsx):

Allows users to log in with their email and password, if users login is correct with MySQL database.
If customer login is succesfull, he is directed to the home page.
Displays a link to the registration page, if user not registered.

Navbar (Navbar.jsx):

Navigation bar with links to the home page, product page, shopping cart, login, and registration.

2. Backend:

Express Server:
Serves as the backend server.
Connects to a MySQL database using mysql.
Handles routes for fetching products, user registration, user login.


3. Additional Files:

Includes functions for validating login and registration form inputs.
Styling (styles.css, cart.css, etc.):

Style sheets for consistent and visually appealing design.

4. Testing:

Testing File (App.test.js):
Placeholder test ensuring the basic functionality.

5. Project Structure:

Components are organized, each serving a specific purpose.
Utilizes React Router for navigation.
Follows a client-server architecture, separating frontend and backend logic.

6. Project Execution Flow:

Users can navigate through the home, product, login, register, and shopping cart pages.
Products can be added to the shopping cart, and the cart can be managed.
User registration and login are handled.
Product information are fetched from the backend.









# JS2023
Pirmiausia, užtikrinu, kad turiu Node.js ir npm (Node Package Manager) įdiegtus kompiuteryje. Kas leis man kurti React projektus ir valdyti priklausomybes.
Sukuriu naują React projektą pavadinimu "my-new-web-store" ir paleidziu jį vietiniame serveryje (adresas yra http://localhost:3000/).
npx create-react-app my-new-web-store
cd my-new-web-store
npm start

To create a production build, use npm run build.
React projektas buvo sėkmingai sukompiliuotas ir paruoštas naudojimui. Projektas buvo sudėtas į "build" katalogą, kuris yra optimalizuotas ir parengtas diegimui į realią interneto svetainę.

Dabar įdiegiu priklausomybes: Express.js, MySQL, "body-parser" ir "cors"
npm install express mysql body-parser cors

keičiu app.js failą
App.js faile nustatyta maršrutizaciją SPA svetainėje naudojant "react-router". Turime tris maršrutus: pagrindinį puslapį ("exact path="/" component={ProductList}"), pirkinių krepšelio puslapį ("/shopping-cart" component={ShoppingCart}") ir vartotojo paskyros puslapį ("/user-account" component={UserAccount}").

įdiegiu "react-router-dom" biblioteką, kuri yra būtina, jei noriu naudoti maršrutizaciją su "react-router"
npm install react-router-dom

React App atsidaro puslapis su Namai-Krepšelis-Vartotojo paskyra

IKI ČIA VEIKIA :)

--- ------
I) Sukurtas backend naudojant: npm init / express / my-sql dvi lenteles: product ir customer.
II) Prideta duomenu baze MY SQL (lentele Product) -ir SQL duomenu bazeje suvesti produktai. 
III) Sujungta su Front end ir atvaizduoja SQL duomenu bazes irasus Front End puslapyje  "SPA Equitment". Papildzius produktus My SQL jie bus atvaizduojami ir front puslapyje.(fetch approach naudotas)  
IV) Taip pat neveike routes( arba as kazka sugadinau) - tai pradejau kurti naujus route ir puslapius.(Dali tavo informacijos perkeliau) - ir routers dabar gerai veikia. 
V) Pridejau foto ir dali tekslo i Front end, bet su stiliu dar reikes dirbeti.
V) sukuriau folder su pictures - (planavau naudoti product - bet manau jau nespesiu)  
VI) Sukuriau vartotojo registracijos forma, suvedus kontaktine informacija nugula SQL duomenu bazeje ( dar reikia sutvarkyti login).  

Tolesne projekto vizija: 
- sukurti produktu krepseli, tik produktus bus galima galutinai uzsakyti kai vartotojas prisiregistruoja.
- sukurti login fukcija bei logout( Zivile)
- sutvarkyti stilius

WEBSITE PALEIDIMAS: npm start
pirma karta atsidarius project'a, reikia back paleisti: nmp start
tada paleisti frontend: npm start

*******
