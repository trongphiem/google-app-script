function addDataToForm() {
  
  // Create a new form, then add a checkbox question, a multiple choice question,
// a page break, then a date question and a grid of questions.
var form = FormApp.create('New Form new').setIsQuiz(true);
var data = SpreadsheetApp.getActiveSheet().getDataRange().getValues();
for (i in data) {
   var item = form.addCheckboxItem();
  item.setTitle(data[i][1]);
  item.setPoints(1);
  item.setRequired(true);
  item.setChoices([
          item.createChoice('A.'+ data[i][2]),
          item.createChoice('B.'+data[i][3]),
          item.createChoice('C.'+data[i][4])
      ]);
 
}
//Exception: Questions cannot have duplicate choice values.
//What is your favorite pet?
//A. dog
//B. cat
//C. dog
//D. bird
//Then, "dog" is duplicated, so setChoices. I think that an error will occur if you make such an option list .
//Solution: add letter A,B,C.. is answer.

Logger.log('Published URL: ' + form.getPublishedUrl());
Logger.log('Editor URL: ' + form.getEditUrl());

}
