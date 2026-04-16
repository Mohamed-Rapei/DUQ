function approve(btn) {
    let row = btn.parentElement.parentElement;
    row.querySelector(".pending").innerText = "Approved";
    row.querySelector(".pending").style.color = "green";
}

function reject(btn) {
    
    let row = btn.parentElement.parentElement;
    row.querySelector(".pending").innerText = "Rejected";
    row.querySelector(".pending").style.color = "red";
}