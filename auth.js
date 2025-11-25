document.getElementById("loginForm")?.addEventListener("submit", function(e){
    e.preventDefault();
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;
    alert(`Đăng nhập với email: ${email}`);
});

document.getElementById("registerForm")?.addEventListener("submit", function(e){
    e.preventDefault();
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;
    alert(`Đăng ký tài khoản: ${name}`);
});
