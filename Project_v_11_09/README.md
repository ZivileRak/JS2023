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

IG 10/11/2023
Papildau projekto struktūrą Frontend dalyje: 
/src
    /components
        ProductList.js

Kuriu sąsają tarp backendo kodo ir frontendo. Norint pasirinkti prekes į krepšelį, frontende turi susikurti užklausą į backendo endpoint'ą.
ProductList.js kodas rodo produktų sąrašą su mygtukais "Pridėti į krepšelį", paspaudus mygtuką, jis siunčia užklausą į backend endpointą /api/add-to-cart perduodant produkto ID.

Papildau backend kodą tam, kad priimti productID iš frontend, pridėti produktą į krepšelį ir grąžinti atnaujintą krepšelį. Taigi pridedu endpointą į backend kodą.


*******
PLANAS:
1. Kurkite duomenų bazę: Turėsite sukurti duomenų bazę, kurioje saugosite prekių informaciją, vartotojų paskyras, užsakymus ir kt. Galite naudoti serverinį duomenų bazių valdymo sistemą, tokią kaip MySQL.
2. Sukurkite serverį, kuris gali bendrauti su React frontend'u. Serveris priimtų užklausas iš frontend'o, tvarkytų duomenų bazės operacijas ir grąžintų reikiamus duomenis.
3. Sukurkite API. Serveris turėtų turėti API (Programavimo sąsaja), kuri leistų  React programai kreiptis į serverį ir atlikti operacijas, tokius kaip gauti produktų sąrašus, pridėti prekę į krepšelį, patikrinti vartotojo paskyrą, tvarkyti užsakymus ir kt.
4. Integruokite backend su frontend: Įdėkite API kvietimus į React komponentus, kad jie galėtų bendrauti su serveriu. Tai leis gauti ir saugoti duomenis serverio pusėje.
5. Jei norime leisti vartotojams prisijungti, turime tvarkyti vartotojų autentifikaciją ir autorizaciją.
6. Pridėkime apmokėjimo sistemą, jei norime leisti vartotojams atlikti mokėjimus.