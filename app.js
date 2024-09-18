// Función para agregar un nuevo producto
function addProduct() {
    var productName = document.getElementById('newProductName').value;
    var productPrice = document.getElementById('newProductPrice').value;
  
    if (productName && productPrice) {
      var table = document.getElementById('productBody');
      var row = table.insertRow();
      var nameCell = row.insertCell(0);
      var priceCell = row.insertCell(1);
      var actionsCell = row.insertCell(2);
  
      nameCell.textContent = productName;
      priceCell.textContent = `$${parseFloat(productPrice).toFixed(2)}`;
      actionsCell.innerHTML = '<button class="btn btn-warning btn-sm" onclick="editProduct(this)">Editar</button> <button class="btn btn-danger btn-sm" onclick="deleteProduct(this)">Eliminar</button>';
  
      // Limpiar los campos
      document.getElementById('newProductName').value = '';
      document.getElementById('newProductPrice').value = '';
    } else {
      alert('Por favor, complete ambos campos');
    }
  }
  
  // Función para eliminar un producto
  function deleteProduct(button) {
    var row = button.parentElement.parentElement;
    row.remove();
  }
  
  // Función para editar un producto
  function editProduct(button) {
    var row = button.parentElement.parentElement;
    var nameCell = row.cells[0];
    var priceCell = row.cells[1];
  
    var newName = prompt('Editar nombre del producto', nameCell.textContent);
    var newPrice = prompt('Editar precio del producto', priceCell.textContent.replace('$', ''));
  
    if (newName && newPrice) {
      nameCell.textContent = newName;
      priceCell.textContent = `$${parseFloat(newPrice).toFixed(2)}`;
    }
  }
  