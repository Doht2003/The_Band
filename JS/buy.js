const buyBtns = document.querySelectorAll('.js-buy-ticket')
    // const là cái hằng
    // buyBtns là tiên biến
    //document là đại diện cho trang web muốn lấy cái gì thì phải qua document
    //lấy tất cả class js-buy-ticket để truyền vào dùng querySelectorAll
const modal = document.querySelector('.js-modal')
const modalContainer = document.querySelector('.js-modal-container')
const modalClose = document.querySelector('.js-modal-close')

    //Hàm hiển thị modal mua vé ( thêm class open vào modal)
function showBuyTickets() {
    modal.classList.add('open')
}

    // Hàm ẩn modal mua vé ( gỡ bỏ class open vào modal)
function hideBuyTickets() {
    modal.classList.remove('open')
}

    // lặp qua từng thẻ button và nghe hành vi click
for (const buyBtn of buyBtns) {
    buyBtn.addEventListener('click', showBuyTickets)
}

    //nghe hành vi click vào button close
modalClose.addEventListener('click', hideBuyTickets)

modal.addEventListener('click', hideBuyTickets)
modalContainer.addEventListener('click', function(event) {
    event.stopPropagation()
})
