
const languageData = {
    'korean': {
        title: 'Korean (한국어)',
        flag: '🇰🇷',
        color: '#14b8a6',
        vocabulary: [
            { word: '학교', translation: 'School', pronunciation: '[Hak-gyo]' },
            { word: '친구', translation: 'Friend', pronunciation: '[Chin-gu]' },
            { word: '사과', translation: 'Apple', pronunciation: '[Sa-gwa]' },
            { word: '책', translation: 'Book', pronunciation: '[Chaek]' }
        ],
        grammar: [
            { rule: '-은/는', description: 'Topic particle', example: '저는 학생입니다. (I am a student.)' },
            { rule: '-이/가', description: 'Subject particle', example: '친구가 옵니다. (A friend is coming.)' },
            { rule: '-을/를', description: 'Object particle', example: '사과를 먹어요. (I eat an apple.)' }
        ],
        conversation: [
            { phrase: '반갑습니다', translation: 'Nice to meet you', pronunciation: '[Ban-gap-seum-ni-da]' },
            { phrase: '이름이 뭐예요?', translation: 'What is your name?', pronunciation: '[I-reum-i mwo-ye-yo?]' },
            { phrase: '잘 지냈어요?', translation: 'How have you been?', pronunciation: '[Jal ji-nae-sseo-yo?]' }
        ]
    },
    'english': {
        title: 'English (영어)',
        flag: '🇺🇸',
        color: '#3b82f6',
        vocabulary: [
            { word: 'Library', translation: '도서관', pronunciation: '[라이브러리]' },
            { word: 'Together', translation: '함께', pronunciation: '[투게더]' },
            { word: 'Delicious', translation: '맛있는', pronunciation: '[딜리셔스]' },
            { word: 'Journey', translation: '여정', pronunciation: '[저니]' }
        ],
        grammar: [
            { rule: 'Present Simple', description: 'Used for habits/truths', example: 'I study every day.' },
            { rule: 'Articles (a/an/the)', description: 'Determiners', example: 'A book, An apple, The sun.' },
            { rule: 'Plural Nouns', description: 'Adding -s/es', example: 'Dog -> Dogs, Box -> Boxes' }
        ],
        conversation: [
            { phrase: 'How are you?', translation: '어떻게 지내세요?', pronunciation: '[하우 아 유?]' },
            { phrase: 'Could you help me?', translation: '좀 도와주시겠어요?', pronunciation: '[쿠쥬 헬프 미?]' },
            { phrase: 'Nice weather!', translation: '날씨 좋네요!', pronunciation: '[나이스 웨더!]' }
        ]
    },
    'chinese': {
        title: 'Chinese (中文)',
        flag: '🇨🇳',
        color: '#ef4444',
        vocabulary: [
            { word: '学生 (Xuésheng)', translation: '학생', pronunciation: '[슈에셩]' },
            { word: '老师 (Lǎoshī)', translation: '선생님', pronunciation: '[라오싀]' },
            { word: '开心 (Kāixīn)', translation: '행복하다', pronunciation: '[카이씬]' },
            { word: '努力 (Nǔlì)', translation: '노력하다', pronunciation: '[누리]' }
        ],
        grammar: [
            { rule: 'S + V + O', description: 'Basic sentence structure', example: '我学中文 (I learn Chinese)' },
            { rule: '吗 (Ma)', description: 'Question particle', example: '你好吗? (How are you?)' },
            { rule: '的 (De)', description: 'Possessive particle', example: '我的书 (My book)' }
        ],
        conversation: [
            { phrase: '好久不见 (Hǎojiǔ bùjiàn)', translation: '오랜만이에요', pronunciation: '[하오지우 부지엔]' },
            { phrase: '你吃饭了吗? (Nǐ chīfànle ma?)', translation: '밥 먹었니?', pronunciation: '[니 츠판러 마?]' },
            { phrase: '加油! (Jiāyóu!)', translation: '화이팅!', pronunciation: '[짜요!]' }
        ]
    },
    'japanese': {
        title: 'Japanese (日本語)',
        flag: '🇯🇵',
        color: '#ec4899',
        vocabulary: [
            { word: '夢 (Yume)', translation: '꿈', pronunciation: '[유메]' },
            { word: '希望 (Kibō)', translation: '희망', pronunciation: '[키보-]' },
            { word: '元気 (Genki)', translation: '건강/활기', pronunciation: '[겐키]' },
            { word: '心 (Kokoro)', translation: '마음', pronunciation: '[코코로]' }
        ],
        grammar: [
            { rule: 'は (Wa)', description: 'Topic particle', example: '私は学生です (I am a student)' },
            { rule: 'の (No)', description: 'Possessive particle', example: '私の本 (My book)' },
            { rule: 'です (Desu)', description: 'Polite ending', example: 'きれいです (It is beautiful)' }
        ],
        conversation: [
            { phrase: 'お疲れ様です', translation: '수고하셨습니다', pronunciation: '[오츠카레사마데스]' },
            { phrase: 'はじめまして', translation: '처음 뵙겠습니다', pronunciation: '[하지메마시테]' },
            { phrase: '頑張って!', translation: '힘내세요!', pronunciation: '[간밧테!]' }
        ]
    }
};

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
                <p>단어, 문법, 회화 학습</p>
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

class LessonHub extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: 'open' });
        this.currentLang = null;
        this.currentCategory = 'vocabulary';
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
                    grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
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
                .main-text { font-size: 1.5rem; font-weight: 700; color: #fff; }
                .sub-text { font-size: 1rem; color: #cbd5e1; }
                .extra-text { font-size: 0.9rem; color: #94a3b8; font-style: italic; }
                .example { background: rgba(0,0,0,0.2); padding: 0.75rem; border-radius: 0.75rem; border-left: 3px solid ${data.color}; margin-top: 0.5rem; font-size: 0.9rem; }

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

    renderItems(items) {
        return items.map(item => {
            if (this.currentCategory === 'vocabulary') {
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

customElements.define('language-card', LanguageCard);
customElements.define('lesson-hub', LessonHub);

// App Logic
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
