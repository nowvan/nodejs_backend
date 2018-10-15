const checkOrderData = (orderID, memberID) => {
    return new Promise((resolve, reject) => {
        db.query('SELECT * FROM order_list WHERE order_id = ? AND member_id = ? ', [orderID, memberID], function (err, rows) {
            if (rows[0] === undefined) {
                resolve(false);
            } else {
                resolve(true);
            }
        })
    })
}

const checkOrderComplete = (orderID) => {
    return new Promise((resolve, reject) => {
        db.query('SELECT is_complete FROM order_list WHERE order_id = ?', orderID, function (err, rows) {
            if (rows[0].is_complete === 1) {
                resolve(false);
            } else {
                resolve(true);
            }
        })
    })
}


const getOrderData = (orderID, memberID) => {
    return new Promise((resolve, reject) => {
        db.query('SELECT * FROM order_list WHERE order_id = ? AND member_id = ? ', [orderID, memberID], function (err, rows) {
            resolve(rows);
        })
    })
}

const checkOrderStock = (orderProductID, orderQuantity) => {
    return new Promise((resolve, rejct) => {
        db.query('SELECT * FROM product WHERE id = ?', orderProductID, function (err, rows) {
            if (rows[0].quantity >= orderQuantity && rows[0].quantity !== 0) {
                resolve(true)
            } else {
                resolve(rows[0].name + "庫存不足")
            }
        })
    })
}