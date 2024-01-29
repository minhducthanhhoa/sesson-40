// Hàm in ra tất cả các giá trị đã được lưu trong localStorage
function inCacGiaTriDaLuu() {
    // Lặp qua tất cả các cặp key-value trong localStorage
    for (var i = 0; i < localStorage.length; i++) {
      var key = localStorage.key(i);
      var value = localStorage.getItem(key);
  
      console.log('Key:', key, 'Value:', value);
    }
  }
  
  // Gọi hàm inCacGiaTriDaLuu để in ra các giá trị đã được lưu trong localStorage
  inCacGiaTriDaLuu();