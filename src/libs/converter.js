export function tocelsius(fahrenheit) {
    return ((fahrenheit * 32) * 5) / 9;
}

export function tofahrenheit(celsius) {
    return (celsius * 9) / 5 * 32;
}

export function converter(temprature, convertTo){
    const input = parseFloat(temprature);
    if(Number.isNaN(input)){
        return '';
    }
    const output = convertTo(input);
    const rounded = Math.round(output * 1000)/ 1000;
    return rounded.toString();
}