// Tạo một element link
var linkElement = document.createElement('link');

// Thiết lập thuộc tính rel và href cho element link
linkElement.rel = 'stylesheet';
linkElement.href = 'css/style.css'; // Thay đổi đường dẫn này bằng đường dẫn thực của file CSS của bạn

// Đưa element link vào phần head của trang
document.head.appendChild(linkElement);

document.getElementsByTagName("header")[0].innerHTML += `
<div class="container">
    <div class="row align-items-start">
        <div class="col-3">
            <img src="./img/logo1.png" alt="" class="logo">
        </div>

        <div class="col-9">
            <div class="text-end align-items-center small-button">                
               <a href="https://www.facebook.com/profile.php?id=61561237620293&mibextid=ZbWKwL">
                    <i class="bi bi-facebook icon align-middle"></i>
                </a>

                <i class="bi bi-instagram icon align-middle"></i>
                <i class="bi bi-pinterest icon align-middle"></i>
                <a href="https://www.tiktok.com/@turmerichouse99_?_r=1&_d=e9ek948kl3675d&sec_uid=MS4wLjABAAAAqGpGy8sdzcfeyobL-mR7JfELHgJRPy5RhMi0d9pw7fuL9APPxxFDldUVXUcGHhOk&share_author_id=7382529820795962376&sharer_language=vi&source=h5_t&u_code=eek3jgi56bc5cf&ug_btm=b8727,b0&social_share_type=4&utm_source=copy&sec_user_id=MS4wLjABAAAAqGpGy8sdzcfeyobL-mR7JfELHgJRPy5RhMi0d9pw7fuL9APPxxFDldUVXUcGHhOk&tt_from=copy&utm_medium=ios&utm_campaign=client_share&enable_checksum=1&user_id=7382529820795962376&share_link_id=3DC4A729-ADD3-4C37-8BB8-0DB68E69057E&share_app_id=1180">
                 <i class="bi bi-tiktok icon align-middle"></i>
                </a>
               <a href="mailto:Turmerichouse99@gmail.com">
                    <i class="bi bi-envelope icon align-middle"></i>
                </a>

                <div class="userDetail">
                    <button class="btn dropbtn" id="form_open" onmouseenter="enter('userDrop')" onmouseleave="leave('userDrop')">
                        <i class="bi bi-person-fill"></i>
                        <div id="user-login"></div>
                    </button>
                </div>
            </div>

            <div class="row py-4">
                <div class="col-11 input-group">
                    <input type="search" placeholder="Tìm kiếm" class="search" id="search">
                    <div class="input-group-append">
                       <button class="btn" onclick="search()" style="background-color: pink; color: white;">
                            <i class="bi bi-search"></i>
                        </button>

                    </div>
                </div>
                
                <div class="col-1">
                    <a href="./cart.html" style="color: black">
                        <i class="bi bi-cart" style="font-size: 32px"></i>
                    </a>
                </div>
            </div>
        </div>
    </div>
</div>
`

document.getElementById("nav-bar").innerHTML = `
            <div style="display: flex; justify-content: space-between; align-items: center; background-color: #333;">
                <div style="flex: 1;"></div>
                <div style="flex: 1; text-align: center;">
                    <a href="./index.html" style="color: white; text-decoration: none; padding: 14px 20px; display: block;">TRANG CHỦ</a>
                </div>
                <div style="flex: 1; text-align: center;">
                    <a href="./san-pham.html" style="color: white; text-decoration: none; padding: 14px 20px; display: block;">SẢN PHẨM</a>
                     <div class="dropdown-content" style="display: none; position: absolute; background-color: #333; min-width: 160px; box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.2); z-index: 1;">
                <a href="./san-pham1.html" style="color: white; text-decoration: none; padding: 12px 16px; display: block;">Sản phẩm 1</a>
                <a href="./san-pham2.html" style="color: white; text-decoration: none; padding: 12px 16px; display: block;">Sản phẩm 2</a>
                <a href="./san-pham3.html" style="color: white; text-decoration: none; padding: 12px 16px; display: block;">Sản phẩm 3</a>
                     </div>
                    </div>
                <div style="flex: 1; text-align: center;">
                    <a href="./gioi-thieu.html" style="color: white; text-decoration: none; padding: 14px 20px; display: block;">GIỚI THIỆU</a>
                </div>
                <div style="flex: 1; text-align: center;">
                    <a href="./lien-he.html" style="color: white; text-decoration: none; padding: 14px 20px; display: block;">LIÊN HỆ</a>
                </div>
                <div style="flex: 1; text-align: center;">
                    <a href="./blog.html" style="color: white; text-decoration: none; padding: 14px 20px; display: block;">BLOG</a>
                </div>
                <div style="flex: 1;"></div>
            </div>
        `;


