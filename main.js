function createMultiplyTable(start, end) {
  if (!isValid(start, end)) {
    return "null";
  }
  return printMutiplyTable(start,end);
}

function isValid(start, end) {
  return isValidNum(start, end) && isInInterval(start, end);
}
function isInInterval(start, end) {
  return start >= 1 && start <= 1000 && end >= 1 && end <= 1000;
}

function isValidNum(start, end) {
  return start <= end ? true : false;
}

function printMutiplyTable(start,end){
  let multiplyTable = "";
  for(let i = start;i<=end;i++){
    for(let j = start;j<=i;j++){
      multiplyTable +=j+"*"+i+"="+i*j+"\t";
    }
    multiplyTable = multiplyTable.substring(0,multiplyTable.length-1);
    multiplyTable +="\n"
  }
  return multiplyTable.substring(0,multiplyTable.length-1);

}

module.exports = {
  createMultiplyTable,
};
