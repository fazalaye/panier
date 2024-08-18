
        // Fonction pour mettre à jour le prix total
        function updateTotal() {
            const prices = document.querySelectorAll('.price');
            let total = 0;
            prices.forEach(price => {
                let quantity = parseInt(price.previousElementSibling.querySelector('.quantity').textContent);
                let priceValue = parseInt(price.textContent.replace('€', ''));
                total += quantity * priceValue;
            });
            document.getElementById('total').textContent = total;
        }

        // Gestion des boutons +
        document.querySelectorAll('.plus-btn').forEach(btn => {
            btn.addEventListener('click', function() {
                let quantityElement = this.previousElementSibling;
                let quantity = parseInt(quantityElement.textContent);
                quantityElement.textContent = quantity + 1;
                updateTotal();
            });
        });

        // Gestion des boutons -
        document.querySelectorAll('.minus-btn').forEach(btn => {
            btn.addEventListener('click', function() {
                let quantityElement = this.nextElementSibling;
                let quantity = parseInt(quantityElement.textContent);
                if (quantity > 1) {
                    quantityElement.textContent = quantity - 1;
                    updateTotal();
                }
            });
        });

        // Gestion des boutons de suppression
        document.querySelectorAll('.delete-btn').forEach(btn => {
            btn.addEventListener('click', function() {
                this.parentElement.remove();
                updateTotal();
            });
        });

        // Gestion du bouton like
        document.querySelectorAll('.heart-btn').forEach(btn => {
            btn.addEventListener('click', function() {
                this.classList.toggle('liked');
            });
        });
    