document.getElementsByTagName("footer")[0].innerHTML = `
<div class="container">
            <div class="row pt-3">
                <div class="col-md-5">
                    <h4 class="text-white">Fanpage</h4>
                    <a href="https://www.facebook.com/profile.php?id=61561237620293&mibextid=ZbWKwL"><i class="icon-facebook rounded fab fa-facebook"></i></a>
                    <a href=""><i class="icon-twitter rounded fab fa-twitter-square"></i></a>
                    <a href=""><i class="icon-google-plus rounded fab fa-google-plus"></i></a>
                    <a href=""><i class="icon-wechat rounded fab fa-weixin"></i></a>
                </div>

                <div class="col-md-7 rounded">
                    <h4 class="text-white">Đăng ký nhận thông tin</h4>
                    <p class="text-white">Hãy cho chúng tôi email của bạn và bạn sẽ được cập nhật hàng ngày với các sự kiện mới nhất, chi tiết!</p>
                    <div class="bg-white d-flex">
                        <input class="w-100 border-0 pl-3" type="text" placeholder="Nhập email để đăng ký">
                        <button class="btn col-md-2" style="background-color: pink;">Đăng ký</button>
                    </div>
                </div>
            </div>
        </div>
        <div class="container mt-4">
            <div class="row pt-3">
                <div class="col-md-3">
                    <h4 class="text-white">Về chúng tôi</h4>
                    <ul class="navbar-nav footer__menu">
                        <li class="nav-item"><a class="nav-link text-secondary" href="#"><i class="fas fa-map-marker-alt"></i> 90 Chùa Bộc</a></li>
                        <li class="nav-item"><a class="nav-link text-secondary" href="#"><i class="fas fa-phone"></i> 0123456789</a></li>
                        <li class="nav-item"><a class="nav-link text-secondary" href="#"><i class="fas fa-envelope"></i> Turmerichouse99@gmail.com</a></li>
                    </ul>
                </div>

                <div class="col-md-3">
                    <h4 class="text-white">Tin tức</h4>
                    <ul class="navbar-nav footer__menu">
                        <li class="nav-item"><a class="nav-link text-secondary" href="">Về chúng tôi</a></li>
                        <li class="nav-item"><a class="nav-link text-secondary" href="">Tuyển dụng</a></li>
                        <li class="nav-item"><a class="nav-link text-secondary" href="">Giới thiệu chung</a></li>
                        <li class="nav-item"><a class="nav-link text-secondary" href="">Giới thiệu cửa hàng</a></li>
                        <li class="nav-item"><a class="nav-link text-secondary" href="">Thời gian làm việc</a></li>
                    </ul>
                </div>

                <div class="col-md-3">
                    <h4 class="text-white">Câu hỏi thường gặp</h4>
                    <ul class="navbar-nav footer__menu">
                        <li class="nav-item"><a class="nav-link text-secondary" href="">Hỏi đáp</a></li>
                        <li class="nav-item"><a class="nav-link text-secondary" href="">Liên hệ</a></li>
                        <li class="nav-item"><a class="nav-link text-secondary" href="">Khuyến mãi</a></li>
                        <li class="nav-item"><a class="nav-link text-secondary" href="">Mẹo sử dụng mỹ phẩm</a></li>
                        <li class="nav-item"><a class="nav-link text-secondary" href="">Sản phẩm hot</a></li>
                    </ul>
                </div>

                <div class="col-md-3">
                    <h4 class="text-white">Chính sách</h4>
                    <ul class="navbar-nav footer__menu">
                        <li class="nav-item"><a class="nav-link text-secondary" href="">Chính sách bảo mật</a></li>
                        <li class="nav-item"><a class="nav-link text-secondary" href="">Chính sách bảo hành</a></li>
                        <li class="nav-item"><a class="nav-link text-secondary" href="">Chính sách vận chuyển</a></li>
                        <li class="nav-item"><a class="nav-link text-secondary" href="">Chính sách đổi hàng</a></li>
                        <li class="nav-item"><a class="nav-link text-secondary" href="">Quy định thanh toán</a></li>
                    </ul>
                </div>
            </div>
        </div>
`

