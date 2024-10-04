document.querySelectorAll('input[type="number"]').forEach(input => {
    input.addEventListener('input', function() {
        const row = this.closest('tr');
        const price = parseFloat(row.cells[3].innerText); // Preço na quarta coluna
        const quantity = parseFloat(this.value) || 0; // Quantidade
        const total = price * quantity; // Calcula o total
        row.cells[5].innerText = total.toFixed(2); // Atualiza o total na sexta coluna
    });
});