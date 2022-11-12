/**
 *
 */
// export default function (name, width = "auto", height = "auto") {
//     return `
//         <div data-slot="${name}" class="slot"></div>
//     `
// }

export default function (name, width = "auto", height = "auto") {
    return `<div data-slot="${name}" class="slot" style="width: ${width}; height: ${height}"></div>`
}