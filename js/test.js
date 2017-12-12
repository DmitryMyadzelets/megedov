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
    "intro":"Выберите наиболее подходящее для вас утверждение.",
    "questions":{
        "1":{
            "J":"Ваша работоспособность равномерна, а если меняется, то только по известной вам причине. Вы не любите откладывать дела \"на потом\", предпочитая готовиться ко всему заранее, и не склонны менять свои планы или решения. Вас тяготит неопределенность, поэтому вы предпочитаете иметь четкий временной график работы.",
            "P":"Ваша работоспособность характеризуется подъемами и спадами активности, которые часто бывают у вас без определенных причин. Обычно вы не составляете планы наперед, предпочитая действовать по ситуации. Чаще всего принимаете решения и совершаете «прорыв» в последний момент. Вам трудно укладываться в сроки, подчиняться определенному графику или распорядку."
        },
        "2":{
            "T":"Вы не придаете большого значения эмоциональным разногласиям между людьми, пока они не задевают ваших принципов. В деловых отношениях профессионализм ставите выше других личных качеств и не идете на поводу у своих симпатий и антипатий. Предпочитаете не обсуждать темы личной жизни. Вас больше интересуют другие вопросы. Считаете, что важнее быть правым, чем приятным.",
            "F":"Вы хорошо разбираетесь в скрытых чувствах, побуждениях и взаимоотношениях людей. Охотно участвуете в обсуждении и решении их личных проблем. Долго помните и переживаете обиды. Склонны к компромиссам в делах ради сохранения хороших отношений. Ваша дипломатичность позволяет найти правильный подход к каждому."
        },
        "3":{
            "S":"Вы реалистичны, практичны и деятельны. Уверены в своих потребностях и умеете отстаивать свои интересы. Ваши высказывания конкретны, и вы не любите выслушивать длинные и абстрактные ответы. С недоверием относитесь к теориям, не проверенным практикой и опытом других. Всегда проверяете результаты сделанного.",
            "N":"Вы человек с развитым воображением, хорошо предвидите развитие событий, но можете проявлять рассеянность или медлить с внедрением своих планов. Часто уступаете свои позиции более активным и напористым партнерам. Вы любите экспериментировать, интерес к новому так велик, что может превалировать над пользой."
        },
        "4":{
            "I":"Вам обычно свойственны сдержанность и осторожность в высказываниях. Вы предпочитаете скрывать свое внутреннее состояние и стараетесь не выделяться среди других. Редко проявляете инициативу в знакомствах, предпочитаете привычный круг людей.",
            "E":"Вам присущи смелость, импульсивность, решительность. Вы не боитесь риска. Открыты и доверчивы. Вы охотно проявляете инициативу в новых делах и знакомствах. В работе часто отдаете сил больше, чем нужно, так что Вам трудно вовремя остановиться."
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
            "ISFP":"Сенсорно-этический интраверт (СЭИ)",
            "ESFJ":"Этико-сенсорный экстраверт (ЭСЭ)",
            "INTJ":"Логико-интуитивный интраверт (ЛИИ)",
            "ENFJ":"Этико-интуитивный экстраверт (ЭИЭ)",
            "ISTJ":"Логико-сенсорный интраверт (ЛСИ)",
            "ESTP":"Сенсорно-логический экстраверт (СЛЭ)",
            "INFP":"Интуитивно-этический интраверт (ИЭИ)",
            "ESFP":"Сенсорно-этический экстраверт (СЭЭ)",
            "INTP":"Интуитивно-логический интраверт (ИЛИ)",
            "ENTJ":"Логико-интуитивный экстраверт (ЛИЭ)",
            "ISFJ":"Этико-сенсорный интраверт (ЭСИ)",
            "ESTJ":"Логико-сенсорный экстраверт (ЛСЭ)",
            "INFJ":"Этико-интуитивный интраверт (ЭИИ)",
            "ENFP":"Интуитивно-этический экстраверт (ИЭЭ)",
            "ISTP":"Сенсорно-логический интраверт (СЛИ)"
        },
        "aushra":{
            "ENTP":"Дон Кихот",
            "ISFP":"Дюма",
            "ESFJ":"Гюго",
            "INTJ":"Робеспьер",
            "ENFJ":"Гамлет",
            "ISTJ":"Максим Горький",
            "ESTP":"Жуков",
            "INFP":"Есенин",
            "ESFP":"Наполеон",
            "INTP":"Бальзак",
            "ENTJ":"Джек Лондон",
            "ISFJ":"Драйзер",
            "ESTJ":"Штирлиц",
            "INFJ":"Достоевский",
            "ENFP":"Гексли",
            "ISTP":"Габен"
        },
        "gulenko":{
            "ENTP":"Искатель",
            "ISFP":"Посредник",
            "ESFJ":"Энтузиаст",
            "INTJ":"Аналитик",
            "ENFJ":"Наставник",
            "ISTJ":"Инспектор",
            "ESTP":"Маршал",
            "INFP":"Лирик",
            "ESFP":"Политик",
            "INTP":"Критик",
            "ENTJ":"Предприниматель",
            "ISFJ":"Хранитель",
            "ESTJ":"Администратор",
            "INFJ":"Гуманист",
            "ENFP":"Советчик",
            "ISTP":"Мастер"
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
  console.log(data)
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
  //   .text(function (d) {
  //     return test.lables[d.id]
  //   })
  q.append('section')
    .text(function (d) {
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

    res.append('h2').text('Ваш соционический тип личности')
    res.append('p').text(test.types.default[type])
    res.append('p').text('Название типа по Аушре Аугустинавичюте: ' + test.types.aushra[type])
    res.append('p').text('Название типа по Виктору Гуленко: ' + test.types.gulenko[type])
    res.append('p').text('Соответствующий тип по типологии MBTI: ' + test.types.mbti[type])

    res.append('h2').text('Ваш выбор')
    var enter = res.selectAll('.answer').data(answered).enter()
    var div = enter.append('div').classed('answer', true)
    div.append('h3')
      .text(function (d) {
        return test.lables[d.id]
      })
    div.append('p')
      .text(function (d) {
        return d.value
      })
  }
}

ready(function init () {
  d3.select('#intro').text(test.intro)
  update()
})

},{"./ready":1,"./test.json":2}]},{},[3]);
