function noData() {
    const loader = document.getElementById('loader');
    loader.style.display = 'none';
}

fetch('https://hostumsapi.geekcoderr.repl.co/apiums')
    .then(response => response.json())
    .then(data => {
        if (data[0]['message'] == "No Classes today") {
            noData();
            document.body.backgroundImage="url('./Assets/back.jpg')";
            document.getElementById('main-div').innerHTML = '<img src="./Assets/noclass.gif" alt="No-class" class="noclass">';
        }
        else {
            let output = '';
            data.forEach(item => {
                output += `<div class="content">
                    <div class="course"><p class="p1">Course |&nbsp<short class="a1">${item.course}</short>&nbsp|</p></div> 
                    <div class="timing"><p class="p2">Timing |&nbsp<short class="a2">${item.timing}</short>&nbsp|</p></div>
                    <div class="platform"><p class="p3">Room-No |&nbsp<short class="a3">${item.platform}</short>&nbsp|</p></div>
                    </div>`;
            });
            // console.log(data);
            noData();
            document.getElementById('main-div').innerHTML = output;
            // document.body.style.backgroundImage="url('./Assets/background.jpg')";
        }
    })
    .catch(error => {
        noData();
        document.getElementById('main-div').innerHTML = '<img src="./Assets/No-data.png" alt="No-DATA" class="error">';
        document.body.backgroundImage="url('./Assets/back.jpg')";
        console.error('Error fetching data:', error);
    }
    );
