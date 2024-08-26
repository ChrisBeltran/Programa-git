const rows = document.querySelectorAll('#schedule tbody tr');

rows.forEach(row => {
    row.addEventListener('click', () => {
        alert(`Selected Activity: ${row.cells[1].innerText}\nDescription: ${row.cells[2].innerText}`);
    });
});
