module.exports = function towelSort (matrix) {
 
  if (matrix == undefined) {
    return [];
}
matrix.reduce((ak, cur, i,)=>{
return ak.concat((!(i % 2) ? cur : cur.reverse()));
}, [])
return matrix.flat(Infinity)
  }
