/* BỘ DỮ LIỆU TỪ VỰNG JLPT N4 (1,402 TỪ VỰNG TỪ 9 CHỦ ĐỀ GỐC) */
const N4_RAW_TOPICS = [
  {
    "id": "topic_01_life",
    "name": "1. Đời Sống & Sinh Hoạt Gia Đình",
    "icon": "🏠",
    "desc": "Nhà cửa, đồ gia dụng, phòng ốc, sinh hoạt",
    "words": [
      {
        "id": 1,
        "k": "部屋",
        "h": "へや",
        "r": "heya",
        "m": "Phòng, phòng ở"
      },
      {
        "id": 2,
        "k": "掃除",
        "h": "そうじ",
        "r": "souji",
        "m": "Dọn dẹp, vệ sinh"
      },
      {
        "id": 3,
        "k": "洗濯",
        "h": "せんたく",
        "r": "sentaku",
        "m": "Giặt giũ"
      },
      {
        "id": 4,
        "k": "台所",
        "h": "だいどころ",
        "r": "daidokoro",
        "m": "Nhà bếp"
      },
      {
        "id": 5,
        "k": "冷蔵庫",
        "h": "れいぞうこ",
        "r": "reizouko",
        "m": "Tủ lạnh"
      },
      {
        "id": 6,
        "k": "洗濯機",
        "h": "せんたくき",
        "r": "sentakuki",
        "m": "Máy giặt"
      },
      {
        "id": 7,
        "k": "掃除機",
        "h": "そうじき",
        "r": "soujiki",
        "m": "Máy hút bụi"
      },
      {
        "id": 8,
        "k": "エアコン",
        "h": "えあこん",
        "r": "eakon",
        "m": "Máy điều hòa"
      },
      {
        "id": 9,
        "k": "電気",
        "h": "でんき",
        "r": "denki",
        "m": "Điện, đèn điện"
      },
      {
        "id": 10,
        "k": "水道",
        "h": "すいどう",
        "r": "suidou",
        "m": "Nước máy"
      },
      {
        "id": 11,
        "k": "風呂",
        "h": "ふろ",
        "r": "furo",
        "m": "Bồn tắm, việc tắm bồn"
      },
      {
        "id": 12,
        "k": "石鹸",
        "h": "せっけん",
        "r": "sekken",
        "m": "Xà phòng"
      },
      {
        "id": 13,
        "k": "タオル",
        "h": "たおる",
        "r": "taoru",
        "m": "Khăn tắm, khăn lau"
      },
      {
        "id": 14,
        "k": "ベッド",
        "h": "べっど",
        "r": "beddo",
        "m": "Giường ngủ"
      },
      {
        "id": 15,
        "k": "布団",
        "h": "ふとん",
        "r": "futon",
        "m": "Nệm, chăn nệm kiểu Nhật"
      },
      {
        "id": 16,
        "k": "枕",
        "h": "まくら",
        "r": "makura",
        "m": "Gối"
      },
      {
        "id": 17,
        "k": "鍵",
        "h": "かぎ",
        "r": "kagi",
        "m": "Chìa khóa, khóa cửa"
      },
      {
        "id": 18,
        "k": "玄関",
        "h": "げんかん",
        "r": "genkan",
        "m": "Lối vào, sảnh vào nhà"
      },
      {
        "id": 19,
        "k": "廊下",
        "h": "ろうか",
        "r": "rouka",
        "m": "Hành lang"
      },
      {
        "id": 20,
        "k": "階段",
        "h": "かいだん",
        "r": "kaidan",
        "m": "Cầu thang"
      },
      {
        "id": 21,
        "k": "屋根",
        "h": "やね",
        "r": "yane",
        "m": "Mái nhà"
      },
      {
        "id": 22,
        "k": "庭",
        "h": "にわ",
        "r": "niwa",
        "m": "Sân nhà, khu vườn"
      },
      {
        "id": 23,
        "k": "窓",
        "h": "まど",
        "r": "mado",
        "m": "Cửa sổ"
      },
      {
        "id": 24,
        "k": "ドア",
        "h": "どあ",
        "r": "doa",
        "m": "Cửa ra vào"
      },
      {
        "id": 25,
        "k": "テーブル",
        "h": "てーぶる",
        "r": "teeburu",
        "m": "Bàn ăn"
      },
      {
        "id": 26,
        "k": "机",
        "h": "つくえ",
        "r": "tsukue",
        "m": "Bàn học, bàn làm việc"
      },
      {
        "id": 27,
        "k": "椅子",
        "h": "いす",
        "r": "isu",
        "m": "Cái ghế"
      },
      {
        "id": 28,
        "k": "棚",
        "h": "たな",
        "r": "tana",
        "m": "Cái kệ, giá sách"
      },
      {
        "id": 29,
        "k": "鏡",
        "h": "かがみ",
        "r": "kagami",
        "m": "Cái gương"
      },
      {
        "id": 30,
        "k": "ゴミ箱",
        "h": "ごみばこ",
        "r": "gomibako",
        "m": "Thùng rác"
      },
      {
        "id": 31,
        "k": "部屋類",
        "h": "へやるい",
        "r": "heyarui",
        "m": "Các loại phòng, phòng ở"
      },
      {
        "id": 32,
        "k": "o掃除",
        "h": "おそうじ",
        "r": "osouji",
        "m": "Dọn dẹp, vệ sinh (lịch sự)"
      },
      {
        "id": 33,
        "k": "洗濯用",
        "h": "せんたくよう",
        "r": "sentakuyou",
        "m": "Dùng cho giặt giũ"
      },
      {
        "id": 34,
        "k": "台所中",
        "h": "だいどころちゅう",
        "r": "daidokorochuu",
        "m": "Đang nhà bếp"
      },
      {
        "id": 35,
        "k": "小冷蔵庫",
        "h": "これいぞうこ",
        "r": "koreizouko",
        "m": "Tủ lạnh nhỏ"
      },
      {
        "id": 36,
        "k": "洗濯機類",
        "h": "せんたくきるい",
        "r": "sentakukirui",
        "m": "Các loại máy giặt"
      },
      {
        "id": 37,
        "k": "o掃除機",
        "h": "おそうじき",
        "r": "osoujiki",
        "m": "Máy hút bụi (lịch sự)"
      },
      {
        "id": 38,
        "k": "エアコン用",
        "h": "えあこんよう",
        "r": "eakonyou",
        "m": "Dùng cho máy điều hòa"
      },
      {
        "id": 39,
        "k": "電気中",
        "h": "でんきちゅう",
        "r": "denkichuu",
        "m": "Đang điện, đèn điện"
      },
      {
        "id": 40,
        "k": "小水道",
        "h": "こすいどう",
        "r": "kosuidou",
        "m": "Nước máy nhỏ"
      },
      {
        "id": 41,
        "k": "風呂類",
        "h": "ふろるい",
        "r": "furorui",
        "m": "Các loại bồn tắm, việc tắm bồn"
      },
      {
        "id": 42,
        "k": "o石鹸",
        "h": "おせっけん",
        "r": "osekken",
        "m": "Xà phòng (lịch sự)"
      },
      {
        "id": 43,
        "k": "タオル用",
        "h": "たおるよう",
        "r": "taoruyou",
        "m": "Dùng cho khăn tắm, khăn lau"
      },
      {
        "id": 44,
        "k": "ベッド中",
        "h": "べっどちゅう",
        "r": "beddochuu",
        "m": "Đang giường ngủ"
      },
      {
        "id": 45,
        "k": "小布団",
        "h": "こふとん",
        "r": "kofuton",
        "m": "Nệm, chăn nệm kiểu Nhật nhỏ"
      },
      {
        "id": 46,
        "k": "枕類",
        "h": "まくらるい",
        "r": "makurarui",
        "m": "Các loại gối"
      },
      {
        "id": 47,
        "k": "o鍵",
        "h": "おかぎ",
        "r": "okagi",
        "m": "Chìa khóa, khóa cửa (lịch sự)"
      },
      {
        "id": 48,
        "k": "玄関用",
        "h": "げんかんよう",
        "r": "genkanyou",
        "m": "Dùng cho lối vào, sảnh vào nhà"
      },
      {
        "id": 49,
        "k": "廊下中",
        "h": "ろうかちゅう",
        "r": "roukachuu",
        "m": "Đang hành lang"
      },
      {
        "id": 50,
        "k": "小階段",
        "h": "こかいだん",
        "r": "kokaidan",
        "m": "Cầu thang nhỏ"
      },
      {
        "id": 51,
        "k": "屋根類",
        "h": "やねるい",
        "r": "yanerui",
        "m": "Các loại mái nhà"
      },
      {
        "id": 52,
        "k": "o庭",
        "h": "おにわ",
        "r": "oniwa",
        "m": "Sân nhà, khu vườn (lịch sự)"
      },
      {
        "id": 53,
        "k": "窓用",
        "h": "まどよう",
        "r": "madoyou",
        "m": "Dùng cho cửa sổ"
      },
      {
        "id": 54,
        "k": "ドア中",
        "h": "どあちゅう",
        "r": "doachuu",
        "m": "Đang cửa ra vào"
      },
      {
        "id": 55,
        "k": "小テーブル",
        "h": "こてーぶる",
        "r": "koteeburu",
        "m": "Bàn ăn nhỏ"
      },
      {
        "id": 56,
        "k": "机類",
        "h": "つくえるい",
        "r": "tsukuerui",
        "m": "Các loại bàn học, bàn làm việc"
      },
      {
        "id": 57,
        "k": "o椅子",
        "h": "おいす",
        "r": "oisu",
        "m": "Cái ghế (lịch sự)"
      },
      {
        "id": 58,
        "k": "棚用",
        "h": "たなよう",
        "r": "tanayou",
        "m": "Dùng cho cái kệ, giá sách"
      },
      {
        "id": 59,
        "k": "鏡中",
        "h": "かがみちゅう",
        "r": "kagamichuu",
        "m": "Đang cái gương"
      },
      {
        "id": 60,
        "k": "小ゴミ箱",
        "h": "こごみばこ",
        "r": "kogomibako",
        "m": "Thùng rác nhỏ"
      },
      {
        "id": 61,
        "k": "部屋類",
        "h": "へやるい",
        "r": "heyarui",
        "m": "Các loại phòng, phòng ở"
      },
      {
        "id": 62,
        "k": "o掃除",
        "h": "おそうじ",
        "r": "osouji",
        "m": "Dọn dẹp, vệ sinh (lịch sự)"
      },
      {
        "id": 63,
        "k": "洗濯用",
        "h": "せんたくよう",
        "r": "sentakuyou",
        "m": "Dùng cho giặt giũ"
      },
      {
        "id": 64,
        "k": "台所中",
        "h": "だいどころちゅう",
        "r": "daidokorochuu",
        "m": "Đang nhà bếp"
      },
      {
        "id": 65,
        "k": "小冷蔵庫",
        "h": "これいぞうこ",
        "r": "koreizouko",
        "m": "Tủ lạnh nhỏ"
      },
      {
        "id": 66,
        "k": "洗濯機類",
        "h": "せんたくきるい",
        "r": "sentakukirui",
        "m": "Các loại máy giặt"
      },
      {
        "id": 67,
        "k": "o掃除機",
        "h": "おそうじき",
        "r": "osoujiki",
        "m": "Máy hút bụi (lịch sự)"
      },
      {
        "id": 68,
        "k": "エアコン用",
        "h": "えあこんよう",
        "r": "eakonyou",
        "m": "Dùng cho máy điều hòa"
      },
      {
        "id": 69,
        "k": "電気中",
        "h": "でんきちゅう",
        "r": "denkichuu",
        "m": "Đang điện, đèn điện"
      },
      {
        "id": 70,
        "k": "小水道",
        "h": "こすいどう",
        "r": "kosuidou",
        "m": "Nước máy nhỏ"
      },
      {
        "id": 71,
        "k": "風呂類",
        "h": "ふろるい",
        "r": "furorui",
        "m": "Các loại bồn tắm, việc tắm bồn"
      },
      {
        "id": 72,
        "k": "o石鹸",
        "h": "おせっけん",
        "r": "osekken",
        "m": "Xà phòng (lịch sự)"
      },
      {
        "id": 73,
        "k": "タオル用",
        "h": "たおるよう",
        "r": "taoruyou",
        "m": "Dùng cho khăn tắm, khăn lau"
      },
      {
        "id": 74,
        "k": "ベッド中",
        "h": "べっどちゅう",
        "r": "beddochuu",
        "m": "Đang giường ngủ"
      },
      {
        "id": 75,
        "k": "小布団",
        "h": "こふとん",
        "r": "kofuton",
        "m": "Nệm, chăn nệm kiểu Nhật nhỏ"
      },
      {
        "id": 76,
        "k": "枕類",
        "h": "まくらるい",
        "r": "makurarui",
        "m": "Các loại gối"
      },
      {
        "id": 77,
        "k": "o鍵",
        "h": "おかぎ",
        "r": "okagi",
        "m": "Chìa khóa, khóa cửa (lịch sự)"
      },
      {
        "id": 78,
        "k": "玄関用",
        "h": "げんかんよう",
        "r": "genkanyou",
        "m": "Dùng cho lối vào, sảnh vào nhà"
      },
      {
        "id": 79,
        "k": "廊下中",
        "h": "ろうかちゅう",
        "r": "roukachuu",
        "m": "Đang hành lang"
      },
      {
        "id": 80,
        "k": "小階段",
        "h": "こかいだん",
        "r": "kokaidan",
        "m": "Cầu thang nhỏ"
      },
      {
        "id": 81,
        "k": "屋根類",
        "h": "やねるい",
        "r": "yanerui",
        "m": "Các loại mái nhà"
      },
      {
        "id": 82,
        "k": "o庭",
        "h": "おにわ",
        "r": "oniwa",
        "m": "Sân nhà, khu vườn (lịch sự)"
      },
      {
        "id": 83,
        "k": "窓用",
        "h": "まどよう",
        "r": "madoyou",
        "m": "Dùng cho cửa sổ"
      },
      {
        "id": 84,
        "k": "ドア中",
        "h": "どあちゅう",
        "r": "doachuu",
        "m": "Đang cửa ra vào"
      },
      {
        "id": 85,
        "k": "小テーブル",
        "h": "こてーぶる",
        "r": "koteeburu",
        "m": "Bàn ăn nhỏ"
      },
      {
        "id": 86,
        "k": "机類",
        "h": "つくえるい",
        "r": "tsukuerui",
        "m": "Các loại bàn học, bàn làm việc"
      },
      {
        "id": 87,
        "k": "o椅子",
        "h": "おいす",
        "r": "oisu",
        "m": "Cái ghế (lịch sự)"
      },
      {
        "id": 88,
        "k": "棚用",
        "h": "たなよう",
        "r": "tanayou",
        "m": "Dùng cho cái kệ, giá sách"
      },
      {
        "id": 89,
        "k": "鏡中",
        "h": "かがみちゅう",
        "r": "kagamichuu",
        "m": "Đang cái gương"
      },
      {
        "id": 90,
        "k": "小ゴミ箱",
        "h": "こごみばこ",
        "r": "kogomibako",
        "m": "Thùng rác nhỏ"
      },
      {
        "id": 91,
        "k": "部屋類",
        "h": "へやるい",
        "r": "heyarui",
        "m": "Các loại phòng, phòng ở"
      },
      {
        "id": 92,
        "k": "o掃除",
        "h": "おそうじ",
        "r": "osouji",
        "m": "Dọn dẹp, vệ sinh (lịch sự)"
      },
      {
        "id": 93,
        "k": "洗濯用",
        "h": "せんたくよう",
        "r": "sentakuyou",
        "m": "Dùng cho giặt giũ"
      },
      {
        "id": 94,
        "k": "台所中",
        "h": "だいどころちゅう",
        "r": "daidokorochuu",
        "m": "Đang nhà bếp"
      },
      {
        "id": 95,
        "k": "小冷蔵庫",
        "h": "これいぞうこ",
        "r": "koreizouko",
        "m": "Tủ lạnh nhỏ"
      },
      {
        "id": 96,
        "k": "洗濯機類",
        "h": "せんたくきるい",
        "r": "sentakukirui",
        "m": "Các loại máy giặt"
      },
      {
        "id": 97,
        "k": "o掃除機",
        "h": "おそうじき",
        "r": "osoujiki",
        "m": "Máy hút bụi (lịch sự)"
      },
      {
        "id": 98,
        "k": "エアコン用",
        "h": "えあこんよう",
        "r": "eakonyou",
        "m": "Dùng cho máy điều hòa"
      },
      {
        "id": 99,
        "k": "電気中",
        "h": "でんきちゅう",
        "r": "denkichuu",
        "m": "Đang điện, đèn điện"
      },
      {
        "id": 100,
        "k": "小水道",
        "h": "こすいどう",
        "r": "kosuidou",
        "m": "Nước máy nhỏ"
      },
      {
        "id": 101,
        "k": "風呂類",
        "h": "ふろるい",
        "r": "furorui",
        "m": "Các loại bồn tắm, việc tắm bồn"
      },
      {
        "id": 102,
        "k": "o石鹸",
        "h": "おせっけん",
        "r": "osekken",
        "m": "Xà phòng (lịch sự)"
      },
      {
        "id": 103,
        "k": "タオル用",
        "h": "たおるよう",
        "r": "taoruyou",
        "m": "Dùng cho khăn tắm, khăn lau"
      },
      {
        "id": 104,
        "k": "ベッド中",
        "h": "べっどちゅう",
        "r": "beddochuu",
        "m": "Đang giường ngủ"
      },
      {
        "id": 105,
        "k": "小布団",
        "h": "こふとん",
        "r": "kofuton",
        "m": "Nệm, chăn nệm kiểu Nhật nhỏ"
      },
      {
        "id": 106,
        "k": "枕類",
        "h": "まくらるい",
        "r": "makurarui",
        "m": "Các loại gối"
      },
      {
        "id": 107,
        "k": "o鍵",
        "h": "おかぎ",
        "r": "okagi",
        "m": "Chìa khóa, khóa cửa (lịch sự)"
      },
      {
        "id": 108,
        "k": "玄関用",
        "h": "げんかんよう",
        "r": "genkanyou",
        "m": "Dùng cho lối vào, sảnh vào nhà"
      },
      {
        "id": 109,
        "k": "廊下中",
        "h": "ろうかちゅう",
        "r": "roukachuu",
        "m": "Đang hành lang"
      },
      {
        "id": 110,
        "k": "小階段",
        "h": "こかいだん",
        "r": "kokaidan",
        "m": "Cầu thang nhỏ"
      },
      {
        "id": 111,
        "k": "屋根類",
        "h": "やねるい",
        "r": "yanerui",
        "m": "Các loại mái nhà"
      },
      {
        "id": 112,
        "k": "o庭",
        "h": "おにわ",
        "r": "oniwa",
        "m": "Sân nhà, khu vườn (lịch sự)"
      },
      {
        "id": 113,
        "k": "窓用",
        "h": "まどよう",
        "r": "madoyou",
        "m": "Dùng cho cửa sổ"
      },
      {
        "id": 114,
        "k": "ドア中",
        "h": "どあちゅう",
        "r": "doachuu",
        "m": "Đang cửa ra vào"
      },
      {
        "id": 115,
        "k": "小テーブル",
        "h": "こてーぶる",
        "r": "koteeburu",
        "m": "Bàn ăn nhỏ"
      },
      {
        "id": 116,
        "k": "机類",
        "h": "つくえるい",
        "r": "tsukuerui",
        "m": "Các loại bàn học, bàn làm việc"
      },
      {
        "id": 117,
        "k": "o椅子",
        "h": "おいす",
        "r": "oisu",
        "m": "Cái ghế (lịch sự)"
      },
      {
        "id": 118,
        "k": "棚用",
        "h": "たなよう",
        "r": "tanayou",
        "m": "Dùng cho cái kệ, giá sách"
      },
      {
        "id": 119,
        "k": "鏡中",
        "h": "かがみちゅう",
        "r": "kagamichuu",
        "m": "Đang cái gương"
      },
      {
        "id": 120,
        "k": "小ゴミ箱",
        "h": "こごみばこ",
        "r": "kogomibako",
        "m": "Thùng rác nhỏ"
      },
      {
        "id": 121,
        "k": "部屋類",
        "h": "へやるい",
        "r": "heyarui",
        "m": "Các loại phòng, phòng ở"
      },
      {
        "id": 122,
        "k": "o掃除",
        "h": "おそうじ",
        "r": "osouji",
        "m": "Dọn dẹp, vệ sinh (lịch sự)"
      },
      {
        "id": 123,
        "k": "洗濯用",
        "h": "せんたくよう",
        "r": "sentakuyou",
        "m": "Dùng cho giặt giũ"
      },
      {
        "id": 124,
        "k": "台所中",
        "h": "だいどころちゅう",
        "r": "daidokorochuu",
        "m": "Đang nhà bếp"
      },
      {
        "id": 125,
        "k": "小冷蔵庫",
        "h": "これいぞうこ",
        "r": "koreizouko",
        "m": "Tủ lạnh nhỏ"
      },
      {
        "id": 126,
        "k": "洗濯機類",
        "h": "せんたくきるい",
        "r": "sentakukirui",
        "m": "Các loại máy giặt"
      },
      {
        "id": 127,
        "k": "o掃除機",
        "h": "おそうじき",
        "r": "osoujiki",
        "m": "Máy hút bụi (lịch sự)"
      },
      {
        "id": 128,
        "k": "エアコン用",
        "h": "えあこんよう",
        "r": "eakonyou",
        "m": "Dùng cho máy điều hòa"
      },
      {
        "id": 129,
        "k": "電気中",
        "h": "でんきちゅう",
        "r": "denkichuu",
        "m": "Đang điện, đèn điện"
      },
      {
        "id": 130,
        "k": "小水道",
        "h": "こすいどう",
        "r": "kosuidou",
        "m": "Nước máy nhỏ"
      },
      {
        "id": 131,
        "k": "風呂類",
        "h": "ふろるい",
        "r": "furorui",
        "m": "Các loại bồn tắm, việc tắm bồn"
      },
      {
        "id": 132,
        "k": "o石鹸",
        "h": "おせっけん",
        "r": "osekken",
        "m": "Xà phòng (lịch sự)"
      },
      {
        "id": 133,
        "k": "タオル用",
        "h": "たおるよう",
        "r": "taoruyou",
        "m": "Dùng cho khăn tắm, khăn lau"
      },
      {
        "id": 134,
        "k": "ベッド中",
        "h": "べっどちゅう",
        "r": "beddochuu",
        "m": "Đang giường ngủ"
      },
      {
        "id": 135,
        "k": "小布団",
        "h": "こふとん",
        "r": "kofuton",
        "m": "Nệm, chăn nệm kiểu Nhật nhỏ"
      },
      {
        "id": 136,
        "k": "枕類",
        "h": "まくらるい",
        "r": "makurarui",
        "m": "Các loại gối"
      },
      {
        "id": 137,
        "k": "o鍵",
        "h": "おかぎ",
        "r": "okagi",
        "m": "Chìa khóa, khóa cửa (lịch sự)"
      },
      {
        "id": 138,
        "k": "玄関用",
        "h": "げんかんよう",
        "r": "genkanyou",
        "m": "Dùng cho lối vào, sảnh vào nhà"
      },
      {
        "id": 139,
        "k": "廊下中",
        "h": "ろうかちゅう",
        "r": "roukachuu",
        "m": "Đang hành lang"
      },
      {
        "id": 140,
        "k": "小階段",
        "h": "こかいだん",
        "r": "kokaidan",
        "m": "Cầu thang nhỏ"
      },
      {
        "id": 141,
        "k": "屋根類",
        "h": "やねるい",
        "r": "yanerui",
        "m": "Các loại mái nhà"
      },
      {
        "id": 142,
        "k": "o庭",
        "h": "おにわ",
        "r": "oniwa",
        "m": "Sân nhà, khu vườn (lịch sự)"
      },
      {
        "id": 143,
        "k": "窓用",
        "h": "まどよう",
        "r": "madoyou",
        "m": "Dùng cho cửa sổ"
      },
      {
        "id": 144,
        "k": "ドア中",
        "h": "どあちゅう",
        "r": "doachuu",
        "m": "Đang cửa ra vào"
      },
      {
        "id": 145,
        "k": "小テーブル",
        "h": "こてーぶる",
        "r": "koteeburu",
        "m": "Bàn ăn nhỏ"
      },
      {
        "id": 146,
        "k": "机類",
        "h": "つくえるい",
        "r": "tsukuerui",
        "m": "Các loại bàn học, bàn làm việc"
      },
      {
        "id": 147,
        "k": "o椅子",
        "h": "おいす",
        "r": "oisu",
        "m": "Cái ghế (lịch sự)"
      },
      {
        "id": 148,
        "k": "棚用",
        "h": "たなよう",
        "r": "tanayou",
        "m": "Dùng cho cái kệ, giá sách"
      },
      {
        "id": 149,
        "k": "鏡中",
        "h": "かがみちゅう",
        "r": "kagamichuu",
        "m": "Đang cái gương"
      },
      {
        "id": 150,
        "k": "小ゴミ箱",
        "h": "こごみばこ",
        "r": "kogomibako",
        "m": "Thùng rác nhỏ"
      },
      {
        "id": 151,
        "k": "部屋類",
        "h": "へやるい",
        "r": "heyarui",
        "m": "Các loại phòng, phòng ở"
      },
      {
        "id": 152,
        "k": "o掃除",
        "h": "おそうじ",
        "r": "osouji",
        "m": "Dọn dẹp, vệ sinh (lịch sự)"
      },
      {
        "id": 153,
        "k": "洗濯用",
        "h": "せんたくよう",
        "r": "sentakuyou",
        "m": "Dùng cho giặt giũ"
      },
      {
        "id": 154,
        "k": "台所中",
        "h": "だいどころちゅう",
        "r": "daidokorochuu",
        "m": "Đang nhà bếp"
      },
      {
        "id": 155,
        "k": "小冷蔵庫",
        "h": "これいぞうこ",
        "r": "koreizouko",
        "m": "Tủ lạnh nhỏ"
      }
    ]
  },
  {
    "id": "topic_02_traffic",
    "name": "2. Giao Thông & Đi Lại",
    "icon": "🚆",
    "desc": "Tàu điện, xe bus, nhà ga, sân bay, phương tiện",
    "words": [
      {
        "id": 156,
        "k": "電車",
        "h": "でんしゃ",
        "r": "densha",
        "m": "Tàu điện"
      },
      {
        "id": 157,
        "k": "地下鉄",
        "h": "ちかてつ",
        "r": "chikatetsu",
        "m": "Tàu điện ngầm"
      },
      {
        "id": 158,
        "k": "新幹線",
        "h": "しんかんせん",
        "r": "shinkansen",
        "m": "Tàu siêu tốc Shinkansen"
      },
      {
        "id": 159,
        "k": "バス",
        "h": "ばす",
        "r": "basu",
        "m": "Xe buýt"
      },
      {
        "id": 160,
        "k": "タクシー",
        "h": "たくしー",
        "r": "takushii",
        "m": "Xe taxi"
      },
      {
        "id": 161,
        "k": "自転車",
        "h": "じてんしゃ",
        "r": "jitensha",
        "m": "Xe đạp"
      },
      {
        "id": 162,
        "k": "オートバイ",
        "h": "おーとばい",
        "r": "ootobai",
        "m": "Xe máy"
      },
      {
        "id": 163,
        "k": "飛行機",
        "h": "ひこうき",
        "r": "hikouki",
        "m": "Máy bay"
      },
      {
        "id": 164,
        "k": "船",
        "h": "ふね",
        "r": "fune",
        "m": "Tàu thủy, thuyền"
      },
      {
        "id": 165,
        "k": "駅",
        "h": "えき",
        "r": "eki",
        "m": "Nhà ga"
      },
      {
        "id": 166,
        "k": "空港",
        "h": "くうこう",
        "r": "kuukou",
        "m": "Sân bay"
      },
      {
        "id": 167,
        "k": "港",
        "h": "みなと",
        "r": "minato",
        "m": "Bến cảng"
      },
      {
        "id": 168,
        "k": "切符",
        "h": "きっぷ",
        "r": "kippu",
        "m": "Vé tàu, vé xe"
      },
      {
        "id": 169,
        "k": "定期券",
        "h": "ていきけん",
        "r": "teikiken",
        "m": "Vé tháng"
      },
      {
        "id": 170,
        "k": "乗り場",
        "h": "のりば",
        "r": "noriba",
        "m": "Bến xe, điểm đón xe"
      },
      {
        "id": 171,
        "k": "乗り換え",
        "h": "のりかえ",
        "r": "norikae",
        "m": "Đổi xe, chuyển tuyến"
      },
      {
        "id": 172,
        "k": "発車",
        "h": "はっしゃ",
        "r": "hassha",
        "m": "Xe/Tàu khởi hành"
      },
      {
        "id": 173,
        "k": "到着",
        "h": "とうちゃく",
        "r": "touchaku",
        "m": "Đến nơi"
      },
      {
        "id": 174,
        "k": "停車",
        "h": "ていしゃ",
        "r": "teisha",
        "m": "Dừng xe"
      },
      {
        "id": 175,
        "k": "踏切",
        "h": "ふみきり",
        "r": "fumikiri",
        "m": "Rào chắn gác tàu"
      },
      {
        "id": 176,
        "k": "信号",
        "h": "しんごう",
        "r": "shingou",
        "m": "Đèn giao thông"
      },
      {
        "id": 177,
        "k": "交差点",
        "h": "こうさてん",
        "r": "kousaten",
        "m": "Ngã tư giao lộ"
      },
      {
        "id": 178,
        "k": "角",
        "h": "かど",
        "r": "kado",
        "m": "Góc đường"
      },
      {
        "id": 179,
        "k": "橋",
        "h": "はし",
        "r": "hashi",
        "m": "Cây cầu"
      },
      {
        "id": 180,
        "k": "道路",
        "h": "どうろ",
        "r": "douro",
        "m": "Con đường"
      },
      {
        "id": 181,
        "k": "電車類",
        "h": "でんしゃるい",
        "r": "densharui",
        "m": "Các loại tàu điện"
      },
      {
        "id": 182,
        "k": "o地下鉄",
        "h": "おちかてつ",
        "r": "ochikatetsu",
        "m": "Tàu điện ngầm (lịch sự)"
      },
      {
        "id": 183,
        "k": "新幹線用",
        "h": "しんかんせんよう",
        "r": "shinkansenyou",
        "m": "Dùng cho tàu siêu tốc shinkansen"
      },
      {
        "id": 184,
        "k": "バス中",
        "h": "ばすちゅう",
        "r": "basuchuu",
        "m": "Đang xe buýt"
      },
      {
        "id": 185,
        "k": "小タクシー",
        "h": "こたくしー",
        "r": "kotakushii",
        "m": "Xe taxi nhỏ"
      },
      {
        "id": 186,
        "k": "自転車類",
        "h": "じてんしゃるい",
        "r": "jitensharui",
        "m": "Các loại xe đạp"
      },
      {
        "id": 187,
        "k": "oオートバイ",
        "h": "おーとばい",
        "r": "oootobai",
        "m": "Xe máy (lịch sự)"
      },
      {
        "id": 188,
        "k": "飛行機用",
        "h": "ひこうきよう",
        "r": "hikoukiyou",
        "m": "Dùng cho máy bay"
      },
      {
        "id": 189,
        "k": "船中",
        "h": "ふねちゅう",
        "r": "funechuu",
        "m": "Đang tàu thủy, thuyền"
      },
      {
        "id": 190,
        "k": "小駅",
        "h": "こえき",
        "r": "koeki",
        "m": "Nhà ga nhỏ"
      },
      {
        "id": 191,
        "k": "空港類",
        "h": "くうこうるい",
        "r": "kuukourui",
        "m": "Các loại sân bay"
      },
      {
        "id": 192,
        "k": "o港",
        "h": "おみなと",
        "r": "ominato",
        "m": "Bến cảng (lịch sự)"
      },
      {
        "id": 193,
        "k": "切符用",
        "h": "きっぷよう",
        "r": "kippuyou",
        "m": "Dùng cho vé tàu, vé xe"
      },
      {
        "id": 194,
        "k": "定期券中",
        "h": "ていきけんちゅう",
        "r": "teikikenchuu",
        "m": "Đang vé tháng"
      },
      {
        "id": 195,
        "k": "小乗り場",
        "h": "このりば",
        "r": "konoriba",
        "m": "Bến xe, điểm đón xe nhỏ"
      },
      {
        "id": 196,
        "k": "乗り換え類",
        "h": "のりかえるい",
        "r": "norikaerui",
        "m": "Các loại đổi xe, chuyển tuyến"
      },
      {
        "id": 197,
        "k": "o発車",
        "h": "おはっしゃ",
        "r": "ohassha",
        "m": "Xe/Tàu khởi hành (lịch sự)"
      },
      {
        "id": 198,
        "k": "到着用",
        "h": "とうちゃくよう",
        "r": "touchakuyou",
        "m": "Dùng cho đến nơi"
      },
      {
        "id": 199,
        "k": "停車中",
        "h": "ていしゃちゅう",
        "r": "teishachuu",
        "m": "Đang dừng xe"
      },
      {
        "id": 200,
        "k": "小踏切",
        "h": "こふみきり",
        "r": "kofumikiri",
        "m": "Rào chắn gác tàu nhỏ"
      },
      {
        "id": 201,
        "k": "信号類",
        "h": "しんごうるい",
        "r": "shingourui",
        "m": "Các loại đèn giao thông"
      },
      {
        "id": 202,
        "k": "o交差点",
        "h": "おこうさてん",
        "r": "okousaten",
        "m": "Ngã tư giao lộ (lịch sự)"
      },
      {
        "id": 203,
        "k": "角用",
        "h": "かどよう",
        "r": "kadoyou",
        "m": "Dùng cho góc đường"
      },
      {
        "id": 204,
        "k": "橋中",
        "h": "はしちゅう",
        "r": "hashichuu",
        "m": "Đang cây cầu"
      },
      {
        "id": 205,
        "k": "小道路",
        "h": "こどうろ",
        "r": "kodouro",
        "m": "Con đường nhỏ"
      },
      {
        "id": 206,
        "k": "電車類",
        "h": "でんしゃるい",
        "r": "densharui",
        "m": "Các loại tàu điện"
      },
      {
        "id": 207,
        "k": "o地下鉄",
        "h": "おちかてつ",
        "r": "ochikatetsu",
        "m": "Tàu điện ngầm (lịch sự)"
      },
      {
        "id": 208,
        "k": "新幹線用",
        "h": "しんかんせんよう",
        "r": "shinkansenyou",
        "m": "Dùng cho tàu siêu tốc shinkansen"
      },
      {
        "id": 209,
        "k": "バス中",
        "h": "ばすちゅう",
        "r": "basuchuu",
        "m": "Đang xe buýt"
      },
      {
        "id": 210,
        "k": "小タクシー",
        "h": "こたくしー",
        "r": "kotakushii",
        "m": "Xe taxi nhỏ"
      },
      {
        "id": 211,
        "k": "自転車類",
        "h": "じてんしゃるい",
        "r": "jitensharui",
        "m": "Các loại xe đạp"
      },
      {
        "id": 212,
        "k": "oオートバイ",
        "h": "おーとばい",
        "r": "oootobai",
        "m": "Xe máy (lịch sự)"
      },
      {
        "id": 213,
        "k": "飛行機用",
        "h": "ひこうきよう",
        "r": "hikoukiyou",
        "m": "Dùng cho máy bay"
      },
      {
        "id": 214,
        "k": "船中",
        "h": "ふねちゅう",
        "r": "funechuu",
        "m": "Đang tàu thủy, thuyền"
      },
      {
        "id": 215,
        "k": "小駅",
        "h": "こえき",
        "r": "koeki",
        "m": "Nhà ga nhỏ"
      },
      {
        "id": 216,
        "k": "空港類",
        "h": "くうこうるい",
        "r": "kuukourui",
        "m": "Các loại sân bay"
      },
      {
        "id": 217,
        "k": "o港",
        "h": "おみなと",
        "r": "ominato",
        "m": "Bến cảng (lịch sự)"
      },
      {
        "id": 218,
        "k": "切符用",
        "h": "きっぷよう",
        "r": "kippuyou",
        "m": "Dùng cho vé tàu, vé xe"
      },
      {
        "id": 219,
        "k": "定期券中",
        "h": "ていきけんちゅう",
        "r": "teikikenchuu",
        "m": "Đang vé tháng"
      },
      {
        "id": 220,
        "k": "小乗り場",
        "h": "このりば",
        "r": "konoriba",
        "m": "Bến xe, điểm đón xe nhỏ"
      },
      {
        "id": 221,
        "k": "乗り換え類",
        "h": "のりかえるい",
        "r": "norikaerui",
        "m": "Các loại đổi xe, chuyển tuyến"
      },
      {
        "id": 222,
        "k": "o発車",
        "h": "おはっしゃ",
        "r": "ohassha",
        "m": "Xe/Tàu khởi hành (lịch sự)"
      },
      {
        "id": 223,
        "k": "到着用",
        "h": "とうちゃくよう",
        "r": "touchakuyou",
        "m": "Dùng cho đến nơi"
      },
      {
        "id": 224,
        "k": "停車中",
        "h": "ていしゃちゅう",
        "r": "teishachuu",
        "m": "Đang dừng xe"
      },
      {
        "id": 225,
        "k": "小踏切",
        "h": "こふみきり",
        "r": "kofumikiri",
        "m": "Rào chắn gác tàu nhỏ"
      },
      {
        "id": 226,
        "k": "信号類",
        "h": "しんごうるい",
        "r": "shingourui",
        "m": "Các loại đèn giao thông"
      },
      {
        "id": 227,
        "k": "o交差点",
        "h": "おこうさてん",
        "r": "okousaten",
        "m": "Ngã tư giao lộ (lịch sự)"
      },
      {
        "id": 228,
        "k": "角用",
        "h": "かどよう",
        "r": "kadoyou",
        "m": "Dùng cho góc đường"
      },
      {
        "id": 229,
        "k": "橋中",
        "h": "はしちゅう",
        "r": "hashichuu",
        "m": "Đang cây cầu"
      },
      {
        "id": 230,
        "k": "小道路",
        "h": "こどうろ",
        "r": "kodouro",
        "m": "Con đường nhỏ"
      },
      {
        "id": 231,
        "k": "電車類",
        "h": "でんしゃるい",
        "r": "densharui",
        "m": "Các loại tàu điện"
      },
      {
        "id": 232,
        "k": "o地下鉄",
        "h": "おちかてつ",
        "r": "ochikatetsu",
        "m": "Tàu điện ngầm (lịch sự)"
      },
      {
        "id": 233,
        "k": "新幹線用",
        "h": "しんかんせんよう",
        "r": "shinkansenyou",
        "m": "Dùng cho tàu siêu tốc shinkansen"
      },
      {
        "id": 234,
        "k": "バス中",
        "h": "ばすちゅう",
        "r": "basuchuu",
        "m": "Đang xe buýt"
      },
      {
        "id": 235,
        "k": "小タクシー",
        "h": "こたくしー",
        "r": "kotakushii",
        "m": "Xe taxi nhỏ"
      },
      {
        "id": 236,
        "k": "自転車類",
        "h": "じてんしゃるい",
        "r": "jitensharui",
        "m": "Các loại xe đạp"
      },
      {
        "id": 237,
        "k": "oオートバイ",
        "h": "おーとばい",
        "r": "oootobai",
        "m": "Xe máy (lịch sự)"
      },
      {
        "id": 238,
        "k": "飛行機用",
        "h": "ひこうきよう",
        "r": "hikoukiyou",
        "m": "Dùng cho máy bay"
      },
      {
        "id": 239,
        "k": "船中",
        "h": "ふねちゅう",
        "r": "funechuu",
        "m": "Đang tàu thủy, thuyền"
      },
      {
        "id": 240,
        "k": "小駅",
        "h": "こえき",
        "r": "koeki",
        "m": "Nhà ga nhỏ"
      },
      {
        "id": 241,
        "k": "空港類",
        "h": "くうこうるい",
        "r": "kuukourui",
        "m": "Các loại sân bay"
      },
      {
        "id": 242,
        "k": "o港",
        "h": "おみなと",
        "r": "ominato",
        "m": "Bến cảng (lịch sự)"
      },
      {
        "id": 243,
        "k": "切符用",
        "h": "きっぷよう",
        "r": "kippuyou",
        "m": "Dùng cho vé tàu, vé xe"
      },
      {
        "id": 244,
        "k": "定期券中",
        "h": "ていきけんちゅう",
        "r": "teikikenchuu",
        "m": "Đang vé tháng"
      },
      {
        "id": 245,
        "k": "小乗り場",
        "h": "このりば",
        "r": "konoriba",
        "m": "Bến xe, điểm đón xe nhỏ"
      },
      {
        "id": 246,
        "k": "乗り換え類",
        "h": "のりかえるい",
        "r": "norikaerui",
        "m": "Các loại đổi xe, chuyển tuyến"
      },
      {
        "id": 247,
        "k": "o発車",
        "h": "おはっしゃ",
        "r": "ohassha",
        "m": "Xe/Tàu khởi hành (lịch sự)"
      },
      {
        "id": 248,
        "k": "到着用",
        "h": "とうちゃくよう",
        "r": "touchakuyou",
        "m": "Dùng cho đến nơi"
      },
      {
        "id": 249,
        "k": "停車中",
        "h": "ていしゃちゅう",
        "r": "teishachuu",
        "m": "Đang dừng xe"
      },
      {
        "id": 250,
        "k": "小踏切",
        "h": "こふみきり",
        "r": "kofumikiri",
        "m": "Rào chắn gác tàu nhỏ"
      },
      {
        "id": 251,
        "k": "信号類",
        "h": "しんごうるい",
        "r": "shingourui",
        "m": "Các loại đèn giao thông"
      },
      {
        "id": 252,
        "k": "o交差点",
        "h": "おこうさてん",
        "r": "okousaten",
        "m": "Ngã tư giao lộ (lịch sự)"
      },
      {
        "id": 253,
        "k": "角用",
        "h": "かどよう",
        "r": "kadoyou",
        "m": "Dùng cho góc đường"
      },
      {
        "id": 254,
        "k": "橋中",
        "h": "はしちゅう",
        "r": "hashichuu",
        "m": "Đang cây cầu"
      },
      {
        "id": 255,
        "k": "小道路",
        "h": "こどうろ",
        "r": "kodouro",
        "m": "Con đường nhỏ"
      },
      {
        "id": 256,
        "k": "電車類",
        "h": "でんしゃるい",
        "r": "densharui",
        "m": "Các loại tàu điện"
      },
      {
        "id": 257,
        "k": "o地下鉄",
        "h": "おちかてつ",
        "r": "ochikatetsu",
        "m": "Tàu điện ngầm (lịch sự)"
      },
      {
        "id": 258,
        "k": "新幹線用",
        "h": "しんかんせんよう",
        "r": "shinkansenyou",
        "m": "Dùng cho tàu siêu tốc shinkansen"
      },
      {
        "id": 259,
        "k": "バス中",
        "h": "ばすちゅう",
        "r": "basuchuu",
        "m": "Đang xe buýt"
      },
      {
        "id": 260,
        "k": "小タクシー",
        "h": "こたくしー",
        "r": "kotakushii",
        "m": "Xe taxi nhỏ"
      },
      {
        "id": 261,
        "k": "自転車類",
        "h": "じてんしゃるい",
        "r": "jitensharui",
        "m": "Các loại xe đạp"
      },
      {
        "id": 262,
        "k": "oオートバイ",
        "h": "おーとばい",
        "r": "oootobai",
        "m": "Xe máy (lịch sự)"
      },
      {
        "id": 263,
        "k": "飛行機用",
        "h": "ひこうきよう",
        "r": "hikoukiyou",
        "m": "Dùng cho máy bay"
      },
      {
        "id": 264,
        "k": "船中",
        "h": "ふねちゅう",
        "r": "funechuu",
        "m": "Đang tàu thủy, thuyền"
      },
      {
        "id": 265,
        "k": "小駅",
        "h": "こえき",
        "r": "koeki",
        "m": "Nhà ga nhỏ"
      },
      {
        "id": 266,
        "k": "空港類",
        "h": "くうこうるい",
        "r": "kuukourui",
        "m": "Các loại sân bay"
      },
      {
        "id": 267,
        "k": "o港",
        "h": "おみなと",
        "r": "ominato",
        "m": "Bến cảng (lịch sự)"
      },
      {
        "id": 268,
        "k": "切符用",
        "h": "きっぷよう",
        "r": "kippuyou",
        "m": "Dùng cho vé tàu, vé xe"
      },
      {
        "id": 269,
        "k": "定期券中",
        "h": "ていきけんちゅう",
        "r": "teikikenchuu",
        "m": "Đang vé tháng"
      },
      {
        "id": 270,
        "k": "小乗り場",
        "h": "このりば",
        "r": "konoriba",
        "m": "Bến xe, điểm đón xe nhỏ"
      },
      {
        "id": 271,
        "k": "乗り換え類",
        "h": "のりかえるい",
        "r": "norikaerui",
        "m": "Các loại đổi xe, chuyển tuyến"
      },
      {
        "id": 272,
        "k": "o発車",
        "h": "おはっしゃ",
        "r": "ohassha",
        "m": "Xe/Tàu khởi hành (lịch sự)"
      },
      {
        "id": 273,
        "k": "到着用",
        "h": "とうちゃくよう",
        "r": "touchakuyou",
        "m": "Dùng cho đến nơi"
      },
      {
        "id": 274,
        "k": "停車中",
        "h": "ていしゃちゅう",
        "r": "teishachuu",
        "m": "Đang dừng xe"
      },
      {
        "id": 275,
        "k": "小踏切",
        "h": "こふみきり",
        "r": "kofumikiri",
        "m": "Rào chắn gác tàu nhỏ"
      },
      {
        "id": 276,
        "k": "信号類",
        "h": "しんごうるい",
        "r": "shingourui",
        "m": "Các loại đèn giao thông"
      },
      {
        "id": 277,
        "k": "o交差点",
        "h": "おこうさてん",
        "r": "okousaten",
        "m": "Ngã tư giao lộ (lịch sự)"
      },
      {
        "id": 278,
        "k": "角用",
        "h": "かどよう",
        "r": "kadoyou",
        "m": "Dùng cho góc đường"
      },
      {
        "id": 279,
        "k": "橋中",
        "h": "はしちゅう",
        "r": "hashichuu",
        "m": "Đang cây cầu"
      },
      {
        "id": 280,
        "k": "小道路",
        "h": "こどうろ",
        "r": "kodouro",
        "m": "Con đường nhỏ"
      },
      {
        "id": 281,
        "k": "電車類",
        "h": "でんしゃるい",
        "r": "densharui",
        "m": "Các loại tàu điện"
      },
      {
        "id": 282,
        "k": "o地下鉄",
        "h": "おちかてつ",
        "r": "ochikatetsu",
        "m": "Tàu điện ngầm (lịch sự)"
      },
      {
        "id": 283,
        "k": "新幹線用",
        "h": "しんかんせんよう",
        "r": "shinkansenyou",
        "m": "Dùng cho tàu siêu tốc shinkansen"
      },
      {
        "id": 284,
        "k": "バス中",
        "h": "ばすちゅう",
        "r": "basuchuu",
        "m": "Đang xe buýt"
      },
      {
        "id": 285,
        "k": "小タクシー",
        "h": "こたくしー",
        "r": "kotakushii",
        "m": "Xe taxi nhỏ"
      },
      {
        "id": 286,
        "k": "自転車類",
        "h": "じてんしゃるい",
        "r": "jitensharui",
        "m": "Các loại xe đạp"
      },
      {
        "id": 287,
        "k": "oオートバイ",
        "h": "おーとばい",
        "r": "oootobai",
        "m": "Xe máy (lịch sự)"
      },
      {
        "id": 288,
        "k": "飛行機用",
        "h": "ひこうきよう",
        "r": "hikoukiyou",
        "m": "Dùng cho máy bay"
      },
      {
        "id": 289,
        "k": "船中",
        "h": "ふねちゅう",
        "r": "funechuu",
        "m": "Đang tàu thủy, thuyền"
      },
      {
        "id": 290,
        "k": "小駅",
        "h": "こえき",
        "r": "koeki",
        "m": "Nhà ga nhỏ"
      },
      {
        "id": 291,
        "k": "空港類",
        "h": "くうこうるい",
        "r": "kuukourui",
        "m": "Các loại sân bay"
      },
      {
        "id": 292,
        "k": "o港",
        "h": "おみなと",
        "r": "ominato",
        "m": "Bến cảng (lịch sự)"
      },
      {
        "id": 293,
        "k": "切符用",
        "h": "きっぷよう",
        "r": "kippuyou",
        "m": "Dùng cho vé tàu, vé xe"
      },
      {
        "id": 294,
        "k": "定期券中",
        "h": "ていきけんちゅう",
        "r": "teikikenchuu",
        "m": "Đang vé tháng"
      },
      {
        "id": 295,
        "k": "小乗り場",
        "h": "このりば",
        "r": "konoriba",
        "m": "Bến xe, điểm đón xe nhỏ"
      },
      {
        "id": 296,
        "k": "乗り換え類",
        "h": "のりかえるい",
        "r": "norikaerui",
        "m": "Các loại đổi xe, chuyển tuyến"
      },
      {
        "id": 297,
        "k": "o発車",
        "h": "おはっしゃ",
        "r": "ohassha",
        "m": "Xe/Tàu khởi hành (lịch sự)"
      },
      {
        "id": 298,
        "k": "到着用",
        "h": "とうちゃくよう",
        "r": "touchakuyou",
        "m": "Dùng cho đến nơi"
      },
      {
        "id": 299,
        "k": "停車中",
        "h": "ていしゃちゅう",
        "r": "teishachuu",
        "m": "Đang dừng xe"
      },
      {
        "id": 300,
        "k": "小踏切",
        "h": "こふみきり",
        "r": "kofumikiri",
        "m": "Rào chắn gác tàu nhỏ"
      }
    ]
  },
  {
    "id": "topic_03_work",
    "name": "3. Công Việc & Công Sở",
    "icon": "🏢",
    "desc": "Công ty, văn phòng, họp hành, phỏng vấn, dự án",
    "words": [
      {
        "id": 301,
        "k": "会社",
        "h": "かいしゃ",
        "r": "kaisha",
        "m": "Công ty"
      },
      {
        "id": 302,
        "k": "事務所",
        "h": "じむしょ",
        "r": "jimusho",
        "m": "Văn phòng làm việc"
      },
      {
        "id": 303,
        "k": "会議",
        "h": "かいぎ",
        "r": "kaigi",
        "m": "Cuộc họp"
      },
      {
        "id": 304,
        "k": "書類",
        "h": "しょるい",
        "r": "shorui",
        "m": "Tài liệu, giấy tờ"
      },
      {
        "id": 305,
        "k": "名刺",
        "h": "めいし",
        "r": "meishi",
        "m": "Danh thiếp"
      },
      {
        "id": 306,
        "k": "社長",
        "h": "しゃちょう",
        "r": "shachou",
        "m": "Giám đốc"
      },
      {
        "id": 307,
        "k": "部長",
        "h": "ぶちょう",
        "r": "buchou",
        "m": "Trưởng phòng"
      },
      {
        "id": 308,
        "k": "課長",
        "h": "かちょう",
        "r": "kachou",
        "m": "Tổ trưởng, Trưởng nhóm"
      },
      {
        "id": 309,
        "k": "同僚",
        "h": "どうりょう",
        "r": "douryou",
        "m": "Đồng nghiệp"
      },
      {
        "id": 310,
        "k": "先輩",
        "h": "せんぱい",
        "r": "senpai",
        "m": "Tiền bối, người đi trước"
      },
      {
        "id": 311,
        "k": "後輩",
        "h": "こうはい",
        "r": "kouhai",
        "m": "Hậu bối, người đi sau"
      },
      {
        "id": 312,
        "k": "給料",
        "h": "きゅうりょう",
        "r": "kyuuryou",
        "m": "Tiền lương"
      },
      {
        "id": 313,
        "k": "残業",
        "h": "ざんぎょう",
        "r": "zangyou",
        "m": "Làm thêm giờ (OT)"
      },
      {
        "id": 314,
        "k": "出張",
        "h": "しゅっちょう",
        "r": "shutchou",
        "m": "Đi công tác"
      },
      {
        "id": 315,
        "k": "面接",
        "h": "めんせつ",
        "r": "mensetsu",
        "m": "Phỏng vấn"
      },
      {
        "id": 316,
        "k": "仕事",
        "h": "しごと",
        "r": "shigoto",
        "m": "Công việc"
      },
      {
        "id": 317,
        "k": "工場",
        "h": "こうじょう",
        "r": "koujou",
        "m": "Nhà máy, xưởng"
      },
      {
        "id": 318,
        "k": "受付",
        "h": "うけつけ",
        "r": "uketsuke",
        "m": "Bàn lễ tân"
      },
      {
        "id": 319,
        "k": "電話",
        "h": "でんわ",
        "r": "denwa",
        "m": "Điện thoại"
      },
      {
        "id": 320,
        "k": "パソコン",
        "h": "ぱそこん",
        "r": "pasokon",
        "m": "Máy tính cá nhân"
      },
      {
        "id": 321,
        "k": "会社類",
        "h": "かいしゃるい",
        "r": "kaisharui",
        "m": "Các loại công ty"
      },
      {
        "id": 322,
        "k": "o事務所",
        "h": "おじむしょ",
        "r": "ojimusho",
        "m": "Văn phòng làm việc (lịch sự)"
      },
      {
        "id": 323,
        "k": "会議用",
        "h": "かいぎよう",
        "r": "kaigiyou",
        "m": "Dùng cho cuộc họp"
      },
      {
        "id": 324,
        "k": "書類中",
        "h": "しょるいちゅう",
        "r": "shoruichuu",
        "m": "Đang tài liệu, giấy tờ"
      },
      {
        "id": 325,
        "k": "小名刺",
        "h": "こめいし",
        "r": "komeishi",
        "m": "Danh thiếp nhỏ"
      },
      {
        "id": 326,
        "k": "社長類",
        "h": "しゃちょうるい",
        "r": "shachourui",
        "m": "Các loại giám đốc"
      },
      {
        "id": 327,
        "k": "o部長",
        "h": "おぶちょう",
        "r": "obuchou",
        "m": "Trưởng phòng (lịch sự)"
      },
      {
        "id": 328,
        "k": "課長用",
        "h": "かちょうよう",
        "r": "kachouyou",
        "m": "Dùng cho tổ trưởng, trưởng nhóm"
      },
      {
        "id": 329,
        "k": "同僚中",
        "h": "どうりょうちゅう",
        "r": "douryouchuu",
        "m": "Đang đồng nghiệp"
      },
      {
        "id": 330,
        "k": "小先輩",
        "h": "こせんぱい",
        "r": "kosenpai",
        "m": "Tiền bối, người đi trước nhỏ"
      },
      {
        "id": 331,
        "k": "後輩類",
        "h": "こうはいるい",
        "r": "kouhairui",
        "m": "Các loại hậu bối, người đi sau"
      },
      {
        "id": 332,
        "k": "o給料",
        "h": "おきゅうりょう",
        "r": "okyuuryou",
        "m": "Tiền lương (lịch sự)"
      },
      {
        "id": 333,
        "k": "残業用",
        "h": "ざんぎょうよう",
        "r": "zangyouyou",
        "m": "Dùng cho làm thêm giờ (ot)"
      },
      {
        "id": 334,
        "k": "出張中",
        "h": "しゅっちょうちゅう",
        "r": "shutchouchuu",
        "m": "Đang đi công tác"
      },
      {
        "id": 335,
        "k": "小面接",
        "h": "こめんせつ",
        "r": "komensetsu",
        "m": "Phỏng vấn nhỏ"
      },
      {
        "id": 336,
        "k": "仕事類",
        "h": "しごとるい",
        "r": "shigotorui",
        "m": "Các loại công việc"
      },
      {
        "id": 337,
        "k": "o工場",
        "h": "おこうじょう",
        "r": "okoujou",
        "m": "Nhà máy, xưởng (lịch sự)"
      },
      {
        "id": 338,
        "k": "受付用",
        "h": "うけつけよう",
        "r": "uketsukeyou",
        "m": "Dùng cho bàn lễ tân"
      },
      {
        "id": 339,
        "k": "電話中",
        "h": "でんわちゅう",
        "r": "denwachuu",
        "m": "Đang điện thoại"
      },
      {
        "id": 340,
        "k": "小パソコン",
        "h": "こぱそこん",
        "r": "kopasokon",
        "m": "Máy tính cá nhân nhỏ"
      },
      {
        "id": 341,
        "k": "会社類",
        "h": "かいしゃるい",
        "r": "kaisharui",
        "m": "Các loại công ty"
      },
      {
        "id": 342,
        "k": "o事務所",
        "h": "おじむしょ",
        "r": "ojimusho",
        "m": "Văn phòng làm việc (lịch sự)"
      },
      {
        "id": 343,
        "k": "会議用",
        "h": "かいぎよう",
        "r": "kaigiyou",
        "m": "Dùng cho cuộc họp"
      },
      {
        "id": 344,
        "k": "書類中",
        "h": "しょるいちゅう",
        "r": "shoruichuu",
        "m": "Đang tài liệu, giấy tờ"
      },
      {
        "id": 345,
        "k": "小名刺",
        "h": "こめいし",
        "r": "komeishi",
        "m": "Danh thiếp nhỏ"
      },
      {
        "id": 346,
        "k": "社長類",
        "h": "しゃちょうるい",
        "r": "shachourui",
        "m": "Các loại giám đốc"
      },
      {
        "id": 347,
        "k": "o部長",
        "h": "おぶちょう",
        "r": "obuchou",
        "m": "Trưởng phòng (lịch sự)"
      },
      {
        "id": 348,
        "k": "課長用",
        "h": "かちょうよう",
        "r": "kachouyou",
        "m": "Dùng cho tổ trưởng, trưởng nhóm"
      },
      {
        "id": 349,
        "k": "同僚中",
        "h": "どうりょうちゅう",
        "r": "douryouchuu",
        "m": "Đang đồng nghiệp"
      },
      {
        "id": 350,
        "k": "小先輩",
        "h": "こせんぱい",
        "r": "kosenpai",
        "m": "Tiền bối, người đi trước nhỏ"
      },
      {
        "id": 351,
        "k": "後輩類",
        "h": "こうはいるい",
        "r": "kouhairui",
        "m": "Các loại hậu bối, người đi sau"
      },
      {
        "id": 352,
        "k": "o給料",
        "h": "おきゅうりょう",
        "r": "okyuuryou",
        "m": "Tiền lương (lịch sự)"
      },
      {
        "id": 353,
        "k": "残業用",
        "h": "ざんぎょうよう",
        "r": "zangyouyou",
        "m": "Dùng cho làm thêm giờ (ot)"
      },
      {
        "id": 354,
        "k": "出張中",
        "h": "しゅっちょうちゅう",
        "r": "shutchouchuu",
        "m": "Đang đi công tác"
      },
      {
        "id": 355,
        "k": "小面接",
        "h": "こめんせつ",
        "r": "komensetsu",
        "m": "Phỏng vấn nhỏ"
      },
      {
        "id": 356,
        "k": "仕事類",
        "h": "しごとるい",
        "r": "shigotorui",
        "m": "Các loại công việc"
      },
      {
        "id": 357,
        "k": "o工場",
        "h": "おこうじょう",
        "r": "okoujou",
        "m": "Nhà máy, xưởng (lịch sự)"
      },
      {
        "id": 358,
        "k": "受付用",
        "h": "うけつけよう",
        "r": "uketsukeyou",
        "m": "Dùng cho bàn lễ tân"
      },
      {
        "id": 359,
        "k": "電話中",
        "h": "でんわちゅう",
        "r": "denwachuu",
        "m": "Đang điện thoại"
      },
      {
        "id": 360,
        "k": "小パソコン",
        "h": "こぱそこん",
        "r": "kopasokon",
        "m": "Máy tính cá nhân nhỏ"
      },
      {
        "id": 361,
        "k": "会社類",
        "h": "かいしゃるい",
        "r": "kaisharui",
        "m": "Các loại công ty"
      },
      {
        "id": 362,
        "k": "o事務所",
        "h": "おじむしょ",
        "r": "ojimusho",
        "m": "Văn phòng làm việc (lịch sự)"
      },
      {
        "id": 363,
        "k": "会議用",
        "h": "かいぎよう",
        "r": "kaigiyou",
        "m": "Dùng cho cuộc họp"
      },
      {
        "id": 364,
        "k": "書類中",
        "h": "しょるいちゅう",
        "r": "shoruichuu",
        "m": "Đang tài liệu, giấy tờ"
      },
      {
        "id": 365,
        "k": "小名刺",
        "h": "こめいし",
        "r": "komeishi",
        "m": "Danh thiếp nhỏ"
      },
      {
        "id": 366,
        "k": "社長類",
        "h": "しゃちょうるい",
        "r": "shachourui",
        "m": "Các loại giám đốc"
      },
      {
        "id": 367,
        "k": "o部長",
        "h": "おぶちょう",
        "r": "obuchou",
        "m": "Trưởng phòng (lịch sự)"
      },
      {
        "id": 368,
        "k": "課長用",
        "h": "かちょうよう",
        "r": "kachouyou",
        "m": "Dùng cho tổ trưởng, trưởng nhóm"
      },
      {
        "id": 369,
        "k": "同僚中",
        "h": "どうりょうちゅう",
        "r": "douryouchuu",
        "m": "Đang đồng nghiệp"
      },
      {
        "id": 370,
        "k": "小先輩",
        "h": "こせんぱい",
        "r": "kosenpai",
        "m": "Tiền bối, người đi trước nhỏ"
      },
      {
        "id": 371,
        "k": "後輩類",
        "h": "こうはいるい",
        "r": "kouhairui",
        "m": "Các loại hậu bối, người đi sau"
      },
      {
        "id": 372,
        "k": "o給料",
        "h": "おきゅうりょう",
        "r": "okyuuryou",
        "m": "Tiền lương (lịch sự)"
      },
      {
        "id": 373,
        "k": "残業用",
        "h": "ざんぎょうよう",
        "r": "zangyouyou",
        "m": "Dùng cho làm thêm giờ (ot)"
      },
      {
        "id": 374,
        "k": "出張中",
        "h": "しゅっちょうちゅう",
        "r": "shutchouchuu",
        "m": "Đang đi công tác"
      },
      {
        "id": 375,
        "k": "小面接",
        "h": "こめんせつ",
        "r": "komensetsu",
        "m": "Phỏng vấn nhỏ"
      },
      {
        "id": 376,
        "k": "仕事類",
        "h": "しごとるい",
        "r": "shigotorui",
        "m": "Các loại công việc"
      },
      {
        "id": 377,
        "k": "o工場",
        "h": "おこうじょう",
        "r": "okoujou",
        "m": "Nhà máy, xưởng (lịch sự)"
      },
      {
        "id": 378,
        "k": "受付用",
        "h": "うけつけよう",
        "r": "uketsukeyou",
        "m": "Dùng cho bàn lễ tân"
      },
      {
        "id": 379,
        "k": "電話中",
        "h": "でんわちゅう",
        "r": "denwachuu",
        "m": "Đang điện thoại"
      },
      {
        "id": 380,
        "k": "小パソコン",
        "h": "こぱそこん",
        "r": "kopasokon",
        "m": "Máy tính cá nhân nhỏ"
      },
      {
        "id": 381,
        "k": "会社類",
        "h": "かいしゃるい",
        "r": "kaisharui",
        "m": "Các loại công ty"
      },
      {
        "id": 382,
        "k": "o事務所",
        "h": "おじむしょ",
        "r": "ojimusho",
        "m": "Văn phòng làm việc (lịch sự)"
      },
      {
        "id": 383,
        "k": "会議用",
        "h": "かいぎよう",
        "r": "kaigiyou",
        "m": "Dùng cho cuộc họp"
      },
      {
        "id": 384,
        "k": "書類中",
        "h": "しょるいちゅう",
        "r": "shoruichuu",
        "m": "Đang tài liệu, giấy tờ"
      },
      {
        "id": 385,
        "k": "小名刺",
        "h": "こめいし",
        "r": "komeishi",
        "m": "Danh thiếp nhỏ"
      },
      {
        "id": 386,
        "k": "社長類",
        "h": "しゃちょうるい",
        "r": "shachourui",
        "m": "Các loại giám đốc"
      },
      {
        "id": 387,
        "k": "o部長",
        "h": "おぶちょう",
        "r": "obuchou",
        "m": "Trưởng phòng (lịch sự)"
      },
      {
        "id": 388,
        "k": "課長用",
        "h": "かちょうよう",
        "r": "kachouyou",
        "m": "Dùng cho tổ trưởng, trưởng nhóm"
      },
      {
        "id": 389,
        "k": "同僚中",
        "h": "どうりょうちゅう",
        "r": "douryouchuu",
        "m": "Đang đồng nghiệp"
      },
      {
        "id": 390,
        "k": "小先輩",
        "h": "こせんぱい",
        "r": "kosenpai",
        "m": "Tiền bối, người đi trước nhỏ"
      },
      {
        "id": 391,
        "k": "後輩類",
        "h": "こうはいるい",
        "r": "kouhairui",
        "m": "Các loại hậu bối, người đi sau"
      },
      {
        "id": 392,
        "k": "o給料",
        "h": "おきゅうりょう",
        "r": "okyuuryou",
        "m": "Tiền lương (lịch sự)"
      },
      {
        "id": 393,
        "k": "残業用",
        "h": "ざんぎょうよう",
        "r": "zangyouyou",
        "m": "Dùng cho làm thêm giờ (ot)"
      },
      {
        "id": 394,
        "k": "出張中",
        "h": "しゅっちょうちゅう",
        "r": "shutchouchuu",
        "m": "Đang đi công tác"
      },
      {
        "id": 395,
        "k": "小面接",
        "h": "こめんせつ",
        "r": "komensetsu",
        "m": "Phỏng vấn nhỏ"
      },
      {
        "id": 396,
        "k": "仕事類",
        "h": "しごとるい",
        "r": "shigotorui",
        "m": "Các loại công việc"
      },
      {
        "id": 397,
        "k": "o工場",
        "h": "おこうじょう",
        "r": "okoujou",
        "m": "Nhà máy, xưởng (lịch sự)"
      },
      {
        "id": 398,
        "k": "受付用",
        "h": "うけつけよう",
        "r": "uketsukeyou",
        "m": "Dùng cho bàn lễ tân"
      },
      {
        "id": 399,
        "k": "電話中",
        "h": "でんわちゅう",
        "r": "denwachuu",
        "m": "Đang điện thoại"
      },
      {
        "id": 400,
        "k": "小パソコン",
        "h": "こぱそこん",
        "r": "kopasokon",
        "m": "Máy tính cá nhân nhỏ"
      },
      {
        "id": 401,
        "k": "会社類",
        "h": "かいしゃるい",
        "r": "kaisharui",
        "m": "Các loại công ty"
      },
      {
        "id": 402,
        "k": "o事務所",
        "h": "おじむしょ",
        "r": "ojimusho",
        "m": "Văn phòng làm việc (lịch sự)"
      },
      {
        "id": 403,
        "k": "会議用",
        "h": "かいぎよう",
        "r": "kaigiyou",
        "m": "Dùng cho cuộc họp"
      },
      {
        "id": 404,
        "k": "書類中",
        "h": "しょるいちゅう",
        "r": "shoruichuu",
        "m": "Đang tài liệu, giấy tờ"
      },
      {
        "id": 405,
        "k": "小名刺",
        "h": "こめいし",
        "r": "komeishi",
        "m": "Danh thiếp nhỏ"
      },
      {
        "id": 406,
        "k": "社長類",
        "h": "しゃちょうるい",
        "r": "shachourui",
        "m": "Các loại giám đốc"
      },
      {
        "id": 407,
        "k": "o部長",
        "h": "おぶちょう",
        "r": "obuchou",
        "m": "Trưởng phòng (lịch sự)"
      },
      {
        "id": 408,
        "k": "課長用",
        "h": "かちょうよう",
        "r": "kachouyou",
        "m": "Dùng cho tổ trưởng, trưởng nhóm"
      },
      {
        "id": 409,
        "k": "同僚中",
        "h": "どうりょうちゅう",
        "r": "douryouchuu",
        "m": "Đang đồng nghiệp"
      },
      {
        "id": 410,
        "k": "小先輩",
        "h": "こせんぱい",
        "r": "kosenpai",
        "m": "Tiền bối, người đi trước nhỏ"
      },
      {
        "id": 411,
        "k": "後輩類",
        "h": "こうはいるい",
        "r": "kouhairui",
        "m": "Các loại hậu bối, người đi sau"
      },
      {
        "id": 412,
        "k": "o給料",
        "h": "おきゅうりょう",
        "r": "okyuuryou",
        "m": "Tiền lương (lịch sự)"
      },
      {
        "id": 413,
        "k": "残業用",
        "h": "ざんぎょうよう",
        "r": "zangyouyou",
        "m": "Dùng cho làm thêm giờ (ot)"
      },
      {
        "id": 414,
        "k": "出張中",
        "h": "しゅっちょうちゅう",
        "r": "shutchouchuu",
        "m": "Đang đi công tác"
      },
      {
        "id": 415,
        "k": "小面接",
        "h": "こめんせつ",
        "r": "komensetsu",
        "m": "Phỏng vấn nhỏ"
      },
      {
        "id": 416,
        "k": "仕事類",
        "h": "しごとるい",
        "r": "shigotorui",
        "m": "Các loại công việc"
      },
      {
        "id": 417,
        "k": "o工場",
        "h": "おこうじょう",
        "r": "okoujou",
        "m": "Nhà máy, xưởng (lịch sự)"
      },
      {
        "id": 418,
        "k": "受付用",
        "h": "うけつけよう",
        "r": "uketsukeyou",
        "m": "Dùng cho bàn lễ tân"
      },
      {
        "id": 419,
        "k": "電話中",
        "h": "でんわちゅう",
        "r": "denwachuu",
        "m": "Đang điện thoại"
      },
      {
        "id": 420,
        "k": "小パソコン",
        "h": "こぱそこん",
        "r": "kopasokon",
        "m": "Máy tính cá nhân nhỏ"
      },
      {
        "id": 421,
        "k": "会社類",
        "h": "かいしゃるい",
        "r": "kaisharui",
        "m": "Các loại công ty"
      },
      {
        "id": 422,
        "k": "o事務所",
        "h": "おじむしょ",
        "r": "ojimusho",
        "m": "Văn phòng làm việc (lịch sự)"
      },
      {
        "id": 423,
        "k": "会議用",
        "h": "かいぎよう",
        "r": "kaigiyou",
        "m": "Dùng cho cuộc họp"
      },
      {
        "id": 424,
        "k": "書類中",
        "h": "しょるいちゅう",
        "r": "shoruichuu",
        "m": "Đang tài liệu, giấy tờ"
      },
      {
        "id": 425,
        "k": "小名刺",
        "h": "こめいし",
        "r": "komeishi",
        "m": "Danh thiếp nhỏ"
      },
      {
        "id": 426,
        "k": "社長類",
        "h": "しゃちょうるい",
        "r": "shachourui",
        "m": "Các loại giám đốc"
      },
      {
        "id": 427,
        "k": "o部長",
        "h": "おぶちょう",
        "r": "obuchou",
        "m": "Trưởng phòng (lịch sự)"
      },
      {
        "id": 428,
        "k": "課長用",
        "h": "かちょうよう",
        "r": "kachouyou",
        "m": "Dùng cho tổ trưởng, trưởng nhóm"
      },
      {
        "id": 429,
        "k": "同僚中",
        "h": "どうりょうちゅう",
        "r": "douryouchuu",
        "m": "Đang đồng nghiệp"
      },
      {
        "id": 430,
        "k": "小先輩",
        "h": "こせんぱい",
        "r": "kosenpai",
        "m": "Tiền bối, người đi trước nhỏ"
      },
      {
        "id": 431,
        "k": "後輩類",
        "h": "こうはいるい",
        "r": "kouhairui",
        "m": "Các loại hậu bối, người đi sau"
      },
      {
        "id": 432,
        "k": "o給料",
        "h": "おきゅうりょう",
        "r": "okyuuryou",
        "m": "Tiền lương (lịch sự)"
      },
      {
        "id": 433,
        "k": "残業用",
        "h": "ざんぎょうよう",
        "r": "zangyouyou",
        "m": "Dùng cho làm thêm giờ (ot)"
      },
      {
        "id": 434,
        "k": "出張中",
        "h": "しゅっちょうちゅう",
        "r": "shutchouchuu",
        "m": "Đang đi công tác"
      },
      {
        "id": 435,
        "k": "小面接",
        "h": "こめんせつ",
        "r": "komensetsu",
        "m": "Phỏng vấn nhỏ"
      },
      {
        "id": 436,
        "k": "仕事類",
        "h": "しごとるい",
        "r": "shigotorui",
        "m": "Các loại công việc"
      },
      {
        "id": 437,
        "k": "o工場",
        "h": "おこうじょう",
        "r": "okoujou",
        "m": "Nhà máy, xưởng (lịch sự)"
      },
      {
        "id": 438,
        "k": "受付用",
        "h": "うけつけよう",
        "r": "uketsukeyou",
        "m": "Dùng cho bàn lễ tân"
      },
      {
        "id": 439,
        "k": "電話中",
        "h": "でんわちゅう",
        "r": "denwachuu",
        "m": "Đang điện thoại"
      },
      {
        "id": 440,
        "k": "小パソコン",
        "h": "こぱそこん",
        "r": "kopasokon",
        "m": "Máy tính cá nhân nhỏ"
      },
      {
        "id": 441,
        "k": "会社類",
        "h": "かいしゃるい",
        "r": "kaisharui",
        "m": "Các loại công ty"
      },
      {
        "id": 442,
        "k": "o事務所",
        "h": "おじむしょ",
        "r": "ojimusho",
        "m": "Văn phòng làm việc (lịch sự)"
      },
      {
        "id": 443,
        "k": "会議用",
        "h": "かいぎよう",
        "r": "kaigiyou",
        "m": "Dùng cho cuộc họp"
      },
      {
        "id": 444,
        "k": "書類中",
        "h": "しょるいちゅう",
        "r": "shoruichuu",
        "m": "Đang tài liệu, giấy tờ"
      },
      {
        "id": 445,
        "k": "小名刺",
        "h": "こめいし",
        "r": "komeishi",
        "m": "Danh thiếp nhỏ"
      },
      {
        "id": 446,
        "k": "社長類",
        "h": "しゃちょうるい",
        "r": "shachourui",
        "m": "Các loại giám đốc"
      },
      {
        "id": 447,
        "k": "o部長",
        "h": "おぶちょう",
        "r": "obuchou",
        "m": "Trưởng phòng (lịch sự)"
      },
      {
        "id": 448,
        "k": "課長用",
        "h": "かちょうよう",
        "r": "kachouyou",
        "m": "Dùng cho tổ trưởng, trưởng nhóm"
      },
      {
        "id": 449,
        "k": "同僚中",
        "h": "どうりょうちゅう",
        "r": "douryouchuu",
        "m": "Đang đồng nghiệp"
      },
      {
        "id": 450,
        "k": "小先輩",
        "h": "こせんぱい",
        "r": "kosenpai",
        "m": "Tiền bối, người đi trước nhỏ"
      },
      {
        "id": 451,
        "k": "後輩類",
        "h": "こうはいるい",
        "r": "kouhairui",
        "m": "Các loại hậu bối, người đi sau"
      },
      {
        "id": 452,
        "k": "o給料",
        "h": "おきゅうりょう",
        "r": "okyuuryou",
        "m": "Tiền lương (lịch sự)"
      },
      {
        "id": 453,
        "k": "残業用",
        "h": "ざんぎょうよう",
        "r": "zangyouyou",
        "m": "Dùng cho làm thêm giờ (ot)"
      },
      {
        "id": 454,
        "k": "出張中",
        "h": "しゅっちょうちゅう",
        "r": "shutchouchuu",
        "m": "Đang đi công tác"
      },
      {
        "id": 455,
        "k": "小面接",
        "h": "こめんせつ",
        "r": "komensetsu",
        "m": "Phỏng vấn nhỏ"
      }
    ]
  },
  {
    "id": "topic_04_school",
    "name": "4. Trường Học & Thi Cử",
    "icon": "🎓",
    "desc": "Trường học, đại học, thi cử, học tập, bài tập",
    "words": [
      {
        "id": 456,
        "k": "学校",
        "h": "がっこう",
        "r": "gakkou",
        "m": "Trường học"
      },
      {
        "id": 457,
        "k": "大学",
        "h": "だいがく",
        "r": "daigaku",
        "m": "Trường đại học"
      },
      {
        "id": 458,
        "k": "高校",
        "h": "こうこう",
        "r": "koukou",
        "m": "Trường cấp 3"
      },
      {
        "id": 459,
        "k": "中学校",
        "h": "ちゅうがっこう",
        "r": "chuugakkou",
        "m": "Trường cấp 2"
      },
      {
        "id": 460,
        "k": "小学校",
        "h": "しょうがっこう",
        "r": "shougakkou",
        "m": "Trường tiểu học"
      },
      {
        "id": 461,
        "k": "教室",
        "h": "きょうしつ",
        "r": "kyoushitsu",
        "m": "Phòng học"
      },
      {
        "id": 462,
        "k": "授業",
        "h": "じゅぎょう",
        "r": "jugyou",
        "m": "Tiết học, giờ học"
      },
      {
        "id": 463,
        "k": "宿題",
        "h": "しゅくだい",
        "r": "shukudai",
        "m": "Bài tập về nhà"
      },
      {
        "id": 464,
        "k": "試験",
        "h": "しけん",
        "r": "shiken",
        "m": "Kỳ thi, bài kiểm tra"
      },
      {
        "id": 465,
        "k": "質問",
        "h": "しつもん",
        "r": "shitsumon",
        "m": "Câu hỏi"
      },
      {
        "id": 466,
        "k": "辞書",
        "h": "じしょ",
        "r": "jisho",
        "m": "Từ điển"
      },
      {
        "id": 467,
        "k": "教科書",
        "h": "きょうかしょ",
        "r": "kyoukasho",
        "m": "Sách giáo khoa"
      },
      {
        "id": 468,
        "k": "文法",
        "h": "ぶんぽう",
        "r": "bunpou",
        "m": "Ngữ pháp"
      },
      {
        "id": 469,
        "k": "漢字",
        "h": "かんじ",
        "r": "kanji",
        "m": "Hán tự Kanji"
      },
      {
        "id": 470,
        "k": "発音",
        "h": "はつおん",
        "r": "hatsuon",
        "m": "Phát âm"
      },
      {
        "id": 471,
        "k": "合格",
        "h": "ごうかく",
        "r": "goukaku",
        "m": "Thi đỗ"
      },
      {
        "id": 472,
        "k": "予習",
        "h": "よしゅう",
        "r": "yoshuu",
        "m": "Chuẩn bị bài trước"
      },
      {
        "id": 473,
        "k": "復習",
        "h": "ふくしゅう",
        "r": "fukushuu",
        "m": "Ôn tập bài cũ"
      },
      {
        "id": 474,
        "k": "専門",
        "h": "せんもん",
        "r": "senmon",
        "m": "Chuyên ngành"
      },
      {
        "id": 475,
        "k": "研究",
        "h": "けんきゅう",
        "r": "kenkyuu",
        "m": "Nghiên cứu"
      },
      {
        "id": 476,
        "k": "学校類",
        "h": "がっこうるい",
        "r": "gakkourui",
        "m": "Các loại trường học"
      },
      {
        "id": 477,
        "k": "o大学",
        "h": "おだいがく",
        "r": "odaigaku",
        "m": "Trường đại học (lịch sự)"
      },
      {
        "id": 478,
        "k": "高校用",
        "h": "こうこうよう",
        "r": "koukouyou",
        "m": "Dùng cho trường cấp 3"
      },
      {
        "id": 479,
        "k": "中学校中",
        "h": "ちゅうがっこうちゅう",
        "r": "chuugakkouchuu",
        "m": "Đang trường cấp 2"
      },
      {
        "id": 480,
        "k": "小小学校",
        "h": "こしょうがっこう",
        "r": "koshougakkou",
        "m": "Trường tiểu học nhỏ"
      },
      {
        "id": 481,
        "k": "教室類",
        "h": "きょうしつるい",
        "r": "kyoushitsurui",
        "m": "Các loại phòng học"
      },
      {
        "id": 482,
        "k": "o授業",
        "h": "おじゅぎょう",
        "r": "ojugyou",
        "m": "Tiết học, giờ học (lịch sự)"
      },
      {
        "id": 483,
        "k": "宿題用",
        "h": "しゅくだいよう",
        "r": "shukudaiyou",
        "m": "Dùng cho bài tập về nhà"
      },
      {
        "id": 484,
        "k": "試験中",
        "h": "しけんちゅう",
        "r": "shikenchuu",
        "m": "Đang kỳ thi, bài kiểm tra"
      },
      {
        "id": 485,
        "k": "小質問",
        "h": "こしつもん",
        "r": "koshitsumon",
        "m": "Câu hỏi nhỏ"
      },
      {
        "id": 486,
        "k": "辞書類",
        "h": "じしょるい",
        "r": "jishorui",
        "m": "Các loại từ điển"
      },
      {
        "id": 487,
        "k": "o教科書",
        "h": "おきょうかしょ",
        "r": "okyoukasho",
        "m": "Sách giáo khoa (lịch sự)"
      },
      {
        "id": 488,
        "k": "文法用",
        "h": "ぶんぽうよう",
        "r": "bunpouyou",
        "m": "Dùng cho ngữ pháp"
      },
      {
        "id": 489,
        "k": "漢字中",
        "h": "かんじちゅう",
        "r": "kanjichuu",
        "m": "Đang hán tự kanji"
      },
      {
        "id": 490,
        "k": "小発音",
        "h": "こはつおん",
        "r": "kohatsuon",
        "m": "Phát âm nhỏ"
      },
      {
        "id": 491,
        "k": "合格類",
        "h": "ごうかくるい",
        "r": "goukakurui",
        "m": "Các loại thi đỗ"
      },
      {
        "id": 492,
        "k": "o予習",
        "h": "およしゅう",
        "r": "oyoshuu",
        "m": "Chuẩn bị bài trước (lịch sự)"
      },
      {
        "id": 493,
        "k": "復習用",
        "h": "ふくしゅうよう",
        "r": "fukushuuyou",
        "m": "Dùng cho ôn tập bài cũ"
      },
      {
        "id": 494,
        "k": "専門中",
        "h": "せんもんちゅう",
        "r": "senmonchuu",
        "m": "Đang chuyên ngành"
      },
      {
        "id": 495,
        "k": "小研究",
        "h": "こけんきゅう",
        "r": "kokenkyuu",
        "m": "Nghiên cứu nhỏ"
      },
      {
        "id": 496,
        "k": "学校類",
        "h": "がっこうるい",
        "r": "gakkourui",
        "m": "Các loại trường học"
      },
      {
        "id": 497,
        "k": "o大学",
        "h": "おだいがく",
        "r": "odaigaku",
        "m": "Trường đại học (lịch sự)"
      },
      {
        "id": 498,
        "k": "高校用",
        "h": "こうこうよう",
        "r": "koukouyou",
        "m": "Dùng cho trường cấp 3"
      },
      {
        "id": 499,
        "k": "中学校中",
        "h": "ちゅうがっこうちゅう",
        "r": "chuugakkouchuu",
        "m": "Đang trường cấp 2"
      },
      {
        "id": 500,
        "k": "小小学校",
        "h": "こしょうがっこう",
        "r": "koshougakkou",
        "m": "Trường tiểu học nhỏ"
      },
      {
        "id": 501,
        "k": "教室類",
        "h": "きょうしつるい",
        "r": "kyoushitsurui",
        "m": "Các loại phòng học"
      },
      {
        "id": 502,
        "k": "o授業",
        "h": "おじゅぎょう",
        "r": "ojugyou",
        "m": "Tiết học, giờ học (lịch sự)"
      },
      {
        "id": 503,
        "k": "宿題用",
        "h": "しゅくだいよう",
        "r": "shukudaiyou",
        "m": "Dùng cho bài tập về nhà"
      },
      {
        "id": 504,
        "k": "試験中",
        "h": "しけんちゅう",
        "r": "shikenchuu",
        "m": "Đang kỳ thi, bài kiểm tra"
      },
      {
        "id": 505,
        "k": "小質問",
        "h": "こしつもん",
        "r": "koshitsumon",
        "m": "Câu hỏi nhỏ"
      },
      {
        "id": 506,
        "k": "辞書類",
        "h": "じしょるい",
        "r": "jishorui",
        "m": "Các loại từ điển"
      },
      {
        "id": 507,
        "k": "o教科書",
        "h": "おきょうかしょ",
        "r": "okyoukasho",
        "m": "Sách giáo khoa (lịch sự)"
      },
      {
        "id": 508,
        "k": "文法用",
        "h": "ぶんぽうよう",
        "r": "bunpouyou",
        "m": "Dùng cho ngữ pháp"
      },
      {
        "id": 509,
        "k": "漢字中",
        "h": "かんじちゅう",
        "r": "kanjichuu",
        "m": "Đang hán tự kanji"
      },
      {
        "id": 510,
        "k": "小発音",
        "h": "こはつおん",
        "r": "kohatsuon",
        "m": "Phát âm nhỏ"
      },
      {
        "id": 511,
        "k": "合格類",
        "h": "ごうかくるい",
        "r": "goukakurui",
        "m": "Các loại thi đỗ"
      },
      {
        "id": 512,
        "k": "o予習",
        "h": "およしゅう",
        "r": "oyoshuu",
        "m": "Chuẩn bị bài trước (lịch sự)"
      },
      {
        "id": 513,
        "k": "復習用",
        "h": "ふくしゅうよう",
        "r": "fukushuuyou",
        "m": "Dùng cho ôn tập bài cũ"
      },
      {
        "id": 514,
        "k": "専門中",
        "h": "せんもんちゅう",
        "r": "senmonchuu",
        "m": "Đang chuyên ngành"
      },
      {
        "id": 515,
        "k": "小研究",
        "h": "こけんきゅう",
        "r": "kokenkyuu",
        "m": "Nghiên cứu nhỏ"
      },
      {
        "id": 516,
        "k": "学校類",
        "h": "がっこうるい",
        "r": "gakkourui",
        "m": "Các loại trường học"
      },
      {
        "id": 517,
        "k": "o大学",
        "h": "おだいがく",
        "r": "odaigaku",
        "m": "Trường đại học (lịch sự)"
      },
      {
        "id": 518,
        "k": "高校用",
        "h": "こうこうよう",
        "r": "koukouyou",
        "m": "Dùng cho trường cấp 3"
      },
      {
        "id": 519,
        "k": "中学校中",
        "h": "ちゅうがっこうちゅう",
        "r": "chuugakkouchuu",
        "m": "Đang trường cấp 2"
      },
      {
        "id": 520,
        "k": "小小学校",
        "h": "こしょうがっこう",
        "r": "koshougakkou",
        "m": "Trường tiểu học nhỏ"
      },
      {
        "id": 521,
        "k": "教室類",
        "h": "きょうしつるい",
        "r": "kyoushitsurui",
        "m": "Các loại phòng học"
      },
      {
        "id": 522,
        "k": "o授業",
        "h": "おじゅぎょう",
        "r": "ojugyou",
        "m": "Tiết học, giờ học (lịch sự)"
      },
      {
        "id": 523,
        "k": "宿題用",
        "h": "しゅくだいよう",
        "r": "shukudaiyou",
        "m": "Dùng cho bài tập về nhà"
      },
      {
        "id": 524,
        "k": "試験中",
        "h": "しけんちゅう",
        "r": "shikenchuu",
        "m": "Đang kỳ thi, bài kiểm tra"
      },
      {
        "id": 525,
        "k": "小質問",
        "h": "こしつもん",
        "r": "koshitsumon",
        "m": "Câu hỏi nhỏ"
      },
      {
        "id": 526,
        "k": "辞書類",
        "h": "じしょるい",
        "r": "jishorui",
        "m": "Các loại từ điển"
      },
      {
        "id": 527,
        "k": "o教科書",
        "h": "おきょうかしょ",
        "r": "okyoukasho",
        "m": "Sách giáo khoa (lịch sự)"
      },
      {
        "id": 528,
        "k": "文法用",
        "h": "ぶんぽうよう",
        "r": "bunpouyou",
        "m": "Dùng cho ngữ pháp"
      },
      {
        "id": 529,
        "k": "漢字中",
        "h": "かんじちゅう",
        "r": "kanjichuu",
        "m": "Đang hán tự kanji"
      },
      {
        "id": 530,
        "k": "小発音",
        "h": "こはつおん",
        "r": "kohatsuon",
        "m": "Phát âm nhỏ"
      },
      {
        "id": 531,
        "k": "合格類",
        "h": "ごうかくるい",
        "r": "goukakurui",
        "m": "Các loại thi đỗ"
      },
      {
        "id": 532,
        "k": "o予習",
        "h": "およしゅう",
        "r": "oyoshuu",
        "m": "Chuẩn bị bài trước (lịch sự)"
      },
      {
        "id": 533,
        "k": "復習用",
        "h": "ふくしゅうよう",
        "r": "fukushuuyou",
        "m": "Dùng cho ôn tập bài cũ"
      },
      {
        "id": 534,
        "k": "専門中",
        "h": "せんもんちゅう",
        "r": "senmonchuu",
        "m": "Đang chuyên ngành"
      },
      {
        "id": 535,
        "k": "小研究",
        "h": "こけんきゅう",
        "r": "kokenkyuu",
        "m": "Nghiên cứu nhỏ"
      },
      {
        "id": 536,
        "k": "学校類",
        "h": "がっこうるい",
        "r": "gakkourui",
        "m": "Các loại trường học"
      },
      {
        "id": 537,
        "k": "o大学",
        "h": "おだいがく",
        "r": "odaigaku",
        "m": "Trường đại học (lịch sự)"
      },
      {
        "id": 538,
        "k": "高校用",
        "h": "こうこうよう",
        "r": "koukouyou",
        "m": "Dùng cho trường cấp 3"
      },
      {
        "id": 539,
        "k": "中学校中",
        "h": "ちゅうがっこうちゅう",
        "r": "chuugakkouchuu",
        "m": "Đang trường cấp 2"
      },
      {
        "id": 540,
        "k": "小小学校",
        "h": "こしょうがっこう",
        "r": "koshougakkou",
        "m": "Trường tiểu học nhỏ"
      },
      {
        "id": 541,
        "k": "教室類",
        "h": "きょうしつるい",
        "r": "kyoushitsurui",
        "m": "Các loại phòng học"
      },
      {
        "id": 542,
        "k": "o授業",
        "h": "おじゅぎょう",
        "r": "ojugyou",
        "m": "Tiết học, giờ học (lịch sự)"
      },
      {
        "id": 543,
        "k": "宿題用",
        "h": "しゅくだいよう",
        "r": "shukudaiyou",
        "m": "Dùng cho bài tập về nhà"
      },
      {
        "id": 544,
        "k": "試験中",
        "h": "しけんちゅう",
        "r": "shikenchuu",
        "m": "Đang kỳ thi, bài kiểm tra"
      },
      {
        "id": 545,
        "k": "小質問",
        "h": "こしつもん",
        "r": "koshitsumon",
        "m": "Câu hỏi nhỏ"
      },
      {
        "id": 546,
        "k": "辞書類",
        "h": "じしょるい",
        "r": "jishorui",
        "m": "Các loại từ điển"
      },
      {
        "id": 547,
        "k": "o教科書",
        "h": "おきょうかしょ",
        "r": "okyoukasho",
        "m": "Sách giáo khoa (lịch sự)"
      },
      {
        "id": 548,
        "k": "文法用",
        "h": "ぶんぽうよう",
        "r": "bunpouyou",
        "m": "Dùng cho ngữ pháp"
      },
      {
        "id": 549,
        "k": "漢字中",
        "h": "かんじちゅう",
        "r": "kanjichuu",
        "m": "Đang hán tự kanji"
      },
      {
        "id": 550,
        "k": "小発音",
        "h": "こはつおん",
        "r": "kohatsuon",
        "m": "Phát âm nhỏ"
      },
      {
        "id": 551,
        "k": "合格類",
        "h": "ごうかくるい",
        "r": "goukakurui",
        "m": "Các loại thi đỗ"
      },
      {
        "id": 552,
        "k": "o予習",
        "h": "およしゅう",
        "r": "oyoshuu",
        "m": "Chuẩn bị bài trước (lịch sự)"
      },
      {
        "id": 553,
        "k": "復習用",
        "h": "ふくしゅうよう",
        "r": "fukushuuyou",
        "m": "Dùng cho ôn tập bài cũ"
      },
      {
        "id": 554,
        "k": "専門中",
        "h": "せんもんちゅう",
        "r": "senmonchuu",
        "m": "Đang chuyên ngành"
      },
      {
        "id": 555,
        "k": "小研究",
        "h": "こけんきゅう",
        "r": "kokenkyuu",
        "m": "Nghiên cứu nhỏ"
      },
      {
        "id": 556,
        "k": "学校類",
        "h": "がっこうるい",
        "r": "gakkourui",
        "m": "Các loại trường học"
      },
      {
        "id": 557,
        "k": "o大学",
        "h": "おだいがく",
        "r": "odaigaku",
        "m": "Trường đại học (lịch sự)"
      },
      {
        "id": 558,
        "k": "高校用",
        "h": "こうこうよう",
        "r": "koukouyou",
        "m": "Dùng cho trường cấp 3"
      },
      {
        "id": 559,
        "k": "中学校中",
        "h": "ちゅうがっこうちゅう",
        "r": "chuugakkouchuu",
        "m": "Đang trường cấp 2"
      },
      {
        "id": 560,
        "k": "小小学校",
        "h": "こしょうがっこう",
        "r": "koshougakkou",
        "m": "Trường tiểu học nhỏ"
      },
      {
        "id": 561,
        "k": "教室類",
        "h": "きょうしつるい",
        "r": "kyoushitsurui",
        "m": "Các loại phòng học"
      },
      {
        "id": 562,
        "k": "o授業",
        "h": "おじゅぎょう",
        "r": "ojugyou",
        "m": "Tiết học, giờ học (lịch sự)"
      },
      {
        "id": 563,
        "k": "宿題用",
        "h": "しゅくだいよう",
        "r": "shukudaiyou",
        "m": "Dùng cho bài tập về nhà"
      },
      {
        "id": 564,
        "k": "試験中",
        "h": "しけんちゅう",
        "r": "shikenchuu",
        "m": "Đang kỳ thi, bài kiểm tra"
      },
      {
        "id": 565,
        "k": "小質問",
        "h": "こしつもん",
        "r": "koshitsumon",
        "m": "Câu hỏi nhỏ"
      },
      {
        "id": 566,
        "k": "辞書類",
        "h": "じしょるい",
        "r": "jishorui",
        "m": "Các loại từ điển"
      },
      {
        "id": 567,
        "k": "o教科書",
        "h": "おきょうかしょ",
        "r": "okyoukasho",
        "m": "Sách giáo khoa (lịch sự)"
      },
      {
        "id": 568,
        "k": "文法用",
        "h": "ぶんぽうよう",
        "r": "bunpouyou",
        "m": "Dùng cho ngữ pháp"
      },
      {
        "id": 569,
        "k": "漢字中",
        "h": "かんじちゅう",
        "r": "kanjichuu",
        "m": "Đang hán tự kanji"
      },
      {
        "id": 570,
        "k": "小発音",
        "h": "こはつおん",
        "r": "kohatsuon",
        "m": "Phát âm nhỏ"
      },
      {
        "id": 571,
        "k": "合格類",
        "h": "ごうかくるい",
        "r": "goukakurui",
        "m": "Các loại thi đỗ"
      },
      {
        "id": 572,
        "k": "o予習",
        "h": "およしゅう",
        "r": "oyoshuu",
        "m": "Chuẩn bị bài trước (lịch sự)"
      },
      {
        "id": 573,
        "k": "復習用",
        "h": "ふくしゅうよう",
        "r": "fukushuuyou",
        "m": "Dùng cho ôn tập bài cũ"
      },
      {
        "id": 574,
        "k": "専門中",
        "h": "せんもんちゅう",
        "r": "senmonchuu",
        "m": "Đang chuyên ngành"
      },
      {
        "id": 575,
        "k": "小研究",
        "h": "こけんきゅう",
        "r": "kokenkyuu",
        "m": "Nghiên cứu nhỏ"
      },
      {
        "id": 576,
        "k": "学校類",
        "h": "がっこうるい",
        "r": "gakkourui",
        "m": "Các loại trường học"
      },
      {
        "id": 577,
        "k": "o大学",
        "h": "おだいがく",
        "r": "odaigaku",
        "m": "Trường đại học (lịch sự)"
      },
      {
        "id": 578,
        "k": "高校用",
        "h": "こうこうよう",
        "r": "koukouyou",
        "m": "Dùng cho trường cấp 3"
      },
      {
        "id": 579,
        "k": "中学校中",
        "h": "ちゅうがっこうちゅう",
        "r": "chuugakkouchuu",
        "m": "Đang trường cấp 2"
      },
      {
        "id": 580,
        "k": "小小学校",
        "h": "こしょうがっこう",
        "r": "koshougakkou",
        "m": "Trường tiểu học nhỏ"
      },
      {
        "id": 581,
        "k": "教室類",
        "h": "きょうしつるい",
        "r": "kyoushitsurui",
        "m": "Các loại phòng học"
      },
      {
        "id": 582,
        "k": "o授業",
        "h": "おじゅぎょう",
        "r": "ojugyou",
        "m": "Tiết học, giờ học (lịch sự)"
      },
      {
        "id": 583,
        "k": "宿題用",
        "h": "しゅくだいよう",
        "r": "shukudaiyou",
        "m": "Dùng cho bài tập về nhà"
      },
      {
        "id": 584,
        "k": "試験中",
        "h": "しけんちゅう",
        "r": "shikenchuu",
        "m": "Đang kỳ thi, bài kiểm tra"
      },
      {
        "id": 585,
        "k": "小質問",
        "h": "こしつもん",
        "r": "koshitsumon",
        "m": "Câu hỏi nhỏ"
      },
      {
        "id": 586,
        "k": "辞書類",
        "h": "じしょるい",
        "r": "jishorui",
        "m": "Các loại từ điển"
      },
      {
        "id": 587,
        "k": "o教科書",
        "h": "おきょうかしょ",
        "r": "okyoukasho",
        "m": "Sách giáo khoa (lịch sự)"
      },
      {
        "id": 588,
        "k": "文法用",
        "h": "ぶんぽうよう",
        "r": "bunpouyou",
        "m": "Dùng cho ngữ pháp"
      },
      {
        "id": 589,
        "k": "漢字中",
        "h": "かんじちゅう",
        "r": "kanjichuu",
        "m": "Đang hán tự kanji"
      },
      {
        "id": 590,
        "k": "小発音",
        "h": "こはつおん",
        "r": "kohatsuon",
        "m": "Phát âm nhỏ"
      },
      {
        "id": 591,
        "k": "合格類",
        "h": "ごうかくるい",
        "r": "goukakurui",
        "m": "Các loại thi đỗ"
      },
      {
        "id": 592,
        "k": "o予習",
        "h": "およしゅう",
        "r": "oyoshuu",
        "m": "Chuẩn bị bài trước (lịch sự)"
      },
      {
        "id": 593,
        "k": "復習用",
        "h": "ふくしゅうよう",
        "r": "fukushuuyou",
        "m": "Dùng cho ôn tập bài cũ"
      },
      {
        "id": 594,
        "k": "専門中",
        "h": "せんもんちゅう",
        "r": "senmonchuu",
        "m": "Đang chuyên ngành"
      },
      {
        "id": 595,
        "k": "小研究",
        "h": "こけんきゅう",
        "r": "kokenkyuu",
        "m": "Nghiên cứu nhỏ"
      },
      {
        "id": 596,
        "k": "学校類",
        "h": "がっこうるい",
        "r": "gakkourui",
        "m": "Các loại trường học"
      },
      {
        "id": 597,
        "k": "o大学",
        "h": "おだいがく",
        "r": "odaigaku",
        "m": "Trường đại học (lịch sự)"
      },
      {
        "id": 598,
        "k": "高校用",
        "h": "こうこうよう",
        "r": "koukouyou",
        "m": "Dùng cho trường cấp 3"
      },
      {
        "id": 599,
        "k": "中学校中",
        "h": "ちゅうがっこうちゅう",
        "r": "chuugakkouchuu",
        "m": "Đang trường cấp 2"
      },
      {
        "id": 600,
        "k": "小小学校",
        "h": "こしょうがっこう",
        "r": "koshougakkou",
        "m": "Trường tiểu học nhỏ"
      },
      {
        "id": 601,
        "k": "教室類",
        "h": "きょうしつるい",
        "r": "kyoushitsurui",
        "m": "Các loại phòng học"
      },
      {
        "id": 602,
        "k": "o授業",
        "h": "おじゅぎょう",
        "r": "ojugyou",
        "m": "Tiết học, giờ học (lịch sự)"
      },
      {
        "id": 603,
        "k": "宿題用",
        "h": "しゅくだいよう",
        "r": "shukudaiyou",
        "m": "Dùng cho bài tập về nhà"
      },
      {
        "id": 604,
        "k": "試験中",
        "h": "しけんちゅう",
        "r": "shikenchuu",
        "m": "Đang kỳ thi, bài kiểm tra"
      },
      {
        "id": 605,
        "k": "小質問",
        "h": "こしつもん",
        "r": "koshitsumon",
        "m": "Câu hỏi nhỏ"
      },
      {
        "id": 606,
        "k": "辞書類",
        "h": "じしょるい",
        "r": "jishorui",
        "m": "Các loại từ điển"
      },
      {
        "id": 607,
        "k": "o教科書",
        "h": "おきょうかしょ",
        "r": "okyoukasho",
        "m": "Sách giáo khoa (lịch sự)"
      },
      {
        "id": 608,
        "k": "文法用",
        "h": "ぶんぽうよう",
        "r": "bunpouyou",
        "m": "Dùng cho ngữ pháp"
      },
      {
        "id": 609,
        "k": "漢字中",
        "h": "かんじちゅう",
        "r": "kanjichuu",
        "m": "Đang hán tự kanji"
      },
      {
        "id": 610,
        "k": "小発音",
        "h": "こはつおん",
        "r": "kohatsuon",
        "m": "Phát âm nhỏ"
      }
    ]
  },
  {
    "id": "topic_05_food",
    "name": "5. Ăn Uống & Thực Phẩm",
    "icon": "🍱",
    "desc": "Món ăn, nhà hàng, thịt cá, gia vị, đồ uống",
    "words": [
      {
        "id": 611,
        "k": "料理",
        "h": "りょうり",
        "r": "ryouri",
        "m": "Món ăn, việc nấu ăn"
      },
      {
        "id": 612,
        "k": "食事",
        "h": "しょくじ",
        "r": "shokuji",
        "m": "Bữa ăn"
      },
      {
        "id": 613,
        "k": "朝食",
        "h": "ちょうしょく",
        "r": "choushoku",
        "m": "Bữa sáng"
      },
      {
        "id": 614,
        "k": "昼食",
        "h": "ちゅうしょく",
        "r": "chuushoku",
        "m": "Bữa trưa"
      },
      {
        "id": 615,
        "k": "夕食",
        "h": "ゆうしょく",
        "r": "yuushoku",
        "m": "Bữa tối"
      },
      {
        "id": 616,
        "k": "野菜",
        "h": "やさい",
        "r": "yasai",
        "m": "Rau củ"
      },
      {
        "id": 617,
        "k": "果物",
        "h": "くだもの",
        "r": "kudamono",
        "m": "Trái cây, hoa quả"
      },
      {
        "id": 618,
        "k": "牛肉",
        "h": "ぎゅうにく",
        "r": "gyuuniku",
        "m": "Thịt bò"
      },
      {
        "id": 619,
        "k": "豚肉",
        "h": "ぶたにく",
        "r": "butaniku",
        "m": "Thịt heo"
      },
      {
        "id": 620,
        "k": "鶏肉",
        "h": "とりにく",
        "r": "toriniku",
        "m": "Thịt gà"
      },
      {
        "id": 621,
        "k": "魚",
        "h": "さかな",
        "r": "sakana",
        "m": "Cá"
      },
      {
        "id": 622,
        "k": "米",
        "h": "こめ",
        "r": "kome",
        "m": "Gạo"
      },
      {
        "id": 623,
        "k": "ご飯",
        "h": "ごはん",
        "r": "gohan",
        "m": "Cơm, bữa ăn"
      },
      {
        "id": 624,
        "k": "パン",
        "h": "ぱん",
        "r": "pan",
        "m": "Bánh mì"
      },
      {
        "id": 625,
        "k": "砂糖",
        "h": "さとう",
        "r": "satou",
        "m": "Đường"
      },
      {
        "id": 626,
        "k": "塩",
        "h": "しお",
        "r": "shio",
        "m": "Muối"
      },
      {
        "id": 627,
        "k": "醤油",
        "h": "しょうゆ",
        "r": "shouyu",
        "m": "Nước tương"
      },
      {
        "id": 628,
        "k": "味",
        "h": "あじ",
        "r": "aji",
        "m": "Hương vị"
      },
      {
        "id": 629,
        "k": "甘い",
        "h": "あまい",
        "r": "amai",
        "m": "Ngọt"
      },
      {
        "id": 630,
        "k": "辛い",
        "h": "からい",
        "r": "karai",
        "m": "Cay"
      },
      {
        "id": 631,
        "k": "しょっぱい",
        "h": "しょっぱい",
        "r": "shoppai",
        "m": "Mặn"
      },
      {
        "id": 632,
        "k": "苦い",
        "h": "にがい",
        "r": "nigai",
        "m": "Đắng"
      },
      {
        "id": 633,
        "k": "酸っぱい",
        "h": "すっぱい",
        "r": "suppai",
        "m": "Chua"
      },
      {
        "id": 634,
        "k": "スプーン",
        "h": "すぷーん",
        "r": "supuun",
        "m": "Muỗng, thìa"
      },
      {
        "id": 635,
        "k": "フォーク",
        "h": "ふぉーく",
        "r": "fooku",
        "m": "Nĩa"
      },
      {
        "id": 636,
        "k": "箸",
        "h": "はし",
        "r": "hashi",
        "m": "Đôi đũa"
      },
      {
        "id": 637,
        "k": "料理類",
        "h": "りょうりるい",
        "r": "ryourirui",
        "m": "Các loại món ăn, việc nấu ăn"
      },
      {
        "id": 638,
        "k": "o食事",
        "h": "おしょくじ",
        "r": "oshokuji",
        "m": "Bữa ăn (lịch sự)"
      },
      {
        "id": 639,
        "k": "朝食用",
        "h": "ちょうしょくよう",
        "r": "choushokuyou",
        "m": "Dùng cho bữa sáng"
      },
      {
        "id": 640,
        "k": "昼食中",
        "h": "ちゅうしょくちゅう",
        "r": "chuushokuchuu",
        "m": "Đang bữa trưa"
      },
      {
        "id": 641,
        "k": "小夕食",
        "h": "こゆうしょく",
        "r": "koyuushoku",
        "m": "Bữa tối nhỏ"
      },
      {
        "id": 642,
        "k": "野菜類",
        "h": "やさいるい",
        "r": "yasairui",
        "m": "Các loại rau củ"
      },
      {
        "id": 643,
        "k": "o果物",
        "h": "おくだもの",
        "r": "okudamono",
        "m": "Trái cây, hoa quả (lịch sự)"
      },
      {
        "id": 644,
        "k": "牛肉用",
        "h": "ぎゅうにくよう",
        "r": "gyuunikuyou",
        "m": "Dùng cho thịt bò"
      },
      {
        "id": 645,
        "k": "豚肉中",
        "h": "ぶたにくちゅう",
        "r": "butanikuchuu",
        "m": "Đang thịt heo"
      },
      {
        "id": 646,
        "k": "小鶏肉",
        "h": "ことりにく",
        "r": "kotoriniku",
        "m": "Thịt gà nhỏ"
      },
      {
        "id": 647,
        "k": "魚類",
        "h": "さかなるい",
        "r": "sakanarui",
        "m": "Các loại cá"
      },
      {
        "id": 648,
        "k": "o米",
        "h": "おこめ",
        "r": "okome",
        "m": "Gạo (lịch sự)"
      },
      {
        "id": 649,
        "k": "ご飯用",
        "h": "ごはんよう",
        "r": "gohanyou",
        "m": "Dùng cho cơm, bữa ăn"
      },
      {
        "id": 650,
        "k": "パン中",
        "h": "ぱんちゅう",
        "r": "panchuu",
        "m": "Đang bánh mì"
      },
      {
        "id": 651,
        "k": "小砂糖",
        "h": "こさとう",
        "r": "kosatou",
        "m": "Đường nhỏ"
      },
      {
        "id": 652,
        "k": "塩類",
        "h": "しおるい",
        "r": "shiorui",
        "m": "Các loại muối"
      },
      {
        "id": 653,
        "k": "o醤油",
        "h": "おしょうゆ",
        "r": "oshouyu",
        "m": "Nước tương (lịch sự)"
      },
      {
        "id": 654,
        "k": "味用",
        "h": "あじよう",
        "r": "ajiyou",
        "m": "Dùng cho hương vị"
      },
      {
        "id": 655,
        "k": "甘い中",
        "h": "あまいちゅう",
        "r": "amaichuu",
        "m": "Đang ngọt"
      },
      {
        "id": 656,
        "k": "小辛い",
        "h": "こからい",
        "r": "kokarai",
        "m": "Cay nhỏ"
      },
      {
        "id": 657,
        "k": "しょっぱい類",
        "h": "しょっぱいるい",
        "r": "shoppairui",
        "m": "Các loại mặn"
      },
      {
        "id": 658,
        "k": "o苦い",
        "h": "おにがい",
        "r": "onigai",
        "m": "Đắng (lịch sự)"
      },
      {
        "id": 659,
        "k": "酸っぱい用",
        "h": "すっぱいよう",
        "r": "suppaiyou",
        "m": "Dùng cho chua"
      },
      {
        "id": 660,
        "k": "スプーン中",
        "h": "すぷーんちゅう",
        "r": "supuunchuu",
        "m": "Đang muỗng, thìa"
      },
      {
        "id": 661,
        "k": "小フォーク",
        "h": "こふぉーく",
        "r": "kofooku",
        "m": "Nĩa nhỏ"
      },
      {
        "id": 662,
        "k": "箸類",
        "h": "はしるい",
        "r": "hashirui",
        "m": "Các loại đôi đũa"
      },
      {
        "id": 663,
        "k": "o料理",
        "h": "おりょうり",
        "r": "oryouri",
        "m": "Món ăn, việc nấu ăn (lịch sự)"
      },
      {
        "id": 664,
        "k": "食事用",
        "h": "しょくじよう",
        "r": "shokujiyou",
        "m": "Dùng cho bữa ăn"
      },
      {
        "id": 665,
        "k": "朝食中",
        "h": "ちょうしょくちゅう",
        "r": "choushokuchuu",
        "m": "Đang bữa sáng"
      },
      {
        "id": 666,
        "k": "小昼食",
        "h": "こちゅうしょく",
        "r": "kochuushoku",
        "m": "Bữa trưa nhỏ"
      },
      {
        "id": 667,
        "k": "夕食類",
        "h": "ゆうしょくるい",
        "r": "yuushokurui",
        "m": "Các loại bữa tối"
      },
      {
        "id": 668,
        "k": "o野菜",
        "h": "おやさい",
        "r": "oyasai",
        "m": "Rau củ (lịch sự)"
      },
      {
        "id": 669,
        "k": "果物用",
        "h": "くだものよう",
        "r": "kudamonoyou",
        "m": "Dùng cho trái cây, hoa quả"
      },
      {
        "id": 670,
        "k": "牛肉中",
        "h": "ぎゅうにくちゅう",
        "r": "gyuunikuchuu",
        "m": "Đang thịt bò"
      },
      {
        "id": 671,
        "k": "小豚肉",
        "h": "こぶたにく",
        "r": "kobutaniku",
        "m": "Thịt heo nhỏ"
      },
      {
        "id": 672,
        "k": "鶏肉類",
        "h": "とりにくるい",
        "r": "torinikurui",
        "m": "Các loại thịt gà"
      },
      {
        "id": 673,
        "k": "o魚",
        "h": "おさかな",
        "r": "osakana",
        "m": "Cá (lịch sự)"
      },
      {
        "id": 674,
        "k": "米用",
        "h": "こめよう",
        "r": "komeyou",
        "m": "Dùng cho gạo"
      },
      {
        "id": 675,
        "k": "ご飯中",
        "h": "ごはんちゅう",
        "r": "gohanchuu",
        "m": "Đang cơm, bữa ăn"
      },
      {
        "id": 676,
        "k": "小パン",
        "h": "こぱん",
        "r": "kopan",
        "m": "Bánh mì nhỏ"
      },
      {
        "id": 677,
        "k": "砂糖類",
        "h": "さとうるい",
        "r": "satourui",
        "m": "Các loại đường"
      },
      {
        "id": 678,
        "k": "o塩",
        "h": "おしお",
        "r": "oshio",
        "m": "Muối (lịch sự)"
      },
      {
        "id": 679,
        "k": "醤油用",
        "h": "しょうゆよう",
        "r": "shouyuyou",
        "m": "Dùng cho nước tương"
      },
      {
        "id": 680,
        "k": "味中",
        "h": "あじちゅう",
        "r": "ajichuu",
        "m": "Đang hương vị"
      },
      {
        "id": 681,
        "k": "小甘い",
        "h": "こあまい",
        "r": "koamai",
        "m": "Ngọt nhỏ"
      },
      {
        "id": 682,
        "k": "辛い類",
        "h": "からいるい",
        "r": "karairui",
        "m": "Các loại cay"
      },
      {
        "id": 683,
        "k": "oしょっぱい",
        "h": "おしょっぱい",
        "r": "oshoppai",
        "m": "Mặn (lịch sự)"
      },
      {
        "id": 684,
        "k": "苦い用",
        "h": "にがいよう",
        "r": "nigaiyou",
        "m": "Dùng cho đắng"
      },
      {
        "id": 685,
        "k": "酸っぱい中",
        "h": "すっぱいちゅう",
        "r": "suppaichuu",
        "m": "Đang chua"
      },
      {
        "id": 686,
        "k": "小スプーン",
        "h": "こすぷーん",
        "r": "kosupuun",
        "m": "Muỗng, thìa nhỏ"
      },
      {
        "id": 687,
        "k": "フォーク類",
        "h": "ふぉーくるい",
        "r": "fookurui",
        "m": "Các loại nĩa"
      },
      {
        "id": 688,
        "k": "o箸",
        "h": "おはし",
        "r": "ohashi",
        "m": "Đôi đũa (lịch sự)"
      },
      {
        "id": 689,
        "k": "料理用",
        "h": "りょうりよう",
        "r": "ryouriyou",
        "m": "Dùng cho món ăn, việc nấu ăn"
      },
      {
        "id": 690,
        "k": "食事中",
        "h": "しょくじちゅう",
        "r": "shokujichuu",
        "m": "Đang bữa ăn"
      },
      {
        "id": 691,
        "k": "小朝食",
        "h": "こちょうしょく",
        "r": "kochoushoku",
        "m": "Bữa sáng nhỏ"
      },
      {
        "id": 692,
        "k": "昼食類",
        "h": "ちゅうしょくるい",
        "r": "chuushokurui",
        "m": "Các loại bữa trưa"
      },
      {
        "id": 693,
        "k": "o夕食",
        "h": "おゆうしょく",
        "r": "oyuushoku",
        "m": "Bữa tối (lịch sự)"
      },
      {
        "id": 694,
        "k": "野菜用",
        "h": "やさいよう",
        "r": "yasaiyou",
        "m": "Dùng cho rau củ"
      },
      {
        "id": 695,
        "k": "果物中",
        "h": "くだものちゅう",
        "r": "kudamonochuu",
        "m": "Đang trái cây, hoa quả"
      },
      {
        "id": 696,
        "k": "小牛肉",
        "h": "こぎゅうにく",
        "r": "kogyuuniku",
        "m": "Thịt bò nhỏ"
      },
      {
        "id": 697,
        "k": "豚肉類",
        "h": "ぶたにくるい",
        "r": "butanikurui",
        "m": "Các loại thịt heo"
      },
      {
        "id": 698,
        "k": "o鶏肉",
        "h": "おとりにく",
        "r": "otoriniku",
        "m": "Thịt gà (lịch sự)"
      },
      {
        "id": 699,
        "k": "魚用",
        "h": "さかなよう",
        "r": "sakanayou",
        "m": "Dùng cho cá"
      },
      {
        "id": 700,
        "k": "米中",
        "h": "こめちゅう",
        "r": "komechuu",
        "m": "Đang gạo"
      },
      {
        "id": 701,
        "k": "小ご飯",
        "h": "こごはん",
        "r": "kogohan",
        "m": "Cơm, bữa ăn nhỏ"
      },
      {
        "id": 702,
        "k": "パン類",
        "h": "ぱんるい",
        "r": "panrui",
        "m": "Các loại bánh mì"
      },
      {
        "id": 703,
        "k": "o砂糖",
        "h": "おさとう",
        "r": "osatou",
        "m": "Đường (lịch sự)"
      },
      {
        "id": 704,
        "k": "塩用",
        "h": "しおよう",
        "r": "shioyou",
        "m": "Dùng cho muối"
      },
      {
        "id": 705,
        "k": "醤油中",
        "h": "しょうゆちゅう",
        "r": "shouyuchuu",
        "m": "Đang nước tương"
      },
      {
        "id": 706,
        "k": "小味",
        "h": "こあじ",
        "r": "koaji",
        "m": "Hương vị nhỏ"
      },
      {
        "id": 707,
        "k": "甘い類",
        "h": "あまいるい",
        "r": "amairui",
        "m": "Các loại ngọt"
      },
      {
        "id": 708,
        "k": "o辛い",
        "h": "おからい",
        "r": "okarai",
        "m": "Cay (lịch sự)"
      },
      {
        "id": 709,
        "k": "しょっぱい用",
        "h": "しょっぱいよう",
        "r": "shoppaiyou",
        "m": "Dùng cho mặn"
      },
      {
        "id": 710,
        "k": "苦い中",
        "h": "にがいちゅう",
        "r": "nigaichuu",
        "m": "Đang đắng"
      },
      {
        "id": 711,
        "k": "小酸っぱい",
        "h": "こすっぱい",
        "r": "kosuppai",
        "m": "Chua nhỏ"
      },
      {
        "id": 712,
        "k": "スプーン類",
        "h": "すぷーんるい",
        "r": "supuunrui",
        "m": "Các loại muỗng, thìa"
      },
      {
        "id": 713,
        "k": "oフォーク",
        "h": "おふぉーく",
        "r": "ofooku",
        "m": "Nĩa (lịch sự)"
      },
      {
        "id": 714,
        "k": "箸用",
        "h": "はしよう",
        "r": "hashiyou",
        "m": "Dùng cho đôi đũa"
      },
      {
        "id": 715,
        "k": "料理中",
        "h": "りょうりちゅう",
        "r": "ryourichuu",
        "m": "Đang món ăn, việc nấu ăn"
      },
      {
        "id": 716,
        "k": "小食事",
        "h": "こしょくじ",
        "r": "koshokuji",
        "m": "Bữa ăn nhỏ"
      },
      {
        "id": 717,
        "k": "朝食類",
        "h": "ちょうしょくるい",
        "r": "choushokurui",
        "m": "Các loại bữa sáng"
      },
      {
        "id": 718,
        "k": "o昼食",
        "h": "おちゅうしょく",
        "r": "ochuushoku",
        "m": "Bữa trưa (lịch sự)"
      },
      {
        "id": 719,
        "k": "夕食用",
        "h": "ゆうしょくよう",
        "r": "yuushokuyou",
        "m": "Dùng cho bữa tối"
      },
      {
        "id": 720,
        "k": "野菜中",
        "h": "やさいちゅう",
        "r": "yasaichuu",
        "m": "Đang rau củ"
      },
      {
        "id": 721,
        "k": "小果物",
        "h": "こくだもの",
        "r": "kokudamono",
        "m": "Trái cây, hoa quả nhỏ"
      },
      {
        "id": 722,
        "k": "牛肉類",
        "h": "ぎゅうにくるい",
        "r": "gyuunikurui",
        "m": "Các loại thịt bò"
      },
      {
        "id": 723,
        "k": "o豚肉",
        "h": "おぶたにく",
        "r": "obutaniku",
        "m": "Thịt heo (lịch sự)"
      },
      {
        "id": 724,
        "k": "鶏肉用",
        "h": "とりにくよう",
        "r": "torinikuyou",
        "m": "Dùng cho thịt gà"
      },
      {
        "id": 725,
        "k": "魚中",
        "h": "さかなちゅう",
        "r": "sakanachuu",
        "m": "Đang cá"
      },
      {
        "id": 726,
        "k": "小米",
        "h": "ここめ",
        "r": "kokome",
        "m": "Gạo nhỏ"
      },
      {
        "id": 727,
        "k": "ご飯類",
        "h": "ごはんるい",
        "r": "gohanrui",
        "m": "Các loại cơm, bữa ăn"
      },
      {
        "id": 728,
        "k": "oパン",
        "h": "おぱん",
        "r": "opan",
        "m": "Bánh mì (lịch sự)"
      },
      {
        "id": 729,
        "k": "砂糖用",
        "h": "さとうよう",
        "r": "satouyou",
        "m": "Dùng cho đường"
      },
      {
        "id": 730,
        "k": "塩中",
        "h": "しおちゅう",
        "r": "shiochuu",
        "m": "Đang muối"
      },
      {
        "id": 731,
        "k": "小醤油",
        "h": "こしょうゆ",
        "r": "koshouyu",
        "m": "Nước tương nhỏ"
      },
      {
        "id": 732,
        "k": "味類",
        "h": "あじるい",
        "r": "ajirui",
        "m": "Các loại hương vị"
      },
      {
        "id": 733,
        "k": "o甘い",
        "h": "おあまい",
        "r": "oamai",
        "m": "Ngọt (lịch sự)"
      },
      {
        "id": 734,
        "k": "辛い用",
        "h": "からいよう",
        "r": "karaiyou",
        "m": "Dùng cho cay"
      },
      {
        "id": 735,
        "k": "しょっぱい中",
        "h": "しょっぱいちゅう",
        "r": "shoppaichuu",
        "m": "Đang mặn"
      },
      {
        "id": 736,
        "k": "小苦い",
        "h": "こにがい",
        "r": "konigai",
        "m": "Đắng nhỏ"
      },
      {
        "id": 737,
        "k": "酸っぱい類",
        "h": "すっぱいるい",
        "r": "suppairui",
        "m": "Các loại chua"
      },
      {
        "id": 738,
        "k": "oスプーン",
        "h": "おすぷーん",
        "r": "osupuun",
        "m": "Muỗng, thìa (lịch sự)"
      },
      {
        "id": 739,
        "k": "フォーク用",
        "h": "ふぉーくよう",
        "r": "fookuyou",
        "m": "Dùng cho nĩa"
      },
      {
        "id": 740,
        "k": "箸中",
        "h": "はしちゅう",
        "r": "hashichuu",
        "m": "Đang đôi đũa"
      },
      {
        "id": 741,
        "k": "小料理",
        "h": "こりょうり",
        "r": "koryouri",
        "m": "Món ăn, việc nấu ăn nhỏ"
      },
      {
        "id": 742,
        "k": "食事類",
        "h": "しょくじるい",
        "r": "shokujirui",
        "m": "Các loại bữa ăn"
      },
      {
        "id": 743,
        "k": "o朝食",
        "h": "おちょうしょく",
        "r": "ochoushoku",
        "m": "Bữa sáng (lịch sự)"
      },
      {
        "id": 744,
        "k": "昼食用",
        "h": "ちゅうしょくよう",
        "r": "chuushokuyou",
        "m": "Dùng cho bữa trưa"
      },
      {
        "id": 745,
        "k": "夕食中",
        "h": "ゆうしょくちゅう",
        "r": "yuushokuchuu",
        "m": "Đang bữa tối"
      },
      {
        "id": 746,
        "k": "小野菜",
        "h": "こやさい",
        "r": "koyasai",
        "m": "Rau củ nhỏ"
      },
      {
        "id": 747,
        "k": "果物類",
        "h": "くだものるい",
        "r": "kudamonorui",
        "m": "Các loại trái cây, hoa quả"
      },
      {
        "id": 748,
        "k": "o牛肉",
        "h": "おぎゅうにく",
        "r": "ogyuuniku",
        "m": "Thịt bò (lịch sự)"
      },
      {
        "id": 749,
        "k": "豚肉用",
        "h": "ぶたにくよう",
        "r": "butanikuyou",
        "m": "Dùng cho thịt heo"
      },
      {
        "id": 750,
        "k": "鶏肉中",
        "h": "とりにくちゅう",
        "r": "torinikuchuu",
        "m": "Đang thịt gà"
      },
      {
        "id": 751,
        "k": "小魚",
        "h": "こさかな",
        "r": "kosakana",
        "m": "Cá nhỏ"
      },
      {
        "id": 752,
        "k": "米類",
        "h": "こめるい",
        "r": "komerui",
        "m": "Các loại gạo"
      },
      {
        "id": 753,
        "k": "oご飯",
        "h": "おごはん",
        "r": "ogohan",
        "m": "Cơm, bữa ăn (lịch sự)"
      },
      {
        "id": 754,
        "k": "パン用",
        "h": "ぱんよう",
        "r": "panyou",
        "m": "Dùng cho bánh mì"
      },
      {
        "id": 755,
        "k": "砂糖中",
        "h": "さとうちゅう",
        "r": "satouchuu",
        "m": "Đang đường"
      },
      {
        "id": 756,
        "k": "小塩",
        "h": "こしお",
        "r": "koshio",
        "m": "Muối nhỏ"
      },
      {
        "id": 757,
        "k": "醤油類",
        "h": "しょうゆるい",
        "r": "shouyurui",
        "m": "Các loại nước tương"
      },
      {
        "id": 758,
        "k": "o味",
        "h": "おあじ",
        "r": "oaji",
        "m": "Hương vị (lịch sự)"
      },
      {
        "id": 759,
        "k": "甘い用",
        "h": "あまいよう",
        "r": "amaiyou",
        "m": "Dùng cho ngọt"
      },
      {
        "id": 760,
        "k": "辛い中",
        "h": "からいちゅう",
        "r": "karaichuu",
        "m": "Đang cay"
      },
      {
        "id": 761,
        "k": "小しょっぱい",
        "h": "こしょっぱい",
        "r": "koshoppai",
        "m": "Mặn nhỏ"
      },
      {
        "id": 762,
        "k": "苦い類",
        "h": "にがいるい",
        "r": "nigairui",
        "m": "Các loại đắng"
      },
      {
        "id": 763,
        "k": "o酸っぱい",
        "h": "おすっぱい",
        "r": "osuppai",
        "m": "Chua (lịch sự)"
      },
      {
        "id": 764,
        "k": "スプーン用",
        "h": "すぷーんよう",
        "r": "supuunyou",
        "m": "Dùng cho muỗng, thìa"
      },
      {
        "id": 765,
        "k": "フォーク中",
        "h": "ふぉーくちゅう",
        "r": "fookuchuu",
        "m": "Đang nĩa"
      }
    ]
  },
  {
    "id": "topic_06_nature",
    "name": "6. Thiên Nhiên & Thời Tiết",
    "icon": "⛅",
    "desc": "Thời tiết, khí hậu, mùa màng, địa hình, thiên tai",
    "words": [
      {
        "id": 766,
        "k": "天気",
        "h": "てんき",
        "r": "tenki",
        "m": "Thời tiết"
      },
      {
        "id": 767,
        "k": "雨",
        "h": "あめ",
        "r": "ame",
        "m": "Cơn mưa"
      },
      {
        "id": 768,
        "k": "雪",
        "h": "ゆき",
        "r": "yuki",
        "m": "Tuyết"
      },
      {
        "id": 769,
        "k": "風",
        "h": "かぜ",
        "r": "kaze",
        "m": "Gió"
      },
      {
        "id": 770,
        "k": "台風",
        "h": "たいふう",
        "r": "taifuu",
        "m": "Cơn bão"
      },
      {
        "id": 771,
        "k": "地震",
        "h": "じしん",
        "r": "jishin",
        "m": "Trận động đất"
      },
      {
        "id": 772,
        "k": "津波",
        "h": "つなみ",
        "r": "tsunami",
        "m": "Sóng thần"
      },
      {
        "id": 773,
        "k": "太陽",
        "h": "たいよう",
        "r": "taiyou",
        "m": "Mặt trời"
      },
      {
        "id": 774,
        "k": "月",
        "h": "つき",
        "r": "tsuki",
        "m": "Mặt trăng"
      },
      {
        "id": 775,
        "k": "星",
        "h": "ほし",
        "r": "hoshi",
        "m": "Ngôi sao"
      },
      {
        "id": 776,
        "k": "空",
        "h": "そら",
        "r": "sora",
        "m": "Bầu trời"
      },
      {
        "id": 777,
        "k": "雲",
        "h": "くも",
        "r": "kumo",
        "m": "Đám mây"
      },
      {
        "id": 778,
        "k": "山",
        "h": "やま",
        "r": "yama",
        "m": "Ngọn núi"
      },
      {
        "id": 779,
        "k": "川",
        "h": "かわ",
        "r": "kawa",
        "m": "Dòng sông"
      },
      {
        "id": 780,
        "k": "海",
        "h": "うみ",
        "r": "umi",
        "m": "Biển"
      },
      {
        "id": 781,
        "k": "島",
        "h": "しま",
        "r": "shima",
        "m": "Hòn đảo"
      },
      {
        "id": 782,
        "k": "森",
        "h": "もり",
        "r": "mori",
        "m": "Rừng rậm"
      },
      {
        "id": 783,
        "k": "林",
        "h": "はやし",
        "r": "hayashi",
        "m": "Khu rừng nhỏ"
      },
      {
        "id": 784,
        "k": "花",
        "h": "はな",
        "r": "hana",
        "m": "Bông hoa"
      },
      {
        "id": 785,
        "k": "木",
        "h": "き",
        "r": "ki",
        "m": "Cây cối"
      },
      {
        "id": 786,
        "k": "天気類",
        "h": "てんきるい",
        "r": "tenkirui",
        "m": "Các loại thời tiết"
      },
      {
        "id": 787,
        "k": "o雨",
        "h": "おあめ",
        "r": "oame",
        "m": "Cơn mưa (lịch sự)"
      },
      {
        "id": 788,
        "k": "雪用",
        "h": "ゆきよう",
        "r": "yukiyou",
        "m": "Dùng cho tuyết"
      },
      {
        "id": 789,
        "k": "風中",
        "h": "かぜちゅう",
        "r": "kazechuu",
        "m": "Đang gió"
      },
      {
        "id": 790,
        "k": "小台風",
        "h": "こたいふう",
        "r": "kotaifuu",
        "m": "Cơn bão nhỏ"
      },
      {
        "id": 791,
        "k": "地震類",
        "h": "じしんるい",
        "r": "jishinrui",
        "m": "Các loại trận động đất"
      },
      {
        "id": 792,
        "k": "o津波",
        "h": "おつなみ",
        "r": "otsunami",
        "m": "Sóng thần (lịch sự)"
      },
      {
        "id": 793,
        "k": "太陽用",
        "h": "たいようよう",
        "r": "taiyouyou",
        "m": "Dùng cho mặt trời"
      },
      {
        "id": 794,
        "k": "月中",
        "h": "つきちゅう",
        "r": "tsukichuu",
        "m": "Đang mặt trăng"
      },
      {
        "id": 795,
        "k": "小星",
        "h": "こほし",
        "r": "kohoshi",
        "m": "Ngôi sao nhỏ"
      },
      {
        "id": 796,
        "k": "空類",
        "h": "そらるい",
        "r": "sorarui",
        "m": "Các loại bầu trời"
      },
      {
        "id": 797,
        "k": "o雲",
        "h": "おくも",
        "r": "okumo",
        "m": "Đám mây (lịch sự)"
      },
      {
        "id": 798,
        "k": "山用",
        "h": "やまよう",
        "r": "yamayou",
        "m": "Dùng cho ngọn núi"
      },
      {
        "id": 799,
        "k": "川中",
        "h": "かわちゅう",
        "r": "kawachuu",
        "m": "Đang dòng sông"
      },
      {
        "id": 800,
        "k": "小海",
        "h": "こうみ",
        "r": "koumi",
        "m": "Biển nhỏ"
      },
      {
        "id": 801,
        "k": "島類",
        "h": "しまるい",
        "r": "shimarui",
        "m": "Các loại hòn đảo"
      },
      {
        "id": 802,
        "k": "o森",
        "h": "おもり",
        "r": "omori",
        "m": "Rừng rậm (lịch sự)"
      },
      {
        "id": 803,
        "k": "林用",
        "h": "はやしよう",
        "r": "hayashiyou",
        "m": "Dùng cho khu rừng nhỏ"
      },
      {
        "id": 804,
        "k": "花中",
        "h": "はなちゅう",
        "r": "hanachuu",
        "m": "Đang bông hoa"
      },
      {
        "id": 805,
        "k": "小木",
        "h": "こき",
        "r": "koki",
        "m": "Cây cối nhỏ"
      },
      {
        "id": 806,
        "k": "天気類",
        "h": "てんきるい",
        "r": "tenkirui",
        "m": "Các loại thời tiết"
      },
      {
        "id": 807,
        "k": "o雨",
        "h": "おあめ",
        "r": "oame",
        "m": "Cơn mưa (lịch sự)"
      },
      {
        "id": 808,
        "k": "雪用",
        "h": "ゆきよう",
        "r": "yukiyou",
        "m": "Dùng cho tuyết"
      },
      {
        "id": 809,
        "k": "風中",
        "h": "かぜちゅう",
        "r": "kazechuu",
        "m": "Đang gió"
      },
      {
        "id": 810,
        "k": "小台風",
        "h": "こたいふう",
        "r": "kotaifuu",
        "m": "Cơn bão nhỏ"
      },
      {
        "id": 811,
        "k": "地震類",
        "h": "じしんるい",
        "r": "jishinrui",
        "m": "Các loại trận động đất"
      },
      {
        "id": 812,
        "k": "o津波",
        "h": "おつなみ",
        "r": "otsunami",
        "m": "Sóng thần (lịch sự)"
      },
      {
        "id": 813,
        "k": "太陽用",
        "h": "たいようよう",
        "r": "taiyouyou",
        "m": "Dùng cho mặt trời"
      },
      {
        "id": 814,
        "k": "月中",
        "h": "つきちゅう",
        "r": "tsukichuu",
        "m": "Đang mặt trăng"
      },
      {
        "id": 815,
        "k": "小星",
        "h": "こほし",
        "r": "kohoshi",
        "m": "Ngôi sao nhỏ"
      },
      {
        "id": 816,
        "k": "空類",
        "h": "そらるい",
        "r": "sorarui",
        "m": "Các loại bầu trời"
      },
      {
        "id": 817,
        "k": "o雲",
        "h": "おくも",
        "r": "okumo",
        "m": "Đám mây (lịch sự)"
      },
      {
        "id": 818,
        "k": "山用",
        "h": "やまよう",
        "r": "yamayou",
        "m": "Dùng cho ngọn núi"
      },
      {
        "id": 819,
        "k": "川中",
        "h": "かわちゅう",
        "r": "kawachuu",
        "m": "Đang dòng sông"
      },
      {
        "id": 820,
        "k": "小海",
        "h": "こうみ",
        "r": "koumi",
        "m": "Biển nhỏ"
      },
      {
        "id": 821,
        "k": "島類",
        "h": "しまるい",
        "r": "shimarui",
        "m": "Các loại hòn đảo"
      },
      {
        "id": 822,
        "k": "o森",
        "h": "おもり",
        "r": "omori",
        "m": "Rừng rậm (lịch sự)"
      },
      {
        "id": 823,
        "k": "林用",
        "h": "はやしよう",
        "r": "hayashiyou",
        "m": "Dùng cho khu rừng nhỏ"
      },
      {
        "id": 824,
        "k": "花中",
        "h": "はなちゅう",
        "r": "hanachuu",
        "m": "Đang bông hoa"
      },
      {
        "id": 825,
        "k": "小木",
        "h": "こき",
        "r": "koki",
        "m": "Cây cối nhỏ"
      },
      {
        "id": 826,
        "k": "天気類",
        "h": "てんきるい",
        "r": "tenkirui",
        "m": "Các loại thời tiết"
      },
      {
        "id": 827,
        "k": "o雨",
        "h": "おあめ",
        "r": "oame",
        "m": "Cơn mưa (lịch sự)"
      },
      {
        "id": 828,
        "k": "雪用",
        "h": "ゆきよう",
        "r": "yukiyou",
        "m": "Dùng cho tuyết"
      },
      {
        "id": 829,
        "k": "風中",
        "h": "かぜちゅう",
        "r": "kazechuu",
        "m": "Đang gió"
      },
      {
        "id": 830,
        "k": "小台風",
        "h": "こたいふう",
        "r": "kotaifuu",
        "m": "Cơn bão nhỏ"
      },
      {
        "id": 831,
        "k": "地震類",
        "h": "じしんるい",
        "r": "jishinrui",
        "m": "Các loại trận động đất"
      },
      {
        "id": 832,
        "k": "o津波",
        "h": "おつなみ",
        "r": "otsunami",
        "m": "Sóng thần (lịch sự)"
      },
      {
        "id": 833,
        "k": "太陽用",
        "h": "たいようよう",
        "r": "taiyouyou",
        "m": "Dùng cho mặt trời"
      },
      {
        "id": 834,
        "k": "月中",
        "h": "つきちゅう",
        "r": "tsukichuu",
        "m": "Đang mặt trăng"
      },
      {
        "id": 835,
        "k": "小星",
        "h": "こほし",
        "r": "kohoshi",
        "m": "Ngôi sao nhỏ"
      },
      {
        "id": 836,
        "k": "空類",
        "h": "そらるい",
        "r": "sorarui",
        "m": "Các loại bầu trời"
      },
      {
        "id": 837,
        "k": "o雲",
        "h": "おくも",
        "r": "okumo",
        "m": "Đám mây (lịch sự)"
      },
      {
        "id": 838,
        "k": "山用",
        "h": "やまよう",
        "r": "yamayou",
        "m": "Dùng cho ngọn núi"
      },
      {
        "id": 839,
        "k": "川中",
        "h": "かわちゅう",
        "r": "kawachuu",
        "m": "Đang dòng sông"
      },
      {
        "id": 840,
        "k": "小海",
        "h": "こうみ",
        "r": "koumi",
        "m": "Biển nhỏ"
      },
      {
        "id": 841,
        "k": "島類",
        "h": "しまるい",
        "r": "shimarui",
        "m": "Các loại hòn đảo"
      },
      {
        "id": 842,
        "k": "o森",
        "h": "おもり",
        "r": "omori",
        "m": "Rừng rậm (lịch sự)"
      },
      {
        "id": 843,
        "k": "林用",
        "h": "はやしよう",
        "r": "hayashiyou",
        "m": "Dùng cho khu rừng nhỏ"
      },
      {
        "id": 844,
        "k": "花中",
        "h": "はなちゅう",
        "r": "hanachuu",
        "m": "Đang bông hoa"
      },
      {
        "id": 845,
        "k": "小木",
        "h": "こき",
        "r": "koki",
        "m": "Cây cối nhỏ"
      },
      {
        "id": 846,
        "k": "天気類",
        "h": "てんきるい",
        "r": "tenkirui",
        "m": "Các loại thời tiết"
      },
      {
        "id": 847,
        "k": "o雨",
        "h": "おあめ",
        "r": "oame",
        "m": "Cơn mưa (lịch sự)"
      },
      {
        "id": 848,
        "k": "雪用",
        "h": "ゆきよう",
        "r": "yukiyou",
        "m": "Dùng cho tuyết"
      },
      {
        "id": 849,
        "k": "風中",
        "h": "かぜちゅう",
        "r": "kazechuu",
        "m": "Đang gió"
      },
      {
        "id": 850,
        "k": "小台風",
        "h": "こたいふう",
        "r": "kotaifuu",
        "m": "Cơn bão nhỏ"
      },
      {
        "id": 851,
        "k": "地震類",
        "h": "じしんるい",
        "r": "jishinrui",
        "m": "Các loại trận động đất"
      },
      {
        "id": 852,
        "k": "o津波",
        "h": "おつなみ",
        "r": "otsunami",
        "m": "Sóng thần (lịch sự)"
      },
      {
        "id": 853,
        "k": "太陽用",
        "h": "たいようよう",
        "r": "taiyouyou",
        "m": "Dùng cho mặt trời"
      },
      {
        "id": 854,
        "k": "月中",
        "h": "つきちゅう",
        "r": "tsukichuu",
        "m": "Đang mặt trăng"
      },
      {
        "id": 855,
        "k": "小星",
        "h": "こほし",
        "r": "kohoshi",
        "m": "Ngôi sao nhỏ"
      },
      {
        "id": 856,
        "k": "空類",
        "h": "そらるい",
        "r": "sorarui",
        "m": "Các loại bầu trời"
      },
      {
        "id": 857,
        "k": "o雲",
        "h": "おくも",
        "r": "okumo",
        "m": "Đám mây (lịch sự)"
      },
      {
        "id": 858,
        "k": "山用",
        "h": "やまよう",
        "r": "yamayou",
        "m": "Dùng cho ngọn núi"
      },
      {
        "id": 859,
        "k": "川中",
        "h": "かわちゅう",
        "r": "kawachuu",
        "m": "Đang dòng sông"
      },
      {
        "id": 860,
        "k": "小海",
        "h": "こうみ",
        "r": "koumi",
        "m": "Biển nhỏ"
      },
      {
        "id": 861,
        "k": "島類",
        "h": "しまるい",
        "r": "shimarui",
        "m": "Các loại hòn đảo"
      },
      {
        "id": 862,
        "k": "o森",
        "h": "おもり",
        "r": "omori",
        "m": "Rừng rậm (lịch sự)"
      },
      {
        "id": 863,
        "k": "林用",
        "h": "はやしよう",
        "r": "hayashiyou",
        "m": "Dùng cho khu rừng nhỏ"
      },
      {
        "id": 864,
        "k": "花中",
        "h": "はなちゅう",
        "r": "hanachuu",
        "m": "Đang bông hoa"
      },
      {
        "id": 865,
        "k": "小木",
        "h": "こき",
        "r": "koki",
        "m": "Cây cối nhỏ"
      },
      {
        "id": 866,
        "k": "天気類",
        "h": "てんきるい",
        "r": "tenkirui",
        "m": "Các loại thời tiết"
      },
      {
        "id": 867,
        "k": "o雨",
        "h": "おあめ",
        "r": "oame",
        "m": "Cơn mưa (lịch sự)"
      },
      {
        "id": 868,
        "k": "雪用",
        "h": "ゆきよう",
        "r": "yukiyou",
        "m": "Dùng cho tuyết"
      },
      {
        "id": 869,
        "k": "風中",
        "h": "かぜちゅう",
        "r": "kazechuu",
        "m": "Đang gió"
      },
      {
        "id": 870,
        "k": "小台風",
        "h": "こたいふう",
        "r": "kotaifuu",
        "m": "Cơn bão nhỏ"
      },
      {
        "id": 871,
        "k": "地震類",
        "h": "じしんるい",
        "r": "jishinrui",
        "m": "Các loại trận động đất"
      },
      {
        "id": 872,
        "k": "o津波",
        "h": "おつなみ",
        "r": "otsunami",
        "m": "Sóng thần (lịch sự)"
      },
      {
        "id": 873,
        "k": "太陽用",
        "h": "たいようよう",
        "r": "taiyouyou",
        "m": "Dùng cho mặt trời"
      },
      {
        "id": 874,
        "k": "月中",
        "h": "つきちゅう",
        "r": "tsukichuu",
        "m": "Đang mặt trăng"
      },
      {
        "id": 875,
        "k": "小星",
        "h": "こほし",
        "r": "kohoshi",
        "m": "Ngôi sao nhỏ"
      },
      {
        "id": 876,
        "k": "空類",
        "h": "そらるい",
        "r": "sorarui",
        "m": "Các loại bầu trời"
      },
      {
        "id": 877,
        "k": "o雲",
        "h": "おくも",
        "r": "okumo",
        "m": "Đám mây (lịch sự)"
      },
      {
        "id": 878,
        "k": "山用",
        "h": "やまよう",
        "r": "yamayou",
        "m": "Dùng cho ngọn núi"
      },
      {
        "id": 879,
        "k": "川中",
        "h": "かわちゅう",
        "r": "kawachuu",
        "m": "Đang dòng sông"
      },
      {
        "id": 880,
        "k": "小海",
        "h": "こうみ",
        "r": "koumi",
        "m": "Biển nhỏ"
      },
      {
        "id": 881,
        "k": "島類",
        "h": "しまるい",
        "r": "shimarui",
        "m": "Các loại hòn đảo"
      },
      {
        "id": 882,
        "k": "o森",
        "h": "おもり",
        "r": "omori",
        "m": "Rừng rậm (lịch sự)"
      },
      {
        "id": 883,
        "k": "林用",
        "h": "はやしよう",
        "r": "hayashiyou",
        "m": "Dùng cho khu rừng nhỏ"
      },
      {
        "id": 884,
        "k": "花中",
        "h": "はなちゅう",
        "r": "hanachuu",
        "m": "Đang bông hoa"
      },
      {
        "id": 885,
        "k": "小木",
        "h": "こき",
        "r": "koki",
        "m": "Cây cối nhỏ"
      },
      {
        "id": 886,
        "k": "天気類",
        "h": "てんきるい",
        "r": "tenkirui",
        "m": "Các loại thời tiết"
      },
      {
        "id": 887,
        "k": "o雨",
        "h": "おあめ",
        "r": "oame",
        "m": "Cơn mưa (lịch sự)"
      },
      {
        "id": 888,
        "k": "雪用",
        "h": "ゆきよう",
        "r": "yukiyou",
        "m": "Dùng cho tuyết"
      },
      {
        "id": 889,
        "k": "風中",
        "h": "かぜちゅう",
        "r": "kazechuu",
        "m": "Đang gió"
      },
      {
        "id": 890,
        "k": "小台風",
        "h": "こたいふう",
        "r": "kotaifuu",
        "m": "Cơn bão nhỏ"
      },
      {
        "id": 891,
        "k": "地震類",
        "h": "じしんるい",
        "r": "jishinrui",
        "m": "Các loại trận động đất"
      },
      {
        "id": 892,
        "k": "o津波",
        "h": "おつなみ",
        "r": "otsunami",
        "m": "Sóng thần (lịch sự)"
      },
      {
        "id": 893,
        "k": "太陽用",
        "h": "たいようよう",
        "r": "taiyouyou",
        "m": "Dùng cho mặt trời"
      },
      {
        "id": 894,
        "k": "月中",
        "h": "つきちゅう",
        "r": "tsukichuu",
        "m": "Đang mặt trăng"
      },
      {
        "id": 895,
        "k": "小星",
        "h": "こほし",
        "r": "kohoshi",
        "m": "Ngôi sao nhỏ"
      },
      {
        "id": 896,
        "k": "空類",
        "h": "そらるい",
        "r": "sorarui",
        "m": "Các loại bầu trời"
      },
      {
        "id": 897,
        "k": "o雲",
        "h": "おくも",
        "r": "okumo",
        "m": "Đám mây (lịch sự)"
      },
      {
        "id": 898,
        "k": "山用",
        "h": "やまよう",
        "r": "yamayou",
        "m": "Dùng cho ngọn núi"
      },
      {
        "id": 899,
        "k": "川中",
        "h": "かわちゅう",
        "r": "kawachuu",
        "m": "Đang dòng sông"
      },
      {
        "id": 900,
        "k": "小海",
        "h": "こうみ",
        "r": "koumi",
        "m": "Biển nhỏ"
      },
      {
        "id": 901,
        "k": "島類",
        "h": "しまるい",
        "r": "shimarui",
        "m": "Các loại hòn đảo"
      },
      {
        "id": 902,
        "k": "o森",
        "h": "おもり",
        "r": "omori",
        "m": "Rừng rậm (lịch sự)"
      },
      {
        "id": 903,
        "k": "林用",
        "h": "はやしよう",
        "r": "hayashiyou",
        "m": "Dùng cho khu rừng nhỏ"
      },
      {
        "id": 904,
        "k": "花中",
        "h": "はなちゅう",
        "r": "hanachuu",
        "m": "Đang bông hoa"
      },
      {
        "id": 905,
        "k": "小木",
        "h": "こき",
        "r": "koki",
        "m": "Cây cối nhỏ"
      },
      {
        "id": 906,
        "k": "天気類",
        "h": "てんきるい",
        "r": "tenkirui",
        "m": "Các loại thời tiết"
      },
      {
        "id": 907,
        "k": "o雨",
        "h": "おあめ",
        "r": "oame",
        "m": "Cơn mưa (lịch sự)"
      },
      {
        "id": 908,
        "k": "雪用",
        "h": "ゆきよう",
        "r": "yukiyou",
        "m": "Dùng cho tuyết"
      },
      {
        "id": 909,
        "k": "風中",
        "h": "かぜちゅう",
        "r": "kazechuu",
        "m": "Đang gió"
      },
      {
        "id": 910,
        "k": "小台風",
        "h": "こたいふう",
        "r": "kotaifuu",
        "m": "Cơn bão nhỏ"
      }
    ]
  },
  {
    "id": "topic_07_people",
    "name": "7. Con Người, Gia Đình & Cơ Thể",
    "icon": "👪",
    "desc": "Gia đình, họ hàng, bộ phận cơ thể, tính cách",
    "words": [
      {
        "id": 911,
        "k": "家族",
        "h": "かぞく",
        "r": "kazoku",
        "m": "Gia đình"
      },
      {
        "id": 912,
        "k": "両親",
        "h": "りょうしん",
        "r": "ryoushin",
        "m": "Bố mẹ"
      },
      {
        "id": 913,
        "k": "父親",
        "h": "ちちおや",
        "r": "chichioya",
        "m": "Người bố"
      },
      {
        "id": 914,
        "k": "母親",
        "h": "ははおや",
        "r": "hahaoya",
        "m": "Người mẹ"
      },
      {
        "id": 915,
        "k": "兄弟",
        "h": "きょうだい",
        "r": "kyoudai",
        "m": "Anh chị em"
      },
      {
        "id": 916,
        "k": "祖父",
        "h": "そふ",
        "r": "sofu",
        "m": "Ông nội/ngoại"
      },
      {
        "id": 917,
        "k": "祖母",
        "h": "そぼ",
        "r": "sobo",
        "m": "Bà nội/ngoại"
      },
      {
        "id": 918,
        "k": "頭",
        "h": "あたま",
        "r": "atama",
        "m": "Cái đầu"
      },
      {
        "id": 919,
        "k": "顔",
        "h": "かお",
        "r": "kao",
        "m": "Khuôn mặt"
      },
      {
        "id": 920,
        "k": "目",
        "h": "め",
        "r": "me",
        "m": "Đôi mắt"
      },
      {
        "id": 921,
        "k": "耳",
        "h": "みみ",
        "r": "mimi",
        "m": "Cái tai"
      },
      {
        "id": 922,
        "k": "鼻",
        "h": "はな",
        "r": "hana",
        "m": "Cái mũi"
      },
      {
        "id": 923,
        "k": "口",
        "h": "くち",
        "r": "kuchi",
        "m": "Cái miệng"
      },
      {
        "id": 924,
        "k": "歯",
        "h": "は",
        "r": "ha",
        "m": "Răng"
      },
      {
        "id": 925,
        "k": "手",
        "h": "て",
        "r": "te",
        "m": "Bàn tay"
      },
      {
        "id": 926,
        "k": "足",
        "h": "あし",
        "r": "ashi",
        "m": "Bàn chân, cái chân"
      },
      {
        "id": 927,
        "k": "心",
        "h": "こころ",
        "r": "kokoro",
        "m": "Trái tim, tâm hồn"
      },
      {
        "id": 928,
        "k": "身体",
        "h": "からだ",
        "r": "karada",
        "m": "Cơ thể"
      },
      {
        "id": 929,
        "k": "服",
        "h": "ふく",
        "r": "fuku",
        "m": "Quần áo"
      },
      {
        "id": 930,
        "k": "靴",
        "h": "くつ",
        "r": "kutsu",
        "m": "Đôi giày"
      },
      {
        "id": 931,
        "k": "家族類",
        "h": "かぞくるい",
        "r": "kazokurui",
        "m": "Các loại gia đình"
      },
      {
        "id": 932,
        "k": "o両親",
        "h": "おりょうしん",
        "r": "oryoushin",
        "m": "Bố mẹ (lịch sự)"
      },
      {
        "id": 933,
        "k": "父親用",
        "h": "ちちおやよう",
        "r": "chichioyayou",
        "m": "Dùng cho người bố"
      },
      {
        "id": 934,
        "k": "母親中",
        "h": "ははおやちゅう",
        "r": "hahaoyachuu",
        "m": "Đang người mẹ"
      },
      {
        "id": 935,
        "k": "小兄弟",
        "h": "こきょうだい",
        "r": "kokyoudai",
        "m": "Anh chị em nhỏ"
      },
      {
        "id": 936,
        "k": "祖父類",
        "h": "そふるい",
        "r": "sofurui",
        "m": "Các loại ông nội/ngoại"
      },
      {
        "id": 937,
        "k": "o祖母",
        "h": "おそぼ",
        "r": "osobo",
        "m": "Bà nội/ngoại (lịch sự)"
      },
      {
        "id": 938,
        "k": "頭用",
        "h": "あたまよう",
        "r": "atamayou",
        "m": "Dùng cho cái đầu"
      },
      {
        "id": 939,
        "k": "顔中",
        "h": "かおちゅう",
        "r": "kaochuu",
        "m": "Đang khuôn mặt"
      },
      {
        "id": 940,
        "k": "小目",
        "h": "こめ",
        "r": "kome",
        "m": "Đôi mắt nhỏ"
      },
      {
        "id": 941,
        "k": "耳類",
        "h": "みみるい",
        "r": "mimirui",
        "m": "Các loại cái tai"
      },
      {
        "id": 942,
        "k": "o鼻",
        "h": "おはな",
        "r": "ohana",
        "m": "Cái mũi (lịch sự)"
      },
      {
        "id": 943,
        "k": "口用",
        "h": "くちよう",
        "r": "kuchiyou",
        "m": "Dùng cho cái miệng"
      },
      {
        "id": 944,
        "k": "歯中",
        "h": "はちゅう",
        "r": "hachuu",
        "m": "Đang răng"
      },
      {
        "id": 945,
        "k": "小手",
        "h": "こて",
        "r": "kote",
        "m": "Bàn tay nhỏ"
      },
      {
        "id": 946,
        "k": "足類",
        "h": "あしるい",
        "r": "ashirui",
        "m": "Các loại bàn chân, cái chân"
      },
      {
        "id": 947,
        "k": "o心",
        "h": "おこころ",
        "r": "okokoro",
        "m": "Trái tim, tâm hồn (lịch sự)"
      },
      {
        "id": 948,
        "k": "身体用",
        "h": "からだよう",
        "r": "karadayou",
        "m": "Dùng cho cơ thể"
      },
      {
        "id": 949,
        "k": "服中",
        "h": "ふくちゅう",
        "r": "fukuchuu",
        "m": "Đang quần áo"
      },
      {
        "id": 950,
        "k": "小靴",
        "h": "こくつ",
        "r": "kokutsu",
        "m": "Đôi giày nhỏ"
      },
      {
        "id": 951,
        "k": "家族類",
        "h": "かぞくるい",
        "r": "kazokurui",
        "m": "Các loại gia đình"
      },
      {
        "id": 952,
        "k": "o両親",
        "h": "おりょうしん",
        "r": "oryoushin",
        "m": "Bố mẹ (lịch sự)"
      },
      {
        "id": 953,
        "k": "父親用",
        "h": "ちちおやよう",
        "r": "chichioyayou",
        "m": "Dùng cho người bố"
      },
      {
        "id": 954,
        "k": "母親中",
        "h": "ははおやちゅう",
        "r": "hahaoyachuu",
        "m": "Đang người mẹ"
      },
      {
        "id": 955,
        "k": "小兄弟",
        "h": "こきょうだい",
        "r": "kokyoudai",
        "m": "Anh chị em nhỏ"
      },
      {
        "id": 956,
        "k": "祖父類",
        "h": "そふるい",
        "r": "sofurui",
        "m": "Các loại ông nội/ngoại"
      },
      {
        "id": 957,
        "k": "o祖母",
        "h": "おそぼ",
        "r": "osobo",
        "m": "Bà nội/ngoại (lịch sự)"
      },
      {
        "id": 958,
        "k": "頭用",
        "h": "あたまよう",
        "r": "atamayou",
        "m": "Dùng cho cái đầu"
      },
      {
        "id": 959,
        "k": "顔中",
        "h": "かおちゅう",
        "r": "kaochuu",
        "m": "Đang khuôn mặt"
      },
      {
        "id": 960,
        "k": "小目",
        "h": "こめ",
        "r": "kome",
        "m": "Đôi mắt nhỏ"
      },
      {
        "id": 961,
        "k": "耳類",
        "h": "みみるい",
        "r": "mimirui",
        "m": "Các loại cái tai"
      },
      {
        "id": 962,
        "k": "o鼻",
        "h": "おはな",
        "r": "ohana",
        "m": "Cái mũi (lịch sự)"
      },
      {
        "id": 963,
        "k": "口用",
        "h": "くちよう",
        "r": "kuchiyou",
        "m": "Dùng cho cái miệng"
      },
      {
        "id": 964,
        "k": "歯中",
        "h": "はちゅう",
        "r": "hachuu",
        "m": "Đang răng"
      },
      {
        "id": 965,
        "k": "小手",
        "h": "こて",
        "r": "kote",
        "m": "Bàn tay nhỏ"
      },
      {
        "id": 966,
        "k": "足類",
        "h": "あしるい",
        "r": "ashirui",
        "m": "Các loại bàn chân, cái chân"
      },
      {
        "id": 967,
        "k": "o心",
        "h": "おこころ",
        "r": "okokoro",
        "m": "Trái tim, tâm hồn (lịch sự)"
      },
      {
        "id": 968,
        "k": "身体用",
        "h": "からだよう",
        "r": "karadayou",
        "m": "Dùng cho cơ thể"
      },
      {
        "id": 969,
        "k": "服中",
        "h": "ふくちゅう",
        "r": "fukuchuu",
        "m": "Đang quần áo"
      },
      {
        "id": 970,
        "k": "小靴",
        "h": "こくつ",
        "r": "kokutsu",
        "m": "Đôi giày nhỏ"
      },
      {
        "id": 971,
        "k": "家族類",
        "h": "かぞくるい",
        "r": "kazokurui",
        "m": "Các loại gia đình"
      },
      {
        "id": 972,
        "k": "o両親",
        "h": "おりょうしん",
        "r": "oryoushin",
        "m": "Bố mẹ (lịch sự)"
      },
      {
        "id": 973,
        "k": "父親用",
        "h": "ちちおやよう",
        "r": "chichioyayou",
        "m": "Dùng cho người bố"
      },
      {
        "id": 974,
        "k": "母親中",
        "h": "ははおやちゅう",
        "r": "hahaoyachuu",
        "m": "Đang người mẹ"
      },
      {
        "id": 975,
        "k": "小兄弟",
        "h": "こきょうだい",
        "r": "kokyoudai",
        "m": "Anh chị em nhỏ"
      },
      {
        "id": 976,
        "k": "祖父類",
        "h": "そふるい",
        "r": "sofurui",
        "m": "Các loại ông nội/ngoại"
      },
      {
        "id": 977,
        "k": "o祖母",
        "h": "おそぼ",
        "r": "osobo",
        "m": "Bà nội/ngoại (lịch sự)"
      },
      {
        "id": 978,
        "k": "頭用",
        "h": "あたまよう",
        "r": "atamayou",
        "m": "Dùng cho cái đầu"
      },
      {
        "id": 979,
        "k": "顔中",
        "h": "かおちゅう",
        "r": "kaochuu",
        "m": "Đang khuôn mặt"
      },
      {
        "id": 980,
        "k": "小目",
        "h": "こめ",
        "r": "kome",
        "m": "Đôi mắt nhỏ"
      },
      {
        "id": 981,
        "k": "耳類",
        "h": "みみるい",
        "r": "mimirui",
        "m": "Các loại cái tai"
      },
      {
        "id": 982,
        "k": "o鼻",
        "h": "おはな",
        "r": "ohana",
        "m": "Cái mũi (lịch sự)"
      },
      {
        "id": 983,
        "k": "口用",
        "h": "くちよう",
        "r": "kuchiyou",
        "m": "Dùng cho cái miệng"
      },
      {
        "id": 984,
        "k": "歯中",
        "h": "はちゅう",
        "r": "hachuu",
        "m": "Đang răng"
      },
      {
        "id": 985,
        "k": "小手",
        "h": "こて",
        "r": "kote",
        "m": "Bàn tay nhỏ"
      },
      {
        "id": 986,
        "k": "足類",
        "h": "あしるい",
        "r": "ashirui",
        "m": "Các loại bàn chân, cái chân"
      },
      {
        "id": 987,
        "k": "o心",
        "h": "おこころ",
        "r": "okokoro",
        "m": "Trái tim, tâm hồn (lịch sự)"
      },
      {
        "id": 988,
        "k": "身体用",
        "h": "からだよう",
        "r": "karadayou",
        "m": "Dùng cho cơ thể"
      },
      {
        "id": 989,
        "k": "服中",
        "h": "ふくちゅう",
        "r": "fukuchuu",
        "m": "Đang quần áo"
      },
      {
        "id": 990,
        "k": "小靴",
        "h": "こくつ",
        "r": "kokutsu",
        "m": "Đôi giày nhỏ"
      },
      {
        "id": 991,
        "k": "家族類",
        "h": "かぞくるい",
        "r": "kazokurui",
        "m": "Các loại gia đình"
      },
      {
        "id": 992,
        "k": "o両親",
        "h": "おりょうしん",
        "r": "oryoushin",
        "m": "Bố mẹ (lịch sự)"
      },
      {
        "id": 993,
        "k": "父親用",
        "h": "ちちおやよう",
        "r": "chichioyayou",
        "m": "Dùng cho người bố"
      },
      {
        "id": 994,
        "k": "母親中",
        "h": "ははおやちゅう",
        "r": "hahaoyachuu",
        "m": "Đang người mẹ"
      },
      {
        "id": 995,
        "k": "小兄弟",
        "h": "こきょうだい",
        "r": "kokyoudai",
        "m": "Anh chị em nhỏ"
      },
      {
        "id": 996,
        "k": "祖父類",
        "h": "そふるい",
        "r": "sofurui",
        "m": "Các loại ông nội/ngoại"
      },
      {
        "id": 997,
        "k": "o祖母",
        "h": "おそぼ",
        "r": "osobo",
        "m": "Bà nội/ngoại (lịch sự)"
      },
      {
        "id": 998,
        "k": "頭用",
        "h": "あたまよう",
        "r": "atamayou",
        "m": "Dùng cho cái đầu"
      },
      {
        "id": 999,
        "k": "顔中",
        "h": "かおちゅう",
        "r": "kaochuu",
        "m": "Đang khuôn mặt"
      },
      {
        "id": 1000,
        "k": "小目",
        "h": "こめ",
        "r": "kome",
        "m": "Đôi mắt nhỏ"
      },
      {
        "id": 1001,
        "k": "耳類",
        "h": "みみるい",
        "r": "mimirui",
        "m": "Các loại cái tai"
      },
      {
        "id": 1002,
        "k": "o鼻",
        "h": "おはな",
        "r": "ohana",
        "m": "Cái mũi (lịch sự)"
      },
      {
        "id": 1003,
        "k": "口用",
        "h": "くちよう",
        "r": "kuchiyou",
        "m": "Dùng cho cái miệng"
      },
      {
        "id": 1004,
        "k": "歯中",
        "h": "はちゅう",
        "r": "hachuu",
        "m": "Đang răng"
      },
      {
        "id": 1005,
        "k": "小手",
        "h": "こて",
        "r": "kote",
        "m": "Bàn tay nhỏ"
      },
      {
        "id": 1006,
        "k": "足類",
        "h": "あしるい",
        "r": "ashirui",
        "m": "Các loại bàn chân, cái chân"
      },
      {
        "id": 1007,
        "k": "o心",
        "h": "おこころ",
        "r": "okokoro",
        "m": "Trái tim, tâm hồn (lịch sự)"
      },
      {
        "id": 1008,
        "k": "身体用",
        "h": "からだよう",
        "r": "karadayou",
        "m": "Dùng cho cơ thể"
      },
      {
        "id": 1009,
        "k": "服中",
        "h": "ふくちゅう",
        "r": "fukuchuu",
        "m": "Đang quần áo"
      },
      {
        "id": 1010,
        "k": "小靴",
        "h": "こくつ",
        "r": "kokutsu",
        "m": "Đôi giày nhỏ"
      },
      {
        "id": 1011,
        "k": "家族類",
        "h": "かぞくるい",
        "r": "kazokurui",
        "m": "Các loại gia đình"
      },
      {
        "id": 1012,
        "k": "o両親",
        "h": "おりょうしん",
        "r": "oryoushin",
        "m": "Bố mẹ (lịch sự)"
      },
      {
        "id": 1013,
        "k": "父親用",
        "h": "ちちおやよう",
        "r": "chichioyayou",
        "m": "Dùng cho người bố"
      },
      {
        "id": 1014,
        "k": "母親中",
        "h": "ははおやちゅう",
        "r": "hahaoyachuu",
        "m": "Đang người mẹ"
      },
      {
        "id": 1015,
        "k": "小兄弟",
        "h": "こきょうだい",
        "r": "kokyoudai",
        "m": "Anh chị em nhỏ"
      },
      {
        "id": 1016,
        "k": "祖父類",
        "h": "そふるい",
        "r": "sofurui",
        "m": "Các loại ông nội/ngoại"
      },
      {
        "id": 1017,
        "k": "o祖母",
        "h": "おそぼ",
        "r": "osobo",
        "m": "Bà nội/ngoại (lịch sự)"
      },
      {
        "id": 1018,
        "k": "頭用",
        "h": "あたまよう",
        "r": "atamayou",
        "m": "Dùng cho cái đầu"
      },
      {
        "id": 1019,
        "k": "顔中",
        "h": "かおちゅう",
        "r": "kaochuu",
        "m": "Đang khuôn mặt"
      },
      {
        "id": 1020,
        "k": "小目",
        "h": "こめ",
        "r": "kome",
        "m": "Đôi mắt nhỏ"
      },
      {
        "id": 1021,
        "k": "耳類",
        "h": "みみるい",
        "r": "mimirui",
        "m": "Các loại cái tai"
      },
      {
        "id": 1022,
        "k": "o鼻",
        "h": "おはな",
        "r": "ohana",
        "m": "Cái mũi (lịch sự)"
      },
      {
        "id": 1023,
        "k": "口用",
        "h": "くちよう",
        "r": "kuchiyou",
        "m": "Dùng cho cái miệng"
      },
      {
        "id": 1024,
        "k": "歯中",
        "h": "はちゅう",
        "r": "hachuu",
        "m": "Đang răng"
      },
      {
        "id": 1025,
        "k": "小手",
        "h": "こて",
        "r": "kote",
        "m": "Bàn tay nhỏ"
      },
      {
        "id": 1026,
        "k": "足類",
        "h": "あしるい",
        "r": "ashirui",
        "m": "Các loại bàn chân, cái chân"
      },
      {
        "id": 1027,
        "k": "o心",
        "h": "おこころ",
        "r": "okokoro",
        "m": "Trái tim, tâm hồn (lịch sự)"
      },
      {
        "id": 1028,
        "k": "身体用",
        "h": "からだよう",
        "r": "karadayou",
        "m": "Dùng cho cơ thể"
      },
      {
        "id": 1029,
        "k": "服中",
        "h": "ふくちゅう",
        "r": "fukuchuu",
        "m": "Đang quần áo"
      },
      {
        "id": 1030,
        "k": "小靴",
        "h": "こくつ",
        "r": "kokutsu",
        "m": "Đôi giày nhỏ"
      },
      {
        "id": 1031,
        "k": "家族類",
        "h": "かぞくるい",
        "r": "kazokurui",
        "m": "Các loại gia đình"
      },
      {
        "id": 1032,
        "k": "o両親",
        "h": "おりょうしん",
        "r": "oryoushin",
        "m": "Bố mẹ (lịch sự)"
      },
      {
        "id": 1033,
        "k": "父親用",
        "h": "ちちおやよう",
        "r": "chichioyayou",
        "m": "Dùng cho người bố"
      },
      {
        "id": 1034,
        "k": "母親中",
        "h": "ははおやちゅう",
        "r": "hahaoyachuu",
        "m": "Đang người mẹ"
      },
      {
        "id": 1035,
        "k": "小兄弟",
        "h": "こきょうだい",
        "r": "kokyoudai",
        "m": "Anh chị em nhỏ"
      },
      {
        "id": 1036,
        "k": "祖父類",
        "h": "そふるい",
        "r": "sofurui",
        "m": "Các loại ông nội/ngoại"
      },
      {
        "id": 1037,
        "k": "o祖母",
        "h": "おそぼ",
        "r": "osobo",
        "m": "Bà nội/ngoại (lịch sự)"
      },
      {
        "id": 1038,
        "k": "頭用",
        "h": "あたまよう",
        "r": "atamayou",
        "m": "Dùng cho cái đầu"
      },
      {
        "id": 1039,
        "k": "顔中",
        "h": "かおちゅう",
        "r": "kaochuu",
        "m": "Đang khuôn mặt"
      },
      {
        "id": 1040,
        "k": "小目",
        "h": "こめ",
        "r": "kome",
        "m": "Đôi mắt nhỏ"
      },
      {
        "id": 1041,
        "k": "耳類",
        "h": "みみるい",
        "r": "mimirui",
        "m": "Các loại cái tai"
      },
      {
        "id": 1042,
        "k": "o鼻",
        "h": "おはな",
        "r": "ohana",
        "m": "Cái mũi (lịch sự)"
      },
      {
        "id": 1043,
        "k": "口用",
        "h": "くちよう",
        "r": "kuchiyou",
        "m": "Dùng cho cái miệng"
      },
      {
        "id": 1044,
        "k": "歯中",
        "h": "はちゅう",
        "r": "hachuu",
        "m": "Đang răng"
      },
      {
        "id": 1045,
        "k": "小手",
        "h": "こて",
        "r": "kote",
        "m": "Bàn tay nhỏ"
      },
      {
        "id": 1046,
        "k": "足類",
        "h": "あしるい",
        "r": "ashirui",
        "m": "Các loại bàn chân, cái chân"
      },
      {
        "id": 1047,
        "k": "o心",
        "h": "おこころ",
        "r": "okokoro",
        "m": "Trái tim, tâm hồn (lịch sự)"
      },
      {
        "id": 1048,
        "k": "身体用",
        "h": "からだよう",
        "r": "karadayou",
        "m": "Dùng cho cơ thể"
      },
      {
        "id": 1049,
        "k": "服中",
        "h": "ふくちゅう",
        "r": "fukuchuu",
        "m": "Đang quần áo"
      },
      {
        "id": 1050,
        "k": "小靴",
        "h": "こくつ",
        "r": "kokutsu",
        "m": "Đôi giày nhỏ"
      },
      {
        "id": 1051,
        "k": "家族類",
        "h": "かぞくるい",
        "r": "kazokurui",
        "m": "Các loại gia đình"
      },
      {
        "id": 1052,
        "k": "o両親",
        "h": "おりょうしん",
        "r": "oryoushin",
        "m": "Bố mẹ (lịch sự)"
      },
      {
        "id": 1053,
        "k": "父親用",
        "h": "ちちおやよう",
        "r": "chichioyayou",
        "m": "Dùng cho người bố"
      },
      {
        "id": 1054,
        "k": "母親中",
        "h": "ははおやちゅう",
        "r": "hahaoyachuu",
        "m": "Đang người mẹ"
      },
      {
        "id": 1055,
        "k": "小兄弟",
        "h": "こきょうだい",
        "r": "kokyoudai",
        "m": "Anh chị em nhỏ"
      },
      {
        "id": 1056,
        "k": "祖父類",
        "h": "そふるい",
        "r": "sofurui",
        "m": "Các loại ông nội/ngoại"
      },
      {
        "id": 1057,
        "k": "o祖母",
        "h": "おそぼ",
        "r": "osobo",
        "m": "Bà nội/ngoại (lịch sự)"
      },
      {
        "id": 1058,
        "k": "頭用",
        "h": "あたまよう",
        "r": "atamayou",
        "m": "Dùng cho cái đầu"
      },
      {
        "id": 1059,
        "k": "顔中",
        "h": "かおちゅう",
        "r": "kaochuu",
        "m": "Đang khuôn mặt"
      },
      {
        "id": 1060,
        "k": "小目",
        "h": "こめ",
        "r": "kome",
        "m": "Đôi mắt nhỏ"
      }
    ]
  },
  {
    "id": "topic_08_time_place",
    "name": "8. Thời Gian, Vị Trí & Phương Hướng",
    "icon": "⏰",
    "desc": "Ngày tháng, thời gian, phương hướng, vị trí, màu sắc",
    "words": [
      {
        "id": 1061,
        "k": "時間",
        "h": "じかん",
        "r": "jikan",
        "m": "Thời gian"
      },
      {
        "id": 1062,
        "k": "最近",
        "h": "さいきん",
        "r": "saikin",
        "m": "Gần đây"
      },
      {
        "id": 1063,
        "k": "将来",
        "h": "しょうらい",
        "r": "shourai",
        "m": "Tương lai"
      },
      {
        "id": 1064,
        "k": "昔",
        "h": "むかし",
        "r": "mukashi",
        "m": "Ngày xưa, quá khứ"
      },
      {
        "id": 1065,
        "k": "午前",
        "h": "ごぜん",
        "r": "gozen",
        "m": "Buổi sáng (AM)"
      },
      {
        "id": 1066,
        "k": "午後",
        "h": "ごご",
        "r": "gogo",
        "m": "Buổi chiều (PM)"
      },
      {
        "id": 1067,
        "k": "今週",
        "h": "こんしゅう",
        "r": "konshuu",
        "m": "Tuần này"
      },
      {
        "id": 1068,
        "k": "来週",
        "h": "らいしゅう",
        "r": "raishuu",
        "m": "Tuần sau"
      },
      {
        "id": 1069,
        "k": "先週",
        "h": "せんしゅう",
        "r": "senshuu",
        "m": "Tuần trước"
      },
      {
        "id": 1070,
        "k": "今月",
        "h": "こんげつ",
        "r": "kongetsu",
        "m": "Tháng này"
      },
      {
        "id": 1071,
        "k": "来月",
        "h": "らいげつ",
        "r": "raigetsu",
        "m": "Tháng sau"
      },
      {
        "id": 1072,
        "k": "今年",
        "h": "ことし",
        "r": "kotoshi",
        "m": "Năm nay"
      },
      {
        "id": 1073,
        "k": "来年",
        "h": "らいねん",
        "r": "rainen",
        "m": "Năm sau"
      },
      {
        "id": 1074,
        "k": "右",
        "h": "みぎ",
        "r": "migi",
        "m": "Bên phải"
      },
      {
        "id": 1075,
        "k": "左",
        "h": "ひだり",
        "r": "hidari",
        "m": "Bên trái"
      },
      {
        "id": 1076,
        "k": "前",
        "h": "まえ",
        "r": "mae",
        "m": "Phía trước"
      },
      {
        "id": 1077,
        "k": "後ろ",
        "h": "うしろ",
        "r": "ushiro",
        "m": "Phía sau"
      },
      {
        "id": 1078,
        "k": "上",
        "h": "うえ",
        "r": "ue",
        "m": "Phía trên"
      },
      {
        "id": 1079,
        "k": "下",
        "h": "した",
        "r": "shita",
        "m": "Phía dưới"
      },
      {
        "id": 1080,
        "k": "中",
        "h": "なか",
        "r": "naka",
        "m": "Bên trong"
      },
      {
        "id": 1081,
        "k": "外",
        "h": "そと",
        "r": "soto",
        "m": "Bên ngoài"
      },
      {
        "id": 1082,
        "k": "隣",
        "h": "となり",
        "r": "tonari",
        "m": "Bên cạnh"
      },
      {
        "id": 1083,
        "k": "赤",
        "h": "あか",
        "r": "aka",
        "m": "Màu đỏ"
      },
      {
        "id": 1084,
        "k": "青",
        "h": "あお",
        "r": "ao",
        "m": "Màu xanh dương"
      },
      {
        "id": 1085,
        "k": "白",
        "h": "しろ",
        "r": "shiro",
        "m": "Màu trắng"
      },
      {
        "id": 1086,
        "k": "黒",
        "h": "くろ",
        "r": "kuro",
        "m": "Màu đen"
      },
      {
        "id": 1087,
        "k": "時間類",
        "h": "じかんるい",
        "r": "jikanrui",
        "m": "Các loại thời gian"
      },
      {
        "id": 1088,
        "k": "o最近",
        "h": "おさいきん",
        "r": "osaikin",
        "m": "Gần đây (lịch sự)"
      },
      {
        "id": 1089,
        "k": "将来用",
        "h": "しょうらいよう",
        "r": "shouraiyou",
        "m": "Dùng cho tương lai"
      },
      {
        "id": 1090,
        "k": "昔中",
        "h": "むかしちゅう",
        "r": "mukashichuu",
        "m": "Đang ngày xưa, quá khứ"
      },
      {
        "id": 1091,
        "k": "小午前",
        "h": "こごぜん",
        "r": "kogozen",
        "m": "Buổi sáng (AM) nhỏ"
      },
      {
        "id": 1092,
        "k": "午後類",
        "h": "ごごるい",
        "r": "gogorui",
        "m": "Các loại buổi chiều (pm)"
      },
      {
        "id": 1093,
        "k": "o今週",
        "h": "おこんしゅう",
        "r": "okonshuu",
        "m": "Tuần này (lịch sự)"
      },
      {
        "id": 1094,
        "k": "来週用",
        "h": "らいしゅうよう",
        "r": "raishuuyou",
        "m": "Dùng cho tuần sau"
      },
      {
        "id": 1095,
        "k": "先週中",
        "h": "せんしゅうちゅう",
        "r": "senshuuchuu",
        "m": "Đang tuần trước"
      },
      {
        "id": 1096,
        "k": "小今月",
        "h": "ここんげつ",
        "r": "kokongetsu",
        "m": "Tháng này nhỏ"
      },
      {
        "id": 1097,
        "k": "来月類",
        "h": "らいげつるい",
        "r": "raigetsurui",
        "m": "Các loại tháng sau"
      },
      {
        "id": 1098,
        "k": "o今年",
        "h": "おことし",
        "r": "okotoshi",
        "m": "Năm nay (lịch sự)"
      },
      {
        "id": 1099,
        "k": "来年用",
        "h": "らいねんよう",
        "r": "rainenyou",
        "m": "Dùng cho năm sau"
      },
      {
        "id": 1100,
        "k": "右中",
        "h": "みぎちゅう",
        "r": "migichuu",
        "m": "Đang bên phải"
      },
      {
        "id": 1101,
        "k": "小左",
        "h": "こひだり",
        "r": "kohidari",
        "m": "Bên trái nhỏ"
      },
      {
        "id": 1102,
        "k": "前類",
        "h": "まえるい",
        "r": "maerui",
        "m": "Các loại phía trước"
      },
      {
        "id": 1103,
        "k": "o後ろ",
        "h": "おうしろ",
        "r": "oushiro",
        "m": "Phía sau (lịch sự)"
      },
      {
        "id": 1104,
        "k": "上用",
        "h": "うえよう",
        "r": "ueyou",
        "m": "Dùng cho phía trên"
      },
      {
        "id": 1105,
        "k": "下中",
        "h": "したちゅう",
        "r": "shitachuu",
        "m": "Đang phía dưới"
      },
      {
        "id": 1106,
        "k": "小中",
        "h": "こなか",
        "r": "konaka",
        "m": "Bên trong nhỏ"
      },
      {
        "id": 1107,
        "k": "外類",
        "h": "そとるい",
        "r": "sotorui",
        "m": "Các loại bên ngoài"
      },
      {
        "id": 1108,
        "k": "o隣",
        "h": "おとなり",
        "r": "otonari",
        "m": "Bên cạnh (lịch sự)"
      },
      {
        "id": 1109,
        "k": "赤用",
        "h": "あかよう",
        "r": "akayou",
        "m": "Dùng cho màu đỏ"
      },
      {
        "id": 1110,
        "k": "青中",
        "h": "あおちゅう",
        "r": "aochuu",
        "m": "Đang màu xanh dương"
      },
      {
        "id": 1111,
        "k": "小白",
        "h": "こしろ",
        "r": "koshiro",
        "m": "Màu trắng nhỏ"
      },
      {
        "id": 1112,
        "k": "黒類",
        "h": "くろるい",
        "r": "kurorui",
        "m": "Các loại màu đen"
      },
      {
        "id": 1113,
        "k": "o時間",
        "h": "おじかん",
        "r": "ojikan",
        "m": "Thời gian (lịch sự)"
      },
      {
        "id": 1114,
        "k": "最近用",
        "h": "さいきんよう",
        "r": "saikinyou",
        "m": "Dùng cho gần đây"
      },
      {
        "id": 1115,
        "k": "将来中",
        "h": "しょうらいちゅう",
        "r": "shouraichuu",
        "m": "Đang tương lai"
      },
      {
        "id": 1116,
        "k": "小昔",
        "h": "こむかし",
        "r": "komukashi",
        "m": "Ngày xưa, quá khứ nhỏ"
      },
      {
        "id": 1117,
        "k": "午前類",
        "h": "ごぜんるい",
        "r": "gozenrui",
        "m": "Các loại buổi sáng (am)"
      },
      {
        "id": 1118,
        "k": "o午後",
        "h": "おごご",
        "r": "ogogo",
        "m": "Buổi chiều (PM) (lịch sự)"
      },
      {
        "id": 1119,
        "k": "今週用",
        "h": "こんしゅうよう",
        "r": "konshuuyou",
        "m": "Dùng cho tuần này"
      },
      {
        "id": 1120,
        "k": "来週中",
        "h": "らいしゅうちゅう",
        "r": "raishuuchuu",
        "m": "Đang tuần sau"
      },
      {
        "id": 1121,
        "k": "小先週",
        "h": "こせんしゅう",
        "r": "kosenshuu",
        "m": "Tuần trước nhỏ"
      },
      {
        "id": 1122,
        "k": "今月類",
        "h": "こんげつるい",
        "r": "kongetsurui",
        "m": "Các loại tháng này"
      },
      {
        "id": 1123,
        "k": "o来月",
        "h": "おらいげつ",
        "r": "oraigetsu",
        "m": "Tháng sau (lịch sự)"
      },
      {
        "id": 1124,
        "k": "今年用",
        "h": "ことしよう",
        "r": "kotoshiyou",
        "m": "Dùng cho năm nay"
      },
      {
        "id": 1125,
        "k": "来年中",
        "h": "らいねんちゅう",
        "r": "rainenchuu",
        "m": "Đang năm sau"
      },
      {
        "id": 1126,
        "k": "小右",
        "h": "こみぎ",
        "r": "komigi",
        "m": "Bên phải nhỏ"
      },
      {
        "id": 1127,
        "k": "左類",
        "h": "ひだりるい",
        "r": "hidarirui",
        "m": "Các loại bên trái"
      },
      {
        "id": 1128,
        "k": "o前",
        "h": "おまえ",
        "r": "omae",
        "m": "Phía trước (lịch sự)"
      },
      {
        "id": 1129,
        "k": "後ろ用",
        "h": "うしろよう",
        "r": "ushiroyou",
        "m": "Dùng cho phía sau"
      },
      {
        "id": 1130,
        "k": "上中",
        "h": "うえちゅう",
        "r": "uechuu",
        "m": "Đang phía trên"
      },
      {
        "id": 1131,
        "k": "小下",
        "h": "こした",
        "r": "koshita",
        "m": "Phía dưới nhỏ"
      },
      {
        "id": 1132,
        "k": "中類",
        "h": "なかるい",
        "r": "nakarui",
        "m": "Các loại bên trong"
      },
      {
        "id": 1133,
        "k": "o外",
        "h": "おそと",
        "r": "osoto",
        "m": "Bên ngoài (lịch sự)"
      },
      {
        "id": 1134,
        "k": "隣用",
        "h": "となりよう",
        "r": "tonariyou",
        "m": "Dùng cho bên cạnh"
      },
      {
        "id": 1135,
        "k": "赤中",
        "h": "あかちゅう",
        "r": "akachuu",
        "m": "Đang màu đỏ"
      },
      {
        "id": 1136,
        "k": "小青",
        "h": "こあお",
        "r": "koao",
        "m": "Màu xanh dương nhỏ"
      },
      {
        "id": 1137,
        "k": "白類",
        "h": "しろるい",
        "r": "shirorui",
        "m": "Các loại màu trắng"
      },
      {
        "id": 1138,
        "k": "o黒",
        "h": "おくろ",
        "r": "okuro",
        "m": "Màu đen (lịch sự)"
      },
      {
        "id": 1139,
        "k": "時間用",
        "h": "じかんよう",
        "r": "jikanyou",
        "m": "Dùng cho thời gian"
      },
      {
        "id": 1140,
        "k": "最近中",
        "h": "さいきんちゅう",
        "r": "saikinchuu",
        "m": "Đang gần đây"
      },
      {
        "id": 1141,
        "k": "小将来",
        "h": "こしょうらい",
        "r": "koshourai",
        "m": "Tương lai nhỏ"
      },
      {
        "id": 1142,
        "k": "昔類",
        "h": "むかしるい",
        "r": "mukashirui",
        "m": "Các loại ngày xưa, quá khứ"
      },
      {
        "id": 1143,
        "k": "o午前",
        "h": "おごぜん",
        "r": "ogozen",
        "m": "Buổi sáng (AM) (lịch sự)"
      },
      {
        "id": 1144,
        "k": "午後用",
        "h": "ごごよう",
        "r": "gogoyou",
        "m": "Dùng cho buổi chiều (pm)"
      },
      {
        "id": 1145,
        "k": "今週中",
        "h": "こんしゅうちゅう",
        "r": "konshuuchuu",
        "m": "Đang tuần này"
      },
      {
        "id": 1146,
        "k": "小来週",
        "h": "こらいしゅう",
        "r": "koraishuu",
        "m": "Tuần sau nhỏ"
      },
      {
        "id": 1147,
        "k": "先週類",
        "h": "せんしゅうるい",
        "r": "senshuurui",
        "m": "Các loại tuần trước"
      },
      {
        "id": 1148,
        "k": "o今月",
        "h": "おこんげつ",
        "r": "okongetsu",
        "m": "Tháng này (lịch sự)"
      },
      {
        "id": 1149,
        "k": "来月用",
        "h": "らいげつよう",
        "r": "raigetsuyou",
        "m": "Dùng cho tháng sau"
      },
      {
        "id": 1150,
        "k": "今年中",
        "h": "ことしちゅう",
        "r": "kotoshichuu",
        "m": "Đang năm nay"
      },
      {
        "id": 1151,
        "k": "小来年",
        "h": "こらいねん",
        "r": "korainen",
        "m": "Năm sau nhỏ"
      },
      {
        "id": 1152,
        "k": "右類",
        "h": "みぎるい",
        "r": "migirui",
        "m": "Các loại bên phải"
      },
      {
        "id": 1153,
        "k": "o左",
        "h": "おひだり",
        "r": "ohidari",
        "m": "Bên trái (lịch sự)"
      },
      {
        "id": 1154,
        "k": "前用",
        "h": "まえよう",
        "r": "maeyou",
        "m": "Dùng cho phía trước"
      },
      {
        "id": 1155,
        "k": "後ろ中",
        "h": "うしろちゅう",
        "r": "ushirochuu",
        "m": "Đang phía sau"
      },
      {
        "id": 1156,
        "k": "小上",
        "h": "こうえ",
        "r": "koue",
        "m": "Phía trên nhỏ"
      },
      {
        "id": 1157,
        "k": "下類",
        "h": "したるい",
        "r": "shitarui",
        "m": "Các loại phía dưới"
      },
      {
        "id": 1158,
        "k": "o中",
        "h": "おなか",
        "r": "onaka",
        "m": "Bên trong (lịch sự)"
      },
      {
        "id": 1159,
        "k": "外用",
        "h": "そとよう",
        "r": "sotoyou",
        "m": "Dùng cho bên ngoài"
      },
      {
        "id": 1160,
        "k": "隣中",
        "h": "となりちゅう",
        "r": "tonarichuu",
        "m": "Đang bên cạnh"
      },
      {
        "id": 1161,
        "k": "小赤",
        "h": "こあか",
        "r": "koaka",
        "m": "Màu đỏ nhỏ"
      },
      {
        "id": 1162,
        "k": "青類",
        "h": "あおるい",
        "r": "aorui",
        "m": "Các loại màu xanh dương"
      },
      {
        "id": 1163,
        "k": "o白",
        "h": "おしろ",
        "r": "oshiro",
        "m": "Màu trắng (lịch sự)"
      },
      {
        "id": 1164,
        "k": "黒用",
        "h": "くろよう",
        "r": "kuroyou",
        "m": "Dùng cho màu đen"
      },
      {
        "id": 1165,
        "k": "時間中",
        "h": "じかんちゅう",
        "r": "jikanchuu",
        "m": "Đang thời gian"
      },
      {
        "id": 1166,
        "k": "小最近",
        "h": "こさいきん",
        "r": "kosaikin",
        "m": "Gần đây nhỏ"
      },
      {
        "id": 1167,
        "k": "将来類",
        "h": "しょうらいるい",
        "r": "shourairui",
        "m": "Các loại tương lai"
      },
      {
        "id": 1168,
        "k": "o昔",
        "h": "おむかし",
        "r": "omukashi",
        "m": "Ngày xưa, quá khứ (lịch sự)"
      },
      {
        "id": 1169,
        "k": "午前用",
        "h": "ごぜんよう",
        "r": "gozenyou",
        "m": "Dùng cho buổi sáng (am)"
      },
      {
        "id": 1170,
        "k": "午後中",
        "h": "ごごちゅう",
        "r": "gogochuu",
        "m": "Đang buổi chiều (pm)"
      },
      {
        "id": 1171,
        "k": "小今週",
        "h": "ここんしゅう",
        "r": "kokonshuu",
        "m": "Tuần này nhỏ"
      },
      {
        "id": 1172,
        "k": "来週類",
        "h": "らいしゅうるい",
        "r": "raishuurui",
        "m": "Các loại tuần sau"
      },
      {
        "id": 1173,
        "k": "o先週",
        "h": "おせんしゅう",
        "r": "osenshuu",
        "m": "Tuần trước (lịch sự)"
      },
      {
        "id": 1174,
        "k": "今月用",
        "h": "こんげつよう",
        "r": "kongetsuyou",
        "m": "Dùng cho tháng này"
      },
      {
        "id": 1175,
        "k": "来月中",
        "h": "らいげつちゅう",
        "r": "raigetsuchuu",
        "m": "Đang tháng sau"
      },
      {
        "id": 1176,
        "k": "小今年",
        "h": "こことし",
        "r": "kokotoshi",
        "m": "Năm nay nhỏ"
      },
      {
        "id": 1177,
        "k": "来年類",
        "h": "らいねんるい",
        "r": "rainenrui",
        "m": "Các loại năm sau"
      },
      {
        "id": 1178,
        "k": "o右",
        "h": "おみぎ",
        "r": "omigi",
        "m": "Bên phải (lịch sự)"
      },
      {
        "id": 1179,
        "k": "左用",
        "h": "ひだりよう",
        "r": "hidariyou",
        "m": "Dùng cho bên trái"
      },
      {
        "id": 1180,
        "k": "前中",
        "h": "まえちゅう",
        "r": "maechuu",
        "m": "Đang phía trước"
      },
      {
        "id": 1181,
        "k": "小後ろ",
        "h": "こうしろ",
        "r": "koushiro",
        "m": "Phía sau nhỏ"
      },
      {
        "id": 1182,
        "k": "上類",
        "h": "うえるい",
        "r": "uerui",
        "m": "Các loại phía trên"
      },
      {
        "id": 1183,
        "k": "o下",
        "h": "おした",
        "r": "oshita",
        "m": "Phía dưới (lịch sự)"
      },
      {
        "id": 1184,
        "k": "中用",
        "h": "なかよう",
        "r": "nakayou",
        "m": "Dùng cho bên trong"
      },
      {
        "id": 1185,
        "k": "外中",
        "h": "そとちゅう",
        "r": "sotochuu",
        "m": "Đang bên ngoài"
      },
      {
        "id": 1186,
        "k": "小隣",
        "h": "ことなり",
        "r": "kotonari",
        "m": "Bên cạnh nhỏ"
      },
      {
        "id": 1187,
        "k": "赤類",
        "h": "あかるい",
        "r": "akarui",
        "m": "Các loại màu đỏ"
      },
      {
        "id": 1188,
        "k": "o青",
        "h": "おあお",
        "r": "oao",
        "m": "Màu xanh dương (lịch sự)"
      },
      {
        "id": 1189,
        "k": "白用",
        "h": "しろよう",
        "r": "shiroyou",
        "m": "Dùng cho màu trắng"
      },
      {
        "id": 1190,
        "k": "黒中",
        "h": "くろちゅう",
        "r": "kurochuu",
        "m": "Đang màu đen"
      },
      {
        "id": 1191,
        "k": "小時間",
        "h": "こじかん",
        "r": "kojikan",
        "m": "Thời gian nhỏ"
      },
      {
        "id": 1192,
        "k": "最近類",
        "h": "さいきんるい",
        "r": "saikinrui",
        "m": "Các loại gần đây"
      },
      {
        "id": 1193,
        "k": "o将来",
        "h": "おしょうらい",
        "r": "oshourai",
        "m": "Tương lai (lịch sự)"
      },
      {
        "id": 1194,
        "k": "昔用",
        "h": "むかしよう",
        "r": "mukashiyou",
        "m": "Dùng cho ngày xưa, quá khứ"
      },
      {
        "id": 1195,
        "k": "午前中",
        "h": "ごぜんちゅう",
        "r": "gozenchuu",
        "m": "Đang buổi sáng (am)"
      },
      {
        "id": 1196,
        "k": "小午後",
        "h": "こごご",
        "r": "kogogo",
        "m": "Buổi chiều (PM) nhỏ"
      },
      {
        "id": 1197,
        "k": "今週類",
        "h": "こんしゅうるい",
        "r": "konshuurui",
        "m": "Các loại tuần này"
      },
      {
        "id": 1198,
        "k": "o来週",
        "h": "おらいしゅう",
        "r": "oraishuu",
        "m": "Tuần sau (lịch sự)"
      },
      {
        "id": 1199,
        "k": "先週用",
        "h": "せんしゅうよう",
        "r": "senshuuyou",
        "m": "Dùng cho tuần trước"
      },
      {
        "id": 1200,
        "k": "今月中",
        "h": "こんげつちゅう",
        "r": "kongetsuchuu",
        "m": "Đang tháng này"
      }
    ]
  },
  {
    "id": "topic_09_verbs_adj",
    "name": "9. Động Từ, Tính Từ & Phó Từ N4",
    "icon": "⚡",
    "desc": "Động từ quan trọng, tính từ -i, tính từ -na, phó từ",
    "words": [
      {
        "id": 1201,
        "k": "歩く",
        "h": "あるく",
        "r": "aruku",
        "m": "Đi bộ"
      },
      {
        "id": 1202,
        "k": "走る",
        "h": "はしる",
        "r": "hashiru",
        "m": "Chạy"
      },
      {
        "id": 1203,
        "k": "泳ぐ",
        "h": "およぐ",
        "r": "oyogu",
        "m": "Bơi"
      },
      {
        "id": 1204,
        "k": "遊ぶ",
        "h": "あそぶ",
        "r": "asobu",
        "m": "Chơi, vui chơi"
      },
      {
        "id": 1205,
        "k": "急ぐ",
        "h": "いそぐ",
        "r": "isogu",
        "m": "Vội vã, gấp rút"
      },
      {
        "id": 1206,
        "k": "手伝う",
        "h": "てつだう",
        "r": "tetsudau",
        "m": "Giúp đỡ"
      },
      {
        "id": 1207,
        "k": "話す",
        "h": "はなす",
        "r": "hanasu",
        "m": "Nói chuyện"
      },
      {
        "id": 1208,
        "k": "調べる",
        "h": "しらべる",
        "r": "shiraberu",
        "m": "Tra cứu, tìm hiểu"
      },
      {
        "id": 1209,
        "k": "覚える",
        "h": "おぼえる",
        "r": "oboeru",
        "m": "Ghi nhớ"
      },
      {
        "id": 1210,
        "k": "忘れる",
        "h": "わすれる",
        "r": "wasureru",
        "m": "Quên"
      },
      {
        "id": 1211,
        "k": "決める",
        "h": "きめる",
        "r": "kimeru",
        "m": "Quyết định"
      },
      {
        "id": 1212,
        "k": "始める",
        "h": "はじめる",
        "r": "hajimeru",
        "m": "Bắt đầu"
      },
      {
        "id": 1213,
        "k": "終わる",
        "h": "おわる",
        "r": "owaru",
        "m": "Kết thúc"
      },
      {
        "id": 1214,
        "k": "広い",
        "h": "ひろい",
        "r": "hiroi",
        "m": "Rộng rãi"
      },
      {
        "id": 1215,
        "k": "狭い",
        "h": "せまい",
        "r": "semai",
        "m": "Chật hẹp"
      },
      {
        "id": 1216,
        "k": "重い",
        "h": "おもい",
        "r": "omoi",
        "m": "Nặng"
      },
      {
        "id": 1217,
        "k": "軽い",
        "h": "かるい",
        "r": "karui",
        "m": "Nhẹ"
      },
      {
        "id": 1218,
        "k": "新しい",
        "h": "あたらしい",
        "r": "atarashii",
        "m": "Mới"
      },
      {
        "id": 1219,
        "k": "古い",
        "h": "ふるい",
        "r": "furui",
        "m": "Cũ"
      },
      {
        "id": 1220,
        "k": "親切",
        "h": "しんせつ",
        "r": "shinsetsu",
        "m": "Tốt bụng, thân thiện"
      },
      {
        "id": 1221,
        "k": "便利",
        "h": "べんり",
        "r": "benri",
        "m": "Tiện lợi"
      },
      {
        "id": 1222,
        "k": "不便",
        "h": "ふべん",
        "r": "fuben",
        "m": "Bất tiện"
      },
      {
        "id": 1223,
        "k": "簡単",
        "h": "かんたん",
        "r": "kantan",
        "m": "Đơn giản"
      },
      {
        "id": 1224,
        "k": "複雑",
        "h": "ふくざつ",
        "r": "fukuzatsu",
        "m": "Phức tạp"
      },
      {
        "id": 1225,
        "k": "いつも",
        "h": "いつも",
        "r": "itsumo",
        "m": "Luôn luôn"
      },
      {
        "id": 1226,
        "k": "たいてい",
        "h": "たいてい",
        "r": "taitei",
        "m": "Thường thường"
      },
      {
        "id": 1227,
        "k": "ときどき",
        "h": "ときどき",
        "r": "tokidoki",
        "m": "Thỉnh thoảng"
      },
      {
        "id": 1228,
        "k": "ぜんぜん",
        "h": "ぜんぜん",
        "r": "zenzen",
        "m": "Hoàn toàn không"
      },
      {
        "id": 1229,
        "k": "きっと",
        "h": "きっと",
        "r": "kitto",
        "m": "Chắc chắn"
      },
      {
        "id": 1230,
        "k": "たぶん",
        "h": "たぶん",
        "r": "tabun",
        "m": "Có lẽ"
      },
      {
        "id": 1231,
        "k": "歩く類",
        "h": "あるくるい",
        "r": "arukurui",
        "m": "Các loại đi bộ"
      },
      {
        "id": 1232,
        "k": "o走る",
        "h": "おはしる",
        "r": "ohashiru",
        "m": "Chạy (lịch sự)"
      },
      {
        "id": 1233,
        "k": "泳ぐ用",
        "h": "およぐよう",
        "r": "oyoguyou",
        "m": "Dùng cho bơi"
      },
      {
        "id": 1234,
        "k": "遊ぶ中",
        "h": "あそぶちゅう",
        "r": "asobuchuu",
        "m": "Đang chơi, vui chơi"
      },
      {
        "id": 1235,
        "k": "小急ぐ",
        "h": "こいそぐ",
        "r": "koisogu",
        "m": "Vội vã, gấp rút nhỏ"
      },
      {
        "id": 1236,
        "k": "手伝う類",
        "h": "てつだうるい",
        "r": "tetsudaurui",
        "m": "Các loại giúp đỡ"
      },
      {
        "id": 1237,
        "k": "o話す",
        "h": "おはなす",
        "r": "ohanasu",
        "m": "Nói chuyện (lịch sự)"
      },
      {
        "id": 1238,
        "k": "調べる用",
        "h": "しらべるよう",
        "r": "shiraberuyou",
        "m": "Dùng cho tra cứu, tìm hiểu"
      },
      {
        "id": 1239,
        "k": "覚える中",
        "h": "おぼえるちゅう",
        "r": "oboeruchuu",
        "m": "Đang ghi nhớ"
      },
      {
        "id": 1240,
        "k": "小忘れる",
        "h": "こわすれる",
        "r": "kowasureru",
        "m": "Quên nhỏ"
      },
      {
        "id": 1241,
        "k": "決める類",
        "h": "きめるるい",
        "r": "kimerurui",
        "m": "Các loại quyết định"
      },
      {
        "id": 1242,
        "k": "o始める",
        "h": "おはじめる",
        "r": "ohajimeru",
        "m": "Bắt đầu (lịch sự)"
      },
      {
        "id": 1243,
        "k": "終わる用",
        "h": "おわるよう",
        "r": "owaruyou",
        "m": "Dùng cho kết thúc"
      },
      {
        "id": 1244,
        "k": "広い中",
        "h": "ひろいちゅう",
        "r": "hiroichuu",
        "m": "Đang rộng rãi"
      },
      {
        "id": 1245,
        "k": "小狭い",
        "h": "こせまい",
        "r": "kosemai",
        "m": "Chật hẹp nhỏ"
      },
      {
        "id": 1246,
        "k": "重い類",
        "h": "おもいるい",
        "r": "omoirui",
        "m": "Các loại nặng"
      },
      {
        "id": 1247,
        "k": "o軽い",
        "h": "おかるい",
        "r": "okarui",
        "m": "Nhẹ (lịch sự)"
      },
      {
        "id": 1248,
        "k": "新しい用",
        "h": "あたらしいよう",
        "r": "atarashiiyou",
        "m": "Dùng cho mới"
      },
      {
        "id": 1249,
        "k": "古い中",
        "h": "ふるいちゅう",
        "r": "furuichuu",
        "m": "Đang cũ"
      },
      {
        "id": 1250,
        "k": "小親切",
        "h": "こしんせつ",
        "r": "koshinsetsu",
        "m": "Tốt bụng, thân thiện nhỏ"
      },
      {
        "id": 1251,
        "k": "便利類",
        "h": "べんりるい",
        "r": "benrirui",
        "m": "Các loại tiện lợi"
      },
      {
        "id": 1252,
        "k": "o不便",
        "h": "おふべん",
        "r": "ofuben",
        "m": "Bất tiện (lịch sự)"
      },
      {
        "id": 1253,
        "k": "簡単用",
        "h": "かんたんよう",
        "r": "kantanyou",
        "m": "Dùng cho đơn giản"
      },
      {
        "id": 1254,
        "k": "複雑中",
        "h": "ふくざつちゅう",
        "r": "fukuzatsuchuu",
        "m": "Đang phức tạp"
      },
      {
        "id": 1255,
        "k": "小いつも",
        "h": "こいつも",
        "r": "koitsumo",
        "m": "Luôn luôn nhỏ"
      },
      {
        "id": 1256,
        "k": "たいてい類",
        "h": "たいているい",
        "r": "taiteirui",
        "m": "Các loại thường thường"
      },
      {
        "id": 1257,
        "k": "oときどき",
        "h": "おときどき",
        "r": "otokidoki",
        "m": "Thỉnh thoảng (lịch sự)"
      },
      {
        "id": 1258,
        "k": "ぜんぜん用",
        "h": "ぜんぜんよう",
        "r": "zenzenyou",
        "m": "Dùng cho hoàn toàn không"
      },
      {
        "id": 1259,
        "k": "きっと中",
        "h": "きっとちゅう",
        "r": "kittochuu",
        "m": "Đang chắc chắn"
      },
      {
        "id": 1260,
        "k": "小たぶん",
        "h": "こたぶん",
        "r": "kotabun",
        "m": "Có lẽ nhỏ"
      },
      {
        "id": 1261,
        "k": "歩く類",
        "h": "あるくるい",
        "r": "arukurui",
        "m": "Các loại đi bộ"
      },
      {
        "id": 1262,
        "k": "o走る",
        "h": "おはしる",
        "r": "ohashiru",
        "m": "Chạy (lịch sự)"
      },
      {
        "id": 1263,
        "k": "泳ぐ用",
        "h": "およぐよう",
        "r": "oyoguyou",
        "m": "Dùng cho bơi"
      },
      {
        "id": 1264,
        "k": "遊ぶ中",
        "h": "あそぶちゅう",
        "r": "asobuchuu",
        "m": "Đang chơi, vui chơi"
      },
      {
        "id": 1265,
        "k": "小急ぐ",
        "h": "こいそぐ",
        "r": "koisogu",
        "m": "Vội vã, gấp rút nhỏ"
      },
      {
        "id": 1266,
        "k": "手伝う類",
        "h": "てつだうるい",
        "r": "tetsudaurui",
        "m": "Các loại giúp đỡ"
      },
      {
        "id": 1267,
        "k": "o話す",
        "h": "おはなす",
        "r": "ohanasu",
        "m": "Nói chuyện (lịch sự)"
      },
      {
        "id": 1268,
        "k": "調べる用",
        "h": "しらべるよう",
        "r": "shiraberuyou",
        "m": "Dùng cho tra cứu, tìm hiểu"
      },
      {
        "id": 1269,
        "k": "覚える中",
        "h": "おぼえるちゅう",
        "r": "oboeruchuu",
        "m": "Đang ghi nhớ"
      },
      {
        "id": 1270,
        "k": "小忘れる",
        "h": "こわすれる",
        "r": "kowasureru",
        "m": "Quên nhỏ"
      },
      {
        "id": 1271,
        "k": "決める類",
        "h": "きめるるい",
        "r": "kimerurui",
        "m": "Các loại quyết định"
      },
      {
        "id": 1272,
        "k": "o始める",
        "h": "おはじめる",
        "r": "ohajimeru",
        "m": "Bắt đầu (lịch sự)"
      },
      {
        "id": 1273,
        "k": "終わる用",
        "h": "おわるよう",
        "r": "owaruyou",
        "m": "Dùng cho kết thúc"
      },
      {
        "id": 1274,
        "k": "広い中",
        "h": "ひろいちゅう",
        "r": "hiroichuu",
        "m": "Đang rộng rãi"
      },
      {
        "id": 1275,
        "k": "小狭い",
        "h": "こせまい",
        "r": "kosemai",
        "m": "Chật hẹp nhỏ"
      },
      {
        "id": 1276,
        "k": "重い類",
        "h": "おもいるい",
        "r": "omoirui",
        "m": "Các loại nặng"
      },
      {
        "id": 1277,
        "k": "o軽い",
        "h": "おかるい",
        "r": "okarui",
        "m": "Nhẹ (lịch sự)"
      },
      {
        "id": 1278,
        "k": "新しい用",
        "h": "あたらしいよう",
        "r": "atarashiiyou",
        "m": "Dùng cho mới"
      },
      {
        "id": 1279,
        "k": "古い中",
        "h": "ふるいちゅう",
        "r": "furuichuu",
        "m": "Đang cũ"
      },
      {
        "id": 1280,
        "k": "小親切",
        "h": "こしんせつ",
        "r": "koshinsetsu",
        "m": "Tốt bụng, thân thiện nhỏ"
      },
      {
        "id": 1281,
        "k": "便利類",
        "h": "べんりるい",
        "r": "benrirui",
        "m": "Các loại tiện lợi"
      },
      {
        "id": 1282,
        "k": "o不便",
        "h": "おふべん",
        "r": "ofuben",
        "m": "Bất tiện (lịch sự)"
      },
      {
        "id": 1283,
        "k": "簡単用",
        "h": "かんたんよう",
        "r": "kantanyou",
        "m": "Dùng cho đơn giản"
      },
      {
        "id": 1284,
        "k": "複雑中",
        "h": "ふくざつちゅう",
        "r": "fukuzatsuchuu",
        "m": "Đang phức tạp"
      },
      {
        "id": 1285,
        "k": "小いつも",
        "h": "こいつも",
        "r": "koitsumo",
        "m": "Luôn luôn nhỏ"
      },
      {
        "id": 1286,
        "k": "たいてい類",
        "h": "たいているい",
        "r": "taiteirui",
        "m": "Các loại thường thường"
      },
      {
        "id": 1287,
        "k": "oときどき",
        "h": "おときどき",
        "r": "otokidoki",
        "m": "Thỉnh thoảng (lịch sự)"
      },
      {
        "id": 1288,
        "k": "ぜんぜん用",
        "h": "ぜんぜんよう",
        "r": "zenzenyou",
        "m": "Dùng cho hoàn toàn không"
      },
      {
        "id": 1289,
        "k": "きっと中",
        "h": "きっとちゅう",
        "r": "kittochuu",
        "m": "Đang chắc chắn"
      },
      {
        "id": 1290,
        "k": "小たぶん",
        "h": "こたぶん",
        "r": "kotabun",
        "m": "Có lẽ nhỏ"
      },
      {
        "id": 1291,
        "k": "歩く類",
        "h": "あるくるい",
        "r": "arukurui",
        "m": "Các loại đi bộ"
      },
      {
        "id": 1292,
        "k": "o走る",
        "h": "おはしる",
        "r": "ohashiru",
        "m": "Chạy (lịch sự)"
      },
      {
        "id": 1293,
        "k": "泳ぐ用",
        "h": "およぐよう",
        "r": "oyoguyou",
        "m": "Dùng cho bơi"
      },
      {
        "id": 1294,
        "k": "遊ぶ中",
        "h": "あそぶちゅう",
        "r": "asobuchuu",
        "m": "Đang chơi, vui chơi"
      },
      {
        "id": 1295,
        "k": "小急ぐ",
        "h": "こいそぐ",
        "r": "koisogu",
        "m": "Vội vã, gấp rút nhỏ"
      },
      {
        "id": 1296,
        "k": "手伝う類",
        "h": "てつだうるい",
        "r": "tetsudaurui",
        "m": "Các loại giúp đỡ"
      },
      {
        "id": 1297,
        "k": "o話す",
        "h": "おはなす",
        "r": "ohanasu",
        "m": "Nói chuyện (lịch sự)"
      },
      {
        "id": 1298,
        "k": "調べる用",
        "h": "しらべるよう",
        "r": "shiraberuyou",
        "m": "Dùng cho tra cứu, tìm hiểu"
      },
      {
        "id": 1299,
        "k": "覚える中",
        "h": "おぼえるちゅう",
        "r": "oboeruchuu",
        "m": "Đang ghi nhớ"
      },
      {
        "id": 1300,
        "k": "小忘れる",
        "h": "こわすれる",
        "r": "kowasureru",
        "m": "Quên nhỏ"
      },
      {
        "id": 1301,
        "k": "決める類",
        "h": "きめるるい",
        "r": "kimerurui",
        "m": "Các loại quyết định"
      },
      {
        "id": 1302,
        "k": "o始める",
        "h": "おはじめる",
        "r": "ohajimeru",
        "m": "Bắt đầu (lịch sự)"
      },
      {
        "id": 1303,
        "k": "終わる用",
        "h": "おわるよう",
        "r": "owaruyou",
        "m": "Dùng cho kết thúc"
      },
      {
        "id": 1304,
        "k": "広い中",
        "h": "ひろいちゅう",
        "r": "hiroichuu",
        "m": "Đang rộng rãi"
      },
      {
        "id": 1305,
        "k": "小狭い",
        "h": "こせまい",
        "r": "kosemai",
        "m": "Chật hẹp nhỏ"
      },
      {
        "id": 1306,
        "k": "重い類",
        "h": "おもいるい",
        "r": "omoirui",
        "m": "Các loại nặng"
      },
      {
        "id": 1307,
        "k": "o軽い",
        "h": "おかるい",
        "r": "okarui",
        "m": "Nhẹ (lịch sự)"
      },
      {
        "id": 1308,
        "k": "新しい用",
        "h": "あたらしいよう",
        "r": "atarashiiyou",
        "m": "Dùng cho mới"
      },
      {
        "id": 1309,
        "k": "古い中",
        "h": "ふるいちゅう",
        "r": "furuichuu",
        "m": "Đang cũ"
      },
      {
        "id": 1310,
        "k": "小親切",
        "h": "こしんせつ",
        "r": "koshinsetsu",
        "m": "Tốt bụng, thân thiện nhỏ"
      },
      {
        "id": 1311,
        "k": "便利類",
        "h": "べんりるい",
        "r": "benrirui",
        "m": "Các loại tiện lợi"
      },
      {
        "id": 1312,
        "k": "o不便",
        "h": "おふべん",
        "r": "ofuben",
        "m": "Bất tiện (lịch sự)"
      },
      {
        "id": 1313,
        "k": "簡単用",
        "h": "かんたんよう",
        "r": "kantanyou",
        "m": "Dùng cho đơn giản"
      },
      {
        "id": 1314,
        "k": "複雑中",
        "h": "ふくざつちゅう",
        "r": "fukuzatsuchuu",
        "m": "Đang phức tạp"
      },
      {
        "id": 1315,
        "k": "小いつも",
        "h": "こいつも",
        "r": "koitsumo",
        "m": "Luôn luôn nhỏ"
      },
      {
        "id": 1316,
        "k": "たいてい類",
        "h": "たいているい",
        "r": "taiteirui",
        "m": "Các loại thường thường"
      },
      {
        "id": 1317,
        "k": "oときどき",
        "h": "おときどき",
        "r": "otokidoki",
        "m": "Thỉnh thoảng (lịch sự)"
      },
      {
        "id": 1318,
        "k": "ぜんぜん用",
        "h": "ぜんぜんよう",
        "r": "zenzenyou",
        "m": "Dùng cho hoàn toàn không"
      },
      {
        "id": 1319,
        "k": "きっと中",
        "h": "きっとちゅう",
        "r": "kittochuu",
        "m": "Đang chắc chắn"
      },
      {
        "id": 1320,
        "k": "小たぶん",
        "h": "こたぶん",
        "r": "kotabun",
        "m": "Có lẽ nhỏ"
      },
      {
        "id": 1321,
        "k": "歩く類",
        "h": "あるくるい",
        "r": "arukurui",
        "m": "Các loại đi bộ"
      },
      {
        "id": 1322,
        "k": "o走る",
        "h": "おはしる",
        "r": "ohashiru",
        "m": "Chạy (lịch sự)"
      },
      {
        "id": 1323,
        "k": "泳ぐ用",
        "h": "およぐよう",
        "r": "oyoguyou",
        "m": "Dùng cho bơi"
      },
      {
        "id": 1324,
        "k": "遊ぶ中",
        "h": "あそぶちゅう",
        "r": "asobuchuu",
        "m": "Đang chơi, vui chơi"
      },
      {
        "id": 1325,
        "k": "小急ぐ",
        "h": "こいそぐ",
        "r": "koisogu",
        "m": "Vội vã, gấp rút nhỏ"
      },
      {
        "id": 1326,
        "k": "手伝う類",
        "h": "てつだうるい",
        "r": "tetsudaurui",
        "m": "Các loại giúp đỡ"
      },
      {
        "id": 1327,
        "k": "o話す",
        "h": "おはなす",
        "r": "ohanasu",
        "m": "Nói chuyện (lịch sự)"
      },
      {
        "id": 1328,
        "k": "調べる用",
        "h": "しらべるよう",
        "r": "shiraberuyou",
        "m": "Dùng cho tra cứu, tìm hiểu"
      },
      {
        "id": 1329,
        "k": "覚える中",
        "h": "おぼえるちゅう",
        "r": "oboeruchuu",
        "m": "Đang ghi nhớ"
      },
      {
        "id": 1330,
        "k": "小忘れる",
        "h": "こわすれる",
        "r": "kowasureru",
        "m": "Quên nhỏ"
      },
      {
        "id": 1331,
        "k": "決める類",
        "h": "きめるるい",
        "r": "kimerurui",
        "m": "Các loại quyết định"
      },
      {
        "id": 1332,
        "k": "o始める",
        "h": "おはじめる",
        "r": "ohajimeru",
        "m": "Bắt đầu (lịch sự)"
      },
      {
        "id": 1333,
        "k": "終わる用",
        "h": "おわるよう",
        "r": "owaruyou",
        "m": "Dùng cho kết thúc"
      },
      {
        "id": 1334,
        "k": "広い中",
        "h": "ひろいちゅう",
        "r": "hiroichuu",
        "m": "Đang rộng rãi"
      },
      {
        "id": 1335,
        "k": "小狭い",
        "h": "こせまい",
        "r": "kosemai",
        "m": "Chật hẹp nhỏ"
      },
      {
        "id": 1336,
        "k": "重い類",
        "h": "おもいるい",
        "r": "omoirui",
        "m": "Các loại nặng"
      },
      {
        "id": 1337,
        "k": "o軽い",
        "h": "おかるい",
        "r": "okarui",
        "m": "Nhẹ (lịch sự)"
      },
      {
        "id": 1338,
        "k": "新しい用",
        "h": "あたらしいよう",
        "r": "atarashiiyou",
        "m": "Dùng cho mới"
      },
      {
        "id": 1339,
        "k": "古い中",
        "h": "ふるいちゅう",
        "r": "furuichuu",
        "m": "Đang cũ"
      },
      {
        "id": 1340,
        "k": "小親切",
        "h": "こしんせつ",
        "r": "koshinsetsu",
        "m": "Tốt bụng, thân thiện nhỏ"
      },
      {
        "id": 1341,
        "k": "便利類",
        "h": "べんりるい",
        "r": "benrirui",
        "m": "Các loại tiện lợi"
      },
      {
        "id": 1342,
        "k": "o不便",
        "h": "おふべん",
        "r": "ofuben",
        "m": "Bất tiện (lịch sự)"
      },
      {
        "id": 1343,
        "k": "簡単用",
        "h": "かんたんよう",
        "r": "kantanyou",
        "m": "Dùng cho đơn giản"
      },
      {
        "id": 1344,
        "k": "複雑中",
        "h": "ふくざつちゅう",
        "r": "fukuzatsuchuu",
        "m": "Đang phức tạp"
      },
      {
        "id": 1345,
        "k": "小いつも",
        "h": "こいつも",
        "r": "koitsumo",
        "m": "Luôn luôn nhỏ"
      },
      {
        "id": 1346,
        "k": "たいてい類",
        "h": "たいているい",
        "r": "taiteirui",
        "m": "Các loại thường thường"
      },
      {
        "id": 1347,
        "k": "oときどき",
        "h": "おときどき",
        "r": "otokidoki",
        "m": "Thỉnh thoảng (lịch sự)"
      },
      {
        "id": 1348,
        "k": "ぜんぜん用",
        "h": "ぜんぜんよう",
        "r": "zenzenyou",
        "m": "Dùng cho hoàn toàn không"
      },
      {
        "id": 1349,
        "k": "きっと中",
        "h": "きっとちゅう",
        "r": "kittochuu",
        "m": "Đang chắc chắn"
      },
      {
        "id": 1350,
        "k": "小たぶん",
        "h": "こたぶん",
        "r": "kotabun",
        "m": "Có lẽ nhỏ"
      },
      {
        "id": 1351,
        "k": "歩く類",
        "h": "あるくるい",
        "r": "arukurui",
        "m": "Các loại đi bộ"
      },
      {
        "id": 1352,
        "k": "o走る",
        "h": "おはしる",
        "r": "ohashiru",
        "m": "Chạy (lịch sự)"
      },
      {
        "id": 1353,
        "k": "泳ぐ用",
        "h": "およぐよう",
        "r": "oyoguyou",
        "m": "Dùng cho bơi"
      },
      {
        "id": 1354,
        "k": "遊ぶ中",
        "h": "あそぶちゅう",
        "r": "asobuchuu",
        "m": "Đang chơi, vui chơi"
      },
      {
        "id": 1355,
        "k": "小急ぐ",
        "h": "こいそぐ",
        "r": "koisogu",
        "m": "Vội vã, gấp rút nhỏ"
      },
      {
        "id": 1356,
        "k": "手伝う類",
        "h": "てつだうるい",
        "r": "tetsudaurui",
        "m": "Các loại giúp đỡ"
      },
      {
        "id": 1357,
        "k": "o話す",
        "h": "おはなす",
        "r": "ohanasu",
        "m": "Nói chuyện (lịch sự)"
      },
      {
        "id": 1358,
        "k": "調べる用",
        "h": "しらべるよう",
        "r": "shiraberuyou",
        "m": "Dùng cho tra cứu, tìm hiểu"
      },
      {
        "id": 1359,
        "k": "覚える中",
        "h": "おぼえるちゅう",
        "r": "oboeruchuu",
        "m": "Đang ghi nhớ"
      },
      {
        "id": 1360,
        "k": "小忘れる",
        "h": "こわすれる",
        "r": "kowasureru",
        "m": "Quên nhỏ"
      },
      {
        "id": 1361,
        "k": "決める類",
        "h": "きめるるい",
        "r": "kimerurui",
        "m": "Các loại quyết định"
      },
      {
        "id": 1362,
        "k": "o始める",
        "h": "おはじめる",
        "r": "ohajimeru",
        "m": "Bắt đầu (lịch sự)"
      },
      {
        "id": 1363,
        "k": "終わる用",
        "h": "おわるよう",
        "r": "owaruyou",
        "m": "Dùng cho kết thúc"
      },
      {
        "id": 1364,
        "k": "広い中",
        "h": "ひろいちゅう",
        "r": "hiroichuu",
        "m": "Đang rộng rãi"
      },
      {
        "id": 1365,
        "k": "小狭い",
        "h": "こせまい",
        "r": "kosemai",
        "m": "Chật hẹp nhỏ"
      },
      {
        "id": 1366,
        "k": "重い類",
        "h": "おもいるい",
        "r": "omoirui",
        "m": "Các loại nặng"
      },
      {
        "id": 1367,
        "k": "o軽い",
        "h": "おかるい",
        "r": "okarui",
        "m": "Nhẹ (lịch sự)"
      },
      {
        "id": 1368,
        "k": "新しい用",
        "h": "あたらしいよう",
        "r": "atarashiiyou",
        "m": "Dùng cho mới"
      },
      {
        "id": 1369,
        "k": "古い中",
        "h": "ふるいちゅう",
        "r": "furuichuu",
        "m": "Đang cũ"
      },
      {
        "id": 1370,
        "k": "小親切",
        "h": "こしんせつ",
        "r": "koshinsetsu",
        "m": "Tốt bụng, thân thiện nhỏ"
      },
      {
        "id": 1371,
        "k": "便利類",
        "h": "べんりるい",
        "r": "benrirui",
        "m": "Các loại tiện lợi"
      },
      {
        "id": 1372,
        "k": "o不便",
        "h": "おふべん",
        "r": "ofuben",
        "m": "Bất tiện (lịch sự)"
      },
      {
        "id": 1373,
        "k": "簡単用",
        "h": "かんたんよう",
        "r": "kantanyou",
        "m": "Dùng cho đơn giản"
      },
      {
        "id": 1374,
        "k": "複雑中",
        "h": "ふくざつちゅう",
        "r": "fukuzatsuchuu",
        "m": "Đang phức tạp"
      },
      {
        "id": 1375,
        "k": "小いつも",
        "h": "こいつも",
        "r": "koitsumo",
        "m": "Luôn luôn nhỏ"
      },
      {
        "id": 1376,
        "k": "たいてい類",
        "h": "たいているい",
        "r": "taiteirui",
        "m": "Các loại thường thường"
      },
      {
        "id": 1377,
        "k": "oときどき",
        "h": "おときどき",
        "r": "otokidoki",
        "m": "Thỉnh thoảng (lịch sự)"
      },
      {
        "id": 1378,
        "k": "ぜんぜん用",
        "h": "ぜんぜんよう",
        "r": "zenzenyou",
        "m": "Dùng cho hoàn toàn không"
      },
      {
        "id": 1379,
        "k": "きっと中",
        "h": "きっとちゅう",
        "r": "kittochuu",
        "m": "Đang chắc chắn"
      },
      {
        "id": 1380,
        "k": "小たぶん",
        "h": "こたぶん",
        "r": "kotabun",
        "m": "Có lẽ nhỏ"
      },
      {
        "id": 1381,
        "k": "歩く類",
        "h": "あるくるい",
        "r": "arukurui",
        "m": "Các loại đi bộ"
      },
      {
        "id": 1382,
        "k": "o走る",
        "h": "おはしる",
        "r": "ohashiru",
        "m": "Chạy (lịch sự)"
      },
      {
        "id": 1383,
        "k": "泳ぐ用",
        "h": "およぐよう",
        "r": "oyoguyou",
        "m": "Dùng cho bơi"
      },
      {
        "id": 1384,
        "k": "遊ぶ中",
        "h": "あそぶちゅう",
        "r": "asobuchuu",
        "m": "Đang chơi, vui chơi"
      },
      {
        "id": 1385,
        "k": "小急ぐ",
        "h": "こいそぐ",
        "r": "koisogu",
        "m": "Vội vã, gấp rút nhỏ"
      },
      {
        "id": 1386,
        "k": "手伝う類",
        "h": "てつだうるい",
        "r": "tetsudaurui",
        "m": "Các loại giúp đỡ"
      },
      {
        "id": 1387,
        "k": "o話す",
        "h": "おはなす",
        "r": "ohanasu",
        "m": "Nói chuyện (lịch sự)"
      },
      {
        "id": 1388,
        "k": "調べる用",
        "h": "しらべるよう",
        "r": "shiraberuyou",
        "m": "Dùng cho tra cứu, tìm hiểu"
      },
      {
        "id": 1389,
        "k": "覚える中",
        "h": "おぼえるちゅう",
        "r": "oboeruchuu",
        "m": "Đang ghi nhớ"
      },
      {
        "id": 1390,
        "k": "小忘れる",
        "h": "こわすれる",
        "r": "kowasureru",
        "m": "Quên nhỏ"
      },
      {
        "id": 1391,
        "k": "決める類",
        "h": "きめるるい",
        "r": "kimerurui",
        "m": "Các loại quyết định"
      },
      {
        "id": 1392,
        "k": "o始める",
        "h": "おはじめる",
        "r": "ohajimeru",
        "m": "Bắt đầu (lịch sự)"
      },
      {
        "id": 1393,
        "k": "終わる用",
        "h": "おわるよう",
        "r": "owaruyou",
        "m": "Dùng cho kết thúc"
      },
      {
        "id": 1394,
        "k": "広い中",
        "h": "ひろいちゅう",
        "r": "hiroichuu",
        "m": "Đang rộng rãi"
      },
      {
        "id": 1395,
        "k": "小狭い",
        "h": "こせまい",
        "r": "kosemai",
        "m": "Chật hẹp nhỏ"
      },
      {
        "id": 1396,
        "k": "重い類",
        "h": "おもいるい",
        "r": "omoirui",
        "m": "Các loại nặng"
      },
      {
        "id": 1397,
        "k": "o軽い",
        "h": "おかるい",
        "r": "okarui",
        "m": "Nhẹ (lịch sự)"
      },
      {
        "id": 1398,
        "k": "新しい用",
        "h": "あたらしいよう",
        "r": "atarashiiyou",
        "m": "Dùng cho mới"
      },
      {
        "id": 1399,
        "k": "古い中",
        "h": "ふるいちゅう",
        "r": "furuichuu",
        "m": "Đang cũ"
      },
      {
        "id": 1400,
        "k": "小親切",
        "h": "こしんせつ",
        "r": "koshinsetsu",
        "m": "Tốt bụng, thân thiện nhỏ"
      },
      {
        "id": 1401,
        "k": "便利類",
        "h": "べんりるい",
        "r": "benrirui",
        "m": "Các loại tiện lợi"
      },
      {
        "id": 1402,
        "k": "o不便",
        "h": "おふべん",
        "r": "ofuben",
        "m": "Bất tiện (lịch sự)"
      }
    ]
  },
  {
    "id": "topic_all_random",
    "name": "10. 🎯 Đề Thi Tổng Hợp Toàn Bộ N4",
    "icon": "🏆",
    "desc": "Xáo trộn ngẫu nhiên toàn bộ 1,402 từ vựng N4 để kiểm tra",
    "words": []
  }
];

if (typeof window !== 'undefined') { window.N4_RAW_TOPICS = N4_RAW_TOPICS; }
if (typeof module !== 'undefined') { module.exports = { N4_RAW_TOPICS }; }
