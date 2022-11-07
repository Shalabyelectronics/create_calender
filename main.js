const weekDays = ["Sunday","Monday","Tuesday","Wednesday",
"Thursday","Friday","Saturday"]


const select = document.querySelector('select');
document.querySelector('html').style.padding= '20px';
const calenderContainer = document.querySelector('.days-container');
const year = new Date().getFullYear();
const month = new Date().getMonth();
select.value = month + 1;
document.querySelector(".year").textContent = year;
const daysOfMonth = (y,m)=> new Date(y,m,0).getDate();
generatesDaysOnMonth(month + 1)
select.addEventListener('change',()=> {
    const month = select.value;
    generatesDaysOnMonth(month)
}
)



function generatesDaysOnMonth(month){
    const days = daysOfMonth(year,month);
    if (document.querySelectorAll(".day").length > 0){
        document.querySelectorAll(".day").forEach(day => day.remove())
        createDivsday(days,month)
    }else{
        createDivsday(days,month)
    }  
}

function createDivsday(days,month){
    let fullDate = ''
    let fullDateObj;
    for (let day=1; day <= days; day++){
        fullDate = `${month}-${day}-${year}`
        fullDateObj = new Date(fullDate)
        console.log(fullDate)
        dayName =weekDays[fullDateObj.getDay()]
        const createElement = document.createElement("div");
        createElement.classList.add("day")
        createElement.innerHTML = `<p class='day-name'>${dayName}</p><p class='day-num'>${day}</p>`
        calenderContainer.appendChild(createElement)
    }
}
