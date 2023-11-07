export async function currentDay() {
    const response = await fetch("https://api.privatbank.ua/p24api/pubinfo?exchange&json&coursid=11");
    const currencies = await response.json();
    return currencies;
}