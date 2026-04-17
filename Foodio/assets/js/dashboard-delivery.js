// =====================
// SIDEBAR ACTIVE
// =====================
const navItems = document.querySelectorAll(".nav-item");

navItems.forEach(item => {
    item.addEventListener("click", () => {
        navItems.forEach(i => i.classList.remove("active"));
        item.classList.add("active");
    });
});


// =====================
// ONLINE / OFFLINE TOGGLE
// =====================
const toggle = document.querySelector(".switch input");
const statusLabel = document.querySelector(".online-label");

toggle.addEventListener("change", () => {
    if (toggle.checked) {
        statusLabel.innerText = "Online";
        statusLabel.style.color = "#2ecc71";
        showNotification("You're Online 🟢");
    } else {
        statusLabel.innerText = "Offline";
        statusLabel.style.color = "red";
        showNotification("You're Offline 🔴");
    }
});


// =====================
// STEP PROGRESS (ORDER TRACKING)
// =====================
const actionBtn = document.querySelector(".action-btn");
const steps = document.querySelectorAll(".step");
const lines = document.querySelectorAll(".line");

let currentStep = 1;

actionBtn.addEventListener("click", () => {
    if (currentStep < steps.length) {
        steps[currentStep].classList.add("completed");
        steps[currentStep].classList.remove("current");

        if (steps[currentStep + 1]) {
            steps[currentStep + 1].classList.add("current");
        }

        if (lines[currentStep - 1]) {
            lines[currentStep - 1].classList.add("active");
        }

        currentStep++;

        showNotification("Step Updated 🚀");
    } else {
        showNotification("Delivery Completed ✅");
    }
});


// =====================
// UPDATE STATS RANDOMLY
// =====================
const stats = document.querySelectorAll(".stat-card h2");

function updateStats() {
    stats.forEach(stat => {
        let value = parseInt(stat.innerText);
        if (!isNaN(value)) {
            stat.innerText = value + Math.floor(Math.random() * 3);
        }
    });
}

setInterval(updateStats, 5000);


// =====================
// NOTIFICATION
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