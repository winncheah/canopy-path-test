// Cell maps transcribed from the 20 puzzle tables in "One-Line Puzzle - 20 Hard Levels.docx".
// # = green square, S = start square, E = source endpoint, X = grey block, . = empty space.
const LEVEL_MAPS=[
 ["....","#S..","####","...#","...#","...."],
 ["....",".##.","####","###S","....","...."],
 ["..S#.","#####","#.###","##E..",".....","....."],
 ["S...","####","####","#.##","##E.","...."],
 ["..S##",".####",".###.",".#...","##...","##E.."],
 ["X###X#X","##X####","##X####","##X####","##X####","X#####X","XXSX##X"],
 ["X####XX","######X","#XS####","######X","##XX##X","######X","X#####X"],
 ["X#X####","#######","####X##","X#S#X##","##XX###","#######","X####XX"],
 ["XX##X#X","X######","#######","####X##","####X##","######X","S#X##XX"],
 ["###XX##","####S##","####X##","######X","##X####","######X","X####XX"],
 ["XXXX##X","#######","#######","#X##X#X","X###X##","S###X##","#######","X##X###"],
 ["XS##XXX","X######","####X##","#######","#X#####","X##XX##","X######","XX####X"],
 ["X##X##X","XX#####","X##X###","######X","##X####","##X####","######X","#####SX"],
 ["X###X#X","X######","#####X#","#X#####","##S####","##X####","######X","X#####X"],
 ["X####XX","######X","###S###","#######","#X##X##","####X##","######X","###X#XX"],
 ["X##XX#X","####X##","##X##X#","X##X###","X######","######X","####X##","X######","XXS####"],
 ["XXX####","X######","##XXX##","####X##","X#####S","XX####X","#####X#","#######","X####XX"],
 ["X##X###","####X##","#X##X##","####X##","##X####","#X#####","#S#XX##","####X##","X#####X"],
 ["XX####X","X######","X#####X","##X####","#S##X##","####X##","#######","X######","X###XXX"],
 ["##XXX##","S##X###","X######","##X###X","###X###","X######","##X####","#######","####X#X"]
];
// Answer-key paths transcribed from the embedded numbered route images (Levels 6–20).
// Direction steps start at S; the final square becomes the visible E endpoint.
const ANSWER_PATHS={
 6:"ULULURULURURRDRDLDRDLDRDRUURULURULU",
 7:"DRURDRDLDRDLLULDLULURULUURURDRURDRDR",
 8:"RULURURDRURDDLDRDDLULDDLULDLULURUULURU",
 9:"RULURULURURURDRDLLDRDLDRDRURURULURULU",
 10:"RURDDLDLDLULURULULLDRDLDRDLDRDRURDRURUR",
 11:"DRDRUULURURDDDRDRRULURULUURULULDDLULDLULDD",
 12:"DRURDRRRDLDRDLDRDLDLULDLULURURRULULDLULDD",
 13:"LLLULDLUURULURURDRDRDLDRRURULULURRULULDLLUL",
 14:"URURULULLDRDLLDDRDLDRDRURDRRULULURURDDRUUUULU",
 15:"RDLDLDRDLDLLURULUURRULLURURDRURDRDRDLDRDLDLD",
 16:"RRURDRUULULULDLDRDLLULURURULULURURDRDRDRDRUUULU",
 17:"ULURUULDLULDLLDLDRDRURDRRDLDLULDLLDRDRURDRURRU",
 18:"RURRULULURULULDLDDRDLDDDRDRURDRRURULURULURULURULL",
 19:"ULDDDRURURDDLDLDRRURURDRUULURULULDLULLURURDRURDR",
 20:"URDRDLDLDRRDLDLDDRURDRURULURUULURURURDDLDDRDLDRDLD"
};
// The first two puzzle maps do not label an end square. These finish cells are
// selected from checked full-coverage routes so all playable levels show E.
const GENERATED_ENDS={1:[4,3],2:[3,2]};
window.LEVELS=LEVEL_MAPS.map((rows,i)=>({
 id:i+1,rows,solution:ANSWER_PATHS[i+1]||null,
 width:Math.max(...rows.map(row=>row.length)),height:rows.length
}));
// Retain empty cells explicitly so the renderer can preserve the source geometry.
window.LEVELS.forEach(level=>{
 level.cells=level.rows.flatMap((row,r)=>[...row].map((kind,c)=>({r,c,kind})));
 if(GENERATED_ENDS[level.id]) level.end=GENERATED_ENDS[level.id];
 else if(level.solution){
  const start=level.cells.find(c=>c.kind==='S');let r=start.r,c=start.c;
  for(const d of level.solution){if(d==='U')r--;else if(d==='D')r++;else if(d==='L')c--;else if(d==='R')c++}
  level.end=[r,c];
 }else{const end=level.cells.find(c=>c.kind==='E');level.end=[end.r,end.c]}
});
