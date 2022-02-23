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
  
  