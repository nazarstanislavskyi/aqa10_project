

exports.MainPage = class MainPage {

    constructor(page) {
        this.linkJobPage = page.locator('header >> text=Робота');
        this.searchInput = page.locator('input[name="search"]');
        this.regionFilter = page.locator('div.b-region-filter');
        this.cityFilter1 = page.locator('div > h3:nth-child(4)');
    }

    async clearAndFillDataInSearchInput(data) {
        await this.searchInput.click();
        await this.searchInput.fill(data);
    }

    async checkRegionFilter() {
        await this.regionFilter.isVisible();
        await this.cityFilter1.isVisible();
    }
};
    
