var express = require('express');
import moongose from 'moongose'
import db from './moongoseConnection';
import { UserTastesSchema, OrderSchema } from './schemas/userTaste';
import SendMessage from './SendMessage';
var app = express();
app.use(express.json());

hendleError(err) {
    console.error(err);
}


app.post('/user_info', function (req, res) {
    let UserTastesModel = moongose.model('UserTastesModel', UserTastesSchema);
    let userInfoInstance = new UserTastesModel({
        ...req.body
    });
    userInfoInstance.save(function (err) {
        if (err) return handleError(err);
        // saved!
        res.send({ ...req.body });
    });
});

app.post('/new_order', function (req, res) {
    let OrderModel = moongose.model('OrderModel', OrderSchema);
    let orderInstance = new OrderModel({
        ...req.body
    });
    orderInstance.save(function (err) {
        if (err) return handleError(err);
        // saved!

        res.send({ ...req.body });
    });
});

app.post('/status_update', function (req, res) {
    let OrderModel = moongose.model('OrderModel', OrderSchema);
    const doc = OrderModel.findOne({ phone: req.body.phone });
    doc.status = req.body.status;
    SendMessage(req.body.phone, req.body.status);
    await doc.save();
});

app.listen(3000, function () {
    console.log('Sancaton App Project!');
}); Ï