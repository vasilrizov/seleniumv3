//test.js

//Import requirement packages
require('chromedriver');
const assert = require('assert');
const {Builder, Key, By, until} = require('selenium-webdriver')

describe('wikipedia.org', function() {
    let driver;

    before(async function()  {
        driver = await new Builder().forBrowser('chrome').build();
    });

    it('Get Software metric - Wikipedia', async function() {
        await driver.get('https://en.wikipedia.org/wiki/Software_metric');

        let title = await driver.getTitle();
        assert.equal(title, 'Software metric - Wikipedia');
    });

} )

describe('Checkout wikipedia.org', function() {
    let driver;

    before(async function()  {
        driver = await new Builder().forBrowser('chrome').build();
    });

    it('Get Software metric - Wikipedia', async function() {
        await driver.get('https://en.wikipedia.org/wiki/Software_metric');

        let title = await driver.getTitle();
        assert.equal(title, 'Software metric - Wikipedia');
    });
    after(() => driver && driver.quit());

} )

describe('Checkout wikipedia.org', function() {
    let driver;

    before(async function()  {
        driver = await new Builder().forBrowser('chrome').build();
    });

    it('Get Software metric - Wikipedia', async function() {
        await driver.get('https://en.wikipedia.org/wiki/Software_metric');

        let title = await driver.getTitle();
        assert.equal(title, 'Software metric - Wikipedia');
    });
    after(() => driver && driver.quit());

} )

describe('Checkout wikipedia.org', function() {
    let driver;

    before(async function()  {
        driver = await new Builder().forBrowser('chrome').build();
    });

    it('Get Software metric - Wikipedia', async function() {
        await driver.get('https://en.wikipedia.org/wiki/Software_metric');

        let title = await driver.getTitle();
        assert.equal(title, 'Software metric - Wikipedia');
    });
    after(() => driver && driver.quit());
} )

describe('Checkout wikipedia.org', function() {
    let driver;

    before(async function()  {
        driver = await new Builder().forBrowser('chrome').build();
    });

    it('Get Software metric - Wikipedia', async function() {
        await driver.get('https://en.wikipedia.org/wiki/Software_metric');

        let title = await driver.getTitle();
        assert.equal(title, 'Software metric - Wikipedia');
    });
    after(() => driver && driver.quit());
} )

describe('Checkout wikipedia.org', function() {
    let driver;

    before(async function()  {
        driver = await new Builder().forBrowser('chrome').build();
    });

    it('Get Software metric - Wikipedia', async function() {
        await driver.get('https://en.wikipedia.org/wiki/Software_metric');

        let title = await driver.getTitle();
        assert.equal(title, 'Software metric - Wikipedia');
    });
    after(() => driver && driver.quit());
} )

describe('Checkout wikipedia.org', function() {
    let driver;

    before(async function()  {
        driver = await new Builder().forBrowser('chrome').build();
    });

    it('Get Software metric - Wikipedia', async function() {
        await driver.get('https://en.wikipedia.org/wiki/Software_metric');

        let title = await driver.getTitle();
        assert.equal(title, 'Software metric - Wikipedia');
    });
    after(() => driver && driver.quit());
} )

describe('Checkout wikipedia.org', function() {
    let driver;

    before(async function()  {
        driver = await new Builder().forBrowser('chrome').build();
    });

    it('Get Software metric - Wikipedia', async function() {
        await driver.get('https://en.wikipedia.org/wiki/Software_metric');

        let title = await driver.getTitle();
        assert.equal(title, 'Software metric - Wikipedia');
    });
    after(() => driver && driver.quit());
} )

describe('Checkout wikipedia.org', function() {
    let driver;

    before(async function()  {
        driver = await new Builder().forBrowser('chrome').build();
    });

    it('Get Software metric - Wikipedia', async function() {
        await driver.get('https://en.wikipedia.org/wiki/Software_metric');

        let title = await driver.getTitle();
        assert.equal(title, 'Software metric - Wikipedia');
    });
    after(() => driver && driver.quit());
} )

describe('Checkout wikipedia.org', function() {
    let driver;

    before(async function()  {
        driver = await new Builder().forBrowser('chrome').build();
    });

    it('Get Software metric - Wikipedia', async function() {
        await driver.get('https://en.wikipedia.org/wiki/Software_metric');

        let title = await driver.getTitle();
        assert.equal(title, 'Software metric - Wikipedia');
    });
    after(() => driver && driver.quit());
} )

