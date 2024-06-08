const mobilesArray = [
    {
        brand: "iphone",
        model: "iphone7",
        processor: "Snapdragon 8 Gen 2",
        memory: { ram: 12, storage: 512 },
        camera: {
            rear: { main: 200, ultrawide: 12, telephoto: 10, telephotoPeriscope: 10 },
            front: 10,
        },
        battery: 5000,
        operatingSystem: "Android 13",
        specialFeatures: ["S Pen support", "Ultrasonic fingerprint sensor"],
    },
    {
        brand: "iphone",
        model: "iphone8",
        processor: "Snapdragon 12 Gen 5",
        memory: { ram: 8, storage: 256 },
        camera: {
            rear: { main: 180, ultrawide: 15, telephoto: 10, telephotoPeriscope: 20 },
            front: 12,
        },
        battery: 8000,
        operatingSystem: "iphone 8",
        specialFeatures: ["S Pen support", "Ultrasonic fingerprint sensor"],
    },
    {
        brand: "iphone",
        model: "iphone8plus",
        processor: "Snapdragon 5 Gen 6",
        memory: { ram: 8, storage: 128 },
        camera: {
            rear: { main: 160, ultrawide: 18, telephoto: 10, telephotoPeriscope: 8 },
            front: 16,
        },
        battery: 5000,
        operatingSystem: "iphone 8",
        specialFeatures: ["S Pen support", "Ultrasonic fingerprint sensor"],
    },
    {
        brand: "iphone",
        model: "iphoneX",
        processor: "Snapdragon 5 Gen 4",
        memory: { ram: 8, storage: 256 },
        camera: {
            rear: { main: 130, ultrawide: 16, telephoto: 10, telephotoPeriscope: 18 },
            front: 14,
        },
        battery: 6000,
        operatingSystem: "iphone X",
        specialFeatures: ["S Pen support", "Ultrasonic fingerprint sensor"],
    },
    {
        brand: "iphone",
        model: "iphone11",
        processor: "Snapdragon 7 Gen 9",
        memory: { ram: 16, storage: 512 },
        camera: {
            rear: { main: 150, ultrawide: 24, telephoto: 16, telephotoPeriscope: 10 },
            front: 20,
        },
        battery: 10000,
        operatingSystem: "iphone 11",
        specialFeatures: ["S Pen support", "Ultrasonic fingerprint sensor"],
    },
    {
        brand: "xiomi",
        model: "redmiA2",
        modelName: "Mi 12 Pro",
        display: { size: 6.73, resolution: "3200 x 1440", panelType: "AMOLED", refreshRate: 120 },
        processor: "Snapdragon 8 Gen 1",
        memory: { ram: 8, storage: 256 },
        camera: { rear: { main: "50MP", ultrawide: "50MP", telephoto: "48MP" }, front: "32MP" },
        battery: 4600,
        operatingSystem: "Android 12",
        specialFeatures: ["Wireless charging", "In-display fingerprint sensor"],
    },
    {
        brand: "xiomi",
        model: "redmi10",
        modelName: "Mi 8 Pro",
        display: { size: 5.73, resolution: "3000 x 1320", panelType: "AMOLED", refreshRate: 100 },
        processor: "Snapdragon 7 Gen 5",
        memory: { ram: 12, storage: 256 },
        camera: { rear: { main: "50MP", ultrawide: "50MP", telephoto: "48MP" }, front: "32MP" },
        battery: 5000,
        operatingSystem: "Android 11",
        specialFeatures: ["Wireless charging", "In-display fingerprint sensor"],
    },
    {
        brand: "xiomi",
        model: "redmi11",
        modelName: "Mi 14 Pro",
        display: { size: 6.0, resolution: "3000 x 1240", panelType: "AMOLED", refreshRate: 150 },
        processor: "Snapdragon 8 Gen 4",
        memory: { ram: 12, storage: 512 },
        camera: { rear: { main: "50MP", ultrawide: "50MP", telephoto: "48MP" }, front: "32MP" },
        battery: 8000,
        operatingSystem: "Android 12",
        specialFeatures: ["Wireless charging", "In-display fingerprint sensor"],
    },
    // Add remaining xiomi, realme, and samsung models similarly...
];

// Function to get mobiles by brand
function getMobilesByBrand(brandName) {
    return mobilesArray.filter(mobile => mobile.brand.toLowerCase() === brandName.toLowerCase());
}

// Function to render mobiles to the document
function renderMobiles(mobiles) {
    document.write('<h1>Mobiles</h1>');
    mobiles.forEach(mobile => {
        document.write('<h2>' + mobile.model + '</h2>');
        document.write('<p>Processor: ' + mobile.processor + '</p>');
        document.write('<p>RAM: ' + mobile.memory.ram + ' GB</p>'  );
        document.write('<p>Storage: ' + mobile.memory.storage + ' GB</p>');
        document.write('<p>Battery: ' + mobile.battery + ' mAh</p>');
        document.write('<p>Operating System: ' + mobile.operatingSystem + '</p>');
        document.write('<p>Special Features: ' + mobile.specialFeatures.join(', ') + '</p>' +'<hr/>');
    });
}

// Example usage
const brandName = prompt("Enter the brand name:");
const mobilesByBrand = getMobilesByBrand(brandName);
renderMobiles(mobilesByBrand);
