// Lấy danh sách công việc từ localStorage và hiển thị lên giao diện
function hienThiCongViec() {
    var taskList = document.getElementById('taskList');
    taskList.innerHTML = '';
  
    // Lấy danh sách công việc từ localStorage
    var tasks = JSON.parse(localStorage.getItem('tasks')) || [];
  
    // Hiển thị từng công việc trong danh sách
    tasks.forEach(function(task) {
      var li = document.createElement('li');
      li.textContent = task;
  
      var deleteButton = document.createElement('button');
      deleteButton.textContent = 'X';
      deleteButton.onclick = function() {
        xoaCongViec(task);
      };
  
      li.appendChild(deleteButton);
      taskList.appendChild(li);
    });
  }
  
  // Hàm được gọi khi người dùng nhấn nút "Thêm"
  function themCongViec() {
    var taskInput = document.getElementById('taskInput');
    var task = taskInput.value.trim();
  
    if (task === '') {
      alert('Vui lòng nhập công việc!');
      return;
    }
  
    // Lấy danh sách công việc từ localStorage
    var tasks = JSON.parse(localStorage.getItem('tasks')) || [];
  
    // Thêm công việc mới vào danh sách
    tasks.push(task);
  
    // Lưu danh sách công việc vào localStorage
    localStorage.setItem('tasks', JSON.stringify(tasks));
  
    // Xóa nội dung trong ô nhập liệu
    taskInput.value = '';
  
    // Hiển thị lại danh sách công việc
    hienThiCongViec();
  }
  
  // Hàm được gọi khi người dùng nhấn nút "Xóa" trên một công việc
  function xoaCongViec(task) {
    // Lấy danh sách công việc từ localStorage
    var tasks = JSON.parse(localStorage.getItem('tasks')) || [];
  
    // Xóa công việc khỏi danh sách
    var index = tasks.indexOf(task);
    if (index !== -1) {
      tasks.splice(index, 1);
    }
  
    // Lưu danh sách công việc vào localStorage
    localStorage.setItem('tasks', JSON.stringify(tasks));
  
    // Hiển thị lại danh sách công việc
    hienThiCongViec();
  }
  
  // Kiểm tra và cập nhật giao diện khi trang được tải
  window.onload = function() {
    hienThiCongViec();
  };