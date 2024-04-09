/**
 * Set focus to the element with the given id.
 *
 * @param id  The id of the element which should receive focus.
 */
function SimpleSAML_focus(id)
{
    var element = document.getElementById(id);
    if (element != null) {
        element.focus();
    }
}


/**
 * Show the given DOM element.
 *
 * @param id  The id of the element which should be shown.
 */
function SimpleSAML_show(id)
{
    var element = document.getElementById(id);
    if (element == null) {
        return;
    }

    element.style.display = 'block';
}


/**
 * Hide the given DOM element.
 *
 * @param id  The id of the element which should be hidden.
 */
function SimpleSAML_hide(id)
{
    var element = document.getElementById(id);
    if (element == null) {
        return;
    }

    element.style.display = 'none';
}

document.getElementById('supporter-form').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the default form submission

    // Get the name and surname from the form
    var name = document.getElementById("name").value;
    var surname = document.getElementById("surname").value;

    // Store the name and surname in localStorage
    localStorage.setItem('newSupporter', JSON.stringify({ name, surname }));

    // Redirect to the display page
    window.location.href = 'display.html';
});
