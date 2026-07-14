function getLetterGrade(score){
    if (score >=90){
        return 'A'
    }

    else if(score >=80){
        return 'B'
    }

    else if(score >=70){
        return 'C'
    }

    else if(score >=60){
        return 'D'
    }

    else{
        return "F"
    }
}

function hasPassed(score){
    if(score>=60){
        return true
    }
    else {
        return false
    }
}

function getFeedback(grade){
    switch(grade){
        case 'A' :
            return "Excellent work"
        case 'B' :
            return "Nice"
        case 'C' :
            return "You Passed"
        case 'D' :
            return "You Passed"

        default:
            return "You Need To Practice More!"    
    }

}

function createGradeReport(name,score){
    const grade = getLetterGrade(score)
    const passed = hasPassed(score)
    const feedback = getFeedback(grade)

    return {
        name,
        score,
        grade,
        passed,
        feedback,
    }
}

console.log(createGradeReport('Ava', 92));
console.log(createGradeReport('Noah', 48));
console.log(createGradeReport('Mina', 75));
console.log(createGradeReport('Sam', 60));
