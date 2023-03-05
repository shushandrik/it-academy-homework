/*
Домашние электроприборы. Определить иерархию электроприборов. Включить некоторые в розетку. 
Посчитать потребляемую мощность. Провести сортировку приборов в квартире на основе одного из параметров. 
Найти прибор в квартире, соответствующий заданному диапазону параметров.
*/

class ElectricalDevices {
    constructor() {
        this.deviceType = 'deviceType';
        this.manufacturer = 'manufacturer';
        this.power = 'power';
        this.price = 'price';
        this.switchOn = true;       

    }
}

class DevicesBuilder {
    constructor (){
        this.device = new ElectricalDevices()
    }

    addDeviceType(deviceType) {
        this.device.deviceType = deviceType;
        return this;
    }

    addManufacturer(manufacturer) {
        this.device.manufacturer = manufacturer;
        return this;
    }
    addPower(power) {
        this.device.power = power;
        return this;
    }
    addPrice(price) {
        this.device.price = price;
        return this;
    }
    addSwitchOn(switchOn) {
        this.device.switchOn = switchOn;
        return this;
    }
    build () {
        return this.device;
    }
}

let fridge = new DevicesBuilder().addDeviceType('fridge').addManufacturer('Samsung').addPower(500).addPrice(400).addSwitchOn(true).build();

let washingMachine = new DevicesBuilder().addDeviceType('washing machine').addManufacturer('LG').addPower(2500).addPrice(800).addSwitchOn(false).build();

let dishwaher = new DevicesBuilder().addDeviceType('dishwasher').addManufacturer('BOCSH').addPower(2000).addPrice(500).addSwitchOn(true).build();

let oven = new DevicesBuilder().addDeviceType('oven').addManufacturer('BOCSH').addPower(4000).addPrice(700).addSwitchOn(false).build();

let coffeeMachine = new DevicesBuilder().addDeviceType('coffee machine').addManufacturer("Delonghi").addPower(1500).addPrice(650).addSwitchOn(true).build();

let vacuumcleaner = new DevicesBuilder().addDeviceType('robot vacuum cleaner').addManufacturer('Xiaomi').addPower(80).addPrice(250).addSwitchOn(false).build();

let iron = new DevicesBuilder().addDeviceType('iron').addManufacturer('Tefal').addPower(3000).addPrice(100).addSwitchOn(true).build();

let airHumidifier = new DevicesBuilder().addDeviceType('air humidifier').addManufacturer('Ballu').addPower(120).addPrice(50).addSwitchOn(false).build();


let allDevices = [fridge, washingMachine, dishwaher, oven, coffeeMachine, vacuumcleaner, iron, airHumidifier];

//Посчитать потребляемую мощность.
let powerAllDevices = 0
for (let i=0; i < allDevices.length; i++){
    powerAllDevices = powerAllDevices + allDevices[i].power;
}
//console.log (powerAllDevices)

//Провести сортировку приборов в квартире на основе одного из параметров.
allDevices.sort(function(a, b){
    return a.price - b.price;
});
//console.log(allDevices)


//Найти прибор в квартире, соответствующий заданному диапазону параметров. (Мощность до 2000 Вт и стоимость до 400$)
function searchByParameter (allDevices) {
    let suitableDevice = [];
        for (let i=0; i<allDevices.length; i++){
            if (allDevices[i].power <= 2000 && allDevices[i].price <=400){
                suitableDevice.push(allDevices[i]);
            }
        }
        return suitableDevice; 
}
//console.log (searchByParameter(allDevices))
