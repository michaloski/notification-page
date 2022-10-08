const newNotifications = document.querySelectorAll('.new');
const number = document.querySelector('.top-number');
const removeAllNotification = document.querySelector('.all-remove');
const mark = document.querySelectorAll('.mark');

removeAllNotification.addEventListener('click', function(){
    for(const newClass of newNotifications){
        newClass.classList.remove('new');
    }
    number.remove();
    for(const markSpan of mark){
        markSpan.remove()
    }
})


newNotifications.forEach((notif)=>{
    notif.addEventListener('click', function(){
        notif.classList.remove('new');
        +number.textContent--;
        if(+number.textContent === 0){
            number.remove();
        }
        const child = notif.children[1];
        const kid = child.children[0];
        let spanMark;
        for (const mark of kid.children) {
            spanMark = mark.closest('.mark');
        }
        spanMark.remove();
        
    })
})