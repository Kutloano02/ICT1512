// Last visited date
document.addEventListener("DOMContentLoaded", () => {
  const lastVisitedElement = document.getElementById("lastVisited");
  const lastVisit = localStorage.getItem("lastVisit");

  if (lastVisitedElement) {   // ✅ only run if element exists
    if (lastVisit) {
      lastVisitedElement.textContent = "Last visited: " + lastVisit;
    } else {
      lastVisitedElement.textContent = "This is your first visit!";
    }
  }

  const now = new Date().toLocaleString();
  localStorage.setItem("lastVisit", now);
});

// Lightbox effect
document.querySelectorAll('.lightbox').forEach(img => {
  img.addEventListener('click', () => {
    let overlay = document.createElement('div');
    overlay.id = 'overlay';
    overlay.style.position = 'fixed';
    overlay.style.top = '0';
    overlay.style.left = '0';
    overlay.style.width = '100%';
    overlay.style.height = '100%';
    overlay.style.backgroundColor = 'rgba(0,0,0,0.8)';
    overlay.style.display = 'flex';
    overlay.style.alignItems = 'center';
    overlay.style.justifyContent = 'center';
    overlay.style.zIndex = '1000';

    let enlarged = document.createElement('img');
    enlarged.src = img.src;
    enlarged.alt = img.alt;
    enlarged.style.maxWidth = '90%';
    enlarged.style.maxHeight = '90%';
    overlay.appendChild(enlarged);

    overlay.addEventListener('click', () => overlay.remove());
    document.body.appendChild(overlay);
  });
});

// Products page dropdown animation
$(document).ready(function(){
  $(".product-title").click(function(){
    $(this).next(".product-details").slideToggle("slow");
  });

  // Save selected products
  $("#productsForm").on("submit", function(event) {
    event.preventDefault();
    let selectedProducts = [];
    for (let i = 1; i <= 6; i++) {
      let product = $(`input[name="product${i}"]:checked`);
      let qty = $(`input[name="qty${i}"]`).val();
      if (product.length) {
        selectedProducts.push({ name: product.val(), qty: qty });
      }
    }
    localStorage.setItem("products", JSON.stringify(selectedProducts));
    window.location.href = "registration.html";
  });
});

