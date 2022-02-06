const button = document.querySelector('.addFunds')
const item1 = document.querySelector('.fund1')
const item2 = document.querySelector('.fund2')
const item3 = document.querySelector('.fund3')
const item4 = document.querySelector('.fund4')


//Maybe querySelectorAll and then loop through iteration like [i] where i++


button.addEventListener('click', () => {
    setTimeout(() => {
        item1.style.display = "flex"
    }, 1000);

    setTimeout(() => {
        item2.style.display = "flex"
    }, 1200);

    setTimeout(() => {
        item3.style.display = "flex"
    }, 1300);

    setTimeout(() => {
        item4.style.display = "flex"
    }, 1400);

})