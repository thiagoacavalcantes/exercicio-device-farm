const productViewPage = require('../pageobjects/productView.page')

describe('Product Flow', () => {

    it('should buy a product', async () => {
        let name = 'Camiseta'
        let searchName = 'camiseta'
        await productViewPage.waitProduct(name)
        await productViewPage.search()
        await productViewPage.searchBy(`${searchName}\n`)
        await productViewPage.productSelect()
        await productViewPage.productAdd()
        await productViewPage.goToCArt()
        expect (await productViewPage.waitTotal()).toExist()
    
    })
    
})