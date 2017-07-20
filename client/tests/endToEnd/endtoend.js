const webdriver = require('selenium-webdriver');
const chrome = require('chromedriver');
const By = webdriver.By;

const driver = new webdriver.Builder()
    .forBrowser('chrome')
    .build();

describe('login form', function () {
    // e2e tests are too slow for default Mocha timeout
    this.timeout(30000);

    before(function (done) {
        driver.navigate().to('https://doc-lab.herokuapp.com/login')
            .then(() => done());
    });

    it('login successfully', function (done) {
        driver.findElement(By.name('email')).sendKeys('tests@gmail.com');
        driver.findElement(By.name('password')).sendKeys('tests');
        driver.findElement(By.xpath('//*[@id="app"]/div/div[2]/div/form/input[2]')).click()
            .then(() => done());
    });

    after(function (done) {
        driver.quit()
            .then(() => done());
    });
});
