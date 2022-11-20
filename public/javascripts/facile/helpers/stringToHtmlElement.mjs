/**
 * Take a string and make it into an HTML element. If there is a cleaner and as simple way to do this, I'd love to know.
 * @param string
 * @returns {Element}
 */
export default function(string) {
    const frame = document.createElement("div");
    frame.insertAdjacentHTML("afterbegin", string);
    return frame.firstElementChild
}