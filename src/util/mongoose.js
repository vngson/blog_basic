module.exports = {
    multipleMongooseToObject: function(mongooseArrays){
        return mongooseArrays.map(mongooseArray => mongooseArray.toObject());
    },
    onlyMongooseToObject: function(mongooseArray){
        return mongooseArray ? mongooseArray.toObject() : mongooseArray;
    }
}
