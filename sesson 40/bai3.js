// Hàm được gọi khi người dùng nhấn nút "Xóa cầu thủ"
function xoaCauThu() {
    // Lấy giá trị từ trường nhập liệu
    var idCauThu = document.getElementById('idCauThu').value;
  
    // Kiểm tra xem id cầu thủ có tồn tại trong localStorage không
    if (localStorage.getItem(idCauThu)) {
      // Xóa cầu thủ khỏi localStorage
      localStorage.removeItem(idCauThu);
  
      // Hiển thị lại danh sách cầu thủ
      hienThiDanhSachCauThu();
    } else {
      alert('ID cầu thủ không tồn tại!');
    }
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
      listItem.textContent = 'ID: ' + key + ', Tên cầu thủ: ' + value;
  
      danhSachCauThuElement.appendChild(listItem);
    }
  }
  
  // Gọi hàm hiển thị danh sách cầu thủ khi trang web được tải
  hienThiDanhSachCauThu();