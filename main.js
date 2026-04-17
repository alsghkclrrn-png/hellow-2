
/**
 * 각 언어별 학습 데이터를 담고 있는 객체입니다.
 * 모든 설명과 뜻 풀이는 한국어로 제공되며, 한국어 발음이 포함되어 있습니다.
 */
const languageData = {
    'korean': {
        title: 'Korean (한국어)',
        flag: '🇰🇷',
        color: '#14b8a6',
        basics: [
            { type: '자음', items: 'ㄱ, ㄴ, ㄷ, ㄹ, ㅁ, ㅂ, ㅅ, ㅇ, ㅈ, ㅊ, ㅋ, ㅌ, ㅍ, ㅎ', desc: '한글의 기본이 되는 14개의 자음입니다.' },
            { type: '모음', items: 'ㅏ, ㅑ, ㅓ, ㅕ, ㅗ, ㅛ, ㅜ, ㅠ, ㅡ, ㅣ', desc: '한글의 기본이 되는 10개의 모음입니다.' },
            { type: '쌍자음', items: 'ㄲ, ㄸ, ㅃ, ㅆ, ㅉ', desc: '강한 소리를 내는 5개의 된소리 자음입니다.' },
            { type: '이중모음', items: 'ㅐ, ㅒ, ㅔ, ㅖ, ㅘ, ㅙ, ㅚ, ㅝ, ㅞ, ㅟ, ㅢ', desc: '두 개의 모음이 합쳐진 11개의 복합 모음입니다.' }
        ],
        vocabulary: [
            { word: '회의 (Meeting)', translation: '여럿이 모여 의견을 나눔', pronunciation: '[회의/회이]' },
            { word: '성공 (Success)', translation: '목적한 바를 이룸', pronunciation: '[성공]' },
            { word: '여행 (Travel)', pronunciation: '[여행]', translation: '다른 고장이나 나라를 구경함' },
            { word: '행복 (Happiness)', translation: '기쁘고 보람 있는 상태', pronunciation: '[행복]' },
            { word: '환경 (Environment)', translation: '우리를 둘러싼 자연 조건', pronunciation: '[환경]' },
            { word: '혁신 (Innovation)', translation: '새롭게 바꿈', pronunciation: '[혁씬]' },
            { word: '도전 (Challenge)', pronunciation: '[도전]', translation: '어려운 일에 맞섬' },
            { word: '기회 (Opportunity)', translation: '어떤 일을 하기에 좋은 때', pronunciation: '[기회]' },
            { word: '협력 (Cooperation)', translation: '힘을 합쳐 도움', pronunciation: '[혐녁]' },
            { word: '열정 (Passion)', translation: '뜨거운 마음', pronunciation: '[열쩡]' }
        ],
        grammar: [
            { rule: '-은/는', description: '문장의 주제나 대상을 나타내는 보조사', example: '저는 학생입니다.' },
            { rule: '-이/가', description: '문장의 주어를 나타내는 격 조사', example: '친구가 옵니다.' },
            { rule: '-을/를', description: '문장의 목적어를 나타내는 격 조사', example: '사과를 먹어요.' },
            { rule: '-에/에서', description: '장소나 방향을 나타내는 부사격 조사', example: '학교에 가요 / 집에서 공부해요.' },
            { rule: '-요 / -습니다', description: '존댓말(경어)을 만드는 종결 어미', example: '가요 (해요체) / 갑니다 (하십시오체).' },
            { rule: '현재 진행형 (-고 있다)', description: '지금 일어나고 있는 일을 표현', example: '밥을 먹고 있어요.' }
        ],
        deepGrammar: [
            { title: '은/는 vs 이/가 완벽 구분', content: '은/는은 대조나 주제를 나타낼 때 사용합니다. "저는 학생입니다"처럼 자신을 소개할 때 주로 쓰죠. 반면 이/가 는 특정 사실이나 주어를 강조할 때 씁니다. "비가 와요"처럼 자연 현상이나 새로운 정보를 말할 때 사용해보세요.', tip: '처음 만난 사람에게 자기소개할 때는 "저는 ~입니다"가 자연스러워요!' },
            { title: '해요체와 하십시오체의 차이', content: '한국어의 존댓말은 상황에 따라 달라요. "-요"는 일상적인 대화에서 부드럽게 쓰이고, "-습니다"는 군대, 뉴스, 면접 같은 아주 격식 있는 자리에서 쓰입니다. 성인 학습자라면 두 가지를 상황에 맞춰 쓰는 연습이 중요합니다.', tip: '친구 부모님을 뵈었을 때는 "-요"를 써도 충분히 예의 바르게 들려요.' },
            { title: 'ㄹ 탈락 법칙 (Irregular ㄹ)', content: '동사나 형용사의 어간이 ㄹ로 끝날 때, ㄴ, ㅂ, ㅅ 앞에서 ㄹ이 탈락합니다. 예를 들어 "살다"가 "삽니다"가 되고 "알다"가 "아는"이 됩니다.', tip: '"만들다" -> "만듭니다" / "만드는" 패턴을 기억하세요!' }
        ],
        conversation: [
            { phrase: '오늘 회의는 몇 시예요?', translation: '회의 시간을 물어볼 때', pronunciation: '[오늘 회의는 멷 씨예요?]' },
            { phrase: '제 명함입니다', translation: '비즈니스 첫 인사', pronunciation: '[제 명함임니다]' },
            { phrase: '커피 한 잔 하실래요?', translation: '가벼운 제안', pronunciation: '[커피 한 잔 하실래요?]' },
            { phrase: '말씀 많이 들었습니다', translation: '소문으로 알던 사람을 만났을 때', pronunciation: '[말씀 마니 드러씀니다]' },
            { phrase: '도와주셔서 감사합니다', pronunciation: '[도와주셔서 감사함니다]', translation: '도움에 대한 감사 표현' },
            { phrase: '주말 잘 보내세요', translation: '작별 인사', pronunciation: '[주말 잘 보내세요]' }
        ]
    },
    'english': {
        title: 'English (영어)',
        flag: '🇺🇸',
        color: '#3b82f6',
        basics: [
            { type: 'Alphabet (Phonetics)', items: 'A [ei], B [bi:], C [si:], D [di:]...', desc: '영어 읽기의 기초인 알파벳 발음입니다.' },
            { type: 'Articles (관사)', items: 'A, An, The', desc: '명사 앞에 붙어 성격(정해진 것인지 아닌지)을 나타냅니다.' },
            { type: 'Pronouns (대명사)', items: 'I, You, He, She, We, They', desc: '사람이나 사물을 대신해서 부르는 말입니다.' },
            { type: 'Sentence Type', items: 'Positive, Negative, Question', desc: '평서문, 부정문, 의문문의 기본 구조입니다.' }
        ],
        vocabulary: [
            { word: 'Quarterly Report', translation: '분기 보고서', pronunciation: '[쿼터리 리포트]' },
            { word: 'Deadline', translation: '마감 기한', pronunciation: '[데드라인]' },
            { word: 'Sustainability', translation: '지속 가능성', pronunciation: '[서스테이너빌리티]' },
            { word: 'Collaboration', translation: '협업', pronunciation: '[콜라보레이션]' },
            { word: 'Flexibility', translation: '유연성', pronunciation: '[플렉서빌리티]' },
            { word: 'Investment', translation: '투자', pronunciation: '[인베스트먼트]' },
            { word: 'Networking', translation: '네트워킹/인맥 형성', pronunciation: '[네트워킹]' },
            { word: 'Efficiency', translation: '효율성', pronunciation: '[이피션시]' },
            { word: 'Negotiation', translation: '협상', pronunciation: '[니고시에이션]' },
            { word: 'Architecture', translation: '구조/건축', pronunciation: '[아키텍처]' }
        ],
        grammar: [
            { rule: 'Passive Voice (수동태)', description: 'Be + P.P 형태, 행위의 대상을 강조', example: 'The book was written by him.' },
            { rule: 'Conditionals (가정법)', description: 'If를 사용한 가정 상황 표현', example: 'If I were you, I would go.' },
            { rule: 'Relatives (관계대명사)', description: 'Who, Which 등으로 명사 수식', example: 'The man who is tall.' },
            { rule: 'Modals (조동사)', description: 'Can, Should, Must 등 의미 추가', example: 'You should try this.' },
            { rule: 'Tenses (시제)', description: 'Present, Past, Future, Perfect', example: 'I have seen this movie.' },
            { rule: 'Gerunds (동명사)', description: 'V-ing 형태, 주어/목적어로 사용', example: 'Running is good for health.' }
        ],
        deepGrammar: [
            { title: 'The vs A/An 완벽 가이드', content: '특정한 것을 가리킬 때는 the를, 막연한 하나를 말할 때는 a/an을 씁니다. 예를 들어, "I saw a movie"는 그냥 영화 한 편을 봤다는 뜻이고, "I saw the movie"는 우리가 이미 알고 있는 그 영화를 봤다는 뜻입니다.', tip: '세상에 하나뿐인 것(the sun, the moon)에는 항상 the를 붙여요!' },
            { title: '현재완료(Have + p.p) 실전 사용법', content: '과거에 시작된 일이 지금까지 영향을 줄 때 씁니다. "I lost my key"는 그냥 과거에 잃어버렸다는 사실만 말하지만, "I have lost my key"는 잃어버려서 지금도 열쇠가 없다는 뉘앙스를 풍깁니다.', tip: '경험을 물어볼 때 "Have you ever...?" 패턴을 기억하세요.' },
            { title: 'Will vs Be going to', content: 'Will은 순간적인 결정이나 막연한 미래를, Be going to는 이미 계획된 일이나 확실한 징조가 있는 미래를 말할 때 씁니다.', tip: '비가 올 것 같은 구름을 봤다면 "It\'s going to rain!"이 정답!' }
        ],
        conversation: [
            { phrase: 'Could you give me more details?', translation: '더 자세히 말씀해 주시겠어요?', pronunciation: '[쿠쥬 기브 미 모어 디테일즈?]' },
            { phrase: 'I look forward to working with you.', translation: '함께 일하기를 기대합니다.', pronunciation: '[아이 룩 포워드 투 워킹 위드 유]' },
            { phrase: 'Let\'s touch base next week.', translation: '다음 주에 다시 이야기합시다.', pronunciation: '[레츠 터치 베이스 넥스트 위크]' },
            { phrase: 'That makes sense.', translation: '이해가 되네요 (말이 되네요).', pronunciation: '[댓 메익스 센스]' },
            { phrase: 'I agree with your point.', translation: '당신의 의견에 동의합니다.', pronunciation: '[아이 어그리 위드 유어 포인트]' },
            { phrase: 'What\'s the bottom line?', translation: '핵심(결론)이 무엇인가요?', pronunciation: '[왓츠 더 바텀 라인?]' }
        ]
    },
    'chinese': {
        title: 'Chinese (중국어)',
        flag: '🇨🇳',
        color: '#ef4444',
        basics: [
            { type: '성모 (Initials)', items: 'b, p, m, f, d, t, n, l, g, k, h, j, q, x, zh, ch, sh, r, z, c, s', desc: '글자의 앞부분을 장식하는 자음들입니다.' },
            { type: '운모 (Finals)', items: 'a, o, e, i, u, ü, ai, ei, ui, ao, ou, iu, ie, üe, er, an, en, in, un...', desc: '글자의 뒷부분을 구성하는 모음들입니다.' },
            { type: '성조 (Tones)', items: '1성(¯), 2성(ˊ), 3성(ˇ), 4성(ˋ)', desc: '음의 높낮이에 따라 의미가 달라집니다.' },
            { type: '한어병음 (Pinyin)', items: '중국어 발음 기호', desc: '한자의 발음을 영문자로 표기하는 시스템입니다.' }
        ],
        vocabulary: [
            { word: '项目 (Xiàngmù)', translation: '프로젝트', pronunciation: '[씨앙무]' },
            { word: '合作 (Hézuò)', translation: '합작/협력', pronunciation: '[허쭈오]' },
            { word: '市场 (Shìchǎng)', translation: '시장', pronunciation: '[싀창]' },
            { word: '产品 (Chǎnpǐn)', translation: '제품', pronunciation: '[찬핀]' },
            { word: '价格 (Jiàgé)', translation: '가격', pronunciation: '[지아거]' },
            { word: '质量 (Zhìliàng)', translation: '품질', pronunciation: '[싀리앙]' },
            { word: '客户 (Kèhù)', translation: '고객', pronunciation: '[커후]' },
            { word: '合同 (Hétóng)', translation: '계약서', pronunciation: '[허통]' },
            { word: '成功 (Chénggōng)', translation: '성공', pronunciation: '[청공]' },
            { word: '机会 (Jīhuì)', translation: '기회', pronunciation: '[지후이]' }
        ],
        grammar: [
            { rule: '기본 어순', description: '주어 + 동사 + 목적어 순서 (한국어와 다름)', example: '我学中文 (나는 중국어를 배운다)' },
            { rule: '吗 (Ma)', description: '문장 끝에 붙여 의문문을 만듬', example: '你好吗? (잘 지내니?)' },
            { rule: '的 (De)', description: '소유나 수식을 나타냄 (~의, ~한)', example: '我的书 (나의 책)' },
            { rule: '了 (Le)', description: '상태의 변화나 완료를 나타냄', example: '我吃饭了 (나 밥 먹었어)' },
            { rule: '把 (Bǎ) 구문', description: '동작의 결과를 강조할 때 사용', example: '我把作业做了 (나 숙제 다 했어)' },
            { rule: '是...의 (Shì...de)', description: '시간, 장소, 방식 등을 강조', example: '我是昨天来的 (나는 어제 온 거야)' }
        ],
        deepGrammar: [
            { title: '성조(Tones)를 정복하는 비결', content: '중국어는 음의 높낮이에 따라 뜻이 완전히 달라집니다. 1성은 길고 높게, 2성은 밑에서 위로, 3성은 내려갔다 올라오게, 4성은 위에서 아래로 짧게 내리꽂듯 발음하세요. 머릿속으로 음의 곡선을 그리며 발음하는 것이 성인 학습자에게 효과적입니다.', tip: '발음할 때 고개를 약간씩 움직이며 성조의 흐름을 타보세요!' },
            { title: '중국어 어순의 핵심: S-V-O', content: '한국어는 "나 사과 먹어"처럼 목적어가 중간에 오지만, 중국어는 영어와 비슷하게 "나 먹어 사과" 순으로 말합니다. 이 구조만 익숙해져도 간단한 문장은 바로 만들 수 있어요.', tip: '주어(나) + 동사(좋아해) + 목적어(너) = 我爱你!' },
            { title: '알아두면 좋은 "了"의 비밀', content: '了는 단순히 과거형이 아닙니다. 새로운 상황이 발생했거나 상태가 변화했을 때도 사용합니다. "下雨了"는 "비가 오기 시작했다"는 뜻입니다.', tip: '변화를 감지했다면 문장 끝에 了를 붙여보세요!' }
        ],
        conversation: [
            { phrase: '请多关照', translation: '잘 부탁드립니다.', pronunciation: '[칭 뚜오 꽌쟈오]' },
            { phrase: '合同准备好了吗?', translation: '계약서는 준비되었나요?', pronunciation: '[허통 쭌뻬이 하오러 마?]' },
            { phrase: '我想和你合作。', translation: '당신과 협력하고 싶습니다.', pronunciation: '[워 씨앙 허 니 허쭈오]' },
            { phrase: '这个价格太贵了。', translation: '이 가격은 너무 비싸요.', pronunciation: '[쩌거 지아거 타이 꾸이러]' },
            { phrase: '合作愉快!', translation: '즐겁게 협력합시다!', pronunciation: '[허쭈오 위콰이]' },
            { phrase: '以后常联系。', translation: '앞으로 자주 연락합시다.', pronunciation: '[이허우 창 리엔씨]' }
        ]
    },
    'japanese': {
        title: 'Japanese (일본어)',
        flag: '🇯🇵',
        color: '#ec4899',
        basics: [
            { type: '히라가나', items: 'あ, い, う, え, お / か, き, く, け, こ...', desc: '일본어의 기본 문자로 부드러운 곡선 형태입니다.' },
            { type: '가타카나', items: 'ア, イ, ウ, エ, オ / カ, キ, ク, ケ, コ...', desc: '외래어 표기에 주로 쓰이며 각진 형태입니다.' },
            { type: '한자 (Kanji)', items: '常用漢字 (조용칸지)', desc: '생활에서 자주 쓰이는 2,136개의 한자입니다.' },
            { type: '동사 그룹', items: '1그룹, 2그룹, 3그룹', desc: '활용 방식에 따라 동사를 세 분류로 나눕니다.' }
        ],
        vocabulary: [
            { word: '戦略 (Senryaku)', translation: '전략', pronunciation: '[센랴쿠]' },
            { word: '効率 (Kōritsu)', translation: '효율', pronunciation: '[코-리츠]' },
            { word: '検討 (Kentō)', translation: '검토', pronunciation: '[켄토-]' },
            { word: '共有 (Kyōyu)', translation: '공유', pronunciation: '[쿄-유]' },
            { word: '承認 (Shōnin)', translation: '승인', pronunciation: '[쇼-닌]' },
            { word: '担当 (Tandō)', translation: '담당', pronunciation: '[탄도-]' },
            { word: '名刺 (Meishi)', translation: '명함', pronunciation: '[메이시]' },
            { word: '出張 (Shutchō)', translation: '출장', pronunciation: '[슛쵸-]' },
            { word: '予算 (Yosan)', translation: '예산', pronunciation: '[요산]' },
            { word: '進捗 (Shinchoku)', translation: '진척 (진행 상황)', pronunciation: '[신쵸쿠]' }
        ],
        grammar: [
            { rule: 'て형 (Te-form)', description: '동사를 연결하거나 부탁할 때 사용', example: '食べてください (드세요)' },
            { rule: '존경어/겸양어', description: '상대를 높이거나 자신을 낮추는 표현', example: 'おっしゃる (말씀하시다) / 申す (말하다)' },
            { rule: '가능동사', description: '할 수 있다를 나타내는 변화', example: '書く -> 書ける (쓸 수 있다)' },
            { rule: '의지형', description: '하자/하겠다를 나타내는 변화', example: '行こう (가자) / しよう (하자)' },
            { rule: '수동/사역', description: '당하거나 시키는 표현', example: '言われる (듣다) / させる (시키다)' },
            { rule: '추측 (~だろう/でしょう)', description: '~일 것이다라는 추측', example: '雨が降るだろう (비가 오겠지)' }
        ],
        deepGrammar: [
            { title: '은/는(は) vs 이/가(가) 일본어판', content: '한국어와 마찬가지로 일본어도 は와 が의 구분이 중요합니다. は는 문장의 큰 주제를, が는 문장 안의 작은 주어를 나타냅니다. 예를 들어 "코끼리는 코가 길다"에서 코끼리는 は를, 코는 が를 씁니다.', tip: '처음 말하는 주어에는 が를, 이미 알고 있는 주제에는 は를 써보세요.' },
            { title: '일본어 동사의 3가지 그룹', content: '일본어 동사는 모양에 따라 1, 2, 3그룹으로 나뉩니다. 그룹에 따라 활용 방식이 다르기 때문에 동사를 외울 때 몇 그룹인지 함께 체크하는 습관이 중요합니다.', tip: '합니다(する)와 옵니다(くる)는 딱 두 개뿐인 3그룹 동사예요!' },
            { title: '비즈니스 경어의 핵심', content: '일본 직장 생활에서는 です/ます 외에도 특별한 어휘를 씁니다. "갑니다" 대신 "마이리마스(参ります)"를 쓰는 식이죠. 처음에는 "데스/마스"만 완벽해도 괜찮습니다.', tip: '상대방의 의견을 물을 때 "이카가데쇼-카?(어떠신가요?)"를 써보세요.' }
        ],
        conversation: [
            { phrase: 'お世話になっております。', translation: '항상 신세 지고 있습니다 (비즈니스 필수 인사).', pronunciation: '[오세와니 낫떼 오리마스]' },
            { phrase: 'ご確認をお願いします。', translation: '확인 부탁드립니다.', pronunciation: '[고카쿠닌오 오네가이시마스]' },
            { phrase: '承知いたしました。', translation: '잘 알겠습니다 (정중한 수락).', pronunciation: '[쇼-치 이타시마시타]' },
            { phrase: '少々お待ちください。', translation: '잠시만 기다려 주세요.', pronunciation: '[쇼-쇼- 오마치 쿠다사이]' },
            { phrase: 'お先に失礼します。', translation: '먼저 실례하겠습니다 (퇴근 인사).', pronunciation: '[오사키니 시츠레이시마스]' },
            { phrase: 'よろしくお願いします。', translation: '잘 부탁드립니다.', pronunciation: '[요로시쿠 오네가이시마스]' }
        ]
    },
    'spanish': {
        title: 'Spanish (스페인어)',
        flag: '🇪🇸',
        color: '#f59e0b',
        basics: [
            { type: 'Alfabeto', items: 'A, B, C, D, E, F, G, H, I, J, K, L, M, N, Ñ, O, P, Q, R, S, T, U, V, W, X, Y, Z', desc: '스페인어만의 독특한 글자 Ñ(에녜)가 포함된 알파벳입니다.' },
            { type: 'Pronunciación', items: 'R [rr], J [h], LL [y]', desc: '독특한 발음 규칙이 있지만 읽는 법은 매우 직관적입니다.' },
            { type: 'Subject Pronouns', items: 'Yo, Tú, Él/Ella, Nosotros, Vosotros, Ellos', desc: '주어 대명사입니다.' },
            { type: 'Punctuation', items: '¡! / ¿?', desc: '문장의 시작과 끝에 거꾸로 된 기호를 함께 사용합니다.' }
        ],
        vocabulary: [
            { word: 'Empresa', translation: '기업/회사', pronunciation: '[엠쁘레사]' },
            { word: 'Negocio', translation: '비즈니스', pronunciation: '[네고시오]' },
            { word: 'Proyecto', translation: '프로젝트', pronunciation: '[쁘로옉또]' },
            { word: 'Oportunidad', translation: '기회', pronunciation: '[오뽀르뚜니다드]' },
            { word: 'Mercado', translation: '시장', pronunciation: '[멜까도]' },
            { word: 'Cliente', translation: '고객', pronunciation: '[끌리엔떼]' },
            { word: 'Ventas', translation: '판매/영업', pronunciation: '[벤따스]' },
            { word: 'Inversión', translation: '투자', pronunciation: '[인벨시온]' },
            { word: 'Reunión', translation: '회의', pronunciation: '[레우니온]' },
            { word: 'Éxito', translation: '성공', pronunciation: '[엑씨또]' }
        ],
        grammar: [
            { rule: '명사의 성별', description: '모든 명사는 남성형(o) 또는 여성형(a)으로 나뉩니다.', example: 'El libro (남성) / La mesa (여성)' },
            { rule: '정관사/부정관사', description: '성별과 수에 따라 정관사가 달라집니다.', example: 'el/la (단수), los/las (복수)' },
            { rule: '동사 변화', description: '주어에 따라 동사의 끝부분이 계속 변합니다.', example: 'Yo hablo (나), Tú hablas (너), Él habla (그)' },
            { rule: 'Ser vs Estar', description: '두 가지 "be" 동사 구분 (불변 vs 가변)', example: 'Soy coreano (나는 한국인이다) / Estoy feliz (지금 기쁘다)' },
            { rule: 'Ir + a + Infinitivo', description: '가까운 미래를 표현', example: 'Voy a comer (먹을 것이다)' },
            { rule: 'Gerundio (-ando/-iendo)', description: '현재 진행형 표현', example: 'Estoy hablando (말하는 중이다)' }
        ],
        deepGrammar: [
            { title: '명사의 성(Gender) 쉽게 구분하기', content: '스페인어 명사는 남성 아니면 여성입니다. 보통 -o로 끝나면 남성, -a로 끝나면 여성인 경우가 많아요. 하지만 맵(mapa)처럼 -a로 끝나도 남성인 예외도 있으니 주의가 필요합니다.', tip: '여성 명사 앞에는 La를, 남성 명사 앞에는 El을 붙여서 세트로 외우세요!' },
            { title: '스페인어의 꽃, 동사 활용', content: '스페인어는 주어를 생략해도 동사 모양만 보고 누가 말하는지 알 수 있어요. "Hablo"라고만 해도 "내가 말한다"는 뜻이 되죠. 처음에는 복잡하지만 익숙해지면 아주 효율적인 언어입니다.', tip: '가장 기본인 -ar 동사의 변화형(o-as-a-amos-áis-an)부터 노래처럼 외워보세요.' },
            { title: 'Por vs Para 구분하기', content: '둘 다 "위하여"로 번역되곤 하지만, Por은 이유나 수단을, Para는 목적이나 대상을 주로 나타냅니다.', tip: '선물의 대상( recipient)을 말할 때는 "Para ti(너를 위해)"를 쓰세요!' }
        ],
        conversation: [
            { phrase: '¡Mucho gusto en conocerle!', translation: '당신을 알게 되어 정말 기쁩니다.', pronunciation: '[무쵸 구스또 엔 꼬노쎄를레]' },
            { phrase: '¿Cuál es el siguiente paso?', translation: '다음 단계는 무엇인가요?', pronunciation: '[꾸알 에스 엘 씨기엔떼 빠소?]' },
            { phrase: 'Estoy de acuerdo con usted.', translation: '당신의 의견에 동의합니다.', pronunciation: '[에스또이 데 아꾸엘도 꼰 우스떼드]' },
            { phrase: '¿Podemos programar una reunión?', translation: '회의 일정을 잡을 수 있을까요?', pronunciation: '[뽀데모스 쁘로그라마르 우나 레우니온?]' },
            { phrase: '¡Ha sido un placer!', translation: '즐거운 시간이었습니다!', pronunciation: '[아 씨도 운 쁠라쎌]' },
            { phrase: '¡Suerte con el proyecto!', translation: '프로젝트에 행운을 빕니다!', pronunciation: '[쑤엘떼 꼰 엘 쁘로옉또!]' }
        ]
    }
};

