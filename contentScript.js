document.addEventListener("dblclick", function (event) {
    try {
        var selectedText = window.getSelection().toString();
        const tick = parseInt(selectedText);
        const date = new Date(tick);

        //new Date(2000,0,1) = 946659600000
        if (tick > 946659600000) {
            // Create a popover element
            var popover = document.createElement("div");
            popover.className = "my-popover";
            popover.textContent = convertDateToString(date);
            document.body.appendChild(popover);

            // Position the popover near the selected text
            popover.style.top = event.pageY + "px";
            popover.style.left = event.pageX + "px";

            // Handle clicks on the page
            document.addEventListener("click", function (e) {
                if (e.target.className != popover.className) {
                    popover.remove();
                }
            });
        }
    } catch (error) {

    }

});


function convertDateToString(date) {
    // Extract date components
    var year = date.getFullYear();
    var month = String(date.getMonth() + 1).padStart(2, '0');
    var day = String(date.getDate()).padStart(2, '0');

    // Extract time components
    var hours = String(date.getHours()).padStart(2, '0');
    var minutes = String(date.getMinutes()).padStart(2, '0');
    var seconds = String(date.getSeconds()).padStart(2, '0');

    // Get the timezone offset in minutes and convert to hours
    var timezoneOffsetHours = Math.floor(date.getTimezoneOffset() / 60);

    // Construct the formatted string
    var formattedDate = year + '-' + month + '-' + day + ' ' + hours + ':' + minutes + ':' + seconds + ' GMT' + (timezoneOffsetHours < 0 ? '+' : '-') + Math.abs(timezoneOffsetHours);

    return formattedDate;
}