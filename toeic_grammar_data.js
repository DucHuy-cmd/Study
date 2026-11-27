/* =========================================================================
   TOEIC GRAMMAR DATASET - UNIT 5: CÂU ĐƠN & DANH TỪ
   Giáo trình AGENA English Center • Biên soạn chuẩn bài giảng
   ========================================================================= */

var TOEIC_GRAMMAR_DATA = {
  unitId: "unit_5_simple_sentences_and_nouns",
  unitTitle: "Unit 5: Câu Đơn & Danh Từ",
  unitSubtitle: "Simple Sentences and Nouns (Part 5)",
  description: "Toàn bộ lý thuyết từ bài giảng: 3 mẫu câu đơn, nội/ngoại động từ, các đuôi danh từ, bẫy đuôi -al, -ive, cụm danh từ, quy tắc dịch câu và 6 vị trí danh từ trong Part 5.",

  // 1. NỘI DUNG LÝ THUYẾT (5 CHUYÊN ĐỀ BÀI HỌC TỪ 6 TRANG ẢNH)
  theoryTopics: [
    {
      id: "topic_cau_don",
      category: "dong_danh_tu",
      categoryLabel: "Động danh từ",
      icon: "📌",
      title: "1. Câu Đơn (Simple Sentences) & 3 Mẫu Câu Cốt Lõi",
      badge: "Mẫu câu cơ bản",
      contentHtml: `
        <div class="space-y-4 text-xs sm:text-sm text-slate-700 leading-relaxed">
          <div class="p-3 bg-blue-50 rounded-2xl border border-blue-200">
            <h4 class="font-extrabold text-blue-900 mb-1.5 flex items-center gap-1.5">
              <span>🎯</span> <span>Các thành phần và từ loại trong câu đơn:</span>
            </h4>
            <ul class="list-disc list-inside space-y-1 text-slate-700">
              <li><strong>S (Subject - Chủ ngữ):</strong> Chủ thể trong câu $\\to$ Do <em>Danh từ (N)</em> hoặc <em>Đại từ (Pronoun)</em> đảm nhận.</li>
              <li><strong>V (Verb - Động từ):</strong> Hành động hoặc dùng để nối phần miêu tả $\\to$ Do <em>Động từ (V)</em>, <em>to be</em>, hoặc <em>V_linking</em> đảm nhận.</li>
              <li><strong>O (Object - Tân ngữ):</strong> Đối tượng chịu tác động của hành động $\\to$ Do <em>Danh từ (N)</em> hoặc <em>Đại từ tân ngữ</em> đảm nhận.</li>
              <li><strong>Phần miêu tả (Complement):</strong> Miêu tả chủ ngữ $\\to$ Do <em>Tính từ (Adj)</em> hoặc <em>Danh từ (N)</em> đảm nhận.</li>
            </ul>
          </div>

          <div>
            <h4 class="font-extrabold text-slate-900 mb-2">3 Mẫu câu đơn cốt lõi phải thuộc lòng:</h4>
            <div class="grid grid-cols-1 md:grid-cols-3 gap-2.5">
              <div class="p-3.5 bg-white rounded-2xl border-2 border-indigo-100 shadow-2xs">
                <span class="px-2 py-0.5 bg-indigo-50 text-indigo-700 font-extrabold text-[10px] rounded-md">MẪU 1</span>
                <div class="text-sm font-black text-indigo-900 font-mono mt-1 mb-1">S + V_nội</div>
                <div class="text-[11px] text-slate-500 mb-2">Dùng để kể về hành động của bản thân chủ thể.</div>
                <div class="p-2 bg-slate-50 rounded-xl text-xs font-semibold text-slate-800">
                  VD: <em>I sleep.</em><br>
                  VD: <em>An employee interprets.</em>
                </div>
              </div>

              <div class="p-3.5 bg-white rounded-2xl border-2 border-blue-100 shadow-2xs">
                <span class="px-2 py-0.5 bg-blue-50 text-blue-700 font-extrabold text-[10px] rounded-md">MẪU 2</span>
                <div class="text-sm font-black text-blue-900 font-mono mt-1 mb-1">S + V_ngoại + O</div>
                <div class="text-[11px] text-slate-500 mb-2">Hành động bắt buộc tác động lên đối tượng khác (O).</div>
                <div class="p-2 bg-slate-50 rounded-xl text-xs font-semibold text-slate-800">
                  VD: <em>My mother made a cake.</em><br>
                  VD: <em>The staff evaluates the report.</em>
                </div>
              </div>

              <div class="p-3.5 bg-white rounded-2xl border-2 border-emerald-100 shadow-2xs">
                <span class="px-2 py-0.5 bg-emerald-50 text-emerald-700 font-extrabold text-[10px] rounded-md">MẪU 3</span>
                <div class="text-sm font-black text-emerald-900 font-mono mt-1 mb-1">S + V_linking + Miêu tả</div>
                <div class="text-[11px] text-slate-500 mb-2">Dùng để miêu tả đặc điểm (Adj) hoặc danh tính (N).</div>
                <div class="p-2 bg-slate-50 rounded-xl text-xs font-semibold text-slate-800">
                  VD: <em>The girl is attractive.</em> (Adj)<br>
                  VD: <em>The document is a report.</em> (N)
                </div>
              </div>
            </div>
          </div>
        </div>
      `
    },
    {
      id: "topic_noi_ngoai",
      category: "dong_danh_tu",
      categoryLabel: "Động danh từ",
      icon: "⚡",
      title: "2. Phân Biệt Nội Động Từ & Ngoại Động Từ",
      badge: "Mẹo làm bài",
      contentHtml: `
        <div class="space-y-4 text-xs sm:text-sm text-slate-700 leading-relaxed">
          <div class="p-3 bg-amber-50 rounded-2xl border border-amber-200 text-amber-900">
            <strong>💡 Mẹo nhận diện trong vở:</strong> Gắn chữ <em>"bị"</em> hoặc <em>"được"</em> vào động từ. Nếu câu hỏi có ý nghĩa rõ ràng (được nộp, được duyệt, được mua) thì đó là <strong>Ngoại động từ (V_ngoại)</strong>!
          </div>

          <div class="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <div class="p-3.5 bg-slate-50 rounded-2xl border border-slate-200">
              <h5 class="font-extrabold text-slate-900 mb-1">1. Intransitive Verb (V_nội):</h5>
              <p class="text-slate-600 mb-2 text-xs">Chủ thể (S) thực hiện hành động lên bản thân, <strong>không nhận tân ngữ O</strong>, không có dạng bị động.</p>
              <ul class="list-disc list-inside space-y-1 text-xs font-semibold text-slate-800">
                <li><em>I slept at 9 pm.</em></li>
                <li><em>I walked to his house.</em></li>
                <li><em>Happen</em> (xảy ra) $\\to$ <em>An accident happened.</em></li>
                <li><em>Exist</em> (tồn tại) $\\to$ <em>Problems still exist.</em></li>
              </ul>
            </div>

            <div class="p-3.5 bg-slate-50 rounded-2xl border border-slate-200">
              <h5 class="font-extrabold text-slate-900 mb-1">2. Transitive Verb (V_ngoại):</h5>
              <p class="text-slate-600 mb-2 text-xs">Chủ thể (S) thực hiện hành động <strong>lên đối tượng khác (Tân ngữ O)</strong>.</p>
              <ul class="list-disc list-inside space-y-1 text-xs font-semibold text-slate-800">
                <li><em>I eat pizza.</em> (pizza là tân ngữ O)</li>
                <li><em>I bought an iPhone yesterday.</em></li>
                <li><em>Submit a report</em> (nộp báo cáo)</li>
                <li><em>Approve the proposal</em> (duyệt đề xuất)</li>
              </ul>
            </div>
          </div>

          <div class="p-3 bg-slate-100 rounded-2xl">
            <h5 class="font-bold text-slate-900 mb-1">6 Cụm V + O thương mại xuất hiện 99% trong đề thi:</h5>
            <div class="grid grid-cols-2 sm:grid-cols-3 gap-2 text-xs">
              <span class="p-2 bg-white rounded-xl border border-slate-200"><strong>Submit</strong> a report</span>
              <span class="p-2 bg-white rounded-xl border border-slate-200"><strong>Complete</strong> the task</span>
              <span class="p-2 bg-white rounded-xl border border-slate-200"><strong>Increase</strong> the budget</span>
              <span class="p-2 bg-white rounded-xl border border-slate-200"><strong>Launch</strong> a campaign</span>
              <span class="p-2 bg-white rounded-xl border border-slate-200"><strong>Approve</strong> the proposal</span>
              <span class="p-2 bg-white rounded-xl border border-slate-200"><strong>Grow</strong> the business</span>
            </div>
          </div>
        </div>
      `
    },
    {
      id: "topic_duoi_danh_tu",
      category: "dong_danh_tu",
      categoryLabel: "Động danh từ",
      icon: "📚",
      title: "3. Nhận Biết Danh Từ & Bẫy Đuôi Đặc Biệt",
      badge: "Bẫy Part 5",
      contentHtml: `
        <div class="space-y-4 text-xs sm:text-sm text-slate-700 leading-relaxed">
          <div class="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <div class="p-3.5 bg-blue-50/70 rounded-2xl border border-blue-200">
              <h5 class="font-extrabold text-blue-900 mb-1.5 flex items-center gap-1">
                <span>👤</span> <span>7 Đuôi chỉ NGƯỜI (Luôn đếm được):</span>
              </h5>
              <ul class="space-y-1 text-xs">
                <li><code>-ee</code>: <em>employee</em> (nhân viên), <em>trainee</em> (thực tập sinh)</li>
                <li><code>-er</code>: <em>manager</em> (quản lý), <em>leader</em> (lãnh đạo)</li>
                <li><code>-or</code>: <em>instructor</em> (giảng viên), <em>supervisor</em> (giám sát)</li>
                <li><code>-ant</code>: <em>assistant</em> (trợ lý), <em>accountant</em> (kế toán)</li>
                <li><code>-ist</code>: <em>specialist</em> (chuyên gia), <em>receptionist</em> (lễ tân)</li>
                <li><code>-yst</code>: <em>analyst</em> (nhà phân tích)</li>
                <li><code>-ian</code>: <em>technician</em> (kỹ thuật viên), <em>musician</em> (nhạc sĩ)</li>
              </ul>
            </div>

            <div class="p-3.5 bg-indigo-50/70 rounded-2xl border border-indigo-200">
              <h5 class="font-extrabold text-indigo-900 mb-1.5 flex items-center gap-1">
                <span>📦</span> <span>7 Đuôi chỉ VẬT & SỰ VIỆC:</span>
              </h5>
              <ul class="space-y-1 text-xs">
                <li><code>-ion</code>: <em>confirmation, notification, decision, registration</em></li>
                <li><code>-ment</code>: <em>document, management, agreement, equipment</em></li>
                <li><code>-ness</code>: <em>business, happiness, awareness</em></li>
                <li><code>-sis</code>: <em>analysis, basis, diagnosis</em></li>
                <li><code>-ce / -ance / -ence</code>: <em>attendance, difference, conference</em></li>
                <li><code>-ity</code>: <em>priority, security, availability</em></li>
                <li><code>-ism</code>: <em>criticism, tourism, optimism</em></li>
              </ul>
            </div>
          </div>

          <div class="p-3.5 bg-rose-50/80 rounded-2xl border border-rose-200">
            <h5 class="font-extrabold text-rose-900 mb-2 flex items-center gap-1.5">
              <span>⚠️</span> <span>BẪY ĐẶC BIỆT CỰC NGUY HIỂM: Đuôi -al và -ive là Danh từ!</span>
            </h5>
            <div class="space-y-2 text-xs">
              <div>
                <strong class="text-rose-800">1. Đuôi -al CHỈ là Danh từ (Không phải tính từ!):</strong>
                <p class="font-mono text-slate-800 bg-white p-2 rounded-xl border border-rose-200 mt-1">
                  proposal (bản đề xuất), approval (sự phê duyệt), renewal (sự gia hạn), arrival (sự đến nơi), denial (sự từ chối), disposal (sự loại bỏ/vứt bỏ)
                </p>
              </div>
              <div>
                <strong class="text-indigo-800">2. Đuôi -al VỪA là Danh từ, VỪA là Tính từ:</strong>
                <p class="font-mono text-slate-800 bg-white p-2 rounded-xl border border-indigo-200 mt-1">
                  professional (chuyên gia / chuyên nghiệp), individual (cá nhân / riêng lẻ), official (quan chức / chính thức)
                </p>
              </div>
              <div>
                <strong class="text-emerald-800">3. Đuôi -ive VỪA là Danh từ, VỪA là Tính từ:</strong>
                <p class="font-mono text-slate-800 bg-white p-2 rounded-xl border border-emerald-200 mt-1">
                  representative (người đại diện / mang tính đại diện), alternative (phương án thay thế), initiative (sáng kiến), relative (họ hàng / tương đối), objective (mục tiêu / khách quan)
                </p>
              </div>
            </div>
          </div>
        </div>
      `
    },
    {
      id: "topic_cum_danh_tu",
      category: "dong_danh_tu",
      categoryLabel: "Động danh từ",
      icon: "🧩",
      title: "4. Cụm Danh Từ (Noun Phrase) & 3 Bước Dịch Câu",
      badge: "Kỹ năng dịch",
      contentHtml: `
        <div class="space-y-4 text-xs sm:text-sm text-slate-700 leading-relaxed">
          <div class="p-3.5 bg-gradient-to-r from-blue-50 to-indigo-50 rounded-2xl border border-blue-200">
            <h5 class="font-black text-blue-900 mb-1">Công thức chuẩn của Cụm danh từ:</h5>
            <div class="font-mono text-xs sm:text-sm font-extrabold text-indigo-700 bg-white p-2.5 rounded-xl border border-indigo-200 text-center shadow-2xs">
              [Mạo từ / TTSH / Hạn định từ] + ADV(s) + ADJ(s) + NOUN CHÍNH
            </div>
            <div class="text-xs text-slate-600 mt-2">
              Ví dụ: <em>An</em> (Mạo từ) + <em>extremely</em> (Adv) + <em>beautiful</em> (Adj) + <em>actress</em> (Noun chính).
            </div>
          </div>

          <div class="p-3.5 bg-white rounded-2xl border border-slate-200 space-y-2">
            <h5 class="font-extrabold text-slate-900">3 Bước dịch câu cơ bản chuẩn giáo trình:</h5>
            <ol class="list-decimal list-inside space-y-1.5 text-xs">
              <li><strong>Bước 1:</strong> Xác định $S, V, O$ trong câu. Động từ chính $V$ thường có $-s/es$ hoặc $-ed$.</li>
              <li><strong>Bước 2:</strong> Dịch tổng thể câu theo chiều từ <strong>Trái $\\to$ Phải</strong>.</li>
              <li><strong>Bước 3:</strong> Khi gặp Cụm danh từ, dịch ngược từ <strong>Phải $\\to$ Trái</strong> (dịch Danh từ cuối cụm trước, sau đó dịch ngược các từ bổ nghĩa phía trước).</li>
            </ol>
            <div class="p-2.5 bg-slate-50 rounded-xl border border-slate-200 text-xs">
              <strong>Ví dụ phân tích:</strong> <em>"The highly experienced team reviewed the detailed financial analysis report."</em><br>
              $\\to$ S = <em>The highly experienced team</em> (đội ngũ có kinh nghiệm cao)<br>
              $\\to$ V = <em>reviewed</em> (đã đánh giá/xem xét)<br>
              $\\to$ O = <em>the detailed financial analysis report</em> (bản báo cáo phân tích tài chính chi tiết)<br>
              $\\to$ <strong>Dịch hoàn chỉnh:</strong> Đội ngũ có kinh nghiệm cao đã đánh giá bản báo cáo phân tích tài chính chi tiết.
            </div>
          </div>
        </div>
      `
    },
    {
      id: "topic_phan_loai_danh_tu",
      category: "dong_danh_tu",
      categoryLabel: "Động danh từ",
      icon: "🎯",
      title: "5. Phân Loại Danh Từ & 6 Vị Trí Vàng Trong Part 5",
      badge: "Quy tắc ngữ pháp",
      contentHtml: `
        <div class="space-y-4 text-xs sm:text-sm text-slate-700 leading-relaxed">
          <div class="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <div class="p-3.5 bg-emerald-50 rounded-2xl border border-emerald-200">
              <h5 class="font-black text-emerald-900 mb-1">Danh từ đếm được (Countable)</h5>
              <ul class="text-xs space-y-1 text-slate-700">
                <li>• <strong>Số ít:</strong> Bắt buộc có mạo từ (a/an/the) hoặc TTSH (my/your...). <em>Không bao giờ đứng trơ trọi một mình!</em> (a book, an apple, the brochure).</li>
                <li>• <strong>Số nhiều:</strong> Thêm -s/es (several books, tasks), động từ chia số nhiều.</li>
                <li>• <strong>Danh từ chỉ người:</strong> LUÔN LUÔN đếm được!</li>
              </ul>
            </div>

            <div class="p-3.5 bg-rose-50 rounded-2xl border border-rose-200">
              <h5 class="font-black text-rose-900 mb-1">Danh từ KHÔNG đếm được (Uncountable)</h5>
              <ul class="text-xs space-y-1 text-slate-700">
                <li>• <strong>Từ điển TOEIC hay ra:</strong> <em>information, equipment, knowledge, progress, water, money, furniture, luggage</em>.</li>
                <li>• <strong>Quy tắc 3 KHÔNG:</strong> KHÔNG dùng a/an, KHÔNG thêm -s/es, ĐỘNG TỪ LUÔN CHIA SỐ ÍT (is, has, V_s/es).</li>
              </ul>
            </div>
          </div>

          <div class="p-3.5 bg-slate-50 rounded-2xl border border-slate-200">
            <h5 class="font-black text-slate-900 mb-1.5">6 Vị trí vàng của Danh từ trong câu Part 5:</h5>
            <div class="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs">
              <div class="p-2 bg-white rounded-xl border border-slate-200"><strong>1. Đầu câu làm S:</strong> <em>[Attendance] is mandatory.</em></div>
              <div class="p-2 bg-white rounded-xl border border-slate-200"><strong>2. Sau Ngoại động từ làm O:</strong> <em>Review the [contract].</em></div>
              <div class="p-2 bg-white rounded-xl border border-slate-200"><strong>3. Sau Giới từ (in/on/at/for):</strong> <em>In the [office].</em></div>
              <div class="p-2 bg-white rounded-xl border border-slate-200"><strong>4. Sau Tính từ sở hữu:</strong> <em>His management [position].</em></div>
              <div class="p-2 bg-white rounded-xl border border-slate-200"><strong>5. Sau Mạo từ (a/an/the):</strong> <em>A [proposal] was sent.</em></div>
              <div class="p-2 bg-white rounded-xl border border-slate-200"><strong>6. Sau Tính từ bổ nghĩa:</strong> <em>Successful [project].</em></div>
            </div>
          </div>
        </div>
      `
    }
  ],

  // 2. BỘ CÂU HỎI GÕ PHẢN XẠ ACTIVE RECALL (20 CÂU CỐT LÕI)
  practiceQuestions: [
    {
      id: "gq_1",
      topic: "3 Mẫu câu đơn",
      question: "Nêu công thức của mẫu câu đơn số 1 (dùng để kể về hành động của bản thân chủ thể)?",
      correctAnswer: "S + V nội",
      acceptableAnswers: [
        "S + V nội", "S + V noi", "s + v noi", "s+v noi", "s + vnội", "s+vnoi", "S + V_nội", "s + v_noi", "S+Vnoi"
      ],
      hint: "Bắt đầu bằng S, tiếp theo là V dành cho hành động của chủ thể (không có tân ngữ O)",
      explanation: "Mẫu câu đơn số 1 là S + V_nội. Ví dụ: I sleep / An employee interprets."
    },
    {
      id: "gq_2",
      topic: "3 Mẫu câu đơn",
      question: "Nêu công thức của mẫu câu đơn số 2 (hành động tác động lên đối tượng khác)?",
      correctAnswer: "S + V ngoại + O",
      acceptableAnswers: [
        "S + V ngoại + O", "S + V ngoai + O", "s + v ngoai + o", "s+v ngoai+o", "s + vngoại + o", "s + v_ngoại + o", "S+Vngoai+O"
      ],
      hint: "Chủ ngữ (S) thực hiện hành động (V_ngoại) tác động lên Tân ngữ (O)",
      explanation: "Mẫu câu đơn số 2 là S + V_ngoại + O. Ví dụ: My mother made a cake / The staff evaluates the report."
    },
    {
      id: "gq_3",
      topic: "3 Mẫu câu đơn",
      question: "Nêu công thức của mẫu câu đơn số 3 (dùng để miêu tả đặc điểm hoặc danh tính)?",
      correctAnswer: "S + V linking + phần miêu tả",
      acceptableAnswers: [
        "S + V linking + phần miêu tả", "S + V linking + phan mieu ta", "s + v linking + phan mieu ta", "S + V_linking + phan mieu ta", "S + V linking + miêu tả", "S + V linking + mieu ta", "S + V linking + Adj", "S + V linking + N"
      ],
      hint: "Gồm Chủ ngữ (S) + Động từ nối (V_linking) + Thành phần miêu tả (Adj hoặc N)",
      explanation: "Mẫu câu đơn số 3 là S + V_linking + Phần miêu tả. Ví dụ: The girl is attractive / The document is a report."
    },
    {
      id: "gq_4",
      topic: "Nội/Ngoại động từ",
      question: "Submit (nộp) là nội động từ hay ngoại động từ?",
      correctAnswer: "ngoại động từ",
      acceptableAnswers: [
        "ngoại động từ", "ngoai dong tu", "V ngoại", "V ngoai", "ngoại", "ngoai", "transitive"
      ],
      hint: "Có thể nói 'được nộp' (submit a report)",
      explanation: "Submit là ngoại động từ vì luôn cần tân ngữ đi sau (submit a report, submit an application)."
    },
    {
      id: "gq_5",
      topic: "Nội/Ngoại động từ",
      question: "Happen (xảy ra) là nội động từ hay ngoại động từ?",
      correctAnswer: "nội động từ",
      acceptableAnswers: [
        "nội động từ", "noi dong tu", "V nội", "V noi", "nội", "noi", "intransitive"
      ],
      hint: "Hành động tự xảy ra, không có tân ngữ và không có dạng bị động",
      explanation: "Happen là nội động từ. Ví dụ: An accident happened."
    },
    {
      id: "gq_6",
      topic: "Cụm V + O",
      question: "Điền tân ngữ thương mại thích hợp: Submit a ... (nộp báo cáo)?",
      correctAnswer: "report",
      acceptableAnswers: [
        "report", "a report", "báo cáo", "bao cao"
      ],
      hint: "Từ tiếng Anh bắt đầu bằng chữ 'r' có nghĩa là bản báo cáo",
      explanation: "Cụm chuẩn TOEIC: Submit a report (nộp báo cáo)."
    },
    {
      id: "gq_7",
      topic: "Cụm V + O",
      question: "Điền tân ngữ thương mại thích hợp: Approve the ... (phê duyệt đề xuất)?",
      correctAnswer: "proposal",
      acceptableAnswers: [
        "proposal", "the proposal", "bản đề xuất", "de xuat"
      ],
      hint: "Danh từ đặc biệt đuôi -al có nghĩa là bản đề xuất",
      explanation: "Cụm chuẩn: Approve the proposal (phê duyệt bản đề xuất)."
    },
    {
      id: "gq_8",
      topic: "Cụm V + O",
      question: "Điền tân ngữ thương mại thích hợp: Launch a ... (tung ra chiến dịch)?",
      correctAnswer: "campaign",
      acceptableAnswers: [
        "campaign", "a campaign", "chiến dịch", "chien dich"
      ],
      hint: "Từ tiếng Anh bắt đầu bằng chữ 'c' nghĩa là chiến dịch quảng cáo",
      explanation: "Cụm chuẩn: Launch a campaign (khởi động chiến dịch) hoặc Launch a new product (ra mắt sản phẩm mới)."
    },
    {
      id: "gq_9",
      topic: "Đuôi danh từ",
      question: "Kể ít nhất 3 đuôi danh từ chỉ NGƯỜI thông dụng (ví dụ: -er, -or, ...)?",
      correctAnswer: "-er, -or, -ee",
      acceptableAnswers: [
        "-er, -or, -ee", "-er -or -ee", "er or ee", "-ee, -er, -or", "-ant, -ist, -ian", "er, or, ee", "-er, -ee, -or", "-or, -er, -ee"
      ],
      hint: "Ví dụ trong manager, instructor, employee...",
      explanation: "7 đuôi chỉ người gồm: -ee, -er, -or, -ant, -ist, -yst, -ian."
    },
    {
      id: "gq_10",
      topic: "Đuôi danh từ",
      question: "Kể ít nhất 3 đuôi danh từ chỉ VẬT/SỰ VIỆC thông dụng (ví dụ: -ion, -ment, ...)?",
      correctAnswer: "-ion, -ment, -ness",
      acceptableAnswers: [
        "-ion, -ment, -ness", "-ion -ment -ness", "ion ment ness", "-ion, -ment, -ity", "-ment, -ion, -ness", "ion, ment, ness"
      ],
      hint: "Ví dụ trong decision, equipment, business...",
      explanation: "7 đuôi chỉ vật gồm: -ion, -ment, -ness, -sis, -ce, -ity, -ism."
    },
    {
      id: "gq_11",
      topic: "Bẫy đuôi -al",
      question: "Kể 3 danh từ có đuôi -al đặc biệt (hay bị nhầm là tính từ)?",
      correctAnswer: "proposal, approval, renewal",
      acceptableAnswers: [
        "proposal, approval, renewal", "proposal approval renewal", "proposal, approval, arrival", "proposal, renewal, approval", "proposal, approval"
      ],
      hint: "Bản đề xuất (p...), sự phê duyệt (a...), sự gia hạn (r...)",
      explanation: "Các danh từ đuôi -al đặc biệt: proposal, approval, renewal, arrival, denial, disposal."
    },
    {
      id: "gq_12",
      topic: "Bẫy đuôi -ive",
      question: "Representative (đuôi -ive) là loại từ gì?",
      correctAnswer: "danh từ và tính từ",
      acceptableAnswers: [
        "danh từ và tính từ", "danh tu va tinh tu", "N và Adj", "N va Adj", "vừa N vừa Adj", "vua N vua Adj", "danh từ", "danh tu"
      ],
      hint: "Nghĩa là người đại diện (N) hoặc mang tính đại diện (Adj)",
      explanation: "Representative vừa là Danh từ (người đại diện), vừa là Tính từ (mang tính đại diện)."
    },
    {
      id: "gq_13",
      topic: "Cụm danh từ",
      question: "Nêu công thức đầy đủ của Cụm danh từ (Noun Phrase)?",
      correctAnswer: "MT/TTSH + ADV + ADJ + N",
      acceptableAnswers: [
        "MT/TTSH + ADV + ADJ + N", "MT + ADV + ADJ + N", "TTSH + ADV + ADJ + N", "ADV + ADJ + N", "MT/TTSH + Adv + Adj + N", "mạo từ + adv + adj + n", "mt + adv + adj + n"
      ],
      hint: "[Mạo từ/TTSH] + Trạng từ + Tính từ + Danh từ chính",
      explanation: "Công thức: [Mạo từ / TTSH / Hạn định từ] + ADV + ADJ + NOUN. Ví dụ: An extremely beautiful actress."
    },
    {
      id: "gq_14",
      topic: "Quy tắc dịch câu",
      question: "Khi gặp một Cụm danh từ trong câu, ta phải dịch theo thứ tự nào?",
      correctAnswer: "phải sang trái",
      acceptableAnswers: [
        "phải sang trái", "phai sang trai", "phải qua trái", "phai qua trai", "từ cuối lên đầu", "tu cuoi len dau", "từ phải sang trái", "tu phai sang trai"
      ],
      hint: "Dịch từ danh từ chính đứng ở cuối cụm ngược lên đầu",
      explanation: "Cụm danh từ luôn dịch từ Phải sang Trái (dịch danh từ cuối trước). Tổng thể câu dịch từ Trái sang Phải."
    },
    {
      id: "gq_15",
      topic: "Phân loại danh từ",
      question: "Danh từ chỉ NGƯỜI (employee, manager...) có đếm được không?",
      correctAnswer: "có",
      acceptableAnswers: [
        "có", "co", "đếm được", "dem duoc", "luôn luôn đếm được", "luon luon dem duoc", "yes"
      ],
      hint: "Tất cả danh từ chỉ người trong tiếng Anh đều có dạng số ít và số nhiều",
      explanation: "Quy tắc vàng: Danh từ chỉ người LUÔN LUÔN đếm được (an employee, two employees)."
    },
    {
      id: "gq_16",
      topic: "Phân loại danh từ",
      question: "Danh từ đếm được ở dạng số ít (ví dụ: book, table) có được đứng một mình không?",
      correctAnswer: "không",
      acceptableAnswers: [
        "không", "khong", "không bao giờ", "khong bao gio", "no"
      ],
      hint: "Bắt buộc phải có mạo từ (a/an/the) hoặc tính từ sở hữu đi kèm",
      explanation: "Danh từ đếm được số ít KHÔNG BAO GIỜ đứng trơ trọi một mình, phải có mạo từ (a/an/the) hoặc TTSH (my/your...)."
    },
    {
      id: "gq_17",
      topic: "Danh từ không đếm được",
      question: "Information (thông tin) là danh từ đếm được hay không đếm được?",
      correctAnswer: "không đếm được",
      acceptableAnswers: [
        "không đếm được", "khong dem duoc", "uncountable", "N không đếm được", "N khong dem duoc"
      ],
      hint: "Tuyệt đối không dùng 'an information' hay thêm '-s'",
      explanation: "Information là danh từ không đếm được. Muốn nói 'một mẩu thông tin', dùng 'a piece of information'."
    },
    {
      id: "gq_18",
      topic: "Danh từ không đếm được",
      question: "Kể 3 danh từ không đếm được tiêu biểu trong đề thi TOEIC?",
      correctAnswer: "information, equipment, knowledge",
      acceptableAnswers: [
        "information, equipment, knowledge", "information equipment knowledge", "information, equipment, progress", "equipment, information, knowledge", "information, equipment", "equipment, knowledge, information"
      ],
      hint: "Thông tin (i...), thiết bị (e...), kiến thức (k...)",
      explanation: "Các danh từ không đếm được kinh điển: information, equipment, knowledge, progress, luggage, furniture, money, water."
    },
    {
      id: "gq_19",
      topic: "Vị trí danh từ",
      question: "Kể ít nhất 3 vị trí vàng của Danh từ trong câu Part 5?",
      correctAnswer: "Chủ ngữ, sau V, sau giới từ",
      acceptableAnswers: [
        "Chủ ngữ, sau V, sau giới từ", "chu ngu, sau v, sau gioi tu", "S, O, sau prep", "làm chủ ngữ, làm tân ngữ, sau giới từ", "chủ ngữ, tân ngữ, sau giới từ", "S, O, sau giới từ"
      ],
      hint: "Đứng đầu câu làm S, đứng sau động từ làm O, đứng sau in/on/at...",
      explanation: "6 Vị trí vàng: Đầu câu làm S, sau V làm O, sau Giới từ, sau TTSH, sau Mạo từ, sau Tính từ."
    },
    {
      id: "gq_20",
      topic: "Danh từ không đếm được",
      question: "Động từ đi theo sau một Danh từ không đếm được (làm chủ ngữ) được chia ở số ít hay số nhiều?",
      correctAnswer: "số ít",
      acceptableAnswers: [
        "số ít", "so it", "dạng số ít", "dang so it", "singular"
      ],
      hint: "Ví dụ: Information is clear (dùng is, was, has, V_s/es)",
      explanation: "Danh từ không đếm được khi làm chủ ngữ luôn chia động từ ở dạng SỐ ÍT (is, was, has, V_s/es)."
    }
  ],

  // 3. VĂN BẢN MẪU ĐỂ DÁN VÀO Ô NẠP DỮ LIỆU
  sampleImportText: `Câu đơn | Mẫu câu đơn 1 là gì? | S + V nội | S + V noi, S + Vnội, s + v noi, s+v noi | Kể về hành động của bản thân chủ thể (Ví dụ: I sleep)
Câu đơn | Mẫu câu đơn 2 là gì? | S + V ngoại + O | S + V ngoai + O, S + Vngoai + O, s+v ngoai+o | Hành động tác động lên đối tượng khác (Ví dụ: My mother made a cake)
Câu đơn | Mẫu câu đơn 3 là gì? | S + V linking + phần miêu tả | S + V linking + phan mieu ta, S + V linking + Adj, S + V linking + N | Dùng để miêu tả danh tính hoặc đặc điểm (Ví dụ: The girl is attractive)
Đuôi từ | Nêu 3 đuôi danh từ chỉ người thông dụng? | -er, -or, -ee | -er -or -ee, er or ee, -ee -er -or | manager, instructor, employee...
Bẫy đuôi | Nêu 3 danh từ có đuôi -al đặc biệt? | proposal, approval, renewal | proposal approval renewal, proposal, approval, renewal, arrival | Đây là các danh từ hay bị nhầm thành tính từ trong đề Part 5
Cụm Noun | Công thức chuẩn của Cụm danh từ là gì? | MT/TTSH + ADV + ADJ + N | MT + ADV + ADJ + N, TTSH + ADV + ADJ + N, ADV + ADJ + N | Ví dụ: An extremely beautiful actress
Cụm Noun | Thứ tự dịch cụm danh từ là gì? | phải sang trái | tu phai sang trai, phai qua trai, tu cuoi len dau, cuoi len dau | Dịch từ danh từ chính cuối cụm ngược lên đầu
Từ loại | Information là danh từ đếm được hay không đếm được? | không đếm được | khong dem duoc, uncountable, N khong dem duoc | Không bao giờ dùng an information hay thêm -s`
};

if (typeof window !== "undefined") {
  window.TOEIC_GRAMMAR_DATA = TOEIC_GRAMMAR_DATA;
}
