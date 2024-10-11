let num = 1
document.getElementById("b-username").addEventListener('click', (e) => {
    const username = document.getElementById("username").value
    const text_username = document.getElementById("t-username")
    text_username.innerHTML = username + " Tom&jerry"
})

document.getElementById("b-url").addEventListener('click', ()=> {
    const url = document.getElementById("url").value
    const avatar = document.getElementById("t-url")
    avatar.style.backgroundImage = "url('" + url + "')"
})

document.getElementById("b-phone").addEventListener('click', () => {
    num++
    const name = document.getElementById("p-name").value
    const number = document.getElementById("p-number").value
    const tb_phone = document.getElementById("tb-phone")
    tb_phone.innerHTML += `
        <tr>
            <td>${num}</td>
            <td>${name}</td>
            <td>${number}</td>
        </tr>`;
    
    document.getElementById("p-name").value = '';
    document.getElementById("p-number").value = '';
})

document.getElementById("b-export").addEventListener('click', ()=> {
    function tableToCSV() {

        let csv_data = [];
    
        let rows = document.getElementsByTagName('tr');
        for (let i = 0; i < rows.length; i++) {
    
            let cols = rows[i].querySelectorAll('td,th');
    
            let csvrow = [];
            for (let j = 0; j < cols.length; j++) {

                csvrow.push(cols[j].innerHTML);
            }

            csv_data.push(csvrow.join(","));
        }

        csv_data = csv_data.join('\n');
        return csv_data
    }
    function downloadCSVFile(csv_data) {

        CSVFile = new Blob([csv_data], { type: "text/csv" });

        let temp_link = document.createElement('a');

        temp_link.download = "GfG.csv";
        let url = window.URL.createObjectURL(CSVFile);
        temp_link.href = url;
    
        temp_link.style.display = "none";
        document.body.appendChild(temp_link);
    
        // Automatically click the link to trigger download 
        temp_link.click();
        document.body.removeChild(temp_link);
    }
    downloadCSVFile(tableToCSV())

})