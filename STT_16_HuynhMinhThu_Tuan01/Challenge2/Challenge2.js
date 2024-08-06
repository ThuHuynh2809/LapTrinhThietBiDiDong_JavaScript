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

// Hàm tính chỉ số BMI
function tinhChisoBMI(khoiLuong, chieuCao) {
  return khoiLuong / (chieuCao * chieuCao);
}

// Tính chỉ số BMI cho cả hai dữ liệu
var markBMI1 = tinhChisoBMI(markKhoiLuong1, markChieuCao1);
var johnBMI1 = tinhChisoBMI(johnKhoiLuong1, johnChieuCao1);

var markBMI2 = tinhChisoBMI(markKhoiLuong2, markChieuCao2);
var johnBMI2 = tinhChisoBMI(johnKhoiLuong2, johnChieuCao2);

// So sánh chỉ số BMI và tạo thông điệp
var message1 =
  markBMI1 > johnBMI1
    ? `Chỉ số BMI của Mark (${markBMI1.toFixed(1)}) cao hơn John (${johnBMI1.toFixed(1)})!`
    : `Chỉ số BMI của John (${johnBMI1.toFixed(1)}) cao hơn Mark (${markBMI1.toFixed(1)})!`;

var message2 =
  markBMI2 > johnBMI2
    ? `Chỉ số BMI của Mark (${markBMI2.toFixed(1)}) cao hơn John (${johnBMI2.toFixed(1)})!`
    : `Chỉ số BMI của John (${johnBMI2.toFixed(1)}) cao hơn Mark (${markBMI2.toFixed(1)})!`;

// In kết quả ra màn hình
console.log("Dữ liệu 1 - " + message1);
console.log("Dữ liệu 2 - " + message2);
