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