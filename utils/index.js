const _ = require('lodash');

// WARNING: beware object mutable

/**
 * @params {Object} store
 * @params {String} name
 * @params {Object} scores
 * @params {Number} scores{key}
 */
exports.updateStudentScore = (store, {
    name,
    scores
}) => {
    // code here
    for (let subject in scores) {
        if (!store.some(eachSubject => eachSubject.subject == subject)) {
            store.push({
                subject: subject,
                students: [{
                    name: name,
                    score: scores[subject]
                }]
            })
        } else {
            store
                .filter(eachSubject => subject == eachSubject.subject)
                .map(existSubject => {
                    let updateIndex = existSubject.students.findIndex(student => student.name == name)
                    if (updateIndex != -1) {
                        existSubject.students[updateIndex].score = scores[subject]
                        return 0;
                    }
                    existSubject.students.push({
                        name: name,
                        score: scores[subject]
                    })
                    return 0;
                })
        }
    }

    return store;

};

/**
 * @params {Object} store
 * @params {String} name
 * @params {String} subject
 */
exports.removeStudentScoreBySubject = (store, {
    name,
    subject
}) => {
    // code here
    let subjectIndex = store.findIndex(eachSubject => eachSubject.subject == subject)
    let studentIndex = store[subjectIndex].students.findIndex(eachStudent => eachStudent.name == name)
    store[subjectIndex].students.splice(studentIndex, 1)
    return store
};

/**
 * @params {Object} store
 */
exports.transformData = store => {
    // code here
    let newStore = [];
    for (let subjectIndex in store) {
        let currentSubject = store[subjectIndex]
        for (let studentIndex in currentSubject.students) {
            let currentStudent = currentSubject.students[studentIndex]
            let updateIndex = newStore.findIndex(student => student.name == currentStudent.name)
            if (updateIndex != -1) {
                newStore[updateIndex][currentSubject.subject] = currentStudent.score
            } else {
                newStore.push({
                    name: currentStudent.name,
                    [currentSubject.subject]: currentStudent.score
                })
            }
        }
    }
    return newStore
};