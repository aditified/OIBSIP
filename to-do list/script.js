
    function addTask() {
      const taskText = document.getElementById('taskInput').value.trim();
      const taskTime = document.getElementById('timeInput').value;
      if (!taskText || !taskTime) return alert("Please enter both task and time!");

      const li = document.createElement('li');

      const taskInfo = document.createElement('div');
      taskInfo.className = 'task-info';
      taskInfo.textContent = `${taskTime} - ${taskText}`;

      const buttons = document.createElement('div');
      buttons.className = 'task-buttons';

      const completeBtn = document.createElement('button');
      completeBtn.textContent = '✔';
      completeBtn.className = 'complete';
      completeBtn.onclick = () => li.classList.toggle('completed');

      const deleteBtn = document.createElement('button');
      deleteBtn.textContent = '🗑';
      deleteBtn.onclick = () => li.remove();

      buttons.appendChild(completeBtn);
      buttons.appendChild(deleteBtn);

      li.appendChild(taskInfo);
      li.appendChild(buttons);

      document.getElementById('taskList').appendChild(li);

      document.getElementById('taskInput').value = '';
      document.getElementById('timeInput').value = '';
    }
  