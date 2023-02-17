function getRandomString() {
  const characters = ['', '_', '-', '.'];
  return characters[Math.floor(Math.random() * characters.length)];
}

function shuffleArray(arr) {
  for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
  return arr;
}

function getEmails(username, domain) {
  var char = document.getElementById('char').value;
  var numberType = document.getElementById('number-type').value;
  var firstNumber = document.getElementById('number-first').value;
  var lastNumber = document.getElementById('number-last').value;

  
  if (firstNumber > lastNumber) {
    let temp = firstNumber;
    firstNumber = lastNumber;
    lastNumber = temp;
  }
  if (lastNumber - firstNumber > 100000) {
    alert("Số lượng email phải nhỏ hơn 10000 nhớ :3");
    return;
  }
  var emails = [];
  var email = ''
  if (char =='no') char = '';
  if (char == 'random') {
    for (let i = firstNumber; i<= lastNumber; i++) {
      email = username + getRandomString() + i.toString() + '@' + domain;
      emails.push(email);
    }
  } else {
    for (let i = firstNumber; i<= lastNumber; i++) {
      email = username + char + i.toString() + '@' + domain;
      emails.push(email);
    }
  }

  if (numberType == 'dao_thu_tu') emails.sort((a, b) => b.localeCompare(a));
  if (numberType == 'random') emails = shuffleArray(emails);
  return emails;
}

function isEmailValid(user) {
  // Mẫu regex để kiểm tra email
  const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  // Kiểm tra tính hợp lệ của email với regex
  if (regex.test(user + '@gmail.com')) {
    return true;
  } else {
    return false;
  }
}


function isDomainValid(domain) {
  // Mẫu regex để kiểm tra domain name
  const regex = /^[a-z0-9]+([\-\.]{1}[a-z0-9]+)*\.[a-z]{2,5}$/;

  // Kiểm tra tính hợp lệ của domain với regex
  if (regex.test(domain)) {
    return true;
  } else {
    return false;
  }
}


function emailClassification() {
  var username = document.getElementById('username').value;
  var domain = document.getElementById('domain').value;
  var checkUser = isEmailValid(username);
  var checkDomain = isDomainValid(domain);
  if (checkDomain && checkUser) {

    var emails = getEmails(username, domain);

    // get số lượng mail
    var sumMail = emails.length;

    // send số lượng vào các nút
    document.getElementsByClassName('total')[0].innerHTML = 'Total: ' + sumMail;

    // send email vào các ô
    document.getElementById('data_email').value = emails.join('\n');
  } else {
    alert("Vui lòng kiểm tra lại Username hoặc Domain!");
  }
}

function deleteData() {
  // xóa dữ liệu các ô
  document.getElementById('username').value = '';
  document.getElementById('char').value = 'no';
  document.getElementById('number-type').value = 'theo_thu_tu';
  document.getElementById('number-first').value = '1';
  document.getElementById('number-last').value = '125';
  document.getElementById('domain').value = '';
  document.getElementById('data_email').value = '';

  // reset các nút
  document.getElementsByClassName('total')[0].innerHTML = 'Total: 0';
}

function addLeadingZero(num) {
  return num < 10 ? "0" + num : num;
}

function getCurrentDateTime() {
  var date = new Date();
  var year = date.getFullYear();
  var month = addLeadingZero(date.getMonth() + 1);
  var day = addLeadingZero(date.getDate());
  var hours = addLeadingZero(date.getHours());
  var minutes = addLeadingZero(date.getMinutes());
  var seconds = addLeadingZero(date.getSeconds());
  return day + "-" + month + "-" + year + "-" + hours + "_" + minutes + "_" + seconds;
}

function downloadData(name) {
  var text = document.getElementById(name).value;
  var filename = "mail_random" + "_" + getCurrentDateTime() + ".txt";
  var blob = new Blob([text], {type: "text/plain"});
  var url = URL.createObjectURL(blob);
  var link = document.createElement("a");
  link.setAttribute("href", url);
  link.setAttribute("download", filename);
  document.body.appendChild(link);
  link.click();
}

function copyToClipboard(name) {
  var textarea = document.getElementById(name);
  textarea.select();
  document.execCommand("copy");
  alert("Đã sao chép vào clipboard");
}