document.getElementById("loginModal").innerHTML = `
    <section class="blur-bg-overplay">
        <div class="form_container">
            <i class="fa fa-times form_close"></i>
            <!-- Login Form -->
            <div class="form login_form">
                <div class="form-inner">
                    <h2>Đăng nhập</h2>
                    <div class="input_box">
                        <input type="text" id="userNameLG" placeholder="Tên đăng nhập" name="Tên đăng nhập">
                        <i class="fa-regular fa-user user"></i>
                        <div id="error_userNameLG_empty" class="error-message"></div>
                        <div id="error_userNameLG" class="error-message"></div>
                    </div>
                    <div class="input_box">
                        <input type="password" id="passwordLG" name="Mật khẩu" minlength="6" maxlength="32"
                            placeholder="Nhập mật khẩu">
                        <i class="fa fa-lock password"></i>
                        <i class="fa-regular fa-eye-slash pw_hide"></i>
                        <div id="error_passwordLG" class="error-message"></div>
                    </div>

                    <div class="option_field">
                        <span class="checkbox">
                            <input type="checkbox" class="check">
                            <label for="check">Remember me</label>
                        </span>
                        <a href="#" class="forgot_pw">Forgot password?</a>
                    </div>

                    <button class="buttonSubmit buttonLogin" type="submit" onclick="doSubmit(1)">Đăng nhập</button>

                    <div class="login_signup">
                        Bạn chưa có tài khoản? <a href="#" id="signup">Đăng ký</a>
                    </div>
                </div>
            </div>

            <!-- Signup Form -->
            <div class="form signup_form">
                <div class="form-inner">
                    <h2>Đăng ký</h2>
                    <div class="input_box">
                        <input type="text" id="userNameSU" name="Tên đăng nhập" placeholder="Tên đăng nhập">
                        <i class="fa-regular fa-user user"></i>
                        <i class="fa-regular fa-user user"></i>
                        <div id="error_userNameSU_empty" class="error-message"></div>
                        <div id="error_userNameSU" class="error-message"></div>
                    </div>
                    <div class="input_box">
                        <input type="email" id="emailSU" name="Email" placeholder="Nhập email">
                        <i class="fa-regular fa-envelope email"></i>
                        <div id="error_emailSU" class="error-message"></div>
                    </div>
                    <div class="input_box">
                        <input type="password" id="passwordSU" name="Mật khẩu" placeholder="Mật khẩu" minlength="6" maxlength="32">
                        <i class="fa fa-lock password"></i>
                        <i class="fa-regular fa-eye-slash pw_hide"></i>
                        <div id="error_passwordSU" class="error-message"></div>
                        <div id="error_passwordSU_length" class="error-message"></div>
                    </div>
                    <div class="input_box">
                        <input type="password" id="confirmPasswordSU" placeholder="Xác nhận mật khẩu"
                            name="Xác nhận mật khẩu">
                        <i class="fa fa-lock password"></i>
                        <i class="fa-regular fa-eye-slash pw_hide"></i>
                        <div id="error_confirmPasswordSU_empty" class="error-message"></div>
                        <div id="error_confirmPasswordSU" class="error-message"></div>
                    </div>

                    <div class="option_field">
                        <span class="checkbox">
                            <input type="checkbox" class="check">
                            <label for="check">
                                I agree the
                                <a href="#">Term & Conditions</a>
                            </label>
                        </span>
                    </div>

                    <button class="buttonSubmit buttonSignup" onclick="doSubmit(2)">Đăng ký</button>

                    <div class="login_signup">
                        Bạn có tài khoản? <a href="#" id="login">Đăng nhập</a>
                    </div>
                </div>
            </div>

            <!-- Forgot password form -->
            <div class="form forgot_form">
                <div class="form-inner">
                    <h2>Quên mật khẩu</h2>
                    <div class="input_box">
                        <input type="text" id="userNameFG" name="Tên đăng nhập" placeholder="Tên đăng nhập">
                        <i class="fa-regular fa-user user"></i>
                        <span id="error_userNameFG" class="helper-text text-danger"></span>
                        <span id="error_userNameFG_all_leter" class="helper-text text-danger"></span>
                    </div>
                    <div class="input_box">
                        <input type="email" id="emailFG" name="email" placeholder="Nhập email">
                        <i class="fa-regular fa-envelope email"></i>
                        <span id="error_emailFG" class="helper-text text-danger"></span>
                    </div>
                    <div class="input_box">
                        <input type="password" id="passwordFG" placeholder="Mật khẩu mới" name="Mật khẩu" minlength="6" maxlength="32">
                        <i class="fa fa-lock password"></i>
                        <i class="fa-regular fa-eye-slash pw_hide"></i>
                        <span id="error_passwordFG_empty" class="helper-text text-danger"></span>
                        <span id="error_passwordFG" class="helper-text text-danger"></span>
                    </div>
                    <div class="input_box">
                        <input type="password" id="confirmPasswordFG" name="Xác nhận mật khẩu"
                            placeholder="Xác nhận mật khẩu" minlength="6" maxlength="32">
                        <i class="fa fa-lock password"></i>
                        <i class="fa-regular fa-eye-slash pw_hide"></i>
                        <span id="error_confirmPasswordFG" class="helper-text text-danger"></span>
                    </div>

                    <div class="forgot_login_signup">
                        <a href="#" id="signupPW">Tạo tài khoản mới</a>
                        <a href="#" id="loginPW">Quay lại đăng nhập</a>
                    </div>

                    <button class="buttonSubmit buttonForgot" type="submit" onclick="doSubmit(3)">Thay đổi mật khẩu</button>

                </div>
            </div>
        </div>
        <div class="overlay-notify"></div>
    </section>
`

