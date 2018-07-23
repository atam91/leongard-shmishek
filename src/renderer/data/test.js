import { YES, NO, ACCENTUATED_PERSONALITIES, LIE } from './constants'

export const QUESTIONS = [
    "Ваше настроение, как правило, бывает ясным, неомраченным?",
    "Восприимчивы ли вы к оскорблениям, обидам?",
    "Легко ли вы плачете?",
    "Возникает ли у вас по окончании какой-либо работы сомнение в качестве ее исполнения и прибегаете ли вы к проверке – правильно ли все было сделано?",
    "Были ли вы в детстве таким же смелым, как ваши сверстники?",
    "Часто ли у вас бывают резкие смены настроения (только что парили в облаках от счастья, и вдруг становится очень грустно)?",
    "Бываете ли вы обычно во время веселья в центре внимания?",
    "Бывают ли у вас дни, когда вы без особых причин ворчливы и раздражительны и все считают, что вас лучше не трогать?",
    "Всегда ли вы отвечаете на письма сразу после прочтения?",
    "Вы человек серьезный?",
    "Способны ли вы на время так сильно увлечься чем-нибудь, что все остальное перестает быть значимым для вас?",
    "Предприимчивы ли вы?",
    "Быстро ли вы забываете обиды и оскорбления?",
    "Мягкосердечны ли вы?",
    "Когда вы бросаете письмо в почтовый ящик, проверяете ли вы, опустилось оно туда или нет?",
    "Требует ли ваше честолюбие того, чтобы в работе (учебе) вы были одним из первых?",
    "Боялись ли вы в детские годы грозы и собак?",
    "Смеетесь ли вы иногда над неприличными шутками?",
    "Есть ли среди ваших знакомых люди, которые считают вас педантичным?",
    "Очень ли зависит ваше настроение от внешних обстоятельств и событий?",
    "Любят ли вас ваши знакомые?",
    "Часто ли вы находитесь во власти сильных внутренних порывов и побуждений?",
    "Ваше настроение обычно несколько подавленно?",
    "Случалось вам рыдать, переживая тяжелое нервное потрясение?",
    "Трудно ли вам долго сидеть на одном месте?",
    "Отстаиваете ли вы свои интересы, когда по отношению к вам допускается несправедливость?",
    "Хвастаетесь ли вы иногда?",
    "Смогли ли вы в случае надобности зарезать домашнее животное или птицу?",
    "Раздражает ли вас, если штора или скатерть висит неровно, стараетесь ли вы это поправить?",
    "Боялись ли вы в детстве оставаться дома один?",
    "Часто ли портится ваше настроение без видимых причин?",
    "Случалось ли вам быть одним из лучших в вашей профессиональной или учебной деятельности?",
    "Легко ли вы впадаете в гнев?",
    "Способны ли вы быть шаловливо-веселым?",
    "Бывают ли у вас состояния, когда вы переполнены счастьем?",
    "Смогли бы вы играть роль конферансье в веселых представлениях?",
    "Лгали вы когда-нибудь в своей жизни?",
    "Говорите ли вы людям свое мнение о них прямо в глаза?",
    "Можете ли вы спокойно смотреть на кровь?",
    "Нравится ли вам работа, когда только вы один ответственны за нее?",
    "Заступаетесь ли вы за людей, по отношению к которым допущена несправедливость?",
    "Беспокоит ли вас необходимость спуститься в темный погреб, войти в пустую, темную комнату?",
    "Предпочитаете ли вы деятельность, которую нужно выполнять долго и точно, той, которая не требует большой кропотливости и делается быстро?",
    "Вы очень общительный человек?",
    "Охотно ли вы в школе декламировали стихи?",
    "Сбегали ли вы в детстве из дому?",
    "Обычно вы без колебаний уступаете место в автобусе престарелым пассажирам?",
    "Часто ли вам жизнь кажется тяжелой?",
    "Случалось ли вам так расстраиваться из-за какого-нибудь конфликта, что после этого вы чувствовали себя не в состоянии пойти на работу?",
    "Можно ли сказать, что при неудаче вы сохраняете чувство юмора?",
    "Стараетесь ли вы помириться, если кого-нибудь обидели? Предпринимаете ли вы первым шаги к примирению?",
    "Очень ли вы любите животных?",
    "Случалось ли вам, уходя из дома, возвратиться, чтобы проверить: не произошло ли чего-нибудь?",
    "Беспокоили ли вас когда-нибудь мысли, что с вами или с вашими родственниками должно что-либо случиться?",
    "Существенно ли зависит ваше настроение от погоды?",
    "Трудно ли вам выступать перед большой аудиторией?",
    "Можете ли вы, рассердясь на кого-либо, пустить в ход руки?",
    "Очень ли вы любите веселиться?",
    "Вы всегда говорите то, что думаете?",
    "Можете ли вы под влиянием разочарования впасть в отчаяние?",
    "Привлекает ли вас роль организатора в каком-нибудь деле?",
    "Упорствуете ли вы на пути к достижению цели, если встречается какое-либо препятствие?",
    "Чувствовали ли вы когда-нибудь удовлетворение при неудачах людей, которые вам неприятны?",
    "Может ли трагический фильм взволновать вас так, что у вас на глазах выступят слезы?",
    "Часто ли вам мешают уснуть мысли о проблемах прошлого или о будущем дне?",
    "Свойственно ли было вам в школьные годы подсказывать или давать списывать товарищам?",
    "Смогли бы вы пройти в темноте один через кладбище?",
    "Вы, не раздумывая, вернули бы лишние деньги в кассу, если бы обнаружили, что получили их слишком много?",
    "Большое ли значение вы придаете тому, что каждая вещь в вашем доме должна находиться на своем месте?",
    "Случается ли вам, что, ложась спать в отличном настроении, следующим утром вы встаете в плохом расположении духа, которое длится несколько часов?",
    "Легко ли вы приспосабливаетесь к новой ситуации?",
    "Часто ли у вас бывают головокружения?",
    "Часто ли вы смеетесь?",
    "Сможете ли вы относиться к человеку, о котором вы плохого мнения, так приветливо, что никто не догадывается о вашем действительном отношении к нему?",
    "Вы человек живой и подвижный?",
    "Сильно ли вы страдаете, когда совершается несправедливость?",
    "Вы страстный любитель природы?",
    "Уходя из дома или ложась спать, проверяете ли вы закрыты ли краны, погашен ли везде свет, заперты ли двери?",
    "Пугливы ли вы?",
    "Может ли принятие алкоголя изменить ваше настроение?",
    "Охотно ли вы принимаете участие в кружках художественной самодеятельности?",
    "Тянет ли вас иногда уехать далеко от дома?",
    "Смотрите ли вы на будущее немного пессимистично?",
    "Бывают ли у вас переходы от веселого настроения к тоскливому?",
    "Можете ли вы развлекать общество, быть душой компании?",
    "Долго ли вы храните чувство гнева, досады?",
    "Переживаете ли вы длительное время горести других людей?",
    "Всегда ли вы соглашаетесь с замечаниями в свой адрес, правильность которых сознаете?",
    "Могли ли вы в школьные годы переписать из-за помарок страницу в тетради?",
    "Вы по отношению к людям больше осторожны и недоверчивы, чем доверчивы?",
    "Часто ли у вас бывают страшные сновидения?",
    "Бывают ли у вас иногда такие навязчивые мысли, что если вы стоите на перроне, то можете против своей воли кинуться под приближающийся поезд или можете кинуться из окна верхнего этажа большого дома?",
    "Становитесь ли вы веселее в обществе веселых людей?",
    "Вы – человек, который не думает о сложных проблемах, а если и занимается ими, то недолго?",
    "Совершаете ли вы под влиянием алкоголя внезапные импульсивные поступки?",
    "В беседах вы больше молчите, чем говорите?",
    "Могли бы вы, изображая кого-нибудь, так увлечься, чтобы на время забыть, какой вы на самом деле?"
];

