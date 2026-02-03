// Câu 1: Constructor function Product 
function Product(id, name, price, quantity, category, isAvailable) {
    this.id = id;
    this.name = name;
    this.price = price;
    this.quantity = quantity;
    this.category = category;
    this.isAvailable = isAvailable;
}

// Câu 2: Mảng products (ít nhất 6 sản phẩm, ít nhất 2 danh mục)
const products = [
    new Product(1, "Laptop Dell XPS", 25000000, 10, "Electronics", true),
    new Product(2, "Tai nghe Sony", 3500000, 25, "Accessories", true),
    new Product(3, "Điện thoại Samsung", 32000000, 0, "Electronics", false),
    new Product(4, "Bàn phím cơ", 1500000, 50, "Accessories", true),
    new Product(5, "Chuột không dây", 500000, 100, "Accessories", true),
    new Product(6, "Màn hình LG", 5500000, 15, "Electronics", true),
];

//  Câu 3: Mảng mới chỉ chứa name, price
const namePriceList = products.map(function (p) {
    return { name: p.name, price: p.price };
});
console.log(" Name & Price:", namePriceList);

//  Câu 4: Lọc sản phẩm còn hàng (quantity > 0)
const inStock = products.filter(function (p) {
    return p.quantity > 0;
});
console.log(" Còn hàng:", inStock);

//  Câu 5: Có ít nhất 1 sản phẩm giá > 30.000.000
const hasExpensive = products.some(function (p) {
    return p.price > 30000000;
});
console.log(" Có sản phẩm > 30tr?", hasExpensive);

//   Câu 6: Tất cả Accessories đang bán (isAvailable = true)
const accessories = products.filter(function (p) {
    return p.category === "Accessories";
});
const allAccessoriesAvailable = accessories.every(function (p) {
    return p.isAvailable === true;
});
console.log("Câu 6 - Tất cả Accessories đang bán?", allAccessoriesAvailable);

// Câu 7: Tổng giá trị kho = price × quantity
const totalInventoryValue = products.reduce(function (sum, p) {
    return sum + p.price * p.quantity;
}, 0);
console.log("Tổng giá trị kho:", totalInventoryValue);

// Câu 8: Duyệt mảng, in: Tên - Danh mục - Trạng thái
console.log(" Danh sách:");
products.forEach(function (p) {
    const status = p.isAvailable ? "Đang bán" : "Ngừng bán";
    console.log(p.name, "-", p.category, "-", status);
});

// Câu 9: In tên thuộc tính và giá trị
console.log(" Thuộc tính từng sản phẩm:");
products.forEach(function (p, index) {
    console.log("--- Sản phẩm", index + 1, "---");
    Object.keys(p).forEach(function (key) {
        console.log("  ", key, ":", p[key]);
    });
});

// Câu 10: Danh sách tên sản phẩm đang bán và còn hàng
const sellingAndInStockNames = products
    .filter(function (p) {
        return p.isAvailable === true && p.quantity > 0;
    })
    .map(function (p) {
        return p.name;
    });
console.log(" Tên sản phẩm đang bán & còn hàng:", sellingAndInStockNames);
