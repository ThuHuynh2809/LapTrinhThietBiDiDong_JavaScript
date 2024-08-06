
// Viết hàm 'calcTip' lấy bất kỳ giá trị hóa đơn nào làm đầu vào và trả về tiền boa tương ứng
function calcTip(giaTriHoaDon) {
  if(giaTriHoaDon >= 50 && giaTriHoaDon <= 300){
    return giaTriHoaDon * 0.15;
  }
  else {
    return giaTriHoaDon * 0.2;
  }
}

// tạo một mảng “hóa đơn” chứa dữ liệu thử nghiệm
const giaTriHoaDon = [125, 555, 44];

// Tạo một mảng 'tiền boa' chứa giá trị tiền boa cho mỗi hóa đơn, được tính từ chức năng bạn đã tạo trước đó
const tienBoa = giaTriHoaDon.map(calcTip);

// Tạo một mảng 'total' chứa các giá trị tổng, do đó hóa đơn + tiền boa
const tong = giaTriHoaDon.map((giaTriHoaDon, index) => giaTriHoaDon + tienBoa[index]);

// In kết quả
for (let i = 0; i < giaTriHoaDon.length; i++){
  console.log(`Hóa đơn là: ${giaTriHoaDon[i]}, , tiền boa là: ${tienBoa[i]} và tổng giá trị là: ${tong[i]}`);
}

