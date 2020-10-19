//file sistem module, obezbeduva nacin za rabota so file sistemot na kompjuterot,odnosno moze da kreirame novi fajlovi, da briseme postoecki fajlovi, da dopolnuvame fajlovi, 
//kreiranje na fajl sintaksa fs.writeFile (filename, data, callback), ime na fajl, tekst vo fajl, funkcija so dva parametri err ili fd, ovaa funkcija ke se povika otkako operacijata na kreiranje na fajlot ke zavrsi
//fs.appendfile dodava sozdrzina vo postoecki fajl, sintaksa (ime na fajl vo koj sakame da dodademe sodrzina, sodrzina, callback funkcija err ili fd)
const fs = require ('fs');

fs.writeFile('test.txt', 'Hello!', function (err) { 
    if (err)
console.log(err);
    else
console.log('Uspesno kreiranje na fajl');
});

fs.appendFile('test.txt', 'World!', function (err) { 
                        if (err)
        console.log(err);
                        else
        console.log('Uspesno dodavanje na sodrzina');
});

