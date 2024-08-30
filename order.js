function trackOrder(orderId) {
    // Simulate fetching order status from an API
    const orderStatus = {
      orderId: orderId,
      status: "Preparing",
      estimatedTime: 20
    };
  
    // Update UI with order status
    document.getElementById("orderStatus").textContent = orderStatus.status;
    document.getElementById("estimatedTime").textContent = orderStatus.estimatedTime + " minutes";
  
    // Simulate updating order status every 5 seconds
    setInterval(() => {
      orderStatus.status = "Out for delivery";
      updateOrderStatus(orderStatus);
    }, 5000);
  }
  
  function updateOrderStatus(orderStatus) {
    // Update UI with new order status
    document.getElementById("orderStatus").textContent = orderStatus.status;
  }