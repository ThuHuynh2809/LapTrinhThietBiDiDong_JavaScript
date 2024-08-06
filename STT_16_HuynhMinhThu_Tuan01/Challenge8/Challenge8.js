

// Tạo một mảng “hóa đơn” chứa tất cả 10 giá trị hóa đơn thử nghiệm
const giaTriHoaDon = [22, 295, 176, 440, 37, 105, 10, 1100, 86, 52];

// Tạo các mảng trống cho số tiền boa và tổng số 
const tienBoa = [];
const tong = [];


// Sử dụng hàm 'calcTip' để tính tiền boa và tổng giá trị cho mỗi giá trị hóa đơn trong mảng
// Sử dụng hàm 'calcTip' đã viết trước đó
function calcTip(giaTriHoaDon) {
    if(giaTriHoaDon >= 50 && giaTriHoaDon <= 300){
      return giaTriHoaDon * 0.15;
    }
    else {
      return giaTriHoaDon * 0.2;
    }
  }
for (let i = 0; i < giaTriHoaDon.length; i++) {
    const bill = giaTriHoaDon[i];
    const tip = calcTip(bill); 
    tienBoa.push(tip);
    tong.push(bill + tip);
}

// Bước 4: Viết hàm 'calcAverage' để tính trung bình cộng của các giá trị trong mảng
function calcAverage(arr) {
    let total = 0;
    for (let i = 0; i < arr.length; i++) {
        total += arr[i];
    }
    return total / arr.length;
}

// Bước 5: Gọi hàm 'calcAverage' với mảng 'tong' để tính trung bình cộng của tổng giá trị
const averageTotal = calcAverage(tong);

// In kết quả
console.log("Tiền boa cho từng hóa đơn:", tienBoa);
console.log("Tổng giá trị cho từng hóa đơn:", tong);
console.log("Trung bình cộng của tổng giá trị:", averageTotal);
