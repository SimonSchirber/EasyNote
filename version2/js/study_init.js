var study_goals = {}
var classes = JSON.parse(localStorage.getItem("classes"))

var init_study_rec = 50
for (var i = 0; i < classes.length; i++) {
    study_goals[classes[i]] = init_study_rec
    init_study_rec += 10
}
study_goals['General Notes'] = 30
localStorage.setItem("study-goals", JSON.stringify(study_goals))

var init_study_rec = 20
for (var i = 0; i < classes.length; i++) {
    study_goals[classes[i]] = init_study_rec
    init_study_rec += 4
}
study_goals['General Notes'] = 45
localStorage.setItem("time-studied", JSON.stringify(study_goals))

set_class_width()
var current_class = localStorage.getItem("current-class")
load_rec_study()
select_class(current_class)