document.getElementById("search").addEventListener("keyup", event => {
    if (event.key === "Enter") search();
})

function getGia(gia) {
    return Number(gia).toLocaleString("vi-VN") + "đ"; //định dạng số 1.000.000 VN
}

let userLogin;
if (localStorage.getItem('userLogin') === null) {
    localStorage.setItem('userLogin', JSON.stringify(""));
    userLogin = "";
}
else userLogin = JSON.parse(localStorage.getItem("userLogin"));

if (userLogin === "")
    document.getElementById("user-login").innerHTML = "Đăng nhập";
else {
    document.getElementById("user-login").innerHTML = userLogin;
    document.querySelector(".userDetail").innerHTML += `    
    <div onmouseenter="enter('userDrop')" onmouseleave="leave('userDrop')" id="userDrop" class="dropdown-content">
        <a href="./order.html">Đơn hàng đã đặt</a>
        <a href="./index.html" onclick="logOut()">Đăng xuất</a>
    </div>
    `
}

function logOut() {
    localStorage.removeItem("userLogin");
}

function search() {
    const search = document.getElementById("search").value;
    window.location = (search === "") ? "./san-pham.html" : `./san-pham.html?search=${search}`;
}

function dangerMessage(message) {
    document.querySelector(".alert-danger").innerHTML = message;
    $('.alert-danger').css("display", "initial");
    setTimeout(() => $('.alert-danger').css("display", "none"), 3000);
}

function successMessage(message, second = 3000) {
    document.querySelector(".alert-success").innerHTML = message;
    $('.alert-success').css("display", "initial");
    setTimeout(() => $('.alert-success').css("display", "none"), second);
}

function enter(element) {
    if (userLogin !== "")
        document.getElementById(element).classList.toggle("show");
}

function leave(element) {
    if (userLogin !== "")
        document.getElementById(element).classList.toggle("show");
}

const formOpenBtn = document.querySelector("#form_open"),
    blurOverplay = document.querySelector(".blur-bg-overplay"),
    formContainer = document.querySelector(".form_container"),
    formCloseBtn = document.querySelector(".form_close"),
    signupBtn = document.querySelector("#signup"),
    loginBtn = document.querySelector("#login"),
    pwShowHide = document.querySelectorAll(".pw_hide"),
    forgotPW = document.querySelector(".forgot_pw"),
    signupPW = document.querySelector("#signupPW"),
    loginPW = document.querySelector("#loginPW"),
    form = document.querySelector('.form-inner');

formOpenBtn.addEventListener("click", () => {
    if (userLogin === "") blurOverplay.classList.add("show-popup");
});
formCloseBtn.addEventListener("click", () => blurOverplay.classList.remove("show-popup"));

pwShowHide.forEach((icon) => {
    icon.addEventListener("click", () => {
        let getPwInput = icon.parentElement.querySelector("input");
        if (getPwInput.type === "password") {
            getPwInput.type = "text";
            icon.classList.replace("fa-eye-slash", "fa-eye");
        } else {
            getPwInput.type = "password";
            icon.classList.replace("fa-eye", "fa-eye-slash");
        }
    })
})

