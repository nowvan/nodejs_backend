const productData = require('../../models/product/all_product');



module.exports = class GetProduct {
    // 取得全部產品資料
    getAllProduct(req, res, next) {
        productData().then(result => {
            res.json({
                result: result
            })
        }, (err) => {
            res.json({
                result: err
            })
        })
    }
}