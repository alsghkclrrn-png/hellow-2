
const languageData = {
    'korean': {
        title: 'Korean (한국어)',
        flag: '🇰🇷',
        color: '#14b8a6',
        lessons: [
            { category: '필수', original: '안녕하세요', translated: 'Hello', pronunciation: '[An-nyeong-ha-se-yo]' },
            { category: '필수', original: '감사합니다', translated: 'Thank you', pronunciation: '[Gam-sa-ham-ni-da]' },
            { category: '여행', original: '화장실 어디예요?', translated: 'Where is the restroom?', pronunciation: '[Hwa-jang-sil eo-di-ye-yo?]' },
            { category: '음식', original: '이거 맛있어요!', translated: 'This is delicious!', pronunciation: '[I-geo ma-si-sseo-yo!]' }
        ]
    },
    'english': {
        title: 'English (영어)',
        flag: '🇺🇸',
        color: '#3b82f6',
        lessons: [
            { category: 'Essentials', original: 'Hello / Hi', translated: '안녕하세요', pronunciation: '[hel-oh / hay]' },
            { category: 'Essentials', original: 'Nice to meet you', translated: '만나서 반가워요', pronunciation: '[nahys too meet yoo]' },
            { category: 'Travel', original: 'How much is it?', translated: '얼마인가요?', pronunciation: '[how muhch iz it]' },
            { category: 'Food', original: 'Water, please', translated: '물 좀 주세요', pronunciation: '[wah-ter pleez]' }
        ]
    },
    'chinese': {
        title: 'Chinese (中文)',
        flag: '🇨🇳',
        color: '#ef4444',
        lessons: [
            { category: '基础', original: '你好 (Nǐ hǎo)', translated: '안녕하세요', pronunciation: '[니 하오]' },
            { category: '基础', original: '谢谢 (Xièxiè)', translated: '감사합니다', pronunciation: '[씨에씨에]' },
            { category: '旅游', original: '多少钱? (Duōshǎo qián?)', translated: '얼마예요?', pronunciation: '[뚜오샤오 치엔]' },
            { category: '饮食', original: '我想喝水 (Wǒ xiǎng hē shuǐ)', translated: '물 마시고 싶어요', pronunciation: '[워 샹 허 슈이]' }
        ]
    },
    'japanese': {
        title: 'Japanese (日本語)',
        flag: '🇯🇵',
        color: '#ec4899',
        lessons: [
            { category: '基本', original: 'こんにちは (Konnichiwa)', translated: '안녕하세요', pronunciation: '[곤니찌와]' },
            { category: '基本', original: 'ありがとう (Arigatō)', translated: '감사합니다', pronunciation: '[아리가또]' },
            { category: '旅行', original: 'いくらですか? (Ikura desu ka?)', translated: '얼마입니까?', pronunciation: '[이크라데스까]' },
            { category: '食事', original: 'おいしいです (Oishii desu)', translated: '맛있습니다', pronunciation: '[오이시이데스]' }
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
                    opacity: 0.5;
                }
                .card:hover {
                    transform: translateY(-8px);
                    background: rgba(255, 255, 255, 0.1);
                    border-color: ${data.color};
                    box-shadow: 0 15px 30px -10px ${data.color}44;
                }
                .flag { font-size: 3.5rem; display: block; margin-bottom: 1rem; }
                h3 { font-size: 1.25rem; font-weight: 700; color: #fff; margin: 0; }
                p { font-size: 0.875rem; color: #94a3b8; margin-top: 0.5rem; }
            </style>
            <div class="card">
                <span class="flag">${data.flag}</span>
                <h3>${data.title}</h3>
                <p>기초 표현 배우기</p>
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
    }

    update(langId) {
        const data = languageData[langId];
        this.render(data);
    }

    render(data) {
        this.shadowRoot.innerHTML = `
            <style>
                .header { display: flex; align-items: center; gap: 1.5rem; margin-bottom: 2.5rem; }
                .flag { font-size: 3rem; }
                h2 { font-size: 2.5rem; font-weight: 800; color: ${data.color}; margin: 0; }
                .grid {
                    display: grid;
                    grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
                    gap: 1.5rem;
                }
                .lesson-card {
                    background: rgba(255, 255, 255, 0.03);
                    padding: 1.5rem;
                    border-radius: 1.25rem;
                    border: 1px solid rgba(255, 255, 255, 0.05);
                    transition: transform 0.3s ease;
                }
                .lesson-card:hover { transform: scale(1.02); background: rgba(255, 255, 255, 0.06); }
                .category {
                    font-size: 0.7rem;
                    font-weight: 800;
                    text-transform: uppercase;
                    color: ${data.color};
                    background: ${data.color}15;
                    padding: 0.2rem 0.6rem;
                    border-radius: 2rem;
                    display: inline-block;
                    margin-bottom: 0.75rem;
                }
                .original { font-size: 1.25rem; font-weight: 700; color: #fff; margin-bottom: 0.25rem; }
                .pronunciation { font-size: 0.9rem; color: #64748b; font-style: italic; margin-bottom: 0.75rem; }
                .translated { font-size: 1rem; color: #94a3b8; font-weight: 500; }
                
                @media (max-width: 600px) {
                    h2 { font-size: 1.75rem; }
                    .header { gap: 1rem; }
                }
            </style>
            <div class="header">
                <span class="flag">${data.flag}</span>
                <h2>${data.title}</h2>
            </div>
            <div class="grid">
                ${data.lessons.map(l => `
                    <div class="lesson-card">
                        <span class="category">${l.category}</span>
                        <div class="original">${l.original}</div>
                        <div class="pronunciation">${l.pronunciation}</div>
                        <div class="translated">${l.translated}</div>
                    </div>
                `).join('')}
            </div>
        `;
    }
}

customElements.define('language-card', LanguageCard);
customElements.define('lesson-hub', LessonHub);

// App Logic
document.addEventListener('lang-selected', (e) => {
    const hub = document.querySelector('lesson-hub');
    const section = document.querySelector('#lesson-section');
    
    hub.update(e.detail.id);
    section.classList.add('active');
    
    setTimeout(() => {
        section.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }, 100);
});
