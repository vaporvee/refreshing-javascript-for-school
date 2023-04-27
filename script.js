function onPageLoad() {
    var thedate = new Date();
    document.getElementById("date").valueAsDate = thedate;
    document.getElementById("time").value = thedate.toTimeString().substring(0, 5);
    var time = Math.round(thedate / 1000);
    document.getElementById("output").innerText = time
}