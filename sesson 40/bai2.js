// Hàm được gọi khi người dùng nhấn nút "Thêm cầu thủ"
function themCauThu() {
    // Lấy giá trị từ trường nhập liệu
    var tenCauThu = document.getElementById('tenCauThu').value;
  
    // Tạo một id duy nhất cho cầu thủ
    var idCauThu = Date.now().toString();
  
    // Lưu cầu thủ vào local storage với key là id và value là tên cầu thủ
    localStorage.setItem(idCauThu, tenCauThu);
  
    // Hiển thị lại danh sách cầu thủ
    hienThiDanhSachCauThu();
  }
  
  // Hàm hiển thị danh sách cầu thủ
  function hienThiDanhSachCauThu() {
    var danhSachCauThuElement = document.getElementById('danhSachCauThu');
    danhSachCauThuElement.innerHTML = '';
  
    // Lặp qua tất cả các cặp key-value trong local storage
    for (var i = 0; i < localStorage.length; i++) {
      var key = localStorage.key(i);
      var value = localStorage.getItem(key);
  
      // Tạo một phần tử danh sách mới cho mỗi cầu thủ
      var listItem = document.createElement('li');
      listItem.textContent = value;
  
      danhSachCauThuElement.appendChild(listItem);
    }
  }
  
  // Gọi hàm hiển thị danh sách cầu thủ khi trang web được tải
  hienThiDanhSachCauThu();