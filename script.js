document.addEventListener("DOMContentLoaded", () => {
    const registerForm = document.getElementById("register-form");
    const loginForm = document.getElementById("login-form");
    const reminderForm = document.getElementById("reminder-form");
    const logoutButton = document.getElementById("logout-button");

    // ฟังก์ชันบันทึกข้อมูลการสมัครสมาชิก
    if (registerForm) {
        registerForm.addEventListener("submit", (e) => {
            e.preventDefault();
            const username = document.getElementById("username").value;
            const password = document.getElementById("password").value;

            // เก็บข้อมูลใน localStorage
            localStorage.setItem("username", username);
            localStorage.setItem("password", password);
            alert("สมัครสมาชิกสำเร็จ! ไปยังหน้าล็อกอิน");
            window.location.href = "login.html";
        });
    }

    // ฟังก์ชันเข้าสู่ระบบ
    if (loginForm) {
        loginForm.addEventListener("submit", (e) => {
            e.preventDefault();
            const loginUsername = document.getElementById("login-username").value;
            const loginPassword = document.getElementById("login-password").value;

            // ดึงข้อมูลจาก localStorage
            const storedUsername = localStorage.getItem("username");
            const storedPassword = localStorage.getItem("password");

            if (loginUsername === storedUsername && loginPassword === storedPassword) {
                // บันทึกสถานะล็อกอิน
                localStorage.setItem("isLoggedIn", "true");
                alert("เข้าสู่ระบบสำเร็จ!");
                window.location.href = "reminder.html";
            } else {
                alert("ชื่อผู้ใช้หรือรหัสผ่านไม่ถูกต้อง!");
            }
        });
    }

    // ตรวจสอบสถานะการล็อกอิน
    if (reminderForm) {
        const isLoggedIn = localStorage.getItem("isLoggedIn");
        if (isLoggedIn !== "true") {
            alert("กรุณาเข้าสู่ระบบก่อน!");
            window.location.href = "login.html";
        }
    }

    // ฟังก์ชันออกจากระบบ
    if (logoutButton) {
        logoutButton.addEventListener("click", () => {
            localStorage.removeItem("isLoggedIn");
            alert("ออกจากระบบเรียบร้อย!");
            window.location.href = "login.html";
        });
    }
});
