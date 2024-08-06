
// Dữ liệu thử nghiệm
const data1 = [17, 21, 23];
const data2 = [12, 5, -5, 0, 4];
// Tạo hàm 'printForecast' nhận một mảng 'arr' và ghi lại một
// chuỗi như trên vào bảng điều khiển

function printForecast(arr) {
    let forecastString = "";
    for (let i = 0; i < arr.length; i++) {
      forecastString += `... ${arr[i]}°C in ${i + 1} day`;
    }
    console.log(forecastString);
  }
  
  // Bước 2: Thử nghiệm hàm 'printForecast' với các tập dữ liệu thử nghiệm
  
  console.log("Dữ liệu 1:");
  printForecast(data1);
  
  console.log("Dữ liệu 2:");
  printForecast(data2);
  