/**
 * 언어 선택 카드를 담당하는 웹 컴포넌트 클래스입니다.
 */
class LanguageCard extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: 'open' });
    }

    connectedCallback() {
        const id = this.getAttribute('lang-id');
        const data = languageData[id];
        this.render(data);
    }

    render(data) {
        this.shadowRoot.innerHTML = `
            <style>
                :host { display: block; cursor: pointer; perspective: 1000px; }
                .card {
                    background: rgba(255, 255, 255, 0.05);
                    backdrop-filter: blur(12px);
                    -webkit-backdrop-filter: blur(12px);
                    border: 1px solid rgba(255, 255, 255, 0.1);
                    border-radius: 2rem;
                    padding: 2.5rem 1.5rem;
                    text-align: center;
                    transition: all 0.5s cubic-bezier(0.23, 1, 0.32, 1);
                    position: relative;
                    overflow: hidden;
                    height: 100%;
                }
                .card::before {
                    content: '';
                    position: absolute;
                    top: 0; left: 0; width: 100%; height: 5px;
                    background: ${data.color};
                    box-shadow: 0 0 20px ${data.color};
                }
                .card:hover {
                    transform: translateY(-12px) rotateX(4deg);
                    background: rgba(255, 255, 255, 0.08);
                    border-color: ${data.color}88;
                    box-shadow: 0 20px 40px -10px ${data.color}44;
                }
                .flag { 
                    font-size: 4rem; 
                    display: block; 
                    margin-bottom: 1.5rem;
                    filter: drop-shadow(0 10px 15px rgba(0,0,0,0.3));
                    transition: transform 0.3s ease;
                }
                .card:hover .flag { transform: scale(1.1) rotate(5deg); }
                h3 { font-size: 1.5rem; font-weight: 800; color: #fff; margin: 0; letter-spacing: -0.02em; }
                p { font-size: 0.95rem; color: #94a3b8; margin-top: 0.75rem; font-weight: 500; }
                
                .glow {
                    position: absolute;
                    top: 50%; left: 50%;
                    width: 100px; height: 100px;
                    background: ${data.color};
                    filter: blur(60px);
                    opacity: 0;
                    transform: translate(-50%, -50%);
                    transition: opacity 0.5s ease;
                    pointer-events: none;
                }
                .card:hover .glow { opacity: 0.2; }
            </style>
            <div class="card">
                <div class="glow"></div>
                <span class="flag">${data.flag}</span>
                <h3>${data.title}</h3>
                <p>기초, 단어, 문법, 회화</p>
            </div>
        `;

        this.addEventListener('click', () => {
            const event = new CustomEvent('lang-selected', {
                detail: { id: this.getAttribute('lang-id') },
                bubbles: true,
                composed: true
            });
            this.dispatchEvent(event);
        });
    }
}

