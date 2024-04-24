document.getElementById('login-form').addEventListener('submit', function(event) {
    event.preventDefault();
    login();
});

function login() {
    const enteredPassword = document.getElementById('password').value;
    const adminPassword = "admin123";
    if (enteredPassword === adminPassword) {
        document.getElementById('admin-container').style.display = 'flex';
        document.getElementById('login-container').style.display = 'none';
        displayOrders();
    } else {
        alert("Incorrect password!");
    }
}

document.getElementById('create-order-form').addEventListener('submit', function(event) {
    event.preventDefault();
    
    var orderId = document.getElementById('new-order-id').value;
    var orderStatus = document.getElementById('new-order-status').value;
    var orderComment = document.getElementById('new-order-comment').value;
    var orderData = {
        status: orderStatus,
        comment: orderComment
    };

    // Save the order data to localStorage
    localStorage.setItem(orderId, JSON.stringify(orderData));

    // Update the order list display
    displayOrders();

    // Alert the user that the order has been updated
    alert('Order ' + orderId + ' has been updated!');

    // Clear the form fields after submission
    document.getElementById('create-order-form').reset();
});


function displayOrders() {
    var ordersDisplay = document.getElementById('orders-display');
    ordersDisplay.innerHTML = '';
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
    displayOrders();
    alert('Order ' + orderId + ' has been deleted.');
}
