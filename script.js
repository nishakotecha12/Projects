document.getElementById("billing-toggle").addEventListener("change", function() {
  const isYearly = this.checked;
  const prices = document.querySelectorAll(".plan-price");

  prices.forEach((priceElement) => {
    const monthlyPrice = priceElement.getAttribute("data-monthly");
    const yearlyPrice = priceElement.getAttribute("data-yearly");

    priceElement.innerHTML = isYearly ? `₹${yearlyPrice}` : `₹${monthlyPrice}`;
  });
});

const accordionBtns = document.querySelectorAll('.accordion-btn');
accordionBtns.forEach(btn => {
  btn.addEventListener('click', function() {
    this.classList.toggle('active');
    const content = this.nextElementSibling;
    if (content.style.display === 'block') {
      content.style.display = 'none';
    } else {
      content.style.display = 'block';
    }
  });
});
