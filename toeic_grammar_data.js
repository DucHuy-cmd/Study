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
,
    {
      id: "topic_nhan_biet_tinh_tu",
      category: "tinh_trang_tu",
      categoryLabel: "Tính từ & Trạng từ",
      icon: "⭐",
      title: "1. Nhận Biết Tính Từ, 6 Đuôi Thông Dụng & Tính Từ Phân Từ (-ing / -ed)",
      badge: "Đuôi & Phân từ",
      contentHtml: `
        <div class="space-y-4 text-xs sm:text-sm text-slate-700 leading-relaxed">
          <div class="p-3.5 bg-blue-50/80 rounded-2xl border border-blue-200">
            <h5 class="font-extrabold text-blue-900 mb-1 flex items-center gap-1.5">
              <span>🎯</span> <span>1. Định nghĩa Tính từ (Adjective - Adj):</span>
            </h5>
            <p class="text-slate-700">
              Tính từ là từ dùng để <strong>mô tả tính chất, trạng thái</strong> của người hoặc vật.
            </p>
            <div class="flex flex-wrap gap-1.5 mt-2 text-xs">
              <span class="px-2 py-0.5 bg-white border border-blue-200 rounded-md font-semibold">smart (thông minh)</span>
              <span class="px-2 py-0.5 bg-white border border-blue-200 rounded-md font-semibold">cold (lạnh)</span>
              <span class="px-2 py-0.5 bg-white border border-blue-200 rounded-md font-semibold">fast (nhanh)</span>
              <span class="px-2 py-0.5 bg-white border border-blue-200 rounded-md font-semibold">sharp (sắc bén)</span>
            </div>
          </div>

          <div class="p-3.5 bg-white rounded-2xl border border-slate-200 space-y-2">
            <h5 class="font-extrabold text-slate-900 flex items-center gap-1.5">
              <span>🏷️</span> <span>2. 6 Đuôi tính từ thông dụng (Học thuộc lòng):</span>
            </h5>
            <div class="p-2.5 bg-amber-50 border border-amber-200 rounded-xl font-mono text-center font-extrabold text-amber-900 text-xs sm:text-sm shadow-2xs">
              -ful, -al, -able, -ic, -ive, -ous
            </div>
            <div class="grid grid-cols-2 sm:grid-cols-3 gap-2 pt-1 text-xs">
              <div class="p-2 bg-slate-50 rounded-xl border border-slate-100"><code>-ful</code>: helpful, careful</div>
              <div class="p-2 bg-slate-50 rounded-xl border border-slate-100"><code>-al</code>: central, financial</div>
              <div class="p-2 bg-slate-50 rounded-xl border border-slate-100"><code>-able</code>: flexible, available</div>
              <div class="p-2 bg-slate-50 rounded-xl border border-slate-100"><code>-ic</code>: specific, artistic</div>
              <div class="p-2 bg-slate-50 rounded-xl border border-slate-100"><code>-ive</code>: creative, active</div>
              <div class="p-2 bg-slate-50 rounded-xl border border-slate-100"><code>-ous</code>: dangerous, famous</div>
            </div>
            <p class="text-[11px] text-indigo-700 font-semibold italic pt-1">
              💡 Lưu ý thứ tự ưu tiên: Ưu tiên xét đuôi tính từ gốc trước, sau đó mới xét đến tính từ phân từ (-ing / -ed).
            </p>
          </div>

          <div class="p-3.5 bg-emerald-50/70 rounded-2xl border border-emerald-200 space-y-2">
            <h5 class="font-extrabold text-emerald-950 flex items-center gap-1.5">
              <span>⚖️</span> <span>3. Tính từ phân từ: -ing vs -ed (Bẫy kinh điển Part 5):</span>
            </h5>
            <div class="grid grid-cols-1 md:grid-cols-2 gap-3 pt-1">
              <div class="bg-white p-3 rounded-xl border border-emerald-200 shadow-2xs space-y-1.5">
                <span class="font-extrabold text-emerald-800 text-xs uppercase tracking-wider block">Adj (-ing) • Bản chất / Chủ động</span>
                <p class="text-xs text-slate-700">Diễn tả <strong>bản chất, tính chất</strong> của một ai hoặc cái gì đó.</p>
                <div class="text-[11px] bg-emerald-50/60 p-2 rounded-lg font-mono text-emerald-950 space-y-0.5">
                  <div>• <em>swimming pool</em> (hồ bơi)</div>
                  <div>• <em>The movie is interesting.</em> (bộ phim hay)</div>
                  <div>• <em>a demanding job</em> (công việc đòi hỏi cao)</div>
                </div>
              </div>

              <div class="bg-white p-3 rounded-xl border border-emerald-200 shadow-2xs space-y-1.5">
                <span class="font-extrabold text-teal-800 text-xs uppercase tracking-wider block">Adj (-ed) • Cảm nhận / Bị động</span>
                <p class="text-xs text-slate-700">Diễn tả <strong>cảm nhận của con người</strong> về thứ gì đó, hoặc mang ý <strong>bị động</strong>.</p>
                <div class="text-[11px] bg-teal-50/60 p-2 rounded-lg font-mono text-teal-950 space-y-0.5">
                  <div>• <em>I am interested in reading books.</em> (cảm xúc)</div>
                  <div>• <em>an attached file</em> (tập tin được đính kèm)</div>
                  <div>• <em>The door is locked.</em> (cửa bị khóa)</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      `
    },
    {
      id: "topic_vi_tri_tinh_tu",
      category: "tinh_trang_tu",
      categoryLabel: "Tính từ & Trạng từ",
      icon: "📍",
      title: "2. Vị Trí Của Tính Từ & Cấu Trúc Ngoại Động Từ Đặc Biệt",
      badge: "Vị trí & Ngoại V đặc biệt",
      contentHtml: `
        <div class="space-y-4 text-xs sm:text-sm text-slate-700 leading-relaxed">
          <div class="p-3.5 bg-white rounded-2xl border border-slate-200 space-y-1.5">
            <h5 class="font-extrabold text-slate-900 flex items-center gap-1.5">
              <span>1️⃣</span> <span>Trong Cụm Danh Từ (Noun Phrase):</span>
            </h5>
            <div class="font-mono text-xs sm:text-sm font-extrabold text-indigo-700 bg-indigo-50 p-2.5 rounded-xl border border-indigo-200 text-center">
              [MT / TTSH / Hạn định từ] + Adj + N
            </div>
            <p class="text-xs text-slate-600">
              Tính từ đứng trong cụm danh từ để <strong>bổ nghĩa cho danh từ đứng sau (danh từ cuối cụm)</strong>.
            </p>
            <div class="p-2 bg-slate-50 rounded-xl text-xs font-mono">
              VD: <em>A <strong>smart</strong> student is doing his homework.</em>
            </div>
          </div>

          <div class="p-3.5 bg-blue-50/80 rounded-2xl border border-blue-200 space-y-2">
            <h5 class="font-extrabold text-blue-900 flex items-center gap-1.5">
              <span>2️⃣</span> <span>Ngoài Cụm Danh Từ (Sau Linking Verbs - Động từ nối):</span>
            </h5>
            <div class="font-mono text-xs sm:text-sm font-extrabold text-blue-800 bg-white p-2.5 rounded-xl border border-blue-200 text-center shadow-2xs">
              S + V_linking + Adj
            </div>
            <p class="text-xs text-slate-700">
              Tính từ đứng sau Linking Verb để <strong>bổ nghĩa cho danh từ ở vị trí chủ ngữ</strong>.
            </p>
            <div class="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs">
              <div class="p-2 bg-white rounded-xl border border-blue-100">
                <strong>• Giác quan:</strong> <em>look</em> (trông), <em>taste</em> (nếm), <em>smell</em> (ngửi), <em>sound</em> (nghe), <em>feel</em> (cảm thấy)
              </div>
              <div class="p-2 bg-white rounded-xl border border-blue-100">
                <strong>• Miêu tả trạng thái:</strong> <em>be</em> (thì, là), <em>seem</em> (dường như), <em>appear</em> (có vẻ)
              </div>
              <div class="p-2 bg-white rounded-xl border border-blue-100">
                <strong>• Chuyển đổi trạng thái:</strong> <em>turn, become, get</em> (trở nên)
              </div>
              <div class="p-2 bg-white rounded-xl border border-blue-100">
                <strong>• Giữ nguyên trạng thái:</strong> <em>remain, stay</em> (giữ nguyên)
              </div>
            </div>
            <div class="p-2 bg-white rounded-xl text-xs font-mono border border-blue-100">
              VD: <em>The sky became <strong>dark</strong>.</em> (dark bổ nghĩa cho The sky)
            </div>
          </div>

          <div class="p-3.5 bg-gradient-to-r from-amber-50 to-orange-50 rounded-2xl border border-amber-300 space-y-2">
            <h5 class="font-extrabold text-amber-950 flex items-center gap-1.5">
              <span>⭐</span> <span>3. Cấu trúc Ngoại Động Từ Đặc Biệt (Bắt buộc học thuộc):</span>
            </h5>
            <div class="font-mono text-xs sm:text-sm font-black text-rose-700 bg-white p-2.5 rounded-xl border border-rose-200 text-center shadow-2xs">
              S + V_ngoại_đặc_biệt + O + Adj
            </div>
            <p class="text-xs text-amber-900 font-semibold">
              👉 Tính từ đứng sau tân ngữ để <strong>bổ nghĩa cho danh từ ở vị trí tân ngữ (O)</strong>!
            </p>
            <div class="overflow-x-auto">
              <table class="w-full text-xs text-left bg-white rounded-xl overflow-hidden border border-amber-200">
                <thead class="bg-amber-100/70 text-amber-900 font-bold border-b border-amber-200">
                  <tr>
                    <th class="p-2">Động từ đặc biệt</th>
                    <th class="p-2">Ý nghĩa</th>
                    <th class="p-2">Ví dụ thực tế</th>
                  </tr>
                </thead>
                <tbody class="divide-y divide-amber-100 font-medium">
                  <tr><td class="p-2 font-bold font-mono">Find</td><td class="p-2">Cảm thấy</td><td class="p-2">I find the test <strong>easy</strong>.</td></tr>
                  <tr><td class="p-2 font-bold font-mono">Deem</td><td class="p-2">Cho rằng / Cảm thấy</td><td class="p-2">The board deemed it <strong>necessary</strong>.</td></tr>
                  <tr><td class="p-2 font-bold font-mono">Make</td><td class="p-2">Làm cho</td><td class="p-2">The mother made the cake <strong>delicious</strong>.</td></tr>
                  <tr><td class="p-2 font-bold font-mono">Keep</td><td class="p-2">Giữ cho</td><td class="p-2">Please keep the room <strong>clean</strong>.</td></tr>
                  <tr><td class="p-2 font-bold font-mono">Leave</td><td class="p-2">Để cho</td><td class="p-2">Don't leave the door <strong>open</strong>.</td></tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      `
    },
    {
      id: "topic_nhan_biet_trang_tu",
      category: "tinh_trang_tu",
      categoryLabel: "Tính từ & Trạng từ",
      icon: "⚡",
      title: "3. Nhận Biết Trạng Từ (Adverb) & Các Trường Hợp Bất Quy Tắc",
      badge: "Đuôi & Bất quy tắc",
      contentHtml: `
        <div class="space-y-4 text-xs sm:text-sm text-slate-700 leading-relaxed">
          <div class="p-3.5 bg-indigo-50/80 rounded-2xl border border-indigo-200 space-y-1.5">
            <h5 class="font-extrabold text-indigo-900 flex items-center gap-1.5">
              <span>🎯</span> <span>1. Định nghĩa & Công thức cấu tạo Trạng từ:</span>
            </h5>
            <p class="text-slate-700">
              Trạng từ (Adverb) là từ dùng để bổ nghĩa cho <strong>động từ, tính từ, trạng từ khác hoặc cả câu</strong>, chỉ cách thức, thời gian, mức độ, nơi chốn...
            </p>
            <div class="font-mono text-xs sm:text-sm font-extrabold text-indigo-800 bg-white p-2.5 rounded-xl border border-indigo-200 text-center shadow-2xs">
              Adj + -ly ➔ Adverb (Trạng từ)
            </div>
            <div class="flex flex-wrap gap-2 text-xs pt-1">
              <span class="p-1.5 bg-white rounded-lg border border-indigo-100">quick + -ly ➔ <strong>quickly</strong></span>
              <span class="p-1.5 bg-white rounded-lg border border-indigo-100">happy + -ly ➔ <strong>happily</strong></span>
              <span class="p-1.5 bg-white rounded-lg border border-indigo-100">careful + -ly ➔ <strong>carefully</strong></span>
            </div>
            <p class="text-[11px] text-indigo-700 font-semibold italic pt-0.5">
              💡 Mẹo đảo ngược: Trạng từ bỏ đuôi -ly ➔ Tính từ (quickly bỏ -ly ➔ quick).
            </p>
          </div>

          <div class="p-3.5 bg-white rounded-2xl border border-slate-200 space-y-2">
            <h5 class="font-extrabold text-slate-900 flex items-center gap-1.5">
              <span>⚖️</span> <span>2. Phân biệt Tính từ vs Trạng từ:</span>
            </h5>
            <div class="grid grid-cols-1 sm:grid-cols-2 gap-2.5 text-xs">
              <div class="p-3 bg-blue-50/70 rounded-xl border border-blue-200">
                <span class="font-bold text-blue-900 block mb-1">Về Ý Nghĩa:</span>
                Trạng từ và tính từ thường có cùng ý nghĩa gốc:<br>
                • <em>good</em> (tốt) – <em>well</em> (tốt)<br>
                • <em>quick</em> (nhanh) – <em>quickly</em> (nhanh)
              </div>
              <div class="p-3 bg-purple-50/70 rounded-xl border border-purple-200">
                <span class="font-bold text-purple-900 block mb-1">Về Vai Trò:</span>
                • <strong>Tính từ:</strong> Bổ nghĩa duy nhất cho <strong>Danh từ</strong>.<br>
                • <strong>Trạng từ:</strong> Bổ nghĩa cho các thành phần khác <strong>TRỪ Danh từ</strong>.
              </div>
            </div>
          </div>

          <div class="p-3.5 bg-rose-50/80 rounded-2xl border border-rose-200 space-y-2">
            <h5 class="font-extrabold text-rose-950 flex items-center gap-1.5">
              <span>⚠️</span> <span>3. Các Trạng từ đặc biệt & Bẫy nguy hiểm trong đề thi:</span>
            </h5>
            <div class="space-y-1.5 text-xs">
              <div class="p-2 bg-white rounded-xl border border-rose-100">
                <strong>• Từ vừa là Tính từ, vừa là Trạng từ (KHÔNG thêm -ly):</strong><br>
                <code class="text-rose-700 font-bold">hard, late, early, fast, far, high, close</code><br>
                VD: <em>He works hard (adv).</em> KHÔNG dùng <em>hardly</em> với nghĩa chăm chỉ!
              </div>
              <div class="p-2 bg-white rounded-xl border border-rose-100">
                <strong>• Bẫy đổi nghĩa khi thêm -ly:</strong><br>
                • <code>hard</code> (chăm chỉ/vất vả) $\neq$ <code>hardly</code> (hầu như không, hiếm khi).<br>
                • <code>late</code> (muộn, trễ) $\neq$ <code>lately</code> (dạo gần đây).
              </div>
              <div class="p-2 bg-white rounded-xl border border-rose-100">
                <strong>• Trạng từ bất quy tắc:</strong><br>
                Tính từ <code>good</code> ➔ Trạng từ là <code>well</code> (không có goodly).
              </div>
            </div>
          </div>
        </div>
      `
    },
    {
      id: "topic_vi_tri_trang_tu",
      category: "tinh_trang_tu",
      categoryLabel: "Tính từ & Trạng từ",
      icon: "🎯",
      title: "4. 4 Vị Trí Của Trạng Từ & 3 'Vị Trí Vàng' Bắt Buộc Chọn Adv Trong Part 5",
      badge: "Mẹo thi Part 5",
      contentHtml: `
        <div class="space-y-4 text-xs sm:text-sm text-slate-700 leading-relaxed">
          <div class="p-3.5 bg-white rounded-2xl border border-slate-200 space-y-2">
            <h5 class="font-extrabold text-slate-900 flex items-center gap-1.5">
              <span>📌</span> <span>1. 4 Vị trí và chức năng cơ bản của Trạng từ:</span>
            </h5>
            <div class="overflow-x-auto">
              <table class="w-full text-xs text-left bg-slate-50 rounded-xl overflow-hidden border border-slate-200">
                <thead class="bg-slate-200/80 text-slate-800 font-bold">
                  <tr>
                    <th class="p-2">Câu ví dụ</th>
                    <th class="p-2">Vị trí</th>
                    <th class="p-2">Chức năng</th>
                  </tr>
                </thead>
                <tbody class="divide-y divide-slate-200 bg-white">
                  <tr>
                    <td class="p-2 font-mono">She <strong>quietly</strong> opened the door.</td>
                    <td class="p-2 font-semibold text-blue-700">Trước động từ thường</td>
                    <td class="p-2 text-slate-600">Bổ nghĩa cho động từ thường</td>
                  </tr>
                  <tr>
                    <td class="p-2 font-mono">The manager is <strong>really</strong> kind.</td>
                    <td class="p-2 font-semibold text-indigo-700">Adv + Adj</td>
                    <td class="p-2 text-slate-600">Bổ nghĩa cho tính từ</td>
                  </tr>
                  <tr>
                    <td class="p-2 font-mono">Delivered <strong>very</strong> professionally.</td>
                    <td class="p-2 font-semibold text-purple-700">Adv + Adv</td>
                    <td class="p-2 text-slate-600">Bổ nghĩa cho trạng từ khác</td>
                  </tr>
                  <tr>
                    <td class="p-2 font-mono"><strong>Generally</strong>, a worker needs...</td>
                    <td class="p-2 font-semibold text-emerald-700">Adv, S + V...</td>
                    <td class="p-2 text-slate-600">Đầu câu, bổ nghĩa cho cả câu</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          <div class="p-4 bg-gradient-to-r from-blue-700 via-indigo-700 to-sky-700 rounded-3xl text-white shadow-md space-y-3">
            <div class="flex items-center gap-2">
              <span class="text-xl">🏆</span>
              <h5 class="font-black text-sm sm:text-base text-white">3 "VỊ TRÍ VÀNG" BẮT BUỘC CHỌN TRẠNG TỪ TRONG PART 5:</h5>
            </div>
            <p class="text-xs text-blue-100 leading-relaxed">
              Trong đề thi TOEIC Part 5, khi thấy khoảng trống bị <strong>kẹp giữa</strong> 3 cấu trúc sau, 99% chọn ngay <strong>Trạng từ (-ly)</strong>:
            </p>

            <div class="space-y-2 text-xs">
              <div class="p-2.5 bg-white/10 rounded-2xl border border-white/20 backdrop-blur-xs">
                <span class="font-extrabold text-amber-300 block mb-0.5">(1) Kẹp giữa to be và Adj / V-ing / V3/ed:</span>
                <div class="font-mono font-bold text-white bg-black/25 px-2 py-1 rounded-lg">
                  S + be + <span class="text-amber-300 underline">[ Adv ]</span> + Adj / V-ing / V3/ed
                </div>
                <div class="text-[11px] text-blue-100 mt-1">VD: The project was <em>successfully</em> completed.</div>
              </div>

              <div class="p-2.5 bg-white/10 rounded-2xl border border-white/20 backdrop-blur-xs">
                <span class="font-extrabold text-amber-300 block mb-0.5">(2) Kẹp giữa have/has/had và V3/ed:</span>
                <div class="font-mono font-bold text-white bg-black/25 px-2 py-1 rounded-lg">
                  S + have / has / had + <span class="text-amber-300 underline">[ Adv ]</span> + V3/ed
                </div>
                <div class="text-[11px] text-blue-100 mt-1">VD: We have <em>already</em> received the payment.</div>
              </div>

              <div class="p-2.5 bg-white/10 rounded-2xl border border-white/20 backdrop-blur-xs">
                <span class="font-extrabold text-amber-300 block mb-0.5">(3) Kẹp giữa Động từ khiếm khuyết (Modal Verb) và V0:</span>
                <div class="font-mono font-bold text-white bg-black/25 px-2 py-1 rounded-lg">
                  S + Modal Verb (can, may, should, must...) + <span class="text-amber-300 underline">[ Adv ]</span> + V0
                </div>
                <div class="text-[11px] text-blue-100 mt-1">VD: You should <em>strictly</em> follow the regulations.</div>
              </div>
            </div>
          </div>
        </div>
      `
    }
  ],

  // 2. BỘ CÂU HỎI LUYỆN GÕ PHẢN XẠ (20 CÂU CỐT LÕI)
  practiceQuestions: [
    {
      id: "gq_1",
      category: "dong_danh_tu",
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
      category: "dong_danh_tu",
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
      category: "dong_danh_tu",
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
      category: "dong_danh_tu",
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
      category: "dong_danh_tu",
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
      category: "dong_danh_tu",
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
      category: "dong_danh_tu",
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
      category: "dong_danh_tu",
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
      category: "dong_danh_tu",
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
      category: "dong_danh_tu",
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
      category: "dong_danh_tu",
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
      category: "dong_danh_tu",
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
      category: "dong_danh_tu",
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
      category: "dong_danh_tu",
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
      category: "dong_danh_tu",
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
      category: "dong_danh_tu",
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
      category: "dong_danh_tu",
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
      category: "dong_danh_tu",
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
      category: "dong_danh_tu",
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
      category: "dong_danh_tu",
      topic: "Danh từ không đếm được",
      question: "Động từ đi theo sau một Danh từ không đếm được (làm chủ ngữ) được chia ở số ít hay số nhiều?",
      correctAnswer: "số ít",
      acceptableAnswers: [
        "số ít", "so it", "dạng số ít", "dang so it", "singular"
      ],
      hint: "Ví dụ: Information is clear (dùng is, was, has, V_s/es)",
      explanation: "Danh từ không đếm được khi làm chủ ngữ luôn chia động từ ở dạng SỐ ÍT (is, was, has, V_s/es)."
    }
,
    {
      id: "gq_21",
      category: "tinh_trang_tu",
      topic: "Đuôi tính từ",
      question: "Kể ít nhất 4 đuôi tính từ phổ biến trong tiếng Anh (ví dụ: -ful, -able...)?",
      correctAnswer: "-ful, -al, -able, -ive, -ous, -ic",
      acceptableAnswers: [
        "-ful, -al, -able, -ive, -ous, -ic", "-ful, -al, -able, -ive", "-ful -al -able -ive", "ful, al, able, ive", "ful al able ive", "ful, al, able, ive, ous", "ful able al ive", "-ful, -able, -al, -ive, -ous"
      ],
      hint: "6 Đuôi vàng: -ful, -al, -able, -ic, -ive, -ous",
      explanation: "6 Đuôi tính từ kinh điển trong đề thi TOEIC: -ful, -al, -able, -ic, -ive, -ous."
    },
    {
      id: "gq_22",
      category: "tinh_trang_tu",
      topic: "Tính từ phân từ",
      question: "Tính từ đuôi -ing dùng để diễn tả điều gì của đối tượng?",
      correctAnswer: "bản chất",
      acceptableAnswers: [
        "bản chất", "ban chat", "tính chất", "tinh chat", "chủ động", "chu dong", "bản chất sự vật", "tính chất của người hoặc vật"
      ],
      hint: "Ví dụ: an interesting movie (bản chất bộ phim hay)",
      explanation: "Tính từ đuôi -ing diễn tả BẢN CHẤT, tính chất vốn có của sự vật, sự việc hoặc con người."
    },
    {
      id: "gq_23",
      category: "tinh_trang_tu",
      topic: "Tính từ phân từ",
      question: "Tính từ đuôi -ed dùng để diễn tả điều gì?",
      correctAnswer: "cảm xúc",
      acceptableAnswers: [
        "cảm xúc", "cam xuc", "bị động", "bi dong", "cảm nhận", "cam nhan", "cảm xúc con người", "cam xuc con nguoi"
      ],
      hint: "Ví dụ: I am interested (tôi cảm thấy thích thú - cảm xúc)",
      explanation: "Tính từ đuôi -ed diễn tả CẢM XÚC, cảm nhận của con người, hoặc trạng thái BỊ ĐỘNG."
    },
    {
      id: "gq_24",
      category: "tinh_trang_tu",
      topic: "Tính từ phân từ",
      question: "Chọn từ đúng: 'I am (interested / interesting) in reading books'?",
      correctAnswer: "interested",
      acceptableAnswers: [
        "interested"
      ],
      hint: "Diễn tả cảm xúc, sự quan tâm của bản thân người nói (I am...)",
      explanation: "Chọn 'interested' vì diễn tả cảm xúc của chủ ngữ người: be interested in sth (thích thú, quan tâm đến cái gì)."
    },
    {
      id: "gq_25",
      category: "tinh_trang_tu",
      topic: "Tính từ phân từ",
      question: "Chọn từ đúng: 'The movie we watched yesterday was very (interested / interesting)'?",
      correctAnswer: "interesting",
      acceptableAnswers: [
        "interesting"
      ],
      hint: "Diễn tả bản chất của bộ phim (the movie)",
      explanation: "Chọn 'interesting' vì miêu tả bản chất của sự vật (bộ phim hay, hấp dẫn)."
    },
    {
      id: "gq_26",
      category: "tinh_trang_tu",
      topic: "Linking Verbs",
      question: "Kể 4 động từ nối (Linking Verbs) chỉ giác quan đi kèm tính từ?",
      correctAnswer: "look, sound, smell, taste, feel",
      acceptableAnswers: [
        "look, sound, smell, taste, feel", "look sound smell taste feel", "look, taste, smell, sound", "look, sound, smell, taste", "look sound taste feel", "taste, smell, sound, feel"
      ],
      hint: "Trông (l...), nghe (s...), ngửi (sm...), nếm (t...), cảm giác (f...)",
      explanation: "Các Linking Verbs chỉ giác quan luôn đi cùng Tính từ: look, sound, smell, taste, feel."
    },
    {
      id: "gq_27",
      category: "tinh_trang_tu",
      topic: "Ngoại động từ đặc biệt",
      question: "Nêu công thức của câu với Ngoại động từ đặc biệt (find, deem, make, keep, leave)?",
      correctAnswer: "S + V + O + Adj",
      acceptableAnswers: [
        "S + V + O + Adj", "S+V+O+Adj", "S + V_ngoại đặc biệt + O + Adj", "S + V ngoại đặc biệt + O + Adj", "S + V dac biet + O + Adj"
      ],
      hint: "Chủ ngữ + Động từ đặc biệt + Tân ngữ + Tính từ",
      explanation: "Công thức vàng: S + V_đặc biệt + O + Adj (Tính từ đứng sau tân ngữ để bổ nghĩa cho tân ngữ)."
    },
    {
      id: "gq_28",
      category: "tinh_trang_tu",
      topic: "Ngoại động từ đặc biệt",
      question: "Kể 5 ngoại động từ đặc biệt đi theo cấu trúc S + V + O + Adj?",
      correctAnswer: "find, deem, make, keep, leave",
      acceptableAnswers: [
        "find, deem, make, keep, leave", "find deem make keep leave", "make, keep, find, deem, leave", "keep, make, find, deem, leave"
      ],
      hint: "Cảm thấy (f..., d...), làm cho (m...), giữ cho (k...), để cho (l...)",
      explanation: "5 Ngoại động từ đặc biệt bắt buộc học thuộc: Find, Deem, Make, Keep, Leave."
    },
    {
      id: "gq_29",
      category: "tinh_trang_tu",
      topic: "Ngoại động từ đặc biệt",
      question: "Trong câu 'The mother made the cake delicious', tính từ 'delicious' bổ nghĩa cho từ nào?",
      correctAnswer: "the cake",
      acceptableAnswers: [
        "the cake", "cake", "tân ngữ", "tan ngu", "tân ngữ the cake", "O"
      ],
      hint: "Bổ nghĩa cho danh từ đứng trước nó làm tân ngữ",
      explanation: "Tính từ 'delicious' đứng sau tân ngữ 'the cake' để bổ nghĩa trực tiếp cho tân ngữ 'the cake'."
    },
    {
      id: "gq_30",
      category: "tinh_trang_tu",
      topic: "Quy tắc tạo trạng từ",
      question: "Trạng từ thông thường được tạo thành từ công thức nào?",
      correctAnswer: "Adj + -ly",
      acceptableAnswers: [
        "Adj + -ly", "adj + ly", "tính từ + ly", "tinh tu + ly", "adj+ly", "Adj + ly"
      ],
      hint: "Tính từ thêm đuôi -ly (quick ➔ quickly)",
      explanation: "Trạng từ = Tính từ + đuôi '-ly' (quick ➔ quickly, careful ➔ carefully)."
    },
    {
      id: "gq_31",
      category: "tinh_trang_tu",
      topic: "Trạng từ bất quy tắc",
      question: "Trạng từ của tính từ 'good' là từ gì?",
      correctAnswer: "well",
      acceptableAnswers: [
        "well"
      ],
      hint: "Làm bài tốt: do the test ...",
      explanation: "Trạng từ của 'good' là 'well' (bất quy tắc, tuyệt đối không dùng goodly)."
    },
    {
      id: "gq_32",
      category: "tinh_trang_tu",
      topic: "Bẫy trạng từ",
      question: "Trạng từ 'hardly' có nghĩa là gì?",
      correctAnswer: "hiếm khi",
      acceptableAnswers: [
        "hiếm khi", "hiem khi", "hầu như không", "hau nhu khong"
      ],
      hint: "Mang nghĩa phủ định gần như không bao giờ...",
      explanation: "Hardly mang nghĩa 'hầu như không / hiếm khi' (khác hoàn toàn với 'hard' là chăm chỉ/vất vả)."
    },
    {
      id: "gq_33",
      category: "tinh_trang_tu",
      topic: "Vị trí vàng Part 5",
      question: "Trong cấu trúc S + be + [ ... ] + Adj hoặc V_ed, chỗ trống điền loại từ nào?",
      correctAnswer: "trạng từ",
      acceptableAnswers: [
        "trạng từ", "trang tu", "adv", "adverb"
      ],
      hint: "Từ loại có đuôi -ly bổ nghĩa cho tính từ hoặc động từ phía sau",
      explanation: "Vị trí vàng 1: S + be + [ Adv ] + Adj/V_ed (Ví dụ: The plan was successfully approved)."
    },
    {
      id: "gq_34",
      category: "tinh_trang_tu",
      topic: "Vị trí vàng Part 5",
      question: "Trong cấu trúc S + have/has + [ ... ] + V3/ed, chỗ trống điền loại từ nào?",
      correctAnswer: "trạng từ",
      acceptableAnswers: [
        "trạng từ", "trang tu", "adv", "adverb"
      ],
      hint: "Từ loại kẹp giữa trợ động từ have/has và động từ chính",
      explanation: "Vị trí vàng 2: S + have/has + [ Adv ] + V3/ed (Ví dụ: They have already finished the task)."
    },
    {
      id: "gq_35",
      category: "tinh_trang_tu",
      topic: "Vị trí vàng Part 5",
      question: "Trong cấu trúc S + Modal Verb (can, should, will...) + [ ... ] + V0, chỗ trống điền loại từ nào?",
      correctAnswer: "trạng từ",
      acceptableAnswers: [
        "trạng từ", "trang tu", "adv", "adverb"
      ],
      hint: "Từ loại kẹp giữa động từ khiếm khuyết và động từ nguyên mẫu",
      explanation: "Vị trí vàng 3: S + Modal Verb + [ Adv ] + V0 (Ví dụ: Employees must strictly follow safety rules)."
    },
    {
      id: "gq_36",
      category: "tinh_trang_tu",
      topic: "Phân biệt Adj vs Adv",
      question: "Tính từ bổ nghĩa cho loại từ nào, và trạng từ bổ nghĩa cho loại từ nào?",
      correctAnswer: "tính từ bổ nghĩa danh từ, trạng từ bổ nghĩa các thành phần khác",
      acceptableAnswers: [
        "tính từ bổ nghĩa danh từ, trạng từ bổ nghĩa các thành phần khác", "tính từ bổ nghĩa danh từ, trạng từ bổ nghĩa động từ", "tính từ bổ nghĩa danh từ", "tinh tu bo nghia danh tu", "adj cho N, adv cho khác", "tính từ cho danh từ, trạng từ cho động từ"
      ],
      hint: "Tính từ chỉ bổ nghĩa cho N; trạng từ bổ nghĩa cho V, Adj, Adv khác, cả câu...",
      explanation: "Tính từ duy nhất bổ nghĩa cho Danh từ. Trạng từ bổ nghĩa cho tất cả các thành phần khác TRỪ Danh từ."
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
