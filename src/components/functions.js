export const timeConverter=(timestamp)=>{
    var a = new Date(timestamp);
    var months = ['Ocak','Şubat','Mart','Nisan','Mayıs','Haziran','Temmuz','Ağustos','Eylül','Ekim','Kasım','Aralık'];
    var year = a.getFullYear();
    var month = months[a.getMonth()];
    var date = a.getDate();
    var hour = a.getHours();
    var min = a.getMinutes();
    var sec = a.getSeconds();
    var time = date + ' ' + month + ' ' + year;
    return time;
  }

  export const binlik=(x)=> {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
  }

 export const formatDate=(date)=> {
  
    function padTo2Digits(num) {
      return num.toString().padStart(2, '0');
    }
      return (
        [
          padTo2Digits(date.getDate()),
          padTo2Digits(date.getMonth() + 1),
          date.getFullYear(),
        ].join('/') +
        ' ' +
        [
          padTo2Digits(date.getHours()),
          padTo2Digits(date.getMinutes()),
          padTo2Digits(date.getSeconds()),
        ].join(':')
      );
    }
  
  