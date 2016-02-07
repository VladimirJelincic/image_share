Images = new Mongo.Collection("images");
//securitz
Images.allow({
    insert: function(userId,doc){
        console.log("testing security on image insert");
        if(Meteor.user()){
            console.log(Meteor.user());
            console.log("Userid:"+userId);
            console.log(doc);
            doc.createdBy=userId;
            if(userId!=doc.createdBy){
                return false
            }else{
                return true;
            }
        };
        return false;
    },
    remove: function (userId,doc) {
        return false;
    }

})






