;
        function changeColor(color) {
            document.body.style.backgroundColor = color;
            document.getElementById('redBtn').style.backgroundColor = 'red';
            document.getElementById('blueBtn').style.backgroundColor = 'blue';
            document.getElementById('greenBtn').style.backgroundColor = 'green';
        }

        function resetColors() {
            document.body.style.backgroundColor = 'white';
        }

