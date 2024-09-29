export default class API {
    static url = "https://web-fe-html-css-athens-prj2-api.onrender.com";
    static async getMenuItems() {
        const response = await fetch(`${this.url}/menuItems`);
        return response.json();
    }
    static async getBreadcrumbs() {
        const response = await fetch(`${this.url}/linksbread`);
        return response.json();
    }
    static async getPLPproducts() {
        const response = await fetch(`${this.url}/productsPLP`);
        return response.json();
    }
    static async getFilterCategories() {
        const response = await fetch(`${this.url}/filterCategories`);
        return response.json();
    }
    static async getAdImage() {
        const response = await fetch(`${this.url}/adImage`);
        return response.json();
    }
    static async getHomePageItems() {
        const response = await fetch(`${this.url}/homepageItems`);
        return response.json();
    }
    static async Banner() {
        const response = await fetch(`${this.url}/banner`);
        return response.json();
    }
}