var mongoose = require("mongoose"),
    Schema = mongoose.Schema,
    ObjectId = Schema.ObjectId;

var PropertySchema = new Schema({
    "id": ObjectId,
    "name": {
        "type": String,
        "required": true
    },
    "type_id": {
        "type": ObjectId,
        "required": false
    },
    "is_required": {
        "type": Boolean,
        "required": true,
        "default": false
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

PropertySchema.index({ "name": 1, "type_id": 1, "is_required": 1, "timestamp_added": 1, "timestamp_modified": 1, "timestamp_deactivated": 1 });

module.exports = mongoose.model("Property", PropertySchema);
