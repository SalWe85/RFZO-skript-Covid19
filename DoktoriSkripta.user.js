// ==UserScript==
// @name         DoktoriSkripta
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  hack everything!
// @author       SalWe
// @match        https://ws.rfzo.rs/covid19v3ev/pacijent.php*
// @icon         https://www.google.com/s2/favicons?domain=rfzo.rs
// @grant        none
// ==/UserScript==

(function() {
    'use strict';
    let glavniDiv = document.createElement(`div`);

    //Naslov
    let naslov = document.createElement(`p`);
    naslov.appendChild(document.createTextNode(`ДЗ Кучево - Covid19`));
    naslov.style.color = `white`;
    naslov.style.marginLeft = `20px`;


    // deo 2 linija
    let linijaD2 = document.createElement(`p`);
    linijaD2.appendChild(document.createTextNode(`------- Део 2 -------`));
    linijaD2.style.color = `white`;
    linijaD2.style.marginLeft = `20px`;

    //<select> Doktori
    const selectDok = document.createElement(`select`);
    selectDok.id = `SelectDoktori`;
    selectDok.style.marginLeft = `20px`;
    selectDok.style.marginBottom = `10px`;
    const doktori = [
        {ime: `Др Марија Јовановић`, tel: `0631434288`, naziv: `Марија`},
        {ime: `Др Сања Стевановић`, tel: `0694265908`, naziv: `Сања`},
        {ime: `Др Далиборка Пандуровић`, tel: `0600915828`, naziv: `Далиборка`},
        {ime: `Др Новица Илић`, tel: `0637067578`, naziv: `Новица`},
        {ime: `Др Дарко Благојевић`, tel: `063356548`, naziv: `Дарко`},
        {ime: `Др Раде Зечевић`, tel: `0692652242`, naziv: `Раде`},
        {ime: `Др Милош Смоловић`, tel: `0604560008`, naziv: `Милош`},
        {ime: `Др Славиша Лукић`, tel: `0600851555`, naziv: `Славиша`},
        {ime: `Др Никола Савић`, tel: `0603163888`, naziv: `Никола`},
        {ime: `Др Бојана Јовановић`, tel: `0640572616`, naziv: `Бојана`},
                    ];
    let optionDok = `<option value="">Изабери лекара</option>`;
    doktori.forEach((dok) => {
        optionDok += `<option value="${dok.ime},${dok.tel}">${dok.naziv}</option>`
    });
    selectDok.innerHTML = optionDok;


    //Datum
    const datum = document.createElement(`INPUT`);
    datum.id = `Datum`;
    datum.style.marginLeft = `20px`;
    datum.style.marginBottom = `10px`;
    datum.placeholder="dd-mm-yyyy";
    datum.setAttribute("type", "date");
    datum.setAttribute("value", "2021.02.10");


    // deo 4a linija
    let linijaD4a = document.createElement(`p`);
    linijaD4a.appendChild(document.createTextNode(`------- Део 4a -------`));
    linijaD4a.style.color = `white`;
    linijaD4a.style.marginLeft = `20px`;

    //<select> Sestre
    const selectSes = document.createElement(`select`);
    selectSes.id = `SelectSes`;
    selectSes.style.marginLeft = `20px`;
    selectSes.style.marginBottom = `10px`;
    const sestre = [
        {ime: `Силардка Богић`, tel: `0693330170`, naziv: `Силардка`},
        {ime: `Ивана Крстић`, tel: `0629658337`, naziv: `Ивана`},
        {ime: `Славица Смиљанић`, tel: `0692600951`, naziv: `Славица`},
        {ime: `Невена Брсановић`, tel: `063231084`, naziv: `Невена`},
        {ime: `Жаклина Животић`, tel: `0616937911`, naziv: `Жаклина`},
        {ime: `Лела Арсић`, tel: `0695885323`, naziv: `Лела`},
        {ime: `Данијела Марковић`, tel: `069728501`, naziv: `Данијела`},
        {ime: `Александра Павловић`, tel: `0606320074`, naziv: `Александра П`},
        {ime: `Анкица Новаковић`, tel: `0600852491`, naziv: `Анкица`},
        {ime: `Зоран Новаковић`, tel: `0637416586`, naziv: `Зоран`},
        {ime: `Лидија Германовић`, tel: `0692571440`, naziv: `Лидија`},
        {ime: `Ирма Анђелковић`, tel: `0628491946`, naziv: `Ирма`},
        {ime: `Милена Вујчић`, tel: `0693656366`, naziv: `Милена В`},
        {ime: `Александар Матић`, tel: `0692333096`, naziv: `Александар`},
        {ime: `Биљана Јовановић`, tel: `0666881722`, naziv: `Биља`},
        {ime: `Ненад Животић`, tel: `0615267777`, naziv: `Ненад`},
        {ime: `Властимир Бабић`, tel: `0638245190`, naziv: `Власта`},
                    ];
    let optionSes = `<option value="">Изабери сестру</option>`;
    sestre.forEach((ses) => {
        optionSes += `<option value="${ses.ime} ${ses.tel}">${ses.naziv}</option>`
    });
    selectSes.innerHTML = optionSes;


    // deo 5 linija
    let linijaD5 = document.createElement(`p`);
    linijaD5.appendChild(document.createTextNode(`------- Део 5 -------`));
    linijaD5.style.color = `white`;
    linijaD5.style.marginLeft = `20px`;


    //<select> Izdao Rezultat
    const selectRez = document.createElement(`select`);
    selectRez.id = `SelectRez`;
    selectRez.style.marginLeft = `20px`;
    selectRez.style.marginBottom = `10px`;
    const izdaoRezultat = [
        {ime: `Др Марија Јовановић`, tel: `0631434288`, naziv: `Марија`},
        {ime: `Др Сања Стевановић`, tel: `0694265908`, naziv: `Сања`},
        {ime: `Др Далиборка Пандуровић`, tel: `0600915828`, naziv: `Далиборка`},
        {ime: `Др Новица Илић`, tel: `0637067578`, naziv: `Новица`},
        {ime: `Др Дарко Благојевић`, tel: `063356548`, naziv: `Дарко`},
        {ime: `Др Раде Зечевић`, tel: `0692652242`, naziv: `Раде`},
        {ime: `Др Милош Смоловић`, tel: `0604560008`, naziv: `Милош`},
        {ime: `Др Славиша Лукић`, tel: `0600851555`, naziv: `Славиша`},
        {ime: `Др Никола Савић`, tel: `0603163888`, naziv: `Никола`},
        {ime: `Др Бојана Јовановић`, tel: `0640572616`, naziv: `Бојана`},
        {ime: `Ивана Крстић`, tel: `0616025245`, naziv: `Ивана`},
        {ime: `Жаклина Животић`, tel: `0616937911`, naziv: `Жаклина`},
        {ime: `Александра Новаковић`, tel: `0600852687`, naziv: `Александра`},
        ];
    let optionRez = `<option value="">Издао резултат</option>`;
    izdaoRezultat.forEach((rez) => {
        optionRez += `<option value="${rez.ime}, ${rez.tel}">${rez.naziv}</option>`
    });
    selectRez.innerHTML = optionRez;


    // dodavanje u DIV
    glavniDiv.appendChild(naslov);
    glavniDiv.appendChild(linijaD2);
    glavniDiv.appendChild(selectDok);
    glavniDiv.appendChild(datum);
    glavniDiv.appendChild(linijaD4a);
    glavniDiv.appendChild(selectSes);
    glavniDiv.appendChild(linijaD5);
    glavniDiv.appendChild(selectRez);


    var asidePicker = document.getElementsByTagName("aside")[0];
    asidePicker.appendChild(glavniDiv);

    //------------------------------------------------------------------------------

    //Ubacivanje podataka na sajt RFZ-a

    //Lekar
    selectDok.addEventListener("change", function(){
        let imeDoktora = document.getElementById("SelectDoktori").value.split(',')[0];
        let telDoktora = document.getElementById("SelectDoktori").value.split(',')[1];
        document.getElementById(`lekarTestirao`).value = imeDoktora;
        document.getElementById(`lekarTelefon`).value = telDoktora;
    });

    //datum
    datum.addEventListener("change", function(){
        let datumY = document.getElementById("Datum").value.split('-')[0];
        let datumM = document.getElementById("Datum").value.split('-')[1];
        let datumD = document.getElementById("Datum").value.split('-')[2];
        let datumCeo = `${datumD}.${datumM}.${datumY}`;
        document.getElementById(`datumIsp`).value = datumCeo;
        document.getElementById(`datumPri`).value = datumCeo;
        });

    //Sestre
    selectSes.addEventListener("change", function(){
        let imeSestre = document.getElementById("SelectSes").value;
        document.getElementById(`imeUzorak`).value = imeSestre;
        document.getElementById(`mestoUzorak`).value = `Дом здравља Кучево`;
        });

    //Izdao Rezultat
    selectRez.addEventListener("change", function(){
        let imeIzdaoRez = document.getElementById("SelectRez").value.split(',')[0];
        document.getElementById(`imeRez`).value = imeIzdaoRez;
        });




})();