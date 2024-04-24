document.getElementById('order-form').addEventListener('submit', function(event) {
    event.preventDefault();
    var orderCode = document.getElementById('order-code').value;
    var order = JSON.parse(localStorage.getItem(orderCode));
    if (order) {
        document.getElementById('order-details').innerHTML = '<span class="highlight">Status:</span> ' + order.status + '. ' + order.comment;
        document.getElementById('order-status').classList.remove('hidden');
    } else {
        document.getElementById('order-details').innerHTML = 'No order found with that code.';
        document.getElementById('order-status').classList.remove('hidden');
    }
});
