const csvFile = document.getElementById("csvFile");
const tableContainer = document.getElementById("tableContainer");

csvFile.addEventListener("change", function () {
    const file = this.files[0];

    if (!file) return;

    const reader = new FileReader();

    reader.onload = function (e) {
        const text = e.target.result;
        displayCSV(text);
    };

    reader.readAsText(file);
});

function displayCSV(csvText) {
    const rows = csvText.trim().split("\n");

    let html = "<table>";

    rows.forEach((row, index) => {
        const columns = row.split(",");

        html += "<tr>";

        columns.forEach(column => {
            if (index === 0) {
                html += `<th>${column}</th>`;
            } else {
                html += `<td>${column}</td>`;
            }
        });

        html += "</tr>";
    });

    html += "</table>";

    tableContainer.innerHTML = html;
}
