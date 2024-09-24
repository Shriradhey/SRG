const select = document.querySelector('#donationMode'); // Use correct ID selector

select.addEventListener('change', () => {
    const donationDiv = document.querySelector('.donation');
    
    if (select.value === "offline") { // Use '===' for comparison
        donationDiv.innerHTML = `
        <h1 class="text-center font-medium text-2xl">Donate to Gau Shala Offline</h1>
        <div class="offlineDonation flex flex-col lg:flex-row items-center p-6">
            <table class="font-medium text-xl" id="manualDonation">
                <tr>
                    <td>Bank Name</td>
                    <td>:</td>
                    <td>City Union Bank</td>
                </tr>
                <tr>
                    <td>Account Holder</td>
                    <td>:</td>
                    <td>Shri Radhey Gau Shala Avem Shrimad Bhagwat Prachar Sewa Trust</td>
                </tr>
                <tr>
                    <td>Account Number</td>
                    <td>:</td>
                    <td>510909010155226</td>
                </tr>
                <tr>
                    <td>IFSC Code</td>
                    <td>:</td>
                    <td>CIUB0000676</td>
                </tr>
            </table>
            <img src="img/qr.jpg" class="qrCode h-64 w-auto p-2 mix-blend-multiply" alt="Shri Radhey Gau Shala QR Code">

        </div>
        `;

        console.log('offline opted');
    } else if (select.value === "online") { // Use '===' for comparison
        donationDiv.innerHTML = `
        <div class="onlineDonation w-full">
            <h1 class="text-2xl text-center">Donate to Gau Shala Online</h1>
            <form id="paymentForm" class="flex flex-col justify-center items-center">
                <input placeholder="Enter Donor Name" class="h-10 justify-center flex mb-2 w-3/6 m-auto border-2 border-fuchsia-300 rounded-lg outline-none" type="text" id="donorName" name="donorName" required>
                <input placeholder="Enter Donor PAN" class="h-10 justify-center flex mb-2 w-3/6 m-auto border-2 border-fuchsia-300 rounded-lg outline-none" type="text" name="donorPAN" required id="donorPAN">
                <input placeholder="Enter Donor Email ID" class="h-10 justify-center flex mb-2 w-3/6 m-auto border-2 border-fuchsia-300 rounded-lg outline-none" type="email" id="donorEmail" name="donorEmail" required>
                <input placeholder="Enter Donor Contact Number" class="h-10 justify-center flex mb-2 w-3/6 m-auto border-2 border-fuchsia-300 rounded-lg outline-none" type="tel" id="donorPhone" name="donorPhone" required>
                <input placeholder="Enter Donor Address" class="h-10 justify-center flex mb-2 w-3/6 m-auto border-2 border-fuchsia-300 rounded-lg outline-none" type="text" id="address" name="address" required>
                <input placeholder="Enter Amount" class="h-10 justify-center flex mb-2 w-3/6 m-auto border-2 border-fuchsia-300 rounded-lg outline-none" type="number" id="amount" name="amount" required>
                <button type="button" class="bg-red-500 mb-8 text-white flex justify-center m-auto w-3/6 hover:bg-red-300 p-3 rounded-lg" onclick="generateQRCode()">Donate</button>
            </form>
            <div id="qrcode"></div>
        </div>`;
        console.log('online opted');
    }else{
        alert('Select a donation type');
    }
});



function generateQRCode() {
    const donorName = document.getElementById("donorName").value;
    const donorEmail = document.getElementById("donorEmail").value;
    const donorPhone = document.getElementById("donorPhone").value;
    const donorPAN = document.getElementById("donorPAN").value;
    const amount = document.getElementById("amount").value;
    const address = document.getElementById("address").value;

    const options = {
        key: 'rzp_live_GVI8i7n3ye5KG1',
        amount: amount * 100, // Amount is in paise
        currency: 'INR',
        name: 'Shri Radhey Gau Shala Avem Shrimad Bhagwat Prachar Sewa Trust',
        description: `Donation of ${amount} from ${donorPAN}`,
        image: '../img/Gaushala Logo.png',
        handler: function (response) {
            // Handle the success response
            alert('Payment successful: ' + response.razorpay_payment_id);
            const transactionIdd = localStorage.setItem('rzp_tid', response.razorpay_payment_id)
            location.href="donationreceipt.html";
        },
        prefill: {
            name: donorName,
            email: donorEmail,
            contact: donorPhone
        },
        notes: {
            address: address,
            donorname: name
        },
        theme: {
            color: '#4caf50'
        }
    };

    const rzp = new Razorpay(options);
    rzp.open();

    
const dname= localStorage.setItem("dname", donorName);
const demail= localStorage.setItem("demail", donorEmail);
const dphone= localStorage.setItem("dphone", donorPhone);
const dpan= localStorage.setItem("dpan", donorPAN);
const dadress= localStorage.setItem("daddress", address);
const damount= localStorage.setItem("damount", amount);
const transactionId = localStorage.setItem("transactionID", function(response){response.razorpay_payment_id});


}

