/* CYBER ENGLISH 2077 v0.6 — cyberpunk arcade night art, Phaser 3.90 */
(function(){
"use strict";
function rng(seed){return ()=>{seed=(Math.imul(seed,1664525)+1013904223)>>>0;return seed/4294967296}}
function pixelSurface(w,h,draw){const c=document.createElement('canvas');c.width=w;c.height=h;const x=c.getContext('2d');x.imageSmoothingEnabled=false;draw(x);return c}
function rect(c,x,y,w,h,col){c.fillStyle=col;c.fillRect(Math.floor(x),Math.floor(y),Math.floor(w),Math.floor(h))}
function line(c,x,y,x2,y2,col){c.strokeStyle=col;c.lineWidth=1;c.beginPath();c.moveTo(x+.5,y+.5);c.lineTo(x2+.5,y2+.5);c.stroke()}
function label(c,t,x,y,col,sz=8){c.font='bold '+sz+'px monospace';c.textBaseline='top';c.fillStyle=col;c.fillText(t,x,y)}
const palette=['#46e8d9','#f765aa','#8c9aff','#efb96b','#65c6ee','#d27eff','#fe7288','#5be5b0'];
function car(c,x,y,col,flip=false){rect(c,x+2,y+5,38,13,'#080e19');rect(c,x,y+3,40,12,'#273b50');rect(c,x+3,y,32,14,col);rect(c,x+6,y+2,25,10,'#182c40');rect(c,x+11,y+2,15,10,'#385970');rect(c,x+15,y+3,8,7,'#10283a');rect(c,x+3,y+1,3,11,'#8294a5');rect(c,x+34,y+2,4,4,flip?'#ed526d':'#ecf5cc');rect(c,x+34,y+10,4,3,flip?'#ed526d':'#ecf5cc');rect(c,x,y+3,2,4,flip?'#ecf5cc':'#ed526d');rect(c,x,y+10,2,3,flip?'#ecf5cc':'#ed526d');rect(c,x+8,y+13,5,3,'#060b12');rect(c,x+28,y+13,5,3,'#060b12')}

/* Original anime pixel art. All artwork is generated locally, no licensed franchise assets. */
const cast=[
 {name:'Kai',hair:'#293550',hi:'#698bc8',skin:'#ffd2a1',shade:'#cb7b60',coat:'#f49b26',light:'#ffdb6b',dark:'#a74e39',pants:'#254c8a',style:0},
 {name:'Ivo',hair:'#a13b43',hi:'#ed9864',skin:'#f9c599',shade:'#b86e52',coat:'#327bc7',light:'#a1d9ff',dark:'#243e80',pants:'#313b68',style:1},
 {name:'Mara',hair:'#663f9b',hi:'#c6a0ed',skin:'#ffdab0',shade:'#d28c72',coat:'#1fae9c',light:'#9af4ce',dark:'#176d77',pants:'#34416b',style:2},
 {name:'Lin',hair:'#215b78',hi:'#50c5d6',skin:'#e9b888',shade:'#a86a54',coat:'#e35a79',light:'#ffb2b4',dark:'#a52d5c',pants:'#382e64',style:3},
 {name:'Unit-9',hair:'#a9bfce',hi:'#e5f7ee',skin:'#bad6df',shade:'#64889c',coat:'#805acf',light:'#c9a4ff',dark:'#463b83',pants:'#465b80',style:4},
 {name:'Kira',hair:'#c06b25',hi:'#ffd269',skin:'#b77b53',shade:'#81503e',coat:'#429f56',light:'#b2e477',dark:'#236d4b',pants:'#304873',style:5}
];
const ink='#101725';
// Rasterize polygons with flat fills and hard pixel edges.
function poly(c,p,col){let min=Math.ceil(Math.min(...p.map(a=>a[1]))),max=Math.floor(Math.max(...p.map(a=>a[1])));c.fillStyle=col;for(let y=min;y<max;y++){let hits=[];for(let i=0;i<p.length;i++){let [x1,y1]=p[i],[x2,y2]=p[(i+1)%p.length];if((y1<=y+.5&&y2>y+.5)||(y2<=y+.5&&y1>y+.5))hits.push(x1+(y+.5-y1)*(x2-x1)/(y2-y1))}hits.sort((a,b)=>a-b);for(let i=0;i<hits.length;i+=2){let a=Math.ceil(hits[i]-.5),b=Math.ceil(hits[i+1]-.5);if(b>a)c.fillRect(a,y,b-a,1)}}}
function person(c,v,d=0,f=0){let back=d===1,side=d>=2,walk=[0,2,3,2,0,-2,-3,-2][f];c.save();c.translate(0,[0,0,1,1,0,0,1,1][f]);if(d===3){c.translate(48,0);c.scale(-1,1)}const P=(p,col)=>poly(c,p,col),R=(x,y,w,h,col)=>rect(c,x,y,w,h,col);
P([[12,44],[24,43],[35,44],[34,53],[37-walk,59],[36-walk,62],[25-walk,62],[23,53],[21,61],[10+walk,62],[8+walk,59],[13,52]],ink);
P([[14,45],[23,46],[22,52],[19+walk,58],[12+walk,57],[15,51]],v.pants);P([[25,45],[33,45],[32,52],[34-walk,57],[27-walk,58],[25,52]],v.pants);R(11+walk,58,9,2,'#dde6f2');R(27-walk,58,9,2,'#dde6f2');R(13+walk,55,5,2,'#6d8cb4');R(28-walk,55,5,2,'#6d8cb4');
P([[16,27],[32,27],[40,32],[44,43],[39,48],[34,45],[33,50],[15,50],[14,45],[8,48],[4,43],[8,32]],ink);
P([[16,30],[23,31],[31,30],[35,34],[32,45],[15,45],[12,35]],v.coat);P([[15,33],[20,35],[17,43],[20,45],[15,45],[12,36]],v.dark);P([[25,31],[32,32],[34,35],[30,40],[27,37]],v.light);
P([[10,33],[14,35],[12,41],[8,42],[7,38]],v.coat);P([[35,33],[40,36],[42,41],[38,43],[35,39]],v.dark);
P([[7,42],[12,41],[14,44],[11,46],[8,45]],v.skin);P([[37,42],[42,41],[43,44],[39,46],[36,44]],v.skin);R(16,45,17,3,'#33415d');R(22,45,4,3,'#f8e095');
if(back){P([[16,32],[30,32],[31,42],[24,44],[17,41]],v.dark);R(21,34,6,2,v.light);R(23,36,2,5,v.light)}else{P([[20,30],[24,34],[28,30],[26,43],[21,43]],'#fff4dc');R(23,35,2,8,v.dark);R(30,37,3,3,'#f8f2d9')}
// Individual arcade wardrobe: cropped jackets, reinforced boots, tech gloves, insignia and neon trim.
const neon=['#ffcb59','#62caff','#67ffe0','#ff78ae','#9ceaff','#b5fc6e'][v.style];
R(12+walk,53,5,2,neon);R(30-walk,53,4,2,neon);R(9+walk,60,10,1,'#0c1123');R(26-walk,60,10,1,'#0c1123');
P([[8,31],[15,28],[18,33],[14,38],[7,36]],ink);P([[9,31],[14,30],[16,33],[13,35],[9,34]],v.light);
P([[32,29],[39,31],[42,36],[35,38],[32,35]],ink);P([[35,31],[39,33],[40,35],[35,36]],v.dark);
R(8,41,5,4,'#1c2945');R(37,41,5,4,'#1c2945');R(9,42,3,1,neon);R(38,42,3,1,neon);
if(!back){P([[15,33],[20,30],[23,35],[20,40],[16,37]],v.dark);P([[26,35],[31,30],[34,33],[31,38]],v.dark);R(18,34,2,5,neon);R(28,36,3,1,neon);R(29,40,4,4,'#13253c');R(30,41,2,2,neon)}
if(v.style===0){P([[13,31],[8,37],[7,42],[13,38]],'#ffbb46');R(21,46,6,2,'#e9b64e')}
if(v.style===1){R(15,35,3,8,'#1b2b4a');R(16,35,1,6,'#76eaff');R(30,45,5,2,'#9bcaef')}
if(v.style===2){P([[15,37],[12,47],[16,51],[20,45]],v.dark);R(16,44,2,4,neon);R(30,34,3,2,neon)}
if(v.style===3){R(20,40,8,2,'#f3d4ef');R(22,42,5,3,'#222b4c')}
if(v.style===4){R(15,33,5,7,'#536582');R(17,34,2,4,neon);R(26,33,6,7,'#54698d');R(28,35,2,3,neon);R(21,40,6,4,'#172a43')}
if(v.style===5){P([[17,31],[24,35],[31,31],[28,38],[20,38]],'#d6ee87');R(18,46,4,2,neon)}
let hair=[[[6,16],[9,9],[7,4],[16,8],[20,1],[25,7],[34,2],[33,9],[41,7],[39,15],[44,19],[38,23]],[[7,17],[10,8],[17,4],[28,2],[38,8],[43,17],[37,25]],[[7,16],[10,7],[19,3],[30,4],[39,10],[40,25],[44,33],[34,35]],[[7,16],[8,8],[16,3],[29,2],[39,9],[42,21],[35,30]],[[8,16],[10,6],[17,2],[31,2],[39,6],[40,25],[34,32]],[[7,15],[10,8],[15,2],[22,8],[30,2],[33,9],[41,5],[38,16],[44,20],[37,26]]][v.style];
P(hair.concat([[36,29],[30,33],[19,33],[11,29],[8,24]]),ink);
P(hair.map(([x,y])=>[24+(x-24)*.87,18+(y-18)*.86]).concat([[34,25],[14,25]]),v.hair);
P([[13,12],[18,10],[21,6],[22,13],[26,10],[32,7],[30,13],[35,12],[31,17],[22,15],[15,19]],v.hi);
if(back){P([[11,19],[18,18],[24,21],[32,17],[37,19],[35,27],[30,30],[18,30],[13,26]],v.hair);P([[18,21],[24,23],[30,20],[28,25],[20,25]],v.hi);R(20,29,8,2,v.shade)}
else{P([[12,19],[17,20],[22,17],[28,19],[33,16],[37,20],[36,26],[31,30],[24,32],[17,30],[12,26]],v.shade);P([[14,20],[18,21],[23,19],[28,21],[33,18],[35,20],[34,26],[29,29],[24,30],[18,28],[14,25]],v.skin);
if(side){R(14,22,10,4,ink);R(15,23,7,2,'#fff6dd');R(16,23,3,2,'#347dac');R(19,28,5,1,ink)}else{P([[14,22],[22,22],[21,26],[15,25]],ink);P([[26,22],[34,21],[33,25],[27,26]],ink);R(15,23,5,2,'#fffdf2');R(28,23,5,2,'#fffdf2');R(19,23,2,2,'#347dac');R(28,23,2,2,'#347dac');R(23,26,2,2,v.shade);R(21,28,6,1,ink)}
R(12,24,1,4,neon);R(35,24,1,3,neon);R(20,14,2,1,v.hi);if(v.style===4){R(13,22,22,4,'#206394');R(15,23,18,2,'#80e8ff')}if(v.style===1){R(12,18,24,2,'#eadab9')}if(v.style===2){R(34,26,3,4,'#ffe178')}if(v.style===3){R(12,21,24,1,ink);R(23,22,2,1,ink)}}
c.restore()}
function sheetFor(v){return pixelSurface(384,256,c=>{for(let d=0;d<4;d++)for(let f=0;f<8;f++){c.save();c.translate(f*48,d*64);person(c,v,d,f);c.restore()}})}
function portraitFor(v){return pixelSurface(112,112,c=>{rect(c,0,0,112,112,'#101932');for(let y=0;y<112;y+=8)rect(c,0,y,112,2,'#263b5f');poly(c,[[0,88],[74,0],[112,0],[112,19],[27,112],[0,112]],v.dark);poly(c,[[0,68],[65,0],[82,0],[0,83]],v.light);c.save();c.translate(-16,-5);c.scale(3,3);person(c,v);c.restore();rect(c,0,104,112,8,ink)})}
window.CyberPortrait=function(name){return portraitFor(cast.find(x=>x.name.toLowerCase()===String(name).toLowerCase())||cast[0]).toDataURL('image/png')};
function tree(c,x,y){rect(c,x-4,y+1,9,7,'#4f4b64');poly(c,[[x-15,y-4],[x-17,y-13],[x-11,y-22],[x-3,y-25],[x+10,y-22],[x+16,y-14],[x+13,y-4],[x+5,y+1],[x-8,y]],'#173e4c');poly(c,[[x-14,y-9],[x-12,y-19],[x-4,y-23],[x+8,y-20],[x+13,y-13],[x+5,y-7],[x-5,y-6]],'#20596a');poly(c,[[x-9,y-19],[x-4,y-22],[x+5,y-19],[x+2,y-14],[x-7,y-14]],'#3f8d93');rect(c,x-9,y-11,4,2,'#35808b')}
function animeCity(blocks){return pixelSurface(960,640,c=>{
const r=rng(411),cols=['#344b68','#4a365c','#244e67','#41365c','#30485e','#563453','#334a70','#4e385b'],sh=['#202d49','#29233c','#182f49','#2b2543','#1d3249','#33223c','#243453','#34243e'],names=['NIGHT SHIFT','ID BUREAU','NEXUS LAB','METRO 07','APARTMENTS','DATA MART','SECURITY','RESISTANCE'];
rect(c,0,0,960,640,'#17283b');for(let y=0;y<640;y+=16)for(let x=0;x<960;x+=16){rect(c,x,y,15,15,r()<.25?'#20354a':'#1c2b40');if(r()<.18)rect(c,x+3,y+3,4,2,'#34435d')}
rect(c,0,199,960,51,'#27364d');rect(c,0,380,960,44,'#2d3b52');rect(c,355,0,45,640,'#27364d');rect(c,558,0,42,640,'#27364d');rect(c,0,250,960,130,'#101c30');rect(c,400,0,158,640,'#101c30');
for(let y=0;y<640;y+=8)for(let x=0;x<960;x+=12){if((y>=252&&y<378)||(x>=402&&x<556)){if(r()<.22)rect(c,x,y,7,1,'#243953')}else if((y>=199&&y<250)||(y>=380&&y<424)||(x>=355&&x<400)||(x>=558&&x<600)){if(r()<.35)rect(c,x,y,11,1,'#344962')}}
for(let yy of [247,382]){rect(c,0,yy,960,3,'#506780');rect(c,0,yy-3,960,2,'#7798ac')}for(let xx of [397,557]){rect(c,xx,0,3,640,'#506780');rect(c,xx+3,0,2,640,'#7798ac')}
rect(c,400,250,158,130,'#101c30');for(let x=0;x<960;x+=40)if(x<360||x>575)rect(c,x+4,312,20,3,'#8a795c');for(let y=0;y<640;y+=40)if(y<230||y>386)rect(c,475,y+5,3,20,'#8a795c');
for(let x=405;x<550;x+=13){rect(c,x,241,7,20,'#637d97');rect(c,x,370,7,20,'#637d97')}for(let y=264;y<366;y+=13){rect(c,370,y,24,7,'#637d97');rect(c,562,y,24,7,'#637d97')}
blocks.slice(0,8).forEach(([x,y,w,h],j)=>{let color=cols[j],shadow=sh[j],f=y+h-48;
rect(c,x+7,y+7,w+2,h+4,'#090f20');rect(c,x,y,w,h,ink);rect(c,x+3,y+3,w-6,h-6,color);
poly(c,[[x+3,y+3],[x+w-3,y+3],[x+w-12,f-7],[x+12,f-7]],shadow);poly(c,[[x+4,y+4],[x+w-4,y+4],[x+w-10,y+20],[x+10,y+20]],color);
for(let yy=y+22;yy<f-9;yy+=10){rect(c,x+12,yy,w-24,2,color);for(let xx=x+15+(yy%20?6:0);xx<x+w-15;xx+=20)rect(c,xx,yy+2,1,7,shadow)}
rect(c,x+5,f-7,w-10,6,'#52637b');rect(c,x+6,f,w-12,44,color);rect(c,x+6,f+2,w-12,14,ink);rect(c,x+8,f+4,w-16,10,j%2?'#101a32':'#141c37');rect(c,x+8,f+3,w-16,1,palette[j]);rect(c,x+8,f+14,w-16,1,palette[j]);label(c,names[j],x+13,f+5,palette[j],8);for(let z=0;z<5;z++){rect(c,x+7+z*2,y+7+z*3,2,12,palette[j]);}for(let z=0;z<5;z++){for(let q=0;q<7;q++){let rx=x+12+((q*17+z*11)%(w-24));rect(c,rx,y+h+5+z*4,4+q%5,1,z<2?palette[j]:'#263650')}}
for(let xx=x+10;xx<x+w-15;xx+=22){rect(c,xx,f+20,17,19,ink);rect(c,xx+2,f+22,13,14,'#233c61');rect(c,xx+3,f+23,4,12,'#58e2ed');rect(c,xx+8,f+22,2,14,'#547d9b');rect(c,xx,f+38,17,2,shadow)}
let dx=x+(w/2|0)-13;rect(c,dx,f+20,26,27,ink);rect(c,dx+2,f+22,22,23,'#1f3554');rect(c,dx+4,f+24,8,16,'#386e91');rect(c,dx+14,f+24,8,16,'#294d76');rect(c,dx+11,f+35,3,2,'#101a32');
if(j===0||j===5||j===7){for(let k=0;k<(w-12)/9-1;k++)rect(c,x+7+k*9,f+15,9,6,k%2?'#52627c':shadow)}
for(let k=0;k<2;k++){let ax=x+18+k*(w-57);rect(c,ax,y+30,22,24,ink);rect(c,ax+2,y+32,18,20,'#43536e');for(let l=0;l<4;l++)rect(c,ax+4,y+34+l*4,14,2,'#25364c');rect(c,ax+19,y+33,2,16,'#8897ad')}
rect(c,x+w-23,y+9,14,15,ink);rect(c,x+w-21,y+11,10,11,'#32435e');rect(c,x+w-17,y+2,2,15,'#566681');rect(c,x+w-23,y+2,14,2,'#566681');tree(c,x+8,y+h+36);tree(c,x+w-8,y+h+36)});
blocks.slice(8).forEach(([x,y,w,h],j)=>{rect(c,x,y,w,h,ink);rect(c,x+2,y+2,w-4,h-4,'#2e4657');for(let z=x+5;z<x+w-4;z+=7){rect(c,z,y+3,4,6,'#266b74');rect(c,z+1,y+4,2,2,j%2?'#f2ca75':'#fa6bae')}rect(c,x+2,y+h-4,w-4,2,'#344e68')});
for(let x of [190,375,580,765]){tree(c,x,234);tree(c,x,407)}for(let x of [185,370,581,770]){rect(c,x,215,3,15,'#637ba1');rect(c,x-3,212,9,4,'#87ffed');rect(c,x-4,229,11,2,'#26354e')}
for(let j=0;j<4;j++)car(c,[58,220,675,815][j],[281,351,281,351][j],cols[j],j%2===0);
})}
function animeRoom(lab,blocks){return pixelSurface(640,360,c=>{
rect(c,0,0,640,360,'#8498bb');rect(c,16,39,608,306,lab?'#253b54':'#3d3049');
for(let y=40;y<344;y+=16)for(let x=18;x<620;x+=24){rect(c,x,y,23,15,(x/24+y/16)%2>1?(lab?'#21324b':'#362c45'):(lab?'#2c415b':'#43344d'));rect(c,x+1,y+1,21,1,'#515169')}
rect(c,10,10,620,28,ink);rect(c,14,14,612,20,lab?'#225f7a':'#603967');rect(c,15,15,610,4,'#65c5d6');label(c,lab?'NEXUS / TRAINING LAB':'SAFEHOUSE / UNIT 07',250,22,'#87ffed',9);rect(c,18,37,604,2,lab?'#43e6de':'#f277da');rect(c,10,38,8,303,'#64799e');rect(c,622,38,8,303,'#64799e');
blocks.forEach(([x,y,w,h],j)=>{rect(c,x+4,y+4,w,h,'#111a2c');rect(c,x,y,w,h,ink);rect(c,x+2,y+2,w-4,h-4,lab?'#344d73':'#705371');if(lab||j<4){for(let q=x+6;q<x+w-18;q+=24){rect(c,q,y+5,18,14,ink);rect(c,q+2,y+7,14,10,'#2d7e95');rect(c,q+4,y+9,10,2,'#77fff1');rect(c,q+4,y+12,6,2,'#e6baff');rect(c,q+8,y+19,2,4,ink);rect(c,q+3,y+24,12,4,'#52617b')}for(let yy=y+32;yy<y+h-4;yy+=13){rect(c,x+6,yy,w-12,7,'#475e8b');rect(c,x+9,yy+2,3,2,'#bcf0ad')}}else if(j===4){rect(c,x+5,y+5,w-10,h-10,'#78506f');rect(c,x+8,y+8,w-16,17,'#a8a4c5');rect(c,x+7,y+27,w-14,h-35,'#4f3d64');for(let yy=y+28;yy<y+h-8;yy+=9)rect(c,x+10,yy,w-20,2,'#78506f')}else{for(let yy=y+7;yy<y+h-5;yy+=16){rect(c,x+5,yy,w-10,12,'#73526e');rect(c,x+w/2-5,yy+5,10,2,ink)}}});
rect(c,300,335,40,4,'#497cb7');label(c,'EXIT',309,322,ink,9);tree(c,35,325);tree(c,606,325);
})}

window.CyberWorld={start({container,model,route,buildings,roomBlocks,doors,npcs,keys,blocked,active,missionId,interact}){
if(!window.Phaser)throw Error('Phaser 3 no se ha podido cargar. Comprueba tu conexión y recarga.');
class World extends Phaser.Scene{
constructor(){super('CyberWorld');this.zone='';this.entities=[];this.fxSeed=rng(333)}
create(){
const tex=(name,canvas)=>{const t=this.textures.addCanvas(name,canvas);t.setFilter(Phaser.Textures.FilterMode.NEAREST);return t};
tex('ce-city',animeCity(buildings));tex('ce-apartment',animeRoom(false,roomBlocks));tex('ce-lab',animeRoom(true,roomBlocks));cast.forEach((v,j)=>{const sheet=tex('ce-anime-'+j,sheetFor(v));for(let d=0;d<4;d++)for(let f=0;f<8;f++)sheet.add(d*8+f,0,f*48,d*64,48,64)});
for(let d=0;d<4;d++)this.anims.create({key:'ce-walk-'+d,frames:[0,1,2,3,4,5,6,7].map(f=>({key:'ce-anime-0',frame:d*8+f})),frameRate:12,repeat:-1});
this.background=this.add.image(0,0,'ce-city').setOrigin(0).setDepth(-10);
this.lights=this.add.graphics().setDepth(-2);
this.marker=this.add.graphics().setDepth(10000);this.tag=this.add.text(0,0,'',{fontFamily:'monospace',fontSize:'11px',color:'#ffe5a0',backgroundColor:'#263c75',padding:{x:4,y:2}}).setOrigin(.5,1).setDepth(10001);
this.doorTags=doors.map(d=>this.add.text(d.x,d.y-22,d.label,{fontFamily:'monospace',fontSize:'9px',color:'#a4eff1',backgroundColor:'#102332',padding:{x:3,y:2}}).setOrigin(.5,1).setDepth(10002));
this.exitTag=this.add.text(320,312,'EXIT / E',{fontFamily:'monospace',fontSize:'10px',color:'#a4eff1'}).setOrigin(.5).setDepth(10002);
this.player=this.add.sprite(0,0,'ce-anime-0',0).setOrigin(.5,.95).setScale(.9);
this.people=npcs.map((n,i)=>this.add.sprite(n.x,n.y,'ce-anime-'+(i+1),0).setOrigin(.5,.95).setScale(.9).setDepth(n.y));this.names=npcs.map(n=>this.add.text(n.x,n.y+4,n.name,{fontFamily:'monospace',fontSize:'10px',fontStyle:'bold',color:'#baf9ff',backgroundColor:'#12213b',padding:{x:4,y:2}}).setOrigin(.5,0).setDepth(10003));
this.rain=this.add.graphics().setScrollFactor(0).setDepth(20000);
this.rains=Array.from({length:105},()=>({x:this.fxSeed()*640,y:this.fxSeed()*360,v:85+this.fxSeed()*110}));
this.hud=this.add.text(12,10,'',{fontFamily:'monospace',fontSize:'10px',color:'#b8f5ed',backgroundColor:'#0b1424',padding:{x:7,y:5},lineSpacing:4}).setScrollFactor(0).setDepth(20001);
this.arrow=this.add.text(628,344,'',{fontFamily:'monospace',fontSize:'11px',color:'#ffe3a2',backgroundColor:'#0b1424',padding:{x:6,y:4}}).setOrigin(1,1).setScrollFactor(0).setDepth(20002);
this.hint=this.add.text(320,329,'',{fontFamily:'monospace',fontSize:'12px',color:'#ffdf9a',backgroundColor:'#122435',padding:{x:7,y:4}}).setOrigin(.5).setScrollFactor(0).setDepth(20003);
this.cameras.main.roundPixels=true;this.syncZone(model());this.cameras.main.startFollow(this.player,true,1,1);this.input.on('pointerdown',()=>container.focus());
}
syncZone(p){if(this.zone===p.z)return;this.zone=p.z;const city=p.z==='city';this.background.setTexture('ce-'+p.z);this.people.forEach(n=>n.setVisible(city));this.names.forEach(n=>n.setVisible(city));this.doorTags.forEach(n=>n.setVisible(city));this.exitTag.setVisible(!city);this.cameras.main.setBounds(0,0,city?960:640,city?640:360);this.lights.clear()}
update(t,delta){let p=model();this.syncZone(p);const dt=Math.min(.05,delta/1000);let dx=+(keys.has('d')||keys.has('arrowright'))-+(keys.has('a')||keys.has('arrowleft')),dy=+(keys.has('s')||keys.has('arrowdown'))-+(keys.has('w')||keys.has('arrowup'));let moving=false;
if(active()&&(dx||dy)){const speed=112*dt/Math.hypot(dx,dy);let ox=p.x,oy=p.y;if(!blocked(p.x+dx*speed,p.y))p.x+=dx*speed;if(!blocked(p.x,p.y+dy*speed))p.y+=dy*speed;p.dir=dx?dx<0?2:3:dy<0?1:0;moving=ox!==p.x||oy!==p.y}
this.player.setPosition(Math.round(p.x),Math.round(p.y)).setDepth(p.y+.1);if(moving)this.player.play('ce-walk-'+p.dir,true);else{this.player.stop();this.player.setFrame(p.dir*8)}
this.people.forEach((n,i)=>n.setFrame([0,1,0,7][(Math.floor(t/600)+i)%4]));
let city=p.z==='city',a=route[missionId()],target=a&&a.z===p.z?a:null;
this.marker.clear();this.lights.clear();if(city){
for(let i=0;i<8;i++){let [x,y,w,h]=buildings[i],col=Phaser.Display.Color.HexStringToColor(palette[i]).color,alpha=.08+.035*Math.sin(t/430+i);for(let z=0;z<5;z++){this.lights.fillStyle(col,2.4*alpha*(1-z/6));this.lights.fillRect(x+12+z*2,y+h+2+z*4,w-24-z*4,2)}this.lights.fillStyle(col,.3+alpha);this.lights.fillRect(x+10,y+h-42,w-20,1)}
for(let i=0;i<doors.length;i++){let d=doors[i];this.marker.lineStyle(1,0x7adce0,.7);this.marker.strokeEllipse(d.x,d.y,22,10)}
}else{this.lights.fillStyle(0x43d2d3,.08);this.lights.fillRect(22,39,596,4);this.marker.lineStyle(1,0x7adce0,.8);this.marker.strokeEllipse(320,330,25,9)}
if(target){let pulse=1+Math.sin(t/160)*.15;this.marker.lineStyle(2,0xffd77d,.9);this.marker.strokeEllipse(target.x,target.y,24*pulse,10*pulse);this.marker.fillStyle(0xffd77d,.12);this.marker.fillEllipse(target.x,target.y,22,9);this.tag.setVisible(true).setPosition(target.x,target.y-64).setText('01.'+String(missionId()+1).padStart(2,'0')+' / E');this.hint.setVisible(active()&&Math.hypot(p.x-target.x,p.y-target.y)<38).setText('PULSA E PARA INTERACTUAR')}else{this.tag.setVisible(false);this.hint.setVisible(false)}
this.rain.clear();if(city){this.rain.lineStyle(1,0x91c8ff,.28);this.rain.beginPath();for(let r of this.rains){r.y=(r.y+dt*r.v)%360;r.x=(r.x-dt*20+640)%640;this.rain.moveTo(r.x,r.y);this.rain.lineTo(r.x-3,r.y+7)}this.rain.strokePath()}
this.hud.setText('NEO MADRID / '+p.z.toUpperCase()+'\nNEON ARCADE / '+(a?'TARGET '+String(missionId()+1).padStart(2,'0')+' · '+a.z.toUpperCase():'MISSION COMPLETE'));
let dest=target||(city&&a?doors.find(d=>d.z===a.z):!city?{x:320,y:330}:null);this.arrow.setText(dest?'OBJETIVO '+Math.round(Math.hypot(dest.x-p.x,dest.y-p.y))+' px · '+(Math.abs(dest.x-p.x)>Math.abs(dest.y-p.y)?(dest.x<p.x?'←':'→'):(dest.y<p.y?'↑':'↓')):'');
}
}
return new Phaser.Game({type:Phaser.AUTO,parent:container,width:640,height:360,pixelArt:true,roundPixels:true,antialias:false,backgroundColor:'#101c2a',scene:World,render:{pixelArt:true,antialias:false,roundPixels:true},input:{keyboard:false},banner:false,scale:{mode:Phaser.Scale.NONE}});
}};
})();