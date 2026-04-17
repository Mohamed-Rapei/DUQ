// =====================
// SIDEBAR ACTIVE STATE
// =====================
const navItems = document.querySelectorAll("nav li");

navItems.forEach(item => {
    item.addEventListener("click", () => {
        navItems.forEach(i => i.classList.remove("active"));
        item.classList.add("active");
    });
});


// =====================
// ADD OFFER BUTTON
// =====================
const addBtn = document.querySelector(".add-offer-btn");
const offersContainer = document.querySelector(".active-offers");

addBtn.addEventListener("click", () => {
    const name = prompt("Enter meal name:");
    const price = prompt("Enter price:");
    const quantity = prompt("Enter quantity:");

    if (!name || !price || !quantity) return;

    const newOffer = document.createElement("div");
    newOffer.classList.add("offer-item");

    newOffer.innerHTML = `
        <span class="emoji">🍽️</span>
        <div class="offer-info">
            <p class="item-name">${name}</p>
            <p class="sub-text">${quantity} portions left</p>
        </div>
        <div class="offer-price">
            <p class="price">$${price}</p>
            <p class="time">● just now</p>
        </div>
    `;

    offersContainer.appendChild(newOffer);
});


// =====================
// DELETE OFFER ON CLICK
// =====================
document.addEventListener("click", function (e) {
    if (e.target.closest(".offer-item")) {
        const confirmDelete = confirm("Delete this offer?");
        if (confirmDelete) {
            e.target.closest(".offer-item").remove();
        }
    }
});


// =====================
// LIVE COUNTER ANIMATION
// =====================
const stats = document.querySelectorAll(".stat-value");

stats.forEach(stat => {
    let finalValue = stat.innerText.replace(/\D/g, "");
    let count = 0;

    const interval = setInterval(() => {
        count++;
        stat.innerText = count;

        if (count >= finalValue) {
            stat.innerText = finalValue;
            clearInterval(interval);
        }
    }, 30);
});


// =====================
// SIMPLE NOTIFICATION
// =====================
function showNotification(msg) {
    const notif = document.createElement("div");
    notif.innerText = msg;
    notif.style.position = "fixed";
    notif.style.bottom = "20px";
    notif.style.right = "20px";
    notif.style.background = "#ff6b00";
    notif.style.color = "#fff";
    notif.style.padding = "10px 20px";
    notif.style.borderRadius = "10px";
    notif.style.fontWeight = "600";
    notif.style.zIndex = "999";

    document.body.appendChild(notif);

    setTimeout(() => {
        notif.remove();
    }, 2000);
}


// =====================
// USE NOTIFICATION
// =====================
addBtn.addEventListener("click", () => {
    showNotification("New offer added 🚀");
});