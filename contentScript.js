document.addEventListener("dblclick", function (event) {
    try {
        var selectedText = window.getSelection().toString();
        const unixTimestamp = parseInt(selectedText);
        const date = new Date(unixTimestamp * 1000);

        if (date > new Date(2000, 0, 1)) {
            // Create a popover element
            var popover = document.createElement("div");
            popover.className = "my-popover";
            popover.textContent = date.toISOString();
            document.body.appendChild(popover);

            // Position the popover near the selected text
            popover.style.top = event.pageY + "px";
            popover.style.left = event.pageX + "px";

            // Handle clicks on the page
            document.addEventListener("click", function (e) {
                popover.remove();
            });
        }
    } catch (error) {

    }

});
