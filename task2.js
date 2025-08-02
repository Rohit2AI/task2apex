function validateForm() {
      const name = document.getElementById('name').value.trim();
      const email = document.getElementById('email').value.trim();
      const message = document.getElementById('message').value.trim();

      if (!name || !email || !message) {
        alert("All fields are required!");
        return;
      }

      const emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
      if (!email.match(emailPattern)) {
        alert("Please enter a valid email address.");
        return;
      }

      alert("Form submitted successfully!");
    }

    // Dynamic To-Do List
    function addTask() {
      const taskInput = document.getElementById('taskInput');
      const taskValue = taskInput.value.trim();
      if (!taskValue) return alert("Enter a task!");

      const li = document.createElement('li');
      li.textContent = taskValue;

      const delBtn = document.createElement('button');
      delBtn.textContent = "Delete";
      delBtn.onclick = function() {
        this.parentElement.remove();
      };

      li.appendChild(delBtn);
      document.getElementById('taskList').appendChild(li);

      taskInput.value = "";
    }
