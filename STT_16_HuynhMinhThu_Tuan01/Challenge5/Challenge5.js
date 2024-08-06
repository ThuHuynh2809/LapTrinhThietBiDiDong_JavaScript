
// Dữ liệu 1: Cá heo đạt điểm 44, 23 và 71. Gấu túi đạt điểm 65, 54 và 49
var diemDolphins1 = [44, 23, 71];
var diemKoalas1 = [65, 54, 49];

// Dữ liệu 2: Cá heo đạt điểm 85, 54 và 41. Gấu túi đạt điểm 23, 34 và 27
var diemDolphins2 = [85, 54, 41];
var diemKoalas2 = [23, 34, 27];
// Tạo hàm mũi tên “calcAverage” để tính trung bình cộng của 3 điểm
var calcAverage = (sco) => { 
  return sco.reduce((acc, num)=>acc+num) / sco.length;
}

// Tạo hàm 'checkWinner' lấy điểm trung bình của mỗi đội làm tham số ('avgDolhins' và 'avgKoalas'), sau đó ghi lại người chiến thắng vào bảng điều khiển, cùng với điểm chiến thắng
function checkWinner(avgDolhins, avgKoalas) {
  if (avgDolhins <=2* avgKoalas){
    console.log(`Koala win (${avgKoalas} vs ${avgDolhins})`);
  }
  else if (avgDolhins >= 2* avgKoalas){
    console.log(`Dolphin win (${avgDolhins} vs ${avgKoalas})`);
  }
  else{
    console.log("No teams wins");
  }
};

  var avgDolhins1 = calcAverage(diemDolphins1);
  var avgKoalas1 = calcAverage(diemKoalas1);
  var avgDolhins2 = calcAverage(diemDolphins2);
  var avgKoalas2 = calcAverage(diemKoalas2);

  console.log("Dữ liệu 1: ");
  checkWinner(avgDolhins1, avgKoalas1);
  console.log("Dữ liệu 2: ");
  checkWinner(avgDolhins2, avgKoalas2);



