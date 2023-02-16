function getEmails(str) {
    var regex = /[\w\d\.\-_]+@[a-zA-Z]+\.[a-zA-Z]+/g; // regex để tìm email trong chuỗi
    var emails = str.match(regex); // lấy tất cả các email từ chuỗi
  
    // tạo các mảng để chứa email theo từng loại
    var microsoft = [];
    var gmail = [];
    var yahoo = [];
    var others = [];
  
    var check = document.getElementById('sort-abc').checked;
    if (check) emails.sort();

    // lặp qua từng email để phân loại vào các mảng tương ứng
    emails.forEach((email) => {
        var domain = email.split('@')[1];
        if (domain === 'hotmail.com' || domain === 'outlook.com' || domain === 'outlook.com.vn') {
            microsoft.push(email);
        } else if (domain === 'gmail.com') {
            gmail.push(email);
        } else if (domain === 'yahoo.com' || domain === 'yahoo.com.vn') {
            yahoo.push(email);
        } else {
            others.push(email);
        }
    });
  
    // trả về 4 mảng chứa các email đã được phân loại
    return {
        microsoft,
        gmail,
        yahoo,
        others,
    };
}

function emailClassification() {
    var str = document.getElementById('list-email').value;
    if (str == '') {
        alert("Vui lòng kiểm tra lại input!")
    } else {
        var emails = getEmails(str);

        // get số lượng mail
        var numMicrosoft = emails.microsoft.length;
        var numGmail = emails.gmail.length;
        var numYahoo = emails.yahoo.length;
        var numOther = emails.others.length;
        var sumMail = numMicrosoft + numGmail + numYahoo + numOther;

        // send số lượng vào các nút
        document.getElementsByClassName('total')[0].innerHTML = 'Total: ' + sumMail;
        document.getElementsByClassName('microsoft')[0].innerHTML = 'Microsoft: ' + numMicrosoft;
        document.getElementsByClassName('gmail')[0].innerHTML = 'Gmail: ' + numGmail;
        document.getElementsByClassName('yahoo')[0].innerHTML = 'Yahoo: ' + numYahoo;
        document.getElementsByClassName('other')[0].innerHTML = 'Other: ' + numOther;

        // send email vào các ô
        document.getElementById('microsoft').value = emails.microsoft.join('\n');
        document.getElementById('gmail').value = emails.gmail.join('\n');
        document.getElementById('yahoo').value = emails.yahoo.join('\n');
        document.getElementById('other').value = emails.others.join('\n');
    }
}

function deleteData() {
    // xóa dữ liệu các ô
    document.getElementById('list-email').value = '';
    document.getElementById('microsoft').value = '';
    document.getElementById('gmail').value = '';
    document.getElementById('yahoo').value = '';
    document.getElementById('other').value = '';

    // reset các nút
    document.getElementsByClassName('total')[0].innerHTML = 'Total: 0';
    document.getElementsByClassName('microsoft')[0].innerHTML = 'Microsoft: 0';
    document.getElementsByClassName('gmail')[0].innerHTML = 'Gmail: 0';
    document.getElementsByClassName('yahoo')[0].innerHTML = 'Yahoo: 0';
    document.getElementsByClassName('other')[0].innerHTML = 'Other: 0';
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
    var idname = name.split('_')[1]
    var text = document.getElementById(idname).value;
    var filename = name + "_" + getCurrentDateTime() + ".txt";
    var blob = new Blob([text], {type: "text/plain"});
    var url = URL.createObjectURL(blob);
    var link = document.createElement("a");
    link.setAttribute("href", url);
    link.setAttribute("download", filename);
    document.body.appendChild(link);
    link.click();
}

function copyToClipboard() {
    var textarea = document.getElementById("list-email");
    textarea.select();
    document.execCommand("copy");
    alert("Đã sao chép vào clipboard");
}