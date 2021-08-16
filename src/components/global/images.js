import Ritter7502 from '../../assets/img/technics/Ritter 75-02.jpg'
import EpsonL805 from '../../assets/img/technics/Epson L805.jpg'
import Lenovo32015IAP from '../../assets/img/technics/Lenovo IdeaPad 320-15IAP.jpg'
import bs053ur from '../../assets/img/technics/HP bs053ur.jpg'
import hp1010 from '../../assets/img/technics/HP LJ 1010.jpg'
import samsung740N from '../../assets/img/technics/Samsung SyncMaster 740N.jpg'
import Philips190V3LSB from '../../assets/img/technics/Philips 190V3LSB.jpg'
import ELPDC11 from '../../assets/img/technics/ELPDC11.jpg'
import HPLJ1020 from '../../assets/img/technics/HP LJ 1020.jpg'
import LaserJet6L from '../../assets/img/technics/LaserJet 6L.jpg'
import LJ1018 from '../../assets/img/technics/LJ1018.jpg'
import LBP6020B from '../../assets/img/technics/LBP6020B.jpg'
import IntegralTFTLCD17 from '../../assets/img/technics/Integral TFT LCD 17.jpg'
import LogitechHDC270 from '../../assets/img/technics/LogitechHDC270.jpg'
import LGFlatronE1942CBNA from '../../assets/img/technics/LG Flatron E1942C-BNA.jpg'
import HPScanJeG2710 from '../../assets/img/technics/LG Flatron E1942C-BNA.jpg'
import FlatronL1718S from '../../assets/img/technics/FlatronL1718S.jpg'


