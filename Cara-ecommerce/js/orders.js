// Define AngularJS Application
var app = angular.module('orderApp', []);

// Define Controller
app.controller('OrderController', function ($scope) {
    $scope.order = {};

    // Submit Form Function
    $scope.submitForm = function (form) {
        if (form.$valid) {
            alert('Order placed successfully!');
        } else {
            alert('Please fill out the form correctly.');
        }
    };
});

document.getElementById('order-form').addEventListener('submit', function (event) {
    event.preventDefault(); // Prevent the default form submission behavior
    alert('Your order has been placed successfully!');
    // Optionally, redirect the user to another page after the alert
    window.location.href = '../index.html'; // Redirect to the homepage
});


// Dynamically populate the Order Summary
function loadOrderSummary() {
    const cart = JSON.parse(localStorage.getItem('cart')) || [];
    const summaryContainer = document.querySelector('.summary-container ul');

    if (summaryContainer) {
        summaryContainer.innerHTML = ''; // Clear existing items

        let subtotal = 0;

        cart.forEach(item => {
            const itemTotal = parseFloat(item.price.replace('$', '')) * item.quantity;
            subtotal += itemTotal;

            const listItem = document.createElement('li');
            listItem.innerHTML = `<span>${item.name} × ${item.quantity}</span> <span>$${itemTotal.toFixed(2)}</span>`;
            summaryContainer.appendChild(listItem);
        });

        // Add Subtotal
        const subtotalItem = document.createElement('li');
        subtotalItem.innerHTML = `<span>Subtotal</span> <span>$${subtotal.toFixed(2)}</span>`;
        summaryContainer.appendChild(subtotalItem);

        // Add Shipping (Assume Free Shipping)
        const shippingItem = document.createElement('li');
        shippingItem.innerHTML = `<span>Shipping</span> <span>Free</span>`;
        summaryContainer.appendChild(shippingItem);

        // Add Total
        const totalItem = document.createElement('li');
        totalItem.classList.add('total');
        totalItem.innerHTML = `<span>Total</span> <span>$${subtotal.toFixed(2)}</span>`;
        summaryContainer.appendChild(totalItem);
    }
}

// Load the Order Summary when the page is loaded
window.onload = loadOrderSummary;

// Add the form to the HTML
document.write(`
<form id="order-form" name="orderForm" ng-submit="submitForm(orderForm)" novalidate>
    <div class="form-group">
        <label for="fullName">Full Name</label>
        <input type="text" id="fullName" name="fullName" ng-model="order.fullName" placeholder="Enter your full name" required>
        <span class="error" ng-show="orderForm.fullName.$touched && orderForm.fullName.$invalid">Full Name is required.</span>
    </div>
    <div class="form-group">
        <label for="email">Email</label>
        <input type="email" id="email" name="email" ng-model="order.email" placeholder="Enter your email" required>
        <span class="error" ng-show="orderForm.email.$touched && orderForm.email.$invalid">Valid Email is required.</span>
    </div>
    <div class="form-group">
        <label for="phone">Phone Number</label>
        <input type="tel" id="phone" name="phone" ng-model="order.phone" placeholder="Enter your phone number" required pattern="[0-9]{10}">
        <span class="error" ng-show="orderForm.phone.$touched && orderForm.phone.$invalid">
            Phone Number must be a 10-digit number.
        </span>
    </div>
    <div class="form-group">
        <label for="address">Address</label>
        <input type="text" id="address" name="address" ng-model="order.address" placeholder="Enter your address" required>
        <span class="error" ng-show="orderForm.address.$touched && orderForm.address.$invalid">Address is required.</span>
    </div>
    <div class="form-group">
        <label for="city">City</label>
        <input type="text" id="city" name="city" ng-model="order.city" placeholder="Enter your city" required>
        <span class="error" ng-show="orderForm.city.$touched && orderForm.city.$invalid">City is required.</span>
    </div>
    <div class="form-group">
        <label for="postalCode">Postal Code</label>
        <input type="text" id="postalCode" name="postalCode" ng-model="order.postalCode" placeholder="Enter your postal code" required pattern="[0-9]{5,6}">
        <span class="error" ng-show="orderForm.postalCode.$touched && orderForm.postalCode.$invalid">
            Postal Code must be a 5- or 6-digit number.
        </span>
    </div>
    <button type="submit" class="normal" ng-disabled="orderForm.$invalid">Place Order</button>
</form>
`);