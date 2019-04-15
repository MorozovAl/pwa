/*Работа со днями, месяцами*/
var fullTimes = document.getElementsByClassName("fullCurrentDate");
var times = document.getElementsByClassName("currentDate");
var lastDay = document.getElementsByClassName("lastDay");
var firstDay = document.getElementsByClassName("firstDay");
var myDate = new Date();
var months = ["Sausis", "Vasaris", "Kovas", "Balandis", "Gegužė", "Birželis", "Liepa", "Rugpjūtis", "Rugsėjis", "Spalis", "Lapkritis", "Gruodis"];
var month = myDate.getMonth() + 1;
var date = myDate.getDate();
var fullDate = myDate.getFullYear();


var numberMonth = addZero(month);
var myDate = addZero(date);

/*Функция для добавления 0 к месяцу или дате */
function addZero(variable) {
    return variable < 10 ? variable = "0" + variable : variable;
}

/*Вывод*/
for (var i = 0; i < times.length; i++) {
    times[i].innerHTML = myDate + "." + numberMonth;
}
for (var i = 0; i < firstDay.length; i++) {
    if (myDate - 7 < 0) {
        firstDay[i].innerHTML = 30 - 7 + " " + months[month - 2];
    }
    else {
        firstDay[i].innerHTML = myDate - 7 + " " + months[month - 1];
    }
}

for (var i = 0; i < lastDay.length; i++) {
    
    lastDay[i].innerHTML = myDate + " " + months[month - 1];
}



for (var i = 0; i < fullTimes.length; i++) {
    fullTimes[i].innerHTML = myDate + " " + months[month - 1] + " " + fullDate;
}

/*Работа с JSON*/
var url = 'https://ipapi.co/json/';
var DATA;
getFile(url); //путь к файлу
function getFile(fileName) {
    var request = new XMLHttpRequest();
    request.open('GET', fileName);
    request.onloadend = function() {
        parse(request.responseText);
    }
    request.send();
}

function parse(obj) {
    DATA = JSON.parse(obj);
    console.log(DATA.country_name);
    priceCityCountry(DATA.country_name);
}

/*Работа с выводом города, страны и стоимости оффера*/
var price = 0;
var city;
var myCountry;
var myCountryTwo;
var priceEl = document.getElementsByClassName('price');
var cityEl = document.getElementsByClassName('city');
var myCountryEl = document.getElementsByClassName('country');
var myCountryElTwo = document.getElementsByClassName('country2');

