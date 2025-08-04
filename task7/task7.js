const totalPrice = "420.69235632455"
const btn = document.getElementById("purchase-btn")


btn.textContent = `Buy €${Number(totalPrice).toFixed(2)}`
