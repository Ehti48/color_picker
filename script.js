document.querySelectorAll('input[type=color]').

forEach(function (picker){

    let targetLabel = document.querySelector('label[for="' + picker.id + '"]'),
        colorArea = document.createElement("span");
        range = document.getElementById("fontSizeRange")
        content = document.getElementById("content")

        function updateFontSize(){
            const fontSize = range.value + "px"
            content.style.fontSize = fontSize
        }

        colorArea.innerHTML = picker.value;
        targetLabel.appendChild(colorArea);
        range.addEventListener("input", updateFontSize)


        picker.addEventListener('change', function(){
            colorArea.innerHTML = picker.value;
            targetLabel.appendChild(colorArea);
            content.style.color = picker.value
            
        });
});

updateFontSize()



