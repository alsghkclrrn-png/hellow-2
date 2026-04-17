
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
            { num: '1', word: '일 (Sino) / 하나 (Native)', pronunciation: '[일 / 하나]' },
            { num: '2', word: '이 (Sino) / 둘 (Native)', pronunciation: '[이 / 둘]' },
            { num: '3', word: '삼 (Sino) / 셋 (Native)', pronunciation: '[삼 / 섿]' },
            { num: '4', word: '사 (Sino) / 넷 (Native)', pronunciation: '[사 / 넫]' },
            { num: '5', word: '오 (Sino) / 다섯 (Native)', pronunciation: '[오 / 다섯]' },
            { num: '6', word: '육 (Sino) / 여섯 (Native)', pronunciation: '[육 / 여섣]' },
            { num: '7', word: '칠 (Sino) / 일곱 (Native)', pronunciation: '[칠 / 일곱]' },
            { num: '8', word: '팔 (Sino) / 여덟 (Native)', pronunciation: '[팔 / 여덜]' },
            { num: '9', word: '구 (Sino) / 아홉 (Native)', pronunciation: '[구 / 아홉]' },
            { num: '10', word: '십 (Sino) / 열 (Native)', pronunciation: '[십 / 열]' }
        ],
        vocabulary: [
            { word: '회의 (Meeting)', translation: '여럿이 모여 의견을 나눔', pronunciation: '[회의/회이]' },
            { word: '성공 (Success)', translation: '목적한 바를 이룸', pronunciation: '[성공]' },
            { word: '혁신 (Innovation)', translation: '새롭게 바꿈', pronunciation: '[혁씬]' },
            { word: '도전 (Challenge)', pronunciation: '[도전]', translation: '어려운 일에 맞섬' }
        ],
        grammar: [
            { rule: '-은/는', description: '문장의 주제나 대상을 나타내는 보조사', example: '저는 학생입니다.' },
            { rule: '-이/가', description: '문장의 주어를 나타내는 격 조사', example: '친구가 옵니다.' }
        ],
        deepGrammar: [
            { title: '은/는 vs 이/가 완벽 구분', content: '은/는은 대조나 주제를 나타낼 때 사용합니다. 반면 이/가 는 특정 사실이나 주어를 강조할 때 씁니다.', tip: '자기소개할 때는 "저는 ~입니다"가 자연스러워요!' },
            { title: '한국어의 이중 숫자 체계', content: '한국어는 한자어(일,이,삼)와 순우리말(하나,둘,셋) 두 가지 방식을 씁니다. 날짜, 돈, 분은 한자어를 쓰고, 나이와 시(Hour)는 순우리말을 씁니다.', tip: '시간을 말할 때 "1시 30분"은 "한 시 삼십 분"이라고 읽어요!' }
        ],
        conversation: [
            { phrase: '오늘 회의는 몇 시예요?', translation: '회의 시간을 물어볼 때', pronunciation: '[오늘 회의는 멷 씨예요?]' },
            { phrase: '제 명함입니다', translation: '비즈니스 첫 인사', pronunciation: '[제 명함임니다]' }
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
            { num: '1', word: 'One', pronunciation: '[원]' },
            { num: '2', word: 'Two', pronunciation: '[투]' },
            { num: '3', word: 'Three', pronunciation: '[쓰리]' },
            { num: '4', word: 'Four', pronunciation: '[포어]' },
            { num: '5', word: 'Five', pronunciation: '[파이브]' },
            { num: '6', word: 'Six', pronunciation: '[식스]' },
            { num: '7', word: 'Seven', pronunciation: '[세븐]' },
            { num: '8', word: 'Eight', pronunciation: '[에이트]' },
            { num: '9', word: 'Nine', pronunciation: '[나인]' },
            { num: '10', word: 'Ten', pronunciation: '[텐]' }
        ],
        vocabulary: [
            { word: 'Quarterly Report', translation: '분기 보고서', pronunciation: '[쿼터리 리포트]' },
            { word: 'Deadline', translation: '마감 기한', pronunciation: '[데드라인]' }
        ],
        grammar: [
            { rule: 'Passive Voice', description: '행위의 대상을 강조할 때 사용', example: 'The report was sent.' }
        ],
        deepGrammar: [
            { title: '기수(Cardinal)와 서수(Ordinal)', content: '개수를 셀 때는 One, Two를 쓰지만, 순서를 말할 때는 First, Second, Third를 씁니다.', tip: '날짜를 말할 때는 항상 서수(May 1st)를 사용하세요!' }
        ],
        conversation: [
            { phrase: 'Could you give me more details?', translation: '더 자세히 말씀해 주시겠어요?', pronunciation: '[쿠쥬 기브 미 모어 디테일즈?]' }
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
            { num: '1', word: '一 (Yī)', pronunciation: '[이]' },
            { num: '2', word: '二 (Èr)', pronunciation: '[얼]' },
            { num: '3', word: '三 (Sān)', pronunciation: '[싼]' },
            { num: '4', word: '四 (Sì)', pronunciation: '[쓰]' },
            { num: '5', word: '五 (Wǔ)', pronunciation: '[우]' },
            { num: '6', word: '六 (Liù)', pronunciation: '[리우]' },
            { num: '7', word: '七 (Qī)', pronunciation: '[치]' },
            { num: '8', word: '八 (Bā)', pronunciation: '[빠]' },
            { num: '9', word: '九 (Jiǔ)', pronunciation: '[지우]' },
            { num: '10', word: '十 (Shí)', pronunciation: '[싀]' }
        ],
        vocabulary: [
            { word: '项目 (Xiàngmù)', translation: '프로젝트', pronunciation: '[씨앙무]' }
        ],
        grammar: [
            { rule: '基本语序', description: '주어+동사+목적어 순서', example: '我吃苹果 (나는 사과를 먹는다)' }
        ],
        deepGrammar: [
            { title: '중국어 숫자 손동작', content: '중국에서는 한 손으로 1부터 10까지 모두 표현할 수 있는 독특한 손동작이 있습니다. 특히 6부터 10까지는 모양이 아주 특이하니 익혀두면 시장에서 유용합니다.', tip: '숫자 8은 엄지와 검지를 펼쳐 "총" 모양을 만들어요!' }
        ],
        conversation: [
            { phrase: '合作愉快!', translation: '즐겁게 협력합시다!', pronunciation: '[허쭈오 위콰이]' }
        ]
    },
    'japanese': {
        title: 'Japanese (일본어)',
        flag: '🇯🇵',
        color: '#ec4899',
        basics: [
            { type: 'Hiragana', items: 'あ, い, う, え, お...', desc: '일본어의 기본 문자입니다.' }
        ],
        numbers: [
            { num: '1', word: '一 (Ichi)', pronunciation: '[이치]' },
            { num: '2', word: '二 (Ni)', pronunciation: '[니]' },
            { num: '3', word: '三 (San)', pronunciation: '[산]' },
            { num: '4', word: '四 (Yon/Shi)', pronunciation: '[욘/시]' },
            { num: '5', word: '五 (Go)', pronunciation: '[고]' },
            { num: '6', word: '六 (Roku)', pronunciation: '[로쿠]' },
            { num: '7', word: '七 (Nana/Shichi)', pronunciation: '[나나/시치]' },
            { num: '8', word: '八 (Hachi)', pronunciation: '[하치]' },
            { num: '9', word: '九 (Kyu/Ku)', pronunciation: '[큐/쿠]' },
            { num: '10', word: '十 (Ju)', pronunciation: '[쥬-]' }
        ],
        vocabulary: [
            { word: '戦略 (Senryaku)', translation: '전략', pronunciation: '[센랴쿠]' }
        ],
        grammar: [
            { rule: 'て形', description: '동사 연결 및 부탁', example: '待ってください (기다려 주세요)' }
        ],
        deepGrammar: [
            { title: '4와 9를 조심하세요', content: '일본에서 숫자 4(시)는 죽음(死)과 발음이 같고, 9(쿠)는 고통(苦)과 발음이 같아 선물이나 병실 번호 등으로 피하는 경향이 있습니다.', tip: '그래서 4는 "욘", 7은 "나나"라고 더 자주 읽는답니다!' }
        ],
        conversation: [
            { phrase: 'よろしくお願いします。', translation: '잘 부탁드립니다.', pronunciation: '[요로시쿠 오네가이시마스]' }
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
            { num: '1', word: 'Uno', pronunciation: '[우노]' },
            { num: '2', word: 'Dos', pronunciation: '[도스]' },
            { num: '3', word: 'Tres', pronunciation: '[뜨레스]' },
            { num: '4', word: 'Cuatro', pronunciation: '[꾸아뜨로]' },
            { num: '5', word: 'Cinco', pronunciation: '[씬꼬]' },
            { num: '6', word: 'Seis', pronunciation: '[세이스]' },
            { num: '7', word: 'Siete', pronunciation: '[씨에떼]' },
            { num: '8', word: 'Ocho', pronunciation: '[오쵸]' },
            { num: '9', word: 'Nueve', pronunciation: '[누에베]' },
            { num: '10', word: 'Diez', pronunciation: '[디에스]' }
        ],
        vocabulary: [
            { word: 'Empresa', translation: '회사', pronunciation: '[엠쁘레사]' }
        ],
        grammar: [
            { rule: 'Género', description: '남성/여성 명사 구분', example: 'El sol / La luna' }
        ],
        deepGrammar: [
            { title: '숫자 Uno의 변화', content: '숫자 1(Uno)은 뒤에 남성 명사가 오면 "Un"으로 변합니다. (예: Un libro). 여성 명사 앞에서는 "Una"가 됩니다.', tip: '서수를 말할 때도 Primero가 Primer로 변하는 규칙이 비슷해요!' }
        ],
        conversation: [
            { phrase: '¡Mucho gusto!', translation: '만나서 반가워요!', pronunciation: '[무쵸 구스또]' }
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
                <p>기초, 숫자, 단어, 문법, 회화</p>
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
                .info-value { font-size: 1rem; color: #e2e8f0; font-weight: 500; }
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
                    <div class="tab ${this.currentCategory === 'numbers' ? 'active' : ''}" onclick="this.getRootNode().host.setCategory('numbers')">숫자</div>
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
                        <span class="badge">Number ${item.num}</span>
                        <div class="main-text">${item.word}</div>
                        <div class="content-box">
                            <div class="info-row">
                                <span class="info-label">발음</span>
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
