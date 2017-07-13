require('chromedriver');
const webdriver = require('selenium-webdriver');
const chrome = require('selenium-webdriver/chrome');
const By = webdriver.By;

const driver = new webdriver.Builder()
    .forBrowser('chrome')
    .build();

describe('login form', function () {
    // e2e tests are too slow for default Mocha timeout
    this.timeout(10000);

    before(function (done) {
        driver.navigate().to('http://localhost:3000/login')
            .then(() => done());
    });

    it('login successfully', function (done) {
        driver.findElement(By.xpath('//*[@id="app"]/div/div[2]/div/form/div[1]/div/input')).sendKeys('tests@gmail.com');
        driver.findElement(By.xpath('//*[@id="app"]/div/div[2]/div/form/input[1]')).sendKeys('tests');
        driver.findElement(By.xpath('//*[@id="app"]/div/div[2]/div/form/input[2]')).click()
            .then(() => done());
    });

    after(function (done) {
        driver.quit()
            .then(() => done());
    });
});
