// // Find all users
// User.findAll().then(users => {
//     console.log("All users:", JSON.stringify(users, null, 4));
//   });

//   // Create a new user
//   User.create({ firstName: "Jane", lastName: "Doe" }).then(jane => {
//     console.log("Jane's auto-generated ID:", jane.id);
//   });

//   // Delete everyone named "Jane"
//   User.destroy({
//     where: {
//       firstName: "Jane"
//     }
//   }).then(() => {
//     console.log("Done");
//   });

//   // Change everyone without a last name to "Doe"
//   User.update({ lastName: "Doe" }, {
//     where: {
//       lastName: null
//     }
//   }).then(() => {
//     console.log("Done");
//   });