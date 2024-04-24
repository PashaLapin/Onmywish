document.getElementById('order-form').addEventListener('submit', function(event) {
    event.preventDefault();
    var orderCode = document.getElementById('order-code').value;
    var order = JSON.parse(localStorage.getItem(orderCode));
    if (order) {
        document.getElementById('order-details').textContent = 'Status: ' + order.status + '. ' + order.comment;
        document.getElementById('order-status').classList.remove('hidden');
    } else {
        document.getElementById('order-details').textContent = 'No order found with that code.';
        document.getElementById('order-status').classList.remove('hidden');
    }
});

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
    alert('Order ' + orderId + ' has been updated!');
});
