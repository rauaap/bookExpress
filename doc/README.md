Testataan expressillä ja mysql:lla rakennettua sovellusta Postmanilla. Aloitetaan katsomalla, miltä user_table taulukon tiedot näyttävät:\
![](https://github.com/rauaap/bookExpress/blob/doc/doc/img/getall.png)\
Kokeillaan hakea kaikki käyttäjät Postmanin GET-requestilla:\
![](https://github.com/rauaap/bookExpress/blob/doc/doc/img/postman_getAll.png)\
GET-request onnistui ja sen tulos näyttää täsmäävän tietokannan tietoihin. Kokeillaan seuraavaksi hakea yksi käyttäjä tietokannasta lisäämällä käyttäjän ID GET-requestiin:\
![](https://github.com/rauaap/bookExpress/blob/doc/doc/img/postman_getOne.png)\
Pyyntö onnistui ja sai haettua ID:tä vastaavan käyttäjän tietokannasta.\
Kokeillaan seuraavaksi käyttäjien lisäämistä tietokantaan POST-requestilla:\
![](https://github.com/rauaap/bookExpress/blob/doc/doc/img/postman_add.png)\
Pyyntö onnistui ja tietokanta näyttää tältä sen jälkeen:\
![](https://github.com/rauaap/bookExpress/blob/doc/doc/img/add.png)\
Kokeillaan äskettäin lisätyn käyttäjän salasanan vaihtamista PUT-requestilla:\
![](https://github.com/rauaap/bookExpress/blob/doc/doc/img/postman_change.png)\
Pyyntö onnistui ja kuten näemme salasanan hash on vaihtunut tietokannassa:
![](https://github.com/rauaap/bookExpress/blob/doc/doc/img/put_new_pass.png)\
Viimeiseksi kokeilemme käyttäjän poistamista tietokannasta DELETE-requestilla:\
![](https://github.com/rauaap/bookExpress/blob/doc/doc/img/postman_delete.png)\
Pyyntö näyttää onnistuneen ja tietokanta näyttää tältä sen jälkeen:\
![](https://github.com/rauaap/bookExpress/blob/doc/doc/img/delete_user.png)\
