
/**
 * 각 언어별 학습 데이터를 담고 있는 객체입니다.
 */
const languageData = {
    'korean': {
        title: 'Korean (한국어)',
        flag: '🇰🇷',
        color: '#14b8a6',
        basics: [
            { type: '자음', items: 'ㄱ, ㄴ, ㄷ, ㄹ, ㅁ, ㅂ, ㅅ, ㅇ, ㅈ, ㅊ, ㅋ, ㅌ, ㅍ, ㅎ', desc: '한글의 기본이 되는 14개의 자음입니다.' },
            { type: '모음', items: 'ㅏ, ㅑ, ㅓ, ㅕ, ㅗ, ㅛ, ㅜ, ㅠ, ㅡ, ㅣ', desc: '한글의 기본이 되는 10개의 모음입니다.' }
        ],
        numbers: [
            { num: '1~10 (Sino)', word: '일, 이, 삼, 사, 오, 육, 칠, 팔, 구, 십', pronunciation: '[Il, I, Sam, Sa, O, Yuk, Chil, Pal, Gu, Sip]' },
            { num: '1~10 (Native)', word: '하나, 둘, 셋, 넷, 다섯, 여섯, 일곱, 여덟, 아홉, 열', pronunciation: '[Hana, Dul, Set, Net, Daseot, Yeoseot, Ilgob, Yeodeolb, Ahob, Yeol]' },
            { num: '20~90 (Native)', word: '스물(20), 서른(30), 마흔(40), 쉰(50), 예순(60), 일흔(70), 여든(80), 아흔(90)', pronunciation: '[Seumul, Seoreun, Maheun, Swin, Yesun, Ilheun, Yeodeun, Aheun]' },
            { num: '100', word: '백 (Baek)', pronunciation: '[10^2]' },
            { num: '1,000', word: '천 (Cheon)', pronunciation: '[10^3]' },
            { num: '10,000', word: '만 (Man)', pronunciation: '[10^4]' },
            { num: '100,000,000', word: '억 (Eok)', pronunciation: '[10^8]' },
            { num: '1,000,000,000,000', word: '조 (Jo)', pronunciation: '[10^12]' }
        ],
        vocabulary: [
            { word: '회의 (Meeting)', translation: '여럿이 모여 의견을 나눔', pronunciation: '[회의/회이]' },
            { word: '성공 (Success)', translation: '목적한 바를 이룸', pronunciation: '[성공]' }
        ],
        grammar: [
            { rule: '-은/는', description: '문장의 주제나 대상을 나타내는 보조사', example: '저는 학생입니다.' }
        ],
        deepGrammar: [
            { title: '한국어 숫자 체계 완벽 정리', content: '한국어는 수량이나 나이를 셀 때는 "순우리말(하나, 둘, 셋, 넷 등)"을 쓰고, 날짜나 돈, 수학적인 수치를 말할 때는 "한자어(일, 이, 삼, 사 등)"를 씁니다.', tip: '나이는 "스무 살", 가격은 "이만 원"이라고 구분해서 말해보세요!' },
            { title: '4자리 단위 끊어 읽기', content: '한국어는 10,000(만)을 기준으로 단위가 바뀝니다. 1,0000(만), 1,0000,0000(억) 순서로 4자리마다 콤마를 찍는다고 생각하면 쉽습니다.', tip: '100,000은 "십만" (10 + 만) 입니다.' }
        ],
        conversation: [
            { phrase: '이거 얼마예요?', translation: '가격을 물을 때', pronunciation: '[이거 얼마예요?]' }
        ]
    },
    'english': {
        title: 'English (영어)',
        flag: '🇺🇸',
        color: '#3b82f6',
        basics: [
            { type: 'Alphabet', items: 'A, B, C, D, E, F, G, H, I, J, K, L, M, N, O, P, Q, R, S, T, U, V, W, X, Y, Z', desc: '영어의 기초 알파벳 26자입니다.' }
        ],
        numbers: [
            { num: '1~12', word: 'One, Two, Three, Four, Five, Six, Seven, Eight, Nine, Ten, Eleven, Twelve', pronunciation: '[1~12 고유 명칭]' },
            { num: '13~19', word: 'Thirteen, Fourteen, Fifteen, Sixteen, Seventeen, Eighteen, Nineteen', pronunciation: '[-teen 접미사]' },
            { num: '20~90', word: 'Twenty, Thirty, Forty, Fifty, Sixty, Seventy, Eighty, Ninety', pronunciation: '[-ty 접미사]' },
            { num: '100', word: 'One Hundred', pronunciation: '[백]' },
            { num: '1,000', word: 'One Thousand', pronunciation: '[천]' },
            { num: '1,000,000', word: 'One Million', pronunciation: '[백만 / 10^6]' },
            { num: '1,000,000,000', word: 'One Billion', pronunciation: '[십억 / 10^9]' },
            { num: '1,000,000,000,000', word: 'One Trillion', pronunciation: '[일조 / 10^12]' }
        ],
        vocabulary: [
            { word: 'Quarterly Report', translation: '분기 보고서', pronunciation: '[쿼터리 리포트]' }
        ],
        grammar: [
            { rule: 'Passive Voice', description: '행위의 대상을 강조', example: 'The report was sent.' }
        ],
        deepGrammar: [
            { title: '3자리 콤마 끊어 읽기', content: '영어는 3자리(Thousand, Million, Billion)마다 단위가 바뀝니다. 한국어의 4자리 단위와 가장 크게 다른 점입니다.', tip: '10,000은 "Ten thousand", 1,000,000은 "One million"!' },
            { title: 'Billion vs Trillion', content: '비즈니스 세계에서 Billion은 10억, Trillion은 1조를 의미합니다. 국가 예산이나 기업 가치를 말할 때 자주 쓰입니다.', tip: 'M은 Million(백만), B는 Billion(십억)의 약자로 자주 쓰여요.' }
        ],
        conversation: [
            { phrase: 'How much is it in total?', translation: '총액이 얼마인가요?', pronunciation: '[하우 머치 이즈 잇 인 토털?]' }
        ]
    },
    'chinese': {
        title: 'Chinese (중국어)',
        flag: '🇨🇳',
        color: '#ef4444',
        basics: [
            { type: 'Pinyin', items: 'a, o, e, i, u, ü', desc: '중국어 발음 기호입니다.' }
        ],
        numbers: [
            { num: '1~10', word: '一(yī), 二(èr), 三(sān), 四(sì), 五(wǔ), 六(liù), 七(qī), 八(bā), 九(jiǔ), 十(shí)', pronunciation: '[이, 얼, 싼, 쓰, 우, 리우, 치, 빠, 지우, 싀]' },
            { num: '11~99', word: '十一(11), 二十(20), 三十五(35), 四十二(42), 五十六(56), 六十七(67), 七十八(78), 八十九(89), 九十九(99)', pronunciation: '[조합형 숫자]' },
            { num: '100', word: '百 (Bǎi)', pronunciation: '[빠이]' },
            { num: '1,000', word: '千 (Qiān)', pronunciation: '[치엔]' },
            { num: '10,000', word: '万 (Wàn)', pronunciation: '[완]' },
            { num: '10^8', word: '亿 (Yì)', pronunciation: '[이]' },
            { num: '10^12', word: '兆 (Zhào)', pronunciation: '[쨔오]' }
        ],
        vocabulary: [
            { word: '项目 (Xiàngmù)', translation: '프로젝트', pronunciation: '[씨앙무]' }
        ],
        grammar: [
            { rule: '基本语序', description: '주어+동사+목적어', example: '我学中文' }
        ],
        deepGrammar: [
            { title: '중국어 거대 숫자 단위', content: '중국어는 한국어와 숫자 단위(만, 억, 조)가 한자어 기반으로 동일합니다. 따라서 큰 숫자를 이해하기 매우 쉽습니다.', tip: '숫자 2는 개수를 셀 때 "二(èr)"가 아니라 "两(liǎng)"으로 쓰는 경우가 많아요!' },
            { title: '영(0)의 사용법', content: '중간에 0이 있으면 零(líng)이라고 읽어줘야 합니다. 예를 들어 105는 "一百零五(yì bǎi líng wǔ)"라고 읽습니다.', tip: '연속된 0은 한 번만 읽어줍니다.' }
        ],
        conversation: [
            { phrase: '一共多少钱?', translation: '전부 얼마인가요?', pronunciation: '[이꽁 뚜오샤오 치엔?]' }
        ]
    },
    'japanese': {
        title: 'Japanese (일본어)',
        flag: '🇯🇵',
        color: '#ec4899',
        basics: [
            { type: 'Hiragana', items: 'あ, い, う, え, お, か, き, く, け, こ', desc: '일본어 기본 문자(50음도)의 시작입니다.' }
        ],
        numbers: [
            { num: '1~10', word: '一, 二, 三, 四, 五, 六, 七, 八, 九, 十', pronunciation: '[이치, 니, 산, 욘, 고, 로쿠, 나나, 하치, 큐, 쥬-]' },
            { num: '10~90', word: '十(10), 二十(20), 三十(30), 四十(40), 五十(50), 六十(60), 七十(70), 八十(80), 九十(90)', pronunciation: '[쥬-, 니쥬-, 산쥬-, 욘쥬-, 고쥬-, 로쿠쥬-, 나나쥬-, 하치쥬-, 큐쥬-]' },
            { num: '100', word: '百 (Hyaku)', pronunciation: '[햐쿠]' },
            { num: '1,000', word: '千 (Sen)', pronunciation: '[센]' },
            { num: '10,000', word: '万 (Man)', pronunciation: '[만]' },
            { num: '10^8', word: '億 (Oku)', pronunciation: '[오쿠]' },
            { num: '10^12', word: '兆 (Chō)', pronunciation: '[쵸-]' }
        ],
        vocabulary: [
            { word: '戦略 (Senryaku)', translation: '전략', pronunciation: '[센랴쿠]' }
        ],
        grammar: [
            { rule: 'て形', description: '동사 연결', example: '待ってください' }
        ],
        deepGrammar: [
            { title: '일본어 큰 숫자 발음 주의', content: '300(산뱌쿠), 600(롭표쿠), 800(합표쿠) 처럼 특정 숫자 뒤에서 발음이 탁음화되거나 반탁음화됩니다.', tip: '3,000은 "산젠", 8,000은 "핫센"이라고 읽으니 주의하세요!' },
            { title: '조(兆) 단위의 사용', content: '일본의 국가 예산이나 경제 뉴스를 볼 때 조(兆, 쵸-) 단위를 매우 자주 접하게 됩니다.', tip: '만(万) -> 억(億) -> 조(兆) 순서로 4자리씩 올라가요.' }
        ],
        conversation: [
            { phrase: 'おいくらですか？', translation: '얼마인가요?', pronunciation: '[오이쿠라데스까?]' }
        ]
    },
    'spanish': {
        title: 'Spanish (스페인어)',
        flag: '🇪🇸',
        color: '#f59e0b',
        basics: [
            { type: 'Alfabeto', items: 'A, B, C, D, E, F, G, H, I, J, K, L, M, N, Ñ, O, P, Q, R, S, T, U, V, W, X, Y, Z', desc: '스페인어 알파벳 27자입니다.' }
        ],
        numbers: [
            { num: '1~10', word: 'Uno, Dos, Tres, Cuatro, Cinco, Seis, Siete, Ocho, Nueve, Diez', pronunciation: '[우노, 도스, 뜨레스, 꾸아뜨로, 씽꼬, 세이스, 씨에떼, 오초, 누에베, 디에스]' },
            { num: '11~20', word: 'Once(11), Doce(12), Trece(13), Catorce(14), Quince(15), Dieciséis(16), Diecisiete(17), Dieciocho(18), Diecinueve(19), Veinte(20)', pronunciation: '[온쎄, 도쎄, 뜨레쎄, 까또르쎄, 낀쎄, 디에씨세이스, 디에씨씨에떼, 디에씨오초, 디에씨누에베, 베인떼]' },
            { num: '30~90', word: 'Treinta(30), Cuarenta(40), Cincuenta(50), Sesenta(60), Setenta(70), Ochenta(80), Noventa(90)', pronunciation: '[뜨레인따, 꾸아렌따, 씽꾸엔따, 세쎈따, 세뗀따, 오첸따, 노벤따]' },
            { num: '100', word: 'Cien / Ciento', pronunciation: '[씨엔]' },
            { num: '1,000', word: 'Mil', pronunciation: '[밀]' },
            { num: '1,000,000', word: 'Un millón', pronunciation: '[운 밀리온]' },
            { num: '10^9', word: 'Mil millones', pronunciation: '[밀 밀리오네스]' },
            { num: '10^12', word: 'Un billón', pronunciation: '[운 빌리온]' }
        ],
        vocabulary: [
            { word: 'Empresa', translation: '회사', pronunciation: '[엠쁘레사]' }
        ],
        grammar: [
            { rule: 'Género', description: '남성/여성 명사', example: 'El sol / La luna' }
        ],
        deepGrammar: [
            { title: '스페인어 Billion의 함정', content: '스페인어에서 "Un billón"은 영어의 Trillion(1조)을 의미합니다. 영어의 Billion(10억)은 스페인어로 "Mil millones"라고 해야 합니다.', tip: '국제 비즈니스 계약 시 단위를 꼭 확인하세요!' },
            { title: '숫자 조합 규칙', content: '21부터 29까지는 한 단어(Veintiuno...)로 쓰고, 31부터는 "Treinta y uno" 처럼 중간에 y(and)를 넣어 연결합니다.', tip: 'y는 31부터 99까지만 사용해요!' }
        ],
        conversation: [
            { phrase: '¿Cuál es el precio final?', translation: '최종 가격이 얼마인가요?', pronunciation: '[꾸알 에스 엘 쁘레씨오 휘날?]' }
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
                <p>기초, 숫자 체계, 단어, 문법</p>
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
                    gap: 0.3rem; 
                    background: rgba(15, 23, 42, 0.6); 
                    padding: 0.4rem; 
                    border-radius: 1.25rem; 
                    border: 1px solid rgba(255, 255, 255, 0.05);
                    flex-wrap: wrap;
                }
                .tab {
                    padding: 0.6rem 1.2rem;
                    border-radius: 0.85rem;
                    cursor: pointer;
                    font-weight: 700;
                    font-size: 0.9rem;
                    color: #64748b;
                    transition: all 0.3s ease;
                }
                .tab:hover { color: #cbd5e1; background: rgba(255,255,255,0.03); }
                .tab.active { background: ${data.color}; color: #fff; box-shadow: 0 4px 12px ${data.color}44; }

                .grid {
                    display: grid;
                    grid-template-columns: repeat(auto-fill, minmax(320px, 1fr));
                    gap: 1.5rem;
                }
                
                /* 숫자 전용 리스트 스타일 */
                .number-list-container {
                    grid-column: 1 / -1;
                    background: rgba(30, 41, 59, 0.2);
                    border-radius: 2rem;
                    border: 1px solid rgba(255, 255, 255, 0.05);
                    overflow: hidden;
                }
                .number-row {
                    display: grid;
                    grid-template-columns: 140px 1fr 1fr;
                    padding: 1.25rem 2rem;
                    border-bottom: 1px solid rgba(255, 255, 255, 0.03);
                    align-items: center;
                    transition: background 0.3s ease;
                }
                .number-row:hover { background: rgba(255, 255, 255, 0.02); }
                .number-row.header-row {
                    background: rgba(255, 255, 255, 0.03);
                    font-weight: 900;
                    color: ${data.color};
                    text-transform: uppercase;
                    font-size: 0.75rem;
                    letter-spacing: 0.1em;
                }
                .num-val { font-weight: 800; color: ${data.color}; font-size: 1.1rem; }
                .num-word { color: #fff; font-weight: 600; font-size: 1.05rem; }
                .num-pron { color: #94a3b8; font-style: italic; font-size: 0.95rem; }

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
                }
                .item-card:hover { 
                    transform: translateY(-6px); 
                    background: rgba(30, 41, 59, 0.5); 
                    border-color: ${data.color}44; 
                }
                
                .badge {
                    display: inline-block;
                    padding: 0.25rem 0.75rem;
                    border-radius: 2rem;
                    font-size: 0.7rem;
                    font-weight: 800;
                    background: ${data.color}15;
                    color: ${data.color};
                    width: fit-content;
                }

                .main-text { font-size: 1.4rem; font-weight: 800; color: #fff; }
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
                    font-size: 0.7rem; 
                    font-weight: 900; 
                    color: ${data.color}; 
                    opacity: 0.8; 
                    background: ${data.color}15;
                    padding: 0.1rem 0.4rem;
                    border-radius: 0.3rem;
                }
                .info-value { font-size: 1.1rem; color: #e2e8f0; font-weight: 600; }
                .pronunciation { color: #94a3b8; font-style: italic; }
                
                .example-box {
                    border-left: 4px solid ${data.color};
                    background: ${data.color}08;
                    padding: 1rem;
                    border-radius: 0 0.75rem 0.75rem 0;
                    font-size: 0.95rem;
                    color: #fff;
                }

                .deep-grammar-card {
                    grid-column: 1 / -1;
                    background: linear-gradient(160deg, rgba(30, 41, 59, 0.4) 0%, rgba(15, 23, 42, 0.4) 100%);
                    padding: 3rem;
                    border-radius: 2.5rem;
                    border: 1px solid rgba(255, 255, 255, 0.08);
                    margin-bottom: 2rem;
                }
                .deep-title { font-size: 1.8rem; font-weight: 900; color: #fff; margin-bottom: 1.5rem; }
                .deep-content { font-size: 1.1rem; color: #cbd5e1; line-height: 1.8; margin-bottom: 1.5rem; }
                .deep-tip {
                    background: ${data.color}10;
                    border: 1px solid ${data.color}30;
                    padding: 1.25rem;
                    border-radius: 1rem;
                    display: flex;
                    gap: 1rem;
                    align-items: center;
                }
                .tip-text { color: ${data.color}; font-weight: 700; }

                @media (max-width: 768px) {
                    .header { flex-direction: column; text-align: center; }
                    .tabs { justify-content: center; }
                    .grid { grid-template-columns: 1fr; }
                    .number-row { grid-template-columns: 80px 1fr; gap: 0.5rem; padding: 1rem; }
                    .num-pron { grid-column: 1 / -1; font-size: 0.85rem; padding-top: 0.25rem; }
                }
            </style>
            <div class="header">
                <div class="lang-info">
                    <span class="flag">${data.flag}</span>
                    <h2>${data.title}</h2>
                </div>
                <div class="tabs">
                    <div class="tab ${this.currentCategory === 'basics' ? 'active' : ''}" onclick="this.getRootNode().host.setCategory('basics')">기초</div>
                    <div class="tab ${this.currentCategory === 'numbers' ? 'active' : ''}" onclick="this.getRootNode().host.setCategory('numbers')">숫자 체계</div>
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
        if (!items) return '';
        
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

        if (this.currentCategory === 'numbers') {
            let html = `<div class="number-list-container">
                <div class="number-row header-row">
                    <span>수치 (Unit)</span>
                    <span>읽는 법 (Word)</span>
                    <span>발음/팁 (Pronunciation)</span>
                </div>`;
            html += items.map(item => `
                <div class="number-row">
                    <span class="num-val">${item.num}</span>
                    <span class="num-word">${item.word}</span>
                    <span class="num-pron">${item.pronunciation}</span>
                </div>
            `).join('');
            html += `</div>`;
            return html;
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
                        <div class="example-box">${item.example}</div>
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
