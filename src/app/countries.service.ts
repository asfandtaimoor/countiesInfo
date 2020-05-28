import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CountriesService {

  constructor() { }

  getCountries(){
 return [
   {
  "id": "1",
  "country": "Afghanistan",
  "city": "Kabul",
  "idhere": "valuehere",
  "Currency": "Afghani (AFN)",

},
{
  "id": "2",
  "country": "Albania",
  "city": "Tirana",
  "idhere": "valuehere",
  "Currency": "Albania lek(ALL)",

},
{
  "id": "3",
  "country": "Algeria",
  "city": "Alger",
  "idhere": "valuehere",
  "Currency": "Algerian dinar",

},
{
  "id": "4",
  "country": "American Samoa",
  "city": "Fagatogo",
  "idhere": "valuehere",
  "Currency": "United States dollar (USD)",

},
{
  "id": "5",
  "country": "Andorra",
  "city": "Andorra la Vella",
  "idhere": "valuehere",
  "Currency": "European dollar",

},
{
  "id": "6",
  "country": "Angola",
  "city": "Luanda",
  "idhere": "valuehere",
  "Currency": "Angolan Kwanza (AOA)",

},
{
  "id": "7",
  "country": "Anguilla",
  "city": "The Valley",
  "idhere": "valuehere",
  "Currency": "newvalue",

},
{
  "id": "8",
  "country": "Antarctica",
  "city": null,
  "idhere": "valuehere",
  "Currency": "newvalue",

},
{
  "id": "9",
  "country": "Antigua and Barbuda",
  "city": "Saint John's",
  "idhere": "valuehere",
  "Currency": "newvalue",

},
{
  "id": "10",
  "country": "Argentina",
  "city": "Buenos Aires",
  "idhere": "valuehere",
  "Currency": "newvalue",

},
{
  "id": "11",
  "country": "Armenia",
  "city": "Yerevan",
  "idhere": "valuehere",
  "Currency": "newvalue",

},
{
  "id": "12",
  "country": "Aruba",
  "city": "Oranjestad",
  "idhere": "valuehere",
  "Currency": "newvalue",

},
{

  "id": "13",
  "country": "Australia",
  "city": "Canberra",
  "idhere": "valuehere",
  "Currency": "newvalue",

},
{
  "id": "14",
  "country": "Austria",
  "city": "Wien",
  "idhere": "valuehere",
  "Currency": "newvalue",

},
{
  "id": "15",
  "country": "Azerbaijan",
  "city": "Baku",
  "idhere": "valuehere",
  "Currency": "newvalue",

},
{
  "id": "16",
  "country": "Bahamas",
  "city": "Nassau",
  "idhere": "valuehere",
  "Currency": "newvalue",

},
{
  "id": "17",
  "country": "Bahrain",
  "city": "al-Manama",
  "idhere": "valuehere",
  "Currency": "newvalue",

},
{
  "id": "18",
  "country": "Bangladesh",
  "city": "Dhaka",
  "idhere": "valuehere",
  "Currency": "newvalue",

},
{
  "id": "19",
  "country": "Barbados",
  "city": "Bridgetown",
  "idhere": "valuehere",
  "Currency": "newvalue",
},

{
  "id": "20",
  "country": "Belarus",
  "city": "Minsk",
  "idhere": "valuehere",
  "Currency": "newvalue",

},
{
  "id": "21",
  "country": "Belgium",
  "city": "Bruxelles [Brussel]",
  "idhere": "valuehere",
  "Currency": "newvalue",

},
{
  "id": "22",
  "country": "Belize",
  "city": "Belmopan",
  "idhere": "valuehere",
  "Currency": "newvalue",

},
{
  "id": "23",
  "country": "Benin",
  "city": "Porto-Novo",
  "idhere": "valuehere",
  "Currency": "newvalue",

},
{
  "id": "24",
  "country": "Bermuda",
  "city": "Hamilton",
  "idhere": "valuehere",
  "Currency": "newvalue",

},
{
  "id": "25",
  "country": "Bhutan",
  "city": "Thimphu",
  "idhere": "valuehere",
  "Currency": "newvalue",

},
{
  "id": "26",
  "country": "Bolivia",
  "city": "La Paz",
  "idhere": "valuehere",
  "Currency": "newvalue",

},
{
  "id": "27",
  "country": "Bosnia and Herzegovina",
  "city": "Sarajevo",
  "idhere": "valuehere",
  "Currency": "newvalue",

},
{
  "id": "28",
  "country": "Botswana",
  "city": "Gaborone",
  "idhere": "valuehere",
  "Currency": "newvalue",

},
{
  "id": "29",
  "country": "Bouvet Island",
  "city": null,
  "idhere": "valuehere",
  "Currency": "newvalue",

},
{
  "id": "30",
  "country": "Brazil",
  "city": "Brasília",
  "idhere": "valuehere",
  "Currency": "newvalue",

},
{
  "id": "31",
  "country": "British Indian Ocean Territory",
  "city": null,
  "idhere": "valuehere",
  "Currency": "newvalue",

},
{
  "id": "32",
  "country": "Brunei",
  "city": "Bandar Seri Begawan",
  "idhere": "valuehere",
  "Currency": "newvalue",

},
{
  "id": "33",
  "country": "Bulgaria",
  "city": "Sofia",
  "idhere": "valuehere",
  "Currency": "newvalue",

},
{
  "id": "34",
  "country": "Burkina Faso",
  "city": "Ouagadougou",
  "idhere": "valuehere",
  "Currency": "newvalue",

},
{
  "id": "35",
  "country": "Burundi",
  "city": "Bujumbura",
  "idhere": "valuehere",
  "Currency": "newvalue",

},
{
  "id": "36",
  "country": "Cambodia",
  "city": "Phnom Penh",
  "idhere": "valuehere",
  "Currency": "newvalue",

},
{
  "id": "37",
  "country": "Cameroon",
  "city": "Yaound",
  "idhere": "valuehere",
  "Currency": "newvalue",

},
{
  "id": "38",
  "country": "Canada",
  "city": "Ottawa",
  "idhere": "valuehere",
  "Currency": "newvalue",

},
{
  "id": "39",
  "country": "Cape Verde",
  "city": "Praia",
  "idhere": "valuehere",
  "Currency": "newvalue",

},
{
  "id": "40",
  "country": "Cayman Islands",
  "city": "George Town",
  "idhere": "valuehere",
  "Currency": "newvalue",

},
{
  "id": "41",
  "country": "Central African Republic",
  "city": "Bangui",
  "idhere": "valuehere",
  "Currency": "newvalue",

},
{
  "id": "42",
  "country": "Chad",
  "city": "N'Djam",
  "idhere": "valuehere",
  "Currency": "newvalue",

},
{
  "id": "43",
  "country": "Chile",
  "city": "Santiago de Chile",
  "idhere": "valuehere",
  "Currency": "newvalue",

},
{
  "id": "44",
  "country": "China",
  "city": "Peking",
  "idhere": "valuehere",
  "Currency": "newvalue",

},
{
  "id": "45",
  "country": "Christmas Island",
  "city": "Flying Fish Cove",
  "idhere": "valuehere",
  "Currency": "newvalue",

},
{
  "id": "46",
  "country": "Cocos (Keeling) Islands",
  "city": "West Island",
  "idhere": "valuehere",
  "Currency": "newvalue",

},
{
  "id": "47",
  "country": "Colombia",
  "city": "Santaf",
  "idhere": "valuehere",
  "Currency": "newvalue",

},
{
  "id": "48",
  "country": "Comoros",
  "city": "Moroni",
  "idhere": "valuehere",
  "Currency": "newvalue",

},
{
  "id": "49",
  "country": "Congo",
  "city": "Brazzaville",
  "idhere": "valuehere",
  "Currency": "newvalue",

},
{
  "id": "50",
  "country": "Cook Islands",
  "city": "Avarua",
  "idhere": "valuehere",
  "Currency": "newvalue",

},
{
  "id": "51",
  "country": "Costa Rica",
  "city": "San Jos",
  "idhere": "valuehere",
  "Currency": "newvalue",

},
{
  "id": "52",
  "country": "Croatia",
  "city": "Zagreb",
  "idhere": "valuehere",
  "Currency": "newvalue",

},
{
  "id": "53",
  "country": "Cuba",
  "city": "La Habana",
  "idhere": "valuehere",
  "Currency": "newvalue",

},
{
  "id": "54",
  "country": "Cyprus",
  "city": "Nicosia",
  "idhere": "valuehere",
  "Currency": "newvalue",

},
{
  "id": "55",
  "country": "Czech Republic",
  "city": "Praha",
  "idhere": "valuehere",
  "Currency": "newvalue",

},
{
  "id": "56",
  "country": "Denmark",
  "city": "Copenhagen",
  "idhere": "valuehere",
  "Currency": "newvalue",

},
{
  "id": "57",
  "country": "Djibouti",
  "city": "Djibouti",
  "idhere": "valuehere",
  "Currency": "newvalue",

},
{
  "id": "58",
  "country": "Dominica",
  "city": "Roseau",
  "idhere": "valuehere",
  "Currency": "newvalue",

},
{
  "id": "59",
  "country": "Dominican Republic",
  "city": "Santo Domingo de Guzm",
  "idhere": "valuehere",
  "Currency": "newvalue",

},
{
  "id": "60",
  "country": "East Timor",
  "city": "Dili",
  "idhere": "valuehere",
  "Currency": "newvalue",

},
{
  "id": "61",
  "country": "Ecuador",
  "city": "Quito",
  "idhere": "valuehere",
  "Currency": "newvalue",

},
{
  "id": "62",
  "country": "Egypt",
  "city": "Cairo",
  "idhere": "valuehere",
  "Currency": "newvalue",

},
{
  "id": "63",
  "country": "El Salvador",
  "city": "San Salvador",
  "idhere": "valuehere",
  "Currency": "newvalue",

},
{
  "id": "64",
  "country": "England",
  "city": "London",
  "idhere": "valuehere",
  "Currency": "newvalue",

},
{
  "id": "65",
  "country": "Equatorial Guinea",
  "city": "Malabo",
  "idhere": "valuehere",
  "Currency": "newvalue",

},
{
  "id": "66",
  "country": "Eritrea",
  "city": "Asmara",
  "idhere": "valuehere",
  "Currency": "newvalue",

},
{
  "id": "67",
  "country": "Estonia",
  "city": "Tallinn",
  "idhere": "valuehere",
  "Currency": "newvalue",

},
{
  "id": "68",
  "country": "Ethiopia",
  "city": "Addis Abeba",
  "idhere": "valuehere",
  "Currency": "newvalue",

},
{
  "id": "69",
  "country": "Falkland Islands",
  "city": "Stanley",
  "idhere": "valuehere",
  "Currency": "newvalue",

},
{
  "id": "70",
  "country": "Faroe Islands",
  "city": "Tórshavn",
  "idhere": "valuehere",
  "Currency": "newvalue",

},
{
  "id": "71",
  "country": "Fiji Islands",
  "city": "Suva",
  "idhere": "valuehere",
  "Currency": "newvalue",

},
{
  "id": "72",
  "country": "Finland",
  "city": "Helsinki [Helsingfors]",
  "idhere": "valuehere",
  "Currency": "newvalue",

},
{
  "id": "73",
  "country": "France",
  "city": "Paris",
  "idhere": "valuehere",
  "Currency": "newvalue",

},
{
  "id": "74",
  "country": "French Guiana",
  "city": "Cayenne",
  "idhere": "valuehere",
  "Currency": "newvalue",

},
{
  "id": "75",
  "country": "French Polynesia",
  "city": "Papeete",
  "idhere": "valuehere",
  "Currency": "newvalue",

},
{
  "id": "76",
  "country": "French Southern territories",
  "city": null,
  "idhere": "valuehere",
  "Currency": "newvalue",

},
{
  "id": "77",
  "country": "Gabon",
  "city": "Libreville",
  "idhere": "valuehere",
  "Currency": "newvalue",

},
{
  "id": "78",
  "country": "Gambia",
  "city": "Banjul",
  "idhere": "valuehere",
  "Currency": "newvalue",

},
{
  "id": "79",
  "country": "Georgia",
  "city": "Tbilisi",
  "idhere": "valuehere",
  "Currency": "newvalue",

},
{
  "id": "80",
  "country": "Germany",
  "city": "Berlin",
  "idhere": "valuehere",
  "Currency": "newvalue",

},
{
  "id": "81",
  "country": "Ghana",
  "city": "Accra",
  "idhere": "valuehere",
  "Currency": "newvalue",

},
{
  "id": "82",
  "country": "Gibraltar",
  "city": "Gibraltar",
  "idhere": "valuehere",
  "Currency": "newvalue",

},
{
  "id": "83",
  "country": "Greece",
  "city": "Athenai",
  "idhere": "valuehere",
  "Currency": "newvalue",

},
{

  "id": "84",
  "country": "Greenland",
  "city": "Nuuk",
  "idhere": "valuehere",
  "Currency": "newvalue",

},
{
  "id": "85",
  "country": "Grenada",
  "city": "Saint George's",
  "idhere": "valuehere",
  "Currency": "newvalue",

},
{
  "id": "86",
  "country": "Guadeloupe",
  "city": "Basse-Terre",
  "idhere": "valuehere",
  "Currency": "newvalue",

},
{
  "id": "87",
  "country": "Guam",
  "city": "Aga",
  "idhere": "valuehere",
  "Currency": "newvalue",

},
{
  "id": "88",
  "country": "Guatemala",
  "city": "Ciudad de Guatemala",
  "idhere": "valuehere",
  "Currency": "newvalue",

},
{
  "id": "89",
  "country": "Guinea",
  "city": "Conakry",
  "idhere": "valuehere",
  "Currency": "newvalue",

},
{
  "id": "90",
  "country": "Guinea-Bissau",
  "city": "Bissau",
  "idhere": "valuehere",
  "Currency": "newvalue",

},
{
  "id": "91",
  "country": "Guyana",
  "city": "Georgetown",
  "idhere": "valuehere",
  "Currency": "newvalue",

},
{
  "id": "92",
  "country": "Haiti",
  "city": "Port-au-Prince",
  "idhere": "valuehere",
  "Currency": "newvalue",

},
{
  "id": "93",
  "country": "Heard Island and McDonald Islands",
  "city": null,
  "idhere": "valuehere",
  "Currency": "newvalue",

},
{
  "id": "94",
  "country": "Holy See (Vatican City State)",
  "city": "Citt",
  "idhere": "valuehere",
  "Currency": "newvalue",

},
{
  "id": "95",
  "country": "Honduras",
  "city": "Tegucigalpa",
  "idhere": "valuehere",
  "Currency": "newvalue",

},
{
  "id": "96",
  "country": "Hong Kong",
  "city": "Victoria",
  "idhere": "valuehere",
  "Currency": "newvalue",

},
{
  "id": "97",
  "country": "Hungary",
  "city": "Budapest",
  "idhere": "valuehere",
  "Currency": "newvalue",

},
{
  "id": "98",
  "country": "Iceland",
  "city": "Reykjav",
  "idhere": "valuehere",
  "Currency": "newvalue",

},
{
  "id": "99",
  "country": "India",
  "city": "New Delhi",
  "idhere": "valuehere",
  "Currency": "newvalue",

},
{
  "id": "100",
  "country": "Indonesia",
  "city": "Jakarta",
  "idhere": "valuehere",
  "Currency": "newvalue",

},
{

  "id": "101",
  "country": "Iran",
  "city": "Tehran",
  "idhere": "valuehere",
  "Currency": "newvalue",

},
{
  "id": "102",
  "country": "Iraq",
  "city": "Baghdad",
  "idhere": "valuehere",
  "Currency": "newvalue",

},
{
  "id": "103",
  "country": "Ireland",
  "city": "Dublin",
  "idhere": "valuehere",
  "Currency": "newvalue",

},
{
  "id": "104",
  "country": "Israel",
  "city": "Jerusalem",
  "idhere": "valuehere",
  "Currency": "newvalue",

},
{
  "id": "105",
  "country": "Italy",
  "city": "Roma",
  "idhere": "valuehere",
  "Currency": "newvalue",

},
{
  "id": "106",
  "country": "Ivory Coast",
  "city": "Yamoussoukro",
  "idhere": "valuehere",
  "Currency": "newvalue",

},
{
  "id": "107",
  "country": "Jamaica",
  "city": "Kingston",
  "idhere": "valuehere",
  "Currency": "newvalue",

},
{
  "id": "108",
  "country": "Japan",
  "city": "Tokyo",
  "idhere": "valuehere",
  "Currency": "newvalue",

},
{

  "id": "109",
  "country": "Jordan",
  "city": "Amman",
  "idhere": "valuehere",
  "Currency": "newvalue",

},
{
  "id": "110",
  "country": "Kazakhstan",
  "city": "Astana",
  "idhere": "valuehere",
  "Currency": "newvalue",

},
{
  "id": "111",
  "country": "Kenya",
  "city": "Nairobi",
  "idhere": "valuehere",
  "Currency": "newvalue",

},
{
  "id": "112",
  "country": "Kiribati",
  "city": "Bairiki",
  "idhere": "valuehere",
  "Currency": "newvalue",

},
{
  "id": "113",
  "country": "Kuwait",
  "city": "Kuwait",
  "idhere": "valuehere",
  "Currency": "newvalue",

},
{
  "id": "114",
  "country": "Kyrgyzstan",
  "city": "Bishkek",
  "idhere": "valuehere",
  "Currency": "newvalue",

},
{
  "id": "115",
  "country": "Laos",
  "city": "Vientiane",
  "idhere": "valuehere",
  "Currency": "newvalue",

},
{
  "id": "116",
  "country": "Latvia",
  "city": "Riga",
  "idhere": "valuehere",
  "Currency": "newvalue",

},
{
  "id": "117",
  "country": "Lebanon",
  "city": "Beirut",
  "idhere": "valuehere",
  "Currency": "newvalue",

},
{
  "id": "118",
  "country": "Lesotho",
  "city": "Maseru",
  "idhere": "valuehere",
  "Currency": "newvalue",

},
{
  "id": "119",
  "country": "Liberia",
  "city": "Monrovia",
  "idhere": "valuehere",
  "Currency": "newvalue",

},
{
  "id": "120",
  "country": "Libyan Arab Jamahiriya",
  "city": "Tripoli",
  "idhere": "valuehere",
  "Currency": "newvalue",

},
{
  "id": "121",
  "country": "Liechtenstein",
  "city": "Vaduz",
  "idhere": "valuehere",
  "Currency": "newvalue",

},
{
  "id": "122",
  "country": "Lithuania",
  "city": "Vilnius",
  "idhere": "valuehere",
  "Currency": "newvalue",

},
{
  "id": "123",
  "country": "Luxembourg",
  "city": "Luxembourg [Luxemburg/L",
  "idhere": "valuehere",
  "Currency": "newvalue",

},
{
  "id": "124",
  "country": "Macao",
  "city": "Macao",
  "idhere": "valuehere",
  "Currency": "newvalue",

},
{
  "id": "125",
  "country": "North Macedonia",
  "city": "Skopje",
  "idhere": "valuehere",
  "Currency": "newvalue",

},
{
  "id": "126",
  "country": "Madagascar",
  "city": "Antananarivo",
  "idhere": "valuehere",
  "Currency": "newvalue",

},
{
  "id": "127",
  "country": "Malawi",
  "city": "Lilongwe",
  "idhere": "valuehere",
  "Currency": "newvalue",

},
{
  "id": "128",
  "country": "Malaysia",
  "city": "Kuala Lumpur",
  "idhere": "valuehere",
  "Currency": "newvalue",

},
{
  "id": "129",
  "country": "Maldives",
  "city": "Male",
  "idhere": "valuehere",
  "Currency": "newvalue",

},
{
  "id": "130",
  "country": "Mali",
  "city": "Bamako",
  "idhere": "valuehere",
  "Currency": "newvalue",

},
{
  "id": "131",
  "country": "Malta",
  "city": "Valletta",
  "idhere": "valuehere",
  "Currency": "newvalue",

},
{
  "id": "132",
  "country": "Marshall Islands",
  "city": "Dalap-Uliga-Darrit",
  "idhere": "valuehere",
  "Currency": "newvalue",

},
{
  "id": "133",
  "country": "Martinique",
  "city": "Fort-de-France",
  "idhere": "valuehere",
  "Currency": "newvalue",

},
{
  "id": "134",
  "country": "Mauritania",
  "city": "Nouakchott",
  "idhere": "valuehere",
  "Currency": "newvalue",

},
{
  "id": "135",
  "country": "Mauritius",
  "city": "Port-Louis",
  "idhere": "valuehere",
  "Currency": "newvalue",

},
{
  "id": "136",
  "country": "Mayotte",
  "city": "Mamoutzou",
  "idhere": "valuehere",
  "Currency": "newvalue",

},
{
  "id": "137",
  "country": "Mexico",
  "city": "Ciudad de M",
  "idhere": "valuehere",
  "Currency": "newvalue",

},
{
  "id": "138",
  "country": "Micronesia, Federated States of",
  "city": "Palikir",
  "idhere": "valuehere",
  "Currency": "newvalue",

},
{
  "id": "139",
  "country": "Moldova",
  "city": "Chisinau",
  "idhere": "valuehere",
  "Currency": "newvalue",

},
{
  "id": "140",
  "country": "Monaco",
  "city": "Monaco-Ville",
  "idhere": "valuehere",
  "Currency": "newvalue",

},
{
  "id": "141",
  "country": "Mongolia",
  "city": "Ulan Bator",
  "idhere": "valuehere",
  "Currency": "newvalue",

},
{

  "id": "142",
  "country": "Montenegro",
  "city": "Podgorica",
  "idhere": "valuehere",
  "Currency": "newvalue",

},
{
  "id": "143",
  "country": "Montserrat",
  "city": "Plymouth",
  "idhere": "valuehere",
  "Currency": "newvalue",

},
{

  "id": "144",
  "country": "Morocco",
  "city": "Rabat",
  "idhere": "valuehere",
  "Currency": "newvalue",

},
{
  "id": "145",
  "country": "Mozambique",
  "city": "Maputo",
  "idhere": "valuehere",
  "Currency": "newvalue",

},
{
  "id": "146",
  "country": "Myanmar",
  "city": "Rangoon (Yangon)",
  "idhere": "valuehere",
  "Currency": "newvalue",

},
{
  "id": "147",
  "country": "Namibia",
  "city": "Windhoek",
  "idhere": "valuehere",
  "Currency": "newvalue",

},
{
  "id": "148",
  "country": "Nauru",
  "city": "Yaren",
  "idhere": "valuehere",
  "Currency": "newvalue",

},
{
  "id": "149",
  "country": "Nepal",
  "city": "Kathmandu",
  "idhere": "valuehere",
  "Currency": "newvalue",

},
{
  "id": "150",
  "country": "Netherlands",
  "city": "Amsterdam",
  "idhere": "valuehere",
  "Currency": "newvalue",

},
{
  "id": "151",
  "country": "Netherlands Antilles",
  "city": "Willemstad",
  "idhere": "valuehere",
  "Currency": "newvalue",

},
{
  "id": "152",
  "country": "New Caledonia",
  "city": "Noum",
  "idhere": "valuehere",
  "Currency": "newvalue",

},
{
  "id": "153",
  "country": "New Zealand",
  "city": "Wellington",
  "idhere": "valuehere",
  "Currency": "newvalue",

},
{
  "id": "154",
  "country": "Nicaragua",
  "city": "Managua",
  "idhere": "valuehere",
  "Currency": "newvalue",

},
{
  "id": "155",
  "country": "Niger",
  "city": "Niamey",
  "idhere": "valuehere",
  "Currency": "newvalue",

},
{
  "id": "156",
  "country": "Nigeria",
  "city": "Abuja",
  "idhere": "valuehere",
  "Currency": "newvalue",

},
{
  "id": "157",
  "country": "Niue",
  "city": "Alofi",
  "idhere": "valuehere",
  "Currency": "newvalue",

},
{
  "id": "158",
  "country": "Norfolk Island",
  "city": "Kingston",
  "idhere": "valuehere",
  "Currency": "newvalue",

},
{
  "id": "159",
  "country": "North Korea",
  "city": "Pyongyang",
  "idhere": "valuehere",
  "Currency": "newvalue",

},
{
  "id": "160",
  "country": "Northern Ireland",
  "city": "Belfast",
  "idhere": "valuehere",
  "Currency": "newvalue",

},
{
  "id": "161",
  "country": "Northern Mariana Islands",
  "city": "Garapan",
  "idhere": "valuehere",
  "Currency": "newvalue",

},
{

  "id": "162",
  "country": "Norway",
  "city": "Oslo",
  "idhere": "valuehere",
  "Currency": "newvalue",

},
{
  "id": "163",
  "country": "Oman",
  "city": "Masqat",
  "idhere": "valuehere",
  "Currency": "newvalue",

},
{
  "id": "164",
  "country": "Pakistan",
  "city": "Islamabad",
  "idhere": "valuehere",
  "Currency": "newvalue",

},
{
  "id": "165",
  "country": "Palau",
  "city": "Koror",
  "idhere": "valuehere",
  "Currency": "newvalue",

},
{
  "id": "166",
  "country": "Palestine",
  "city": "Gaza",
  "idhere": "valuehere",
  "Currency": "newvalue",

},
{
  "id": "167",
  "country": "Panama",
  "city": "Ciudad de Panam",
  "idhere": "valuehere",
  "Currency": "newvalue",

},
{
  "id": "168",
  "country": "Papua New Guinea",
  "city": "Port Moresby",
  "idhere": "valuehere",
  "Currency": "newvalue",

},
{
  "id": "169",
  "country": "Paraguay",
  "city": "Asunci",
  "idhere": "valuehere",
  "Currency": "newvalue",

},
{
  "id": "170",
  "country": "Peru",
  "city": "Lima",
  "idhere": "valuehere",
  "Currency": "newvalue",

},
{
  "id": "171",
  "country": "Philippines",
  "city": "Manila",
  "idhere": "valuehere",
  "Currency": "newvalue",

},
{
  "id": "172",
  "country": "Pitcairn",
  "city": "Adamstown",
  "idhere": "valuehere",
  "Currency": "newvalue",

},
{
  "id": "173",
  "country": "Poland",
  "city": "Warszawa",
  "idhere": "valuehere",
  "Currency": "newvalue",

},
{
  "id": "174",
  "country": "Portugal",
  "city": "Lisboa",
  "idhere": "valuehere",
  "Currency": "newvalue",

},
{
  "id": "175",
  "country": "Puerto Rico",
  "city": "San Juan",
  "idhere": "valuehere",
  "Currency": "newvalue",

},
{
  "id": "176",
  "country": "Qatar",
  "city": "Doha",
  "idhere": "valuehere",
  "Currency": "newvalue",

},
{
  "id": "177",
  "country": "Reunion",
  "city": "Saint-Denis",
  "idhere": "valuehere",
  "Currency": "newvalue",

},
{
  "id": "178",
  "country": "Romania",
  "city": "Bucuresti",
  "idhere": "valuehere",
  "Currency": "newvalue",

},
{
  "id": "179",
  "country": "Russian Federation",
  "city": "Moscow",
  "idhere": "valuehere",
  "Currency": "newvalue",

},
{
  "id": "180",
  "country": "Rwanda",
  "city": "Kigali",
  "idhere": "valuehere",
  "Currency": "newvalue",

},
{
  "id": "181",
  "country": "Saint Helena",
  "city": "Jamestown",
  "idhere": "valuehere",
  "Currency": "newvalue",

},
{
  "id": "182",
  "country": "Saint Kitts and Nevis",
  "city": "Basseterre",
  "idhere": "valuehere",
  "Currency": "newvalue",

},
{
  "id": "183",
  "country": "Saint Lucia",
  "city": "Castries",
  "idhere": "valuehere",
  "Currency": "newvalue",

},
{
  "id": "184",
  "country": "Saint Pierre and Miquelon",
  "city": "Saint-Pierre",
  "idhere": "valuehere",
  "Currency": "newvalue",

},
{
  "id": "185",
  "country": "Saint Vincent and the Grenadines",
  "city": "Kingstown",
  "idhere": "valuehere",
  "Currency": "newvalue",

},
{
  "id": "186",
  "country": "Samoa",
  "city": "Apia",
  "idhere": "valuehere",
  "Currency": "newvalue",

},
{
  "id": "187",
  "country": "San Marino",
  "city": "San Marino",
  "idhere": "valuehere",
  "Currency": "newvalue",

},
{
  "id": "188",
  "country": "Sao Tome and Principe",
  "city": "S",
  "idhere": "valuehere",
  "Currency": "newvalue",

},
{
  "id": "189",
  "country": "Saudi Arabia",
  "city": "Riyadh",
  "idhere": "valuehere",
  "Currency": "newvalue",

},
{
  "id": "190",
  "country": "Scotland",
  "city": "Edinburgh",
  "idhere": "valuehere",
  "Currency": "newvalue",

},
{
  "id": "191",
  "country": "Senegal",
  "city": "Dakar",
  "idhere": "valuehere",
  "Currency": "newvalue",

},
{
  "id": "192",
  "country": "Seychelles",
  "city": "Victoria",
  "idhere": "valuehere",
  "Currency": "newvalue",

},
{
  "id": "193",
  "country": "Sierra Leone",
  "city": "Freetown",
  "idhere": "valuehere",
  "Currency": "newvalue",

},
{
  "id": "194",
  "country": "Singapore",
  "city": "Singapore",
  "idhere": "valuehere",
  "Currency": "newvalue",

},
{
  "id": "195",
  "country": "Slovakia",
  "city": "Bratislava",
  "idhere": "valuehere",
  "Currency": "newvalue",

},
{
  "id": "196",
  "country": "Slovenia",
  "city": "Ljubljana",
  "idhere": "valuehere",
  "Currency": "newvalue",

},
{
  "id": "197",
  "country": "Solomon Islands",
  "city": "Honiara",
  "idhere": "valuehere",
  "Currency": "newvalue",

},
{
  "id": "198",
  "country": "Somalia",
  "city": "Mogadishu",
  "idhere": "valuehere",
  "Currency": "newvalue",

},
{
  "id": "199",
  "country": "South Africa",
  "city": "Pretoria",
  "idhere": "valuehere",
  "Currency": "newvalue",

},
{
  "id": "200",
  "country": "South Georgia and the South Sandwich Islands",
  "city": null,
  "idhere": "valuehere",
  "Currency": "newvalue",

},
{
  "id": "200",
  "country": "South Korea",
  "city": "Seoul",
  "idhere": "valuehere",
  "Currency": "newvalue",

},
{
  "id": "201",
  "country": "South Sudan",
  "city": "Juba",
  "idhere": "valuehere",
  "Currency": "newvalue",

},
{
  "id": "202",
  "country": "Spain",
  "city": "Madrid",
  "idhere": "valuehere",
  "Currency": "newvalue",
},
{
  "id": "203",
  "country": "SriLanka",
  "city": null,
  "idhere": "valuehere",
  "Currency": "newvalue",

},
{
  "id": "204",
  "country": "Sudan",
  "city": "Khartum",
  "idhere": "valuehere",
  "Currency": "newvalue",

},
{
  "id": "205",
  "country": "Suriname",
  "city": "Paramaribo",
  "idhere": "valuehere",
  "Currency": "newvalue",

},
{
  "id": "206",
  "country": "Svalbard and Jan Mayen",
  "city": "Longyearbyen",
  "idhere": "valuehere",
  "Currency": "newvalue",

},
{
  "id": "207",
  "country": "Swaziland",
  "city": "Mbabane",
  "idhere": "valuehere",
  "Currency": "newvalue",

},
{
  "id": "208",
  "country": "Sweden",
  "city": "Stockholm",
  "idhere": "valuehere",
  "Currency": "newvalue",

},
{
  "id": "209",
  "country": "Switzerland",
  "city": "Bern",
  "idhere": "valuehere",
  "Currency": "newvalue",

},
{
  "id": "210",
  "country": "Syria",
  "city": "Damascus",
  "idhere": "valuehere",
  "Currency": "newvalue",

},
{
  "id": "211",
  "country": "Tajikistan",
  "city": "Dushanbe",
  "idhere": "valuehere",
  "Currency": "newvalue",

},
{
  "id": "212",
  "country": "Tanzania",
  "city": "Dodoma",
  "idhere": "valuehere",
  "Currency": "newvalue",

},
{
  "id": "213",
  "country": "Thailand",
  "city": "Bangkok",
  "idhere": "valuehere",
  "Currency": "newvalue",

},
{
  "id": "214",
  "country": "The Democratic Republic of Congo",
  "city": null,
  "idhere": "valuehere",
  "Currency": "newvalue",

},
{
  "id": "215",
  "country": "Togo",
  "city": "Lom",
  "idhere": "valuehere",
  "Currency": "newvalue",

},
{
  "id": "216",
  "country": "Tokelau",
  "city": "Fakaofo",
  "idhere": "valuehere",
  "Currency": "newvalue",

},
{
  "id": "217",
  "country": "Tonga",
  "city": "Nuku'alofa",
  "idhere": "valuehere",
  "Currency": "newvalue",

},
{
  "id": "218",
  "country": "Trinidad and Tobago",
  "city": "Port-of-Spain",
  "idhere": "valuehere",
  "Currency": "newvalue",
},
{
  "id": "219",
  "country": "Tunisia",
  "city": "Tunis",
  "idhere": "valuehere",
  "Currency": "newvalue",

},
{
  "id": "220",
  "country": "Turkey",
  "city": "Ankara",
  "idhere": "valuehere",
  "Currency": "newvalue",

},
{
  "id": "121",
  "country": "Turkmenistan",
  "city": "Ashgabat",
  "idhere": "valuehere",
  "Currency": "newvalue",

},
{
  "id": "222",
  "country": "Turks and Caicos Islands",
  "city": "Cockburn Town",
  "idhere": "valuehere",
  "Currency": "newvalue",

},
{
  "id": "223",
  "country": "Tuvalu",
  "city": "Funafuti",
  "idhere": "valuehere",
  "Currency": "newvalue",

},
{
  "id": "225",
  "country": "Uganda",
  "city": "Kampala",
  "idhere": "valuehere",
  "Currency": "newvalue",

},
{
  "id": "226",
  "country": "Ukraine",
  "city": "Kyiv",
  "idhere": "valuehere",
  "Currency": "newvalue",

},
{
  "id": "227",
  "country": "United Arab Emirates",
  "city": "Abu Dhabi",
  "idhere": "valuehere",
  "Currency": "newvalue",

},
{
  "id": "228",
  "country": "United Kingdom",
  "city": "London",
  "idhere": "valuehere",
  "Currency": "newvalue",

},
{
  "id": "229",
  "country": "United States",
  "city": "Washington",
  "idhere": "valuehere",
  "Currency": "newvalue",

},
{
  "id": "230",
  "country": "United States Minor Outlying Islands",
  "city": null,
  "idhere": "valuehere",
  "Currency": "newvalue",

},
{
  "id": "131",
  "country": "Uruguay",
  "city": "Montevideo",
  "idhere": "valuehere",
  "Currency": "newvalue",
},
{
  "id": "232",
  "country": "Uzbekistan",
  "city": "Toskent",
  "idhere": "valuehere",
  "Currency": "newvalue",

},
{
  "id": "233",
  "country": "Vanuatu",
  "city": "Port-Vila",
  "idhere": "valuehere",
  "Currency": "newvalue",

},
{
  "id": "234",
  "country": "Venezuela",
  "city": "Caracas",
  "idhere": "valuehere",
  "Currency": "newvalue",

},
{
  "id": "235",
  "country": "Vietnam",
  "city": "Hanoi",
  "idhere": "valuehere",
  "Currency": "newvalue",

},
{
  "id": "236",
  "country": "Virgin Islands, British",
  "city": "Road Town",
  "idhere": "valuehere",
  "Currency": "newvalue",

},
{
  "id": "237",
  "country": "Virgin Islands, U.S.",
  "city": "Charlotte Amalie",
  "idhere": "valuehere",
  "Currency": "newvalue",

},
{
  "id": "238",
  "country": "Wales",
  "city": "Cardiff",
  "idhere": "valuehere",
  "Currency": "newvalue",

},
{
  "id": "239",
  "country": "Wallis and Futuna",
  "city": "Mata-Utu",
  "idhere": "valuehere",
  "Currency": "newvalue",

},
{
  "id": "240",
  "country": "Western Sahara",
  "city": "El-Aai",
  "idhere": "valuehere",
  "Currency": "newvalue",

},
{
  "id": "141",
  "country": "Yemen",
  "city": "Sanaa",
  "idhere": "valuehere",
  "Currency": "newvalue",

},
{
  "id": "242",
  "country": "Yugoslavia",
  "city": "Beograd",
  "idhere": "valuehere",
  "Currency": "newvalue",

},
{
  "id": "243",
  "country": "Zambia",
  "city": "Lusaka",
  "idhere": "valuehere",
  "Currency": "newvalue",

},
{
  "id": "244",
  "country": "Zimbabwe",
  "city": "Harare",
  "idhere": "valuehere",
  "Currency": "newvalue",

}
  ]
}

}

// Test


// {'id':1 , 'city':'Angular' , 'detail':'Presented by google' },
// {'id':2 , 'city':'Bootstrap', 'detail':'Very famous css framework'},
// {'id':3 , 'city':'Vue', 'detail':'Light weight js framework'},
// {'id':4 , 'city':'React', 'detail': 'Framework by facebook'},
// {'id':5 , 'city':'AntDesign', 'detail':'Design for the developer'},
// {'id':6 , 'city':'Ionic', 'detail':'Make apps for the multi platform application'}
