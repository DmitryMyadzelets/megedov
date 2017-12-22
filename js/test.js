(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){

module.exports = function (callback) {
    // Motivation:
    // https://gomakethings.com/a-native-javascript-equivalent-of-jquerys-ready-method/
    // Docs:
    // https://developer.mozilla.org/en/docs/Web/API/Document/readyState
  var loading, done

  done = function () {
    document.removeEventListener('readystatechange', loading)
    window.removeEventListener('load', done)
    callback()
  }

  loading = function () {
    if (document.readyState === 'loading') {
      return true
    }
    done()
  }

  if (loading()) {
    document.addEventListener('readystatechange', loading)
    window.addEventListener('load', done)
  }
}

},{}],2:[function(require,module,exports){
module.exports={
    "title":"Тест Мегедь-Овчарова на принадлежность к соционическому типу",
    "questions":{
        "1":{
            "J":"Вы предпочитаете планировать все дела наперед и не любите менять свои планы. Неопределенность целей и многообразие возможных решений вас сильно раздражает. Вы готовитесь ко всему заранее и укладываетесь в намеченные сроки. Вы постоянны в убеждениях и консервативны в некоторых привычках. Вам нравится дисциплина и четкий график работы. Вам больше свойственны: планомерность, подготовка к делу, стабильность, отлаженность, равномерность, своевременность принятия решений и их выполнения.",
            "P":"Вы часто действуете по ситуации, и не составляете чётких планов заранее. Вы спокойно воспринимаете неопределённость, и можете выбрать подходящий вариант решения проблемы в последний момент. Вы легко меняете свои взгляды и решения при появлении новых обстоятельств. Следование строгому графику и жёсткому распорядки тяготит вас. Вам больше свойственны: гибкость и спонтанность, импровизация, ориентация по ходу ситуации, смена настроений и решений, подъемы и спады работоспособности."
        },
        "2":{
            "T":"В своих решениях вы опираетесь прежде всего на факты и здравый смысл, не ставя их в зависимость от ваших чувств и отношений с окружающими. Умеете логично обосновывать свою точку зрения, руководствуясь аргументами и доказательствами, а не личными впечатлениями и переживаниями. Считаете, что важнее быть правым, чем приятным. Не делаете незаслуженных комплиментов. Не любите обсуждать темы личной жизни и отношений других людей. Вам больше свойственны: принципы и правила, точные формулировки, необходимость, трезвый анализ, объективность оценок, факты и аргументы.",
            "F":"Вас глубоко интересуют темы, связанные с чувствами и отношениями между людьми. Вы охотно участвуете в обсуждении и решении их личных проблем, стараетесь улучшить взаимопонимание, так как не выносите разногласий и обид в своем окружении. Вам нравится делать комплименты, создавать теплую и приятную атмосферу общения. Вам трудно, вопреки своим чувствам, объективно оценивать тех, кому вы симпатизируете и тех, кто вам неприятен. Личные отношения для вас приоритетнее деловых. Вам больше свойственны: симпатии и антипатии, эмоциональность, интонации, сопереживание, приоритет личных отношений над формальными."
        },
        "3":{
            "S":"Вы &mdash; реалист и практик, любите скорее действовать, чем размышлять, многие вещи предпочитаете делать своими руками, не доверяя этого другим. Охотно занимаетесь решиением бытовых и других практических вопросов. Ваши высказывания обычно лаконичны и конкретны, без намеков, подтекстов и иносказаний. С острожностью относитесь к не проверенным практикой идеям и подходам в работе, больше доверяя фактам и опыту. Внимательны к деталям, охотно уточняете сказанное и проверяете сделанное, как вами самими, так и другими. Вам больше свойственны: опытность и практичность, реалистичность, мотивация выгодными делами, упор на факты и проверенные методы.",
            "N":"Вы &mdash; человек с богатым воображением, легко представляете себе ход дальнейших событий. Любите творческую деятельность, поиск, эксперимент и риск больше, чем гарантированную выгоду. Легко догадываетесь о сути сказанного собеседником и часто не нуждаетесь в дальнейших уточнениях. Вам сложно долго заниматься практической и рутинной работой без элементов творчества и новизны. Не уверенны в своей способности быстро и эффективно решать сложные бытовые проблемы и можете проявлять непрактичность в делах. Вам больше свойственны: предчувствие, предвидение, воображение, мотивация интеллектуальными интересами, новыми идеями, творческими подходами."
        },
        "4":{
            "I":"Вы скромны и не любите демонстрировать свои заслуги. Вам не нравится быть в центре внимания или чем-то выделяться среди окружающих. Вы больше предпочитаете слушать собеседников, чем высказываться, и неохотно рассказываете окружающим о своих делах и планах. Избегаете брать на себя ответственность за других, а также руководство или инициативу в отношениях и мероприятиях. Вам ясен и понятен свой внутренний мир, но бывает трудно понять поступки и побуждения других. Вам больше свойственны: обращенность внутрь себя, погружённость в одно занятие, уход от лишнего, пассивность в начинаниях, ограниченность дел и контактов, экономия энергии.",
            "E":"Вам нравится восхищать и удивлять людей. Вы любите оказывать влияние на других, советовать и руководить их действиями или мероприятиями. Ваш внутренний мир достаточно сложный и противоречивый, поэтому вам легче понять и охарактеризовать знакомого человека, чем самого себя. Вы склонны поступать импульсивно и иногда опрометчиво, можете брать на себя дел или обязательств больше чем в состоянии выполнить. Легко проявляете инициативу в новых делах и при новых знакомствах. Вам больше свойственны: обращенность вовне, влияние на ситуацию и людей, широта охвата, разнообразие контак­тов (реальных или виртуальных), растрата энергии."
        }
    },
    "lables":{
        "J":"Рациональность",
        "P":"Иррациональность",
        "T":"Логика",
        "F":"Этика",
        "S":"Сенсорика",
        "N":"Интуиция",
        "E":"Экстраверсия",
        "I":"Интраверсия"
    },
    "indexes":{
        "J":3,
        "P":3,
        "T":2,
        "F":2,
        "S":1,
        "N":1,
        "E":0,
        "I":0
    },
    "types":{
        "default":{
            "ENTP":"Интуитивно-логический экстраверт (ИЛЭ)",
            "ISFP":"Сенсорно-этический интроверт (СЭИ)",
            "ESFJ":"Этико-сенсорный экстраверт (ЭСЭ)",
            "INTJ":"Логико-интуитивный интроверт (ЛИИ)",
            "ENFJ":"Этико-интуитивный экстраверт (ЭИЭ)",
            "ISTJ":"Логико-сенсорный интроверт (ЛСИ)",
            "ESTP":"Сенсорно-логический экстраверт (СЛЭ)",
            "INFP":"Интуитивно-этический интроверт (ИЭИ)",
            "ESFP":"Сенсорно-этический экстраверт (СЭЭ)",
            "INTP":"Интуитивно-логический интроверт (ИЛИ)",
            "ENTJ":"Логико-интуитивный экстраверт (ЛИЭ)",
            "ISFJ":"Этико-сенсорный интроверт (ЭСИ)",
            "ESTJ":"Логико-сенсорный экстраверт (ЛСЭ)",
            "INFJ":"Этико-интуитивный интроверт (ЭИИ)",
            "ENFP":"Интуитивно-этический экстраверт (ИЭЭ)",
            "ISTP":"Сенсорно-логический интроверт (СЛИ)"
        },
        "mbti":{
            "ENTP":"ENTP",
            "ISFP":"INTP",
            "ESFJ":"ESFJ",
            "INTJ":"INTP",
            "ENFJ":"ENFJ",
            "ISTJ":"ISTP",
            "ESTP":"ESTP",
            "INFP":"INFJ",
            "ESFP":"ESFP",
            "INTP":"INTJ",
            "ENTJ":"ENTJ",
            "ISFJ":"ISFP",
            "ESTJ":"ESTJ",
            "INFJ":"INFP",
            "ENFP":"ENFP",
            "ISTP":"ISTJ"
        }
    },
    "descriptions":{
        "ENTP":"<p>Хорошо видит перспективы дел в будущем, ему часто приходят в голову новые идеи и далеко идущие проекты. Предпочитает больше заниматься тем, что интересно, чем только тем, что выгодно. Любознателен, много читает, часто меняет свои увлечения. Интересуется необычными явлениями, при случае может удивить чем-нибудь новым или сенсационным. Не любит строгой дисциплины и регламентации, но свободный график может его излишне расслаблять. Наверстывая упущенное, периодически устраивает себе авралы. Нуждается в эмоциональных стимулах, даже встрясках, так как в рутине его настроение падает.</p><p>ногда бывает рассеян, особенно если увлечен своими мыслями. Уступчив в вопросах быта, но способен навязывать свои убеждения другим. Отзывчив к заботе и ласке, но давить на него не стоит — может отреагировать неадекватно.</p><p>Из трудных ситуаций выпутывается сам, но охотно помогает советами другим. Находчив и решителен в экстремальных ситуациях. Всегда видит много альтернатив в решений проблем более выгодным способом.</p><p>Старается быть полезным и интересным для других, поддерживает со всеми дружеские отношения. В общении непринужден и демократичен. Бывает терпим к человеческим слабостям, но неуступчив в защите своих убеждений. Плохо разбирается в отношениях, поэтому обычно осторожен в проявлении чувств. Если уверен в своих шансах, может проявлять напористость. Иногда ему изменяет чувство такта, но никто долго на него не сердится.</p>",
        "ISFP":"<p>Врожденный дипломат, часто занимается примиренческой деятельностью, бывает душой своей компании, но в незнакомой обстановке чувствует себя скованно. Старается развеселить людей шутками. Всегда дружелюбно и оптимистически настроен, но не может заставить себя общаться с неприятным ему человеком. Внутренне раним и скрытен, не любит говорить о своих неудачах.</p><p>Остерегается давать обещания, так как знает, что не всегда сможет их выполнить. Не навязывает свою волю другим, но умеет оказывать эмоциональное влияние на людей. Добивается своих целей при помощи просьб, уговоров и оказания другим различных услуг. Миролюбив и незлопамятен. Не любит критиковать, конкурировать, плохо отстаивает интересы дела, хотя может договориться на неофициальном уровне. Несколько неорганизован, неохотно выполняет кропотливую работу, особенно если она ему не по душе.</p><p>Гурман и гедонист: во всем умеет найти удовольствие. Получает наслаждение от гармонии звуков, красок, запахов и т.д. Любит красивые и оригинальные мелочи в быту, имеет хороший эстетический вкус. Внимателен, умеет доставлять приятное людям.</p>",
        "ESFJ":"<p>Постоянно активен, всегда на людях, быстро вступает в контакт. Жизнерадостный и оптимистичный человек, непринужденный и словоохотливый собеседник, создает приятную атмосферу общения и располагает людей к доверию. В чувствах идеалист и романтик, однако практичен и расторопен в повседневных делах. Увлекшись делом или загоревшись идеей, старается довести начатое до конца.</p><p>Хорошо разбирается в чувствах и настроениях людей, но недостаточно — в деловых качествах. Стремится к порядку, комфорту и достатку, часто суетлив, тратит много сил зря, распыляясь на второстепенные дела. Хорошее настроение создает себе сам и никогда не теряет оптимизма и работоспособности.</p><p>Уважает традиции, гостеприимен: любит застолье, веселье, старается каждому поднять настроение. Услужлив и заботлив, но часто возмущается нарушением этических норм поведения. Старается прививать близким хорошие манеры поведения. Умеет постоять за себя и за других.</p><p>Доброжелателен, хотя бывает эмоционален вспыльчив, излишне придирчив и настойчив в мелочах. Обидчив, но отходчив и незлопамятен. Эстет, со вкусом одевается, умеет вкусно готовить.</p>",
        "INTJ":"<p>Обладает хорошим аналитическим мышлением и развитой логикой. Умеет концентрироваться на главном, отставляя в сторону все второстепенное. Умело распределяет мероприятия во времени и выполняет все запланированное в срок. Не любит делать несколько дел сразу. Не выносит, когда его отвлекают несвоевременными или пустыми для него разговорами и визитами. Интересуется различными структурами и классификациями.</p><p>Недоверчив к новым идеям, но, поверив в них, становится их последовательным сторонником. Целеустремлен и настойчив. Всегда выполняет взятые обязательства. Не признает командных методов управления, очень независим. Ему трудно что-либо навязать, нелегко переубедить. Он не идет на поводу у своих настроений.</p><p>Не любит ходить по инстанциям, подписывать бумаги, добиваться чего-либо. Его раздражает волокита и пустая трата времени и сил.</p><p>Скромен и непритязателен в вещах и еде. Неохотно занимается бытовыми проблемами. Личные вопросы не любит обсуждать с кем бы то ни было. Сдержан в проявлении чувств, в общении соблюдает дистанцию. Лоялен и терпим к чужим недостаткам.</p>",
        "ENFJ":"<p>Самобытная и оригинальная личность. Дальновиден, с хорошей интуицией и воображением. Эмоционален, его симпатии, так же как и антипатии, могут быть одинаково сильно выраженными.</p><p>Обладает даром убеждения. Умеет увлечь и заинтересовать людей своей целью. Внимателен к людям, охотно участвует в обсуждении и решении их проблем.</p><p>Исполнителен и ответственен, хотя сильно зависит от настроения. Может браться за трудновыполнимые задачи, свои неудачи переживает тяжело. Болезненно переносит критику своих методов работы. Не склонен менять свои мнения или привычки.</p><p>Мнителен, самолюбив и раним. Долго помнит обиды, даже если этого не показывает. Склонен к сомнениям и внутренним колебаниям, может излишне драматизировать события, нуждается в подробной логической аргументации благоприятного исхода событий, а не только в обычной моральной поддержке.</p><p>Романтик в чувствах. Иногда они одерживают верх над разумом и заставляют совершать опрометчивые поступки. В общении с малознакомыми проявляет сдержанность и дистанцию. Производит впечатление человека со сложной натурой и непредсказуемым характером. С трудом идет на компромиссы. Следит за своими манерами, артистичен, умеет выбрать свой особый стиль в одежде.</p>",
        "ISTJ":"<p>Любит во всем точность и конкретность. В делах и оценках трезвый реалист, не любит фантазий. С недоверием относится к новым идеям, во всем требует фактов и доказательств. Исполнителен и усидчив, подробно прорабатывает детали любого дела, все доводит до конца. Ко всем делам готовится заранее, нетерпим к расхлябанности и недисциплинированности. Уважает законы и инструкции, хорошо работает с документацией. Экономен и рационален.</p><p>Имеет развитое чувство долга. Контролирует выполнение своих поручений, не приемлет возражений в том, что считает правильным. Очень волевой, выносливый и работоспособный человек. Дело ставит выше настроений; людей оценивает по результатам их деятельности, независимо от симпатий к ним. Слабо учитывает индивидуальные качества и способности людей. Придает большее значение материальным стимулам.</p><p>Недостаточно гибок в отношениях. Плохо разбирается в чувствах и мотивах поведения других. В душе недоверчив, замкнут и скрытен. Свои проблемы переживает молча, не обращаясь к другим за помощью и сочувствием. Обладает исключительным чувством ответственности за своих близких и коллег и становится для них опорой в трудных ситуациях.</p>",
        "ESTP":"<p>Обладает организаторскими и лидерскими качествами. Наличие большой труднодостижимой цели повышает его жизненный тонус: идет к ней, преодолевая любые препятствия. Скучает, если негде применить свои силы. Охотно идет на риск. Не любит когда окружающие ограничивают его свободный выбор в чем бы то ни было.</p><p>Реалист и практик с хорошим логическим мышлением. Но испытывает затруднения, когда нужно выразить чувства другому человеку. Разбирается в деловых способностях людей и умеет их использовать. Так же хорошо видит недостатки и может дать краткую и емкую характеристику человеку. Любит давать деловые советы и руководить действиями других, но сам приказного тона не выносит. Может в таких случаях даже поступать наоборот. Не терпит, когда ему что-то навязывают.</p><p>Внутренне сомневается в правильности своих решений, искренности взаимоотношений, негативных тенденциях ситуации, но не любит говорить об этом. Часто бывает угнетен и нуждается в позитивных эмоциях и оптимистически настроенном окружении. Уважает влиятельных, предприимчивых людей, но в личных отношениях предпочитает более мягких и покладистых.</p>",
        "INFP":"<p>По натуре &mdash; мечтатель и романтик. Неравнодушен ко всему новому, красивому и оригинальному. Любит производить впечатление деликатностью и изяществом в поступках или высказываниях. Тяготится рутиной: его влечет искусство, интересуют неординарные люди, необычные явления. Он охотно путешествует, любит приключения. Ему с трудом дается деловая активность; больше склонен размышлять, чем действовать. Часто колеблется в выборе решений, не любит обязательств. Порой бывает непредсказуем.</p><p>Привязывается к людям, старается улучшить настроение окружающим. Очень терпим к человеческим слабостям и недостаткам. Его доброжелательность и безмятежность позволяют ему успешно выступать в роли примирителя спорящих. Он умеет использовать свою гибкость и влияние на людей, которые не могут отказать ему в просьбе.</p><p>Очень обаятелен: улыбается, даже когда говорит неприятное. Обладает тонким чувством юмора. С ним трудно поссориться. У него бывают резкие перепады настроения &mdash; от смеха до слез. Делится своими проблемами с окружающими, нуждается в их сочувствии и поддержке. Тяжело переживает свои поражения, но, несмотря на это, никогда не теряет надежды на лучшее.</p>",
        "ESFP":"<p>Имеет лидерский характер, уверен в себе, предприимчив, активен. Реалист и прагматик, но бывает ласков и сентиментален с теми, кого любит. Часто ставит перед собой крупные цели и умеет их добиваться. Склонен к практической деятельности; проблемы предпочитает решать сразу, так как потом может к ним остыть. Очень подвижен, стремится к новым впечатлениям, может стать душой компании. Любит быть в центре внимания, вызывать уважение и восхищение. Умеет организовывать досуг и развлечения других.</p><p>Может брать на себя слишком много дел, что затрудняет их выполнение. Ему необходима положительная оценка его стараний, но иногда критика также стимулирует его к деятельности. От скуки падает его жизненный тонус, тогда он очень нуждается в заботе и сочувствии. Ему всегда хочется достичь больше того, что имеет.</p><p>Дипломатичен с людьми, особенно с незнакомыми и влиятельными, вникает в их проблемы, завязывает полезные контакты. Большое внимание уделяет эстетике и внешнему виду. Стремится к высокому социальному статусу и материальному благополучию. С трудом приспосабливается к волевым и независимым людям. Советы других выслушивает, но поступает по-своему.</p>",
        "INTP":"<p>По натуре философ, скептик и пессимист. Пассивен и несколько консервативен: не любит резких перемен, крайностей, а также, когда люди спешат и горячатся. С недоверием относится к энтузиастам, призывает их к рассудительности. Очень эрудирован, любит накапливать информацию по интересующим его вопросам. Любознателен, хороший советчик в деловых вопросах.</p><p>Добросовестен в работе, тщателен и аккуратен. Умеет уходить от бесполезных дел, распоряжаться материальными средствами и рассчитывать бюджет. Ценит уют и комфорт, хотя не всегда умеет их создавать. Если дело его увлекает, может довести его технологию до совершенства. Стремится к покою и внутреннему равновесию. Обладает ассоциативно-образным мышлением. Склонен к созерцательности, духовным и интеллектуальным занятиям, но способен при необходимости решать и любые бытовые вопросы.</p><p>Может проявлять медлительность и инертность в делах. Долго колеблется в принятии решений. Дальновиден, имеет хорошие стратегические способности, но испытывает затруднения при переходе к конкретным действиям. Сдержан в проявлении чувств, ждет инициативы от других. Склонен анализировать недостатки поступков и высказываний окружающих, хотя не всегда высказывает это вслух. Недоверчив и склонен подвергать все сомнению.</p>",
        "ENTJ":"<p>Очень динамичный и коммуникабельный человек. Жизнерадостен и оптимистичен. Интересуется теориями, которые можно использовать на практике. Не любит заниматься чем-то одним и идти проторенными дорогами. Ему интереснее то, что может быть, а не то, что есть. Поэтому он часто меняет свои увлечения, охотно вкладывает деньги в перспективные с его точки зрения проекты. По натуре доверчив. Его легко отговорить от задуманного, но потом он опять может к этому вернуться, чтобы использовать свой шансы полностью.</p><p>Его характеру свойственна нетерпеливость. Если дело его увлекает, он удивляет всех своей выносливостью в преодолении трудностей на пути к цели. Горячо отстаивает свои убеждения. В случае неудачи не отчаивается, проявляет изобретательность, может начать все с нуля. Не терпит лентяев, ищущих комфорт и удовольствия: сам обходится малым. Не приемлет хитрости и уловок, предпочитает договариваться на взаимовыгодных условиях.</p><p>Отзывчив к просьбам посторонних, но может мало внимания оказывать самым близким людям. Своей бестактностью может невольно обидеть собеседника, но поссориться с ним трудно: он все превращает в шутку. Часто бывает невнимателен к своей наружности и здоровью. Но если решает этим заняться, использует нетрадиционные методы и тогда добивается значительных результатов. Очень жизнестоек.</p>",
        "ISFJ":"<p>Предусмотрителен, практичен, трудолюбив и последователен во всем. Любит чистоту, порядок и требует этого от окружающих. Тяжело переносит нарушение этических норм, по натуре — критик и моралист. Хорошо чувствует уязвимые места своего противника и умеет защитить от несправедливых нападок себя и близких. С уважением относится к традициям, хранит их как моральные ценности. Несколько консервативен, но надежен в делах и отношениях.</p><p>Пунктуален и обязателен; умеет проявлять выдержку и настойчивость, когда нужно. Нетерпелив в душе: ему трудно ждать решения важного вопроса. Не любит откладывать дела в долгий ящик. Его тяготит неопределенность; он очень волнуется при любых переменах в жизни. Нервничает, когда боится не успеть к сроку. Колеблется в выборе цели, не всегда уверен в себе и в своих способностях. Болезненно переносит критику в свой адрес. Обидчив.</p><p>В новой компании насторожен и недоверчив. Самолюбив, не признает любви и дружбы без взаимности. Инициативы в знакомстве не проявляет, но на разрыв исчерпавших себя отношений может пойти первым. Ради близких людей или настоящего дела может вынести любые трудности.</p>",
        "ESTJ":"<p>Практичен и очень трудолюбив. Никогда не расслабляется, поддерживая стабильную работоспособность в любом настроении. Не терпит лени и расхлябанности, бесполезных дел и пустых фантазий. Осуждает нелогичные поступки, не прощает необязательности. Любит во всем ясность и четкость. Старается быть хорошо информированным, компетентным человеком. В разговоре опирается на факты. Пунктуален и добросовестен, с развитым чувством долга. Умеет руководить людьми.</p><p>Борец за качество. Застревая в деталях работы, может с трудом укладываться в срок, что очень болезненно переживает. Когда критикуют его методы работы, может вспылить. Очень эмоционален, тверд и неуступчив. В общении с посторонними, как правило, любезен и сдержан, стремится придерживаться правил хорошего тона. Но с близкими ему иногда не хватает дипломатичности: бывает излишне прямолинеен и строг. Ему трудно выражать одобрение, делать комплименты в адрес других. Старается скрывать свои эмоции и чувства, но это ему не всегда удается.</p><p>Аккуратен и подтянут, но не модник. Любит устоявшиеся добрые традиции и порядок. Гурман, периодически устраивает дружеские застолья, любит дорогие и красивые вещи. Свои привычки и убеждения не меняет. Его очень тяготит любая неопределенность и нестабильность положения.</p>",
        "INFJ":"<p>Главная черта &mdash; гуманизм и внимание к людям. Трудолюбив и пунктуален, тщателен в проработке деталей любого дела. Не любит спешки и суеты, поэтому ко всему готовится заранее. Умеет распределять мероприятия во времени и успевает выполнять их к назначенному сроку. Проявляет сочувствие и деятельную доброту к близким. Его самоотверженностью часто злоупотребляют, так как ему трудно отказать человеку в просьбе.</p><p>Немного неуверен в себе, скромен и недемонстративен. Застенчив и малоинициативен в обществе. К насилию и авторитарности относится отрицательно, противопоставляя им спокойное упрямство и выдержку. Избегая споров, может уступить, но своих убеждений не меняет. Не прощает несправедливости и измены, неуступчив в вопросах нравственности и морали. В остальных вопросах уступчив и терпим.</p><p>Предпочитает скрывать свои эмоции, ровен и сдержан в отношениях. Откровенен только с близкими людьми. Впечатлителен и раним, тяжело переносит ссоры, старается помирить враждующие стороны, но при этом быть объективным. Плохо переносит одиночество, но свое общество никому не навязывает.</p>",
        "ENFP":"<p>Проницателен, хорошо понимает мотивы поступков людей и может предсказать развитие их отношений в будущем. Тянется к способным и неординарным людям. Замечает достоинства других и охотно делает комплименты. Способен излишне идеализировать людей и отношения, из-за чего нередко разочаровывается впоследствии.</p><p>По-детски непосредственен, открыт и прямолинеен. Довольно невыдержан и нетерпелив, удивляет других своей оригинальностью. Простотой, искренностью и доброжелательностью располагает к доверию. Стремится ободрить каждого, вселить надежду. Очень находчив и изобретателен. Охотно советует, как найти выход из сложных положений.</p><p>Любознателен, интересуется всем новым и необычным, большой фантазер. Не завистлив, радуется успехам других. Обидчив и раним, но отходчив и незлопамятен. Устает от рутины, часто меняет свои увлечения. Противник шаблонных подходов и строгой дисциплины. В экстремальных ситуациях смел, решителен и очень работоспособен.</p><p>Может давать резкий отпор, отстаивая свои убеждения или интересы близких. Эмоционален, рассеян, разбросан и неусидчив. Не любит монотонную, кропотливую работу. Плохо планирует свои мероприятия, из-за чего часто не успевает к назначенному сроку. Ему трудно отличить главное от второстепенного, поэтому часто перегружает себя несущественными делами и лишними контактами.</p>",
        "ISTP":"<p>Его сильная сторона &mdash; умение организовывать физический комфорт и следить за качеством жизни, включающем вопросы экологии, питания, безопасности, одежды, и т.д. Обладает хорошей деловой логикой и умеет совершать полезные поступки. Любит заранее готовить все необходимое для работы. В экстремальных ситуациях действует быстро, осторожно, слаженно и эффективно.</p><p>Практичен, хозяйственен и деятелен. Любит все делать своими руками и редко обращается за помощью к другим. Быстро решает любые бытовые проблемы.</p><p>Реалист и практик. Недоверчив к новым идеям, но, проверив их на деле, умеет извлечь из них максимум пользы. Скромен и недемонстративен, не любит навязывать людям свое общество и выставлять свои заслуги напоказ, но в душе чувствителен к комплиментам.</p><p>Изобретателен в работе, которая ему нравится, легко находит способы быстрой рационализации трудового процесса. Но придумывать новые идеи и цели не умеет. Зато может все исправить, наладить и приспособить к делу.</p><p>Противник волевого давления, предпочитает материальные стимулы. Не приемлет уравниловки. Все должно вознаграждаться по заслугам. Переживает, если результаты его труда не оцениваются по достоинству, хотя не любит это высказывать вслух.</p><p>Обязателен и пунктуален, но очень зависит от настроения. В том, что считает правильным, упрям и бескомпромиссен. Впечатлителен и внутренне  раним, поэтому не всегда контролирует свои эмоции во время споров, о чем потом сожалеет.</p><p>Самолюбив и очень независим по натуре, не терпит, если ему что-то навязывают. Скрытен и молчалив, в общении держится на дистанции, не любит фамильярности, умеет поставить человека на место.</p><p>Верен в отношениях, чуток и внимателен к людям, но не любит демонстрировать свои чувства, особенно при посторонних. Склонен к иронии и скепсису, любит беззлобно подшучивать. Не сентиментален и не романтичен. Даже в любви признается полушутя и только если уверен во взаимности.</p><p>Ценит комфорт во всем и уют, любит смену впечатлений, охотно путешествует, занимается спортом, следит за своей внешностью и здоровьем.</p>"
    }
}
},{}],3:[function(require,module,exports){
/* global d3 */

var ready = require('./ready')
var test = require('./test.json')

// Make nested data array
var data = (function () {
  // Make array of questions
  var questions = Object.keys(test.questions)
    .map(function (key) {
      return {
        id: key,
        value: test.questions[key]
      }
    })
  // Make array of choices for each question
  questions.forEach(function (o, i) {
    o.value = Object.keys(o.value)
      .map(function (key) {
        return {
          id: key,
          index: i,
          value: o.value[key]
        }
      })
  })
  return questions
}())

var questionIndex = 0
var answers = []

function select (d) {
  answers[d.index] = {
    id: d.id,
    value: d.value
  }
  update()
}

function question (parent, data) {
  var update = parent.selectAll('.question')
    .data(data, function (d) {
      return d.id
    })

  update.exit().remove()

  var enter = update.enter().append('ul')
    .classed('question', true)
    .classed('shadow', true)

  return enter
}

function choice (parent) {
  var update = parent.selectAll('li').data(function (d) {
    return d.value
  })
  var enter = update.enter()
  var q = enter.append('li').on('click', select)
  // q.append('header')
  //   .html(function (d) {
  //     return test.lables[d.id]
  //   })
  q.append('section')
    .html(function (d) {
      return d.value
    })
}

function update () {
  // Get current state
  var answered = answers.filter(Boolean)
  if (answered.length < data.length) {
    var parent = d3.select('#questions')
    var sel = question(parent, [data[questionIndex]])
    questionIndex += 1
    choice(sel)
  } else {
    d3.select('#test').remove()
    var res = d3.select('#result')

    // Calculate type code
    var type = answered
      .sort(function (o) {
        return test.indexes[o.id]
      })
      .map(function (o) {
        return o.id
      })
      .join('')

    res.append('h2').html('Ваш соционический тип')
    res.append('p').html(test.types.default[type])
    // var s = ''
    // s += 'Псевдоним типа по Аушре Аугустинавичюте: ' + test.types.aushra[type] + '<br>'
    // s += 'Псевдоним типа по Виктору Гуленко: ' + test.types.gulenko[type] + '<br>'
    // s += 'Соответствующий тип по типологии MBTI: ' + test.types.mbti[type]
    // res.append('p').html(s)

    res.append('h2').html('Описание типа')
    res.append('section').html(test.descriptions[type])

    res.append('h2').html('Ваш выбор')
    var enter = res.selectAll('.answer').data(answered).enter()
    var div = enter.append('div').classed('answer', true)
    div.append('h3')
      .html(function (d) {
        return test.lables[d.id]
      })
    div.append('p')
      .html(function (d) {
        return d.value
      })
  }
}

ready(function init () {
  d3.select('#intro').html('Выберите наиболее подходящее для вас утверждение:')
  update()
})

},{"./ready":1,"./test.json":2}]},{},[3]);
