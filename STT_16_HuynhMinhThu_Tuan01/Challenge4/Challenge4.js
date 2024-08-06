// Dữ liệu 1: Kiểm tra giá trị hóa đơn 275, 40 và 430.
var giaTriHoaDon1 = 275;
var giaTriHoaDon2 = 40;
var giaTriHoaDon3 = 430;

// Tính tiền tip cho các hóa đơn
var tienBoa1 = giaTriHoaDon1 >= 50 && giaTriHoaDon1 <= 300 ? giaTriHoaDon1 * 0.15 : giaTriHoaDon1 *0.2;
var tienBoa2 = giaTriHoaDon2 >= 50 && giaTriHoaDon2 <= 300 ? giaTriHoaDon2 * 0.15 : giaTriHoaDon2 *0.2;
var tienBoa3 = giaTriHoaDon3 >= 50 && giaTriHoaDon3 <= 300 ? giaTriHoaDon3 * 0.15 : giaTriHoaDon3 *0.2;


// In kết quả ra mang hình
console.log("Hóa đơn là: "+ giaTriHoaDon1, ", tiền boa là: "+tienBoa1, "và tổng giá trị là: "+(giaTriHoaDon1+tienBoa1));
console.log("Hóa đơn là: "+ giaTriHoaDon2, ", tiền boa là: "+tienBoa2, "và tổng giá trị là: "+(giaTriHoaDon2+tienBoa2));
console.log("Hóa đơn là: "+ giaTriHoaDon3, ", tiền boa là: "+tienBoa3, "và tổng giá trị là: "+(giaTriHoaDon3+tienBoa3));