function priceCityCountry(country) {
    switch (country) {
        case 'Kazakhstan':
            myCountry = 'Казахстане';
            myCountryTwo = 'Казахстана';
            city = 'Астан';
            price = '1147 тенге';
            break;

        case 'Russia':
            myCountry = 'России';
            myCountryTwo = 'Росии';
            city = 'Москв';
            price = '99 руб';
            break;

        case 'Belarus':
            myCountry = 'Республике Беларусь';
            myCountryTwo = "Республики Беларусь";
            city = 'Минск';
            price = '1 рубль';
            break;

        case 'Georgia':
            myCountry = 'Грузии';
            myCountryTwo = 'Грузии';
            city = 'Тбилис '
            price = '1 лари';
            break;

        case 'Armenia':
            myCountry = 'Армении';
            myCountryTwo = 'Армении';
            city = 'Ереван';
            price = '1 драм';
            break;

        case 'Kyrgyzstan':
            myCountry = 'Кыргызстане';
            myCountryTwo = 'Кыргызстана';
            city = 'Бишкек';
            price = '1690 сом';
            break;

        case 'Austria':
            myCountry = 'Австрии';
            myCountryTwo = 'Австрии';
            city = 'Вен';
            price = '5,9 евро';
            break;

        case 'Belgium':
            myCountry = 'Бельгии';
            myCountryTwo = 'Бельгии';
            city = 'Брюссел';
            price = '5,9 евро';
            break;

        case 'Bulgaria':
            myCountry = 'Болгарии';
            myCountryTwo = 'Болгарии';
            city = 'София';
            price = '11,7 бгн';
            break;

        case 'Hungary':
            myCountry = 'Венгрии';
            myCountryTwo = 'Венгрии';
            city = 'Будапешт';
            price = '1902,7 HUF';
            break;

        case 'Great Britain':
            myCountry = 'Англии';
            myCountryTwo = 'Англии';
            city = 'Лондон';
            price = '5,9 GBP';
            break;

        case 'Germany':
            myCountry = 'Германии';
            myCountryTwo = 'Германии';
            city = 'Берлин';
            price = '5.9 евро';
            break;

        case 'Greece':
            myCountry = 'Греции';
            myCountryTwo = 'Греции';
            city = 'Афины '
            price = '5,9 евро';
            break;

        case 'Spain':
            myCountry = 'Испании';
            myCountryTwo = 'Испании';
            city = 'Мадрид';
            price = '5,9 евро';
            break;

        case 'Italy':
            myCountry = 'Италии';
            myCountryTwo = 'Италии';
            city = 'Рим';
            price = '5,9 евро';
            break;

        case 'Cyprus':
            myCountry = 'Кипре';
            myCountryTwo = 'Кипра';
            city = 'Никосий';
            price = '5,9 евро';
            break;

        case 'Latvia':
            myCountry = 'Латвии';
            myCountryTwo = 'Латвии';
            city = 'Ригу';
            price = '5,9 евро';
            break;

        case 'Lithuania':
            myCountry = 'Литве';
            myCountryTwo = 'Литвы';
            city = 'Вильнюс';
            price = '5,9 евро';
            break;

        case 'Poland':
            myCountry = 'Польше';
            myCountryTwo = 'Польши';
            city = 'Варшава';
            price = '1 злотый';
            break;

        case 'Portugal':
            myCountry = 'Португалии';
            myCountryTwo = 'Португалии';
            city = 'Лиссабон';
            price = '5,9 евро';
            break;

        case 'Romania':
            myCountry = 'Румынии';
            myCountryTwo = 'Румынии';
            city = 'Бухарест';
            price = '5,9 лей';
            break;

        case 'Slovakia':
            myCountry = 'Словакии';
            myCountryTwo = 'Словакии';
            city = 'Братислав';
            price = '5,9 евро';
            break;

        case 'Slovenia':
            myCountry = 'Словении';
            myCountryTwo = 'Словении';
            city = 'Люблян';
            price = '5,9 евро';
            break;

        case 'France':
            myCountry = 'Франции';
            myCountryTwo = 'Франции';
            city = 'Париж';
            price = '5,9 евро';
            break;

        case 'Croatia':
            myCountry = 'Хорватии';
            myCountryTwo = 'Хорватии';
            city = 'Загреб';
            price = '43,9 HRK';
            break;

        case 'Czech':
            myCountry = 'Чехии';
            myCountryTwo = 'Чехии';
            city = 'Прага';
            price = '153,9 CZK';
            break;

        case 'Switzerland':
            myCountry = 'Швейцарии';
            myCountryTwo = 'Швейцарии';
            city = 'Берн';
            price = '7,9 CHF';
            break;

        case 'Sweden':
            myCountry = 'Швеции';
            myCountryTwo = 'Швеции';
            city = 'Стокгольм';
            price = '59,7 SEK';
            break;

        case 'Estonia':
            myCountry = 'Эстонии';
            myCountryTwo = 'Эстонии';
            city = 'Таллин';
            price = '5,9 евро';
            break;

        default:
            myCountry = 'Европе';
            myCountryTwo = 'Европы';
            city = 'Берлин';
            price = '5,9 евро';
            break;
    }
    OutputPCC(priceEl, price);
    OutputPCC(cityEl, city);
    OutputPCC(myCountryEl, myCountry);
    OutputPCC(myCountryElTwo, myCountryTwo);
}

function OutputPCC(variable, inner) {
    for (var i = 0; i < variable.length; i++) {
        variable[i].innerHTML = inner;
    }
}

function handlePopup2() {
    var toogleSert = document.getElementById('toogleSertificate');
    toogleSert.classList.toggle('toogleSertic');
}
