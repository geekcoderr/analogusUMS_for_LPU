function noData() {
    const loader = document.getElementById('loader');
    loader.style.display = 'none';
}

fetch('http://localhost:8000/apiums')
    .then(response => response.json())
    .then(data => {
        let output = '';
        data.forEach(item => {
            output += `<div class="content">
                    <div class="course"><p class="p1">Course |&nbsp<short class="a1">${item.course}</short>&nbsp|</p></div> 
                    <div class="timing"><p class="p2">Timing |&nbsp<short class="a2">${item.timing}</short>&nbsp|</p></div>
                    <div class="platform"><p class="p3">Room-No |&nbsp<short class="a3">${item.platform}</short>&nbsp|</p></div>
                    </div>`;
        });
        // console.log(output);
        noData();
        document.getElementById('main-div').innerHTML = output;
    })
    .catch(error => {
        noData();
        document.getElementById('main-div').innerHTML = '<img src="./Assets/No-data.png" alt="No-DATA" class="error">';
        console.error('Error fetching data:', error);
    }
    );
