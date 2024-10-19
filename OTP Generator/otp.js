let generateOTP = () => {
    const otpLength = 6;

    const otp = Math.floor(Math.random() * Math.pow(10, otpLength));

    document.getElementById("otp-display").innerText = otp;
};

document.getElementById("generate-btn").addEventListener("click", generateOTP);

window.addEventListener("laod", generateOTP);