import inquirer from "inquirer";
let array = [];
let value = true;
while (value) {
    let mobile = await inquirer.prompt([
        {
            name: "phone",
            type: "list",
            message: "select which mobile would like to buy",
            choices: ["Oppo", "Vivo", "Iphone", "Samsung", "Huawei", "Tecno"]
        }, {
            name: "ram",
            type: "list",
            message: "select which ram would like to add in your phone",
            choices: ["2GB", "4GB", "6GB", "8GB", "12GB"]
        }, {
            name: "memory",
            type: "list",
            message: "select which rom would like to add in your phone",
            choices: ["32GB", "64GB", "128GB", "256GB", "512GB"],
        },
        {
            name: "addmore",
            type: "confirm",
            message: "Add in your list",
        },
    ]);
    let pricePhone = 0;
    let priceRam = 0;
    let priceMemory = 0;
    if (mobile.phone === "Oppo" || "Vivo" || "Iphone" || "Samsung" || "Huawei" || "Tecno") {
        pricePhone += 8000;
    }
    if (mobile.ram === "2GB") {
        priceRam += 3000;
    }
    else if (mobile.ram === "4GB") {
        priceRam += 7000;
    }
    else if (mobile.ram === "6GB") {
        priceRam += 15000;
    }
    else if (mobile.ram === "8GB") {
        priceRam += 19000;
    }
    else if (mobile.ram === "12GB") {
        priceRam += 24000;
    }
    if (mobile.memory === "32GB") {
        priceMemory += 6000;
    }
    else if (mobile.memory === "64GB") {
        priceMemory += 10000;
    }
    else if (mobile.memory === "128GB") {
        priceMemory += 13000;
    }
    else if (mobile.memory === "256GB") {
        priceMemory += 18000;
    }
    else if (mobile.memory === "512GB") {
        priceMemory += 30000;
    }
    let total = pricePhone + priceRam + priceMemory;
    array.push(`brand = ${mobile.phone} , RAM = ${mobile.ram}, Memory = ${mobile.memory}, price = ${total}`);
    value = mobile.addmore;
    console.log(array);
}
