
// tạo một đối tượng có các thuộc tính về tên đầy đủ, 
// khối lượng và chiều cao (Mark Miller và John Smith)
const mark = createPerson("Mark Miller", 78, 1.69);
const john = createPerson("John Smith", 92, 1.95);

// Tạo phương pháp 'calcBMI' trên từng đối tượng để tính chỉ số BMI (tương tự
// phương pháp trên cả hai đối tượng). Lưu trữ giá trị BMI vào một thuộc tính và cũng trả về giá trị đó

function createPerson(fullName, weight, height) {
    return {
        fullName: fullName,
        weight: weight,
        height: height,
        calcBMI: function () {
            this.bmi = this.weight / (this.height * this.height);
            return this.bmi;
        }
    };
}

// Tính chỉ số BMI cho cả hai
mark.calcBMI();
john.calcBMI();

// In dữ liệu
if (mark.bmi > john.bmi) {
    console.log(`Chỉ số BMI của ${mark.fullName} (${mark.bmi.toFixed(1)}) cao hơn của ${john.fullName} (${john.bmi.toFixed(1)})`);
} else if (john.bmi > mark.bmi) {
    console.log(`Chỉ số BMI của ${john.fullName} (${john.bmi.toFixed(1)}) cao hơn của ${mark.fullName} (${mark.bmi.toFixed(1)})`);
} else {
    console.log(`Chỉ số BMI của ${mark.fullName} và ${john.fullName} bằng nhau (${mark.bmi.toFixed(1)})`);
}
