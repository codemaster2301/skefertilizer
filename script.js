// Function to open the navigation menu
function opennav() {
    const dbtn = document.querySelector(".bi-three-dots");
    if (dbtn) {
        const nav = document.querySelector(".bar2");
        if (nav) {
            nav.style.transform = "translateY(0)";
            dbtn.style.display = "none";
        }
    }
}

// Function to close the navigation menu
function cancel() {
    const cbtn = document.querySelector(".bi-x");
    if (cbtn) {
        const nav = document.querySelector(".bar2");
        if (nav) {
            nav.style.transform = "translateY(-1000px)";
            const dbtn = document.querySelector(".bi-three-dots");
            if (dbtn) {
                dbtn.style.display = "";
            }
        }
    }
}

// Function to check if a value is a decimal
function isDecimal(value) {
    return value % 1 !== 0;
}

// Function to calculate total price based on quantity
function calculateTotalPrice() {
    const quantityInput = document.getElementById('quantity');
    const priceResult = document.getElementById('priceResult');

    if (!quantityInput || !priceResult) {
        console.error("Required elements are missing.");
        return;
    }

    const quantity = parseFloat(quantityInput.value);

    if (isNaN(quantity) || isDecimal(quantity)) {
        alert("Decimal value is not valid. Please enter a whole number.");
        return;
    }

    if (quantity > 0) {
        const pricePerKg = 35; // Price per kg in Rs
        const totalPrice = quantity * pricePerKg;
        priceResult.innerText = `Total price is Rs ${totalPrice.toFixed(2)}.`;
    } else {
        priceResult.innerText = 'Please enter a valid quantity.';
    }
}

// Function to open WhatsApp with a pre-filled message
function sendMessage() {
    const phoneNumber = "+919482379110";
    const textMessage = "hi";
    const url = `https://api.whatsapp.com/send?phone=${encodeURIComponent(phoneNumber)}&text=${encodeURIComponent(textMessage)}`;
    window.open(url, '_blank');
}
