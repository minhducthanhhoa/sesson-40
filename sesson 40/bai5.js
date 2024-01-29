// Hàm được gọi khi người dùng nhấn nút "Đăng ký"
function themNguoiDung(event) {
    event.preventDefault();
  
    // Lấy thông tin từ các trường nhập liệu
    var tenNguoiDung = document.getElementById('tenNguoiDung').value;
    var email = document.getElementById('email').value;
    var matKhau = document.getElementById('matKhau').value;
  
    // Tạo một đối tượng người dùng mới
    var nguoiDungMoi = {
      tenNguoiDung: tenNguoiDung,
      email: email,
      matKhau: matKhau
    };
  
    // Lấy mảng người dùng từ localStorage (nếu có)
    var danhSachNguoiDung = localStorage.getItem('danhSachNguoiDung');
    if (danhSachNguoiDung) {
      danhSachNguoiDung = JSON.parse(danhSachNguoiDung);
    } else {
      danhSachNguoiDung = [];
    }
  
    // Thêm người dùng mới vào mảng
    danhSachNguoiDung.push(nguoiDungMoi);
  
    // Lưu mảng người dùng vào localStorage
    localStorage.setItem('danhSachNguoiDung', JSON.stringify(danhSachNguoiDung));
  
    // Hiển thị lại danh sách người dùng
    hienThiDanhSachNguoiDung();
  }
  
  // Hàm hiển thị danh sách người dùng
  function hienThiDanhSachNguoiDung() {
    var danhSachNguoiDungElement = document.getElementById('danhSachNguoiDung');
    danhSachNguoiDungElement.innerHTML = '';
  
    // Lấy mảng người dùng từ localStorage
    var danhSachNguoiDung = localStorage.getItem('danhSachNguoiDung');
    if (danhSachNguoiDung) {
      danhSachNguoiDung = JSON.parse(danhSachNguoiDung);
  
      // Lặp qua mảng người dùng và tạo một phần tử danh sách mới cho mỗi người dùng
      danhSachNguoiDung.forEach(function(nguoiDung) {
        var listItem = document.createElement('li');
        listItem.textContent = 'Tên: ' + nguoiDung.tenNguoiDung + ', Email: ' + nguoiDung.email;
        danhSachNguoiDungElement.appendChild(listItem);
      });
    }
  }
  
  // Gọi hàm hiển thị danh sách người dùng khi trang web được tải
  hienThiDanhSachNguoiDung();