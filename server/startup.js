/**
 * Created by vladimir on 23/01/16.
 */
console.log("startup.js");

Meteor.startup(function () {
    if (Images.find().count() == 0) {

        for (var i = 1; i < 23; i++) {
            Images.insert(
                {
                    img_src: "img_" + i + ".jpg",
                    img_alt: "image number " + i

                }
            );
        }

        console.log("Images:" + Images.find().count());

    }
})