signupBtn.addEventListener("click", (e) => {
    e.preventDefault();
    formContainer.classList.add("active");
});

loginBtn.addEventListener("click", (e) => {
    e.preventDefault();
    formContainer.classList.remove("active");
});

forgotPW.addEventListener("click", (e) => {
    e.preventDefault();
    formContainer.classList.add("pw");
});

signupPW.addEventListener("click", (e) => {
    e.preventDefault();
    formContainer.classList.add("active");
    formContainer.classList.remove("pw");
});

loginPW.addEventListener("click", (e) => {  // Corrected ID
    e.preventDefault();
    formContainer.classList.remove("pw");
});


const checkValidation = (value) => {
    let valid = true;
    switch (value) {
        case 1:
            valid &= kiemTraRong("userNameLG", 'error_userNameLG_empty') & kiemTraRong("passwordLG", 'error_passwordLG');
            valid &= kiemTraDangNhap("userNameLG", 'error_userNameLG', "passwordLG", 'error_passwordLG');
            return valid;
        case 2:
            //Kiểm tra rổng
            valid &= kiemTraRong("userNameSU", 'error_userNameSU_empty') & kiemTraEmail('#emailSU', '#error_emailSU') & kiemTraRong("passwordSU", 'error_passwordSU') & kiemTraRong("confirmPasswordSU", 'error_confirmPasswordSU_empty');
            // Kiểm tra tên người dùng
            valid &= kiemTraUserName("#userNameSU", "#error_userNameSU");
            // Kiểm tra email
            valid &= kiemTraEmail('#emailSU', '#error_emailSU');

            // Kiểm tra password
            valid &= kiemTraPass('#passwordSU', '#error_passwordSU_length');

            valid &= kiemTraKhopPass('#passwordSU', '#confirmPasswordSU', '#error_confirmPasswordSU');

            return valid;
        case 3:
            valid &= kiemTraRong("userNameFG", 'error_userNameFG');
            // Kiểm tra email
            valid &= kiemTraEmail('#emailFG', '#error_emailFG');

            valid &= kiemTraTonTai("userNameFG", 'error_userNameFG', "emailFG", 'error_emailFG')
        
            // Kiểm tra password
            valid &= kiemTraPass('#passwordFG', '#error_passwordFG');
        
            valid &= kiemTraKhopPass('#passwordFG', '#confirmPasswordFG', '#error_confirmPasswordFG');

            return valid;
    }
}

const kiemTraRong = (idValue, idError) => {
    let inputText = document.getElementById(idValue);
    if (inputText.value.trim() === '') {
        document.getElementById(idError).innerHTML = inputText.name + ' không được bỏ trống !';
        document.getElementById(idError).style.display = 'block';
        return false;
    } else {
        document.getElementById(idError).innerHTML = '';
        document.getElementById(idError).style.display = 'none';
        return true;
    }
}

const kiemTraUserName = (selectorValue, selectorError) => {
    //Lấy giá trị người dùng nhập vào từ selector
    let inputText = document.querySelector(selectorValue);
    document.querySelector(selectorError).innerHTML = "";
    const regexKiTu = /^[a-zA-Z0-9_]*$/;
    let khongHopLe = false;

    if (inputText.value.length < 6 || inputText.value.length > 20) {
        document.querySelector(selectorError).innerHTML += inputText.name + ' từ 6 đến 20 kí tự! <br>';
        document.querySelector(selectorError).style.display = 'block';
        khongHopLe = true;
    }
    if (!regexKiTu.test(inputText.value)) {
        document.querySelector(selectorError).innerHTML += inputText.name + ' có chứa các ký tự không hợp lệ!';
        document.querySelector(selectorError).style.display = 'block';
        khongHopLe = true;
    }
    if (inputText.value.length >= 6 && usernameTonTai(inputText.value) !== -1) {
        document.querySelector(selectorError).innerHTML += 'Tên đăng nhập' + ' đã tồn tại';
        document.querySelector(selectorError).style.display = 'block';
        khongHopLe = true;
    }
    if (!khongHopLe) {
        document.querySelector(selectorError).innerHTML = '';
        document.querySelector(selectorError).style.display = "none"
    }
    return !khongHopLe;
}

