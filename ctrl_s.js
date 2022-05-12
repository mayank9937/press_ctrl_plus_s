// Ctrl + s key detect on key down
document.body.addEventListener("keydown", function(ev) {
    // function to check the detection
    ev = ev || window.event; // Event object 'ev'
    var key = ev.which || ev.keyCode; // Detecting keyCode
    // Detecting Ctrl
    var ctrl = ev.ctrlKey ? ev.ctrlKey : ((key === 17) ?
        true : false);
    if (ctrl && key === 83) {
        ev.preventDefault();
        document.querySelector('#sform_submit').click();
    }
}, false);
