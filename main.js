const request = require("request"); // npm install request
const cheerio = require("cheerio"); // npm install cheerio-httpcli 를 해야함


scraped = {
    'DATE': '',
    'EXCHANGE RATE': '',
    'BUY': '',
    'SELL': ''
}
 var choice;
 var array = ["USD", "EUR", "JPY", "CNY"];
 
 choice = array[0]; // 여기를 고차면 index 0: USD, index 1: EUR, index 2: JPY, index 3: CNY


function getData(choice) {

    switch (choice) {
        case "USD":
            request("https://finance.naver.com/marketindex/exchangeDailyQuote.nhn?marketindexCd=FX_USDKRW", function (err, res, body) {
        const $ = cheerio.load(body);
        const bodyList = $(".tbl_exchange tbody tr").map(function (i, element) {
            scraped['DATE'] = parseFloat(String($(element).find('td:nth-of-type(1)').text()).replace(/,/g, "")); // 필요한 부분은 다 string에서 float로 바꿈
            scraped['EXCHANGE RATE'] =  parseFloat(String($(element).find('td:nth-of-type(2)').text()).replace(/,/g, ""));
            scraped['BUY'] =  parseFloat(String($(element).find('td:nth-of-type(4)').text()).replace(/,/g, ""));
            scraped['SELL'] =  parseFloat(String($(element).find('td:nth-of-type(5)').text()).replace(/,/g, ""));
            console.log(scraped)
            });
        });
        break;
    case "EUR":
            request("https://finance.naver.com/marketindex/exchangeDailyQuote.nhn?marketindexCd=FX_EURKRW", function (err, res, body) {
        const $ = cheerio.load(body);
        const bodyList = $(".tbl_exchange tbody tr").map(function (i, element) {
            scraped['DATE'] = parseFloat(String($(element).find('td:nth-of-type(1)').text()).replace(/,/g, ""));
            scraped['EXCHANGE RATE'] =  parseFloat(String($(element).find('td:nth-of-type(2)').text()).replace(/,/g, ""));
            scraped['BUY'] =  parseFloat(String($(element).find('td:nth-of-type(4)').text()).replace(/,/g, ""));
            scraped['SELL'] =  parseFloat(String($(element).find('td:nth-of-type(5)').text()).replace(/,/g, ""));
            console.log(scraped)
        });
        

    });
    break;
    case "JPY":
            request("https://finance.naver.com/marketindex/exchangeDailyQuote.nhn?marketindexCd=FX_JPYKRW", function (err, res, body) {
        const $ = cheerio.load(body);

        const bodyList = $(".tbl_exchange tbody tr").map(function (i, element) {
            scraped['DATE'] = parseFloat(String($(element).find('td:nth-of-type(1)').text()).replace(/,/g, ""));
            scraped['EXCHANGE RATE'] =  parseFloat(String($(element).find('td:nth-of-type(2)').text()).replace(/,/g, ""));
            scraped['BUY'] =  parseFloat(String($(element).find('td:nth-of-type(4)').text()).replace(/,/g, ""));
            scraped['SELL'] =  parseFloat(String($(element).find('td:nth-of-type(5)').text()).replace(/,/g, ""));
            console.log(scraped)
        });
        

    });
    break;
    case "CNY":
            request("https://finance.naver.com/marketindex/exchangeDailyQuote.nhn?marketindexCd=FX_CNYKRW", function (err, res, body) {
        const $ = cheerio.load(body);

        const bodyList = $(".tbl_exchange tbody tr").map(function (i, element) {
            scraped['DATE'] = parseFloat(String($(element).find('td:nth-of-type(1)').text()).replace(/,/g, ""));
            scraped['EXCHANGE RATE'] =  parseFloat(String($(element).find('td:nth-of-type(2)').text()).replace(/,/g, ""));
            scraped['BUY'] =  parseFloat(String($(element).find('td:nth-of-type(4)').text()).replace(/,/g, ""));
            scraped['SELL'] =  parseFloat(String($(element).find('td:nth-of-type(5)').text()).replace(/,/g, ""));
            console.log(scraped)
        });
        

    });
    break;
   }
  
}
 
getData();
