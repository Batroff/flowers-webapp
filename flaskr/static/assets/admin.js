window.addEventListener('DOMContentLoaded', () => {
    const table = document.querySelector('table > tbody')
    table.addEventListener('click', tableHandler)
});

function tableHandler(e) {
    if (e.target.closest('td').hasAttribute('data-delete')) {
        const item = e.target.closest('tr')
        const item_id = item.getAttribute('data-id')
        const item_title = item.querySelector('[data-title]').textContent
        const item_description = item.querySelector('[data-description]').textContent
        const item_image = item.querySelector('[data-image]').textContent
        const xhr = new XMLHttpRequest()

        xhr.open('POST', '/admin', true)
        xhr.addEventListener('load', function handler() {
            window.location.reload()
            xhr.removeEventListener('load', handler)
        })

        xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded')
        xhr.send(`id=${item_id}&title=${item_title}&description=${item_description}&` +
                `image=${item_image}&action=delete`)
    }
}