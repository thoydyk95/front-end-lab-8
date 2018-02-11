window.onload = function() {
    var usd = parseFloat(prompt('enter amount of USD'));
    var eur = parseFloat(prompt('enter amount of EUR'));
    var oneEUR = 33.2324;
    var oneUSD = 27.1240;
    if (usd > 0 && eur > 0) {
        var eur_uah = oneEUR * eur;
        eur_uah = parseFloat(eur_uah.toFixed(2));
        var usd_uah = oneUSD * usd;
        usd_uah = parseFloat(usd_uah.toFixed(2));
        var eur_usd = oneEUR / oneUSD;
        eur_usd = parseFloat(eur_usd.toFixed(2));
        console.log(eur + ' euros are equal ' + eur_uah + ' UAH, ' + usd + ' dollars are equal ' + usd_uah + ' UAH, one euro is equal ' + eur_usd.toFixed(3) + ' dollars.');
    } else {
        console.log('Incorrect data');
    }

}
