function login() {
    const enteredPassword = document.getElementById('password').value;
    const adminPassword = "admin123"; // Change this in a real application

    if (enteredPassword === adminPassword) {
        document.getElementById('admin-container').style.display = 'block'; // Show the admin panel
        document.getElementById('login-container').style.display = 'none'; // Hide the login panel
        displayOrders(); // Display orders on successful login
    } else {
        alert("Incorrect password!");
    }
}

// Make sure to update other functions like displayOrders to handle UI updates correctly.


document.getElementById('create-order-form').addEventListener('submit', function(event) {
    event.preventDefault();
    var orderId = document.getElementById('new-order-id').value;
    var orderStatus = document.getElementById('new-order-status').value;
    var orderComment = document.getElementById('new-order-comment').value;
    var orderData = {
        status: orderStatus,
        comment: orderComment
    };
    localStorage.setItem(orderId, JSON.stringify(orderData));
    displayOrders(); // Update order list after creating/updating an order
    alert('Order ' + orderId + ' has been updated!');
});

function displayOrders() {
    var ordersDisplay = document.getElementById('orders-display');
    ordersDisplay.innerHTML = ''; // Clear the current list
    for (var i = 0; i < localStorage.length; i++) {
        var key = localStorage.key(i);
        var order = JSON.parse(localStorage.getItem(key));
        var orderCard = document.createElement('div');
        orderCard.className = 'order-card';
        orderCard.innerHTML = `
            <div class="order-details">Order ID: ${key}</div>
            <div class="order-details">Status: ${order.status}</div>
            <div class="order-details">Comment: ${order.comment}</div>
            <button class="delete-button" onclick="deleteOrder('${key}')">Delete Order</button>
        `;
        ordersDisplay.appendChild(orderCard);
    }
}

function deleteOrder(orderId) {
    localStorage.removeItem(orderId);
    displayOrders(); // Refresh the displayed list after deletion
    alert('Order ' + orderId + ' has been deleted.');
}
