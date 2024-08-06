// Dữ liệu 1: Mark nặng 78 kg và cao 1.69 m. John nặng 92 kg và cao 1.95 m
var markKhoiLuong1 = 78;
var markChieuCao1 = 1.69;

var johnKhoiLuong1 = 92;
var johnChieuCao1 = 1.95;

// Dữ liệu 2: Mark nặng 95 kg và cao 1.88 m. John nặng 85 kg và cao 1.76 m
var markKhoiLuong2 = 95;
var markChieuCao2 = 1.88;

var johnKhoiLuong2 = 85;
var johnChieuCao2 = 1.76;

// Tính chỉ số BMI
function tinhChisoBMI(khoiLuong, chieuCao) {
  return khoiLuong / (chieuCao * chieuCao);
}

// Tính chỉ số BMI cho cả hai dữ liệu
var markBMI1 = tinhChisoBMI(markKhoiLuong1, markChieuCao1);
var johnBMI1 = tinhChisoBMI(johnKhoiLuong1, johnChieuCao1);

var markBMI2 = tinhChisoBMI(markKhoiLuong2, markChieuCao2);
var johnBMI2 = tinhChisoBMI(johnKhoiLuong2, johnChieuCao2);

// Tạo biến Boolean 'markHigherBMI' chứa thông tin về liệu Mark có chỉ số BMI cao hơn John hay không.

var markHigherBMI1 = markBMI1 > johnBMI1;
var markHigherBMI2 = markBMI2 > johnBMI2;

// In kết quả ra màn hình
console.log("Dữ liệu 1 - Mark có chỉ số BMI cao hơn John: " + markHigherBMI1);
console.log("Dữ liệu 2 - Mark có chỉ số BMI cao hơn John: " + markHigherBMI2);
