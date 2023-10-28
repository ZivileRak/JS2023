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