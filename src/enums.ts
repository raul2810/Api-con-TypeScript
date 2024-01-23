/*estructura en typeScript que permite validar los valores de un tipo sin incurrir a la necesidad de refactorizar codigo
(mejor manera de declarar tipos que pueden tener multiple valor piensalo como una arreglo de tipos)*/
export enum Weather{
    Sunny= 'sunny',
    Rainy= 'rainy',
    Cloudy= 'cloudy',
    Windy= 'windy',
    Stormy= 'stormy'
}
export enum Visibility{
    Great= 'great',
    Good= 'good',
    Ok= 'ok',
    Poor= 'poor',
}