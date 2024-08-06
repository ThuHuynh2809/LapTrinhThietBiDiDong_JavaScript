// Dữ liệu điểm số của Dolphins và Koalas
var diemDolphins1 = [96, 108, 89];
var diemKoalas1 = [88, 91, 110];

var diemDolphins2 = [97, 112, 101];
var diemKoalas2 = [109, 95, 123];

var diemDolphins3 = [97, 112, 101];
var diemKoalas3 = [109, 95, 106];

// Hàm tính điểm trung bình của một đội
function tinhDiemTrungBinh(diem) {
  var tongDiem = 0;
  for (var i = 0; i < diem.length; i++) {
    tongDiem += diem[i];
  }
  return tongDiem / diem.length;
}

// Tính điểm trung bình cho Dolphins và Koalas
var diemTrungBinhDolphins1 = tinhDiemTrungBinh(diemDolphins1);
var diemTrungBinhKoalas1 = tinhDiemTrungBinh(diemKoalas1);

var diemTrungBinhDolphins2 = tinhDiemTrungBinh(diemDolphins2);
var diemTrungBinhKoalas2 = tinhDiemTrungBinh(diemKoalas2);

var diemTrungBinhDolphins3 = tinhDiemTrungBinh(diemDolphins3);
var diemTrungBinhKoalas3 = tinhDiemTrungBinh(diemKoalas3);

// Kiểm tra đội chiến thắng
function kiemTraChienThang(diemTrungBinhDolphins, diemTrungBinhKoalas) {
  if (diemTrungBinhDolphins > diemTrungBinhKoalas && diemTrungBinhDolphins >= 100) {
    return "Dolphins thắng cúp!";
  } else if (diemTrungBinhKoalas > diemTrungBinhDolphins && diemTrungBinhKoalas >= 100) {
    return "Koalas thắng cúp!";
  } else if (diemTrungBinhDolphins === diemTrungBinhKoalas && diemTrungBinhDolphins >= 100 && diemTrungBinhKoalas >= 100) {
    return "Hòa cúp!";
  } else {
    return "Không có đội nào giành được cúp!";
  }
}

// In kết quả ra màn hình
console.log("Dữ liệu 1 - " + kiemTraChienThang(diemTrungBinhDolphins1, diemTrungBinhKoalas1));
console.log("Dữ liệu thưởng 1 - " + kiemTraChienThang(diemTrungBinhDolphins2, diemTrungBinhKoalas2));
console.log("Dữ liệu thưởng 2 - " + kiemTraChienThang(diemTrungBinhDolphins3, diemTrungBinhKoalas3));
