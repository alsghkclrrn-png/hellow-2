
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
            { word: '학교', translation: '배우는 곳 (교육 기관)', pronunciation: '[학교]' },
            { word: '친구', pronunciation: '[친구]', translation: '가깝게 오래 사귄 사람' },
            { word: '사과', translation: '붉은색의 달콤한 과일', pronunciation: '[사과]' },
            { word: '책', translation: '종이를 묶어 만든 읽을거리', pronunciation: '[책]' },
            { word: '음식', translation: '사람이 먹을 수 있는 것', pronunciation: '[음식]' },
            { word: '공부', translation: '학문이나 기술을 배우는 일', pronunciation: '[공부]' },
            { word: '시간', pronunciation: '[시간]', translation: '어떤 때나 동안' },
            { word: '하늘', translation: '지구의 대기권 위 공간', pronunciation: '[하늘]' },
            { word: '바다', translation: '지구 위 짠물이 고인 넓은 곳', pronunciation: '[바다]' },
            { word: '사랑', translation: '아끼고 귀중히 여기는 마음', pronunciation: '[사랑]' }
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
            { title: '해요체와 하십시오체의 차이', content: '한국어의 존댓말은 상황에 따라 달라요. "-요"는 일상적인 대화에서 부드럽게 쓰이고, "-습니다"는 군대, 뉴스, 면접 같은 아주 격식 있는 자리에서 쓰입니다. 성인 학습자라면 두 가지를 상황에 맞춰 쓰는 연습이 중요합니다.', tip: '친구 부모님을 뵈었을 때는 "-요"를 써도 충분히 예의 바르게 들려요.' }
        ],
        conversation: [
            { phrase: '반갑습니다', translation: '만나서 기쁘다는 인사', pronunciation: '[반갑씀니다]' },
            { phrase: '이름이 뭐예요?', translation: '이름을 물어볼 때 사용', pronunciation: '[이르미 뭐예요?]' },
            { phrase: '잘 지냈어요?', translation: '안부를 물을 때 사용', pronunciation: '[잘 지내써요?]' },
            { phrase: '이거 얼마예요?', translation: '물건의 가격을 물을 때 사용', pronunciation: '[이거 얼마예요?]' },
            { phrase: '화장실 어디예요?', pronunciation: '[화장실 어디예요?]', translation: '장소의 위치를 물을 때 사용' },
            { phrase: '감사합니다', translation: '고마움을 표현할 때 사용', pronunciation: '[감사함니다]' },
            { phrase: '죄송합니다', translation: '사과를 할 때 사용', pronunciation: '[죄송함니다]' },
            { phrase: '다음에 또 봐요', translation: '헤어질 때 하는 인사', pronunciation: '[다음에 또 봐요]' }
        ]
    },
    'english': {
        title: 'English (영어)',
        flag: '🇺🇸',
        color: '#3b82f6',
        basics: [
            { type: 'Uppercase (대문자)', items: 'A, B, C, D, E, F, G, H, I, J, K, L, M, N, O, P, Q, R, S, T, U, V, W, X, Y, Z', desc: '영어의 26개 대문자 알파벳입니다.' },
            { type: 'Lowercase (소문자)', items: 'a, b, c, d, e, f, g, h, i, j, k, l, m, n, o, p, q, r, s, t, u, v, w, x, y, z', desc: '영어의 26개 소문자 알파벳입니다.' },
            { type: 'Vowels (모음)', items: 'A, E, I, O, U', desc: '영어 발음의 핵심이 되는 5개의 모음입니다.' },
            { type: 'Consonants (자음)', items: 'B, C, D, F, G, H, J, K, L, M, N, P, Q, R, S, T, V, W, X, Y, Z', desc: '모음을 제외한 21개의 자음입니다.' }
        ],
        vocabulary: [
            { word: 'Library', translation: '도서관', pronunciation: '[라이브러리]' },
            { word: 'Together', translation: '함께', pronunciation: '[투게더]' },
            { word: 'Delicious', translation: '맛있는', pronunciation: '[딜리셔스]' },
            { word: 'Journey', translation: '여정/여행', pronunciation: '[저니]' },
            { word: 'Innovation', translation: '혁신', pronunciation: '[이노베이션]' },
            { word: 'Experience', translation: '경험', pronunciation: '[익스피리언스]' },
            { word: 'Language', translation: '언어', pronunciation: '[랭귀지]' },
            { word: 'Success', translation: '성공', pronunciation: '[석세스]' },
            { word: 'Challenge', translation: '도전', pronunciation: '[챌린지]' },
            { word: 'Opportunity', translation: '기회', pronunciation: '[오퍼튜니티]' }
        ],
        grammar: [
            { rule: '동사의 종류', description: '일반 동사와 조동사의 구분', example: 'I swim (일반) / I can swim (조동사).' },
            { rule: '문장 구조', description: '주어(S) + 동사(V)가 기본 문법 체계입니다.', example: 'He runs. / They play soccer.' },
            { rule: 'CAN / COULD', description: '능력, 허가 또는 정중한 요청을 표현', example: 'I can swim. / Could you help me?' },
            { rule: 'WILL / WOULD', description: '미래의 의지나 정중한 권유를 표현', example: 'I will go. / Would you like some tea?' },
            { rule: 'SHOULD / MUST', description: '조언, 의무 또는 강한 필요성을 표현', example: 'You should rest. / You must stop here.' },
            { rule: 'MAY / MIGHT', description: '허가나 불확실한 가능성을 표현', example: 'May I come in? / It might rain today.' }
        ],
        deepGrammar: [
            { title: 'The vs A/An 완벽 가이드', content: '특정한 것을 가리킬 때는 the를, 막연한 하나를 말할 때는 a/an을 씁니다. 예를 들어, "I saw a movie"는 그냥 영화 한 편을 봤다는 뜻이고, "I saw the movie"는 우리가 이미 알고 있는 그 영화를 봤다는 뜻입니다.', tip: '세상에 하나뿐인 것(the sun, the moon)에는 항상 the를 붙여요!' },
            { title: '현재완료(Have + p.p) 실전 사용법', content: '과거에 시작된 일이 지금까지 영향을 줄 때 씁니다. "I lost my key"는 그냥 과거에 잃어버렸다는 사실만 말하지만, "I have lost my key"는 잃어버려서 지금도 열쇠가 없다는 뉘앙스를 풍깁니다.', tip: '경험을 물어볼 때 "Have you ever...?" 패턴을 기억하세요.' }
        ],
        conversation: [
            { phrase: 'How are you?', translation: '어떻게 지내세요?', pronunciation: '[하우 아 유?]' },
            { phrase: 'Could you help me?', translation: '좀 도와주시겠어요?', pronunciation: '[쿠쥬 헬프 미?]' },
            { phrase: 'Nice weather!', translation: '날씨 정말 좋네요!', pronunciation: '[나이스 웨더!]' },
            { phrase: 'What do you recommend?', translation: '무엇을 추천하시나요?', pronunciation: '[왓 두 유 레코멘드?]' },
            { phrase: 'Where is the station?', translation: '역이 어디에 있나요?', pronunciation: '[웨어 이즈 더 스테이션?]' },
            { phrase: 'Nice to meet you', translation: '만나서 반가워요', pronunciation: '[나이스 투 미트 유]' }
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
            { word: '学生 (Xuésheng)', translation: '학생', pronunciation: '[슈에셩]' },
            { word: '老师 (Lǎoshī)', translation: '선생님', pronunciation: '[라오싀]' },
            { word: '开心 (Kāixīn)', translation: '기쁘다/행복하다', pronunciation: '[카이씬]' },
            { word: '努力 (Nǔlì)', translation: '노력하다', pronunciation: '[누리]' },
            { word: '漂亮 (Piàoliang)', translation: '예쁘다', pronunciation: '[피아오리앙]' },
            { word: '시간 (Shíjiān)', translation: '시간', pronunciation: '[싀지엔]' },
            { word: '朋友 (Péngyǒu)', translation: '친구', pronunciation: '[펑요우]' },
            { word: '手机 (Shǒujī)', translation: '휴대폰', pronunciation: '[쇼우지]' }
        ],
        grammar: [
            { rule: '기본 어순', description: '주어 + 동사 + 목적어 순서 (한국어와 다름)', example: '我学中文 (나는 중국어를 배운다)' },
            { rule: '吗 (Ma)', description: '문장 끝에 붙여 의문문을 만듬', example: '你好吗? (잘 지내니?)' },
            { rule: '的 (De)', description: '소유나 수식을 나타냄 (~의, ~한)', example: '我的书 (나의 책)' },
            { rule: '了 (Le)', description: '상태의 변화나 완료를 나타냄', example: '我吃饭了 (나 밥 먹었어)' }
        ],
        deepGrammar: [
            { title: '성조(Tones)를 정복하는 비결', content: '중국어는 음의 높낮이에 따라 뜻이 완전히 달라집니다. 1성은 길고 높게, 2성은 밑에서 위로, 3성은 내려갔다 올라오게, 4성은 위에서 아래로 짧게 내리꽂듯 발음하세요. 머릿속으로 음의 곡선을 그리며 발음하는 것이 성인 학습자에게 효과적입니다.', tip: '발음할 때 고개를 약간씩 움직이며 성조의 흐름을 타보세요!' },
            { title: '중국어 어순의 핵심: S-V-O', content: '한국어는 "나 사과 먹어"처럼 목적어가 중간에 오지만, 중국어는 영어와 비슷하게 "나 먹어 사과" 순으로 말합니다. 이 구조만 익숙해져도 간단한 문장은 바로 만들 수 있어요.', tip: '주어(나) + 동사(좋아해) + 목적어(너) = 我爱你!' }
        ],
        conversation: [
            { phrase: '好久不见', translation: '오랜만이에요', pronunciation: '[하오지우 부지엔]' },
            { phrase: '你吃饭了吗?', translation: '식사하셨나요?', pronunciation: '[니 츠판러 마?]' },
            { phrase: '加油!', translation: '힘내세요! (화이팅)', pronunciation: '[짜요!]' },
            { phrase: '多少钱?', translation: '얼마인가요?', pronunciation: '[뚜오샤오 치엔]' },
            { phrase: '谢谢', translation: '감사합니다', pronunciation: '[씨에씨에]' }
        ]
    },
    'japanese': {
        title: 'Japanese (일본어)',
        flag: '🇯🇵',
        color: '#ec4899',
        basics: [
            { type: '히라가나', items: 'あ, い, 우, え, 오, か, き, く, け, 코...', desc: '일본어의 가장 기본적인 문자입니다.' },
            { type: '가타카나', items: 'ア, 이, ウ, 에, オ, カ, キ, ク, 케, 코...', desc: '외래어나 강조할 때 사용하는 문자입니다.' },
            { type: '한자 (Kanji)', items: '日, 월, 화, 수, 목, 금, 토...', desc: '표의 문자로 의미를 전달하는 한자입니다.' },
            { type: '장음/단음', items: '발음의 길이', desc: '발음의 길이에 따라 단어의 뜻이 달라집니다.' }
        ],
        vocabulary: [
            { word: '夢 (Yume)', translation: '꿈', pronunciation: '[유메]' },
            { word: '希望 (Kibō)', translation: '희망', pronunciation: '[키보-]' },
            { word: '元気 (Genki)', translation: '건강함/활기참', pronunciation: '[겐키]' },
            { word: '心 (Kokoro)', translation: '마음', pronunciation: '[코코로]' },
            { word: '桜 (Sakura)', translation: '벚꽃', pronunciation: '[사쿠라]' },
            { word: '友達 (Tomodachi)', translation: '친구', pronunciation: '[토모다치]' },
            { word: '未来 (Mirai)', translation: '미래', pronunciation: '[미라이]' },
            { word: '旅行 (Ryokō)', translation: '여행', pronunciation: '[료코-]' }
        ],
        grammar: [
            { rule: 'は (Wa)', description: '문장의 주제를 나타내는 조사 (~은/는)', example: '私は学生입니다 (나는 학생입니다)' },
            { rule: 'の (No)', description: '소유나 수식을 나타내는 조사 (~의)', example: '私の本 (나의 책)' },
            { rule: '입니다 (Desu)', description: '문장을 정중하게 마무리하는 서술어', example: 'きれ이입니다 (예쁩니다)' },
            { rule: '을/를 (O)', description: '동사의 목적어를 나타내는 조사 (~을/를)', example: 'りんごを 먹습니다 (사과를 먹습니다)' }
        ],
        deepGrammar: [
            { title: '은/는(は) vs 이/가(が) 일본어판', content: '한국어와 마찬가지로 일본어도 は와 が의 구분이 중요합니다. は는 문장의 큰 주제를, が는 문장 안의 작은 주어를 나타냅니다. 예를 들어 "코끼리는 코가 길다"에서 코끼리는 は를, 코는 が를 씁니다.', tip: '처음 말하는 주어에는 が를, 이미 알고 있는 주제에는 は를 써보세요.' },
            { title: '일본어 동사의 3가지 그룹', content: '일본어 동사는 모양에 따라 1, 2, 3그룹으로 나뉩니다. 그룹에 따라 활용 방식이 다르기 때문에 동사를 외울 때 몇 그룹인지 함께 체크하는 습관이 중요합니다.', tip: '합니다(する)와 옵니다(くる)는 딱 두 개뿐인 3그룹 동사예요!' }
        ],
        conversation: [
            { phrase: 'お疲れ様입니다', translation: '수고하셨습니다', pronunciation: '[오츠카레사마데스]' },
            { phrase: 'はじめまして', translation: '처음 뵙겠습니다', pronunciation: '[하지메마시테]' },
            { phrase: '頑張って!', translation: '힘내세요!', pronunciation: '[간밧테!]' },
            { phrase: 'いくら입니다까?', translation: '얼마인가요?', pronunciation: '[이크라데스까]' },
            { phrase: 'すみません', translation: '실례합니다/죄송합니다', pronunciation: '[스미마셍]' }
        ]
    },
    'spanish': {
        title: 'Spanish (스페인어)',
        flag: '🇪🇸',
        color: '#f59e0b',
        basics: [
            { type: 'Alfabeto', items: 'A, B, C, D, E, F, G, H, I, J, K, L, M, N, Ñ, O, P, Q, R, S, T, U, V, W, X, Y, Z', desc: '스페인어만의 독특한 글자 Ñ(에녜)가 포함된 알파벳입니다.' },
            { type: 'Vowels', items: 'A, E, I, O, U', desc: '영어와 달리 발음이 일정하고 명확합니다.' },
            { type: 'Accents', items: 'á, é, í, ó, ú', desc: '강세를 표시하며, 질문 시에는 ¡! 와 ¿? 를 사용합니다.' }
        ],
        vocabulary: [
            { word: 'Biblioteca', translation: '도서관', pronunciation: '[비블리오떼까]' },
            { word: 'Amigo', translation: '친구', pronunciation: '[아미고]' },
            { word: 'Delicioso', translation: '맛있는', pronunciation: '[델리시오소]' },
            { word: 'Viaje', translation: '여행', pronunciation: '[비아헤]' },
            { word: 'Mañana', translation: '내일 / 아침', pronunciation: '[마냐나]' },
            { word: 'Gracias', translation: '감사합니다', pronunciation: '[그라시아스]' },
            { word: 'Fiesta', translation: '축제/파티', pronunciation: '[피에스따]' },
            { word: 'Familia', translation: '가족', pronunciation: '[파밀리아]' }
        ],
        grammar: [
            { rule: '명사의 성별', description: '모든 명사는 남성형(o) 또는 여성형(a)으로 나뉩니다.', example: 'El libro (남성) / La mesa (여성)' },
            { rule: '정관사/부정관사', description: '성별과 수에 따라 정관사가 달라집니다.', example: 'el/la (단수), los/las (복수)' },
            { rule: '동사 변화', description: '주어에 따라 동사의 끝부분이 계속 변합니다.', example: 'Yo hablo (나), Tú hablas (너), Él habla (그)' }
        ],
        deepGrammar: [
            { title: '명사의 성(Gender) 쉽게 구분하기', content: '스페인어 명사는 남성 아니면 여성입니다. 보통 -o로 끝나면 남성, -a로 끝나면 여성인 경우가 많아요. 하지만 맵(mapa)처럼 -a로 끝나도 남성인 예외도 있으니 주의가 필요합니다.', tip: '여성 명사 앞에는 La를, 남성 명사 앞에는 El을 붙여서 세트로 외우세요!' },
            { title: '스페인어의 꽃, 동사 활용', content: '스페인어는 주어를 생략해도 동사 모양만 보고 누가 말하는지 알 수 있어요. "Hablo"라고만 해도 "내가 말한다"는 뜻이 되죠. 처음에는 복잡하지만 익숙해지면 아주 효율적인 언어입니다.', tip: '가장 기본인 -ar 동사의 변화형(o-as-a-amos-áis-an)부터 노래처럼 외워보세요.' }
        ],
        conversation: [
            { phrase: '¡Hola! ¿Cómo estás?', translation: '안녕! 어떻게 지내?', pronunciation: '[올라! 꼬모 에스따스?]' },
            { phrase: 'Mucho gusto', translation: '만나서 반가워요', pronunciation: '[무쵸 구스또]' },
            { phrase: '¿Dónde está el baño?', translation: '화장실이 어디예요?', pronunciation: '[돈데 에스따 엘 바뇨?]' },
            { phrase: '¡Buen provecho!', translation: '맛있게 드세요!', pronunciation: '[부엔 쁘로베쵸!]' },
            { phrase: 'Hasta luego', translation: '나중에 봐요', pronunciation: '[아스따 루에고]' }
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
