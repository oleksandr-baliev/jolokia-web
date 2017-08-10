var app = angular.module('myApp');

app.service("UtilService", function(){
    this.getTimeString = function(){
        var date = new Date();
        return ("0000" + date.getHours()).slice(-2) + ":" + ("0000" + date.getMinutes()).slice(-2) + ":" + ("0000" + date.getSeconds()).slice(-2);
    }
    this.formatBytes = function(bytes,decimals) {
       if(bytes <= 1) return '0 Bytes';
       var k = 1000,
           dm = decimals || 2,
           sizes = ['Bytes', 'KB', 'MB', 'GB', 'TB', 'PB', 'EB', 'ZB', 'YB'],
           i = Math.floor(Math.log(bytes) / Math.log(k));
       return parseFloat((bytes / Math.pow(k, i)).toFixed(dm)) + ' ' + sizes[i];
    }
});