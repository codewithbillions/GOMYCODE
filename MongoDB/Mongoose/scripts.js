const mongoose = require("mongoose");
const User = require("./User");

mongoose.connect(
  "mongodb+srv://mongoose:rzUGkpKWl2x15UJt@cluster0.kjg1q2t.mongodb.net/mongoose"
);

//   () => {
//     console.log("connected");
//   },
//   (e) => console.error(e)
// );

// run();
// async function run() {
//   try {
//     const user = await User.create({ name: "kehinde",
//     age: 40,
//     email: "KEHINDE@gmail.com",
//    hobbies: ['weight lifting',' bowlin g'],
//    address: {
//      street: "herbert Mcauley",
//      city: "lagos",
//    },
//   });
//   user.createdAt = 5
//   await user.save()
//   console.log(user)
// } catch (e) {
//   console.log(e.message);
//   }
// }

// run()
// async function run() {
//   try {
//     const user = await User.find()
//     console.log(user)
//   }catch (e) {
//     console.log(e.message)
//   }
// }

run();
async function run() {
  try {
    const user = await User.where("age")
      .gt(12)
      .where("name")
      .equals("david")
      .populate("bestFriend")
      .limit(1);
    console.log(user);
  } catch (e) {
    console.log(e.message);
  }
}
