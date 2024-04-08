class Quiz{


constructor(questions, timeLimit, timeRemaining) {
    this.questions = questions;
    this.timeLimit = timeLimit;
    this.timeRemaining = timeRemaining;
    this.correctAnswers = 0;
    this.currentQuestionIndex = 0;
  }

    // 2. getQuestion()

  getQuestion() {
    return this.questions[this.currentQuestionIndex];
  }

    
    // 3. moveToNextQuestion()
  moveToNextQuestion() {
    if (this.currentQuestionIndex < this.questions.length) {
      this.currentQuestionIndex += 1;
    }
  }

   // 4. shuffleQuestions() 
  shuffleQuestions() {
    for (let i = this.questions.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      const temp = this.questions[i];
      this.questions[i] = this.questions[j];
      this.questions[j] = temp;
    }
  }

  checkAnswer(answer) {
    const currentQuestion = this.getQuestion();
    if (answer === currentQuestion.answer) {
        this.correctAnswers +=1;
        return true;
    }
    return false;
  }
  hasEnded() {
    if (this.currentQuestionIndex < this.questions.length) {
        return false;
    } else {
        return true
    }
  }




filterQuestionsByDifficulty(difficulty) {
  if (difficulty !== 1 && difficulty !== 2 && difficulty !== 3) {
    return this.questions;
  } else {
    this.questions = this.questions.filter((question) => question.difficulty === difficulty);
  }
}

averageDifficulty() {
  const sumDifficulties = this.questions.reduce((acc, elm) => acc + elm.difficulty, 0)
  const totalQuestions = this.questions.length
  const average = sumDifficulties / totalQuestions
  return average
}
}