const kiemTraEmail = (selectorValue, selectorError) => {
    let inputText = document.querySelector(selectorValue);
    const regexEmail = /\S*@[a-zA-Z]*(\.[a-zA-Z]*)*/

    if (inputText.value.trim() === '') {
        document.querySelector(selectorError).innerHTML = 'Email không được để trống!';
        document.querySelector(selectorError).style.display = 'block';
        return false;
    } else if (!regexEmail.test(inputText.value)) {
        document.querySelector(selectorError).innerHTML = 'Email không hợp lệ!';
        document.querySelector(selectorError).style.display = 'block';
        return false;
    } else {
        document.querySelector(selectorError).innerHTML = '';
        document.querySelector(selectorError).style.display = 'none';
        return true;
    }
}


const kiemTraPass = (selectorValue, selectorError) => {
    let inputText = document.querySelector(selectorValue);
    if (inputText.value.length >= inputText.minLength && inputText.value.length <= inputText.maxLength) {
        document.querySelector(selectorError).innerHTML = '';
        document.querySelector(selectorError).style.display = 'none';
        return true;
    } else {
        document.querySelector(selectorError).innerHTML = inputText.name + ' từ ' + inputText.minLength + ' đến ' + inputText.maxLength + ' ký tự!';
        document.querySelector(selectorError).style.display = 'block';
        return false;
    }
}

const kiemTraKhopPass = (password, confirmPassword, selectorError) => {
    let inputPW = document.querySelector(password);
    let inputCPW = document.querySelector(confirmPassword);
    if (inputCPW.value.trim() === inputPW.value.trim()) {
        document.querySelector(selectorError).innerHTML = '';
        document.querySelector(selectorError).style.display = 'none';
        return true;
    } else {
        document.querySelector(selectorError).innerHTML = "Xác nhận mật khẩu không trùng khớp"
        document.querySelector(selectorError).style.display = 'block';
        return false;
    }
}

const kiemTraDangNhap = (loginInput, loginError, passwordInput, passwordError) => {
    if (document.getElementById(loginInput).value === "") return false;
    
    const index = usernameTonTai(document.getElementById(loginInput).value);
    const password = document.getElementById(passwordInput).value;
    if (index === -1) {
        document.getElementById(loginError).innerHTML = "Tên đăng nhập không tồn tại!!!";
        document.getElementById(loginError).style.display = 'block';
        return false;
    }
    if (checkKhoa(document.getElementById(loginInput).value)) {
        document.getElementById(loginError).innerHTML = "Tên đăng nhập đang bị khóa. Vui lòng thử lại sau";
        document.getElementById(loginError).style.display = 'block';
        return false;
    }
    if (!checkPassword(index, password)) {
        document.getElementById(passwordError).innerHTML = "Nhập sai mật khẩu!!!";
        document.getElementById(passwordError).style.display = 'block';
        return false;
    }
    return true;
}

const kiemTraTonTai = (loginInput, loginError, emailInput, emailError) => {
    if (document.getElementById(loginInput).value === "") return false;
    const index = usernameTonTai(document.getElementById(loginInput).value);
    const email = document.getElementById(emailInput).value;
    if (index === -1) {
        document.getElementById(loginError).innerHTML = "Tên đăng nhập không tồn tại!!!";
        document.getElementById(loginError).style.display = 'block';
        return false;
    }
    if (!checkEmail(index, email)) {
        document.getElementById(emailError).innerHTML = "Nhập sai email!!!";
        document.getElementById(emailError).style.display = 'block';
        return false;
    }
    return true;
}

function doSubmit(value) {
    if (!checkValidation(value)) return;
    switch (value) {
        case 1:
            const username = document.getElementById("userNameLG").value;
            if (username === "admin") {
                localStorage.setItem('adminLogin', JSON.stringify(username));
                location.href = "./admin/products.html"
            }

            else {
                localStorage.setItem('userLogin', JSON.stringify(username));
                location.reload();
            }
            break;
        case 2:
            dangKi({
                username: document.getElementById("userNameSU").value,
                password: document.getElementById("passwordSU").value,
                email: document.getElementById("emailSU").value,
                ngaydangky: new Date().toLocaleDateString("fr-FR"),
                status: 1
            })
            location.reload();
            break;
        case 3:
            suaMatKhau(document.getElementById("userNameFG").value, document.getElementById("passwordFG").value);
            location.reload();
            break;
    }
}