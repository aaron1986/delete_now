function fetchCSV() {
    fetch('./data.csv')
        .then(response => response.text())
        .then(data => {
            const rows = data.split('\n');
            const tableBody = document.querySelector('#data-table tbody');

            for (let i = 1; i < rows.length; i++) { // Start from index 1 to skip the header row
                const columns = rows[i].split(',');
                const [id, name, address] = columns;

                const newRow = document.createElement('tr');
                newRow.innerHTML = `
                    <td>${id}</td>
                    <td>${name}</td>
                    <td>${address}</td>
                `;

                tableBody.appendChild(newRow);
            }
        })
        .catch(error => console.error('Error:', error));
}

// Call the fetchCSV function to load the CSV data
fetchCSV();