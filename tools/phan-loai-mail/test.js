// function getEmails(str) {
//     const regex = /[\w\d\.\-_]+@[a-zA-Z]+\.[a-zA-Z]+/g; // regex để tìm email trong chuỗi
//     const emails = str.match(regex); // lấy tất cả các email từ chuỗi
  
//     // tạo các mảng để chứa email theo từng loại
//     const hotmail = [];
//     const gmail = [];
//     const yahoo = [];
//     const others = [];
  
//     // lặp qua từng email để phân loại vào các mảng tương ứng
//     emails.forEach((email) => {
//       const domain = email.split('@')[1];
//       if (domain === 'hotmail.com' || domain === 'outlook.com' || domain === 'outlook.com.vn') {
//         hotmail.push(email);
//       } else if (domain === 'gmail.com') {
//         gmail.push(email);
//       } else if (domain === 'yahoo.com' || domain === 'yahoo.com.vn') {
//         yahoo.push(email);
//       } else {
//         others.push(email);
//       }
//     });
  
//     // trả về 4 mảng chứa các email đã được phân loại
//     return {
//       hotmail,
//       gmail,
//       yahoo,
//       others,
//     };
//   }

//   const str = 'john.doe@gmail.com-jane_smith@yahoo.com-hjgh,mark.johnson@hotmail.com,jghjgh, david.nguyen@gmail.com, anne-linh.tran@outlook.com';
//   const emails = getEmails(str);
  
//   console.log(emails.gmail); // ['john.doe@gmail.com', 'david.nguyen@gmail.com']
//   console.log(emails.yahoo); // ['jane_smith@yahoo.com']
//   console.log(emails.hotmail); // ['mark.johnson@hotmail.com']
//   console.log(emails.others); // ['anne-linh.tran@outlook.com']

const employees = ['John Smith', 'Jane Doe', 'Bob Johnson', 'Mary Lee'];
const formattedEmployees = employees.join('\n');
console.log(formattedEmployees)