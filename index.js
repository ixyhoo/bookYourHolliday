//couvert today to input format
const today = new Date().toISOString().split('T')[0];
start_date.value = today;
start_date.min = today;

// Tomorrow date calc

let tomorrow = new Date();
tomorrow.setDate(tomorrow.getDate() + 1);

//convert to input format
let tomorrowFormat = tomorrow.toISOString().split('T')[0];
console.log(tomorrowFormat);
end_date.value = tomorrowFormat;
end_date.min = tomorrowFormat;

start_date.addEventListener('change', (e) => {

    let day = new Date(e.target.value);
    if (end_date.value < start_date.value) {
        day.setDate(day.getDate() + 1);
        end_date.value = day.toISOString().split('T')[0];
    }
});

//end date change

end_date.addEventListener('change', (e) => {
    let day = new Date(e.target.value);

    if (end_date.value < start_date.value) {
        day.setDate(day.getDate() - 1);
        start_date.value = day.toISOString().split('T')[0];
    }
    
});