export const RESULT_MAP = {
    [ACCENTUATED_PERSONALITIES.HYPER]: {
        ratio: 3,
        [YES]: [ 1, 12, 25, 36, 50, 61, 75, 85 ]
    },
    [ACCENTUATED_PERSONALITIES.DYSTHYMIC]: {
        ratio: 3,
        [YES]: [ 10, 23, 48, 83, 96 ],
        [NO]: [ 34, 58, 73 ]
    },
    [ACCENTUATED_PERSONALITIES.CYCLOTIMIC]: {
        ratio: 3,
        [YES]: [ 6, 20, 31, 44, 55, 70, 80, 93 ]
    },
    [ACCENTUATED_PERSONALITIES.EMOTIONAL]: {
        ratio: 3,
        [YES]: [ 3, 14, 52, 64, 77, 87 ],
        [NO]: [ 28, 39 ]
    },
    [ACCENTUATED_PERSONALITIES.DEMONSTRATIVE]: {
        ratio: 2,
        [YES]: [ 7, 21, 24, 32, 45, 49, 71, 74, 81, 94, 97 ],
        [NO]: [ 56 ]
    },
    [ACCENTUATED_PERSONALITIES.STUCK]: {
        ratio: 2,
        [YES]: [ 2, 16, 26, 38, 41, 62, 76, 86, 90 ],
        [NO]: [ 13, 51 ]
    },
    [ACCENTUATED_PERSONALITIES.PEDANTIC]: {
        ratio: 2,
        [YES]: [ 4, 15, 19, 29, 43, 53, 65, 69, 78, 89, 92 ],
        [NO]: [ 40 ]
    },
    [ACCENTUATED_PERSONALITIES.DISTURBING]: {
        ratio: 3,
        [YES]: [ 17, 30, 42, 54, 79, 91 ],
        [NO]: [ 5, 67 ]
    },
    [ACCENTUATED_PERSONALITIES.EXCITABLE]: {
        ratio: 3,
        [YES]: [ 8, 22, 33, 46, 57, 72, 82, 95 ]
    },
    [ACCENTUATED_PERSONALITIES.EXALTED]: {
        ratio: 6,
        [YES]: [ 11, 35, 60, 84 ]
    },
    [LIE]: {
        ratio: 1,
        [YES]: [ 9, 47, 59, 68, 88 ],
        [NO]: [ 18, 27, 37, 63 ]
    }
};

export const LIE_INTERPRITATION = [
    { min: 0, max: 5, short: '+', text: 'Искренно' },
    { min: 6, max: 7, short: '~', text: 'Подвергается сомнению' },
    { min: 8, max: 10, short: '-', text: 'Не искренно' }
];