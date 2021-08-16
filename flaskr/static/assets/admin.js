window.addEventListener('DOMContentLoaded', () => {
    const table = document.querySelector('table > tbody')
    table.addEventListener('click', tableHandler)
});

function tableHandler(e) {
    console.log(e)
    if (e.target.hasAttribute('data-delete')) {
        const item_id = e.target.getAttribute('data-delete')
        const xhr = new XMLHttpRequest()

        xhr.open('POST', '/admin', true)
        xhr.addEventListener('load', function handler() {
            window.location.reload()
            xhr.removeEventListener('load', handler)
        })

        xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded')
        xhr.send(`id=${item_id}&action=delete`)
    }
}