// add solution here
function theBeatlesPlay(mus, inst) {
  var arr = [];
  for (var i=0; i < mus.length; i++) {
  arr[i] = mus[i] + "plays" + inst[i]   
  }
return arr
}

function johnLennonFacts(facts) {
  var i = 0;
  while (facts.length < i) {
    facts[i] = facts[i] + "!!!"
    i++;
  }
return facts
}