/* BỘ ĐỀ THI TRẮC NGHIỆM JLPT N4 CHUẨN XỊN (TỔNG CỘNG 1402 CÂU HỎI TRỌN BỘ 9 CHỦ ĐỀ) */
const N4_QUIZ_TOPICS = [
  {
    "id": "topic_01_life",
    "name": "1. Đời Sống & Sinh Hoạt Gia Đình",
    "icon": "🏠",
    "desc": "Phòng ốc, đồ đạc, gia dụng và sinh hoạt thường ngày (155 câu)",
    "questions": [
      {
        "id": "topic_01_life_1",
        "num": 1,
        "sentence_hira": "すずきさんは <u>へや</u> を/が 探しています。",
        "sentence_kanji": "すずきさんは <u>部屋</u> を/が 探しています。",
        "kanji_target": "部屋",
        "hira_target": "へや",
        "kanji_options": [
          "布団",
          "ナイフ",
          "箱",
          "部屋"
        ],
        "hira_options": [
          "ふとん",
          "ないふ",
          "はこ",
          "へや"
        ],
        "romaji": "heya",
        "vi_meaning": "phòng"
      },
      {
        "id": "topic_01_life_2",
        "num": 2,
        "sentence_hira": "すずきさんは <u>いえ</u> を/が 探しています。",
        "sentence_kanji": "すずきさんは <u>家</u> を/が 探しています。",
        "kanji_target": "家",
        "hira_target": "いえ",
        "kanji_options": [
          "家",
          "椅子",
          "スプーン",
          "手紙"
        ],
        "hira_options": [
          "いえ",
          "いす",
          "すぷーん",
          "てがみ"
        ],
        "romaji": "ie",
        "vi_meaning": "nhà"
      },
      {
        "id": "topic_01_life_3",
        "num": 3,
        "sentence_hira": "すずきさんは <u>だいどころ</u> を/が 探しています。",
        "sentence_kanji": "すずきさんは <u>台所</u> を/が 探しています。",
        "kanji_target": "台所",
        "hira_target": "だいどころ",
        "kanji_options": [
          "台所",
          "電話",
          "箱",
          "掃除機"
        ],
        "hira_options": [
          "だいどころ",
          "でんわ",
          "はこ",
          "そうじき"
        ],
        "romaji": "daidokoro",
        "vi_meaning": "bếp"
      },
      {
        "id": "topic_01_life_4",
        "num": 4,
        "sentence_hira": "すずきさんは <u>ふろ</u> を/が 探しています。",
        "sentence_kanji": "すずきさんは <u>風呂</u> を/が 探しています。",
        "kanji_target": "風呂",
        "hira_target": "ふろ",
        "kanji_options": [
          "カレンダー",
          "新聞",
          "風呂",
          "新聞"
        ],
        "hira_options": [
          "かれんだー",
          "しんぶん",
          "ふろ",
          "しんぶん"
        ],
        "romaji": "furo",
        "vi_meaning": "bồn tắm"
      },
      {
        "id": "topic_01_life_5",
        "num": 5,
        "sentence_hira": "すずきさんは <u>にわ</u> を/が 探しています。",
        "sentence_kanji": "すずきさんは <u>庭</u> を/が 探しています。",
        "kanji_target": "庭",
        "hira_target": "にわ",
        "kanji_options": [
          "椅子",
          "庭",
          "ナイフ",
          "机"
        ],
        "hira_options": [
          "いす",
          "にわ",
          "ないふ",
          "つくえ"
        ],
        "romaji": "niwa",
        "vi_meaning": "sân vườn"
      },
      {
        "id": "topic_01_life_6",
        "num": 6,
        "sentence_hira": "すずきさんは <u>げんかん</u> を/が 探しています。",
        "sentence_kanji": "すずきさんは <u>玄関</u> を/が 探しています。",
        "kanji_target": "玄関",
        "hira_target": "げんかん",
        "kanji_options": [
          "時計",
          "服",
          "風呂",
          "玄関"
        ],
        "hira_options": [
          "とけい",
          "ふく",
          "ふろ",
          "げんかん"
        ],
        "romaji": "genkan",
        "vi_meaning": "lối vào"
      },
      {
        "id": "topic_01_life_7",
        "num": 7,
        "sentence_hira": "すずきさんは <u>まど</u> を/が 探しています。",
        "sentence_kanji": "すずきさんは <u>窓</u> を/が 探しています。",
        "kanji_target": "窓",
        "hira_target": "まど",
        "kanji_options": [
          "窓",
          "椅子",
          "洗濯機",
          "洗濯機"
        ],
        "hira_options": [
          "まど",
          "いす",
          "せんたくき",
          "せんたくき"
        ],
        "romaji": "mado",
        "vi_meaning": "cửa sổ"
      },
      {
        "id": "topic_01_life_8",
        "num": 8,
        "sentence_hira": "すずきさんは <u>どあ</u> を/が 探しています。",
        "sentence_kanji": "すずきさんは <u>ドア</u> を/が 探しています。",
        "kanji_target": "ドア",
        "hira_target": "どあ",
        "kanji_options": [
          "冷蔵庫",
          "ドア",
          "電話",
          "スプーン"
        ],
        "hira_options": [
          "れいぞうこ",
          "どあ",
          "でんわ",
          "すぷーん"
        ],
        "romaji": "doa",
        "vi_meaning": "cửa chính"
      },
      {
        "id": "topic_01_life_9",
        "num": 9,
        "sentence_hira": "すずきさんは <u>かぎ</u> を/が 探しています。",
        "sentence_kanji": "すずきさんは <u>鍵</u> を/が 探しています。",
        "kanji_target": "鍵",
        "hira_target": "かぎ",
        "kanji_options": [
          "写真",
          "机",
          "ゴミ箱",
          "鍵"
        ],
        "hira_options": [
          "しゃしん",
          "つくえ",
          "ごみばこ",
          "かぎ"
        ],
        "romaji": "kagi",
        "vi_meaning": "chìa khóa"
      },
      {
        "id": "topic_01_life_10",
        "num": 10,
        "sentence_hira": "すずきさんは <u>でんき</u> を/が 探しています。",
        "sentence_kanji": "すずきさんは <u>電気</u> を/が 探しています。",
        "kanji_target": "電気",
        "hira_target": "でんき",
        "kanji_options": [
          "葉書",
          "冷蔵庫",
          "手紙",
          "電気"
        ],
        "hira_options": [
          "はがき",
          "れいぞうこ",
          "てがみ",
          "でんき"
        ],
        "romaji": "denki",
        "vi_meaning": "đèn/điện"
      },
      {
        "id": "topic_01_life_11",
        "num": 11,
        "sentence_hira": "すずきさんは <u>れいぞうこ</u> を/が 探しています。",
        "sentence_kanji": "すずきさんは <u>冷蔵庫</u> を/が 探しています。",
        "kanji_target": "冷蔵庫",
        "hira_target": "れいぞうこ",
        "kanji_options": [
          "冷蔵庫",
          "洗濯機",
          "電気",
          "箸"
        ],
        "hira_options": [
          "れいぞうこ",
          "せんたくき",
          "でんき",
          "はし"
        ],
        "romaji": "reizouko",
        "vi_meaning": "tủ lạnh"
      },
      {
        "id": "topic_01_life_12",
        "num": 12,
        "sentence_hira": "すずきさんは <u>せんたくき</u> を/が 探しています。",
        "sentence_kanji": "すずきさんは <u>洗濯機</u> を/が 探しています。",
        "kanji_target": "洗濯機",
        "hira_target": "せんたくき",
        "kanji_options": [
          "洗濯機",
          "カレンダー",
          "スプーン",
          "靴"
        ],
        "hira_options": [
          "せんたくき",
          "かれんだー",
          "すぷーん",
          "くつ"
        ],
        "romaji": "sentakuki",
        "vi_meaning": "máy giặt"
      },
      {
        "id": "topic_01_life_13",
        "num": 13,
        "sentence_hira": "すずきさんは <u>そうじき</u> を/が 探しています。",
        "sentence_kanji": "すずきさんは <u>掃除機</u> を/が 探しています。",
        "kanji_target": "掃除機",
        "hira_target": "そうじき",
        "kanji_options": [
          "テレビ",
          "写真",
          "掃除機",
          "椅子"
        ],
        "hira_options": [
          "てれび",
          "しゃしん",
          "そうじき",
          "いす"
        ],
        "romaji": "soujiki",
        "vi_meaning": "máy hút bụi"
      },
      {
        "id": "topic_01_life_14",
        "num": 14,
        "sentence_hira": "すずきさんは <u>えあこん</u> を/が 探しています。",
        "sentence_kanji": "すずきさんは <u>エアコン</u> を/が 探しています。",
        "kanji_target": "エアコン",
        "hira_target": "えあこん",
        "kanji_options": [
          "エアコン",
          "電気",
          "箸",
          "庭"
        ],
        "hira_options": [
          "えあこん",
          "でんき",
          "はし",
          "にわ"
        ],
        "romaji": "eakon",
        "vi_meaning": "máy điều hòa"
      },
      {
        "id": "topic_01_life_15",
        "num": 15,
        "sentence_hira": "すずきさんは <u>てれび</u> を/が 探しています。",
        "sentence_kanji": "すずきさんは <u>テレビ</u> を/が 探しています。",
        "kanji_target": "テレビ",
        "hira_target": "てれび",
        "kanji_options": [
          "本",
          "家",
          "テレビ",
          "歯ブラシ"
        ],
        "hira_options": [
          "ほん",
          "いえ",
          "てれび",
          "はぶらし"
        ],
        "romaji": "terebi",
        "vi_meaning": "tivi"
      },
      {
        "id": "topic_01_life_16",
        "num": 16,
        "sentence_hira": "すずきさんは <u>べっど</u> を/が 探しています。",
        "sentence_kanji": "すずきさんは <u>ベッド</u> を/が 探しています。",
        "kanji_target": "ベッド",
        "hira_target": "べっど",
        "kanji_options": [
          "時計",
          "電話",
          "布団",
          "ベッド"
        ],
        "hira_options": [
          "とけい",
          "でんわ",
          "ふとん",
          "べっど"
        ],
        "romaji": "beddo",
        "vi_meaning": "giường"
      },
      {
        "id": "topic_01_life_17",
        "num": 17,
        "sentence_hira": "すずきさんは <u>ふとん</u> を/が 探しています。",
        "sentence_kanji": "すずきさんは <u>布団</u> を/が 探しています。",
        "kanji_target": "布団",
        "hira_target": "ふとん",
        "kanji_options": [
          "冷蔵庫",
          "洗濯機",
          "布団",
          "スプーン"
        ],
        "hira_options": [
          "れいぞうこ",
          "せんたくき",
          "ふとん",
          "すぷーん"
        ],
        "romaji": "futon",
        "vi_meaning": "nệm/chăn"
      },
      {
        "id": "topic_01_life_18",
        "num": 18,
        "sentence_hira": "すずきさんは <u>つくえ</u> を/が 探しています。",
        "sentence_kanji": "すずきさんは <u>机</u> を/が 探しています。",
        "kanji_target": "机",
        "hira_target": "つくえ",
        "kanji_options": [
          "時計",
          "傘",
          "部屋",
          "机"
        ],
        "hira_options": [
          "とけい",
          "かさ",
          "へや",
          "つくえ"
        ],
        "romaji": "tsukue",
        "vi_meaning": "bàn học"
      },
      {
        "id": "topic_01_life_19",
        "num": 19,
        "sentence_hira": "すずきさんは <u>いす</u> を/が 探しています。",
        "sentence_kanji": "すずきさんは <u>椅子</u> を/が 探しています。",
        "kanji_target": "椅子",
        "hira_target": "いす",
        "kanji_options": [
          "電話",
          "椅子",
          "掃除機",
          "庭"
        ],
        "hira_options": [
          "でんわ",
          "いす",
          "そうじき",
          "にわ"
        ],
        "romaji": "isu",
        "vi_meaning": "ghế"
      },
      {
        "id": "topic_01_life_20",
        "num": 20,
        "sentence_hira": "すずきさんは <u>かがみ</u> を/が 探しています。",
        "sentence_kanji": "すずきさんは <u>鏡</u> を/が 探しています。",
        "kanji_target": "鏡",
        "hira_target": "かがみ",
        "kanji_options": [
          "荷物",
          "傘",
          "フォーク",
          "鏡"
        ],
        "hira_options": [
          "にもつ",
          "かさ",
          "ふぉーく",
          "かがみ"
        ],
        "romaji": "kagami",
        "vi_meaning": "gương"
      },
      {
        "id": "topic_01_life_21",
        "num": 21,
        "sentence_hira": "すずきさんは <u>せっけん</u> を/が 探しています。",
        "sentence_kanji": "すずきさんは <u>石鹸</u> を/が 探しています。",
        "kanji_target": "石鹸",
        "hira_target": "せっけん",
        "kanji_options": [
          "箱",
          "机",
          "切手",
          "石鹸"
        ],
        "hira_options": [
          "はこ",
          "つくえ",
          "きって",
          "せっけん"
        ],
        "romaji": "sekken",
        "vi_meaning": "xà phòng"
      },
      {
        "id": "topic_01_life_22",
        "num": 22,
        "sentence_hira": "すずきさんは <u>たおる</u> を/が 探しています。",
        "sentence_kanji": "すずきさんは <u>タオル</u> を/が 探しています。",
        "kanji_target": "タオル",
        "hira_target": "たおる",
        "kanji_options": [
          "葉書",
          "タオル",
          "机",
          "歯ブラシ"
        ],
        "hira_options": [
          "はがき",
          "たおる",
          "つくえ",
          "はぶらし"
        ],
        "romaji": "taoru",
        "vi_meaning": "khăn tắm"
      },
      {
        "id": "topic_01_life_23",
        "num": 23,
        "sentence_hira": "すずきさんは <u>はぶらし</u> を/が 探しています。",
        "sentence_kanji": "すずきさんは <u>歯ブラシ</u> を/が 探しています。",
        "kanji_target": "歯ブラシ",
        "hira_target": "はぶらし",
        "kanji_options": [
          "ナイフ",
          "フォーク",
          "テレビ",
          "歯ブラシ"
        ],
        "hira_options": [
          "ないふ",
          "ふぉーく",
          "てれび",
          "はぶらし"
        ],
        "romaji": "haburashi",
        "vi_meaning": "bàn chải đánh răng"
      },
      {
        "id": "topic_01_life_24",
        "num": 24,
        "sentence_hira": "すずきさんは <u>ごみばこ</u> を/が 探しています。",
        "sentence_kanji": "すずきさんは <u>ゴミ箱</u> を/が 探しています。",
        "kanji_target": "ゴミ箱",
        "hira_target": "ごみばこ",
        "kanji_options": [
          "本",
          "ゴミ箱",
          "机",
          "掃除機"
        ],
        "hira_options": [
          "ほん",
          "ごみばこ",
          "つくえ",
          "そうじき"
        ],
        "romaji": "gomibako",
        "vi_meaning": "thùng rác"
      },
      {
        "id": "topic_01_life_25",
        "num": 25,
        "sentence_hira": "すずきさんは <u>とけい</u> を/が 探しています。",
        "sentence_kanji": "すずきさんは <u>時計</u> を/が 探しています。",
        "kanji_target": "時計",
        "hira_target": "とけい",
        "kanji_options": [
          "傘",
          "時計",
          "荷物",
          "電気"
        ],
        "hira_options": [
          "かさ",
          "とけい",
          "にもつ",
          "でんき"
        ],
        "romaji": "tokei",
        "vi_meaning": "đồng hồ"
      },
      {
        "id": "topic_01_life_26",
        "num": 26,
        "sentence_hira": "すずきさんは <u>でんわ</u> を/が 探しています。",
        "sentence_kanji": "すずきさんは <u>電話</u> を/が 探しています。",
        "kanji_target": "電話",
        "hira_target": "でんわ",
        "kanji_options": [
          "電話",
          "家",
          "ナイフ",
          "鏡"
        ],
        "hira_options": [
          "でんわ",
          "いえ",
          "ないふ",
          "かがみ"
        ],
        "romaji": "denwa",
        "vi_meaning": "điện thoại"
      },
      {
        "id": "topic_01_life_27",
        "num": 27,
        "sentence_hira": "すずきさんは <u>しゃしん</u> を/が 探しています。",
        "sentence_kanji": "すずきさんは <u>写真</u> を/が 探しています。",
        "kanji_target": "写真",
        "hira_target": "しゃしん",
        "kanji_options": [
          "机",
          "鏡",
          "ゴミ箱",
          "写真"
        ],
        "hira_options": [
          "つくえ",
          "かがみ",
          "ごみばこ",
          "しゃしん"
        ],
        "romaji": "shashin",
        "vi_meaning": "bức ảnh"
      },
      {
        "id": "topic_01_life_28",
        "num": 28,
        "sentence_hira": "すずきさんは <u>ふく</u> を/が 探しています。",
        "sentence_kanji": "すずきさんは <u>服</u> を/が 探しています。",
        "kanji_target": "服",
        "hira_target": "ふく",
        "kanji_options": [
          "靴",
          "ナイフ",
          "服",
          "荷物"
        ],
        "hira_options": [
          "くつ",
          "ないふ",
          "ふく",
          "にもつ"
        ],
        "romaji": "fuku",
        "vi_meaning": "quần áo"
      },
      {
        "id": "topic_01_life_29",
        "num": 29,
        "sentence_hira": "すずきさんは <u>くつ</u> を/が 探しています。",
        "sentence_kanji": "すずきさんは <u>靴</u> を/が 探しています。",
        "kanji_target": "靴",
        "hira_target": "くつ",
        "kanji_options": [
          "ナイフ",
          "冷蔵庫",
          "洗濯機",
          "靴"
        ],
        "hira_options": [
          "ないふ",
          "れいぞうこ",
          "せんたくき",
          "くつ"
        ],
        "romaji": "kutsu",
        "vi_meaning": "giày"
      },
      {
        "id": "topic_01_life_30",
        "num": 30,
        "sentence_hira": "すずきさんは <u>かさ</u> を/が 探しています。",
        "sentence_kanji": "すずきさんは <u>傘</u> を/が 探しています。",
        "kanji_target": "傘",
        "hira_target": "かさ",
        "kanji_options": [
          "テレビ",
          "洗濯機",
          "服",
          "傘"
        ],
        "hira_options": [
          "てれび",
          "せんたくき",
          "ふく",
          "かさ"
        ],
        "romaji": "kasa",
        "vi_meaning": "cây dù/ô"
      },
      {
        "id": "topic_01_life_31",
        "num": 31,
        "sentence_hira": "すずきさんは <u>はこ</u> を/が 探しています。",
        "sentence_kanji": "すずきさんは <u>箱</u> を/が 探しています。",
        "kanji_target": "箱",
        "hira_target": "はこ",
        "kanji_options": [
          "雑誌",
          "ゴミ箱",
          "箱",
          "ベッド"
        ],
        "hira_options": [
          "ざっし",
          "ごみばこ",
          "はこ",
          "べっど"
        ],
        "romaji": "hako",
        "vi_meaning": "cái hộp"
      },
      {
        "id": "topic_01_life_32",
        "num": 32,
        "sentence_hira": "すずきさんは <u>さら</u> を/が 探しています。",
        "sentence_kanji": "すずきさんは <u>皿</u> を/が 探しています。",
        "kanji_target": "皿",
        "hira_target": "さら",
        "kanji_options": [
          "皿",
          "玄関",
          "荷物",
          "冷蔵庫"
        ],
        "hira_options": [
          "さら",
          "げんかん",
          "にもつ",
          "れいぞうこ"
        ],
        "romaji": "sara",
        "vi_meaning": "dĩa/đĩa"
      },
      {
        "id": "topic_01_life_33",
        "num": 33,
        "sentence_hira": "すずきさんは <u>こっぷ</u> を/が 探しています。",
        "sentence_kanji": "すずきさんは <u>コップ</u> を/が 探しています。",
        "kanji_target": "コップ",
        "hira_target": "こっぷ",
        "kanji_options": [
          "コップ",
          "電話",
          "風呂",
          "玄関"
        ],
        "hira_options": [
          "こっぷ",
          "でんわ",
          "ふろ",
          "げんかん"
        ],
        "romaji": "koppu",
        "vi_meaning": "cái cốc"
      },
      {
        "id": "topic_01_life_34",
        "num": 34,
        "sentence_hira": "すずきさんは <u>はし</u> を/が 探しています。",
        "sentence_kanji": "すずきさんは <u>箸</u> を/が 探しています。",
        "kanji_target": "箸",
        "hira_target": "はし",
        "kanji_options": [
          "箸",
          "切手",
          "窓",
          "庭"
        ],
        "hira_options": [
          "はし",
          "きって",
          "まど",
          "にわ"
        ],
        "romaji": "hashi",
        "vi_meaning": "đôi đũa"
      },
      {
        "id": "topic_01_life_35",
        "num": 35,
        "sentence_hira": "すずきさんは <u>すぷーん</u> を/が 探しています。",
        "sentence_kanji": "すずきさんは <u>スプーン</u> を/が 探しています。",
        "kanji_target": "スプーン",
        "hira_target": "すぷーん",
        "kanji_options": [
          "スプーン",
          "雑誌",
          "荷物",
          "椅子"
        ],
        "hira_options": [
          "すぷーん",
          "ざっし",
          "にもつ",
          "いす"
        ],
        "romaji": "supuun",
        "vi_meaning": "muỗng/thìa"
      },
      {
        "id": "topic_01_life_36",
        "num": 36,
        "sentence_hira": "すずきさんは <u>ないふ</u> を/が 探しています。",
        "sentence_kanji": "すずきさんは <u>ナイフ</u> を/が 探しています。",
        "kanji_target": "ナイフ",
        "hira_target": "ないふ",
        "kanji_options": [
          "ナイフ",
          "コップ",
          "洗濯機",
          "玄関"
        ],
        "hira_options": [
          "ないふ",
          "こっぷ",
          "せんたくき",
          "げんかん"
        ],
        "romaji": "naifu",
        "vi_meaning": "con dao"
      },
      {
        "id": "topic_01_life_37",
        "num": 37,
        "sentence_hira": "すずきさんは <u>ふぉーく</u> を/が 探しています。",
        "sentence_kanji": "すずきさんは <u>フォーク</u> を/が 探しています。",
        "kanji_target": "フォーク",
        "hira_target": "ふぉーく",
        "kanji_options": [
          "エアコン",
          "布団",
          "フォーク",
          "椅子"
        ],
        "hira_options": [
          "えあこん",
          "ふとん",
          "ふぉーく",
          "いす"
        ],
        "romaji": "fooku",
        "vi_meaning": "nĩa"
      },
      {
        "id": "topic_01_life_38",
        "num": 38,
        "sentence_hira": "すずきさんは <u>しんぶん</u> を/が 探しています。",
        "sentence_kanji": "すずきさんは <u>新聞</u> を/が 探しています。",
        "kanji_target": "新聞",
        "hira_target": "しんぶん",
        "kanji_options": [
          "洗濯機",
          "服",
          "新聞",
          "ドア"
        ],
        "hira_options": [
          "せんたくき",
          "ふく",
          "しんぶん",
          "どあ"
        ],
        "romaji": "shinbun",
        "vi_meaning": "tờ báo"
      },
      {
        "id": "topic_01_life_39",
        "num": 39,
        "sentence_hira": "すずきさんは <u>ほん</u> を/が 探しています。",
        "sentence_kanji": "すずきさんは <u>本</u> を/が 探しています。",
        "kanji_target": "本",
        "hira_target": "ほん",
        "kanji_options": [
          "本",
          "石鹸",
          "靴",
          "家"
        ],
        "hira_options": [
          "ほん",
          "せっけん",
          "くつ",
          "いえ"
        ],
        "romaji": "hon",
        "vi_meaning": "cuốn sách"
      },
      {
        "id": "topic_01_life_40",
        "num": 40,
        "sentence_hira": "すずきさんは <u>ざっし</u> を/が 探しています。",
        "sentence_kanji": "すずきさんは <u>雑誌</u> を/が 探しています。",
        "kanji_target": "雑誌",
        "hira_target": "ざっし",
        "kanji_options": [
          "雑誌",
          "テレビ",
          "ドア",
          "ドア"
        ],
        "hira_options": [
          "ざっし",
          "てれび",
          "どあ",
          "どあ"
        ],
        "romaji": "zasshi",
        "vi_meaning": "tạp chí"
      },
      {
        "id": "topic_01_life_41",
        "num": 41,
        "sentence_hira": "すずきさんは <u>てがみ</u> を/が 探しています。",
        "sentence_kanji": "すずきさんは <u>手紙</u> を/が 探しています。",
        "kanji_target": "手紙",
        "hira_target": "てがみ",
        "kanji_options": [
          "掃除機",
          "風呂",
          "掃除機",
          "手紙"
        ],
        "hira_options": [
          "そうじき",
          "ふろ",
          "そうじき",
          "てがみ"
        ],
        "romaji": "tegami",
        "vi_meaning": "lá thư"
      },
      {
        "id": "topic_01_life_42",
        "num": 42,
        "sentence_hira": "すずきさんは <u>にもつ</u> を/が 探しています。",
        "sentence_kanji": "すずきさんは <u>荷物</u> を/が 探しています。",
        "kanji_target": "荷物",
        "hira_target": "にもつ",
        "kanji_options": [
          "歯ブラシ",
          "切手",
          "荷物",
          "ゴミ箱"
        ],
        "hira_options": [
          "はぶらし",
          "きって",
          "にもつ",
          "ごみばこ"
        ],
        "romaji": "nimotsu",
        "vi_meaning": "hành lý/hàng hóa"
      },
      {
        "id": "topic_01_life_43",
        "num": 43,
        "sentence_hira": "すずきさんは <u>きって</u> を/が 探しています。",
        "sentence_kanji": "すずきさんは <u>切手</u> を/が 探しています。",
        "kanji_target": "切手",
        "hira_target": "きって",
        "kanji_options": [
          "家",
          "傘",
          "布団",
          "切手"
        ],
        "hira_options": [
          "いえ",
          "かさ",
          "ふとん",
          "きって"
        ],
        "romaji": "kitte",
        "vi_meaning": "tem thư"
      },
      {
        "id": "topic_01_life_44",
        "num": 44,
        "sentence_hira": "すずきさんは <u>はがき</u> を/が 探しています。",
        "sentence_kanji": "すずきさんは <u>葉書</u> を/が 探しています。",
        "kanji_target": "葉書",
        "hira_target": "はがき",
        "kanji_options": [
          "ベッド",
          "皿",
          "葉書",
          "傘"
        ],
        "hira_options": [
          "べっど",
          "さら",
          "はがき",
          "かさ"
        ],
        "romaji": "hagaki",
        "vi_meaning": "bưu thiếp"
      },
      {
        "id": "topic_01_life_45",
        "num": 45,
        "sentence_hira": "すずきさんは <u>かれんだー</u> を/が 探しています。",
        "sentence_kanji": "すずきさんは <u>カレンダー</u> を/が 探しています。",
        "kanji_target": "カレンダー",
        "hira_target": "かれんだー",
        "kanji_options": [
          "掃除機",
          "鏡",
          "テレビ",
          "カレンダー"
        ],
        "hira_options": [
          "そうじき",
          "かがみ",
          "てれび",
          "かれんだー"
        ],
        "romaji": "kareendaa",
        "vi_meaning": "lịch"
      },
      {
        "id": "topic_01_life_46",
        "num": 46,
        "sentence_hira": "すずきさんは <u>へや</u> を/が 探しています。",
        "sentence_kanji": "すずきさんは <u>部屋</u> を/が 探しています。",
        "kanji_target": "部屋",
        "hira_target": "へや",
        "kanji_options": [
          "庭",
          "掃除機",
          "スプーン",
          "部屋"
        ],
        "hira_options": [
          "にわ",
          "そうじき",
          "すぷーん",
          "へや"
        ],
        "romaji": "heya",
        "vi_meaning": "phòng"
      },
      {
        "id": "topic_01_life_47",
        "num": 47,
        "sentence_hira": "すずきさんは <u>いえ</u> を/が 探しています。",
        "sentence_kanji": "すずきさんは <u>家</u> を/が 探しています。",
        "kanji_target": "家",
        "hira_target": "いえ",
        "kanji_options": [
          "家",
          "エアコン",
          "洗濯機",
          "洗濯機"
        ],
        "hira_options": [
          "いえ",
          "えあこん",
          "せんたくき",
          "せんたくき"
        ],
        "romaji": "ie",
        "vi_meaning": "nhà"
      },
      {
        "id": "topic_01_life_48",
        "num": 48,
        "sentence_hira": "すずきさんは <u>だいどころ</u> を/が 探しています。",
        "sentence_kanji": "すずきさんは <u>台所</u> を/が 探しています。",
        "kanji_target": "台所",
        "hira_target": "だいどころ",
        "kanji_options": [
          "鍵",
          "ゴミ箱",
          "台所",
          "庭"
        ],
        "hira_options": [
          "かぎ",
          "ごみばこ",
          "だいどころ",
          "にわ"
        ],
        "romaji": "daidokoro",
        "vi_meaning": "bếp"
      },
      {
        "id": "topic_01_life_49",
        "num": 49,
        "sentence_hira": "すずきさんは <u>ふろ</u> を/が 探しています。",
        "sentence_kanji": "すずきさんは <u>風呂</u> を/が 探しています。",
        "kanji_target": "風呂",
        "hira_target": "ふろ",
        "kanji_options": [
          "家",
          "風呂",
          "靴",
          "スプーン"
        ],
        "hira_options": [
          "いえ",
          "ふろ",
          "くつ",
          "すぷーん"
        ],
        "romaji": "furo",
        "vi_meaning": "bồn tắm"
      },
      {
        "id": "topic_01_life_50",
        "num": 50,
        "sentence_hira": "すずきさんは <u>にわ</u> を/が 探しています。",
        "sentence_kanji": "すずきさんは <u>庭</u> を/が 探しています。",
        "kanji_target": "庭",
        "hira_target": "にわ",
        "kanji_options": [
          "玄関",
          "机",
          "荷物",
          "庭"
        ],
        "hira_options": [
          "げんかん",
          "つくえ",
          "にもつ",
          "にわ"
        ],
        "romaji": "niwa",
        "vi_meaning": "sân vườn"
      },
      {
        "id": "topic_01_life_51",
        "num": 51,
        "sentence_hira": "すずきさんは <u>げんかん</u> を/が 探しています。",
        "sentence_kanji": "すずきさんは <u>玄関</u> を/が 探しています。",
        "kanji_target": "玄関",
        "hira_target": "げんかん",
        "kanji_options": [
          "玄関",
          "石鹸",
          "電話",
          "手紙"
        ],
        "hira_options": [
          "げんかん",
          "せっけん",
          "でんわ",
          "てがみ"
        ],
        "romaji": "genkan",
        "vi_meaning": "lối vào"
      },
      {
        "id": "topic_01_life_52",
        "num": 52,
        "sentence_hira": "すずきさんは <u>まど</u> を/が 探しています。",
        "sentence_kanji": "すずきさんは <u>窓</u> を/が 探しています。",
        "kanji_target": "窓",
        "hira_target": "まど",
        "kanji_options": [
          "ベッド",
          "台所",
          "窓",
          "鍵"
        ],
        "hira_options": [
          "べっど",
          "だいどころ",
          "まど",
          "かぎ"
        ],
        "romaji": "mado",
        "vi_meaning": "cửa sổ"
      },
      {
        "id": "topic_01_life_53",
        "num": 53,
        "sentence_hira": "すずきさんは <u>どあ</u> を/が 探しています。",
        "sentence_kanji": "すずきさんは <u>ドア</u> を/が 探しています。",
        "kanji_target": "ドア",
        "hira_target": "どあ",
        "kanji_options": [
          "ベッド",
          "フォーク",
          "ドア",
          "鍵"
        ],
        "hira_options": [
          "べっど",
          "ふぉーく",
          "どあ",
          "かぎ"
        ],
        "romaji": "doa",
        "vi_meaning": "cửa chính"
      },
      {
        "id": "topic_01_life_54",
        "num": 54,
        "sentence_hira": "すずきさんは <u>かぎ</u> を/が 探しています。",
        "sentence_kanji": "すずきさんは <u>鍵</u> を/が 探しています。",
        "kanji_target": "鍵",
        "hira_target": "かぎ",
        "kanji_options": [
          "ベッド",
          "鍵",
          "電気",
          "鏡"
        ],
        "hira_options": [
          "べっど",
          "かぎ",
          "でんき",
          "かがみ"
        ],
        "romaji": "kagi",
        "vi_meaning": "chìa khóa"
      },
      {
        "id": "topic_01_life_55",
        "num": 55,
        "sentence_hira": "すずきさんは <u>でんき</u> を/が 探しています。",
        "sentence_kanji": "すずきさんは <u>電気</u> を/が 探しています。",
        "kanji_target": "電気",
        "hira_target": "でんき",
        "kanji_options": [
          "テレビ",
          "鍵",
          "電気",
          "フォーク"
        ],
        "hira_options": [
          "てれび",
          "かぎ",
          "でんき",
          "ふぉーく"
        ],
        "romaji": "denki",
        "vi_meaning": "đèn/điện"
      },
      {
        "id": "topic_01_life_56",
        "num": 56,
        "sentence_hira": "すずきさんは <u>れいぞうこ</u> を/が 探しています。",
        "sentence_kanji": "すずきさんは <u>冷蔵庫</u> を/が 探しています。",
        "kanji_target": "冷蔵庫",
        "hira_target": "れいぞうこ",
        "kanji_options": [
          "歯ブラシ",
          "ナイフ",
          "鏡",
          "冷蔵庫"
        ],
        "hira_options": [
          "はぶらし",
          "ないふ",
          "かがみ",
          "れいぞうこ"
        ],
        "romaji": "reizouko",
        "vi_meaning": "tủ lạnh"
      },
      {
        "id": "topic_01_life_57",
        "num": 57,
        "sentence_hira": "すずきさんは <u>せんたくき</u> を/が 探しています。",
        "sentence_kanji": "すずきさんは <u>洗濯機</u> を/が 探しています。",
        "kanji_target": "洗濯機",
        "hira_target": "せんたくき",
        "kanji_options": [
          "傘",
          "部屋",
          "洗濯機",
          "部屋"
        ],
        "hira_options": [
          "かさ",
          "へや",
          "せんたくき",
          "へや"
        ],
        "romaji": "sentakuki",
        "vi_meaning": "máy giặt"
      },
      {
        "id": "topic_01_life_58",
        "num": 58,
        "sentence_hira": "すずきさんは <u>そうじき</u> を/が 探しています。",
        "sentence_kanji": "すずきさんは <u>掃除機</u> を/が 探しています。",
        "kanji_target": "掃除機",
        "hira_target": "そうじき",
        "kanji_options": [
          "玄関",
          "窓",
          "電気",
          "掃除機"
        ],
        "hira_options": [
          "げんかん",
          "まど",
          "でんき",
          "そうじき"
        ],
        "romaji": "soujiki",
        "vi_meaning": "máy hút bụi"
      },
      {
        "id": "topic_01_life_59",
        "num": 59,
        "sentence_hira": "すずきさんは <u>えあこん</u> を/が 探しています。",
        "sentence_kanji": "すずきさんは <u>エアコン</u> を/が 探しています。",
        "kanji_target": "エアコン",
        "hira_target": "えあこん",
        "kanji_options": [
          "庭",
          "家",
          "歯ブラシ",
          "エアコン"
        ],
        "hira_options": [
          "にわ",
          "いえ",
          "はぶらし",
          "えあこん"
        ],
        "romaji": "eakon",
        "vi_meaning": "máy điều hòa"
      },
      {
        "id": "topic_01_life_60",
        "num": 60,
        "sentence_hira": "すずきさんは <u>てれび</u> を/が 探しています。",
        "sentence_kanji": "すずきさんは <u>テレビ</u> を/が 探しています。",
        "kanji_target": "テレビ",
        "hira_target": "てれび",
        "kanji_options": [
          "電気",
          "テレビ",
          "新聞",
          "鏡"
        ],
        "hira_options": [
          "でんき",
          "てれび",
          "しんぶん",
          "かがみ"
        ],
        "romaji": "terebi",
        "vi_meaning": "tivi"
      },
      {
        "id": "topic_01_life_61",
        "num": 61,
        "sentence_hira": "すずきさんは <u>べっど</u> を/が 探しています。",
        "sentence_kanji": "すずきさんは <u>ベッド</u> を/が 探しています。",
        "kanji_target": "ベッド",
        "hira_target": "べっど",
        "kanji_options": [
          "ベッド",
          "玄関",
          "窓",
          "ゴミ箱"
        ],
        "hira_options": [
          "べっど",
          "げんかん",
          "まど",
          "ごみばこ"
        ],
        "romaji": "beddo",
        "vi_meaning": "giường"
      },
      {
        "id": "topic_01_life_62",
        "num": 62,
        "sentence_hira": "すずきさんは <u>ふとん</u> を/が 探しています。",
        "sentence_kanji": "すずきさんは <u>布団</u> を/が 探しています。",
        "kanji_target": "布団",
        "hira_target": "ふとん",
        "kanji_options": [
          "庭",
          "部屋",
          "布団",
          "庭"
        ],
        "hira_options": [
          "にわ",
          "へや",
          "ふとん",
          "にわ"
        ],
        "romaji": "futon",
        "vi_meaning": "nệm/chăn"
      },
      {
        "id": "topic_01_life_63",
        "num": 63,
        "sentence_hira": "すずきさんは <u>つくえ</u> を/が 探しています。",
        "sentence_kanji": "すずきさんは <u>机</u> を/が 探しています。",
        "kanji_target": "机",
        "hira_target": "つくえ",
        "kanji_options": [
          "時計",
          "台所",
          "机",
          "洗濯機"
        ],
        "hira_options": [
          "とけい",
          "だいどころ",
          "つくえ",
          "せんたくき"
        ],
        "romaji": "tsukue",
        "vi_meaning": "bàn học"
      },
      {
        "id": "topic_01_life_64",
        "num": 64,
        "sentence_hira": "すずきさんは <u>いす</u> を/が 探しています。",
        "sentence_kanji": "すずきさんは <u>椅子</u> を/が 探しています。",
        "kanji_target": "椅子",
        "hira_target": "いす",
        "kanji_options": [
          "ベッド",
          "雑誌",
          "椅子",
          "電話"
        ],
        "hira_options": [
          "べっど",
          "ざっし",
          "いす",
          "でんわ"
        ],
        "romaji": "isu",
        "vi_meaning": "ghế"
      },
      {
        "id": "topic_01_life_65",
        "num": 65,
        "sentence_hira": "すずきさんは <u>かがみ</u> を/が 探しています。",
        "sentence_kanji": "すずきさんは <u>鏡</u> を/が 探しています。",
        "kanji_target": "鏡",
        "hira_target": "かがみ",
        "kanji_options": [
          "箸",
          "鏡",
          "掃除機",
          "家"
        ],
        "hira_options": [
          "はし",
          "かがみ",
          "そうじき",
          "いえ"
        ],
        "romaji": "kagami",
        "vi_meaning": "gương"
      },
      {
        "id": "topic_01_life_66",
        "num": 66,
        "sentence_hira": "すずきさんは <u>せっけん</u> を/が 探しています。",
        "sentence_kanji": "すずきさんは <u>石鹸</u> を/が 探しています。",
        "kanji_target": "石鹸",
        "hira_target": "せっけん",
        "kanji_options": [
          "台所",
          "家",
          "石鹸",
          "椅子"
        ],
        "hira_options": [
          "だいどころ",
          "いえ",
          "せっけん",
          "いす"
        ],
        "romaji": "sekken",
        "vi_meaning": "xà phòng"
      },
      {
        "id": "topic_01_life_67",
        "num": 67,
        "sentence_hira": "すずきさんは <u>たおる</u> を/が 探しています。",
        "sentence_kanji": "すずきさんは <u>タオル</u> を/が 探しています。",
        "kanji_target": "タオル",
        "hira_target": "たおる",
        "kanji_options": [
          "タオル",
          "雑誌",
          "エアコン",
          "冷蔵庫"
        ],
        "hira_options": [
          "たおる",
          "ざっし",
          "えあこん",
          "れいぞうこ"
        ],
        "romaji": "taoru",
        "vi_meaning": "khăn tắm"
      },
      {
        "id": "topic_01_life_68",
        "num": 68,
        "sentence_hira": "すずきさんは <u>はぶらし</u> を/が 探しています。",
        "sentence_kanji": "すずきさんは <u>歯ブラシ</u> を/が 探しています。",
        "kanji_target": "歯ブラシ",
        "hira_target": "はぶらし",
        "kanji_options": [
          "フォーク",
          "台所",
          "手紙",
          "歯ブラシ"
        ],
        "hira_options": [
          "ふぉーく",
          "だいどころ",
          "てがみ",
          "はぶらし"
        ],
        "romaji": "haburashi",
        "vi_meaning": "bàn chải đánh răng"
      },
      {
        "id": "topic_01_life_69",
        "num": 69,
        "sentence_hira": "すずきさんは <u>ごみばこ</u> を/が 探しています。",
        "sentence_kanji": "すずきさんは <u>ゴミ箱</u> を/が 探しています。",
        "kanji_target": "ゴミ箱",
        "hira_target": "ごみばこ",
        "kanji_options": [
          "冷蔵庫",
          "傘",
          "石鹸",
          "ゴミ箱"
        ],
        "hira_options": [
          "れいぞうこ",
          "かさ",
          "せっけん",
          "ごみばこ"
        ],
        "romaji": "gomibako",
        "vi_meaning": "thùng rác"
      },
      {
        "id": "topic_01_life_70",
        "num": 70,
        "sentence_hira": "すずきさんは <u>とけい</u> を/が 探しています。",
        "sentence_kanji": "すずきさんは <u>時計</u> を/が 探しています。",
        "kanji_target": "時計",
        "hira_target": "とけい",
        "kanji_options": [
          "布団",
          "フォーク",
          "玄関",
          "時計"
        ],
        "hira_options": [
          "ふとん",
          "ふぉーく",
          "げんかん",
          "とけい"
        ],
        "romaji": "tokei",
        "vi_meaning": "đồng hồ"
      },
      {
        "id": "topic_01_life_71",
        "num": 71,
        "sentence_hira": "すずきさんは <u>でんわ</u> を/が 探しています。",
        "sentence_kanji": "すずきさんは <u>電話</u> を/が 探しています。",
        "kanji_target": "電話",
        "hira_target": "でんわ",
        "kanji_options": [
          "鍵",
          "掃除機",
          "服",
          "電話"
        ],
        "hira_options": [
          "かぎ",
          "そうじき",
          "ふく",
          "でんわ"
        ],
        "romaji": "denwa",
        "vi_meaning": "điện thoại"
      },
      {
        "id": "topic_01_life_72",
        "num": 72,
        "sentence_hira": "すずきさんは <u>しゃしん</u> を/が 探しています。",
        "sentence_kanji": "すずきさんは <u>写真</u> を/が 探しています。",
        "kanji_target": "写真",
        "hira_target": "しゃしん",
        "kanji_options": [
          "鏡",
          "写真",
          "玄関",
          "雑誌"
        ],
        "hira_options": [
          "かがみ",
          "しゃしん",
          "げんかん",
          "ざっし"
        ],
        "romaji": "shashin",
        "vi_meaning": "bức ảnh"
      },
      {
        "id": "topic_01_life_73",
        "num": 73,
        "sentence_hira": "すずきさんは <u>ふく</u> を/が 探しています。",
        "sentence_kanji": "すずきさんは <u>服</u> を/が 探しています。",
        "kanji_target": "服",
        "hira_target": "ふく",
        "kanji_options": [
          "服",
          "窓",
          "歯ブラシ",
          "電話"
        ],
        "hira_options": [
          "ふく",
          "まど",
          "はぶらし",
          "でんわ"
        ],
        "romaji": "fuku",
        "vi_meaning": "quần áo"
      },
      {
        "id": "topic_01_life_74",
        "num": 74,
        "sentence_hira": "すずきさんは <u>くつ</u> を/が 探しています。",
        "sentence_kanji": "すずきさんは <u>靴</u> を/が 探しています。",
        "kanji_target": "靴",
        "hira_target": "くつ",
        "kanji_options": [
          "靴",
          "テレビ",
          "雑誌",
          "葉書"
        ],
        "hira_options": [
          "くつ",
          "てれび",
          "ざっし",
          "はがき"
        ],
        "romaji": "kutsu",
        "vi_meaning": "giày"
      },
      {
        "id": "topic_01_life_75",
        "num": 75,
        "sentence_hira": "すずきさんは <u>かさ</u> を/が 探しています。",
        "sentence_kanji": "すずきさんは <u>傘</u> を/が 探しています。",
        "kanji_target": "傘",
        "hira_target": "かさ",
        "kanji_options": [
          "箸",
          "荷物",
          "傘",
          "布団"
        ],
        "hira_options": [
          "はし",
          "にもつ",
          "かさ",
          "ふとん"
        ],
        "romaji": "kasa",
        "vi_meaning": "cây dù/ô"
      },
      {
        "id": "topic_01_life_76",
        "num": 76,
        "sentence_hira": "すずきさんは <u>はこ</u> を/が 探しています。",
        "sentence_kanji": "すずきさんは <u>箱</u> を/が 探しています。",
        "kanji_target": "箱",
        "hira_target": "はこ",
        "kanji_options": [
          "電気",
          "新聞",
          "ナイフ",
          "箱"
        ],
        "hira_options": [
          "でんき",
          "しんぶん",
          "ないふ",
          "はこ"
        ],
        "romaji": "hako",
        "vi_meaning": "cái hộp"
      },
      {
        "id": "topic_01_life_77",
        "num": 77,
        "sentence_hira": "すずきさんは <u>さら</u> を/が 探しています。",
        "sentence_kanji": "すずきさんは <u>皿</u> を/が 探しています。",
        "kanji_target": "皿",
        "hira_target": "さら",
        "kanji_options": [
          "箸",
          "部屋",
          "傘",
          "皿"
        ],
        "hira_options": [
          "はし",
          "へや",
          "かさ",
          "さら"
        ],
        "romaji": "sara",
        "vi_meaning": "dĩa/đĩa"
      },
      {
        "id": "topic_01_life_78",
        "num": 78,
        "sentence_hira": "すずきさんは <u>こっぷ</u> を/が 探しています。",
        "sentence_kanji": "すずきさんは <u>コップ</u> を/が 探しています。",
        "kanji_target": "コップ",
        "hira_target": "こっぷ",
        "kanji_options": [
          "ベッド",
          "コップ",
          "玄関",
          "カレンダー"
        ],
        "hira_options": [
          "べっど",
          "こっぷ",
          "げんかん",
          "かれんだー"
        ],
        "romaji": "koppu",
        "vi_meaning": "cái cốc"
      },
      {
        "id": "topic_01_life_79",
        "num": 79,
        "sentence_hira": "すずきさんは <u>はし</u> を/が 探しています。",
        "sentence_kanji": "すずきさんは <u>箸</u> を/が 探しています。",
        "kanji_target": "箸",
        "hira_target": "はし",
        "kanji_options": [
          "服",
          "荷物",
          "箸",
          "傘"
        ],
        "hira_options": [
          "ふく",
          "にもつ",
          "はし",
          "かさ"
        ],
        "romaji": "hashi",
        "vi_meaning": "đôi đũa"
      },
      {
        "id": "topic_01_life_80",
        "num": 80,
        "sentence_hira": "すずきさんは <u>すぷーん</u> を/が 探しています。",
        "sentence_kanji": "すずきさんは <u>スプーン</u> を/が 探しています。",
        "kanji_target": "スプーン",
        "hira_target": "すぷーん",
        "kanji_options": [
          "スプーン",
          "カレンダー",
          "靴",
          "鏡"
        ],
        "hira_options": [
          "すぷーん",
          "かれんだー",
          "くつ",
          "かがみ"
        ],
        "romaji": "supuun",
        "vi_meaning": "muỗng/thìa"
      },
      {
        "id": "topic_01_life_81",
        "num": 81,
        "sentence_hira": "すずきさんは <u>ないふ</u> を/が 探しています。",
        "sentence_kanji": "すずきさんは <u>ナイフ</u> を/が 探しています。",
        "kanji_target": "ナイフ",
        "hira_target": "ないふ",
        "kanji_options": [
          "ナイフ",
          "ゴミ箱",
          "庭",
          "台所"
        ],
        "hira_options": [
          "ないふ",
          "ごみばこ",
          "にわ",
          "だいどころ"
        ],
        "romaji": "naifu",
        "vi_meaning": "con dao"
      },
      {
        "id": "topic_01_life_82",
        "num": 82,
        "sentence_hira": "すずきさんは <u>ふぉーく</u> を/が 探しています。",
        "sentence_kanji": "すずきさんは <u>フォーク</u> を/が 探しています。",
        "kanji_target": "フォーク",
        "hira_target": "ふぉーく",
        "kanji_options": [
          "掃除機",
          "手紙",
          "フォーク",
          "写真"
        ],
        "hira_options": [
          "そうじき",
          "てがみ",
          "ふぉーく",
          "しゃしん"
        ],
        "romaji": "fooku",
        "vi_meaning": "nĩa"
      },
      {
        "id": "topic_01_life_83",
        "num": 83,
        "sentence_hira": "すずきさんは <u>しんぶん</u> を/が 探しています。",
        "sentence_kanji": "すずきさんは <u>新聞</u> を/が 探しています。",
        "kanji_target": "新聞",
        "hira_target": "しんぶん",
        "kanji_options": [
          "フォーク",
          "洗濯機",
          "布団",
          "新聞"
        ],
        "hira_options": [
          "ふぉーく",
          "せんたくき",
          "ふとん",
          "しんぶん"
        ],
        "romaji": "shinbun",
        "vi_meaning": "tờ báo"
      },
      {
        "id": "topic_01_life_84",
        "num": 84,
        "sentence_hira": "すずきさんは <u>ほん</u> を/が 探しています。",
        "sentence_kanji": "すずきさんは <u>本</u> を/が 探しています。",
        "kanji_target": "本",
        "hira_target": "ほん",
        "kanji_options": [
          "箸",
          "本",
          "洗濯機",
          "テレビ"
        ],
        "hira_options": [
          "はし",
          "ほん",
          "せんたくき",
          "てれび"
        ],
        "romaji": "hon",
        "vi_meaning": "cuốn sách"
      },
      {
        "id": "topic_01_life_85",
        "num": 85,
        "sentence_hira": "すずきさんは <u>ざっし</u> を/が 探しています。",
        "sentence_kanji": "すずきさんは <u>雑誌</u> を/が 探しています。",
        "kanji_target": "雑誌",
        "hira_target": "ざっし",
        "kanji_options": [
          "石鹸",
          "椅子",
          "雑誌",
          "フォーク"
        ],
        "hira_options": [
          "せっけん",
          "いす",
          "ざっし",
          "ふぉーく"
        ],
        "romaji": "zasshi",
        "vi_meaning": "tạp chí"
      },
      {
        "id": "topic_01_life_86",
        "num": 86,
        "sentence_hira": "すずきさんは <u>てがみ</u> を/が 探しています。",
        "sentence_kanji": "すずきさんは <u>手紙</u> を/が 探しています。",
        "kanji_target": "手紙",
        "hira_target": "てがみ",
        "kanji_options": [
          "掃除機",
          "服",
          "コップ",
          "手紙"
        ],
        "hira_options": [
          "そうじき",
          "ふく",
          "こっぷ",
          "てがみ"
        ],
        "romaji": "tegami",
        "vi_meaning": "lá thư"
      },
      {
        "id": "topic_01_life_87",
        "num": 87,
        "sentence_hira": "すずきさんは <u>にもつ</u> を/が 探しています。",
        "sentence_kanji": "すずきさんは <u>荷物</u> を/が 探しています。",
        "kanji_target": "荷物",
        "hira_target": "にもつ",
        "kanji_options": [
          "時計",
          "掃除機",
          "荷物",
          "ベッド"
        ],
        "hira_options": [
          "とけい",
          "そうじき",
          "にもつ",
          "べっど"
        ],
        "romaji": "nimotsu",
        "vi_meaning": "hành lý/hàng hóa"
      },
      {
        "id": "topic_01_life_88",
        "num": 88,
        "sentence_hira": "すずきさんは <u>きって</u> を/が 探しています。",
        "sentence_kanji": "すずきさんは <u>切手</u> を/が 探しています。",
        "kanji_target": "切手",
        "hira_target": "きって",
        "kanji_options": [
          "切手",
          "家",
          "手紙",
          "布団"
        ],
        "hira_options": [
          "きって",
          "いえ",
          "てがみ",
          "ふとん"
        ],
        "romaji": "kitte",
        "vi_meaning": "tem thư"
      },
      {
        "id": "topic_01_life_89",
        "num": 89,
        "sentence_hira": "すずきさんは <u>はがき</u> を/が 探しています。",
        "sentence_kanji": "すずきさんは <u>葉書</u> を/が 探しています。",
        "kanji_target": "葉書",
        "hira_target": "はがき",
        "kanji_options": [
          "スプーン",
          "葉書",
          "雑誌",
          "靴"
        ],
        "hira_options": [
          "すぷーん",
          "はがき",
          "ざっし",
          "くつ"
        ],
        "romaji": "hagaki",
        "vi_meaning": "bưu thiếp"
      },
      {
        "id": "topic_01_life_90",
        "num": 90,
        "sentence_hira": "すずきさんは <u>かれんだー</u> を/が 探しています。",
        "sentence_kanji": "すずきさんは <u>カレンダー</u> を/が 探しています。",
        "kanji_target": "カレンダー",
        "hira_target": "かれんだー",
        "kanji_options": [
          "新聞",
          "カレンダー",
          "机",
          "葉書"
        ],
        "hira_options": [
          "しんぶん",
          "かれんだー",
          "つくえ",
          "はがき"
        ],
        "romaji": "kareendaa",
        "vi_meaning": "lịch"
      },
      {
        "id": "topic_01_life_91",
        "num": 91,
        "sentence_hira": "すずきさんは <u>へや</u> を/が 探しています。",
        "sentence_kanji": "すずきさんは <u>部屋</u> を/が 探しています。",
        "kanji_target": "部屋",
        "hira_target": "へや",
        "kanji_options": [
          "箸",
          "部屋",
          "テレビ",
          "タオル"
        ],
        "hira_options": [
          "はし",
          "へや",
          "てれび",
          "たおる"
        ],
        "romaji": "heya",
        "vi_meaning": "phòng"
      },
      {
        "id": "topic_01_life_92",
        "num": 92,
        "sentence_hira": "すずきさんは <u>いえ</u> を/が 探しています。",
        "sentence_kanji": "すずきさんは <u>家</u> を/が 探しています。",
        "kanji_target": "家",
        "hira_target": "いえ",
        "kanji_options": [
          "家",
          "時計",
          "風呂",
          "箸"
        ],
        "hira_options": [
          "いえ",
          "とけい",
          "ふろ",
          "はし"
        ],
        "romaji": "ie",
        "vi_meaning": "nhà"
      },
      {
        "id": "topic_01_life_93",
        "num": 93,
        "sentence_hira": "すずきさんは <u>だいどころ</u> を/が 探しています。",
        "sentence_kanji": "すずきさんは <u>台所</u> を/が 探しています。",
        "kanji_target": "台所",
        "hira_target": "だいどころ",
        "kanji_options": [
          "傘",
          "台所",
          "新聞",
          "家"
        ],
        "hira_options": [
          "かさ",
          "だいどころ",
          "しんぶん",
          "いえ"
        ],
        "romaji": "daidokoro",
        "vi_meaning": "bếp"
      },
      {
        "id": "topic_01_life_94",
        "num": 94,
        "sentence_hira": "すずきさんは <u>ふろ</u> を/が 探しています。",
        "sentence_kanji": "すずきさんは <u>風呂</u> を/が 探しています。",
        "kanji_target": "風呂",
        "hira_target": "ふろ",
        "kanji_options": [
          "歯ブラシ",
          "ナイフ",
          "台所",
          "風呂"
        ],
        "hira_options": [
          "はぶらし",
          "ないふ",
          "だいどころ",
          "ふろ"
        ],
        "romaji": "furo",
        "vi_meaning": "bồn tắm"
      },
      {
        "id": "topic_01_life_95",
        "num": 95,
        "sentence_hira": "すずきさんは <u>にわ</u> を/が 探しています。",
        "sentence_kanji": "すずきさんは <u>庭</u> を/が 探しています。",
        "kanji_target": "庭",
        "hira_target": "にわ",
        "kanji_options": [
          "玄関",
          "家",
          "庭",
          "窓"
        ],
        "hira_options": [
          "げんかん",
          "いえ",
          "にわ",
          "まど"
        ],
        "romaji": "niwa",
        "vi_meaning": "sân vườn"
      },
      {
        "id": "topic_01_life_96",
        "num": 96,
        "sentence_hira": "すずきさんは <u>げんかん</u> を/が 探しています。",
        "sentence_kanji": "すずきさんは <u>玄関</u> を/が 探しています。",
        "kanji_target": "玄関",
        "hira_target": "げんかん",
        "kanji_options": [
          "皿",
          "スプーン",
          "玄関",
          "鏡"
        ],
        "hira_options": [
          "さら",
          "すぷーん",
          "げんかん",
          "かがみ"
        ],
        "romaji": "genkan",
        "vi_meaning": "lối vào"
      },
      {
        "id": "topic_01_life_97",
        "num": 97,
        "sentence_hira": "すずきさんは <u>まど</u> を/が 探しています。",
        "sentence_kanji": "すずきさんは <u>窓</u> を/が 探しています。",
        "kanji_target": "窓",
        "hira_target": "まど",
        "kanji_options": [
          "庭",
          "窓",
          "コップ",
          "ドア"
        ],
        "hira_options": [
          "にわ",
          "まど",
          "こっぷ",
          "どあ"
        ],
        "romaji": "mado",
        "vi_meaning": "cửa sổ"
      },
      {
        "id": "topic_01_life_98",
        "num": 98,
        "sentence_hira": "すずきさんは <u>どあ</u> を/が 探しています。",
        "sentence_kanji": "すずきさんは <u>ドア</u> を/が 探しています。",
        "kanji_target": "ドア",
        "hira_target": "どあ",
        "kanji_options": [
          "ドア",
          "玄関",
          "布団",
          "鏡"
        ],
        "hira_options": [
          "どあ",
          "げんかん",
          "ふとん",
          "かがみ"
        ],
        "romaji": "doa",
        "vi_meaning": "cửa chính"
      },
      {
        "id": "topic_01_life_99",
        "num": 99,
        "sentence_hira": "すずきさんは <u>かぎ</u> を/が 探しています。",
        "sentence_kanji": "すずきさんは <u>鍵</u> を/が 探しています。",
        "kanji_target": "鍵",
        "hira_target": "かぎ",
        "kanji_options": [
          "鍵",
          "雑誌",
          "傘",
          "エアコン"
        ],
        "hira_options": [
          "かぎ",
          "ざっし",
          "かさ",
          "えあこん"
        ],
        "romaji": "kagi",
        "vi_meaning": "chìa khóa"
      },
      {
        "id": "topic_01_life_100",
        "num": 100,
        "sentence_hira": "すずきさんは <u>でんき</u> を/が 探しています。",
        "sentence_kanji": "すずきさんは <u>電気</u> を/が 探しています。",
        "kanji_target": "電気",
        "hira_target": "でんき",
        "kanji_options": [
          "台所",
          "電気",
          "庭",
          "本"
        ],
        "hira_options": [
          "だいどころ",
          "でんき",
          "にわ",
          "ほん"
        ],
        "romaji": "denki",
        "vi_meaning": "đèn/điện"
      },
      {
        "id": "topic_01_life_101",
        "num": 101,
        "sentence_hira": "すずきさんは <u>れいぞうこ</u> を/が 探しています。",
        "sentence_kanji": "すずきさんは <u>冷蔵庫</u> を/が 探しています。",
        "kanji_target": "冷蔵庫",
        "hira_target": "れいぞうこ",
        "kanji_options": [
          "冷蔵庫",
          "箱",
          "椅子",
          "玄関"
        ],
        "hira_options": [
          "れいぞうこ",
          "はこ",
          "いす",
          "げんかん"
        ],
        "romaji": "reizouko",
        "vi_meaning": "tủ lạnh"
      },
      {
        "id": "topic_01_life_102",
        "num": 102,
        "sentence_hira": "すずきさんは <u>せんたくき</u> を/が 探しています。",
        "sentence_kanji": "すずきさんは <u>洗濯機</u> を/が 探しています。",
        "kanji_target": "洗濯機",
        "hira_target": "せんたくき",
        "kanji_options": [
          "部屋",
          "洗濯機",
          "電話",
          "電気"
        ],
        "hira_options": [
          "へや",
          "せんたくき",
          "でんわ",
          "でんき"
        ],
        "romaji": "sentakuki",
        "vi_meaning": "máy giặt"
      },
      {
        "id": "topic_01_life_103",
        "num": 103,
        "sentence_hira": "すずきさんは <u>そうじき</u> を/が 探しています。",
        "sentence_kanji": "すずきさんは <u>掃除機</u> を/が 探しています。",
        "kanji_target": "掃除機",
        "hira_target": "そうじき",
        "kanji_options": [
          "掃除機",
          "冷蔵庫",
          "箸",
          "本"
        ],
        "hira_options": [
          "そうじき",
          "れいぞうこ",
          "はし",
          "ほん"
        ],
        "romaji": "soujiki",
        "vi_meaning": "máy hút bụi"
      },
      {
        "id": "topic_01_life_104",
        "num": 104,
        "sentence_hira": "すずきさんは <u>えあこん</u> を/が 探しています。",
        "sentence_kanji": "すずきさんは <u>エアコン</u> を/が 探しています。",
        "kanji_target": "エアコン",
        "hira_target": "えあこん",
        "kanji_options": [
          "エアコン",
          "写真",
          "本",
          "布団"
        ],
        "hira_options": [
          "えあこん",
          "しゃしん",
          "ほん",
          "ふとん"
        ],
        "romaji": "eakon",
        "vi_meaning": "máy điều hòa"
      },
      {
        "id": "topic_01_life_105",
        "num": 105,
        "sentence_hira": "すずきさんは <u>てれび</u> を/が 探しています。",
        "sentence_kanji": "すずきさんは <u>テレビ</u> を/が 探しています。",
        "kanji_target": "テレビ",
        "hira_target": "てれび",
        "kanji_options": [
          "ベッド",
          "写真",
          "テレビ",
          "冷蔵庫"
        ],
        "hira_options": [
          "べっど",
          "しゃしん",
          "てれび",
          "れいぞうこ"
        ],
        "romaji": "terebi",
        "vi_meaning": "tivi"
      },
      {
        "id": "topic_01_life_106",
        "num": 106,
        "sentence_hira": "すずきさんは <u>べっど</u> を/が 探しています。",
        "sentence_kanji": "すずきさんは <u>ベッド</u> を/が 探しています。",
        "kanji_target": "ベッド",
        "hira_target": "べっど",
        "kanji_options": [
          "鏡",
          "時計",
          "ベッド",
          "エアコン"
        ],
        "hira_options": [
          "かがみ",
          "とけい",
          "べっど",
          "えあこん"
        ],
        "romaji": "beddo",
        "vi_meaning": "giường"
      },
      {
        "id": "topic_01_life_107",
        "num": 107,
        "sentence_hira": "すずきさんは <u>ふとん</u> を/が 探しています。",
        "sentence_kanji": "すずきさんは <u>布団</u> を/が 探しています。",
        "kanji_target": "布団",
        "hira_target": "ふとん",
        "kanji_options": [
          "ベッド",
          "家",
          "布団",
          "手紙"
        ],
        "hira_options": [
          "べっど",
          "いえ",
          "ふとん",
          "てがみ"
        ],
        "romaji": "futon",
        "vi_meaning": "nệm/chăn"
      },
      {
        "id": "topic_01_life_108",
        "num": 108,
        "sentence_hira": "すずきさんは <u>つくえ</u> を/が 探しています。",
        "sentence_kanji": "すずきさんは <u>机</u> を/が 探しています。",
        "kanji_target": "机",
        "hira_target": "つくえ",
        "kanji_options": [
          "エアコン",
          "鍵",
          "雑誌",
          "机"
        ],
        "hira_options": [
          "えあこん",
          "かぎ",
          "ざっし",
          "つくえ"
        ],
        "romaji": "tsukue",
        "vi_meaning": "bàn học"
      },
      {
        "id": "topic_01_life_109",
        "num": 109,
        "sentence_hira": "すずきさんは <u>いす</u> を/が 探しています。",
        "sentence_kanji": "すずきさんは <u>椅子</u> を/が 探しています。",
        "kanji_target": "椅子",
        "hira_target": "いす",
        "kanji_options": [
          "椅子",
          "電話",
          "洗濯機",
          "ゴミ箱"
        ],
        "hira_options": [
          "いす",
          "でんわ",
          "せんたくき",
          "ごみばこ"
        ],
        "romaji": "isu",
        "vi_meaning": "ghế"
      },
      {
        "id": "topic_01_life_110",
        "num": 110,
        "sentence_hira": "すずきさんは <u>かがみ</u> を/が 探しています。",
        "sentence_kanji": "すずきさんは <u>鏡</u> を/が 探しています。",
        "kanji_target": "鏡",
        "hira_target": "かがみ",
        "kanji_options": [
          "椅子",
          "鏡",
          "フォーク",
          "鍵"
        ],
        "hira_options": [
          "いす",
          "かがみ",
          "ふぉーく",
          "かぎ"
        ],
        "romaji": "kagami",
        "vi_meaning": "gương"
      },
      {
        "id": "topic_01_life_111",
        "num": 111,
        "sentence_hira": "すずきさんは <u>せっけん</u> を/が 探しています。",
        "sentence_kanji": "すずきさんは <u>石鹸</u> を/が 探しています。",
        "kanji_target": "石鹸",
        "hira_target": "せっけん",
        "kanji_options": [
          "荷物",
          "石鹸",
          "服",
          "ベッド"
        ],
        "hira_options": [
          "にもつ",
          "せっけん",
          "ふく",
          "べっど"
        ],
        "romaji": "sekken",
        "vi_meaning": "xà phòng"
      },
      {
        "id": "topic_01_life_112",
        "num": 112,
        "sentence_hira": "すずきさんは <u>たおる</u> を/が 探しています。",
        "sentence_kanji": "すずきさんは <u>タオル</u> を/が 探しています。",
        "kanji_target": "タオル",
        "hira_target": "たおる",
        "kanji_options": [
          "ゴミ箱",
          "ゴミ箱",
          "荷物",
          "タオル"
        ],
        "hira_options": [
          "ごみばこ",
          "ごみばこ",
          "にもつ",
          "たおる"
        ],
        "romaji": "taoru",
        "vi_meaning": "khăn tắm"
      },
      {
        "id": "topic_01_life_113",
        "num": 113,
        "sentence_hira": "すずきさんは <u>はぶらし</u> を/が 探しています。",
        "sentence_kanji": "すずきさんは <u>歯ブラシ</u> を/が 探しています。",
        "kanji_target": "歯ブラシ",
        "hira_target": "はぶらし",
        "kanji_options": [
          "写真",
          "歯ブラシ",
          "箱",
          "写真"
        ],
        "hira_options": [
          "しゃしん",
          "はぶらし",
          "はこ",
          "しゃしん"
        ],
        "romaji": "haburashi",
        "vi_meaning": "bàn chải đánh răng"
      },
      {
        "id": "topic_01_life_114",
        "num": 114,
        "sentence_hira": "すずきさんは <u>ごみばこ</u> を/が 探しています。",
        "sentence_kanji": "すずきさんは <u>ゴミ箱</u> を/が 探しています。",
        "kanji_target": "ゴミ箱",
        "hira_target": "ごみばこ",
        "kanji_options": [
          "テレビ",
          "ゴミ箱",
          "エアコン",
          "切手"
        ],
        "hira_options": [
          "てれび",
          "ごみばこ",
          "えあこん",
          "きって"
        ],
        "romaji": "gomibako",
        "vi_meaning": "thùng rác"
      },
      {
        "id": "topic_01_life_115",
        "num": 115,
        "sentence_hira": "すずきさんは <u>とけい</u> を/が 探しています。",
        "sentence_kanji": "すずきさんは <u>時計</u> を/が 探しています。",
        "kanji_target": "時計",
        "hira_target": "とけい",
        "kanji_options": [
          "掃除機",
          "歯ブラシ",
          "時計",
          "冷蔵庫"
        ],
        "hira_options": [
          "そうじき",
          "はぶらし",
          "とけい",
          "れいぞうこ"
        ],
        "romaji": "tokei",
        "vi_meaning": "đồng hồ"
      },
      {
        "id": "topic_01_life_116",
        "num": 116,
        "sentence_hira": "すずきさんは <u>でんわ</u> を/が 探しています。",
        "sentence_kanji": "すずきさんは <u>電話</u> を/が 探しています。",
        "kanji_target": "電話",
        "hira_target": "でんわ",
        "kanji_options": [
          "電話",
          "椅子",
          "エアコン",
          "窓"
        ],
        "hira_options": [
          "でんわ",
          "いす",
          "えあこん",
          "まど"
        ],
        "romaji": "denwa",
        "vi_meaning": "điện thoại"
      },
      {
        "id": "topic_01_life_117",
        "num": 117,
        "sentence_hira": "すずきさんは <u>しゃしん</u> を/が 探しています。",
        "sentence_kanji": "すずきさんは <u>写真</u> を/が 探しています。",
        "kanji_target": "写真",
        "hira_target": "しゃしん",
        "kanji_options": [
          "写真",
          "切手",
          "窓",
          "庭"
        ],
        "hira_options": [
          "しゃしん",
          "きって",
          "まど",
          "にわ"
        ],
        "romaji": "shashin",
        "vi_meaning": "bức ảnh"
      },
      {
        "id": "topic_01_life_118",
        "num": 118,
        "sentence_hira": "すずきさんは <u>ふく</u> を/が 探しています。",
        "sentence_kanji": "すずきさんは <u>服</u> を/が 探しています。",
        "kanji_target": "服",
        "hira_target": "ふく",
        "kanji_options": [
          "台所",
          "カレンダー",
          "服",
          "石鹸"
        ],
        "hira_options": [
          "だいどころ",
          "かれんだー",
          "ふく",
          "せっけん"
        ],
        "romaji": "fuku",
        "vi_meaning": "quần áo"
      },
      {
        "id": "topic_01_life_119",
        "num": 119,
        "sentence_hira": "すずきさんは <u>くつ</u> を/が 探しています。",
        "sentence_kanji": "すずきさんは <u>靴</u> を/が 探しています。",
        "kanji_target": "靴",
        "hira_target": "くつ",
        "kanji_options": [
          "歯ブラシ",
          "時計",
          "傘",
          "靴"
        ],
        "hira_options": [
          "はぶらし",
          "とけい",
          "かさ",
          "くつ"
        ],
        "romaji": "kutsu",
        "vi_meaning": "giày"
      },
      {
        "id": "topic_01_life_120",
        "num": 120,
        "sentence_hira": "すずきさんは <u>かさ</u> を/が 探しています。",
        "sentence_kanji": "すずきさんは <u>傘</u> を/が 探しています。",
        "kanji_target": "傘",
        "hira_target": "かさ",
        "kanji_options": [
          "タオル",
          "ドア",
          "傘",
          "机"
        ],
        "hira_options": [
          "たおる",
          "どあ",
          "かさ",
          "つくえ"
        ],
        "romaji": "kasa",
        "vi_meaning": "cây dù/ô"
      },
      {
        "id": "topic_01_life_121",
        "num": 121,
        "sentence_hira": "すずきさんは <u>はこ</u> を/が 探しています。",
        "sentence_kanji": "すずきさんは <u>箱</u> を/が 探しています。",
        "kanji_target": "箱",
        "hira_target": "はこ",
        "kanji_options": [
          "箱",
          "台所",
          "服",
          "布団"
        ],
        "hira_options": [
          "はこ",
          "だいどころ",
          "ふく",
          "ふとん"
        ],
        "romaji": "hako",
        "vi_meaning": "cái hộp"
      },
      {
        "id": "topic_01_life_122",
        "num": 122,
        "sentence_hira": "すずきさんは <u>さら</u> を/が 探しています。",
        "sentence_kanji": "すずきさんは <u>皿</u> を/が 探しています。",
        "kanji_target": "皿",
        "hira_target": "さら",
        "kanji_options": [
          "皿",
          "カレンダー",
          "写真",
          "本"
        ],
        "hira_options": [
          "さら",
          "かれんだー",
          "しゃしん",
          "ほん"
        ],
        "romaji": "sara",
        "vi_meaning": "dĩa/đĩa"
      },
      {
        "id": "topic_01_life_123",
        "num": 123,
        "sentence_hira": "すずきさんは <u>こっぷ</u> を/が 探しています。",
        "sentence_kanji": "すずきさんは <u>コップ</u> を/が 探しています。",
        "kanji_target": "コップ",
        "hira_target": "こっぷ",
        "kanji_options": [
          "コップ",
          "雑誌",
          "ゴミ箱",
          "机"
        ],
        "hira_options": [
          "こっぷ",
          "ざっし",
          "ごみばこ",
          "つくえ"
        ],
        "romaji": "koppu",
        "vi_meaning": "cái cốc"
      },
      {
        "id": "topic_01_life_124",
        "num": 124,
        "sentence_hira": "すずきさんは <u>はし</u> を/が 探しています。",
        "sentence_kanji": "すずきさんは <u>箸</u> を/が 探しています。",
        "kanji_target": "箸",
        "hira_target": "はし",
        "kanji_options": [
          "ドア",
          "箸",
          "玄関",
          "服"
        ],
        "hira_options": [
          "どあ",
          "はし",
          "げんかん",
          "ふく"
        ],
        "romaji": "hashi",
        "vi_meaning": "đôi đũa"
      },
      {
        "id": "topic_01_life_125",
        "num": 125,
        "sentence_hira": "すずきさんは <u>すぷーん</u> を/が 探しています。",
        "sentence_kanji": "すずきさんは <u>スプーン</u> を/が 探しています。",
        "kanji_target": "スプーン",
        "hira_target": "すぷーん",
        "kanji_options": [
          "冷蔵庫",
          "スプーン",
          "時計",
          "掃除機"
        ],
        "hira_options": [
          "れいぞうこ",
          "すぷーん",
          "とけい",
          "そうじき"
        ],
        "romaji": "supuun",
        "vi_meaning": "muỗng/thìa"
      },
      {
        "id": "topic_01_life_126",
        "num": 126,
        "sentence_hira": "すずきさんは <u>ないふ</u> を/が 探しています。",
        "sentence_kanji": "すずきさんは <u>ナイフ</u> を/が 探しています。",
        "kanji_target": "ナイフ",
        "hira_target": "ないふ",
        "kanji_options": [
          "家",
          "ナイフ",
          "写真",
          "鍵"
        ],
        "hira_options": [
          "いえ",
          "ないふ",
          "しゃしん",
          "かぎ"
        ],
        "romaji": "naifu",
        "vi_meaning": "con dao"
      },
      {
        "id": "topic_01_life_127",
        "num": 127,
        "sentence_hira": "すずきさんは <u>ふぉーく</u> を/が 探しています。",
        "sentence_kanji": "すずきさんは <u>フォーク</u> を/が 探しています。",
        "kanji_target": "フォーク",
        "hira_target": "ふぉーく",
        "kanji_options": [
          "箱",
          "風呂",
          "玄関",
          "フォーク"
        ],
        "hira_options": [
          "はこ",
          "ふろ",
          "げんかん",
          "ふぉーく"
        ],
        "romaji": "fooku",
        "vi_meaning": "nĩa"
      },
      {
        "id": "topic_01_life_128",
        "num": 128,
        "sentence_hira": "すずきさんは <u>しんぶん</u> を/が 探しています。",
        "sentence_kanji": "すずきさんは <u>新聞</u> を/が 探しています。",
        "kanji_target": "新聞",
        "hira_target": "しんぶん",
        "kanji_options": [
          "服",
          "テレビ",
          "新聞",
          "歯ブラシ"
        ],
        "hira_options": [
          "ふく",
          "てれび",
          "しんぶん",
          "はぶらし"
        ],
        "romaji": "shinbun",
        "vi_meaning": "tờ báo"
      },
      {
        "id": "topic_01_life_129",
        "num": 129,
        "sentence_hira": "すずきさんは <u>ほん</u> を/が 探しています。",
        "sentence_kanji": "すずきさんは <u>本</u> を/が 探しています。",
        "kanji_target": "本",
        "hira_target": "ほん",
        "kanji_options": [
          "椅子",
          "ベッド",
          "タオル",
          "本"
        ],
        "hira_options": [
          "いす",
          "べっど",
          "たおる",
          "ほん"
        ],
        "romaji": "hon",
        "vi_meaning": "cuốn sách"
      },
      {
        "id": "topic_01_life_130",
        "num": 130,
        "sentence_hira": "すずきさんは <u>ざっし</u> を/が 探しています。",
        "sentence_kanji": "すずきさんは <u>雑誌</u> を/が 探しています。",
        "kanji_target": "雑誌",
        "hira_target": "ざっし",
        "kanji_options": [
          "椅子",
          "コップ",
          "カレンダー",
          "雑誌"
        ],
        "hira_options": [
          "いす",
          "こっぷ",
          "かれんだー",
          "ざっし"
        ],
        "romaji": "zasshi",
        "vi_meaning": "tạp chí"
      },
      {
        "id": "topic_01_life_131",
        "num": 131,
        "sentence_hira": "すずきさんは <u>てがみ</u> を/が 探しています。",
        "sentence_kanji": "すずきさんは <u>手紙</u> を/が 探しています。",
        "kanji_target": "手紙",
        "hira_target": "てがみ",
        "kanji_options": [
          "手紙",
          "石鹸",
          "皿",
          "荷物"
        ],
        "hira_options": [
          "てがみ",
          "せっけん",
          "さら",
          "にもつ"
        ],
        "romaji": "tegami",
        "vi_meaning": "lá thư"
      },
      {
        "id": "topic_01_life_132",
        "num": 132,
        "sentence_hira": "すずきさんは <u>にもつ</u> を/が 探しています。",
        "sentence_kanji": "すずきさんは <u>荷物</u> を/が 探しています。",
        "kanji_target": "荷物",
        "hira_target": "にもつ",
        "kanji_options": [
          "椅子",
          "荷物",
          "本",
          "タオル"
        ],
        "hira_options": [
          "いす",
          "にもつ",
          "ほん",
          "たおる"
        ],
        "romaji": "nimotsu",
        "vi_meaning": "hành lý/hàng hóa"
      },
      {
        "id": "topic_01_life_133",
        "num": 133,
        "sentence_hira": "すずきさんは <u>きって</u> を/が 探しています。",
        "sentence_kanji": "すずきさんは <u>切手</u> を/が 探しています。",
        "kanji_target": "切手",
        "hira_target": "きって",
        "kanji_options": [
          "切手",
          "葉書",
          "ベッド",
          "時計"
        ],
        "hira_options": [
          "きって",
          "はがき",
          "べっど",
          "とけい"
        ],
        "romaji": "kitte",
        "vi_meaning": "tem thư"
      },
      {
        "id": "topic_01_life_134",
        "num": 134,
        "sentence_hira": "すずきさんは <u>はがき</u> を/が 探しています。",
        "sentence_kanji": "すずきさんは <u>葉書</u> を/が 探しています。",
        "kanji_target": "葉書",
        "hira_target": "はがき",
        "kanji_options": [
          "葉書",
          "靴",
          "風呂",
          "本"
        ],
        "hira_options": [
          "はがき",
          "くつ",
          "ふろ",
          "ほん"
        ],
        "romaji": "hagaki",
        "vi_meaning": "bưu thiếp"
      },
      {
        "id": "topic_01_life_135",
        "num": 135,
        "sentence_hira": "すずきさんは <u>かれんだー</u> を/が 探しています。",
        "sentence_kanji": "すずきさんは <u>カレンダー</u> を/が 探しています。",
        "kanji_target": "カレンダー",
        "hira_target": "かれんだー",
        "kanji_options": [
          "カレンダー",
          "葉書",
          "コップ",
          "風呂"
        ],
        "hira_options": [
          "かれんだー",
          "はがき",
          "こっぷ",
          "ふろ"
        ],
        "romaji": "kareendaa",
        "vi_meaning": "lịch"
      },
      {
        "id": "topic_01_life_136",
        "num": 136,
        "sentence_hira": "すずきさんは <u>へや</u> を/が 探しています。",
        "sentence_kanji": "すずきさんは <u>部屋</u> を/が 探しています。",
        "kanji_target": "部屋",
        "hira_target": "へや",
        "kanji_options": [
          "部屋",
          "台所",
          "靴",
          "雑誌"
        ],
        "hira_options": [
          "へや",
          "だいどころ",
          "くつ",
          "ざっし"
        ],
        "romaji": "heya",
        "vi_meaning": "phòng"
      },
      {
        "id": "topic_01_life_137",
        "num": 137,
        "sentence_hira": "すずきさんは <u>いえ</u> を/が 探しています。",
        "sentence_kanji": "すずきさんは <u>家</u> を/が 探しています。",
        "kanji_target": "家",
        "hira_target": "いえ",
        "kanji_options": [
          "切手",
          "本",
          "家",
          "新聞"
        ],
        "hira_options": [
          "きって",
          "ほん",
          "いえ",
          "しんぶん"
        ],
        "romaji": "ie",
        "vi_meaning": "nhà"
      },
      {
        "id": "topic_01_life_138",
        "num": 138,
        "sentence_hira": "すずきさんは <u>だいどころ</u> を/が 探しています。",
        "sentence_kanji": "すずきさんは <u>台所</u> を/が 探しています。",
        "kanji_target": "台所",
        "hira_target": "だいどころ",
        "kanji_options": [
          "手紙",
          "台所",
          "コップ",
          "雑誌"
        ],
        "hira_options": [
          "てがみ",
          "だいどころ",
          "こっぷ",
          "ざっし"
        ],
        "romaji": "daidokoro",
        "vi_meaning": "bếp"
      },
      {
        "id": "topic_01_life_139",
        "num": 139,
        "sentence_hira": "すずきさんは <u>ふろ</u> を/が 探しています。",
        "sentence_kanji": "すずきさんは <u>風呂</u> を/が 探しています。",
        "kanji_target": "風呂",
        "hira_target": "ふろ",
        "kanji_options": [
          "冷蔵庫",
          "傘",
          "カレンダー",
          "風呂"
        ],
        "hira_options": [
          "れいぞうこ",
          "かさ",
          "かれんだー",
          "ふろ"
        ],
        "romaji": "furo",
        "vi_meaning": "bồn tắm"
      },
      {
        "id": "topic_01_life_140",
        "num": 140,
        "sentence_hira": "すずきさんは <u>にわ</u> を/が 探しています。",
        "sentence_kanji": "すずきさんは <u>庭</u> を/が 探しています。",
        "kanji_target": "庭",
        "hira_target": "にわ",
        "kanji_options": [
          "窓",
          "椅子",
          "写真",
          "庭"
        ],
        "hira_options": [
          "まど",
          "いす",
          "しゃしん",
          "にわ"
        ],
        "romaji": "niwa",
        "vi_meaning": "sân vườn"
      },
      {
        "id": "topic_01_life_141",
        "num": 141,
        "sentence_hira": "すずきさんは <u>げんかん</u> を/が 探しています。",
        "sentence_kanji": "すずきさんは <u>玄関</u> を/が 探しています。",
        "kanji_target": "玄関",
        "hira_target": "げんかん",
        "kanji_options": [
          "洗濯機",
          "歯ブラシ",
          "玄関",
          "掃除機"
        ],
        "hira_options": [
          "せんたくき",
          "はぶらし",
          "げんかん",
          "そうじき"
        ],
        "romaji": "genkan",
        "vi_meaning": "lối vào"
      },
      {
        "id": "topic_01_life_142",
        "num": 142,
        "sentence_hira": "すずきさんは <u>まど</u> を/が 探しています。",
        "sentence_kanji": "すずきさんは <u>窓</u> を/が 探しています。",
        "kanji_target": "窓",
        "hira_target": "まど",
        "kanji_options": [
          "窓",
          "庭",
          "タオル",
          "歯ブラシ"
        ],
        "hira_options": [
          "まど",
          "にわ",
          "たおる",
          "はぶらし"
        ],
        "romaji": "mado",
        "vi_meaning": "cửa sổ"
      },
      {
        "id": "topic_01_life_143",
        "num": 143,
        "sentence_hira": "すずきさんは <u>どあ</u> を/が 探しています。",
        "sentence_kanji": "すずきさんは <u>ドア</u> を/が 探しています。",
        "kanji_target": "ドア",
        "hira_target": "どあ",
        "kanji_options": [
          "ドア",
          "タオル",
          "靴",
          "机"
        ],
        "hira_options": [
          "どあ",
          "たおる",
          "くつ",
          "つくえ"
        ],
        "romaji": "doa",
        "vi_meaning": "cửa chính"
      },
      {
        "id": "topic_01_life_144",
        "num": 144,
        "sentence_hira": "すずきさんは <u>かぎ</u> を/が 探しています。",
        "sentence_kanji": "すずきさんは <u>鍵</u> を/が 探しています。",
        "kanji_target": "鍵",
        "hira_target": "かぎ",
        "kanji_options": [
          "玄関",
          "荷物",
          "鍵",
          "新聞"
        ],
        "hira_options": [
          "げんかん",
          "にもつ",
          "かぎ",
          "しんぶん"
        ],
        "romaji": "kagi",
        "vi_meaning": "chìa khóa"
      },
      {
        "id": "topic_01_life_145",
        "num": 145,
        "sentence_hira": "すずきさんは <u>でんき</u> を/が 探しています。",
        "sentence_kanji": "すずきさんは <u>電気</u> を/が 探しています。",
        "kanji_target": "電気",
        "hira_target": "でんき",
        "kanji_options": [
          "フォーク",
          "テレビ",
          "手紙",
          "電気"
        ],
        "hira_options": [
          "ふぉーく",
          "てれび",
          "てがみ",
          "でんき"
        ],
        "romaji": "denki",
        "vi_meaning": "đèn/điện"
      },
      {
        "id": "topic_01_life_146",
        "num": 146,
        "sentence_hira": "すずきさんは <u>れいぞうこ</u> を/が 探しています。",
        "sentence_kanji": "すずきさんは <u>冷蔵庫</u> を/が 探しています。",
        "kanji_target": "冷蔵庫",
        "hira_target": "れいぞうこ",
        "kanji_options": [
          "冷蔵庫",
          "ゴミ箱",
          "タオル",
          "エアコン"
        ],
        "hira_options": [
          "れいぞうこ",
          "ごみばこ",
          "たおる",
          "えあこん"
        ],
        "romaji": "reizouko",
        "vi_meaning": "tủ lạnh"
      },
      {
        "id": "topic_01_life_147",
        "num": 147,
        "sentence_hira": "すずきさんは <u>せんたくき</u> を/が 探しています。",
        "sentence_kanji": "すずきさんは <u>洗濯機</u> を/が 探しています。",
        "kanji_target": "洗濯機",
        "hira_target": "せんたくき",
        "kanji_options": [
          "机",
          "洗濯機",
          "服",
          "鏡"
        ],
        "hira_options": [
          "つくえ",
          "せんたくき",
          "ふく",
          "かがみ"
        ],
        "romaji": "sentakuki",
        "vi_meaning": "máy giặt"
      },
      {
        "id": "topic_01_life_148",
        "num": 148,
        "sentence_hira": "すずきさんは <u>そうじき</u> を/が 探しています。",
        "sentence_kanji": "すずきさんは <u>掃除機</u> を/が 探しています。",
        "kanji_target": "掃除機",
        "hira_target": "そうじき",
        "kanji_options": [
          "切手",
          "掃除機",
          "箱",
          "電気"
        ],
        "hira_options": [
          "きって",
          "そうじき",
          "はこ",
          "でんき"
        ],
        "romaji": "soujiki",
        "vi_meaning": "máy hút bụi"
      },
      {
        "id": "topic_01_life_149",
        "num": 149,
        "sentence_hira": "すずきさんは <u>えあこん</u> を/が 探しています。",
        "sentence_kanji": "すずきさんは <u>エアコン</u> を/が 探しています。",
        "kanji_target": "エアコン",
        "hira_target": "えあこん",
        "kanji_options": [
          "歯ブラシ",
          "エアコン",
          "カレンダー",
          "風呂"
        ],
        "hira_options": [
          "はぶらし",
          "えあこん",
          "かれんだー",
          "ふろ"
        ],
        "romaji": "eakon",
        "vi_meaning": "máy điều hòa"
      },
      {
        "id": "topic_01_life_150",
        "num": 150,
        "sentence_hira": "すずきさんは <u>てれび</u> を/が 探しています。",
        "sentence_kanji": "すずきさんは <u>テレビ</u> を/が 探しています。",
        "kanji_target": "テレビ",
        "hira_target": "てれび",
        "kanji_options": [
          "家",
          "台所",
          "電気",
          "テレビ"
        ],
        "hira_options": [
          "いえ",
          "だいどころ",
          "でんき",
          "てれび"
        ],
        "romaji": "terebi",
        "vi_meaning": "tivi"
      },
      {
        "id": "topic_01_life_151",
        "num": 151,
        "sentence_hira": "すずきさんは <u>べっど</u> を/が 探しています。",
        "sentence_kanji": "すずきさんは <u>ベッド</u> を/が 探しています。",
        "kanji_target": "ベッド",
        "hira_target": "べっど",
        "kanji_options": [
          "箸",
          "ベッド",
          "机",
          "掃除機"
        ],
        "hira_options": [
          "はし",
          "べっど",
          "つくえ",
          "そうじき"
        ],
        "romaji": "beddo",
        "vi_meaning": "giường"
      },
      {
        "id": "topic_01_life_152",
        "num": 152,
        "sentence_hira": "すずきさんは <u>ふとん</u> を/が 探しています。",
        "sentence_kanji": "すずきさんは <u>布団</u> を/が 探しています。",
        "kanji_target": "布団",
        "hira_target": "ふとん",
        "kanji_options": [
          "荷物",
          "玄関",
          "写真",
          "布団"
        ],
        "hira_options": [
          "にもつ",
          "げんかん",
          "しゃしん",
          "ふとん"
        ],
        "romaji": "futon",
        "vi_meaning": "nệm/chăn"
      },
      {
        "id": "topic_01_life_153",
        "num": 153,
        "sentence_hira": "すずきさんは <u>つくえ</u> を/が 探しています。",
        "sentence_kanji": "すずきさんは <u>机</u> を/が 探しています。",
        "kanji_target": "机",
        "hira_target": "つくえ",
        "kanji_options": [
          "洗濯機",
          "机",
          "荷物",
          "靴"
        ],
        "hira_options": [
          "せんたくき",
          "つくえ",
          "にもつ",
          "くつ"
        ],
        "romaji": "tsukue",
        "vi_meaning": "bàn học"
      },
      {
        "id": "topic_01_life_154",
        "num": 154,
        "sentence_hira": "すずきさんは <u>いす</u> を/が 探しています。",
        "sentence_kanji": "すずきさんは <u>椅子</u> を/が 探しています。",
        "kanji_target": "椅子",
        "hira_target": "いす",
        "kanji_options": [
          "テレビ",
          "風呂",
          "電話",
          "椅子"
        ],
        "hira_options": [
          "てれび",
          "ふろ",
          "でんわ",
          "いす"
        ],
        "romaji": "isu",
        "vi_meaning": "ghế"
      },
      {
        "id": "topic_01_life_155",
        "num": 155,
        "sentence_hira": "すずきさんは <u>かがみ</u> を/が 探しています。",
        "sentence_kanji": "すずきさんは <u>鏡</u> を/が 探しています。",
        "kanji_target": "鏡",
        "hira_target": "かがみ",
        "kanji_options": [
          "鍵",
          "切手",
          "鏡",
          "布団"
        ],
        "hira_options": [
          "かぎ",
          "きって",
          "かがみ",
          "ふとん"
        ],
        "romaji": "kagami",
        "vi_meaning": "gương"
      }
    ]
  },
  {
    "id": "topic_02_traffic",
    "name": "2. Giao Thông & Đi Lại",
    "icon": "🚗",
    "desc": "Phương tiện, đường sá, vé tàu xe và di chuyển (145 câu)",
    "questions": [
      {
        "id": "topic_02_traffic_1",
        "num": 1,
        "sentence_hira": "すずきさんは <u>でんしゃ</u> を/が 探しています。",
        "sentence_kanji": "すずきさんは <u>電車</u> を/が 探しています。",
        "kanji_target": "電車",
        "hira_target": "でんしゃ",
        "kanji_options": [
          "角",
          "電車",
          "自転車",
          "普通"
        ],
        "hira_options": [
          "かど",
          "でんしゃ",
          "じてんしゃ",
          "ふつう"
        ],
        "romaji": "densha",
        "vi_meaning": "tàu điện"
      },
      {
        "id": "topic_02_traffic_2",
        "num": 2,
        "sentence_hira": "すずきさんは <u>ちかてつ</u> を/が 探しています。",
        "sentence_kanji": "すずきさんは <u>地下鉄</u> を/が 探しています。",
        "kanji_target": "地下鉄",
        "hira_target": "ちかてつ",
        "kanji_options": [
          "地下鉄",
          "タクシー",
          "急行",
          "電車"
        ],
        "hira_options": [
          "ちかてつ",
          "たくしー",
          "きゅうこう",
          "でんしゃ"
        ],
        "romaji": "chikatetsu",
        "vi_meaning": "tàu điện ngầm"
      },
      {
        "id": "topic_02_traffic_3",
        "num": 3,
        "sentence_hira": "すずきさんは <u>しんかんせん</u> を/が 探しています。",
        "sentence_kanji": "すずきさんは <u>新幹線</u> を/が 探しています。",
        "kanji_target": "新幹線",
        "hira_target": "しんかんせん",
        "kanji_options": [
          "普通",
          "乗車券",
          "新幹線",
          "定期券"
        ],
        "hira_options": [
          "ふつう",
          "じょうしゃけん",
          "しんかんせん",
          "ていきけん"
        ],
        "romaji": "shinkansen",
        "vi_meaning": "tàu siêu tốc"
      },
      {
        "id": "topic_02_traffic_4",
        "num": 4,
        "sentence_hira": "すずきさんは <u>ばす</u> を/が 探しています。",
        "sentence_kanji": "すずきさんは <u>バス</u> を/が 探しています。",
        "kanji_target": "バス",
        "hira_target": "ばす",
        "kanji_options": [
          "バス",
          "電車",
          "特急",
          "駅"
        ],
        "hira_options": [
          "ばす",
          "でんしゃ",
          "とっきゅう",
          "えき"
        ],
        "romaji": "basu",
        "vi_meaning": "xe buýt"
      },
      {
        "id": "topic_02_traffic_5",
        "num": 5,
        "sentence_hira": "すずきさんは <u>たくしー</u> を/が 探しています。",
        "sentence_kanji": "すずきさんは <u>タクシー</u> を/が 探しています。",
        "kanji_target": "タクシー",
        "hira_target": "たくしー",
        "kanji_options": [
          "タクシー",
          "飛行機",
          "交差点",
          "改札口"
        ],
        "hira_options": [
          "たくしー",
          "ひこうき",
          "こうさてん",
          "かいさつぐち"
        ],
        "romaji": "takushii",
        "vi_meaning": "xe taxi"
      },
      {
        "id": "topic_02_traffic_6",
        "num": 6,
        "sentence_hira": "すずきさんは <u>ひこうき</u> を/が 探しています。",
        "sentence_kanji": "すずきさんは <u>飛行機</u> を/が 探しています。",
        "kanji_target": "飛行機",
        "hira_target": "ひこうき",
        "kanji_options": [
          "地下鉄",
          "駅",
          "特急",
          "飛行機"
        ],
        "hira_options": [
          "ちかてつ",
          "えき",
          "とっきゅう",
          "ひこうき"
        ],
        "romaji": "hikouki",
        "vi_meaning": "máy bay"
      },
      {
        "id": "topic_02_traffic_7",
        "num": 7,
        "sentence_hira": "すずきさんは <u>ふね</u> を/が 探しています。",
        "sentence_kanji": "すずきさんは <u>船</u> を/が 探しています。",
        "kanji_target": "船",
        "hira_target": "ふね",
        "kanji_options": [
          "交差点",
          "船",
          "入口",
          "電車"
        ],
        "hira_options": [
          "こうさてん",
          "ふね",
          "いりぐち",
          "でんしゃ"
        ],
        "romaji": "fune",
        "vi_meaning": "con tàu/thuyền"
      },
      {
        "id": "topic_02_traffic_8",
        "num": 8,
        "sentence_hira": "すずきさんは <u>じてんしゃ</u> を/が 探しています。",
        "sentence_kanji": "すずきさんは <u>自転車</u> を/が 探しています。",
        "kanji_target": "自転車",
        "hira_target": "じてんしゃ",
        "kanji_options": [
          "自転車",
          "道路",
          "交差点",
          "特急"
        ],
        "hira_options": [
          "じてんしゃ",
          "どうろ",
          "こうさてん",
          "とっきゅう"
        ],
        "romaji": "jitensha",
        "vi_meaning": "xe đạp"
      },
      {
        "id": "topic_02_traffic_9",
        "num": 9,
        "sentence_hira": "すずきさんは <u>くるま</u> を/が 探しています。",
        "sentence_kanji": "すずきさんは <u>車</u> を/が 探しています。",
        "kanji_target": "車",
        "hira_target": "くるま",
        "kanji_options": [
          "特急",
          "車",
          "信号",
          "急行"
        ],
        "hira_options": [
          "とっきゅう",
          "くるま",
          "しんごう",
          "きゅうこう"
        ],
        "romaji": "kuruma",
        "vi_meaning": "xe hơi"
      },
      {
        "id": "topic_02_traffic_10",
        "num": 10,
        "sentence_hira": "すずきさんは <u>えき</u> を/が 探しています。",
        "sentence_kanji": "すずきさんは <u>駅</u> を/が 探しています。",
        "kanji_target": "駅",
        "hira_target": "えき",
        "kanji_options": [
          "橋",
          "改札口",
          "電車",
          "駅"
        ],
        "hira_options": [
          "はし",
          "かいさつぐち",
          "でんしゃ",
          "えき"
        ],
        "romaji": "eki",
        "vi_meaning": "nhà ga"
      },
      {
        "id": "topic_02_traffic_11",
        "num": 11,
        "sentence_hira": "すずきさんは <u>くうこう</u> を/が 探しています。",
        "sentence_kanji": "すずきさんは <u>空港</u> を/が 探しています。",
        "kanji_target": "空港",
        "hira_target": "くうこう",
        "kanji_options": [
          "地下鉄",
          "空港",
          "自転車",
          "車"
        ],
        "hira_options": [
          "ちかてつ",
          "くうこう",
          "じてんしゃ",
          "くるま"
        ],
        "romaji": "kuukou",
        "vi_meaning": "sân bay"
      },
      {
        "id": "topic_02_traffic_12",
        "num": 12,
        "sentence_hira": "すずきさんは <u>ばすてい</u> を/が 探しています。",
        "sentence_kanji": "すずきさんは <u>バス停</u> を/が 探しています。",
        "kanji_target": "バス停",
        "hira_target": "ばすてい",
        "kanji_options": [
          "バス停",
          "空港",
          "船",
          "入口"
        ],
        "hira_options": [
          "ばすてい",
          "くうこう",
          "ふね",
          "いりぐち"
        ],
        "romaji": "basutei",
        "vi_meaning": "trạm xe buýt"
      },
      {
        "id": "topic_02_traffic_13",
        "num": 13,
        "sentence_hira": "すずきさんは <u>みなと</u> を/が 探しています。",
        "sentence_kanji": "すずきさんは <u>港</u> を/が 探しています。",
        "kanji_target": "港",
        "hira_target": "みなと",
        "kanji_options": [
          "飛行機",
          "船",
          "特急",
          "港"
        ],
        "hira_options": [
          "ひこうき",
          "ふね",
          "とっきゅう",
          "みなと"
        ],
        "romaji": "minato",
        "vi_meaning": "cảng"
      },
      {
        "id": "topic_02_traffic_14",
        "num": 14,
        "sentence_hira": "すずきさんは <u>きっぷ</u> を/が 探しています。",
        "sentence_kanji": "すずきさんは <u>切符</u> を/が 探しています。",
        "kanji_target": "切符",
        "hira_target": "きっぷ",
        "kanji_options": [
          "ホーム",
          "踏切",
          "空港",
          "切符"
        ],
        "hira_options": [
          "ほーむ",
          "ふみきり",
          "くうこう",
          "きっぷ"
        ],
        "romaji": "kippu",
        "vi_meaning": "vé tàu/xe"
      },
      {
        "id": "topic_02_traffic_15",
        "num": 15,
        "sentence_hira": "すずきさんは <u>ていきけん</u> を/が 探しています。",
        "sentence_kanji": "すずきさんは <u>定期券</u> を/が 探しています。",
        "kanji_target": "定期券",
        "hira_target": "ていきけん",
        "kanji_options": [
          "道路",
          "定期券",
          "バス停",
          "船"
        ],
        "hira_options": [
          "どうろ",
          "ていきけん",
          "ばすてい",
          "ふね"
        ],
        "romaji": "teikiken",
        "vi_meaning": "vé tháng"
      },
      {
        "id": "topic_02_traffic_16",
        "num": 16,
        "sentence_hira": "すずきさんは <u>じょうしゃけん</u> を/が 探しています。",
        "sentence_kanji": "すずきさんは <u>乗車券</u> を/が 探しています。",
        "kanji_target": "乗車券",
        "hira_target": "じょうしゃけん",
        "kanji_options": [
          "信号",
          "定期券",
          "港",
          "乗車券"
        ],
        "hira_options": [
          "しんごう",
          "ていきけん",
          "みなと",
          "じょうしゃけん"
        ],
        "romaji": "joushaken",
        "vi_meaning": "vé xe"
      },
      {
        "id": "topic_02_traffic_17",
        "num": 17,
        "sentence_hira": "すずきさんは <u>とっきゅう</u> を/が 探しています。",
        "sentence_kanji": "すずきさんは <u>特急</u> を/が 探しています。",
        "kanji_target": "特急",
        "hira_target": "とっきゅう",
        "kanji_options": [
          "港",
          "交差点",
          "特急",
          "タクシー"
        ],
        "hira_options": [
          "みなと",
          "こうさてん",
          "とっきゅう",
          "たくしー"
        ],
        "romaji": "tokkyuu",
        "vi_meaning": "tàu tốc hành"
      },
      {
        "id": "topic_02_traffic_18",
        "num": 18,
        "sentence_hira": "すずきさんは <u>きゅうこう</u> を/が 探しています。",
        "sentence_kanji": "すずきさんは <u>急行</u> を/が 探しています。",
        "kanji_target": "急行",
        "hira_target": "きゅうこう",
        "kanji_options": [
          "急行",
          "タクシー",
          "交差点",
          "新幹線"
        ],
        "hira_options": [
          "きゅうこう",
          "たくしー",
          "こうさてん",
          "しんかんせん"
        ],
        "romaji": "kyuukou",
        "vi_meaning": "tàu nhanh"
      },
      {
        "id": "topic_02_traffic_19",
        "num": 19,
        "sentence_hira": "すずきさんは <u>ふつう</u> を/が 探しています。",
        "sentence_kanji": "すずきさんは <u>普通</u> を/が 探しています。",
        "kanji_target": "普通",
        "hira_target": "ふつう",
        "kanji_options": [
          "定期券",
          "電車",
          "普通",
          "バス"
        ],
        "hira_options": [
          "ていきけん",
          "でんしゃ",
          "ふつう",
          "ばす"
        ],
        "romaji": "futsuu",
        "vi_meaning": "tàu thường"
      },
      {
        "id": "topic_02_traffic_20",
        "num": 20,
        "sentence_hira": "すずきさんは <u>ほーむ</u> を/が 探しています。",
        "sentence_kanji": "すずきさんは <u>ホーム</u> を/が 探しています。",
        "kanji_target": "ホーム",
        "hira_target": "ほーむ",
        "kanji_options": [
          "飛行機",
          "道路",
          "切符",
          "ホーム"
        ],
        "hira_options": [
          "ひこうき",
          "どうろ",
          "きっぷ",
          "ほーむ"
        ],
        "romaji": "hoomu",
        "vi_meaning": "sân ga"
      },
      {
        "id": "topic_02_traffic_21",
        "num": 21,
        "sentence_hira": "すずきさんは <u>かいさつぐち</u> を/が 探しています。",
        "sentence_kanji": "すずきさんは <u>改札口</u> を/が 探しています。",
        "kanji_target": "改札口",
        "hira_target": "かいさつぐち",
        "kanji_options": [
          "改札口",
          "地下鉄",
          "急行",
          "港"
        ],
        "hira_options": [
          "かいさつぐち",
          "ちかてつ",
          "きゅうこう",
          "みなと"
        ],
        "romaji": "kaisatsuguchi",
        "vi_meaning": "cổng soát vé"
      },
      {
        "id": "topic_02_traffic_22",
        "num": 22,
        "sentence_hira": "すずきさんは <u>でぐち</u> を/が 探しています。",
        "sentence_kanji": "すずきさんは <u>出口</u> を/が 探しています。",
        "kanji_target": "出口",
        "hira_target": "でぐち",
        "kanji_options": [
          "出口",
          "バス停",
          "信号",
          "入口"
        ],
        "hira_options": [
          "でぐち",
          "ばすてい",
          "しんごう",
          "いりぐち"
        ],
        "romaji": "deguchi",
        "vi_meaning": "lối ra"
      },
      {
        "id": "topic_02_traffic_23",
        "num": 23,
        "sentence_hira": "すずきさんは <u>いりぐち</u> を/が 探しています。",
        "sentence_kanji": "すずきさんは <u>入口</u> を/が 探しています。",
        "kanji_target": "入口",
        "hira_target": "いりぐち",
        "kanji_options": [
          "駐車場",
          "入口",
          "改札口",
          "船"
        ],
        "hira_options": [
          "ちゅうしゃじょう",
          "いりぐち",
          "かいさつぐち",
          "ふね"
        ],
        "romaji": "iriguchi",
        "vi_meaning": "lối vào"
      },
      {
        "id": "topic_02_traffic_24",
        "num": 24,
        "sentence_hira": "すずきさんは <u>ちゅうしゃじょう</u> を/が 探しています。",
        "sentence_kanji": "すずきさんは <u>駐車場</u> を/が 探しています。",
        "kanji_target": "駐車場",
        "hira_target": "ちゅうしゃじょう",
        "kanji_options": [
          "新幹線",
          "改札口",
          "普通",
          "駐車場"
        ],
        "hira_options": [
          "しんかんせん",
          "かいさつぐち",
          "ふつう",
          "ちゅうしゃじょう"
        ],
        "romaji": "chuushajou",
        "vi_meaning": "bãi đỗ xe"
      },
      {
        "id": "topic_02_traffic_25",
        "num": 25,
        "sentence_hira": "すずきさんは <u>どうろ</u> を/が 探しています。",
        "sentence_kanji": "すずきさんは <u>道路</u> を/が 探しています。",
        "kanji_target": "道路",
        "hira_target": "どうろ",
        "kanji_options": [
          "道路",
          "バス",
          "駅",
          "バス停"
        ],
        "hira_options": [
          "どうろ",
          "ばす",
          "えき",
          "ばすてい"
        ],
        "romaji": "douro",
        "vi_meaning": "đường đi"
      },
      {
        "id": "topic_02_traffic_26",
        "num": 26,
        "sentence_hira": "すずきさんは <u>こうさてん</u> を/が 探しています。",
        "sentence_kanji": "すずきさんは <u>交差点</u> を/が 探しています。",
        "kanji_target": "交差点",
        "hira_target": "こうさてん",
        "kanji_options": [
          "交差点",
          "空港",
          "バス停",
          "車"
        ],
        "hira_options": [
          "こうさてん",
          "くうこう",
          "ばすてい",
          "くるま"
        ],
        "romaji": "kousaten",
        "vi_meaning": "ngã tư"
      },
      {
        "id": "topic_02_traffic_27",
        "num": 27,
        "sentence_hira": "すずきさんは <u>しんごう</u> を/が 探しています。",
        "sentence_kanji": "すずきさんは <u>信号</u> を/が 探しています。",
        "kanji_target": "信号",
        "hira_target": "しんごう",
        "kanji_options": [
          "信号",
          "駅",
          "駅",
          "タクシー"
        ],
        "hira_options": [
          "しんごう",
          "えき",
          "えき",
          "たくしー"
        ],
        "romaji": "shingou",
        "vi_meaning": "đèn giao thông"
      },
      {
        "id": "topic_02_traffic_28",
        "num": 28,
        "sentence_hira": "すずきさんは <u>かど</u> を/が 探しています。",
        "sentence_kanji": "すずきさんは <u>角</u> を/が 探しています。",
        "kanji_target": "角",
        "hira_target": "かど",
        "kanji_options": [
          "角",
          "駐車場",
          "駐車場",
          "踏切"
        ],
        "hira_options": [
          "かど",
          "ちゅうしゃじょう",
          "ちゅうしゃじょう",
          "ふみきり"
        ],
        "romaji": "kado",
        "vi_meaning": "góc đường"
      },
      {
        "id": "topic_02_traffic_29",
        "num": 29,
        "sentence_hira": "すずきさんは <u>はし</u> を/が 探しています。",
        "sentence_kanji": "すずきさんは <u>橋</u> を/が 探しています。",
        "kanji_target": "橋",
        "hira_target": "はし",
        "kanji_options": [
          "切符",
          "新幹線",
          "橋",
          "自転車"
        ],
        "hira_options": [
          "きっぷ",
          "しんかんせん",
          "はし",
          "じてんしゃ"
        ],
        "romaji": "hashi",
        "vi_meaning": "cây cầu"
      },
      {
        "id": "topic_02_traffic_30",
        "num": 30,
        "sentence_hira": "すずきさんは <u>ふみきり</u> を/が 探しています。",
        "sentence_kanji": "すずきさんは <u>踏切</u> を/が 探しています。",
        "kanji_target": "踏切",
        "hira_target": "ふみきり",
        "kanji_options": [
          "駐車場",
          "港",
          "バス停",
          "踏切"
        ],
        "hira_options": [
          "ちゅうしゃじょう",
          "みなと",
          "ばすてい",
          "ふみきり"
        ],
        "romaji": "fumikiri",
        "vi_meaning": "rào chắn tàu"
      },
      {
        "id": "topic_02_traffic_31",
        "num": 31,
        "sentence_hira": "すずきさんは <u>でんしゃ</u> を/が 探しています。",
        "sentence_kanji": "すずきさんは <u>電車</u> を/が 探しています。",
        "kanji_target": "電車",
        "hira_target": "でんしゃ",
        "kanji_options": [
          "電車",
          "急行",
          "新幹線",
          "急行"
        ],
        "hira_options": [
          "でんしゃ",
          "きゅうこう",
          "しんかんせん",
          "きゅうこう"
        ],
        "romaji": "densha",
        "vi_meaning": "tàu điện"
      },
      {
        "id": "topic_02_traffic_32",
        "num": 32,
        "sentence_hira": "すずきさんは <u>ちかてつ</u> を/が 探しています。",
        "sentence_kanji": "すずきさんは <u>地下鉄</u> を/が 探しています。",
        "kanji_target": "地下鉄",
        "hira_target": "ちかてつ",
        "kanji_options": [
          "飛行機",
          "入口",
          "乗車券",
          "地下鉄"
        ],
        "hira_options": [
          "ひこうき",
          "いりぐち",
          "じょうしゃけん",
          "ちかてつ"
        ],
        "romaji": "chikatetsu",
        "vi_meaning": "tàu điện ngầm"
      },
      {
        "id": "topic_02_traffic_33",
        "num": 33,
        "sentence_hira": "すずきさんは <u>しんかんせん</u> を/が 探しています。",
        "sentence_kanji": "すずきさんは <u>新幹線</u> を/が 探しています。",
        "kanji_target": "新幹線",
        "hira_target": "しんかんせん",
        "kanji_options": [
          "定期券",
          "新幹線",
          "バス停",
          "切符"
        ],
        "hira_options": [
          "ていきけん",
          "しんかんせん",
          "ばすてい",
          "きっぷ"
        ],
        "romaji": "shinkansen",
        "vi_meaning": "tàu siêu tốc"
      },
      {
        "id": "topic_02_traffic_34",
        "num": 34,
        "sentence_hira": "すずきさんは <u>ばす</u> を/が 探しています。",
        "sentence_kanji": "すずきさんは <u>バス</u> を/が 探しています。",
        "kanji_target": "バス",
        "hira_target": "ばす",
        "kanji_options": [
          "タクシー",
          "普通",
          "交差点",
          "バス"
        ],
        "hira_options": [
          "たくしー",
          "ふつう",
          "こうさてん",
          "ばす"
        ],
        "romaji": "basu",
        "vi_meaning": "xe buýt"
      },
      {
        "id": "topic_02_traffic_35",
        "num": 35,
        "sentence_hira": "すずきさんは <u>たくしー</u> を/が 探しています。",
        "sentence_kanji": "すずきさんは <u>タクシー</u> を/が 探しています。",
        "kanji_target": "タクシー",
        "hira_target": "たくしー",
        "kanji_options": [
          "橋",
          "タクシー",
          "港",
          "地下鉄"
        ],
        "hira_options": [
          "はし",
          "たくしー",
          "みなと",
          "ちかてつ"
        ],
        "romaji": "takushii",
        "vi_meaning": "xe taxi"
      },
      {
        "id": "topic_02_traffic_36",
        "num": 36,
        "sentence_hira": "すずきさんは <u>ひこうき</u> を/が 探しています。",
        "sentence_kanji": "すずきさんは <u>飛行機</u> を/が 探しています。",
        "kanji_target": "飛行機",
        "hira_target": "ひこうき",
        "kanji_options": [
          "電車",
          "道路",
          "飛行機",
          "乗車券"
        ],
        "hira_options": [
          "でんしゃ",
          "どうろ",
          "ひこうき",
          "じょうしゃけん"
        ],
        "romaji": "hikouki",
        "vi_meaning": "máy bay"
      },
      {
        "id": "topic_02_traffic_37",
        "num": 37,
        "sentence_hira": "すずきさんは <u>ふね</u> を/が 探しています。",
        "sentence_kanji": "すずきさんは <u>船</u> を/が 探しています。",
        "kanji_target": "船",
        "hira_target": "ふね",
        "kanji_options": [
          "タクシー",
          "自転車",
          "船",
          "港"
        ],
        "hira_options": [
          "たくしー",
          "じてんしゃ",
          "ふね",
          "みなと"
        ],
        "romaji": "fune",
        "vi_meaning": "con tàu/thuyền"
      },
      {
        "id": "topic_02_traffic_38",
        "num": 38,
        "sentence_hira": "すずきさんは <u>じてんしゃ</u> を/が 探しています。",
        "sentence_kanji": "すずきさんは <u>自転車</u> を/が 探しています。",
        "kanji_target": "自転車",
        "hira_target": "じてんしゃ",
        "kanji_options": [
          "バス停",
          "ホーム",
          "自転車",
          "乗車券"
        ],
        "hira_options": [
          "ばすてい",
          "ほーむ",
          "じてんしゃ",
          "じょうしゃけん"
        ],
        "romaji": "jitensha",
        "vi_meaning": "xe đạp"
      },
      {
        "id": "topic_02_traffic_39",
        "num": 39,
        "sentence_hira": "すずきさんは <u>くるま</u> を/が 探しています。",
        "sentence_kanji": "すずきさんは <u>車</u> を/が 探しています。",
        "kanji_target": "車",
        "hira_target": "くるま",
        "kanji_options": [
          "バス",
          "車",
          "道路",
          "空港"
        ],
        "hira_options": [
          "ばす",
          "くるま",
          "どうろ",
          "くうこう"
        ],
        "romaji": "kuruma",
        "vi_meaning": "xe hơi"
      },
      {
        "id": "topic_02_traffic_40",
        "num": 40,
        "sentence_hira": "すずきさんは <u>えき</u> を/が 探しています。",
        "sentence_kanji": "すずきさんは <u>駅</u> を/が 探しています。",
        "kanji_target": "駅",
        "hira_target": "えき",
        "kanji_options": [
          "新幹線",
          "駅",
          "空港",
          "空港"
        ],
        "hira_options": [
          "しんかんせん",
          "えき",
          "くうこう",
          "くうこう"
        ],
        "romaji": "eki",
        "vi_meaning": "nhà ga"
      },
      {
        "id": "topic_02_traffic_41",
        "num": 41,
        "sentence_hira": "すずきさんは <u>くうこう</u> を/が 探しています。",
        "sentence_kanji": "すずきさんは <u>空港</u> を/が 探しています。",
        "kanji_target": "空港",
        "hira_target": "くうこう",
        "kanji_options": [
          "空港",
          "ホーム",
          "橋",
          "急行"
        ],
        "hira_options": [
          "くうこう",
          "ほーむ",
          "はし",
          "きゅうこう"
        ],
        "romaji": "kuukou",
        "vi_meaning": "sân bay"
      },
      {
        "id": "topic_02_traffic_42",
        "num": 42,
        "sentence_hira": "すずきさんは <u>ばすてい</u> を/が 探しています。",
        "sentence_kanji": "すずきさんは <u>バス停</u> を/が 探しています。",
        "kanji_target": "バス停",
        "hira_target": "ばすてい",
        "kanji_options": [
          "出口",
          "バス停",
          "切符",
          "定期券"
        ],
        "hira_options": [
          "でぐち",
          "ばすてい",
          "きっぷ",
          "ていきけん"
        ],
        "romaji": "basutei",
        "vi_meaning": "trạm xe buýt"
      },
      {
        "id": "topic_02_traffic_43",
        "num": 43,
        "sentence_hira": "すずきさんは <u>みなと</u> を/が 探しています。",
        "sentence_kanji": "すずきさんは <u>港</u> を/が 探しています。",
        "kanji_target": "港",
        "hira_target": "みなと",
        "kanji_options": [
          "ホーム",
          "タクシー",
          "港",
          "地下鉄"
        ],
        "hira_options": [
          "ほーむ",
          "たくしー",
          "みなと",
          "ちかてつ"
        ],
        "romaji": "minato",
        "vi_meaning": "cảng"
      },
      {
        "id": "topic_02_traffic_44",
        "num": 44,
        "sentence_hira": "すずきさんは <u>きっぷ</u> を/が 探しています。",
        "sentence_kanji": "すずきさんは <u>切符</u> を/が 探しています。",
        "kanji_target": "切符",
        "hira_target": "きっぷ",
        "kanji_options": [
          "電車",
          "切符",
          "急行",
          "道路"
        ],
        "hira_options": [
          "でんしゃ",
          "きっぷ",
          "きゅうこう",
          "どうろ"
        ],
        "romaji": "kippu",
        "vi_meaning": "vé tàu/xe"
      },
      {
        "id": "topic_02_traffic_45",
        "num": 45,
        "sentence_hira": "すずきさんは <u>ていきけん</u> を/が 探しています。",
        "sentence_kanji": "すずきさんは <u>定期券</u> を/が 探しています。",
        "kanji_target": "定期券",
        "hira_target": "ていきけん",
        "kanji_options": [
          "急行",
          "交差点",
          "角",
          "定期券"
        ],
        "hira_options": [
          "きゅうこう",
          "こうさてん",
          "かど",
          "ていきけん"
        ],
        "romaji": "teikiken",
        "vi_meaning": "vé tháng"
      },
      {
        "id": "topic_02_traffic_46",
        "num": 46,
        "sentence_hira": "すずきさんは <u>じょうしゃけん</u> を/が 探しています。",
        "sentence_kanji": "すずきさんは <u>乗車券</u> を/が 探しています。",
        "kanji_target": "乗車券",
        "hira_target": "じょうしゃけん",
        "kanji_options": [
          "乗車券",
          "入口",
          "船",
          "駐車場"
        ],
        "hira_options": [
          "じょうしゃけん",
          "いりぐち",
          "ふね",
          "ちゅうしゃじょう"
        ],
        "romaji": "joushaken",
        "vi_meaning": "vé xe"
      },
      {
        "id": "topic_02_traffic_47",
        "num": 47,
        "sentence_hira": "すずきさんは <u>とっきゅう</u> を/が 探しています。",
        "sentence_kanji": "すずきさんは <u>特急</u> を/が 探しています。",
        "kanji_target": "特急",
        "hira_target": "とっきゅう",
        "kanji_options": [
          "特急",
          "出口",
          "バス停",
          "交差点"
        ],
        "hira_options": [
          "とっきゅう",
          "でぐち",
          "ばすてい",
          "こうさてん"
        ],
        "romaji": "tokkyuu",
        "vi_meaning": "tàu tốc hành"
      },
      {
        "id": "topic_02_traffic_48",
        "num": 48,
        "sentence_hira": "すずきさんは <u>きゅうこう</u> を/が 探しています。",
        "sentence_kanji": "すずきさんは <u>急行</u> を/が 探しています。",
        "kanji_target": "急行",
        "hira_target": "きゅうこう",
        "kanji_options": [
          "空港",
          "角",
          "急行",
          "入口"
        ],
        "hira_options": [
          "くうこう",
          "かど",
          "きゅうこう",
          "いりぐち"
        ],
        "romaji": "kyuukou",
        "vi_meaning": "tàu nhanh"
      },
      {
        "id": "topic_02_traffic_49",
        "num": 49,
        "sentence_hira": "すずきさんは <u>ふつう</u> を/が 探しています。",
        "sentence_kanji": "すずきさんは <u>普通</u> を/が 探しています。",
        "kanji_target": "普通",
        "hira_target": "ふつう",
        "kanji_options": [
          "普通",
          "定期券",
          "空港",
          "駐車場"
        ],
        "hira_options": [
          "ふつう",
          "ていきけん",
          "くうこう",
          "ちゅうしゃじょう"
        ],
        "romaji": "futsuu",
        "vi_meaning": "tàu thường"
      },
      {
        "id": "topic_02_traffic_50",
        "num": 50,
        "sentence_hira": "すずきさんは <u>ほーむ</u> を/が 探しています。",
        "sentence_kanji": "すずきさんは <u>ホーム</u> を/が 探しています。",
        "kanji_target": "ホーム",
        "hira_target": "ほーむ",
        "kanji_options": [
          "船",
          "入口",
          "ホーム",
          "自転車"
        ],
        "hira_options": [
          "ふね",
          "いりぐち",
          "ほーむ",
          "じてんしゃ"
        ],
        "romaji": "hoomu",
        "vi_meaning": "sân ga"
      },
      {
        "id": "topic_02_traffic_51",
        "num": 51,
        "sentence_hira": "すずきさんは <u>かいさつぐち</u> を/が 探しています。",
        "sentence_kanji": "すずきさんは <u>改札口</u> を/が 探しています。",
        "kanji_target": "改札口",
        "hira_target": "かいさつぐち",
        "kanji_options": [
          "飛行機",
          "交差点",
          "新幹線",
          "改札口"
        ],
        "hira_options": [
          "ひこうき",
          "こうさてん",
          "しんかんせん",
          "かいさつぐち"
        ],
        "romaji": "kaisatsuguchi",
        "vi_meaning": "cổng soát vé"
      },
      {
        "id": "topic_02_traffic_52",
        "num": 52,
        "sentence_hira": "すずきさんは <u>でぐち</u> を/が 探しています。",
        "sentence_kanji": "すずきさんは <u>出口</u> を/が 探しています。",
        "kanji_target": "出口",
        "hira_target": "でぐち",
        "kanji_options": [
          "出口",
          "港",
          "角",
          "飛行機"
        ],
        "hira_options": [
          "でぐち",
          "みなと",
          "かど",
          "ひこうき"
        ],
        "romaji": "deguchi",
        "vi_meaning": "lối ra"
      },
      {
        "id": "topic_02_traffic_53",
        "num": 53,
        "sentence_hira": "すずきさんは <u>いりぐち</u> を/が 探しています。",
        "sentence_kanji": "すずきさんは <u>入口</u> を/が 探しています。",
        "kanji_target": "入口",
        "hira_target": "いりぐち",
        "kanji_options": [
          "入口",
          "切符",
          "急行",
          "特急"
        ],
        "hira_options": [
          "いりぐち",
          "きっぷ",
          "きゅうこう",
          "とっきゅう"
        ],
        "romaji": "iriguchi",
        "vi_meaning": "lối vào"
      },
      {
        "id": "topic_02_traffic_54",
        "num": 54,
        "sentence_hira": "すずきさんは <u>ちゅうしゃじょう</u> を/が 探しています。",
        "sentence_kanji": "すずきさんは <u>駐車場</u> を/が 探しています。",
        "kanji_target": "駐車場",
        "hira_target": "ちゅうしゃじょう",
        "kanji_options": [
          "駐車場",
          "ホーム",
          "新幹線",
          "道路"
        ],
        "hira_options": [
          "ちゅうしゃじょう",
          "ほーむ",
          "しんかんせん",
          "どうろ"
        ],
        "romaji": "chuushajou",
        "vi_meaning": "bãi đỗ xe"
      },
      {
        "id": "topic_02_traffic_55",
        "num": 55,
        "sentence_hira": "すずきさんは <u>どうろ</u> を/が 探しています。",
        "sentence_kanji": "すずきさんは <u>道路</u> を/が 探しています。",
        "kanji_target": "道路",
        "hira_target": "どうろ",
        "kanji_options": [
          "新幹線",
          "道路",
          "港",
          "急行"
        ],
        "hira_options": [
          "しんかんせん",
          "どうろ",
          "みなと",
          "きゅうこう"
        ],
        "romaji": "douro",
        "vi_meaning": "đường đi"
      },
      {
        "id": "topic_02_traffic_56",
        "num": 56,
        "sentence_hira": "すずきさんは <u>こうさてん</u> を/が 探しています。",
        "sentence_kanji": "すずきさんは <u>交差点</u> を/が 探しています。",
        "kanji_target": "交差点",
        "hira_target": "こうさてん",
        "kanji_options": [
          "橋",
          "特急",
          "交差点",
          "出口"
        ],
        "hira_options": [
          "はし",
          "とっきゅう",
          "こうさてん",
          "でぐち"
        ],
        "romaji": "kousaten",
        "vi_meaning": "ngã tư"
      },
      {
        "id": "topic_02_traffic_57",
        "num": 57,
        "sentence_hira": "すずきさんは <u>しんごう</u> を/が 探しています。",
        "sentence_kanji": "すずきさんは <u>信号</u> を/が 探しています。",
        "kanji_target": "信号",
        "hira_target": "しんごう",
        "kanji_options": [
          "角",
          "定期券",
          "自転車",
          "信号"
        ],
        "hira_options": [
          "かど",
          "ていきけん",
          "じてんしゃ",
          "しんごう"
        ],
        "romaji": "shingou",
        "vi_meaning": "đèn giao thông"
      },
      {
        "id": "topic_02_traffic_58",
        "num": 58,
        "sentence_hira": "すずきさんは <u>かど</u> を/が 探しています。",
        "sentence_kanji": "すずきさんは <u>角</u> を/が 探しています。",
        "kanji_target": "角",
        "hira_target": "かど",
        "kanji_options": [
          "港",
          "角",
          "道路",
          "乗車券"
        ],
        "hira_options": [
          "みなと",
          "かど",
          "どうろ",
          "じょうしゃけん"
        ],
        "romaji": "kado",
        "vi_meaning": "góc đường"
      },
      {
        "id": "topic_02_traffic_59",
        "num": 59,
        "sentence_hira": "すずきさんは <u>はし</u> を/が 探しています。",
        "sentence_kanji": "すずきさんは <u>橋</u> を/が 探しています。",
        "kanji_target": "橋",
        "hira_target": "はし",
        "kanji_options": [
          "改札口",
          "橋",
          "踏切",
          "特急"
        ],
        "hira_options": [
          "かいさつぐち",
          "はし",
          "ふみきり",
          "とっきゅう"
        ],
        "romaji": "hashi",
        "vi_meaning": "cây cầu"
      },
      {
        "id": "topic_02_traffic_60",
        "num": 60,
        "sentence_hira": "すずきさんは <u>ふみきり</u> を/が 探しています。",
        "sentence_kanji": "すずきさんは <u>踏切</u> を/が 探しています。",
        "kanji_target": "踏切",
        "hira_target": "ふみきり",
        "kanji_options": [
          "改札口",
          "駅",
          "バス",
          "踏切"
        ],
        "hira_options": [
          "かいさつぐち",
          "えき",
          "ばす",
          "ふみきり"
        ],
        "romaji": "fumikiri",
        "vi_meaning": "rào chắn tàu"
      },
      {
        "id": "topic_02_traffic_61",
        "num": 61,
        "sentence_hira": "すずきさんは <u>でんしゃ</u> を/が 探しています。",
        "sentence_kanji": "すずきさんは <u>電車</u> を/が 探しています。",
        "kanji_target": "電車",
        "hira_target": "でんしゃ",
        "kanji_options": [
          "乗車券",
          "電車",
          "船",
          "飛行機"
        ],
        "hira_options": [
          "じょうしゃけん",
          "でんしゃ",
          "ふね",
          "ひこうき"
        ],
        "romaji": "densha",
        "vi_meaning": "tàu điện"
      },
      {
        "id": "topic_02_traffic_62",
        "num": 62,
        "sentence_hira": "すずきさんは <u>ちかてつ</u> を/が 探しています。",
        "sentence_kanji": "すずきさんは <u>地下鉄</u> を/が 探しています。",
        "kanji_target": "地下鉄",
        "hira_target": "ちかてつ",
        "kanji_options": [
          "地下鉄",
          "バス停",
          "駅",
          "信号"
        ],
        "hira_options": [
          "ちかてつ",
          "ばすてい",
          "えき",
          "しんごう"
        ],
        "romaji": "chikatetsu",
        "vi_meaning": "tàu điện ngầm"
      },
      {
        "id": "topic_02_traffic_63",
        "num": 63,
        "sentence_hira": "すずきさんは <u>しんかんせん</u> を/が 探しています。",
        "sentence_kanji": "すずきさんは <u>新幹線</u> を/が 探しています。",
        "kanji_target": "新幹線",
        "hira_target": "しんかんせん",
        "kanji_options": [
          "新幹線",
          "改札口",
          "信号",
          "タクシー"
        ],
        "hira_options": [
          "しんかんせん",
          "かいさつぐち",
          "しんごう",
          "たくしー"
        ],
        "romaji": "shinkansen",
        "vi_meaning": "tàu siêu tốc"
      },
      {
        "id": "topic_02_traffic_64",
        "num": 64,
        "sentence_hira": "すずきさんは <u>ばす</u> を/が 探しています。",
        "sentence_kanji": "すずきさんは <u>バス</u> を/が 探しています。",
        "kanji_target": "バス",
        "hira_target": "ばす",
        "kanji_options": [
          "港",
          "船",
          "橋",
          "バス"
        ],
        "hira_options": [
          "みなと",
          "ふね",
          "はし",
          "ばす"
        ],
        "romaji": "basu",
        "vi_meaning": "xe buýt"
      },
      {
        "id": "topic_02_traffic_65",
        "num": 65,
        "sentence_hira": "すずきさんは <u>たくしー</u> を/が 探しています。",
        "sentence_kanji": "すずきさんは <u>タクシー</u> を/が 探しています。",
        "kanji_target": "タクシー",
        "hira_target": "たくしー",
        "kanji_options": [
          "交差点",
          "バス",
          "タクシー",
          "定期券"
        ],
        "hira_options": [
          "こうさてん",
          "ばす",
          "たくしー",
          "ていきけん"
        ],
        "romaji": "takushii",
        "vi_meaning": "xe taxi"
      },
      {
        "id": "topic_02_traffic_66",
        "num": 66,
        "sentence_hira": "すずきさんは <u>ひこうき</u> を/が 探しています。",
        "sentence_kanji": "すずきさんは <u>飛行機</u> を/が 探しています。",
        "kanji_target": "飛行機",
        "hira_target": "ひこうき",
        "kanji_options": [
          "入口",
          "橋",
          "飛行機",
          "特急"
        ],
        "hira_options": [
          "いりぐち",
          "はし",
          "ひこうき",
          "とっきゅう"
        ],
        "romaji": "hikouki",
        "vi_meaning": "máy bay"
      },
      {
        "id": "topic_02_traffic_67",
        "num": 67,
        "sentence_hira": "すずきさんは <u>ふね</u> を/が 探しています。",
        "sentence_kanji": "すずきさんは <u>船</u> を/が 探しています。",
        "kanji_target": "船",
        "hira_target": "ふね",
        "kanji_options": [
          "定期券",
          "橋",
          "飛行機",
          "船"
        ],
        "hira_options": [
          "ていきけん",
          "はし",
          "ひこうき",
          "ふね"
        ],
        "romaji": "fune",
        "vi_meaning": "con tàu/thuyền"
      },
      {
        "id": "topic_02_traffic_68",
        "num": 68,
        "sentence_hira": "すずきさんは <u>じてんしゃ</u> を/が 探しています。",
        "sentence_kanji": "すずきさんは <u>自転車</u> を/が 探しています。",
        "kanji_target": "自転車",
        "hira_target": "じてんしゃ",
        "kanji_options": [
          "自転車",
          "船",
          "船",
          "角"
        ],
        "hira_options": [
          "じてんしゃ",
          "ふね",
          "ふね",
          "かど"
        ],
        "romaji": "jitensha",
        "vi_meaning": "xe đạp"
      },
      {
        "id": "topic_02_traffic_69",
        "num": 69,
        "sentence_hira": "すずきさんは <u>くるま</u> を/が 探しています。",
        "sentence_kanji": "すずきさんは <u>車</u> を/が 探しています。",
        "kanji_target": "車",
        "hira_target": "くるま",
        "kanji_options": [
          "車",
          "乗車券",
          "駐車場",
          "空港"
        ],
        "hira_options": [
          "くるま",
          "じょうしゃけん",
          "ちゅうしゃじょう",
          "くうこう"
        ],
        "romaji": "kuruma",
        "vi_meaning": "xe hơi"
      },
      {
        "id": "topic_02_traffic_70",
        "num": 70,
        "sentence_hira": "すずきさんは <u>えき</u> を/が 探しています。",
        "sentence_kanji": "すずきさんは <u>駅</u> を/が 探しています。",
        "kanji_target": "駅",
        "hira_target": "えき",
        "kanji_options": [
          "特急",
          "道路",
          "乗車券",
          "駅"
        ],
        "hira_options": [
          "とっきゅう",
          "どうろ",
          "じょうしゃけん",
          "えき"
        ],
        "romaji": "eki",
        "vi_meaning": "nhà ga"
      },
      {
        "id": "topic_02_traffic_71",
        "num": 71,
        "sentence_hira": "すずきさんは <u>くうこう</u> を/が 探しています。",
        "sentence_kanji": "すずきさんは <u>空港</u> を/が 探しています。",
        "kanji_target": "空港",
        "hira_target": "くうこう",
        "kanji_options": [
          "橋",
          "空港",
          "角",
          "タクシー"
        ],
        "hira_options": [
          "はし",
          "くうこう",
          "かど",
          "たくしー"
        ],
        "romaji": "kuukou",
        "vi_meaning": "sân bay"
      },
      {
        "id": "topic_02_traffic_72",
        "num": 72,
        "sentence_hira": "すずきさんは <u>ばすてい</u> を/が 探しています。",
        "sentence_kanji": "すずきさんは <u>バス停</u> を/が 探しています。",
        "kanji_target": "バス停",
        "hira_target": "ばすてい",
        "kanji_options": [
          "船",
          "バス停",
          "空港",
          "入口"
        ],
        "hira_options": [
          "ふね",
          "ばすてい",
          "くうこう",
          "いりぐち"
        ],
        "romaji": "basutei",
        "vi_meaning": "trạm xe buýt"
      },
      {
        "id": "topic_02_traffic_73",
        "num": 73,
        "sentence_hira": "すずきさんは <u>みなと</u> を/が 探しています。",
        "sentence_kanji": "すずきさんは <u>港</u> を/が 探しています。",
        "kanji_target": "港",
        "hira_target": "みなと",
        "kanji_options": [
          "普通",
          "港",
          "バス停",
          "バス"
        ],
        "hira_options": [
          "ふつう",
          "みなと",
          "ばすてい",
          "ばす"
        ],
        "romaji": "minato",
        "vi_meaning": "cảng"
      },
      {
        "id": "topic_02_traffic_74",
        "num": 74,
        "sentence_hira": "すずきさんは <u>きっぷ</u> を/が 探しています。",
        "sentence_kanji": "すずきさんは <u>切符</u> を/が 探しています。",
        "kanji_target": "切符",
        "hira_target": "きっぷ",
        "kanji_options": [
          "交差点",
          "急行",
          "ホーム",
          "切符"
        ],
        "hira_options": [
          "こうさてん",
          "きゅうこう",
          "ほーむ",
          "きっぷ"
        ],
        "romaji": "kippu",
        "vi_meaning": "vé tàu/xe"
      },
      {
        "id": "topic_02_traffic_75",
        "num": 75,
        "sentence_hira": "すずきさんは <u>ていきけん</u> を/が 探しています。",
        "sentence_kanji": "すずきさんは <u>定期券</u> を/が 探しています。",
        "kanji_target": "定期券",
        "hira_target": "ていきけん",
        "kanji_options": [
          "駅",
          "信号",
          "改札口",
          "定期券"
        ],
        "hira_options": [
          "えき",
          "しんごう",
          "かいさつぐち",
          "ていきけん"
        ],
        "romaji": "teikiken",
        "vi_meaning": "vé tháng"
      },
      {
        "id": "topic_02_traffic_76",
        "num": 76,
        "sentence_hira": "すずきさんは <u>じょうしゃけん</u> を/が 探しています。",
        "sentence_kanji": "すずきさんは <u>乗車券</u> を/が 探しています。",
        "kanji_target": "乗車券",
        "hira_target": "じょうしゃけん",
        "kanji_options": [
          "乗車券",
          "ホーム",
          "橋",
          "新幹線"
        ],
        "hira_options": [
          "じょうしゃけん",
          "ほーむ",
          "はし",
          "しんかんせん"
        ],
        "romaji": "joushaken",
        "vi_meaning": "vé xe"
      },
      {
        "id": "topic_02_traffic_77",
        "num": 77,
        "sentence_hira": "すずきさんは <u>とっきゅう</u> を/が 探しています。",
        "sentence_kanji": "すずきさんは <u>特急</u> を/が 探しています。",
        "kanji_target": "特急",
        "hira_target": "とっきゅう",
        "kanji_options": [
          "地下鉄",
          "特急",
          "切符",
          "普通"
        ],
        "hira_options": [
          "ちかてつ",
          "とっきゅう",
          "きっぷ",
          "ふつう"
        ],
        "romaji": "tokkyuu",
        "vi_meaning": "tàu tốc hành"
      },
      {
        "id": "topic_02_traffic_78",
        "num": 78,
        "sentence_hira": "すずきさんは <u>きゅうこう</u> を/が 探しています。",
        "sentence_kanji": "すずきさんは <u>急行</u> を/が 探しています。",
        "kanji_target": "急行",
        "hira_target": "きゅうこう",
        "kanji_options": [
          "改札口",
          "切符",
          "空港",
          "急行"
        ],
        "hira_options": [
          "かいさつぐち",
          "きっぷ",
          "くうこう",
          "きゅうこう"
        ],
        "romaji": "kyuukou",
        "vi_meaning": "tàu nhanh"
      },
      {
        "id": "topic_02_traffic_79",
        "num": 79,
        "sentence_hira": "すずきさんは <u>ふつう</u> を/が 探しています。",
        "sentence_kanji": "すずきさんは <u>普通</u> を/が 探しています。",
        "kanji_target": "普通",
        "hira_target": "ふつう",
        "kanji_options": [
          "地下鉄",
          "普通",
          "特急",
          "乗車券"
        ],
        "hira_options": [
          "ちかてつ",
          "ふつう",
          "とっきゅう",
          "じょうしゃけん"
        ],
        "romaji": "futsuu",
        "vi_meaning": "tàu thường"
      },
      {
        "id": "topic_02_traffic_80",
        "num": 80,
        "sentence_hira": "すずきさんは <u>ほーむ</u> を/が 探しています。",
        "sentence_kanji": "すずきさんは <u>ホーム</u> を/が 探しています。",
        "kanji_target": "ホーム",
        "hira_target": "ほーむ",
        "kanji_options": [
          "地下鉄",
          "ホーム",
          "信号",
          "道路"
        ],
        "hira_options": [
          "ちかてつ",
          "ほーむ",
          "しんごう",
          "どうろ"
        ],
        "romaji": "hoomu",
        "vi_meaning": "sân ga"
      },
      {
        "id": "topic_02_traffic_81",
        "num": 81,
        "sentence_hira": "すずきさんは <u>かいさつぐち</u> を/が 探しています。",
        "sentence_kanji": "すずきさんは <u>改札口</u> を/が 探しています。",
        "kanji_target": "改札口",
        "hira_target": "かいさつぐち",
        "kanji_options": [
          "改札口",
          "駅",
          "バス",
          "自転車"
        ],
        "hira_options": [
          "かいさつぐち",
          "えき",
          "ばす",
          "じてんしゃ"
        ],
        "romaji": "kaisatsuguchi",
        "vi_meaning": "cổng soát vé"
      },
      {
        "id": "topic_02_traffic_82",
        "num": 82,
        "sentence_hira": "すずきさんは <u>でぐち</u> を/が 探しています。",
        "sentence_kanji": "すずきさんは <u>出口</u> を/が 探しています。",
        "kanji_target": "出口",
        "hira_target": "でぐち",
        "kanji_options": [
          "乗車券",
          "車",
          "船",
          "出口"
        ],
        "hira_options": [
          "じょうしゃけん",
          "くるま",
          "ふね",
          "でぐち"
        ],
        "romaji": "deguchi",
        "vi_meaning": "lối ra"
      },
      {
        "id": "topic_02_traffic_83",
        "num": 83,
        "sentence_hira": "すずきさんは <u>いりぐち</u> を/が 探しています。",
        "sentence_kanji": "すずきさんは <u>入口</u> を/が 探しています。",
        "kanji_target": "入口",
        "hira_target": "いりぐち",
        "kanji_options": [
          "交差点",
          "駐車場",
          "港",
          "入口"
        ],
        "hira_options": [
          "こうさてん",
          "ちゅうしゃじょう",
          "みなと",
          "いりぐち"
        ],
        "romaji": "iriguchi",
        "vi_meaning": "lối vào"
      },
      {
        "id": "topic_02_traffic_84",
        "num": 84,
        "sentence_hira": "すずきさんは <u>ちゅうしゃじょう</u> を/が 探しています。",
        "sentence_kanji": "すずきさんは <u>駐車場</u> を/が 探しています。",
        "kanji_target": "駐車場",
        "hira_target": "ちゅうしゃじょう",
        "kanji_options": [
          "出口",
          "港",
          "地下鉄",
          "駐車場"
        ],
        "hira_options": [
          "でぐち",
          "みなと",
          "ちかてつ",
          "ちゅうしゃじょう"
        ],
        "romaji": "chuushajou",
        "vi_meaning": "bãi đỗ xe"
      },
      {
        "id": "topic_02_traffic_85",
        "num": 85,
        "sentence_hira": "すずきさんは <u>どうろ</u> を/が 探しています。",
        "sentence_kanji": "すずきさんは <u>道路</u> を/が 探しています。",
        "kanji_target": "道路",
        "hira_target": "どうろ",
        "kanji_options": [
          "橋",
          "角",
          "空港",
          "道路"
        ],
        "hira_options": [
          "はし",
          "かど",
          "くうこう",
          "どうろ"
        ],
        "romaji": "douro",
        "vi_meaning": "đường đi"
      },
      {
        "id": "topic_02_traffic_86",
        "num": 86,
        "sentence_hira": "すずきさんは <u>こうさてん</u> を/が 探しています。",
        "sentence_kanji": "すずきさんは <u>交差点</u> を/が 探しています。",
        "kanji_target": "交差点",
        "hira_target": "こうさてん",
        "kanji_options": [
          "空港",
          "踏切",
          "道路",
          "交差点"
        ],
        "hira_options": [
          "くうこう",
          "ふみきり",
          "どうろ",
          "こうさてん"
        ],
        "romaji": "kousaten",
        "vi_meaning": "ngã tư"
      },
      {
        "id": "topic_02_traffic_87",
        "num": 87,
        "sentence_hira": "すずきさんは <u>しんごう</u> を/が 探しています。",
        "sentence_kanji": "すずきさんは <u>信号</u> を/が 探しています。",
        "kanji_target": "信号",
        "hira_target": "しんごう",
        "kanji_options": [
          "電車",
          "信号",
          "普通",
          "ホーム"
        ],
        "hira_options": [
          "でんしゃ",
          "しんごう",
          "ふつう",
          "ほーむ"
        ],
        "romaji": "shingou",
        "vi_meaning": "đèn giao thông"
      },
      {
        "id": "topic_02_traffic_88",
        "num": 88,
        "sentence_hira": "すずきさんは <u>かど</u> を/が 探しています。",
        "sentence_kanji": "すずきさんは <u>角</u> を/が 探しています。",
        "kanji_target": "角",
        "hira_target": "かど",
        "kanji_options": [
          "駅",
          "角",
          "定期券",
          "普通"
        ],
        "hira_options": [
          "えき",
          "かど",
          "ていきけん",
          "ふつう"
        ],
        "romaji": "kado",
        "vi_meaning": "góc đường"
      },
      {
        "id": "topic_02_traffic_89",
        "num": 89,
        "sentence_hira": "すずきさんは <u>はし</u> を/が 探しています。",
        "sentence_kanji": "すずきさんは <u>橋</u> を/が 探しています。",
        "kanji_target": "橋",
        "hira_target": "はし",
        "kanji_options": [
          "橋",
          "自転車",
          "道路",
          "空港"
        ],
        "hira_options": [
          "はし",
          "じてんしゃ",
          "どうろ",
          "くうこう"
        ],
        "romaji": "hashi",
        "vi_meaning": "cây cầu"
      },
      {
        "id": "topic_02_traffic_90",
        "num": 90,
        "sentence_hira": "すずきさんは <u>ふみきり</u> を/が 探しています。",
        "sentence_kanji": "すずきさんは <u>踏切</u> を/が 探しています。",
        "kanji_target": "踏切",
        "hira_target": "ふみきり",
        "kanji_options": [
          "バス",
          "角",
          "地下鉄",
          "踏切"
        ],
        "hira_options": [
          "ばす",
          "かど",
          "ちかてつ",
          "ふみきり"
        ],
        "romaji": "fumikiri",
        "vi_meaning": "rào chắn tàu"
      },
      {
        "id": "topic_02_traffic_91",
        "num": 91,
        "sentence_hira": "すずきさんは <u>でんしゃ</u> を/が 探しています。",
        "sentence_kanji": "すずきさんは <u>電車</u> を/が 探しています。",
        "kanji_target": "電車",
        "hira_target": "でんしゃ",
        "kanji_options": [
          "駅",
          "バス",
          "自転車",
          "電車"
        ],
        "hira_options": [
          "えき",
          "ばす",
          "じてんしゃ",
          "でんしゃ"
        ],
        "romaji": "densha",
        "vi_meaning": "tàu điện"
      },
      {
        "id": "topic_02_traffic_92",
        "num": 92,
        "sentence_hira": "すずきさんは <u>ちかてつ</u> を/が 探しています。",
        "sentence_kanji": "すずきさんは <u>地下鉄</u> を/が 探しています。",
        "kanji_target": "地下鉄",
        "hira_target": "ちかてつ",
        "kanji_options": [
          "地下鉄",
          "飛行機",
          "自転車",
          "駅"
        ],
        "hira_options": [
          "ちかてつ",
          "ひこうき",
          "じてんしゃ",
          "えき"
        ],
        "romaji": "chikatetsu",
        "vi_meaning": "tàu điện ngầm"
      },
      {
        "id": "topic_02_traffic_93",
        "num": 93,
        "sentence_hira": "すずきさんは <u>しんかんせん</u> を/が 探しています。",
        "sentence_kanji": "すずきさんは <u>新幹線</u> を/が 探しています。",
        "kanji_target": "新幹線",
        "hira_target": "しんかんせん",
        "kanji_options": [
          "駐車場",
          "新幹線",
          "地下鉄",
          "駅"
        ],
        "hira_options": [
          "ちゅうしゃじょう",
          "しんかんせん",
          "ちかてつ",
          "えき"
        ],
        "romaji": "shinkansen",
        "vi_meaning": "tàu siêu tốc"
      },
      {
        "id": "topic_02_traffic_94",
        "num": 94,
        "sentence_hira": "すずきさんは <u>ばす</u> を/が 探しています。",
        "sentence_kanji": "すずきさんは <u>バス</u> を/が 探しています。",
        "kanji_target": "バス",
        "hira_target": "ばす",
        "kanji_options": [
          "入口",
          "飛行機",
          "バス",
          "出口"
        ],
        "hira_options": [
          "いりぐち",
          "ひこうき",
          "ばす",
          "でぐち"
        ],
        "romaji": "basu",
        "vi_meaning": "xe buýt"
      },
      {
        "id": "topic_02_traffic_95",
        "num": 95,
        "sentence_hira": "すずきさんは <u>たくしー</u> を/が 探しています。",
        "sentence_kanji": "すずきさんは <u>タクシー</u> を/が 探しています。",
        "kanji_target": "タクシー",
        "hira_target": "たくしー",
        "kanji_options": [
          "港",
          "道路",
          "急行",
          "タクシー"
        ],
        "hira_options": [
          "みなと",
          "どうろ",
          "きゅうこう",
          "たくしー"
        ],
        "romaji": "takushii",
        "vi_meaning": "xe taxi"
      },
      {
        "id": "topic_02_traffic_96",
        "num": 96,
        "sentence_hira": "すずきさんは <u>ひこうき</u> を/が 探しています。",
        "sentence_kanji": "すずきさんは <u>飛行機</u> を/が 探しています。",
        "kanji_target": "飛行機",
        "hira_target": "ひこうき",
        "kanji_options": [
          "飛行機",
          "タクシー",
          "タクシー",
          "バス停"
        ],
        "hira_options": [
          "ひこうき",
          "たくしー",
          "たくしー",
          "ばすてい"
        ],
        "romaji": "hikouki",
        "vi_meaning": "máy bay"
      },
      {
        "id": "topic_02_traffic_97",
        "num": 97,
        "sentence_hira": "すずきさんは <u>ふね</u> を/が 探しています。",
        "sentence_kanji": "すずきさんは <u>船</u> を/が 探しています。",
        "kanji_target": "船",
        "hira_target": "ふね",
        "kanji_options": [
          "普通",
          "空港",
          "道路",
          "船"
        ],
        "hira_options": [
          "ふつう",
          "くうこう",
          "どうろ",
          "ふね"
        ],
        "romaji": "fune",
        "vi_meaning": "con tàu/thuyền"
      },
      {
        "id": "topic_02_traffic_98",
        "num": 98,
        "sentence_hira": "すずきさんは <u>じてんしゃ</u> を/が 探しています。",
        "sentence_kanji": "すずきさんは <u>自転車</u> を/が 探しています。",
        "kanji_target": "自転車",
        "hira_target": "じてんしゃ",
        "kanji_options": [
          "踏切",
          "定期券",
          "自転車",
          "車"
        ],
        "hira_options": [
          "ふみきり",
          "ていきけん",
          "じてんしゃ",
          "くるま"
        ],
        "romaji": "jitensha",
        "vi_meaning": "xe đạp"
      },
      {
        "id": "topic_02_traffic_99",
        "num": 99,
        "sentence_hira": "すずきさんは <u>くるま</u> を/が 探しています。",
        "sentence_kanji": "すずきさんは <u>車</u> を/が 探しています。",
        "kanji_target": "車",
        "hira_target": "くるま",
        "kanji_options": [
          "道路",
          "車",
          "切符",
          "飛行機"
        ],
        "hira_options": [
          "どうろ",
          "くるま",
          "きっぷ",
          "ひこうき"
        ],
        "romaji": "kuruma",
        "vi_meaning": "xe hơi"
      },
      {
        "id": "topic_02_traffic_100",
        "num": 100,
        "sentence_hira": "すずきさんは <u>えき</u> を/が 探しています。",
        "sentence_kanji": "すずきさんは <u>駅</u> を/が 探しています。",
        "kanji_target": "駅",
        "hira_target": "えき",
        "kanji_options": [
          "入口",
          "空港",
          "港",
          "駅"
        ],
        "hira_options": [
          "いりぐち",
          "くうこう",
          "みなと",
          "えき"
        ],
        "romaji": "eki",
        "vi_meaning": "nhà ga"
      },
      {
        "id": "topic_02_traffic_101",
        "num": 101,
        "sentence_hira": "すずきさんは <u>くうこう</u> を/が 探しています。",
        "sentence_kanji": "すずきさんは <u>空港</u> を/が 探しています。",
        "kanji_target": "空港",
        "hira_target": "くうこう",
        "kanji_options": [
          "切符",
          "港",
          "急行",
          "空港"
        ],
        "hira_options": [
          "きっぷ",
          "みなと",
          "きゅうこう",
          "くうこう"
        ],
        "romaji": "kuukou",
        "vi_meaning": "sân bay"
      },
      {
        "id": "topic_02_traffic_102",
        "num": 102,
        "sentence_hira": "すずきさんは <u>ばすてい</u> を/が 探しています。",
        "sentence_kanji": "すずきさんは <u>バス停</u> を/が 探しています。",
        "kanji_target": "バス停",
        "hira_target": "ばすてい",
        "kanji_options": [
          "乗車券",
          "電車",
          "飛行機",
          "バス停"
        ],
        "hira_options": [
          "じょうしゃけん",
          "でんしゃ",
          "ひこうき",
          "ばすてい"
        ],
        "romaji": "basutei",
        "vi_meaning": "trạm xe buýt"
      },
      {
        "id": "topic_02_traffic_103",
        "num": 103,
        "sentence_hira": "すずきさんは <u>みなと</u> を/が 探しています。",
        "sentence_kanji": "すずきさんは <u>港</u> を/が 探しています。",
        "kanji_target": "港",
        "hira_target": "みなと",
        "kanji_options": [
          "出口",
          "駐車場",
          "ホーム",
          "港"
        ],
        "hira_options": [
          "でぐち",
          "ちゅうしゃじょう",
          "ほーむ",
          "みなと"
        ],
        "romaji": "minato",
        "vi_meaning": "cảng"
      },
      {
        "id": "topic_02_traffic_104",
        "num": 104,
        "sentence_hira": "すずきさんは <u>きっぷ</u> を/が 探しています。",
        "sentence_kanji": "すずきさんは <u>切符</u> を/が 探しています。",
        "kanji_target": "切符",
        "hira_target": "きっぷ",
        "kanji_options": [
          "急行",
          "乗車券",
          "切符",
          "急行"
        ],
        "hira_options": [
          "きゅうこう",
          "じょうしゃけん",
          "きっぷ",
          "きゅうこう"
        ],
        "romaji": "kippu",
        "vi_meaning": "vé tàu/xe"
      },
      {
        "id": "topic_02_traffic_105",
        "num": 105,
        "sentence_hira": "すずきさんは <u>ていきけん</u> を/が 探しています。",
        "sentence_kanji": "すずきさんは <u>定期券</u> を/が 探しています。",
        "kanji_target": "定期券",
        "hira_target": "ていきけん",
        "kanji_options": [
          "特急",
          "道路",
          "定期券",
          "普通"
        ],
        "hira_options": [
          "とっきゅう",
          "どうろ",
          "ていきけん",
          "ふつう"
        ],
        "romaji": "teikiken",
        "vi_meaning": "vé tháng"
      },
      {
        "id": "topic_02_traffic_106",
        "num": 106,
        "sentence_hira": "すずきさんは <u>じょうしゃけん</u> を/が 探しています。",
        "sentence_kanji": "すずきさんは <u>乗車券</u> を/が 探しています。",
        "kanji_target": "乗車券",
        "hira_target": "じょうしゃけん",
        "kanji_options": [
          "普通",
          "飛行機",
          "バス",
          "乗車券"
        ],
        "hira_options": [
          "ふつう",
          "ひこうき",
          "ばす",
          "じょうしゃけん"
        ],
        "romaji": "joushaken",
        "vi_meaning": "vé xe"
      },
      {
        "id": "topic_02_traffic_107",
        "num": 107,
        "sentence_hira": "すずきさんは <u>とっきゅう</u> を/が 探しています。",
        "sentence_kanji": "すずきさんは <u>特急</u> を/が 探しています。",
        "kanji_target": "特急",
        "hira_target": "とっきゅう",
        "kanji_options": [
          "駅",
          "特急",
          "道路",
          "自転車"
        ],
        "hira_options": [
          "えき",
          "とっきゅう",
          "どうろ",
          "じてんしゃ"
        ],
        "romaji": "tokkyuu",
        "vi_meaning": "tàu tốc hành"
      },
      {
        "id": "topic_02_traffic_108",
        "num": 108,
        "sentence_hira": "すずきさんは <u>きゅうこう</u> を/が 探しています。",
        "sentence_kanji": "すずきさんは <u>急行</u> を/が 探しています。",
        "kanji_target": "急行",
        "hira_target": "きゅうこう",
        "kanji_options": [
          "タクシー",
          "急行",
          "改札口",
          "地下鉄"
        ],
        "hira_options": [
          "たくしー",
          "きゅうこう",
          "かいさつぐち",
          "ちかてつ"
        ],
        "romaji": "kyuukou",
        "vi_meaning": "tàu nhanh"
      },
      {
        "id": "topic_02_traffic_109",
        "num": 109,
        "sentence_hira": "すずきさんは <u>ふつう</u> を/が 探しています。",
        "sentence_kanji": "すずきさんは <u>普通</u> を/が 探しています。",
        "kanji_target": "普通",
        "hira_target": "ふつう",
        "kanji_options": [
          "普通",
          "新幹線",
          "ホーム",
          "バス"
        ],
        "hira_options": [
          "ふつう",
          "しんかんせん",
          "ほーむ",
          "ばす"
        ],
        "romaji": "futsuu",
        "vi_meaning": "tàu thường"
      },
      {
        "id": "topic_02_traffic_110",
        "num": 110,
        "sentence_hira": "すずきさんは <u>ほーむ</u> を/が 探しています。",
        "sentence_kanji": "すずきさんは <u>ホーム</u> を/が 探しています。",
        "kanji_target": "ホーム",
        "hira_target": "ほーむ",
        "kanji_options": [
          "新幹線",
          "入口",
          "ホーム",
          "信号"
        ],
        "hira_options": [
          "しんかんせん",
          "いりぐち",
          "ほーむ",
          "しんごう"
        ],
        "romaji": "hoomu",
        "vi_meaning": "sân ga"
      },
      {
        "id": "topic_02_traffic_111",
        "num": 111,
        "sentence_hira": "すずきさんは <u>かいさつぐち</u> を/が 探しています。",
        "sentence_kanji": "すずきさんは <u>改札口</u> を/が 探しています。",
        "kanji_target": "改札口",
        "hira_target": "かいさつぐち",
        "kanji_options": [
          "駐車場",
          "道路",
          "改札口",
          "切符"
        ],
        "hira_options": [
          "ちゅうしゃじょう",
          "どうろ",
          "かいさつぐち",
          "きっぷ"
        ],
        "romaji": "kaisatsuguchi",
        "vi_meaning": "cổng soát vé"
      },
      {
        "id": "topic_02_traffic_112",
        "num": 112,
        "sentence_hira": "すずきさんは <u>でぐち</u> を/が 探しています。",
        "sentence_kanji": "すずきさんは <u>出口</u> を/が 探しています。",
        "kanji_target": "出口",
        "hira_target": "でぐち",
        "kanji_options": [
          "急行",
          "自転車",
          "ホーム",
          "出口"
        ],
        "hira_options": [
          "きゅうこう",
          "じてんしゃ",
          "ほーむ",
          "でぐち"
        ],
        "romaji": "deguchi",
        "vi_meaning": "lối ra"
      },
      {
        "id": "topic_02_traffic_113",
        "num": 113,
        "sentence_hira": "すずきさんは <u>いりぐち</u> を/が 探しています。",
        "sentence_kanji": "すずきさんは <u>入口</u> を/が 探しています。",
        "kanji_target": "入口",
        "hira_target": "いりぐち",
        "kanji_options": [
          "車",
          "定期券",
          "入口",
          "自転車"
        ],
        "hira_options": [
          "くるま",
          "ていきけん",
          "いりぐち",
          "じてんしゃ"
        ],
        "romaji": "iriguchi",
        "vi_meaning": "lối vào"
      },
      {
        "id": "topic_02_traffic_114",
        "num": 114,
        "sentence_hira": "すずきさんは <u>ちゅうしゃじょう</u> を/が 探しています。",
        "sentence_kanji": "すずきさんは <u>駐車場</u> を/が 探しています。",
        "kanji_target": "駐車場",
        "hira_target": "ちゅうしゃじょう",
        "kanji_options": [
          "駐車場",
          "ホーム",
          "角",
          "切符"
        ],
        "hira_options": [
          "ちゅうしゃじょう",
          "ほーむ",
          "かど",
          "きっぷ"
        ],
        "romaji": "chuushajou",
        "vi_meaning": "bãi đỗ xe"
      },
      {
        "id": "topic_02_traffic_115",
        "num": 115,
        "sentence_hira": "すずきさんは <u>どうろ</u> を/が 探しています。",
        "sentence_kanji": "すずきさんは <u>道路</u> を/が 探しています。",
        "kanji_target": "道路",
        "hira_target": "どうろ",
        "kanji_options": [
          "道路",
          "新幹線",
          "角",
          "地下鉄"
        ],
        "hira_options": [
          "どうろ",
          "しんかんせん",
          "かど",
          "ちかてつ"
        ],
        "romaji": "douro",
        "vi_meaning": "đường đi"
      },
      {
        "id": "topic_02_traffic_116",
        "num": 116,
        "sentence_hira": "すずきさんは <u>こうさてん</u> を/が 探しています。",
        "sentence_kanji": "すずきさんは <u>交差点</u> を/が 探しています。",
        "kanji_target": "交差点",
        "hira_target": "こうさてん",
        "kanji_options": [
          "特急",
          "バス停",
          "交差点",
          "定期券"
        ],
        "hira_options": [
          "とっきゅう",
          "ばすてい",
          "こうさてん",
          "ていきけん"
        ],
        "romaji": "kousaten",
        "vi_meaning": "ngã tư"
      },
      {
        "id": "topic_02_traffic_117",
        "num": 117,
        "sentence_hira": "すずきさんは <u>しんごう</u> を/が 探しています。",
        "sentence_kanji": "すずきさんは <u>信号</u> を/が 探しています。",
        "kanji_target": "信号",
        "hira_target": "しんごう",
        "kanji_options": [
          "信号",
          "橋",
          "踏切",
          "入口"
        ],
        "hira_options": [
          "しんごう",
          "はし",
          "ふみきり",
          "いりぐち"
        ],
        "romaji": "shingou",
        "vi_meaning": "đèn giao thông"
      },
      {
        "id": "topic_02_traffic_118",
        "num": 118,
        "sentence_hira": "すずきさんは <u>かど</u> を/が 探しています。",
        "sentence_kanji": "すずきさんは <u>角</u> を/が 探しています。",
        "kanji_target": "角",
        "hira_target": "かど",
        "kanji_options": [
          "角",
          "改札口",
          "特急",
          "特急"
        ],
        "hira_options": [
          "かど",
          "かいさつぐち",
          "とっきゅう",
          "とっきゅう"
        ],
        "romaji": "kado",
        "vi_meaning": "góc đường"
      },
      {
        "id": "topic_02_traffic_119",
        "num": 119,
        "sentence_hira": "すずきさんは <u>はし</u> を/が 探しています。",
        "sentence_kanji": "すずきさんは <u>橋</u> を/が 探しています。",
        "kanji_target": "橋",
        "hira_target": "はし",
        "kanji_options": [
          "タクシー",
          "改札口",
          "橋",
          "踏切"
        ],
        "hira_options": [
          "たくしー",
          "かいさつぐち",
          "はし",
          "ふみきり"
        ],
        "romaji": "hashi",
        "vi_meaning": "cây cầu"
      },
      {
        "id": "topic_02_traffic_120",
        "num": 120,
        "sentence_hira": "すずきさんは <u>ふみきり</u> を/が 探しています。",
        "sentence_kanji": "すずきさんは <u>踏切</u> を/が 探しています。",
        "kanji_target": "踏切",
        "hira_target": "ふみきり",
        "kanji_options": [
          "バス",
          "新幹線",
          "踏切",
          "自転車"
        ],
        "hira_options": [
          "ばす",
          "しんかんせん",
          "ふみきり",
          "じてんしゃ"
        ],
        "romaji": "fumikiri",
        "vi_meaning": "rào chắn tàu"
      },
      {
        "id": "topic_02_traffic_121",
        "num": 121,
        "sentence_hira": "すずきさんは <u>でんしゃ</u> を/が 探しています。",
        "sentence_kanji": "すずきさんは <u>電車</u> を/が 探しています。",
        "kanji_target": "電車",
        "hira_target": "でんしゃ",
        "kanji_options": [
          "バス",
          "ホーム",
          "電車",
          "急行"
        ],
        "hira_options": [
          "ばす",
          "ほーむ",
          "でんしゃ",
          "きゅうこう"
        ],
        "romaji": "densha",
        "vi_meaning": "tàu điện"
      },
      {
        "id": "topic_02_traffic_122",
        "num": 122,
        "sentence_hira": "すずきさんは <u>ちかてつ</u> を/が 探しています。",
        "sentence_kanji": "すずきさんは <u>地下鉄</u> を/が 探しています。",
        "kanji_target": "地下鉄",
        "hira_target": "ちかてつ",
        "kanji_options": [
          "定期券",
          "駅",
          "地下鉄",
          "出口"
        ],
        "hira_options": [
          "ていきけん",
          "えき",
          "ちかてつ",
          "でぐち"
        ],
        "romaji": "chikatetsu",
        "vi_meaning": "tàu điện ngầm"
      },
      {
        "id": "topic_02_traffic_123",
        "num": 123,
        "sentence_hira": "すずきさんは <u>しんかんせん</u> を/が 探しています。",
        "sentence_kanji": "すずきさんは <u>新幹線</u> を/が 探しています。",
        "kanji_target": "新幹線",
        "hira_target": "しんかんせん",
        "kanji_options": [
          "乗車券",
          "出口",
          "飛行機",
          "新幹線"
        ],
        "hira_options": [
          "じょうしゃけん",
          "でぐち",
          "ひこうき",
          "しんかんせん"
        ],
        "romaji": "shinkansen",
        "vi_meaning": "tàu siêu tốc"
      },
      {
        "id": "topic_02_traffic_124",
        "num": 124,
        "sentence_hira": "すずきさんは <u>ばす</u> を/が 探しています。",
        "sentence_kanji": "すずきさんは <u>バス</u> を/が 探しています。",
        "kanji_target": "バス",
        "hira_target": "ばす",
        "kanji_options": [
          "バス",
          "道路",
          "バス停",
          "バス停"
        ],
        "hira_options": [
          "ばす",
          "どうろ",
          "ばすてい",
          "ばすてい"
        ],
        "romaji": "basu",
        "vi_meaning": "xe buýt"
      },
      {
        "id": "topic_02_traffic_125",
        "num": 125,
        "sentence_hira": "すずきさんは <u>たくしー</u> を/が 探しています。",
        "sentence_kanji": "すずきさんは <u>タクシー</u> を/が 探しています。",
        "kanji_target": "タクシー",
        "hira_target": "たくしー",
        "kanji_options": [
          "タクシー",
          "港",
          "空港",
          "空港"
        ],
        "hira_options": [
          "たくしー",
          "みなと",
          "くうこう",
          "くうこう"
        ],
        "romaji": "takushii",
        "vi_meaning": "xe taxi"
      },
      {
        "id": "topic_02_traffic_126",
        "num": 126,
        "sentence_hira": "すずきさんは <u>ひこうき</u> を/が 探しています。",
        "sentence_kanji": "すずきさんは <u>飛行機</u> を/が 探しています。",
        "kanji_target": "飛行機",
        "hira_target": "ひこうき",
        "kanji_options": [
          "タクシー",
          "飛行機",
          "信号",
          "空港"
        ],
        "hira_options": [
          "たくしー",
          "ひこうき",
          "しんごう",
          "くうこう"
        ],
        "romaji": "hikouki",
        "vi_meaning": "máy bay"
      },
      {
        "id": "topic_02_traffic_127",
        "num": 127,
        "sentence_hira": "すずきさんは <u>ふね</u> を/が 探しています。",
        "sentence_kanji": "すずきさんは <u>船</u> を/が 探しています。",
        "kanji_target": "船",
        "hira_target": "ふね",
        "kanji_options": [
          "タクシー",
          "空港",
          "船",
          "新幹線"
        ],
        "hira_options": [
          "たくしー",
          "くうこう",
          "ふね",
          "しんかんせん"
        ],
        "romaji": "fune",
        "vi_meaning": "con tàu/thuyền"
      },
      {
        "id": "topic_02_traffic_128",
        "num": 128,
        "sentence_hira": "すずきさんは <u>じてんしゃ</u> を/が 探しています。",
        "sentence_kanji": "すずきさんは <u>自転車</u> を/が 探しています。",
        "kanji_target": "自転車",
        "hira_target": "じてんしゃ",
        "kanji_options": [
          "橋",
          "自転車",
          "特急",
          "特急"
        ],
        "hira_options": [
          "はし",
          "じてんしゃ",
          "とっきゅう",
          "とっきゅう"
        ],
        "romaji": "jitensha",
        "vi_meaning": "xe đạp"
      },
      {
        "id": "topic_02_traffic_129",
        "num": 129,
        "sentence_hira": "すずきさんは <u>くるま</u> を/が 探しています。",
        "sentence_kanji": "すずきさんは <u>車</u> を/が 探しています。",
        "kanji_target": "車",
        "hira_target": "くるま",
        "kanji_options": [
          "車",
          "駐車場",
          "自転車",
          "信号"
        ],
        "hira_options": [
          "くるま",
          "ちゅうしゃじょう",
          "じてんしゃ",
          "しんごう"
        ],
        "romaji": "kuruma",
        "vi_meaning": "xe hơi"
      },
      {
        "id": "topic_02_traffic_130",
        "num": 130,
        "sentence_hira": "すずきさんは <u>えき</u> を/が 探しています。",
        "sentence_kanji": "すずきさんは <u>駅</u> を/が 探しています。",
        "kanji_target": "駅",
        "hira_target": "えき",
        "kanji_options": [
          "新幹線",
          "駅",
          "ホーム",
          "駐車場"
        ],
        "hira_options": [
          "しんかんせん",
          "えき",
          "ほーむ",
          "ちゅうしゃじょう"
        ],
        "romaji": "eki",
        "vi_meaning": "nhà ga"
      },
      {
        "id": "topic_02_traffic_131",
        "num": 131,
        "sentence_hira": "すずきさんは <u>くうこう</u> を/が 探しています。",
        "sentence_kanji": "すずきさんは <u>空港</u> を/が 探しています。",
        "kanji_target": "空港",
        "hira_target": "くうこう",
        "kanji_options": [
          "車",
          "新幹線",
          "空港",
          "入口"
        ],
        "hira_options": [
          "くるま",
          "しんかんせん",
          "くうこう",
          "いりぐち"
        ],
        "romaji": "kuukou",
        "vi_meaning": "sân bay"
      },
      {
        "id": "topic_02_traffic_132",
        "num": 132,
        "sentence_hira": "すずきさんは <u>ばすてい</u> を/が 探しています。",
        "sentence_kanji": "すずきさんは <u>バス停</u> を/が 探しています。",
        "kanji_target": "バス停",
        "hira_target": "ばすてい",
        "kanji_options": [
          "普通",
          "新幹線",
          "空港",
          "バス停"
        ],
        "hira_options": [
          "ふつう",
          "しんかんせん",
          "くうこう",
          "ばすてい"
        ],
        "romaji": "basutei",
        "vi_meaning": "trạm xe buýt"
      },
      {
        "id": "topic_02_traffic_133",
        "num": 133,
        "sentence_hira": "すずきさんは <u>みなと</u> を/が 探しています。",
        "sentence_kanji": "すずきさんは <u>港</u> を/が 探しています。",
        "kanji_target": "港",
        "hira_target": "みなと",
        "kanji_options": [
          "駐車場",
          "改札口",
          "港",
          "角"
        ],
        "hira_options": [
          "ちゅうしゃじょう",
          "かいさつぐち",
          "みなと",
          "かど"
        ],
        "romaji": "minato",
        "vi_meaning": "cảng"
      },
      {
        "id": "topic_02_traffic_134",
        "num": 134,
        "sentence_hira": "すずきさんは <u>きっぷ</u> を/が 探しています。",
        "sentence_kanji": "すずきさんは <u>切符</u> を/が 探しています。",
        "kanji_target": "切符",
        "hira_target": "きっぷ",
        "kanji_options": [
          "乗車券",
          "信号",
          "地下鉄",
          "切符"
        ],
        "hira_options": [
          "じょうしゃけん",
          "しんごう",
          "ちかてつ",
          "きっぷ"
        ],
        "romaji": "kippu",
        "vi_meaning": "vé tàu/xe"
      },
      {
        "id": "topic_02_traffic_135",
        "num": 135,
        "sentence_hira": "すずきさんは <u>ていきけん</u> を/が 探しています。",
        "sentence_kanji": "すずきさんは <u>定期券</u> を/が 探しています。",
        "kanji_target": "定期券",
        "hira_target": "ていきけん",
        "kanji_options": [
          "定期券",
          "踏切",
          "自転車",
          "自転車"
        ],
        "hira_options": [
          "ていきけん",
          "ふみきり",
          "じてんしゃ",
          "じてんしゃ"
        ],
        "romaji": "teikiken",
        "vi_meaning": "vé tháng"
      },
      {
        "id": "topic_02_traffic_136",
        "num": 136,
        "sentence_hira": "すずきさんは <u>じょうしゃけん</u> を/が 探しています。",
        "sentence_kanji": "すずきさんは <u>乗車券</u> を/が 探しています。",
        "kanji_target": "乗車券",
        "hira_target": "じょうしゃけん",
        "kanji_options": [
          "乗車券",
          "急行",
          "自転車",
          "バス停"
        ],
        "hira_options": [
          "じょうしゃけん",
          "きゅうこう",
          "じてんしゃ",
          "ばすてい"
        ],
        "romaji": "joushaken",
        "vi_meaning": "vé xe"
      },
      {
        "id": "topic_02_traffic_137",
        "num": 137,
        "sentence_hira": "すずきさんは <u>とっきゅう</u> を/が 探しています。",
        "sentence_kanji": "すずきさんは <u>特急</u> を/が 探しています。",
        "kanji_target": "特急",
        "hira_target": "とっきゅう",
        "kanji_options": [
          "特急",
          "タクシー",
          "橋",
          "入口"
        ],
        "hira_options": [
          "とっきゅう",
          "たくしー",
          "はし",
          "いりぐち"
        ],
        "romaji": "tokkyuu",
        "vi_meaning": "tàu tốc hành"
      },
      {
        "id": "topic_02_traffic_138",
        "num": 138,
        "sentence_hira": "すずきさんは <u>きゅうこう</u> を/が 探しています。",
        "sentence_kanji": "すずきさんは <u>急行</u> を/が 探しています。",
        "kanji_target": "急行",
        "hira_target": "きゅうこう",
        "kanji_options": [
          "駐車場",
          "定期券",
          "交差点",
          "急行"
        ],
        "hira_options": [
          "ちゅうしゃじょう",
          "ていきけん",
          "こうさてん",
          "きゅうこう"
        ],
        "romaji": "kyuukou",
        "vi_meaning": "tàu nhanh"
      },
      {
        "id": "topic_02_traffic_139",
        "num": 139,
        "sentence_hira": "すずきさんは <u>ふつう</u> を/が 探しています。",
        "sentence_kanji": "すずきさんは <u>普通</u> を/が 探しています。",
        "kanji_target": "普通",
        "hira_target": "ふつう",
        "kanji_options": [
          "港",
          "普通",
          "角",
          "駅"
        ],
        "hira_options": [
          "みなと",
          "ふつう",
          "かど",
          "えき"
        ],
        "romaji": "futsuu",
        "vi_meaning": "tàu thường"
      },
      {
        "id": "topic_02_traffic_140",
        "num": 140,
        "sentence_hira": "すずきさんは <u>ほーむ</u> を/が 探しています。",
        "sentence_kanji": "すずきさんは <u>ホーム</u> を/が 探しています。",
        "kanji_target": "ホーム",
        "hira_target": "ほーむ",
        "kanji_options": [
          "タクシー",
          "ホーム",
          "出口",
          "バス停"
        ],
        "hira_options": [
          "たくしー",
          "ほーむ",
          "でぐち",
          "ばすてい"
        ],
        "romaji": "hoomu",
        "vi_meaning": "sân ga"
      },
      {
        "id": "topic_02_traffic_141",
        "num": 141,
        "sentence_hira": "すずきさんは <u>かいさつぐち</u> を/が 探しています。",
        "sentence_kanji": "すずきさんは <u>改札口</u> を/が 探しています。",
        "kanji_target": "改札口",
        "hira_target": "かいさつぐち",
        "kanji_options": [
          "入口",
          "バス",
          "電車",
          "改札口"
        ],
        "hira_options": [
          "いりぐち",
          "ばす",
          "でんしゃ",
          "かいさつぐち"
        ],
        "romaji": "kaisatsuguchi",
        "vi_meaning": "cổng soát vé"
      },
      {
        "id": "topic_02_traffic_142",
        "num": 142,
        "sentence_hira": "すずきさんは <u>でぐち</u> を/が 探しています。",
        "sentence_kanji": "すずきさんは <u>出口</u> を/が 探しています。",
        "kanji_target": "出口",
        "hira_target": "でぐち",
        "kanji_options": [
          "船",
          "バス停",
          "出口",
          "車"
        ],
        "hira_options": [
          "ふね",
          "ばすてい",
          "でぐち",
          "くるま"
        ],
        "romaji": "deguchi",
        "vi_meaning": "lối ra"
      },
      {
        "id": "topic_02_traffic_143",
        "num": 143,
        "sentence_hira": "すずきさんは <u>いりぐち</u> を/が 探しています。",
        "sentence_kanji": "すずきさんは <u>入口</u> を/が 探しています。",
        "kanji_target": "入口",
        "hira_target": "いりぐち",
        "kanji_options": [
          "踏切",
          "船",
          "特急",
          "入口"
        ],
        "hira_options": [
          "ふみきり",
          "ふね",
          "とっきゅう",
          "いりぐち"
        ],
        "romaji": "iriguchi",
        "vi_meaning": "lối vào"
      },
      {
        "id": "topic_02_traffic_144",
        "num": 144,
        "sentence_hira": "すずきさんは <u>ちゅうしゃじょう</u> を/が 探しています。",
        "sentence_kanji": "すずきさんは <u>駐車場</u> を/が 探しています。",
        "kanji_target": "駐車場",
        "hira_target": "ちゅうしゃじょう",
        "kanji_options": [
          "角",
          "切符",
          "駐車場",
          "普通"
        ],
        "hira_options": [
          "かど",
          "きっぷ",
          "ちゅうしゃじょう",
          "ふつう"
        ],
        "romaji": "chuushajou",
        "vi_meaning": "bãi đỗ xe"
      },
      {
        "id": "topic_02_traffic_145",
        "num": 145,
        "sentence_hira": "すずきさんは <u>どうろ</u> を/が 探しています。",
        "sentence_kanji": "すずきさんは <u>道路</u> を/が 探しています。",
        "kanji_target": "道路",
        "hira_target": "どうろ",
        "kanji_options": [
          "普通",
          "船",
          "橋",
          "道路"
        ],
        "hira_options": [
          "ふつう",
          "ふね",
          "はし",
          "どうろ"
        ],
        "romaji": "douro",
        "vi_meaning": "đường đi"
      }
    ]
  },
  {
    "id": "topic_03_work",
    "name": "3. Công Việc & Công Sở",
    "icon": "💼",
    "desc": "Công ty, văn phòng, họp hành và công sở (155 câu)",
    "questions": [
      {
        "id": "topic_03_work_1",
        "num": 1,
        "sentence_hira": "すずきさんは <u>かいしゃ</u> を/が 探しています。",
        "sentence_kanji": "すずきさんは <u>会社</u> を/が 探しています。",
        "kanji_target": "会社",
        "hira_target": "かいしゃ",
        "kanji_options": [
          "案内",
          "コピー",
          "案内",
          "会社"
        ],
        "hira_options": [
          "あんない",
          "こぴー",
          "あんない",
          "かいしゃ"
        ],
        "romaji": "kaisha",
        "vi_meaning": "công ty"
      },
      {
        "id": "topic_03_work_2",
        "num": 2,
        "sentence_hira": "すずきさんは <u>じむしょ</u> を/が 探しています。",
        "sentence_kanji": "すずきさんは <u>事務所</u> を/が 探しています。",
        "kanji_target": "事務所",
        "hira_target": "じむしょ",
        "kanji_options": [
          "報告",
          "同僚",
          "事務所",
          "書類"
        ],
        "hira_options": [
          "ほうこく",
          "どうりょう",
          "じむしょ",
          "しょるい"
        ],
        "romaji": "jimusho",
        "vi_meaning": "văn phòng"
      },
      {
        "id": "topic_03_work_3",
        "num": 3,
        "sentence_hira": "すずきさんは <u>こうじょう</u> を/が 探しています。",
        "sentence_kanji": "すずきさんは <u>工場</u> を/が 探しています。",
        "kanji_target": "工場",
        "hira_target": "こうじょう",
        "kanji_options": [
          "出張",
          "工場",
          "給料",
          "事務所"
        ],
        "hira_options": [
          "しゅっちょう",
          "こうじょう",
          "きゅうりょう",
          "じむしょ"
        ],
        "romaji": "koujou",
        "vi_meaning": "nhà máy"
      },
      {
        "id": "topic_03_work_4",
        "num": 4,
        "sentence_hira": "すずきさんは <u>しゃちょう</u> を/が 探しています。",
        "sentence_kanji": "すずきさんは <u>社長</u> を/が 探しています。",
        "kanji_target": "社長",
        "hira_target": "しゃちょう",
        "kanji_options": [
          "工場",
          "残業",
          "社長",
          "社員"
        ],
        "hira_options": [
          "こうじょう",
          "ざんぎょう",
          "しゃちょう",
          "しゃいん"
        ],
        "romaji": "shachou",
        "vi_meaning": "giám đốc"
      },
      {
        "id": "topic_03_work_5",
        "num": 5,
        "sentence_hira": "すずきさんは <u>ぶちょう</u> を/が 探しています。",
        "sentence_kanji": "すずきさんは <u>部長</u> を/が 探しています。",
        "kanji_target": "部長",
        "hira_target": "ぶちょう",
        "kanji_options": [
          "書類",
          "面接",
          "部長",
          "社員"
        ],
        "hira_options": [
          "しょるい",
          "めんせつ",
          "ぶちょう",
          "しゃいん"
        ],
        "romaji": "buchou",
        "vi_meaning": "trưởng phòng"
      },
      {
        "id": "topic_03_work_6",
        "num": 6,
        "sentence_hira": "すずきさんは <u>かちょう</u> を/が 探しています。",
        "sentence_kanji": "すずきさんは <u>課長</u> を/が 探しています。",
        "kanji_target": "課長",
        "hira_target": "かちょう",
        "kanji_options": [
          "課長",
          "後輩",
          "給料",
          "面接"
        ],
        "hira_options": [
          "かちょう",
          "こうはい",
          "きゅうりょう",
          "めんせつ"
        ],
        "romaji": "kachou",
        "vi_meaning": "trưởng nhóm"
      },
      {
        "id": "topic_03_work_7",
        "num": 7,
        "sentence_hira": "すずきさんは <u>しゃいん</u> を/が 探しています。",
        "sentence_kanji": "すずきさんは <u>社員</u> を/が 探しています。",
        "kanji_target": "社員",
        "hira_target": "しゃいん",
        "kanji_options": [
          "パソコン",
          "社員",
          "出張",
          "メール"
        ],
        "hira_options": [
          "ぱそこん",
          "しゃいん",
          "しゅっちょう",
          "めーる"
        ],
        "romaji": "shain",
        "vi_meaning": "nhân viên"
      },
      {
        "id": "topic_03_work_8",
        "num": 8,
        "sentence_hira": "すずきさんは <u>どうりょう</u> を/が 探しています。",
        "sentence_kanji": "すずきさんは <u>同僚</u> を/が 探しています。",
        "kanji_target": "同僚",
        "hira_target": "どうりょう",
        "kanji_options": [
          "同僚",
          "出張",
          "先輩",
          "出張"
        ],
        "hira_options": [
          "どうりょう",
          "しゅっちょう",
          "せんぱい",
          "しゅっちょう"
        ],
        "romaji": "douryou",
        "vi_meaning": "đồng nghiệp"
      },
      {
        "id": "topic_03_work_9",
        "num": 9,
        "sentence_hira": "すずきさんは <u>せんぱい</u> を/が 探しています。",
        "sentence_kanji": "すずきさんは <u>先輩</u> を/が 探しています。",
        "kanji_target": "先輩",
        "hira_target": "せんぱい",
        "kanji_options": [
          "案内",
          "先輩",
          "電話",
          "同僚"
        ],
        "hira_options": [
          "あんない",
          "せんぱい",
          "でんわ",
          "どうりょう"
        ],
        "romaji": "senpai",
        "vi_meaning": "tiền bối"
      },
      {
        "id": "topic_03_work_10",
        "num": 10,
        "sentence_hira": "すずきさんは <u>こうはい</u> を/が 探しています。",
        "sentence_kanji": "すずきさんは <u>後輩</u> を/が 探しています。",
        "kanji_target": "後輩",
        "hira_target": "こうはい",
        "kanji_options": [
          "面接",
          "後輩",
          "会社",
          "先輩"
        ],
        "hira_options": [
          "めんせつ",
          "こうはい",
          "かいしゃ",
          "せんぱい"
        ],
        "romaji": "kouhai",
        "vi_meaning": "hậu bối"
      },
      {
        "id": "topic_03_work_11",
        "num": 11,
        "sentence_hira": "すずきさんは <u>かいぎ</u> を/が 探しています。",
        "sentence_kanji": "すずきさんは <u>会議</u> を/が 探しています。",
        "kanji_target": "会議",
        "hira_target": "かいぎ",
        "kanji_options": [
          "社長",
          "会議",
          "出張",
          "先輩"
        ],
        "hira_options": [
          "しゃちょう",
          "かいぎ",
          "しゅっちょう",
          "せんぱい"
        ],
        "romaji": "kaigi",
        "vi_meaning": "cuộc họp"
      },
      {
        "id": "topic_03_work_12",
        "num": 12,
        "sentence_hira": "すずきさんは <u>しょるい</u> を/が 探しています。",
        "sentence_kanji": "すずきさんは <u>書類</u> を/が 探しています。",
        "kanji_target": "書類",
        "hira_target": "しょるい",
        "kanji_options": [
          "先輩",
          "同僚",
          "電話",
          "書類"
        ],
        "hira_options": [
          "せんぱい",
          "どうりょう",
          "でんわ",
          "しょるい"
        ],
        "romaji": "shorui",
        "vi_meaning": "tài liệu"
      },
      {
        "id": "topic_03_work_13",
        "num": 13,
        "sentence_hira": "すずきさんは <u>めいし</u> を/が 探しています。",
        "sentence_kanji": "すずきさんは <u>名刺</u> を/が 探しています。",
        "kanji_target": "名刺",
        "hira_target": "めいし",
        "kanji_options": [
          "出張",
          "部長",
          "仕事",
          "名刺"
        ],
        "hira_options": [
          "しゅっちょう",
          "ぶちょう",
          "しごと",
          "めいし"
        ],
        "romaji": "meishi",
        "vi_meaning": "danh thiếp"
      },
      {
        "id": "topic_03_work_14",
        "num": 14,
        "sentence_hira": "すずきさんは <u>きゅうりょう</u> を/が 探しています。",
        "sentence_kanji": "すずきさんは <u>給料</u> を/が 探しています。",
        "kanji_target": "給料",
        "hira_target": "きゅうりょう",
        "kanji_options": [
          "事務所",
          "電話",
          "社長",
          "給料"
        ],
        "hira_options": [
          "じむしょ",
          "でんわ",
          "しゃちょう",
          "きゅうりょう"
        ],
        "romaji": "kyuuryou",
        "vi_meaning": "tiền lương"
      },
      {
        "id": "topic_03_work_15",
        "num": 15,
        "sentence_hira": "すずきさんは <u>ざんぎょう</u> を/が 探しています。",
        "sentence_kanji": "すずきさんは <u>残業</u> を/が 探しています。",
        "kanji_target": "残業",
        "hira_target": "ざんぎょう",
        "kanji_options": [
          "社員",
          "事務所",
          "報告",
          "残業"
        ],
        "hira_options": [
          "しゃいん",
          "じむしょ",
          "ほうこく",
          "ざんぎょう"
        ],
        "romaji": "zangyou",
        "vi_meaning": "Làm thêm giờ"
      },
      {
        "id": "topic_03_work_16",
        "num": 16,
        "sentence_hira": "すずきさんは <u>しゅっちょう</u> を/が 探しています。",
        "sentence_kanji": "すずきさんは <u>出張</u> を/が 探しています。",
        "kanji_target": "出張",
        "hira_target": "しゅっちょう",
        "kanji_options": [
          "電話",
          "後輩",
          "予定",
          "出張"
        ],
        "hira_options": [
          "でんわ",
          "こうはい",
          "よてい",
          "しゅっちょう"
        ],
        "romaji": "shutchou",
        "vi_meaning": "đi công tác"
      },
      {
        "id": "topic_03_work_17",
        "num": 17,
        "sentence_hira": "すずきさんは <u>めんせつ</u> を/が 探しています。",
        "sentence_kanji": "すずきさんは <u>面接</u> を/が 探しています。",
        "kanji_target": "面接",
        "hira_target": "めんせつ",
        "kanji_options": [
          "残業",
          "面接",
          "会社",
          "事務所"
        ],
        "hira_options": [
          "ざんぎょう",
          "めんせつ",
          "かいしゃ",
          "じむしょ"
        ],
        "romaji": "mensetsu",
        "vi_meaning": "phỏng vấn"
      },
      {
        "id": "topic_03_work_18",
        "num": 18,
        "sentence_hira": "すずきさんは <u>しごと</u> を/が 探しています。",
        "sentence_kanji": "すずきさんは <u>仕事</u> を/が 探しています。",
        "kanji_target": "仕事",
        "hira_target": "しごと",
        "kanji_options": [
          "仕事",
          "先輩",
          "報告",
          "残業"
        ],
        "hira_options": [
          "しごと",
          "せんぱい",
          "ほうこく",
          "ざんぎょう"
        ],
        "romaji": "shigoto",
        "vi_meaning": "công việc"
      },
      {
        "id": "topic_03_work_19",
        "num": 19,
        "sentence_hira": "すずきさんは <u>でんわ</u> を/が 探しています。",
        "sentence_kanji": "すずきさんは <u>電話</u> を/が 探しています。",
        "kanji_target": "電話",
        "hira_target": "でんわ",
        "kanji_options": [
          "仕事",
          "電話",
          "事務所",
          "給料"
        ],
        "hira_options": [
          "しごと",
          "でんわ",
          "じむしょ",
          "きゅうりょう"
        ],
        "romaji": "denwa",
        "vi_meaning": "cuộc gọi"
      },
      {
        "id": "topic_03_work_20",
        "num": 20,
        "sentence_hira": "すずきさんは <u>めーる</u> を/が 探しています。",
        "sentence_kanji": "すずきさんは <u>メール</u> を/が 探しています。",
        "kanji_target": "メール",
        "hira_target": "めーる",
        "kanji_options": [
          "先輩",
          "部長",
          "先輩",
          "メール"
        ],
        "hira_options": [
          "せんぱい",
          "ぶちょう",
          "せんぱい",
          "めーる"
        ],
        "romaji": "meeru",
        "vi_meaning": "thư điện tử"
      },
      {
        "id": "topic_03_work_21",
        "num": 21,
        "sentence_hira": "すずきさんは <u>ぱそこん</u> を/が 探しています。",
        "sentence_kanji": "すずきさんは <u>パソコン</u> を/が 探しています。",
        "kanji_target": "パソコン",
        "hira_target": "ぱそこん",
        "kanji_options": [
          "出張",
          "パソコン",
          "先輩",
          "メール"
        ],
        "hira_options": [
          "しゅっちょう",
          "ぱそこん",
          "せんぱい",
          "めーる"
        ],
        "romaji": "pasokon",
        "vi_meaning": "máy tính"
      },
      {
        "id": "topic_03_work_22",
        "num": 22,
        "sentence_hira": "すずきさんは <u>こぴー</u> を/が 探しています。",
        "sentence_kanji": "すずきさんは <u>コピー</u> を/が 探しています。",
        "kanji_target": "コピー",
        "hira_target": "こぴー",
        "kanji_options": [
          "コピー",
          "事務所",
          "先輩",
          "仕事"
        ],
        "hira_options": [
          "こぴー",
          "じむしょ",
          "せんぱい",
          "しごと"
        ],
        "romaji": "kopii",
        "vi_meaning": "bản sao/photocopy"
      },
      {
        "id": "topic_03_work_23",
        "num": 23,
        "sentence_hira": "すずきさんは <u>よてい</u> を/が 探しています。",
        "sentence_kanji": "すずきさんは <u>予定</u> を/が 探しています。",
        "kanji_target": "予定",
        "hira_target": "よてい",
        "kanji_options": [
          "パソコン",
          "予定",
          "工場",
          "パソコン"
        ],
        "hira_options": [
          "ぱそこん",
          "よてい",
          "こうじょう",
          "ぱそこん"
        ],
        "romaji": "yotei",
        "vi_meaning": "kế hoạch"
      },
      {
        "id": "topic_03_work_24",
        "num": 24,
        "sentence_hira": "すずきさんは <u>やくそく</u> を/が 探しています。",
        "sentence_kanji": "すずきさんは <u>約束</u> を/が 探しています。",
        "kanji_target": "約束",
        "hira_target": "やくそく",
        "kanji_options": [
          "工場",
          "課長",
          "残業",
          "約束"
        ],
        "hira_options": [
          "こうじょう",
          "かちょう",
          "ざんぎょう",
          "やくそく"
        ],
        "romaji": "yakusoku",
        "vi_meaning": "cuộc hẹn"
      },
      {
        "id": "topic_03_work_25",
        "num": 25,
        "sentence_hira": "すずきさんは <u>あんない</u> を/が 探しています。",
        "sentence_kanji": "すずきさんは <u>案内</u> を/が 探しています。",
        "kanji_target": "案内",
        "hira_target": "あんない",
        "kanji_options": [
          "報告",
          "社長",
          "出張",
          "案内"
        ],
        "hira_options": [
          "ほうこく",
          "しゃちょう",
          "しゅっちょう",
          "あんない"
        ],
        "romaji": "annai",
        "vi_meaning": "hướng dẫn"
      },
      {
        "id": "topic_03_work_26",
        "num": 26,
        "sentence_hira": "すずきさんは <u>せつめい</u> を/が 探しています。",
        "sentence_kanji": "すずきさんは <u>説明</u> を/が 探しています。",
        "kanji_target": "説明",
        "hira_target": "せつめい",
        "kanji_options": [
          "事務所",
          "説明",
          "パソコン",
          "社員"
        ],
        "hira_options": [
          "じむしょ",
          "せつめい",
          "ぱそこん",
          "しゃいん"
        ],
        "romaji": "setsumei",
        "vi_meaning": "giải thích"
      },
      {
        "id": "topic_03_work_27",
        "num": 27,
        "sentence_hira": "すずきさんは <u>ほうこく</u> を/が 探しています。",
        "sentence_kanji": "すずきさんは <u>報告</u> を/が 探しています。",
        "kanji_target": "報告",
        "hira_target": "ほうこく",
        "kanji_options": [
          "社員",
          "報告",
          "先輩",
          "出張"
        ],
        "hira_options": [
          "しゃいん",
          "ほうこく",
          "せんぱい",
          "しゅっちょう"
        ],
        "romaji": "houkoku",
        "vi_meaning": "báo cáo"
      },
      {
        "id": "topic_03_work_28",
        "num": 28,
        "sentence_hira": "すずきさんは <u>かいしゃ</u> を/が 探しています。",
        "sentence_kanji": "すずきさんは <u>会社</u> を/が 探しています。",
        "kanji_target": "会社",
        "hira_target": "かいしゃ",
        "kanji_options": [
          "案内",
          "先輩",
          "会社",
          "社員"
        ],
        "hira_options": [
          "あんない",
          "せんぱい",
          "かいしゃ",
          "しゃいん"
        ],
        "romaji": "kaisha",
        "vi_meaning": "công ty"
      },
      {
        "id": "topic_03_work_29",
        "num": 29,
        "sentence_hira": "すずきさんは <u>じむしょ</u> を/が 探しています。",
        "sentence_kanji": "すずきさんは <u>事務所</u> を/が 探しています。",
        "kanji_target": "事務所",
        "hira_target": "じむしょ",
        "kanji_options": [
          "メール",
          "事務所",
          "出張",
          "先輩"
        ],
        "hira_options": [
          "めーる",
          "じむしょ",
          "しゅっちょう",
          "せんぱい"
        ],
        "romaji": "jimusho",
        "vi_meaning": "văn phòng"
      },
      {
        "id": "topic_03_work_30",
        "num": 30,
        "sentence_hira": "すずきさんは <u>こうじょう</u> を/が 探しています。",
        "sentence_kanji": "すずきさんは <u>工場</u> を/が 探しています。",
        "kanji_target": "工場",
        "hira_target": "こうじょう",
        "kanji_options": [
          "社員",
          "工場",
          "メール",
          "後輩"
        ],
        "hira_options": [
          "しゃいん",
          "こうじょう",
          "めーる",
          "こうはい"
        ],
        "romaji": "koujou",
        "vi_meaning": "nhà máy"
      },
      {
        "id": "topic_03_work_31",
        "num": 31,
        "sentence_hira": "すずきさんは <u>しゃちょう</u> を/が 探しています。",
        "sentence_kanji": "すずきさんは <u>社長</u> を/が 探しています。",
        "kanji_target": "社長",
        "hira_target": "しゃちょう",
        "kanji_options": [
          "工場",
          "書類",
          "社長",
          "書類"
        ],
        "hira_options": [
          "こうじょう",
          "しょるい",
          "しゃちょう",
          "しょるい"
        ],
        "romaji": "shachou",
        "vi_meaning": "giám đốc"
      },
      {
        "id": "topic_03_work_32",
        "num": 32,
        "sentence_hira": "すずきさんは <u>ぶちょう</u> を/が 探しています。",
        "sentence_kanji": "すずきさんは <u>部長</u> を/が 探しています。",
        "kanji_target": "部長",
        "hira_target": "ぶちょう",
        "kanji_options": [
          "予定",
          "残業",
          "名刺",
          "部長"
        ],
        "hira_options": [
          "よてい",
          "ざんぎょう",
          "めいし",
          "ぶちょう"
        ],
        "romaji": "buchou",
        "vi_meaning": "trưởng phòng"
      },
      {
        "id": "topic_03_work_33",
        "num": 33,
        "sentence_hira": "すずきさんは <u>かちょう</u> を/が 探しています。",
        "sentence_kanji": "すずきさんは <u>課長</u> を/が 探しています。",
        "kanji_target": "課長",
        "hira_target": "かちょう",
        "kanji_options": [
          "社長",
          "課長",
          "会社",
          "残業"
        ],
        "hira_options": [
          "しゃちょう",
          "かちょう",
          "かいしゃ",
          "ざんぎょう"
        ],
        "romaji": "kachou",
        "vi_meaning": "trưởng nhóm"
      },
      {
        "id": "topic_03_work_34",
        "num": 34,
        "sentence_hira": "すずきさんは <u>しゃいん</u> を/が 探しています。",
        "sentence_kanji": "すずきさんは <u>社員</u> を/が 探しています。",
        "kanji_target": "社員",
        "hira_target": "しゃいん",
        "kanji_options": [
          "メール",
          "書類",
          "約束",
          "社員"
        ],
        "hira_options": [
          "めーる",
          "しょるい",
          "やくそく",
          "しゃいん"
        ],
        "romaji": "shain",
        "vi_meaning": "nhân viên"
      },
      {
        "id": "topic_03_work_35",
        "num": 35,
        "sentence_hira": "すずきさんは <u>どうりょう</u> を/が 探しています。",
        "sentence_kanji": "すずきさんは <u>同僚</u> を/が 探しています。",
        "kanji_target": "同僚",
        "hira_target": "どうりょう",
        "kanji_options": [
          "仕事",
          "後輩",
          "会社",
          "同僚"
        ],
        "hira_options": [
          "しごと",
          "こうはい",
          "かいしゃ",
          "どうりょう"
        ],
        "romaji": "douryou",
        "vi_meaning": "đồng nghiệp"
      },
      {
        "id": "topic_03_work_36",
        "num": 36,
        "sentence_hira": "すずきさんは <u>せんぱい</u> を/が 探しています。",
        "sentence_kanji": "すずきさんは <u>先輩</u> を/が 探しています。",
        "kanji_target": "先輩",
        "hira_target": "せんぱい",
        "kanji_options": [
          "先輩",
          "同僚",
          "報告",
          "出張"
        ],
        "hira_options": [
          "せんぱい",
          "どうりょう",
          "ほうこく",
          "しゅっちょう"
        ],
        "romaji": "senpai",
        "vi_meaning": "tiền bối"
      },
      {
        "id": "topic_03_work_37",
        "num": 37,
        "sentence_hira": "すずきさんは <u>こうはい</u> を/が 探しています。",
        "sentence_kanji": "すずきさんは <u>後輩</u> を/が 探しています。",
        "kanji_target": "後輩",
        "hira_target": "こうはい",
        "kanji_options": [
          "事務所",
          "書類",
          "後輩",
          "説明"
        ],
        "hira_options": [
          "じむしょ",
          "しょるい",
          "こうはい",
          "せつめい"
        ],
        "romaji": "kouhai",
        "vi_meaning": "hậu bối"
      },
      {
        "id": "topic_03_work_38",
        "num": 38,
        "sentence_hira": "すずきさんは <u>かいぎ</u> を/が 探しています。",
        "sentence_kanji": "すずきさんは <u>会議</u> を/が 探しています。",
        "kanji_target": "会議",
        "hira_target": "かいぎ",
        "kanji_options": [
          "面接",
          "会議",
          "社員",
          "案内"
        ],
        "hira_options": [
          "めんせつ",
          "かいぎ",
          "しゃいん",
          "あんない"
        ],
        "romaji": "kaigi",
        "vi_meaning": "cuộc họp"
      },
      {
        "id": "topic_03_work_39",
        "num": 39,
        "sentence_hira": "すずきさんは <u>しょるい</u> を/が 探しています。",
        "sentence_kanji": "すずきさんは <u>書類</u> を/が 探しています。",
        "kanji_target": "書類",
        "hira_target": "しょるい",
        "kanji_options": [
          "出張",
          "出張",
          "書類",
          "約束"
        ],
        "hira_options": [
          "しゅっちょう",
          "しゅっちょう",
          "しょるい",
          "やくそく"
        ],
        "romaji": "shorui",
        "vi_meaning": "tài liệu"
      },
      {
        "id": "topic_03_work_40",
        "num": 40,
        "sentence_hira": "すずきさんは <u>めいし</u> を/が 探しています。",
        "sentence_kanji": "すずきさんは <u>名刺</u> を/が 探しています。",
        "kanji_target": "名刺",
        "hira_target": "めいし",
        "kanji_options": [
          "書類",
          "名刺",
          "会議",
          "面接"
        ],
        "hira_options": [
          "しょるい",
          "めいし",
          "かいぎ",
          "めんせつ"
        ],
        "romaji": "meishi",
        "vi_meaning": "danh thiếp"
      },
      {
        "id": "topic_03_work_41",
        "num": 41,
        "sentence_hira": "すずきさんは <u>きゅうりょう</u> を/が 探しています。",
        "sentence_kanji": "すずきさんは <u>給料</u> を/が 探しています。",
        "kanji_target": "給料",
        "hira_target": "きゅうりょう",
        "kanji_options": [
          "工場",
          "電話",
          "給料",
          "名刺"
        ],
        "hira_options": [
          "こうじょう",
          "でんわ",
          "きゅうりょう",
          "めいし"
        ],
        "romaji": "kyuuryou",
        "vi_meaning": "tiền lương"
      },
      {
        "id": "topic_03_work_42",
        "num": 42,
        "sentence_hira": "すずきさんは <u>ざんぎょう</u> を/が 探しています。",
        "sentence_kanji": "すずきさんは <u>残業</u> を/が 探しています。",
        "kanji_target": "残業",
        "hira_target": "ざんぎょう",
        "kanji_options": [
          "予定",
          "社員",
          "同僚",
          "残業"
        ],
        "hira_options": [
          "よてい",
          "しゃいん",
          "どうりょう",
          "ざんぎょう"
        ],
        "romaji": "zangyou",
        "vi_meaning": "Làm thêm giờ"
      },
      {
        "id": "topic_03_work_43",
        "num": 43,
        "sentence_hira": "すずきさんは <u>しゅっちょう</u> を/が 探しています。",
        "sentence_kanji": "すずきさんは <u>出張</u> を/が 探しています。",
        "kanji_target": "出張",
        "hira_target": "しゅっちょう",
        "kanji_options": [
          "事務所",
          "出張",
          "同僚",
          "仕事"
        ],
        "hira_options": [
          "じむしょ",
          "しゅっちょう",
          "どうりょう",
          "しごと"
        ],
        "romaji": "shutchou",
        "vi_meaning": "đi công tác"
      },
      {
        "id": "topic_03_work_44",
        "num": 44,
        "sentence_hira": "すずきさんは <u>めんせつ</u> を/が 探しています。",
        "sentence_kanji": "すずきさんは <u>面接</u> を/が 探しています。",
        "kanji_target": "面接",
        "hira_target": "めんせつ",
        "kanji_options": [
          "面接",
          "コピー",
          "工場",
          "社員"
        ],
        "hira_options": [
          "めんせつ",
          "こぴー",
          "こうじょう",
          "しゃいん"
        ],
        "romaji": "mensetsu",
        "vi_meaning": "phỏng vấn"
      },
      {
        "id": "topic_03_work_45",
        "num": 45,
        "sentence_hira": "すずきさんは <u>しごと</u> を/が 探しています。",
        "sentence_kanji": "すずきさんは <u>仕事</u> を/が 探しています。",
        "kanji_target": "仕事",
        "hira_target": "しごと",
        "kanji_options": [
          "パソコン",
          "給料",
          "仕事",
          "報告"
        ],
        "hira_options": [
          "ぱそこん",
          "きゅうりょう",
          "しごと",
          "ほうこく"
        ],
        "romaji": "shigoto",
        "vi_meaning": "công việc"
      },
      {
        "id": "topic_03_work_46",
        "num": 46,
        "sentence_hira": "すずきさんは <u>でんわ</u> を/が 探しています。",
        "sentence_kanji": "すずきさんは <u>電話</u> を/が 探しています。",
        "kanji_target": "電話",
        "hira_target": "でんわ",
        "kanji_options": [
          "名刺",
          "メール",
          "電話",
          "工場"
        ],
        "hira_options": [
          "めいし",
          "めーる",
          "でんわ",
          "こうじょう"
        ],
        "romaji": "denwa",
        "vi_meaning": "cuộc gọi"
      },
      {
        "id": "topic_03_work_47",
        "num": 47,
        "sentence_hira": "すずきさんは <u>めーる</u> を/が 探しています。",
        "sentence_kanji": "すずきさんは <u>メール</u> を/が 探しています。",
        "kanji_target": "メール",
        "hira_target": "めーる",
        "kanji_options": [
          "同僚",
          "報告",
          "社員",
          "メール"
        ],
        "hira_options": [
          "どうりょう",
          "ほうこく",
          "しゃいん",
          "めーる"
        ],
        "romaji": "meeru",
        "vi_meaning": "thư điện tử"
      },
      {
        "id": "topic_03_work_48",
        "num": 48,
        "sentence_hira": "すずきさんは <u>ぱそこん</u> を/が 探しています。",
        "sentence_kanji": "すずきさんは <u>パソコン</u> を/が 探しています。",
        "kanji_target": "パソコン",
        "hira_target": "ぱそこん",
        "kanji_options": [
          "社長",
          "会社",
          "パソコン",
          "報告"
        ],
        "hira_options": [
          "しゃちょう",
          "かいしゃ",
          "ぱそこん",
          "ほうこく"
        ],
        "romaji": "pasokon",
        "vi_meaning": "máy tính"
      },
      {
        "id": "topic_03_work_49",
        "num": 49,
        "sentence_hira": "すずきさんは <u>こぴー</u> を/が 探しています。",
        "sentence_kanji": "すずきさんは <u>コピー</u> を/が 探しています。",
        "kanji_target": "コピー",
        "hira_target": "こぴー",
        "kanji_options": [
          "名刺",
          "コピー",
          "仕事",
          "報告"
        ],
        "hira_options": [
          "めいし",
          "こぴー",
          "しごと",
          "ほうこく"
        ],
        "romaji": "kopii",
        "vi_meaning": "bản sao/photocopy"
      },
      {
        "id": "topic_03_work_50",
        "num": 50,
        "sentence_hira": "すずきさんは <u>よてい</u> を/が 探しています。",
        "sentence_kanji": "すずきさんは <u>予定</u> を/が 探しています。",
        "kanji_target": "予定",
        "hira_target": "よてい",
        "kanji_options": [
          "社員",
          "予定",
          "先輩",
          "パソコン"
        ],
        "hira_options": [
          "しゃいん",
          "よてい",
          "せんぱい",
          "ぱそこん"
        ],
        "romaji": "yotei",
        "vi_meaning": "kế hoạch"
      },
      {
        "id": "topic_03_work_51",
        "num": 51,
        "sentence_hira": "すずきさんは <u>やくそく</u> を/が 探しています。",
        "sentence_kanji": "すずきさんは <u>約束</u> を/が 探しています。",
        "kanji_target": "約束",
        "hira_target": "やくそく",
        "kanji_options": [
          "後輩",
          "約束",
          "残業",
          "社長"
        ],
        "hira_options": [
          "こうはい",
          "やくそく",
          "ざんぎょう",
          "しゃちょう"
        ],
        "romaji": "yakusoku",
        "vi_meaning": "cuộc hẹn"
      },
      {
        "id": "topic_03_work_52",
        "num": 52,
        "sentence_hira": "すずきさんは <u>あんない</u> を/が 探しています。",
        "sentence_kanji": "すずきさんは <u>案内</u> を/が 探しています。",
        "kanji_target": "案内",
        "hira_target": "あんない",
        "kanji_options": [
          "書類",
          "説明",
          "案内",
          "電話"
        ],
        "hira_options": [
          "しょるい",
          "せつめい",
          "あんない",
          "でんわ"
        ],
        "romaji": "annai",
        "vi_meaning": "hướng dẫn"
      },
      {
        "id": "topic_03_work_53",
        "num": 53,
        "sentence_hira": "すずきさんは <u>せつめい</u> を/が 探しています。",
        "sentence_kanji": "すずきさんは <u>説明</u> を/が 探しています。",
        "kanji_target": "説明",
        "hira_target": "せつめい",
        "kanji_options": [
          "名刺",
          "説明",
          "書類",
          "予定"
        ],
        "hira_options": [
          "めいし",
          "せつめい",
          "しょるい",
          "よてい"
        ],
        "romaji": "setsumei",
        "vi_meaning": "giải thích"
      },
      {
        "id": "topic_03_work_54",
        "num": 54,
        "sentence_hira": "すずきさんは <u>ほうこく</u> を/が 探しています。",
        "sentence_kanji": "すずきさんは <u>報告</u> を/が 探しています。",
        "kanji_target": "報告",
        "hira_target": "ほうこく",
        "kanji_options": [
          "報告",
          "メール",
          "工場",
          "パソコン"
        ],
        "hira_options": [
          "ほうこく",
          "めーる",
          "こうじょう",
          "ぱそこん"
        ],
        "romaji": "houkoku",
        "vi_meaning": "báo cáo"
      },
      {
        "id": "topic_03_work_55",
        "num": 55,
        "sentence_hira": "すずきさんは <u>かいしゃ</u> を/が 探しています。",
        "sentence_kanji": "すずきさんは <u>会社</u> を/が 探しています。",
        "kanji_target": "会社",
        "hira_target": "かいしゃ",
        "kanji_options": [
          "会社",
          "社員",
          "案内",
          "仕事"
        ],
        "hira_options": [
          "かいしゃ",
          "しゃいん",
          "あんない",
          "しごと"
        ],
        "romaji": "kaisha",
        "vi_meaning": "công ty"
      },
      {
        "id": "topic_03_work_56",
        "num": 56,
        "sentence_hira": "すずきさんは <u>じむしょ</u> を/が 探しています。",
        "sentence_kanji": "すずきさんは <u>事務所</u> を/が 探しています。",
        "kanji_target": "事務所",
        "hira_target": "じむしょ",
        "kanji_options": [
          "事務所",
          "面接",
          "案内",
          "面接"
        ],
        "hira_options": [
          "じむしょ",
          "めんせつ",
          "あんない",
          "めんせつ"
        ],
        "romaji": "jimusho",
        "vi_meaning": "văn phòng"
      },
      {
        "id": "topic_03_work_57",
        "num": 57,
        "sentence_hira": "すずきさんは <u>こうじょう</u> を/が 探しています。",
        "sentence_kanji": "すずきさんは <u>工場</u> を/が 探しています。",
        "kanji_target": "工場",
        "hira_target": "こうじょう",
        "kanji_options": [
          "課長",
          "工場",
          "面接",
          "社長"
        ],
        "hira_options": [
          "かちょう",
          "こうじょう",
          "めんせつ",
          "しゃちょう"
        ],
        "romaji": "koujou",
        "vi_meaning": "nhà máy"
      },
      {
        "id": "topic_03_work_58",
        "num": 58,
        "sentence_hira": "すずきさんは <u>しゃちょう</u> を/が 探しています。",
        "sentence_kanji": "すずきさんは <u>社長</u> を/が 探しています。",
        "kanji_target": "社長",
        "hira_target": "しゃちょう",
        "kanji_options": [
          "予定",
          "社長",
          "名刺",
          "案内"
        ],
        "hira_options": [
          "よてい",
          "しゃちょう",
          "めいし",
          "あんない"
        ],
        "romaji": "shachou",
        "vi_meaning": "giám đốc"
      },
      {
        "id": "topic_03_work_59",
        "num": 59,
        "sentence_hira": "すずきさんは <u>ぶちょう</u> を/が 探しています。",
        "sentence_kanji": "すずきさんは <u>部長</u> を/が 探しています。",
        "kanji_target": "部長",
        "hira_target": "ぶちょう",
        "kanji_options": [
          "会議",
          "部長",
          "メール",
          "残業"
        ],
        "hira_options": [
          "かいぎ",
          "ぶちょう",
          "めーる",
          "ざんぎょう"
        ],
        "romaji": "buchou",
        "vi_meaning": "trưởng phòng"
      },
      {
        "id": "topic_03_work_60",
        "num": 60,
        "sentence_hira": "すずきさんは <u>かちょう</u> を/が 探しています。",
        "sentence_kanji": "すずきさんは <u>課長</u> を/が 探しています。",
        "kanji_target": "課長",
        "hira_target": "かちょう",
        "kanji_options": [
          "会社",
          "課長",
          "案内",
          "電話"
        ],
        "hira_options": [
          "かいしゃ",
          "かちょう",
          "あんない",
          "でんわ"
        ],
        "romaji": "kachou",
        "vi_meaning": "trưởng nhóm"
      },
      {
        "id": "topic_03_work_61",
        "num": 61,
        "sentence_hira": "すずきさんは <u>しゃいん</u> を/が 探しています。",
        "sentence_kanji": "すずきさんは <u>社員</u> を/が 探しています。",
        "kanji_target": "社員",
        "hira_target": "しゃいん",
        "kanji_options": [
          "予定",
          "工場",
          "仕事",
          "社員"
        ],
        "hira_options": [
          "よてい",
          "こうじょう",
          "しごと",
          "しゃいん"
        ],
        "romaji": "shain",
        "vi_meaning": "nhân viên"
      },
      {
        "id": "topic_03_work_62",
        "num": 62,
        "sentence_hira": "すずきさんは <u>どうりょう</u> を/が 探しています。",
        "sentence_kanji": "すずきさんは <u>同僚</u> を/が 探しています。",
        "kanji_target": "同僚",
        "hira_target": "どうりょう",
        "kanji_options": [
          "同僚",
          "社長",
          "工場",
          "先輩"
        ],
        "hira_options": [
          "どうりょう",
          "しゃちょう",
          "こうじょう",
          "せんぱい"
        ],
        "romaji": "douryou",
        "vi_meaning": "đồng nghiệp"
      },
      {
        "id": "topic_03_work_63",
        "num": 63,
        "sentence_hira": "すずきさんは <u>せんぱい</u> を/が 探しています。",
        "sentence_kanji": "すずきさんは <u>先輩</u> を/が 探しています。",
        "kanji_target": "先輩",
        "hira_target": "せんぱい",
        "kanji_options": [
          "案内",
          "先輩",
          "面接",
          "社員"
        ],
        "hira_options": [
          "あんない",
          "せんぱい",
          "めんせつ",
          "しゃいん"
        ],
        "romaji": "senpai",
        "vi_meaning": "tiền bối"
      },
      {
        "id": "topic_03_work_64",
        "num": 64,
        "sentence_hira": "すずきさんは <u>こうはい</u> を/が 探しています。",
        "sentence_kanji": "すずきさんは <u>後輩</u> を/が 探しています。",
        "kanji_target": "後輩",
        "hira_target": "こうはい",
        "kanji_options": [
          "後輩",
          "部長",
          "報告",
          "コピー"
        ],
        "hira_options": [
          "こうはい",
          "ぶちょう",
          "ほうこく",
          "こぴー"
        ],
        "romaji": "kouhai",
        "vi_meaning": "hậu bối"
      },
      {
        "id": "topic_03_work_65",
        "num": 65,
        "sentence_hira": "すずきさんは <u>かいぎ</u> を/が 探しています。",
        "sentence_kanji": "すずきさんは <u>会議</u> を/が 探しています。",
        "kanji_target": "会議",
        "hira_target": "かいぎ",
        "kanji_options": [
          "説明",
          "パソコン",
          "会議",
          "案内"
        ],
        "hira_options": [
          "せつめい",
          "ぱそこん",
          "かいぎ",
          "あんない"
        ],
        "romaji": "kaigi",
        "vi_meaning": "cuộc họp"
      },
      {
        "id": "topic_03_work_66",
        "num": 66,
        "sentence_hira": "すずきさんは <u>しょるい</u> を/が 探しています。",
        "sentence_kanji": "すずきさんは <u>書類</u> を/が 探しています。",
        "kanji_target": "書類",
        "hira_target": "しょるい",
        "kanji_options": [
          "予定",
          "コピー",
          "同僚",
          "書類"
        ],
        "hira_options": [
          "よてい",
          "こぴー",
          "どうりょう",
          "しょるい"
        ],
        "romaji": "shorui",
        "vi_meaning": "tài liệu"
      },
      {
        "id": "topic_03_work_67",
        "num": 67,
        "sentence_hira": "すずきさんは <u>めいし</u> を/が 探しています。",
        "sentence_kanji": "すずきさんは <u>名刺</u> を/が 探しています。",
        "kanji_target": "名刺",
        "hira_target": "めいし",
        "kanji_options": [
          "名刺",
          "部長",
          "仕事",
          "事務所"
        ],
        "hira_options": [
          "めいし",
          "ぶちょう",
          "しごと",
          "じむしょ"
        ],
        "romaji": "meishi",
        "vi_meaning": "danh thiếp"
      },
      {
        "id": "topic_03_work_68",
        "num": 68,
        "sentence_hira": "すずきさんは <u>きゅうりょう</u> を/が 探しています。",
        "sentence_kanji": "すずきさんは <u>給料</u> を/が 探しています。",
        "kanji_target": "給料",
        "hira_target": "きゅうりょう",
        "kanji_options": [
          "給料",
          "会社",
          "名刺",
          "報告"
        ],
        "hira_options": [
          "きゅうりょう",
          "かいしゃ",
          "めいし",
          "ほうこく"
        ],
        "romaji": "kyuuryou",
        "vi_meaning": "tiền lương"
      },
      {
        "id": "topic_03_work_69",
        "num": 69,
        "sentence_hira": "すずきさんは <u>ざんぎょう</u> を/が 探しています。",
        "sentence_kanji": "すずきさんは <u>残業</u> を/が 探しています。",
        "kanji_target": "残業",
        "hira_target": "ざんぎょう",
        "kanji_options": [
          "残業",
          "事務所",
          "出張",
          "先輩"
        ],
        "hira_options": [
          "ざんぎょう",
          "じむしょ",
          "しゅっちょう",
          "せんぱい"
        ],
        "romaji": "zangyou",
        "vi_meaning": "Làm thêm giờ"
      },
      {
        "id": "topic_03_work_70",
        "num": 70,
        "sentence_hira": "すずきさんは <u>しゅっちょう</u> を/が 探しています。",
        "sentence_kanji": "すずきさんは <u>出張</u> を/が 探しています。",
        "kanji_target": "出張",
        "hira_target": "しゅっちょう",
        "kanji_options": [
          "書類",
          "出張",
          "面接",
          "同僚"
        ],
        "hira_options": [
          "しょるい",
          "しゅっちょう",
          "めんせつ",
          "どうりょう"
        ],
        "romaji": "shutchou",
        "vi_meaning": "đi công tác"
      },
      {
        "id": "topic_03_work_71",
        "num": 71,
        "sentence_hira": "すずきさんは <u>めんせつ</u> を/が 探しています。",
        "sentence_kanji": "すずきさんは <u>面接</u> を/が 探しています。",
        "kanji_target": "面接",
        "hira_target": "めんせつ",
        "kanji_options": [
          "面接",
          "社長",
          "仕事",
          "同僚"
        ],
        "hira_options": [
          "めんせつ",
          "しゃちょう",
          "しごと",
          "どうりょう"
        ],
        "romaji": "mensetsu",
        "vi_meaning": "phỏng vấn"
      },
      {
        "id": "topic_03_work_72",
        "num": 72,
        "sentence_hira": "すずきさんは <u>しごと</u> を/が 探しています。",
        "sentence_kanji": "すずきさんは <u>仕事</u> を/が 探しています。",
        "kanji_target": "仕事",
        "hira_target": "しごと",
        "kanji_options": [
          "事務所",
          "コピー",
          "仕事",
          "面接"
        ],
        "hira_options": [
          "じむしょ",
          "こぴー",
          "しごと",
          "めんせつ"
        ],
        "romaji": "shigoto",
        "vi_meaning": "công việc"
      },
      {
        "id": "topic_03_work_73",
        "num": 73,
        "sentence_hira": "すずきさんは <u>でんわ</u> を/が 探しています。",
        "sentence_kanji": "すずきさんは <u>電話</u> を/が 探しています。",
        "kanji_target": "電話",
        "hira_target": "でんわ",
        "kanji_options": [
          "メール",
          "会議",
          "電話",
          "社員"
        ],
        "hira_options": [
          "めーる",
          "かいぎ",
          "でんわ",
          "しゃいん"
        ],
        "romaji": "denwa",
        "vi_meaning": "cuộc gọi"
      },
      {
        "id": "topic_03_work_74",
        "num": 74,
        "sentence_hira": "すずきさんは <u>めーる</u> を/が 探しています。",
        "sentence_kanji": "すずきさんは <u>メール</u> を/が 探しています。",
        "kanji_target": "メール",
        "hira_target": "めーる",
        "kanji_options": [
          "メール",
          "部長",
          "パソコン",
          "パソコン"
        ],
        "hira_options": [
          "めーる",
          "ぶちょう",
          "ぱそこん",
          "ぱそこん"
        ],
        "romaji": "meeru",
        "vi_meaning": "thư điện tử"
      },
      {
        "id": "topic_03_work_75",
        "num": 75,
        "sentence_hira": "すずきさんは <u>ぱそこん</u> を/が 探しています。",
        "sentence_kanji": "すずきさんは <u>パソコン</u> を/が 探しています。",
        "kanji_target": "パソコン",
        "hira_target": "ぱそこん",
        "kanji_options": [
          "会議",
          "同僚",
          "説明",
          "パソコン"
        ],
        "hira_options": [
          "かいぎ",
          "どうりょう",
          "せつめい",
          "ぱそこん"
        ],
        "romaji": "pasokon",
        "vi_meaning": "máy tính"
      },
      {
        "id": "topic_03_work_76",
        "num": 76,
        "sentence_hira": "すずきさんは <u>こぴー</u> を/が 探しています。",
        "sentence_kanji": "すずきさんは <u>コピー</u> を/が 探しています。",
        "kanji_target": "コピー",
        "hira_target": "こぴー",
        "kanji_options": [
          "後輩",
          "コピー",
          "後輩",
          "残業"
        ],
        "hira_options": [
          "こうはい",
          "こぴー",
          "こうはい",
          "ざんぎょう"
        ],
        "romaji": "kopii",
        "vi_meaning": "bản sao/photocopy"
      },
      {
        "id": "topic_03_work_77",
        "num": 77,
        "sentence_hira": "すずきさんは <u>よてい</u> を/が 探しています。",
        "sentence_kanji": "すずきさんは <u>予定</u> を/が 探しています。",
        "kanji_target": "予定",
        "hira_target": "よてい",
        "kanji_options": [
          "会議",
          "社員",
          "予定",
          "パソコン"
        ],
        "hira_options": [
          "かいぎ",
          "しゃいん",
          "よてい",
          "ぱそこん"
        ],
        "romaji": "yotei",
        "vi_meaning": "kế hoạch"
      },
      {
        "id": "topic_03_work_78",
        "num": 78,
        "sentence_hira": "すずきさんは <u>やくそく</u> を/が 探しています。",
        "sentence_kanji": "すずきさんは <u>約束</u> を/が 探しています。",
        "kanji_target": "約束",
        "hira_target": "やくそく",
        "kanji_options": [
          "書類",
          "同僚",
          "約束",
          "事務所"
        ],
        "hira_options": [
          "しょるい",
          "どうりょう",
          "やくそく",
          "じむしょ"
        ],
        "romaji": "yakusoku",
        "vi_meaning": "cuộc hẹn"
      },
      {
        "id": "topic_03_work_79",
        "num": 79,
        "sentence_hira": "すずきさんは <u>あんない</u> を/が 探しています。",
        "sentence_kanji": "すずきさんは <u>案内</u> を/が 探しています。",
        "kanji_target": "案内",
        "hira_target": "あんない",
        "kanji_options": [
          "約束",
          "案内",
          "会議",
          "工場"
        ],
        "hira_options": [
          "やくそく",
          "あんない",
          "かいぎ",
          "こうじょう"
        ],
        "romaji": "annai",
        "vi_meaning": "hướng dẫn"
      },
      {
        "id": "topic_03_work_80",
        "num": 80,
        "sentence_hira": "すずきさんは <u>せつめい</u> を/が 探しています。",
        "sentence_kanji": "すずきさんは <u>説明</u> を/が 探しています。",
        "kanji_target": "説明",
        "hira_target": "せつめい",
        "kanji_options": [
          "事務所",
          "説明",
          "先輩",
          "社長"
        ],
        "hira_options": [
          "じむしょ",
          "せつめい",
          "せんぱい",
          "しゃちょう"
        ],
        "romaji": "setsumei",
        "vi_meaning": "giải thích"
      },
      {
        "id": "topic_03_work_81",
        "num": 81,
        "sentence_hira": "すずきさんは <u>ほうこく</u> を/が 探しています。",
        "sentence_kanji": "すずきさんは <u>報告</u> を/が 探しています。",
        "kanji_target": "報告",
        "hira_target": "ほうこく",
        "kanji_options": [
          "社員",
          "同僚",
          "残業",
          "報告"
        ],
        "hira_options": [
          "しゃいん",
          "どうりょう",
          "ざんぎょう",
          "ほうこく"
        ],
        "romaji": "houkoku",
        "vi_meaning": "báo cáo"
      },
      {
        "id": "topic_03_work_82",
        "num": 82,
        "sentence_hira": "すずきさんは <u>かいしゃ</u> を/が 探しています。",
        "sentence_kanji": "すずきさんは <u>会社</u> を/が 探しています。",
        "kanji_target": "会社",
        "hira_target": "かいしゃ",
        "kanji_options": [
          "社員",
          "会社",
          "給料",
          "先輩"
        ],
        "hira_options": [
          "しゃいん",
          "かいしゃ",
          "きゅうりょう",
          "せんぱい"
        ],
        "romaji": "kaisha",
        "vi_meaning": "công ty"
      },
      {
        "id": "topic_03_work_83",
        "num": 83,
        "sentence_hira": "すずきさんは <u>じむしょ</u> を/が 探しています。",
        "sentence_kanji": "すずきさんは <u>事務所</u> を/が 探しています。",
        "kanji_target": "事務所",
        "hira_target": "じむしょ",
        "kanji_options": [
          "事務所",
          "残業",
          "面接",
          "工場"
        ],
        "hira_options": [
          "じむしょ",
          "ざんぎょう",
          "めんせつ",
          "こうじょう"
        ],
        "romaji": "jimusho",
        "vi_meaning": "văn phòng"
      },
      {
        "id": "topic_03_work_84",
        "num": 84,
        "sentence_hira": "すずきさんは <u>こうじょう</u> を/が 探しています。",
        "sentence_kanji": "すずきさんは <u>工場</u> を/が 探しています。",
        "kanji_target": "工場",
        "hira_target": "こうじょう",
        "kanji_options": [
          "仕事",
          "同僚",
          "工場",
          "報告"
        ],
        "hira_options": [
          "しごと",
          "どうりょう",
          "こうじょう",
          "ほうこく"
        ],
        "romaji": "koujou",
        "vi_meaning": "nhà máy"
      },
      {
        "id": "topic_03_work_85",
        "num": 85,
        "sentence_hira": "すずきさんは <u>しゃちょう</u> を/が 探しています。",
        "sentence_kanji": "すずきさんは <u>社長</u> を/が 探しています。",
        "kanji_target": "社長",
        "hira_target": "しゃちょう",
        "kanji_options": [
          "予定",
          "事務所",
          "社長",
          "社員"
        ],
        "hira_options": [
          "よてい",
          "じむしょ",
          "しゃちょう",
          "しゃいん"
        ],
        "romaji": "shachou",
        "vi_meaning": "giám đốc"
      },
      {
        "id": "topic_03_work_86",
        "num": 86,
        "sentence_hira": "すずきさんは <u>ぶちょう</u> を/が 探しています。",
        "sentence_kanji": "すずきさんは <u>部長</u> を/が 探しています。",
        "kanji_target": "部長",
        "hira_target": "ぶちょう",
        "kanji_options": [
          "パソコン",
          "面接",
          "部長",
          "コピー"
        ],
        "hira_options": [
          "ぱそこん",
          "めんせつ",
          "ぶちょう",
          "こぴー"
        ],
        "romaji": "buchou",
        "vi_meaning": "trưởng phòng"
      },
      {
        "id": "topic_03_work_87",
        "num": 87,
        "sentence_hira": "すずきさんは <u>かちょう</u> を/が 探しています。",
        "sentence_kanji": "すずきさんは <u>課長</u> を/が 探しています。",
        "kanji_target": "課長",
        "hira_target": "かちょう",
        "kanji_options": [
          "電話",
          "予定",
          "課長",
          "残業"
        ],
        "hira_options": [
          "でんわ",
          "よてい",
          "かちょう",
          "ざんぎょう"
        ],
        "romaji": "kachou",
        "vi_meaning": "trưởng nhóm"
      },
      {
        "id": "topic_03_work_88",
        "num": 88,
        "sentence_hira": "すずきさんは <u>しゃいん</u> を/が 探しています。",
        "sentence_kanji": "すずきさんは <u>社員</u> を/が 探しています。",
        "kanji_target": "社員",
        "hira_target": "しゃいん",
        "kanji_options": [
          "社員",
          "事務所",
          "書類",
          "出張"
        ],
        "hira_options": [
          "しゃいん",
          "じむしょ",
          "しょるい",
          "しゅっちょう"
        ],
        "romaji": "shain",
        "vi_meaning": "nhân viên"
      },
      {
        "id": "topic_03_work_89",
        "num": 89,
        "sentence_hira": "すずきさんは <u>どうりょう</u> を/が 探しています。",
        "sentence_kanji": "すずきさんは <u>同僚</u> を/が 探しています。",
        "kanji_target": "同僚",
        "hira_target": "どうりょう",
        "kanji_options": [
          "出張",
          "部長",
          "同僚",
          "面接"
        ],
        "hira_options": [
          "しゅっちょう",
          "ぶちょう",
          "どうりょう",
          "めんせつ"
        ],
        "romaji": "douryou",
        "vi_meaning": "đồng nghiệp"
      },
      {
        "id": "topic_03_work_90",
        "num": 90,
        "sentence_hira": "すずきさんは <u>せんぱい</u> を/が 探しています。",
        "sentence_kanji": "すずきさんは <u>先輩</u> を/が 探しています。",
        "kanji_target": "先輩",
        "hira_target": "せんぱい",
        "kanji_options": [
          "後輩",
          "報告",
          "先輩",
          "課長"
        ],
        "hira_options": [
          "こうはい",
          "ほうこく",
          "せんぱい",
          "かちょう"
        ],
        "romaji": "senpai",
        "vi_meaning": "tiền bối"
      },
      {
        "id": "topic_03_work_91",
        "num": 91,
        "sentence_hira": "すずきさんは <u>こうはい</u> を/が 探しています。",
        "sentence_kanji": "すずきさんは <u>後輩</u> を/が 探しています。",
        "kanji_target": "後輩",
        "hira_target": "こうはい",
        "kanji_options": [
          "面接",
          "出張",
          "後輩",
          "報告"
        ],
        "hira_options": [
          "めんせつ",
          "しゅっちょう",
          "こうはい",
          "ほうこく"
        ],
        "romaji": "kouhai",
        "vi_meaning": "hậu bối"
      },
      {
        "id": "topic_03_work_92",
        "num": 92,
        "sentence_hira": "すずきさんは <u>かいぎ</u> を/が 探しています。",
        "sentence_kanji": "すずきさんは <u>会議</u> を/が 探しています。",
        "kanji_target": "会議",
        "hira_target": "かいぎ",
        "kanji_options": [
          "会議",
          "課長",
          "工場",
          "社長"
        ],
        "hira_options": [
          "かいぎ",
          "かちょう",
          "こうじょう",
          "しゃちょう"
        ],
        "romaji": "kaigi",
        "vi_meaning": "cuộc họp"
      },
      {
        "id": "topic_03_work_93",
        "num": 93,
        "sentence_hira": "すずきさんは <u>しょるい</u> を/が 探しています。",
        "sentence_kanji": "すずきさんは <u>書類</u> を/が 探しています。",
        "kanji_target": "書類",
        "hira_target": "しょるい",
        "kanji_options": [
          "書類",
          "事務所",
          "社長",
          "会議"
        ],
        "hira_options": [
          "しょるい",
          "じむしょ",
          "しゃちょう",
          "かいぎ"
        ],
        "romaji": "shorui",
        "vi_meaning": "tài liệu"
      },
      {
        "id": "topic_03_work_94",
        "num": 94,
        "sentence_hira": "すずきさんは <u>めいし</u> を/が 探しています。",
        "sentence_kanji": "すずきさんは <u>名刺</u> を/が 探しています。",
        "kanji_target": "名刺",
        "hira_target": "めいし",
        "kanji_options": [
          "名刺",
          "課長",
          "給料",
          "課長"
        ],
        "hira_options": [
          "めいし",
          "かちょう",
          "きゅうりょう",
          "かちょう"
        ],
        "romaji": "meishi",
        "vi_meaning": "danh thiếp"
      },
      {
        "id": "topic_03_work_95",
        "num": 95,
        "sentence_hira": "すずきさんは <u>きゅうりょう</u> を/が 探しています。",
        "sentence_kanji": "すずきさんは <u>給料</u> を/が 探しています。",
        "kanji_target": "給料",
        "hira_target": "きゅうりょう",
        "kanji_options": [
          "給料",
          "事務所",
          "事務所",
          "約束"
        ],
        "hira_options": [
          "きゅうりょう",
          "じむしょ",
          "じむしょ",
          "やくそく"
        ],
        "romaji": "kyuuryou",
        "vi_meaning": "tiền lương"
      },
      {
        "id": "topic_03_work_96",
        "num": 96,
        "sentence_hira": "すずきさんは <u>ざんぎょう</u> を/が 探しています。",
        "sentence_kanji": "すずきさんは <u>残業</u> を/が 探しています。",
        "kanji_target": "残業",
        "hira_target": "ざんぎょう",
        "kanji_options": [
          "部長",
          "残業",
          "予定",
          "パソコン"
        ],
        "hira_options": [
          "ぶちょう",
          "ざんぎょう",
          "よてい",
          "ぱそこん"
        ],
        "romaji": "zangyou",
        "vi_meaning": "Làm thêm giờ"
      },
      {
        "id": "topic_03_work_97",
        "num": 97,
        "sentence_hira": "すずきさんは <u>しゅっちょう</u> を/が 探しています。",
        "sentence_kanji": "すずきさんは <u>出張</u> を/が 探しています。",
        "kanji_target": "出張",
        "hira_target": "しゅっちょう",
        "kanji_options": [
          "出張",
          "面接",
          "課長",
          "報告"
        ],
        "hira_options": [
          "しゅっちょう",
          "めんせつ",
          "かちょう",
          "ほうこく"
        ],
        "romaji": "shutchou",
        "vi_meaning": "đi công tác"
      },
      {
        "id": "topic_03_work_98",
        "num": 98,
        "sentence_hira": "すずきさんは <u>めんせつ</u> を/が 探しています。",
        "sentence_kanji": "すずきさんは <u>面接</u> を/が 探しています。",
        "kanji_target": "面接",
        "hira_target": "めんせつ",
        "kanji_options": [
          "説明",
          "給料",
          "残業",
          "面接"
        ],
        "hira_options": [
          "せつめい",
          "きゅうりょう",
          "ざんぎょう",
          "めんせつ"
        ],
        "romaji": "mensetsu",
        "vi_meaning": "phỏng vấn"
      },
      {
        "id": "topic_03_work_99",
        "num": 99,
        "sentence_hira": "すずきさんは <u>しごと</u> を/が 探しています。",
        "sentence_kanji": "すずきさんは <u>仕事</u> を/が 探しています。",
        "kanji_target": "仕事",
        "hira_target": "しごと",
        "kanji_options": [
          "後輩",
          "仕事",
          "残業",
          "予定"
        ],
        "hira_options": [
          "こうはい",
          "しごと",
          "ざんぎょう",
          "よてい"
        ],
        "romaji": "shigoto",
        "vi_meaning": "công việc"
      },
      {
        "id": "topic_03_work_100",
        "num": 100,
        "sentence_hira": "すずきさんは <u>でんわ</u> を/が 探しています。",
        "sentence_kanji": "すずきさんは <u>電話</u> を/が 探しています。",
        "kanji_target": "電話",
        "hira_target": "でんわ",
        "kanji_options": [
          "同僚",
          "電話",
          "部長",
          "事務所"
        ],
        "hira_options": [
          "どうりょう",
          "でんわ",
          "ぶちょう",
          "じむしょ"
        ],
        "romaji": "denwa",
        "vi_meaning": "cuộc gọi"
      },
      {
        "id": "topic_03_work_101",
        "num": 101,
        "sentence_hira": "すずきさんは <u>めーる</u> を/が 探しています。",
        "sentence_kanji": "すずきさんは <u>メール</u> を/が 探しています。",
        "kanji_target": "メール",
        "hira_target": "めーる",
        "kanji_options": [
          "メール",
          "面接",
          "給料",
          "予定"
        ],
        "hira_options": [
          "めーる",
          "めんせつ",
          "きゅうりょう",
          "よてい"
        ],
        "romaji": "meeru",
        "vi_meaning": "thư điện tử"
      },
      {
        "id": "topic_03_work_102",
        "num": 102,
        "sentence_hira": "すずきさんは <u>ぱそこん</u> を/が 探しています。",
        "sentence_kanji": "すずきさんは <u>パソコン</u> を/が 探しています。",
        "kanji_target": "パソコン",
        "hira_target": "ぱそこん",
        "kanji_options": [
          "パソコン",
          "後輩",
          "部長",
          "会議"
        ],
        "hira_options": [
          "ぱそこん",
          "こうはい",
          "ぶちょう",
          "かいぎ"
        ],
        "romaji": "pasokon",
        "vi_meaning": "máy tính"
      },
      {
        "id": "topic_03_work_103",
        "num": 103,
        "sentence_hira": "すずきさんは <u>こぴー</u> を/が 探しています。",
        "sentence_kanji": "すずきさんは <u>コピー</u> を/が 探しています。",
        "kanji_target": "コピー",
        "hira_target": "こぴー",
        "kanji_options": [
          "書類",
          "案内",
          "社員",
          "コピー"
        ],
        "hira_options": [
          "しょるい",
          "あんない",
          "しゃいん",
          "こぴー"
        ],
        "romaji": "kopii",
        "vi_meaning": "bản sao/photocopy"
      },
      {
        "id": "topic_03_work_104",
        "num": 104,
        "sentence_hira": "すずきさんは <u>よてい</u> を/が 探しています。",
        "sentence_kanji": "すずきさんは <u>予定</u> を/が 探しています。",
        "kanji_target": "予定",
        "hira_target": "よてい",
        "kanji_options": [
          "仕事",
          "予定",
          "書類",
          "課長"
        ],
        "hira_options": [
          "しごと",
          "よてい",
          "しょるい",
          "かちょう"
        ],
        "romaji": "yotei",
        "vi_meaning": "kế hoạch"
      },
      {
        "id": "topic_03_work_105",
        "num": 105,
        "sentence_hira": "すずきさんは <u>やくそく</u> を/が 探しています。",
        "sentence_kanji": "すずきさんは <u>約束</u> を/が 探しています。",
        "kanji_target": "約束",
        "hira_target": "やくそく",
        "kanji_options": [
          "約束",
          "社員",
          "部長",
          "仕事"
        ],
        "hira_options": [
          "やくそく",
          "しゃいん",
          "ぶちょう",
          "しごと"
        ],
        "romaji": "yakusoku",
        "vi_meaning": "cuộc hẹn"
      },
      {
        "id": "topic_03_work_106",
        "num": 106,
        "sentence_hira": "すずきさんは <u>あんない</u> を/が 探しています。",
        "sentence_kanji": "すずきさんは <u>案内</u> を/が 探しています。",
        "kanji_target": "案内",
        "hira_target": "あんない",
        "kanji_options": [
          "課長",
          "名刺",
          "課長",
          "案内"
        ],
        "hira_options": [
          "かちょう",
          "めいし",
          "かちょう",
          "あんない"
        ],
        "romaji": "annai",
        "vi_meaning": "hướng dẫn"
      },
      {
        "id": "topic_03_work_107",
        "num": 107,
        "sentence_hira": "すずきさんは <u>せつめい</u> を/が 探しています。",
        "sentence_kanji": "すずきさんは <u>説明</u> を/が 探しています。",
        "kanji_target": "説明",
        "hira_target": "せつめい",
        "kanji_options": [
          "仕事",
          "説明",
          "書類",
          "部長"
        ],
        "hira_options": [
          "しごと",
          "せつめい",
          "しょるい",
          "ぶちょう"
        ],
        "romaji": "setsumei",
        "vi_meaning": "giải thích"
      },
      {
        "id": "topic_03_work_108",
        "num": 108,
        "sentence_hira": "すずきさんは <u>ほうこく</u> を/が 探しています。",
        "sentence_kanji": "すずきさんは <u>報告</u> を/が 探しています。",
        "kanji_target": "報告",
        "hira_target": "ほうこく",
        "kanji_options": [
          "課長",
          "報告",
          "書類",
          "会社"
        ],
        "hira_options": [
          "かちょう",
          "ほうこく",
          "しょるい",
          "かいしゃ"
        ],
        "romaji": "houkoku",
        "vi_meaning": "báo cáo"
      },
      {
        "id": "topic_03_work_109",
        "num": 109,
        "sentence_hira": "すずきさんは <u>かいしゃ</u> を/が 探しています。",
        "sentence_kanji": "すずきさんは <u>会社</u> を/が 探しています。",
        "kanji_target": "会社",
        "hira_target": "かいしゃ",
        "kanji_options": [
          "会社",
          "案内",
          "部長",
          "同僚"
        ],
        "hira_options": [
          "かいしゃ",
          "あんない",
          "ぶちょう",
          "どうりょう"
        ],
        "romaji": "kaisha",
        "vi_meaning": "công ty"
      },
      {
        "id": "topic_03_work_110",
        "num": 110,
        "sentence_hira": "すずきさんは <u>じむしょ</u> を/が 探しています。",
        "sentence_kanji": "すずきさんは <u>事務所</u> を/が 探しています。",
        "kanji_target": "事務所",
        "hira_target": "じむしょ",
        "kanji_options": [
          "名刺",
          "約束",
          "事務所",
          "名刺"
        ],
        "hira_options": [
          "めいし",
          "やくそく",
          "じむしょ",
          "めいし"
        ],
        "romaji": "jimusho",
        "vi_meaning": "văn phòng"
      },
      {
        "id": "topic_03_work_111",
        "num": 111,
        "sentence_hira": "すずきさんは <u>こうじょう</u> を/が 探しています。",
        "sentence_kanji": "すずきさんは <u>工場</u> を/が 探しています。",
        "kanji_target": "工場",
        "hira_target": "こうじょう",
        "kanji_options": [
          "メール",
          "課長",
          "同僚",
          "工場"
        ],
        "hira_options": [
          "めーる",
          "かちょう",
          "どうりょう",
          "こうじょう"
        ],
        "romaji": "koujou",
        "vi_meaning": "nhà máy"
      },
      {
        "id": "topic_03_work_112",
        "num": 112,
        "sentence_hira": "すずきさんは <u>しゃちょう</u> を/が 探しています。",
        "sentence_kanji": "すずきさんは <u>社長</u> を/が 探しています。",
        "kanji_target": "社長",
        "hira_target": "しゃちょう",
        "kanji_options": [
          "社長",
          "パソコン",
          "会議",
          "メール"
        ],
        "hira_options": [
          "しゃちょう",
          "ぱそこん",
          "かいぎ",
          "めーる"
        ],
        "romaji": "shachou",
        "vi_meaning": "giám đốc"
      },
      {
        "id": "topic_03_work_113",
        "num": 113,
        "sentence_hira": "すずきさんは <u>ぶちょう</u> を/が 探しています。",
        "sentence_kanji": "すずきさんは <u>部長</u> を/が 探しています。",
        "kanji_target": "部長",
        "hira_target": "ぶちょう",
        "kanji_options": [
          "名刺",
          "部長",
          "面接",
          "事務所"
        ],
        "hira_options": [
          "めいし",
          "ぶちょう",
          "めんせつ",
          "じむしょ"
        ],
        "romaji": "buchou",
        "vi_meaning": "trưởng phòng"
      },
      {
        "id": "topic_03_work_114",
        "num": 114,
        "sentence_hira": "すずきさんは <u>かちょう</u> を/が 探しています。",
        "sentence_kanji": "すずきさんは <u>課長</u> を/が 探しています。",
        "kanji_target": "課長",
        "hira_target": "かちょう",
        "kanji_options": [
          "報告",
          "会議",
          "名刺",
          "課長"
        ],
        "hira_options": [
          "ほうこく",
          "かいぎ",
          "めいし",
          "かちょう"
        ],
        "romaji": "kachou",
        "vi_meaning": "trưởng nhóm"
      },
      {
        "id": "topic_03_work_115",
        "num": 115,
        "sentence_hira": "すずきさんは <u>しゃいん</u> を/が 探しています。",
        "sentence_kanji": "すずきさんは <u>社員</u> を/が 探しています。",
        "kanji_target": "社員",
        "hira_target": "しゃいん",
        "kanji_options": [
          "説明",
          "社員",
          "名刺",
          "案内"
        ],
        "hira_options": [
          "せつめい",
          "しゃいん",
          "めいし",
          "あんない"
        ],
        "romaji": "shain",
        "vi_meaning": "nhân viên"
      },
      {
        "id": "topic_03_work_116",
        "num": 116,
        "sentence_hira": "すずきさんは <u>どうりょう</u> を/が 探しています。",
        "sentence_kanji": "すずきさんは <u>同僚</u> を/が 探しています。",
        "kanji_target": "同僚",
        "hira_target": "どうりょう",
        "kanji_options": [
          "事務所",
          "部長",
          "同僚",
          "工場"
        ],
        "hira_options": [
          "じむしょ",
          "ぶちょう",
          "どうりょう",
          "こうじょう"
        ],
        "romaji": "douryou",
        "vi_meaning": "đồng nghiệp"
      },
      {
        "id": "topic_03_work_117",
        "num": 117,
        "sentence_hira": "すずきさんは <u>せんぱい</u> を/が 探しています。",
        "sentence_kanji": "すずきさんは <u>先輩</u> を/が 探しています。",
        "kanji_target": "先輩",
        "hira_target": "せんぱい",
        "kanji_options": [
          "約束",
          "会社",
          "先輩",
          "工場"
        ],
        "hira_options": [
          "やくそく",
          "かいしゃ",
          "せんぱい",
          "こうじょう"
        ],
        "romaji": "senpai",
        "vi_meaning": "tiền bối"
      },
      {
        "id": "topic_03_work_118",
        "num": 118,
        "sentence_hira": "すずきさんは <u>こうはい</u> を/が 探しています。",
        "sentence_kanji": "すずきさんは <u>後輩</u> を/が 探しています。",
        "kanji_target": "後輩",
        "hira_target": "こうはい",
        "kanji_options": [
          "出張",
          "予定",
          "部長",
          "後輩"
        ],
        "hira_options": [
          "しゅっちょう",
          "よてい",
          "ぶちょう",
          "こうはい"
        ],
        "romaji": "kouhai",
        "vi_meaning": "hậu bối"
      },
      {
        "id": "topic_03_work_119",
        "num": 119,
        "sentence_hira": "すずきさんは <u>かいぎ</u> を/が 探しています。",
        "sentence_kanji": "すずきさんは <u>会議</u> を/が 探しています。",
        "kanji_target": "会議",
        "hira_target": "かいぎ",
        "kanji_options": [
          "仕事",
          "出張",
          "会議",
          "報告"
        ],
        "hira_options": [
          "しごと",
          "しゅっちょう",
          "かいぎ",
          "ほうこく"
        ],
        "romaji": "kaigi",
        "vi_meaning": "cuộc họp"
      },
      {
        "id": "topic_03_work_120",
        "num": 120,
        "sentence_hira": "すずきさんは <u>しょるい</u> を/が 探しています。",
        "sentence_kanji": "すずきさんは <u>書類</u> を/が 探しています。",
        "kanji_target": "書類",
        "hira_target": "しょるい",
        "kanji_options": [
          "書類",
          "課長",
          "社長",
          "残業"
        ],
        "hira_options": [
          "しょるい",
          "かちょう",
          "しゃちょう",
          "ざんぎょう"
        ],
        "romaji": "shorui",
        "vi_meaning": "tài liệu"
      },
      {
        "id": "topic_03_work_121",
        "num": 121,
        "sentence_hira": "すずきさんは <u>めいし</u> を/が 探しています。",
        "sentence_kanji": "すずきさんは <u>名刺</u> を/が 探しています。",
        "kanji_target": "名刺",
        "hira_target": "めいし",
        "kanji_options": [
          "後輩",
          "給料",
          "報告",
          "名刺"
        ],
        "hira_options": [
          "こうはい",
          "きゅうりょう",
          "ほうこく",
          "めいし"
        ],
        "romaji": "meishi",
        "vi_meaning": "danh thiếp"
      },
      {
        "id": "topic_03_work_122",
        "num": 122,
        "sentence_hira": "すずきさんは <u>きゅうりょう</u> を/が 探しています。",
        "sentence_kanji": "すずきさんは <u>給料</u> を/が 探しています。",
        "kanji_target": "給料",
        "hira_target": "きゅうりょう",
        "kanji_options": [
          "案内",
          "給料",
          "案内",
          "説明"
        ],
        "hira_options": [
          "あんない",
          "きゅうりょう",
          "あんない",
          "せつめい"
        ],
        "romaji": "kyuuryou",
        "vi_meaning": "tiền lương"
      },
      {
        "id": "topic_03_work_123",
        "num": 123,
        "sentence_hira": "すずきさんは <u>ざんぎょう</u> を/が 探しています。",
        "sentence_kanji": "すずきさんは <u>残業</u> を/が 探しています。",
        "kanji_target": "残業",
        "hira_target": "ざんぎょう",
        "kanji_options": [
          "案内",
          "残業",
          "仕事",
          "書類"
        ],
        "hira_options": [
          "あんない",
          "ざんぎょう",
          "しごと",
          "しょるい"
        ],
        "romaji": "zangyou",
        "vi_meaning": "Làm thêm giờ"
      },
      {
        "id": "topic_03_work_124",
        "num": 124,
        "sentence_hira": "すずきさんは <u>しゅっちょう</u> を/が 探しています。",
        "sentence_kanji": "すずきさんは <u>出張</u> を/が 探しています。",
        "kanji_target": "出張",
        "hira_target": "しゅっちょう",
        "kanji_options": [
          "先輩",
          "パソコン",
          "事務所",
          "出張"
        ],
        "hira_options": [
          "せんぱい",
          "ぱそこん",
          "じむしょ",
          "しゅっちょう"
        ],
        "romaji": "shutchou",
        "vi_meaning": "đi công tác"
      },
      {
        "id": "topic_03_work_125",
        "num": 125,
        "sentence_hira": "すずきさんは <u>めんせつ</u> を/が 探しています。",
        "sentence_kanji": "すずきさんは <u>面接</u> を/が 探しています。",
        "kanji_target": "面接",
        "hira_target": "めんせつ",
        "kanji_options": [
          "面接",
          "メール",
          "予定",
          "同僚"
        ],
        "hira_options": [
          "めんせつ",
          "めーる",
          "よてい",
          "どうりょう"
        ],
        "romaji": "mensetsu",
        "vi_meaning": "phỏng vấn"
      },
      {
        "id": "topic_03_work_126",
        "num": 126,
        "sentence_hira": "すずきさんは <u>しごと</u> を/が 探しています。",
        "sentence_kanji": "すずきさんは <u>仕事</u> を/が 探しています。",
        "kanji_target": "仕事",
        "hira_target": "しごと",
        "kanji_options": [
          "案内",
          "説明",
          "仕事",
          "コピー"
        ],
        "hira_options": [
          "あんない",
          "せつめい",
          "しごと",
          "こぴー"
        ],
        "romaji": "shigoto",
        "vi_meaning": "công việc"
      },
      {
        "id": "topic_03_work_127",
        "num": 127,
        "sentence_hira": "すずきさんは <u>でんわ</u> を/が 探しています。",
        "sentence_kanji": "すずきさんは <u>電話</u> を/が 探しています。",
        "kanji_target": "電話",
        "hira_target": "でんわ",
        "kanji_options": [
          "面接",
          "電話",
          "出張",
          "先輩"
        ],
        "hira_options": [
          "めんせつ",
          "でんわ",
          "しゅっちょう",
          "せんぱい"
        ],
        "romaji": "denwa",
        "vi_meaning": "cuộc gọi"
      },
      {
        "id": "topic_03_work_128",
        "num": 128,
        "sentence_hira": "すずきさんは <u>めーる</u> を/が 探しています。",
        "sentence_kanji": "すずきさんは <u>メール</u> を/が 探しています。",
        "kanji_target": "メール",
        "hira_target": "めーる",
        "kanji_options": [
          "メール",
          "会社",
          "事務所",
          "事務所"
        ],
        "hira_options": [
          "めーる",
          "かいしゃ",
          "じむしょ",
          "じむしょ"
        ],
        "romaji": "meeru",
        "vi_meaning": "thư điện tử"
      },
      {
        "id": "topic_03_work_129",
        "num": 129,
        "sentence_hira": "すずきさんは <u>ぱそこん</u> を/が 探しています。",
        "sentence_kanji": "すずきさんは <u>パソコン</u> を/が 探しています。",
        "kanji_target": "パソコン",
        "hira_target": "ぱそこん",
        "kanji_options": [
          "工場",
          "パソコン",
          "面接",
          "書類"
        ],
        "hira_options": [
          "こうじょう",
          "ぱそこん",
          "めんせつ",
          "しょるい"
        ],
        "romaji": "pasokon",
        "vi_meaning": "máy tính"
      },
      {
        "id": "topic_03_work_130",
        "num": 130,
        "sentence_hira": "すずきさんは <u>こぴー</u> を/が 探しています。",
        "sentence_kanji": "すずきさんは <u>コピー</u> を/が 探しています。",
        "kanji_target": "コピー",
        "hira_target": "こぴー",
        "kanji_options": [
          "案内",
          "部長",
          "工場",
          "コピー"
        ],
        "hira_options": [
          "あんない",
          "ぶちょう",
          "こうじょう",
          "こぴー"
        ],
        "romaji": "kopii",
        "vi_meaning": "bản sao/photocopy"
      },
      {
        "id": "topic_03_work_131",
        "num": 131,
        "sentence_hira": "すずきさんは <u>よてい</u> を/が 探しています。",
        "sentence_kanji": "すずきさんは <u>予定</u> を/が 探しています。",
        "kanji_target": "予定",
        "hira_target": "よてい",
        "kanji_options": [
          "説明",
          "部長",
          "予定",
          "残業"
        ],
        "hira_options": [
          "せつめい",
          "ぶちょう",
          "よてい",
          "ざんぎょう"
        ],
        "romaji": "yotei",
        "vi_meaning": "kế hoạch"
      },
      {
        "id": "topic_03_work_132",
        "num": 132,
        "sentence_hira": "すずきさんは <u>やくそく</u> を/が 探しています。",
        "sentence_kanji": "すずきさんは <u>約束</u> を/が 探しています。",
        "kanji_target": "約束",
        "hira_target": "やくそく",
        "kanji_options": [
          "書類",
          "出張",
          "約束",
          "会社"
        ],
        "hira_options": [
          "しょるい",
          "しゅっちょう",
          "やくそく",
          "かいしゃ"
        ],
        "romaji": "yakusoku",
        "vi_meaning": "cuộc hẹn"
      },
      {
        "id": "topic_03_work_133",
        "num": 133,
        "sentence_hira": "すずきさんは <u>あんない</u> を/が 探しています。",
        "sentence_kanji": "すずきさんは <u>案内</u> を/が 探しています。",
        "kanji_target": "案内",
        "hira_target": "あんない",
        "kanji_options": [
          "部長",
          "案内",
          "説明",
          "先輩"
        ],
        "hira_options": [
          "ぶちょう",
          "あんない",
          "せつめい",
          "せんぱい"
        ],
        "romaji": "annai",
        "vi_meaning": "hướng dẫn"
      },
      {
        "id": "topic_03_work_134",
        "num": 134,
        "sentence_hira": "すずきさんは <u>せつめい</u> を/が 探しています。",
        "sentence_kanji": "すずきさんは <u>説明</u> を/が 探しています。",
        "kanji_target": "説明",
        "hira_target": "せつめい",
        "kanji_options": [
          "後輩",
          "社長",
          "説明",
          "残業"
        ],
        "hira_options": [
          "こうはい",
          "しゃちょう",
          "せつめい",
          "ざんぎょう"
        ],
        "romaji": "setsumei",
        "vi_meaning": "giải thích"
      },
      {
        "id": "topic_03_work_135",
        "num": 135,
        "sentence_hira": "すずきさんは <u>ほうこく</u> を/が 探しています。",
        "sentence_kanji": "すずきさんは <u>報告</u> を/が 探しています。",
        "kanji_target": "報告",
        "hira_target": "ほうこく",
        "kanji_options": [
          "報告",
          "面接",
          "約束",
          "名刺"
        ],
        "hira_options": [
          "ほうこく",
          "めんせつ",
          "やくそく",
          "めいし"
        ],
        "romaji": "houkoku",
        "vi_meaning": "báo cáo"
      },
      {
        "id": "topic_03_work_136",
        "num": 136,
        "sentence_hira": "すずきさんは <u>かいしゃ</u> を/が 探しています。",
        "sentence_kanji": "すずきさんは <u>会社</u> を/が 探しています。",
        "kanji_target": "会社",
        "hira_target": "かいしゃ",
        "kanji_options": [
          "会社",
          "社長",
          "説明",
          "パソコン"
        ],
        "hira_options": [
          "かいしゃ",
          "しゃちょう",
          "せつめい",
          "ぱそこん"
        ],
        "romaji": "kaisha",
        "vi_meaning": "công ty"
      },
      {
        "id": "topic_03_work_137",
        "num": 137,
        "sentence_hira": "すずきさんは <u>じむしょ</u> を/が 探しています。",
        "sentence_kanji": "すずきさんは <u>事務所</u> を/が 探しています。",
        "kanji_target": "事務所",
        "hira_target": "じむしょ",
        "kanji_options": [
          "後輩",
          "事務所",
          "メール",
          "給料"
        ],
        "hira_options": [
          "こうはい",
          "じむしょ",
          "めーる",
          "きゅうりょう"
        ],
        "romaji": "jimusho",
        "vi_meaning": "văn phòng"
      },
      {
        "id": "topic_03_work_138",
        "num": 138,
        "sentence_hira": "すずきさんは <u>こうじょう</u> を/が 探しています。",
        "sentence_kanji": "すずきさんは <u>工場</u> を/が 探しています。",
        "kanji_target": "工場",
        "hira_target": "こうじょう",
        "kanji_options": [
          "先輩",
          "部長",
          "工場",
          "面接"
        ],
        "hira_options": [
          "せんぱい",
          "ぶちょう",
          "こうじょう",
          "めんせつ"
        ],
        "romaji": "koujou",
        "vi_meaning": "nhà máy"
      },
      {
        "id": "topic_03_work_139",
        "num": 139,
        "sentence_hira": "すずきさんは <u>しゃちょう</u> を/が 探しています。",
        "sentence_kanji": "すずきさんは <u>社長</u> を/が 探しています。",
        "kanji_target": "社長",
        "hira_target": "しゃちょう",
        "kanji_options": [
          "先輩",
          "社長",
          "給料",
          "報告"
        ],
        "hira_options": [
          "せんぱい",
          "しゃちょう",
          "きゅうりょう",
          "ほうこく"
        ],
        "romaji": "shachou",
        "vi_meaning": "giám đốc"
      },
      {
        "id": "topic_03_work_140",
        "num": 140,
        "sentence_hira": "すずきさんは <u>ぶちょう</u> を/が 探しています。",
        "sentence_kanji": "すずきさんは <u>部長</u> を/が 探しています。",
        "kanji_target": "部長",
        "hira_target": "ぶちょう",
        "kanji_options": [
          "先輩",
          "仕事",
          "部長",
          "書類"
        ],
        "hira_options": [
          "せんぱい",
          "しごと",
          "ぶちょう",
          "しょるい"
        ],
        "romaji": "buchou",
        "vi_meaning": "trưởng phòng"
      },
      {
        "id": "topic_03_work_141",
        "num": 141,
        "sentence_hira": "すずきさんは <u>かちょう</u> を/が 探しています。",
        "sentence_kanji": "すずきさんは <u>課長</u> を/が 探しています。",
        "kanji_target": "課長",
        "hira_target": "かちょう",
        "kanji_options": [
          "課長",
          "同僚",
          "説明",
          "約束"
        ],
        "hira_options": [
          "かちょう",
          "どうりょう",
          "せつめい",
          "やくそく"
        ],
        "romaji": "kachou",
        "vi_meaning": "trưởng nhóm"
      },
      {
        "id": "topic_03_work_142",
        "num": 142,
        "sentence_hira": "すずきさんは <u>しゃいん</u> を/が 探しています。",
        "sentence_kanji": "すずきさんは <u>社員</u> を/が 探しています。",
        "kanji_target": "社員",
        "hira_target": "しゃいん",
        "kanji_options": [
          "電話",
          "社員",
          "コピー",
          "事務所"
        ],
        "hira_options": [
          "でんわ",
          "しゃいん",
          "こぴー",
          "じむしょ"
        ],
        "romaji": "shain",
        "vi_meaning": "nhân viên"
      },
      {
        "id": "topic_03_work_143",
        "num": 143,
        "sentence_hira": "すずきさんは <u>どうりょう</u> を/が 探しています。",
        "sentence_kanji": "すずきさんは <u>同僚</u> を/が 探しています。",
        "kanji_target": "同僚",
        "hira_target": "どうりょう",
        "kanji_options": [
          "工場",
          "同僚",
          "会社",
          "工場"
        ],
        "hira_options": [
          "こうじょう",
          "どうりょう",
          "かいしゃ",
          "こうじょう"
        ],
        "romaji": "douryou",
        "vi_meaning": "đồng nghiệp"
      },
      {
        "id": "topic_03_work_144",
        "num": 144,
        "sentence_hira": "すずきさんは <u>せんぱい</u> を/が 探しています。",
        "sentence_kanji": "すずきさんは <u>先輩</u> を/が 探しています。",
        "kanji_target": "先輩",
        "hira_target": "せんぱい",
        "kanji_options": [
          "部長",
          "給料",
          "先輩",
          "案内"
        ],
        "hira_options": [
          "ぶちょう",
          "きゅうりょう",
          "せんぱい",
          "あんない"
        ],
        "romaji": "senpai",
        "vi_meaning": "tiền bối"
      },
      {
        "id": "topic_03_work_145",
        "num": 145,
        "sentence_hira": "すずきさんは <u>こうはい</u> を/が 探しています。",
        "sentence_kanji": "すずきさんは <u>後輩</u> を/が 探しています。",
        "kanji_target": "後輩",
        "hira_target": "こうはい",
        "kanji_options": [
          "事務所",
          "社員",
          "課長",
          "後輩"
        ],
        "hira_options": [
          "じむしょ",
          "しゃいん",
          "かちょう",
          "こうはい"
        ],
        "romaji": "kouhai",
        "vi_meaning": "hậu bối"
      },
      {
        "id": "topic_03_work_146",
        "num": 146,
        "sentence_hira": "すずきさんは <u>かいぎ</u> を/が 探しています。",
        "sentence_kanji": "すずきさんは <u>会議</u> を/が 探しています。",
        "kanji_target": "会議",
        "hira_target": "かいぎ",
        "kanji_options": [
          "仕事",
          "事務所",
          "残業",
          "会議"
        ],
        "hira_options": [
          "しごと",
          "じむしょ",
          "ざんぎょう",
          "かいぎ"
        ],
        "romaji": "kaigi",
        "vi_meaning": "cuộc họp"
      },
      {
        "id": "topic_03_work_147",
        "num": 147,
        "sentence_hira": "すずきさんは <u>しょるい</u> を/が 探しています。",
        "sentence_kanji": "すずきさんは <u>書類</u> を/が 探しています。",
        "kanji_target": "書類",
        "hira_target": "しょるい",
        "kanji_options": [
          "課長",
          "書類",
          "部長",
          "後輩"
        ],
        "hira_options": [
          "かちょう",
          "しょるい",
          "ぶちょう",
          "こうはい"
        ],
        "romaji": "shorui",
        "vi_meaning": "tài liệu"
      },
      {
        "id": "topic_03_work_148",
        "num": 148,
        "sentence_hira": "すずきさんは <u>めいし</u> を/が 探しています。",
        "sentence_kanji": "すずきさんは <u>名刺</u> を/が 探しています。",
        "kanji_target": "名刺",
        "hira_target": "めいし",
        "kanji_options": [
          "事務所",
          "名刺",
          "事務所",
          "書類"
        ],
        "hira_options": [
          "じむしょ",
          "めいし",
          "じむしょ",
          "しょるい"
        ],
        "romaji": "meishi",
        "vi_meaning": "danh thiếp"
      },
      {
        "id": "topic_03_work_149",
        "num": 149,
        "sentence_hira": "すずきさんは <u>きゅうりょう</u> を/が 探しています。",
        "sentence_kanji": "すずきさんは <u>給料</u> を/が 探しています。",
        "kanji_target": "給料",
        "hira_target": "きゅうりょう",
        "kanji_options": [
          "給料",
          "事務所",
          "約束",
          "残業"
        ],
        "hira_options": [
          "きゅうりょう",
          "じむしょ",
          "やくそく",
          "ざんぎょう"
        ],
        "romaji": "kyuuryou",
        "vi_meaning": "tiền lương"
      },
      {
        "id": "topic_03_work_150",
        "num": 150,
        "sentence_hira": "すずきさんは <u>ざんぎょう</u> を/が 探しています。",
        "sentence_kanji": "すずきさんは <u>残業</u> を/が 探しています。",
        "kanji_target": "残業",
        "hira_target": "ざんぎょう",
        "kanji_options": [
          "残業",
          "部長",
          "社員",
          "工場"
        ],
        "hira_options": [
          "ざんぎょう",
          "ぶちょう",
          "しゃいん",
          "こうじょう"
        ],
        "romaji": "zangyou",
        "vi_meaning": "Làm thêm giờ"
      },
      {
        "id": "topic_03_work_151",
        "num": 151,
        "sentence_hira": "すずきさんは <u>しゅっちょう</u> を/が 探しています。",
        "sentence_kanji": "すずきさんは <u>出張</u> を/が 探しています。",
        "kanji_target": "出張",
        "hira_target": "しゅっちょう",
        "kanji_options": [
          "出張",
          "残業",
          "書類",
          "パソコン"
        ],
        "hira_options": [
          "しゅっちょう",
          "ざんぎょう",
          "しょるい",
          "ぱそこん"
        ],
        "romaji": "shutchou",
        "vi_meaning": "đi công tác"
      },
      {
        "id": "topic_03_work_152",
        "num": 152,
        "sentence_hira": "すずきさんは <u>めんせつ</u> を/が 探しています。",
        "sentence_kanji": "すずきさんは <u>面接</u> を/が 探しています。",
        "kanji_target": "面接",
        "hira_target": "めんせつ",
        "kanji_options": [
          "部長",
          "社長",
          "面接",
          "会議"
        ],
        "hira_options": [
          "ぶちょう",
          "しゃちょう",
          "めんせつ",
          "かいぎ"
        ],
        "romaji": "mensetsu",
        "vi_meaning": "phỏng vấn"
      },
      {
        "id": "topic_03_work_153",
        "num": 153,
        "sentence_hira": "すずきさんは <u>しごと</u> を/が 探しています。",
        "sentence_kanji": "すずきさんは <u>仕事</u> を/が 探しています。",
        "kanji_target": "仕事",
        "hira_target": "しごと",
        "kanji_options": [
          "名刺",
          "報告",
          "仕事",
          "電話"
        ],
        "hira_options": [
          "めいし",
          "ほうこく",
          "しごと",
          "でんわ"
        ],
        "romaji": "shigoto",
        "vi_meaning": "công việc"
      },
      {
        "id": "topic_03_work_154",
        "num": 154,
        "sentence_hira": "すずきさんは <u>でんわ</u> を/が 探しています。",
        "sentence_kanji": "すずきさんは <u>電話</u> を/が 探しています。",
        "kanji_target": "電話",
        "hira_target": "でんわ",
        "kanji_options": [
          "名刺",
          "電話",
          "同僚",
          "約束"
        ],
        "hira_options": [
          "めいし",
          "でんわ",
          "どうりょう",
          "やくそく"
        ],
        "romaji": "denwa",
        "vi_meaning": "cuộc gọi"
      },
      {
        "id": "topic_03_work_155",
        "num": 155,
        "sentence_hira": "すずきさんは <u>めーる</u> を/が 探しています。",
        "sentence_kanji": "すずきさんは <u>メール</u> を/が 探しています。",
        "kanji_target": "メール",
        "hira_target": "めーる",
        "kanji_options": [
          "残業",
          "面接",
          "メール",
          "出張"
        ],
        "hira_options": [
          "ざんぎょう",
          "めんせつ",
          "めーる",
          "しゅっちょう"
        ],
        "romaji": "meeru",
        "vi_meaning": "thư điện tử"
      }
    ]
  },
  {
    "id": "topic_04_school",
    "name": "4. Trường Học & Thi Cử",
    "icon": "🎒",
    "desc": "Trường học, lớp học, thi cử và bài tập (155 câu)",
    "questions": [
      {
        "id": "topic_04_school_1",
        "num": 1,
        "sentence_hira": "すずきさんは <u>がっこう</u> を/が 探しています。",
        "sentence_kanji": "すずきさんは <u>学校</u> を/が 探しています。",
        "kanji_target": "学校",
        "hira_target": "がっこう",
        "kanji_options": [
          "学校",
          "黒板",
          "中学校",
          "質問"
        ],
        "hira_options": [
          "がっこう",
          "こくばん",
          "ちゅうがっこう",
          "しつもん"
        ],
        "romaji": "gakkou",
        "vi_meaning": "trường học"
      },
      {
        "id": "topic_04_school_2",
        "num": 2,
        "sentence_hira": "すずきさんは <u>だいがく</u> を/が 探しています。",
        "sentence_kanji": "すずきさんは <u>大学</u> を/が 探しています。",
        "kanji_target": "大学",
        "hira_target": "だいがく",
        "kanji_options": [
          "学校",
          "先生",
          "校長",
          "大学"
        ],
        "hira_options": [
          "がっこう",
          "せんせい",
          "こうちょう",
          "だいがく"
        ],
        "romaji": "daigaku",
        "vi_meaning": "đại học"
      },
      {
        "id": "topic_04_school_3",
        "num": 3,
        "sentence_hira": "すずきさんは <u>こうこう</u> を/が 探しています。",
        "sentence_kanji": "すずきさんは <u>高校</u> を/が 探しています。",
        "kanji_target": "高校",
        "hira_target": "こうこう",
        "kanji_options": [
          "高校",
          "大学",
          "消しゴム",
          "消しゴム"
        ],
        "hira_options": [
          "こうこう",
          "だいがく",
          "けしごむ",
          "けしごむ"
        ],
        "romaji": "koukou",
        "vi_meaning": "trường cấp 3"
      },
      {
        "id": "topic_04_school_4",
        "num": 4,
        "sentence_hira": "すずきさんは <u>ちゅうがっこう</u> を/が 探しています。",
        "sentence_kanji": "すずきさんは <u>中学校</u> を/が 探しています。",
        "kanji_target": "中学校",
        "hira_target": "ちゅうがっこう",
        "kanji_options": [
          "中学校",
          "学生",
          "専門",
          "先生"
        ],
        "hira_options": [
          "ちゅうがっこう",
          "がくせい",
          "せんもん",
          "せんせい"
        ],
        "romaji": "chuugakkou",
        "vi_meaning": "trường cấp 2"
      },
      {
        "id": "topic_04_school_5",
        "num": 5,
        "sentence_hira": "すずきさんは <u>しょうがっこう</u> を/が 探しています。",
        "sentence_kanji": "すずきさんは <u>小学校</u> を/が 探しています。",
        "kanji_target": "小学校",
        "hira_target": "しょうがっこう",
        "kanji_options": [
          "中学校",
          "小学校",
          "学生",
          "定規"
        ],
        "hira_options": [
          "ちゅうがっこう",
          "しょうがっこう",
          "がくせい",
          "じょうぎ"
        ],
        "romaji": "shougakkou",
        "vi_meaning": "trường cấp 1"
      },
      {
        "id": "topic_04_school_6",
        "num": 6,
        "sentence_hira": "すずきさんは <u>きょうしつ</u> を/が 探しています。",
        "sentence_kanji": "すずきさんは <u>教室</u> を/が 探しています。",
        "kanji_target": "教室",
        "hira_target": "きょうしつ",
        "kanji_options": [
          "教室",
          "留学生",
          "授業",
          "ノート"
        ],
        "hira_options": [
          "きょうしつ",
          "りゅうがくせい",
          "じゅぎょう",
          "のーと"
        ],
        "romaji": "kyoushitsu",
        "vi_meaning": "phòng học"
      },
      {
        "id": "topic_04_school_7",
        "num": 7,
        "sentence_hira": "すずきさんは <u>じゅぎょう</u> を/が 探しています。",
        "sentence_kanji": "すずきさんは <u>授業</u> を/が 探しています。",
        "kanji_target": "授業",
        "hira_target": "じゅぎょう",
        "kanji_options": [
          "先生",
          "学校",
          "質問",
          "授業"
        ],
        "hira_options": [
          "せんせい",
          "がっこう",
          "しつもん",
          "じゅぎょう"
        ],
        "romaji": "jugyou",
        "vi_meaning": "buổi học"
      },
      {
        "id": "topic_04_school_8",
        "num": 8,
        "sentence_hira": "すずきさんは <u>しけん</u> を/が 探しています。",
        "sentence_kanji": "すずきさんは <u>試験</u> を/が 探しています。",
        "kanji_target": "試験",
        "hira_target": "しけん",
        "kanji_options": [
          "試験",
          "大学",
          "授業",
          "研究"
        ],
        "hira_options": [
          "しけん",
          "だいがく",
          "じゅぎょう",
          "けんきゅう"
        ],
        "romaji": "shiken",
        "vi_meaning": "kỳ thi"
      },
      {
        "id": "topic_04_school_9",
        "num": 9,
        "sentence_hira": "すずきさんは <u>しゅくだい</u> を/が 探しています。",
        "sentence_kanji": "すずきさんは <u>宿題</u> を/が 探しています。",
        "kanji_target": "宿題",
        "hira_target": "しゅくだい",
        "kanji_options": [
          "授業",
          "宿題",
          "消しゴム",
          "消しゴム"
        ],
        "hira_options": [
          "じゅぎょう",
          "しゅくだい",
          "けしごむ",
          "けしごむ"
        ],
        "romaji": "shukudai",
        "vi_meaning": "bài tập về nhà"
      },
      {
        "id": "topic_04_school_10",
        "num": 10,
        "sentence_hira": "すずきさんは <u>しつもん</u> を/が 探しています。",
        "sentence_kanji": "すずきさんは <u>質問</u> を/が 探しています。",
        "kanji_target": "質問",
        "hira_target": "しつもん",
        "kanji_options": [
          "試験",
          "先生",
          "専門",
          "質問"
        ],
        "hira_options": [
          "しけん",
          "せんせい",
          "せんもん",
          "しつもん"
        ],
        "romaji": "shitsumon",
        "vi_meaning": "câu hỏi"
      },
      {
        "id": "topic_04_school_11",
        "num": 11,
        "sentence_hira": "すずきさんは <u>こたえ</u> を/が 探しています。",
        "sentence_kanji": "すずきさんは <u>答え</u> を/が 探しています。",
        "kanji_target": "答え",
        "hira_target": "こたえ",
        "kanji_options": [
          "鉛筆",
          "答え",
          "定規",
          "授業"
        ],
        "hira_options": [
          "えんぴつ",
          "こたえ",
          "じょうぎ",
          "じゅぎょう"
        ],
        "romaji": "kotae",
        "vi_meaning": "câu trả lời"
      },
      {
        "id": "topic_04_school_12",
        "num": 12,
        "sentence_hira": "すずきさんは <u>きょうかしょ</u> を/が 探しています。",
        "sentence_kanji": "すずきさんは <u>教科書</u> を/が 探しています。",
        "kanji_target": "教科書",
        "hira_target": "きょうかしょ",
        "kanji_options": [
          "校長",
          "答え",
          "中学校",
          "教科書"
        ],
        "hira_options": [
          "こうちょう",
          "こたえ",
          "ちゅうがっこう",
          "きょうかしょ"
        ],
        "romaji": "kyoukasho",
        "vi_meaning": "sách giáo khoa"
      },
      {
        "id": "topic_04_school_13",
        "num": 13,
        "sentence_hira": "すずきさんは <u>じしょ</u> を/が 探しています。",
        "sentence_kanji": "すずきさんは <u>辞書</u> を/が 探しています。",
        "kanji_target": "辞書",
        "hira_target": "じしょ",
        "kanji_options": [
          "研究",
          "授業",
          "辞書",
          "ノート"
        ],
        "hira_options": [
          "けんきゅう",
          "じゅぎょう",
          "じしょ",
          "のーと"
        ],
        "romaji": "jisho",
        "vi_meaning": "từ điển"
      },
      {
        "id": "topic_04_school_14",
        "num": 14,
        "sentence_hira": "すずきさんは <u>こくばん</u> を/が 探しています。",
        "sentence_kanji": "すずきさんは <u>黒板</u> を/が 探しています。",
        "kanji_target": "黒板",
        "hira_target": "こくばん",
        "kanji_options": [
          "辞書",
          "教室",
          "中学校",
          "黒板"
        ],
        "hira_options": [
          "じしょ",
          "きょうしつ",
          "ちゅうがっこう",
          "こくばん"
        ],
        "romaji": "kokuban",
        "vi_meaning": "bảng đen"
      },
      {
        "id": "topic_04_school_15",
        "num": 15,
        "sentence_hira": "すずきさんは <u>のーと</u> を/が 探しています。",
        "sentence_kanji": "すずきさんは <u>ノート</u> を/が 探しています。",
        "kanji_target": "ノート",
        "hira_target": "のーと",
        "kanji_options": [
          "専門",
          "ノート",
          "学生",
          "留学生"
        ],
        "hira_options": [
          "せんもん",
          "のーと",
          "がくせい",
          "りゅうがくせい"
        ],
        "romaji": "nootu",
        "vi_meaning": "vở ghi"
      },
      {
        "id": "topic_04_school_16",
        "num": 16,
        "sentence_hira": "すずきさんは <u>えんぴつ</u> を/が 探しています。",
        "sentence_kanji": "すずきさんは <u>鉛筆</u> を/が 探しています。",
        "kanji_target": "鉛筆",
        "hira_target": "えんぴつ",
        "kanji_options": [
          "学生",
          "大学",
          "鉛筆",
          "学生"
        ],
        "hira_options": [
          "がくせい",
          "だいがく",
          "えんぴつ",
          "がくせい"
        ],
        "romaji": "enpitsu",
        "vi_meaning": "bút chibi"
      },
      {
        "id": "topic_04_school_17",
        "num": 17,
        "sentence_hira": "すずきさんは <u>けしごむ</u> を/が 探しています。",
        "sentence_kanji": "すずきさんは <u>消しゴム</u> を/が 探しています。",
        "kanji_target": "消しゴム",
        "hira_target": "けしごむ",
        "kanji_options": [
          "学校",
          "消しゴム",
          "先生",
          "研究"
        ],
        "hira_options": [
          "がっこう",
          "けしごむ",
          "せんせい",
          "けんきゅう"
        ],
        "romaji": "keshigomu",
        "vi_meaning": "cục tẩy"
      },
      {
        "id": "topic_04_school_18",
        "num": 18,
        "sentence_hira": "すずきさんは <u>じょうぎ</u> を/が 探しています。",
        "sentence_kanji": "すずきさんは <u>定規</u> を/が 探しています。",
        "kanji_target": "定規",
        "hira_target": "じょうぎ",
        "kanji_options": [
          "先生",
          "辞書",
          "校長",
          "定規"
        ],
        "hira_options": [
          "せんせい",
          "じしょ",
          "こうちょう",
          "じょうぎ"
        ],
        "romaji": "jougi",
        "vi_meaning": "thước kẻ"
      },
      {
        "id": "topic_04_school_19",
        "num": 19,
        "sentence_hira": "すずきさんは <u>せんもん</u> を/が 探しています。",
        "sentence_kanji": "すずきさんは <u>専門</u> を/が 探しています。",
        "kanji_target": "専門",
        "hira_target": "せんもん",
        "kanji_options": [
          "専門",
          "先生",
          "辞書",
          "答え"
        ],
        "hira_options": [
          "せんもん",
          "せんせい",
          "じしょ",
          "こたえ"
        ],
        "romaji": "senmon",
        "vi_meaning": "chuyên ngành"
      },
      {
        "id": "topic_04_school_20",
        "num": 20,
        "sentence_hira": "すずきさんは <u>けんきゅう</u> を/が 探しています。",
        "sentence_kanji": "すずきさんは <u>研究</u> を/が 探しています。",
        "kanji_target": "研究",
        "hira_target": "けんきゅう",
        "kanji_options": [
          "研究",
          "黒板",
          "学生",
          "大学"
        ],
        "hira_options": [
          "けんきゅう",
          "こくばん",
          "がくせい",
          "だいがく"
        ],
        "romaji": "kenkyuu",
        "vi_meaning": "nghiên cứu"
      },
      {
        "id": "topic_04_school_21",
        "num": 21,
        "sentence_hira": "すずきさんは <u>がくせい</u> を/が 探しています。",
        "sentence_kanji": "すずきさんは <u>学生</u> を/が 探しています。",
        "kanji_target": "学生",
        "hira_target": "がくせい",
        "kanji_options": [
          "教室",
          "答え",
          "鉛筆",
          "学生"
        ],
        "hira_options": [
          "きょうしつ",
          "こたえ",
          "えんぴつ",
          "がくせい"
        ],
        "romaji": "gakusei",
        "vi_meaning": "học sinh/sinh viên"
      },
      {
        "id": "topic_04_school_22",
        "num": 22,
        "sentence_hira": "すずきさんは <u>せんせい</u> を/が 探しています。",
        "sentence_kanji": "すずきさんは <u>先生</u> を/が 探しています。",
        "kanji_target": "先生",
        "hira_target": "せんせい",
        "kanji_options": [
          "授業",
          "留学生",
          "先生",
          "質問"
        ],
        "hira_options": [
          "じゅぎょう",
          "りゅうがくせい",
          "せんせい",
          "しつもん"
        ],
        "romaji": "sensei",
        "vi_meaning": "thầy/cô giáo"
      },
      {
        "id": "topic_04_school_23",
        "num": 23,
        "sentence_hira": "すずきさんは <u>りゅうがくせい</u> を/が 探しています。",
        "sentence_kanji": "すずきさんは <u>留学生</u> を/が 探しています。",
        "kanji_target": "留学生",
        "hira_target": "りゅうがくせい",
        "kanji_options": [
          "留学生",
          "質問",
          "宿題",
          "ノート"
        ],
        "hira_options": [
          "りゅうがくせい",
          "しつもん",
          "しゅくだい",
          "のーと"
        ],
        "romaji": "ryuugakusei",
        "vi_meaning": "du học sinh"
      },
      {
        "id": "topic_04_school_24",
        "num": 24,
        "sentence_hira": "すずきさんは <u>こうちょう</u> を/が 探しています。",
        "sentence_kanji": "すずきさんは <u>校長</u> を/が 探しています。",
        "kanji_target": "校長",
        "hira_target": "こうちょう",
        "kanji_options": [
          "大学",
          "教科書",
          "校長",
          "宿題"
        ],
        "hira_options": [
          "だいがく",
          "きょうかしょ",
          "こうちょう",
          "しゅくだい"
        ],
        "romaji": "kouchou",
        "vi_meaning": "hiệu trưởng"
      },
      {
        "id": "topic_04_school_25",
        "num": 25,
        "sentence_hira": "すずきさんは <u>がっこう</u> を/が 探しています。",
        "sentence_kanji": "すずきさんは <u>学校</u> を/が 探しています。",
        "kanji_target": "学校",
        "hira_target": "がっこう",
        "kanji_options": [
          "小学校",
          "留学生",
          "学校",
          "中学校"
        ],
        "hira_options": [
          "しょうがっこう",
          "りゅうがくせい",
          "がっこう",
          "ちゅうがっこう"
        ],
        "romaji": "gakkou",
        "vi_meaning": "trường học"
      },
      {
        "id": "topic_04_school_26",
        "num": 26,
        "sentence_hira": "すずきさんは <u>だいがく</u> を/が 探しています。",
        "sentence_kanji": "すずきさんは <u>大学</u> を/が 探しています。",
        "kanji_target": "大学",
        "hira_target": "だいがく",
        "kanji_options": [
          "ノート",
          "黒板",
          "消しゴム",
          "大学"
        ],
        "hira_options": [
          "のーと",
          "こくばん",
          "けしごむ",
          "だいがく"
        ],
        "romaji": "daigaku",
        "vi_meaning": "đại học"
      },
      {
        "id": "topic_04_school_27",
        "num": 27,
        "sentence_hira": "すずきさんは <u>こうこう</u> を/が 探しています。",
        "sentence_kanji": "すずきさんは <u>高校</u> を/が 探しています。",
        "kanji_target": "高校",
        "hira_target": "こうこう",
        "kanji_options": [
          "高校",
          "辞書",
          "大学",
          "学校"
        ],
        "hira_options": [
          "こうこう",
          "じしょ",
          "だいがく",
          "がっこう"
        ],
        "romaji": "koukou",
        "vi_meaning": "trường cấp 3"
      },
      {
        "id": "topic_04_school_28",
        "num": 28,
        "sentence_hira": "すずきさんは <u>ちゅうがっこう</u> を/が 探しています。",
        "sentence_kanji": "すずきさんは <u>中学校</u> を/が 探しています。",
        "kanji_target": "中学校",
        "hira_target": "ちゅうがっこう",
        "kanji_options": [
          "留学生",
          "授業",
          "中学校",
          "授業"
        ],
        "hira_options": [
          "りゅうがくせい",
          "じゅぎょう",
          "ちゅうがっこう",
          "じゅぎょう"
        ],
        "romaji": "chuugakkou",
        "vi_meaning": "trường cấp 2"
      },
      {
        "id": "topic_04_school_29",
        "num": 29,
        "sentence_hira": "すずきさんは <u>しょうがっこう</u> を/が 探しています。",
        "sentence_kanji": "すずきさんは <u>小学校</u> を/が 探しています。",
        "kanji_target": "小学校",
        "hira_target": "しょうがっこう",
        "kanji_options": [
          "教室",
          "教室",
          "消しゴム",
          "小学校"
        ],
        "hira_options": [
          "きょうしつ",
          "きょうしつ",
          "けしごむ",
          "しょうがっこう"
        ],
        "romaji": "shougakkou",
        "vi_meaning": "trường cấp 1"
      },
      {
        "id": "topic_04_school_30",
        "num": 30,
        "sentence_hira": "すずきさんは <u>きょうしつ</u> を/が 探しています。",
        "sentence_kanji": "すずきさんは <u>教室</u> を/が 探しています。",
        "kanji_target": "教室",
        "hira_target": "きょうしつ",
        "kanji_options": [
          "教室",
          "留学生",
          "留学生",
          "宿題"
        ],
        "hira_options": [
          "きょうしつ",
          "りゅうがくせい",
          "りゅうがくせい",
          "しゅくだい"
        ],
        "romaji": "kyoushitsu",
        "vi_meaning": "phòng học"
      },
      {
        "id": "topic_04_school_31",
        "num": 31,
        "sentence_hira": "すずきさんは <u>じゅぎょう</u> を/が 探しています。",
        "sentence_kanji": "すずきさんは <u>授業</u> を/が 探しています。",
        "kanji_target": "授業",
        "hira_target": "じゅぎょう",
        "kanji_options": [
          "答え",
          "授業",
          "宿題",
          "消しゴム"
        ],
        "hira_options": [
          "こたえ",
          "じゅぎょう",
          "しゅくだい",
          "けしごむ"
        ],
        "romaji": "jugyou",
        "vi_meaning": "buổi học"
      },
      {
        "id": "topic_04_school_32",
        "num": 32,
        "sentence_hira": "すずきさんは <u>しけん</u> を/が 探しています。",
        "sentence_kanji": "すずきさんは <u>試験</u> を/が 探しています。",
        "kanji_target": "試験",
        "hira_target": "しけん",
        "kanji_options": [
          "留学生",
          "大学",
          "黒板",
          "試験"
        ],
        "hira_options": [
          "りゅうがくせい",
          "だいがく",
          "こくばん",
          "しけん"
        ],
        "romaji": "shiken",
        "vi_meaning": "kỳ thi"
      },
      {
        "id": "topic_04_school_33",
        "num": 33,
        "sentence_hira": "すずきさんは <u>しゅくだい</u> を/が 探しています。",
        "sentence_kanji": "すずきさんは <u>宿題</u> を/が 探しています。",
        "kanji_target": "宿題",
        "hira_target": "しゅくだい",
        "kanji_options": [
          "教科書",
          "宿題",
          "ノート",
          "小学校"
        ],
        "hira_options": [
          "きょうかしょ",
          "しゅくだい",
          "のーと",
          "しょうがっこう"
        ],
        "romaji": "shukudai",
        "vi_meaning": "bài tập về nhà"
      },
      {
        "id": "topic_04_school_34",
        "num": 34,
        "sentence_hira": "すずきさんは <u>しつもん</u> を/が 探しています。",
        "sentence_kanji": "すずきさんは <u>質問</u> を/が 探しています。",
        "kanji_target": "質問",
        "hira_target": "しつもん",
        "kanji_options": [
          "学生",
          "中学校",
          "質問",
          "ノート"
        ],
        "hira_options": [
          "がくせい",
          "ちゅうがっこう",
          "しつもん",
          "のーと"
        ],
        "romaji": "shitsumon",
        "vi_meaning": "câu hỏi"
      },
      {
        "id": "topic_04_school_35",
        "num": 35,
        "sentence_hira": "すずきさんは <u>こたえ</u> を/が 探しています。",
        "sentence_kanji": "すずきさんは <u>答え</u> を/が 探しています。",
        "kanji_target": "答え",
        "hira_target": "こたえ",
        "kanji_options": [
          "試験",
          "答え",
          "大学",
          "留学生"
        ],
        "hira_options": [
          "しけん",
          "こたえ",
          "だいがく",
          "りゅうがくせい"
        ],
        "romaji": "kotae",
        "vi_meaning": "câu trả lời"
      },
      {
        "id": "topic_04_school_36",
        "num": 36,
        "sentence_hira": "すずきさんは <u>きょうかしょ</u> を/が 探しています。",
        "sentence_kanji": "すずきさんは <u>教科書</u> を/が 探しています。",
        "kanji_target": "教科書",
        "hira_target": "きょうかしょ",
        "kanji_options": [
          "学校",
          "教科書",
          "大学",
          "試験"
        ],
        "hira_options": [
          "がっこう",
          "きょうかしょ",
          "だいがく",
          "しけん"
        ],
        "romaji": "kyoukasho",
        "vi_meaning": "sách giáo khoa"
      },
      {
        "id": "topic_04_school_37",
        "num": 37,
        "sentence_hira": "すずきさんは <u>じしょ</u> を/が 探しています。",
        "sentence_kanji": "すずきさんは <u>辞書</u> を/が 探しています。",
        "kanji_target": "辞書",
        "hira_target": "じしょ",
        "kanji_options": [
          "鉛筆",
          "辞書",
          "ノート",
          "大学"
        ],
        "hira_options": [
          "えんぴつ",
          "じしょ",
          "のーと",
          "だいがく"
        ],
        "romaji": "jisho",
        "vi_meaning": "từ điển"
      },
      {
        "id": "topic_04_school_38",
        "num": 38,
        "sentence_hira": "すずきさんは <u>こくばん</u> を/が 探しています。",
        "sentence_kanji": "すずきさんは <u>黒板</u> を/が 探しています。",
        "kanji_target": "黒板",
        "hira_target": "こくばん",
        "kanji_options": [
          "黒板",
          "授業",
          "教科書",
          "中学校"
        ],
        "hira_options": [
          "こくばん",
          "じゅぎょう",
          "きょうかしょ",
          "ちゅうがっこう"
        ],
        "romaji": "kokuban",
        "vi_meaning": "bảng đen"
      },
      {
        "id": "topic_04_school_39",
        "num": 39,
        "sentence_hira": "すずきさんは <u>のーと</u> を/が 探しています。",
        "sentence_kanji": "すずきさんは <u>ノート</u> を/が 探しています。",
        "kanji_target": "ノート",
        "hira_target": "のーと",
        "kanji_options": [
          "校長",
          "消しゴム",
          "ノート",
          "先生"
        ],
        "hira_options": [
          "こうちょう",
          "けしごむ",
          "のーと",
          "せんせい"
        ],
        "romaji": "nootu",
        "vi_meaning": "vở ghi"
      },
      {
        "id": "topic_04_school_40",
        "num": 40,
        "sentence_hira": "すずきさんは <u>えんぴつ</u> を/が 探しています。",
        "sentence_kanji": "すずきさんは <u>鉛筆</u> を/が 探しています。",
        "kanji_target": "鉛筆",
        "hira_target": "えんぴつ",
        "kanji_options": [
          "鉛筆",
          "宿題",
          "授業",
          "中学校"
        ],
        "hira_options": [
          "えんぴつ",
          "しゅくだい",
          "じゅぎょう",
          "ちゅうがっこう"
        ],
        "romaji": "enpitsu",
        "vi_meaning": "bút chibi"
      },
      {
        "id": "topic_04_school_41",
        "num": 41,
        "sentence_hira": "すずきさんは <u>けしごむ</u> を/が 探しています。",
        "sentence_kanji": "すずきさんは <u>消しゴム</u> を/が 探しています。",
        "kanji_target": "消しゴム",
        "hira_target": "けしごむ",
        "kanji_options": [
          "研究",
          "消しゴム",
          "先生",
          "授業"
        ],
        "hira_options": [
          "けんきゅう",
          "けしごむ",
          "せんせい",
          "じゅぎょう"
        ],
        "romaji": "keshigomu",
        "vi_meaning": "cục tẩy"
      },
      {
        "id": "topic_04_school_42",
        "num": 42,
        "sentence_hira": "すずきさんは <u>じょうぎ</u> を/が 探しています。",
        "sentence_kanji": "すずきさんは <u>定規</u> を/が 探しています。",
        "kanji_target": "定規",
        "hira_target": "じょうぎ",
        "kanji_options": [
          "定規",
          "鉛筆",
          "小学校",
          "研究"
        ],
        "hira_options": [
          "じょうぎ",
          "えんぴつ",
          "しょうがっこう",
          "けんきゅう"
        ],
        "romaji": "jougi",
        "vi_meaning": "thước kẻ"
      },
      {
        "id": "topic_04_school_43",
        "num": 43,
        "sentence_hira": "すずきさんは <u>せんもん</u> を/が 探しています。",
        "sentence_kanji": "すずきさんは <u>専門</u> を/が 探しています。",
        "kanji_target": "専門",
        "hira_target": "せんもん",
        "kanji_options": [
          "専門",
          "宿題",
          "高校",
          "留学生"
        ],
        "hira_options": [
          "せんもん",
          "しゅくだい",
          "こうこう",
          "りゅうがくせい"
        ],
        "romaji": "senmon",
        "vi_meaning": "chuyên ngành"
      },
      {
        "id": "topic_04_school_44",
        "num": 44,
        "sentence_hira": "すずきさんは <u>けんきゅう</u> を/が 探しています。",
        "sentence_kanji": "すずきさんは <u>研究</u> を/が 探しています。",
        "kanji_target": "研究",
        "hira_target": "けんきゅう",
        "kanji_options": [
          "試験",
          "質問",
          "留学生",
          "研究"
        ],
        "hira_options": [
          "しけん",
          "しつもん",
          "りゅうがくせい",
          "けんきゅう"
        ],
        "romaji": "kenkyuu",
        "vi_meaning": "nghiên cứu"
      },
      {
        "id": "topic_04_school_45",
        "num": 45,
        "sentence_hira": "すずきさんは <u>がくせい</u> を/が 探しています。",
        "sentence_kanji": "すずきさんは <u>学生</u> を/が 探しています。",
        "kanji_target": "学生",
        "hira_target": "がくせい",
        "kanji_options": [
          "小学校",
          "学生",
          "大学",
          "中学校"
        ],
        "hira_options": [
          "しょうがっこう",
          "がくせい",
          "だいがく",
          "ちゅうがっこう"
        ],
        "romaji": "gakusei",
        "vi_meaning": "học sinh/sinh viên"
      },
      {
        "id": "topic_04_school_46",
        "num": 46,
        "sentence_hira": "すずきさんは <u>せんせい</u> を/が 探しています。",
        "sentence_kanji": "すずきさんは <u>先生</u> を/が 探しています。",
        "kanji_target": "先生",
        "hira_target": "せんせい",
        "kanji_options": [
          "黒板",
          "定規",
          "先生",
          "ノート"
        ],
        "hira_options": [
          "こくばん",
          "じょうぎ",
          "せんせい",
          "のーと"
        ],
        "romaji": "sensei",
        "vi_meaning": "thầy/cô giáo"
      },
      {
        "id": "topic_04_school_47",
        "num": 47,
        "sentence_hira": "すずきさんは <u>りゅうがくせい</u> を/が 探しています。",
        "sentence_kanji": "すずきさんは <u>留学生</u> を/が 探しています。",
        "kanji_target": "留学生",
        "hira_target": "りゅうがくせい",
        "kanji_options": [
          "学生",
          "定規",
          "宿題",
          "留学生"
        ],
        "hira_options": [
          "がくせい",
          "じょうぎ",
          "しゅくだい",
          "りゅうがくせい"
        ],
        "romaji": "ryuugakusei",
        "vi_meaning": "du học sinh"
      },
      {
        "id": "topic_04_school_48",
        "num": 48,
        "sentence_hira": "すずきさんは <u>こうちょう</u> を/が 探しています。",
        "sentence_kanji": "すずきさんは <u>校長</u> を/が 探しています。",
        "kanji_target": "校長",
        "hira_target": "こうちょう",
        "kanji_options": [
          "授業",
          "試験",
          "校長",
          "大学"
        ],
        "hira_options": [
          "じゅぎょう",
          "しけん",
          "こうちょう",
          "だいがく"
        ],
        "romaji": "kouchou",
        "vi_meaning": "hiệu trưởng"
      },
      {
        "id": "topic_04_school_49",
        "num": 49,
        "sentence_hira": "すずきさんは <u>がっこう</u> を/が 探しています。",
        "sentence_kanji": "すずきさんは <u>学校</u> を/が 探しています。",
        "kanji_target": "学校",
        "hira_target": "がっこう",
        "kanji_options": [
          "質問",
          "学校",
          "先生",
          "定規"
        ],
        "hira_options": [
          "しつもん",
          "がっこう",
          "せんせい",
          "じょうぎ"
        ],
        "romaji": "gakkou",
        "vi_meaning": "trường học"
      },
      {
        "id": "topic_04_school_50",
        "num": 50,
        "sentence_hira": "すずきさんは <u>だいがく</u> を/が 探しています。",
        "sentence_kanji": "すずきさんは <u>大学</u> を/が 探しています。",
        "kanji_target": "大学",
        "hira_target": "だいがく",
        "kanji_options": [
          "鉛筆",
          "大学",
          "学生",
          "校長"
        ],
        "hira_options": [
          "えんぴつ",
          "だいがく",
          "がくせい",
          "こうちょう"
        ],
        "romaji": "daigaku",
        "vi_meaning": "đại học"
      },
      {
        "id": "topic_04_school_51",
        "num": 51,
        "sentence_hira": "すずきさんは <u>こうこう</u> を/が 探しています。",
        "sentence_kanji": "すずきさんは <u>高校</u> を/が 探しています。",
        "kanji_target": "高校",
        "hira_target": "こうこう",
        "kanji_options": [
          "教科書",
          "質問",
          "教室",
          "高校"
        ],
        "hira_options": [
          "きょうかしょ",
          "しつもん",
          "きょうしつ",
          "こうこう"
        ],
        "romaji": "koukou",
        "vi_meaning": "trường cấp 3"
      },
      {
        "id": "topic_04_school_52",
        "num": 52,
        "sentence_hira": "すずきさんは <u>ちゅうがっこう</u> を/が 探しています。",
        "sentence_kanji": "すずきさんは <u>中学校</u> を/が 探しています。",
        "kanji_target": "中学校",
        "hira_target": "ちゅうがっこう",
        "kanji_options": [
          "中学校",
          "質問",
          "大学",
          "ノート"
        ],
        "hira_options": [
          "ちゅうがっこう",
          "しつもん",
          "だいがく",
          "のーと"
        ],
        "romaji": "chuugakkou",
        "vi_meaning": "trường cấp 2"
      },
      {
        "id": "topic_04_school_53",
        "num": 53,
        "sentence_hira": "すずきさんは <u>しょうがっこう</u> を/が 探しています。",
        "sentence_kanji": "すずきさんは <u>小学校</u> を/が 探しています。",
        "kanji_target": "小学校",
        "hira_target": "しょうがっこう",
        "kanji_options": [
          "小学校",
          "教科書",
          "定規",
          "学校"
        ],
        "hira_options": [
          "しょうがっこう",
          "きょうかしょ",
          "じょうぎ",
          "がっこう"
        ],
        "romaji": "shougakkou",
        "vi_meaning": "trường cấp 1"
      },
      {
        "id": "topic_04_school_54",
        "num": 54,
        "sentence_hira": "すずきさんは <u>きょうしつ</u> を/が 探しています。",
        "sentence_kanji": "すずきさんは <u>教室</u> を/が 探しています。",
        "kanji_target": "教室",
        "hira_target": "きょうしつ",
        "kanji_options": [
          "消しゴム",
          "教室",
          "高校",
          "質問"
        ],
        "hira_options": [
          "けしごむ",
          "きょうしつ",
          "こうこう",
          "しつもん"
        ],
        "romaji": "kyoushitsu",
        "vi_meaning": "phòng học"
      },
      {
        "id": "topic_04_school_55",
        "num": 55,
        "sentence_hira": "すずきさんは <u>じゅぎょう</u> を/が 探しています。",
        "sentence_kanji": "すずきさんは <u>授業</u> を/が 探しています。",
        "kanji_target": "授業",
        "hira_target": "じゅぎょう",
        "kanji_options": [
          "授業",
          "辞書",
          "高校",
          "ノート"
        ],
        "hira_options": [
          "じゅぎょう",
          "じしょ",
          "こうこう",
          "のーと"
        ],
        "romaji": "jugyou",
        "vi_meaning": "buổi học"
      },
      {
        "id": "topic_04_school_56",
        "num": 56,
        "sentence_hira": "すずきさんは <u>しけん</u> を/が 探しています。",
        "sentence_kanji": "すずきさんは <u>試験</u> を/が 探しています。",
        "kanji_target": "試験",
        "hira_target": "しけん",
        "kanji_options": [
          "答え",
          "試験",
          "大学",
          "研究"
        ],
        "hira_options": [
          "こたえ",
          "しけん",
          "だいがく",
          "けんきゅう"
        ],
        "romaji": "shiken",
        "vi_meaning": "kỳ thi"
      },
      {
        "id": "topic_04_school_57",
        "num": 57,
        "sentence_hira": "すずきさんは <u>しゅくだい</u> を/が 探しています。",
        "sentence_kanji": "すずきさんは <u>宿題</u> を/が 探しています。",
        "kanji_target": "宿題",
        "hira_target": "しゅくだい",
        "kanji_options": [
          "質問",
          "鉛筆",
          "大学",
          "宿題"
        ],
        "hira_options": [
          "しつもん",
          "えんぴつ",
          "だいがく",
          "しゅくだい"
        ],
        "romaji": "shukudai",
        "vi_meaning": "bài tập về nhà"
      },
      {
        "id": "topic_04_school_58",
        "num": 58,
        "sentence_hira": "すずきさんは <u>しつもん</u> を/が 探しています。",
        "sentence_kanji": "すずきさんは <u>質問</u> を/が 探しています。",
        "kanji_target": "質問",
        "hira_target": "しつもん",
        "kanji_options": [
          "辞書",
          "試験",
          "質問",
          "高校"
        ],
        "hira_options": [
          "じしょ",
          "しけん",
          "しつもん",
          "こうこう"
        ],
        "romaji": "shitsumon",
        "vi_meaning": "câu hỏi"
      },
      {
        "id": "topic_04_school_59",
        "num": 59,
        "sentence_hira": "すずきさんは <u>こたえ</u> を/が 探しています。",
        "sentence_kanji": "すずきさんは <u>答え</u> を/が 探しています。",
        "kanji_target": "答え",
        "hira_target": "こたえ",
        "kanji_options": [
          "教科書",
          "答え",
          "専門",
          "学校"
        ],
        "hira_options": [
          "きょうかしょ",
          "こたえ",
          "せんもん",
          "がっこう"
        ],
        "romaji": "kotae",
        "vi_meaning": "câu trả lời"
      },
      {
        "id": "topic_04_school_60",
        "num": 60,
        "sentence_hira": "すずきさんは <u>きょうかしょ</u> を/が 探しています。",
        "sentence_kanji": "すずきさんは <u>教科書</u> を/が 探しています。",
        "kanji_target": "教科書",
        "hira_target": "きょうかしょ",
        "kanji_options": [
          "辞書",
          "定規",
          "教科書",
          "試験"
        ],
        "hira_options": [
          "じしょ",
          "じょうぎ",
          "きょうかしょ",
          "しけん"
        ],
        "romaji": "kyoukasho",
        "vi_meaning": "sách giáo khoa"
      },
      {
        "id": "topic_04_school_61",
        "num": 61,
        "sentence_hira": "すずきさんは <u>じしょ</u> を/が 探しています。",
        "sentence_kanji": "すずきさんは <u>辞書</u> を/が 探しています。",
        "kanji_target": "辞書",
        "hira_target": "じしょ",
        "kanji_options": [
          "試験",
          "宿題",
          "辞書",
          "大学"
        ],
        "hira_options": [
          "しけん",
          "しゅくだい",
          "じしょ",
          "だいがく"
        ],
        "romaji": "jisho",
        "vi_meaning": "từ điển"
      },
      {
        "id": "topic_04_school_62",
        "num": 62,
        "sentence_hira": "すずきさんは <u>こくばん</u> を/が 探しています。",
        "sentence_kanji": "すずきさんは <u>黒板</u> を/が 探しています。",
        "kanji_target": "黒板",
        "hira_target": "こくばん",
        "kanji_options": [
          "黒板",
          "質問",
          "教科書",
          "学校"
        ],
        "hira_options": [
          "こくばん",
          "しつもん",
          "きょうかしょ",
          "がっこう"
        ],
        "romaji": "kokuban",
        "vi_meaning": "bảng đen"
      },
      {
        "id": "topic_04_school_63",
        "num": 63,
        "sentence_hira": "すずきさんは <u>のーと</u> を/が 探しています。",
        "sentence_kanji": "すずきさんは <u>ノート</u> を/が 探しています。",
        "kanji_target": "ノート",
        "hira_target": "のーと",
        "kanji_options": [
          "専門",
          "ノート",
          "校長",
          "大学"
        ],
        "hira_options": [
          "せんもん",
          "のーと",
          "こうちょう",
          "だいがく"
        ],
        "romaji": "nootu",
        "vi_meaning": "vở ghi"
      },
      {
        "id": "topic_04_school_64",
        "num": 64,
        "sentence_hira": "すずきさんは <u>えんぴつ</u> を/が 探しています。",
        "sentence_kanji": "すずきさんは <u>鉛筆</u> を/が 探しています。",
        "kanji_target": "鉛筆",
        "hira_target": "えんぴつ",
        "kanji_options": [
          "大学",
          "黒板",
          "小学校",
          "鉛筆"
        ],
        "hira_options": [
          "だいがく",
          "こくばん",
          "しょうがっこう",
          "えんぴつ"
        ],
        "romaji": "enpitsu",
        "vi_meaning": "bút chibi"
      },
      {
        "id": "topic_04_school_65",
        "num": 65,
        "sentence_hira": "すずきさんは <u>けしごむ</u> を/が 探しています。",
        "sentence_kanji": "すずきさんは <u>消しゴム</u> を/が 探しています。",
        "kanji_target": "消しゴム",
        "hira_target": "けしごむ",
        "kanji_options": [
          "消しゴム",
          "中学校",
          "学生",
          "専門"
        ],
        "hira_options": [
          "けしごむ",
          "ちゅうがっこう",
          "がくせい",
          "せんもん"
        ],
        "romaji": "keshigomu",
        "vi_meaning": "cục tẩy"
      },
      {
        "id": "topic_04_school_66",
        "num": 66,
        "sentence_hira": "すずきさんは <u>じょうぎ</u> を/が 探しています。",
        "sentence_kanji": "すずきさんは <u>定規</u> を/が 探しています。",
        "kanji_target": "定規",
        "hira_target": "じょうぎ",
        "kanji_options": [
          "ノート",
          "定規",
          "授業",
          "小学校"
        ],
        "hira_options": [
          "のーと",
          "じょうぎ",
          "じゅぎょう",
          "しょうがっこう"
        ],
        "romaji": "jougi",
        "vi_meaning": "thước kẻ"
      },
      {
        "id": "topic_04_school_67",
        "num": 67,
        "sentence_hira": "すずきさんは <u>せんもん</u> を/が 探しています。",
        "sentence_kanji": "すずきさんは <u>専門</u> を/が 探しています。",
        "kanji_target": "専門",
        "hira_target": "せんもん",
        "kanji_options": [
          "専門",
          "質問",
          "先生",
          "宿題"
        ],
        "hira_options": [
          "せんもん",
          "しつもん",
          "せんせい",
          "しゅくだい"
        ],
        "romaji": "senmon",
        "vi_meaning": "chuyên ngành"
      },
      {
        "id": "topic_04_school_68",
        "num": 68,
        "sentence_hira": "すずきさんは <u>けんきゅう</u> を/が 探しています。",
        "sentence_kanji": "すずきさんは <u>研究</u> を/が 探しています。",
        "kanji_target": "研究",
        "hira_target": "けんきゅう",
        "kanji_options": [
          "研究",
          "中学校",
          "教科書",
          "消しゴム"
        ],
        "hira_options": [
          "けんきゅう",
          "ちゅうがっこう",
          "きょうかしょ",
          "けしごむ"
        ],
        "romaji": "kenkyuu",
        "vi_meaning": "nghiên cứu"
      },
      {
        "id": "topic_04_school_69",
        "num": 69,
        "sentence_hira": "すずきさんは <u>がくせい</u> を/が 探しています。",
        "sentence_kanji": "すずきさんは <u>学生</u> を/が 探しています。",
        "kanji_target": "学生",
        "hira_target": "がくせい",
        "kanji_options": [
          "教科書",
          "学校",
          "学生",
          "教科書"
        ],
        "hira_options": [
          "きょうかしょ",
          "がっこう",
          "がくせい",
          "きょうかしょ"
        ],
        "romaji": "gakusei",
        "vi_meaning": "học sinh/sinh viên"
      },
      {
        "id": "topic_04_school_70",
        "num": 70,
        "sentence_hira": "すずきさんは <u>せんせい</u> を/が 探しています。",
        "sentence_kanji": "すずきさんは <u>先生</u> を/が 探しています。",
        "kanji_target": "先生",
        "hira_target": "せんせい",
        "kanji_options": [
          "宿題",
          "先生",
          "辞書",
          "授業"
        ],
        "hira_options": [
          "しゅくだい",
          "せんせい",
          "じしょ",
          "じゅぎょう"
        ],
        "romaji": "sensei",
        "vi_meaning": "thầy/cô giáo"
      },
      {
        "id": "topic_04_school_71",
        "num": 71,
        "sentence_hira": "すずきさんは <u>りゅうがくせい</u> を/が 探しています。",
        "sentence_kanji": "すずきさんは <u>留学生</u> を/が 探しています。",
        "kanji_target": "留学生",
        "hira_target": "りゅうがくせい",
        "kanji_options": [
          "試験",
          "中学校",
          "留学生",
          "研究"
        ],
        "hira_options": [
          "しけん",
          "ちゅうがっこう",
          "りゅうがくせい",
          "けんきゅう"
        ],
        "romaji": "ryuugakusei",
        "vi_meaning": "du học sinh"
      },
      {
        "id": "topic_04_school_72",
        "num": 72,
        "sentence_hira": "すずきさんは <u>こうちょう</u> を/が 探しています。",
        "sentence_kanji": "すずきさんは <u>校長</u> を/が 探しています。",
        "kanji_target": "校長",
        "hira_target": "こうちょう",
        "kanji_options": [
          "学校",
          "校長",
          "試験",
          "研究"
        ],
        "hira_options": [
          "がっこう",
          "こうちょう",
          "しけん",
          "けんきゅう"
        ],
        "romaji": "kouchou",
        "vi_meaning": "hiệu trưởng"
      },
      {
        "id": "topic_04_school_73",
        "num": 73,
        "sentence_hira": "すずきさんは <u>がっこう</u> を/が 探しています。",
        "sentence_kanji": "すずきさんは <u>学校</u> を/が 探しています。",
        "kanji_target": "学校",
        "hira_target": "がっこう",
        "kanji_options": [
          "鉛筆",
          "学生",
          "学生",
          "学校"
        ],
        "hira_options": [
          "えんぴつ",
          "がくせい",
          "がくせい",
          "がっこう"
        ],
        "romaji": "gakkou",
        "vi_meaning": "trường học"
      },
      {
        "id": "topic_04_school_74",
        "num": 74,
        "sentence_hira": "すずきさんは <u>だいがく</u> を/が 探しています。",
        "sentence_kanji": "すずきさんは <u>大学</u> を/が 探しています。",
        "kanji_target": "大学",
        "hira_target": "だいがく",
        "kanji_options": [
          "高校",
          "黒板",
          "大学",
          "定規"
        ],
        "hira_options": [
          "こうこう",
          "こくばん",
          "だいがく",
          "じょうぎ"
        ],
        "romaji": "daigaku",
        "vi_meaning": "đại học"
      },
      {
        "id": "topic_04_school_75",
        "num": 75,
        "sentence_hira": "すずきさんは <u>こうこう</u> を/が 探しています。",
        "sentence_kanji": "すずきさんは <u>高校</u> を/が 探しています。",
        "kanji_target": "高校",
        "hira_target": "こうこう",
        "kanji_options": [
          "試験",
          "辞書",
          "中学校",
          "高校"
        ],
        "hira_options": [
          "しけん",
          "じしょ",
          "ちゅうがっこう",
          "こうこう"
        ],
        "romaji": "koukou",
        "vi_meaning": "trường cấp 3"
      },
      {
        "id": "topic_04_school_76",
        "num": 76,
        "sentence_hira": "すずきさんは <u>ちゅうがっこう</u> を/が 探しています。",
        "sentence_kanji": "すずきさんは <u>中学校</u> を/が 探しています。",
        "kanji_target": "中学校",
        "hira_target": "ちゅうがっこう",
        "kanji_options": [
          "学生",
          "校長",
          "学校",
          "中学校"
        ],
        "hira_options": [
          "がくせい",
          "こうちょう",
          "がっこう",
          "ちゅうがっこう"
        ],
        "romaji": "chuugakkou",
        "vi_meaning": "trường cấp 2"
      },
      {
        "id": "topic_04_school_77",
        "num": 77,
        "sentence_hira": "すずきさんは <u>しょうがっこう</u> を/が 探しています。",
        "sentence_kanji": "すずきさんは <u>小学校</u> を/が 探しています。",
        "kanji_target": "小学校",
        "hira_target": "しょうがっこう",
        "kanji_options": [
          "小学校",
          "大学",
          "試験",
          "定規"
        ],
        "hira_options": [
          "しょうがっこう",
          "だいがく",
          "しけん",
          "じょうぎ"
        ],
        "romaji": "shougakkou",
        "vi_meaning": "trường cấp 1"
      },
      {
        "id": "topic_04_school_78",
        "num": 78,
        "sentence_hira": "すずきさんは <u>きょうしつ</u> を/が 探しています。",
        "sentence_kanji": "すずきさんは <u>教室</u> を/が 探しています。",
        "kanji_target": "教室",
        "hira_target": "きょうしつ",
        "kanji_options": [
          "質問",
          "教室",
          "研究",
          "中学校"
        ],
        "hira_options": [
          "しつもん",
          "きょうしつ",
          "けんきゅう",
          "ちゅうがっこう"
        ],
        "romaji": "kyoushitsu",
        "vi_meaning": "phòng học"
      },
      {
        "id": "topic_04_school_79",
        "num": 79,
        "sentence_hira": "すずきさんは <u>じゅぎょう</u> を/が 探しています。",
        "sentence_kanji": "すずきさんは <u>授業</u> を/が 探しています。",
        "kanji_target": "授業",
        "hira_target": "じゅぎょう",
        "kanji_options": [
          "研究",
          "答え",
          "高校",
          "授業"
        ],
        "hira_options": [
          "けんきゅう",
          "こたえ",
          "こうこう",
          "じゅぎょう"
        ],
        "romaji": "jugyou",
        "vi_meaning": "buổi học"
      },
      {
        "id": "topic_04_school_80",
        "num": 80,
        "sentence_hira": "すずきさんは <u>しけん</u> を/が 探しています。",
        "sentence_kanji": "すずきさんは <u>試験</u> を/が 探しています。",
        "kanji_target": "試験",
        "hira_target": "しけん",
        "kanji_options": [
          "辞書",
          "授業",
          "留学生",
          "試験"
        ],
        "hira_options": [
          "じしょ",
          "じゅぎょう",
          "りゅうがくせい",
          "しけん"
        ],
        "romaji": "shiken",
        "vi_meaning": "kỳ thi"
      },
      {
        "id": "topic_04_school_81",
        "num": 81,
        "sentence_hira": "すずきさんは <u>しゅくだい</u> を/が 探しています。",
        "sentence_kanji": "すずきさんは <u>宿題</u> を/が 探しています。",
        "kanji_target": "宿題",
        "hira_target": "しゅくだい",
        "kanji_options": [
          "宿題",
          "学校",
          "留学生",
          "答え"
        ],
        "hira_options": [
          "しゅくだい",
          "がっこう",
          "りゅうがくせい",
          "こたえ"
        ],
        "romaji": "shukudai",
        "vi_meaning": "bài tập về nhà"
      },
      {
        "id": "topic_04_school_82",
        "num": 82,
        "sentence_hira": "すずきさんは <u>しつもん</u> を/が 探しています。",
        "sentence_kanji": "すずきさんは <u>質問</u> を/が 探しています。",
        "kanji_target": "質問",
        "hira_target": "しつもん",
        "kanji_options": [
          "中学校",
          "学校",
          "質問",
          "留学生"
        ],
        "hira_options": [
          "ちゅうがっこう",
          "がっこう",
          "しつもん",
          "りゅうがくせい"
        ],
        "romaji": "shitsumon",
        "vi_meaning": "câu hỏi"
      },
      {
        "id": "topic_04_school_83",
        "num": 83,
        "sentence_hira": "すずきさんは <u>こたえ</u> を/が 探しています。",
        "sentence_kanji": "すずきさんは <u>答え</u> を/が 探しています。",
        "kanji_target": "答え",
        "hira_target": "こたえ",
        "kanji_options": [
          "学生",
          "質問",
          "答え",
          "試験"
        ],
        "hira_options": [
          "がくせい",
          "しつもん",
          "こたえ",
          "しけん"
        ],
        "romaji": "kotae",
        "vi_meaning": "câu trả lời"
      },
      {
        "id": "topic_04_school_84",
        "num": 84,
        "sentence_hira": "すずきさんは <u>きょうかしょ</u> を/が 探しています。",
        "sentence_kanji": "すずきさんは <u>教科書</u> を/が 探しています。",
        "kanji_target": "教科書",
        "hira_target": "きょうかしょ",
        "kanji_options": [
          "研究",
          "専門",
          "留学生",
          "教科書"
        ],
        "hira_options": [
          "けんきゅう",
          "せんもん",
          "りゅうがくせい",
          "きょうかしょ"
        ],
        "romaji": "kyoukasho",
        "vi_meaning": "sách giáo khoa"
      },
      {
        "id": "topic_04_school_85",
        "num": 85,
        "sentence_hira": "すずきさんは <u>じしょ</u> を/が 探しています。",
        "sentence_kanji": "すずきさんは <u>辞書</u> を/が 探しています。",
        "kanji_target": "辞書",
        "hira_target": "じしょ",
        "kanji_options": [
          "答え",
          "辞書",
          "黒板",
          "専門"
        ],
        "hira_options": [
          "こたえ",
          "じしょ",
          "こくばん",
          "せんもん"
        ],
        "romaji": "jisho",
        "vi_meaning": "từ điển"
      },
      {
        "id": "topic_04_school_86",
        "num": 86,
        "sentence_hira": "すずきさんは <u>こくばん</u> を/が 探しています。",
        "sentence_kanji": "すずきさんは <u>黒板</u> を/が 探しています。",
        "kanji_target": "黒板",
        "hira_target": "こくばん",
        "kanji_options": [
          "答え",
          "黒板",
          "学生",
          "学校"
        ],
        "hira_options": [
          "こたえ",
          "こくばん",
          "がくせい",
          "がっこう"
        ],
        "romaji": "kokuban",
        "vi_meaning": "bảng đen"
      },
      {
        "id": "topic_04_school_87",
        "num": 87,
        "sentence_hira": "すずきさんは <u>のーと</u> を/が 探しています。",
        "sentence_kanji": "すずきさんは <u>ノート</u> を/が 探しています。",
        "kanji_target": "ノート",
        "hira_target": "のーと",
        "kanji_options": [
          "答え",
          "先生",
          "専門",
          "ノート"
        ],
        "hira_options": [
          "こたえ",
          "せんせい",
          "せんもん",
          "のーと"
        ],
        "romaji": "nootu",
        "vi_meaning": "vở ghi"
      },
      {
        "id": "topic_04_school_88",
        "num": 88,
        "sentence_hira": "すずきさんは <u>えんぴつ</u> を/が 探しています。",
        "sentence_kanji": "すずきさんは <u>鉛筆</u> を/が 探しています。",
        "kanji_target": "鉛筆",
        "hira_target": "えんぴつ",
        "kanji_options": [
          "教科書",
          "学校",
          "鉛筆",
          "小学校"
        ],
        "hira_options": [
          "きょうかしょ",
          "がっこう",
          "えんぴつ",
          "しょうがっこう"
        ],
        "romaji": "enpitsu",
        "vi_meaning": "bút chibi"
      },
      {
        "id": "topic_04_school_89",
        "num": 89,
        "sentence_hira": "すずきさんは <u>けしごむ</u> を/が 探しています。",
        "sentence_kanji": "すずきさんは <u>消しゴム</u> を/が 探しています。",
        "kanji_target": "消しゴム",
        "hira_target": "けしごむ",
        "kanji_options": [
          "質問",
          "消しゴム",
          "大学",
          "質問"
        ],
        "hira_options": [
          "しつもん",
          "けしごむ",
          "だいがく",
          "しつもん"
        ],
        "romaji": "keshigomu",
        "vi_meaning": "cục tẩy"
      },
      {
        "id": "topic_04_school_90",
        "num": 90,
        "sentence_hira": "すずきさんは <u>じょうぎ</u> を/が 探しています。",
        "sentence_kanji": "すずきさんは <u>定規</u> を/が 探しています。",
        "kanji_target": "定規",
        "hira_target": "じょうぎ",
        "kanji_options": [
          "大学",
          "小学校",
          "試験",
          "定規"
        ],
        "hira_options": [
          "だいがく",
          "しょうがっこう",
          "しけん",
          "じょうぎ"
        ],
        "romaji": "jougi",
        "vi_meaning": "thước kẻ"
      },
      {
        "id": "topic_04_school_91",
        "num": 91,
        "sentence_hira": "すずきさんは <u>せんもん</u> を/が 探しています。",
        "sentence_kanji": "すずきさんは <u>専門</u> を/が 探しています。",
        "kanji_target": "専門",
        "hira_target": "せんもん",
        "kanji_options": [
          "黒板",
          "専門",
          "宿題",
          "高校"
        ],
        "hira_options": [
          "こくばん",
          "せんもん",
          "しゅくだい",
          "こうこう"
        ],
        "romaji": "senmon",
        "vi_meaning": "chuyên ngành"
      },
      {
        "id": "topic_04_school_92",
        "num": 92,
        "sentence_hira": "すずきさんは <u>けんきゅう</u> を/が 探しています。",
        "sentence_kanji": "すずきさんは <u>研究</u> を/が 探しています。",
        "kanji_target": "研究",
        "hira_target": "けんきゅう",
        "kanji_options": [
          "定規",
          "定規",
          "研究",
          "宿題"
        ],
        "hira_options": [
          "じょうぎ",
          "じょうぎ",
          "けんきゅう",
          "しゅくだい"
        ],
        "romaji": "kenkyuu",
        "vi_meaning": "nghiên cứu"
      },
      {
        "id": "topic_04_school_93",
        "num": 93,
        "sentence_hira": "すずきさんは <u>がくせい</u> を/が 探しています。",
        "sentence_kanji": "すずきさんは <u>学生</u> を/が 探しています。",
        "kanji_target": "学生",
        "hira_target": "がくせい",
        "kanji_options": [
          "辞書",
          "質問",
          "学生",
          "ノート"
        ],
        "hira_options": [
          "じしょ",
          "しつもん",
          "がくせい",
          "のーと"
        ],
        "romaji": "gakusei",
        "vi_meaning": "học sinh/sinh viên"
      },
      {
        "id": "topic_04_school_94",
        "num": 94,
        "sentence_hira": "すずきさんは <u>せんせい</u> を/が 探しています。",
        "sentence_kanji": "すずきさんは <u>先生</u> を/が 探しています。",
        "kanji_target": "先生",
        "hira_target": "せんせい",
        "kanji_options": [
          "校長",
          "試験",
          "先生",
          "留学生"
        ],
        "hira_options": [
          "こうちょう",
          "しけん",
          "せんせい",
          "りゅうがくせい"
        ],
        "romaji": "sensei",
        "vi_meaning": "thầy/cô giáo"
      },
      {
        "id": "topic_04_school_95",
        "num": 95,
        "sentence_hira": "すずきさんは <u>りゅうがくせい</u> を/が 探しています。",
        "sentence_kanji": "すずきさんは <u>留学生</u> を/が 探しています。",
        "kanji_target": "留学生",
        "hira_target": "りゅうがくせい",
        "kanji_options": [
          "鉛筆",
          "答え",
          "留学生",
          "高校"
        ],
        "hira_options": [
          "えんぴつ",
          "こたえ",
          "りゅうがくせい",
          "こうこう"
        ],
        "romaji": "ryuugakusei",
        "vi_meaning": "du học sinh"
      },
      {
        "id": "topic_04_school_96",
        "num": 96,
        "sentence_hira": "すずきさんは <u>こうちょう</u> を/が 探しています。",
        "sentence_kanji": "すずきさんは <u>校長</u> を/が 探しています。",
        "kanji_target": "校長",
        "hira_target": "こうちょう",
        "kanji_options": [
          "校長",
          "小学校",
          "試験",
          "学校"
        ],
        "hira_options": [
          "こうちょう",
          "しょうがっこう",
          "しけん",
          "がっこう"
        ],
        "romaji": "kouchou",
        "vi_meaning": "hiệu trưởng"
      },
      {
        "id": "topic_04_school_97",
        "num": 97,
        "sentence_hira": "すずきさんは <u>がっこう</u> を/が 探しています。",
        "sentence_kanji": "すずきさんは <u>学校</u> を/が 探しています。",
        "kanji_target": "学校",
        "hira_target": "がっこう",
        "kanji_options": [
          "大学",
          "辞書",
          "学校",
          "校長"
        ],
        "hira_options": [
          "だいがく",
          "じしょ",
          "がっこう",
          "こうちょう"
        ],
        "romaji": "gakkou",
        "vi_meaning": "trường học"
      },
      {
        "id": "topic_04_school_98",
        "num": 98,
        "sentence_hira": "すずきさんは <u>だいがく</u> を/が 探しています。",
        "sentence_kanji": "すずきさんは <u>大学</u> を/が 探しています。",
        "kanji_target": "大学",
        "hira_target": "だいがく",
        "kanji_options": [
          "授業",
          "大学",
          "答え",
          "質問"
        ],
        "hira_options": [
          "じゅぎょう",
          "だいがく",
          "こたえ",
          "しつもん"
        ],
        "romaji": "daigaku",
        "vi_meaning": "đại học"
      },
      {
        "id": "topic_04_school_99",
        "num": 99,
        "sentence_hira": "すずきさんは <u>こうこう</u> を/が 探しています。",
        "sentence_kanji": "すずきさんは <u>高校</u> を/が 探しています。",
        "kanji_target": "高校",
        "hira_target": "こうこう",
        "kanji_options": [
          "高校",
          "教室",
          "鉛筆",
          "先生"
        ],
        "hira_options": [
          "こうこう",
          "きょうしつ",
          "えんぴつ",
          "せんせい"
        ],
        "romaji": "koukou",
        "vi_meaning": "trường cấp 3"
      },
      {
        "id": "topic_04_school_100",
        "num": 100,
        "sentence_hira": "すずきさんは <u>ちゅうがっこう</u> を/が 探しています。",
        "sentence_kanji": "すずきさんは <u>中学校</u> を/が 探しています。",
        "kanji_target": "中学校",
        "hira_target": "ちゅうがっこう",
        "kanji_options": [
          "辞書",
          "留学生",
          "中学校",
          "定規"
        ],
        "hira_options": [
          "じしょ",
          "りゅうがくせい",
          "ちゅうがっこう",
          "じょうぎ"
        ],
        "romaji": "chuugakkou",
        "vi_meaning": "trường cấp 2"
      },
      {
        "id": "topic_04_school_101",
        "num": 101,
        "sentence_hira": "すずきさんは <u>しょうがっこう</u> を/が 探しています。",
        "sentence_kanji": "すずきさんは <u>小学校</u> を/が 探しています。",
        "kanji_target": "小学校",
        "hira_target": "しょうがっこう",
        "kanji_options": [
          "ノート",
          "鉛筆",
          "学校",
          "小学校"
        ],
        "hira_options": [
          "のーと",
          "えんぴつ",
          "がっこう",
          "しょうがっこう"
        ],
        "romaji": "shougakkou",
        "vi_meaning": "trường cấp 1"
      },
      {
        "id": "topic_04_school_102",
        "num": 102,
        "sentence_hira": "すずきさんは <u>きょうしつ</u> を/が 探しています。",
        "sentence_kanji": "すずきさんは <u>教室</u> を/が 探しています。",
        "kanji_target": "教室",
        "hira_target": "きょうしつ",
        "kanji_options": [
          "消しゴム",
          "教室",
          "先生",
          "校長"
        ],
        "hira_options": [
          "けしごむ",
          "きょうしつ",
          "せんせい",
          "こうちょう"
        ],
        "romaji": "kyoushitsu",
        "vi_meaning": "phòng học"
      },
      {
        "id": "topic_04_school_103",
        "num": 103,
        "sentence_hira": "すずきさんは <u>じゅぎょう</u> を/が 探しています。",
        "sentence_kanji": "すずきさんは <u>授業</u> を/が 探しています。",
        "kanji_target": "授業",
        "hira_target": "じゅぎょう",
        "kanji_options": [
          "宿題",
          "大学",
          "ノート",
          "授業"
        ],
        "hira_options": [
          "しゅくだい",
          "だいがく",
          "のーと",
          "じゅぎょう"
        ],
        "romaji": "jugyou",
        "vi_meaning": "buổi học"
      },
      {
        "id": "topic_04_school_104",
        "num": 104,
        "sentence_hira": "すずきさんは <u>しけん</u> を/が 探しています。",
        "sentence_kanji": "すずきさんは <u>試験</u> を/が 探しています。",
        "kanji_target": "試験",
        "hira_target": "しけん",
        "kanji_options": [
          "試験",
          "専門",
          "鉛筆",
          "授業"
        ],
        "hira_options": [
          "しけん",
          "せんもん",
          "えんぴつ",
          "じゅぎょう"
        ],
        "romaji": "shiken",
        "vi_meaning": "kỳ thi"
      },
      {
        "id": "topic_04_school_105",
        "num": 105,
        "sentence_hira": "すずきさんは <u>しゅくだい</u> を/が 探しています。",
        "sentence_kanji": "すずきさんは <u>宿題</u> を/が 探しています。",
        "kanji_target": "宿題",
        "hira_target": "しゅくだい",
        "kanji_options": [
          "学校",
          "試験",
          "宿題",
          "大学"
        ],
        "hira_options": [
          "がっこう",
          "しけん",
          "しゅくだい",
          "だいがく"
        ],
        "romaji": "shukudai",
        "vi_meaning": "bài tập về nhà"
      },
      {
        "id": "topic_04_school_106",
        "num": 106,
        "sentence_hira": "すずきさんは <u>しつもん</u> を/が 探しています。",
        "sentence_kanji": "すずきさんは <u>質問</u> を/が 探しています。",
        "kanji_target": "質問",
        "hira_target": "しつもん",
        "kanji_options": [
          "留学生",
          "先生",
          "ノート",
          "質問"
        ],
        "hira_options": [
          "りゅうがくせい",
          "せんせい",
          "のーと",
          "しつもん"
        ],
        "romaji": "shitsumon",
        "vi_meaning": "câu hỏi"
      },
      {
        "id": "topic_04_school_107",
        "num": 107,
        "sentence_hira": "すずきさんは <u>こたえ</u> を/が 探しています。",
        "sentence_kanji": "すずきさんは <u>答え</u> を/が 探しています。",
        "kanji_target": "答え",
        "hira_target": "こたえ",
        "kanji_options": [
          "宿題",
          "答え",
          "授業",
          "中学校"
        ],
        "hira_options": [
          "しゅくだい",
          "こたえ",
          "じゅぎょう",
          "ちゅうがっこう"
        ],
        "romaji": "kotae",
        "vi_meaning": "câu trả lời"
      },
      {
        "id": "topic_04_school_108",
        "num": 108,
        "sentence_hira": "すずきさんは <u>きょうかしょ</u> を/が 探しています。",
        "sentence_kanji": "すずきさんは <u>教科書</u> を/が 探しています。",
        "kanji_target": "教科書",
        "hira_target": "きょうかしょ",
        "kanji_options": [
          "黒板",
          "校長",
          "教科書",
          "ノート"
        ],
        "hira_options": [
          "こくばん",
          "こうちょう",
          "きょうかしょ",
          "のーと"
        ],
        "romaji": "kyoukasho",
        "vi_meaning": "sách giáo khoa"
      },
      {
        "id": "topic_04_school_109",
        "num": 109,
        "sentence_hira": "すずきさんは <u>じしょ</u> を/が 探しています。",
        "sentence_kanji": "すずきさんは <u>辞書</u> を/が 探しています。",
        "kanji_target": "辞書",
        "hira_target": "じしょ",
        "kanji_options": [
          "辞書",
          "専門",
          "留学生",
          "教科書"
        ],
        "hira_options": [
          "じしょ",
          "せんもん",
          "りゅうがくせい",
          "きょうかしょ"
        ],
        "romaji": "jisho",
        "vi_meaning": "từ điển"
      },
      {
        "id": "topic_04_school_110",
        "num": 110,
        "sentence_hira": "すずきさんは <u>こくばん</u> を/が 探しています。",
        "sentence_kanji": "すずきさんは <u>黒板</u> を/が 探しています。",
        "kanji_target": "黒板",
        "hira_target": "こくばん",
        "kanji_options": [
          "黒板",
          "学校",
          "辞書",
          "研究"
        ],
        "hira_options": [
          "こくばん",
          "がっこう",
          "じしょ",
          "けんきゅう"
        ],
        "romaji": "kokuban",
        "vi_meaning": "bảng đen"
      },
      {
        "id": "topic_04_school_111",
        "num": 111,
        "sentence_hira": "すずきさんは <u>のーと</u> を/が 探しています。",
        "sentence_kanji": "すずきさんは <u>ノート</u> を/が 探しています。",
        "kanji_target": "ノート",
        "hira_target": "のーと",
        "kanji_options": [
          "試験",
          "ノート",
          "教室",
          "教科書"
        ],
        "hira_options": [
          "しけん",
          "のーと",
          "きょうしつ",
          "きょうかしょ"
        ],
        "romaji": "nootu",
        "vi_meaning": "vở ghi"
      },
      {
        "id": "topic_04_school_112",
        "num": 112,
        "sentence_hira": "すずきさんは <u>えんぴつ</u> を/が 探しています。",
        "sentence_kanji": "すずきさんは <u>鉛筆</u> を/が 探しています。",
        "kanji_target": "鉛筆",
        "hira_target": "えんぴつ",
        "kanji_options": [
          "専門",
          "鉛筆",
          "教室",
          "定規"
        ],
        "hira_options": [
          "せんもん",
          "えんぴつ",
          "きょうしつ",
          "じょうぎ"
        ],
        "romaji": "enpitsu",
        "vi_meaning": "bút chibi"
      },
      {
        "id": "topic_04_school_113",
        "num": 113,
        "sentence_hira": "すずきさんは <u>けしごむ</u> を/が 探しています。",
        "sentence_kanji": "すずきさんは <u>消しゴム</u> を/が 探しています。",
        "kanji_target": "消しゴム",
        "hira_target": "けしごむ",
        "kanji_options": [
          "専門",
          "中学校",
          "消しゴム",
          "宿題"
        ],
        "hira_options": [
          "せんもん",
          "ちゅうがっこう",
          "けしごむ",
          "しゅくだい"
        ],
        "romaji": "keshigomu",
        "vi_meaning": "cục tẩy"
      },
      {
        "id": "topic_04_school_114",
        "num": 114,
        "sentence_hira": "すずきさんは <u>じょうぎ</u> を/が 探しています。",
        "sentence_kanji": "すずきさんは <u>定規</u> を/が 探しています。",
        "kanji_target": "定規",
        "hira_target": "じょうぎ",
        "kanji_options": [
          "学校",
          "宿題",
          "定規",
          "答え"
        ],
        "hira_options": [
          "がっこう",
          "しゅくだい",
          "じょうぎ",
          "こたえ"
        ],
        "romaji": "jougi",
        "vi_meaning": "thước kẻ"
      },
      {
        "id": "topic_04_school_115",
        "num": 115,
        "sentence_hira": "すずきさんは <u>せんもん</u> を/が 探しています。",
        "sentence_kanji": "すずきさんは <u>専門</u> を/が 探しています。",
        "kanji_target": "専門",
        "hira_target": "せんもん",
        "kanji_options": [
          "専門",
          "大学",
          "教室",
          "校長"
        ],
        "hira_options": [
          "せんもん",
          "だいがく",
          "きょうしつ",
          "こうちょう"
        ],
        "romaji": "senmon",
        "vi_meaning": "chuyên ngành"
      },
      {
        "id": "topic_04_school_116",
        "num": 116,
        "sentence_hira": "すずきさんは <u>けんきゅう</u> を/が 探しています。",
        "sentence_kanji": "すずきさんは <u>研究</u> を/が 探しています。",
        "kanji_target": "研究",
        "hira_target": "けんきゅう",
        "kanji_options": [
          "学生",
          "定規",
          "大学",
          "研究"
        ],
        "hira_options": [
          "がくせい",
          "じょうぎ",
          "だいがく",
          "けんきゅう"
        ],
        "romaji": "kenkyuu",
        "vi_meaning": "nghiên cứu"
      },
      {
        "id": "topic_04_school_117",
        "num": 117,
        "sentence_hira": "すずきさんは <u>がくせい</u> を/が 探しています。",
        "sentence_kanji": "すずきさんは <u>学生</u> を/が 探しています。",
        "kanji_target": "学生",
        "hira_target": "がくせい",
        "kanji_options": [
          "学生",
          "黒板",
          "留学生",
          "辞書"
        ],
        "hira_options": [
          "がくせい",
          "こくばん",
          "りゅうがくせい",
          "じしょ"
        ],
        "romaji": "gakusei",
        "vi_meaning": "học sinh/sinh viên"
      },
      {
        "id": "topic_04_school_118",
        "num": 118,
        "sentence_hira": "すずきさんは <u>せんせい</u> を/が 探しています。",
        "sentence_kanji": "すずきさんは <u>先生</u> を/が 探しています。",
        "kanji_target": "先生",
        "hira_target": "せんせい",
        "kanji_options": [
          "先生",
          "教科書",
          "学校",
          "専門"
        ],
        "hira_options": [
          "せんせい",
          "きょうかしょ",
          "がっこう",
          "せんもん"
        ],
        "romaji": "sensei",
        "vi_meaning": "thầy/cô giáo"
      },
      {
        "id": "topic_04_school_119",
        "num": 119,
        "sentence_hira": "すずきさんは <u>りゅうがくせい</u> を/が 探しています。",
        "sentence_kanji": "すずきさんは <u>留学生</u> を/が 探しています。",
        "kanji_target": "留学生",
        "hira_target": "りゅうがくせい",
        "kanji_options": [
          "授業",
          "留学生",
          "鉛筆",
          "質問"
        ],
        "hira_options": [
          "じゅぎょう",
          "りゅうがくせい",
          "えんぴつ",
          "しつもん"
        ],
        "romaji": "ryuugakusei",
        "vi_meaning": "du học sinh"
      },
      {
        "id": "topic_04_school_120",
        "num": 120,
        "sentence_hira": "すずきさんは <u>こうちょう</u> を/が 探しています。",
        "sentence_kanji": "すずきさんは <u>校長</u> を/が 探しています。",
        "kanji_target": "校長",
        "hira_target": "こうちょう",
        "kanji_options": [
          "試験",
          "校長",
          "消しゴム",
          "専門"
        ],
        "hira_options": [
          "しけん",
          "こうちょう",
          "けしごむ",
          "せんもん"
        ],
        "romaji": "kouchou",
        "vi_meaning": "hiệu trưởng"
      },
      {
        "id": "topic_04_school_121",
        "num": 121,
        "sentence_hira": "すずきさんは <u>がっこう</u> を/が 探しています。",
        "sentence_kanji": "すずきさんは <u>学校</u> を/が 探しています。",
        "kanji_target": "学校",
        "hira_target": "がっこう",
        "kanji_options": [
          "高校",
          "学校",
          "大学",
          "宿題"
        ],
        "hira_options": [
          "こうこう",
          "がっこう",
          "だいがく",
          "しゅくだい"
        ],
        "romaji": "gakkou",
        "vi_meaning": "trường học"
      },
      {
        "id": "topic_04_school_122",
        "num": 122,
        "sentence_hira": "すずきさんは <u>だいがく</u> を/が 探しています。",
        "sentence_kanji": "すずきさんは <u>大学</u> を/が 探しています。",
        "kanji_target": "大学",
        "hira_target": "だいがく",
        "kanji_options": [
          "高校",
          "質問",
          "大学",
          "小学校"
        ],
        "hira_options": [
          "こうこう",
          "しつもん",
          "だいがく",
          "しょうがっこう"
        ],
        "romaji": "daigaku",
        "vi_meaning": "đại học"
      },
      {
        "id": "topic_04_school_123",
        "num": 123,
        "sentence_hira": "すずきさんは <u>こうこう</u> を/が 探しています。",
        "sentence_kanji": "すずきさんは <u>高校</u> を/が 探しています。",
        "kanji_target": "高校",
        "hira_target": "こうこう",
        "kanji_options": [
          "質問",
          "中学校",
          "高校",
          "小学校"
        ],
        "hira_options": [
          "しつもん",
          "ちゅうがっこう",
          "こうこう",
          "しょうがっこう"
        ],
        "romaji": "koukou",
        "vi_meaning": "trường cấp 3"
      },
      {
        "id": "topic_04_school_124",
        "num": 124,
        "sentence_hira": "すずきさんは <u>ちゅうがっこう</u> を/が 探しています。",
        "sentence_kanji": "すずきさんは <u>中学校</u> を/が 探しています。",
        "kanji_target": "中学校",
        "hira_target": "ちゅうがっこう",
        "kanji_options": [
          "校長",
          "留学生",
          "鉛筆",
          "中学校"
        ],
        "hira_options": [
          "こうちょう",
          "りゅうがくせい",
          "えんぴつ",
          "ちゅうがっこう"
        ],
        "romaji": "chuugakkou",
        "vi_meaning": "trường cấp 2"
      },
      {
        "id": "topic_04_school_125",
        "num": 125,
        "sentence_hira": "すずきさんは <u>しょうがっこう</u> を/が 探しています。",
        "sentence_kanji": "すずきさんは <u>小学校</u> を/が 探しています。",
        "kanji_target": "小学校",
        "hira_target": "しょうがっこう",
        "kanji_options": [
          "小学校",
          "大学",
          "学生",
          "中学校"
        ],
        "hira_options": [
          "しょうがっこう",
          "だいがく",
          "がくせい",
          "ちゅうがっこう"
        ],
        "romaji": "shougakkou",
        "vi_meaning": "trường cấp 1"
      },
      {
        "id": "topic_04_school_126",
        "num": 126,
        "sentence_hira": "すずきさんは <u>きょうしつ</u> を/が 探しています。",
        "sentence_kanji": "すずきさんは <u>教室</u> を/が 探しています。",
        "kanji_target": "教室",
        "hira_target": "きょうしつ",
        "kanji_options": [
          "専門",
          "質問",
          "小学校",
          "教室"
        ],
        "hira_options": [
          "せんもん",
          "しつもん",
          "しょうがっこう",
          "きょうしつ"
        ],
        "romaji": "kyoushitsu",
        "vi_meaning": "phòng học"
      },
      {
        "id": "topic_04_school_127",
        "num": 127,
        "sentence_hira": "すずきさんは <u>じゅぎょう</u> を/が 探しています。",
        "sentence_kanji": "すずきさんは <u>授業</u> を/が 探しています。",
        "kanji_target": "授業",
        "hira_target": "じゅぎょう",
        "kanji_options": [
          "質問",
          "校長",
          "小学校",
          "授業"
        ],
        "hira_options": [
          "しつもん",
          "こうちょう",
          "しょうがっこう",
          "じゅぎょう"
        ],
        "romaji": "jugyou",
        "vi_meaning": "buổi học"
      },
      {
        "id": "topic_04_school_128",
        "num": 128,
        "sentence_hira": "すずきさんは <u>しけん</u> を/が 探しています。",
        "sentence_kanji": "すずきさんは <u>試験</u> を/が 探しています。",
        "kanji_target": "試験",
        "hira_target": "しけん",
        "kanji_options": [
          "消しゴム",
          "試験",
          "定規",
          "宿題"
        ],
        "hira_options": [
          "けしごむ",
          "しけん",
          "じょうぎ",
          "しゅくだい"
        ],
        "romaji": "shiken",
        "vi_meaning": "kỳ thi"
      },
      {
        "id": "topic_04_school_129",
        "num": 129,
        "sentence_hira": "すずきさんは <u>しゅくだい</u> を/が 探しています。",
        "sentence_kanji": "すずきさんは <u>宿題</u> を/が 探しています。",
        "kanji_target": "宿題",
        "hira_target": "しゅくだい",
        "kanji_options": [
          "留学生",
          "宿題",
          "授業",
          "教室"
        ],
        "hira_options": [
          "りゅうがくせい",
          "しゅくだい",
          "じゅぎょう",
          "きょうしつ"
        ],
        "romaji": "shukudai",
        "vi_meaning": "bài tập về nhà"
      },
      {
        "id": "topic_04_school_130",
        "num": 130,
        "sentence_hira": "すずきさんは <u>しつもん</u> を/が 探しています。",
        "sentence_kanji": "すずきさんは <u>質問</u> を/が 探しています。",
        "kanji_target": "質問",
        "hira_target": "しつもん",
        "kanji_options": [
          "学校",
          "質問",
          "鉛筆",
          "学校"
        ],
        "hira_options": [
          "がっこう",
          "しつもん",
          "えんぴつ",
          "がっこう"
        ],
        "romaji": "shitsumon",
        "vi_meaning": "câu hỏi"
      },
      {
        "id": "topic_04_school_131",
        "num": 131,
        "sentence_hira": "すずきさんは <u>こたえ</u> を/が 探しています。",
        "sentence_kanji": "すずきさんは <u>答え</u> を/が 探しています。",
        "kanji_target": "答え",
        "hira_target": "こたえ",
        "kanji_options": [
          "中学校",
          "定規",
          "答え",
          "授業"
        ],
        "hira_options": [
          "ちゅうがっこう",
          "じょうぎ",
          "こたえ",
          "じゅぎょう"
        ],
        "romaji": "kotae",
        "vi_meaning": "câu trả lời"
      },
      {
        "id": "topic_04_school_132",
        "num": 132,
        "sentence_hira": "すずきさんは <u>きょうかしょ</u> を/が 探しています。",
        "sentence_kanji": "すずきさんは <u>教科書</u> を/が 探しています。",
        "kanji_target": "教科書",
        "hira_target": "きょうかしょ",
        "kanji_options": [
          "教科書",
          "試験",
          "高校",
          "ノート"
        ],
        "hira_options": [
          "きょうかしょ",
          "しけん",
          "こうこう",
          "のーと"
        ],
        "romaji": "kyoukasho",
        "vi_meaning": "sách giáo khoa"
      },
      {
        "id": "topic_04_school_133",
        "num": 133,
        "sentence_hira": "すずきさんは <u>じしょ</u> を/が 探しています。",
        "sentence_kanji": "すずきさんは <u>辞書</u> を/が 探しています。",
        "kanji_target": "辞書",
        "hira_target": "じしょ",
        "kanji_options": [
          "答え",
          "辞書",
          "宿題",
          "試験"
        ],
        "hira_options": [
          "こたえ",
          "じしょ",
          "しゅくだい",
          "しけん"
        ],
        "romaji": "jisho",
        "vi_meaning": "từ điển"
      },
      {
        "id": "topic_04_school_134",
        "num": 134,
        "sentence_hira": "すずきさんは <u>こくばん</u> を/が 探しています。",
        "sentence_kanji": "すずきさんは <u>黒板</u> を/が 探しています。",
        "kanji_target": "黒板",
        "hira_target": "こくばん",
        "kanji_options": [
          "先生",
          "黒板",
          "答え",
          "校長"
        ],
        "hira_options": [
          "せんせい",
          "こくばん",
          "こたえ",
          "こうちょう"
        ],
        "romaji": "kokuban",
        "vi_meaning": "bảng đen"
      },
      {
        "id": "topic_04_school_135",
        "num": 135,
        "sentence_hira": "すずきさんは <u>のーと</u> を/が 探しています。",
        "sentence_kanji": "すずきさんは <u>ノート</u> を/が 探しています。",
        "kanji_target": "ノート",
        "hira_target": "のーと",
        "kanji_options": [
          "学生",
          "ノート",
          "留学生",
          "先生"
        ],
        "hira_options": [
          "がくせい",
          "のーと",
          "りゅうがくせい",
          "せんせい"
        ],
        "romaji": "nootu",
        "vi_meaning": "vở ghi"
      },
      {
        "id": "topic_04_school_136",
        "num": 136,
        "sentence_hira": "すずきさんは <u>えんぴつ</u> を/が 探しています。",
        "sentence_kanji": "すずきさんは <u>鉛筆</u> を/が 探しています。",
        "kanji_target": "鉛筆",
        "hira_target": "えんぴつ",
        "kanji_options": [
          "鉛筆",
          "辞書",
          "辞書",
          "学生"
        ],
        "hira_options": [
          "えんぴつ",
          "じしょ",
          "じしょ",
          "がくせい"
        ],
        "romaji": "enpitsu",
        "vi_meaning": "bút chibi"
      },
      {
        "id": "topic_04_school_137",
        "num": 137,
        "sentence_hira": "すずきさんは <u>けしごむ</u> を/が 探しています。",
        "sentence_kanji": "すずきさんは <u>消しゴム</u> を/が 探しています。",
        "kanji_target": "消しゴム",
        "hira_target": "けしごむ",
        "kanji_options": [
          "定規",
          "消しゴム",
          "教科書",
          "答え"
        ],
        "hira_options": [
          "じょうぎ",
          "けしごむ",
          "きょうかしょ",
          "こたえ"
        ],
        "romaji": "keshigomu",
        "vi_meaning": "cục tẩy"
      },
      {
        "id": "topic_04_school_138",
        "num": 138,
        "sentence_hira": "すずきさんは <u>じょうぎ</u> を/が 探しています。",
        "sentence_kanji": "すずきさんは <u>定規</u> を/が 探しています。",
        "kanji_target": "定規",
        "hira_target": "じょうぎ",
        "kanji_options": [
          "質問",
          "定規",
          "専門",
          "先生"
        ],
        "hira_options": [
          "しつもん",
          "じょうぎ",
          "せんもん",
          "せんせい"
        ],
        "romaji": "jougi",
        "vi_meaning": "thước kẻ"
      },
      {
        "id": "topic_04_school_139",
        "num": 139,
        "sentence_hira": "すずきさんは <u>せんもん</u> を/が 探しています。",
        "sentence_kanji": "すずきさんは <u>専門</u> を/が 探しています。",
        "kanji_target": "専門",
        "hira_target": "せんもん",
        "kanji_options": [
          "答え",
          "学校",
          "大学",
          "専門"
        ],
        "hira_options": [
          "こたえ",
          "がっこう",
          "だいがく",
          "せんもん"
        ],
        "romaji": "senmon",
        "vi_meaning": "chuyên ngành"
      },
      {
        "id": "topic_04_school_140",
        "num": 140,
        "sentence_hira": "すずきさんは <u>けんきゅう</u> を/が 探しています。",
        "sentence_kanji": "すずきさんは <u>研究</u> を/が 探しています。",
        "kanji_target": "研究",
        "hira_target": "けんきゅう",
        "kanji_options": [
          "研究",
          "定規",
          "鉛筆",
          "高校"
        ],
        "hira_options": [
          "けんきゅう",
          "じょうぎ",
          "えんぴつ",
          "こうこう"
        ],
        "romaji": "kenkyuu",
        "vi_meaning": "nghiên cứu"
      },
      {
        "id": "topic_04_school_141",
        "num": 141,
        "sentence_hira": "すずきさんは <u>がくせい</u> を/が 探しています。",
        "sentence_kanji": "すずきさんは <u>学生</u> を/が 探しています。",
        "kanji_target": "学生",
        "hira_target": "がくせい",
        "kanji_options": [
          "留学生",
          "学生",
          "教科書",
          "ノート"
        ],
        "hira_options": [
          "りゅうがくせい",
          "がくせい",
          "きょうかしょ",
          "のーと"
        ],
        "romaji": "gakusei",
        "vi_meaning": "học sinh/sinh viên"
      },
      {
        "id": "topic_04_school_142",
        "num": 142,
        "sentence_hira": "すずきさんは <u>せんせい</u> を/が 探しています。",
        "sentence_kanji": "すずきさんは <u>先生</u> を/が 探しています。",
        "kanji_target": "先生",
        "hira_target": "せんせい",
        "kanji_options": [
          "辞書",
          "答え",
          "先生",
          "辞書"
        ],
        "hira_options": [
          "じしょ",
          "こたえ",
          "せんせい",
          "じしょ"
        ],
        "romaji": "sensei",
        "vi_meaning": "thầy/cô giáo"
      },
      {
        "id": "topic_04_school_143",
        "num": 143,
        "sentence_hira": "すずきさんは <u>りゅうがくせい</u> を/が 探しています。",
        "sentence_kanji": "すずきさんは <u>留学生</u> を/が 探しています。",
        "kanji_target": "留学生",
        "hira_target": "りゅうがくせい",
        "kanji_options": [
          "授業",
          "専門",
          "ノート",
          "留学生"
        ],
        "hira_options": [
          "じゅぎょう",
          "せんもん",
          "のーと",
          "りゅうがくせい"
        ],
        "romaji": "ryuugakusei",
        "vi_meaning": "du học sinh"
      },
      {
        "id": "topic_04_school_144",
        "num": 144,
        "sentence_hira": "すずきさんは <u>こうちょう</u> を/が 探しています。",
        "sentence_kanji": "すずきさんは <u>校長</u> を/が 探しています。",
        "kanji_target": "校長",
        "hira_target": "こうちょう",
        "kanji_options": [
          "小学校",
          "専門",
          "校長",
          "宿題"
        ],
        "hira_options": [
          "しょうがっこう",
          "せんもん",
          "こうちょう",
          "しゅくだい"
        ],
        "romaji": "kouchou",
        "vi_meaning": "hiệu trưởng"
      },
      {
        "id": "topic_04_school_145",
        "num": 145,
        "sentence_hira": "すずきさんは <u>がっこう</u> を/が 探しています。",
        "sentence_kanji": "すずきさんは <u>学校</u> を/が 探しています。",
        "kanji_target": "学校",
        "hira_target": "がっこう",
        "kanji_options": [
          "学校",
          "ノート",
          "試験",
          "小学校"
        ],
        "hira_options": [
          "がっこう",
          "のーと",
          "しけん",
          "しょうがっこう"
        ],
        "romaji": "gakkou",
        "vi_meaning": "trường học"
      },
      {
        "id": "topic_04_school_146",
        "num": 146,
        "sentence_hira": "すずきさんは <u>だいがく</u> を/が 探しています。",
        "sentence_kanji": "すずきさんは <u>大学</u> を/が 探しています。",
        "kanji_target": "大学",
        "hira_target": "だいがく",
        "kanji_options": [
          "教室",
          "大学",
          "留学生",
          "小学校"
        ],
        "hira_options": [
          "きょうしつ",
          "だいがく",
          "りゅうがくせい",
          "しょうがっこう"
        ],
        "romaji": "daigaku",
        "vi_meaning": "đại học"
      },
      {
        "id": "topic_04_school_147",
        "num": 147,
        "sentence_hira": "すずきさんは <u>こうこう</u> を/が 探しています。",
        "sentence_kanji": "すずきさんは <u>高校</u> を/が 探しています。",
        "kanji_target": "高校",
        "hira_target": "こうこう",
        "kanji_options": [
          "試験",
          "鉛筆",
          "専門",
          "高校"
        ],
        "hira_options": [
          "しけん",
          "えんぴつ",
          "せんもん",
          "こうこう"
        ],
        "romaji": "koukou",
        "vi_meaning": "trường cấp 3"
      },
      {
        "id": "topic_04_school_148",
        "num": 148,
        "sentence_hira": "すずきさんは <u>ちゅうがっこう</u> を/が 探しています。",
        "sentence_kanji": "すずきさんは <u>中学校</u> を/が 探しています。",
        "kanji_target": "中学校",
        "hira_target": "ちゅうがっこう",
        "kanji_options": [
          "質問",
          "中学校",
          "鉛筆",
          "鉛筆"
        ],
        "hira_options": [
          "しつもん",
          "ちゅうがっこう",
          "えんぴつ",
          "えんぴつ"
        ],
        "romaji": "chuugakkou",
        "vi_meaning": "trường cấp 2"
      },
      {
        "id": "topic_04_school_149",
        "num": 149,
        "sentence_hira": "すずきさんは <u>しょうがっこう</u> を/が 探しています。",
        "sentence_kanji": "すずきさんは <u>小学校</u> を/が 探しています。",
        "kanji_target": "小学校",
        "hira_target": "しょうがっこう",
        "kanji_options": [
          "授業",
          "専門",
          "学校",
          "小学校"
        ],
        "hira_options": [
          "じゅぎょう",
          "せんもん",
          "がっこう",
          "しょうがっこう"
        ],
        "romaji": "shougakkou",
        "vi_meaning": "trường cấp 1"
      },
      {
        "id": "topic_04_school_150",
        "num": 150,
        "sentence_hira": "すずきさんは <u>きょうしつ</u> を/が 探しています。",
        "sentence_kanji": "すずきさんは <u>教室</u> を/が 探しています。",
        "kanji_target": "教室",
        "hira_target": "きょうしつ",
        "kanji_options": [
          "教室",
          "学校",
          "消しゴム",
          "教科書"
        ],
        "hira_options": [
          "きょうしつ",
          "がっこう",
          "けしごむ",
          "きょうかしょ"
        ],
        "romaji": "kyoushitsu",
        "vi_meaning": "phòng học"
      },
      {
        "id": "topic_04_school_151",
        "num": 151,
        "sentence_hira": "すずきさんは <u>じゅぎょう</u> を/が 探しています。",
        "sentence_kanji": "すずきさんは <u>授業</u> を/が 探しています。",
        "kanji_target": "授業",
        "hira_target": "じゅぎょう",
        "kanji_options": [
          "授業",
          "専門",
          "宿題",
          "専門"
        ],
        "hira_options": [
          "じゅぎょう",
          "せんもん",
          "しゅくだい",
          "せんもん"
        ],
        "romaji": "jugyou",
        "vi_meaning": "buổi học"
      },
      {
        "id": "topic_04_school_152",
        "num": 152,
        "sentence_hira": "すずきさんは <u>しけん</u> を/が 探しています。",
        "sentence_kanji": "すずきさんは <u>試験</u> を/が 探しています。",
        "kanji_target": "試験",
        "hira_target": "しけん",
        "kanji_options": [
          "学生",
          "試験",
          "大学",
          "宿題"
        ],
        "hira_options": [
          "がくせい",
          "しけん",
          "だいがく",
          "しゅくだい"
        ],
        "romaji": "shiken",
        "vi_meaning": "kỳ thi"
      },
      {
        "id": "topic_04_school_153",
        "num": 153,
        "sentence_hira": "すずきさんは <u>しゅくだい</u> を/が 探しています。",
        "sentence_kanji": "すずきさんは <u>宿題</u> を/が 探しています。",
        "kanji_target": "宿題",
        "hira_target": "しゅくだい",
        "kanji_options": [
          "宿題",
          "ノート",
          "中学校",
          "大学"
        ],
        "hira_options": [
          "しゅくだい",
          "のーと",
          "ちゅうがっこう",
          "だいがく"
        ],
        "romaji": "shukudai",
        "vi_meaning": "bài tập về nhà"
      },
      {
        "id": "topic_04_school_154",
        "num": 154,
        "sentence_hira": "すずきさんは <u>しつもん</u> を/が 探しています。",
        "sentence_kanji": "すずきさんは <u>質問</u> を/が 探しています。",
        "kanji_target": "質問",
        "hira_target": "しつもん",
        "kanji_options": [
          "質問",
          "黒板",
          "学生",
          "中学校"
        ],
        "hira_options": [
          "しつもん",
          "こくばん",
          "がくせい",
          "ちゅうがっこう"
        ],
        "romaji": "shitsumon",
        "vi_meaning": "câu hỏi"
      },
      {
        "id": "topic_04_school_155",
        "num": 155,
        "sentence_hira": "すずきさんは <u>こたえ</u> を/が 探しています。",
        "sentence_kanji": "すずきさんは <u>答え</u> を/が 探しています。",
        "kanji_target": "答え",
        "hira_target": "こたえ",
        "kanji_options": [
          "試験",
          "大学",
          "答え",
          "学生"
        ],
        "hira_options": [
          "しけん",
          "だいがく",
          "こたえ",
          "がくせい"
        ],
        "romaji": "kotae",
        "vi_meaning": "câu trả lời"
      }
    ]
  },
  {
    "id": "topic_05_food",
    "name": "5. Ăn Uống & Thực Phẩm",
    "icon": "🍜",
    "desc": "Món ăn, đồ uống, nhà hàng và nấu nướng (155 câu)",
    "questions": [
      {
        "id": "topic_05_food_1",
        "num": 1,
        "sentence_hira": "すずきさんは <u>りょうり</u> を/が 探しています。",
        "sentence_kanji": "すずきさんは <u>料理</u> を/が 探しています。",
        "kanji_target": "料理",
        "hira_target": "りょうり",
        "kanji_options": [
          "胡椒",
          "みかん",
          "料理",
          "醤油"
        ],
        "hira_options": [
          "こしょう",
          "みかん",
          "りょうり",
          "しょうゆ"
        ],
        "romaji": "ryouri",
        "vi_meaning": "món ăn"
      },
      {
        "id": "topic_05_food_2",
        "num": 2,
        "sentence_hira": "すずきさんは <u>ごはん</u> を/が 探しています。",
        "sentence_kanji": "すずきさんは <u>ご飯</u> を/が 探しています。",
        "kanji_target": "ご飯",
        "hira_target": "ごはん",
        "kanji_options": [
          "パン",
          "豚肉",
          "料理",
          "ご飯"
        ],
        "hira_options": [
          "ぱん",
          "ぶたにく",
          "りょうり",
          "ごはん"
        ],
        "romaji": "gohan",
        "vi_meaning": "cơm"
      },
      {
        "id": "topic_05_food_3",
        "num": 3,
        "sentence_hira": "すずきさんは <u>ぱん</u> を/が 探しています。",
        "sentence_kanji": "すずきさんは <u>パン</u> を/が 探しています。",
        "kanji_target": "パン",
        "hira_target": "ぱん",
        "kanji_options": [
          "料理",
          "パン",
          "お酒",
          "料理"
        ],
        "hira_options": [
          "りょうり",
          "ぱん",
          "おさけ",
          "りょうり"
        ],
        "romaji": "pan",
        "vi_meaning": "bánh mì"
      },
      {
        "id": "topic_05_food_4",
        "num": 4,
        "sentence_hira": "すずきさんは <u>にく</u> を/が 探しています。",
        "sentence_kanji": "すずきさんは <u>肉</u> を/が 探しています。",
        "kanji_target": "肉",
        "hira_target": "にく",
        "kanji_options": [
          "水",
          "油",
          "果物",
          "肉"
        ],
        "hira_options": [
          "みず",
          "あぶら",
          "くだもの",
          "にく"
        ],
        "romaji": "niku",
        "vi_meaning": "thịt"
      },
      {
        "id": "topic_05_food_5",
        "num": 5,
        "sentence_hira": "すずきさんは <u>ぎゅうにく</u> を/が 探しています。",
        "sentence_kanji": "すずきさんは <u>牛肉</u> を/が 探しています。",
        "kanji_target": "牛肉",
        "hira_target": "ぎゅうにく",
        "kanji_options": [
          "牛肉",
          "水",
          "ビール",
          "パン"
        ],
        "hira_options": [
          "ぎゅうにく",
          "みず",
          "びーる",
          "ぱん"
        ],
        "romaji": "gyuuniku",
        "vi_meaning": "thịt bò"
      },
      {
        "id": "topic_05_food_6",
        "num": 6,
        "sentence_hira": "すずきさんは <u>ぶたにく</u> を/が 探しています。",
        "sentence_kanji": "すずきさんは <u>豚肉</u> を/が 探しています。",
        "kanji_target": "豚肉",
        "hira_target": "ぶたにく",
        "kanji_options": [
          "牛肉",
          "料理",
          "豚肉",
          "ご飯"
        ],
        "hira_options": [
          "ぎゅうにく",
          "りょうり",
          "ぶたにく",
          "ごはん"
        ],
        "romaji": "butaniku",
        "vi_meaning": "thịt heo"
      },
      {
        "id": "topic_05_food_7",
        "num": 7,
        "sentence_hira": "すずきさんは <u>とりにく</u> を/が 探しています。",
        "sentence_kanji": "すずきさんは <u>鶏肉</u> を/が 探しています。",
        "kanji_target": "鶏肉",
        "hira_target": "とりにく",
        "kanji_options": [
          "肉",
          "果物",
          "りんご",
          "鶏肉"
        ],
        "hira_options": [
          "にく",
          "くだもの",
          "りんご",
          "とりにく"
        ],
        "romaji": "toriniku",
        "vi_meaning": "thịt gà"
      },
      {
        "id": "topic_05_food_8",
        "num": 8,
        "sentence_hira": "すずきさんは <u>さかな</u> を/が 探しています。",
        "sentence_kanji": "すずきさんは <u>魚</u> を/が 探しています。",
        "kanji_target": "魚",
        "hira_target": "さかな",
        "kanji_options": [
          "野菜",
          "醤油",
          "魚",
          "塩"
        ],
        "hira_options": [
          "やさい",
          "しょうゆ",
          "さかな",
          "しお"
        ],
        "romaji": "sakana",
        "vi_meaning": "cái cá"
      },
      {
        "id": "topic_05_food_9",
        "num": 9,
        "sentence_hira": "すずきさんは <u>やさい</u> を/が 探しています。",
        "sentence_kanji": "すずきさんは <u>野菜</u> を/が 探しています。",
        "kanji_target": "野菜",
        "hira_target": "やさい",
        "kanji_options": [
          "牛肉",
          "野菜",
          "ご飯",
          "果物"
        ],
        "hira_options": [
          "ぎゅうにく",
          "やさい",
          "ごはん",
          "くだもの"
        ],
        "romaji": "yasai",
        "vi_meaning": "rau củ"
      },
      {
        "id": "topic_05_food_10",
        "num": 10,
        "sentence_hira": "すずきさんは <u>くだもの</u> を/が 探しています。",
        "sentence_kanji": "すずきさんは <u>果物</u> を/が 探しています。",
        "kanji_target": "果物",
        "hira_target": "くだもの",
        "kanji_options": [
          "果物",
          "鶏肉",
          "野菜",
          "料理"
        ],
        "hira_options": [
          "くだもの",
          "とりにく",
          "やさい",
          "りょうり"
        ],
        "romaji": "kudamono",
        "vi_meaning": "trái cây"
      },
      {
        "id": "topic_05_food_11",
        "num": 11,
        "sentence_hira": "すずきさんは <u>りんご</u> を/が 探しています。",
        "sentence_kanji": "すずきさんは <u>りんご</u> を/が 探しています。",
        "kanji_target": "りんご",
        "hira_target": "りんご",
        "kanji_options": [
          "りんご",
          "野菜",
          "味",
          "果物"
        ],
        "hira_options": [
          "りんご",
          "やさい",
          "あじ",
          "くだもの"
        ],
        "romaji": "ringo",
        "vi_meaning": "quả táo"
      },
      {
        "id": "topic_05_food_12",
        "num": 12,
        "sentence_hira": "すずきさんは <u>みかん</u> を/が 探しています。",
        "sentence_kanji": "すずきさんは <u>みかん</u> を/が 探しています。",
        "kanji_target": "みかん",
        "hira_target": "みかん",
        "kanji_options": [
          "みかん",
          "塩",
          "油",
          "果物"
        ],
        "hira_options": [
          "みかん",
          "しお",
          "あぶら",
          "くだもの"
        ],
        "romaji": "mikan",
        "vi_meaning": "quả quýt"
      },
      {
        "id": "topic_05_food_13",
        "num": 13,
        "sentence_hira": "すずきさんは <u>ばなな</u> を/が 探しています。",
        "sentence_kanji": "すずきさんは <u>バナナ</u> を/が 探しています。",
        "kanji_target": "バナナ",
        "hira_target": "ばなな",
        "kanji_options": [
          "バナナ",
          "注文",
          "料理",
          "胡椒"
        ],
        "hira_options": [
          "ばなな",
          "ちゅうもん",
          "りょうり",
          "こしょう"
        ],
        "romaji": "banana",
        "vi_meaning": "quả chuối"
      },
      {
        "id": "topic_05_food_14",
        "num": 14,
        "sentence_hira": "すずきさんは <u>みず</u> を/が 探しています。",
        "sentence_kanji": "すずきさんは <u>水</u> を/が 探しています。",
        "kanji_target": "水",
        "hira_target": "みず",
        "kanji_options": [
          "お酒",
          "果物",
          "水",
          "紅茶"
        ],
        "hira_options": [
          "おさけ",
          "くだもの",
          "みず",
          "こうちゃ"
        ],
        "romaji": "mizu",
        "vi_meaning": "nước lọc"
      },
      {
        "id": "topic_05_food_15",
        "num": 15,
        "sentence_hira": "すずきさんは <u>おちゃ</u> を/が 探しています。",
        "sentence_kanji": "すずきさんは <u>お茶</u> を/が 探しています。",
        "kanji_target": "お茶",
        "hira_target": "おちゃ",
        "kanji_options": [
          "豚肉",
          "魚",
          "塩",
          "お茶"
        ],
        "hira_options": [
          "ぶたにく",
          "さかな",
          "しお",
          "おちゃ"
        ],
        "romaji": "ocha",
        "vi_meaning": "trà xanh"
      },
      {
        "id": "topic_05_food_16",
        "num": 16,
        "sentence_hira": "すずきさんは <u>こうちゃ</u> を/が 探しています。",
        "sentence_kanji": "すずきさんは <u>紅茶</u> を/が 探しています。",
        "kanji_target": "紅茶",
        "hira_target": "こうちゃ",
        "kanji_options": [
          "牛乳",
          "コーヒー",
          "紅茶",
          "豚肉"
        ],
        "hira_options": [
          "ぎゅうにゅう",
          "こーひー",
          "こうちゃ",
          "ぶたにく"
        ],
        "romaji": "koucha",
        "vi_meaning": "hồng trà"
      },
      {
        "id": "topic_05_food_17",
        "num": 17,
        "sentence_hira": "すずきさんは <u>こーひー</u> を/が 探しています。",
        "sentence_kanji": "すずきさんは <u>コーヒー</u> を/が 探しています。",
        "kanji_target": "コーヒー",
        "hira_target": "こーひー",
        "kanji_options": [
          "胡椒",
          "牛乳",
          "バナナ",
          "コーヒー"
        ],
        "hira_options": [
          "こしょう",
          "ぎゅうにゅう",
          "ばなな",
          "こーひー"
        ],
        "romaji": "koohii",
        "vi_meaning": "cà phê"
      },
      {
        "id": "topic_05_food_18",
        "num": 18,
        "sentence_hira": "すずきさんは <u>ぎゅうにゅう</u> を/が 探しています。",
        "sentence_kanji": "すずきさんは <u>牛乳</u> を/が 探しています。",
        "kanji_target": "牛乳",
        "hira_target": "ぎゅうにゅう",
        "kanji_options": [
          "水",
          "豚肉",
          "牛乳",
          "りんご"
        ],
        "hira_options": [
          "みず",
          "ぶたにく",
          "ぎゅうにゅう",
          "りんご"
        ],
        "romaji": "gyuunyuu",
        "vi_meaning": "sữa tươi"
      },
      {
        "id": "topic_05_food_19",
        "num": 19,
        "sentence_hira": "すずきさんは <u>おさけ</u> を/が 探しています。",
        "sentence_kanji": "すずきさんは <u>お酒</u> を/が 探しています。",
        "kanji_target": "お酒",
        "hira_target": "おさけ",
        "kanji_options": [
          "牛乳",
          "お酒",
          "ビール",
          "鶏肉"
        ],
        "hira_options": [
          "ぎゅうにゅう",
          "おさけ",
          "びーる",
          "とりにく"
        ],
        "romaji": "osake",
        "vi_meaning": "rượu"
      },
      {
        "id": "topic_05_food_20",
        "num": 20,
        "sentence_hira": "すずきさんは <u>びーる</u> を/が 探しています。",
        "sentence_kanji": "すずきさんは <u>ビール</u> を/が 探しています。",
        "kanji_target": "ビール",
        "hira_target": "びーる",
        "kanji_options": [
          "バナナ",
          "胡椒",
          "みかん",
          "ビール"
        ],
        "hira_options": [
          "ばなな",
          "こしょう",
          "みかん",
          "びーる"
        ],
        "romaji": "biiru",
        "vi_meaning": "bia"
      },
      {
        "id": "topic_05_food_21",
        "num": 21,
        "sentence_hira": "すずきさんは <u>さとう</u> を/が 探しています。",
        "sentence_kanji": "すずきさんは <u>砂糖</u> を/が 探しています。",
        "kanji_target": "砂糖",
        "hira_target": "さとう",
        "kanji_options": [
          "みかん",
          "砂糖",
          "お茶",
          "野菜"
        ],
        "hira_options": [
          "みかん",
          "さとう",
          "おちゃ",
          "やさい"
        ],
        "romaji": "satou",
        "vi_meaning": "đường"
      },
      {
        "id": "topic_05_food_22",
        "num": 22,
        "sentence_hira": "すずきさんは <u>しお</u> を/が 探しています。",
        "sentence_kanji": "すずきさんは <u>塩</u> を/が 探しています。",
        "kanji_target": "塩",
        "hira_target": "しお",
        "kanji_options": [
          "果物",
          "パン",
          "牛肉",
          "塩"
        ],
        "hira_options": [
          "くだもの",
          "ぱん",
          "ぎゅうにく",
          "しお"
        ],
        "romaji": "shio",
        "vi_meaning": "muối"
      },
      {
        "id": "topic_05_food_23",
        "num": 23,
        "sentence_hira": "すずきさんは <u>しょうゆ</u> を/が 探しています。",
        "sentence_kanji": "すずきさんは <u>醤油</u> を/が 探しています。",
        "kanji_target": "醤油",
        "hira_target": "しょうゆ",
        "kanji_options": [
          "胡椒",
          "油",
          "醤油",
          "魚"
        ],
        "hira_options": [
          "こしょう",
          "あぶら",
          "しょうゆ",
          "さかな"
        ],
        "romaji": "shouyu",
        "vi_meaning": "nước tương"
      },
      {
        "id": "topic_05_food_24",
        "num": 24,
        "sentence_hira": "すずきさんは <u>こしょう</u> を/が 探しています。",
        "sentence_kanji": "すずきさんは <u>胡椒</u> を/が 探しています。",
        "kanji_target": "胡椒",
        "hira_target": "こしょう",
        "kanji_options": [
          "胡椒",
          "砂糖",
          "りんご",
          "油"
        ],
        "hira_options": [
          "こしょう",
          "さとう",
          "りんご",
          "あぶら"
        ],
        "romaji": "koshou",
        "vi_meaning": "tiêu"
      },
      {
        "id": "topic_05_food_25",
        "num": 25,
        "sentence_hira": "すずきさんは <u>あぶら</u> を/が 探しています。",
        "sentence_kanji": "すずきさんは <u>油</u> を/が 探しています。",
        "kanji_target": "油",
        "hira_target": "あぶら",
        "kanji_options": [
          "お茶",
          "油",
          "牛乳",
          "肉"
        ],
        "hira_options": [
          "おちゃ",
          "あぶら",
          "ぎゅうにゅう",
          "にく"
        ],
        "romaji": "abura",
        "vi_meaning": "dầu ăn"
      },
      {
        "id": "topic_05_food_26",
        "num": 26,
        "sentence_hira": "すずきさんは <u>ちゅうもん</u> を/が 探しています。",
        "sentence_kanji": "すずきさんは <u>注文</u> を/が 探しています。",
        "kanji_target": "注文",
        "hira_target": "ちゅうもん",
        "kanji_options": [
          "注文",
          "料理",
          "肉",
          "料理"
        ],
        "hira_options": [
          "ちゅうもん",
          "りょうり",
          "にく",
          "りょうり"
        ],
        "romaji": "chuumon",
        "vi_meaning": "gọi món"
      },
      {
        "id": "topic_05_food_27",
        "num": 27,
        "sentence_hira": "すずきさんは <u>あじ</u> を/が 探しています。",
        "sentence_kanji": "すずきさんは <u>味</u> を/が 探しています。",
        "kanji_target": "味",
        "hira_target": "あじ",
        "kanji_options": [
          "味",
          "醤油",
          "肉",
          "魚"
        ],
        "hira_options": [
          "あじ",
          "しょうゆ",
          "にく",
          "さかな"
        ],
        "romaji": "aji",
        "vi_meaning": "hương vị"
      },
      {
        "id": "topic_05_food_28",
        "num": 28,
        "sentence_hira": "すずきさんは <u>りょうり</u> を/が 探しています。",
        "sentence_kanji": "すずきさんは <u>料理</u> を/が 探しています。",
        "kanji_target": "料理",
        "hira_target": "りょうり",
        "kanji_options": [
          "料理",
          "水",
          "パン",
          "みかん"
        ],
        "hira_options": [
          "りょうり",
          "みず",
          "ぱん",
          "みかん"
        ],
        "romaji": "ryouri",
        "vi_meaning": "món ăn"
      },
      {
        "id": "topic_05_food_29",
        "num": 29,
        "sentence_hira": "すずきさんは <u>ごはん</u> を/が 探しています。",
        "sentence_kanji": "すずきさんは <u>ご飯</u> を/が 探しています。",
        "kanji_target": "ご飯",
        "hira_target": "ごはん",
        "kanji_options": [
          "砂糖",
          "水",
          "ご飯",
          "牛乳"
        ],
        "hira_options": [
          "さとう",
          "みず",
          "ごはん",
          "ぎゅうにゅう"
        ],
        "romaji": "gohan",
        "vi_meaning": "cơm"
      },
      {
        "id": "topic_05_food_30",
        "num": 30,
        "sentence_hira": "すずきさんは <u>ぱん</u> を/が 探しています。",
        "sentence_kanji": "すずきさんは <u>パン</u> を/が 探しています。",
        "kanji_target": "パン",
        "hira_target": "ぱん",
        "kanji_options": [
          "みかん",
          "パン",
          "塩",
          "醤油"
        ],
        "hira_options": [
          "みかん",
          "ぱん",
          "しお",
          "しょうゆ"
        ],
        "romaji": "pan",
        "vi_meaning": "bánh mì"
      },
      {
        "id": "topic_05_food_31",
        "num": 31,
        "sentence_hira": "すずきさんは <u>にく</u> を/が 探しています。",
        "sentence_kanji": "すずきさんは <u>肉</u> を/が 探しています。",
        "kanji_target": "肉",
        "hira_target": "にく",
        "kanji_options": [
          "肉",
          "牛肉",
          "砂糖",
          "みかん"
        ],
        "hira_options": [
          "にく",
          "ぎゅうにく",
          "さとう",
          "みかん"
        ],
        "romaji": "niku",
        "vi_meaning": "thịt"
      },
      {
        "id": "topic_05_food_32",
        "num": 32,
        "sentence_hira": "すずきさんは <u>ぎゅうにく</u> を/が 探しています。",
        "sentence_kanji": "すずきさんは <u>牛肉</u> を/が 探しています。",
        "kanji_target": "牛肉",
        "hira_target": "ぎゅうにく",
        "kanji_options": [
          "魚",
          "味",
          "牛肉",
          "コーヒー"
        ],
        "hira_options": [
          "さかな",
          "あじ",
          "ぎゅうにく",
          "こーひー"
        ],
        "romaji": "gyuuniku",
        "vi_meaning": "thịt bò"
      },
      {
        "id": "topic_05_food_33",
        "num": 33,
        "sentence_hira": "すずきさんは <u>ぶたにく</u> を/が 探しています。",
        "sentence_kanji": "すずきさんは <u>豚肉</u> を/が 探しています。",
        "kanji_target": "豚肉",
        "hira_target": "ぶたにく",
        "kanji_options": [
          "料理",
          "豚肉",
          "パン",
          "味"
        ],
        "hira_options": [
          "りょうり",
          "ぶたにく",
          "ぱん",
          "あじ"
        ],
        "romaji": "butaniku",
        "vi_meaning": "thịt heo"
      },
      {
        "id": "topic_05_food_34",
        "num": 34,
        "sentence_hira": "すずきさんは <u>とりにく</u> を/が 探しています。",
        "sentence_kanji": "すずきさんは <u>鶏肉</u> を/が 探しています。",
        "kanji_target": "鶏肉",
        "hira_target": "とりにく",
        "kanji_options": [
          "鶏肉",
          "牛肉",
          "バナナ",
          "果物"
        ],
        "hira_options": [
          "とりにく",
          "ぎゅうにく",
          "ばなな",
          "くだもの"
        ],
        "romaji": "toriniku",
        "vi_meaning": "thịt gà"
      },
      {
        "id": "topic_05_food_35",
        "num": 35,
        "sentence_hira": "すずきさんは <u>さかな</u> を/が 探しています。",
        "sentence_kanji": "すずきさんは <u>魚</u> を/が 探しています。",
        "kanji_target": "魚",
        "hira_target": "さかな",
        "kanji_options": [
          "パン",
          "肉",
          "注文",
          "魚"
        ],
        "hira_options": [
          "ぱん",
          "にく",
          "ちゅうもん",
          "さかな"
        ],
        "romaji": "sakana",
        "vi_meaning": "cái cá"
      },
      {
        "id": "topic_05_food_36",
        "num": 36,
        "sentence_hira": "すずきさんは <u>やさい</u> を/が 探しています。",
        "sentence_kanji": "すずきさんは <u>野菜</u> を/が 探しています。",
        "kanji_target": "野菜",
        "hira_target": "やさい",
        "kanji_options": [
          "砂糖",
          "パン",
          "野菜",
          "魚"
        ],
        "hira_options": [
          "さとう",
          "ぱん",
          "やさい",
          "さかな"
        ],
        "romaji": "yasai",
        "vi_meaning": "rau củ"
      },
      {
        "id": "topic_05_food_37",
        "num": 37,
        "sentence_hira": "すずきさんは <u>くだもの</u> を/が 探しています。",
        "sentence_kanji": "すずきさんは <u>果物</u> を/が 探しています。",
        "kanji_target": "果物",
        "hira_target": "くだもの",
        "kanji_options": [
          "砂糖",
          "果物",
          "砂糖",
          "パン"
        ],
        "hira_options": [
          "さとう",
          "くだもの",
          "さとう",
          "ぱん"
        ],
        "romaji": "kudamono",
        "vi_meaning": "trái cây"
      },
      {
        "id": "topic_05_food_38",
        "num": 38,
        "sentence_hira": "すずきさんは <u>りんご</u> を/が 探しています。",
        "sentence_kanji": "すずきさんは <u>りんご</u> を/が 探しています。",
        "kanji_target": "りんご",
        "hira_target": "りんご",
        "kanji_options": [
          "コーヒー",
          "水",
          "りんご",
          "肉"
        ],
        "hira_options": [
          "こーひー",
          "みず",
          "りんご",
          "にく"
        ],
        "romaji": "ringo",
        "vi_meaning": "quả táo"
      },
      {
        "id": "topic_05_food_39",
        "num": 39,
        "sentence_hira": "すずきさんは <u>みかん</u> を/が 探しています。",
        "sentence_kanji": "すずきさんは <u>みかん</u> を/が 探しています。",
        "kanji_target": "みかん",
        "hira_target": "みかん",
        "kanji_options": [
          "塩",
          "みかん",
          "ビール",
          "豚肉"
        ],
        "hira_options": [
          "しお",
          "みかん",
          "びーる",
          "ぶたにく"
        ],
        "romaji": "mikan",
        "vi_meaning": "quả quýt"
      },
      {
        "id": "topic_05_food_40",
        "num": 40,
        "sentence_hira": "すずきさんは <u>ばなな</u> を/が 探しています。",
        "sentence_kanji": "すずきさんは <u>バナナ</u> を/が 探しています。",
        "kanji_target": "バナナ",
        "hira_target": "ばなな",
        "kanji_options": [
          "お茶",
          "鶏肉",
          "塩",
          "バナナ"
        ],
        "hira_options": [
          "おちゃ",
          "とりにく",
          "しお",
          "ばなな"
        ],
        "romaji": "banana",
        "vi_meaning": "quả chuối"
      },
      {
        "id": "topic_05_food_41",
        "num": 41,
        "sentence_hira": "すずきさんは <u>みず</u> を/が 探しています。",
        "sentence_kanji": "すずきさんは <u>水</u> を/が 探しています。",
        "kanji_target": "水",
        "hira_target": "みず",
        "kanji_options": [
          "水",
          "鶏肉",
          "牛肉",
          "肉"
        ],
        "hira_options": [
          "みず",
          "とりにく",
          "ぎゅうにく",
          "にく"
        ],
        "romaji": "mizu",
        "vi_meaning": "nước lọc"
      },
      {
        "id": "topic_05_food_42",
        "num": 42,
        "sentence_hira": "すずきさんは <u>おちゃ</u> を/が 探しています。",
        "sentence_kanji": "すずきさんは <u>お茶</u> を/が 探しています。",
        "kanji_target": "お茶",
        "hira_target": "おちゃ",
        "kanji_options": [
          "ご飯",
          "ビール",
          "お酒",
          "お茶"
        ],
        "hira_options": [
          "ごはん",
          "びーる",
          "おさけ",
          "おちゃ"
        ],
        "romaji": "ocha",
        "vi_meaning": "trà xanh"
      },
      {
        "id": "topic_05_food_43",
        "num": 43,
        "sentence_hira": "すずきさんは <u>こうちゃ</u> を/が 探しています。",
        "sentence_kanji": "すずきさんは <u>紅茶</u> を/が 探しています。",
        "kanji_target": "紅茶",
        "hira_target": "こうちゃ",
        "kanji_options": [
          "砂糖",
          "ビール",
          "紅茶",
          "胡椒"
        ],
        "hira_options": [
          "さとう",
          "びーる",
          "こうちゃ",
          "こしょう"
        ],
        "romaji": "koucha",
        "vi_meaning": "hồng trà"
      },
      {
        "id": "topic_05_food_44",
        "num": 44,
        "sentence_hira": "すずきさんは <u>こーひー</u> を/が 探しています。",
        "sentence_kanji": "すずきさんは <u>コーヒー</u> を/が 探しています。",
        "kanji_target": "コーヒー",
        "hira_target": "こーひー",
        "kanji_options": [
          "コーヒー",
          "料理",
          "塩",
          "牛肉"
        ],
        "hira_options": [
          "こーひー",
          "りょうり",
          "しお",
          "ぎゅうにく"
        ],
        "romaji": "koohii",
        "vi_meaning": "cà phê"
      },
      {
        "id": "topic_05_food_45",
        "num": 45,
        "sentence_hira": "すずきさんは <u>ぎゅうにゅう</u> を/が 探しています。",
        "sentence_kanji": "すずきさんは <u>牛乳</u> を/が 探しています。",
        "kanji_target": "牛乳",
        "hira_target": "ぎゅうにゅう",
        "kanji_options": [
          "お茶",
          "牛乳",
          "醤油",
          "水"
        ],
        "hira_options": [
          "おちゃ",
          "ぎゅうにゅう",
          "しょうゆ",
          "みず"
        ],
        "romaji": "gyuunyuu",
        "vi_meaning": "sữa tươi"
      },
      {
        "id": "topic_05_food_46",
        "num": 46,
        "sentence_hira": "すずきさんは <u>おさけ</u> を/が 探しています。",
        "sentence_kanji": "すずきさんは <u>お酒</u> を/が 探しています。",
        "kanji_target": "お酒",
        "hira_target": "おさけ",
        "kanji_options": [
          "塩",
          "ご飯",
          "紅茶",
          "お酒"
        ],
        "hira_options": [
          "しお",
          "ごはん",
          "こうちゃ",
          "おさけ"
        ],
        "romaji": "osake",
        "vi_meaning": "rượu"
      },
      {
        "id": "topic_05_food_47",
        "num": 47,
        "sentence_hira": "すずきさんは <u>びーる</u> を/が 探しています。",
        "sentence_kanji": "すずきさんは <u>ビール</u> を/が 探しています。",
        "kanji_target": "ビール",
        "hira_target": "びーる",
        "kanji_options": [
          "バナナ",
          "鶏肉",
          "砂糖",
          "ビール"
        ],
        "hira_options": [
          "ばなな",
          "とりにく",
          "さとう",
          "びーる"
        ],
        "romaji": "biiru",
        "vi_meaning": "bia"
      },
      {
        "id": "topic_05_food_48",
        "num": 48,
        "sentence_hira": "すずきさんは <u>さとう</u> を/が 探しています。",
        "sentence_kanji": "すずきさんは <u>砂糖</u> を/が 探しています。",
        "kanji_target": "砂糖",
        "hira_target": "さとう",
        "kanji_options": [
          "砂糖",
          "胡椒",
          "コーヒー",
          "バナナ"
        ],
        "hira_options": [
          "さとう",
          "こしょう",
          "こーひー",
          "ばなな"
        ],
        "romaji": "satou",
        "vi_meaning": "đường"
      },
      {
        "id": "topic_05_food_49",
        "num": 49,
        "sentence_hira": "すずきさんは <u>しお</u> を/が 探しています。",
        "sentence_kanji": "すずきさんは <u>塩</u> を/が 探しています。",
        "kanji_target": "塩",
        "hira_target": "しお",
        "kanji_options": [
          "塩",
          "牛肉",
          "味",
          "紅茶"
        ],
        "hira_options": [
          "しお",
          "ぎゅうにく",
          "あじ",
          "こうちゃ"
        ],
        "romaji": "shio",
        "vi_meaning": "muối"
      },
      {
        "id": "topic_05_food_50",
        "num": 50,
        "sentence_hira": "すずきさんは <u>しょうゆ</u> を/が 探しています。",
        "sentence_kanji": "すずきさんは <u>醤油</u> を/が 探しています。",
        "kanji_target": "醤油",
        "hira_target": "しょうゆ",
        "kanji_options": [
          "鶏肉",
          "紅茶",
          "醤油",
          "油"
        ],
        "hira_options": [
          "とりにく",
          "こうちゃ",
          "しょうゆ",
          "あぶら"
        ],
        "romaji": "shouyu",
        "vi_meaning": "nước tương"
      },
      {
        "id": "topic_05_food_51",
        "num": 51,
        "sentence_hira": "すずきさんは <u>こしょう</u> を/が 探しています。",
        "sentence_kanji": "すずきさんは <u>胡椒</u> を/が 探しています。",
        "kanji_target": "胡椒",
        "hira_target": "こしょう",
        "kanji_options": [
          "牛肉",
          "胡椒",
          "砂糖",
          "塩"
        ],
        "hira_options": [
          "ぎゅうにく",
          "こしょう",
          "さとう",
          "しお"
        ],
        "romaji": "koshou",
        "vi_meaning": "tiêu"
      },
      {
        "id": "topic_05_food_52",
        "num": 52,
        "sentence_hira": "すずきさんは <u>あぶら</u> を/が 探しています。",
        "sentence_kanji": "すずきさんは <u>油</u> を/が 探しています。",
        "kanji_target": "油",
        "hira_target": "あぶら",
        "kanji_options": [
          "油",
          "牛肉",
          "果物",
          "ビール"
        ],
        "hira_options": [
          "あぶら",
          "ぎゅうにく",
          "くだもの",
          "びーる"
        ],
        "romaji": "abura",
        "vi_meaning": "dầu ăn"
      },
      {
        "id": "topic_05_food_53",
        "num": 53,
        "sentence_hira": "すずきさんは <u>ちゅうもん</u> を/が 探しています。",
        "sentence_kanji": "すずきさんは <u>注文</u> を/が 探しています。",
        "kanji_target": "注文",
        "hira_target": "ちゅうもん",
        "kanji_options": [
          "ご飯",
          "胡椒",
          "肉",
          "注文"
        ],
        "hira_options": [
          "ごはん",
          "こしょう",
          "にく",
          "ちゅうもん"
        ],
        "romaji": "chuumon",
        "vi_meaning": "gọi món"
      },
      {
        "id": "topic_05_food_54",
        "num": 54,
        "sentence_hira": "すずきさんは <u>あじ</u> を/が 探しています。",
        "sentence_kanji": "すずきさんは <u>味</u> を/が 探しています。",
        "kanji_target": "味",
        "hira_target": "あじ",
        "kanji_options": [
          "ビール",
          "味",
          "鶏肉",
          "パン"
        ],
        "hira_options": [
          "びーる",
          "あじ",
          "とりにく",
          "ぱん"
        ],
        "romaji": "aji",
        "vi_meaning": "hương vị"
      },
      {
        "id": "topic_05_food_55",
        "num": 55,
        "sentence_hira": "すずきさんは <u>りょうり</u> を/が 探しています。",
        "sentence_kanji": "すずきさんは <u>料理</u> を/が 探しています。",
        "kanji_target": "料理",
        "hira_target": "りょうり",
        "kanji_options": [
          "ビール",
          "料理",
          "牛肉",
          "みかん"
        ],
        "hira_options": [
          "びーる",
          "りょうり",
          "ぎゅうにく",
          "みかん"
        ],
        "romaji": "ryouri",
        "vi_meaning": "món ăn"
      },
      {
        "id": "topic_05_food_56",
        "num": 56,
        "sentence_hira": "すずきさんは <u>ごはん</u> を/が 探しています。",
        "sentence_kanji": "すずきさんは <u>ご飯</u> を/が 探しています。",
        "kanji_target": "ご飯",
        "hira_target": "ごはん",
        "kanji_options": [
          "紅茶",
          "ご飯",
          "料理",
          "バナナ"
        ],
        "hira_options": [
          "こうちゃ",
          "ごはん",
          "りょうり",
          "ばなな"
        ],
        "romaji": "gohan",
        "vi_meaning": "cơm"
      },
      {
        "id": "topic_05_food_57",
        "num": 57,
        "sentence_hira": "すずきさんは <u>ぱん</u> を/が 探しています。",
        "sentence_kanji": "すずきさんは <u>パン</u> を/が 探しています。",
        "kanji_target": "パン",
        "hira_target": "ぱん",
        "kanji_options": [
          "紅茶",
          "ビール",
          "油",
          "パン"
        ],
        "hira_options": [
          "こうちゃ",
          "びーる",
          "あぶら",
          "ぱん"
        ],
        "romaji": "pan",
        "vi_meaning": "bánh mì"
      },
      {
        "id": "topic_05_food_58",
        "num": 58,
        "sentence_hira": "すずきさんは <u>にく</u> を/が 探しています。",
        "sentence_kanji": "すずきさんは <u>肉</u> を/が 探しています。",
        "kanji_target": "肉",
        "hira_target": "にく",
        "kanji_options": [
          "肉",
          "牛肉",
          "紅茶",
          "砂糖"
        ],
        "hira_options": [
          "にく",
          "ぎゅうにく",
          "こうちゃ",
          "さとう"
        ],
        "romaji": "niku",
        "vi_meaning": "thịt"
      },
      {
        "id": "topic_05_food_59",
        "num": 59,
        "sentence_hira": "すずきさんは <u>ぎゅうにく</u> を/が 探しています。",
        "sentence_kanji": "すずきさんは <u>牛肉</u> を/が 探しています。",
        "kanji_target": "牛肉",
        "hira_target": "ぎゅうにく",
        "kanji_options": [
          "牛肉",
          "お酒",
          "コーヒー",
          "醤油"
        ],
        "hira_options": [
          "ぎゅうにく",
          "おさけ",
          "こーひー",
          "しょうゆ"
        ],
        "romaji": "gyuuniku",
        "vi_meaning": "thịt bò"
      },
      {
        "id": "topic_05_food_60",
        "num": 60,
        "sentence_hira": "すずきさんは <u>ぶたにく</u> を/が 探しています。",
        "sentence_kanji": "すずきさんは <u>豚肉</u> を/が 探しています。",
        "kanji_target": "豚肉",
        "hira_target": "ぶたにく",
        "kanji_options": [
          "塩",
          "みかん",
          "豚肉",
          "魚"
        ],
        "hira_options": [
          "しお",
          "みかん",
          "ぶたにく",
          "さかな"
        ],
        "romaji": "butaniku",
        "vi_meaning": "thịt heo"
      },
      {
        "id": "topic_05_food_61",
        "num": 61,
        "sentence_hira": "すずきさんは <u>とりにく</u> を/が 探しています。",
        "sentence_kanji": "すずきさんは <u>鶏肉</u> を/が 探しています。",
        "kanji_target": "鶏肉",
        "hira_target": "とりにく",
        "kanji_options": [
          "鶏肉",
          "魚",
          "お酒",
          "コーヒー"
        ],
        "hira_options": [
          "とりにく",
          "さかな",
          "おさけ",
          "こーひー"
        ],
        "romaji": "toriniku",
        "vi_meaning": "thịt gà"
      },
      {
        "id": "topic_05_food_62",
        "num": 62,
        "sentence_hira": "すずきさんは <u>さかな</u> を/が 探しています。",
        "sentence_kanji": "すずきさんは <u>魚</u> を/が 探しています。",
        "kanji_target": "魚",
        "hira_target": "さかな",
        "kanji_options": [
          "注文",
          "お茶",
          "魚",
          "料理"
        ],
        "hira_options": [
          "ちゅうもん",
          "おちゃ",
          "さかな",
          "りょうり"
        ],
        "romaji": "sakana",
        "vi_meaning": "cái cá"
      },
      {
        "id": "topic_05_food_63",
        "num": 63,
        "sentence_hira": "すずきさんは <u>やさい</u> を/が 探しています。",
        "sentence_kanji": "すずきさんは <u>野菜</u> を/が 探しています。",
        "kanji_target": "野菜",
        "hira_target": "やさい",
        "kanji_options": [
          "野菜",
          "牛乳",
          "牛乳",
          "肉"
        ],
        "hira_options": [
          "やさい",
          "ぎゅうにゅう",
          "ぎゅうにゅう",
          "にく"
        ],
        "romaji": "yasai",
        "vi_meaning": "rau củ"
      },
      {
        "id": "topic_05_food_64",
        "num": 64,
        "sentence_hira": "すずきさんは <u>くだもの</u> を/が 探しています。",
        "sentence_kanji": "すずきさんは <u>果物</u> を/が 探しています。",
        "kanji_target": "果物",
        "hira_target": "くだもの",
        "kanji_options": [
          "お茶",
          "パン",
          "紅茶",
          "果物"
        ],
        "hira_options": [
          "おちゃ",
          "ぱん",
          "こうちゃ",
          "くだもの"
        ],
        "romaji": "kudamono",
        "vi_meaning": "trái cây"
      },
      {
        "id": "topic_05_food_65",
        "num": 65,
        "sentence_hira": "すずきさんは <u>りんご</u> を/が 探しています。",
        "sentence_kanji": "すずきさんは <u>りんご</u> を/が 探しています。",
        "kanji_target": "りんご",
        "hira_target": "りんご",
        "kanji_options": [
          "果物",
          "バナナ",
          "りんご",
          "お茶"
        ],
        "hira_options": [
          "くだもの",
          "ばなな",
          "りんご",
          "おちゃ"
        ],
        "romaji": "ringo",
        "vi_meaning": "quả táo"
      },
      {
        "id": "topic_05_food_66",
        "num": 66,
        "sentence_hira": "すずきさんは <u>みかん</u> を/が 探しています。",
        "sentence_kanji": "すずきさんは <u>みかん</u> を/が 探しています。",
        "kanji_target": "みかん",
        "hira_target": "みかん",
        "kanji_options": [
          "紅茶",
          "水",
          "みかん",
          "コーヒー"
        ],
        "hira_options": [
          "こうちゃ",
          "みず",
          "みかん",
          "こーひー"
        ],
        "romaji": "mikan",
        "vi_meaning": "quả quýt"
      },
      {
        "id": "topic_05_food_67",
        "num": 67,
        "sentence_hira": "すずきさんは <u>ばなな</u> を/が 探しています。",
        "sentence_kanji": "すずきさんは <u>バナナ</u> を/が 探しています。",
        "kanji_target": "バナナ",
        "hira_target": "ばなな",
        "kanji_options": [
          "注文",
          "水",
          "料理",
          "バナナ"
        ],
        "hira_options": [
          "ちゅうもん",
          "みず",
          "りょうり",
          "ばなな"
        ],
        "romaji": "banana",
        "vi_meaning": "quả chuối"
      },
      {
        "id": "topic_05_food_68",
        "num": 68,
        "sentence_hira": "すずきさんは <u>みず</u> を/が 探しています。",
        "sentence_kanji": "すずきさんは <u>水</u> を/が 探しています。",
        "kanji_target": "水",
        "hira_target": "みず",
        "kanji_options": [
          "注文",
          "みかん",
          "コーヒー",
          "水"
        ],
        "hira_options": [
          "ちゅうもん",
          "みかん",
          "こーひー",
          "みず"
        ],
        "romaji": "mizu",
        "vi_meaning": "nước lọc"
      },
      {
        "id": "topic_05_food_69",
        "num": 69,
        "sentence_hira": "すずきさんは <u>おちゃ</u> を/が 探しています。",
        "sentence_kanji": "すずきさんは <u>お茶</u> を/が 探しています。",
        "kanji_target": "お茶",
        "hira_target": "おちゃ",
        "kanji_options": [
          "魚",
          "お茶",
          "醤油",
          "コーヒー"
        ],
        "hira_options": [
          "さかな",
          "おちゃ",
          "しょうゆ",
          "こーひー"
        ],
        "romaji": "ocha",
        "vi_meaning": "trà xanh"
      },
      {
        "id": "topic_05_food_70",
        "num": 70,
        "sentence_hira": "すずきさんは <u>こうちゃ</u> を/が 探しています。",
        "sentence_kanji": "すずきさんは <u>紅茶</u> を/が 探しています。",
        "kanji_target": "紅茶",
        "hira_target": "こうちゃ",
        "kanji_options": [
          "牛乳",
          "果物",
          "紅茶",
          "醤油"
        ],
        "hira_options": [
          "ぎゅうにゅう",
          "くだもの",
          "こうちゃ",
          "しょうゆ"
        ],
        "romaji": "koucha",
        "vi_meaning": "hồng trà"
      },
      {
        "id": "topic_05_food_71",
        "num": 71,
        "sentence_hira": "すずきさんは <u>こーひー</u> を/が 探しています。",
        "sentence_kanji": "すずきさんは <u>コーヒー</u> を/が 探しています。",
        "kanji_target": "コーヒー",
        "hira_target": "こーひー",
        "kanji_options": [
          "コーヒー",
          "注文",
          "油",
          "胡椒"
        ],
        "hira_options": [
          "こーひー",
          "ちゅうもん",
          "あぶら",
          "こしょう"
        ],
        "romaji": "koohii",
        "vi_meaning": "cà phê"
      },
      {
        "id": "topic_05_food_72",
        "num": 72,
        "sentence_hira": "すずきさんは <u>ぎゅうにゅう</u> を/が 探しています。",
        "sentence_kanji": "すずきさんは <u>牛乳</u> を/が 探しています。",
        "kanji_target": "牛乳",
        "hira_target": "ぎゅうにゅう",
        "kanji_options": [
          "果物",
          "コーヒー",
          "注文",
          "牛乳"
        ],
        "hira_options": [
          "くだもの",
          "こーひー",
          "ちゅうもん",
          "ぎゅうにゅう"
        ],
        "romaji": "gyuunyuu",
        "vi_meaning": "sữa tươi"
      },
      {
        "id": "topic_05_food_73",
        "num": 73,
        "sentence_hira": "すずきさんは <u>おさけ</u> を/が 探しています。",
        "sentence_kanji": "すずきさんは <u>お酒</u> を/が 探しています。",
        "kanji_target": "お酒",
        "hira_target": "おさけ",
        "kanji_options": [
          "肉",
          "肉",
          "ビール",
          "お酒"
        ],
        "hira_options": [
          "にく",
          "にく",
          "びーる",
          "おさけ"
        ],
        "romaji": "osake",
        "vi_meaning": "rượu"
      },
      {
        "id": "topic_05_food_74",
        "num": 74,
        "sentence_hira": "すずきさんは <u>びーる</u> を/が 探しています。",
        "sentence_kanji": "すずきさんは <u>ビール</u> を/が 探しています。",
        "kanji_target": "ビール",
        "hira_target": "びーる",
        "kanji_options": [
          "紅茶",
          "味",
          "ビール",
          "塩"
        ],
        "hira_options": [
          "こうちゃ",
          "あじ",
          "びーる",
          "しお"
        ],
        "romaji": "biiru",
        "vi_meaning": "bia"
      },
      {
        "id": "topic_05_food_75",
        "num": 75,
        "sentence_hira": "すずきさんは <u>さとう</u> を/が 探しています。",
        "sentence_kanji": "すずきさんは <u>砂糖</u> を/が 探しています。",
        "kanji_target": "砂糖",
        "hira_target": "さとう",
        "kanji_options": [
          "ビール",
          "豚肉",
          "注文",
          "砂糖"
        ],
        "hira_options": [
          "びーる",
          "ぶたにく",
          "ちゅうもん",
          "さとう"
        ],
        "romaji": "satou",
        "vi_meaning": "đường"
      },
      {
        "id": "topic_05_food_76",
        "num": 76,
        "sentence_hira": "すずきさんは <u>しお</u> を/が 探しています。",
        "sentence_kanji": "すずきさんは <u>塩</u> を/が 探しています。",
        "kanji_target": "塩",
        "hira_target": "しお",
        "kanji_options": [
          "りんご",
          "ご飯",
          "塩",
          "野菜"
        ],
        "hira_options": [
          "りんご",
          "ごはん",
          "しお",
          "やさい"
        ],
        "romaji": "shio",
        "vi_meaning": "muối"
      },
      {
        "id": "topic_05_food_77",
        "num": 77,
        "sentence_hira": "すずきさんは <u>しょうゆ</u> を/が 探しています。",
        "sentence_kanji": "すずきさんは <u>醤油</u> を/が 探しています。",
        "kanji_target": "醤油",
        "hira_target": "しょうゆ",
        "kanji_options": [
          "牛肉",
          "パン",
          "醤油",
          "牛乳"
        ],
        "hira_options": [
          "ぎゅうにく",
          "ぱん",
          "しょうゆ",
          "ぎゅうにゅう"
        ],
        "romaji": "shouyu",
        "vi_meaning": "nước tương"
      },
      {
        "id": "topic_05_food_78",
        "num": 78,
        "sentence_hira": "すずきさんは <u>こしょう</u> を/が 探しています。",
        "sentence_kanji": "すずきさんは <u>胡椒</u> を/が 探しています。",
        "kanji_target": "胡椒",
        "hira_target": "こしょう",
        "kanji_options": [
          "牛肉",
          "胡椒",
          "りんご",
          "醤油"
        ],
        "hira_options": [
          "ぎゅうにく",
          "こしょう",
          "りんご",
          "しょうゆ"
        ],
        "romaji": "koshou",
        "vi_meaning": "tiêu"
      },
      {
        "id": "topic_05_food_79",
        "num": 79,
        "sentence_hira": "すずきさんは <u>あぶら</u> を/が 探しています。",
        "sentence_kanji": "すずきさんは <u>油</u> を/が 探しています。",
        "kanji_target": "油",
        "hira_target": "あぶら",
        "kanji_options": [
          "紅茶",
          "ご飯",
          "油",
          "ビール"
        ],
        "hira_options": [
          "こうちゃ",
          "ごはん",
          "あぶら",
          "びーる"
        ],
        "romaji": "abura",
        "vi_meaning": "dầu ăn"
      },
      {
        "id": "topic_05_food_80",
        "num": 80,
        "sentence_hira": "すずきさんは <u>ちゅうもん</u> を/が 探しています。",
        "sentence_kanji": "すずきさんは <u>注文</u> を/が 探しています。",
        "kanji_target": "注文",
        "hira_target": "ちゅうもん",
        "kanji_options": [
          "塩",
          "鶏肉",
          "果物",
          "注文"
        ],
        "hira_options": [
          "しお",
          "とりにく",
          "くだもの",
          "ちゅうもん"
        ],
        "romaji": "chuumon",
        "vi_meaning": "gọi món"
      },
      {
        "id": "topic_05_food_81",
        "num": 81,
        "sentence_hira": "すずきさんは <u>あじ</u> を/が 探しています。",
        "sentence_kanji": "すずきさんは <u>味</u> を/が 探しています。",
        "kanji_target": "味",
        "hira_target": "あじ",
        "kanji_options": [
          "醤油",
          "パン",
          "ご飯",
          "味"
        ],
        "hira_options": [
          "しょうゆ",
          "ぱん",
          "ごはん",
          "あじ"
        ],
        "romaji": "aji",
        "vi_meaning": "hương vị"
      },
      {
        "id": "topic_05_food_82",
        "num": 82,
        "sentence_hira": "すずきさんは <u>りょうり</u> を/が 探しています。",
        "sentence_kanji": "すずきさんは <u>料理</u> を/が 探しています。",
        "kanji_target": "料理",
        "hira_target": "りょうり",
        "kanji_options": [
          "料理",
          "水",
          "ご飯",
          "醤油"
        ],
        "hira_options": [
          "りょうり",
          "みず",
          "ごはん",
          "しょうゆ"
        ],
        "romaji": "ryouri",
        "vi_meaning": "món ăn"
      },
      {
        "id": "topic_05_food_83",
        "num": 83,
        "sentence_hira": "すずきさんは <u>ごはん</u> を/が 探しています。",
        "sentence_kanji": "すずきさんは <u>ご飯</u> を/が 探しています。",
        "kanji_target": "ご飯",
        "hira_target": "ごはん",
        "kanji_options": [
          "鶏肉",
          "紅茶",
          "牛乳",
          "ご飯"
        ],
        "hira_options": [
          "とりにく",
          "こうちゃ",
          "ぎゅうにゅう",
          "ごはん"
        ],
        "romaji": "gohan",
        "vi_meaning": "cơm"
      },
      {
        "id": "topic_05_food_84",
        "num": 84,
        "sentence_hira": "すずきさんは <u>ぱん</u> を/が 探しています。",
        "sentence_kanji": "すずきさんは <u>パン</u> を/が 探しています。",
        "kanji_target": "パン",
        "hira_target": "ぱん",
        "kanji_options": [
          "パン",
          "バナナ",
          "みかん",
          "油"
        ],
        "hira_options": [
          "ぱん",
          "ばなな",
          "みかん",
          "あぶら"
        ],
        "romaji": "pan",
        "vi_meaning": "bánh mì"
      },
      {
        "id": "topic_05_food_85",
        "num": 85,
        "sentence_hira": "すずきさんは <u>にく</u> を/が 探しています。",
        "sentence_kanji": "すずきさんは <u>肉</u> を/が 探しています。",
        "kanji_target": "肉",
        "hira_target": "にく",
        "kanji_options": [
          "注文",
          "紅茶",
          "バナナ",
          "肉"
        ],
        "hira_options": [
          "ちゅうもん",
          "こうちゃ",
          "ばなな",
          "にく"
        ],
        "romaji": "niku",
        "vi_meaning": "thịt"
      },
      {
        "id": "topic_05_food_86",
        "num": 86,
        "sentence_hira": "すずきさんは <u>ぎゅうにく</u> を/が 探しています。",
        "sentence_kanji": "すずきさんは <u>牛肉</u> を/が 探しています。",
        "kanji_target": "牛肉",
        "hira_target": "ぎゅうにく",
        "kanji_options": [
          "牛肉",
          "果物",
          "醤油",
          "バナナ"
        ],
        "hira_options": [
          "ぎゅうにく",
          "くだもの",
          "しょうゆ",
          "ばなな"
        ],
        "romaji": "gyuuniku",
        "vi_meaning": "thịt bò"
      },
      {
        "id": "topic_05_food_87",
        "num": 87,
        "sentence_hira": "すずきさんは <u>ぶたにく</u> を/が 探しています。",
        "sentence_kanji": "すずきさんは <u>豚肉</u> を/が 探しています。",
        "kanji_target": "豚肉",
        "hira_target": "ぶたにく",
        "kanji_options": [
          "肉",
          "味",
          "豚肉",
          "魚"
        ],
        "hira_options": [
          "にく",
          "あじ",
          "ぶたにく",
          "さかな"
        ],
        "romaji": "butaniku",
        "vi_meaning": "thịt heo"
      },
      {
        "id": "topic_05_food_88",
        "num": 88,
        "sentence_hira": "すずきさんは <u>とりにく</u> を/が 探しています。",
        "sentence_kanji": "すずきさんは <u>鶏肉</u> を/が 探しています。",
        "kanji_target": "鶏肉",
        "hira_target": "とりにく",
        "kanji_options": [
          "野菜",
          "魚",
          "砂糖",
          "鶏肉"
        ],
        "hira_options": [
          "やさい",
          "さかな",
          "さとう",
          "とりにく"
        ],
        "romaji": "toriniku",
        "vi_meaning": "thịt gà"
      },
      {
        "id": "topic_05_food_89",
        "num": 89,
        "sentence_hira": "すずきさんは <u>さかな</u> を/が 探しています。",
        "sentence_kanji": "すずきさんは <u>魚</u> を/が 探しています。",
        "kanji_target": "魚",
        "hira_target": "さかな",
        "kanji_options": [
          "魚",
          "肉",
          "油",
          "豚肉"
        ],
        "hira_options": [
          "さかな",
          "にく",
          "あぶら",
          "ぶたにく"
        ],
        "romaji": "sakana",
        "vi_meaning": "cái cá"
      },
      {
        "id": "topic_05_food_90",
        "num": 90,
        "sentence_hira": "すずきさんは <u>やさい</u> を/が 探しています。",
        "sentence_kanji": "すずきさんは <u>野菜</u> を/が 探しています。",
        "kanji_target": "野菜",
        "hira_target": "やさい",
        "kanji_options": [
          "砂糖",
          "りんご",
          "野菜",
          "魚"
        ],
        "hira_options": [
          "さとう",
          "りんご",
          "やさい",
          "さかな"
        ],
        "romaji": "yasai",
        "vi_meaning": "rau củ"
      },
      {
        "id": "topic_05_food_91",
        "num": 91,
        "sentence_hira": "すずきさんは <u>くだもの</u> を/が 探しています。",
        "sentence_kanji": "すずきさんは <u>果物</u> を/が 探しています。",
        "kanji_target": "果物",
        "hira_target": "くだもの",
        "kanji_options": [
          "醤油",
          "果物",
          "野菜",
          "紅茶"
        ],
        "hira_options": [
          "しょうゆ",
          "くだもの",
          "やさい",
          "こうちゃ"
        ],
        "romaji": "kudamono",
        "vi_meaning": "trái cây"
      },
      {
        "id": "topic_05_food_92",
        "num": 92,
        "sentence_hira": "すずきさんは <u>りんご</u> を/が 探しています。",
        "sentence_kanji": "すずきさんは <u>りんご</u> を/が 探しています。",
        "kanji_target": "りんご",
        "hira_target": "りんご",
        "kanji_options": [
          "バナナ",
          "コーヒー",
          "りんご",
          "鶏肉"
        ],
        "hira_options": [
          "ばなな",
          "こーひー",
          "りんご",
          "とりにく"
        ],
        "romaji": "ringo",
        "vi_meaning": "quả táo"
      },
      {
        "id": "topic_05_food_93",
        "num": 93,
        "sentence_hira": "すずきさんは <u>みかん</u> を/が 探しています。",
        "sentence_kanji": "すずきさんは <u>みかん</u> を/が 探しています。",
        "kanji_target": "みかん",
        "hira_target": "みかん",
        "kanji_options": [
          "バナナ",
          "お酒",
          "みかん",
          "醤油"
        ],
        "hira_options": [
          "ばなな",
          "おさけ",
          "みかん",
          "しょうゆ"
        ],
        "romaji": "mikan",
        "vi_meaning": "quả quýt"
      },
      {
        "id": "topic_05_food_94",
        "num": 94,
        "sentence_hira": "すずきさんは <u>ばなな</u> を/が 探しています。",
        "sentence_kanji": "すずきさんは <u>バナナ</u> を/が 探しています。",
        "kanji_target": "バナナ",
        "hira_target": "ばなな",
        "kanji_options": [
          "バナナ",
          "水",
          "果物",
          "りんご"
        ],
        "hira_options": [
          "ばなな",
          "みず",
          "くだもの",
          "りんご"
        ],
        "romaji": "banana",
        "vi_meaning": "quả chuối"
      },
      {
        "id": "topic_05_food_95",
        "num": 95,
        "sentence_hira": "すずきさんは <u>みず</u> を/が 探しています。",
        "sentence_kanji": "すずきさんは <u>水</u> を/が 探しています。",
        "kanji_target": "水",
        "hira_target": "みず",
        "kanji_options": [
          "みかん",
          "鶏肉",
          "水",
          "料理"
        ],
        "hira_options": [
          "みかん",
          "とりにく",
          "みず",
          "りょうり"
        ],
        "romaji": "mizu",
        "vi_meaning": "nước lọc"
      },
      {
        "id": "topic_05_food_96",
        "num": 96,
        "sentence_hira": "すずきさんは <u>おちゃ</u> を/が 探しています。",
        "sentence_kanji": "すずきさんは <u>お茶</u> を/が 探しています。",
        "kanji_target": "お茶",
        "hira_target": "おちゃ",
        "kanji_options": [
          "お酒",
          "お茶",
          "ご飯",
          "牛乳"
        ],
        "hira_options": [
          "おさけ",
          "おちゃ",
          "ごはん",
          "ぎゅうにゅう"
        ],
        "romaji": "ocha",
        "vi_meaning": "trà xanh"
      },
      {
        "id": "topic_05_food_97",
        "num": 97,
        "sentence_hira": "すずきさんは <u>こうちゃ</u> を/が 探しています。",
        "sentence_kanji": "すずきさんは <u>紅茶</u> を/が 探しています。",
        "kanji_target": "紅茶",
        "hira_target": "こうちゃ",
        "kanji_options": [
          "紅茶",
          "水",
          "野菜",
          "バナナ"
        ],
        "hira_options": [
          "こうちゃ",
          "みず",
          "やさい",
          "ばなな"
        ],
        "romaji": "koucha",
        "vi_meaning": "hồng trà"
      },
      {
        "id": "topic_05_food_98",
        "num": 98,
        "sentence_hira": "すずきさんは <u>こーひー</u> を/が 探しています。",
        "sentence_kanji": "すずきさんは <u>コーヒー</u> を/が 探しています。",
        "kanji_target": "コーヒー",
        "hira_target": "こーひー",
        "kanji_options": [
          "豚肉",
          "コーヒー",
          "油",
          "バナナ"
        ],
        "hira_options": [
          "ぶたにく",
          "こーひー",
          "あぶら",
          "ばなな"
        ],
        "romaji": "koohii",
        "vi_meaning": "cà phê"
      },
      {
        "id": "topic_05_food_99",
        "num": 99,
        "sentence_hira": "すずきさんは <u>ぎゅうにゅう</u> を/が 探しています。",
        "sentence_kanji": "すずきさんは <u>牛乳</u> を/が 探しています。",
        "kanji_target": "牛乳",
        "hira_target": "ぎゅうにゅう",
        "kanji_options": [
          "肉",
          "味",
          "胡椒",
          "牛乳"
        ],
        "hira_options": [
          "にく",
          "あじ",
          "こしょう",
          "ぎゅうにゅう"
        ],
        "romaji": "gyuunyuu",
        "vi_meaning": "sữa tươi"
      },
      {
        "id": "topic_05_food_100",
        "num": 100,
        "sentence_hira": "すずきさんは <u>おさけ</u> を/が 探しています。",
        "sentence_kanji": "すずきさんは <u>お酒</u> を/が 探しています。",
        "kanji_target": "お酒",
        "hira_target": "おさけ",
        "kanji_options": [
          "お酒",
          "胡椒",
          "砂糖",
          "鶏肉"
        ],
        "hira_options": [
          "おさけ",
          "こしょう",
          "さとう",
          "とりにく"
        ],
        "romaji": "osake",
        "vi_meaning": "rượu"
      },
      {
        "id": "topic_05_food_101",
        "num": 101,
        "sentence_hira": "すずきさんは <u>びーる</u> を/が 探しています。",
        "sentence_kanji": "すずきさんは <u>ビール</u> を/が 探しています。",
        "kanji_target": "ビール",
        "hira_target": "びーる",
        "kanji_options": [
          "ビール",
          "牛乳",
          "醤油",
          "コーヒー"
        ],
        "hira_options": [
          "びーる",
          "ぎゅうにゅう",
          "しょうゆ",
          "こーひー"
        ],
        "romaji": "biiru",
        "vi_meaning": "bia"
      },
      {
        "id": "topic_05_food_102",
        "num": 102,
        "sentence_hira": "すずきさんは <u>さとう</u> を/が 探しています。",
        "sentence_kanji": "すずきさんは <u>砂糖</u> を/が 探しています。",
        "kanji_target": "砂糖",
        "hira_target": "さとう",
        "kanji_options": [
          "鶏肉",
          "油",
          "お酒",
          "砂糖"
        ],
        "hira_options": [
          "とりにく",
          "あぶら",
          "おさけ",
          "さとう"
        ],
        "romaji": "satou",
        "vi_meaning": "đường"
      },
      {
        "id": "topic_05_food_103",
        "num": 103,
        "sentence_hira": "すずきさんは <u>しお</u> を/が 探しています。",
        "sentence_kanji": "すずきさんは <u>塩</u> を/が 探しています。",
        "kanji_target": "塩",
        "hira_target": "しお",
        "kanji_options": [
          "塩",
          "コーヒー",
          "果物",
          "魚"
        ],
        "hira_options": [
          "しお",
          "こーひー",
          "くだもの",
          "さかな"
        ],
        "romaji": "shio",
        "vi_meaning": "muối"
      },
      {
        "id": "topic_05_food_104",
        "num": 104,
        "sentence_hira": "すずきさんは <u>しょうゆ</u> を/が 探しています。",
        "sentence_kanji": "すずきさんは <u>醤油</u> を/が 探しています。",
        "kanji_target": "醤油",
        "hira_target": "しょうゆ",
        "kanji_options": [
          "野菜",
          "みかん",
          "りんご",
          "醤油"
        ],
        "hira_options": [
          "やさい",
          "みかん",
          "りんご",
          "しょうゆ"
        ],
        "romaji": "shouyu",
        "vi_meaning": "nước tương"
      },
      {
        "id": "topic_05_food_105",
        "num": 105,
        "sentence_hira": "すずきさんは <u>こしょう</u> を/が 探しています。",
        "sentence_kanji": "すずきさんは <u>胡椒</u> を/が 探しています。",
        "kanji_target": "胡椒",
        "hira_target": "こしょう",
        "kanji_options": [
          "胡椒",
          "塩",
          "豚肉",
          "ビール"
        ],
        "hira_options": [
          "こしょう",
          "しお",
          "ぶたにく",
          "びーる"
        ],
        "romaji": "koshou",
        "vi_meaning": "tiêu"
      },
      {
        "id": "topic_05_food_106",
        "num": 106,
        "sentence_hira": "すずきさんは <u>あぶら</u> を/が 探しています。",
        "sentence_kanji": "すずきさんは <u>油</u> を/が 探しています。",
        "kanji_target": "油",
        "hira_target": "あぶら",
        "kanji_options": [
          "油",
          "みかん",
          "豚肉",
          "ビール"
        ],
        "hira_options": [
          "あぶら",
          "みかん",
          "ぶたにく",
          "びーる"
        ],
        "romaji": "abura",
        "vi_meaning": "dầu ăn"
      },
      {
        "id": "topic_05_food_107",
        "num": 107,
        "sentence_hira": "すずきさんは <u>ちゅうもん</u> を/が 探しています。",
        "sentence_kanji": "すずきさんは <u>注文</u> を/が 探しています。",
        "kanji_target": "注文",
        "hira_target": "ちゅうもん",
        "kanji_options": [
          "バナナ",
          "醤油",
          "注文",
          "牛乳"
        ],
        "hira_options": [
          "ばなな",
          "しょうゆ",
          "ちゅうもん",
          "ぎゅうにゅう"
        ],
        "romaji": "chuumon",
        "vi_meaning": "gọi món"
      },
      {
        "id": "topic_05_food_108",
        "num": 108,
        "sentence_hira": "すずきさんは <u>あじ</u> を/が 探しています。",
        "sentence_kanji": "すずきさんは <u>味</u> を/が 探しています。",
        "kanji_target": "味",
        "hira_target": "あじ",
        "kanji_options": [
          "豚肉",
          "鶏肉",
          "お茶",
          "味"
        ],
        "hira_options": [
          "ぶたにく",
          "とりにく",
          "おちゃ",
          "あじ"
        ],
        "romaji": "aji",
        "vi_meaning": "hương vị"
      },
      {
        "id": "topic_05_food_109",
        "num": 109,
        "sentence_hira": "すずきさんは <u>りょうり</u> を/が 探しています。",
        "sentence_kanji": "すずきさんは <u>料理</u> を/が 探しています。",
        "kanji_target": "料理",
        "hira_target": "りょうり",
        "kanji_options": [
          "味",
          "料理",
          "お酒",
          "バナナ"
        ],
        "hira_options": [
          "あじ",
          "りょうり",
          "おさけ",
          "ばなな"
        ],
        "romaji": "ryouri",
        "vi_meaning": "món ăn"
      },
      {
        "id": "topic_05_food_110",
        "num": 110,
        "sentence_hira": "すずきさんは <u>ごはん</u> を/が 探しています。",
        "sentence_kanji": "すずきさんは <u>ご飯</u> を/が 探しています。",
        "kanji_target": "ご飯",
        "hira_target": "ごはん",
        "kanji_options": [
          "ご飯",
          "油",
          "パン",
          "水"
        ],
        "hira_options": [
          "ごはん",
          "あぶら",
          "ぱん",
          "みず"
        ],
        "romaji": "gohan",
        "vi_meaning": "cơm"
      },
      {
        "id": "topic_05_food_111",
        "num": 111,
        "sentence_hira": "すずきさんは <u>ぱん</u> を/が 探しています。",
        "sentence_kanji": "すずきさんは <u>パン</u> を/が 探しています。",
        "kanji_target": "パン",
        "hira_target": "ぱん",
        "kanji_options": [
          "みかん",
          "パン",
          "水",
          "料理"
        ],
        "hira_options": [
          "みかん",
          "ぱん",
          "みず",
          "りょうり"
        ],
        "romaji": "pan",
        "vi_meaning": "bánh mì"
      },
      {
        "id": "topic_05_food_112",
        "num": 112,
        "sentence_hira": "すずきさんは <u>にく</u> を/が 探しています。",
        "sentence_kanji": "すずきさんは <u>肉</u> を/が 探しています。",
        "kanji_target": "肉",
        "hira_target": "にく",
        "kanji_options": [
          "料理",
          "肉",
          "りんご",
          "ビール"
        ],
        "hira_options": [
          "りょうり",
          "にく",
          "りんご",
          "びーる"
        ],
        "romaji": "niku",
        "vi_meaning": "thịt"
      },
      {
        "id": "topic_05_food_113",
        "num": 113,
        "sentence_hira": "すずきさんは <u>ぎゅうにく</u> を/が 探しています。",
        "sentence_kanji": "すずきさんは <u>牛肉</u> を/が 探しています。",
        "kanji_target": "牛肉",
        "hira_target": "ぎゅうにく",
        "kanji_options": [
          "豚肉",
          "油",
          "肉",
          "牛肉"
        ],
        "hira_options": [
          "ぶたにく",
          "あぶら",
          "にく",
          "ぎゅうにく"
        ],
        "romaji": "gyuuniku",
        "vi_meaning": "thịt bò"
      },
      {
        "id": "topic_05_food_114",
        "num": 114,
        "sentence_hira": "すずきさんは <u>ぶたにく</u> を/が 探しています。",
        "sentence_kanji": "すずきさんは <u>豚肉</u> を/が 探しています。",
        "kanji_target": "豚肉",
        "hira_target": "ぶたにく",
        "kanji_options": [
          "バナナ",
          "豚肉",
          "注文",
          "牛乳"
        ],
        "hira_options": [
          "ばなな",
          "ぶたにく",
          "ちゅうもん",
          "ぎゅうにゅう"
        ],
        "romaji": "butaniku",
        "vi_meaning": "thịt heo"
      },
      {
        "id": "topic_05_food_115",
        "num": 115,
        "sentence_hira": "すずきさんは <u>とりにく</u> を/が 探しています。",
        "sentence_kanji": "すずきさんは <u>鶏肉</u> を/が 探しています。",
        "kanji_target": "鶏肉",
        "hira_target": "とりにく",
        "kanji_options": [
          "鶏肉",
          "果物",
          "お酒",
          "肉"
        ],
        "hira_options": [
          "とりにく",
          "くだもの",
          "おさけ",
          "にく"
        ],
        "romaji": "toriniku",
        "vi_meaning": "thịt gà"
      },
      {
        "id": "topic_05_food_116",
        "num": 116,
        "sentence_hira": "すずきさんは <u>さかな</u> を/が 探しています。",
        "sentence_kanji": "すずきさんは <u>魚</u> を/が 探しています。",
        "kanji_target": "魚",
        "hira_target": "さかな",
        "kanji_options": [
          "魚",
          "味",
          "塩",
          "お酒"
        ],
        "hira_options": [
          "さかな",
          "あじ",
          "しお",
          "おさけ"
        ],
        "romaji": "sakana",
        "vi_meaning": "cái cá"
      },
      {
        "id": "topic_05_food_117",
        "num": 117,
        "sentence_hira": "すずきさんは <u>やさい</u> を/が 探しています。",
        "sentence_kanji": "すずきさんは <u>野菜</u> を/が 探しています。",
        "kanji_target": "野菜",
        "hira_target": "やさい",
        "kanji_options": [
          "醤油",
          "水",
          "お茶",
          "野菜"
        ],
        "hira_options": [
          "しょうゆ",
          "みず",
          "おちゃ",
          "やさい"
        ],
        "romaji": "yasai",
        "vi_meaning": "rau củ"
      },
      {
        "id": "topic_05_food_118",
        "num": 118,
        "sentence_hira": "すずきさんは <u>くだもの</u> を/が 探しています。",
        "sentence_kanji": "すずきさんは <u>果物</u> を/が 探しています。",
        "kanji_target": "果物",
        "hira_target": "くだもの",
        "kanji_options": [
          "水",
          "野菜",
          "醤油",
          "果物"
        ],
        "hira_options": [
          "みず",
          "やさい",
          "しょうゆ",
          "くだもの"
        ],
        "romaji": "kudamono",
        "vi_meaning": "trái cây"
      },
      {
        "id": "topic_05_food_119",
        "num": 119,
        "sentence_hira": "すずきさんは <u>りんご</u> を/が 探しています。",
        "sentence_kanji": "すずきさんは <u>りんご</u> を/が 探しています。",
        "kanji_target": "りんご",
        "hira_target": "りんご",
        "kanji_options": [
          "ご飯",
          "りんご",
          "豚肉",
          "パン"
        ],
        "hira_options": [
          "ごはん",
          "りんご",
          "ぶたにく",
          "ぱん"
        ],
        "romaji": "ringo",
        "vi_meaning": "quả táo"
      },
      {
        "id": "topic_05_food_120",
        "num": 120,
        "sentence_hira": "すずきさんは <u>みかん</u> を/が 探しています。",
        "sentence_kanji": "すずきさんは <u>みかん</u> を/が 探しています。",
        "kanji_target": "みかん",
        "hira_target": "みかん",
        "kanji_options": [
          "りんご",
          "塩",
          "みかん",
          "牛肉"
        ],
        "hira_options": [
          "りんご",
          "しお",
          "みかん",
          "ぎゅうにく"
        ],
        "romaji": "mikan",
        "vi_meaning": "quả quýt"
      },
      {
        "id": "topic_05_food_121",
        "num": 121,
        "sentence_hira": "すずきさんは <u>ばなな</u> を/が 探しています。",
        "sentence_kanji": "すずきさんは <u>バナナ</u> を/が 探しています。",
        "kanji_target": "バナナ",
        "hira_target": "ばなな",
        "kanji_options": [
          "みかん",
          "果物",
          "コーヒー",
          "バナナ"
        ],
        "hira_options": [
          "みかん",
          "くだもの",
          "こーひー",
          "ばなな"
        ],
        "romaji": "banana",
        "vi_meaning": "quả chuối"
      },
      {
        "id": "topic_05_food_122",
        "num": 122,
        "sentence_hira": "すずきさんは <u>みず</u> を/が 探しています。",
        "sentence_kanji": "すずきさんは <u>水</u> を/が 探しています。",
        "kanji_target": "水",
        "hira_target": "みず",
        "kanji_options": [
          "ビール",
          "牛肉",
          "水",
          "料理"
        ],
        "hira_options": [
          "びーる",
          "ぎゅうにく",
          "みず",
          "りょうり"
        ],
        "romaji": "mizu",
        "vi_meaning": "nước lọc"
      },
      {
        "id": "topic_05_food_123",
        "num": 123,
        "sentence_hira": "すずきさんは <u>おちゃ</u> を/が 探しています。",
        "sentence_kanji": "すずきさんは <u>お茶</u> を/が 探しています。",
        "kanji_target": "お茶",
        "hira_target": "おちゃ",
        "kanji_options": [
          "お茶",
          "パン",
          "りんご",
          "醤油"
        ],
        "hira_options": [
          "おちゃ",
          "ぱん",
          "りんご",
          "しょうゆ"
        ],
        "romaji": "ocha",
        "vi_meaning": "trà xanh"
      },
      {
        "id": "topic_05_food_124",
        "num": 124,
        "sentence_hira": "すずきさんは <u>こうちゃ</u> を/が 探しています。",
        "sentence_kanji": "すずきさんは <u>紅茶</u> を/が 探しています。",
        "kanji_target": "紅茶",
        "hira_target": "こうちゃ",
        "kanji_options": [
          "胡椒",
          "豚肉",
          "豚肉",
          "紅茶"
        ],
        "hira_options": [
          "こしょう",
          "ぶたにく",
          "ぶたにく",
          "こうちゃ"
        ],
        "romaji": "koucha",
        "vi_meaning": "hồng trà"
      },
      {
        "id": "topic_05_food_125",
        "num": 125,
        "sentence_hira": "すずきさんは <u>こーひー</u> を/が 探しています。",
        "sentence_kanji": "すずきさんは <u>コーヒー</u> を/が 探しています。",
        "kanji_target": "コーヒー",
        "hira_target": "こーひー",
        "kanji_options": [
          "コーヒー",
          "果物",
          "ビール",
          "砂糖"
        ],
        "hira_options": [
          "こーひー",
          "くだもの",
          "びーる",
          "さとう"
        ],
        "romaji": "koohii",
        "vi_meaning": "cà phê"
      },
      {
        "id": "topic_05_food_126",
        "num": 126,
        "sentence_hira": "すずきさんは <u>ぎゅうにゅう</u> を/が 探しています。",
        "sentence_kanji": "すずきさんは <u>牛乳</u> を/が 探しています。",
        "kanji_target": "牛乳",
        "hira_target": "ぎゅうにゅう",
        "kanji_options": [
          "砂糖",
          "みかん",
          "牛乳",
          "お茶"
        ],
        "hira_options": [
          "さとう",
          "みかん",
          "ぎゅうにゅう",
          "おちゃ"
        ],
        "romaji": "gyuunyuu",
        "vi_meaning": "sữa tươi"
      },
      {
        "id": "topic_05_food_127",
        "num": 127,
        "sentence_hira": "すずきさんは <u>おさけ</u> を/が 探しています。",
        "sentence_kanji": "すずきさんは <u>お酒</u> を/が 探しています。",
        "kanji_target": "お酒",
        "hira_target": "おさけ",
        "kanji_options": [
          "水",
          "りんご",
          "お酒",
          "料理"
        ],
        "hira_options": [
          "みず",
          "りんご",
          "おさけ",
          "りょうり"
        ],
        "romaji": "osake",
        "vi_meaning": "rượu"
      },
      {
        "id": "topic_05_food_128",
        "num": 128,
        "sentence_hira": "すずきさんは <u>びーる</u> を/が 探しています。",
        "sentence_kanji": "すずきさんは <u>ビール</u> を/が 探しています。",
        "kanji_target": "ビール",
        "hira_target": "びーる",
        "kanji_options": [
          "ビール",
          "みかん",
          "料理",
          "みかん"
        ],
        "hira_options": [
          "びーる",
          "みかん",
          "りょうり",
          "みかん"
        ],
        "romaji": "biiru",
        "vi_meaning": "bia"
      },
      {
        "id": "topic_05_food_129",
        "num": 129,
        "sentence_hira": "すずきさんは <u>さとう</u> を/が 探しています。",
        "sentence_kanji": "すずきさんは <u>砂糖</u> を/が 探しています。",
        "kanji_target": "砂糖",
        "hira_target": "さとう",
        "kanji_options": [
          "バナナ",
          "豚肉",
          "パン",
          "砂糖"
        ],
        "hira_options": [
          "ばなな",
          "ぶたにく",
          "ぱん",
          "さとう"
        ],
        "romaji": "satou",
        "vi_meaning": "đường"
      },
      {
        "id": "topic_05_food_130",
        "num": 130,
        "sentence_hira": "すずきさんは <u>しお</u> を/が 探しています。",
        "sentence_kanji": "すずきさんは <u>塩</u> を/が 探しています。",
        "kanji_target": "塩",
        "hira_target": "しお",
        "kanji_options": [
          "バナナ",
          "注文",
          "塩",
          "胡椒"
        ],
        "hira_options": [
          "ばなな",
          "ちゅうもん",
          "しお",
          "こしょう"
        ],
        "romaji": "shio",
        "vi_meaning": "muối"
      },
      {
        "id": "topic_05_food_131",
        "num": 131,
        "sentence_hira": "すずきさんは <u>しょうゆ</u> を/が 探しています。",
        "sentence_kanji": "すずきさんは <u>醤油</u> を/が 探しています。",
        "kanji_target": "醤油",
        "hira_target": "しょうゆ",
        "kanji_options": [
          "塩",
          "りんご",
          "醤油",
          "水"
        ],
        "hira_options": [
          "しお",
          "りんご",
          "しょうゆ",
          "みず"
        ],
        "romaji": "shouyu",
        "vi_meaning": "nước tương"
      },
      {
        "id": "topic_05_food_132",
        "num": 132,
        "sentence_hira": "すずきさんは <u>こしょう</u> を/が 探しています。",
        "sentence_kanji": "すずきさんは <u>胡椒</u> を/が 探しています。",
        "kanji_target": "胡椒",
        "hira_target": "こしょう",
        "kanji_options": [
          "胡椒",
          "塩",
          "肉",
          "コーヒー"
        ],
        "hira_options": [
          "こしょう",
          "しお",
          "にく",
          "こーひー"
        ],
        "romaji": "koshou",
        "vi_meaning": "tiêu"
      },
      {
        "id": "topic_05_food_133",
        "num": 133,
        "sentence_hira": "すずきさんは <u>あぶら</u> を/が 探しています。",
        "sentence_kanji": "すずきさんは <u>油</u> を/が 探しています。",
        "kanji_target": "油",
        "hira_target": "あぶら",
        "kanji_options": [
          "バナナ",
          "油",
          "塩",
          "胡椒"
        ],
        "hira_options": [
          "ばなな",
          "あぶら",
          "しお",
          "こしょう"
        ],
        "romaji": "abura",
        "vi_meaning": "dầu ăn"
      },
      {
        "id": "topic_05_food_134",
        "num": 134,
        "sentence_hira": "すずきさんは <u>ちゅうもん</u> を/が 探しています。",
        "sentence_kanji": "すずきさんは <u>注文</u> を/が 探しています。",
        "kanji_target": "注文",
        "hira_target": "ちゅうもん",
        "kanji_options": [
          "お酒",
          "注文",
          "水",
          "牛肉"
        ],
        "hira_options": [
          "おさけ",
          "ちゅうもん",
          "みず",
          "ぎゅうにく"
        ],
        "romaji": "chuumon",
        "vi_meaning": "gọi món"
      },
      {
        "id": "topic_05_food_135",
        "num": 135,
        "sentence_hira": "すずきさんは <u>あじ</u> を/が 探しています。",
        "sentence_kanji": "すずきさんは <u>味</u> を/が 探しています。",
        "kanji_target": "味",
        "hira_target": "あじ",
        "kanji_options": [
          "バナナ",
          "牛肉",
          "味",
          "お茶"
        ],
        "hira_options": [
          "ばなな",
          "ぎゅうにく",
          "あじ",
          "おちゃ"
        ],
        "romaji": "aji",
        "vi_meaning": "hương vị"
      },
      {
        "id": "topic_05_food_136",
        "num": 136,
        "sentence_hira": "すずきさんは <u>りょうり</u> を/が 探しています。",
        "sentence_kanji": "すずきさんは <u>料理</u> を/が 探しています。",
        "kanji_target": "料理",
        "hira_target": "りょうり",
        "kanji_options": [
          "牛肉",
          "砂糖",
          "果物",
          "料理"
        ],
        "hira_options": [
          "ぎゅうにく",
          "さとう",
          "くだもの",
          "りょうり"
        ],
        "romaji": "ryouri",
        "vi_meaning": "món ăn"
      },
      {
        "id": "topic_05_food_137",
        "num": 137,
        "sentence_hira": "すずきさんは <u>ごはん</u> を/が 探しています。",
        "sentence_kanji": "すずきさんは <u>ご飯</u> を/が 探しています。",
        "kanji_target": "ご飯",
        "hira_target": "ごはん",
        "kanji_options": [
          "果物",
          "ご飯",
          "豚肉",
          "油"
        ],
        "hira_options": [
          "くだもの",
          "ごはん",
          "ぶたにく",
          "あぶら"
        ],
        "romaji": "gohan",
        "vi_meaning": "cơm"
      },
      {
        "id": "topic_05_food_138",
        "num": 138,
        "sentence_hira": "すずきさんは <u>ぱん</u> を/が 探しています。",
        "sentence_kanji": "すずきさんは <u>パン</u> を/が 探しています。",
        "kanji_target": "パン",
        "hira_target": "ぱん",
        "kanji_options": [
          "コーヒー",
          "砂糖",
          "豚肉",
          "パン"
        ],
        "hira_options": [
          "こーひー",
          "さとう",
          "ぶたにく",
          "ぱん"
        ],
        "romaji": "pan",
        "vi_meaning": "bánh mì"
      },
      {
        "id": "topic_05_food_139",
        "num": 139,
        "sentence_hira": "すずきさんは <u>にく</u> を/が 探しています。",
        "sentence_kanji": "すずきさんは <u>肉</u> を/が 探しています。",
        "kanji_target": "肉",
        "hira_target": "にく",
        "kanji_options": [
          "水",
          "果物",
          "肉",
          "お酒"
        ],
        "hira_options": [
          "みず",
          "くだもの",
          "にく",
          "おさけ"
        ],
        "romaji": "niku",
        "vi_meaning": "thịt"
      },
      {
        "id": "topic_05_food_140",
        "num": 140,
        "sentence_hira": "すずきさんは <u>ぎゅうにく</u> を/が 探しています。",
        "sentence_kanji": "すずきさんは <u>牛肉</u> を/が 探しています。",
        "kanji_target": "牛肉",
        "hira_target": "ぎゅうにく",
        "kanji_options": [
          "牛肉",
          "料理",
          "バナナ",
          "油"
        ],
        "hira_options": [
          "ぎゅうにく",
          "りょうり",
          "ばなな",
          "あぶら"
        ],
        "romaji": "gyuuniku",
        "vi_meaning": "thịt bò"
      },
      {
        "id": "topic_05_food_141",
        "num": 141,
        "sentence_hira": "すずきさんは <u>ぶたにく</u> を/が 探しています。",
        "sentence_kanji": "すずきさんは <u>豚肉</u> を/が 探しています。",
        "kanji_target": "豚肉",
        "hira_target": "ぶたにく",
        "kanji_options": [
          "りんご",
          "豚肉",
          "塩",
          "魚"
        ],
        "hira_options": [
          "りんご",
          "ぶたにく",
          "しお",
          "さかな"
        ],
        "romaji": "butaniku",
        "vi_meaning": "thịt heo"
      },
      {
        "id": "topic_05_food_142",
        "num": 142,
        "sentence_hira": "すずきさんは <u>とりにく</u> を/が 探しています。",
        "sentence_kanji": "すずきさんは <u>鶏肉</u> を/が 探しています。",
        "kanji_target": "鶏肉",
        "hira_target": "とりにく",
        "kanji_options": [
          "紅茶",
          "鶏肉",
          "胡椒",
          "紅茶"
        ],
        "hira_options": [
          "こうちゃ",
          "とりにく",
          "こしょう",
          "こうちゃ"
        ],
        "romaji": "toriniku",
        "vi_meaning": "thịt gà"
      },
      {
        "id": "topic_05_food_143",
        "num": 143,
        "sentence_hira": "すずきさんは <u>さかな</u> を/が 探しています。",
        "sentence_kanji": "すずきさんは <u>魚</u> を/が 探しています。",
        "kanji_target": "魚",
        "hira_target": "さかな",
        "kanji_options": [
          "パン",
          "料理",
          "魚",
          "お茶"
        ],
        "hira_options": [
          "ぱん",
          "りょうり",
          "さかな",
          "おちゃ"
        ],
        "romaji": "sakana",
        "vi_meaning": "cái cá"
      },
      {
        "id": "topic_05_food_144",
        "num": 144,
        "sentence_hira": "すずきさんは <u>やさい</u> を/が 探しています。",
        "sentence_kanji": "すずきさんは <u>野菜</u> を/が 探しています。",
        "kanji_target": "野菜",
        "hira_target": "やさい",
        "kanji_options": [
          "コーヒー",
          "野菜",
          "鶏肉",
          "胡椒"
        ],
        "hira_options": [
          "こーひー",
          "やさい",
          "とりにく",
          "こしょう"
        ],
        "romaji": "yasai",
        "vi_meaning": "rau củ"
      },
      {
        "id": "topic_05_food_145",
        "num": 145,
        "sentence_hira": "すずきさんは <u>くだもの</u> を/が 探しています。",
        "sentence_kanji": "すずきさんは <u>果物</u> を/が 探しています。",
        "kanji_target": "果物",
        "hira_target": "くだもの",
        "kanji_options": [
          "コーヒー",
          "鶏肉",
          "果物",
          "胡椒"
        ],
        "hira_options": [
          "こーひー",
          "とりにく",
          "くだもの",
          "こしょう"
        ],
        "romaji": "kudamono",
        "vi_meaning": "trái cây"
      },
      {
        "id": "topic_05_food_146",
        "num": 146,
        "sentence_hira": "すずきさんは <u>りんご</u> を/が 探しています。",
        "sentence_kanji": "すずきさんは <u>りんご</u> を/が 探しています。",
        "kanji_target": "りんご",
        "hira_target": "りんご",
        "kanji_options": [
          "りんご",
          "牛肉",
          "魚",
          "味"
        ],
        "hira_options": [
          "りんご",
          "ぎゅうにく",
          "さかな",
          "あじ"
        ],
        "romaji": "ringo",
        "vi_meaning": "quả táo"
      },
      {
        "id": "topic_05_food_147",
        "num": 147,
        "sentence_hira": "すずきさんは <u>みかん</u> を/が 探しています。",
        "sentence_kanji": "すずきさんは <u>みかん</u> を/が 探しています。",
        "kanji_target": "みかん",
        "hira_target": "みかん",
        "kanji_options": [
          "紅茶",
          "醤油",
          "コーヒー",
          "みかん"
        ],
        "hira_options": [
          "こうちゃ",
          "しょうゆ",
          "こーひー",
          "みかん"
        ],
        "romaji": "mikan",
        "vi_meaning": "quả quýt"
      },
      {
        "id": "topic_05_food_148",
        "num": 148,
        "sentence_hira": "すずきさんは <u>ばなな</u> を/が 探しています。",
        "sentence_kanji": "すずきさんは <u>バナナ</u> を/が 探しています。",
        "kanji_target": "バナナ",
        "hira_target": "ばなな",
        "kanji_options": [
          "砂糖",
          "豚肉",
          "野菜",
          "バナナ"
        ],
        "hira_options": [
          "さとう",
          "ぶたにく",
          "やさい",
          "ばなな"
        ],
        "romaji": "banana",
        "vi_meaning": "quả chuối"
      },
      {
        "id": "topic_05_food_149",
        "num": 149,
        "sentence_hira": "すずきさんは <u>みず</u> を/が 探しています。",
        "sentence_kanji": "すずきさんは <u>水</u> を/が 探しています。",
        "kanji_target": "水",
        "hira_target": "みず",
        "kanji_options": [
          "みかん",
          "水",
          "果物",
          "お酒"
        ],
        "hira_options": [
          "みかん",
          "みず",
          "くだもの",
          "おさけ"
        ],
        "romaji": "mizu",
        "vi_meaning": "nước lọc"
      },
      {
        "id": "topic_05_food_150",
        "num": 150,
        "sentence_hira": "すずきさんは <u>おちゃ</u> を/が 探しています。",
        "sentence_kanji": "すずきさんは <u>お茶</u> を/が 探しています。",
        "kanji_target": "お茶",
        "hira_target": "おちゃ",
        "kanji_options": [
          "料理",
          "お茶",
          "胡椒",
          "野菜"
        ],
        "hira_options": [
          "りょうり",
          "おちゃ",
          "こしょう",
          "やさい"
        ],
        "romaji": "ocha",
        "vi_meaning": "trà xanh"
      },
      {
        "id": "topic_05_food_151",
        "num": 151,
        "sentence_hira": "すずきさんは <u>こうちゃ</u> を/が 探しています。",
        "sentence_kanji": "すずきさんは <u>紅茶</u> を/が 探しています。",
        "kanji_target": "紅茶",
        "hira_target": "こうちゃ",
        "kanji_options": [
          "注文",
          "紅茶",
          "お茶",
          "鶏肉"
        ],
        "hira_options": [
          "ちゅうもん",
          "こうちゃ",
          "おちゃ",
          "とりにく"
        ],
        "romaji": "koucha",
        "vi_meaning": "hồng trà"
      },
      {
        "id": "topic_05_food_152",
        "num": 152,
        "sentence_hira": "すずきさんは <u>こーひー</u> を/が 探しています。",
        "sentence_kanji": "すずきさんは <u>コーヒー</u> を/が 探しています。",
        "kanji_target": "コーヒー",
        "hira_target": "こーひー",
        "kanji_options": [
          "野菜",
          "味",
          "魚",
          "コーヒー"
        ],
        "hira_options": [
          "やさい",
          "あじ",
          "さかな",
          "こーひー"
        ],
        "romaji": "koohii",
        "vi_meaning": "cà phê"
      },
      {
        "id": "topic_05_food_153",
        "num": 153,
        "sentence_hira": "すずきさんは <u>ぎゅうにゅう</u> を/が 探しています。",
        "sentence_kanji": "すずきさんは <u>牛乳</u> を/が 探しています。",
        "kanji_target": "牛乳",
        "hira_target": "ぎゅうにゅう",
        "kanji_options": [
          "牛乳",
          "果物",
          "肉",
          "お茶"
        ],
        "hira_options": [
          "ぎゅうにゅう",
          "くだもの",
          "にく",
          "おちゃ"
        ],
        "romaji": "gyuunyuu",
        "vi_meaning": "sữa tươi"
      },
      {
        "id": "topic_05_food_154",
        "num": 154,
        "sentence_hira": "すずきさんは <u>おさけ</u> を/が 探しています。",
        "sentence_kanji": "すずきさんは <u>お酒</u> を/が 探しています。",
        "kanji_target": "お酒",
        "hira_target": "おさけ",
        "kanji_options": [
          "魚",
          "バナナ",
          "お酒",
          "バナナ"
        ],
        "hira_options": [
          "さかな",
          "ばなな",
          "おさけ",
          "ばなな"
        ],
        "romaji": "osake",
        "vi_meaning": "rượu"
      },
      {
        "id": "topic_05_food_155",
        "num": 155,
        "sentence_hira": "すずきさんは <u>びーる</u> を/が 探しています。",
        "sentence_kanji": "すずきさんは <u>ビール</u> を/が 探しています。",
        "kanji_target": "ビール",
        "hira_target": "びーる",
        "kanji_options": [
          "砂糖",
          "魚",
          "鶏肉",
          "ビール"
        ],
        "hira_options": [
          "さとう",
          "さかな",
          "とりにく",
          "びーる"
        ],
        "romaji": "biiru",
        "vi_meaning": "bia"
      }
    ]
  },
  {
    "id": "topic_06_nature",
    "name": "6. Thiên Nhiên & Thời Tiết",
    "icon": "⛅",
    "desc": "Thời tiết, khí hậu, bốn mùa và thiên nhiên (145 câu)",
    "questions": [
      {
        "id": "topic_06_nature_1",
        "num": 1,
        "sentence_hira": "すずきさんは <u>てんき</u> を/が 探しています。",
        "sentence_kanji": "すずきさんは <u>天気</u> を/が 探しています。",
        "kanji_target": "天気",
        "hira_target": "てんき",
        "kanji_options": [
          "天気予報",
          "天気",
          "夏",
          "太陽"
        ],
        "hira_options": [
          "てんきよほう",
          "てんき",
          "なつ",
          "たいよう"
        ],
        "romaji": "tenki",
        "vi_meaning": "thời tiết"
      },
      {
        "id": "topic_06_nature_2",
        "num": 2,
        "sentence_hira": "すずきさんは <u>あめ</u> を/が 探しています。",
        "sentence_kanji": "すずきさんは <u>雨</u> を/が 探しています。",
        "kanji_target": "雨",
        "hira_target": "あめ",
        "kanji_options": [
          "月",
          "春",
          "雨",
          "林"
        ],
        "hira_options": [
          "つき",
          "はる",
          "あめ",
          "はやし"
        ],
        "romaji": "ame",
        "vi_meaning": "cơn mưa"
      },
      {
        "id": "topic_06_nature_3",
        "num": 3,
        "sentence_hira": "すずきさんは <u>ゆき</u> を/が 探しています。",
        "sentence_kanji": "すずきさんは <u>雪</u> を/が 探しています。",
        "kanji_target": "雪",
        "hira_target": "ゆき",
        "kanji_options": [
          "雪",
          "島",
          "天気予報",
          "空"
        ],
        "hira_options": [
          "ゆき",
          "しま",
          "てんきよほう",
          "そら"
        ],
        "romaji": "yuki",
        "vi_meaning": "tuyết"
      },
      {
        "id": "topic_06_nature_4",
        "num": 4,
        "sentence_hira": "すずきさんは <u>かぜ</u> を/が 探しています。",
        "sentence_kanji": "すずきさんは <u>風</u> を/が 探しています。",
        "kanji_target": "風",
        "hira_target": "かぜ",
        "kanji_options": [
          "風",
          "秋",
          "太陽",
          "草"
        ],
        "hira_options": [
          "かぜ",
          "あき",
          "たいよう",
          "くさ"
        ],
        "romaji": "kaze",
        "vi_meaning": "ngọn gió"
      },
      {
        "id": "topic_06_nature_5",
        "num": 5,
        "sentence_hira": "すずきさんは <u>くも</u> を/が 探しています。",
        "sentence_kanji": "すずきさんは <u>雲</u> を/が 探しています。",
        "kanji_target": "雲",
        "hira_target": "くも",
        "kanji_options": [
          "森",
          "地震",
          "冬",
          "雲"
        ],
        "hira_options": [
          "もり",
          "じしん",
          "ふゆ",
          "くも"
        ],
        "romaji": "kumo",
        "vi_meaning": "đám mây"
      },
      {
        "id": "topic_06_nature_6",
        "num": 6,
        "sentence_hira": "すずきさんは <u>たいよう</u> を/が 探しています。",
        "sentence_kanji": "すずきさんは <u>太陽</u> を/が 探しています。",
        "kanji_target": "太陽",
        "hira_target": "たいよう",
        "kanji_options": [
          "林",
          "太陽",
          "天気",
          "夏"
        ],
        "hira_options": [
          "はやし",
          "たいよう",
          "てんき",
          "なつ"
        ],
        "romaji": "taiyou",
        "vi_meaning": "mặt trời"
      },
      {
        "id": "topic_06_nature_7",
        "num": 7,
        "sentence_hira": "すずきさんは <u>つき</u> を/が 探しています。",
        "sentence_kanji": "すずきさんは <u>月</u> を/が 探しています。",
        "kanji_target": "月",
        "hira_target": "つき",
        "kanji_options": [
          "春",
          "花",
          "月",
          "草"
        ],
        "hira_options": [
          "はる",
          "はな",
          "つき",
          "くさ"
        ],
        "romaji": "tsuki",
        "vi_meaning": "mặt trăng"
      },
      {
        "id": "topic_06_nature_8",
        "num": 8,
        "sentence_hira": "すずきさんは <u>そら</u> を/が 探しています。",
        "sentence_kanji": "すずきさんは <u>空</u> を/が 探しています。",
        "kanji_target": "空",
        "hira_target": "そら",
        "kanji_options": [
          "空",
          "天気",
          "台風",
          "月"
        ],
        "hira_options": [
          "そら",
          "てんき",
          "たいふう",
          "つき"
        ],
        "romaji": "sora",
        "vi_meaning": "bầu trời"
      },
      {
        "id": "topic_06_nature_9",
        "num": 9,
        "sentence_hira": "すずきさんは <u>ほし</u> を/が 探しています。",
        "sentence_kanji": "すずきさんは <u>星</u> を/が 探しています。",
        "kanji_target": "星",
        "hira_target": "ほし",
        "kanji_options": [
          "星",
          "雪",
          "雨",
          "太陽"
        ],
        "hira_options": [
          "ほし",
          "ゆき",
          "あめ",
          "たいよう"
        ],
        "romaji": "hoshi",
        "vi_meaning": "ngôi sao"
      },
      {
        "id": "topic_06_nature_10",
        "num": 10,
        "sentence_hira": "すずきさんは <u>やま</u> を/が 探しています。",
        "sentence_kanji": "すずきさんは <u>山</u> を/が 探しています。",
        "kanji_target": "山",
        "hira_target": "やま",
        "kanji_options": [
          "山",
          "夏",
          "雲",
          "雲"
        ],
        "hira_options": [
          "やま",
          "なつ",
          "くも",
          "くも"
        ],
        "romaji": "yama",
        "vi_meaning": "ngọn núi"
      },
      {
        "id": "topic_06_nature_11",
        "num": 11,
        "sentence_hira": "すずきさんは <u>かわ</u> を/が 探しています。",
        "sentence_kanji": "すずきさんは <u>川</u> を/が 探しています。",
        "kanji_target": "川",
        "hira_target": "かわ",
        "kanji_options": [
          "雨",
          "草",
          "山",
          "川"
        ],
        "hira_options": [
          "あめ",
          "くさ",
          "やま",
          "かわ"
        ],
        "romaji": "kawa",
        "vi_meaning": "con sông"
      },
      {
        "id": "topic_06_nature_12",
        "num": 12,
        "sentence_hira": "すずきさんは <u>うみ</u> を/が 探しています。",
        "sentence_kanji": "すずきさんは <u>海</u> を/が 探しています。",
        "kanji_target": "海",
        "hira_target": "うみ",
        "kanji_options": [
          "夏",
          "草",
          "海",
          "花"
        ],
        "hira_options": [
          "なつ",
          "くさ",
          "うみ",
          "はな"
        ],
        "romaji": "umi",
        "vi_meaning": "bờ biển"
      },
      {
        "id": "topic_06_nature_13",
        "num": 13,
        "sentence_hira": "すずきさんは <u>しま</u> を/が 探しています。",
        "sentence_kanji": "すずきさんは <u>島</u> を/が 探しています。",
        "kanji_target": "島",
        "hira_target": "しま",
        "kanji_options": [
          "森",
          "島",
          "山",
          "月"
        ],
        "hira_options": [
          "もり",
          "しま",
          "やま",
          "つき"
        ],
        "romaji": "shima",
        "vi_meaning": "hòn đảo"
      },
      {
        "id": "topic_06_nature_14",
        "num": 14,
        "sentence_hira": "すずきさんは <u>もり</u> を/が 探しています。",
        "sentence_kanji": "すずきさんは <u>森</u> を/が 探しています。",
        "kanji_target": "森",
        "hira_target": "もり",
        "kanji_options": [
          "星",
          "森",
          "花",
          "林"
        ],
        "hira_options": [
          "ほし",
          "もり",
          "はな",
          "はやし"
        ],
        "romaji": "mori",
        "vi_meaning": "rậm rạp/rừng"
      },
      {
        "id": "topic_06_nature_15",
        "num": 15,
        "sentence_hira": "すずきさんは <u>はやし</u> を/が 探しています。",
        "sentence_kanji": "すずきさんは <u>林</u> を/が 探しています。",
        "kanji_target": "林",
        "hira_target": "はやし",
        "kanji_options": [
          "山",
          "風",
          "花",
          "林"
        ],
        "hira_options": [
          "やま",
          "かぜ",
          "はな",
          "はやし"
        ],
        "romaji": "hayashi",
        "vi_meaning": "rừng thưa"
      },
      {
        "id": "topic_06_nature_16",
        "num": 16,
        "sentence_hira": "すずきさんは <u>はな</u> を/が 探しています。",
        "sentence_kanji": "すずきさんは <u>花</u> を/が 探しています。",
        "kanji_target": "花",
        "hira_target": "はな",
        "kanji_options": [
          "月",
          "花",
          "雪",
          "地震"
        ],
        "hira_options": [
          "つき",
          "はな",
          "ゆき",
          "じしん"
        ],
        "romaji": "hana",
        "vi_meaning": "bông hoa"
      },
      {
        "id": "topic_06_nature_17",
        "num": 17,
        "sentence_hira": "すず<u>き</u>さんは き を/が 探しています。",
        "sentence_kanji": "すず<u>木</u>さんは き を/が 探しています。",
        "kanji_target": "木",
        "hira_target": "き",
        "kanji_options": [
          "花",
          "雪",
          "木",
          "雲"
        ],
        "hira_options": [
          "はな",
          "ゆき",
          "き",
          "くも"
        ],
        "romaji": "ki",
        "vi_meaning": "cây cối"
      },
      {
        "id": "topic_06_nature_18",
        "num": 18,
        "sentence_hira": "すずきさんは <u>くさ</u> を/が 探しています。",
        "sentence_kanji": "すずきさんは <u>草</u> を/が 探しています。",
        "kanji_target": "草",
        "hira_target": "くさ",
        "kanji_options": [
          "春",
          "木",
          "草",
          "地震"
        ],
        "hira_options": [
          "はる",
          "き",
          "くさ",
          "じしん"
        ],
        "romaji": "kusa",
        "vi_meaning": "ngọn cỏ"
      },
      {
        "id": "topic_06_nature_19",
        "num": 19,
        "sentence_hira": "すずきさんは <u>じしん</u> を/が 探しています。",
        "sentence_kanji": "すずきさんは <u>地震</u> を/が 探しています。",
        "kanji_target": "地震",
        "hira_target": "じしん",
        "kanji_options": [
          "天気予報",
          "天気",
          "地震",
          "海"
        ],
        "hira_options": [
          "てんきよほう",
          "てんき",
          "じしん",
          "うみ"
        ],
        "romaji": "jishin",
        "vi_meaning": "trận động đất"
      },
      {
        "id": "topic_06_nature_20",
        "num": 20,
        "sentence_hira": "すずきさんは <u>たいふう</u> を/が 探しています。",
        "sentence_kanji": "すずきさんは <u>台風</u> を/が 探しています。",
        "kanji_target": "台風",
        "hira_target": "たいふう",
        "kanji_options": [
          "台風",
          "月",
          "星",
          "季節"
        ],
        "hira_options": [
          "たいふう",
          "つき",
          "ほし",
          "きせつ"
        ],
        "romaji": "taifuu",
        "vi_meaning": "cơn bão"
      },
      {
        "id": "topic_06_nature_21",
        "num": 21,
        "sentence_hira": "すずきさんは <u>きせつ</u> を/が 探しています。",
        "sentence_kanji": "すずきさんは <u>季節</u> を/が 探しています。",
        "kanji_target": "季節",
        "hira_target": "きせつ",
        "kanji_options": [
          "星",
          "季節",
          "空",
          "天気"
        ],
        "hira_options": [
          "ほし",
          "きせつ",
          "そら",
          "てんき"
        ],
        "romaji": "kisetsu",
        "vi_meaning": "mùa màng"
      },
      {
        "id": "topic_06_nature_22",
        "num": 22,
        "sentence_hira": "すずきさんは <u>はる</u> を/が 探しています。",
        "sentence_kanji": "すずきさんは <u>春</u> を/が 探しています。",
        "kanji_target": "春",
        "hira_target": "はる",
        "kanji_options": [
          "春",
          "天気予報",
          "島",
          "空"
        ],
        "hira_options": [
          "はる",
          "てんきよほう",
          "しま",
          "そら"
        ],
        "romaji": "haru",
        "vi_meaning": "mùa xuân"
      },
      {
        "id": "topic_06_nature_23",
        "num": 23,
        "sentence_hira": "すずきさんは <u>なつ</u> を/が 探しています。",
        "sentence_kanji": "すずきさんは <u>夏</u> を/が 探しています。",
        "kanji_target": "夏",
        "hira_target": "なつ",
        "kanji_options": [
          "台風",
          "天気",
          "夏",
          "風"
        ],
        "hira_options": [
          "たいふう",
          "てんき",
          "なつ",
          "かぜ"
        ],
        "romaji": "natsu",
        "vi_meaning": "mùa hạ"
      },
      {
        "id": "topic_06_nature_24",
        "num": 24,
        "sentence_hira": "すずきさんは <u>あき</u> を/が 探しています。",
        "sentence_kanji": "すずきさんは <u>秋</u> を/が 探しています。",
        "kanji_target": "秋",
        "hira_target": "あき",
        "kanji_options": [
          "天気",
          "秋",
          "太陽",
          "月"
        ],
        "hira_options": [
          "てんき",
          "あき",
          "たいよう",
          "つき"
        ],
        "romaji": "aki",
        "vi_meaning": "mùa thu"
      },
      {
        "id": "topic_06_nature_25",
        "num": 25,
        "sentence_hira": "すずきさんは <u>ふゆ</u> を/が 探しています。",
        "sentence_kanji": "すずきさんは <u>冬</u> を/が 探しています。",
        "kanji_target": "冬",
        "hira_target": "ふゆ",
        "kanji_options": [
          "台風",
          "天気予報",
          "冬",
          "季節"
        ],
        "hira_options": [
          "たいふう",
          "てんきよほう",
          "ふゆ",
          "きせつ"
        ],
        "romaji": "fuyu",
        "vi_meaning": "mùa đông"
      },
      {
        "id": "topic_06_nature_26",
        "num": 26,
        "sentence_hira": "すずきさんは <u>てんきよほう</u> を/が 探しています。",
        "sentence_kanji": "すずきさんは <u>天気予報</u> を/が 探しています。",
        "kanji_target": "天気予報",
        "hira_target": "てんきよほう",
        "kanji_options": [
          "森",
          "林",
          "天気予報",
          "雪"
        ],
        "hira_options": [
          "もり",
          "はやし",
          "てんきよほう",
          "ゆき"
        ],
        "romaji": "tenkiyohou",
        "vi_meaning": "dự báo thời tiết"
      },
      {
        "id": "topic_06_nature_27",
        "num": 27,
        "sentence_hira": "すずきさんは <u>てんき</u> を/が 探しています。",
        "sentence_kanji": "すずきさんは <u>天気</u> を/が 探しています。",
        "kanji_target": "天気",
        "hira_target": "てんき",
        "kanji_options": [
          "地震",
          "秋",
          "天気",
          "月"
        ],
        "hira_options": [
          "じしん",
          "あき",
          "てんき",
          "つき"
        ],
        "romaji": "tenki",
        "vi_meaning": "thời tiết"
      },
      {
        "id": "topic_06_nature_28",
        "num": 28,
        "sentence_hira": "すずきさんは <u>あめ</u> を/が 探しています。",
        "sentence_kanji": "すずきさんは <u>雨</u> を/が 探しています。",
        "kanji_target": "雨",
        "hira_target": "あめ",
        "kanji_options": [
          "川",
          "雨",
          "木",
          "空"
        ],
        "hira_options": [
          "かわ",
          "あめ",
          "き",
          "そら"
        ],
        "romaji": "ame",
        "vi_meaning": "cơn mưa"
      },
      {
        "id": "topic_06_nature_29",
        "num": 29,
        "sentence_hira": "すずきさんは <u>ゆき</u> を/が 探しています。",
        "sentence_kanji": "すずきさんは <u>雪</u> を/が 探しています。",
        "kanji_target": "雪",
        "hira_target": "ゆき",
        "kanji_options": [
          "星",
          "秋",
          "雪",
          "星"
        ],
        "hira_options": [
          "ほし",
          "あき",
          "ゆき",
          "ほし"
        ],
        "romaji": "yuki",
        "vi_meaning": "tuyết"
      },
      {
        "id": "topic_06_nature_30",
        "num": 30,
        "sentence_hira": "すずきさんは <u>かぜ</u> を/が 探しています。",
        "sentence_kanji": "すずきさんは <u>風</u> を/が 探しています。",
        "kanji_target": "風",
        "hira_target": "かぜ",
        "kanji_options": [
          "風",
          "冬",
          "雨",
          "夏"
        ],
        "hira_options": [
          "かぜ",
          "ふゆ",
          "あめ",
          "なつ"
        ],
        "romaji": "kaze",
        "vi_meaning": "ngọn gió"
      },
      {
        "id": "topic_06_nature_31",
        "num": 31,
        "sentence_hira": "すずきさんは <u>くも</u> を/が 探しています。",
        "sentence_kanji": "すずきさんは <u>雲</u> を/が 探しています。",
        "kanji_target": "雲",
        "hira_target": "くも",
        "kanji_options": [
          "林",
          "林",
          "木",
          "雲"
        ],
        "hira_options": [
          "はやし",
          "はやし",
          "き",
          "くも"
        ],
        "romaji": "kumo",
        "vi_meaning": "đám mây"
      },
      {
        "id": "topic_06_nature_32",
        "num": 32,
        "sentence_hira": "すずきさんは <u>たいよう</u> を/が 探しています。",
        "sentence_kanji": "すずきさんは <u>太陽</u> を/が 探しています。",
        "kanji_target": "太陽",
        "hira_target": "たいよう",
        "kanji_options": [
          "雨",
          "山",
          "空",
          "太陽"
        ],
        "hira_options": [
          "あめ",
          "やま",
          "そら",
          "たいよう"
        ],
        "romaji": "taiyou",
        "vi_meaning": "mặt trời"
      },
      {
        "id": "topic_06_nature_33",
        "num": 33,
        "sentence_hira": "すずきさんは <u>つき</u> を/が 探しています。",
        "sentence_kanji": "すずきさんは <u>月</u> を/が 探しています。",
        "kanji_target": "月",
        "hira_target": "つき",
        "kanji_options": [
          "月",
          "雨",
          "海",
          "冬"
        ],
        "hira_options": [
          "つき",
          "あめ",
          "うみ",
          "ふゆ"
        ],
        "romaji": "tsuki",
        "vi_meaning": "mặt trăng"
      },
      {
        "id": "topic_06_nature_34",
        "num": 34,
        "sentence_hira": "すずきさんは <u>そら</u> を/が 探しています。",
        "sentence_kanji": "すずきさんは <u>空</u> を/が 探しています。",
        "kanji_target": "空",
        "hira_target": "そら",
        "kanji_options": [
          "月",
          "雨",
          "空",
          "雨"
        ],
        "hira_options": [
          "つき",
          "あめ",
          "そら",
          "あめ"
        ],
        "romaji": "sora",
        "vi_meaning": "bầu trời"
      },
      {
        "id": "topic_06_nature_35",
        "num": 35,
        "sentence_hira": "すずきさんは <u>ほし</u> を/が 探しています。",
        "sentence_kanji": "すずきさんは <u>星</u> を/が 探しています。",
        "kanji_target": "星",
        "hira_target": "ほし",
        "kanji_options": [
          "夏",
          "星",
          "空",
          "天気予報"
        ],
        "hira_options": [
          "なつ",
          "ほし",
          "そら",
          "てんきよほう"
        ],
        "romaji": "hoshi",
        "vi_meaning": "ngôi sao"
      },
      {
        "id": "topic_06_nature_36",
        "num": 36,
        "sentence_hira": "すずきさんは <u>やま</u> を/が 探しています。",
        "sentence_kanji": "すずきさんは <u>山</u> を/が 探しています。",
        "kanji_target": "山",
        "hira_target": "やま",
        "kanji_options": [
          "雲",
          "山",
          "天気予報",
          "風"
        ],
        "hira_options": [
          "くも",
          "やま",
          "てんきよほう",
          "かぜ"
        ],
        "romaji": "yama",
        "vi_meaning": "ngọn núi"
      },
      {
        "id": "topic_06_nature_37",
        "num": 37,
        "sentence_hira": "すずきさんは <u>かわ</u> を/が 探しています。",
        "sentence_kanji": "すずきさんは <u>川</u> を/が 探しています。",
        "kanji_target": "川",
        "hira_target": "かわ",
        "kanji_options": [
          "林",
          "川",
          "木",
          "草"
        ],
        "hira_options": [
          "はやし",
          "かわ",
          "き",
          "くさ"
        ],
        "romaji": "kawa",
        "vi_meaning": "con sông"
      },
      {
        "id": "topic_06_nature_38",
        "num": 38,
        "sentence_hira": "すずきさんは <u>うみ</u> を/が 探しています。",
        "sentence_kanji": "すずきさんは <u>海</u> を/が 探しています。",
        "kanji_target": "海",
        "hira_target": "うみ",
        "kanji_options": [
          "台風",
          "空",
          "海",
          "月"
        ],
        "hira_options": [
          "たいふう",
          "そら",
          "うみ",
          "つき"
        ],
        "romaji": "umi",
        "vi_meaning": "bờ biển"
      },
      {
        "id": "topic_06_nature_39",
        "num": 39,
        "sentence_hira": "すずきさんは <u>しま</u> を/が 探しています。",
        "sentence_kanji": "すずきさんは <u>島</u> を/が 探しています。",
        "kanji_target": "島",
        "hira_target": "しま",
        "kanji_options": [
          "島",
          "空",
          "秋",
          "花"
        ],
        "hira_options": [
          "しま",
          "そら",
          "あき",
          "はな"
        ],
        "romaji": "shima",
        "vi_meaning": "hòn đảo"
      },
      {
        "id": "topic_06_nature_40",
        "num": 40,
        "sentence_hira": "すずきさんは <u>もり</u> を/が 探しています。",
        "sentence_kanji": "すずきさんは <u>森</u> を/が 探しています。",
        "kanji_target": "森",
        "hira_target": "もり",
        "kanji_options": [
          "雲",
          "木",
          "森",
          "月"
        ],
        "hira_options": [
          "くも",
          "き",
          "もり",
          "つき"
        ],
        "romaji": "mori",
        "vi_meaning": "rậm rạp/rừng"
      },
      {
        "id": "topic_06_nature_41",
        "num": 41,
        "sentence_hira": "すずきさんは <u>はやし</u> を/が 探しています。",
        "sentence_kanji": "すずきさんは <u>林</u> を/が 探しています。",
        "kanji_target": "林",
        "hira_target": "はやし",
        "kanji_options": [
          "林",
          "太陽",
          "季節",
          "山"
        ],
        "hira_options": [
          "はやし",
          "たいよう",
          "きせつ",
          "やま"
        ],
        "romaji": "hayashi",
        "vi_meaning": "rừng thưa"
      },
      {
        "id": "topic_06_nature_42",
        "num": 42,
        "sentence_hira": "すずきさんは <u>はな</u> を/が 探しています。",
        "sentence_kanji": "すずきさんは <u>花</u> を/が 探しています。",
        "kanji_target": "花",
        "hira_target": "はな",
        "kanji_options": [
          "星",
          "雲",
          "冬",
          "花"
        ],
        "hira_options": [
          "ほし",
          "くも",
          "ふゆ",
          "はな"
        ],
        "romaji": "hana",
        "vi_meaning": "bông hoa"
      },
      {
        "id": "topic_06_nature_43",
        "num": 43,
        "sentence_hira": "すず<u>き</u>さんは き を/が 探しています。",
        "sentence_kanji": "すず<u>木</u>さんは き を/が 探しています。",
        "kanji_target": "木",
        "hira_target": "き",
        "kanji_options": [
          "森",
          "台風",
          "海",
          "木"
        ],
        "hira_options": [
          "もり",
          "たいふう",
          "うみ",
          "き"
        ],
        "romaji": "ki",
        "vi_meaning": "cây cối"
      },
      {
        "id": "topic_06_nature_44",
        "num": 44,
        "sentence_hira": "すずきさんは <u>くさ</u> を/が 探しています。",
        "sentence_kanji": "すずきさんは <u>草</u> を/が 探しています。",
        "kanji_target": "草",
        "hira_target": "くさ",
        "kanji_options": [
          "秋",
          "草",
          "花",
          "秋"
        ],
        "hira_options": [
          "あき",
          "くさ",
          "はな",
          "あき"
        ],
        "romaji": "kusa",
        "vi_meaning": "ngọn cỏ"
      },
      {
        "id": "topic_06_nature_45",
        "num": 45,
        "sentence_hira": "すずきさんは <u>じしん</u> を/が 探しています。",
        "sentence_kanji": "すずきさんは <u>地震</u> を/が 探しています。",
        "kanji_target": "地震",
        "hira_target": "じしん",
        "kanji_options": [
          "空",
          "地震",
          "冬",
          "島"
        ],
        "hira_options": [
          "そら",
          "じしん",
          "ふゆ",
          "しま"
        ],
        "romaji": "jishin",
        "vi_meaning": "trận động đất"
      },
      {
        "id": "topic_06_nature_46",
        "num": 46,
        "sentence_hira": "すずきさんは <u>たいふう</u> を/が 探しています。",
        "sentence_kanji": "すずきさんは <u>台風</u> を/が 探しています。",
        "kanji_target": "台風",
        "hira_target": "たいふう",
        "kanji_options": [
          "風",
          "雲",
          "台風",
          "島"
        ],
        "hira_options": [
          "かぜ",
          "くも",
          "たいふう",
          "しま"
        ],
        "romaji": "taifuu",
        "vi_meaning": "cơn bão"
      },
      {
        "id": "topic_06_nature_47",
        "num": 47,
        "sentence_hira": "すずきさんは <u>きせつ</u> を/が 探しています。",
        "sentence_kanji": "すずきさんは <u>季節</u> を/が 探しています。",
        "kanji_target": "季節",
        "hira_target": "きせつ",
        "kanji_options": [
          "木",
          "雲",
          "島",
          "季節"
        ],
        "hira_options": [
          "き",
          "くも",
          "しま",
          "きせつ"
        ],
        "romaji": "kisetsu",
        "vi_meaning": "mùa màng"
      },
      {
        "id": "topic_06_nature_48",
        "num": 48,
        "sentence_hira": "すずきさんは <u>はる</u> を/が 探しています。",
        "sentence_kanji": "すずきさんは <u>春</u> を/が 探しています。",
        "kanji_target": "春",
        "hira_target": "はる",
        "kanji_options": [
          "春",
          "木",
          "夏",
          "夏"
        ],
        "hira_options": [
          "はる",
          "き",
          "なつ",
          "なつ"
        ],
        "romaji": "haru",
        "vi_meaning": "mùa xuân"
      },
      {
        "id": "topic_06_nature_49",
        "num": 49,
        "sentence_hira": "すずきさんは <u>なつ</u> を/が 探しています。",
        "sentence_kanji": "すずきさんは <u>夏</u> を/が 探しています。",
        "kanji_target": "夏",
        "hira_target": "なつ",
        "kanji_options": [
          "海",
          "夏",
          "雪",
          "川"
        ],
        "hira_options": [
          "うみ",
          "なつ",
          "ゆき",
          "かわ"
        ],
        "romaji": "natsu",
        "vi_meaning": "mùa hạ"
      },
      {
        "id": "topic_06_nature_50",
        "num": 50,
        "sentence_hira": "すずきさんは <u>あき</u> を/が 探しています。",
        "sentence_kanji": "すずきさんは <u>秋</u> を/が 探しています。",
        "kanji_target": "秋",
        "hira_target": "あき",
        "kanji_options": [
          "太陽",
          "天気予報",
          "秋",
          "台風"
        ],
        "hira_options": [
          "たいよう",
          "てんきよほう",
          "あき",
          "たいふう"
        ],
        "romaji": "aki",
        "vi_meaning": "mùa thu"
      },
      {
        "id": "topic_06_nature_51",
        "num": 51,
        "sentence_hira": "すずきさんは <u>ふゆ</u> を/が 探しています。",
        "sentence_kanji": "すずきさんは <u>冬</u> を/が 探しています。",
        "kanji_target": "冬",
        "hira_target": "ふゆ",
        "kanji_options": [
          "林",
          "太陽",
          "冬",
          "月"
        ],
        "hira_options": [
          "はやし",
          "たいよう",
          "ふゆ",
          "つき"
        ],
        "romaji": "fuyu",
        "vi_meaning": "mùa đông"
      },
      {
        "id": "topic_06_nature_52",
        "num": 52,
        "sentence_hira": "すずきさんは <u>てんきよほう</u> を/が 探しています。",
        "sentence_kanji": "すずきさんは <u>天気予報</u> を/が 探しています。",
        "kanji_target": "天気予報",
        "hira_target": "てんきよほう",
        "kanji_options": [
          "花",
          "秋",
          "天気予報",
          "森"
        ],
        "hira_options": [
          "はな",
          "あき",
          "てんきよほう",
          "もり"
        ],
        "romaji": "tenkiyohou",
        "vi_meaning": "dự báo thời tiết"
      },
      {
        "id": "topic_06_nature_53",
        "num": 53,
        "sentence_hira": "すずきさんは <u>てんき</u> を/が 探しています。",
        "sentence_kanji": "すずきさんは <u>天気</u> を/が 探しています。",
        "kanji_target": "天気",
        "hira_target": "てんき",
        "kanji_options": [
          "冬",
          "季節",
          "天気",
          "太陽"
        ],
        "hira_options": [
          "ふゆ",
          "きせつ",
          "てんき",
          "たいよう"
        ],
        "romaji": "tenki",
        "vi_meaning": "thời tiết"
      },
      {
        "id": "topic_06_nature_54",
        "num": 54,
        "sentence_hira": "すずきさんは <u>あめ</u> を/が 探しています。",
        "sentence_kanji": "すずきさんは <u>雨</u> を/が 探しています。",
        "kanji_target": "雨",
        "hira_target": "あめ",
        "kanji_options": [
          "雨",
          "地震",
          "木",
          "川"
        ],
        "hira_options": [
          "あめ",
          "じしん",
          "き",
          "かわ"
        ],
        "romaji": "ame",
        "vi_meaning": "cơn mưa"
      },
      {
        "id": "topic_06_nature_55",
        "num": 55,
        "sentence_hira": "すずきさんは <u>ゆき</u> を/が 探しています。",
        "sentence_kanji": "すずきさんは <u>雪</u> を/が 探しています。",
        "kanji_target": "雪",
        "hira_target": "ゆき",
        "kanji_options": [
          "星",
          "森",
          "太陽",
          "雪"
        ],
        "hira_options": [
          "ほし",
          "もり",
          "たいよう",
          "ゆき"
        ],
        "romaji": "yuki",
        "vi_meaning": "tuyết"
      },
      {
        "id": "topic_06_nature_56",
        "num": 56,
        "sentence_hira": "すずきさんは <u>かぜ</u> を/が 探しています。",
        "sentence_kanji": "すずきさんは <u>風</u> を/が 探しています。",
        "kanji_target": "風",
        "hira_target": "かぜ",
        "kanji_options": [
          "風",
          "太陽",
          "星",
          "木"
        ],
        "hira_options": [
          "かぜ",
          "たいよう",
          "ほし",
          "き"
        ],
        "romaji": "kaze",
        "vi_meaning": "ngọn gió"
      },
      {
        "id": "topic_06_nature_57",
        "num": 57,
        "sentence_hira": "すずきさんは <u>くも</u> を/が 探しています。",
        "sentence_kanji": "すずきさんは <u>雲</u> を/が 探しています。",
        "kanji_target": "雲",
        "hira_target": "くも",
        "kanji_options": [
          "春",
          "太陽",
          "雲",
          "空"
        ],
        "hira_options": [
          "はる",
          "たいよう",
          "くも",
          "そら"
        ],
        "romaji": "kumo",
        "vi_meaning": "đám mây"
      },
      {
        "id": "topic_06_nature_58",
        "num": 58,
        "sentence_hira": "すずきさんは <u>たいよう</u> を/が 探しています。",
        "sentence_kanji": "すずきさんは <u>太陽</u> を/が 探しています。",
        "kanji_target": "太陽",
        "hira_target": "たいよう",
        "kanji_options": [
          "太陽",
          "月",
          "山",
          "夏"
        ],
        "hira_options": [
          "たいよう",
          "つき",
          "やま",
          "なつ"
        ],
        "romaji": "taiyou",
        "vi_meaning": "mặt trời"
      },
      {
        "id": "topic_06_nature_59",
        "num": 59,
        "sentence_hira": "すずきさんは <u>つき</u> を/が 探しています。",
        "sentence_kanji": "すずきさんは <u>月</u> を/が 探しています。",
        "kanji_target": "月",
        "hira_target": "つき",
        "kanji_options": [
          "月",
          "海",
          "川",
          "雲"
        ],
        "hira_options": [
          "つき",
          "うみ",
          "かわ",
          "くも"
        ],
        "romaji": "tsuki",
        "vi_meaning": "mặt trăng"
      },
      {
        "id": "topic_06_nature_60",
        "num": 60,
        "sentence_hira": "すずきさんは <u>そら</u> を/が 探しています。",
        "sentence_kanji": "すずきさんは <u>空</u> を/が 探しています。",
        "kanji_target": "空",
        "hira_target": "そら",
        "kanji_options": [
          "川",
          "空",
          "雪",
          "森"
        ],
        "hira_options": [
          "かわ",
          "そら",
          "ゆき",
          "もり"
        ],
        "romaji": "sora",
        "vi_meaning": "bầu trời"
      },
      {
        "id": "topic_06_nature_61",
        "num": 61,
        "sentence_hira": "すずきさんは <u>ほし</u> を/が 探しています。",
        "sentence_kanji": "すずきさんは <u>星</u> を/が 探しています。",
        "kanji_target": "星",
        "hira_target": "ほし",
        "kanji_options": [
          "星",
          "木",
          "冬",
          "雲"
        ],
        "hira_options": [
          "ほし",
          "き",
          "ふゆ",
          "くも"
        ],
        "romaji": "hoshi",
        "vi_meaning": "ngôi sao"
      },
      {
        "id": "topic_06_nature_62",
        "num": 62,
        "sentence_hira": "すずきさんは <u>やま</u> を/が 探しています。",
        "sentence_kanji": "すずきさんは <u>山</u> を/が 探しています。",
        "kanji_target": "山",
        "hira_target": "やま",
        "kanji_options": [
          "山",
          "空",
          "川",
          "海"
        ],
        "hira_options": [
          "やま",
          "そら",
          "かわ",
          "うみ"
        ],
        "romaji": "yama",
        "vi_meaning": "ngọn núi"
      },
      {
        "id": "topic_06_nature_63",
        "num": 63,
        "sentence_hira": "すずきさんは <u>かわ</u> を/が 探しています。",
        "sentence_kanji": "すずきさんは <u>川</u> を/が 探しています。",
        "kanji_target": "川",
        "hira_target": "かわ",
        "kanji_options": [
          "川",
          "天気予報",
          "雪",
          "草"
        ],
        "hira_options": [
          "かわ",
          "てんきよほう",
          "ゆき",
          "くさ"
        ],
        "romaji": "kawa",
        "vi_meaning": "con sông"
      },
      {
        "id": "topic_06_nature_64",
        "num": 64,
        "sentence_hira": "すずきさんは <u>うみ</u> を/が 探しています。",
        "sentence_kanji": "すずきさんは <u>海</u> を/が 探しています。",
        "kanji_target": "海",
        "hira_target": "うみ",
        "kanji_options": [
          "夏",
          "天気予報",
          "海",
          "星"
        ],
        "hira_options": [
          "なつ",
          "てんきよほう",
          "うみ",
          "ほし"
        ],
        "romaji": "umi",
        "vi_meaning": "bờ biển"
      },
      {
        "id": "topic_06_nature_65",
        "num": 65,
        "sentence_hira": "すずきさんは <u>しま</u> を/が 探しています。",
        "sentence_kanji": "すずきさんは <u>島</u> を/が 探しています。",
        "kanji_target": "島",
        "hira_target": "しま",
        "kanji_options": [
          "空",
          "天気予報",
          "星",
          "島"
        ],
        "hira_options": [
          "そら",
          "てんきよほう",
          "ほし",
          "しま"
        ],
        "romaji": "shima",
        "vi_meaning": "hòn đảo"
      },
      {
        "id": "topic_06_nature_66",
        "num": 66,
        "sentence_hira": "すずきさんは <u>もり</u> を/が 探しています。",
        "sentence_kanji": "すずきさんは <u>森</u> を/が 探しています。",
        "kanji_target": "森",
        "hira_target": "もり",
        "kanji_options": [
          "森",
          "天気予報",
          "春",
          "雪"
        ],
        "hira_options": [
          "もり",
          "てんきよほう",
          "はる",
          "ゆき"
        ],
        "romaji": "mori",
        "vi_meaning": "rậm rạp/rừng"
      },
      {
        "id": "topic_06_nature_67",
        "num": 67,
        "sentence_hira": "すずきさんは <u>はやし</u> を/が 探しています。",
        "sentence_kanji": "すずきさんは <u>林</u> を/が 探しています。",
        "kanji_target": "林",
        "hira_target": "はやし",
        "kanji_options": [
          "草",
          "春",
          "林",
          "草"
        ],
        "hira_options": [
          "くさ",
          "はる",
          "はやし",
          "くさ"
        ],
        "romaji": "hayashi",
        "vi_meaning": "rừng thưa"
      },
      {
        "id": "topic_06_nature_68",
        "num": 68,
        "sentence_hira": "すずきさんは <u>はな</u> を/が 探しています。",
        "sentence_kanji": "すずきさんは <u>花</u> を/が 探しています。",
        "kanji_target": "花",
        "hira_target": "はな",
        "kanji_options": [
          "花",
          "月",
          "島",
          "雪"
        ],
        "hira_options": [
          "はな",
          "つき",
          "しま",
          "ゆき"
        ],
        "romaji": "hana",
        "vi_meaning": "bông hoa"
      },
      {
        "id": "topic_06_nature_69",
        "num": 69,
        "sentence_hira": "すず<u>き</u>さんは き を/が 探しています。",
        "sentence_kanji": "すず<u>木</u>さんは き を/が 探しています。",
        "kanji_target": "木",
        "hira_target": "き",
        "kanji_options": [
          "風",
          "木",
          "星",
          "島"
        ],
        "hira_options": [
          "かぜ",
          "き",
          "ほし",
          "しま"
        ],
        "romaji": "ki",
        "vi_meaning": "cây cối"
      },
      {
        "id": "topic_06_nature_70",
        "num": 70,
        "sentence_hira": "すずきさんは <u>くさ</u> を/が 探しています。",
        "sentence_kanji": "すずきさんは <u>草</u> を/が 探しています。",
        "kanji_target": "草",
        "hira_target": "くさ",
        "kanji_options": [
          "星",
          "草",
          "台風",
          "風"
        ],
        "hira_options": [
          "ほし",
          "くさ",
          "たいふう",
          "かぜ"
        ],
        "romaji": "kusa",
        "vi_meaning": "ngọn cỏ"
      },
      {
        "id": "topic_06_nature_71",
        "num": 71,
        "sentence_hira": "すずきさんは <u>じしん</u> を/が 探しています。",
        "sentence_kanji": "すずきさんは <u>地震</u> を/が 探しています。",
        "kanji_target": "地震",
        "hira_target": "じしん",
        "kanji_options": [
          "林",
          "夏",
          "風",
          "地震"
        ],
        "hira_options": [
          "はやし",
          "なつ",
          "かぜ",
          "じしん"
        ],
        "romaji": "jishin",
        "vi_meaning": "trận động đất"
      },
      {
        "id": "topic_06_nature_72",
        "num": 72,
        "sentence_hira": "すずきさんは <u>たいふう</u> を/が 探しています。",
        "sentence_kanji": "すずきさんは <u>台風</u> を/が 探しています。",
        "kanji_target": "台風",
        "hira_target": "たいふう",
        "kanji_options": [
          "林",
          "雨",
          "台風",
          "月"
        ],
        "hira_options": [
          "はやし",
          "あめ",
          "たいふう",
          "つき"
        ],
        "romaji": "taifuu",
        "vi_meaning": "cơn bão"
      },
      {
        "id": "topic_06_nature_73",
        "num": 73,
        "sentence_hira": "すずきさんは <u>きせつ</u> を/が 探しています。",
        "sentence_kanji": "すずきさんは <u>季節</u> を/が 探しています。",
        "kanji_target": "季節",
        "hira_target": "きせつ",
        "kanji_options": [
          "季節",
          "川",
          "太陽",
          "月"
        ],
        "hira_options": [
          "きせつ",
          "かわ",
          "たいよう",
          "つき"
        ],
        "romaji": "kisetsu",
        "vi_meaning": "mùa màng"
      },
      {
        "id": "topic_06_nature_74",
        "num": 74,
        "sentence_hira": "すずきさんは <u>はる</u> を/が 探しています。",
        "sentence_kanji": "すずきさんは <u>春</u> を/が 探しています。",
        "kanji_target": "春",
        "hira_target": "はる",
        "kanji_options": [
          "風",
          "花",
          "春",
          "天気予報"
        ],
        "hira_options": [
          "かぜ",
          "はな",
          "はる",
          "てんきよほう"
        ],
        "romaji": "haru",
        "vi_meaning": "mùa xuân"
      },
      {
        "id": "topic_06_nature_75",
        "num": 75,
        "sentence_hira": "すずきさんは <u>なつ</u> を/が 探しています。",
        "sentence_kanji": "すずきさんは <u>夏</u> を/が 探しています。",
        "kanji_target": "夏",
        "hira_target": "なつ",
        "kanji_options": [
          "冬",
          "夏",
          "森",
          "季節"
        ],
        "hira_options": [
          "ふゆ",
          "なつ",
          "もり",
          "きせつ"
        ],
        "romaji": "natsu",
        "vi_meaning": "mùa hạ"
      },
      {
        "id": "topic_06_nature_76",
        "num": 76,
        "sentence_hira": "すずきさんは <u>あき</u> を/が 探しています。",
        "sentence_kanji": "すずきさんは <u>秋</u> を/が 探しています。",
        "kanji_target": "秋",
        "hira_target": "あき",
        "kanji_options": [
          "川",
          "秋",
          "太陽",
          "林"
        ],
        "hira_options": [
          "かわ",
          "あき",
          "たいよう",
          "はやし"
        ],
        "romaji": "aki",
        "vi_meaning": "mùa thu"
      },
      {
        "id": "topic_06_nature_77",
        "num": 77,
        "sentence_hira": "すずきさんは <u>ふゆ</u> を/が 探しています。",
        "sentence_kanji": "すずきさんは <u>冬</u> を/が 探しています。",
        "kanji_target": "冬",
        "hira_target": "ふゆ",
        "kanji_options": [
          "雨",
          "冬",
          "林",
          "星"
        ],
        "hira_options": [
          "あめ",
          "ふゆ",
          "はやし",
          "ほし"
        ],
        "romaji": "fuyu",
        "vi_meaning": "mùa đông"
      },
      {
        "id": "topic_06_nature_78",
        "num": 78,
        "sentence_hira": "すずきさんは <u>てんきよほう</u> を/が 探しています。",
        "sentence_kanji": "すずきさんは <u>天気予報</u> を/が 探しています。",
        "kanji_target": "天気予報",
        "hira_target": "てんきよほう",
        "kanji_options": [
          "季節",
          "天気予報",
          "川",
          "月"
        ],
        "hira_options": [
          "きせつ",
          "てんきよほう",
          "かわ",
          "つき"
        ],
        "romaji": "tenkiyohou",
        "vi_meaning": "dự báo thời tiết"
      },
      {
        "id": "topic_06_nature_79",
        "num": 79,
        "sentence_hira": "すずきさんは <u>てんき</u> を/が 探しています。",
        "sentence_kanji": "すずきさんは <u>天気</u> を/が 探しています。",
        "kanji_target": "天気",
        "hira_target": "てんき",
        "kanji_options": [
          "川",
          "天気",
          "月",
          "山"
        ],
        "hira_options": [
          "かわ",
          "てんき",
          "つき",
          "やま"
        ],
        "romaji": "tenki",
        "vi_meaning": "thời tiết"
      },
      {
        "id": "topic_06_nature_80",
        "num": 80,
        "sentence_hira": "すずきさんは <u>あめ</u> を/が 探しています。",
        "sentence_kanji": "すずきさんは <u>雨</u> を/が 探しています。",
        "kanji_target": "雨",
        "hira_target": "あめ",
        "kanji_options": [
          "山",
          "雨",
          "海",
          "山"
        ],
        "hira_options": [
          "やま",
          "あめ",
          "うみ",
          "やま"
        ],
        "romaji": "ame",
        "vi_meaning": "cơn mưa"
      },
      {
        "id": "topic_06_nature_81",
        "num": 81,
        "sentence_hira": "すずきさんは <u>ゆき</u> を/が 探しています。",
        "sentence_kanji": "すずきさんは <u>雪</u> を/が 探しています。",
        "kanji_target": "雪",
        "hira_target": "ゆき",
        "kanji_options": [
          "雪",
          "空",
          "星",
          "雲"
        ],
        "hira_options": [
          "ゆき",
          "そら",
          "ほし",
          "くも"
        ],
        "romaji": "yuki",
        "vi_meaning": "tuyết"
      },
      {
        "id": "topic_06_nature_82",
        "num": 82,
        "sentence_hira": "すずきさんは <u>かぜ</u> を/が 探しています。",
        "sentence_kanji": "すずきさんは <u>風</u> を/が 探しています。",
        "kanji_target": "風",
        "hira_target": "かぜ",
        "kanji_options": [
          "風",
          "秋",
          "草",
          "空"
        ],
        "hira_options": [
          "かぜ",
          "あき",
          "くさ",
          "そら"
        ],
        "romaji": "kaze",
        "vi_meaning": "ngọn gió"
      },
      {
        "id": "topic_06_nature_83",
        "num": 83,
        "sentence_hira": "すずきさんは <u>くも</u> を/が 探しています。",
        "sentence_kanji": "すずきさんは <u>雲</u> を/が 探しています。",
        "kanji_target": "雲",
        "hira_target": "くも",
        "kanji_options": [
          "森",
          "風",
          "雪",
          "雲"
        ],
        "hira_options": [
          "もり",
          "かぜ",
          "ゆき",
          "くも"
        ],
        "romaji": "kumo",
        "vi_meaning": "đám mây"
      },
      {
        "id": "topic_06_nature_84",
        "num": 84,
        "sentence_hira": "すずきさんは <u>たいよう</u> を/が 探しています。",
        "sentence_kanji": "すずきさんは <u>太陽</u> を/が 探しています。",
        "kanji_target": "太陽",
        "hira_target": "たいよう",
        "kanji_options": [
          "太陽",
          "秋",
          "海",
          "雲"
        ],
        "hira_options": [
          "たいよう",
          "あき",
          "うみ",
          "くも"
        ],
        "romaji": "taiyou",
        "vi_meaning": "mặt trời"
      },
      {
        "id": "topic_06_nature_85",
        "num": 85,
        "sentence_hira": "すずきさんは <u>つき</u> を/が 探しています。",
        "sentence_kanji": "すずきさんは <u>月</u> を/が 探しています。",
        "kanji_target": "月",
        "hira_target": "つき",
        "kanji_options": [
          "冬",
          "月",
          "季節",
          "雲"
        ],
        "hira_options": [
          "ふゆ",
          "つき",
          "きせつ",
          "くも"
        ],
        "romaji": "tsuki",
        "vi_meaning": "mặt trăng"
      },
      {
        "id": "topic_06_nature_86",
        "num": 86,
        "sentence_hira": "すずきさんは <u>そら</u> を/が 探しています。",
        "sentence_kanji": "すずきさんは <u>空</u> を/が 探しています。",
        "kanji_target": "空",
        "hira_target": "そら",
        "kanji_options": [
          "春",
          "太陽",
          "空",
          "海"
        ],
        "hira_options": [
          "はる",
          "たいよう",
          "そら",
          "うみ"
        ],
        "romaji": "sora",
        "vi_meaning": "bầu trời"
      },
      {
        "id": "topic_06_nature_87",
        "num": 87,
        "sentence_hira": "すずきさんは <u>ほし</u> を/が 探しています。",
        "sentence_kanji": "すずきさんは <u>星</u> を/が 探しています。",
        "kanji_target": "星",
        "hira_target": "ほし",
        "kanji_options": [
          "空",
          "木",
          "星",
          "台風"
        ],
        "hira_options": [
          "そら",
          "き",
          "ほし",
          "たいふう"
        ],
        "romaji": "hoshi",
        "vi_meaning": "ngôi sao"
      },
      {
        "id": "topic_06_nature_88",
        "num": 88,
        "sentence_hira": "すずきさんは <u>やま</u> を/が 探しています。",
        "sentence_kanji": "すずきさんは <u>山</u> を/が 探しています。",
        "kanji_target": "山",
        "hira_target": "やま",
        "kanji_options": [
          "雪",
          "雲",
          "花",
          "山"
        ],
        "hira_options": [
          "ゆき",
          "くも",
          "はな",
          "やま"
        ],
        "romaji": "yama",
        "vi_meaning": "ngọn núi"
      },
      {
        "id": "topic_06_nature_89",
        "num": 89,
        "sentence_hira": "すずきさんは <u>かわ</u> を/が 探しています。",
        "sentence_kanji": "すずきさんは <u>川</u> を/が 探しています。",
        "kanji_target": "川",
        "hira_target": "かわ",
        "kanji_options": [
          "星",
          "川",
          "海",
          "風"
        ],
        "hira_options": [
          "ほし",
          "かわ",
          "うみ",
          "かぜ"
        ],
        "romaji": "kawa",
        "vi_meaning": "con sông"
      },
      {
        "id": "topic_06_nature_90",
        "num": 90,
        "sentence_hira": "すずきさんは <u>うみ</u> を/が 探しています。",
        "sentence_kanji": "すずきさんは <u>海</u> を/が 探しています。",
        "kanji_target": "海",
        "hira_target": "うみ",
        "kanji_options": [
          "星",
          "林",
          "月",
          "海"
        ],
        "hira_options": [
          "ほし",
          "はやし",
          "つき",
          "うみ"
        ],
        "romaji": "umi",
        "vi_meaning": "bờ biển"
      },
      {
        "id": "topic_06_nature_91",
        "num": 91,
        "sentence_hira": "すずきさんは <u>しま</u> を/が 探しています。",
        "sentence_kanji": "すずきさんは <u>島</u> を/が 探しています。",
        "kanji_target": "島",
        "hira_target": "しま",
        "kanji_options": [
          "地震",
          "花",
          "季節",
          "島"
        ],
        "hira_options": [
          "じしん",
          "はな",
          "きせつ",
          "しま"
        ],
        "romaji": "shima",
        "vi_meaning": "hòn đảo"
      },
      {
        "id": "topic_06_nature_92",
        "num": 92,
        "sentence_hira": "すずきさんは <u>もり</u> を/が 探しています。",
        "sentence_kanji": "すずきさんは <u>森</u> を/が 探しています。",
        "kanji_target": "森",
        "hira_target": "もり",
        "kanji_options": [
          "冬",
          "春",
          "森",
          "木"
        ],
        "hira_options": [
          "ふゆ",
          "はる",
          "もり",
          "き"
        ],
        "romaji": "mori",
        "vi_meaning": "rậm rạp/rừng"
      },
      {
        "id": "topic_06_nature_93",
        "num": 93,
        "sentence_hira": "すずきさんは <u>はやし</u> を/が 探しています。",
        "sentence_kanji": "すずきさんは <u>林</u> を/が 探しています。",
        "kanji_target": "林",
        "hira_target": "はやし",
        "kanji_options": [
          "台風",
          "地震",
          "林",
          "山"
        ],
        "hira_options": [
          "たいふう",
          "じしん",
          "はやし",
          "やま"
        ],
        "romaji": "hayashi",
        "vi_meaning": "rừng thưa"
      },
      {
        "id": "topic_06_nature_94",
        "num": 94,
        "sentence_hira": "すずきさんは <u>はな</u> を/が 探しています。",
        "sentence_kanji": "すずきさんは <u>花</u> を/が 探しています。",
        "kanji_target": "花",
        "hira_target": "はな",
        "kanji_options": [
          "花",
          "林",
          "雪",
          "雲"
        ],
        "hira_options": [
          "はな",
          "はやし",
          "ゆき",
          "くも"
        ],
        "romaji": "hana",
        "vi_meaning": "bông hoa"
      },
      {
        "id": "topic_06_nature_95",
        "num": 95,
        "sentence_hira": "すず<u>き</u>さんは き を/が 探しています。",
        "sentence_kanji": "すず<u>木</u>さんは き を/が 探しています。",
        "kanji_target": "木",
        "hira_target": "き",
        "kanji_options": [
          "木",
          "川",
          "雪",
          "冬"
        ],
        "hira_options": [
          "き",
          "かわ",
          "ゆき",
          "ふゆ"
        ],
        "romaji": "ki",
        "vi_meaning": "cây cối"
      },
      {
        "id": "topic_06_nature_96",
        "num": 96,
        "sentence_hira": "すずきさんは <u>くさ</u> を/が 探しています。",
        "sentence_kanji": "すずきさんは <u>草</u> を/が 探しています。",
        "kanji_target": "草",
        "hira_target": "くさ",
        "kanji_options": [
          "夏",
          "天気",
          "太陽",
          "草"
        ],
        "hira_options": [
          "なつ",
          "てんき",
          "たいよう",
          "くさ"
        ],
        "romaji": "kusa",
        "vi_meaning": "ngọn cỏ"
      },
      {
        "id": "topic_06_nature_97",
        "num": 97,
        "sentence_hira": "すずきさんは <u>じしん</u> を/が 探しています。",
        "sentence_kanji": "すずきさんは <u>地震</u> を/が 探しています。",
        "kanji_target": "地震",
        "hira_target": "じしん",
        "kanji_options": [
          "天気予報",
          "雨",
          "雪",
          "地震"
        ],
        "hira_options": [
          "てんきよほう",
          "あめ",
          "ゆき",
          "じしん"
        ],
        "romaji": "jishin",
        "vi_meaning": "trận động đất"
      },
      {
        "id": "topic_06_nature_98",
        "num": 98,
        "sentence_hira": "すずきさんは <u>たいふう</u> を/が 探しています。",
        "sentence_kanji": "すずきさんは <u>台風</u> を/が 探しています。",
        "kanji_target": "台風",
        "hira_target": "たいふう",
        "kanji_options": [
          "台風",
          "天気予報",
          "冬",
          "春"
        ],
        "hira_options": [
          "たいふう",
          "てんきよほう",
          "ふゆ",
          "はる"
        ],
        "romaji": "taifuu",
        "vi_meaning": "cơn bão"
      },
      {
        "id": "topic_06_nature_99",
        "num": 99,
        "sentence_hira": "すずきさんは <u>きせつ</u> を/が 探しています。",
        "sentence_kanji": "すずきさんは <u>季節</u> を/が 探しています。",
        "kanji_target": "季節",
        "hira_target": "きせつ",
        "kanji_options": [
          "海",
          "季節",
          "春",
          "雨"
        ],
        "hira_options": [
          "うみ",
          "きせつ",
          "はる",
          "あめ"
        ],
        "romaji": "kisetsu",
        "vi_meaning": "mùa màng"
      },
      {
        "id": "topic_06_nature_100",
        "num": 100,
        "sentence_hira": "すずきさんは <u>はる</u> を/が 探しています。",
        "sentence_kanji": "すずきさんは <u>春</u> を/が 探しています。",
        "kanji_target": "春",
        "hira_target": "はる",
        "kanji_options": [
          "季節",
          "春",
          "川",
          "太陽"
        ],
        "hira_options": [
          "きせつ",
          "はる",
          "かわ",
          "たいよう"
        ],
        "romaji": "haru",
        "vi_meaning": "mùa xuân"
      },
      {
        "id": "topic_06_nature_101",
        "num": 101,
        "sentence_hira": "すずきさんは <u>なつ</u> を/が 探しています。",
        "sentence_kanji": "すずきさんは <u>夏</u> を/が 探しています。",
        "kanji_target": "夏",
        "hira_target": "なつ",
        "kanji_options": [
          "夏",
          "島",
          "雲",
          "山"
        ],
        "hira_options": [
          "なつ",
          "しま",
          "くも",
          "やま"
        ],
        "romaji": "natsu",
        "vi_meaning": "mùa hạ"
      },
      {
        "id": "topic_06_nature_102",
        "num": 102,
        "sentence_hira": "すずきさんは <u>あき</u> を/が 探しています。",
        "sentence_kanji": "すずきさんは <u>秋</u> を/が 探しています。",
        "kanji_target": "秋",
        "hira_target": "あき",
        "kanji_options": [
          "風",
          "雲",
          "秋",
          "木"
        ],
        "hira_options": [
          "かぜ",
          "くも",
          "あき",
          "き"
        ],
        "romaji": "aki",
        "vi_meaning": "mùa thu"
      },
      {
        "id": "topic_06_nature_103",
        "num": 103,
        "sentence_hira": "すずきさんは <u>ふゆ</u> を/が 探しています。",
        "sentence_kanji": "すずきさんは <u>冬</u> を/が 探しています。",
        "kanji_target": "冬",
        "hira_target": "ふゆ",
        "kanji_options": [
          "冬",
          "島",
          "空",
          "林"
        ],
        "hira_options": [
          "ふゆ",
          "しま",
          "そら",
          "はやし"
        ],
        "romaji": "fuyu",
        "vi_meaning": "mùa đông"
      },
      {
        "id": "topic_06_nature_104",
        "num": 104,
        "sentence_hira": "すずきさんは <u>てんきよほう</u> を/が 探しています。",
        "sentence_kanji": "すずきさんは <u>天気予報</u> を/が 探しています。",
        "kanji_target": "天気予報",
        "hira_target": "てんきよほう",
        "kanji_options": [
          "森",
          "風",
          "天気予報",
          "木"
        ],
        "hira_options": [
          "もり",
          "かぜ",
          "てんきよほう",
          "き"
        ],
        "romaji": "tenkiyohou",
        "vi_meaning": "dự báo thời tiết"
      },
      {
        "id": "topic_06_nature_105",
        "num": 105,
        "sentence_hira": "すずきさんは <u>てんき</u> を/が 探しています。",
        "sentence_kanji": "すずきさんは <u>天気</u> を/が 探しています。",
        "kanji_target": "天気",
        "hira_target": "てんき",
        "kanji_options": [
          "空",
          "地震",
          "春",
          "天気"
        ],
        "hira_options": [
          "そら",
          "じしん",
          "はる",
          "てんき"
        ],
        "romaji": "tenki",
        "vi_meaning": "thời tiết"
      },
      {
        "id": "topic_06_nature_106",
        "num": 106,
        "sentence_hira": "すずきさんは <u>あめ</u> を/が 探しています。",
        "sentence_kanji": "すずきさんは <u>雨</u> を/が 探しています。",
        "kanji_target": "雨",
        "hira_target": "あめ",
        "kanji_options": [
          "雲",
          "雨",
          "島",
          "花"
        ],
        "hira_options": [
          "くも",
          "あめ",
          "しま",
          "はな"
        ],
        "romaji": "ame",
        "vi_meaning": "cơn mưa"
      },
      {
        "id": "topic_06_nature_107",
        "num": 107,
        "sentence_hira": "すずきさんは <u>ゆき</u> を/が 探しています。",
        "sentence_kanji": "すずきさんは <u>雪</u> を/が 探しています。",
        "kanji_target": "雪",
        "hira_target": "ゆき",
        "kanji_options": [
          "風",
          "夏",
          "雪",
          "地震"
        ],
        "hira_options": [
          "かぜ",
          "なつ",
          "ゆき",
          "じしん"
        ],
        "romaji": "yuki",
        "vi_meaning": "tuyết"
      },
      {
        "id": "topic_06_nature_108",
        "num": 108,
        "sentence_hira": "すずきさんは <u>かぜ</u> を/が 探しています。",
        "sentence_kanji": "すずきさんは <u>風</u> を/が 探しています。",
        "kanji_target": "風",
        "hira_target": "かぜ",
        "kanji_options": [
          "風",
          "太陽",
          "山",
          "川"
        ],
        "hira_options": [
          "かぜ",
          "たいよう",
          "やま",
          "かわ"
        ],
        "romaji": "kaze",
        "vi_meaning": "ngọn gió"
      },
      {
        "id": "topic_06_nature_109",
        "num": 109,
        "sentence_hira": "すずきさんは <u>くも</u> を/が 探しています。",
        "sentence_kanji": "すずきさんは <u>雲</u> を/が 探しています。",
        "kanji_target": "雲",
        "hira_target": "くも",
        "kanji_options": [
          "雲",
          "地震",
          "川",
          "花"
        ],
        "hira_options": [
          "くも",
          "じしん",
          "かわ",
          "はな"
        ],
        "romaji": "kumo",
        "vi_meaning": "đám mây"
      },
      {
        "id": "topic_06_nature_110",
        "num": 110,
        "sentence_hira": "すずきさんは <u>たいよう</u> を/が 探しています。",
        "sentence_kanji": "すずきさんは <u>太陽</u> を/が 探しています。",
        "kanji_target": "太陽",
        "hira_target": "たいよう",
        "kanji_options": [
          "島",
          "草",
          "太陽",
          "季節"
        ],
        "hira_options": [
          "しま",
          "くさ",
          "たいよう",
          "きせつ"
        ],
        "romaji": "taiyou",
        "vi_meaning": "mặt trời"
      },
      {
        "id": "topic_06_nature_111",
        "num": 111,
        "sentence_hira": "すずきさんは <u>つき</u> を/が 探しています。",
        "sentence_kanji": "すずきさんは <u>月</u> を/が 探しています。",
        "kanji_target": "月",
        "hira_target": "つき",
        "kanji_options": [
          "風",
          "風",
          "月",
          "風"
        ],
        "hira_options": [
          "かぜ",
          "かぜ",
          "つき",
          "かぜ"
        ],
        "romaji": "tsuki",
        "vi_meaning": "mặt trăng"
      },
      {
        "id": "topic_06_nature_112",
        "num": 112,
        "sentence_hira": "すずきさんは <u>そら</u> を/が 探しています。",
        "sentence_kanji": "すずきさんは <u>空</u> を/が 探しています。",
        "kanji_target": "空",
        "hira_target": "そら",
        "kanji_options": [
          "夏",
          "空",
          "冬",
          "雪"
        ],
        "hira_options": [
          "なつ",
          "そら",
          "ふゆ",
          "ゆき"
        ],
        "romaji": "sora",
        "vi_meaning": "bầu trời"
      },
      {
        "id": "topic_06_nature_113",
        "num": 113,
        "sentence_hira": "すずきさんは <u>ほし</u> を/が 探しています。",
        "sentence_kanji": "すずきさんは <u>星</u> を/が 探しています。",
        "kanji_target": "星",
        "hira_target": "ほし",
        "kanji_options": [
          "雲",
          "星",
          "天気",
          "花"
        ],
        "hira_options": [
          "くも",
          "ほし",
          "てんき",
          "はな"
        ],
        "romaji": "hoshi",
        "vi_meaning": "ngôi sao"
      },
      {
        "id": "topic_06_nature_114",
        "num": 114,
        "sentence_hira": "すずきさんは <u>やま</u> を/が 探しています。",
        "sentence_kanji": "すずきさんは <u>山</u> を/が 探しています。",
        "kanji_target": "山",
        "hira_target": "やま",
        "kanji_options": [
          "太陽",
          "天気予報",
          "山",
          "天気予報"
        ],
        "hira_options": [
          "たいよう",
          "てんきよほう",
          "やま",
          "てんきよほう"
        ],
        "romaji": "yama",
        "vi_meaning": "ngọn núi"
      },
      {
        "id": "topic_06_nature_115",
        "num": 115,
        "sentence_hira": "すずきさんは <u>かわ</u> を/が 探しています。",
        "sentence_kanji": "すずきさんは <u>川</u> を/が 探しています。",
        "kanji_target": "川",
        "hira_target": "かわ",
        "kanji_options": [
          "地震",
          "川",
          "春",
          "空"
        ],
        "hira_options": [
          "じしん",
          "かわ",
          "はる",
          "そら"
        ],
        "romaji": "kawa",
        "vi_meaning": "con sông"
      },
      {
        "id": "topic_06_nature_116",
        "num": 116,
        "sentence_hira": "すずきさんは <u>うみ</u> を/が 探しています。",
        "sentence_kanji": "すずきさんは <u>海</u> を/が 探しています。",
        "kanji_target": "海",
        "hira_target": "うみ",
        "kanji_options": [
          "月",
          "春",
          "夏",
          "海"
        ],
        "hira_options": [
          "つき",
          "はる",
          "なつ",
          "うみ"
        ],
        "romaji": "umi",
        "vi_meaning": "bờ biển"
      },
      {
        "id": "topic_06_nature_117",
        "num": 117,
        "sentence_hira": "すずきさんは <u>しま</u> を/が 探しています。",
        "sentence_kanji": "すずきさんは <u>島</u> を/が 探しています。",
        "kanji_target": "島",
        "hira_target": "しま",
        "kanji_options": [
          "島",
          "台風",
          "雲",
          "星"
        ],
        "hira_options": [
          "しま",
          "たいふう",
          "くも",
          "ほし"
        ],
        "romaji": "shima",
        "vi_meaning": "hòn đảo"
      },
      {
        "id": "topic_06_nature_118",
        "num": 118,
        "sentence_hira": "すずきさんは <u>もり</u> を/が 探しています。",
        "sentence_kanji": "すずきさんは <u>森</u> を/が 探しています。",
        "kanji_target": "森",
        "hira_target": "もり",
        "kanji_options": [
          "森",
          "林",
          "星",
          "島"
        ],
        "hira_options": [
          "もり",
          "はやし",
          "ほし",
          "しま"
        ],
        "romaji": "mori",
        "vi_meaning": "rậm rạp/rừng"
      },
      {
        "id": "topic_06_nature_119",
        "num": 119,
        "sentence_hira": "すずきさんは <u>はやし</u> を/が 探しています。",
        "sentence_kanji": "すずきさんは <u>林</u> を/が 探しています。",
        "kanji_target": "林",
        "hira_target": "はやし",
        "kanji_options": [
          "川",
          "海",
          "林",
          "地震"
        ],
        "hira_options": [
          "かわ",
          "うみ",
          "はやし",
          "じしん"
        ],
        "romaji": "hayashi",
        "vi_meaning": "rừng thưa"
      },
      {
        "id": "topic_06_nature_120",
        "num": 120,
        "sentence_hira": "すずきさんは <u>はな</u> を/が 探しています。",
        "sentence_kanji": "すずきさんは <u>花</u> を/が 探しています。",
        "kanji_target": "花",
        "hira_target": "はな",
        "kanji_options": [
          "雲",
          "花",
          "秋",
          "海"
        ],
        "hira_options": [
          "くも",
          "はな",
          "あき",
          "うみ"
        ],
        "romaji": "hana",
        "vi_meaning": "bông hoa"
      },
      {
        "id": "topic_06_nature_121",
        "num": 121,
        "sentence_hira": "すず<u>き</u>さんは き を/が 探しています。",
        "sentence_kanji": "すず<u>木</u>さんは き を/が 探しています。",
        "kanji_target": "木",
        "hira_target": "き",
        "kanji_options": [
          "林",
          "季節",
          "木",
          "森"
        ],
        "hira_options": [
          "はやし",
          "きせつ",
          "き",
          "もり"
        ],
        "romaji": "ki",
        "vi_meaning": "cây cối"
      },
      {
        "id": "topic_06_nature_122",
        "num": 122,
        "sentence_hira": "すずきさんは <u>くさ</u> を/が 探しています。",
        "sentence_kanji": "すずきさんは <u>草</u> を/が 探しています。",
        "kanji_target": "草",
        "hira_target": "くさ",
        "kanji_options": [
          "天気",
          "川",
          "花",
          "草"
        ],
        "hira_options": [
          "てんき",
          "かわ",
          "はな",
          "くさ"
        ],
        "romaji": "kusa",
        "vi_meaning": "ngọn cỏ"
      },
      {
        "id": "topic_06_nature_123",
        "num": 123,
        "sentence_hira": "すずきさんは <u>じしん</u> を/が 探しています。",
        "sentence_kanji": "すずきさんは <u>地震</u> を/が 探しています。",
        "kanji_target": "地震",
        "hira_target": "じしん",
        "kanji_options": [
          "天気",
          "地震",
          "山",
          "秋"
        ],
        "hira_options": [
          "てんき",
          "じしん",
          "やま",
          "あき"
        ],
        "romaji": "jishin",
        "vi_meaning": "trận động đất"
      },
      {
        "id": "topic_06_nature_124",
        "num": 124,
        "sentence_hira": "すずきさんは <u>たいふう</u> を/が 探しています。",
        "sentence_kanji": "すずきさんは <u>台風</u> を/が 探しています。",
        "kanji_target": "台風",
        "hira_target": "たいふう",
        "kanji_options": [
          "雲",
          "空",
          "台風",
          "冬"
        ],
        "hira_options": [
          "くも",
          "そら",
          "たいふう",
          "ふゆ"
        ],
        "romaji": "taifuu",
        "vi_meaning": "cơn bão"
      },
      {
        "id": "topic_06_nature_125",
        "num": 125,
        "sentence_hira": "すずきさんは <u>きせつ</u> を/が 探しています。",
        "sentence_kanji": "すずきさんは <u>季節</u> を/が 探しています。",
        "kanji_target": "季節",
        "hira_target": "きせつ",
        "kanji_options": [
          "川",
          "雪",
          "季節",
          "星"
        ],
        "hira_options": [
          "かわ",
          "ゆき",
          "きせつ",
          "ほし"
        ],
        "romaji": "kisetsu",
        "vi_meaning": "mùa màng"
      },
      {
        "id": "topic_06_nature_126",
        "num": 126,
        "sentence_hira": "すずきさんは <u>はる</u> を/が 探しています。",
        "sentence_kanji": "すずきさんは <u>春</u> を/が 探しています。",
        "kanji_target": "春",
        "hira_target": "はる",
        "kanji_options": [
          "地震",
          "地震",
          "春",
          "季節"
        ],
        "hira_options": [
          "じしん",
          "じしん",
          "はる",
          "きせつ"
        ],
        "romaji": "haru",
        "vi_meaning": "mùa xuân"
      },
      {
        "id": "topic_06_nature_127",
        "num": 127,
        "sentence_hira": "すずきさんは <u>なつ</u> を/が 探しています。",
        "sentence_kanji": "すずきさんは <u>夏</u> を/が 探しています。",
        "kanji_target": "夏",
        "hira_target": "なつ",
        "kanji_options": [
          "太陽",
          "山",
          "雨",
          "夏"
        ],
        "hira_options": [
          "たいよう",
          "やま",
          "あめ",
          "なつ"
        ],
        "romaji": "natsu",
        "vi_meaning": "mùa hạ"
      },
      {
        "id": "topic_06_nature_128",
        "num": 128,
        "sentence_hira": "すずきさんは <u>あき</u> を/が 探しています。",
        "sentence_kanji": "すずきさんは <u>秋</u> を/が 探しています。",
        "kanji_target": "秋",
        "hira_target": "あき",
        "kanji_options": [
          "秋",
          "海",
          "空",
          "森"
        ],
        "hira_options": [
          "あき",
          "うみ",
          "そら",
          "もり"
        ],
        "romaji": "aki",
        "vi_meaning": "mùa thu"
      },
      {
        "id": "topic_06_nature_129",
        "num": 129,
        "sentence_hira": "すずきさんは <u>ふゆ</u> を/が 探しています。",
        "sentence_kanji": "すずきさんは <u>冬</u> を/が 探しています。",
        "kanji_target": "冬",
        "hira_target": "ふゆ",
        "kanji_options": [
          "風",
          "冬",
          "星",
          "秋"
        ],
        "hira_options": [
          "かぜ",
          "ふゆ",
          "ほし",
          "あき"
        ],
        "romaji": "fuyu",
        "vi_meaning": "mùa đông"
      },
      {
        "id": "topic_06_nature_130",
        "num": 130,
        "sentence_hira": "すずきさんは <u>てんきよほう</u> を/が 探しています。",
        "sentence_kanji": "すずきさんは <u>天気予報</u> を/が 探しています。",
        "kanji_target": "天気予報",
        "hira_target": "てんきよほう",
        "kanji_options": [
          "秋",
          "天気予報",
          "森",
          "台風"
        ],
        "hira_options": [
          "あき",
          "てんきよほう",
          "もり",
          "たいふう"
        ],
        "romaji": "tenkiyohou",
        "vi_meaning": "dự báo thời tiết"
      },
      {
        "id": "topic_06_nature_131",
        "num": 131,
        "sentence_hira": "すずきさんは <u>てんき</u> を/が 探しています。",
        "sentence_kanji": "すずきさんは <u>天気</u> を/が 探しています。",
        "kanji_target": "天気",
        "hira_target": "てんき",
        "kanji_options": [
          "天気予報",
          "天気",
          "雨",
          "風"
        ],
        "hira_options": [
          "てんきよほう",
          "てんき",
          "あめ",
          "かぜ"
        ],
        "romaji": "tenki",
        "vi_meaning": "thời tiết"
      },
      {
        "id": "topic_06_nature_132",
        "num": 132,
        "sentence_hira": "すずきさんは <u>あめ</u> を/が 探しています。",
        "sentence_kanji": "すずきさんは <u>雨</u> を/が 探しています。",
        "kanji_target": "雨",
        "hira_target": "あめ",
        "kanji_options": [
          "林",
          "台風",
          "雨",
          "雪"
        ],
        "hira_options": [
          "はやし",
          "たいふう",
          "あめ",
          "ゆき"
        ],
        "romaji": "ame",
        "vi_meaning": "cơn mưa"
      },
      {
        "id": "topic_06_nature_133",
        "num": 133,
        "sentence_hira": "すずきさんは <u>ゆき</u> を/が 探しています。",
        "sentence_kanji": "すずきさんは <u>雪</u> を/が 探しています。",
        "kanji_target": "雪",
        "hira_target": "ゆき",
        "kanji_options": [
          "海",
          "雪",
          "空",
          "風"
        ],
        "hira_options": [
          "うみ",
          "ゆき",
          "そら",
          "かぜ"
        ],
        "romaji": "yuki",
        "vi_meaning": "tuyết"
      },
      {
        "id": "topic_06_nature_134",
        "num": 134,
        "sentence_hira": "すずきさんは <u>かぜ</u> を/が 探しています。",
        "sentence_kanji": "すずきさんは <u>風</u> を/が 探しています。",
        "kanji_target": "風",
        "hira_target": "かぜ",
        "kanji_options": [
          "秋",
          "天気予報",
          "島",
          "風"
        ],
        "hira_options": [
          "あき",
          "てんきよほう",
          "しま",
          "かぜ"
        ],
        "romaji": "kaze",
        "vi_meaning": "ngọn gió"
      },
      {
        "id": "topic_06_nature_135",
        "num": 135,
        "sentence_hira": "すずきさんは <u>くも</u> を/が 探しています。",
        "sentence_kanji": "すずきさんは <u>雲</u> を/が 探しています。",
        "kanji_target": "雲",
        "hira_target": "くも",
        "kanji_options": [
          "空",
          "雲",
          "秋",
          "月"
        ],
        "hira_options": [
          "そら",
          "くも",
          "あき",
          "つき"
        ],
        "romaji": "kumo",
        "vi_meaning": "đám mây"
      },
      {
        "id": "topic_06_nature_136",
        "num": 136,
        "sentence_hira": "すずきさんは <u>たいよう</u> を/が 探しています。",
        "sentence_kanji": "すずきさんは <u>太陽</u> を/が 探しています。",
        "kanji_target": "太陽",
        "hira_target": "たいよう",
        "kanji_options": [
          "雨",
          "花",
          "台風",
          "太陽"
        ],
        "hira_options": [
          "あめ",
          "はな",
          "たいふう",
          "たいよう"
        ],
        "romaji": "taiyou",
        "vi_meaning": "mặt trời"
      },
      {
        "id": "topic_06_nature_137",
        "num": 137,
        "sentence_hira": "すずきさんは <u>つき</u> を/が 探しています。",
        "sentence_kanji": "すずきさんは <u>月</u> を/が 探しています。",
        "kanji_target": "月",
        "hira_target": "つき",
        "kanji_options": [
          "月",
          "風",
          "島",
          "雲"
        ],
        "hira_options": [
          "つき",
          "かぜ",
          "しま",
          "くも"
        ],
        "romaji": "tsuki",
        "vi_meaning": "mặt trăng"
      },
      {
        "id": "topic_06_nature_138",
        "num": 138,
        "sentence_hira": "すずきさんは <u>そら</u> を/が 探しています。",
        "sentence_kanji": "すずきさんは <u>空</u> を/が 探しています。",
        "kanji_target": "空",
        "hira_target": "そら",
        "kanji_options": [
          "空",
          "天気",
          "春",
          "川"
        ],
        "hira_options": [
          "そら",
          "てんき",
          "はる",
          "かわ"
        ],
        "romaji": "sora",
        "vi_meaning": "bầu trời"
      },
      {
        "id": "topic_06_nature_139",
        "num": 139,
        "sentence_hira": "すずきさんは <u>ほし</u> を/が 探しています。",
        "sentence_kanji": "すずきさんは <u>星</u> を/が 探しています。",
        "kanji_target": "星",
        "hira_target": "ほし",
        "kanji_options": [
          "春",
          "星",
          "地震",
          "林"
        ],
        "hira_options": [
          "はる",
          "ほし",
          "じしん",
          "はやし"
        ],
        "romaji": "hoshi",
        "vi_meaning": "ngôi sao"
      },
      {
        "id": "topic_06_nature_140",
        "num": 140,
        "sentence_hira": "すずきさんは <u>やま</u> を/が 探しています。",
        "sentence_kanji": "すずきさんは <u>山</u> を/が 探しています。",
        "kanji_target": "山",
        "hira_target": "やま",
        "kanji_options": [
          "山",
          "地震",
          "雨",
          "海"
        ],
        "hira_options": [
          "やま",
          "じしん",
          "あめ",
          "うみ"
        ],
        "romaji": "yama",
        "vi_meaning": "ngọn núi"
      },
      {
        "id": "topic_06_nature_141",
        "num": 141,
        "sentence_hira": "すずきさんは <u>かわ</u> を/が 探しています。",
        "sentence_kanji": "すずきさんは <u>川</u> を/が 探しています。",
        "kanji_target": "川",
        "hira_target": "かわ",
        "kanji_options": [
          "天気予報",
          "雪",
          "雲",
          "川"
        ],
        "hira_options": [
          "てんきよほう",
          "ゆき",
          "くも",
          "かわ"
        ],
        "romaji": "kawa",
        "vi_meaning": "con sông"
      },
      {
        "id": "topic_06_nature_142",
        "num": 142,
        "sentence_hira": "すずきさんは <u>うみ</u> を/が 探しています。",
        "sentence_kanji": "すずきさんは <u>海</u> を/が 探しています。",
        "kanji_target": "海",
        "hira_target": "うみ",
        "kanji_options": [
          "天気予報",
          "風",
          "海",
          "林"
        ],
        "hira_options": [
          "てんきよほう",
          "かぜ",
          "うみ",
          "はやし"
        ],
        "romaji": "umi",
        "vi_meaning": "bờ biển"
      },
      {
        "id": "topic_06_nature_143",
        "num": 143,
        "sentence_hira": "すずきさんは <u>しま</u> を/が 探しています。",
        "sentence_kanji": "すずきさんは <u>島</u> を/が 探しています。",
        "kanji_target": "島",
        "hira_target": "しま",
        "kanji_options": [
          "林",
          "台風",
          "太陽",
          "島"
        ],
        "hira_options": [
          "はやし",
          "たいふう",
          "たいよう",
          "しま"
        ],
        "romaji": "shima",
        "vi_meaning": "hòn đảo"
      },
      {
        "id": "topic_06_nature_144",
        "num": 144,
        "sentence_hira": "すずきさんは <u>もり</u> を/が 探しています。",
        "sentence_kanji": "すずきさんは <u>森</u> を/が 探しています。",
        "kanji_target": "森",
        "hira_target": "もり",
        "kanji_options": [
          "天気予報",
          "森",
          "天気予報",
          "風"
        ],
        "hira_options": [
          "てんきよほう",
          "もり",
          "てんきよほう",
          "かぜ"
        ],
        "romaji": "mori",
        "vi_meaning": "rậm rạp/rừng"
      },
      {
        "id": "topic_06_nature_145",
        "num": 145,
        "sentence_hira": "すずきさんは <u>はやし</u> を/が 探しています。",
        "sentence_kanji": "すずきさんは <u>林</u> を/が 探しています。",
        "kanji_target": "林",
        "hira_target": "はやし",
        "kanji_options": [
          "空",
          "海",
          "台風",
          "林"
        ],
        "hira_options": [
          "そら",
          "うみ",
          "たいふう",
          "はやし"
        ],
        "romaji": "hayashi",
        "vi_meaning": "rừng thưa"
      }
    ]
  },
  {
    "id": "topic_07_people",
    "name": "7. Con Người, Gia Đình & Cơ Thể",
    "icon": "👨‍👩‍👧",
    "desc": "Người thân, quan hệ xã hội và các bộ phận cơ thể (150 câu)",
    "questions": [
      {
        "id": "topic_07_people_1",
        "num": 1,
        "sentence_hira": "すずきさんは <u>かぞく</u> を/が 探しています。",
        "sentence_kanji": "すずきさんは <u>家族</u> を/が 探しています。",
        "kanji_target": "家族",
        "hira_target": "かぞく",
        "kanji_options": [
          "夫",
          "姉",
          "家族",
          "体"
        ],
        "hira_options": [
          "おっと",
          "あね",
          "かぞく",
          "からだ"
        ],
        "romaji": "kazoku",
        "vi_meaning": "gia đình"
      },
      {
        "id": "topic_07_people_2",
        "num": 2,
        "sentence_hira": "すずきさんは <u>りょうしん</u> を/が 探しています。",
        "sentence_kanji": "すずきさんは <u>両親</u> を/が 探しています。",
        "kanji_target": "両親",
        "hira_target": "りょうしん",
        "kanji_options": [
          "妹",
          "手",
          "声",
          "両親"
        ],
        "hira_options": [
          "いもうと",
          "て",
          "こえ",
          "りょうしん"
        ],
        "romaji": "ryoushin",
        "vi_meaning": "cha mẹ"
      },
      {
        "id": "topic_07_people_3",
        "num": 3,
        "sentence_hira": "すずきさんは <u>ちち</u> を/が 探しています。",
        "sentence_kanji": "すずきさんは <u>父</u> を/が 探しています。",
        "kanji_target": "父",
        "hira_target": "ちち",
        "kanji_options": [
          "鼻",
          "父",
          "親戚",
          "妻"
        ],
        "hira_options": [
          "はな",
          "ちち",
          "しんせき",
          "つま"
        ],
        "romaji": "chichi",
        "vi_meaning": "bố"
      },
      {
        "id": "topic_07_people_4",
        "num": 4,
        "sentence_hira": "すずきさんは <u>はは</u> を/が 探しています。",
        "sentence_kanji": "すずきさんは <u>母</u> を/が 探しています。",
        "kanji_target": "母",
        "hira_target": "はは",
        "kanji_options": [
          "夫",
          "姉",
          "母",
          "耳"
        ],
        "hira_options": [
          "おっと",
          "あね",
          "はは",
          "みみ"
        ],
        "romaji": "haha",
        "vi_meaning": "mẹ"
      },
      {
        "id": "topic_07_people_5",
        "num": 5,
        "sentence_hira": "すずきさんは <u>あに</u> を/が 探しています。",
        "sentence_kanji": "すずきさんは <u>兄</u> を/が 探しています。",
        "kanji_target": "兄",
        "hira_target": "あに",
        "kanji_options": [
          "兄",
          "心",
          "弟",
          "足"
        ],
        "hira_options": [
          "あに",
          "こころ",
          "おとうと",
          "あし"
        ],
        "romaji": "ani",
        "vi_meaning": "anh trai"
      },
      {
        "id": "topic_07_people_6",
        "num": 6,
        "sentence_hira": "すずきさんは <u>おとうと</u> を/が 探しています。",
        "sentence_kanji": "すずきさんは <u>弟</u> を/が 探しています。",
        "kanji_target": "弟",
        "hira_target": "おとうと",
        "kanji_options": [
          "妻",
          "弟",
          "口",
          "目"
        ],
        "hira_options": [
          "つま",
          "おとうと",
          "くち",
          "め"
        ],
        "romaji": "otouto",
        "vi_meaning": "em trai"
      },
      {
        "id": "topic_07_people_7",
        "num": 7,
        "sentence_hira": "すずきさんは <u>あね</u> を/が 探しています。",
        "sentence_kanji": "すずきさんは <u>姉</u> を/が 探しています。",
        "kanji_target": "姉",
        "hira_target": "あね",
        "kanji_options": [
          "姉",
          "夫",
          "母",
          "家族"
        ],
        "hira_options": [
          "あね",
          "おっと",
          "はは",
          "かぞく"
        ],
        "romaji": "ane",
        "vi_meaning": "chị gái"
      },
      {
        "id": "topic_07_people_8",
        "num": 8,
        "sentence_hira": "すずきさんは <u>いもうと</u> を/が 探しています。",
        "sentence_kanji": "すずきさんは <u>妹</u> を/が 探しています。",
        "kanji_target": "妹",
        "hira_target": "いもうと",
        "kanji_options": [
          "兄",
          "妹",
          "歯",
          "親戚"
        ],
        "hira_options": [
          "あに",
          "いもうと",
          "は",
          "しんせき"
        ],
        "romaji": "imouto",
        "vi_meaning": "em gái"
      },
      {
        "id": "topic_07_people_9",
        "num": 9,
        "sentence_hira": "すずきさんは <u>おっと</u> を/が 探しています。",
        "sentence_kanji": "すずきさんは <u>夫</u> を/が 探しています。",
        "kanji_target": "夫",
        "hira_target": "おっと",
        "kanji_options": [
          "足",
          "兄",
          "夫",
          "兄"
        ],
        "hira_options": [
          "あし",
          "あに",
          "おっと",
          "あに"
        ],
        "romaji": "otto",
        "vi_meaning": "chồng"
      },
      {
        "id": "topic_07_people_10",
        "num": 10,
        "sentence_hira": "すずきさんは <u>つま</u> を/が 探しています。",
        "sentence_kanji": "すずきさんは <u>妻</u> を/が 探しています。",
        "kanji_target": "妻",
        "hira_target": "つま",
        "kanji_options": [
          "妻",
          "耳",
          "姉",
          "手"
        ],
        "hira_options": [
          "つま",
          "みみ",
          "あね",
          "て"
        ],
        "romaji": "tsuma",
        "vi_meaning": "vợ"
      },
      {
        "id": "topic_07_people_11",
        "num": 11,
        "sentence_hira": "すずきさんは <u>こども</u> を/が 探しています。",
        "sentence_kanji": "すずきさんは <u>子供</u> を/が 探しています。",
        "kanji_target": "子供",
        "hira_target": "こども",
        "kanji_options": [
          "足",
          "子供",
          "目",
          "妹"
        ],
        "hira_options": [
          "あし",
          "こども",
          "め",
          "いもうと"
        ],
        "romaji": "kodomo",
        "vi_meaning": "trẻ em"
      },
      {
        "id": "topic_07_people_12",
        "num": 12,
        "sentence_hira": "すずきさんは <u>しんせき</u> を/が 探しています。",
        "sentence_kanji": "すずきさんは <u>親戚</u> を/が 探しています。",
        "kanji_target": "親戚",
        "hira_target": "しんせき",
        "kanji_options": [
          "弟",
          "妻",
          "親戚",
          "兄"
        ],
        "hira_options": [
          "おとうと",
          "つま",
          "しんせき",
          "あに"
        ],
        "romaji": "shinseki",
        "vi_meaning": "họ hàng"
      },
      {
        "id": "topic_07_people_13",
        "num": 13,
        "sentence_hira": "すずきさんは <u>あたま</u> を/が 探しています。",
        "sentence_kanji": "すずきさんは <u>頭</u> を/が 探しています。",
        "kanji_target": "頭",
        "hira_target": "あたま",
        "kanji_options": [
          "頭",
          "手",
          "夫",
          "両親"
        ],
        "hira_options": [
          "あたま",
          "て",
          "おっと",
          "りょうしん"
        ],
        "romaji": "atama",
        "vi_meaning": "cái đầu"
      },
      {
        "id": "topic_07_people_14",
        "num": 14,
        "sentence_hira": "すずきさんは <u>かお</u> を/が 探しています。",
        "sentence_kanji": "すずきさんは <u>顔</u> を/が 探しています。",
        "kanji_target": "顔",
        "hira_target": "かお",
        "kanji_options": [
          "姉",
          "両親",
          "顔",
          "父"
        ],
        "hira_options": [
          "あね",
          "りょうしん",
          "かお",
          "ちち"
        ],
        "romaji": "kao",
        "vi_meaning": "khuôn mặt"
      },
      {
        "id": "topic_07_people_15",
        "num": 15,
        "sentence_hira": "すずきさんは <u>め</u> を/が 探しています。",
        "sentence_kanji": "すずきさんは <u>目</u> を/が 探しています。",
        "kanji_target": "目",
        "hira_target": "め",
        "kanji_options": [
          "目",
          "姉",
          "手",
          "耳"
        ],
        "hira_options": [
          "め",
          "あね",
          "て",
          "みみ"
        ],
        "romaji": "me",
        "vi_meaning": "đôi mắt"
      },
      {
        "id": "topic_07_people_16",
        "num": 16,
        "sentence_hira": "すずきさんは <u>みみ</u> を/が 探しています。",
        "sentence_kanji": "すずきさんは <u>耳</u> を/が 探しています。",
        "kanji_target": "耳",
        "hira_target": "みみ",
        "kanji_options": [
          "顔",
          "耳",
          "兄",
          "声"
        ],
        "hira_options": [
          "かお",
          "みみ",
          "あに",
          "こえ"
        ],
        "romaji": "mimi",
        "vi_meaning": "lỗ tai"
      },
      {
        "id": "topic_07_people_17",
        "num": 17,
        "sentence_hira": "すずきさんは <u>はな</u> を/が 探しています。",
        "sentence_kanji": "すずきさんは <u>鼻</u> を/が 探しています。",
        "kanji_target": "鼻",
        "hira_target": "はな",
        "kanji_options": [
          "兄",
          "鼻",
          "弟",
          "顔"
        ],
        "hira_options": [
          "あに",
          "はな",
          "おとうと",
          "かお"
        ],
        "romaji": "hana",
        "vi_meaning": "cái mũi"
      },
      {
        "id": "topic_07_people_18",
        "num": 18,
        "sentence_hira": "すずきさんは <u>くち</u> を/が 探しています。",
        "sentence_kanji": "すずきさんは <u>口</u> を/が 探しています。",
        "kanji_target": "口",
        "hira_target": "くち",
        "kanji_options": [
          "口",
          "妻",
          "目",
          "親戚"
        ],
        "hira_options": [
          "くち",
          "つま",
          "め",
          "しんせき"
        ],
        "romaji": "kuchi",
        "vi_meaning": "cái miệng"
      },
      {
        "id": "topic_07_people_19",
        "num": 19,
        "sentence_hira": "すずきさん<u>は</u> は を/が 探しています。",
        "sentence_kanji": "すずきさん<u>歯</u> は を/が 探しています。",
        "kanji_target": "歯",
        "hira_target": "は",
        "kanji_options": [
          "歯",
          "家族",
          "鼻",
          "父"
        ],
        "hira_options": [
          "は",
          "かぞく",
          "はな",
          "ちち"
        ],
        "romaji": "ha",
        "vi_meaning": "cái răng"
      },
      {
        "id": "topic_07_people_20",
        "num": 20,
        "sentence_hira": "すずきさんは <u>て</u> を/が 探しています。",
        "sentence_kanji": "すずきさんは <u>手</u> を/が 探しています。",
        "kanji_target": "手",
        "hira_target": "て",
        "kanji_options": [
          "子供",
          "顔",
          "手",
          "妹"
        ],
        "hira_options": [
          "こども",
          "かお",
          "て",
          "いもうと"
        ],
        "romaji": "te",
        "vi_meaning": "bàn tay"
      },
      {
        "id": "topic_07_people_21",
        "num": 21,
        "sentence_hira": "すずきさんは <u>あし</u> を/が 探しています。",
        "sentence_kanji": "すずきさんは <u>足</u> を/が 探しています。",
        "kanji_target": "足",
        "hira_target": "あし",
        "kanji_options": [
          "心",
          "兄",
          "足",
          "手"
        ],
        "hira_options": [
          "こころ",
          "あに",
          "あし",
          "て"
        ],
        "romaji": "ashi",
        "vi_meaning": "bàn chân"
      },
      {
        "id": "topic_07_people_22",
        "num": 22,
        "sentence_hira": "すずきさんは <u>からだ</u> を/が 探しています。",
        "sentence_kanji": "すずきさんは <u>体</u> を/が 探しています。",
        "kanji_target": "体",
        "hira_target": "からだ",
        "kanji_options": [
          "妻",
          "歯",
          "体",
          "両親"
        ],
        "hira_options": [
          "つま",
          "は",
          "からだ",
          "りょうしん"
        ],
        "romaji": "karada",
        "vi_meaning": "cơ thể"
      },
      {
        "id": "topic_07_people_23",
        "num": 23,
        "sentence_hira": "すずきさんは <u>こころ</u> を/が 探しています。",
        "sentence_kanji": "すずきさんは <u>心</u> を/が 探しています。",
        "kanji_target": "心",
        "hira_target": "こころ",
        "kanji_options": [
          "鼻",
          "妹",
          "家族",
          "心"
        ],
        "hira_options": [
          "はな",
          "いもうと",
          "かぞく",
          "こころ"
        ],
        "romaji": "kokoro",
        "vi_meaning": "trái tim/tâm trí"
      },
      {
        "id": "topic_07_people_24",
        "num": 24,
        "sentence_hira": "すずきさんは <u>こえ</u> を/が 探しています。",
        "sentence_kanji": "すずきさんは <u>声</u> を/が 探しています。",
        "kanji_target": "声",
        "hira_target": "こえ",
        "kanji_options": [
          "弟",
          "姉",
          "耳",
          "声"
        ],
        "hira_options": [
          "おとうと",
          "あね",
          "みみ",
          "こえ"
        ],
        "romaji": "koe",
        "vi_meaning": "giọng nói"
      },
      {
        "id": "topic_07_people_25",
        "num": 25,
        "sentence_hira": "すずきさんは <u>かぞく</u> を/が 探しています。",
        "sentence_kanji": "すずきさんは <u>家族</u> を/が 探しています。",
        "kanji_target": "家族",
        "hira_target": "かぞく",
        "kanji_options": [
          "子供",
          "家族",
          "親戚",
          "兄"
        ],
        "hira_options": [
          "こども",
          "かぞく",
          "しんせき",
          "あに"
        ],
        "romaji": "kazoku",
        "vi_meaning": "gia đình"
      },
      {
        "id": "topic_07_people_26",
        "num": 26,
        "sentence_hira": "すずきさんは <u>りょうしん</u> を/が 探しています。",
        "sentence_kanji": "すずきさんは <u>両親</u> を/が 探しています。",
        "kanji_target": "両親",
        "hira_target": "りょうしん",
        "kanji_options": [
          "夫",
          "両親",
          "頭",
          "父"
        ],
        "hira_options": [
          "おっと",
          "りょうしん",
          "あたま",
          "ちち"
        ],
        "romaji": "ryoushin",
        "vi_meaning": "cha mẹ"
      },
      {
        "id": "topic_07_people_27",
        "num": 27,
        "sentence_hira": "すずきさんは <u>ちち</u> を/が 探しています。",
        "sentence_kanji": "すずきさんは <u>父</u> を/が 探しています。",
        "kanji_target": "父",
        "hira_target": "ちち",
        "kanji_options": [
          "耳",
          "父",
          "声",
          "姉"
        ],
        "hira_options": [
          "みみ",
          "ちち",
          "こえ",
          "あね"
        ],
        "romaji": "chichi",
        "vi_meaning": "bố"
      },
      {
        "id": "topic_07_people_28",
        "num": 28,
        "sentence_hira": "すずきさんは <u>はは</u> を/が 探しています。",
        "sentence_kanji": "すずきさんは <u>母</u> を/が 探しています。",
        "kanji_target": "母",
        "hira_target": "はは",
        "kanji_options": [
          "頭",
          "母",
          "姉",
          "頭"
        ],
        "hira_options": [
          "あたま",
          "はは",
          "あね",
          "あたま"
        ],
        "romaji": "haha",
        "vi_meaning": "mẹ"
      },
      {
        "id": "topic_07_people_29",
        "num": 29,
        "sentence_hira": "すずきさんは <u>あに</u> を/が 探しています。",
        "sentence_kanji": "すずきさんは <u>兄</u> を/が 探しています。",
        "kanji_target": "兄",
        "hira_target": "あに",
        "kanji_options": [
          "姉",
          "父",
          "妻",
          "兄"
        ],
        "hira_options": [
          "あね",
          "ちち",
          "つま",
          "あに"
        ],
        "romaji": "ani",
        "vi_meaning": "anh trai"
      },
      {
        "id": "topic_07_people_30",
        "num": 30,
        "sentence_hira": "すずきさんは <u>おとうと</u> を/が 探しています。",
        "sentence_kanji": "すずきさんは <u>弟</u> を/が 探しています。",
        "kanji_target": "弟",
        "hira_target": "おとうと",
        "kanji_options": [
          "口",
          "弟",
          "兄",
          "目"
        ],
        "hira_options": [
          "くち",
          "おとうと",
          "あに",
          "め"
        ],
        "romaji": "otouto",
        "vi_meaning": "em trai"
      },
      {
        "id": "topic_07_people_31",
        "num": 31,
        "sentence_hira": "すずきさんは <u>あね</u> を/が 探しています。",
        "sentence_kanji": "すずきさんは <u>姉</u> を/が 探しています。",
        "kanji_target": "姉",
        "hira_target": "あね",
        "kanji_options": [
          "母",
          "手",
          "姉",
          "心"
        ],
        "hira_options": [
          "はは",
          "て",
          "あね",
          "こころ"
        ],
        "romaji": "ane",
        "vi_meaning": "chị gái"
      },
      {
        "id": "topic_07_people_32",
        "num": 32,
        "sentence_hira": "すずきさんは <u>いもうと</u> を/が 探しています。",
        "sentence_kanji": "すずきさんは <u>妹</u> を/が 探しています。",
        "kanji_target": "妹",
        "hira_target": "いもうと",
        "kanji_options": [
          "妹",
          "弟",
          "足",
          "歯"
        ],
        "hira_options": [
          "いもうと",
          "おとうと",
          "あし",
          "は"
        ],
        "romaji": "imouto",
        "vi_meaning": "em gái"
      },
      {
        "id": "topic_07_people_33",
        "num": 33,
        "sentence_hira": "すずきさんは <u>おっと</u> を/が 探しています。",
        "sentence_kanji": "すずきさんは <u>夫</u> を/が 探しています。",
        "kanji_target": "夫",
        "hira_target": "おっと",
        "kanji_options": [
          "両親",
          "顔",
          "夫",
          "歯"
        ],
        "hira_options": [
          "りょうしん",
          "かお",
          "おっと",
          "は"
        ],
        "romaji": "otto",
        "vi_meaning": "chồng"
      },
      {
        "id": "topic_07_people_34",
        "num": 34,
        "sentence_hira": "すずきさんは <u>つま</u> を/が 探しています。",
        "sentence_kanji": "すずきさんは <u>妻</u> を/が 探しています。",
        "kanji_target": "妻",
        "hira_target": "つま",
        "kanji_options": [
          "夫",
          "手",
          "夫",
          "妻"
        ],
        "hira_options": [
          "おっと",
          "て",
          "おっと",
          "つま"
        ],
        "romaji": "tsuma",
        "vi_meaning": "vợ"
      },
      {
        "id": "topic_07_people_35",
        "num": 35,
        "sentence_hira": "すずきさんは <u>こども</u> を/が 探しています。",
        "sentence_kanji": "すずきさんは <u>子供</u> を/が 探しています。",
        "kanji_target": "子供",
        "hira_target": "こども",
        "kanji_options": [
          "声",
          "親戚",
          "頭",
          "子供"
        ],
        "hira_options": [
          "こえ",
          "しんせき",
          "あたま",
          "こども"
        ],
        "romaji": "kodomo",
        "vi_meaning": "trẻ em"
      },
      {
        "id": "topic_07_people_36",
        "num": 36,
        "sentence_hira": "すずきさんは <u>しんせき</u> を/が 探しています。",
        "sentence_kanji": "すずきさんは <u>親戚</u> を/が 探しています。",
        "kanji_target": "親戚",
        "hira_target": "しんせき",
        "kanji_options": [
          "口",
          "鼻",
          "妹",
          "親戚"
        ],
        "hira_options": [
          "くち",
          "はな",
          "いもうと",
          "しんせき"
        ],
        "romaji": "shinseki",
        "vi_meaning": "họ hàng"
      },
      {
        "id": "topic_07_people_37",
        "num": 37,
        "sentence_hira": "すずきさんは <u>あたま</u> を/が 探しています。",
        "sentence_kanji": "すずきさんは <u>頭</u> を/が 探しています。",
        "kanji_target": "頭",
        "hira_target": "あたま",
        "kanji_options": [
          "頭",
          "姉",
          "声",
          "両親"
        ],
        "hira_options": [
          "あたま",
          "あね",
          "こえ",
          "りょうしん"
        ],
        "romaji": "atama",
        "vi_meaning": "cái đầu"
      },
      {
        "id": "topic_07_people_38",
        "num": 38,
        "sentence_hira": "すずきさんは <u>かお</u> を/が 探しています。",
        "sentence_kanji": "すずきさんは <u>顔</u> を/が 探しています。",
        "kanji_target": "顔",
        "hira_target": "かお",
        "kanji_options": [
          "家族",
          "父",
          "顔",
          "弟"
        ],
        "hira_options": [
          "かぞく",
          "ちち",
          "かお",
          "おとうと"
        ],
        "romaji": "kao",
        "vi_meaning": "khuôn mặt"
      },
      {
        "id": "topic_07_people_39",
        "num": 39,
        "sentence_hira": "すずきさんは <u>め</u> を/が 探しています。",
        "sentence_kanji": "すずきさんは <u>目</u> を/が 探しています。",
        "kanji_target": "目",
        "hira_target": "め",
        "kanji_options": [
          "歯",
          "目",
          "心",
          "家族"
        ],
        "hira_options": [
          "は",
          "め",
          "こころ",
          "かぞく"
        ],
        "romaji": "me",
        "vi_meaning": "đôi mắt"
      },
      {
        "id": "topic_07_people_40",
        "num": 40,
        "sentence_hira": "すずきさんは <u>みみ</u> を/が 探しています。",
        "sentence_kanji": "すずきさんは <u>耳</u> を/が 探しています。",
        "kanji_target": "耳",
        "hira_target": "みみ",
        "kanji_options": [
          "父",
          "歯",
          "耳",
          "母"
        ],
        "hira_options": [
          "ちち",
          "は",
          "みみ",
          "はは"
        ],
        "romaji": "mimi",
        "vi_meaning": "lỗ tai"
      },
      {
        "id": "topic_07_people_41",
        "num": 41,
        "sentence_hira": "すずきさんは <u>はな</u> を/が 探しています。",
        "sentence_kanji": "すずきさんは <u>鼻</u> を/が 探しています。",
        "kanji_target": "鼻",
        "hira_target": "はな",
        "kanji_options": [
          "鼻",
          "父",
          "子供",
          "親戚"
        ],
        "hira_options": [
          "はな",
          "ちち",
          "こども",
          "しんせき"
        ],
        "romaji": "hana",
        "vi_meaning": "cái mũi"
      },
      {
        "id": "topic_07_people_42",
        "num": 42,
        "sentence_hira": "すずきさんは <u>くち</u> を/が 探しています。",
        "sentence_kanji": "すずきさんは <u>口</u> を/が 探しています。",
        "kanji_target": "口",
        "hira_target": "くち",
        "kanji_options": [
          "口",
          "兄",
          "家族",
          "妻"
        ],
        "hira_options": [
          "くち",
          "あに",
          "かぞく",
          "つま"
        ],
        "romaji": "kuchi",
        "vi_meaning": "cái miệng"
      },
      {
        "id": "topic_07_people_43",
        "num": 43,
        "sentence_hira": "すずきさん<u>は</u> は を/が 探しています。",
        "sentence_kanji": "すずきさん<u>歯</u> は を/が 探しています。",
        "kanji_target": "歯",
        "hira_target": "は",
        "kanji_options": [
          "妹",
          "妻",
          "夫",
          "歯"
        ],
        "hira_options": [
          "いもうと",
          "つま",
          "おっと",
          "は"
        ],
        "romaji": "ha",
        "vi_meaning": "cái răng"
      },
      {
        "id": "topic_07_people_44",
        "num": 44,
        "sentence_hira": "すずきさんは <u>て</u> を/が 探しています。",
        "sentence_kanji": "すずきさんは <u>手</u> を/が 探しています。",
        "kanji_target": "手",
        "hira_target": "て",
        "kanji_options": [
          "心",
          "声",
          "手",
          "顔"
        ],
        "hira_options": [
          "こころ",
          "こえ",
          "て",
          "かお"
        ],
        "romaji": "te",
        "vi_meaning": "bàn tay"
      },
      {
        "id": "topic_07_people_45",
        "num": 45,
        "sentence_hira": "すずきさんは <u>あし</u> を/が 探しています。",
        "sentence_kanji": "すずきさんは <u>足</u> を/が 探しています。",
        "kanji_target": "足",
        "hira_target": "あし",
        "kanji_options": [
          "子供",
          "両親",
          "足",
          "兄"
        ],
        "hira_options": [
          "こども",
          "りょうしん",
          "あし",
          "あに"
        ],
        "romaji": "ashi",
        "vi_meaning": "bàn chân"
      },
      {
        "id": "topic_07_people_46",
        "num": 46,
        "sentence_hira": "すずきさんは <u>からだ</u> を/が 探しています。",
        "sentence_kanji": "すずきさんは <u>体</u> を/が 探しています。",
        "kanji_target": "体",
        "hira_target": "からだ",
        "kanji_options": [
          "姉",
          "口",
          "頭",
          "体"
        ],
        "hira_options": [
          "あね",
          "くち",
          "あたま",
          "からだ"
        ],
        "romaji": "karada",
        "vi_meaning": "cơ thể"
      },
      {
        "id": "topic_07_people_47",
        "num": 47,
        "sentence_hira": "すずきさんは <u>こころ</u> を/が 探しています。",
        "sentence_kanji": "すずきさんは <u>心</u> を/が 探しています。",
        "kanji_target": "心",
        "hira_target": "こころ",
        "kanji_options": [
          "体",
          "心",
          "子供",
          "顔"
        ],
        "hira_options": [
          "からだ",
          "こころ",
          "こども",
          "かお"
        ],
        "romaji": "kokoro",
        "vi_meaning": "trái tim/tâm trí"
      },
      {
        "id": "topic_07_people_48",
        "num": 48,
        "sentence_hira": "すずきさんは <u>こえ</u> を/が 探しています。",
        "sentence_kanji": "すずきさんは <u>声</u> を/が 探しています。",
        "kanji_target": "声",
        "hira_target": "こえ",
        "kanji_options": [
          "両親",
          "声",
          "体",
          "両親"
        ],
        "hira_options": [
          "りょうしん",
          "こえ",
          "からだ",
          "りょうしん"
        ],
        "romaji": "koe",
        "vi_meaning": "giọng nói"
      },
      {
        "id": "topic_07_people_49",
        "num": 49,
        "sentence_hira": "すずきさんは <u>かぞく</u> を/が 探しています。",
        "sentence_kanji": "すずきさんは <u>家族</u> を/が 探しています。",
        "kanji_target": "家族",
        "hira_target": "かぞく",
        "kanji_options": [
          "妹",
          "体",
          "家族",
          "顔"
        ],
        "hira_options": [
          "いもうと",
          "からだ",
          "かぞく",
          "かお"
        ],
        "romaji": "kazoku",
        "vi_meaning": "gia đình"
      },
      {
        "id": "topic_07_people_50",
        "num": 50,
        "sentence_hira": "すずきさんは <u>りょうしん</u> を/が 探しています。",
        "sentence_kanji": "すずきさんは <u>両親</u> を/が 探しています。",
        "kanji_target": "両親",
        "hira_target": "りょうしん",
        "kanji_options": [
          "子供",
          "親戚",
          "両親",
          "家族"
        ],
        "hira_options": [
          "こども",
          "しんせき",
          "りょうしん",
          "かぞく"
        ],
        "romaji": "ryoushin",
        "vi_meaning": "cha mẹ"
      },
      {
        "id": "topic_07_people_51",
        "num": 51,
        "sentence_hira": "すずきさんは <u>ちち</u> を/が 探しています。",
        "sentence_kanji": "すずきさんは <u>父</u> を/が 探しています。",
        "kanji_target": "父",
        "hira_target": "ちち",
        "kanji_options": [
          "父",
          "妻",
          "顔",
          "妹"
        ],
        "hira_options": [
          "ちち",
          "つま",
          "かお",
          "いもうと"
        ],
        "romaji": "chichi",
        "vi_meaning": "bố"
      },
      {
        "id": "topic_07_people_52",
        "num": 52,
        "sentence_hira": "すずきさんは <u>はは</u> を/が 探しています。",
        "sentence_kanji": "すずきさんは <u>母</u> を/が 探しています。",
        "kanji_target": "母",
        "hira_target": "はは",
        "kanji_options": [
          "親戚",
          "母",
          "口",
          "鼻"
        ],
        "hira_options": [
          "しんせき",
          "はは",
          "くち",
          "はな"
        ],
        "romaji": "haha",
        "vi_meaning": "mẹ"
      },
      {
        "id": "topic_07_people_53",
        "num": 53,
        "sentence_hira": "すずきさんは <u>あに</u> を/が 探しています。",
        "sentence_kanji": "すずきさんは <u>兄</u> を/が 探しています。",
        "kanji_target": "兄",
        "hira_target": "あに",
        "kanji_options": [
          "兄",
          "耳",
          "鼻",
          "目"
        ],
        "hira_options": [
          "あに",
          "みみ",
          "はな",
          "め"
        ],
        "romaji": "ani",
        "vi_meaning": "anh trai"
      },
      {
        "id": "topic_07_people_54",
        "num": 54,
        "sentence_hira": "すずきさんは <u>おとうと</u> を/が 探しています。",
        "sentence_kanji": "すずきさんは <u>弟</u> を/が 探しています。",
        "kanji_target": "弟",
        "hira_target": "おとうと",
        "kanji_options": [
          "足",
          "体",
          "弟",
          "親戚"
        ],
        "hira_options": [
          "あし",
          "からだ",
          "おとうと",
          "しんせき"
        ],
        "romaji": "otouto",
        "vi_meaning": "em trai"
      },
      {
        "id": "topic_07_people_55",
        "num": 55,
        "sentence_hira": "すずきさんは <u>あね</u> を/が 探しています。",
        "sentence_kanji": "すずきさんは <u>姉</u> を/が 探しています。",
        "kanji_target": "姉",
        "hira_target": "あね",
        "kanji_options": [
          "声",
          "体",
          "歯",
          "姉"
        ],
        "hira_options": [
          "こえ",
          "からだ",
          "は",
          "あね"
        ],
        "romaji": "ane",
        "vi_meaning": "chị gái"
      },
      {
        "id": "topic_07_people_56",
        "num": 56,
        "sentence_hira": "すずきさんは <u>いもうと</u> を/が 探しています。",
        "sentence_kanji": "すずきさんは <u>妹</u> を/が 探しています。",
        "kanji_target": "妹",
        "hira_target": "いもうと",
        "kanji_options": [
          "妹",
          "足",
          "口",
          "口"
        ],
        "hira_options": [
          "いもうと",
          "あし",
          "くち",
          "くち"
        ],
        "romaji": "imouto",
        "vi_meaning": "em gái"
      },
      {
        "id": "topic_07_people_57",
        "num": 57,
        "sentence_hira": "すずきさんは <u>おっと</u> を/が 探しています。",
        "sentence_kanji": "すずきさんは <u>夫</u> を/が 探しています。",
        "kanji_target": "夫",
        "hira_target": "おっと",
        "kanji_options": [
          "弟",
          "父",
          "夫",
          "頭"
        ],
        "hira_options": [
          "おとうと",
          "ちち",
          "おっと",
          "あたま"
        ],
        "romaji": "otto",
        "vi_meaning": "chồng"
      },
      {
        "id": "topic_07_people_58",
        "num": 58,
        "sentence_hira": "すずきさんは <u>つま</u> を/が 探しています。",
        "sentence_kanji": "すずきさんは <u>妻</u> を/が 探しています。",
        "kanji_target": "妻",
        "hira_target": "つま",
        "kanji_options": [
          "声",
          "妻",
          "妹",
          "夫"
        ],
        "hira_options": [
          "こえ",
          "つま",
          "いもうと",
          "おっと"
        ],
        "romaji": "tsuma",
        "vi_meaning": "vợ"
      },
      {
        "id": "topic_07_people_59",
        "num": 59,
        "sentence_hira": "すずきさんは <u>こども</u> を/が 探しています。",
        "sentence_kanji": "すずきさんは <u>子供</u> を/が 探しています。",
        "kanji_target": "子供",
        "hira_target": "こども",
        "kanji_options": [
          "姉",
          "耳",
          "父",
          "子供"
        ],
        "hira_options": [
          "あね",
          "みみ",
          "ちち",
          "こども"
        ],
        "romaji": "kodomo",
        "vi_meaning": "trẻ em"
      },
      {
        "id": "topic_07_people_60",
        "num": 60,
        "sentence_hira": "すずきさんは <u>しんせき</u> を/が 探しています。",
        "sentence_kanji": "すずきさんは <u>親戚</u> を/が 探しています。",
        "kanji_target": "親戚",
        "hira_target": "しんせき",
        "kanji_options": [
          "足",
          "親戚",
          "父",
          "顔"
        ],
        "hira_options": [
          "あし",
          "しんせき",
          "ちち",
          "かお"
        ],
        "romaji": "shinseki",
        "vi_meaning": "họ hàng"
      },
      {
        "id": "topic_07_people_61",
        "num": 61,
        "sentence_hira": "すずきさんは <u>あたま</u> を/が 探しています。",
        "sentence_kanji": "すずきさんは <u>頭</u> を/が 探しています。",
        "kanji_target": "頭",
        "hira_target": "あたま",
        "kanji_options": [
          "頭",
          "手",
          "顔",
          "体"
        ],
        "hira_options": [
          "あたま",
          "て",
          "かお",
          "からだ"
        ],
        "romaji": "atama",
        "vi_meaning": "cái đầu"
      },
      {
        "id": "topic_07_people_62",
        "num": 62,
        "sentence_hira": "すずきさんは <u>かお</u> を/が 探しています。",
        "sentence_kanji": "すずきさんは <u>顔</u> を/が 探しています。",
        "kanji_target": "顔",
        "hira_target": "かお",
        "kanji_options": [
          "声",
          "妻",
          "顔",
          "妻"
        ],
        "hira_options": [
          "こえ",
          "つま",
          "かお",
          "つま"
        ],
        "romaji": "kao",
        "vi_meaning": "khuôn mặt"
      },
      {
        "id": "topic_07_people_63",
        "num": 63,
        "sentence_hira": "すずきさんは <u>め</u> を/が 探しています。",
        "sentence_kanji": "すずきさんは <u>目</u> を/が 探しています。",
        "kanji_target": "目",
        "hira_target": "め",
        "kanji_options": [
          "声",
          "手",
          "顔",
          "目"
        ],
        "hira_options": [
          "こえ",
          "て",
          "かお",
          "め"
        ],
        "romaji": "me",
        "vi_meaning": "đôi mắt"
      },
      {
        "id": "topic_07_people_64",
        "num": 64,
        "sentence_hira": "すずきさんは <u>みみ</u> を/が 探しています。",
        "sentence_kanji": "すずきさんは <u>耳</u> を/が 探しています。",
        "kanji_target": "耳",
        "hira_target": "みみ",
        "kanji_options": [
          "兄",
          "姉",
          "耳",
          "口"
        ],
        "hira_options": [
          "あに",
          "あね",
          "みみ",
          "くち"
        ],
        "romaji": "mimi",
        "vi_meaning": "lỗ tai"
      },
      {
        "id": "topic_07_people_65",
        "num": 65,
        "sentence_hira": "すずきさんは <u>はな</u> を/が 探しています。",
        "sentence_kanji": "すずきさんは <u>鼻</u> を/が 探しています。",
        "kanji_target": "鼻",
        "hira_target": "はな",
        "kanji_options": [
          "両親",
          "鼻",
          "兄",
          "歯"
        ],
        "hira_options": [
          "りょうしん",
          "はな",
          "あに",
          "は"
        ],
        "romaji": "hana",
        "vi_meaning": "cái mũi"
      },
      {
        "id": "topic_07_people_66",
        "num": 66,
        "sentence_hira": "すずきさんは <u>くち</u> を/が 探しています。",
        "sentence_kanji": "すずきさんは <u>口</u> を/が 探しています。",
        "kanji_target": "口",
        "hira_target": "くち",
        "kanji_options": [
          "子供",
          "目",
          "口",
          "母"
        ],
        "hira_options": [
          "こども",
          "め",
          "くち",
          "はは"
        ],
        "romaji": "kuchi",
        "vi_meaning": "cái miệng"
      },
      {
        "id": "topic_07_people_67",
        "num": 67,
        "sentence_hira": "すずきさん<u>は</u> は を/が 探しています。",
        "sentence_kanji": "すずきさん<u>歯</u> は を/が 探しています。",
        "kanji_target": "歯",
        "hira_target": "は",
        "kanji_options": [
          "妻",
          "父",
          "歯",
          "家族"
        ],
        "hira_options": [
          "つま",
          "ちち",
          "は",
          "かぞく"
        ],
        "romaji": "ha",
        "vi_meaning": "cái răng"
      },
      {
        "id": "topic_07_people_68",
        "num": 68,
        "sentence_hira": "すずきさんは <u>て</u> を/が 探しています。",
        "sentence_kanji": "すずきさんは <u>手</u> を/が 探しています。",
        "kanji_target": "手",
        "hira_target": "て",
        "kanji_options": [
          "耳",
          "妹",
          "夫",
          "手"
        ],
        "hira_options": [
          "みみ",
          "いもうと",
          "おっと",
          "て"
        ],
        "romaji": "te",
        "vi_meaning": "bàn tay"
      },
      {
        "id": "topic_07_people_69",
        "num": 69,
        "sentence_hira": "すずきさんは <u>あし</u> を/が 探しています。",
        "sentence_kanji": "すずきさんは <u>足</u> を/が 探しています。",
        "kanji_target": "足",
        "hira_target": "あし",
        "kanji_options": [
          "顔",
          "顔",
          "足",
          "姉"
        ],
        "hira_options": [
          "かお",
          "かお",
          "あし",
          "あね"
        ],
        "romaji": "ashi",
        "vi_meaning": "bàn chân"
      },
      {
        "id": "topic_07_people_70",
        "num": 70,
        "sentence_hira": "すずきさんは <u>からだ</u> を/が 探しています。",
        "sentence_kanji": "すずきさんは <u>体</u> を/が 探しています。",
        "kanji_target": "体",
        "hira_target": "からだ",
        "kanji_options": [
          "妹",
          "家族",
          "体",
          "家族"
        ],
        "hira_options": [
          "いもうと",
          "かぞく",
          "からだ",
          "かぞく"
        ],
        "romaji": "karada",
        "vi_meaning": "cơ thể"
      },
      {
        "id": "topic_07_people_71",
        "num": 71,
        "sentence_hira": "すずきさんは <u>こころ</u> を/が 探しています。",
        "sentence_kanji": "すずきさんは <u>心</u> を/が 探しています。",
        "kanji_target": "心",
        "hira_target": "こころ",
        "kanji_options": [
          "口",
          "心",
          "妹",
          "姉"
        ],
        "hira_options": [
          "くち",
          "こころ",
          "いもうと",
          "あね"
        ],
        "romaji": "kokoro",
        "vi_meaning": "trái tim/tâm trí"
      },
      {
        "id": "topic_07_people_72",
        "num": 72,
        "sentence_hira": "すずきさんは <u>こえ</u> を/が 探しています。",
        "sentence_kanji": "すずきさんは <u>声</u> を/が 探しています。",
        "kanji_target": "声",
        "hira_target": "こえ",
        "kanji_options": [
          "口",
          "夫",
          "声",
          "足"
        ],
        "hira_options": [
          "くち",
          "おっと",
          "こえ",
          "あし"
        ],
        "romaji": "koe",
        "vi_meaning": "giọng nói"
      },
      {
        "id": "topic_07_people_73",
        "num": 73,
        "sentence_hira": "すずきさんは <u>かぞく</u> を/が 探しています。",
        "sentence_kanji": "すずきさんは <u>家族</u> を/が 探しています。",
        "kanji_target": "家族",
        "hira_target": "かぞく",
        "kanji_options": [
          "家族",
          "足",
          "両親",
          "妹"
        ],
        "hira_options": [
          "かぞく",
          "あし",
          "りょうしん",
          "いもうと"
        ],
        "romaji": "kazoku",
        "vi_meaning": "gia đình"
      },
      {
        "id": "topic_07_people_74",
        "num": 74,
        "sentence_hira": "すずきさんは <u>りょうしん</u> を/が 探しています。",
        "sentence_kanji": "すずきさんは <u>両親</u> を/が 探しています。",
        "kanji_target": "両親",
        "hira_target": "りょうしん",
        "kanji_options": [
          "顔",
          "両親",
          "歯",
          "子供"
        ],
        "hira_options": [
          "かお",
          "りょうしん",
          "は",
          "こども"
        ],
        "romaji": "ryoushin",
        "vi_meaning": "cha mẹ"
      },
      {
        "id": "topic_07_people_75",
        "num": 75,
        "sentence_hira": "すずきさんは <u>ちち</u> を/が 探しています。",
        "sentence_kanji": "すずきさんは <u>父</u> を/が 探しています。",
        "kanji_target": "父",
        "hira_target": "ちち",
        "kanji_options": [
          "姉",
          "父",
          "顔",
          "姉"
        ],
        "hira_options": [
          "あね",
          "ちち",
          "かお",
          "あね"
        ],
        "romaji": "chichi",
        "vi_meaning": "bố"
      },
      {
        "id": "topic_07_people_76",
        "num": 76,
        "sentence_hira": "すずきさんは <u>はは</u> を/が 探しています。",
        "sentence_kanji": "すずきさんは <u>母</u> を/が 探しています。",
        "kanji_target": "母",
        "hira_target": "はは",
        "kanji_options": [
          "母",
          "体",
          "親戚",
          "妻"
        ],
        "hira_options": [
          "はは",
          "からだ",
          "しんせき",
          "つま"
        ],
        "romaji": "haha",
        "vi_meaning": "mẹ"
      },
      {
        "id": "topic_07_people_77",
        "num": 77,
        "sentence_hira": "すずきさんは <u>あに</u> を/が 探しています。",
        "sentence_kanji": "すずきさんは <u>兄</u> を/が 探しています。",
        "kanji_target": "兄",
        "hira_target": "あに",
        "kanji_options": [
          "夫",
          "兄",
          "両親",
          "鼻"
        ],
        "hira_options": [
          "おっと",
          "あに",
          "りょうしん",
          "はな"
        ],
        "romaji": "ani",
        "vi_meaning": "anh trai"
      },
      {
        "id": "topic_07_people_78",
        "num": 78,
        "sentence_hira": "すずきさんは <u>おとうと</u> を/が 探しています。",
        "sentence_kanji": "すずきさんは <u>弟</u> を/が 探しています。",
        "kanji_target": "弟",
        "hira_target": "おとうと",
        "kanji_options": [
          "口",
          "弟",
          "顔",
          "両親"
        ],
        "hira_options": [
          "くち",
          "おとうと",
          "かお",
          "りょうしん"
        ],
        "romaji": "otouto",
        "vi_meaning": "em trai"
      },
      {
        "id": "topic_07_people_79",
        "num": 79,
        "sentence_hira": "すずきさんは <u>あね</u> を/が 探しています。",
        "sentence_kanji": "すずきさんは <u>姉</u> を/が 探しています。",
        "kanji_target": "姉",
        "hira_target": "あね",
        "kanji_options": [
          "弟",
          "顔",
          "姉",
          "家族"
        ],
        "hira_options": [
          "おとうと",
          "かお",
          "あね",
          "かぞく"
        ],
        "romaji": "ane",
        "vi_meaning": "chị gái"
      },
      {
        "id": "topic_07_people_80",
        "num": 80,
        "sentence_hira": "すずきさんは <u>いもうと</u> を/が 探しています。",
        "sentence_kanji": "すずきさんは <u>妹</u> を/が 探しています。",
        "kanji_target": "妹",
        "hira_target": "いもうと",
        "kanji_options": [
          "体",
          "妹",
          "頭",
          "姉"
        ],
        "hira_options": [
          "からだ",
          "いもうと",
          "あたま",
          "あね"
        ],
        "romaji": "imouto",
        "vi_meaning": "em gái"
      },
      {
        "id": "topic_07_people_81",
        "num": 81,
        "sentence_hira": "すずきさんは <u>おっと</u> を/が 探しています。",
        "sentence_kanji": "すずきさんは <u>夫</u> を/が 探しています。",
        "kanji_target": "夫",
        "hira_target": "おっと",
        "kanji_options": [
          "耳",
          "手",
          "夫",
          "家族"
        ],
        "hira_options": [
          "みみ",
          "て",
          "おっと",
          "かぞく"
        ],
        "romaji": "otto",
        "vi_meaning": "chồng"
      },
      {
        "id": "topic_07_people_82",
        "num": 82,
        "sentence_hira": "すずきさんは <u>つま</u> を/が 探しています。",
        "sentence_kanji": "すずきさんは <u>妻</u> を/が 探しています。",
        "kanji_target": "妻",
        "hira_target": "つま",
        "kanji_options": [
          "手",
          "口",
          "妻",
          "歯"
        ],
        "hira_options": [
          "て",
          "くち",
          "つま",
          "は"
        ],
        "romaji": "tsuma",
        "vi_meaning": "vợ"
      },
      {
        "id": "topic_07_people_83",
        "num": 83,
        "sentence_hira": "すずきさんは <u>こども</u> を/が 探しています。",
        "sentence_kanji": "すずきさんは <u>子供</u> を/が 探しています。",
        "kanji_target": "子供",
        "hira_target": "こども",
        "kanji_options": [
          "母",
          "子供",
          "弟",
          "兄"
        ],
        "hira_options": [
          "はは",
          "こども",
          "おとうと",
          "あに"
        ],
        "romaji": "kodomo",
        "vi_meaning": "trẻ em"
      },
      {
        "id": "topic_07_people_84",
        "num": 84,
        "sentence_hira": "すずきさんは <u>しんせき</u> を/が 探しています。",
        "sentence_kanji": "すずきさんは <u>親戚</u> を/が 探しています。",
        "kanji_target": "親戚",
        "hira_target": "しんせき",
        "kanji_options": [
          "父",
          "家族",
          "足",
          "親戚"
        ],
        "hira_options": [
          "ちち",
          "かぞく",
          "あし",
          "しんせき"
        ],
        "romaji": "shinseki",
        "vi_meaning": "họ hàng"
      },
      {
        "id": "topic_07_people_85",
        "num": 85,
        "sentence_hira": "すずきさんは <u>あたま</u> を/が 探しています。",
        "sentence_kanji": "すずきさんは <u>頭</u> を/が 探しています。",
        "kanji_target": "頭",
        "hira_target": "あたま",
        "kanji_options": [
          "心",
          "耳",
          "頭",
          "顔"
        ],
        "hira_options": [
          "こころ",
          "みみ",
          "あたま",
          "かお"
        ],
        "romaji": "atama",
        "vi_meaning": "cái đầu"
      },
      {
        "id": "topic_07_people_86",
        "num": 86,
        "sentence_hira": "すずきさんは <u>かお</u> を/が 探しています。",
        "sentence_kanji": "すずきさんは <u>顔</u> を/が 探しています。",
        "kanji_target": "顔",
        "hira_target": "かお",
        "kanji_options": [
          "両親",
          "父",
          "顔",
          "子供"
        ],
        "hira_options": [
          "りょうしん",
          "ちち",
          "かお",
          "こども"
        ],
        "romaji": "kao",
        "vi_meaning": "khuôn mặt"
      },
      {
        "id": "topic_07_people_87",
        "num": 87,
        "sentence_hira": "すずきさんは <u>め</u> を/が 探しています。",
        "sentence_kanji": "すずきさんは <u>目</u> を/が 探しています。",
        "kanji_target": "目",
        "hira_target": "め",
        "kanji_options": [
          "鼻",
          "母",
          "鼻",
          "目"
        ],
        "hira_options": [
          "はな",
          "はは",
          "はな",
          "め"
        ],
        "romaji": "me",
        "vi_meaning": "đôi mắt"
      },
      {
        "id": "topic_07_people_88",
        "num": 88,
        "sentence_hira": "すずきさんは <u>みみ</u> を/が 探しています。",
        "sentence_kanji": "すずきさんは <u>耳</u> を/が 探しています。",
        "kanji_target": "耳",
        "hira_target": "みみ",
        "kanji_options": [
          "目",
          "顔",
          "耳",
          "父"
        ],
        "hira_options": [
          "め",
          "かお",
          "みみ",
          "ちち"
        ],
        "romaji": "mimi",
        "vi_meaning": "lỗ tai"
      },
      {
        "id": "topic_07_people_89",
        "num": 89,
        "sentence_hira": "すずきさんは <u>はな</u> を/が 探しています。",
        "sentence_kanji": "すずきさんは <u>鼻</u> を/が 探しています。",
        "kanji_target": "鼻",
        "hira_target": "はな",
        "kanji_options": [
          "手",
          "鼻",
          "父",
          "弟"
        ],
        "hira_options": [
          "て",
          "はな",
          "ちち",
          "おとうと"
        ],
        "romaji": "hana",
        "vi_meaning": "cái mũi"
      },
      {
        "id": "topic_07_people_90",
        "num": 90,
        "sentence_hira": "すずきさんは <u>くち</u> を/が 探しています。",
        "sentence_kanji": "すずきさんは <u>口</u> を/が 探しています。",
        "kanji_target": "口",
        "hira_target": "くち",
        "kanji_options": [
          "口",
          "声",
          "足",
          "目"
        ],
        "hira_options": [
          "くち",
          "こえ",
          "あし",
          "め"
        ],
        "romaji": "kuchi",
        "vi_meaning": "cái miệng"
      },
      {
        "id": "topic_07_people_91",
        "num": 91,
        "sentence_hira": "すずきさん<u>は</u> は を/が 探しています。",
        "sentence_kanji": "すずきさん<u>歯</u> は を/が 探しています。",
        "kanji_target": "歯",
        "hira_target": "は",
        "kanji_options": [
          "鼻",
          "夫",
          "妹",
          "歯"
        ],
        "hira_options": [
          "はな",
          "おっと",
          "いもうと",
          "は"
        ],
        "romaji": "ha",
        "vi_meaning": "cái răng"
      },
      {
        "id": "topic_07_people_92",
        "num": 92,
        "sentence_hira": "すずきさんは <u>て</u> を/が 探しています。",
        "sentence_kanji": "すずきさんは <u>手</u> を/が 探しています。",
        "kanji_target": "手",
        "hira_target": "て",
        "kanji_options": [
          "親戚",
          "足",
          "手",
          "母"
        ],
        "hira_options": [
          "しんせき",
          "あし",
          "て",
          "はは"
        ],
        "romaji": "te",
        "vi_meaning": "bàn tay"
      },
      {
        "id": "topic_07_people_93",
        "num": 93,
        "sentence_hira": "すずきさんは <u>あし</u> を/が 探しています。",
        "sentence_kanji": "すずきさんは <u>足</u> を/が 探しています。",
        "kanji_target": "足",
        "hira_target": "あし",
        "kanji_options": [
          "兄",
          "父",
          "子供",
          "足"
        ],
        "hira_options": [
          "あに",
          "ちち",
          "こども",
          "あし"
        ],
        "romaji": "ashi",
        "vi_meaning": "bàn chân"
      },
      {
        "id": "topic_07_people_94",
        "num": 94,
        "sentence_hira": "すずきさんは <u>からだ</u> を/が 探しています。",
        "sentence_kanji": "すずきさんは <u>体</u> を/が 探しています。",
        "kanji_target": "体",
        "hira_target": "からだ",
        "kanji_options": [
          "顔",
          "目",
          "手",
          "体"
        ],
        "hira_options": [
          "かお",
          "め",
          "て",
          "からだ"
        ],
        "romaji": "karada",
        "vi_meaning": "cơ thể"
      },
      {
        "id": "topic_07_people_95",
        "num": 95,
        "sentence_hira": "すずきさんは <u>こころ</u> を/が 探しています。",
        "sentence_kanji": "すずきさんは <u>心</u> を/が 探しています。",
        "kanji_target": "心",
        "hira_target": "こころ",
        "kanji_options": [
          "心",
          "両親",
          "歯",
          "足"
        ],
        "hira_options": [
          "こころ",
          "りょうしん",
          "は",
          "あし"
        ],
        "romaji": "kokoro",
        "vi_meaning": "trái tim/tâm trí"
      },
      {
        "id": "topic_07_people_96",
        "num": 96,
        "sentence_hira": "すずきさんは <u>こえ</u> を/が 探しています。",
        "sentence_kanji": "すずきさんは <u>声</u> を/が 探しています。",
        "kanji_target": "声",
        "hira_target": "こえ",
        "kanji_options": [
          "顔",
          "手",
          "声",
          "家族"
        ],
        "hira_options": [
          "かお",
          "て",
          "こえ",
          "かぞく"
        ],
        "romaji": "koe",
        "vi_meaning": "giọng nói"
      },
      {
        "id": "topic_07_people_97",
        "num": 97,
        "sentence_hira": "すずきさんは <u>かぞく</u> を/が 探しています。",
        "sentence_kanji": "すずきさんは <u>家族</u> を/が 探しています。",
        "kanji_target": "家族",
        "hira_target": "かぞく",
        "kanji_options": [
          "体",
          "家族",
          "体",
          "父"
        ],
        "hira_options": [
          "からだ",
          "かぞく",
          "からだ",
          "ちち"
        ],
        "romaji": "kazoku",
        "vi_meaning": "gia đình"
      },
      {
        "id": "topic_07_people_98",
        "num": 98,
        "sentence_hira": "すずきさんは <u>りょうしん</u> を/が 探しています。",
        "sentence_kanji": "すずきさんは <u>両親</u> を/が 探しています。",
        "kanji_target": "両親",
        "hira_target": "りょうしん",
        "kanji_options": [
          "両親",
          "頭",
          "妻",
          "夫"
        ],
        "hira_options": [
          "りょうしん",
          "あたま",
          "つま",
          "おっと"
        ],
        "romaji": "ryoushin",
        "vi_meaning": "cha mẹ"
      },
      {
        "id": "topic_07_people_99",
        "num": 99,
        "sentence_hira": "すずきさんは <u>ちち</u> を/が 探しています。",
        "sentence_kanji": "すずきさんは <u>父</u> を/が 探しています。",
        "kanji_target": "父",
        "hira_target": "ちち",
        "kanji_options": [
          "兄",
          "親戚",
          "父",
          "妻"
        ],
        "hira_options": [
          "あに",
          "しんせき",
          "ちち",
          "つま"
        ],
        "romaji": "chichi",
        "vi_meaning": "bố"
      },
      {
        "id": "topic_07_people_100",
        "num": 100,
        "sentence_hira": "すずきさんは <u>はは</u> を/が 探しています。",
        "sentence_kanji": "すずきさんは <u>母</u> を/が 探しています。",
        "kanji_target": "母",
        "hira_target": "はは",
        "kanji_options": [
          "家族",
          "歯",
          "母",
          "家族"
        ],
        "hira_options": [
          "かぞく",
          "は",
          "はは",
          "かぞく"
        ],
        "romaji": "haha",
        "vi_meaning": "mẹ"
      },
      {
        "id": "topic_07_people_101",
        "num": 101,
        "sentence_hira": "すずきさんは <u>あに</u> を/が 探しています。",
        "sentence_kanji": "すずきさんは <u>兄</u> を/が 探しています。",
        "kanji_target": "兄",
        "hira_target": "あに",
        "kanji_options": [
          "弟",
          "弟",
          "兄",
          "心"
        ],
        "hira_options": [
          "おとうと",
          "おとうと",
          "あに",
          "こころ"
        ],
        "romaji": "ani",
        "vi_meaning": "anh trai"
      },
      {
        "id": "topic_07_people_102",
        "num": 102,
        "sentence_hira": "すずきさんは <u>おとうと</u> を/が 探しています。",
        "sentence_kanji": "すずきさんは <u>弟</u> を/が 探しています。",
        "kanji_target": "弟",
        "hira_target": "おとうと",
        "kanji_options": [
          "足",
          "顔",
          "弟",
          "鼻"
        ],
        "hira_options": [
          "あし",
          "かお",
          "おとうと",
          "はな"
        ],
        "romaji": "otouto",
        "vi_meaning": "em trai"
      },
      {
        "id": "topic_07_people_103",
        "num": 103,
        "sentence_hira": "すずきさんは <u>あね</u> を/が 探しています。",
        "sentence_kanji": "すずきさんは <u>姉</u> を/が 探しています。",
        "kanji_target": "姉",
        "hira_target": "あね",
        "kanji_options": [
          "鼻",
          "顔",
          "母",
          "姉"
        ],
        "hira_options": [
          "はな",
          "かお",
          "はは",
          "あね"
        ],
        "romaji": "ane",
        "vi_meaning": "chị gái"
      },
      {
        "id": "topic_07_people_104",
        "num": 104,
        "sentence_hira": "すずきさんは <u>いもうと</u> を/が 探しています。",
        "sentence_kanji": "すずきさんは <u>妹</u> を/が 探しています。",
        "kanji_target": "妹",
        "hira_target": "いもうと",
        "kanji_options": [
          "頭",
          "妹",
          "手",
          "体"
        ],
        "hira_options": [
          "あたま",
          "いもうと",
          "て",
          "からだ"
        ],
        "romaji": "imouto",
        "vi_meaning": "em gái"
      },
      {
        "id": "topic_07_people_105",
        "num": 105,
        "sentence_hira": "すずきさんは <u>おっと</u> を/が 探しています。",
        "sentence_kanji": "すずきさんは <u>夫</u> を/が 探しています。",
        "kanji_target": "夫",
        "hira_target": "おっと",
        "kanji_options": [
          "足",
          "夫",
          "両親",
          "母"
        ],
        "hira_options": [
          "あし",
          "おっと",
          "りょうしん",
          "はは"
        ],
        "romaji": "otto",
        "vi_meaning": "chồng"
      },
      {
        "id": "topic_07_people_106",
        "num": 106,
        "sentence_hira": "すずきさんは <u>つま</u> を/が 探しています。",
        "sentence_kanji": "すずきさんは <u>妻</u> を/が 探しています。",
        "kanji_target": "妻",
        "hira_target": "つま",
        "kanji_options": [
          "妻",
          "子供",
          "母",
          "顔"
        ],
        "hira_options": [
          "つま",
          "こども",
          "はは",
          "かお"
        ],
        "romaji": "tsuma",
        "vi_meaning": "vợ"
      },
      {
        "id": "topic_07_people_107",
        "num": 107,
        "sentence_hira": "すずきさんは <u>こども</u> を/が 探しています。",
        "sentence_kanji": "すずきさんは <u>子供</u> を/が 探しています。",
        "kanji_target": "子供",
        "hira_target": "こども",
        "kanji_options": [
          "体",
          "目",
          "体",
          "子供"
        ],
        "hira_options": [
          "からだ",
          "め",
          "からだ",
          "こども"
        ],
        "romaji": "kodomo",
        "vi_meaning": "trẻ em"
      },
      {
        "id": "topic_07_people_108",
        "num": 108,
        "sentence_hira": "すずきさんは <u>しんせき</u> を/が 探しています。",
        "sentence_kanji": "すずきさんは <u>親戚</u> を/が 探しています。",
        "kanji_target": "親戚",
        "hira_target": "しんせき",
        "kanji_options": [
          "夫",
          "家族",
          "親戚",
          "母"
        ],
        "hira_options": [
          "おっと",
          "かぞく",
          "しんせき",
          "はは"
        ],
        "romaji": "shinseki",
        "vi_meaning": "họ hàng"
      },
      {
        "id": "topic_07_people_109",
        "num": 109,
        "sentence_hira": "すずきさんは <u>あたま</u> を/が 探しています。",
        "sentence_kanji": "すずきさんは <u>頭</u> を/が 探しています。",
        "kanji_target": "頭",
        "hira_target": "あたま",
        "kanji_options": [
          "弟",
          "頭",
          "弟",
          "体"
        ],
        "hira_options": [
          "おとうと",
          "あたま",
          "おとうと",
          "からだ"
        ],
        "romaji": "atama",
        "vi_meaning": "cái đầu"
      },
      {
        "id": "topic_07_people_110",
        "num": 110,
        "sentence_hira": "すずきさんは <u>かお</u> を/が 探しています。",
        "sentence_kanji": "すずきさんは <u>顔</u> を/が 探しています。",
        "kanji_target": "顔",
        "hira_target": "かお",
        "kanji_options": [
          "声",
          "親戚",
          "心",
          "顔"
        ],
        "hira_options": [
          "こえ",
          "しんせき",
          "こころ",
          "かお"
        ],
        "romaji": "kao",
        "vi_meaning": "khuôn mặt"
      },
      {
        "id": "topic_07_people_111",
        "num": 111,
        "sentence_hira": "すずきさんは <u>め</u> を/が 探しています。",
        "sentence_kanji": "すずきさんは <u>目</u> を/が 探しています。",
        "kanji_target": "目",
        "hira_target": "め",
        "kanji_options": [
          "妻",
          "声",
          "目",
          "体"
        ],
        "hira_options": [
          "つま",
          "こえ",
          "め",
          "からだ"
        ],
        "romaji": "me",
        "vi_meaning": "đôi mắt"
      },
      {
        "id": "topic_07_people_112",
        "num": 112,
        "sentence_hira": "すずきさんは <u>みみ</u> を/が 探しています。",
        "sentence_kanji": "すずきさんは <u>耳</u> を/が 探しています。",
        "kanji_target": "耳",
        "hira_target": "みみ",
        "kanji_options": [
          "歯",
          "耳",
          "父",
          "目"
        ],
        "hira_options": [
          "は",
          "みみ",
          "ちち",
          "め"
        ],
        "romaji": "mimi",
        "vi_meaning": "lỗ tai"
      },
      {
        "id": "topic_07_people_113",
        "num": 113,
        "sentence_hira": "すずきさんは <u>はな</u> を/が 探しています。",
        "sentence_kanji": "すずきさんは <u>鼻</u> を/が 探しています。",
        "kanji_target": "鼻",
        "hira_target": "はな",
        "kanji_options": [
          "鼻",
          "頭",
          "足",
          "親戚"
        ],
        "hira_options": [
          "はな",
          "あたま",
          "あし",
          "しんせき"
        ],
        "romaji": "hana",
        "vi_meaning": "cái mũi"
      },
      {
        "id": "topic_07_people_114",
        "num": 114,
        "sentence_hira": "すずきさんは <u>くち</u> を/が 探しています。",
        "sentence_kanji": "すずきさんは <u>口</u> を/が 探しています。",
        "kanji_target": "口",
        "hira_target": "くち",
        "kanji_options": [
          "口",
          "夫",
          "耳",
          "耳"
        ],
        "hira_options": [
          "くち",
          "おっと",
          "みみ",
          "みみ"
        ],
        "romaji": "kuchi",
        "vi_meaning": "cái miệng"
      },
      {
        "id": "topic_07_people_115",
        "num": 115,
        "sentence_hira": "すずきさん<u>は</u> は を/が 探しています。",
        "sentence_kanji": "すずきさん<u>歯</u> は を/が 探しています。",
        "kanji_target": "歯",
        "hira_target": "は",
        "kanji_options": [
          "心",
          "親戚",
          "足",
          "歯"
        ],
        "hira_options": [
          "こころ",
          "しんせき",
          "あし",
          "は"
        ],
        "romaji": "ha",
        "vi_meaning": "cái răng"
      },
      {
        "id": "topic_07_people_116",
        "num": 116,
        "sentence_hira": "すずきさんは <u>て</u> を/が 探しています。",
        "sentence_kanji": "すずきさんは <u>手</u> を/が 探しています。",
        "kanji_target": "手",
        "hira_target": "て",
        "kanji_options": [
          "手",
          "家族",
          "声",
          "姉"
        ],
        "hira_options": [
          "て",
          "かぞく",
          "こえ",
          "あね"
        ],
        "romaji": "te",
        "vi_meaning": "bàn tay"
      },
      {
        "id": "topic_07_people_117",
        "num": 117,
        "sentence_hira": "すずきさんは <u>あし</u> を/が 探しています。",
        "sentence_kanji": "すずきさんは <u>足</u> を/が 探しています。",
        "kanji_target": "足",
        "hira_target": "あし",
        "kanji_options": [
          "口",
          "足",
          "体",
          "声"
        ],
        "hira_options": [
          "くち",
          "あし",
          "からだ",
          "こえ"
        ],
        "romaji": "ashi",
        "vi_meaning": "bàn chân"
      },
      {
        "id": "topic_07_people_118",
        "num": 118,
        "sentence_hira": "すずきさんは <u>からだ</u> を/が 探しています。",
        "sentence_kanji": "すずきさんは <u>体</u> を/が 探しています。",
        "kanji_target": "体",
        "hira_target": "からだ",
        "kanji_options": [
          "兄",
          "体",
          "足",
          "声"
        ],
        "hira_options": [
          "あに",
          "からだ",
          "あし",
          "こえ"
        ],
        "romaji": "karada",
        "vi_meaning": "cơ thể"
      },
      {
        "id": "topic_07_people_119",
        "num": 119,
        "sentence_hira": "すずきさんは <u>こころ</u> を/が 探しています。",
        "sentence_kanji": "すずきさんは <u>心</u> を/が 探しています。",
        "kanji_target": "心",
        "hira_target": "こころ",
        "kanji_options": [
          "心",
          "口",
          "父",
          "父"
        ],
        "hira_options": [
          "こころ",
          "くち",
          "ちち",
          "ちち"
        ],
        "romaji": "kokoro",
        "vi_meaning": "trái tim/tâm trí"
      },
      {
        "id": "topic_07_people_120",
        "num": 120,
        "sentence_hira": "すずきさんは <u>こえ</u> を/が 探しています。",
        "sentence_kanji": "すずきさんは <u>声</u> を/が 探しています。",
        "kanji_target": "声",
        "hira_target": "こえ",
        "kanji_options": [
          "子供",
          "体",
          "声",
          "体"
        ],
        "hira_options": [
          "こども",
          "からだ",
          "こえ",
          "からだ"
        ],
        "romaji": "koe",
        "vi_meaning": "giọng nói"
      },
      {
        "id": "topic_07_people_121",
        "num": 121,
        "sentence_hira": "すずきさんは <u>かぞく</u> を/が 探しています。",
        "sentence_kanji": "すずきさんは <u>家族</u> を/が 探しています。",
        "kanji_target": "家族",
        "hira_target": "かぞく",
        "kanji_options": [
          "顔",
          "姉",
          "歯",
          "家族"
        ],
        "hira_options": [
          "かお",
          "あね",
          "は",
          "かぞく"
        ],
        "romaji": "kazoku",
        "vi_meaning": "gia đình"
      },
      {
        "id": "topic_07_people_122",
        "num": 122,
        "sentence_hira": "すずきさんは <u>りょうしん</u> を/が 探しています。",
        "sentence_kanji": "すずきさんは <u>両親</u> を/が 探しています。",
        "kanji_target": "両親",
        "hira_target": "りょうしん",
        "kanji_options": [
          "目",
          "両親",
          "子供",
          "妻"
        ],
        "hira_options": [
          "め",
          "りょうしん",
          "こども",
          "つま"
        ],
        "romaji": "ryoushin",
        "vi_meaning": "cha mẹ"
      },
      {
        "id": "topic_07_people_123",
        "num": 123,
        "sentence_hira": "すずきさんは <u>ちち</u> を/が 探しています。",
        "sentence_kanji": "すずきさんは <u>父</u> を/が 探しています。",
        "kanji_target": "父",
        "hira_target": "ちち",
        "kanji_options": [
          "歯",
          "両親",
          "父",
          "母"
        ],
        "hira_options": [
          "は",
          "りょうしん",
          "ちち",
          "はは"
        ],
        "romaji": "chichi",
        "vi_meaning": "bố"
      },
      {
        "id": "topic_07_people_124",
        "num": 124,
        "sentence_hira": "すずきさんは <u>はは</u> を/が 探しています。",
        "sentence_kanji": "すずきさんは <u>母</u> を/が 探しています。",
        "kanji_target": "母",
        "hira_target": "はは",
        "kanji_options": [
          "家族",
          "親戚",
          "顔",
          "母"
        ],
        "hira_options": [
          "かぞく",
          "しんせき",
          "かお",
          "はは"
        ],
        "romaji": "haha",
        "vi_meaning": "mẹ"
      },
      {
        "id": "topic_07_people_125",
        "num": 125,
        "sentence_hira": "すずきさんは <u>あに</u> を/が 探しています。",
        "sentence_kanji": "すずきさんは <u>兄</u> を/が 探しています。",
        "kanji_target": "兄",
        "hira_target": "あに",
        "kanji_options": [
          "手",
          "子供",
          "兄",
          "妹"
        ],
        "hira_options": [
          "て",
          "こども",
          "あに",
          "いもうと"
        ],
        "romaji": "ani",
        "vi_meaning": "anh trai"
      },
      {
        "id": "topic_07_people_126",
        "num": 126,
        "sentence_hira": "すずきさんは <u>おとうと</u> を/が 探しています。",
        "sentence_kanji": "すずきさんは <u>弟</u> を/が 探しています。",
        "kanji_target": "弟",
        "hira_target": "おとうと",
        "kanji_options": [
          "母",
          "口",
          "弟",
          "耳"
        ],
        "hira_options": [
          "はは",
          "くち",
          "おとうと",
          "みみ"
        ],
        "romaji": "otouto",
        "vi_meaning": "em trai"
      },
      {
        "id": "topic_07_people_127",
        "num": 127,
        "sentence_hira": "すずきさんは <u>あね</u> を/が 探しています。",
        "sentence_kanji": "すずきさんは <u>姉</u> を/が 探しています。",
        "kanji_target": "姉",
        "hira_target": "あね",
        "kanji_options": [
          "弟",
          "姉",
          "手",
          "耳"
        ],
        "hira_options": [
          "おとうと",
          "あね",
          "て",
          "みみ"
        ],
        "romaji": "ane",
        "vi_meaning": "chị gái"
      },
      {
        "id": "topic_07_people_128",
        "num": 128,
        "sentence_hira": "すずきさんは <u>いもうと</u> を/が 探しています。",
        "sentence_kanji": "すずきさんは <u>妹</u> を/が 探しています。",
        "kanji_target": "妹",
        "hira_target": "いもうと",
        "kanji_options": [
          "妹",
          "兄",
          "父",
          "父"
        ],
        "hira_options": [
          "いもうと",
          "あに",
          "ちち",
          "ちち"
        ],
        "romaji": "imouto",
        "vi_meaning": "em gái"
      },
      {
        "id": "topic_07_people_129",
        "num": 129,
        "sentence_hira": "すずきさんは <u>おっと</u> を/が 探しています。",
        "sentence_kanji": "すずきさんは <u>夫</u> を/が 探しています。",
        "kanji_target": "夫",
        "hira_target": "おっと",
        "kanji_options": [
          "夫",
          "弟",
          "妹",
          "顔"
        ],
        "hira_options": [
          "おっと",
          "おとうと",
          "いもうと",
          "かお"
        ],
        "romaji": "otto",
        "vi_meaning": "chồng"
      },
      {
        "id": "topic_07_people_130",
        "num": 130,
        "sentence_hira": "すずきさんは <u>つま</u> を/が 探しています。",
        "sentence_kanji": "すずきさんは <u>妻</u> を/が 探しています。",
        "kanji_target": "妻",
        "hira_target": "つま",
        "kanji_options": [
          "妻",
          "弟",
          "頭",
          "目"
        ],
        "hira_options": [
          "つま",
          "おとうと",
          "あたま",
          "め"
        ],
        "romaji": "tsuma",
        "vi_meaning": "vợ"
      },
      {
        "id": "topic_07_people_131",
        "num": 131,
        "sentence_hira": "すずきさんは <u>こども</u> を/が 探しています。",
        "sentence_kanji": "すずきさんは <u>子供</u> を/が 探しています。",
        "kanji_target": "子供",
        "hira_target": "こども",
        "kanji_options": [
          "姉",
          "親戚",
          "子供",
          "母"
        ],
        "hira_options": [
          "あね",
          "しんせき",
          "こども",
          "はは"
        ],
        "romaji": "kodomo",
        "vi_meaning": "trẻ em"
      },
      {
        "id": "topic_07_people_132",
        "num": 132,
        "sentence_hira": "すずきさんは <u>しんせき</u> を/が 探しています。",
        "sentence_kanji": "すずきさんは <u>親戚</u> を/が 探しています。",
        "kanji_target": "親戚",
        "hira_target": "しんせき",
        "kanji_options": [
          "姉",
          "顔",
          "親戚",
          "父"
        ],
        "hira_options": [
          "あね",
          "かお",
          "しんせき",
          "ちち"
        ],
        "romaji": "shinseki",
        "vi_meaning": "họ hàng"
      },
      {
        "id": "topic_07_people_133",
        "num": 133,
        "sentence_hira": "すずきさんは <u>あたま</u> を/が 探しています。",
        "sentence_kanji": "すずきさんは <u>頭</u> を/が 探しています。",
        "kanji_target": "頭",
        "hira_target": "あたま",
        "kanji_options": [
          "頭",
          "顔",
          "母",
          "足"
        ],
        "hira_options": [
          "あたま",
          "かお",
          "はは",
          "あし"
        ],
        "romaji": "atama",
        "vi_meaning": "cái đầu"
      },
      {
        "id": "topic_07_people_134",
        "num": 134,
        "sentence_hira": "すずきさんは <u>かお</u> を/が 探しています。",
        "sentence_kanji": "すずきさんは <u>顔</u> を/が 探しています。",
        "kanji_target": "顔",
        "hira_target": "かお",
        "kanji_options": [
          "足",
          "父",
          "顔",
          "心"
        ],
        "hira_options": [
          "あし",
          "ちち",
          "かお",
          "こころ"
        ],
        "romaji": "kao",
        "vi_meaning": "khuôn mặt"
      },
      {
        "id": "topic_07_people_135",
        "num": 135,
        "sentence_hira": "すずきさんは <u>め</u> を/が 探しています。",
        "sentence_kanji": "すずきさんは <u>目</u> を/が 探しています。",
        "kanji_target": "目",
        "hira_target": "め",
        "kanji_options": [
          "子供",
          "親戚",
          "目",
          "夫"
        ],
        "hira_options": [
          "こども",
          "しんせき",
          "め",
          "おっと"
        ],
        "romaji": "me",
        "vi_meaning": "đôi mắt"
      },
      {
        "id": "topic_07_people_136",
        "num": 136,
        "sentence_hira": "すずきさんは <u>みみ</u> を/が 探しています。",
        "sentence_kanji": "すずきさんは <u>耳</u> を/が 探しています。",
        "kanji_target": "耳",
        "hira_target": "みみ",
        "kanji_options": [
          "父",
          "兄",
          "心",
          "耳"
        ],
        "hira_options": [
          "ちち",
          "あに",
          "こころ",
          "みみ"
        ],
        "romaji": "mimi",
        "vi_meaning": "lỗ tai"
      },
      {
        "id": "topic_07_people_137",
        "num": 137,
        "sentence_hira": "すずきさんは <u>はな</u> を/が 探しています。",
        "sentence_kanji": "すずきさんは <u>鼻</u> を/が 探しています。",
        "kanji_target": "鼻",
        "hira_target": "はな",
        "kanji_options": [
          "兄",
          "足",
          "鼻",
          "夫"
        ],
        "hira_options": [
          "あに",
          "あし",
          "はな",
          "おっと"
        ],
        "romaji": "hana",
        "vi_meaning": "cái mũi"
      },
      {
        "id": "topic_07_people_138",
        "num": 138,
        "sentence_hira": "すずきさんは <u>くち</u> を/が 探しています。",
        "sentence_kanji": "すずきさんは <u>口</u> を/が 探しています。",
        "kanji_target": "口",
        "hira_target": "くち",
        "kanji_options": [
          "両親",
          "口",
          "親戚",
          "鼻"
        ],
        "hira_options": [
          "りょうしん",
          "くち",
          "しんせき",
          "はな"
        ],
        "romaji": "kuchi",
        "vi_meaning": "cái miệng"
      },
      {
        "id": "topic_07_people_139",
        "num": 139,
        "sentence_hira": "すずきさん<u>は</u> は を/が 探しています。",
        "sentence_kanji": "すずきさん<u>歯</u> は を/が 探しています。",
        "kanji_target": "歯",
        "hira_target": "は",
        "kanji_options": [
          "子供",
          "父",
          "目",
          "歯"
        ],
        "hira_options": [
          "こども",
          "ちち",
          "め",
          "は"
        ],
        "romaji": "ha",
        "vi_meaning": "cái răng"
      },
      {
        "id": "topic_07_people_140",
        "num": 140,
        "sentence_hira": "すずきさんは <u>て</u> を/が 探しています。",
        "sentence_kanji": "すずきさんは <u>手</u> を/が 探しています。",
        "kanji_target": "手",
        "hira_target": "て",
        "kanji_options": [
          "鼻",
          "目",
          "手",
          "親戚"
        ],
        "hira_options": [
          "はな",
          "め",
          "て",
          "しんせき"
        ],
        "romaji": "te",
        "vi_meaning": "bàn tay"
      },
      {
        "id": "topic_07_people_141",
        "num": 141,
        "sentence_hira": "すずきさんは <u>あし</u> を/が 探しています。",
        "sentence_kanji": "すずきさんは <u>足</u> を/が 探しています。",
        "kanji_target": "足",
        "hira_target": "あし",
        "kanji_options": [
          "足",
          "弟",
          "両親",
          "妻"
        ],
        "hira_options": [
          "あし",
          "おとうと",
          "りょうしん",
          "つま"
        ],
        "romaji": "ashi",
        "vi_meaning": "bàn chân"
      },
      {
        "id": "topic_07_people_142",
        "num": 142,
        "sentence_hira": "すずきさんは <u>からだ</u> を/が 探しています。",
        "sentence_kanji": "すずきさんは <u>体</u> を/が 探しています。",
        "kanji_target": "体",
        "hira_target": "からだ",
        "kanji_options": [
          "体",
          "母",
          "子供",
          "歯"
        ],
        "hira_options": [
          "からだ",
          "はは",
          "こども",
          "は"
        ],
        "romaji": "karada",
        "vi_meaning": "cơ thể"
      },
      {
        "id": "topic_07_people_143",
        "num": 143,
        "sentence_hira": "すずきさんは <u>こころ</u> を/が 探しています。",
        "sentence_kanji": "すずきさんは <u>心</u> を/が 探しています。",
        "kanji_target": "心",
        "hira_target": "こころ",
        "kanji_options": [
          "鼻",
          "母",
          "心",
          "妹"
        ],
        "hira_options": [
          "はな",
          "はは",
          "こころ",
          "いもうと"
        ],
        "romaji": "kokoro",
        "vi_meaning": "trái tim/tâm trí"
      },
      {
        "id": "topic_07_people_144",
        "num": 144,
        "sentence_hira": "すずきさんは <u>こえ</u> を/が 探しています。",
        "sentence_kanji": "すずきさんは <u>声</u> を/が 探しています。",
        "kanji_target": "声",
        "hira_target": "こえ",
        "kanji_options": [
          "鼻",
          "声",
          "姉",
          "頭"
        ],
        "hira_options": [
          "はな",
          "こえ",
          "あね",
          "あたま"
        ],
        "romaji": "koe",
        "vi_meaning": "giọng nói"
      },
      {
        "id": "topic_07_people_145",
        "num": 145,
        "sentence_hira": "すずきさんは <u>かぞく</u> を/が 探しています。",
        "sentence_kanji": "すずきさんは <u>家族</u> を/が 探しています。",
        "kanji_target": "家族",
        "hira_target": "かぞく",
        "kanji_options": [
          "家族",
          "口",
          "両親",
          "足"
        ],
        "hira_options": [
          "かぞく",
          "くち",
          "りょうしん",
          "あし"
        ],
        "romaji": "kazoku",
        "vi_meaning": "gia đình"
      },
      {
        "id": "topic_07_people_146",
        "num": 146,
        "sentence_hira": "すずきさんは <u>りょうしん</u> を/が 探しています。",
        "sentence_kanji": "すずきさんは <u>両親</u> を/が 探しています。",
        "kanji_target": "両親",
        "hira_target": "りょうしん",
        "kanji_options": [
          "心",
          "兄",
          "心",
          "両親"
        ],
        "hira_options": [
          "こころ",
          "あに",
          "こころ",
          "りょうしん"
        ],
        "romaji": "ryoushin",
        "vi_meaning": "cha mẹ"
      },
      {
        "id": "topic_07_people_147",
        "num": 147,
        "sentence_hira": "すずきさんは <u>ちち</u> を/が 探しています。",
        "sentence_kanji": "すずきさんは <u>父</u> を/が 探しています。",
        "kanji_target": "父",
        "hira_target": "ちち",
        "kanji_options": [
          "手",
          "声",
          "父",
          "口"
        ],
        "hira_options": [
          "て",
          "こえ",
          "ちち",
          "くち"
        ],
        "romaji": "chichi",
        "vi_meaning": "bố"
      },
      {
        "id": "topic_07_people_148",
        "num": 148,
        "sentence_hira": "すずきさんは <u>はは</u> を/が 探しています。",
        "sentence_kanji": "すずきさんは <u>母</u> を/が 探しています。",
        "kanji_target": "母",
        "hira_target": "はは",
        "kanji_options": [
          "目",
          "親戚",
          "母",
          "兄"
        ],
        "hira_options": [
          "め",
          "しんせき",
          "はは",
          "あに"
        ],
        "romaji": "haha",
        "vi_meaning": "mẹ"
      },
      {
        "id": "topic_07_people_149",
        "num": 149,
        "sentence_hira": "すずきさんは <u>あに</u> を/が 探しています。",
        "sentence_kanji": "すずきさんは <u>兄</u> を/が 探しています。",
        "kanji_target": "兄",
        "hira_target": "あに",
        "kanji_options": [
          "兄",
          "声",
          "鼻",
          "手"
        ],
        "hira_options": [
          "あに",
          "こえ",
          "はな",
          "て"
        ],
        "romaji": "ani",
        "vi_meaning": "anh trai"
      },
      {
        "id": "topic_07_people_150",
        "num": 150,
        "sentence_hira": "すずきさんは <u>おとうと</u> を/が 探しています。",
        "sentence_kanji": "すずきさんは <u>弟</u> を/が 探しています。",
        "kanji_target": "弟",
        "hira_target": "おとうと",
        "kanji_options": [
          "体",
          "親戚",
          "弟",
          "足"
        ],
        "hira_options": [
          "からだ",
          "しんせき",
          "おとうと",
          "あし"
        ],
        "romaji": "otouto",
        "vi_meaning": "em trai"
      }
    ]
  },
  {
    "id": "topic_08_time_place",
    "name": "8. Thời Gian, Vị Trí & Phương Hướng",
    "icon": "⏰",
    "desc": "Mốc thời gian, ngày tháng, vị trí và phương hướng (140 câu)",
    "questions": [
      {
        "id": "topic_08_time_place_1",
        "num": 1,
        "sentence_hira": "すずきさんは <u>じかん</u> を/が 探しています。",
        "sentence_kanji": "すずきさんは <u>時間</u> を/が 探しています。",
        "kanji_target": "時間",
        "hira_target": "じかん",
        "kanji_options": [
          "隣",
          "右",
          "時間",
          "今週"
        ],
        "hira_options": [
          "となり",
          "みぎ",
          "じかん",
          "こんしゅう"
        ],
        "romaji": "jikan",
        "vi_meaning": "thời gian"
      },
      {
        "id": "topic_08_time_place_2",
        "num": 2,
        "sentence_hira": "すずきさんは <u>きょう</u> を/が 探しています。",
        "sentence_kanji": "すずきさんは <u>今日</u> を/が 探しています。",
        "kanji_target": "今日",
        "hira_target": "きょう",
        "kanji_options": [
          "今週",
          "最近",
          "今日",
          "時間"
        ],
        "hira_options": [
          "こんしゅう",
          "さいきん",
          "きょう",
          "じかん"
        ],
        "romaji": "kyou",
        "vi_meaning": "hôm nay"
      },
      {
        "id": "topic_08_time_place_3",
        "num": 3,
        "sentence_hira": "すずきさんは <u>あした</u> を/が 探しています。",
        "sentence_kanji": "すずきさんは <u>明日</u> を/が 探しています。",
        "kanji_target": "明日",
        "hira_target": "あした",
        "kanji_options": [
          "明日",
          "赤",
          "先週",
          "中"
        ],
        "hira_options": [
          "あした",
          "あか",
          "せんしゅう",
          "なか"
        ],
        "romaji": "ashita",
        "vi_meaning": "ngày mai"
      },
      {
        "id": "topic_08_time_place_4",
        "num": 4,
        "sentence_hira": "すずきさんは <u>きのう</u> を/が 探しています。",
        "sentence_kanji": "すずきさんは <u>昨日</u> を/が 探しています。",
        "kanji_target": "昨日",
        "hira_target": "きのう",
        "kanji_options": [
          "今週",
          "昨日",
          "今日",
          "将来"
        ],
        "hira_options": [
          "こんしゅう",
          "きのう",
          "きょう",
          "しょうらい"
        ],
        "romaji": "kinou",
        "vi_meaning": "hôm qua"
      },
      {
        "id": "topic_08_time_place_5",
        "num": 5,
        "sentence_hira": "すずきさんは <u>こんしゅう</u> を/が 探しています。",
        "sentence_kanji": "すずきさんは <u>今週</u> を/が 探しています。",
        "kanji_target": "今週",
        "hira_target": "こんしゅう",
        "kanji_options": [
          "後ろ",
          "隣",
          "今週",
          "昔"
        ],
        "hira_options": [
          "うしろ",
          "となり",
          "こんしゅう",
          "むかし"
        ],
        "romaji": "konshuu",
        "vi_meaning": "tuần này"
      },
      {
        "id": "topic_08_time_place_6",
        "num": 6,
        "sentence_hira": "すずきさんは <u>らいしゅう</u> を/が 探しています。",
        "sentence_kanji": "すずきさんは <u>来週</u> を/が 探しています。",
        "kanji_target": "来週",
        "hira_target": "らいしゅう",
        "kanji_options": [
          "来週",
          "来年",
          "中",
          "白"
        ],
        "hira_options": [
          "らいしゅう",
          "らいねん",
          "なか",
          "しろ"
        ],
        "romaji": "raishuu",
        "vi_meaning": "tuần tới"
      },
      {
        "id": "topic_08_time_place_7",
        "num": 7,
        "sentence_hira": "すずきさんは <u>せんしゅう</u> を/が 探しています。",
        "sentence_kanji": "すずきさんは <u>先週</u> を/が 探しています。",
        "kanji_target": "先週",
        "hira_target": "せんしゅう",
        "kanji_options": [
          "昨日",
          "先週",
          "赤",
          "今週"
        ],
        "hira_options": [
          "きのう",
          "せんしゅう",
          "あか",
          "こんしゅう"
        ],
        "romaji": "senshuu",
        "vi_meaning": "tuần trước"
      },
      {
        "id": "topic_08_time_place_8",
        "num": 8,
        "sentence_hira": "すずきさんは <u>こんげつ</u> を/が 探しています。",
        "sentence_kanji": "すずきさんは <u>今月</u> を/が 探しています。",
        "kanji_target": "今月",
        "hira_target": "こんげつ",
        "kanji_options": [
          "先週",
          "下",
          "前",
          "今月"
        ],
        "hira_options": [
          "せんしゅう",
          "した",
          "まえ",
          "こんげつ"
        ],
        "romaji": "kongetsu",
        "vi_meaning": "tháng này"
      },
      {
        "id": "topic_08_time_place_9",
        "num": 9,
        "sentence_hira": "すずきさんは <u>らいげつ</u> を/が 探しています。",
        "sentence_kanji": "すずきさんは <u>来月</u> を/が 探しています。",
        "kanji_target": "来月",
        "hira_target": "らいげつ",
        "kanji_options": [
          "来年",
          "今日",
          "来年",
          "来月"
        ],
        "hira_options": [
          "らいねん",
          "きょう",
          "らいねん",
          "らいげつ"
        ],
        "romaji": "raigetsu",
        "vi_meaning": "tháng sau"
      },
      {
        "id": "topic_08_time_place_10",
        "num": 10,
        "sentence_hira": "すずきさんは <u>ことし</u> を/が 探しています。",
        "sentence_kanji": "すずきさんは <u>今年</u> を/が 探しています。",
        "kanji_target": "今年",
        "hira_target": "ことし",
        "kanji_options": [
          "黒",
          "明日",
          "下",
          "今年"
        ],
        "hira_options": [
          "くろ",
          "あした",
          "した",
          "ことし"
        ],
        "romaji": "kotoshi",
        "vi_meaning": "năm nay"
      },
      {
        "id": "topic_08_time_place_11",
        "num": 11,
        "sentence_hira": "すずきさんは <u>らいねん</u> を/が 探しています。",
        "sentence_kanji": "すずきさんは <u>来年</u> を/が 探しています。",
        "kanji_target": "来年",
        "hira_target": "らいねん",
        "kanji_options": [
          "右",
          "上",
          "来年",
          "中"
        ],
        "hira_options": [
          "みぎ",
          "うえ",
          "らいねん",
          "なか"
        ],
        "romaji": "rainen",
        "vi_meaning": "năm sau"
      },
      {
        "id": "topic_08_time_place_12",
        "num": 12,
        "sentence_hira": "すずきさんは <u>さいきん</u> を/が 探しています。",
        "sentence_kanji": "すずきさんは <u>最近</u> を/が 探しています。",
        "kanji_target": "最近",
        "hira_target": "さいきん",
        "kanji_options": [
          "最近",
          "昨日",
          "今月",
          "先週"
        ],
        "hira_options": [
          "さいきん",
          "きのう",
          "こんげつ",
          "せんしゅう"
        ],
        "romaji": "saikin",
        "vi_meaning": "gần đây"
      },
      {
        "id": "topic_08_time_place_13",
        "num": 13,
        "sentence_hira": "すずきさんは <u>しょうらい</u> を/が 探しています。",
        "sentence_kanji": "すずきさんは <u>将来</u> を/が 探しています。",
        "kanji_target": "将来",
        "hira_target": "しょうらい",
        "kanji_options": [
          "下",
          "中",
          "将来",
          "来週"
        ],
        "hira_options": [
          "した",
          "なか",
          "しょうらい",
          "らいしゅう"
        ],
        "romaji": "shourai",
        "vi_meaning": "tương lai"
      },
      {
        "id": "topic_08_time_place_14",
        "num": 14,
        "sentence_hira": "すずきさんは <u>むかし</u> を/が 探しています。",
        "sentence_kanji": "すずきさんは <u>昔</u> を/が 探しています。",
        "kanji_target": "昔",
        "hira_target": "むかし",
        "kanji_options": [
          "昔",
          "黒",
          "来週",
          "明日"
        ],
        "hira_options": [
          "むかし",
          "くろ",
          "らいしゅう",
          "あした"
        ],
        "romaji": "mukashi",
        "vi_meaning": "ngày xưa"
      },
      {
        "id": "topic_08_time_place_15",
        "num": 15,
        "sentence_hira": "すずきさんは <u>うえ</u> を/が 探しています。",
        "sentence_kanji": "すずきさんは <u>上</u> を/が 探しています。",
        "kanji_target": "上",
        "hira_target": "うえ",
        "kanji_options": [
          "明日",
          "上",
          "下",
          "隣"
        ],
        "hira_options": [
          "あした",
          "うえ",
          "した",
          "となり"
        ],
        "romaji": "ue",
        "vi_meaning": "phía trên"
      },
      {
        "id": "topic_08_time_place_16",
        "num": 16,
        "sentence_hira": "すずきさんは <u>した</u> を/が 探しています。",
        "sentence_kanji": "すずきさんは <u>下</u> を/が 探しています。",
        "kanji_target": "下",
        "hira_target": "した",
        "kanji_options": [
          "今週",
          "外",
          "下",
          "外"
        ],
        "hira_options": [
          "こんしゅう",
          "そと",
          "した",
          "そと"
        ],
        "romaji": "shita",
        "vi_meaning": "phía dưới"
      },
      {
        "id": "topic_08_time_place_17",
        "num": 17,
        "sentence_hira": "すずきさんは <u>まえ</u> を/が 探しています。",
        "sentence_kanji": "すずきさんは <u>前</u> を/が 探しています。",
        "kanji_target": "前",
        "hira_target": "まえ",
        "kanji_options": [
          "隣",
          "隣",
          "前",
          "最近"
        ],
        "hira_options": [
          "となり",
          "となり",
          "まえ",
          "さいきん"
        ],
        "romaji": "mae",
        "vi_meaning": "phía trước"
      },
      {
        "id": "topic_08_time_place_18",
        "num": 18,
        "sentence_hira": "すずきさんは <u>うしろ</u> を/が 探しています。",
        "sentence_kanji": "すずきさんは <u>後ろ</u> を/が 探しています。",
        "kanji_target": "後ろ",
        "hira_target": "うしろ",
        "kanji_options": [
          "外",
          "中",
          "後ろ",
          "昨日"
        ],
        "hira_options": [
          "そと",
          "なか",
          "うしろ",
          "きのう"
        ],
        "romaji": "ushiro",
        "vi_meaning": "phía sau"
      },
      {
        "id": "topic_08_time_place_19",
        "num": 19,
        "sentence_hira": "すずきさんは <u>みぎ</u> を/が 探しています。",
        "sentence_kanji": "すずきさんは <u>右</u> を/が 探しています。",
        "kanji_target": "右",
        "hira_target": "みぎ",
        "kanji_options": [
          "今日",
          "右",
          "来週",
          "前"
        ],
        "hira_options": [
          "きょう",
          "みぎ",
          "らいしゅう",
          "まえ"
        ],
        "romaji": "migi",
        "vi_meaning": "bên phải"
      },
      {
        "id": "topic_08_time_place_20",
        "num": 20,
        "sentence_hira": "すずきさんは <u>ひだり</u> を/が 探しています。",
        "sentence_kanji": "すずきさんは <u>左</u> を/が 探しています。",
        "kanji_target": "左",
        "hira_target": "ひだり",
        "kanji_options": [
          "最近",
          "左",
          "外",
          "今年"
        ],
        "hira_options": [
          "さいきん",
          "ひだり",
          "そと",
          "ことし"
        ],
        "romaji": "hidari",
        "vi_meaning": "bên trái"
      },
      {
        "id": "topic_08_time_place_21",
        "num": 21,
        "sentence_hira": "すずきさんは <u>なか</u> を/が 探しています。",
        "sentence_kanji": "すずきさんは <u>中</u> を/が 探しています。",
        "kanji_target": "中",
        "hira_target": "なか",
        "kanji_options": [
          "青",
          "青",
          "来週",
          "中"
        ],
        "hira_options": [
          "あお",
          "あお",
          "らいしゅう",
          "なか"
        ],
        "romaji": "naka",
        "vi_meaning": "bên trong"
      },
      {
        "id": "topic_08_time_place_22",
        "num": 22,
        "sentence_hira": "すずきさんは <u>そと</u> を/が 探しています。",
        "sentence_kanji": "すずきさんは <u>外</u> を/が 探しています。",
        "kanji_target": "外",
        "hira_target": "そと",
        "kanji_options": [
          "外",
          "最近",
          "後ろ",
          "右"
        ],
        "hira_options": [
          "そと",
          "さいきん",
          "うしろ",
          "みぎ"
        ],
        "romaji": "soto",
        "vi_meaning": "bên ngoài"
      },
      {
        "id": "topic_08_time_place_23",
        "num": 23,
        "sentence_hira": "すずきさんは <u>となり</u> を/が 探しています。",
        "sentence_kanji": "すずきさんは <u>隣</u> を/が 探しています。",
        "kanji_target": "隣",
        "hira_target": "となり",
        "kanji_options": [
          "中",
          "下",
          "青",
          "隣"
        ],
        "hira_options": [
          "なか",
          "した",
          "あお",
          "となり"
        ],
        "romaji": "tonari",
        "vi_meaning": "bên cạnh"
      },
      {
        "id": "topic_08_time_place_24",
        "num": 24,
        "sentence_hira": "すずきさんは <u>あか</u> を/が 探しています。",
        "sentence_kanji": "すずきさんは <u>赤</u> を/が 探しています。",
        "kanji_target": "赤",
        "hira_target": "あか",
        "kanji_options": [
          "青",
          "白",
          "赤",
          "後ろ"
        ],
        "hira_options": [
          "あお",
          "しろ",
          "あか",
          "うしろ"
        ],
        "romaji": "aka",
        "vi_meaning": "màu đỏ"
      },
      {
        "id": "topic_08_time_place_25",
        "num": 25,
        "sentence_hira": "すずきさんは <u>あお</u> を/が 探しています。",
        "sentence_kanji": "すずきさんは <u>青</u> を/が 探しています。",
        "kanji_target": "青",
        "hira_target": "あお",
        "kanji_options": [
          "青",
          "黒",
          "今年",
          "上"
        ],
        "hira_options": [
          "あお",
          "くろ",
          "ことし",
          "うえ"
        ],
        "romaji": "ao",
        "vi_meaning": "màu xanh"
      },
      {
        "id": "topic_08_time_place_26",
        "num": 26,
        "sentence_hira": "すずきさんは <u>しろ</u> を/が 探しています。",
        "sentence_kanji": "すずきさんは <u>白</u> を/が 探しています。",
        "kanji_target": "白",
        "hira_target": "しろ",
        "kanji_options": [
          "白",
          "先週",
          "今年",
          "右"
        ],
        "hira_options": [
          "しろ",
          "せんしゅう",
          "ことし",
          "みぎ"
        ],
        "romaji": "shiro",
        "vi_meaning": "màu trắng"
      },
      {
        "id": "topic_08_time_place_27",
        "num": 27,
        "sentence_hira": "すずきさんは <u>くろ</u> を/が 探しています。",
        "sentence_kanji": "すずきさんは <u>黒</u> を/が 探しています。",
        "kanji_target": "黒",
        "hira_target": "くろ",
        "kanji_options": [
          "時間",
          "上",
          "右",
          "黒"
        ],
        "hira_options": [
          "じかん",
          "うえ",
          "みぎ",
          "くろ"
        ],
        "romaji": "kuro",
        "vi_meaning": "màu đen"
      },
      {
        "id": "topic_08_time_place_28",
        "num": 28,
        "sentence_hira": "すずきさんは <u>じかん</u> を/が 探しています。",
        "sentence_kanji": "すずきさんは <u>時間</u> を/が 探しています。",
        "kanji_target": "時間",
        "hira_target": "じかん",
        "kanji_options": [
          "青",
          "時間",
          "今週",
          "明日"
        ],
        "hira_options": [
          "あお",
          "じかん",
          "こんしゅう",
          "あした"
        ],
        "romaji": "jikan",
        "vi_meaning": "thời gian"
      },
      {
        "id": "topic_08_time_place_29",
        "num": 29,
        "sentence_hira": "すずきさんは <u>きょう</u> を/が 探しています。",
        "sentence_kanji": "すずきさんは <u>今日</u> を/が 探しています。",
        "kanji_target": "今日",
        "hira_target": "きょう",
        "kanji_options": [
          "昔",
          "前",
          "今週",
          "今日"
        ],
        "hira_options": [
          "むかし",
          "まえ",
          "こんしゅう",
          "きょう"
        ],
        "romaji": "kyou",
        "vi_meaning": "hôm nay"
      },
      {
        "id": "topic_08_time_place_30",
        "num": 30,
        "sentence_hira": "すずきさんは <u>あした</u> を/が 探しています。",
        "sentence_kanji": "すずきさんは <u>明日</u> を/が 探しています。",
        "kanji_target": "明日",
        "hira_target": "あした",
        "kanji_options": [
          "来年",
          "昔",
          "明日",
          "最近"
        ],
        "hira_options": [
          "らいねん",
          "むかし",
          "あした",
          "さいきん"
        ],
        "romaji": "ashita",
        "vi_meaning": "ngày mai"
      },
      {
        "id": "topic_08_time_place_31",
        "num": 31,
        "sentence_hira": "すずきさんは <u>きのう</u> を/が 探しています。",
        "sentence_kanji": "すずきさんは <u>昨日</u> を/が 探しています。",
        "kanji_target": "昨日",
        "hira_target": "きのう",
        "kanji_options": [
          "昨日",
          "前",
          "最近",
          "来週"
        ],
        "hira_options": [
          "きのう",
          "まえ",
          "さいきん",
          "らいしゅう"
        ],
        "romaji": "kinou",
        "vi_meaning": "hôm qua"
      },
      {
        "id": "topic_08_time_place_32",
        "num": 32,
        "sentence_hira": "すずきさんは <u>こんしゅう</u> を/が 探しています。",
        "sentence_kanji": "すずきさんは <u>今週</u> を/が 探しています。",
        "kanji_target": "今週",
        "hira_target": "こんしゅう",
        "kanji_options": [
          "右",
          "今週",
          "前",
          "時間"
        ],
        "hira_options": [
          "みぎ",
          "こんしゅう",
          "まえ",
          "じかん"
        ],
        "romaji": "konshuu",
        "vi_meaning": "tuần này"
      },
      {
        "id": "topic_08_time_place_33",
        "num": 33,
        "sentence_hira": "すずきさんは <u>らいしゅう</u> を/が 探しています。",
        "sentence_kanji": "すずきさんは <u>来週</u> を/が 探しています。",
        "kanji_target": "来週",
        "hira_target": "らいしゅう",
        "kanji_options": [
          "来週",
          "明日",
          "上",
          "今日"
        ],
        "hira_options": [
          "らいしゅう",
          "あした",
          "うえ",
          "きょう"
        ],
        "romaji": "raishuu",
        "vi_meaning": "tuần tới"
      },
      {
        "id": "topic_08_time_place_34",
        "num": 34,
        "sentence_hira": "すずきさんは <u>せんしゅう</u> を/が 探しています。",
        "sentence_kanji": "すずきさんは <u>先週</u> を/が 探しています。",
        "kanji_target": "先週",
        "hira_target": "せんしゅう",
        "kanji_options": [
          "最近",
          "昔",
          "今年",
          "先週"
        ],
        "hira_options": [
          "さいきん",
          "むかし",
          "ことし",
          "せんしゅう"
        ],
        "romaji": "senshuu",
        "vi_meaning": "tuần trước"
      },
      {
        "id": "topic_08_time_place_35",
        "num": 35,
        "sentence_hira": "すずきさんは <u>こんげつ</u> を/が 探しています。",
        "sentence_kanji": "すずきさんは <u>今月</u> を/が 探しています。",
        "kanji_target": "今月",
        "hira_target": "こんげつ",
        "kanji_options": [
          "今月",
          "明日",
          "外",
          "来月"
        ],
        "hira_options": [
          "こんげつ",
          "あした",
          "そと",
          "らいげつ"
        ],
        "romaji": "kongetsu",
        "vi_meaning": "tháng này"
      },
      {
        "id": "topic_08_time_place_36",
        "num": 36,
        "sentence_hira": "すずきさんは <u>らいげつ</u> を/が 探しています。",
        "sentence_kanji": "すずきさんは <u>来月</u> を/が 探しています。",
        "kanji_target": "来月",
        "hira_target": "らいげつ",
        "kanji_options": [
          "来年",
          "赤",
          "来月",
          "左"
        ],
        "hira_options": [
          "らいねん",
          "あか",
          "らいげつ",
          "ひだり"
        ],
        "romaji": "raigetsu",
        "vi_meaning": "tháng sau"
      },
      {
        "id": "topic_08_time_place_37",
        "num": 37,
        "sentence_hira": "すずきさんは <u>ことし</u> を/が 探しています。",
        "sentence_kanji": "すずきさんは <u>今年</u> を/が 探しています。",
        "kanji_target": "今年",
        "hira_target": "ことし",
        "kanji_options": [
          "今年",
          "下",
          "隣",
          "将来"
        ],
        "hira_options": [
          "ことし",
          "した",
          "となり",
          "しょうらい"
        ],
        "romaji": "kotoshi",
        "vi_meaning": "năm nay"
      },
      {
        "id": "topic_08_time_place_38",
        "num": 38,
        "sentence_hira": "すずきさんは <u>らいねん</u> を/が 探しています。",
        "sentence_kanji": "すずきさんは <u>来年</u> を/が 探しています。",
        "kanji_target": "来年",
        "hira_target": "らいねん",
        "kanji_options": [
          "左",
          "明日",
          "下",
          "来年"
        ],
        "hira_options": [
          "ひだり",
          "あした",
          "した",
          "らいねん"
        ],
        "romaji": "rainen",
        "vi_meaning": "năm sau"
      },
      {
        "id": "topic_08_time_place_39",
        "num": 39,
        "sentence_hira": "すずきさんは <u>さいきん</u> を/が 探しています。",
        "sentence_kanji": "すずきさんは <u>最近</u> を/が 探しています。",
        "kanji_target": "最近",
        "hira_target": "さいきん",
        "kanji_options": [
          "左",
          "今週",
          "最近",
          "昨日"
        ],
        "hira_options": [
          "ひだり",
          "こんしゅう",
          "さいきん",
          "きのう"
        ],
        "romaji": "saikin",
        "vi_meaning": "gần đây"
      },
      {
        "id": "topic_08_time_place_40",
        "num": 40,
        "sentence_hira": "すずきさんは <u>しょうらい</u> を/が 探しています。",
        "sentence_kanji": "すずきさんは <u>将来</u> を/が 探しています。",
        "kanji_target": "将来",
        "hira_target": "しょうらい",
        "kanji_options": [
          "将来",
          "黒",
          "外",
          "後ろ"
        ],
        "hira_options": [
          "しょうらい",
          "くろ",
          "そと",
          "うしろ"
        ],
        "romaji": "shourai",
        "vi_meaning": "tương lai"
      },
      {
        "id": "topic_08_time_place_41",
        "num": 41,
        "sentence_hira": "すずきさんは <u>むかし</u> を/が 探しています。",
        "sentence_kanji": "すずきさんは <u>昔</u> を/が 探しています。",
        "kanji_target": "昔",
        "hira_target": "むかし",
        "kanji_options": [
          "赤",
          "下",
          "今週",
          "昔"
        ],
        "hira_options": [
          "あか",
          "した",
          "こんしゅう",
          "むかし"
        ],
        "romaji": "mukashi",
        "vi_meaning": "ngày xưa"
      },
      {
        "id": "topic_08_time_place_42",
        "num": 42,
        "sentence_hira": "すずきさんは <u>うえ</u> を/が 探しています。",
        "sentence_kanji": "すずきさんは <u>上</u> を/が 探しています。",
        "kanji_target": "上",
        "hira_target": "うえ",
        "kanji_options": [
          "今月",
          "将来",
          "上",
          "今月"
        ],
        "hira_options": [
          "こんげつ",
          "しょうらい",
          "うえ",
          "こんげつ"
        ],
        "romaji": "ue",
        "vi_meaning": "phía trên"
      },
      {
        "id": "topic_08_time_place_43",
        "num": 43,
        "sentence_hira": "すずきさんは <u>した</u> を/が 探しています。",
        "sentence_kanji": "すずきさんは <u>下</u> を/が 探しています。",
        "kanji_target": "下",
        "hira_target": "した",
        "kanji_options": [
          "来週",
          "赤",
          "今週",
          "下"
        ],
        "hira_options": [
          "らいしゅう",
          "あか",
          "こんしゅう",
          "した"
        ],
        "romaji": "shita",
        "vi_meaning": "phía dưới"
      },
      {
        "id": "topic_08_time_place_44",
        "num": 44,
        "sentence_hira": "すずきさんは <u>まえ</u> を/が 探しています。",
        "sentence_kanji": "すずきさんは <u>前</u> を/が 探しています。",
        "kanji_target": "前",
        "hira_target": "まえ",
        "kanji_options": [
          "前",
          "今月",
          "昨日",
          "来年"
        ],
        "hira_options": [
          "まえ",
          "こんげつ",
          "きのう",
          "らいねん"
        ],
        "romaji": "mae",
        "vi_meaning": "phía trước"
      },
      {
        "id": "topic_08_time_place_45",
        "num": 45,
        "sentence_hira": "すずきさんは <u>うしろ</u> を/が 探しています。",
        "sentence_kanji": "すずきさんは <u>後ろ</u> を/が 探しています。",
        "kanji_target": "後ろ",
        "hira_target": "うしろ",
        "kanji_options": [
          "来週",
          "左",
          "後ろ",
          "青"
        ],
        "hira_options": [
          "らいしゅう",
          "ひだり",
          "うしろ",
          "あお"
        ],
        "romaji": "ushiro",
        "vi_meaning": "phía sau"
      },
      {
        "id": "topic_08_time_place_46",
        "num": 46,
        "sentence_hira": "すずきさんは <u>みぎ</u> を/が 探しています。",
        "sentence_kanji": "すずきさんは <u>右</u> を/が 探しています。",
        "kanji_target": "右",
        "hira_target": "みぎ",
        "kanji_options": [
          "昔",
          "右",
          "左",
          "来月"
        ],
        "hira_options": [
          "むかし",
          "みぎ",
          "ひだり",
          "らいげつ"
        ],
        "romaji": "migi",
        "vi_meaning": "bên phải"
      },
      {
        "id": "topic_08_time_place_47",
        "num": 47,
        "sentence_hira": "すずきさんは <u>ひだり</u> を/が 探しています。",
        "sentence_kanji": "すずきさんは <u>左</u> を/が 探しています。",
        "kanji_target": "左",
        "hira_target": "ひだり",
        "kanji_options": [
          "左",
          "右",
          "将来",
          "時間"
        ],
        "hira_options": [
          "ひだり",
          "みぎ",
          "しょうらい",
          "じかん"
        ],
        "romaji": "hidari",
        "vi_meaning": "bên trái"
      },
      {
        "id": "topic_08_time_place_48",
        "num": 48,
        "sentence_hira": "すずきさんは <u>なか</u> を/が 探しています。",
        "sentence_kanji": "すずきさんは <u>中</u> を/が 探しています。",
        "kanji_target": "中",
        "hira_target": "なか",
        "kanji_options": [
          "外",
          "白",
          "中",
          "来月"
        ],
        "hira_options": [
          "そと",
          "しろ",
          "なか",
          "らいげつ"
        ],
        "romaji": "naka",
        "vi_meaning": "bên trong"
      },
      {
        "id": "topic_08_time_place_49",
        "num": 49,
        "sentence_hira": "すずきさんは <u>そと</u> を/が 探しています。",
        "sentence_kanji": "すずきさんは <u>外</u> を/が 探しています。",
        "kanji_target": "外",
        "hira_target": "そと",
        "kanji_options": [
          "外",
          "前",
          "明日",
          "最近"
        ],
        "hira_options": [
          "そと",
          "まえ",
          "あした",
          "さいきん"
        ],
        "romaji": "soto",
        "vi_meaning": "bên ngoài"
      },
      {
        "id": "topic_08_time_place_50",
        "num": 50,
        "sentence_hira": "すずきさんは <u>となり</u> を/が 探しています。",
        "sentence_kanji": "すずきさんは <u>隣</u> を/が 探しています。",
        "kanji_target": "隣",
        "hira_target": "となり",
        "kanji_options": [
          "先週",
          "隣",
          "来週",
          "昨日"
        ],
        "hira_options": [
          "せんしゅう",
          "となり",
          "らいしゅう",
          "きのう"
        ],
        "romaji": "tonari",
        "vi_meaning": "bên cạnh"
      },
      {
        "id": "topic_08_time_place_51",
        "num": 51,
        "sentence_hira": "すずきさんは <u>あか</u> を/が 探しています。",
        "sentence_kanji": "すずきさんは <u>赤</u> を/が 探しています。",
        "kanji_target": "赤",
        "hira_target": "あか",
        "kanji_options": [
          "黒",
          "左",
          "左",
          "赤"
        ],
        "hira_options": [
          "くろ",
          "ひだり",
          "ひだり",
          "あか"
        ],
        "romaji": "aka",
        "vi_meaning": "màu đỏ"
      },
      {
        "id": "topic_08_time_place_52",
        "num": 52,
        "sentence_hira": "すずきさんは <u>あお</u> を/が 探しています。",
        "sentence_kanji": "すずきさんは <u>青</u> を/が 探しています。",
        "kanji_target": "青",
        "hira_target": "あお",
        "kanji_options": [
          "今日",
          "時間",
          "青",
          "来週"
        ],
        "hira_options": [
          "きょう",
          "じかん",
          "あお",
          "らいしゅう"
        ],
        "romaji": "ao",
        "vi_meaning": "màu xanh"
      },
      {
        "id": "topic_08_time_place_53",
        "num": 53,
        "sentence_hira": "すずきさんは <u>しろ</u> を/が 探しています。",
        "sentence_kanji": "すずきさんは <u>白</u> を/が 探しています。",
        "kanji_target": "白",
        "hira_target": "しろ",
        "kanji_options": [
          "白",
          "昔",
          "将来",
          "時間"
        ],
        "hira_options": [
          "しろ",
          "むかし",
          "しょうらい",
          "じかん"
        ],
        "romaji": "shiro",
        "vi_meaning": "màu trắng"
      },
      {
        "id": "topic_08_time_place_54",
        "num": 54,
        "sentence_hira": "すずきさんは <u>くろ</u> を/が 探しています。",
        "sentence_kanji": "すずきさんは <u>黒</u> を/が 探しています。",
        "kanji_target": "黒",
        "hira_target": "くろ",
        "kanji_options": [
          "白",
          "今年",
          "黒",
          "最近"
        ],
        "hira_options": [
          "しろ",
          "ことし",
          "くろ",
          "さいきん"
        ],
        "romaji": "kuro",
        "vi_meaning": "màu đen"
      },
      {
        "id": "topic_08_time_place_55",
        "num": 55,
        "sentence_hira": "すずきさんは <u>じかん</u> を/が 探しています。",
        "sentence_kanji": "すずきさんは <u>時間</u> を/が 探しています。",
        "kanji_target": "時間",
        "hira_target": "じかん",
        "kanji_options": [
          "今週",
          "右",
          "昨日",
          "時間"
        ],
        "hira_options": [
          "こんしゅう",
          "みぎ",
          "きのう",
          "じかん"
        ],
        "romaji": "jikan",
        "vi_meaning": "thời gian"
      },
      {
        "id": "topic_08_time_place_56",
        "num": 56,
        "sentence_hira": "すずきさんは <u>きょう</u> を/が 探しています。",
        "sentence_kanji": "すずきさんは <u>今日</u> を/が 探しています。",
        "kanji_target": "今日",
        "hira_target": "きょう",
        "kanji_options": [
          "今年",
          "今日",
          "将来",
          "隣"
        ],
        "hira_options": [
          "ことし",
          "きょう",
          "しょうらい",
          "となり"
        ],
        "romaji": "kyou",
        "vi_meaning": "hôm nay"
      },
      {
        "id": "topic_08_time_place_57",
        "num": 57,
        "sentence_hira": "すずきさんは <u>あした</u> を/が 探しています。",
        "sentence_kanji": "すずきさんは <u>明日</u> を/が 探しています。",
        "kanji_target": "明日",
        "hira_target": "あした",
        "kanji_options": [
          "黒",
          "中",
          "明日",
          "白"
        ],
        "hira_options": [
          "くろ",
          "なか",
          "あした",
          "しろ"
        ],
        "romaji": "ashita",
        "vi_meaning": "ngày mai"
      },
      {
        "id": "topic_08_time_place_58",
        "num": 58,
        "sentence_hira": "すずきさんは <u>きのう</u> を/が 探しています。",
        "sentence_kanji": "すずきさんは <u>昨日</u> を/が 探しています。",
        "kanji_target": "昨日",
        "hira_target": "きのう",
        "kanji_options": [
          "隣",
          "白",
          "今週",
          "昨日"
        ],
        "hira_options": [
          "となり",
          "しろ",
          "こんしゅう",
          "きのう"
        ],
        "romaji": "kinou",
        "vi_meaning": "hôm qua"
      },
      {
        "id": "topic_08_time_place_59",
        "num": 59,
        "sentence_hira": "すずきさんは <u>こんしゅう</u> を/が 探しています。",
        "sentence_kanji": "すずきさんは <u>今週</u> を/が 探しています。",
        "kanji_target": "今週",
        "hira_target": "こんしゅう",
        "kanji_options": [
          "外",
          "今日",
          "前",
          "今週"
        ],
        "hira_options": [
          "そと",
          "きょう",
          "まえ",
          "こんしゅう"
        ],
        "romaji": "konshuu",
        "vi_meaning": "tuần này"
      },
      {
        "id": "topic_08_time_place_60",
        "num": 60,
        "sentence_hira": "すずきさんは <u>らいしゅう</u> を/が 探しています。",
        "sentence_kanji": "すずきさんは <u>来週</u> を/が 探しています。",
        "kanji_target": "来週",
        "hira_target": "らいしゅう",
        "kanji_options": [
          "先週",
          "後ろ",
          "今日",
          "来週"
        ],
        "hira_options": [
          "せんしゅう",
          "うしろ",
          "きょう",
          "らいしゅう"
        ],
        "romaji": "raishuu",
        "vi_meaning": "tuần tới"
      },
      {
        "id": "topic_08_time_place_61",
        "num": 61,
        "sentence_hira": "すずきさんは <u>せんしゅう</u> を/が 探しています。",
        "sentence_kanji": "すずきさんは <u>先週</u> を/が 探しています。",
        "kanji_target": "先週",
        "hira_target": "せんしゅう",
        "kanji_options": [
          "右",
          "右",
          "来年",
          "先週"
        ],
        "hira_options": [
          "みぎ",
          "みぎ",
          "らいねん",
          "せんしゅう"
        ],
        "romaji": "senshuu",
        "vi_meaning": "tuần trước"
      },
      {
        "id": "topic_08_time_place_62",
        "num": 62,
        "sentence_hira": "すずきさんは <u>こんげつ</u> を/が 探しています。",
        "sentence_kanji": "すずきさんは <u>今月</u> を/が 探しています。",
        "kanji_target": "今月",
        "hira_target": "こんげつ",
        "kanji_options": [
          "外",
          "今月",
          "来週",
          "昔"
        ],
        "hira_options": [
          "そと",
          "こんげつ",
          "らいしゅう",
          "むかし"
        ],
        "romaji": "kongetsu",
        "vi_meaning": "tháng này"
      },
      {
        "id": "topic_08_time_place_63",
        "num": 63,
        "sentence_hira": "すずきさんは <u>らいげつ</u> を/が 探しています。",
        "sentence_kanji": "すずきさんは <u>来月</u> を/が 探しています。",
        "kanji_target": "来月",
        "hira_target": "らいげつ",
        "kanji_options": [
          "来月",
          "上",
          "中",
          "今月"
        ],
        "hira_options": [
          "らいげつ",
          "うえ",
          "なか",
          "こんげつ"
        ],
        "romaji": "raigetsu",
        "vi_meaning": "tháng sau"
      },
      {
        "id": "topic_08_time_place_64",
        "num": 64,
        "sentence_hira": "すずきさんは <u>ことし</u> を/が 探しています。",
        "sentence_kanji": "すずきさんは <u>今年</u> を/が 探しています。",
        "kanji_target": "今年",
        "hira_target": "ことし",
        "kanji_options": [
          "左",
          "今年",
          "明日",
          "昔"
        ],
        "hira_options": [
          "ひだり",
          "ことし",
          "あした",
          "むかし"
        ],
        "romaji": "kotoshi",
        "vi_meaning": "năm nay"
      },
      {
        "id": "topic_08_time_place_65",
        "num": 65,
        "sentence_hira": "すずきさんは <u>らいねん</u> を/が 探しています。",
        "sentence_kanji": "すずきさんは <u>来年</u> を/が 探しています。",
        "kanji_target": "来年",
        "hira_target": "らいねん",
        "kanji_options": [
          "昔",
          "来週",
          "来年",
          "後ろ"
        ],
        "hira_options": [
          "むかし",
          "らいしゅう",
          "らいねん",
          "うしろ"
        ],
        "romaji": "rainen",
        "vi_meaning": "năm sau"
      },
      {
        "id": "topic_08_time_place_66",
        "num": 66,
        "sentence_hira": "すずきさんは <u>さいきん</u> を/が 探しています。",
        "sentence_kanji": "すずきさんは <u>最近</u> を/が 探しています。",
        "kanji_target": "最近",
        "hira_target": "さいきん",
        "kanji_options": [
          "最近",
          "上",
          "中",
          "白"
        ],
        "hira_options": [
          "さいきん",
          "うえ",
          "なか",
          "しろ"
        ],
        "romaji": "saikin",
        "vi_meaning": "gần đây"
      },
      {
        "id": "topic_08_time_place_67",
        "num": 67,
        "sentence_hira": "すずきさんは <u>しょうらい</u> を/が 探しています。",
        "sentence_kanji": "すずきさんは <u>将来</u> を/が 探しています。",
        "kanji_target": "将来",
        "hira_target": "しょうらい",
        "kanji_options": [
          "将来",
          "時間",
          "赤",
          "今日"
        ],
        "hira_options": [
          "しょうらい",
          "じかん",
          "あか",
          "きょう"
        ],
        "romaji": "shourai",
        "vi_meaning": "tương lai"
      },
      {
        "id": "topic_08_time_place_68",
        "num": 68,
        "sentence_hira": "すずきさんは <u>むかし</u> を/が 探しています。",
        "sentence_kanji": "すずきさんは <u>昔</u> を/が 探しています。",
        "kanji_target": "昔",
        "hira_target": "むかし",
        "kanji_options": [
          "昔",
          "昨日",
          "左",
          "今日"
        ],
        "hira_options": [
          "むかし",
          "きのう",
          "ひだり",
          "きょう"
        ],
        "romaji": "mukashi",
        "vi_meaning": "ngày xưa"
      },
      {
        "id": "topic_08_time_place_69",
        "num": 69,
        "sentence_hira": "すずきさんは <u>うえ</u> を/が 探しています。",
        "sentence_kanji": "すずきさんは <u>上</u> を/が 探しています。",
        "kanji_target": "上",
        "hira_target": "うえ",
        "kanji_options": [
          "後ろ",
          "上",
          "明日",
          "来年"
        ],
        "hira_options": [
          "うしろ",
          "うえ",
          "あした",
          "らいねん"
        ],
        "romaji": "ue",
        "vi_meaning": "phía trên"
      },
      {
        "id": "topic_08_time_place_70",
        "num": 70,
        "sentence_hira": "すずきさんは <u>した</u> を/が 探しています。",
        "sentence_kanji": "すずきさんは <u>下</u> を/が 探しています。",
        "kanji_target": "下",
        "hira_target": "した",
        "kanji_options": [
          "後ろ",
          "赤",
          "下",
          "上"
        ],
        "hira_options": [
          "うしろ",
          "あか",
          "した",
          "うえ"
        ],
        "romaji": "shita",
        "vi_meaning": "phía dưới"
      },
      {
        "id": "topic_08_time_place_71",
        "num": 71,
        "sentence_hira": "すずきさんは <u>まえ</u> を/が 探しています。",
        "sentence_kanji": "すずきさんは <u>前</u> を/が 探しています。",
        "kanji_target": "前",
        "hira_target": "まえ",
        "kanji_options": [
          "来月",
          "中",
          "上",
          "前"
        ],
        "hira_options": [
          "らいげつ",
          "なか",
          "うえ",
          "まえ"
        ],
        "romaji": "mae",
        "vi_meaning": "phía trước"
      },
      {
        "id": "topic_08_time_place_72",
        "num": 72,
        "sentence_hira": "すずきさんは <u>うしろ</u> を/が 探しています。",
        "sentence_kanji": "すずきさんは <u>後ろ</u> を/が 探しています。",
        "kanji_target": "後ろ",
        "hira_target": "うしろ",
        "kanji_options": [
          "今月",
          "隣",
          "今年",
          "後ろ"
        ],
        "hira_options": [
          "こんげつ",
          "となり",
          "ことし",
          "うしろ"
        ],
        "romaji": "ushiro",
        "vi_meaning": "phía sau"
      },
      {
        "id": "topic_08_time_place_73",
        "num": 73,
        "sentence_hira": "すずきさんは <u>みぎ</u> を/が 探しています。",
        "sentence_kanji": "すずきさんは <u>右</u> を/が 探しています。",
        "kanji_target": "右",
        "hira_target": "みぎ",
        "kanji_options": [
          "来週",
          "右",
          "明日",
          "今日"
        ],
        "hira_options": [
          "らいしゅう",
          "みぎ",
          "あした",
          "きょう"
        ],
        "romaji": "migi",
        "vi_meaning": "bên phải"
      },
      {
        "id": "topic_08_time_place_74",
        "num": 74,
        "sentence_hira": "すずきさんは <u>ひだり</u> を/が 探しています。",
        "sentence_kanji": "すずきさんは <u>左</u> を/が 探しています。",
        "kanji_target": "左",
        "hira_target": "ひだり",
        "kanji_options": [
          "前",
          "左",
          "下",
          "黒"
        ],
        "hira_options": [
          "まえ",
          "ひだり",
          "した",
          "くろ"
        ],
        "romaji": "hidari",
        "vi_meaning": "bên trái"
      },
      {
        "id": "topic_08_time_place_75",
        "num": 75,
        "sentence_hira": "すずきさんは <u>なか</u> を/が 探しています。",
        "sentence_kanji": "すずきさんは <u>中</u> を/が 探しています。",
        "kanji_target": "中",
        "hira_target": "なか",
        "kanji_options": [
          "明日",
          "下",
          "今日",
          "中"
        ],
        "hira_options": [
          "あした",
          "した",
          "きょう",
          "なか"
        ],
        "romaji": "naka",
        "vi_meaning": "bên trong"
      },
      {
        "id": "topic_08_time_place_76",
        "num": 76,
        "sentence_hira": "すずきさんは <u>そと</u> を/が 探しています。",
        "sentence_kanji": "すずきさんは <u>外</u> を/が 探しています。",
        "kanji_target": "外",
        "hira_target": "そと",
        "kanji_options": [
          "外",
          "今月",
          "右",
          "今月"
        ],
        "hira_options": [
          "そと",
          "こんげつ",
          "みぎ",
          "こんげつ"
        ],
        "romaji": "soto",
        "vi_meaning": "bên ngoài"
      },
      {
        "id": "topic_08_time_place_77",
        "num": 77,
        "sentence_hira": "すずきさんは <u>となり</u> を/が 探しています。",
        "sentence_kanji": "すずきさんは <u>隣</u> を/が 探しています。",
        "kanji_target": "隣",
        "hira_target": "となり",
        "kanji_options": [
          "昔",
          "今年",
          "隣",
          "来月"
        ],
        "hira_options": [
          "むかし",
          "ことし",
          "となり",
          "らいげつ"
        ],
        "romaji": "tonari",
        "vi_meaning": "bên cạnh"
      },
      {
        "id": "topic_08_time_place_78",
        "num": 78,
        "sentence_hira": "すずきさんは <u>あか</u> を/が 探しています。",
        "sentence_kanji": "すずきさんは <u>赤</u> を/が 探しています。",
        "kanji_target": "赤",
        "hira_target": "あか",
        "kanji_options": [
          "今週",
          "今日",
          "赤",
          "先週"
        ],
        "hira_options": [
          "こんしゅう",
          "きょう",
          "あか",
          "せんしゅう"
        ],
        "romaji": "aka",
        "vi_meaning": "màu đỏ"
      },
      {
        "id": "topic_08_time_place_79",
        "num": 79,
        "sentence_hira": "すずきさんは <u>あお</u> を/が 探しています。",
        "sentence_kanji": "すずきさんは <u>青</u> を/が 探しています。",
        "kanji_target": "青",
        "hira_target": "あお",
        "kanji_options": [
          "今日",
          "右",
          "前",
          "青"
        ],
        "hira_options": [
          "きょう",
          "みぎ",
          "まえ",
          "あお"
        ],
        "romaji": "ao",
        "vi_meaning": "màu xanh"
      },
      {
        "id": "topic_08_time_place_80",
        "num": 80,
        "sentence_hira": "すずきさんは <u>しろ</u> を/が 探しています。",
        "sentence_kanji": "すずきさんは <u>白</u> を/が 探しています。",
        "kanji_target": "白",
        "hira_target": "しろ",
        "kanji_options": [
          "赤",
          "先週",
          "隣",
          "白"
        ],
        "hira_options": [
          "あか",
          "せんしゅう",
          "となり",
          "しろ"
        ],
        "romaji": "shiro",
        "vi_meaning": "màu trắng"
      },
      {
        "id": "topic_08_time_place_81",
        "num": 81,
        "sentence_hira": "すずきさんは <u>くろ</u> を/が 探しています。",
        "sentence_kanji": "すずきさんは <u>黒</u> を/が 探しています。",
        "kanji_target": "黒",
        "hira_target": "くろ",
        "kanji_options": [
          "上",
          "黒",
          "今年",
          "後ろ"
        ],
        "hira_options": [
          "うえ",
          "くろ",
          "ことし",
          "うしろ"
        ],
        "romaji": "kuro",
        "vi_meaning": "màu đen"
      },
      {
        "id": "topic_08_time_place_82",
        "num": 82,
        "sentence_hira": "すずきさんは <u>じかん</u> を/が 探しています。",
        "sentence_kanji": "すずきさんは <u>時間</u> を/が 探しています。",
        "kanji_target": "時間",
        "hira_target": "じかん",
        "kanji_options": [
          "黒",
          "後ろ",
          "時間",
          "前"
        ],
        "hira_options": [
          "くろ",
          "うしろ",
          "じかん",
          "まえ"
        ],
        "romaji": "jikan",
        "vi_meaning": "thời gian"
      },
      {
        "id": "topic_08_time_place_83",
        "num": 83,
        "sentence_hira": "すずきさんは <u>きょう</u> を/が 探しています。",
        "sentence_kanji": "すずきさんは <u>今日</u> を/が 探しています。",
        "kanji_target": "今日",
        "hira_target": "きょう",
        "kanji_options": [
          "前",
          "今月",
          "今日",
          "時間"
        ],
        "hira_options": [
          "まえ",
          "こんげつ",
          "きょう",
          "じかん"
        ],
        "romaji": "kyou",
        "vi_meaning": "hôm nay"
      },
      {
        "id": "topic_08_time_place_84",
        "num": 84,
        "sentence_hira": "すずきさんは <u>あした</u> を/が 探しています。",
        "sentence_kanji": "すずきさんは <u>明日</u> を/が 探しています。",
        "kanji_target": "明日",
        "hira_target": "あした",
        "kanji_options": [
          "来年",
          "明日",
          "今年",
          "今週"
        ],
        "hira_options": [
          "らいねん",
          "あした",
          "ことし",
          "こんしゅう"
        ],
        "romaji": "ashita",
        "vi_meaning": "ngày mai"
      },
      {
        "id": "topic_08_time_place_85",
        "num": 85,
        "sentence_hira": "すずきさんは <u>きのう</u> を/が 探しています。",
        "sentence_kanji": "すずきさんは <u>昨日</u> を/が 探しています。",
        "kanji_target": "昨日",
        "hira_target": "きのう",
        "kanji_options": [
          "今日",
          "今日",
          "今年",
          "昨日"
        ],
        "hira_options": [
          "きょう",
          "きょう",
          "ことし",
          "きのう"
        ],
        "romaji": "kinou",
        "vi_meaning": "hôm qua"
      },
      {
        "id": "topic_08_time_place_86",
        "num": 86,
        "sentence_hira": "すずきさんは <u>こんしゅう</u> を/が 探しています。",
        "sentence_kanji": "すずきさんは <u>今週</u> を/が 探しています。",
        "kanji_target": "今週",
        "hira_target": "こんしゅう",
        "kanji_options": [
          "今週",
          "来年",
          "前",
          "右"
        ],
        "hira_options": [
          "こんしゅう",
          "らいねん",
          "まえ",
          "みぎ"
        ],
        "romaji": "konshuu",
        "vi_meaning": "tuần này"
      },
      {
        "id": "topic_08_time_place_87",
        "num": 87,
        "sentence_hira": "すずきさんは <u>らいしゅう</u> を/が 探しています。",
        "sentence_kanji": "すずきさんは <u>来週</u> を/が 探しています。",
        "kanji_target": "来週",
        "hira_target": "らいしゅう",
        "kanji_options": [
          "昨日",
          "来週",
          "今月",
          "前"
        ],
        "hira_options": [
          "きのう",
          "らいしゅう",
          "こんげつ",
          "まえ"
        ],
        "romaji": "raishuu",
        "vi_meaning": "tuần tới"
      },
      {
        "id": "topic_08_time_place_88",
        "num": 88,
        "sentence_hira": "すずきさんは <u>せんしゅう</u> を/が 探しています。",
        "sentence_kanji": "すずきさんは <u>先週</u> を/が 探しています。",
        "kanji_target": "先週",
        "hira_target": "せんしゅう",
        "kanji_options": [
          "昔",
          "最近",
          "先週",
          "来年"
        ],
        "hira_options": [
          "むかし",
          "さいきん",
          "せんしゅう",
          "らいねん"
        ],
        "romaji": "senshuu",
        "vi_meaning": "tuần trước"
      },
      {
        "id": "topic_08_time_place_89",
        "num": 89,
        "sentence_hira": "すずきさんは <u>こんげつ</u> を/が 探しています。",
        "sentence_kanji": "すずきさんは <u>今月</u> を/が 探しています。",
        "kanji_target": "今月",
        "hira_target": "こんげつ",
        "kanji_options": [
          "今月",
          "時間",
          "昔",
          "黒"
        ],
        "hira_options": [
          "こんげつ",
          "じかん",
          "むかし",
          "くろ"
        ],
        "romaji": "kongetsu",
        "vi_meaning": "tháng này"
      },
      {
        "id": "topic_08_time_place_90",
        "num": 90,
        "sentence_hira": "すずきさんは <u>らいげつ</u> を/が 探しています。",
        "sentence_kanji": "すずきさんは <u>来月</u> を/が 探しています。",
        "kanji_target": "来月",
        "hira_target": "らいげつ",
        "kanji_options": [
          "来月",
          "今日",
          "今週",
          "中"
        ],
        "hira_options": [
          "らいげつ",
          "きょう",
          "こんしゅう",
          "なか"
        ],
        "romaji": "raigetsu",
        "vi_meaning": "tháng sau"
      },
      {
        "id": "topic_08_time_place_91",
        "num": 91,
        "sentence_hira": "すずきさんは <u>ことし</u> を/が 探しています。",
        "sentence_kanji": "すずきさんは <u>今年</u> を/が 探しています。",
        "kanji_target": "今年",
        "hira_target": "ことし",
        "kanji_options": [
          "今年",
          "青",
          "後ろ",
          "隣"
        ],
        "hira_options": [
          "ことし",
          "あお",
          "うしろ",
          "となり"
        ],
        "romaji": "kotoshi",
        "vi_meaning": "năm nay"
      },
      {
        "id": "topic_08_time_place_92",
        "num": 92,
        "sentence_hira": "すずきさんは <u>らいねん</u> を/が 探しています。",
        "sentence_kanji": "すずきさんは <u>来年</u> を/が 探しています。",
        "kanji_target": "来年",
        "hira_target": "らいねん",
        "kanji_options": [
          "隣",
          "下",
          "今年",
          "来年"
        ],
        "hira_options": [
          "となり",
          "した",
          "ことし",
          "らいねん"
        ],
        "romaji": "rainen",
        "vi_meaning": "năm sau"
      },
      {
        "id": "topic_08_time_place_93",
        "num": 93,
        "sentence_hira": "すずきさんは <u>さいきん</u> を/が 探しています。",
        "sentence_kanji": "すずきさんは <u>最近</u> を/が 探しています。",
        "kanji_target": "最近",
        "hira_target": "さいきん",
        "kanji_options": [
          "青",
          "白",
          "最近",
          "時間"
        ],
        "hira_options": [
          "あお",
          "しろ",
          "さいきん",
          "じかん"
        ],
        "romaji": "saikin",
        "vi_meaning": "gần đây"
      },
      {
        "id": "topic_08_time_place_94",
        "num": 94,
        "sentence_hira": "すずきさんは <u>しょうらい</u> を/が 探しています。",
        "sentence_kanji": "すずきさんは <u>将来</u> を/が 探しています。",
        "kanji_target": "将来",
        "hira_target": "しょうらい",
        "kanji_options": [
          "青",
          "将来",
          "右",
          "今週"
        ],
        "hira_options": [
          "あお",
          "しょうらい",
          "みぎ",
          "こんしゅう"
        ],
        "romaji": "shourai",
        "vi_meaning": "tương lai"
      },
      {
        "id": "topic_08_time_place_95",
        "num": 95,
        "sentence_hira": "すずきさんは <u>むかし</u> を/が 探しています。",
        "sentence_kanji": "すずきさんは <u>昔</u> を/が 探しています。",
        "kanji_target": "昔",
        "hira_target": "むかし",
        "kanji_options": [
          "左",
          "来週",
          "黒",
          "昔"
        ],
        "hira_options": [
          "ひだり",
          "らいしゅう",
          "くろ",
          "むかし"
        ],
        "romaji": "mukashi",
        "vi_meaning": "ngày xưa"
      },
      {
        "id": "topic_08_time_place_96",
        "num": 96,
        "sentence_hira": "すずきさんは <u>うえ</u> を/が 探しています。",
        "sentence_kanji": "すずきさんは <u>上</u> を/が 探しています。",
        "kanji_target": "上",
        "hira_target": "うえ",
        "kanji_options": [
          "前",
          "上",
          "最近",
          "先週"
        ],
        "hira_options": [
          "まえ",
          "うえ",
          "さいきん",
          "せんしゅう"
        ],
        "romaji": "ue",
        "vi_meaning": "phía trên"
      },
      {
        "id": "topic_08_time_place_97",
        "num": 97,
        "sentence_hira": "すずきさんは <u>した</u> を/が 探しています。",
        "sentence_kanji": "すずきさんは <u>下</u> を/が 探しています。",
        "kanji_target": "下",
        "hira_target": "した",
        "kanji_options": [
          "今日",
          "今週",
          "下",
          "隣"
        ],
        "hira_options": [
          "きょう",
          "こんしゅう",
          "した",
          "となり"
        ],
        "romaji": "shita",
        "vi_meaning": "phía dưới"
      },
      {
        "id": "topic_08_time_place_98",
        "num": 98,
        "sentence_hira": "すずきさんは <u>まえ</u> を/が 探しています。",
        "sentence_kanji": "すずきさんは <u>前</u> を/が 探しています。",
        "kanji_target": "前",
        "hira_target": "まえ",
        "kanji_options": [
          "前",
          "白",
          "中",
          "来週"
        ],
        "hira_options": [
          "まえ",
          "しろ",
          "なか",
          "らいしゅう"
        ],
        "romaji": "mae",
        "vi_meaning": "phía trước"
      },
      {
        "id": "topic_08_time_place_99",
        "num": 99,
        "sentence_hira": "すずきさんは <u>うしろ</u> を/が 探しています。",
        "sentence_kanji": "すずきさんは <u>後ろ</u> を/が 探しています。",
        "kanji_target": "後ろ",
        "hira_target": "うしろ",
        "kanji_options": [
          "後ろ",
          "昔",
          "最近",
          "中"
        ],
        "hira_options": [
          "うしろ",
          "むかし",
          "さいきん",
          "なか"
        ],
        "romaji": "ushiro",
        "vi_meaning": "phía sau"
      },
      {
        "id": "topic_08_time_place_100",
        "num": 100,
        "sentence_hira": "すずきさんは <u>みぎ</u> を/が 探しています。",
        "sentence_kanji": "すずきさんは <u>右</u> を/が 探しています。",
        "kanji_target": "右",
        "hira_target": "みぎ",
        "kanji_options": [
          "先週",
          "右",
          "赤",
          "今週"
        ],
        "hira_options": [
          "せんしゅう",
          "みぎ",
          "あか",
          "こんしゅう"
        ],
        "romaji": "migi",
        "vi_meaning": "bên phải"
      },
      {
        "id": "topic_08_time_place_101",
        "num": 101,
        "sentence_hira": "すずきさんは <u>ひだり</u> を/が 探しています。",
        "sentence_kanji": "すずきさんは <u>左</u> を/が 探しています。",
        "kanji_target": "左",
        "hira_target": "ひだり",
        "kanji_options": [
          "時間",
          "来年",
          "左",
          "後ろ"
        ],
        "hira_options": [
          "じかん",
          "らいねん",
          "ひだり",
          "うしろ"
        ],
        "romaji": "hidari",
        "vi_meaning": "bên trái"
      },
      {
        "id": "topic_08_time_place_102",
        "num": 102,
        "sentence_hira": "すずきさんは <u>なか</u> を/が 探しています。",
        "sentence_kanji": "すずきさんは <u>中</u> を/が 探しています。",
        "kanji_target": "中",
        "hira_target": "なか",
        "kanji_options": [
          "昨日",
          "赤",
          "中",
          "外"
        ],
        "hira_options": [
          "きのう",
          "あか",
          "なか",
          "そと"
        ],
        "romaji": "naka",
        "vi_meaning": "bên trong"
      },
      {
        "id": "topic_08_time_place_103",
        "num": 103,
        "sentence_hira": "すずきさんは <u>そと</u> を/が 探しています。",
        "sentence_kanji": "すずきさんは <u>外</u> を/が 探しています。",
        "kanji_target": "外",
        "hira_target": "そと",
        "kanji_options": [
          "上",
          "白",
          "先週",
          "外"
        ],
        "hira_options": [
          "うえ",
          "しろ",
          "せんしゅう",
          "そと"
        ],
        "romaji": "soto",
        "vi_meaning": "bên ngoài"
      },
      {
        "id": "topic_08_time_place_104",
        "num": 104,
        "sentence_hira": "すずきさんは <u>となり</u> を/が 探しています。",
        "sentence_kanji": "すずきさんは <u>隣</u> を/が 探しています。",
        "kanji_target": "隣",
        "hira_target": "となり",
        "kanji_options": [
          "外",
          "明日",
          "時間",
          "隣"
        ],
        "hira_options": [
          "そと",
          "あした",
          "じかん",
          "となり"
        ],
        "romaji": "tonari",
        "vi_meaning": "bên cạnh"
      },
      {
        "id": "topic_08_time_place_105",
        "num": 105,
        "sentence_hira": "すずきさんは <u>あか</u> を/が 探しています。",
        "sentence_kanji": "すずきさんは <u>赤</u> を/が 探しています。",
        "kanji_target": "赤",
        "hira_target": "あか",
        "kanji_options": [
          "来月",
          "今月",
          "赤",
          "今日"
        ],
        "hira_options": [
          "らいげつ",
          "こんげつ",
          "あか",
          "きょう"
        ],
        "romaji": "aka",
        "vi_meaning": "màu đỏ"
      },
      {
        "id": "topic_08_time_place_106",
        "num": 106,
        "sentence_hira": "すずきさんは <u>あお</u> を/が 探しています。",
        "sentence_kanji": "すずきさんは <u>青</u> を/が 探しています。",
        "kanji_target": "青",
        "hira_target": "あお",
        "kanji_options": [
          "青",
          "来年",
          "隣",
          "前"
        ],
        "hira_options": [
          "あお",
          "らいねん",
          "となり",
          "まえ"
        ],
        "romaji": "ao",
        "vi_meaning": "màu xanh"
      },
      {
        "id": "topic_08_time_place_107",
        "num": 107,
        "sentence_hira": "すずきさんは <u>しろ</u> を/が 探しています。",
        "sentence_kanji": "すずきさんは <u>白</u> を/が 探しています。",
        "kanji_target": "白",
        "hira_target": "しろ",
        "kanji_options": [
          "来年",
          "最近",
          "来年",
          "白"
        ],
        "hira_options": [
          "らいねん",
          "さいきん",
          "らいねん",
          "しろ"
        ],
        "romaji": "shiro",
        "vi_meaning": "màu trắng"
      },
      {
        "id": "topic_08_time_place_108",
        "num": 108,
        "sentence_hira": "すずきさんは <u>くろ</u> を/が 探しています。",
        "sentence_kanji": "すずきさんは <u>黒</u> を/が 探しています。",
        "kanji_target": "黒",
        "hira_target": "くろ",
        "kanji_options": [
          "赤",
          "前",
          "黒",
          "青"
        ],
        "hira_options": [
          "あか",
          "まえ",
          "くろ",
          "あお"
        ],
        "romaji": "kuro",
        "vi_meaning": "màu đen"
      },
      {
        "id": "topic_08_time_place_109",
        "num": 109,
        "sentence_hira": "すずきさんは <u>じかん</u> を/が 探しています。",
        "sentence_kanji": "すずきさんは <u>時間</u> を/が 探しています。",
        "kanji_target": "時間",
        "hira_target": "じかん",
        "kanji_options": [
          "隣",
          "時間",
          "昔",
          "左"
        ],
        "hira_options": [
          "となり",
          "じかん",
          "むかし",
          "ひだり"
        ],
        "romaji": "jikan",
        "vi_meaning": "thời gian"
      },
      {
        "id": "topic_08_time_place_110",
        "num": 110,
        "sentence_hira": "すずきさんは <u>きょう</u> を/が 探しています。",
        "sentence_kanji": "すずきさんは <u>今日</u> を/が 探しています。",
        "kanji_target": "今日",
        "hira_target": "きょう",
        "kanji_options": [
          "下",
          "今日",
          "下",
          "将来"
        ],
        "hira_options": [
          "した",
          "きょう",
          "した",
          "しょうらい"
        ],
        "romaji": "kyou",
        "vi_meaning": "hôm nay"
      },
      {
        "id": "topic_08_time_place_111",
        "num": 111,
        "sentence_hira": "すずきさんは <u>あした</u> を/が 探しています。",
        "sentence_kanji": "すずきさんは <u>明日</u> を/が 探しています。",
        "kanji_target": "明日",
        "hira_target": "あした",
        "kanji_options": [
          "来月",
          "明日",
          "後ろ",
          "昨日"
        ],
        "hira_options": [
          "らいげつ",
          "あした",
          "うしろ",
          "きのう"
        ],
        "romaji": "ashita",
        "vi_meaning": "ngày mai"
      },
      {
        "id": "topic_08_time_place_112",
        "num": 112,
        "sentence_hira": "すずきさんは <u>きのう</u> を/が 探しています。",
        "sentence_kanji": "すずきさんは <u>昨日</u> を/が 探しています。",
        "kanji_target": "昨日",
        "hira_target": "きのう",
        "kanji_options": [
          "後ろ",
          "来月",
          "昨日",
          "今日"
        ],
        "hira_options": [
          "うしろ",
          "らいげつ",
          "きのう",
          "きょう"
        ],
        "romaji": "kinou",
        "vi_meaning": "hôm qua"
      },
      {
        "id": "topic_08_time_place_113",
        "num": 113,
        "sentence_hira": "すずきさんは <u>こんしゅう</u> を/が 探しています。",
        "sentence_kanji": "すずきさんは <u>今週</u> を/が 探しています。",
        "kanji_target": "今週",
        "hira_target": "こんしゅう",
        "kanji_options": [
          "下",
          "中",
          "今週",
          "来年"
        ],
        "hira_options": [
          "した",
          "なか",
          "こんしゅう",
          "らいねん"
        ],
        "romaji": "konshuu",
        "vi_meaning": "tuần này"
      },
      {
        "id": "topic_08_time_place_114",
        "num": 114,
        "sentence_hira": "すずきさんは <u>らいしゅう</u> を/が 探しています。",
        "sentence_kanji": "すずきさんは <u>来週</u> を/が 探しています。",
        "kanji_target": "来週",
        "hira_target": "らいしゅう",
        "kanji_options": [
          "来週",
          "青",
          "将来",
          "白"
        ],
        "hira_options": [
          "らいしゅう",
          "あお",
          "しょうらい",
          "しろ"
        ],
        "romaji": "raishuu",
        "vi_meaning": "tuần tới"
      },
      {
        "id": "topic_08_time_place_115",
        "num": 115,
        "sentence_hira": "すずきさんは <u>せんしゅう</u> を/が 探しています。",
        "sentence_kanji": "すずきさんは <u>先週</u> を/が 探しています。",
        "kanji_target": "先週",
        "hira_target": "せんしゅう",
        "kanji_options": [
          "青",
          "先週",
          "下",
          "中"
        ],
        "hira_options": [
          "あお",
          "せんしゅう",
          "した",
          "なか"
        ],
        "romaji": "senshuu",
        "vi_meaning": "tuần trước"
      },
      {
        "id": "topic_08_time_place_116",
        "num": 116,
        "sentence_hira": "すずきさんは <u>こんげつ</u> を/が 探しています。",
        "sentence_kanji": "すずきさんは <u>今月</u> を/が 探しています。",
        "kanji_target": "今月",
        "hira_target": "こんげつ",
        "kanji_options": [
          "時間",
          "時間",
          "今年",
          "今月"
        ],
        "hira_options": [
          "じかん",
          "じかん",
          "ことし",
          "こんげつ"
        ],
        "romaji": "kongetsu",
        "vi_meaning": "tháng này"
      },
      {
        "id": "topic_08_time_place_117",
        "num": 117,
        "sentence_hira": "すずきさんは <u>らいげつ</u> を/が 探しています。",
        "sentence_kanji": "すずきさんは <u>来月</u> を/が 探しています。",
        "kanji_target": "来月",
        "hira_target": "らいげつ",
        "kanji_options": [
          "来月",
          "最近",
          "後ろ",
          "今月"
        ],
        "hira_options": [
          "らいげつ",
          "さいきん",
          "うしろ",
          "こんげつ"
        ],
        "romaji": "raigetsu",
        "vi_meaning": "tháng sau"
      },
      {
        "id": "topic_08_time_place_118",
        "num": 118,
        "sentence_hira": "すずきさんは <u>ことし</u> を/が 探しています。",
        "sentence_kanji": "すずきさんは <u>今年</u> を/が 探しています。",
        "kanji_target": "今年",
        "hira_target": "ことし",
        "kanji_options": [
          "今週",
          "上",
          "最近",
          "今年"
        ],
        "hira_options": [
          "こんしゅう",
          "うえ",
          "さいきん",
          "ことし"
        ],
        "romaji": "kotoshi",
        "vi_meaning": "năm nay"
      },
      {
        "id": "topic_08_time_place_119",
        "num": 119,
        "sentence_hira": "すずきさんは <u>らいねん</u> を/が 探しています。",
        "sentence_kanji": "すずきさんは <u>来年</u> を/が 探しています。",
        "kanji_target": "来年",
        "hira_target": "らいねん",
        "kanji_options": [
          "中",
          "右",
          "隣",
          "来年"
        ],
        "hira_options": [
          "なか",
          "みぎ",
          "となり",
          "らいねん"
        ],
        "romaji": "rainen",
        "vi_meaning": "năm sau"
      },
      {
        "id": "topic_08_time_place_120",
        "num": 120,
        "sentence_hira": "すずきさんは <u>さいきん</u> を/が 探しています。",
        "sentence_kanji": "すずきさんは <u>最近</u> を/が 探しています。",
        "kanji_target": "最近",
        "hira_target": "さいきん",
        "kanji_options": [
          "中",
          "最近",
          "今週",
          "来週"
        ],
        "hira_options": [
          "なか",
          "さいきん",
          "こんしゅう",
          "らいしゅう"
        ],
        "romaji": "saikin",
        "vi_meaning": "gần đây"
      },
      {
        "id": "topic_08_time_place_121",
        "num": 121,
        "sentence_hira": "すずきさんは <u>しょうらい</u> を/が 探しています。",
        "sentence_kanji": "すずきさんは <u>将来</u> を/が 探しています。",
        "kanji_target": "将来",
        "hira_target": "しょうらい",
        "kanji_options": [
          "昔",
          "昨日",
          "将来",
          "青"
        ],
        "hira_options": [
          "むかし",
          "きのう",
          "しょうらい",
          "あお"
        ],
        "romaji": "shourai",
        "vi_meaning": "tương lai"
      },
      {
        "id": "topic_08_time_place_122",
        "num": 122,
        "sentence_hira": "すずきさんは <u>むかし</u> を/が 探しています。",
        "sentence_kanji": "すずきさんは <u>昔</u> を/が 探しています。",
        "kanji_target": "昔",
        "hira_target": "むかし",
        "kanji_options": [
          "今年",
          "明日",
          "昔",
          "外"
        ],
        "hira_options": [
          "ことし",
          "あした",
          "むかし",
          "そと"
        ],
        "romaji": "mukashi",
        "vi_meaning": "ngày xưa"
      },
      {
        "id": "topic_08_time_place_123",
        "num": 123,
        "sentence_hira": "すずきさんは <u>うえ</u> を/が 探しています。",
        "sentence_kanji": "すずきさんは <u>上</u> を/が 探しています。",
        "kanji_target": "上",
        "hira_target": "うえ",
        "kanji_options": [
          "上",
          "今月",
          "時間",
          "隣"
        ],
        "hira_options": [
          "うえ",
          "こんげつ",
          "じかん",
          "となり"
        ],
        "romaji": "ue",
        "vi_meaning": "phía trên"
      },
      {
        "id": "topic_08_time_place_124",
        "num": 124,
        "sentence_hira": "すずきさんは <u>した</u> を/が 探しています。",
        "sentence_kanji": "すずきさんは <u>下</u> を/が 探しています。",
        "kanji_target": "下",
        "hira_target": "した",
        "kanji_options": [
          "先週",
          "最近",
          "隣",
          "下"
        ],
        "hira_options": [
          "せんしゅう",
          "さいきん",
          "となり",
          "した"
        ],
        "romaji": "shita",
        "vi_meaning": "phía dưới"
      },
      {
        "id": "topic_08_time_place_125",
        "num": 125,
        "sentence_hira": "すずきさんは <u>まえ</u> を/が 探しています。",
        "sentence_kanji": "すずきさんは <u>前</u> を/が 探しています。",
        "kanji_target": "前",
        "hira_target": "まえ",
        "kanji_options": [
          "前",
          "今日",
          "左",
          "将来"
        ],
        "hira_options": [
          "まえ",
          "きょう",
          "ひだり",
          "しょうらい"
        ],
        "romaji": "mae",
        "vi_meaning": "phía trước"
      },
      {
        "id": "topic_08_time_place_126",
        "num": 126,
        "sentence_hira": "すずきさんは <u>うしろ</u> を/が 探しています。",
        "sentence_kanji": "すずきさんは <u>後ろ</u> を/が 探しています。",
        "kanji_target": "後ろ",
        "hira_target": "うしろ",
        "kanji_options": [
          "後ろ",
          "来月",
          "来週",
          "白"
        ],
        "hira_options": [
          "うしろ",
          "らいげつ",
          "らいしゅう",
          "しろ"
        ],
        "romaji": "ushiro",
        "vi_meaning": "phía sau"
      },
      {
        "id": "topic_08_time_place_127",
        "num": 127,
        "sentence_hira": "すずきさんは <u>みぎ</u> を/が 探しています。",
        "sentence_kanji": "すずきさんは <u>右</u> を/が 探しています。",
        "kanji_target": "右",
        "hira_target": "みぎ",
        "kanji_options": [
          "来年",
          "右",
          "今年",
          "来週"
        ],
        "hira_options": [
          "らいねん",
          "みぎ",
          "ことし",
          "らいしゅう"
        ],
        "romaji": "migi",
        "vi_meaning": "bên phải"
      },
      {
        "id": "topic_08_time_place_128",
        "num": 128,
        "sentence_hira": "すずきさんは <u>ひだり</u> を/が 探しています。",
        "sentence_kanji": "すずきさんは <u>左</u> を/が 探しています。",
        "kanji_target": "左",
        "hira_target": "ひだり",
        "kanji_options": [
          "今週",
          "左",
          "前",
          "今週"
        ],
        "hira_options": [
          "こんしゅう",
          "ひだり",
          "まえ",
          "こんしゅう"
        ],
        "romaji": "hidari",
        "vi_meaning": "bên trái"
      },
      {
        "id": "topic_08_time_place_129",
        "num": 129,
        "sentence_hira": "すずきさんは <u>なか</u> を/が 探しています。",
        "sentence_kanji": "すずきさんは <u>中</u> を/が 探しています。",
        "kanji_target": "中",
        "hira_target": "なか",
        "kanji_options": [
          "後ろ",
          "中",
          "来週",
          "赤"
        ],
        "hira_options": [
          "うしろ",
          "なか",
          "らいしゅう",
          "あか"
        ],
        "romaji": "naka",
        "vi_meaning": "bên trong"
      },
      {
        "id": "topic_08_time_place_130",
        "num": 130,
        "sentence_hira": "すずきさんは <u>そと</u> を/が 探しています。",
        "sentence_kanji": "すずきさんは <u>外</u> を/が 探しています。",
        "kanji_target": "外",
        "hira_target": "そと",
        "kanji_options": [
          "外",
          "来月",
          "右",
          "時間"
        ],
        "hira_options": [
          "そと",
          "らいげつ",
          "みぎ",
          "じかん"
        ],
        "romaji": "soto",
        "vi_meaning": "bên ngoài"
      },
      {
        "id": "topic_08_time_place_131",
        "num": 131,
        "sentence_hira": "すずきさんは <u>となり</u> を/が 探しています。",
        "sentence_kanji": "すずきさんは <u>隣</u> を/が 探しています。",
        "kanji_target": "隣",
        "hira_target": "となり",
        "kanji_options": [
          "白",
          "外",
          "上",
          "隣"
        ],
        "hira_options": [
          "しろ",
          "そと",
          "うえ",
          "となり"
        ],
        "romaji": "tonari",
        "vi_meaning": "bên cạnh"
      },
      {
        "id": "topic_08_time_place_132",
        "num": 132,
        "sentence_hira": "すずきさんは <u>あか</u> を/が 探しています。",
        "sentence_kanji": "すずきさんは <u>赤</u> を/が 探しています。",
        "kanji_target": "赤",
        "hira_target": "あか",
        "kanji_options": [
          "来年",
          "赤",
          "上",
          "今日"
        ],
        "hira_options": [
          "らいねん",
          "あか",
          "うえ",
          "きょう"
        ],
        "romaji": "aka",
        "vi_meaning": "màu đỏ"
      },
      {
        "id": "topic_08_time_place_133",
        "num": 133,
        "sentence_hira": "すずきさんは <u>あお</u> を/が 探しています。",
        "sentence_kanji": "すずきさんは <u>青</u> を/が 探しています。",
        "kanji_target": "青",
        "hira_target": "あお",
        "kanji_options": [
          "青",
          "時間",
          "時間",
          "右"
        ],
        "hira_options": [
          "あお",
          "じかん",
          "じかん",
          "みぎ"
        ],
        "romaji": "ao",
        "vi_meaning": "màu xanh"
      },
      {
        "id": "topic_08_time_place_134",
        "num": 134,
        "sentence_hira": "すずきさんは <u>しろ</u> を/が 探しています。",
        "sentence_kanji": "すずきさんは <u>白</u> を/が 探しています。",
        "kanji_target": "白",
        "hira_target": "しろ",
        "kanji_options": [
          "来週",
          "昨日",
          "右",
          "白"
        ],
        "hira_options": [
          "らいしゅう",
          "きのう",
          "みぎ",
          "しろ"
        ],
        "romaji": "shiro",
        "vi_meaning": "màu trắng"
      },
      {
        "id": "topic_08_time_place_135",
        "num": 135,
        "sentence_hira": "すずきさんは <u>くろ</u> を/が 探しています。",
        "sentence_kanji": "すずきさんは <u>黒</u> を/が 探しています。",
        "kanji_target": "黒",
        "hira_target": "くろ",
        "kanji_options": [
          "黒",
          "最近",
          "先週",
          "時間"
        ],
        "hira_options": [
          "くろ",
          "さいきん",
          "せんしゅう",
          "じかん"
        ],
        "romaji": "kuro",
        "vi_meaning": "màu đen"
      },
      {
        "id": "topic_08_time_place_136",
        "num": 136,
        "sentence_hira": "すずきさんは <u>じかん</u> を/が 探しています。",
        "sentence_kanji": "すずきさんは <u>時間</u> を/が 探しています。",
        "kanji_target": "時間",
        "hira_target": "じかん",
        "kanji_options": [
          "将来",
          "来週",
          "時間",
          "来月"
        ],
        "hira_options": [
          "しょうらい",
          "らいしゅう",
          "じかん",
          "らいげつ"
        ],
        "romaji": "jikan",
        "vi_meaning": "thời gian"
      },
      {
        "id": "topic_08_time_place_137",
        "num": 137,
        "sentence_hira": "すずきさんは <u>きょう</u> を/が 探しています。",
        "sentence_kanji": "すずきさんは <u>今日</u> を/が 探しています。",
        "kanji_target": "今日",
        "hira_target": "きょう",
        "kanji_options": [
          "先週",
          "下",
          "下",
          "今日"
        ],
        "hira_options": [
          "せんしゅう",
          "した",
          "した",
          "きょう"
        ],
        "romaji": "kyou",
        "vi_meaning": "hôm nay"
      },
      {
        "id": "topic_08_time_place_138",
        "num": 138,
        "sentence_hira": "すずきさんは <u>あした</u> を/が 探しています。",
        "sentence_kanji": "すずきさんは <u>明日</u> を/が 探しています。",
        "kanji_target": "明日",
        "hira_target": "あした",
        "kanji_options": [
          "先週",
          "下",
          "前",
          "明日"
        ],
        "hira_options": [
          "せんしゅう",
          "した",
          "まえ",
          "あした"
        ],
        "romaji": "ashita",
        "vi_meaning": "ngày mai"
      },
      {
        "id": "topic_08_time_place_139",
        "num": 139,
        "sentence_hira": "すずきさんは <u>きのう</u> を/が 探しています。",
        "sentence_kanji": "すずきさんは <u>昨日</u> を/が 探しています。",
        "kanji_target": "昨日",
        "hira_target": "きのう",
        "kanji_options": [
          "来週",
          "昨日",
          "最近",
          "時間"
        ],
        "hira_options": [
          "らいしゅう",
          "きのう",
          "さいきん",
          "じかん"
        ],
        "romaji": "kinou",
        "vi_meaning": "hôm qua"
      },
      {
        "id": "topic_08_time_place_140",
        "num": 140,
        "sentence_hira": "すずきさんは <u>こんしゅう</u> を/が 探しています。",
        "sentence_kanji": "すずきさんは <u>今週</u> を/が 探しています。",
        "kanji_target": "今週",
        "hira_target": "こんしゅう",
        "kanji_options": [
          "中",
          "昨日",
          "後ろ",
          "今週"
        ],
        "hira_options": [
          "なか",
          "きのう",
          "うしろ",
          "こんしゅう"
        ],
        "romaji": "konshuu",
        "vi_meaning": "tuần này"
      }
    ]
  },
  {
    "id": "topic_09_verbs_adj",
    "name": "9. Động Từ, Tính Từ & Phó Từ Trọng Tâm",
    "icon": "⚡",
    "desc": "Các động từ, tính từ và phó từ quan trọng nhất N4 (202 câu)",
    "questions": [
      {
        "id": "topic_09_verbs_adj_1",
        "num": 1,
        "sentence_hira": "すずきさんは <u>いく</u> を/が 探しています。",
        "sentence_kanji": "すずきさんは <u>行く</u> を/が 探しています。",
        "kanji_target": "行く",
        "hira_target": "いく",
        "kanji_options": [
          "聞く",
          "書く",
          "行く",
          "助ける"
        ],
        "hira_options": [
          "きく",
          "かく",
          "いく",
          "たすける"
        ],
        "romaji": "iku",
        "vi_meaning": "đi"
      },
      {
        "id": "topic_09_verbs_adj_2",
        "num": 2,
        "sentence_hira": "すずきさんは <u>くる</u> を/が 探しています。",
        "sentence_kanji": "すずきさんは <u>来る</u> を/が 探しています。",
        "kanji_target": "来る",
        "hira_target": "くる",
        "kanji_options": [
          "読む",
          "寝る",
          "易しい",
          "来る"
        ],
        "hira_options": [
          "よむ",
          "ねる",
          "やさしい",
          "くる"
        ],
        "romaji": "kuru",
        "vi_meaning": "đến"
      },
      {
        "id": "topic_09_verbs_adj_3",
        "num": 3,
        "sentence_hira": "すずきさんは <u>かえる</u> を/が 探しています。",
        "sentence_kanji": "すずきさんは <u>帰る</u> を/が 探しています。",
        "kanji_target": "帰る",
        "hira_target": "かえる",
        "kanji_options": [
          "食べる",
          "帰る",
          "楽しい",
          "書く"
        ],
        "hira_options": [
          "たべる",
          "かえる",
          "たのしい",
          "かく"
        ],
        "romaji": "kaeru",
        "vi_meaning": "trở về"
      },
      {
        "id": "topic_09_verbs_adj_4",
        "num": 4,
        "sentence_hira": "すずきさんは <u>たべる</u> を/が 探しています。",
        "sentence_kanji": "すずきさんは <u>食べる</u> を/が 探しています。",
        "kanji_target": "食べる",
        "hira_target": "たべる",
        "kanji_options": [
          "食べる",
          "来る",
          "小さい",
          "会う"
        ],
        "hira_options": [
          "たべる",
          "くる",
          "ちいさい",
          "あう"
        ],
        "romaji": "taberu",
        "vi_meaning": "ăn"
      },
      {
        "id": "topic_09_verbs_adj_5",
        "num": 5,
        "sentence_hira": "すずきさんは <u>のむ</u> を/が 探しています。",
        "sentence_kanji": "すずきさんは <u>飲む</u> を/が 探しています。",
        "kanji_target": "飲む",
        "hira_target": "のむ",
        "kanji_options": [
          "覚える",
          "飲む",
          "書く",
          "遅れる"
        ],
        "hira_options": [
          "おぼえる",
          "のむ",
          "かく",
          "おくれる"
        ],
        "romaji": "nomu",
        "vi_meaning": "uống"
      },
      {
        "id": "topic_09_verbs_adj_6",
        "num": 6,
        "sentence_hira": "すずきさんは <u>みる</u> を/が 探しています。",
        "sentence_kanji": "すずきさんは <u>見る</u> を/が 探しています。",
        "kanji_target": "見る",
        "hira_target": "みる",
        "kanji_options": [
          "食べる",
          "売る",
          "行く",
          "見る"
        ],
        "hira_options": [
          "たべる",
          "うる",
          "いく",
          "みる"
        ],
        "romaji": "miru",
        "vi_meaning": "nhìn/xem"
      },
      {
        "id": "topic_09_verbs_adj_7",
        "num": 7,
        "sentence_hira": "すずきさんは <u>きく</u> を/が 探しています。",
        "sentence_kanji": "すずきさんは <u>聞く</u> を/が 探しています。",
        "kanji_target": "聞く",
        "hira_target": "きく",
        "kanji_options": [
          "帰る",
          "聞く",
          "遅れる",
          "面白い"
        ],
        "hira_options": [
          "かえる",
          "きく",
          "おくれる",
          "おもしろい"
        ],
        "romaji": "kiku",
        "vi_meaning": "nghe/hỏi"
      },
      {
        "id": "topic_09_verbs_adj_8",
        "num": 8,
        "sentence_hira": "すずきさんは <u>よむ</u> を/が 探しています。",
        "sentence_kanji": "すずきさんは <u>読む</u> を/が 探しています。",
        "kanji_target": "読む",
        "hira_target": "よむ",
        "kanji_options": [
          "行く",
          "間に合う",
          "読む",
          "小さい"
        ],
        "hira_options": [
          "いく",
          "まにあう",
          "よむ",
          "ちいさい"
        ],
        "romaji": "yomu",
        "vi_meaning": "đọc"
      },
      {
        "id": "topic_09_verbs_adj_9",
        "num": 9,
        "sentence_hira": "すずきさんは <u>かく</u> を/が 探しています。",
        "sentence_kanji": "すずきさんは <u>書く</u> を/が 探しています。",
        "kanji_target": "書く",
        "hira_target": "かく",
        "kanji_options": [
          "書く",
          "呼ぶ",
          "歩く",
          "食べる"
        ],
        "hira_options": [
          "かく",
          "よぶ",
          "あるく",
          "たべる"
        ],
        "romaji": "kaku",
        "vi_meaning": "viết"
      },
      {
        "id": "topic_09_verbs_adj_10",
        "num": 10,
        "sentence_hira": "すずきさんは <u>はなす</u> を/が 探しています。",
        "sentence_kanji": "すずきさんは <u>話す</u> を/が 探しています。",
        "kanji_target": "話す",
        "hira_target": "はなす",
        "kanji_options": [
          "話す",
          "買う",
          "静かな",
          "待つ"
        ],
        "hira_options": [
          "はなす",
          "かう",
          "しずかな",
          "まつ"
        ],
        "romaji": "hanasu",
        "vi_meaning": "nói chuyện"
      },
      {
        "id": "topic_09_verbs_adj_11",
        "num": 11,
        "sentence_hira": "すずきさんは <u>かう</u> を/が 探しています。",
        "sentence_kanji": "すずきさんは <u>買う</u> を/が 探しています。",
        "kanji_target": "買う",
        "hira_target": "かう",
        "kanji_options": [
          "高い",
          "買う",
          "飲む",
          "行く"
        ],
        "hira_options": [
          "たかい",
          "かう",
          "のむ",
          "いく"
        ],
        "romaji": "kau",
        "vi_meaning": "mua"
      },
      {
        "id": "topic_09_verbs_adj_12",
        "num": 12,
        "sentence_hira": "すずきさんは <u>うる</u> を/が 探しています。",
        "sentence_kanji": "すずきさんは <u>売る</u> を/が 探しています。",
        "kanji_target": "売る",
        "hira_target": "うる",
        "kanji_options": [
          "来る",
          "売る",
          "走る",
          "会う"
        ],
        "hira_options": [
          "くる",
          "うる",
          "はしる",
          "あう"
        ],
        "romaji": "uru",
        "vi_meaning": "bán"
      },
      {
        "id": "topic_09_verbs_adj_13",
        "num": 13,
        "sentence_hira": "すずきさんは <u>あう</u> を/が 探しています。",
        "sentence_kanji": "すずきさんは <u>会う</u> を/が 探しています。",
        "kanji_target": "会う",
        "hira_target": "あう",
        "kanji_options": [
          "易しい",
          "親切な",
          "食べる",
          "会う"
        ],
        "hira_options": [
          "やさしい",
          "しんせつな",
          "たべる",
          "あう"
        ],
        "romaji": "au",
        "vi_meaning": "gặp mặt"
      },
      {
        "id": "topic_09_verbs_adj_14",
        "num": 14,
        "sentence_hira": "すずきさんは <u>まつ</u> を/が 探しています。",
        "sentence_kanji": "すずきさんは <u>待つ</u> を/が 探しています。",
        "kanji_target": "待つ",
        "hira_target": "まつ",
        "kanji_options": [
          "親切な",
          "起きる",
          "助ける",
          "待つ"
        ],
        "hira_options": [
          "しんせつな",
          "おきる",
          "たすける",
          "まつ"
        ],
        "romaji": "matsu",
        "vi_meaning": "chờ đợi"
      },
      {
        "id": "topic_09_verbs_adj_15",
        "num": 15,
        "sentence_hira": "すずきさんは <u>よぶ</u> を/が 探しています。",
        "sentence_kanji": "すずきさんは <u>呼ぶ</u> を/が 探しています。",
        "kanji_target": "呼ぶ",
        "hira_target": "よぶ",
        "kanji_options": [
          "歩く",
          "高い",
          "遊ぶ",
          "呼ぶ"
        ],
        "hira_options": [
          "あるく",
          "たかい",
          "あそぶ",
          "よぶ"
        ],
        "romaji": "yobu",
        "vi_meaning": "gọi"
      },
      {
        "id": "topic_09_verbs_adj_16",
        "num": 16,
        "sentence_hira": "すずきさんは <u>あそぶ</u> を/が 探しています。",
        "sentence_kanji": "すずきさんは <u>遊ぶ</u> を/が 探しています。",
        "kanji_target": "遊ぶ",
        "hira_target": "あそぶ",
        "kanji_options": [
          "遊ぶ",
          "呼ぶ",
          "覚える",
          "待つ"
        ],
        "hira_options": [
          "あそぶ",
          "よぶ",
          "おぼえる",
          "まつ"
        ],
        "romaji": "asobu",
        "vi_meaning": "chơi"
      },
      {
        "id": "topic_09_verbs_adj_17",
        "num": 17,
        "sentence_hira": "すずきさんは <u>およぐ</u> を/が 探しています。",
        "sentence_kanji": "すずきさんは <u>泳ぐ</u> を/が 探しています。",
        "kanji_target": "泳ぐ",
        "hira_target": "およぐ",
        "kanji_options": [
          "忘れる",
          "泳ぐ",
          "走る",
          "買う"
        ],
        "hira_options": [
          "わすれる",
          "およぐ",
          "はしる",
          "かう"
        ],
        "romaji": "oyogu",
        "vi_meaning": "bơi"
      },
      {
        "id": "topic_09_verbs_adj_18",
        "num": 18,
        "sentence_hira": "すずきさんは <u>はしる</u> を/が 探しています。",
        "sentence_kanji": "すずきさんは <u>走る</u> を/が 探しています。",
        "kanji_target": "走る",
        "hira_target": "はしる",
        "kanji_options": [
          "買う",
          "走る",
          "小さい",
          "新しい"
        ],
        "hira_options": [
          "かう",
          "はしる",
          "ちいさい",
          "あたらしい"
        ],
        "romaji": "hashiru",
        "vi_meaning": "chạy"
      },
      {
        "id": "topic_09_verbs_adj_19",
        "num": 19,
        "sentence_hira": "すずきさんは <u>あるく</u> を/が 探しています。",
        "sentence_kanji": "すずきさんは <u>歩く</u> を/が 探しています。",
        "kanji_target": "歩く",
        "hira_target": "あるく",
        "kanji_options": [
          "読む",
          "歩く",
          "起きる",
          "会う"
        ],
        "hira_options": [
          "よむ",
          "あるく",
          "おきる",
          "あう"
        ],
        "romaji": "aruku",
        "vi_meaning": "đi bộ"
      },
      {
        "id": "topic_09_verbs_adj_20",
        "num": 20,
        "sentence_hira": "すずきさんは <u>ねる</u> を/が 探しています。",
        "sentence_kanji": "すずきさんは <u>寝る</u> を/が 探しています。",
        "kanji_target": "寝る",
        "hira_target": "ねる",
        "kanji_options": [
          "売る",
          "助ける",
          "来る",
          "寝る"
        ],
        "hira_options": [
          "うる",
          "たすける",
          "くる",
          "ねる"
        ],
        "romaji": "neru",
        "vi_meaning": "ngủ"
      },
      {
        "id": "topic_09_verbs_adj_21",
        "num": 21,
        "sentence_hira": "すずきさんは <u>おきる</u> を/が 探しています。",
        "sentence_kanji": "すずきさんは <u>起きる</u> を/が 探しています。",
        "kanji_target": "起きる",
        "hira_target": "おきる",
        "kanji_options": [
          "難しい",
          "小さい",
          "遊ぶ",
          "起きる"
        ],
        "hira_options": [
          "むずかしい",
          "ちいさい",
          "あそぶ",
          "おきる"
        ],
        "romaji": "okiru",
        "vi_meaning": "thức dậy"
      },
      {
        "id": "topic_09_verbs_adj_22",
        "num": 22,
        "sentence_hira": "すずきさんは <u>わすれる</u> を/が 探しています。",
        "sentence_kanji": "すずきさんは <u>忘れる</u> を/が 探しています。",
        "kanji_target": "忘れる",
        "hira_target": "わすれる",
        "kanji_options": [
          "遊ぶ",
          "寝る",
          "忘れる",
          "呼ぶ"
        ],
        "hira_options": [
          "あそぶ",
          "ねる",
          "わすれる",
          "よぶ"
        ],
        "romaji": "wasureru",
        "vi_meaning": "quên"
      },
      {
        "id": "topic_09_verbs_adj_23",
        "num": 23,
        "sentence_hira": "すずきさんは <u>おぼえる</u> を/が 探しています。",
        "sentence_kanji": "すずきさんは <u>覚える</u> を/が 探しています。",
        "kanji_target": "覚える",
        "hira_target": "おぼえる",
        "kanji_options": [
          "聞く",
          "安い",
          "大きい",
          "覚える"
        ],
        "hira_options": [
          "きく",
          "やすい",
          "おおきい",
          "おぼえる"
        ],
        "romaji": "oboeru",
        "vi_meaning": "nhớ/học thuộc"
      },
      {
        "id": "topic_09_verbs_adj_24",
        "num": 24,
        "sentence_hira": "すずきさんは <u>たすける</u> を/が 探しています。",
        "sentence_kanji": "すずきさんは <u>助ける</u> を/が 探しています。",
        "kanji_target": "助ける",
        "hira_target": "たすける",
        "kanji_options": [
          "売る",
          "親切な",
          "助ける",
          "易しい"
        ],
        "hira_options": [
          "うる",
          "しんせつな",
          "たすける",
          "やさしい"
        ],
        "romaji": "tasukeru",
        "vi_meaning": "giúp đỡ"
      },
      {
        "id": "topic_09_verbs_adj_25",
        "num": 25,
        "sentence_hira": "すずきさんは <u>まにあう</u> を/が 探しています。",
        "sentence_kanji": "すずきさんは <u>間に合う</u> を/が 探しています。",
        "kanji_target": "間に合う",
        "hira_target": "まにあう",
        "kanji_options": [
          "静かな",
          "間に合う",
          "遅れる",
          "寝る"
        ],
        "hira_options": [
          "しずかな",
          "まにあう",
          "おくれる",
          "ねる"
        ],
        "romaji": "maniau",
        "vi_meaning": "kịp giờ"
      },
      {
        "id": "topic_09_verbs_adj_26",
        "num": 26,
        "sentence_hira": "すずきさんは <u>おくれる</u> を/が 探しています。",
        "sentence_kanji": "すずきさんは <u>遅れる</u> を/が 探しています。",
        "kanji_target": "遅れる",
        "hira_target": "おくれる",
        "kanji_options": [
          "親切な",
          "助ける",
          "遅れる",
          "来る"
        ],
        "hira_options": [
          "しんせつな",
          "たすける",
          "おくれる",
          "くる"
        ],
        "romaji": "okureru",
        "vi_meaning": "trễ/trễ giờ"
      },
      {
        "id": "topic_09_verbs_adj_27",
        "num": 27,
        "sentence_hira": "すずきさんは <u>おおきい</u> を/が 探しています。",
        "sentence_kanji": "すずきさんは <u>大きい</u> を/が 探しています。",
        "kanji_target": "大きい",
        "hira_target": "おおきい",
        "kanji_options": [
          "見る",
          "遊ぶ",
          "大きい",
          "売る"
        ],
        "hira_options": [
          "みる",
          "あそぶ",
          "おおきい",
          "うる"
        ],
        "romaji": "ookii",
        "vi_meaning": "to lớn"
      },
      {
        "id": "topic_09_verbs_adj_28",
        "num": 28,
        "sentence_hira": "すずきさんは <u>ちいさい</u> を/が 探しています。",
        "sentence_kanji": "すずきさんは <u>小さい</u> を/が 探しています。",
        "kanji_target": "小さい",
        "hira_target": "ちいさい",
        "kanji_options": [
          "来る",
          "静かな",
          "小さい",
          "安い"
        ],
        "hira_options": [
          "くる",
          "しずかな",
          "ちいさい",
          "やすい"
        ],
        "romaji": "chiisai",
        "vi_meaning": "nhỏ bé"
      },
      {
        "id": "topic_09_verbs_adj_29",
        "num": 29,
        "sentence_hira": "すずきさんは <u>あたらしい</u> を/が 探しています。",
        "sentence_kanji": "すずきさんは <u>新しい</u> を/が 探しています。",
        "kanji_target": "新しい",
        "hira_target": "あたらしい",
        "kanji_options": [
          "飲む",
          "書く",
          "新しい",
          "食べる"
        ],
        "hira_options": [
          "のむ",
          "かく",
          "あたらしい",
          "たべる"
        ],
        "romaji": "atarashii",
        "vi_meaning": "mới"
      },
      {
        "id": "topic_09_verbs_adj_30",
        "num": 30,
        "sentence_hira": "すずきさんは <u>ふるい</u> を/が 探しています。",
        "sentence_kanji": "すずきさんは <u>古い</u> を/が 探しています。",
        "kanji_target": "古い",
        "hira_target": "ふるい",
        "kanji_options": [
          "話す",
          "面白い",
          "泳ぐ",
          "古い"
        ],
        "hira_options": [
          "はなす",
          "おもしろい",
          "およぐ",
          "ふるい"
        ],
        "romaji": "furui",
        "vi_meaning": "cũ"
      },
      {
        "id": "topic_09_verbs_adj_31",
        "num": 31,
        "sentence_hira": "すずきさんは <u>たかい</u> を/が 探しています。",
        "sentence_kanji": "すずきさんは <u>高い</u> を/が 探しています。",
        "kanji_target": "高い",
        "hira_target": "たかい",
        "kanji_options": [
          "遅れる",
          "走る",
          "面白い",
          "高い"
        ],
        "hira_options": [
          "おくれる",
          "はしる",
          "おもしろい",
          "たかい"
        ],
        "romaji": "takai",
        "vi_meaning": "cao/đắt"
      },
      {
        "id": "topic_09_verbs_adj_32",
        "num": 32,
        "sentence_hira": "すずきさんは <u>やすい</u> を/が 探しています。",
        "sentence_kanji": "すずきさんは <u>安い</u> を/が 探しています。",
        "kanji_target": "安い",
        "hira_target": "やすい",
        "kanji_options": [
          "忘れる",
          "来る",
          "静かな",
          "安い"
        ],
        "hira_options": [
          "わすれる",
          "くる",
          "しずかな",
          "やすい"
        ],
        "romaji": "yasui",
        "vi_meaning": "rẻ"
      },
      {
        "id": "topic_09_verbs_adj_33",
        "num": 33,
        "sentence_hira": "すずきさんは <u>いそがしい</u> を/が 探しています。",
        "sentence_kanji": "すずきさんは <u>忙しい</u> を/が 探しています。",
        "kanji_target": "忙しい",
        "hira_target": "いそがしい",
        "kanji_options": [
          "寝る",
          "寝る",
          "忙しい",
          "忘れる"
        ],
        "hira_options": [
          "ねる",
          "ねる",
          "いそがしい",
          "わすれる"
        ],
        "romaji": "isogashii",
        "vi_meaning": "bận rộn"
      },
      {
        "id": "topic_09_verbs_adj_34",
        "num": 34,
        "sentence_hira": "すずきさんは <u>たのしい</u> を/が 探しています。",
        "sentence_kanji": "すずきさんは <u>楽しい</u> を/が 探しています。",
        "kanji_target": "楽しい",
        "hira_target": "たのしい",
        "kanji_options": [
          "楽しい",
          "行く",
          "見る",
          "難しい"
        ],
        "hira_options": [
          "たのしい",
          "いく",
          "みる",
          "むずかしい"
        ],
        "romaji": "tanoshii",
        "vi_meaning": "vui vẻ"
      },
      {
        "id": "topic_09_verbs_adj_35",
        "num": 35,
        "sentence_hira": "すずきさんは <u>おもしろい</u> を/が 探しています。",
        "sentence_kanji": "すずきさんは <u>面白い</u> を/が 探しています。",
        "kanji_target": "面白い",
        "hira_target": "おもしろい",
        "kanji_options": [
          "難しい",
          "面白い",
          "親切な",
          "起きる"
        ],
        "hira_options": [
          "むずかしい",
          "おもしろい",
          "しんせつな",
          "おきる"
        ],
        "romaji": "omoshiroi",
        "vi_meaning": "thú vị"
      },
      {
        "id": "topic_09_verbs_adj_36",
        "num": 36,
        "sentence_hira": "すずきさんは <u>むずかしい</u> を/が 探しています。",
        "sentence_kanji": "すずきさんは <u>難しい</u> を/が 探しています。",
        "kanji_target": "難しい",
        "hira_target": "むずかしい",
        "kanji_options": [
          "助ける",
          "親切な",
          "難しい",
          "行く"
        ],
        "hira_options": [
          "たすける",
          "しんせつな",
          "むずかしい",
          "いく"
        ],
        "romaji": "muzukashii",
        "vi_meaning": "khó"
      },
      {
        "id": "topic_09_verbs_adj_37",
        "num": 37,
        "sentence_hira": "すずきさんは <u>やさしい</u> を/が 探しています。",
        "sentence_kanji": "すずきさんは <u>易しい</u> を/が 探しています。",
        "kanji_target": "易しい",
        "hira_target": "やさしい",
        "kanji_options": [
          "買う",
          "易しい",
          "買う",
          "歩く"
        ],
        "hira_options": [
          "かう",
          "やさしい",
          "かう",
          "あるく"
        ],
        "romaji": "yasashii",
        "vi_meaning": "dễ"
      },
      {
        "id": "topic_09_verbs_adj_38",
        "num": 38,
        "sentence_hira": "すずきさんは <u>しんせつな</u> を/が 探しています。",
        "sentence_kanji": "すずきさんは <u>親切な</u> を/が 探しています。",
        "kanji_target": "親切な",
        "hira_target": "しんせつな",
        "kanji_options": [
          "親切な",
          "呼ぶ",
          "来る",
          "見る"
        ],
        "hira_options": [
          "しんせつな",
          "よぶ",
          "くる",
          "みる"
        ],
        "romaji": "shinsetsu",
        "vi_meaning": "tốt bụng"
      },
      {
        "id": "topic_09_verbs_adj_39",
        "num": 39,
        "sentence_hira": "すずきさんは <u>しずかな</u> を/が 探しています。",
        "sentence_kanji": "すずきさんは <u>静かな</u> を/が 探しています。",
        "kanji_target": "静かな",
        "hira_target": "しずかな",
        "kanji_options": [
          "行く",
          "来る",
          "静かな",
          "間に合う"
        ],
        "hira_options": [
          "いく",
          "くる",
          "しずかな",
          "まにあう"
        ],
        "romaji": "shizuka",
        "vi_meaning": "yên tĩnh"
      },
      {
        "id": "topic_09_verbs_adj_40",
        "num": 40,
        "sentence_hira": "すずきさんは <u>いく</u> を/が 探しています。",
        "sentence_kanji": "すずきさんは <u>行く</u> を/が 探しています。",
        "kanji_target": "行く",
        "hira_target": "いく",
        "kanji_options": [
          "易しい",
          "高い",
          "高い",
          "行く"
        ],
        "hira_options": [
          "やさしい",
          "たかい",
          "たかい",
          "いく"
        ],
        "romaji": "iku",
        "vi_meaning": "đi"
      },
      {
        "id": "topic_09_verbs_adj_41",
        "num": 41,
        "sentence_hira": "すずきさんは <u>くる</u> を/が 探しています。",
        "sentence_kanji": "すずきさんは <u>来る</u> を/が 探しています。",
        "kanji_target": "来る",
        "hira_target": "くる",
        "kanji_options": [
          "助ける",
          "話す",
          "来る",
          "話す"
        ],
        "hira_options": [
          "たすける",
          "はなす",
          "くる",
          "はなす"
        ],
        "romaji": "kuru",
        "vi_meaning": "đến"
      },
      {
        "id": "topic_09_verbs_adj_42",
        "num": 42,
        "sentence_hira": "すずきさんは <u>かえる</u> を/が 探しています。",
        "sentence_kanji": "すずきさんは <u>帰る</u> を/が 探しています。",
        "kanji_target": "帰る",
        "hira_target": "かえる",
        "kanji_options": [
          "来る",
          "帰る",
          "食べる",
          "会う"
        ],
        "hira_options": [
          "くる",
          "かえる",
          "たべる",
          "あう"
        ],
        "romaji": "kaeru",
        "vi_meaning": "trở về"
      },
      {
        "id": "topic_09_verbs_adj_43",
        "num": 43,
        "sentence_hira": "すずきさんは <u>たべる</u> を/が 探しています。",
        "sentence_kanji": "すずきさんは <u>食べる</u> を/が 探しています。",
        "kanji_target": "食べる",
        "hira_target": "たべる",
        "kanji_options": [
          "読む",
          "楽しい",
          "食べる",
          "書く"
        ],
        "hira_options": [
          "よむ",
          "たのしい",
          "たべる",
          "かく"
        ],
        "romaji": "taberu",
        "vi_meaning": "ăn"
      },
      {
        "id": "topic_09_verbs_adj_44",
        "num": 44,
        "sentence_hira": "すずきさんは <u>のむ</u> を/が 探しています。",
        "sentence_kanji": "すずきさんは <u>飲む</u> を/が 探しています。",
        "kanji_target": "飲む",
        "hira_target": "のむ",
        "kanji_options": [
          "来る",
          "大きい",
          "飲む",
          "楽しい"
        ],
        "hira_options": [
          "くる",
          "おおきい",
          "のむ",
          "たのしい"
        ],
        "romaji": "nomu",
        "vi_meaning": "uống"
      },
      {
        "id": "topic_09_verbs_adj_45",
        "num": 45,
        "sentence_hira": "すずきさんは <u>みる</u> を/が 探しています。",
        "sentence_kanji": "すずきさんは <u>見る</u> を/が 探しています。",
        "kanji_target": "見る",
        "hira_target": "みる",
        "kanji_options": [
          "行く",
          "親切な",
          "聞く",
          "見る"
        ],
        "hira_options": [
          "いく",
          "しんせつな",
          "きく",
          "みる"
        ],
        "romaji": "miru",
        "vi_meaning": "nhìn/xem"
      },
      {
        "id": "topic_09_verbs_adj_46",
        "num": 46,
        "sentence_hira": "すずきさんは <u>きく</u> を/が 探しています。",
        "sentence_kanji": "すずきさんは <u>聞く</u> を/が 探しています。",
        "kanji_target": "聞く",
        "hira_target": "きく",
        "kanji_options": [
          "面白い",
          "聞く",
          "遅れる",
          "高い"
        ],
        "hira_options": [
          "おもしろい",
          "きく",
          "おくれる",
          "たかい"
        ],
        "romaji": "kiku",
        "vi_meaning": "nghe/hỏi"
      },
      {
        "id": "topic_09_verbs_adj_47",
        "num": 47,
        "sentence_hira": "すずきさんは <u>よむ</u> を/が 探しています。",
        "sentence_kanji": "すずきさんは <u>読む</u> を/が 探しています。",
        "kanji_target": "読む",
        "hira_target": "よむ",
        "kanji_options": [
          "静かな",
          "起きる",
          "面白い",
          "読む"
        ],
        "hira_options": [
          "しずかな",
          "おきる",
          "おもしろい",
          "よむ"
        ],
        "romaji": "yomu",
        "vi_meaning": "đọc"
      },
      {
        "id": "topic_09_verbs_adj_48",
        "num": 48,
        "sentence_hira": "すずきさんは <u>かく</u> を/が 探しています。",
        "sentence_kanji": "すずきさんは <u>書く</u> を/が 探しています。",
        "kanji_target": "書く",
        "hira_target": "かく",
        "kanji_options": [
          "書く",
          "楽しい",
          "遅れる",
          "高い"
        ],
        "hira_options": [
          "かく",
          "たのしい",
          "おくれる",
          "たかい"
        ],
        "romaji": "kaku",
        "vi_meaning": "viết"
      },
      {
        "id": "topic_09_verbs_adj_49",
        "num": 49,
        "sentence_hira": "すずきさんは <u>はなす</u> を/が 探しています。",
        "sentence_kanji": "すずきさんは <u>話す</u> を/が 探しています。",
        "kanji_target": "話す",
        "hira_target": "はなす",
        "kanji_options": [
          "大きい",
          "見る",
          "話す",
          "起きる"
        ],
        "hira_options": [
          "おおきい",
          "みる",
          "はなす",
          "おきる"
        ],
        "romaji": "hanasu",
        "vi_meaning": "nói chuyện"
      },
      {
        "id": "topic_09_verbs_adj_50",
        "num": 50,
        "sentence_hira": "すずきさんは <u>かう</u> を/が 探しています。",
        "sentence_kanji": "すずきさんは <u>買う</u> を/が 探しています。",
        "kanji_target": "買う",
        "hira_target": "かう",
        "kanji_options": [
          "行く",
          "買う",
          "書く",
          "難しい"
        ],
        "hira_options": [
          "いく",
          "かう",
          "かく",
          "むずかしい"
        ],
        "romaji": "kau",
        "vi_meaning": "mua"
      },
      {
        "id": "topic_09_verbs_adj_51",
        "num": 51,
        "sentence_hira": "すずきさんは <u>うる</u> を/が 探しています。",
        "sentence_kanji": "すずきさんは <u>売る</u> を/が 探しています。",
        "kanji_target": "売る",
        "hira_target": "うる",
        "kanji_options": [
          "見る",
          "売る",
          "飲む",
          "楽しい"
        ],
        "hira_options": [
          "みる",
          "うる",
          "のむ",
          "たのしい"
        ],
        "romaji": "uru",
        "vi_meaning": "bán"
      },
      {
        "id": "topic_09_verbs_adj_52",
        "num": 52,
        "sentence_hira": "すずきさんは <u>あう</u> を/が 探しています。",
        "sentence_kanji": "すずきさんは <u>会う</u> を/が 探しています。",
        "kanji_target": "会う",
        "hira_target": "あう",
        "kanji_options": [
          "小さい",
          "新しい",
          "忘れる",
          "会う"
        ],
        "hira_options": [
          "ちいさい",
          "あたらしい",
          "わすれる",
          "あう"
        ],
        "romaji": "au",
        "vi_meaning": "gặp mặt"
      },
      {
        "id": "topic_09_verbs_adj_53",
        "num": 53,
        "sentence_hira": "すずきさんは <u>まつ</u> を/が 探しています。",
        "sentence_kanji": "すずきさんは <u>待つ</u> を/が 探しています。",
        "kanji_target": "待つ",
        "hira_target": "まつ",
        "kanji_options": [
          "遅れる",
          "待つ",
          "来る",
          "走る"
        ],
        "hira_options": [
          "おくれる",
          "まつ",
          "くる",
          "はしる"
        ],
        "romaji": "matsu",
        "vi_meaning": "chờ đợi"
      },
      {
        "id": "topic_09_verbs_adj_54",
        "num": 54,
        "sentence_hira": "すずきさんは <u>よぶ</u> を/が 探しています。",
        "sentence_kanji": "すずきさんは <u>呼ぶ</u> を/が 探しています。",
        "kanji_target": "呼ぶ",
        "hira_target": "よぶ",
        "kanji_options": [
          "大きい",
          "呼ぶ",
          "高い",
          "忘れる"
        ],
        "hira_options": [
          "おおきい",
          "よぶ",
          "たかい",
          "わすれる"
        ],
        "romaji": "yobu",
        "vi_meaning": "gọi"
      },
      {
        "id": "topic_09_verbs_adj_55",
        "num": 55,
        "sentence_hira": "すずきさんは <u>あそぶ</u> を/が 探しています。",
        "sentence_kanji": "すずきさんは <u>遊ぶ</u> を/が 探しています。",
        "kanji_target": "遊ぶ",
        "hira_target": "あそぶ",
        "kanji_options": [
          "遊ぶ",
          "遅れる",
          "走る",
          "起きる"
        ],
        "hira_options": [
          "あそぶ",
          "おくれる",
          "はしる",
          "おきる"
        ],
        "romaji": "asobu",
        "vi_meaning": "chơi"
      },
      {
        "id": "topic_09_verbs_adj_56",
        "num": 56,
        "sentence_hira": "すずきさんは <u>およぐ</u> を/が 探しています。",
        "sentence_kanji": "すずきさんは <u>泳ぐ</u> を/が 探しています。",
        "kanji_target": "泳ぐ",
        "hira_target": "およぐ",
        "kanji_options": [
          "難しい",
          "難しい",
          "泳ぐ",
          "古い"
        ],
        "hira_options": [
          "むずかしい",
          "むずかしい",
          "およぐ",
          "ふるい"
        ],
        "romaji": "oyogu",
        "vi_meaning": "bơi"
      },
      {
        "id": "topic_09_verbs_adj_57",
        "num": 57,
        "sentence_hira": "すずきさんは <u>はしる</u> を/が 探しています。",
        "sentence_kanji": "すずきさんは <u>走る</u> を/が 探しています。",
        "kanji_target": "走る",
        "hira_target": "はしる",
        "kanji_options": [
          "忙しい",
          "走る",
          "食べる",
          "買う"
        ],
        "hira_options": [
          "いそがしい",
          "はしる",
          "たべる",
          "かう"
        ],
        "romaji": "hashiru",
        "vi_meaning": "chạy"
      },
      {
        "id": "topic_09_verbs_adj_58",
        "num": 58,
        "sentence_hira": "すずきさんは <u>あるく</u> を/が 探しています。",
        "sentence_kanji": "すずきさんは <u>歩く</u> を/が 探しています。",
        "kanji_target": "歩く",
        "hira_target": "あるく",
        "kanji_options": [
          "新しい",
          "来る",
          "歩く",
          "読む"
        ],
        "hira_options": [
          "あたらしい",
          "くる",
          "あるく",
          "よむ"
        ],
        "romaji": "aruku",
        "vi_meaning": "đi bộ"
      },
      {
        "id": "topic_09_verbs_adj_59",
        "num": 59,
        "sentence_hira": "すずきさんは <u>ねる</u> を/が 探しています。",
        "sentence_kanji": "すずきさんは <u>寝る</u> を/が 探しています。",
        "kanji_target": "寝る",
        "hira_target": "ねる",
        "kanji_options": [
          "寝る",
          "安い",
          "聞く",
          "会う"
        ],
        "hira_options": [
          "ねる",
          "やすい",
          "きく",
          "あう"
        ],
        "romaji": "neru",
        "vi_meaning": "ngủ"
      },
      {
        "id": "topic_09_verbs_adj_60",
        "num": 60,
        "sentence_hira": "すずきさんは <u>おきる</u> を/が 探しています。",
        "sentence_kanji": "すずきさんは <u>起きる</u> を/が 探しています。",
        "kanji_target": "起きる",
        "hira_target": "おきる",
        "kanji_options": [
          "間に合う",
          "面白い",
          "起きる",
          "寝る"
        ],
        "hira_options": [
          "まにあう",
          "おもしろい",
          "おきる",
          "ねる"
        ],
        "romaji": "okiru",
        "vi_meaning": "thức dậy"
      },
      {
        "id": "topic_09_verbs_adj_61",
        "num": 61,
        "sentence_hira": "すずきさんは <u>わすれる</u> を/が 探しています。",
        "sentence_kanji": "すずきさんは <u>忘れる</u> を/が 探しています。",
        "kanji_target": "忘れる",
        "hira_target": "わすれる",
        "kanji_options": [
          "楽しい",
          "忘れる",
          "静かな",
          "買う"
        ],
        "hira_options": [
          "たのしい",
          "わすれる",
          "しずかな",
          "かう"
        ],
        "romaji": "wasureru",
        "vi_meaning": "quên"
      },
      {
        "id": "topic_09_verbs_adj_62",
        "num": 62,
        "sentence_hira": "すずきさんは <u>おぼえる</u> を/が 探しています。",
        "sentence_kanji": "すずきさんは <u>覚える</u> を/が 探しています。",
        "kanji_target": "覚える",
        "hira_target": "おぼえる",
        "kanji_options": [
          "帰る",
          "行く",
          "覚える",
          "間に合う"
        ],
        "hira_options": [
          "かえる",
          "いく",
          "おぼえる",
          "まにあう"
        ],
        "romaji": "oboeru",
        "vi_meaning": "nhớ/học thuộc"
      },
      {
        "id": "topic_09_verbs_adj_63",
        "num": 63,
        "sentence_hira": "すずきさんは <u>たすける</u> を/が 探しています。",
        "sentence_kanji": "すずきさんは <u>助ける</u> を/が 探しています。",
        "kanji_target": "助ける",
        "hira_target": "たすける",
        "kanji_options": [
          "静かな",
          "小さい",
          "助ける",
          "聞く"
        ],
        "hira_options": [
          "しずかな",
          "ちいさい",
          "たすける",
          "きく"
        ],
        "romaji": "tasukeru",
        "vi_meaning": "giúp đỡ"
      },
      {
        "id": "topic_09_verbs_adj_64",
        "num": 64,
        "sentence_hira": "すずきさんは <u>まにあう</u> を/が 探しています。",
        "sentence_kanji": "すずきさんは <u>間に合う</u> を/が 探しています。",
        "kanji_target": "間に合う",
        "hira_target": "まにあう",
        "kanji_options": [
          "静かな",
          "楽しい",
          "間に合う",
          "売る"
        ],
        "hira_options": [
          "しずかな",
          "たのしい",
          "まにあう",
          "うる"
        ],
        "romaji": "maniau",
        "vi_meaning": "kịp giờ"
      },
      {
        "id": "topic_09_verbs_adj_65",
        "num": 65,
        "sentence_hira": "すずきさんは <u>おくれる</u> を/が 探しています。",
        "sentence_kanji": "すずきさんは <u>遅れる</u> を/が 探しています。",
        "kanji_target": "遅れる",
        "hira_target": "おくれる",
        "kanji_options": [
          "大きい",
          "待つ",
          "遅れる",
          "寝る"
        ],
        "hira_options": [
          "おおきい",
          "まつ",
          "おくれる",
          "ねる"
        ],
        "romaji": "okureru",
        "vi_meaning": "trễ/trễ giờ"
      },
      {
        "id": "topic_09_verbs_adj_66",
        "num": 66,
        "sentence_hira": "すずきさんは <u>おおきい</u> を/が 探しています。",
        "sentence_kanji": "すずきさんは <u>大きい</u> を/が 探しています。",
        "kanji_target": "大きい",
        "hira_target": "おおきい",
        "kanji_options": [
          "忘れる",
          "大きい",
          "泳ぐ",
          "寝る"
        ],
        "hira_options": [
          "わすれる",
          "おおきい",
          "およぐ",
          "ねる"
        ],
        "romaji": "ookii",
        "vi_meaning": "to lớn"
      },
      {
        "id": "topic_09_verbs_adj_67",
        "num": 67,
        "sentence_hira": "すずきさんは <u>ちいさい</u> を/が 探しています。",
        "sentence_kanji": "すずきさんは <u>小さい</u> を/が 探しています。",
        "kanji_target": "小さい",
        "hira_target": "ちいさい",
        "kanji_options": [
          "小さい",
          "遊ぶ",
          "帰る",
          "買う"
        ],
        "hira_options": [
          "ちいさい",
          "あそぶ",
          "かえる",
          "かう"
        ],
        "romaji": "chiisai",
        "vi_meaning": "nhỏ bé"
      },
      {
        "id": "topic_09_verbs_adj_68",
        "num": 68,
        "sentence_hira": "すずきさんは <u>あたらしい</u> を/が 探しています。",
        "sentence_kanji": "すずきさんは <u>新しい</u> を/が 探しています。",
        "kanji_target": "新しい",
        "hira_target": "あたらしい",
        "kanji_options": [
          "遊ぶ",
          "飲む",
          "新しい",
          "食べる"
        ],
        "hira_options": [
          "あそぶ",
          "のむ",
          "あたらしい",
          "たべる"
        ],
        "romaji": "atarashii",
        "vi_meaning": "mới"
      },
      {
        "id": "topic_09_verbs_adj_69",
        "num": 69,
        "sentence_hira": "すずきさんは <u>ふるい</u> を/が 探しています。",
        "sentence_kanji": "すずきさんは <u>古い</u> を/が 探しています。",
        "kanji_target": "古い",
        "hira_target": "ふるい",
        "kanji_options": [
          "呼ぶ",
          "古い",
          "呼ぶ",
          "新しい"
        ],
        "hira_options": [
          "よぶ",
          "ふるい",
          "よぶ",
          "あたらしい"
        ],
        "romaji": "furui",
        "vi_meaning": "cũ"
      },
      {
        "id": "topic_09_verbs_adj_70",
        "num": 70,
        "sentence_hira": "すずきさんは <u>たかい</u> を/が 探しています。",
        "sentence_kanji": "すずきさんは <u>高い</u> を/が 探しています。",
        "kanji_target": "高い",
        "hira_target": "たかい",
        "kanji_options": [
          "飲む",
          "高い",
          "食べる",
          "待つ"
        ],
        "hira_options": [
          "のむ",
          "たかい",
          "たべる",
          "まつ"
        ],
        "romaji": "takai",
        "vi_meaning": "cao/đắt"
      },
      {
        "id": "topic_09_verbs_adj_71",
        "num": 71,
        "sentence_hira": "すずきさんは <u>やすい</u> を/が 探しています。",
        "sentence_kanji": "すずきさんは <u>安い</u> を/が 探しています。",
        "kanji_target": "安い",
        "hira_target": "やすい",
        "kanji_options": [
          "売る",
          "買う",
          "食べる",
          "安い"
        ],
        "hira_options": [
          "うる",
          "かう",
          "たべる",
          "やすい"
        ],
        "romaji": "yasui",
        "vi_meaning": "rẻ"
      },
      {
        "id": "topic_09_verbs_adj_72",
        "num": 72,
        "sentence_hira": "すずきさんは <u>いそがしい</u> を/が 探しています。",
        "sentence_kanji": "すずきさんは <u>忙しい</u> を/が 探しています。",
        "kanji_target": "忙しい",
        "hira_target": "いそがしい",
        "kanji_options": [
          "忙しい",
          "難しい",
          "遅れる",
          "易しい"
        ],
        "hira_options": [
          "いそがしい",
          "むずかしい",
          "おくれる",
          "やさしい"
        ],
        "romaji": "isogashii",
        "vi_meaning": "bận rộn"
      },
      {
        "id": "topic_09_verbs_adj_73",
        "num": 73,
        "sentence_hira": "すずきさんは <u>たのしい</u> を/が 探しています。",
        "sentence_kanji": "すずきさんは <u>楽しい</u> を/が 探しています。",
        "kanji_target": "楽しい",
        "hira_target": "たのしい",
        "kanji_options": [
          "助ける",
          "会う",
          "来る",
          "楽しい"
        ],
        "hira_options": [
          "たすける",
          "あう",
          "くる",
          "たのしい"
        ],
        "romaji": "tanoshii",
        "vi_meaning": "vui vẻ"
      },
      {
        "id": "topic_09_verbs_adj_74",
        "num": 74,
        "sentence_hira": "すずきさんは <u>おもしろい</u> を/が 探しています。",
        "sentence_kanji": "すずきさんは <u>面白い</u> を/が 探しています。",
        "kanji_target": "面白い",
        "hira_target": "おもしろい",
        "kanji_options": [
          "面白い",
          "助ける",
          "易しい",
          "小さい"
        ],
        "hira_options": [
          "おもしろい",
          "たすける",
          "やさしい",
          "ちいさい"
        ],
        "romaji": "omoshiroi",
        "vi_meaning": "thú vị"
      },
      {
        "id": "topic_09_verbs_adj_75",
        "num": 75,
        "sentence_hira": "すずきさんは <u>むずかしい</u> を/が 探しています。",
        "sentence_kanji": "すずきさんは <u>難しい</u> を/が 探しています。",
        "kanji_target": "難しい",
        "hira_target": "むずかしい",
        "kanji_options": [
          "食べる",
          "楽しい",
          "忘れる",
          "難しい"
        ],
        "hira_options": [
          "たべる",
          "たのしい",
          "わすれる",
          "むずかしい"
        ],
        "romaji": "muzukashii",
        "vi_meaning": "khó"
      },
      {
        "id": "topic_09_verbs_adj_76",
        "num": 76,
        "sentence_hira": "すずきさんは <u>やさしい</u> を/が 探しています。",
        "sentence_kanji": "すずきさんは <u>易しい</u> を/が 探しています。",
        "kanji_target": "易しい",
        "hira_target": "やさしい",
        "kanji_options": [
          "小さい",
          "易しい",
          "安い",
          "楽しい"
        ],
        "hira_options": [
          "ちいさい",
          "やさしい",
          "やすい",
          "たのしい"
        ],
        "romaji": "yasashii",
        "vi_meaning": "dễ"
      },
      {
        "id": "topic_09_verbs_adj_77",
        "num": 77,
        "sentence_hira": "すずきさんは <u>しんせつな</u> を/が 探しています。",
        "sentence_kanji": "すずきさんは <u>親切な</u> を/が 探しています。",
        "kanji_target": "親切な",
        "hira_target": "しんせつな",
        "kanji_options": [
          "面白い",
          "走る",
          "面白い",
          "親切な"
        ],
        "hira_options": [
          "おもしろい",
          "はしる",
          "おもしろい",
          "しんせつな"
        ],
        "romaji": "shinsetsu",
        "vi_meaning": "tốt bụng"
      },
      {
        "id": "topic_09_verbs_adj_78",
        "num": 78,
        "sentence_hira": "すずきさんは <u>しずかな</u> を/が 探しています。",
        "sentence_kanji": "すずきさんは <u>静かな</u> を/が 探しています。",
        "kanji_target": "静かな",
        "hira_target": "しずかな",
        "kanji_options": [
          "安い",
          "静かな",
          "行く",
          "覚える"
        ],
        "hira_options": [
          "やすい",
          "しずかな",
          "いく",
          "おぼえる"
        ],
        "romaji": "shizuka",
        "vi_meaning": "yên tĩnh"
      },
      {
        "id": "topic_09_verbs_adj_79",
        "num": 79,
        "sentence_hira": "すずきさんは <u>いく</u> を/が 探しています。",
        "sentence_kanji": "すずきさんは <u>行く</u> を/が 探しています。",
        "kanji_target": "行く",
        "hira_target": "いく",
        "kanji_options": [
          "面白い",
          "忙しい",
          "行く",
          "面白い"
        ],
        "hira_options": [
          "おもしろい",
          "いそがしい",
          "いく",
          "おもしろい"
        ],
        "romaji": "iku",
        "vi_meaning": "đi"
      },
      {
        "id": "topic_09_verbs_adj_80",
        "num": 80,
        "sentence_hira": "すずきさんは <u>くる</u> を/が 探しています。",
        "sentence_kanji": "すずきさんは <u>来る</u> を/が 探しています。",
        "kanji_target": "来る",
        "hira_target": "くる",
        "kanji_options": [
          "面白い",
          "来る",
          "見る",
          "新しい"
        ],
        "hira_options": [
          "おもしろい",
          "くる",
          "みる",
          "あたらしい"
        ],
        "romaji": "kuru",
        "vi_meaning": "đến"
      },
      {
        "id": "topic_09_verbs_adj_81",
        "num": 81,
        "sentence_hira": "すずきさんは <u>かえる</u> を/が 探しています。",
        "sentence_kanji": "すずきさんは <u>帰る</u> を/が 探しています。",
        "kanji_target": "帰る",
        "hira_target": "かえる",
        "kanji_options": [
          "歩く",
          "帰る",
          "覚える",
          "静かな"
        ],
        "hira_options": [
          "あるく",
          "かえる",
          "おぼえる",
          "しずかな"
        ],
        "romaji": "kaeru",
        "vi_meaning": "trở về"
      },
      {
        "id": "topic_09_verbs_adj_82",
        "num": 82,
        "sentence_hira": "すずきさんは <u>たべる</u> を/が 探しています。",
        "sentence_kanji": "すずきさんは <u>食べる</u> を/が 探しています。",
        "kanji_target": "食べる",
        "hira_target": "たべる",
        "kanji_options": [
          "新しい",
          "食べる",
          "静かな",
          "遅れる"
        ],
        "hira_options": [
          "あたらしい",
          "たべる",
          "しずかな",
          "おくれる"
        ],
        "romaji": "taberu",
        "vi_meaning": "ăn"
      },
      {
        "id": "topic_09_verbs_adj_83",
        "num": 83,
        "sentence_hira": "すずきさんは <u>のむ</u> を/が 探しています。",
        "sentence_kanji": "すずきさんは <u>飲む</u> を/が 探しています。",
        "kanji_target": "飲む",
        "hira_target": "のむ",
        "kanji_options": [
          "遊ぶ",
          "忙しい",
          "飲む",
          "買う"
        ],
        "hira_options": [
          "あそぶ",
          "いそがしい",
          "のむ",
          "かう"
        ],
        "romaji": "nomu",
        "vi_meaning": "uống"
      },
      {
        "id": "topic_09_verbs_adj_84",
        "num": 84,
        "sentence_hira": "すずきさんは <u>みる</u> を/が 探しています。",
        "sentence_kanji": "すずきさんは <u>見る</u> を/が 探しています。",
        "kanji_target": "見る",
        "hira_target": "みる",
        "kanji_options": [
          "走る",
          "古い",
          "見る",
          "覚える"
        ],
        "hira_options": [
          "はしる",
          "ふるい",
          "みる",
          "おぼえる"
        ],
        "romaji": "miru",
        "vi_meaning": "nhìn/xem"
      },
      {
        "id": "topic_09_verbs_adj_85",
        "num": 85,
        "sentence_hira": "すずきさんは <u>きく</u> を/が 探しています。",
        "sentence_kanji": "すずきさんは <u>聞く</u> を/が 探しています。",
        "kanji_target": "聞く",
        "hira_target": "きく",
        "kanji_options": [
          "寝る",
          "来る",
          "聞く",
          "待つ"
        ],
        "hira_options": [
          "ねる",
          "くる",
          "きく",
          "まつ"
        ],
        "romaji": "kiku",
        "vi_meaning": "nghe/hỏi"
      },
      {
        "id": "topic_09_verbs_adj_86",
        "num": 86,
        "sentence_hira": "すずきさんは <u>よむ</u> を/が 探しています。",
        "sentence_kanji": "すずきさんは <u>読む</u> を/が 探しています。",
        "kanji_target": "読む",
        "hira_target": "よむ",
        "kanji_options": [
          "呼ぶ",
          "売る",
          "読む",
          "会う"
        ],
        "hira_options": [
          "よぶ",
          "うる",
          "よむ",
          "あう"
        ],
        "romaji": "yomu",
        "vi_meaning": "đọc"
      },
      {
        "id": "topic_09_verbs_adj_87",
        "num": 87,
        "sentence_hira": "すずきさんは <u>かく</u> を/が 探しています。",
        "sentence_kanji": "すずきさんは <u>書く</u> を/が 探しています。",
        "kanji_target": "書く",
        "hira_target": "かく",
        "kanji_options": [
          "新しい",
          "行く",
          "安い",
          "書く"
        ],
        "hira_options": [
          "あたらしい",
          "いく",
          "やすい",
          "かく"
        ],
        "romaji": "kaku",
        "vi_meaning": "viết"
      },
      {
        "id": "topic_09_verbs_adj_88",
        "num": 88,
        "sentence_hira": "すずきさんは <u>はなす</u> を/が 探しています。",
        "sentence_kanji": "すずきさんは <u>話す</u> を/が 探しています。",
        "kanji_target": "話す",
        "hira_target": "はなす",
        "kanji_options": [
          "忙しい",
          "呼ぶ",
          "話す",
          "安い"
        ],
        "hira_options": [
          "いそがしい",
          "よぶ",
          "はなす",
          "やすい"
        ],
        "romaji": "hanasu",
        "vi_meaning": "nói chuyện"
      },
      {
        "id": "topic_09_verbs_adj_89",
        "num": 89,
        "sentence_hira": "すずきさんは <u>かう</u> を/が 探しています。",
        "sentence_kanji": "すずきさんは <u>買う</u> を/が 探しています。",
        "kanji_target": "買う",
        "hira_target": "かう",
        "kanji_options": [
          "買う",
          "聞く",
          "書く",
          "難しい"
        ],
        "hira_options": [
          "かう",
          "きく",
          "かく",
          "むずかしい"
        ],
        "romaji": "kau",
        "vi_meaning": "mua"
      },
      {
        "id": "topic_09_verbs_adj_90",
        "num": 90,
        "sentence_hira": "すずきさんは <u>うる</u> を/が 探しています。",
        "sentence_kanji": "すずきさんは <u>売る</u> を/が 探しています。",
        "kanji_target": "売る",
        "hira_target": "うる",
        "kanji_options": [
          "売る",
          "難しい",
          "来る",
          "見る"
        ],
        "hira_options": [
          "うる",
          "むずかしい",
          "くる",
          "みる"
        ],
        "romaji": "uru",
        "vi_meaning": "bán"
      },
      {
        "id": "topic_09_verbs_adj_91",
        "num": 91,
        "sentence_hira": "すずきさんは <u>あう</u> を/が 探しています。",
        "sentence_kanji": "すずきさんは <u>会う</u> を/が 探しています。",
        "kanji_target": "会う",
        "hira_target": "あう",
        "kanji_options": [
          "会う",
          "食べる",
          "書く",
          "帰る"
        ],
        "hira_options": [
          "あう",
          "たべる",
          "かく",
          "かえる"
        ],
        "romaji": "au",
        "vi_meaning": "gặp mặt"
      },
      {
        "id": "topic_09_verbs_adj_92",
        "num": 92,
        "sentence_hira": "すずきさんは <u>まつ</u> を/が 探しています。",
        "sentence_kanji": "すずきさんは <u>待つ</u> を/が 探しています。",
        "kanji_target": "待つ",
        "hira_target": "まつ",
        "kanji_options": [
          "行く",
          "呼ぶ",
          "待つ",
          "食べる"
        ],
        "hira_options": [
          "いく",
          "よぶ",
          "まつ",
          "たべる"
        ],
        "romaji": "matsu",
        "vi_meaning": "chờ đợi"
      },
      {
        "id": "topic_09_verbs_adj_93",
        "num": 93,
        "sentence_hira": "すずきさんは <u>よぶ</u> を/が 探しています。",
        "sentence_kanji": "すずきさんは <u>呼ぶ</u> を/が 探しています。",
        "kanji_target": "呼ぶ",
        "hira_target": "よぶ",
        "kanji_options": [
          "行く",
          "呼ぶ",
          "古い",
          "飲む"
        ],
        "hira_options": [
          "いく",
          "よぶ",
          "ふるい",
          "のむ"
        ],
        "romaji": "yobu",
        "vi_meaning": "gọi"
      },
      {
        "id": "topic_09_verbs_adj_94",
        "num": 94,
        "sentence_hira": "すずきさんは <u>あそぶ</u> を/が 探しています。",
        "sentence_kanji": "すずきさんは <u>遊ぶ</u> を/が 探しています。",
        "kanji_target": "遊ぶ",
        "hira_target": "あそぶ",
        "kanji_options": [
          "走る",
          "遊ぶ",
          "小さい",
          "寝る"
        ],
        "hira_options": [
          "はしる",
          "あそぶ",
          "ちいさい",
          "ねる"
        ],
        "romaji": "asobu",
        "vi_meaning": "chơi"
      },
      {
        "id": "topic_09_verbs_adj_95",
        "num": 95,
        "sentence_hira": "すずきさんは <u>およぐ</u> を/が 探しています。",
        "sentence_kanji": "すずきさんは <u>泳ぐ</u> を/が 探しています。",
        "kanji_target": "泳ぐ",
        "hira_target": "およぐ",
        "kanji_options": [
          "泳ぐ",
          "遅れる",
          "話す",
          "間に合う"
        ],
        "hira_options": [
          "およぐ",
          "おくれる",
          "はなす",
          "まにあう"
        ],
        "romaji": "oyogu",
        "vi_meaning": "bơi"
      },
      {
        "id": "topic_09_verbs_adj_96",
        "num": 96,
        "sentence_hira": "すずきさんは <u>はしる</u> を/が 探しています。",
        "sentence_kanji": "すずきさんは <u>走る</u> を/が 探しています。",
        "kanji_target": "走る",
        "hira_target": "はしる",
        "kanji_options": [
          "見る",
          "走る",
          "忘れる",
          "遅れる"
        ],
        "hira_options": [
          "みる",
          "はしる",
          "わすれる",
          "おくれる"
        ],
        "romaji": "hashiru",
        "vi_meaning": "chạy"
      },
      {
        "id": "topic_09_verbs_adj_97",
        "num": 97,
        "sentence_hira": "すずきさんは <u>あるく</u> を/が 探しています。",
        "sentence_kanji": "すずきさんは <u>歩く</u> を/が 探しています。",
        "kanji_target": "歩く",
        "hira_target": "あるく",
        "kanji_options": [
          "売る",
          "間に合う",
          "忙しい",
          "歩く"
        ],
        "hira_options": [
          "うる",
          "まにあう",
          "いそがしい",
          "あるく"
        ],
        "romaji": "aruku",
        "vi_meaning": "đi bộ"
      },
      {
        "id": "topic_09_verbs_adj_98",
        "num": 98,
        "sentence_hira": "すずきさんは <u>ねる</u> を/が 探しています。",
        "sentence_kanji": "すずきさんは <u>寝る</u> を/が 探しています。",
        "kanji_target": "寝る",
        "hira_target": "ねる",
        "kanji_options": [
          "遅れる",
          "帰る",
          "寝る",
          "高い"
        ],
        "hira_options": [
          "おくれる",
          "かえる",
          "ねる",
          "たかい"
        ],
        "romaji": "neru",
        "vi_meaning": "ngủ"
      },
      {
        "id": "topic_09_verbs_adj_99",
        "num": 99,
        "sentence_hira": "すずきさんは <u>おきる</u> を/が 探しています。",
        "sentence_kanji": "すずきさんは <u>起きる</u> を/が 探しています。",
        "kanji_target": "起きる",
        "hira_target": "おきる",
        "kanji_options": [
          "起きる",
          "待つ",
          "書く",
          "面白い"
        ],
        "hira_options": [
          "おきる",
          "まつ",
          "かく",
          "おもしろい"
        ],
        "romaji": "okiru",
        "vi_meaning": "thức dậy"
      },
      {
        "id": "topic_09_verbs_adj_100",
        "num": 100,
        "sentence_hira": "すずきさんは <u>わすれる</u> を/が 探しています。",
        "sentence_kanji": "すずきさんは <u>忘れる</u> を/が 探しています。",
        "kanji_target": "忘れる",
        "hira_target": "わすれる",
        "kanji_options": [
          "小さい",
          "忘れる",
          "泳ぐ",
          "親切な"
        ],
        "hira_options": [
          "ちいさい",
          "わすれる",
          "およぐ",
          "しんせつな"
        ],
        "romaji": "wasureru",
        "vi_meaning": "quên"
      },
      {
        "id": "topic_09_verbs_adj_101",
        "num": 101,
        "sentence_hira": "すずきさんは <u>おぼえる</u> を/が 探しています。",
        "sentence_kanji": "すずきさんは <u>覚える</u> を/が 探しています。",
        "kanji_target": "覚える",
        "hira_target": "おぼえる",
        "kanji_options": [
          "楽しい",
          "覚える",
          "帰る",
          "話す"
        ],
        "hira_options": [
          "たのしい",
          "おぼえる",
          "かえる",
          "はなす"
        ],
        "romaji": "oboeru",
        "vi_meaning": "nhớ/học thuộc"
      },
      {
        "id": "topic_09_verbs_adj_102",
        "num": 102,
        "sentence_hira": "すずきさんは <u>たすける</u> を/が 探しています。",
        "sentence_kanji": "すずきさんは <u>助ける</u> を/が 探しています。",
        "kanji_target": "助ける",
        "hira_target": "たすける",
        "kanji_options": [
          "助ける",
          "話す",
          "面白い",
          "来る"
        ],
        "hira_options": [
          "たすける",
          "はなす",
          "おもしろい",
          "くる"
        ],
        "romaji": "tasukeru",
        "vi_meaning": "giúp đỡ"
      },
      {
        "id": "topic_09_verbs_adj_103",
        "num": 103,
        "sentence_hira": "すずきさんは <u>まにあう</u> を/が 探しています。",
        "sentence_kanji": "すずきさんは <u>間に合う</u> を/が 探しています。",
        "kanji_target": "間に合う",
        "hira_target": "まにあう",
        "kanji_options": [
          "難しい",
          "売る",
          "間に合う",
          "難しい"
        ],
        "hira_options": [
          "むずかしい",
          "うる",
          "まにあう",
          "むずかしい"
        ],
        "romaji": "maniau",
        "vi_meaning": "kịp giờ"
      },
      {
        "id": "topic_09_verbs_adj_104",
        "num": 104,
        "sentence_hira": "すずきさんは <u>おくれる</u> を/が 探しています。",
        "sentence_kanji": "すずきさんは <u>遅れる</u> を/が 探しています。",
        "kanji_target": "遅れる",
        "hira_target": "おくれる",
        "kanji_options": [
          "走る",
          "遅れる",
          "遊ぶ",
          "間に合う"
        ],
        "hira_options": [
          "はしる",
          "おくれる",
          "あそぶ",
          "まにあう"
        ],
        "romaji": "okureru",
        "vi_meaning": "trễ/trễ giờ"
      },
      {
        "id": "topic_09_verbs_adj_105",
        "num": 105,
        "sentence_hira": "すずきさんは <u>おおきい</u> を/が 探しています。",
        "sentence_kanji": "すずきさんは <u>大きい</u> を/が 探しています。",
        "kanji_target": "大きい",
        "hira_target": "おおきい",
        "kanji_options": [
          "古い",
          "大きい",
          "泳ぐ",
          "書く"
        ],
        "hira_options": [
          "ふるい",
          "おおきい",
          "およぐ",
          "かく"
        ],
        "romaji": "ookii",
        "vi_meaning": "to lớn"
      },
      {
        "id": "topic_09_verbs_adj_106",
        "num": 106,
        "sentence_hira": "すずきさんは <u>ちいさい</u> を/が 探しています。",
        "sentence_kanji": "すずきさんは <u>小さい</u> を/が 探しています。",
        "kanji_target": "小さい",
        "hira_target": "ちいさい",
        "kanji_options": [
          "楽しい",
          "小さい",
          "忙しい",
          "飲む"
        ],
        "hira_options": [
          "たのしい",
          "ちいさい",
          "いそがしい",
          "のむ"
        ],
        "romaji": "chiisai",
        "vi_meaning": "nhỏ bé"
      },
      {
        "id": "topic_09_verbs_adj_107",
        "num": 107,
        "sentence_hira": "すずきさんは <u>あたらしい</u> を/が 探しています。",
        "sentence_kanji": "すずきさんは <u>新しい</u> を/が 探しています。",
        "kanji_target": "新しい",
        "hira_target": "あたらしい",
        "kanji_options": [
          "安い",
          "新しい",
          "助ける",
          "安い"
        ],
        "hira_options": [
          "やすい",
          "あたらしい",
          "たすける",
          "やすい"
        ],
        "romaji": "atarashii",
        "vi_meaning": "mới"
      },
      {
        "id": "topic_09_verbs_adj_108",
        "num": 108,
        "sentence_hira": "すずきさんは <u>ふるい</u> を/が 探しています。",
        "sentence_kanji": "すずきさんは <u>古い</u> を/が 探しています。",
        "kanji_target": "古い",
        "hira_target": "ふるい",
        "kanji_options": [
          "新しい",
          "売る",
          "小さい",
          "古い"
        ],
        "hira_options": [
          "あたらしい",
          "うる",
          "ちいさい",
          "ふるい"
        ],
        "romaji": "furui",
        "vi_meaning": "cũ"
      },
      {
        "id": "topic_09_verbs_adj_109",
        "num": 109,
        "sentence_hira": "すずきさんは <u>たかい</u> を/が 探しています。",
        "sentence_kanji": "すずきさんは <u>高い</u> を/が 探しています。",
        "kanji_target": "高い",
        "hira_target": "たかい",
        "kanji_options": [
          "待つ",
          "楽しい",
          "安い",
          "高い"
        ],
        "hira_options": [
          "まつ",
          "たのしい",
          "やすい",
          "たかい"
        ],
        "romaji": "takai",
        "vi_meaning": "cao/đắt"
      },
      {
        "id": "topic_09_verbs_adj_110",
        "num": 110,
        "sentence_hira": "すずきさんは <u>やすい</u> を/が 探しています。",
        "sentence_kanji": "すずきさんは <u>安い</u> を/が 探しています。",
        "kanji_target": "安い",
        "hira_target": "やすい",
        "kanji_options": [
          "小さい",
          "助ける",
          "呼ぶ",
          "安い"
        ],
        "hira_options": [
          "ちいさい",
          "たすける",
          "よぶ",
          "やすい"
        ],
        "romaji": "yasui",
        "vi_meaning": "rẻ"
      },
      {
        "id": "topic_09_verbs_adj_111",
        "num": 111,
        "sentence_hira": "すずきさんは <u>いそがしい</u> を/が 探しています。",
        "sentence_kanji": "すずきさんは <u>忙しい</u> を/が 探しています。",
        "kanji_target": "忙しい",
        "hira_target": "いそがしい",
        "kanji_options": [
          "話す",
          "大きい",
          "忙しい",
          "食べる"
        ],
        "hira_options": [
          "はなす",
          "おおきい",
          "いそがしい",
          "たべる"
        ],
        "romaji": "isogashii",
        "vi_meaning": "bận rộn"
      },
      {
        "id": "topic_09_verbs_adj_112",
        "num": 112,
        "sentence_hira": "すずきさんは <u>たのしい</u> を/が 探しています。",
        "sentence_kanji": "すずきさんは <u>楽しい</u> を/が 探しています。",
        "kanji_target": "楽しい",
        "hira_target": "たのしい",
        "kanji_options": [
          "楽しい",
          "泳ぐ",
          "書く",
          "古い"
        ],
        "hira_options": [
          "たのしい",
          "およぐ",
          "かく",
          "ふるい"
        ],
        "romaji": "tanoshii",
        "vi_meaning": "vui vẻ"
      },
      {
        "id": "topic_09_verbs_adj_113",
        "num": 113,
        "sentence_hira": "すずきさんは <u>おもしろい</u> を/が 探しています。",
        "sentence_kanji": "すずきさんは <u>面白い</u> を/が 探しています。",
        "kanji_target": "面白い",
        "hira_target": "おもしろい",
        "kanji_options": [
          "面白い",
          "楽しい",
          "会う",
          "親切な"
        ],
        "hira_options": [
          "おもしろい",
          "たのしい",
          "あう",
          "しんせつな"
        ],
        "romaji": "omoshiroi",
        "vi_meaning": "thú vị"
      },
      {
        "id": "topic_09_verbs_adj_114",
        "num": 114,
        "sentence_hira": "すずきさんは <u>むずかしい</u> を/が 探しています。",
        "sentence_kanji": "すずきさんは <u>難しい</u> を/が 探しています。",
        "kanji_target": "難しい",
        "hira_target": "むずかしい",
        "kanji_options": [
          "忘れる",
          "帰る",
          "難しい",
          "聞く"
        ],
        "hira_options": [
          "わすれる",
          "かえる",
          "むずかしい",
          "きく"
        ],
        "romaji": "muzukashii",
        "vi_meaning": "khó"
      },
      {
        "id": "topic_09_verbs_adj_115",
        "num": 115,
        "sentence_hira": "すずきさんは <u>やさしい</u> を/が 探しています。",
        "sentence_kanji": "すずきさんは <u>易しい</u> を/が 探しています。",
        "kanji_target": "易しい",
        "hira_target": "やさしい",
        "kanji_options": [
          "静かな",
          "読む",
          "易しい",
          "親切な"
        ],
        "hira_options": [
          "しずかな",
          "よむ",
          "やさしい",
          "しんせつな"
        ],
        "romaji": "yasashii",
        "vi_meaning": "dễ"
      },
      {
        "id": "topic_09_verbs_adj_116",
        "num": 116,
        "sentence_hira": "すずきさんは <u>しんせつな</u> を/が 探しています。",
        "sentence_kanji": "すずきさんは <u>親切な</u> を/が 探しています。",
        "kanji_target": "親切な",
        "hira_target": "しんせつな",
        "kanji_options": [
          "高い",
          "小さい",
          "親切な",
          "起きる"
        ],
        "hira_options": [
          "たかい",
          "ちいさい",
          "しんせつな",
          "おきる"
        ],
        "romaji": "shinsetsu",
        "vi_meaning": "tốt bụng"
      },
      {
        "id": "topic_09_verbs_adj_117",
        "num": 117,
        "sentence_hira": "すずきさんは <u>しずかな</u> を/が 探しています。",
        "sentence_kanji": "すずきさんは <u>静かな</u> を/が 探しています。",
        "kanji_target": "静かな",
        "hira_target": "しずかな",
        "kanji_options": [
          "待つ",
          "食べる",
          "食べる",
          "静かな"
        ],
        "hira_options": [
          "まつ",
          "たべる",
          "たべる",
          "しずかな"
        ],
        "romaji": "shizuka",
        "vi_meaning": "yên tĩnh"
      },
      {
        "id": "topic_09_verbs_adj_118",
        "num": 118,
        "sentence_hira": "すずきさんは <u>いく</u> を/が 探しています。",
        "sentence_kanji": "すずきさんは <u>行く</u> を/が 探しています。",
        "kanji_target": "行く",
        "hira_target": "いく",
        "kanji_options": [
          "話す",
          "助ける",
          "行く",
          "来る"
        ],
        "hira_options": [
          "はなす",
          "たすける",
          "いく",
          "くる"
        ],
        "romaji": "iku",
        "vi_meaning": "đi"
      },
      {
        "id": "topic_09_verbs_adj_119",
        "num": 119,
        "sentence_hira": "すずきさんは <u>くる</u> を/が 探しています。",
        "sentence_kanji": "すずきさんは <u>来る</u> を/が 探しています。",
        "kanji_target": "来る",
        "hira_target": "くる",
        "kanji_options": [
          "走る",
          "高い",
          "来る",
          "易しい"
        ],
        "hira_options": [
          "はしる",
          "たかい",
          "くる",
          "やさしい"
        ],
        "romaji": "kuru",
        "vi_meaning": "đến"
      },
      {
        "id": "topic_09_verbs_adj_120",
        "num": 120,
        "sentence_hira": "すずきさんは <u>かえる</u> を/が 探しています。",
        "sentence_kanji": "すずきさんは <u>帰る</u> を/が 探しています。",
        "kanji_target": "帰る",
        "hira_target": "かえる",
        "kanji_options": [
          "遊ぶ",
          "書く",
          "売る",
          "帰る"
        ],
        "hira_options": [
          "あそぶ",
          "かく",
          "うる",
          "かえる"
        ],
        "romaji": "kaeru",
        "vi_meaning": "trở về"
      },
      {
        "id": "topic_09_verbs_adj_121",
        "num": 121,
        "sentence_hira": "すずきさんは <u>たべる</u> を/が 探しています。",
        "sentence_kanji": "すずきさんは <u>食べる</u> を/が 探しています。",
        "kanji_target": "食べる",
        "hira_target": "たべる",
        "kanji_options": [
          "来る",
          "飲む",
          "食べる",
          "見る"
        ],
        "hira_options": [
          "くる",
          "のむ",
          "たべる",
          "みる"
        ],
        "romaji": "taberu",
        "vi_meaning": "ăn"
      },
      {
        "id": "topic_09_verbs_adj_122",
        "num": 122,
        "sentence_hira": "すずきさんは <u>のむ</u> を/が 探しています。",
        "sentence_kanji": "すずきさんは <u>飲む</u> を/が 探しています。",
        "kanji_target": "飲む",
        "hira_target": "のむ",
        "kanji_options": [
          "寝る",
          "飲む",
          "見る",
          "安い"
        ],
        "hira_options": [
          "ねる",
          "のむ",
          "みる",
          "やすい"
        ],
        "romaji": "nomu",
        "vi_meaning": "uống"
      },
      {
        "id": "topic_09_verbs_adj_123",
        "num": 123,
        "sentence_hira": "すずきさんは <u>みる</u> を/が 探しています。",
        "sentence_kanji": "すずきさんは <u>見る</u> を/が 探しています。",
        "kanji_target": "見る",
        "hira_target": "みる",
        "kanji_options": [
          "待つ",
          "新しい",
          "見る",
          "聞く"
        ],
        "hira_options": [
          "まつ",
          "あたらしい",
          "みる",
          "きく"
        ],
        "romaji": "miru",
        "vi_meaning": "nhìn/xem"
      },
      {
        "id": "topic_09_verbs_adj_124",
        "num": 124,
        "sentence_hira": "すずきさんは <u>きく</u> を/が 探しています。",
        "sentence_kanji": "すずきさんは <u>聞く</u> を/が 探しています。",
        "kanji_target": "聞く",
        "hira_target": "きく",
        "kanji_options": [
          "聞く",
          "走る",
          "小さい",
          "会う"
        ],
        "hira_options": [
          "きく",
          "はしる",
          "ちいさい",
          "あう"
        ],
        "romaji": "kiku",
        "vi_meaning": "nghe/hỏi"
      },
      {
        "id": "topic_09_verbs_adj_125",
        "num": 125,
        "sentence_hira": "すずきさんは <u>よむ</u> を/が 探しています。",
        "sentence_kanji": "すずきさんは <u>読む</u> を/が 探しています。",
        "kanji_target": "読む",
        "hira_target": "よむ",
        "kanji_options": [
          "歩く",
          "呼ぶ",
          "聞く",
          "読む"
        ],
        "hira_options": [
          "あるく",
          "よぶ",
          "きく",
          "よむ"
        ],
        "romaji": "yomu",
        "vi_meaning": "đọc"
      },
      {
        "id": "topic_09_verbs_adj_126",
        "num": 126,
        "sentence_hira": "すずきさんは <u>かく</u> を/が 探しています。",
        "sentence_kanji": "すずきさんは <u>書く</u> を/が 探しています。",
        "kanji_target": "書く",
        "hira_target": "かく",
        "kanji_options": [
          "親切な",
          "売る",
          "間に合う",
          "書く"
        ],
        "hira_options": [
          "しんせつな",
          "うる",
          "まにあう",
          "かく"
        ],
        "romaji": "kaku",
        "vi_meaning": "viết"
      },
      {
        "id": "topic_09_verbs_adj_127",
        "num": 127,
        "sentence_hira": "すずきさんは <u>はなす</u> を/が 探しています。",
        "sentence_kanji": "すずきさんは <u>話す</u> を/が 探しています。",
        "kanji_target": "話す",
        "hira_target": "はなす",
        "kanji_options": [
          "遊ぶ",
          "親切な",
          "話す",
          "呼ぶ"
        ],
        "hira_options": [
          "あそぶ",
          "しんせつな",
          "はなす",
          "よぶ"
        ],
        "romaji": "hanasu",
        "vi_meaning": "nói chuyện"
      },
      {
        "id": "topic_09_verbs_adj_128",
        "num": 128,
        "sentence_hira": "すずきさんは <u>かう</u> を/が 探しています。",
        "sentence_kanji": "すずきさんは <u>買う</u> を/が 探しています。",
        "kanji_target": "買う",
        "hira_target": "かう",
        "kanji_options": [
          "買う",
          "来る",
          "見る",
          "売る"
        ],
        "hira_options": [
          "かう",
          "くる",
          "みる",
          "うる"
        ],
        "romaji": "kau",
        "vi_meaning": "mua"
      },
      {
        "id": "topic_09_verbs_adj_129",
        "num": 129,
        "sentence_hira": "すずきさんは <u>うる</u> を/が 探しています。",
        "sentence_kanji": "すずきさんは <u>売る</u> を/が 探しています。",
        "kanji_target": "売る",
        "hira_target": "うる",
        "kanji_options": [
          "見る",
          "新しい",
          "書く",
          "売る"
        ],
        "hira_options": [
          "みる",
          "あたらしい",
          "かく",
          "うる"
        ],
        "romaji": "uru",
        "vi_meaning": "bán"
      },
      {
        "id": "topic_09_verbs_adj_130",
        "num": 130,
        "sentence_hira": "すずきさんは <u>あう</u> を/が 探しています。",
        "sentence_kanji": "すずきさんは <u>会う</u> を/が 探しています。",
        "kanji_target": "会う",
        "hira_target": "あう",
        "kanji_options": [
          "古い",
          "会う",
          "小さい",
          "難しい"
        ],
        "hira_options": [
          "ふるい",
          "あう",
          "ちいさい",
          "むずかしい"
        ],
        "romaji": "au",
        "vi_meaning": "gặp mặt"
      },
      {
        "id": "topic_09_verbs_adj_131",
        "num": 131,
        "sentence_hira": "すずきさんは <u>まつ</u> を/が 探しています。",
        "sentence_kanji": "すずきさんは <u>待つ</u> を/が 探しています。",
        "kanji_target": "待つ",
        "hira_target": "まつ",
        "kanji_options": [
          "呼ぶ",
          "楽しい",
          "食べる",
          "待つ"
        ],
        "hira_options": [
          "よぶ",
          "たのしい",
          "たべる",
          "まつ"
        ],
        "romaji": "matsu",
        "vi_meaning": "chờ đợi"
      },
      {
        "id": "topic_09_verbs_adj_132",
        "num": 132,
        "sentence_hira": "すずきさんは <u>よぶ</u> を/が 探しています。",
        "sentence_kanji": "すずきさんは <u>呼ぶ</u> を/が 探しています。",
        "kanji_target": "呼ぶ",
        "hira_target": "よぶ",
        "kanji_options": [
          "楽しい",
          "書く",
          "呼ぶ",
          "行く"
        ],
        "hira_options": [
          "たのしい",
          "かく",
          "よぶ",
          "いく"
        ],
        "romaji": "yobu",
        "vi_meaning": "gọi"
      },
      {
        "id": "topic_09_verbs_adj_133",
        "num": 133,
        "sentence_hira": "すずきさんは <u>あそぶ</u> を/が 探しています。",
        "sentence_kanji": "すずきさんは <u>遊ぶ</u> を/が 探しています。",
        "kanji_target": "遊ぶ",
        "hira_target": "あそぶ",
        "kanji_options": [
          "聞く",
          "走る",
          "遊ぶ",
          "大きい"
        ],
        "hira_options": [
          "きく",
          "はしる",
          "あそぶ",
          "おおきい"
        ],
        "romaji": "asobu",
        "vi_meaning": "chơi"
      },
      {
        "id": "topic_09_verbs_adj_134",
        "num": 134,
        "sentence_hira": "すずきさんは <u>およぐ</u> を/が 探しています。",
        "sentence_kanji": "すずきさんは <u>泳ぐ</u> を/が 探しています。",
        "kanji_target": "泳ぐ",
        "hira_target": "およぐ",
        "kanji_options": [
          "待つ",
          "飲む",
          "泳ぐ",
          "親切な"
        ],
        "hira_options": [
          "まつ",
          "のむ",
          "およぐ",
          "しんせつな"
        ],
        "romaji": "oyogu",
        "vi_meaning": "bơi"
      },
      {
        "id": "topic_09_verbs_adj_135",
        "num": 135,
        "sentence_hira": "すずきさんは <u>はしる</u> を/が 探しています。",
        "sentence_kanji": "すずきさんは <u>走る</u> を/が 探しています。",
        "kanji_target": "走る",
        "hira_target": "はしる",
        "kanji_options": [
          "易しい",
          "待つ",
          "走る",
          "待つ"
        ],
        "hira_options": [
          "やさしい",
          "まつ",
          "はしる",
          "まつ"
        ],
        "romaji": "hashiru",
        "vi_meaning": "chạy"
      },
      {
        "id": "topic_09_verbs_adj_136",
        "num": 136,
        "sentence_hira": "すずきさんは <u>あるく</u> を/が 探しています。",
        "sentence_kanji": "すずきさんは <u>歩く</u> を/が 探しています。",
        "kanji_target": "歩く",
        "hira_target": "あるく",
        "kanji_options": [
          "歩く",
          "安い",
          "親切な",
          "面白い"
        ],
        "hira_options": [
          "あるく",
          "やすい",
          "しんせつな",
          "おもしろい"
        ],
        "romaji": "aruku",
        "vi_meaning": "đi bộ"
      },
      {
        "id": "topic_09_verbs_adj_137",
        "num": 137,
        "sentence_hira": "すずきさんは <u>ねる</u> を/が 探しています。",
        "sentence_kanji": "すずきさんは <u>寝る</u> を/が 探しています。",
        "kanji_target": "寝る",
        "hira_target": "ねる",
        "kanji_options": [
          "寝る",
          "遅れる",
          "食べる",
          "見る"
        ],
        "hira_options": [
          "ねる",
          "おくれる",
          "たべる",
          "みる"
        ],
        "romaji": "neru",
        "vi_meaning": "ngủ"
      },
      {
        "id": "topic_09_verbs_adj_138",
        "num": 138,
        "sentence_hira": "すずきさんは <u>おきる</u> を/が 探しています。",
        "sentence_kanji": "すずきさんは <u>起きる</u> を/が 探しています。",
        "kanji_target": "起きる",
        "hira_target": "おきる",
        "kanji_options": [
          "親切な",
          "起きる",
          "売る",
          "話す"
        ],
        "hira_options": [
          "しんせつな",
          "おきる",
          "うる",
          "はなす"
        ],
        "romaji": "okiru",
        "vi_meaning": "thức dậy"
      },
      {
        "id": "topic_09_verbs_adj_139",
        "num": 139,
        "sentence_hira": "すずきさんは <u>わすれる</u> を/が 探しています。",
        "sentence_kanji": "すずきさんは <u>忘れる</u> を/が 探しています。",
        "kanji_target": "忘れる",
        "hira_target": "わすれる",
        "kanji_options": [
          "食べる",
          "間に合う",
          "忘れる",
          "大きい"
        ],
        "hira_options": [
          "たべる",
          "まにあう",
          "わすれる",
          "おおきい"
        ],
        "romaji": "wasureru",
        "vi_meaning": "quên"
      },
      {
        "id": "topic_09_verbs_adj_140",
        "num": 140,
        "sentence_hira": "すずきさんは <u>おぼえる</u> を/が 探しています。",
        "sentence_kanji": "すずきさんは <u>覚える</u> を/が 探しています。",
        "kanji_target": "覚える",
        "hira_target": "おぼえる",
        "kanji_options": [
          "覚える",
          "高い",
          "帰る",
          "食べる"
        ],
        "hira_options": [
          "おぼえる",
          "たかい",
          "かえる",
          "たべる"
        ],
        "romaji": "oboeru",
        "vi_meaning": "nhớ/học thuộc"
      },
      {
        "id": "topic_09_verbs_adj_141",
        "num": 141,
        "sentence_hira": "すずきさんは <u>たすける</u> を/が 探しています。",
        "sentence_kanji": "すずきさんは <u>助ける</u> を/が 探しています。",
        "kanji_target": "助ける",
        "hira_target": "たすける",
        "kanji_options": [
          "話す",
          "助ける",
          "小さい",
          "難しい"
        ],
        "hira_options": [
          "はなす",
          "たすける",
          "ちいさい",
          "むずかしい"
        ],
        "romaji": "tasukeru",
        "vi_meaning": "giúp đỡ"
      },
      {
        "id": "topic_09_verbs_adj_142",
        "num": 142,
        "sentence_hira": "すずきさんは <u>まにあう</u> を/が 探しています。",
        "sentence_kanji": "すずきさんは <u>間に合う</u> を/が 探しています。",
        "kanji_target": "間に合う",
        "hira_target": "まにあう",
        "kanji_options": [
          "会う",
          "走る",
          "間に合う",
          "行く"
        ],
        "hira_options": [
          "あう",
          "はしる",
          "まにあう",
          "いく"
        ],
        "romaji": "maniau",
        "vi_meaning": "kịp giờ"
      },
      {
        "id": "topic_09_verbs_adj_143",
        "num": 143,
        "sentence_hira": "すずきさんは <u>おくれる</u> を/が 探しています。",
        "sentence_kanji": "すずきさんは <u>遅れる</u> を/が 探しています。",
        "kanji_target": "遅れる",
        "hira_target": "おくれる",
        "kanji_options": [
          "呼ぶ",
          "会う",
          "遅れる",
          "食べる"
        ],
        "hira_options": [
          "よぶ",
          "あう",
          "おくれる",
          "たべる"
        ],
        "romaji": "okureru",
        "vi_meaning": "trễ/trễ giờ"
      },
      {
        "id": "topic_09_verbs_adj_144",
        "num": 144,
        "sentence_hira": "すずきさんは <u>おおきい</u> を/が 探しています。",
        "sentence_kanji": "すずきさんは <u>大きい</u> を/が 探しています。",
        "kanji_target": "大きい",
        "hira_target": "おおきい",
        "kanji_options": [
          "起きる",
          "親切な",
          "親切な",
          "大きい"
        ],
        "hira_options": [
          "おきる",
          "しんせつな",
          "しんせつな",
          "おおきい"
        ],
        "romaji": "ookii",
        "vi_meaning": "to lớn"
      },
      {
        "id": "topic_09_verbs_adj_145",
        "num": 145,
        "sentence_hira": "すずきさんは <u>ちいさい</u> を/が 探しています。",
        "sentence_kanji": "すずきさんは <u>小さい</u> を/が 探しています。",
        "kanji_target": "小さい",
        "hira_target": "ちいさい",
        "kanji_options": [
          "行く",
          "遊ぶ",
          "小さい",
          "安い"
        ],
        "hira_options": [
          "いく",
          "あそぶ",
          "ちいさい",
          "やすい"
        ],
        "romaji": "chiisai",
        "vi_meaning": "nhỏ bé"
      },
      {
        "id": "topic_09_verbs_adj_146",
        "num": 146,
        "sentence_hira": "すずきさんは <u>あたらしい</u> を/が 探しています。",
        "sentence_kanji": "すずきさんは <u>新しい</u> を/が 探しています。",
        "kanji_target": "新しい",
        "hira_target": "あたらしい",
        "kanji_options": [
          "静かな",
          "新しい",
          "親切な",
          "食べる"
        ],
        "hira_options": [
          "しずかな",
          "あたらしい",
          "しんせつな",
          "たべる"
        ],
        "romaji": "atarashii",
        "vi_meaning": "mới"
      },
      {
        "id": "topic_09_verbs_adj_147",
        "num": 147,
        "sentence_hira": "すずきさんは <u>ふるい</u> を/が 探しています。",
        "sentence_kanji": "すずきさんは <u>古い</u> を/が 探しています。",
        "kanji_target": "古い",
        "hira_target": "ふるい",
        "kanji_options": [
          "買う",
          "聞く",
          "覚える",
          "古い"
        ],
        "hira_options": [
          "かう",
          "きく",
          "おぼえる",
          "ふるい"
        ],
        "romaji": "furui",
        "vi_meaning": "cũ"
      },
      {
        "id": "topic_09_verbs_adj_148",
        "num": 148,
        "sentence_hira": "すずきさんは <u>たかい</u> を/が 探しています。",
        "sentence_kanji": "すずきさんは <u>高い</u> を/が 探しています。",
        "kanji_target": "高い",
        "hira_target": "たかい",
        "kanji_options": [
          "待つ",
          "書く",
          "高い",
          "安い"
        ],
        "hira_options": [
          "まつ",
          "かく",
          "たかい",
          "やすい"
        ],
        "romaji": "takai",
        "vi_meaning": "cao/đắt"
      },
      {
        "id": "topic_09_verbs_adj_149",
        "num": 149,
        "sentence_hira": "すずきさんは <u>やすい</u> を/が 探しています。",
        "sentence_kanji": "すずきさんは <u>安い</u> を/が 探しています。",
        "kanji_target": "安い",
        "hira_target": "やすい",
        "kanji_options": [
          "走る",
          "静かな",
          "古い",
          "安い"
        ],
        "hira_options": [
          "はしる",
          "しずかな",
          "ふるい",
          "やすい"
        ],
        "romaji": "yasui",
        "vi_meaning": "rẻ"
      },
      {
        "id": "topic_09_verbs_adj_150",
        "num": 150,
        "sentence_hira": "すずきさんは <u>いそがしい</u> を/が 探しています。",
        "sentence_kanji": "すずきさんは <u>忙しい</u> を/が 探しています。",
        "kanji_target": "忙しい",
        "hira_target": "いそがしい",
        "kanji_options": [
          "面白い",
          "大きい",
          "聞く",
          "忙しい"
        ],
        "hira_options": [
          "おもしろい",
          "おおきい",
          "きく",
          "いそがしい"
        ],
        "romaji": "isogashii",
        "vi_meaning": "bận rộn"
      },
      {
        "id": "topic_09_verbs_adj_151",
        "num": 151,
        "sentence_hira": "すずきさんは <u>たのしい</u> を/が 探しています。",
        "sentence_kanji": "すずきさんは <u>楽しい</u> を/が 探しています。",
        "kanji_target": "楽しい",
        "hira_target": "たのしい",
        "kanji_options": [
          "大きい",
          "親切な",
          "楽しい",
          "安い"
        ],
        "hira_options": [
          "おおきい",
          "しんせつな",
          "たのしい",
          "やすい"
        ],
        "romaji": "tanoshii",
        "vi_meaning": "vui vẻ"
      },
      {
        "id": "topic_09_verbs_adj_152",
        "num": 152,
        "sentence_hira": "すずきさんは <u>おもしろい</u> を/が 探しています。",
        "sentence_kanji": "すずきさんは <u>面白い</u> を/が 探しています。",
        "kanji_target": "面白い",
        "hira_target": "おもしろい",
        "kanji_options": [
          "大きい",
          "待つ",
          "書く",
          "面白い"
        ],
        "hira_options": [
          "おおきい",
          "まつ",
          "かく",
          "おもしろい"
        ],
        "romaji": "omoshiroi",
        "vi_meaning": "thú vị"
      },
      {
        "id": "topic_09_verbs_adj_153",
        "num": 153,
        "sentence_hira": "すずきさんは <u>むずかしい</u> を/が 探しています。",
        "sentence_kanji": "すずきさんは <u>難しい</u> を/が 探しています。",
        "kanji_target": "難しい",
        "hira_target": "むずかしい",
        "kanji_options": [
          "間に合う",
          "聞く",
          "呼ぶ",
          "難しい"
        ],
        "hira_options": [
          "まにあう",
          "きく",
          "よぶ",
          "むずかしい"
        ],
        "romaji": "muzukashii",
        "vi_meaning": "khó"
      },
      {
        "id": "topic_09_verbs_adj_154",
        "num": 154,
        "sentence_hira": "すずきさんは <u>やさしい</u> を/が 探しています。",
        "sentence_kanji": "すずきさんは <u>易しい</u> を/が 探しています。",
        "kanji_target": "易しい",
        "hira_target": "やさしい",
        "kanji_options": [
          "易しい",
          "買う",
          "聞く",
          "来る"
        ],
        "hira_options": [
          "やさしい",
          "かう",
          "きく",
          "くる"
        ],
        "romaji": "yasashii",
        "vi_meaning": "dễ"
      },
      {
        "id": "topic_09_verbs_adj_155",
        "num": 155,
        "sentence_hira": "すずきさんは <u>しんせつな</u> を/が 探しています。",
        "sentence_kanji": "すずきさんは <u>親切な</u> を/が 探しています。",
        "kanji_target": "親切な",
        "hira_target": "しんせつな",
        "kanji_options": [
          "聞く",
          "売る",
          "書く",
          "親切な"
        ],
        "hira_options": [
          "きく",
          "うる",
          "かく",
          "しんせつな"
        ],
        "romaji": "shinsetsu",
        "vi_meaning": "tốt bụng"
      },
      {
        "id": "topic_09_verbs_adj_156",
        "num": 156,
        "sentence_hira": "すずきさんは <u>しずかな</u> を/が 探しています。",
        "sentence_kanji": "すずきさんは <u>静かな</u> を/が 探しています。",
        "kanji_target": "静かな",
        "hira_target": "しずかな",
        "kanji_options": [
          "静かな",
          "行く",
          "安い",
          "覚える"
        ],
        "hira_options": [
          "しずかな",
          "いく",
          "やすい",
          "おぼえる"
        ],
        "romaji": "shizuka",
        "vi_meaning": "yên tĩnh"
      },
      {
        "id": "topic_09_verbs_adj_157",
        "num": 157,
        "sentence_hira": "すずきさんは <u>いく</u> を/が 探しています。",
        "sentence_kanji": "すずきさんは <u>行く</u> を/が 探しています。",
        "kanji_target": "行く",
        "hira_target": "いく",
        "kanji_options": [
          "話す",
          "買う",
          "行く",
          "間に合う"
        ],
        "hira_options": [
          "はなす",
          "かう",
          "いく",
          "まにあう"
        ],
        "romaji": "iku",
        "vi_meaning": "đi"
      },
      {
        "id": "topic_09_verbs_adj_158",
        "num": 158,
        "sentence_hira": "すずきさんは <u>くる</u> を/が 探しています。",
        "sentence_kanji": "すずきさんは <u>来る</u> を/が 探しています。",
        "kanji_target": "来る",
        "hira_target": "くる",
        "kanji_options": [
          "遊ぶ",
          "聞く",
          "来る",
          "起きる"
        ],
        "hira_options": [
          "あそぶ",
          "きく",
          "くる",
          "おきる"
        ],
        "romaji": "kuru",
        "vi_meaning": "đến"
      },
      {
        "id": "topic_09_verbs_adj_159",
        "num": 159,
        "sentence_hira": "すずきさんは <u>かえる</u> を/が 探しています。",
        "sentence_kanji": "すずきさんは <u>帰る</u> を/が 探しています。",
        "kanji_target": "帰る",
        "hira_target": "かえる",
        "kanji_options": [
          "行く",
          "難しい",
          "帰る",
          "安い"
        ],
        "hira_options": [
          "いく",
          "むずかしい",
          "かえる",
          "やすい"
        ],
        "romaji": "kaeru",
        "vi_meaning": "trở về"
      },
      {
        "id": "topic_09_verbs_adj_160",
        "num": 160,
        "sentence_hira": "すずきさんは <u>たべる</u> を/が 探しています。",
        "sentence_kanji": "すずきさんは <u>食べる</u> を/が 探しています。",
        "kanji_target": "食べる",
        "hira_target": "たべる",
        "kanji_options": [
          "起きる",
          "難しい",
          "行く",
          "食べる"
        ],
        "hira_options": [
          "おきる",
          "むずかしい",
          "いく",
          "たべる"
        ],
        "romaji": "taberu",
        "vi_meaning": "ăn"
      },
      {
        "id": "topic_09_verbs_adj_161",
        "num": 161,
        "sentence_hira": "すずきさんは <u>のむ</u> を/が 探しています。",
        "sentence_kanji": "すずきさんは <u>飲む</u> を/が 探しています。",
        "kanji_target": "飲む",
        "hira_target": "のむ",
        "kanji_options": [
          "高い",
          "小さい",
          "飲む",
          "読む"
        ],
        "hira_options": [
          "たかい",
          "ちいさい",
          "のむ",
          "よむ"
        ],
        "romaji": "nomu",
        "vi_meaning": "uống"
      },
      {
        "id": "topic_09_verbs_adj_162",
        "num": 162,
        "sentence_hira": "すずきさんは <u>みる</u> を/が 探しています。",
        "sentence_kanji": "すずきさんは <u>見る</u> を/が 探しています。",
        "kanji_target": "見る",
        "hira_target": "みる",
        "kanji_options": [
          "読む",
          "見る",
          "忘れる",
          "遊ぶ"
        ],
        "hira_options": [
          "よむ",
          "みる",
          "わすれる",
          "あそぶ"
        ],
        "romaji": "miru",
        "vi_meaning": "nhìn/xem"
      },
      {
        "id": "topic_09_verbs_adj_163",
        "num": 163,
        "sentence_hira": "すずきさんは <u>きく</u> を/が 探しています。",
        "sentence_kanji": "すずきさんは <u>聞く</u> を/が 探しています。",
        "kanji_target": "聞く",
        "hira_target": "きく",
        "kanji_options": [
          "面白い",
          "覚える",
          "覚える",
          "聞く"
        ],
        "hira_options": [
          "おもしろい",
          "おぼえる",
          "おぼえる",
          "きく"
        ],
        "romaji": "kiku",
        "vi_meaning": "nghe/hỏi"
      },
      {
        "id": "topic_09_verbs_adj_164",
        "num": 164,
        "sentence_hira": "すずきさんは <u>よむ</u> を/が 探しています。",
        "sentence_kanji": "すずきさんは <u>読む</u> を/が 探しています。",
        "kanji_target": "読む",
        "hira_target": "よむ",
        "kanji_options": [
          "帰る",
          "帰る",
          "会う",
          "読む"
        ],
        "hira_options": [
          "かえる",
          "かえる",
          "あう",
          "よむ"
        ],
        "romaji": "yomu",
        "vi_meaning": "đọc"
      },
      {
        "id": "topic_09_verbs_adj_165",
        "num": 165,
        "sentence_hira": "すずきさんは <u>かく</u> を/が 探しています。",
        "sentence_kanji": "すずきさんは <u>書く</u> を/が 探しています。",
        "kanji_target": "書く",
        "hira_target": "かく",
        "kanji_options": [
          "走る",
          "小さい",
          "帰る",
          "書く"
        ],
        "hira_options": [
          "はしる",
          "ちいさい",
          "かえる",
          "かく"
        ],
        "romaji": "kaku",
        "vi_meaning": "viết"
      },
      {
        "id": "topic_09_verbs_adj_166",
        "num": 166,
        "sentence_hira": "すずきさんは <u>はなす</u> を/が 探しています。",
        "sentence_kanji": "すずきさんは <u>話す</u> を/が 探しています。",
        "kanji_target": "話す",
        "hira_target": "はなす",
        "kanji_options": [
          "読む",
          "新しい",
          "書く",
          "話す"
        ],
        "hira_options": [
          "よむ",
          "あたらしい",
          "かく",
          "はなす"
        ],
        "romaji": "hanasu",
        "vi_meaning": "nói chuyện"
      },
      {
        "id": "topic_09_verbs_adj_167",
        "num": 167,
        "sentence_hira": "すずきさんは <u>かう</u> を/が 探しています。",
        "sentence_kanji": "すずきさんは <u>買う</u> を/が 探しています。",
        "kanji_target": "買う",
        "hira_target": "かう",
        "kanji_options": [
          "買う",
          "来る",
          "会う",
          "難しい"
        ],
        "hira_options": [
          "かう",
          "くる",
          "あう",
          "むずかしい"
        ],
        "romaji": "kau",
        "vi_meaning": "mua"
      },
      {
        "id": "topic_09_verbs_adj_168",
        "num": 168,
        "sentence_hira": "すずきさんは <u>うる</u> を/が 探しています。",
        "sentence_kanji": "すずきさんは <u>売る</u> を/が 探しています。",
        "kanji_target": "売る",
        "hira_target": "うる",
        "kanji_options": [
          "売る",
          "高い",
          "来る",
          "会う"
        ],
        "hira_options": [
          "うる",
          "たかい",
          "くる",
          "あう"
        ],
        "romaji": "uru",
        "vi_meaning": "bán"
      },
      {
        "id": "topic_09_verbs_adj_169",
        "num": 169,
        "sentence_hira": "すずきさんは <u>あう</u> を/が 探しています。",
        "sentence_kanji": "すずきさんは <u>会う</u> を/が 探しています。",
        "kanji_target": "会う",
        "hira_target": "あう",
        "kanji_options": [
          "行く",
          "覚える",
          "会う",
          "買う"
        ],
        "hira_options": [
          "いく",
          "おぼえる",
          "あう",
          "かう"
        ],
        "romaji": "au",
        "vi_meaning": "gặp mặt"
      },
      {
        "id": "topic_09_verbs_adj_170",
        "num": 170,
        "sentence_hira": "すずきさんは <u>まつ</u> を/が 探しています。",
        "sentence_kanji": "すずきさんは <u>待つ</u> を/が 探しています。",
        "kanji_target": "待つ",
        "hira_target": "まつ",
        "kanji_options": [
          "忙しい",
          "親切な",
          "小さい",
          "待つ"
        ],
        "hira_options": [
          "いそがしい",
          "しんせつな",
          "ちいさい",
          "まつ"
        ],
        "romaji": "matsu",
        "vi_meaning": "chờ đợi"
      },
      {
        "id": "topic_09_verbs_adj_171",
        "num": 171,
        "sentence_hira": "すずきさんは <u>よぶ</u> を/が 探しています。",
        "sentence_kanji": "すずきさんは <u>呼ぶ</u> を/が 探しています。",
        "kanji_target": "呼ぶ",
        "hira_target": "よぶ",
        "kanji_options": [
          "安い",
          "待つ",
          "呼ぶ",
          "買う"
        ],
        "hira_options": [
          "やすい",
          "まつ",
          "よぶ",
          "かう"
        ],
        "romaji": "yobu",
        "vi_meaning": "gọi"
      },
      {
        "id": "topic_09_verbs_adj_172",
        "num": 172,
        "sentence_hira": "すずきさんは <u>あそぶ</u> を/が 探しています。",
        "sentence_kanji": "すずきさんは <u>遊ぶ</u> を/が 探しています。",
        "kanji_target": "遊ぶ",
        "hira_target": "あそぶ",
        "kanji_options": [
          "話す",
          "遊ぶ",
          "歩く",
          "古い"
        ],
        "hira_options": [
          "はなす",
          "あそぶ",
          "あるく",
          "ふるい"
        ],
        "romaji": "asobu",
        "vi_meaning": "chơi"
      },
      {
        "id": "topic_09_verbs_adj_173",
        "num": 173,
        "sentence_hira": "すずきさんは <u>およぐ</u> を/が 探しています。",
        "sentence_kanji": "すずきさんは <u>泳ぐ</u> を/が 探しています。",
        "kanji_target": "泳ぐ",
        "hira_target": "およぐ",
        "kanji_options": [
          "大きい",
          "来る",
          "泳ぐ",
          "会う"
        ],
        "hira_options": [
          "おおきい",
          "くる",
          "およぐ",
          "あう"
        ],
        "romaji": "oyogu",
        "vi_meaning": "bơi"
      },
      {
        "id": "topic_09_verbs_adj_174",
        "num": 174,
        "sentence_hira": "すずきさんは <u>はしる</u> を/が 探しています。",
        "sentence_kanji": "すずきさんは <u>走る</u> を/が 探しています。",
        "kanji_target": "走る",
        "hira_target": "はしる",
        "kanji_options": [
          "間に合う",
          "走る",
          "忙しい",
          "会う"
        ],
        "hira_options": [
          "まにあう",
          "はしる",
          "いそがしい",
          "あう"
        ],
        "romaji": "hashiru",
        "vi_meaning": "chạy"
      },
      {
        "id": "topic_09_verbs_adj_175",
        "num": 175,
        "sentence_hira": "すずきさんは <u>あるく</u> を/が 探しています。",
        "sentence_kanji": "すずきさんは <u>歩く</u> を/が 探しています。",
        "kanji_target": "歩く",
        "hira_target": "あるく",
        "kanji_options": [
          "会う",
          "歩く",
          "帰る",
          "書く"
        ],
        "hira_options": [
          "あう",
          "あるく",
          "かえる",
          "かく"
        ],
        "romaji": "aruku",
        "vi_meaning": "đi bộ"
      },
      {
        "id": "topic_09_verbs_adj_176",
        "num": 176,
        "sentence_hira": "すずきさんは <u>ねる</u> を/が 探しています。",
        "sentence_kanji": "すずきさんは <u>寝る</u> を/が 探しています。",
        "kanji_target": "寝る",
        "hira_target": "ねる",
        "kanji_options": [
          "遊ぶ",
          "楽しい",
          "寝る",
          "泳ぐ"
        ],
        "hira_options": [
          "あそぶ",
          "たのしい",
          "ねる",
          "およぐ"
        ],
        "romaji": "neru",
        "vi_meaning": "ngủ"
      },
      {
        "id": "topic_09_verbs_adj_177",
        "num": 177,
        "sentence_hira": "すずきさんは <u>おきる</u> を/が 探しています。",
        "sentence_kanji": "すずきさんは <u>起きる</u> を/が 探しています。",
        "kanji_target": "起きる",
        "hira_target": "おきる",
        "kanji_options": [
          "遊ぶ",
          "起きる",
          "寝る",
          "書く"
        ],
        "hira_options": [
          "あそぶ",
          "おきる",
          "ねる",
          "かく"
        ],
        "romaji": "okiru",
        "vi_meaning": "thức dậy"
      },
      {
        "id": "topic_09_verbs_adj_178",
        "num": 178,
        "sentence_hira": "すずきさんは <u>わすれる</u> を/が 探しています。",
        "sentence_kanji": "すずきさんは <u>忘れる</u> を/が 探しています。",
        "kanji_target": "忘れる",
        "hira_target": "わすれる",
        "kanji_options": [
          "静かな",
          "会う",
          "忘れる",
          "小さい"
        ],
        "hira_options": [
          "しずかな",
          "あう",
          "わすれる",
          "ちいさい"
        ],
        "romaji": "wasureru",
        "vi_meaning": "quên"
      },
      {
        "id": "topic_09_verbs_adj_179",
        "num": 179,
        "sentence_hira": "すずきさんは <u>おぼえる</u> を/が 探しています。",
        "sentence_kanji": "すずきさんは <u>覚える</u> を/が 探しています。",
        "kanji_target": "覚える",
        "hira_target": "おぼえる",
        "kanji_options": [
          "助ける",
          "飲む",
          "覚える",
          "書く"
        ],
        "hira_options": [
          "たすける",
          "のむ",
          "おぼえる",
          "かく"
        ],
        "romaji": "oboeru",
        "vi_meaning": "nhớ/học thuộc"
      },
      {
        "id": "topic_09_verbs_adj_180",
        "num": 180,
        "sentence_hira": "すずきさんは <u>たすける</u> を/が 探しています。",
        "sentence_kanji": "すずきさんは <u>助ける</u> を/が 探しています。",
        "kanji_target": "助ける",
        "hira_target": "たすける",
        "kanji_options": [
          "助ける",
          "小さい",
          "起きる",
          "面白い"
        ],
        "hira_options": [
          "たすける",
          "ちいさい",
          "おきる",
          "おもしろい"
        ],
        "romaji": "tasukeru",
        "vi_meaning": "giúp đỡ"
      },
      {
        "id": "topic_09_verbs_adj_181",
        "num": 181,
        "sentence_hira": "すずきさんは <u>まにあう</u> を/が 探しています。",
        "sentence_kanji": "すずきさんは <u>間に合う</u> を/が 探しています。",
        "kanji_target": "間に合う",
        "hira_target": "まにあう",
        "kanji_options": [
          "泳ぐ",
          "間に合う",
          "大きい",
          "読む"
        ],
        "hira_options": [
          "およぐ",
          "まにあう",
          "おおきい",
          "よむ"
        ],
        "romaji": "maniau",
        "vi_meaning": "kịp giờ"
      },
      {
        "id": "topic_09_verbs_adj_182",
        "num": 182,
        "sentence_hira": "すずきさんは <u>おくれる</u> を/が 探しています。",
        "sentence_kanji": "すずきさんは <u>遅れる</u> を/が 探しています。",
        "kanji_target": "遅れる",
        "hira_target": "おくれる",
        "kanji_options": [
          "走る",
          "間に合う",
          "遅れる",
          "寝る"
        ],
        "hira_options": [
          "はしる",
          "まにあう",
          "おくれる",
          "ねる"
        ],
        "romaji": "okureru",
        "vi_meaning": "trễ/trễ giờ"
      },
      {
        "id": "topic_09_verbs_adj_183",
        "num": 183,
        "sentence_hira": "すずきさんは <u>おおきい</u> を/が 探しています。",
        "sentence_kanji": "すずきさんは <u>大きい</u> を/が 探しています。",
        "kanji_target": "大きい",
        "hira_target": "おおきい",
        "kanji_options": [
          "静かな",
          "大きい",
          "買う",
          "助ける"
        ],
        "hira_options": [
          "しずかな",
          "おおきい",
          "かう",
          "たすける"
        ],
        "romaji": "ookii",
        "vi_meaning": "to lớn"
      },
      {
        "id": "topic_09_verbs_adj_184",
        "num": 184,
        "sentence_hira": "すずきさんは <u>ちいさい</u> を/が 探しています。",
        "sentence_kanji": "すずきさんは <u>小さい</u> を/が 探しています。",
        "kanji_target": "小さい",
        "hira_target": "ちいさい",
        "kanji_options": [
          "小さい",
          "間に合う",
          "買う",
          "大きい"
        ],
        "hira_options": [
          "ちいさい",
          "まにあう",
          "かう",
          "おおきい"
        ],
        "romaji": "chiisai",
        "vi_meaning": "nhỏ bé"
      },
      {
        "id": "topic_09_verbs_adj_185",
        "num": 185,
        "sentence_hira": "すずきさんは <u>あたらしい</u> を/が 探しています。",
        "sentence_kanji": "すずきさんは <u>新しい</u> を/が 探しています。",
        "kanji_target": "新しい",
        "hira_target": "あたらしい",
        "kanji_options": [
          "面白い",
          "面白い",
          "新しい",
          "話す"
        ],
        "hira_options": [
          "おもしろい",
          "おもしろい",
          "あたらしい",
          "はなす"
        ],
        "romaji": "atarashii",
        "vi_meaning": "mới"
      },
      {
        "id": "topic_09_verbs_adj_186",
        "num": 186,
        "sentence_hira": "すずきさんは <u>ふるい</u> を/が 探しています。",
        "sentence_kanji": "すずきさんは <u>古い</u> を/が 探しています。",
        "kanji_target": "古い",
        "hira_target": "ふるい",
        "kanji_options": [
          "古い",
          "走る",
          "話す",
          "売る"
        ],
        "hira_options": [
          "ふるい",
          "はしる",
          "はなす",
          "うる"
        ],
        "romaji": "furui",
        "vi_meaning": "cũ"
      },
      {
        "id": "topic_09_verbs_adj_187",
        "num": 187,
        "sentence_hira": "すずきさんは <u>たかい</u> を/が 探しています。",
        "sentence_kanji": "すずきさんは <u>高い</u> を/が 探しています。",
        "kanji_target": "高い",
        "hira_target": "たかい",
        "kanji_options": [
          "小さい",
          "高い",
          "書く",
          "飲む"
        ],
        "hira_options": [
          "ちいさい",
          "たかい",
          "かく",
          "のむ"
        ],
        "romaji": "takai",
        "vi_meaning": "cao/đắt"
      },
      {
        "id": "topic_09_verbs_adj_188",
        "num": 188,
        "sentence_hira": "すずきさんは <u>やすい</u> を/が 探しています。",
        "sentence_kanji": "すずきさんは <u>安い</u> を/が 探しています。",
        "kanji_target": "安い",
        "hira_target": "やすい",
        "kanji_options": [
          "静かな",
          "間に合う",
          "安い",
          "遅れる"
        ],
        "hira_options": [
          "しずかな",
          "まにあう",
          "やすい",
          "おくれる"
        ],
        "romaji": "yasui",
        "vi_meaning": "rẻ"
      },
      {
        "id": "topic_09_verbs_adj_189",
        "num": 189,
        "sentence_hira": "すずきさんは <u>いそがしい</u> を/が 探しています。",
        "sentence_kanji": "すずきさんは <u>忙しい</u> を/が 探しています。",
        "kanji_target": "忙しい",
        "hira_target": "いそがしい",
        "kanji_options": [
          "食べる",
          "忙しい",
          "泳ぐ",
          "忘れる"
        ],
        "hira_options": [
          "たべる",
          "いそがしい",
          "およぐ",
          "わすれる"
        ],
        "romaji": "isogashii",
        "vi_meaning": "bận rộn"
      },
      {
        "id": "topic_09_verbs_adj_190",
        "num": 190,
        "sentence_hira": "すずきさんは <u>たのしい</u> を/が 探しています。",
        "sentence_kanji": "すずきさんは <u>楽しい</u> を/が 探しています。",
        "kanji_target": "楽しい",
        "hira_target": "たのしい",
        "kanji_options": [
          "行く",
          "楽しい",
          "来る",
          "助ける"
        ],
        "hira_options": [
          "いく",
          "たのしい",
          "くる",
          "たすける"
        ],
        "romaji": "tanoshii",
        "vi_meaning": "vui vẻ"
      },
      {
        "id": "topic_09_verbs_adj_191",
        "num": 191,
        "sentence_hira": "すずきさんは <u>おもしろい</u> を/が 探しています。",
        "sentence_kanji": "すずきさんは <u>面白い</u> を/が 探しています。",
        "kanji_target": "面白い",
        "hira_target": "おもしろい",
        "kanji_options": [
          "買う",
          "忘れる",
          "親切な",
          "面白い"
        ],
        "hira_options": [
          "かう",
          "わすれる",
          "しんせつな",
          "おもしろい"
        ],
        "romaji": "omoshiroi",
        "vi_meaning": "thú vị"
      },
      {
        "id": "topic_09_verbs_adj_192",
        "num": 192,
        "sentence_hira": "すずきさんは <u>むずかしい</u> を/が 探しています。",
        "sentence_kanji": "すずきさんは <u>難しい</u> を/が 探しています。",
        "kanji_target": "難しい",
        "hira_target": "むずかしい",
        "kanji_options": [
          "泳ぐ",
          "間に合う",
          "難しい",
          "売る"
        ],
        "hira_options": [
          "およぐ",
          "まにあう",
          "むずかしい",
          "うる"
        ],
        "romaji": "muzukashii",
        "vi_meaning": "khó"
      },
      {
        "id": "topic_09_verbs_adj_193",
        "num": 193,
        "sentence_hira": "すずきさんは <u>やさしい</u> を/が 探しています。",
        "sentence_kanji": "すずきさんは <u>易しい</u> を/が 探しています。",
        "kanji_target": "易しい",
        "hira_target": "やさしい",
        "kanji_options": [
          "新しい",
          "易しい",
          "歩く",
          "助ける"
        ],
        "hira_options": [
          "あたらしい",
          "やさしい",
          "あるく",
          "たすける"
        ],
        "romaji": "yasashii",
        "vi_meaning": "dễ"
      },
      {
        "id": "topic_09_verbs_adj_194",
        "num": 194,
        "sentence_hira": "すずきさんは <u>しんせつな</u> を/が 探しています。",
        "sentence_kanji": "すずきさんは <u>親切な</u> を/が 探しています。",
        "kanji_target": "親切な",
        "hira_target": "しんせつな",
        "kanji_options": [
          "呼ぶ",
          "新しい",
          "待つ",
          "親切な"
        ],
        "hira_options": [
          "よぶ",
          "あたらしい",
          "まつ",
          "しんせつな"
        ],
        "romaji": "shinsetsu",
        "vi_meaning": "tốt bụng"
      },
      {
        "id": "topic_09_verbs_adj_195",
        "num": 195,
        "sentence_hira": "すずきさんは <u>しずかな</u> を/が 探しています。",
        "sentence_kanji": "すずきさんは <u>静かな</u> を/が 探しています。",
        "kanji_target": "静かな",
        "hira_target": "しずかな",
        "kanji_options": [
          "静かな",
          "遅れる",
          "会う",
          "書く"
        ],
        "hira_options": [
          "しずかな",
          "おくれる",
          "あう",
          "かく"
        ],
        "romaji": "shizuka",
        "vi_meaning": "yên tĩnh"
      },
      {
        "id": "topic_09_verbs_adj_196",
        "num": 196,
        "sentence_hira": "すずきさんは <u>いく</u> を/が 探しています。",
        "sentence_kanji": "すずきさんは <u>行く</u> を/が 探しています。",
        "kanji_target": "行く",
        "hira_target": "いく",
        "kanji_options": [
          "行く",
          "歩く",
          "大きい",
          "間に合う"
        ],
        "hira_options": [
          "いく",
          "あるく",
          "おおきい",
          "まにあう"
        ],
        "romaji": "iku",
        "vi_meaning": "đi"
      },
      {
        "id": "topic_09_verbs_adj_197",
        "num": 197,
        "sentence_hira": "すずきさんは <u>くる</u> を/が 探しています。",
        "sentence_kanji": "すずきさんは <u>来る</u> を/が 探しています。",
        "kanji_target": "来る",
        "hira_target": "くる",
        "kanji_options": [
          "親切な",
          "食べる",
          "来る",
          "読む"
        ],
        "hira_options": [
          "しんせつな",
          "たべる",
          "くる",
          "よむ"
        ],
        "romaji": "kuru",
        "vi_meaning": "đến"
      },
      {
        "id": "topic_09_verbs_adj_198",
        "num": 198,
        "sentence_hira": "すずきさんは <u>かえる</u> を/が 探しています。",
        "sentence_kanji": "すずきさんは <u>帰る</u> を/が 探しています。",
        "kanji_target": "帰る",
        "hira_target": "かえる",
        "kanji_options": [
          "会う",
          "帰る",
          "親切な",
          "親切な"
        ],
        "hira_options": [
          "あう",
          "かえる",
          "しんせつな",
          "しんせつな"
        ],
        "romaji": "kaeru",
        "vi_meaning": "trở về"
      },
      {
        "id": "topic_09_verbs_adj_199",
        "num": 199,
        "sentence_hira": "すずきさんは <u>たべる</u> を/が 探しています。",
        "sentence_kanji": "すずきさんは <u>食べる</u> を/が 探しています。",
        "kanji_target": "食べる",
        "hira_target": "たべる",
        "kanji_options": [
          "食べる",
          "面白い",
          "遊ぶ",
          "行く"
        ],
        "hira_options": [
          "たべる",
          "おもしろい",
          "あそぶ",
          "いく"
        ],
        "romaji": "taberu",
        "vi_meaning": "ăn"
      },
      {
        "id": "topic_09_verbs_adj_200",
        "num": 200,
        "sentence_hira": "すずきさんは <u>のむ</u> を/が 探しています。",
        "sentence_kanji": "すずきさんは <u>飲む</u> を/が 探しています。",
        "kanji_target": "飲む",
        "hira_target": "のむ",
        "kanji_options": [
          "飲む",
          "親切な",
          "歩く",
          "楽しい"
        ],
        "hira_options": [
          "のむ",
          "しんせつな",
          "あるく",
          "たのしい"
        ],
        "romaji": "nomu",
        "vi_meaning": "uống"
      },
      {
        "id": "topic_09_verbs_adj_201",
        "num": 201,
        "sentence_hira": "すずきさんは <u>みる</u> を/が 探しています。",
        "sentence_kanji": "すずきさんは <u>見る</u> を/が 探しています。",
        "kanji_target": "見る",
        "hira_target": "みる",
        "kanji_options": [
          "高い",
          "覚える",
          "見る",
          "食べる"
        ],
        "hira_options": [
          "たかい",
          "おぼえる",
          "みる",
          "たべる"
        ],
        "romaji": "miru",
        "vi_meaning": "nhìn/xem"
      },
      {
        "id": "topic_09_verbs_adj_202",
        "num": 202,
        "sentence_hira": "すずきさんは <u>きく</u> を/が 探しています。",
        "sentence_kanji": "すずきさんは <u>聞く</u> を/が 探しています。",
        "kanji_target": "聞く",
        "hira_target": "きく",
        "kanji_options": [
          "来る",
          "大きい",
          "難しい",
          "聞く"
        ],
        "hira_options": [
          "くる",
          "おおきい",
          "むずかしい",
          "きく"
        ],
        "romaji": "kiku",
        "vi_meaning": "nghe/hỏi"
      }
    ]
  },
  {
    "id": "topic_all_random",
    "name": "10. 🎯 Đề Thi Tổng Hợp Toàn Bộ N4 (Thử Thách Chuỗi 20 Câu)",
    "icon": "🏆",
    "desc": "Xáo trộn ngẫu nhiên toàn bộ 1402 câu hỏi N4 để kiểm tra",
    "questions": []
  }
];

// Tự động gộp tất cả câu hỏi vào Topic 10
(function initAllTopicQuiz() {
  const allTopic = N4_QUIZ_TOPICS.find(t => t.id === 'topic_all_random');
  if (allTopic) {
    const allQ = [];
    N4_QUIZ_TOPICS.forEach(t => {
      if (t.id !== 'topic_all_random' && t.questions) {
        allQ.push(...t.questions);
      }
    });
    allTopic.questions = allQ;
  }
})();

if (typeof window !== 'undefined') {
  window.N4_QUIZ_TOPICS = N4_QUIZ_TOPICS;
}
if (typeof module !== 'undefined') {
  module.exports = { N4_QUIZ_TOPICS };
}
