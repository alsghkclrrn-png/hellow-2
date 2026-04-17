
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
            { num: '10~90', word: '열, 스물, 서른, 마흔, 쉰, 예순, 일흔, 여든, 아흔', pronunciation: '[Native Units]' },
            { num: '100', word: '백 (Baek)', pronunciation: '[백]' },
            { num: '1,000', word: '천 (Cheon)', pronunciation: '[천]' },
            { num: '10,000', word: '만 (Man)', pronunciation: '[만]' },
            { num: '10^8', word: '억 (Eok)', pronunciation: '[억]' },
            { num: '10^12', word: '조 (Jo)', pronunciation: '[조]' }
        ],
        vocabulary: [
            { word: '회의 (Meeting)', translation: '여럿이 모여 의견을 나눔', pronunciation: '[회의/회이]' },
            { word: '성공 (Success)', translation: '목적한 바를 이룸', pronunciation: '[성공]' }
        ],
        grammar: [
            { rule: '-은/는', description: '문장의 주제나 대상을 나타내는 보조사', example: '저는 학생입니다.' }
        ],
        deepGrammar: [
            { title: '한국어 큰 숫자 읽기 법칙', content: '한국어는 서양의 3자리(Thousand) 단위와 달리 4자리(만, 억, 조) 단위로 숫자가 올라갑니다. 예를 들어 100,000은 "십만"이라고 읽습니다.', tip: '숫자 뒤에 0이 4개 붙을 때마다 단위가 바뀐다고 생각하면 쉬워요!' },
            { title: '순우리말 숫자의 한계', content: '나이를 셀 때 쓰는 하나, 둘... 아흔아홉(99)까지는 순우리말을 쓰지만, 100(백)부터는 한자어만 사용합니다.', tip: '100살은 "백 살"이라고 합니다.' }
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
            { type: 'Alphabet', items: 'A, B, C, D, E...', desc: '영어의 기초 알파벳입니다.' }
        ],
        numbers: [
            { num: '11~19', word: 'Eleven, Twelve, Thirteen... Nineteen', pronunciation: '[일레븐, 트웰브...]' },
            { num: '20~90', word: 'Twenty, Thirty, Forty, Fifty... Ninety', pronunciation: '[트웬티, 써티...]' },
            { num: '100', word: 'Hundred', pronunciation: '[헌드레드]' },
            { num: '1,000', word: 'Thousand', pronunciation: '[싸우전드]' },
            { num: '1,000,000', word: 'Million', pronunciation: '[밀리언]' },
            { num: '1,000,000,000', word: 'Billion', pronunciation: '[빌리언]' }
        ],
        vocabulary: [
            { word: 'Quarterly Report', translation: '분기 보고서', pronunciation: '[쿼터리 리포트]' }
        ],
        grammar: [
            { rule: 'Passive Voice', description: '행위의 대상을 강조', example: 'The report was sent.' }
        ],
        deepGrammar: [
            { title: '영어의 3자리 콤마 법칙', content: '영어는 3자리마다 이름이 붙습니다. Thousand(1,000), Million(1,000,000), Billion(1,000,000,000). 콤마를 기준으로 읽는 연습을 하세요.', tip: '10,000은 "Ten thousand"라고 읽습니다.' },
            { title: '13~19 (-teen) vs 30~90 (-ty)', content: '발음이 비슷해서 헷갈리기 쉽습니다. -teen은 뒤에 강세를 세게 주어 길게 발음하고, -ty는 앞을 강하게 발음합니다.', tip: 'Thirteen(13) vs Thirty(30) 발음을 구분해보세요!' }
        ],
        conversation: [
            { phrase: 'How much does it cost?', translation: '비용이 얼마인가요?', pronunciation: '[하우 머치 더즈 잇 코스트?]' }
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
            { num: '11~99', word: '十一 (Shíyī), 二十 (Èrshí)...', pronunciation: '[십+일, 이+십...]' },
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
            { title: '중국어 큰 숫자 조합법', content: '한국어와 매우 유사합니다. 만(万), 억(亿) 단위를 그대로 사용합니다. 숫자가 커져도 단위만 알면 그대로 조합해서 읽을 수 있습니다.', tip: '중간에 0이 있으면 "영(零, líng)"이라고 꼭 읽어줘야 하는 경우가 있어요!' }
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
            { type: 'Hiragana', items: 'あ, い, 우, 에, 오...', desc: '일본어 기본 문자입니다.' }
        ],
        numbers: [
            { num: '11~99', word: '十一 (Jūichi), 二十 (Nijū)...', pronunciation: '[쥬-이치, 니쥬-...]' },
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
            { title: '백, 천 단위의 발음 변화', content: '100(햐쿠)와 1000(센)은 앞에 오는 숫자에 따라 발음이 변합니다. 300은 "산뱌쿠", 800은 "합표쿠"처럼 변하니 주의하세요.', tip: '3,000은 "산젠"이라고 읽습니다!' }
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
            { type: 'Alfabeto', items: 'A, B, C, Ñ...', desc: '스페인어 알파벳입니다.' }
        ],
        numbers: [
            { num: '11~15', word: 'Once, Doce, Trece, Catorce, Quince', pronunciation: '[온쎄, 도쎄, 뜨렛쎄, 까또르쎄, 낀쎄]' },
            { num: '20, 30', word: 'Veinte, Treinta', pronunciation: '[베인떼, 뜨레인따]' },
            { num: '100', word: 'Cien / Ciento', pronunciation: '[씨엔 / 씨엔또]' },
            { num: '1,000', word: 'Mil', pronunciation: '[밀]' },
            { num: '1,000,000', word: 'Un millón', pronunciation: '[운 밀리온]' },
            { num: '10^12', word: 'Un billón', pronunciation: '[운 빌리온]' }
        ],
        vocabulary: [
            { word: 'Empresa', translation: '회사', pronunciation: '[엠쁘레사]' }
        ],
        grammar: [
            { rule: 'Género', description: '남성/여성 명사', example: 'El sol / La luna' }
        ],
        deepGrammar: [
            { title: '스페인어 11~15의 독특함', content: '스페인어는 11부터 15까지 고유한 단어를 사용하고, 16부터는 Dieci... (10과 ...) 형태로 조합합니다.', tip: '16은 Dieciséis(디에씨세이스)라고 합니다.' },
            { title: 'Billion의 함정', content: '스페인어의 "Billón"은 영어의 Billion(10억)이 아니라 Trillion(1조)을 의미하는 경우가 많아 비즈니스 시 주의가 필요합니다.', tip: '보통 백만(Millón) 단위로 계산하는 것이 안전합니다.' }
        ],
        conversation: [
            { phrase: '¿Cuánto cuesta esto?', translation: '이것은 얼마인가요?', pronunciation: '[꽌또 꾸에스따 에스또?]' }
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
                <p>기초, 숫자 단위, 단어, 문법</p>
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
                    grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
                    gap: 1.5rem;
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
                }
            </style>
            <div class="header">
                <div class="lang-info">
                    <span class="flag">${data.flag}</span>
                    <h2>${data.title}</h2>
                </div>
                <div class="tabs">
                    <div class="tab ${this.currentCategory === 'basics' ? 'active' : ''}" onclick="this.getRootNode().host.setCategory('basics')">기초</div>
                    <div class="tab ${this.currentCategory === 'numbers' ? 'active' : ''}" onclick="this.getRootNode().host.setCategory('numbers')">숫자 단위</div>
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
            } else if (this.currentCategory === 'numbers') {
                return `
                    <div class="item-card">
                        <span class="badge">Unit: ${item.num}</span>
                        <div class="main-text">${item.word}</div>
                        <div class="content-box">
                            <div class="info-row">
                                <span class="info-label">읽기</span>
                                <span class="info-value pronunciation">${item.pronunciation}</span>
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
