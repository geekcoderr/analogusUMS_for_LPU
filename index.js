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
                    <div class="course"><p class="p1">Course | ${item.course} |</p></div><br> 
                    <div class="timing"><p class="p2">Timing | ${item.timing} |</p></div><br>
                    <div class="platform"><p class="p3">Room-No | ${item.platform} |</p></div>
                    </div>`;
        });
        // console.log(output);
        noData();
        document.getElementById('main-div').innerHTML = output;
    })
    .catch(error => {
        noData();
        document.getElementById('main-div').innerHTML = '<img src="../../gradients/No\ data-rafiki.png" alt="No-DATA" class="error">';
        console.error('Error fetching data:', error);
    }
    );
