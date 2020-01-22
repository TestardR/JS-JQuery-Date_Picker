
$('.date-picker').datepicker()

function handleDateSelection() {
    const { selectedDay, selectedMonth, selectedYear } = $('.date-picker').data().datepicker
    console.log(selectedDay, selectedMonth, selectedYear);
    const {datepicker} = $('.date-picker').data()
    console.log(datepicker);
}