const images = {
    "Ritter 75-02": Ritter7502,
    "Epson L805": EpsonL805,
    "Lenovo IdeaPad 320-15IAP": Lenovo32015IAP,
    "HP bs053ur": bs053ur,
    "HP 15-bs053ur": bs053ur,
    "Samsung SyncMaster 740N": samsung740N,
    "Philips 190V3LSB/01": Philips190V3LSB,
    "Epson (ELPDC11)": ELPDC11,
    "HP LJ 1020": HPLJ1020,
    "LaserJet 6L": LaserJet6L,
    "HP LaserJet 1018": LJ1018,
    "Canon LBP6020B": LBP6020B,
    "Canon LBP6030B": LBP6020B,
    "Integral TFT LCD 17": IntegralTFTLCD17,
    "HP LJ 10201": "https://www.nix.ru/images/HP-1020-366242254.jpg?good_id=36624&width=500&height=500&view_id=2254",
    "Fujitsu A512": "https://avatars.mds.yandex.net/get-mpic/199079/img_id4380977909699711347/9hq",
    "HP AIO PC/i3-7100": "https://cf.shopee.co.id/file/4f7c31261e64883c5ff8d9c3a512404b",
    "HP LaserJet 1010": hp1010,
    "Logitech HD C270": LogitechHDC270,
    "HP ScanJet G2710": HPScanJeG2710,
    "Flatron L1718S": FlatronL1718S,
    "LG Flatron E1942C-BNA": LGFlatronE1942CBNA,
    "HP LaserJet P1005": "https://avatars.mds.yandex.net/get-mpic/1767083/img_id1362687115413355682/9hq",
    "HP LaserJet P1005c": "https://avatars.mds.yandex.net/get-mpic/1767083/img_id1362687115413355682/9hq",
    "Kyocera FS-1370DN": "https://kyotrade.ru/image/cache/data/a4printer/fs-1370dn-500x500.jpg",
    "Canon i-sensys MF 443dw": "https://avatars.mds.yandex.net/get-mpic/1581127/img_id2367457120523274624.jpeg/13hq",
    "Canon IR 2206N (A3)": "https://avatars.mds.yandex.net/get-mpic/2016828/img_id3775255633665599408/9hq",
    "Canon MF4730": "https://www.nix.ru/images/Canon-MF4730-1481452254.jpg?good_id=148145&width=500&height=500&view_id=2254",
    "SAMSUNG SCX-4650N": "https://lh3.googleusercontent.com/proxy/96zqPXb11t1EVu8bc1gD3FcaPxN_v0YmgltonNYIbtmdlmu-2UTvi5YBJ8ZXhKYX4IZ9N-L-m_JB6eO9go8qgMIGjr4nmkXf5UrvRsUx0rqi-4elTqorXQ",
    "Sharp AR-5618": "https://www.nairaland.com/attachments/745568_5618_jpg93a3ea34b30c7049f291c056bff53137",
    "Canon MF3010": "https://www.nix.ru/images/Canon-MF3010-1220042254.jpg?good_id=122004&width=500&height=500&view_id=2254",
    "Samsung Xpress М2020": "https://www.nix.ru/images/Samsung-SL-M2020-1913542254.jpg?good_id=191354&width=500&height=500&view_id=2254",
    "Sven SPS-619": "https://static.nix.ru/images/SVEN-SPS-619-1546822254.jpg?good_id=154682&width=500&height=500&view_id=2254",
    "Sven SPS-701": "https://www.sven.fi/upload/iblock_photos/multimedia_2.0/sps-701/020-photo-big.jpg",
    "Sven MS-305": "https://i.unishop.by/models/kompyuternaya_akustika/sven/ms-305-1.webp?1603398196",
    "Sven PS-460": "https://www.nix.ru/images/SVEN-PS-460-3200452246.jpg?good_id=320045&width=500&height=500&view_id=2246",
    "NEC NP-UM351W": "https://avatars.mds.yandex.net/get-mpic/175985/img_id852459807557286482/9hq",
    "NEC NP-UM301XG": "https://vdex.ru/upload/shop_1/3/0/7/item_3071/shop_property_file_3071_144.jpg",
    "Epson EB-W41": "https://sprinks.by/image/cache/data/%D0%B1%D1%80%D0%B5%D0%BD%D0%B4%D1%8B/Proector/w41-500x500.jpg",
    "Optpma X341": "https://5.imimg.com/data5/VE/IB/TR/SELLER-3744037/optoma-x341-projector-500x500.jpg",
    "Optoma W311": "https://officewonderland.com/wp-content/uploads/2020/05/Optoma-W311-Multimedia-WXGA-DLP-Projector-front-view.jpg",
    "Optima X312": "https://avatars.mds.yandex.net/get-mpic/1565610/img_id3961685065053435818/9hq",
    "Optoma Х312": "https://avatars.mds.yandex.net/get-mpic/1565610/img_id3961685065053435818/9hq",
    "VIVITEK D555": "https://avatars.mds.yandex.net/get-mpic/1767083/img_id1493443590802030065/9hq",
    "NEC NP115G": "https://www.nix.ru/images/NEC-NP115G-912532254.jpg?good_id=91253&width=500&height=500&view_id=2254",
    "HAFF Maxima": "https://b1-store.ru/upload/resize_cache/s1/500x500/iblock/c0c/c0cba453e3c3b172ceedfdaecb2f347c.jpg",
    "Samsung R40 (NP-R40XY03)": "https://ru.gecid.com/data/nouts/200709280000-321/img/1.jpg",
    "Компьютер планшетный Lenovo": "https://webir.by/image/cache/catalog/19_09_2019/Planshet_Lenovo_Tab_M10_TB_X605L_3GB_32GB_LTE_ZA490005UA_0-800x800.jpeg",
    "Prestigio маленький": "https://sus.by/image/cache/catalog/katalog_foto/elektroservis/5/959806634-prestigiopmt3317_3g_csn-500x500.jpg",
    "Sony ILCE-5000Y": "https://www.nix.ru/images/Sony-ILCE-5000Y-1926522246.jpg?good_id=192652&width=500&height=500&view_id=2246",
}

export default images


