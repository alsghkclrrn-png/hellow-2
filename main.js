
/**
 * 각 언어별 학습 데이터를 담고 있는 객체입니다.
 * 기초(Basics), 단어장(Vocabulary), 문법(Grammar), 회화(Conversation) 카테고리를 포함합니다.
 */
const languageData = {
    'korean': {
        title: 'Korean (한국어)',
        flag: '🇰🇷',
        color: '#14b8a6',
        // 한국어 기초: 자음과 모음 (발음 포함)
        basics: [
            { type: '자음 (Consonants)', items: 'ㄱ(기역), ㄴ(니은), ㄷ(디귿), ㄹ(리을), ㅁ(미음), ㅂ(비읍), ㅅ(시옷), ㅇ(이응), ㅈ(지읒), ㅊ(치읓), ㅋ(키읔), ㅌ(티읕), ㅍ(피읖), ㅎ(히읗)', desc: '14 basic consonants' },
            { type: '모음 (Vowels)', items: 'ㅏ(아), ㅑ(야), ㅓ(어), ㅕ(여), ㅗ(오), ㅛ(요), ㅜ(우), ㅠ(유), ㅡ(으), ㅣ(이)', desc: '10 basic vowels' },
            { type: '쌍자음 (Double Consonants)', items: 'ㄲ(쌍기역), ㄸ(쌍디귿), ㅃ(쌍비읍), ㅆ(쌍시옷), ㅉ(쌍지읒)', desc: '5 double consonants' },
            { type: '이중모음 (Diphthongs)', items: 'ㅐ(애), ㅒ(얘), ㅔ(에), ㅖ(예), ㅘ(와), ㅙ(왜), ㅚ(외), ㅝ(워), ㅞ(웨), ㅟ(위), ㅢ(의)', desc: '11 complex vowels' }
        ],
        // 한국어 단어장 (한글 발음 적용)
        vocabulary: [
            { word: '학교', translation: 'School', pronunciation: '[학교]' },
            { word: '친구', translation: 'Friend', pronunciation: '[친구]' },
            { word: '사과', translation: 'Apple', pronunciation: '[사과]' },
            { word: '책', translation: 'Book', pronunciation: '[책]' },
            { word: '음식', translation: 'Food', pronunciation: '[음식]' },
            { word: '공부', translation: 'Study', pronunciation: '[공부]' },
            { word: '시간', translation: 'Time', pronunciation: '[시간]' },
            { word: '하늘', translation: 'Sky', pronunciation: '[하늘]' },
            { word: '바다', translation: 'Sea', pronunciation: '[바다]' },
            { word: '사랑', translation: 'Love', pronunciation: '[사랑]' }
        ],
        // 한국어 문법
        grammar: [
            { rule: '-은/는', description: 'Topic particle (Subject marker)', example: '저는 학생입니다. (I am a student.)' },
            { rule: '-이/가', description: 'Subject particle (Emphasizing the subject)', example: '친구가 옵니다. (A friend is coming.)' },
            { rule: '-을/를', description: 'Object particle', example: '사과를 먹어요. (I eat an apple.)' },
            { rule: '-에/에서', description: 'Location/Place particles', example: '학교에 가요 / 집에서 공부해요.' },
            { rule: '-요 / -습니다', description: 'Polite ending styles', example: '가요 (Polite) / 갑니다 (Formal).' },
            { rule: '현재 진행형 (-고 있다)', description: 'Present continuous', example: '밥을 먹고 있어요. (I am eating.)' }
        ],
        // 한국어 회화 (실제 발음법 적용)
        conversation: [
            { phrase: '반갑습니다', translation: 'Nice to meet you', pronunciation: '[반갑씀니다]' },
            { phrase: '이름이 뭐예요?', translation: 'What is your name?', pronunciation: '[이르미 뭐예요?]' },
            { phrase: '잘 지냈어요?', translation: 'How have you been?', pronunciation: '[잘 지내써요?]' },
            { phrase: '이거 얼마예요?', translation: 'How much is this?', pronunciation: '[이거 얼마예요?]' },
            { phrase: '화장실 어디예요?', pronunciation: '[화장실 어디예요?]', translation: 'Where is the restroom?' },
            { phrase: '감사합니다 / 고마워요', translation: 'Thank you', pronunciation: '[감사함니다 / 고마워요]' },
            { phrase: '미안합니다 / 죄송해요', translation: 'I am sorry', pronunciation: '[미안함니다 / 죄송해요]' },
            { phrase: '다음에 또 봐요', translation: 'See you next time', pronunciation: '[다음에 또 봐요]' }
        ]
    },
    'english': {
        title: 'English (영어)',
        flag: '🇺🇸',
        color: '#3b82f6',
        // 영어 기초 (한글 발음 추가)
        basics: [
            { type: 'Uppercase (대문자)', items: 'A(에이), B(비), C(씨), D(디), E(이), F(에프), G(쥐), H(에이치), I(아이), J(제이), K(케이), L(엘), M(엠), N(엔), O(오), P(피), Q(큐), R(알), S(에스), T(티), U(유), V(브이), W(더블유), X(엑스), Y(와이), Z(지/제드)', desc: '26 letters' },
            { type: 'Lowercase (소문자)', items: 'a, b, c, d, e, f, g, h, i, j, k, l, m, n, o, p, q, r, s, t, u, v, w, x, y, z', desc: '26 letters' },
            { type: 'Vowels (모음)', items: 'A, E, I, O, U (에이, 이, 아이, 오, 유)', desc: '5 basic vowels' },
            { type: 'Consonants (자음)', items: 'B, C, D, F, G, H, J, K, L, M, N, P, Q, R, S, T, V, W, X, Y, Z', desc: '21 consonants' }
        ],
        // 영어 단어장 (한글 발음)
        vocabulary: [
            { word: 'Library', translation: '도서관', pronunciation: '[라이브러리]' },
            { word: 'Together', translation: '함께', pronunciation: '[투게더]' },
            { word: 'Delicious', translation: '맛있는', pronunciation: '[딜리셔스]' },
            { word: 'Journey', translation: '여정', pronunciation: '[저니]' },
            { word: 'Innovation', translation: '혁신', pronunciation: '[이노베이션]' },
            { word: 'Experience', translation: '경험', pronunciation: '[익스피리언스]' },
            { word: 'Language', translation: '언어', pronunciation: '[랭귀지]' },
            { word: 'Success', translation: '성공', pronunciation: '[석세스]' },
            { word: 'Challenge', translation: '도전', pronunciation: '[챌린지]' },
            { word: 'Opportunity', translation: '기회', pronunciation: '[오퍼튜니티]' }
        ],
        // 영어 문법
        grammar: [
            { rule: 'Verb Types', description: 'Main Verbs vs Auxiliary Verbs', example: 'I swim (Main) / I can swim (Auxiliary).' },
            { rule: 'Sentence Structure', description: 'Subject (S) + Verb (V) is the base.', example: 'He runs. / They play soccer.' },
            { rule: 'CAN / COULD', description: 'Ability, permission, or requests.', example: 'I can swim. / Could you help me?' },
            { rule: 'WILL / WOULD', description: 'Future actions, intent, or polite requests.', example: 'I will go. / Would you like some tea?' },
            { rule: 'SHOULD / MUST', description: 'Advice, obligation, or strong necessity.', example: 'You should rest. / You must stop here.' },
            { rule: 'MAY / MIGHT', description: 'Permission or uncertain possibility.', example: 'May I come in? / It might rain today.' },
            { rule: 'USED TO', description: 'Past habits that no longer happen.', example: 'I used to play piano. (Now I don\'t)' },
            { rule: 'Future Perfect', description: 'will + have + p.p (Completion in future).', example: 'I will have finished it by tomorrow.' },
            { rule: 'Should Have p.p', description: 'Regret about something not done in the past.', example: 'I should have studied harder.' }
        ],
        // 영어 회화 (한글 발음)
        conversation: [
            { phrase: 'How are you?', translation: '어떻게 지내세요?', pronunciation: '[하우 아 유?]' },
            { phrase: 'Could you help me?', translation: '좀 도와주시겠어요?', pronunciation: '[쿠쥬 헬프 미?]' },
            { phrase: 'Nice weather!', translation: '날씨 좋네요!', pronunciation: '[나이스 웨더!]' },
            { phrase: 'What do you recommend?', translation: '무엇을 추천하시나요?', pronunciation: '[왓 두 유 레코멘드?]' },
            { phrase: 'Where is the station?', translation: '기차역이 어디인가요?', pronunciation: '[웨어 이즈 더 스테이션?]' },
            { phrase: 'Nice to meet you', translation: '만나서 반가워요', pronunciation: '[나이스 투 미트 유]' },
            { phrase: 'Have a great day!', translation: '좋은 하루 보내세요!', pronunciation: '[해브 어 그레이트 데이!]' },
            { phrase: 'I am looking for...', translation: '...를 찾고 있어요', pronunciation: '[아임 루킹 포...]' }
        ]
    },
    'chinese': {
        title: 'Chinese (中文)',
        flag: '🇨🇳',
        color: '#ef4444',
        // 중국어 기초 (한글 발음 상세화)
        basics: [
            { type: 'Initials (성모)', items: 'b(뽀), p(포), m(모), f(포), d(뜨), t(트), n(느), l(르), g(끄), k(크), h(흐), j(지), q(치), x(시), zh(즈), ch(츠), sh(싀), r(르), z(쯔), c(츠), s(쓰)', desc: 'Beginning consonants' },
            { type: 'Finals (운모)', items: 'a(아), o(오), e(어), i(이), u(우), ü(위), ai(아이), ei(에이), ui(웨이), ao(아오), ou(오우), iu(이우), ie(이에), üe(위에), er(얼), an(안), en(언), in(인), un(운), ün(윈), ang(앙), eng(엉), ing(잉), ong(옹)', desc: 'Vowels and endings' },
            { type: 'Tones (성조)', items: '1성(¯), 2성(ˊ), 3성(ˇ), 4성(ˋ)', desc: 'ā(아-), á(아?), ǎ(아아), à(앗!)' },
            { type: 'Basic Rules', items: 'Pinyin (한어병음)', desc: 'Phonetic system for Mandarin' }
        ],
        // 중국어 단어장 (한글 발음)
        vocabulary: [
            { word: '学生 (Xuésheng)', translation: '학생', pronunciation: '[슈에셩]' },
            { word: '老师 (Lǎoshī)', translation: '선생님', pronunciation: '[라오싀]' },
            { word: '开心 (Kāixīn)', translation: '행복하다', pronunciation: '[카이씬]' },
            { word: '努力 (Nǔlì)', translation: '노력하다', pronunciation: '[누리]' },
            { word: '漂亮 (Piàoliang)', translation: '예쁘다', pronunciation: '[피아오리앙]' },
            { word: '时间 (Shíjiān)', translation: '시간', pronunciation: '[싀지엔]' },
            { word: '朋友 (Péngyǒu)', translation: '친구', pronunciation: '[펑요우]' },
            { word: '北京 (Běijīng)', translation: '베이징', pronunciation: '[베이징]' },
            { word: '汉字 (Hànzì)', translation: '한자', pronunciation: '[한쯔]' },
            { word: '手机 (Shǒujī)', pronunciation: '[쇼우지]', translation: '휴대폰' }
        ],
        // 중국어 문법
        grammar: [
            { rule: 'S + V + O', description: 'Basic sentence structure', example: '我学中文 (I learn Chinese)' },
            { rule: '吗 (Ma)', description: 'Question particle at the end', example: '你好吗? (How are you?)' },
            { rule: '의 (De)', description: 'Possessive or descriptive', example: '我的书 (My book)' },
            { rule: '了 (Le)', description: 'Change of state or completion', example: '我吃饭了 (I have eaten)' },
            { rule: '在 (Zài)', description: 'Continuous action / location', example: '我在看书 (I am reading)' },
            { rule: '不 / 没 (Bù / Méi)', description: 'Negation prefixes', example: '我不去 / 我没有' }
        ],
        // 중국어 회화 (한글 발음)
        conversation: [
            { phrase: '好久不见 (Hǎojiǔ bùjiàn)', translation: '오랜만이에요', pronunciation: '[하오지우 부지엔]' },
            { phrase: '你吃饭了吗? (Nǐ chīfànle ma?)', translation: '밥 먹었니?', pronunciation: '[니 츠판러 마?]' },
            { phrase: '加油! (Jiāyóu!)', translation: '화이팅!', pronunciation: '[짜요!]' },
            { phrase: '多少钱? (Duōshǎo qián?)', translation: '얼마예요?', pronunciation: '[뚜오샤오 치엔]' },
            { phrase: '谢谢你的帮助 (Xièxiè nǐ de bāngzhù)', translation: '도와주셔서 감사합니다', pronunciation: '[씨에씨에 니 더 빵주]' },
            { phrase: '我不懂 (Wǒ bù dǒng)', translation: '이해하지 못했어요', pronunciation: '[워 부 동]' },
            { phrase: '认识你很高兴 (Rènshì nǐ hěn gāoxìng)', translation: '만나서 정말 기뻐요', pronunciation: '[런싀 니 헌 까오씽]' },
            { phrase: '慢走 (Màn zǒu)', translation: '조심히 가세요', pronunciation: '[만 조우]' }
        ]
    },
    'japanese': {
        title: 'Japanese (日本語)',
        flag: '🇯🇵',
        color: '#ec4899',
        // 일본어 기초 (한글 발음 상세화)
        basics: [
            { type: 'Hiragana (히라가나)', items: 'あ(아), い(이), う(우), え(에), お(오), か(카), き(키), く(쿠), け(케), こ(코)...', desc: 'Used for grammar and native words' },
            { type: 'Katakana (가타카나)', items: 'ア(아), イ(이), ウ(우), エ(에), オ(오), カ(카), キ(키), ク(쿠), 케(케), 코(코)...', desc: 'Used for foreign loanwords' },
            { type: 'Kanji (한자)', items: '日(히/니치), 月(츠키/게츠), 火(히/카), 水(미즈/스이)...', desc: 'Adopted Chinese characters' },
            { type: 'Tones (악센트)', items: 'High and Low Pitch', desc: 'Distinctive pitch patterns' }
        ],
        // 일본어 단어장 (한글 발음)
        vocabulary: [
            { word: '夢 (Yume)', translation: '꿈', pronunciation: '[유메]' },
            { word: '希望 (Kibō)', translation: '희망', pronunciation: '[키보-]' },
            { word: '元気 (Genki)', translation: '건강/활기', pronunciation: '[겐키]' },
            { word: '心 (Kokoro)', translation: '마음', pronunciation: '[코코로]' },
            { word: '桜 (Sakura)', translation: '벚꽃', pronunciation: '[사쿠라]' },
            { word: '友達 (Tomodachi)', translation: '친구', pronunciation: '[토모다치]' },
            { word: '未来 (Mirai)', translation: '미래', pronunciation: '[미라이]' },
            { word: '旅行 (Ryokō)', translation: '여행', pronunciation: '[료코-]' },
            { word: '세계 (Sekai)', translation: '세계', pronunciation: '[세카이]' },
            { word: '평화 (Heiwa)', translation: '평화', pronunciation: '[헤이와]' }
        ],
        // 일본어 문법
        grammar: [
            { rule: 'は (Wa)', description: 'Topic particle', example: '私は학생입니다 (I am a student)' },
            { rule: '의 (No)', description: 'Possessive particle', example: '私の本 (My book)' },
            { rule: '입니다 (Desu)', description: 'Polite ending for nouns', example: 'き레입니다 (It is beautiful)' },
            { rule: '을/를 (O)', description: 'Object particle', example: 'りんごを食べます (Eat an apple)' },
            { rule: '에 / 로 (Ni / He)', description: 'Destination/Direction', example: '日本に行きます (Go to Japan)' },
            { rule: '~ている (Te-iru)', description: 'Ongoing action', example: '勉強している (Am studying)' }
        ],
        // 일본어 회화 (한글 발음)
        conversation: [
            { phrase: 'お疲れ様です', translation: '수고하셨습니다', pronunciation: '[오츠카레사마데스]' },
            { phrase: 'はじめまして', translation: '처음 뵙겠습니다', pronunciation: '[하지메마시테]' },
            { phrase: '頑張って!', translation: '힘내세요!', pronunciation: '[간밧테!]' },
            { phrase: 'いくらですか? (Ikura desu ka?)', translation: '얼마입니까?', pronunciation: '[이크라데스까]' },
            { phrase: 'すみません (Sumimasen)', translation: '실례합니다 / 저기요', pronunciation: '[스미마셍]' },
            { phrase: 'おいしいです (Oishii desu)', translation: '맛있습니다', pronunciation: '[오이시이데스]' },
            { phrase: '또한 만나요 (Mata aimashō)', translation: '또 만나요', pronunciation: '[마타 아이마쇼-]' },
            { phrase: '助けてください (Tasukete kudasai)', translation: '도와주세요', pronunciation: '[타스케테 쿠다사이]' }
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
                :host { display: block; cursor: pointer; }
                .card {
                    background: rgba(255, 255, 255, 0.05);
                    backdrop-filter: blur(10px);
                    border: 1px solid rgba(255, 255, 255, 0.1);
                    border-radius: 1.5rem;
                    padding: 2.5rem 1.5rem;
                    text-align: center;
                    transition: all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
                    position: relative;
                    overflow: hidden;
                }
                .card::before {
                    content: '';
                    position: absolute;
                    top: 0; left: 0; width: 100%; height: 4px;
                    background: ${data.color};
                    opacity: 0.8;
                }
                .card:hover {
                    transform: translateY(-8px);
                    background: rgba(255, 255, 255, 0.1);
                    border-color: ${data.color};
                    box-shadow: 0 15px 30px -10px ${data.color}66;
                }
                .flag { font-size: 3.5rem; display: block; margin-bottom: 1rem; }
                h3 { font-size: 1.25rem; font-weight: 700; color: #fff; margin: 0; }
                p { font-size: 0.875rem; color: #94a3b8; margin-top: 0.5rem; }
            </style>
            <div class="card">
                <span class="flag">${data.flag}</span>
                <h3>${data.title}</h3>
                <p>기초, 단어, 문법, 회화 학습</p>
            </div>
        `;

        // 카드 클릭 시 이벤트 발생
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

    // 선택된 언어 업데이트
    update(langId) {
        this.currentLang = langId;
        this.render();
    }

    // 카테고리(탭) 변경
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
                .header { display: flex; align-items: center; justify-content: space-between; margin-bottom: 2.5rem; flex-wrap: wrap; gap: 1rem; }
                .lang-info { display: flex; align-items: center; gap: 1rem; }
                .flag { font-size: 3rem; }
                h2 { font-size: 2rem; font-weight: 800; color: ${data.color}; margin: 0; }
                
                .tabs { display: flex; gap: 0.5rem; background: rgba(0,0,0,0.2); padding: 0.4rem; border-radius: 1rem; }
                .tab {
                    padding: 0.5rem 1.2rem;
                    border-radius: 0.75rem;
                    cursor: pointer;
                    font-weight: 600;
                    font-size: 0.9rem;
                    color: #94a3b8;
                    transition: all 0.2s ease;
                }
                .tab:hover { color: #fff; }
                .tab.active { background: ${data.color}; color: #fff; }

                .grid {
                    display: grid;
                    grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
                    gap: 1.5rem;
                }
                
                .item-card {
                    background: rgba(255, 255, 255, 0.03);
                    padding: 1.5rem;
                    border-radius: 1.25rem;
                    border: 1px solid rgba(255, 255, 255, 0.05);
                    transition: all 0.3s ease;
                    display: flex;
                    flex-direction: column;
                    gap: 0.5rem;
                }
                .item-card:hover { transform: translateY(-4px); background: rgba(255, 255, 255, 0.06); border-color: ${data.color}33; }
                
                .label { font-size: 0.75rem; font-weight: 800; text-transform: uppercase; color: ${data.color}; opacity: 0.8; }
                .main-text { font-size: 1.25rem; font-weight: 700; color: #fff; }
                .sub-text { font-size: 0.95rem; color: #cbd5e1; }
                .extra-text { font-size: 0.85rem; color: #94a3b8; font-style: italic; }
                .example { background: rgba(0,0,0,0.2); padding: 0.75rem; border-radius: 0.75rem; border-left: 3px solid ${data.color}; margin-top: 0.5rem; font-size: 0.85rem; color: #fff; }
                .items-list { font-size: 1.1rem; color: #fff; line-height: 1.5; background: rgba(0,0,0,0.2); padding: 0.8rem; border-radius: 0.75rem; margin: 0.5rem 0; word-break: break-all; }

                @media (max-width: 600px) {
                    .header { flex-direction: column; align-items: flex-start; }
                    .tabs { width: 100%; overflow-x: auto; }
                    .tab { flex: 1; text-align: center; white-space: nowrap; }
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
                    <div class="tab ${this.currentCategory === 'conversation' ? 'active' : ''}" onclick="this.getRootNode().host.setCategory('conversation')">회화</div>
                </div>
            </div>
            <div class="grid">
                ${this.renderItems(items)}
            </div>
        `;
    }

    // 아이템 리스트 렌더링
    renderItems(items) {
        return items.map(item => {
            if (this.currentCategory === 'basics') {
                return `
                    <div class="item-card">
                        <span class="label">${item.type}</span>
                        <div class="items-list">${item.items}</div>
                        <div class="sub-text">${item.desc}</div>
                    </div>
                `;
            } else if (this.currentCategory === 'vocabulary') {
                return `
                    <div class="item-card">
                        <span class="label">Vocabulary</span>
                        <div class="main-text">${item.word}</div>
                        <div class="extra-text">${item.pronunciation}</div>
                        <div class="sub-text">${item.translation}</div>
                    </div>
                `;
            } else if (this.currentCategory === 'grammar') {
                return `
                    <div class="item-card">
                        <span class="label">Grammar Rule</span>
                        <div class="main-text">${item.rule}</div>
                        <div class="sub-text">${item.description}</div>
                        <div class="example">${item.example}</div>
                    </div>
                `;
            } else {
                return `
                    <div class="item-card">
                        <span class="label">Conversation</span>
                        <div class="main-text">${item.phrase}</div>
                        <div class="extra-text">${item.pronunciation}</div>
                        <div class="sub-text">${item.translation}</div>
                    </div>
                `;
            }
        }).join('');
    }
}

// 커스텀 엘리먼트 정의
customElements.define('language-card', LanguageCard);
customElements.define('lesson-hub', LessonHub);

// 애플리케이션 로직: 언어 선택 시 상세 영역 활성화 및 스크롤
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
