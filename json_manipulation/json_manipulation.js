const inventories = require('./inventories');

function findMeetingRoomItems(inventories) {
    let arr = [];
    for (let i = 0; i < inventories.length; i++) {
        const item = inventories[i];
        if (item.placement.name === "Meeting Room") {
            arr.push(item)
        }   
    }
    if (arr.length === 0) {
        return "There is no item"
    }
    return arr
}

function findElectronicDevices(inventories) {
    let arr = [];
    for (let i = 0; i < inventories.length; i++) {
        const item = inventories[i];
        if (item.type === "electronic") {
            arr.push(item)
        }   
    }
    if (arr.length === 0) {
        return "There is no item"
    }
    return arr
}

function findFurnitures(inventories) {
    let arr = [];
    for (let i = 0; i < inventories.length; i++) {
        const item = inventories[i];
        if ((item.type === "furniture") || (item.tags.includes("furniture"))) {
            arr.push(item)
        }   
    }
    if (arr.length === 0) {
        return "There is no item"
    }
    return arr
}

function findBrownColors(inventories) {
    let arr = [];
    for (let i = 0; i < inventories.length; i++) {
        const item = inventories[i];
        if (item.tags.includes("brown")) {
            arr.push(item)
        }   
    }
    if (arr.length === 0) {
        return "There is no item"
    }
    return arr
}

function findByDate(inventories) {
    let arr = [];
    for (let i = 0; i < inventories.length; i++) {
        const item = inventories[i];
        
        const dateData = new Date(item.purchased_at); // Convert ms to Date format
        // Get Date
        const day = dateData.getDate();
        const month = dateData.getMonth();
        const year = dateData.getYear();
        
        if ((day === 16) & (month === 0) & (year === (2020-1900))) {
            arr.push(item)
        }
    }
    if (arr.length === 0) {
        return "There is no item"
    }
    return arr
}

if (require.main === module) {
    console.log('Items in the Meeting Room:');
    console.log(findMeetingRoomItems(inventories));
    console.log('---------------------------\n');

    console.log('Electronic device items:');
    console.log(findElectronicDevices(inventories));
    console.log('---------------------------\n');

    console.log('Furniture items:');
    console.log(findFurnitures(inventories));
    console.log('---------------------------\n');

    console.log('Items were purchased on 16 Januari 2020:');
    console.log(findByDate(inventories));
    console.log('---------------------------\n');

    console.log('Items with brown color:');
    console.log(findBrownColors(inventories));  
}
