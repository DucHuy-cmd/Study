/* =========================================================================
   TOEIC THEORY DATASET - UNIT 5: PART 5 SIMPLE SENTENCES AND NOUNS
   Giáo trình chuẩn AGENA English Center
   ========================================================================= */

var TOEIC_THEORY_UNITS = [
  {
    id: "unit_5_simple_sentences_and_nouns",
    code: "Unit 5",
    title: "Unit 5: Câu Đơn & Danh Từ",
    subtitle: "Simple Sentences and Nouns (Part 5)",
    badge: "Ngữ pháp cốt lõi",
    icon: "📖",
    description: "Nắm vững 3 mẫu câu đơn, phân biệt nội/ngoại động từ, các đuôi danh từ chỉ người/vật, cụm danh từ và vị trí danh từ trong đề thi TOEIC Part 5.",
    
    // 1. FLASHCARDS LÝ THUYẾT 3D (11 QUY TẮC CỐT LÕI)
    flashcards: [
      {
        id: "fc_1",
        num: 1,
        category: "Mẫu câu đơn",
        title: "3 Mẫu Câu Đơn Cơ Bản",
        question: "3 mẫu câu đơn chính trong tiếng Anh gồm những cấu trúc nào?",
        summary: "S + Vnội | S + Vngoại + O | S + Vlinking + Miêu tả",
        details: [
          "<strong>Mẫu 1:</strong> <code>S + V_nội</code> (Kể về hành động của bản thân chủ thể) → Ví dụ: <em>I sleep.</em> / <em>An employee interprets.</em>",
          "<strong>Mẫu 2:</strong> <code>S + V_ngoại + O</code> (Kể về hành động tác động lên đối tượng khác) → Ví dụ: <em>My mother made a cake.</em> / <em>The staff evaluates the report.</em>",
          "<strong>Mẫu 3:</strong> <code>S + V_linking + Phần miêu tả</code> (Miêu tả đặc điểm, nghề nghiệp, trạng thái) → Ví dụ: <em>The girl is attractive.</em> / <em>The document is a report.</em>"
        ],
        tip: "V_linking thường gặp nhất: be (am/is/are/was/were), look, seem, become, feel, remain... Theo sau là Tính từ (Adj) hoặc Cụm danh từ miêu tả."
      },
      {
        id: "fc_2",
        num: 2,
        category: "Nội/Ngoại động từ",
        title: "Phân Biệt Nội Động Từ & Ngoại Động Từ",
        question: "Làm thế nào để phân biệt Nội động từ (Intransitive) và Ngoại động từ (Transitive)?",
        summary: "V_nội: tác động lên bản thân | V_ngoại: tác động lên đối tượng khác (O)",
        details: [
          "<strong>Intransitive Verb (V_nội):</strong> Hành động do chủ thể tự thực hiện, <em>KHÔNG cần tân ngữ</em> đi sau. Ví dụ: <em>I slept at 9 pm.</em> / <em>I walked to his house.</em>",
          "<strong>Transitive Verb (V_ngoại):</strong> Hành động <em>bắt buộc tác động lên đối tượng khác (O)</em>. Ví dụ: <em>I eat pizza.</em> / <em>I bought an iPhone yesterday.</em>",
          "<strong>Động từ linh hoạt:</strong> Rất nhiều từ vừa là V_nội vừa là V_ngoại tùy ngữ cảnh: <em>I eat a lot (nội)</em> vs <em>I eat meat (ngoại)</em>; <em>He plays in the garden (nội)</em> vs <em>He plays football (ngoại)</em>."
        ],
        tip: "Mẹo nhận diện: Gắn chữ 'bị' hoặc 'được' vào động từ; nếu câu hỏi có nghĩa rõ ràng ('được nộp', 'được duyệt') thì đó là Ngoại động từ."
      },
      {
        id: "fc_3",
        num: 3,
        category: "Đuôi danh từ",
        title: "7 Đuôi Danh Từ Chỉ Người Cực Hay Gặp",
        question: "Những hậu tố (đuôi từ) nào nhận biết một từ là Danh từ chỉ NGƯỜI?",
        summary: "-ee, -er, -or, -ant, -ist, -yst, -ian",
        details: [
          "<code>-ee</code>: <em>employee</em> (nhân viên), <em>trainee</em> (người thực tập)",
          "<code>-er</code>: <em>manager</em> (người quản lý), <em>worker</em> (công nhân)",
          "<code>-or</code>: <em>instructor</em> (người hướng dẫn), <em>supervisor</em> (người giám sát)",
          "<code>-ant</code>: <em>assistant</em> (trợ lý), <em>accountant</em> (kế toán viên)",
          "<code>-ist</code>: <em>specialist</em> (chuyên gia), <em>receptionist</em> (nhân viên lễ tân)",
          "<code>-yst</code>: <em>analyst</em> (nhà phân tích)",
          "<code>-ian</code>: <em>technician</em> (kỹ thuật viên), <em>musician</em> (nhạc sĩ)"
        ],
        tip: "QUY TẮC VÀNG: Danh từ chỉ người LUÔN LUÔN đếm được! Ở dạng số ít bắt buộc phải có mạo từ (a/an/the) hoặc tính từ sở hữu phía trước."
      },
      {
        id: "fc_4",
        num: 4,
        category: "Đuôi danh từ",
        title: "7 Đuôi Danh Từ Chỉ VẬT Thông Dụng",
        question: "Những hậu tố nào giúp bạn nhận diện Danh từ chỉ VẬT hoặc SỰ VIỆC?",
        summary: "-ion, -ment, -ness, -sis, -ce, -ity, -ism",
        details: [
          "<code>-ion</code>: <em>action, confirmation, registration, notification, decision</em>",
          "<code>-ment</code>: <em>agreement, management, equipment, development, document</em>",
          "<code>-ness</code>: <em>business, happiness, awareness, effectiveness</em>",
          "<code>-sis</code>: <em>analysis, basis, diagnosis</em>",
          "<code>-ce / -ance / -ence</code>: <em>attendance, difference, conference, patience</em>",
          "<code>-ity</code>: <em>priority, security, availability, productivity</em>",
          "<code>-ism</code>: <em>criticism, optimism, tourism</em>"
        ],
        tip: "Gặp bài tập Part 5 khuyết danh từ chỉ sự việc, cứ tìm các đuôi -ion, -ment, -ance/-ence, -ity là khoanh nhanh trong 3 giây!"
      },
      {
        id: "fc_5",
        num: 5,
        category: "Bẫy từ loại",
        title: "Đuôi -al Đặc Biệt: Đừng Nhầm Là Tính Từ!",
        question: "Những từ có đuôi -al nào thực chất là DANH TỪ?",
        summary: "proposal, approval, renewal, arrival, denial, disposal",
        details: [
          "<strong>Nhóm CHỈ là Danh từ (Hay ra bẫy nhất):</strong>",
          "• <code>proposal</code> (n): bản đề xuất",
          "• <code>approval</code> (n): sự chấp thuận, phê duyệt",
          "• <code>renewal</code> (n): sự gia hạn hợp đồng/giấy phép",
          "• <code>arrival</code> (n): sự đến nơi",
          "• <code>denial</code> (n): sự từ chối",
          "• <code>disposal</code> (n): sự vứt bỏ, xử lý rác",
          "<strong>Nhóm VỪA là Danh từ, VỪA là Tính từ:</strong>",
          "• <code>professional</code>: chuyên gia (n) / chuyên nghiệp (adj)",
          "• <code>individual</code>: cá nhân (n) / riêng lẻ (adj)",
          "• <code>official</code>: quan chức (n) / chính thức (adj)"
        ],
        tip: "Mẹo thi Part 5: Thấy đứng sau tính từ hoặc mạo từ (a/an/the) mà có 'approval' hay 'proposal' thì đó là Danh từ chính xác 100%."
      },
      {
        id: "fc_6",
        num: 6,
        category: "Bẫy từ loại",
        title: "Đuôi -ive Đặc Biệt Vừa Là Noun Vừa Là Adj",
        question: "Những từ đuôi -ive nào hay đóng vai trò là DANH TỪ trong bài thi TOEIC?",
        summary: "representative, alternative, initiative, relative, objective",
        details: [
          "• <code>representative</code>: người đại diện (n) / mang tính đại diện (adj)",
          "• <code>alternative</code>: phương án thay thế (n) / có thể thay thế (adj)",
          "• <code>initiative</code>: sáng kiến, kế hoạch mới (n)",
          "• <code>relative</code>: người thân, họ hàng (n) / tương đối (adj)",
          "• <code>objective</code>: mục tiêu (n) / khách quan (adj)"
        ],
        tip: "Đặc biệt chú ý <em>'representative'</em> (chỉ người) và <em>'initiative'</em> (sáng kiến) - xuất hiện với tần suất cực cao trong Part 5 & Part 7."
      },
      {
        id: "fc_7",
        num: 7,
        category: "Cụm danh từ",
        title: "Cấu Trúc Cụm Danh Từ (Noun Phrase Formula)",
        question: "Công thức đầy đủ của một Cụm danh từ trong tiếng Anh là gì?",
        summary: "[Mạo từ / TTSH / Hạn định từ] + ADV + ADJ + N (chính)",
        details: [
          "<strong>Công thức chuẩn:</strong> <code>[MT / TTSH / Hạn định từ] + (Adv) + (Adj) + NOUN CHÍNH</code>",
          "<strong>Ví dụ mẫu:</strong> <em>An</em> (Mạo từ) + <em>extremely</em> (Adv) + <em>beautiful</em> (Adj) + <em>actress</em> (N chính)",
          "<strong>Dạng bài hay gặp trong Part 5:</strong>",
          "1. <code>MT / TTSH + Adj + [ ...... ]</code> → Cần điền một <strong>Danh từ</strong>.",
          "2. <code>MT / TTSH + [ ...... ] + N</code> → Cần điền một <strong>Tính từ</strong>.",
          "3. <code>MT / TTSH + [ ...... ] + Adj + N</code> → Cần điền một <strong>Trạng từ (Adv)</strong>."
        ],
        tip: "Tính từ KHÔNG bao giờ đứng liền sau danh từ để bổ nghĩa, mà luôn đứng TRƯỚC danh từ trong cụm N."
      },
      {
        id: "fc_8",
        num: 8,
        category: "Kỹ năng dịch",
        title: "Quy Tắc Dịch Câu & Dịch Cụm Danh Từ Chuẩn",
        question: "3 bước dịch câu cơ bản và thứ tự dịch cụm danh từ như thế nào?",
        summary: "Câu dịch Trái → Phải | Cụm N dịch Phải → Trái (từ N cuối)",
        details: [
          "<strong>Bước 1:</strong> Xác định S, V, O trong câu. Tìm Động từ chính (thường có đuôi -s/es hoặc -ed, hoặc trợ động từ).",
          "<strong>Bước 2:</strong> Dịch tổng thể câu theo chiều từ <strong>Trái sang Phải</strong> (Chủ ngữ → Động từ → Tân ngữ).",
          "<strong>Bước 3:</strong> Khi gặp Cụm danh từ, dịch ngược từ <strong>Phải sang Trái</strong> (dịch Danh từ cuối cụm trước, sau đó dịch ngược các từ bổ nghĩa).",
          "<em>Ví dụ:</em> <code>the detailed financial analysis report</code> → dịch <code>report</code> (báo cáo) → <code>analysis</code> (phân tích) → <code>financial</code> (tài chính) → <code>detailed</code> (chi tiết)."
        ],
        tip: "Dịch nhanh Part 7: Nếu thời gian gấp, chỉ cần nhìn Danh từ đứng cuối cụm N là hiểu được 80% ý nghĩa của cả cụm."
      },
      {
        id: "fc_9",
        num: 9,
        category: "Phân loại danh từ",
        title: "Danh Từ Chỉ Người vs Danh Từ Chỉ Vật",
        question: "Tại sao trong TOEIC phải phân biệt Danh từ chỉ người và Danh từ chỉ vật?",
        summary: "N người luôn đếm được | Dùng để chọn đại từ quan hệ (who vs which)",
        details: [
          "<strong>Danh từ chỉ Người:</strong> <em>staff, employee, manager, instructor, representative, candidate, customer...</em>",
          "<strong>Danh từ chỉ Vật/Sự việc:</strong> <em>brochure, goal, permit, equipment, document, system, proposal...</em>",
          "<strong>Ứng dụng giải đề Part 5:</strong>",
          "1. Phía trước có mạo từ 'a/an' + chỉ vị trí công việc → chọn N người.",
          "2. Mệnh đề quan hệ: N người đi với <code>who / whom</code>; N vật đi với <code>which / that</code>.",
          "3. Ngữ cảnh hành động: Ký hợp đồng, phê duyệt, đàm phán → thường chủ ngữ là N người."
        ],
        tip: "Staff (đội ngũ nhân viên) là danh từ tập hợp chỉ người. Permit (giấy phép) là N vật, còn Người cấp phép là Permitter."
      },
      {
        id: "fc_10",
        num: 10,
        category: "Ngữ pháp danh từ",
        title: "Danh Từ Đếm Được vs Không Đếm Được",
        question: "Sự khác biệt ngữ pháp giữa Danh từ đếm được và Không đếm được là gì?",
        summary: "Đếm được: có số ít/nhiều | Không đếm được: không dùng a/an, luôn chia số ít",
        details: [
          "<strong>Danh từ đếm được (Countable):</strong>",
          "• Số ít: Bắt buộc có mạo từ/tính từ sở hữu: <em>a book, an employee, the brochure, my task</em>. KHÔNG BAO GIỜ đứng trơ trọi một mình!",
          "• Số nhiều: Thêm -s/es: <em>two books, several employees, tasks</em>. Động từ chia số nhiều (are, have, V_0).",
          "<strong>Danh từ không đếm được (Uncountable - CỰC KỲ QUAN TRỌNG):</strong>",
          "• <em>Information</em> (thông tin), <em>Equipment</em> (thiết bị), <em>Knowledge</em> (kiến thức), <em>Progress</em> (tiến độ), <em>Luggage/Baggage</em> (hành lý), <em>Furniture</em> (nội thất).",
          "• KHÔNG dùng mạo từ <code>a / an</code>, KHÔNG thêm <code>-s/es</code>.",
          "• Động từ theo sau LUÔN chia ở số ít: <code>is / was / has / V_s/es</code>."
        ],
        tip: "Tuyệt đối không bao giờ chọn <s>an information</s> hay <s>equipments</s> trong đề thi TOEIC!"
      },
      {
        id: "fc_11",
        num: 11,
        category: "Vị trí danh từ",
        title: "6 Vị Trí Vàng Của Danh Từ Trong Đề Thi TOEIC",
        question: "Danh từ xuất hiện ở những vị trí nào trong câu hỏi Part 5?",
        summary: "Đầu câu (S), sau V (O), sau Giới từ, sau TTSH, sau Mạo từ, sau Adj",
        details: [
          "1. <strong>Làm Chủ ngữ (S):</strong> Đứng đầu câu trước động từ chính. Ví dụ: <code>[Attendance]</code> is required.",
          "2. <strong>Làm Tân ngữ (O):</strong> Đứng sau ngoại động từ. Ví dụ: Review the <code>[contract]</code>.",
          "3. <strong>Đứng sau Giới từ (Prep):</strong> in, on, at, for, with, about... Ví dụ: In the <code>[office]</code>.",
          "4. <strong>Đứng sau Tính từ sở hữu:</strong> my, your, his, her, its, our, their. Ví dụ: His management <code>[position]</code>.",
          "5. <strong>Đứng sau Mạo từ / Hạn định từ:</strong> a, an, the, this, that, each, every. Ví dụ: A <code>[proposal]</code> will be sent.",
          "6. <strong>Đứng sau Tính từ bổ nghĩa:</strong> Adj + <code>[ NOUN ]</code>. Ví dụ: Successful <code>[project]</code>."
        ],
        tip: "Công thức phản xạ 5 giây: Nhìn trước ô trống thấy Mạo từ / Giới từ / TTSH / Adj mà phía sau chưa có Noun → Chọn ngay đáp án là Danh từ!"
      }
    ],

    // 2. TỔNG HỢP TOÀN BỘ 9 BÀI TẬP (EXERCISE 01 -> 09) THỰC HÀNH TƯƠNG TÁC
    exercises: [
      // EXERCISE 01: Vị trí & Từ loại
      {
        id: "ex1_1",
        exerciseNumber: "Exercise 01",
        topic: "Từ loại trong câu đơn",
        prompt: "Vị trí <strong>Chủ ngữ (Subject - S)</strong> trong câu đơn thường do từ loại nào đảm nhận?",
        options: ["Danh từ (N) hoặc Đại từ (Pronoun)", "Chỉ có Tính từ (Adj)", "Trạng từ (Adv)", "Liên từ (Conjunction)"],
        answer: 0,
        explanation: "Chủ ngữ (S) là chủ thể thực hiện hành động hoặc là đối tượng được miêu tả, do Danh từ (N) hoặc Đại từ (Pronoun) đảm nhận."
      },
      {
        id: "ex1_2",
        exerciseNumber: "Exercise 01",
        topic: "Từ loại trong câu đơn",
        prompt: "Vị trí <strong>Tân ngữ (Object - O)</strong> trong câu đơn do từ loại nào đảm nhận?",
        options: ["Tính từ (Adj)", "Danh từ (N) hoặc Đại từ (Pronoun)", "Trạng từ chỉ tần suất", "Động từ nguyên mẫu có to"],
        answer: 1,
        explanation: "Tân ngữ (O) là đối tượng chịu tác động của ngoại động từ, thường là Danh từ (N) hoặc Đại từ làm tân ngữ (me, him, them...)."
      },
      {
        id: "ex1_3",
        exerciseNumber: "Exercise 01",
        topic: "Từ loại trong câu đơn",
        prompt: "Vị trí <strong>Phần miêu tả</strong> (đứng sau Động từ nối - Linking Verb) thường do từ loại nào đảm nhận?",
        options: ["Tính từ (Adj) hoặc Danh từ (N)", "Trạng từ (Adv)", "Giới từ (Preposition)", "Động từ khiếm khuyết"],
        answer: 0,
        explanation: "Phần miêu tả sau Linking Verb có thể là Tính từ (Adj - miêu tả đặc điểm: The girl is attractive) hoặc Cụm danh từ (N - miêu tả danh tính/nghề nghiệp: The girl is a singer)."
      },

      // EXERCISE 02: Dịch câu & Xác định thành phần
      {
        id: "ex2_1",
        exerciseNumber: "Exercise 02",
        topic: "Xác định thành phần câu",
        prompt: "Phân tích câu: <em>'The representative is impressive.'</em> (Người đại diện thì ấn tượng). Câu này thuộc mẫu câu nào?",
        options: [
          "S + V_linking + Phần miêu tả (Adj) — Dùng để miêu tả",
          "S + V_nội — Dùng để kể hành động",
          "S + V_ngoại + O — Dùng để kể hành động",
          "Câu bị động Participle"
        ],
        answer: 0,
        explanation: "'The representative' là S, 'is' là Linking Verb, 'impressive' là Tính từ miêu tả chủ ngữ. Mục đích của câu là miêu tả."
      },
      {
        id: "ex2_2",
        exerciseNumber: "Exercise 02",
        topic: "Xác định thành phần câu",
        prompt: "Phân tích câu: <em>'An employee interprets.'</em> (Một nhân viên đang phiên dịch). Câu này thuộc mẫu câu nào?",
        options: [
          "S + V_nội (Kể về hành động của chủ thể, không cần tân ngữ)",
          "S + V_ngoại + O",
          "S + V_linking + Adj",
          "S + V + O + O (Hai tân ngữ)"
        ],
        answer: 0,
        explanation: "'An employee' là S, 'interprets' là Nội động từ (V_nội). Câu chỉ có chủ ngữ và động từ, kể về hành động của nhân viên."
      },
      {
        id: "ex2_3",
        exerciseNumber: "Exercise 02",
        topic: "Xác định thành phần câu",
        prompt: "Phân tích câu: <em>'The staff evaluates the report.'</em> (Nhân viên đánh giá bản báo cáo). Thành phần 'the report' đóng vai trò gì?",
        options: [
          "Tân ngữ (Object - O) chịu tác động của ngoại động từ 'evaluates'",
          "Chủ ngữ (Subject)",
          "Phần miêu tả (Complement)",
          "Trạng ngữ chỉ nơi chốn"
        ],
        answer: 0,
        explanation: "Cấu trúc câu là: S (The staff) + V_ngoại (evaluates) + O (the report). 'The report' là tân ngữ chịu tác động của hành động đánh giá."
      },
      {
        id: "ex2_4",
        exerciseNumber: "Exercise 02",
        topic: "Xác định thành phần câu",
        prompt: "Câu <em>'The document is a report.'</em> (Tài liệu này là một bản báo cáo) dùng để làm gì?",
        options: [
          "Dùng để miêu tả danh tính/bản chất của chủ ngữ (S + V_linking + N)",
          "Dùng để kể về hành động",
          "Dùng để yêu cầu người khác làm gì",
          "Dùng để chỉ hành động bị động"
        ],
        answer: 0,
        explanation: "'The document' (S) + 'is' (V_linking) + 'a report' (Phần miêu tả dạng Danh từ). Câu dùng để miêu tả tài liệu này chính là một bản báo cáo."
      },

      // EXERCISE 03: Phân biệt Nội động từ & Ngoại động từ
      {
        id: "ex3_1",
        exerciseNumber: "Exercise 03",
        topic: "Nội động từ vs Ngoại động từ",
        prompt: "Động từ <strong>'Submit'</strong> (nộp, đệ trình) là loại động từ nào?",
        options: [
          "Ngoại động từ (Transitive Verb) — Bắt buộc phải có tân ngữ (Submit what?)",
          "Nội động từ (Intransitive Verb)",
          "Động từ nối (Linking Verb)",
          "Chỉ làm trợ động từ"
        ],
        answer: 0,
        explanation: "Submit luôn cần một đối tượng phía sau: Submit a report, submit an application... Không thể nói 'I submit' mà không có tân ngữ."
      },
      {
        id: "ex3_2",
        exerciseNumber: "Exercise 03",
        topic: "Nội động từ vs Ngoại động từ",
        prompt: "Động từ <strong>'Increase'</strong> (tăng, tăng lên) là loại động từ nào?",
        options: [
          "Vừa là Nội động từ, vừa là Ngoại động từ tùy ngữ cảnh",
          "Chỉ là Nội động từ",
          "Chỉ là Ngoại động từ",
          "Không phải động từ"
        ],
        answer: 0,
        explanation: "Increase có thể là V_nội: 'Sales increased rapidly' (Doanh số tự tăng lên), hoặc V_ngoại: 'The company increased the budget' (Công ty tăng ngân sách)."
      },
      {
        id: "ex3_3",
        exerciseNumber: "Exercise 03",
        topic: "Nội động từ vs Ngoại động từ",
        prompt: "Động từ <strong>'Happen'</strong> (xảy ra) là loại động từ nào?",
        options: [
          "Nội động từ (Intransitive Verb) — Không bao giờ có tân ngữ đi sau",
          "Ngoại động từ (Transitive Verb)",
          "Vừa nội vừa ngoại",
          "Động từ nối"
        ],
        answer: 0,
        explanation: "Happen chỉ có thể là Nội động từ: 'An accident happened yesterday'. Không bao giờ chia dạng bị động 'is happened' hay có tân ngữ phía sau."
      },
      {
        id: "ex3_4",
        exerciseNumber: "Exercise 03",
        topic: "Nội động từ vs Ngoại động từ",
        prompt: "Động từ <strong>'Exist'</strong> (tồn tại, hiện hữu) là loại động từ nào?",
        options: [
          "Nội động từ (Intransitive Verb)",
          "Ngoại động từ (Transitive Verb)",
          "Động từ nối",
          "Động từ khiếm khuyết"
        ],
        answer: 0,
        explanation: "Exist là Nội động từ: 'Problems still exist'. Không nhận tân ngữ và không có dạng bị động."
      },

      // EXERCISE 04: Ghép Verb + Object chuẩn TOEIC
      {
        id: "ex4_1",
        exerciseNumber: "Exercise 04",
        topic: "Cụm V + O thực chiến",
        prompt: "Chọn Tân ngữ phù hợp nhất cho động từ: <strong>'Complete ......'</strong>",
        options: ["the task (hoàn thành nhiệm vụ)", "a campaign", "the budget", "a meeting"],
        answer: 0,
        explanation: "Cụm thường gặp trong công sở: 'Complete the task' = hoàn thành nhiệm vụ được giao."
      },
      {
        id: "ex4_2",
        exerciseNumber: "Exercise 04",
        topic: "Cụm V + O thực chiến",
        prompt: "Chọn Tân ngữ phù hợp nhất cho động từ: <strong>'Launch ......'</strong>",
        options: ["a campaign (tung ra một chiến dịch)", "the task", "a report", "an employee"],
        answer: 0,
        explanation: "'Launch a campaign' (khởi động chiến dịch) hoặc 'Launch a new product' (ra mắt sản phẩm mới) là các cụm Part 5 & 7 cực kỳ hay gặp."
      },
      {
        id: "ex4_3",
        exerciseNumber: "Exercise 04",
        topic: "Cụm V + O thực chiến",
        prompt: "Chọn Tân ngữ phù hợp nhất cho động từ: <strong>'Approve ......'</strong>",
        options: ["the proposal (phê duyệt bản đề xuất)", "the business", "the task", "closely"],
        answer: 0,
        explanation: "'Approve the proposal' = phê duyệt bản đề xuất. Đây là cụm xuất hiện liên tục trong văn bản thương mại TOEIC."
      },
      {
        id: "ex4_4",
        exerciseNumber: "Exercise 04",
        topic: "Cụm V + O thực chiến",
        prompt: "Chọn Tân ngữ phù hợp nhất cho động từ: <strong>'Grow ......'</strong>",
        options: ["the business (phát triển kinh doanh)", "a report", "a campaign", "the task"],
        answer: 0,
        explanation: "'Grow the business' = mở rộng quy mô, phát triển công việc kinh doanh."
      },

      // EXERCISE 05: Dịch câu dài phức tạp
      {
        id: "ex5_1",
        exerciseNumber: "Exercise 05",
        topic: "Kỹ năng dịch câu",
        prompt: "Áp dụng quy tắc dịch câu và cụm danh từ cho: <em>'The highly experienced team reviewed the detailed financial analysis report.'</em> Ý nghĩa chính xác nhất là gì?",
        options: [
          "Đội ngũ có kinh nghiệm cao đã đánh giá bản báo cáo phân tích tài chính chi tiết.",
          "Bản báo cáo tài chính đã đánh giá đội ngũ có kinh nghiệm.",
          "Bản phân tích tài chính chi tiết được đánh giá bởi nhóm kinh nghiệm.",
          "Đội ngũ đánh giá đã làm báo cáo tài chính rất chi tiết."
        ],
        answer: 0,
        explanation: "S = 'The highly experienced team' (dịch ngược: đội ngũ có kinh nghiệm cao) + V = 'reviewed' (đã đánh giá) + O = 'the detailed financial analysis report' (dịch từ N cuối 'report' ngược lại: bản báo cáo phân tích tài chính chi tiết)."
      },

      // EXERCISE 06: Phân loại N_Người vs N_Vật
      {
        id: "ex6_1",
        exerciseNumber: "Exercise 06",
        topic: "Phân loại Danh từ",
        prompt: "Từ <strong>'Brochure'</strong> (sách/tờ quảng cáo gấp) thuộc loại danh từ nào?",
        options: ["Danh từ chỉ VẬT", "Danh từ chỉ NGƯỜI", "Tính từ", "Động từ"],
        answer: 0,
        explanation: "Brochure là cuốn sách nhỏ hoặc tập gấp giới thiệu sản phẩm/dịch vụ → Danh từ chỉ Vật."
      },
      {
        id: "ex6_2",
        exerciseNumber: "Exercise 06",
        topic: "Phân loại Danh từ",
        prompt: "Từ <strong>'Staff'</strong> (đội ngũ nhân viên) thuộc loại danh từ nào?",
        options: ["Danh từ chỉ NGƯỜI (tập thể nhân sự)", "Danh từ chỉ VẬT", "Trạng từ", "Liên từ"],
        answer: 0,
        explanation: "Staff là danh từ tập hợp chỉ toàn thể nhân viên/cán bộ công ty → Danh từ chỉ Người."
      },
      {
        id: "ex6_3",
        exerciseNumber: "Exercise 06",
        topic: "Phân loại Danh từ",
        prompt: "Từ <strong>'Permit'</strong> (khi là danh từ: giấy phép) thuộc loại danh từ nào?",
        options: ["Danh từ chỉ VẬT (giấy phép xây dựng, đỗ xe...)", "Danh từ chỉ NGƯỜI", "Đại từ", "Giới từ"],
        answer: 0,
        explanation: "Permit (danh từ) = giấy phép (a parking permit, a building permit) → Danh từ chỉ Vật."
      },

      // EXERCISE 07: Danh từ Đếm được vs Không đếm được
      {
        id: "ex7_1",
        exerciseNumber: "Exercise 07",
        topic: "Countable vs Uncountable",
        prompt: "Từ <strong>'Information'</strong> (thông tin) là danh từ loại nào?",
        options: [
          "Danh từ KHÔNG đếm được (Uncountable) — Tuyệt đối không dùng an information hay thêm -s",
          "Danh từ đếm được số ít",
          "Danh từ đếm được số nhiều",
          "Tính từ miêu tả"
        ],
        answer: 0,
        explanation: "'Information' là danh từ không đếm được. Muốn nói 'một mẩu thông tin', người bản xứ dùng 'a piece of information'."
      },
      {
        id: "ex7_2",
        exerciseNumber: "Exercise 07",
        topic: "Countable vs Uncountable",
        prompt: "Từ <strong>'Equipment'</strong> (trang thiết bị) là danh từ loại nào?",
        options: [
          "Danh từ KHÔNG đếm được (Uncountable) — Không có dạng số nhiều 'equipments'",
          "Danh từ đếm được",
          "Tính từ đuôi -ment",
          "Động từ"
        ],
        answer: 0,
        explanation: "'Equipment' là danh từ tập hợp không đếm được trong tiếng Anh. Trong bài thi TOEIC luôn chia động từ số ít và không thêm -s."
      },
      {
        id: "ex7_3",
        exerciseNumber: "Exercise 07",
        topic: "Countable vs Uncountable",
        prompt: "Từ <strong>'Employee'</strong> (nhân viên) là danh từ loại nào?",
        options: [
          "Danh từ ĐẾM ĐƯỢC (Countable) — Có dạng an employee và employees",
          "Danh từ không đếm được",
          "Tính từ",
          "Trạng từ"
        ],
        answer: 0,
        explanation: "Quy tắc vàng: Tất cả các danh từ chỉ người đều là danh từ đếm được (an employee, two employees)."
      },

      // EXERCISE 08: Chọn dạng Noun đúng (Ngữ pháp số ít/số nhiều)
      {
        id: "ex8_1",
        exerciseNumber: "Exercise 08",
        topic: "Dạng thức Danh từ",
        prompt: "Điền vào chỗ trống: <em>'A ...... will be sent.'</em>",
        options: ["proposal", "proposals", "propose", "proposing"],
        answer: 0,
        explanation: "Phía trước có mạo từ 'A' bắt buộc phải đi với danh từ đếm được ở dạng SỐ ÍT: 'A proposal' (Một bản đề xuất)."
      },
      {
        id: "ex8_2",
        exerciseNumber: "Exercise 08",
        topic: "Dạng thức Danh từ",
        prompt: "Điền vào chỗ trống: <em>'The ...... are given.'</em>",
        options: ["Options", "Option", "Optional", "Optionally"],
        answer: 0,
        explanation: "Động từ to be phía sau là 'are' (số nhiều) nên Chủ ngữ bắt buộc phải là Danh từ số nhiều: 'The Options are given'."
      },
      {
        id: "ex8_3",
        exerciseNumber: "Exercise 08",
        topic: "Dạng thức Danh từ",
        prompt: "Điền vào chỗ trống: <em>'We have assigned ...... to the students.'</em>",
        options: ["Tasks", "Task", "Tasking", "Tasked"],
        answer: 0,
        explanation: "'Task' là danh từ đếm được. Ở đây không có mạo từ 'a/the' đứng trước nên bắt buộc phải dùng dạng số nhiều: 'Tasks'."
      },
      {
        id: "ex8_4",
        exerciseNumber: "Exercise 08",
        topic: "Dạng thức Danh từ",
        prompt: "Điền vào chỗ trống: <em>'The supervisor monitored ...... closely.'</em>",
        options: ["Progress", "Progresses", "Progressing", "Progressive"],
        answer: 0,
        explanation: "'Progress' (sự tiến triển/tiến độ) là danh từ KHÔNG đếm được, không bao giờ thêm đuôi số nhiều -es."
      },

      // EXERCISE 09: Trắc nghiệm Part 5 thực chiến
      {
        id: "ex9_1",
        exerciseNumber: "Exercise 09",
        topic: "Part 5 Thực chiến",
        prompt: "<em>'Present your ------ letter at the front desk to receive your room key and welcome packet.'</em>",
        options: [
          "(A) confirmation",
          "(B) designation",
          "(C) notification",
          "(D) decision"
        ],
        answer: 0,
        explanation: "'Confirmation letter' là danh từ ghép cố định = thư xác nhận (đặt phòng khách sạn). Khách hàng xuất trình thư xác nhận tại quầy lễ tân để nhận chìa khóa phòng."
      },
      {
        id: "ex9_2",
        exerciseNumber: "Exercise 09",
        topic: "Part 5 Thực chiến",
        prompt: "<em>'Conference ------ begins on December 21 and continues through the end of the year.'</em>",
        options: [
          "(A) committee",
          "(B) presentation",
          "(C) registration",
          "(D) ideal"
        ],
        answer: 2,
        explanation: "'Conference registration' = việc đăng ký tham dự hội nghị. Việc đăng ký bắt đầu vào ngày 21 tháng 12 và tiếp tục đến hết năm."
      },
      {
        id: "ex9_3",
        exerciseNumber: "Exercise 09",
        topic: "Part 5 Thực chiến",
        prompt: "<em>'Through groundbreaking ------ on hospital services, Dr. Chan has redefined the basic concept of patient care.'</em>",
        options: [
          "(A) research",
          "(B) survey",
          "(C) project",
          "(D) approach"
        ],
        answer: 0,
        explanation: "'Groundbreaking research' = nghiên cứu mang tính đột phá. 'Research' là danh từ không đếm được đi liền sau tính từ groundbreaking."
      },
      {
        id: "ex9_4",
        exerciseNumber: "Exercise 09",
        topic: "Part 5 Thực chiến",
        prompt: "<em>'If you choose to hire one of our lawyers to represent you, you will be asked to sign ------ forms.'</em>",
        options: [
          "(A) several",
          "(B) something",
          "(C) a little",
          "(D) much"
        ],
        answer: 0,
        explanation: "'Forms' là danh từ đếm được số nhiều. 'Several' đi với danh từ số nhiều (several forms = một vài biểu mẫu). 'A little' và 'much' chỉ đi với danh từ không đếm được."
      },
      {
        id: "ex9_5",
        exerciseNumber: "Exercise 09",
        topic: "Part 5 Thực chiến",
        prompt: "<em>'The accounting department has purchased ------ filing cabinet to hold its excess documents.'</em>",
        options: [
          "(A) a",
          "(B) many",
          "(C) several",
          "(D) much"
        ],
        answer: 0,
        explanation: "'Filing cabinet' (tủ hồ sơ) là danh từ đếm được ở dạng số ít, do đó cần mạo từ số ít 'a' đứng trước."
      },
      {
        id: "ex9_6",
        exerciseNumber: "Exercise 09",
        topic: "Part 5 Thực chiến",
        prompt: "<em>'The committee voted in favor of the final ------ submitted by the engineering team.'</em>",
        options: [
          "(A) proposal",
          "(B) propose",
          "(C) proposed",
          "(D) proposing"
        ],
        answer: 0,
        explanation: "Sau mạo từ 'the' và tính từ 'final' cần một Danh từ chính. 'Proposal' là danh từ đặc biệt đuôi -al = bản đề xuất."
      }
    ],

    // 3. SƠ ĐỒ TƯ DUY & TÓM TẮT TRA CỨU NHANH
    mindmapNodes: [
      {
        title: "A. CÂU ĐƠN (Simple Sentences)",
        color: "blue",
        icon: "📌",
        children: [
          {
            title: "1. Các thành phần chính",
            desc: "<strong>S (Chủ ngữ):</strong> Do Danh từ / Đại từ đảm nhận.<br><strong>V (Động từ):</strong> Hành động hoặc Động từ nối (Linking Verb).<br><strong>O (Tân ngữ):</strong> Đối tượng chịu tác động của hành động.<br><strong>Phần miêu tả:</strong> Do Tính từ (Adj) hoặc Cụm danh từ (N) đảm nhận."
          },
          {
            title: "2. Ba mẫu câu đơn cốt lõi",
            desc: "• <strong>Mẫu 1:</strong> <code>S + V_nội</code> → Kể hành động (VD: <em>I sleep.</em> / <em>An employee interprets.</em>)<br>• <strong>Mẫu 2:</strong> <code>S + V_ngoại + O</code> → Tác động lên đối tượng (VD: <em>The staff evaluates the report.</em>)<br>• <strong>Mẫu 3:</strong> <code>S + V_linking + Phần miêu tả</code> → Miêu tả tính chất/danh tính (VD: <em>The brochure is clear.</em>)"
          },
          {
            title: "3. Phân biệt V_nội & V_ngoại",
            desc: "• <strong>V_nội:</strong> Hành động hướng vào bản thân, KHÔNG nhận tân ngữ (VD: <em>happen, exist, walk, sleep</em>).<br>• <strong>V_ngoại:</strong> Bắt buộc có tân ngữ O theo sau (VD: <em>submit a report, approve the proposal</em>).<br>• <strong>Mẹo:</strong> Thêm 'bị/được' vào động từ để kiểm tra tính ngoại động từ."
          }
        ]
      },
      {
        title: "B. DANH TỪ (Nouns in Part 5)",
        color: "indigo",
        icon: "📚",
        children: [
          {
            title: "1. Đuôi nhận biết Danh từ",
            desc: "• <strong>Chỉ Người:</strong> <code>-ee, -er, -or, -ant, -ist, -yst, -ian</code> (VD: <em>employee, manager, instructor, assistant, specialist</em>).<br>• <strong>Chỉ Vật:</strong> <code>-ion, -ment, -ness, -sis, -ce, -ity, -ism</code> (VD: <em>decision, equipment, business, difference, security</em>)."
          },
          {
            title: "2. Đuôi đặc biệt cần thuộc lòng",
            desc: "• <strong>Đuôi -al CHỈ là Danh từ:</strong> <em>proposal, approval, renewal, arrival, denial, disposal</em>.<br>• <strong>Đuôi -al vừa N vừa Adj:</strong> <em>professional, individual, official</em>.<br>• <strong>Đuôi -ive vừa N vừa Adj:</strong> <em>representative, alternative, initiative, relative, objective</em>."
          },
          {
            title: "3. Cấu trúc Cụm danh từ (Noun Phrase)",
            desc: "<code>[Mạo từ / TTSH / Hạn định từ] + ADV(s) + ADJ(s) + NOUN CHÍNH</code><br>• Ví dụ: <em>An extremely beautiful actress</em>.<br>• <strong>Quy tắc dịch:</strong> Dịch câu từ Trái → Phải; Gặp cụm N thì dịch ngược từ Phải → Trái (từ Danh từ cuối ngược lên)."
          },
          {
            title: "4. Phân loại theo Ngữ pháp",
            desc: "• <strong>N đếm được:</strong> Số ít bắt buộc có mạo từ (a/an/the) hoặc TTSH (my/your...). Số nhiều thêm -s/es.<br>• <strong>N không đếm được:</strong> <em>information, equipment, knowledge, progress, luggage, furniture</em>. KHÔNG dùng a/an, KHÔNG thêm -s/es, ĐỘNG TỪ LUÔN CHIA SỐ ÍT."
          },
          {
            title: "5. 6 Vị trí vàng của Danh từ trong Part 5",
            desc: "1. Đứng đầu câu làm Chủ ngữ (S).<br>2. Đứng sau Ngoại động từ làm Tân ngữ (O).<br>3. Đứng sau Giới từ (in, on, at, for, with...).<br>4. Đứng sau Tính từ sở hữu (my, your, his, her, their, its).<br>5. Đứng sau Mạo từ (a, an, the) và Hạn định từ.<br>6. Đứng sau Tính từ bổ nghĩa (Adj + N)."
          }
        ]
      }
    ]
  }
];

if (typeof window !== "undefined") {
  window.TOEIC_THEORY_UNITS = TOEIC_THEORY_UNITS;
}
