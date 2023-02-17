function getEmails(str) {
    var regex = /[\w\d\.\-_]+@[a-zA-Z]+\.[a-zA-Z]+/g; // regex để tìm email trong chuỗi
    var emails = str.match(regex); // lấy tất cả các email từ chuỗi

    // kiểm tra và sắp xếp
    var check = document.getElementById('sort-abc').checked;
    if (check) emails.sort();

    // lọc trùng
    const uniqueEmails = [...new Set(emails)];
    return uniqueEmails;
}

function emailClassification() {
    var str = document.getElementById('list-email').value;
    if (str == '') {
        alert("Vui lòng kiểm tra lại input!")
    } else {
        var emails = getEmails(str);

        // get số lượng mail
        var sumMail = emails.length;

        // send số lượng vào các nút
        document.getElementsByClassName('total')[0].innerHTML = 'Total: ' + sumMail;

        // send email vào các ô
        document.getElementById('data_email').value = emails.join('\n');
    }
}

function deleteData() {
    // xóa dữ liệu các ô
    document.getElementById('list-email').value = '';
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
    var filename = name + "_" + getCurrentDateTime() + ".txt";
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