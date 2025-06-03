const productsViewPage = require('../pageobjects/productView.page')

describe('Product Search', () => {

    it('should search by product', async () => {
        let searchName = 'Camiseta'
        await productsViewPage.waitProduct(searchName)
        await productsViewPage.search()
        await productsViewPage.searchBy(`${searchName}\n`)

        expect(await productsViewPage.product(searchName)).toExist()
    })
    
})