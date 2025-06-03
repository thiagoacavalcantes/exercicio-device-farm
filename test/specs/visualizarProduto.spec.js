const productViewPage = require('../pageobjects/productView.page')

describe('Product List', () => {

    it('should list products', async () => {
        expect(await productViewPage.product('Camiseta')).toExist()
        expect(await productViewPage.productList()).toBeElementsArrayOfSize(10)
    })

    

})