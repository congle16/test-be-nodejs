// Chương trình tìm chuỗi con dài nhất có các kí tự không trùng nhau

const lengthOfLongestSubstring = (str) => {
    if (!str) {
        return 0;
    }
    // vị trí bắt đầu
    let start = 0;
    // vị trí kết thúc 
    let end = 0;
    // biến lưu trữ chuỗi các ký tự không trùng nhau
    const uniqueCharacters = new Set();
    // độ dài lớn nhất của chuỗi con không trùng nhau
    let maxLength = 0;
    // quét từng ký tự trong chuỗi
    while (end < str.length) {
        // kiểm tra space
        if (str[end] !== ' ') {
            // nếu ký tự đang xét không trùng với chuỗi con đã có thì thêm vào chuỗi con
            // cập nhật vị trí kết thúc
            // cập nhật độ dài chuỗi con lớn nhất không trùng nhau
            if (!uniqueCharacters.has(str[end])) {
                uniqueCharacters.add(str[end]);
                end++;
                maxLength = Math.max(maxLength, uniqueCharacters.size);
            } else { 
                // nếu ký tự đang xét trùng với chuỗi con đã có
                // cập nhật vị trí bắt đầu tại vị trí ngay sau ký tự trùng lặp ở chuỗi con
                // xóa chuỗi con đã có
                let arrUnique = Array.from(uniqueCharacters);
                start = arrUnique.indexOf(str[end]) + 1;
                uniqueCharacters.clear();
            }
        } else {
            // nếu ký tự đang xét là khoảng trắng
            // cập nhật vị trí bắt đầu tại vị trí ngay sau ký tự khoảng trắng
            // xóa chuỗi con đã có
            end++;
            start = end;
            uniqueCharacters.clear();
        }
    }
    // Return the maximum length
    return maxLength;
};

var str = 'abcdabcde';
console.log(lengthOfLongestSubstring(str));