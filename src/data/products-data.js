const products = [
    {
        'id': '001',
        'name': 'Charging cable',
        'price': '8',
        'description': 'Fast charging data cable, USB type C',
        'image': 'https://ae01.alicdn.com/kf/Sf438b20ec9f4481e84c114410f72d6afn/Cable-de-datos-de-carga-r-pida-usb-tipo-c-para-Samsung-s21-s20-A51-xiaomi.jpg_640x640.jpg',
        'category': 'Telephones'
    },
    {
        'id': '002',
        'name': 'QERE Earphones',
        'price': '109',
        'description': 'Bluetooth 5.3, wireless headphones with HD microphone, HIFI',
        'image': 'https://ae01.alicdn.com/kf/S03909a7e067042cfa0d0781496b043f8h/QERE-auriculares-TWS-E20-con-bluetooth-5-3-cascos-inal-mbricos-con-micr-fono-HD-HIFI.jpg_Q90.jpg_.webp',
        'category': 'Telephones'
    },
    {
        'id': '003',
        'name': 'Ring Holder',
        'price': '4',
        'description': 'Holder Phone Bracket, Stand Socket, Phone Holder',
        'image': 'https://ae01.alicdn.com/kf/Hc8682dcaf0a34f3d91bb24d37fdb0200u/Luxury-Foldable-Phone-Finger-Ring-Holder-Phone-Bracket-Stand-Socket-Phone-Holder-For-iPhone-Samsung-Xiaomi.jpg_Q90.jpg_.webp',
        'category': 'Telephones'
    },
    {
        'id': '004',
        'name': 'Lazy Holder',
        'price': '14',
        'description': 'Flexible Arm Clip, Desktop Cell Phone Bracket, Desk Phone Clip Holder',
        'image': 'https://ae01.alicdn.com/kf/H2d5dcc6dc8c14ddb915862cba1f040a5H/Universal-Lazy-Mobile-Phone-Holder-Flexible-Arm-Clip-Desktop-Cell-Phone-Bracket-Desk-Phone-Clip-Holder.jpg_Q90.jpg_.webp',
        'category': 'Telephones'
    },
    {
        'id': '005',
        'name': 'HP Smart Printer',
        'price': '1600',
        'description': 'TJ09A Printer, All-in-One, Wireless 515 Printer',
        'image': 'https://ae01.alicdn.com/kf/S063538e6ef9146ce8c368083eb8b79a0F/HP-impresora-inteligente-TJ09A-dispositivo-todo-en-uno-inal-mbrico-515.jpg_Q90.jpg_.webp',
        'category': 'Office'
    },
    {
        'id': '006',
        'name': 'Receipt Printer',
        'price': '364',
        'description': 'NETUM PDA Printer, Android POS ,Terminal Bluetooth, WiFi 3G NFC Data Collector Portable Barcode Scanner All in One',
        'image': 'https://ae01.alicdn.com/kf/A6b57d25c750a40f49f9fed38c98c5028q/NETUM-impresora-de-recibos-PDA-Terminal-POS-con-Android-Bluetooth-WiFi-3G-NFC-colector-de-datos.jpg_Q90.jpg_.webp',
        'category': 'Office'
    },
    {
        'id': '007',
        'name': 'Mini Camera',
        'price': '170',
        'description': 'A9 Wireless WiFi, Mini Camera, Security Protection, Remote Monitor, Camcorders Video, Surveillance Smart Home',
        'image': 'https://ae01.alicdn.com/kf/Se1ee0c615f684faf8fe8f926f46349cf9/Minic-mara-A9-inal-mbrica-con-WiFi-protecci-n-de-seguridad-Monitor-remoto-videoc-maras-videovigilancia.jpg_Q90.jpg_.webp',
        'category': 'Security'
    },
    {
        'id': '008',
        'name': 'Key Storage',
        'price': '150',
        'description': 'Secret Key Storage, Box Wall Organizer, 4 Digit Combination Password, Security Code, Keyless Safe Home Safe Box',
        'image': 'https://ae01.alicdn.com/kf/S3b4be5232e504c6a86419ac7ccc4fdf70/caja-de-seguridad-Caja-de-almacenamiento-secreta-para-llaves-organizador-de-pared-con-combinaci-n-de.jpg_Q90.jpg_.webp',
        'category': 'Security'
    },
    {
        'id': '009',
        'name': 'Drone HD Dual',
        'price': '595',
        'description': 'Professional Drone with HD Dual Camera, RG101 MAX 8K Brushless Aircraft, Obstacle Avoidance, Altitude Hold Mode, Foldable RC Helicopter Toy, Novelty',
        'image': 'https://ae01.alicdn.com/kf/S9b1232e3640b4edf80aff407c7ca712cP/Dron-Profesional-con-Doble-C-mara-HD-Aparato-RG101-MAX-8K-sin-Escobillas-Evitaci-n-de.jpg_Q90.jpg_.webp',
        'category': 'Cameras'
    },
    {
        'id': '010',
        'name': 'Photo Camera 16',
        'price': '120',
        'description': '2 Inch Screen Million Pixel, Mini Digital Camera For Children, Black Retro Home Camera',
        'image': 'https://ae01.alicdn.com/kf/Ha417504d180a48be96603ad2e49cce30j/C-mara-fotogr-fica-con-pantalla-de-2-pulgadas-minic-mara-Digital-de-16-millones-de.jpg_Q90.jpg_.webp',
        'category': 'Cameras'
    },
    {
        'id': '011',
        'name': 'Fujifilm Instax',
        'price': '350',
        'description': 'Mini 7, New Original, Instant Camera Film Hot Sale',
        'image': 'https://ae01.alicdn.com/kf/Sfbf8f6fb2a97448180fa0fa849906de1a/Fujifilm-Pel-cula-de-c-mara-instant-nea-Instax-Mini7-Original-y-Original-gran-oferta-novedad.jpg_Q90.jpg_.webp',
        'category': 'Cameras'
    },
    {
        'id': '012',
        'name': 'Gaming Laptop',
        'price': '556',
        'description': 'Full HD Netbook, Windows 10, 10.1 Inch N3350, Total Memory 3GB+32GB With Cheap Laptop',
        'image': 'https://ae01.alicdn.com/kf/S9de315d32b7746898399e5c1bc98ceb9G/Netbook-Full-HD-con-Windows-10-Mini-ordenadores-port-tiles-para-juegos-de-10-1-pulgadas.jpg_640x640.jpg',
        'category': 'Computer'
    },
    {
        'id': '013',
        'name': 'PC Computer',
        'price': '670',
        'description': 'TexHoo Mini, Intel Core i7 10750H, Processor Windows 10, Pro 11, Linux System Drive Office NVME',
        'image': 'https://ae01.alicdn.com/kf/Sa173cba347b3489c8649dae64688a7bam/TexHoo-Mini-PC-computadora-Intel-Core-i7-10750H-i5-10500H-N5095-procesador-AMD-ITX-Windows-10.png_.webp',
        'category': 'Computer'
    },
    {
        'id': '014',
        'name': 'Gaming Keyboard',
        'price': '73',
        'description': 'RGB Wired Accessory, Russian Computer Laptop 104 Keys',
        'image': 'https://ae01.alicdn.com/kf/S8b6481c187394c37b9c9ba9b257dbd30M/Kit-de-Teclado-y-Rat-n-para-Videojuegos-Dispositivo-Retroiluminado-USB-RGB-Accesorio-con-Cable-Ruso.jpg_Q90.jpg_.webp',
        'category': 'Computer'
    },
    {
        'id': '015',
        'name': 'Mobile Phone',
        'price': '339',
        'description': 'Gobal note 20 Mobile Phone 2022 Version Face Unlock AI Camera MediaTek Helio P22 Android 8GB/256GB Mobile Phone',
        'image': 'https://ae01.alicdn.com/kf/S0694728c5074452083f4f2b0257422cdB/Gobal-tel-fono-m-vil-inteligente-note-20-versi-n-2022-desbloqueo-facial-c-mara-AI.jpg_Q90.jpg_.webp',
        'category': 'Telephones'
    },
];

export default products;