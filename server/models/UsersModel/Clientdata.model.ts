// const clientInfo = {
//     userID: {
//         type: "string",
//     },
//     name: {
//         type: "string",
//         required: true,
//         trim: true,
//         maxlength: 50,
//     },
//     address1: {
//         type: "string",
//         required: true,
//         trim: true,
//         maxlength: 100,
//     },
//     address2: {
//         type: "string",
//         required: false,
//         trim: true,
//         maxlength: 100,
//     },
//     city: {
//         type: "string",
//         required: true,
//         trim: true,
//         maxlength: 100,
//     },
//     state: {
//         type: "string",
//         required: true,
//         trim: true,
//         maxlength: 2,
//     },
//     zipcode: {
//         type: "number",
//         required: true,
//         trim: true,
//         maxlength: 9,
//         minlength: 5,
//     },
// };

export const clientInfo = [
  {
    userID: "1",
    email: "johnsmith@gmail.com",
    password: "js", // use bcrypt
    name: "John Smith",
    address1: "123 Main St",
    address2: "Apt 1",
    city: "Houston",
    state: "TX",
    zipcode: 77001,
    isNew: false,
  },
];
