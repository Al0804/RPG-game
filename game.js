let zerinaHealth = 100;
let dragonHealth = 100;

const attackBtn = document.getElementById("attackBtn");
const messageDiv = document.getElementById("message");
const notificationBtn = document.getElementById("notificationBtn");

attackBtn.addEventListener("click", () => {
    if (dragonHealth > 0) {
        const damage = Math.floor(Math.random() * 20) + 1;
        dragonHealth -= damage;
        messageDiv.innerHTML = `Zerina menyerang Naga dan memberikan damage ${damage}. Naga tersisa ${dragonHealth} HP.`;

        if (dragonHealth <= 0) {
            messageDiv.innerHTML += "<br>Naga telah dikalahkan!";
            attackBtn.style.display = "none";
            notificationBtn.style.display = "block";
        } else {
            dragonAttacks();
        }
    }
});

function dragonAttacks() {
    const damage = Math.floor(Math.random() * 15) + 1;
    zerinaHealth -= damage;
    messageDiv.innerHTML += `<br>Naga menyerang Zerina dan memberikan damage ${damage}. Zerina tersisa ${zerinaHealth} HP.`;
    
    if (zerinaHealth <= 0) {
        messageDiv.innerHTML += "<br>Zerina telah dikalahkan. Game Over!";
        attackBtn.style.display = "none";
    }
}

notificationBtn.addEventListener("click", () => {
    const finalMessage = "Untuk kamu yang sudah menyelesaikan permainan ini, selamat ya. Semoga kamu bisa terus berjuang dan bisa menang melawan rintangan hidup yang ada seperti karakter yang kamu mainkan. Seperti layaknya guide di dalam game ini, aku akan terus bersamamu dan memandumu apapun itu kondisinya. Terima kasih ya Lia, dan sekali lagi aku mencintaimu.";
    alert(finalMessage);
});