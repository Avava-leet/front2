document.addEventListener('DOMContentLoaded', function() {
    let themeButton = document.querySelector('.btn-d');
    
    function downl() {
        const url = "resume.txt"; 
        const a = document.createElement('a');
        a.href = url;
        a.download = url.split('/').pop();
        document.body.appendChild(a);
        a.click();
        document.body.removeChild(a);
    }
    

    themeButton.addEventListener('click', downl);
});