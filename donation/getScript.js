const dname= localStorage.getItem("dname");
const demail= localStorage.getItem("demail");
const dphone= localStorage.getItem("dphone");
const dpan= localStorage.getItem("dpan");
const dadress= localStorage.getItem("daddress");
const damount= localStorage.getItem("damount");
const transactionID = localStorage.getItem("rzp_tid")

// document.getElementById('slipNumber').innerText = "SRGSBPST"+Math.round(Math.random()*1000000000)
document.getElementById('donorName').innerText = dname;
document.getElementById('donorEmail').innerText = demail;
document.getElementById('donorContact').innerText = dphone;
document.getElementById('donorPAN').innerText = dpan;
document.getElementById('donationAmount').innerText = damount;
document.getElementById('donorAddress').innerText = dadress;
document.getElementById('transactionDate').innerText = Date();
document.getElementById('transactionID').innerText = transactionID;

