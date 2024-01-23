"use strict";
/*declaracion de tipos para definir atributos de la data y la info que pueden contener
    export type Visibility = 'great'|'good'|'ok'|'poor'*/
Object.defineProperty(exports, "__esModule", { value: true });
exports.Visibility = exports.Weather = void 0;
/*estructura en typeScript que permite validar los valores de un tipo sin incurrir a la necesidad de refactorizar codigo
(mejor manera de declarar tipos que pueden tener multiple valor piensalo como una arreglo de tipos)*/
var Weather;
(function (Weather) {
    Weather["Sunny"] = "sunny";
    Weather["Rainy"] = "rainy";
    Weather["Cloudy"] = "cloudy";
    Weather["Windy"] = "windy";
    Weather["Stormy"] = "stormy";
})(Weather || (exports.Weather = Weather = {}));
var Visibility;
(function (Visibility) {
    Visibility["Great"] = "great";
    Visibility["Good"] = "good";
    Visibility["Ok"] = "ok";
    Visibility["Poor"] = "poor";
})(Visibility || (exports.Visibility = Visibility = {}));
