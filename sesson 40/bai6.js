// Hàm được gọi khi người dùng nhấn nút "Đăng nhập"
function dangNhap(event) {
    event.preventDefault();
  
    // Lấy thông tin từ các trường nhập liệu
    var email = document.getElementById('email').value;
    var matKhau = document.getElementById('matKhau').value;
  
    // Lấy mảng người dùng từ localStorage
    var danhSachNguoiDung = localStorage.getItem('danhSachNguoiDung');
    if (danhSachNguoiDung) {
      danhSachNguoiDung = JSON.parse(danhSachNguoiDung);
  
      // Tìm người dùng có email và mật khẩu khớp
      var nguoiDungDangNhap = danhSachNguoiDung.find(function(nguoiDung) {
        return nguoiDung.email === email && nguoiDung.matKhau === matKhau;
      });
  
      if (nguoiDungDangNhap) {
        // Lưu thông tin người đăng nhập vào sessionStorage
        sessionStorage.setItem('nguoiDungDangNhap', JSON.stringify(nguoiDungDangNhap));
  
        // Đăng nhập thành công, thực hiện hành động mong muốn
        alert('Đăng nhập thành công!');
        // Ví dụ: Chuyển hướng đến trang chính
        window.location.href = 'trang-chinh.html';
      } else {
        // Thông báo thông tin không chính xác
        alert('Thông tin đăng nhập không chính xác!');
      }
    } else {
      // Thông báo thông tin đăng nhập không chính xác
      alert('Thông tin đăng nhập không chính xác!');
    }
  }