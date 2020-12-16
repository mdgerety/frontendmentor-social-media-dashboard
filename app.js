const checkbox = document.getElementById("checkbox");

checkbox.addEventListener('change', () => {
    document.body.classList.toggle('light');
    
    for(i = 1; i <= 12; i ++) {
        document.getElementById("card-" + i).classList.toggle('light');
    }
    
});

