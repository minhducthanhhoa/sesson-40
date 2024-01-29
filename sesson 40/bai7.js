// Kiểm tra xem tên người dùng đã tồn tại trong localStorage hay chưa
function kiemTraTenNguoiDungTonTai() {
    var userName = localStorage.getItem('userName');
    if (userName) {
      // Nếu tên người dùng đã tồn tại, hiển thị tên và ẩn nút thêm
      document.getElementById('userNameDisplay').textContent = 'Tên người dùng: ' + userName;
      document.getElementById('addButton').style.display = 'none';
      document.getElementById('deleteButton').style.display = 'block';
    } else {
      // Nếu tên người dùng không tồn tại, ẩn phần hiển thị tên và hiển thị nút thêm
      document.getElementById('userNameDisplay').textContent = '';
      document.getElementById('addButton').style.display = 'block';
      document.getElementById('deleteButton').style.display = 'none';
    }
  }
  
  // Hàm được gọi khi người dùng nhấn nút "Thêm"
  function themNguoiDung() {
    var userNameInput = document.getElementById('userNameInput').value;
  
    // Lưu tên người dùng vào localStorage với key là "userName"
    localStorage.setItem('userName', userNameInput);
  
    // Kiểm tra và cập nhật giao diện
    kiemTraTenNguoiDungTonTai();
  }
  
  // Hàm được gọi khi người dùng nhấn nút "Xóa"
  function xoaNguoiDung() {
    // Xóa tên người dùng khỏi localStorage
    localStorage.removeItem('userName');
  
    // Kiểm tra và cập nhật giao diện
    kiemTraTenNguoiDungTonTai();
  }
  
  // Kiểm tra và cập nhật giao diện khi trang được tải
  window.onload = function() {
    kiemTraTenNguoiDungTonTai();
  };