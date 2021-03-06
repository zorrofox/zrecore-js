var mongoose = require("mongoose"),
    Schema = mongoose.Schema,
    ObjectId = Schema.ObjectId;

var ServiceCouponSchema = new Schema({
    "id": ObjectId,
    "service_id": {
        "type": ObjectId,
        "required": true
    },
    "coupon_id": {
        "type": ObjectId,
        "required": true
    },
    "timestamp_added": {
        "type": Date,
        "default": Date.now,
        "required": false
    },
    "timestamp_modified": {
        "type": Date,
        "default": Date.now,
        "required": false
    },
    "timestamp_deactivated": {
        "type": Date,
        "required": false
    }
}, {
    "autoIndex": false
});


ServiceCouponSchema.index({"service_id": 1, "coupon_id": 1}, {"unique": true});
ServiceCouponSchema.index({"timestamp_added": 1, "timestamp_modified": 1, "timestamp_deactivated": 1})

module.exports = mongoose.model("ServiceCoupon", ServiceCouponSchema);
