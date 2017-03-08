function writeElement(element, content){
    document.getElementById(element).innerHTML = content;
}

function printElem(elem){
      var mywindow = window.open('', 'PRINT', 'height=400,width=600');
        mywindow.document.write('<html><head><title>' + document.title  + '</title>');
        mywindow.document.write('</head><body >');
        mywindow.document.write(document.getElementById(elem).innerHTML);
        mywindow.document.write('</body></html>');

        mywindow.document.close(); // necessary for IE >= 10
        mywindow.focus(); // necessary for IE >= 10*/

        mywindow.print();
        mywindow.close();
        return true;
}

$("#returnbutton").hide();

window.setTimeout(
    function() {
    writeElement("anim1", "正在認證客戶身份 Detecting customer identity...");
    printElem("printtarget");}
, 1000);
window.setTimeout(function() {
    writeElement("anim2", "正在確認交易 Confirming transaction...")}
, 6000);
window.setTimeout(function() {
    writeElement("anim3", "正在準備現金 Dispensing cash...");}
, 16000);

window.setTimeout(function() {
    writeElement("anim4", "交易完成。感謝您選擇冥通銀行。<br \> Transaction finished. Thank you for banking with with THE HELL BANK CORPORATION."); 
    $('#hourglass').css("visibility", "hidden");
    $("#returnbutton").show();
}
, 20000);

window.setTimeout(function() {
    window.location.href = "index.html";}
, 25000);