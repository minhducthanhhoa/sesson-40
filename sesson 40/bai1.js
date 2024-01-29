function luuThongTin() {
    var hoTen = document.getElementById('hoTen').value;
    var tuoi = document.getElementById('tuoi').value;
    var email = document.getElementById('email').value;
  
    var thongTinCaNhan = {
      hoTen: hoTen,
      tuoi: tuoi,
      email: email
    };
  
    localStorage.setItem('thongTinCaNhan', JSON.stringify(thongTinCaNhan));
  
    hienThiThongTin();
  }
  
  // Hàm hiển thị đối tượng đã lưu ra màn hình
  function hienThiThongTin() {
    // Lấy đối tượng từ local storage
    var thongTinCaNhan = localStorage.getItem('thongTinCaNhan');
  
    // Kiểm tra xem đối tượng có tồn tại trong local storage không
    if (thongTinCaNhan) {
      // Chuyển đổi chuỗi JSON thành đối tượng JavaScript
      thongTinCaNhan = JSON.parse(thongTinCaNhan);
  
      // Hiển thị đối tượng ra màn hình
      document.getElementById('output').textContent = JSON.stringify(thongTinCaNhan, null, 2);
    }
  }
  
  // Gọi hàm hiển thị đối tượng khi trang web được tải
  hienThiThongTin();