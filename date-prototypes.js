Date.prototype.getHoursFormatted = function(number) {
    var hours = this.getHours();
    return hours < 10 ? '0' + hours : hours;
};

Date.prototype.getMinutesFormatted = function(number) {
    var minutes = this.getMinutes();
    return minutes < 10 ? '0' + minutes : minutes;
};

Date.prototype.getSecondsFormatted = function(number) {
    var second = this.getSeconds();
    return second < 10 ? '0' + second : second;
};

Date.prototype.getDayFormatted = function() {
    var day = this.getDate();
    return day < 10 ? '0' + day : day; // ('' + month) for string result
};

Date.prototype.getMonthFormatted = function() {
    var month = this.getMonth()+1;
    return month < 10 ? '0' + month : month; // ('' + month) for string result
}

Date.prototype.getFullDateTime = function() {
    return this.getFullYear()+'-'+this.getMonthFormatted()+'-'+this.getDayFormatted()+' '+this.getHoursFormatted()+':'+this.getMinutesFormatted()+':'+this.getSecondsFormatted();
}


Date.prototype.getFullDate = function(separator) {
    separator = separator ? separator : '-';
    return this.getFullYear()+separator+this.getMonthFormatted()+separator+this.getDayFormatted();
};

Date.prototype.countDaysMonth = function () {
    var monthStart = new Date(this);
    var monthEnd = new Date(this);
    
    monthEnd.setMonth(monthEnd.getMonth() + 1);

    var qtdeDias = Math.round((monthEnd - monthStart) / (1000 * 60 * 60 * 24));

    return qtdeDias
};
