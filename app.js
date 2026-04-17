const socket = io();
const list = document.getElementById('list');

// Load existing data
socket.on('load_data', (items) => {
  list.innerHTML = '';
  items.forEach(addItemToDOM);
});

// Add new item in real time
socket.on('item_added', (item) => {
  addItemToDOM(item);
});

function sendData() {
  const input = document.getElementById('input');
  if (input.value.trim() !== '') {
    socket.emit('new_item', input.value);
    input.value = '';
  }
}

function addItemToDOM(item) {
  const li = document.createElement('li');
  li.textContent = item.text;
  list.appendChild(li);
}