/**
 * 학습 상세 내용을 표시하는 허브 웹 컴포넌트 클래스입니다.
 */
class LessonHub extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: 'open' });
        this.currentLang = null;
        this.currentCategory = 'basics';
    }

    update(langId) {
        this.currentLang = langId;
        this.render();
    }

    setCategory(cat) {
        this.currentCategory = cat;
        this.render();
    }

    render() {
        if (!this.currentLang) return;
        const data = languageData[this.currentLang];
        const items = data[this.currentCategory];

        this.shadowRoot.innerHTML = `
            <style>
                :host { display: block; }
                .header { 
                    display: flex; 
                    align-items: center; 
                    justify-content: space-between; 
                    margin-bottom: 3rem; 
                    flex-wrap: wrap; 
                    gap: 1.5rem; 
                }
                .lang-info { display: flex; align-items: center; gap: 1.5rem; }
                .flag { font-size: 3.5rem; filter: drop-shadow(0 8px 12px rgba(0,0,0,0.4)); }
                h2 { font-size: 2.5rem; font-weight: 900; color: #fff; margin: 0; letter-spacing: -0.04em; }
                
                .tabs { 
                    display: flex; 
                    gap: 0.5rem; 
                    background: rgba(15, 23, 42, 0.6); 
                    padding: 0.5rem; 
                    border-radius: 1.25rem; 
                    border: 1px solid rgba(255, 255, 255, 0.05);
                }
                .tab {
                    padding: 0.6rem 1.5rem;
                    border-radius: 0.85rem;
                    cursor: pointer;
                    font-weight: 700;
                    font-size: 0.95rem;
                    color: #64748b;
                    transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
                }
                .tab:hover { color: #cbd5e1; background: rgba(255,255,255,0.03); }
                .tab.active { background: ${data.color}; color: #fff; box-shadow: 0 4px 12px ${data.color}44; }

                .grid {
                    display: grid;
                    grid-template-columns: repeat(auto-fill, minmax(320px, 1fr));
                    gap: 2rem;
                }
                
                .item-card {
                    background: rgba(30, 41, 59, 0.3);
                    padding: 2rem;
                    border-radius: 1.75rem;
                    border: 1px solid rgba(255, 255, 255, 0.05);
                    transition: all 0.4s ease;
                    display: flex;
                    flex-direction: column;
                    gap: 1rem;
                    position: relative;
                    overflow: hidden;
                }
                .item-card:hover { 
                    transform: translateY(-6px); 
                    background: rgba(30, 41, 59, 0.5); 
                    border-color: ${data.color}44; 
                    box-shadow: 0 12px 24px -8px rgba(0,0,0,0.5);
                }
                
                .badge {
                    display: inline-block;
                    padding: 0.25rem 0.75rem;
                    border-radius: 2rem;
                    font-size: 0.7rem;
                    font-weight: 800;
                    text-transform: uppercase;
                    background: ${data.color}15;
                    color: ${data.color};
                    width: fit-content;
                }

                .main-text { font-size: 1.5rem; font-weight: 800; color: #fff; letter-spacing: -0.01em; }
                
                .content-box {
                    background: rgba(0,0,0,0.2);
                    padding: 1.25rem;
                    border-radius: 1rem;
                    display: flex;
                    flex-direction: column;
                    gap: 0.75rem;
                }

                .info-row { display: flex; gap: 0.75rem; align-items: flex-start; }
                .info-label { 
                    font-size: 0.75rem; 
                    font-weight: 900; 
                    color: ${data.color}; 
                    opacity: 0.7; 
                    background: ${data.color}15;
                    padding: 0.1rem 0.4rem;
                    border-radius: 0.3rem;
                    white-space: nowrap;
                    margin-top: 0.15rem;
                }
                .info-value { font-size: 1rem; color: #e2e8f0; font-weight: 500; line-height: 1.5; }
                .pronunciation { color: #94a3b8; font-style: italic; font-weight: 400; }
                
                .example-box {
                    border-left: 4px solid ${data.color};
                    background: ${data.color}08;
                    padding: 1rem;
                    border-radius: 0 0.75rem 0.75rem 0;
                    font-size: 0.95rem;
                    color: #fff;
                    font-weight: 600;
                }

                /* 상세 문법 전용 스타일 */
                .deep-grammar-card {
                    grid-column: 1 / -1;
                    background: linear-gradient(160deg, rgba(30, 41, 59, 0.4) 0%, rgba(15, 23, 42, 0.4) 100%);
                    padding: 3rem;
                    border-radius: 2.5rem;
                    border: 1px solid rgba(255, 255, 255, 0.08);
                }
                .deep-title { font-size: 2rem; font-weight: 900; color: #fff; margin-bottom: 1.5rem; }
                .deep-content { font-size: 1.15rem; color: #cbd5e1; line-height: 1.8; margin-bottom: 2rem; }
                .deep-tip {
                    background: ${data.color}10;
                    border: 1px solid ${data.color}30;
                    padding: 1.5rem;
                    border-radius: 1.25rem;
                    display: flex;
                    gap: 1rem;
                    align-items: center;
                }
                .tip-icon { font-size: 1.5rem; }
                .tip-text { color: ${data.color}; font-weight: 700; font-size: 1rem; }

                @media (max-width: 768px) {
                    .header { flex-direction: column; align-items: center; text-align: center; }
                    .tabs { width: 100%; justify-content: center; }
                    .grid { grid-template-columns: 1fr; }
                    .deep-grammar-card { padding: 2rem; }
                }
            </style>
            <div class="header">
                <div class="lang-info">
                    <span class="flag">${data.flag}</span>
                    <h2>${data.title}</h2>
                </div>
                <div class="tabs">
                    <div class="tab ${this.currentCategory === 'basics' ? 'active' : ''}" onclick="this.getRootNode().host.setCategory('basics')">기초</div>
                    <div class="tab ${this.currentCategory === 'vocabulary' ? 'active' : ''}" onclick="this.getRootNode().host.setCategory('vocabulary')">단어장</div>
                    <div class="tab ${this.currentCategory === 'grammar' ? 'active' : ''}" onclick="this.getRootNode().host.setCategory('grammar')">문법</div>
                    <div class="tab ${this.currentCategory === 'deepGrammar' ? 'active' : ''}" onclick="this.getRootNode().host.setCategory('deepGrammar')">상세 문법</div>
                    <div class="tab ${this.currentCategory === 'conversation' ? 'active' : ''}" onclick="this.getRootNode().host.setCategory('conversation')">회화</div>
                </div>
            </div>
            <div class="grid">
                ${this.renderItems(items)}
            </div>
        `;
    }

    renderItems(items) {
        if (this.currentCategory === 'deepGrammar') {
            return items.map(item => `
                <div class="deep-grammar-card">
                    <div class="badge">Practical Guide</div>
                    <h3 class="deep-title">${item.title}</h3>
                    <p class="deep-content">${item.content}</p>
                    <div class="deep-tip">
                        <span class="tip-icon">💡</span>
                        <span class="tip-text">${item.tip}</span>
                    </div>
                </div>
            `).join('');
        }

        return items.map(item => {
            if (this.currentCategory === 'basics') {
                return `
                    <div class="item-card">
                        <span class="badge">Basics</span>
                        <div class="main-text">${item.type}</div>
                        <div class="content-box">
                            <div class="info-row">
                                <span class="info-label">항목</span>
                                <span class="info-value">${item.items}</span>
                            </div>
                            <div class="info-row">
                                <span class="info-label">설명</span>
                                <span class="info-value">${item.desc}</span>
                            </div>
                        </div>
                    </div>
                `;
            } else if (this.currentCategory === 'vocabulary') {
                return `
                    <div class="item-card">
                        <span class="badge">Vocabulary</span>
                        <div class="main-text">${item.word}</div>
                        <div class="content-box">
                            <div class="info-row">
                                <span class="info-label">발음</span>
                                <span class="info-value pronunciation">${item.pronunciation}</span>
                            </div>
                            <div class="info-row">
                                <span class="info-label">의미</span>
                                <span class="info-value">${item.translation}</span>
                            </div>
                        </div>
                    </div>
                `;
            } else if (this.currentCategory === 'grammar') {
                return `
                    <div class="item-card">
                        <span class="badge">Grammar</span>
                        <div class="main-text">${item.rule}</div>
                        <div class="content-box">
                            <div class="info-row">
                                <span class="info-label">설명</span>
                                <span class="info-value">${item.description}</span>
                            </div>
                        </div>
                        <div class="example-box">
                            ${item.example}
                        </div>
                    </div>
                `;
            } else {
                return `
                    <div class="item-card">
                        <span class="badge">Conversation</span>
                        <div class="main-text">${item.phrase}</div>
                        <div class="content-box">
                            <div class="info-row">
                                <span class="info-label">발음</span>
                                <span class="info-value pronunciation">${item.pronunciation}</span>
                            </div>
                            <div class="info-row">
                                <span class="info-label">의미</span>
                                <span class="info-value">${item.translation}</span>
                            </div>
                        </div>
                    </div>
                `;
            }
        }).join('');
    }
}

customElements.define('language-card', LanguageCard);
customElements.define('lesson-hub', LessonHub);

document.addEventListener('lang-selected', (e) => {
    const hub = document.querySelector('lesson-hub');
    const section = document.querySelector('#lesson-section');
    
    hub.update(e.detail.id);
    section.style.display = 'block';
    section.classList.add('active');
    
    setTimeout(() => {
        section.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }, 100);
});
