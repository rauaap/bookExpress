Testataan expressillä ja mysql:lla rakennettua sovellusta Postmanilla. Aloitetaan katsomalla, miltä user_table taulukon tiedot näyttävät:
Kokeillaan hakea kaikki käyttäjät Postmanin GET-requestilla:
GET-request onnistui ja sen tulos näyttää täsmäävän tietokannan tietoihin. Kokeillaan seuraavaksi hakea yksi käyttäjä tietokannasta lisäämällä käyttäjän ID GET-requestiin:
Pyyntö onnistui ja sai haettua ID:tä vastaavan käyttäjän tietokannasta.
Kokeillaan seuraavaksi käyttäjien lisäämistä tietokantaan POST-requestilla:
Pyyntö onnistui ja tietokanta näyttää tältä sen jälkeen:
Kokeillaan äskettäin lisätyn käyttäjän salasanan vaihtamista PUT-requestilla:
Pyyntö onnistui ja kuten näemme salasanan hash on vaihtunut tietokannassa:
Viimeiseksi kokeilemme käyttäjän poistamista tietokannasta DELETE-requestilla:
Pyyntö näyttää onnistuneen ja tietokanta näyttää tältä sen jälkeen:
