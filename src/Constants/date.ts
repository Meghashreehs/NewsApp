const date = new Date();

export function getDate(): string {
    //returns 2020-2-28
    let dateTemp: any = date.getDate()
    if (dateTemp < 10) dateTemp = '0' + dateTemp
    return (date.getFullYear() + '-' + (date.getMonth() + 1) + '-' + dateTemp)
}

export function getDMY(): string {
    //returns 09 jan 2020
    const MONTHS = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
    return date.getDate() + ' ' + MONTHS[date.getMonth()] + ' ' + date.getFullYear()
}

export function getDateDMY(): string {
    //returns 09 jan 2020
    const MONTHS = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
    const DAYS = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat']
    return DAYS[date.getDay()] + ', ' + date.getDate() + ' ' + MONTHS[date.getMonth()] + ' ' + date.getFullYear()
}

export function getTime(): string {
    //returns 15:36:12
    const date = new Date();
    let seconds: any = date.getSeconds()
    let minutes: any = date.getMinutes()
    let hours: any = date.getHours()
    if (seconds < 10) seconds = "0" + seconds
    if (hours < 10) hours = "0" + hours;
    if (minutes < 10) minutes = "0" + minutes;
    return hours + ':' + minutes + ':' + seconds

}

export function getTime12Hrs(): string {
    //returns 12:47 PM
    const date = new Date();
    const AM_PM = (date.getHours() < 12) ? "am" : "pm";
    const HOUR = (date.getHours() < 12) ? date.getHours() : date.getHours() - 12;
    return HOUR + ':' + date.getMinutes() + ' ' + AM_PM

}

export function getDateAndTime(): string {
    //returns 2020-2-28 15:36:12
    return getDate() + ' ' + getTime()
}

export function getDateMY(): string {
    //returns MM/DD/YYYY
    let tempDate: any = date.getDate()
    if (tempDate < 10) tempDate = '0' + tempDate
    return (date.getMonth() + 1) + '/' + tempDate + '/' + date.getFullYear()
}