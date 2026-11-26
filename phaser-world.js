/* CYBER ENGLISH 2077 v0.2 — original procedural pixel art, Phaser 3.90 */
(function(){
"use strict";
function rng(seed){return ()=>{seed=(Math.imul(seed,1664525)+1013904223)>>>0;return seed/4294967296}}
function pixelSurface(w,h,draw){const c=document.createElement('canvas');c.width=w;c.height=h;const x=c.getContext('2d');x.imageSmoothingEnabled=false;draw(x);return c}
function rect(c,x,y,w,h,col){c.fillStyle=col;c.fillRect(Math.floor(x),Math.floor(y),Math.floor(w),Math.floor(h))}
function line(c,x,y,x2,y2,col){c.strokeStyle=col;c.lineWidth=1;c.beginPath();c.moveTo(x+.5,y+.5);c.lineTo(x2+.5,y2+.5);c.stroke()}
function label(c,t,x,y,col,sz=8){c.font='bold '+sz+'px monospace';c.textBaseline='top';c.fillStyle=col;c.fillText(t,x,y)}
const palette=['#46e8d9','#f765aa','#8c9aff','#efb96b','#65c6ee','#d27eff','#fe7288','#5be5b0'];
function car(c,x,y,col,flip=false){rect(c,x+2,y+5,38,13,'#080e19');rect(c,x,y+3,40,12,'#273b50');rect(c,x+3,y,32,14,col);rect(c,x+6,y+2,25,10,'#182c40');rect(c,x+11,y+2,15,10,'#385970');rect(c,x+15,y+3,8,7,'#10283a');rect(c,x+3,y+1,3,11,'#8294a5');rect(c,x+34,y+2,4,4,flip?'#ed526d':'#ecf5cc');rect(c,x+34,y+10,4,3,flip?'#ed526d':'#ecf5cc');rect(c,x,y+3,2,4,flip?'#ecf5cc':'#ed526d');rect(c,x,y+10,2,3,flip?'#ecf5cc':'#ed526d');rect(c,x+8,y+13,5,3,'#060b12');rect(c,x+28,y+13,5,3,'#060b12')}
function vent(c,x,y,w,h){rect(c,x+2,y+3,w,h,'#101722');rect(c,x,y,w,h,'#4c5769');rect(c,x+2,y+2,w-4,h-4,'#1a2636');for(let i=3;i<h-2;i+=3)rect(c,x+3,y+i,w-6,1,'#667383')}
function building(c,x,y,w,h,i){const n=palette[i],names=['NIGHT SHIFT','ID BUREAU','NEXUS LAB','METRO 07','APARTMENTS','DATA MART','SECURITY','RESISTANCE'];const r=rng(90+i);let face=y+h-48;
rect(c,x+5,y+7,w+5,h+5,'#080e19');rect(c,x,y,w,h,'#253044');rect(c,x+2,y+2,w-4,h-4,'#3b4b60');rect(c,x+6,y+6,w-12,h-11,'#192536');rect(c,x+7,y+7,w-14,4,'#667287');rect(c,x+7,y+12,3,h-63,'#35445a');rect(c,x+w-10,y+12,3,h-63,'#111a29');
for(let yy=y+15;yy<face-6;yy+=14){line(c,x+12,yy,x+w-13,yy,'#263448');for(let xx=x+15+(yy%3)*3;xx<x+w-15;xx+=25){if(r()<.7)rect(c,xx,yy+1,1,3,'#384b60')}}
for(let k=0;k<4;k++){const vx=x+15+Math.floor(r()*(w-44)),vy=y+20+Math.floor(r()*Math.max(1,h-110));vent(c,vx,vy,14+2*(k%2),12+2*(k%3))}
if(i%2===0){rect(c,x+w-42,y+13,25,27,'#111b29');rect(c,x+w-40,y+15,21,23,'#485970');for(let k=0;k<3;k++)rect(c,x+w-38,y+18+k*7,17,4,'#28394a');rect(c,x+w-19,y+37,8,24,'#74808a');rect(c,x+w-20,y+59,9,3,'#111924')}
else{rect(c,x+14,y+16,31,20,'#0c1826');rect(c,x+16,y+18,27,15,'#354d61');for(let k=0;k<3;k++){rect(c,x+18+k*8,y+20,5,11,'#4d687a');rect(c,x+18+k*8,y+20,1,11,n)}}
for(let k=0;k<4;k++){let px=x+11+k*9;rect(c,px,y+8,4,2,k===0?n:'#8194a1')}
rect(c,x+7,face,w-14,42,'#26364b');rect(c,x+7,face,w-14,3,'#708094');rect(c,x+8,face+5,w-16,15,'#101827');rect(c,x+9,face+5,w-18,1,n);rect(c,x+9,face+19,w-18,1,n);label(c,names[i],x+13,face+8,n,8);
for(let xx=x+12;xx<x+w-14;xx+=17){rect(c,xx,face+23,12,12,'#0b1421');rect(c,xx+2,face+25,8,8,r()<.5?'#204f66':'#513957');rect(c,xx+2,face+25,1,8,n);rect(c,xx+6,face+25,1,8,'#0c1925')}
let door=x+Math.floor(w/2)-11;rect(c,door-3,face+23,28,21,'#0b1220');rect(c,door,face+24,22,18,'#3a526a');rect(c,door+2,face+26,8,14,'#182f44');rect(c,door+12,face+26,8,14,'#182f44');rect(c,door+10,face+34,2,4,n);rect(c,x+7,y+h-5,w-14,3,'#687887');rect(c,x+12,y+h-1,w-24,2,'#0b111c');
// shop awnings, pipes, signage and antennas
if(i===0||i===5||i===7){for(let k=0;k<Math.floor((w-18)/6);k++)rect(c,x+9+k*6,face-5,6,6,k%2?n:'#314759')}
rect(c,x+w-7,y+20,3,h-73,'#748292');rect(c,x+w-10,y+33,7,3,'#9b9ba0');rect(c,x+w-10,face-13,7,3,'#9b9ba0');rect(c,x+w-15,face-14,7,4,'#75818c');
rect(c,x+w-24,y-5,2,14,'#8e98a3');rect(c,x+w-30,y-5,14,2,'#566779');rect(c,x+w-25,y-7,4,2,n);
if(i===2||i===6){rect(c,x+8,face-32,26,23,'#0d1b2a');rect(c,x+9,face-31,24,1,n);label(c,i===2?'N X':'S 7',x+11,face-24,n,9)}
}
function lamp(c,x,y,col){rect(c,x-4,y+1,9,4,'#080f1c');rect(c,x-1,y-12,3,16,'#768398');rect(c,x-4,y-15,10,3,'#30445a');rect(c,x-3,y-14,8,1,col)}
function cityArt(blocks){return pixelSurface(960,640,c=>{const r=rng(2077);rect(c,0,0,960,640,'#172334');for(let y=0;y<640;y+=12)for(let x=0;x<960;x+=16){rect(c,x+1,y+1,14,10,r()<.25?'#233245':'#1b2a3c');if(r()<.14)rect(c,x+2,y+3,5,1,'#334155')}
rect(c,0,250,960,130,'#101c2a');rect(c,394,0,164,640,'#101c2a');for(let i=0;i<10000;i++){let x=r()*960|0,y=r()*640|0;if((y>251&&y<379)||(x>395&&x<557))rect(c,x,y,1+(i%4===0),1,['#152737','#1a2e40','#1b3042','#263a4d'][i%4])}
for(let y of [247,382]){rect(c,0,y,960,2,'#657485');rect(c,0,y+3,960,2,'#263849')}for(let x of [390,560]){rect(c,x,0,2,640,'#657485');rect(c,x+3,0,2,640,'#263849')}
rect(c,394,250,164,130,'#101c2a');
for(let i=0;i<960;i+=40){if(i<367||i>575){rect(c,i+4,312,18,2,'#7c785b');rect(c,i+4,316,18,1,'#3c4753')}}for(let y=0;y<640;y+=40)if(y<230||y>386)rect(c,475,y+5,2,18,'#827b57');
for(let x=400;x<557;x+=12){rect(c,x,240,6,20,'#65717c');rect(c,x,370,6,20,'#65717c')}for(let y=264;y<366;y+=12){rect(c,365,y,24,6,'#65717c');rect(c,565,y,24,6,'#65717c')}
for(let i=0;i<8;i++){const [x,y,w,h]=blocks[i];building(c,x,y,w,h,i);const n=palette[i];for(let j=0;j<90;j++){let px=x+8+(r()*(w-16)|0),py=y+h+4+(r()*25|0);if(py<640)rect(c,px,py,2+(j%8),1,j%5===0?n:'#30475a')}lamp(c,x+w+12,y+h+24,n)}
for(let i=0;i<4;i++){const [x,y,w,h]=blocks[8+i];rect(c,x-2,y-2,w+4,h+4,'#090f19');rect(c,x,y,w,h,'#334759');rect(c,x+2,y+2,w-4,h-5,'#1d3344');for(let k=0;k<w;k+=10)rect(c,x+k,y+3,2,h-6,'#506578');rect(c,x,y+h-2,w,2,palette[i])}
for(let i=0;i<4;i++){car(c,[58,220,675,815][i],[281,351,281,351][i],palette[i],i%2===0)}
for(let i=0;i<180;i++){let x=r()*960|0,y=r()*640|0;if((y>255&&y<375)||(x>399&&x<552))rect(c,x,y,2+(i%5),1,i%7===0?'#364c60':'#1e3448')}
for(let x of [12,190,375,580,765,945]){for(let y of [224,407]){rect(c,x,y,6,7,'#0b1725');rect(c,x+1,y+1,4,3,'#4d9aa6')}}
})}
function roomArt(isLab,blocks){return pixelSurface(640,360,c=>{let r=rng(isLab?89:57);rect(c,0,0,640,360,'#0a1422');rect(c,18,39,604,306,'#1c2a3c');for(let y=42;y<344;y+=13)for(let x=20;x<620;x+=18){rect(c,x,y,17,12,r()<.2?'#2a3a4b':'#243446');if(r()<.15)rect(c,x+2,y+1,5,1,'#3d4b5d')}
rect(c,12,12,616,28,'#27364a');rect(c,15,15,610,4,'#576980');rect(c,15,32,610,3,isLab?'#49dcca':'#be80f5');for(let x=32;x<610;x+=44){rect(c,x,22,29,7,'#101c2b');rect(c,x+2,23,25,1,'#3d6374')}
rect(c,10,38,8,302,'#415268');rect(c,622,38,8,302,'#415268');rect(c,18,339,282,6,'#506477');rect(c,340,339,282,6,'#506477');label(c,isLab?'NEXUS / RESEARCH LAB':'SAFEHOUSE / UNIT 07',250,21,isLab?'#63e1dd':'#eaa4f5',8);
blocks.forEach(([x,y,w,h],i)=>{rect(c,x+3,y+5,w,h,'#0c1420');rect(c,x,y,w,h,'#35495f');rect(c,x+2,y+2,w-4,h-4,'#1d3043');rect(c,x+2,y+2,w-4,2,'#708196');if(isLab||i<4){for(let q=x+6;q<x+w-18;q+=24){rect(c,q,y+6,18,13,'#090f19');rect(c,q+2,y+8,14,9,'#285970');for(let k=0;k<3;k++)rect(c,q+3,y+9+k*2,3+(k%2)*7,1,k===0?'#6af4db':'#5498a8');rect(c,q+8,y+19,2,4,'#75859b');rect(c,q+3,y+24,12,4,'#54697a')}for(let yy=y+31;yy<y+h-4;yy+=12){rect(c,x+6,yy,w-12,7,'#182433');rect(c,x+9,yy+2,3,2,'#60d5cc');rect(c,x+15,yy+2,2,2,'#ed809f')}}else if(i===4){rect(c,x+6,y+6,w-12,h-12,'#5a486c');rect(c,x+8,y+8,w-16,15,'#a0a9be');rect(c,x+8,y+25,w-16,h-33,'#705a8c');for(let yy=y+27;yy<y+h-7;yy+=7)rect(c,x+10,yy,w-20,1,'#8d70a4')}else{for(let yy=y+6;yy<y+h-6;yy+=16){rect(c,x+5,yy,w-10,12,'#455166');rect(c,x+w/2-5,yy+5,10,2,'#b1b2be')}}});
for(let i=0;i<60;i++){let x=235+(r()*170|0),y=198+(r()*95|0);rect(c,x,y,3,1,isLab?'#334b5b':'#403a54')}rect(c,302,334,36,3,'#79cdd4');label(c,'EXIT',309,322,'#a3d8e2',8)
})}
function spriteSheet(){return pixelSurface(96,128,c=>{for(let d=0;d<4;d++)for(let f=0;f<4;f++){let x=f*24,y=d*32,walk=[0,1,0,-1][f],bob=f%2;const R=(a,b,w,h,col)=>rect(c,x+a,y+b+bob,w,h,col);
R(5,28,14,2,'#0b1724');R(7+walk,22,5,6,'#0b1525');R(12-walk,22,5,6,'#0b1525');R(7+walk,23,4,4,'#39495d');R(13-walk,23,3,4,'#26384c');R(6+walk,27,6,2,'#6d90a6');R(12-walk,27,6,2,'#6d90a6');
R(5,10,14,13,'#0a1322');R(7,11,10,11,'#29485e');R(8,12,8,8,'#416c7e');R(5,12,3,8,'#36566e');R(16,12,3,8,'#253f56');R(6,19,3,3,'#ab8076');R(16,19,3,3,'#ab8076');R(9,20,6,2,'#101e31');R(8,22,8,1,'#7a8a99');
if(d===1){R(8,11,8,8,'#17283d');R(9,12,6,6,'#395669');R(10,13,4,1,'#48dfcf');R(11,17,2,1,'#e47cab')}else {R(10,12,2,7,'#102333');R(12,13,2,2,'#6af4d9');R(14,18,2,2,'#e378ae');}
R(7,2,10,9,'#0b1321');R(8,3,8,7,'#b98f82');R(8,3,8,3,'#354459');R(7,4,2,5,'#26394e');R(15,4,2,5,'#26394e');if(d===1){R(8,4,8,6,'#29394d');R(9,5,6,2,'#40556b')}else{R(d===2?8: d===3?12:9,7,d===0?6:3,2,'#10283b');R(d===2?8:d===3?13:9,7,d===0?6:2,1,'#72f3e5');R(11,10,2,1,'#d7ad99')}
}})}
window.CyberWorld={start({container,model,route,buildings,roomBlocks,doors,npcs,keys,blocked,active,missionId,interact}){
if(!window.Phaser)throw Error('Phaser 3 no se ha podido cargar. Comprueba tu conexión y recarga.');
class World extends Phaser.Scene{
constructor(){super('CyberWorld');this.zone='';this.entities=[];this.fxSeed=rng(333)}
create(){
const tex=(name,canvas)=>{const t=this.textures.addCanvas(name,canvas);t.setFilter(Phaser.Textures.FilterMode.NEAREST);return t};
tex('ce-city',cityArt(buildings));tex('ce-apartment',roomArt(false,roomBlocks));tex('ce-lab',roomArt(true,roomBlocks));const sheet=tex('ce-person',spriteSheet());for(let d=0;d<4;d++)for(let f=0;f<4;f++)sheet.add(d*4+f,0,f*24,d*32,24,32);
for(let d=0;d<4;d++)this.anims.create({key:'ce-walk-'+d,frames:[0,1,2,3].map(f=>({key:'ce-person',frame:d*4+f})),frameRate:9,repeat:-1});
this.background=this.add.image(0,0,'ce-city').setOrigin(0).setDepth(-10);
this.lights=this.add.graphics().setDepth(-2);
this.marker=this.add.graphics().setDepth(10000);this.tag=this.add.text(0,0,'',{fontFamily:'monospace',fontSize:'11px',color:'#ffe5a0',backgroundColor:'#101c2a',padding:{x:4,y:2}}).setOrigin(.5,1).setDepth(10001);
this.doorTags=doors.map(d=>this.add.text(d.x,d.y-22,d.label,{fontFamily:'monospace',fontSize:'9px',color:'#a4eff1',backgroundColor:'#102332',padding:{x:3,y:2}}).setOrigin(.5,1).setDepth(10002));
this.exitTag=this.add.text(320,312,'EXIT / E',{fontFamily:'monospace',fontSize:'10px',color:'#a4eff1'}).setOrigin(.5).setDepth(10002);
this.player=this.add.sprite(0,0,'ce-person',0).setOrigin(.5,.91);
this.people=npcs.map((n,i)=>this.add.sprite(n.x,n.y,'ce-person',0).setOrigin(.5,.91).setTint([0xc3b9ff,0xffffff,0x93dfff,0xf5bd84,0xf2a4d1][i]).setDepth(n.y));
this.rain=this.add.graphics().setScrollFactor(0).setDepth(20000);
this.rains=Array.from({length:135},()=>({x:this.fxSeed()*640,y:this.fxSeed()*360,v:85+this.fxSeed()*110}));
this.hud=this.add.text(12,10,'',{fontFamily:'monospace',fontSize:'10px',color:'#b8f5ed',backgroundColor:'#0b1424',padding:{x:7,y:5},lineSpacing:4}).setScrollFactor(0).setDepth(20001);
this.arrow=this.add.text(628,344,'',{fontFamily:'monospace',fontSize:'11px',color:'#ffe3a2',backgroundColor:'#0b1424',padding:{x:6,y:4}}).setOrigin(1,1).setScrollFactor(0).setDepth(20002);
this.hint=this.add.text(320,329,'',{fontFamily:'monospace',fontSize:'12px',color:'#ffdf9a',backgroundColor:'#122435',padding:{x:7,y:4}}).setOrigin(.5).setScrollFactor(0).setDepth(20003);
this.cameras.main.roundPixels=true;this.syncZone(model());this.cameras.main.startFollow(this.player,true,1,1);this.input.on('pointerdown',()=>container.focus());
}
syncZone(p){if(this.zone===p.z)return;this.zone=p.z;const city=p.z==='city';this.background.setTexture('ce-'+p.z);this.people.forEach(n=>n.setVisible(city));this.doorTags.forEach(n=>n.setVisible(city));this.exitTag.setVisible(!city);this.cameras.main.setBounds(0,0,city?960:640,city?640:360);this.lights.clear()}
update(t,delta){let p=model();this.syncZone(p);const dt=Math.min(.05,delta/1000);let dx=+(keys.has('d')||keys.has('arrowright'))-+(keys.has('a')||keys.has('arrowleft')),dy=+(keys.has('s')||keys.has('arrowdown'))-+(keys.has('w')||keys.has('arrowup'));let moving=false;
if(active()&&(dx||dy)){const speed=112*dt/Math.hypot(dx,dy);let ox=p.x,oy=p.y;if(!blocked(p.x+dx*speed,p.y))p.x+=dx*speed;if(!blocked(p.x,p.y+dy*speed))p.y+=dy*speed;p.dir=dx?dx<0?2:3:dy<0?1:0;moving=ox!==p.x||oy!==p.y}
this.player.setPosition(Math.round(p.x),Math.round(p.y)).setDepth(p.y+.1);if(moving)this.player.play('ce-walk-'+p.dir,true);else{this.player.stop();this.player.setFrame(p.dir*4)}
this.people.forEach((n,i)=>n.setFrame((Math.floor(t/700)+i)%4));
let city=p.z==='city',a=route[missionId()],target=a&&a.z===p.z?a:null;
this.marker.clear();this.lights.clear();if(city){
for(let i=0;i<8;i++){let [x,y,w,h]=buildings[i],col=Phaser.Display.Color.HexStringToColor(palette[i]).color,alpha=.08+.035*Math.sin(t/430+i);for(let z=0;z<5;z++){this.lights.fillStyle(col,alpha*(1-z/6));this.lights.fillRect(x+12+z*2,y+h+2+z*4,w-24-z*4,2)}this.lights.fillStyle(col,.3+alpha);this.lights.fillRect(x+10,y+h-42,w-20,1)}
for(let i=0;i<doors.length;i++){let d=doors[i];this.marker.lineStyle(1,0x7adce0,.7);this.marker.strokeEllipse(d.x,d.y,22,10)}
}else{this.lights.fillStyle(0x43d2d3,.08);this.lights.fillRect(22,39,596,4);this.marker.lineStyle(1,0x7adce0,.8);this.marker.strokeEllipse(320,330,25,9)}
if(target){let pulse=1+Math.sin(t/160)*.15;this.marker.lineStyle(2,0xffd77d,.9);this.marker.strokeEllipse(target.x,target.y,24*pulse,10*pulse);this.marker.fillStyle(0xffd77d,.12);this.marker.fillEllipse(target.x,target.y,22,9);this.tag.setVisible(true).setPosition(target.x,target.y-32).setText('01.'+String(missionId()+1).padStart(2,'0')+' / E');this.hint.setVisible(active()&&Math.hypot(p.x-target.x,p.y-target.y)<38).setText('PULSA E PARA INTERACTUAR')}else{this.tag.setVisible(false);this.hint.setVisible(false)}
this.rain.clear();if(city){this.rain.lineStyle(1,0x9cc8e7,.23);this.rain.beginPath();for(let r of this.rains){r.y=(r.y+dt*r.v)%360;r.x=(r.x-dt*20+640)%640;this.rain.moveTo(r.x,r.y);this.rain.lineTo(r.x-3,r.y+8)}this.rain.strokePath()}
this.hud.setText('NEO MADRID / '+p.z.toUpperCase()+'\nPHASER 3 / '+(a?'TARGET '+String(missionId()+1).padStart(2,'0')+' · '+a.z.toUpperCase():'MISSION COMPLETE'));
let dest=target||(city&&a?doors.find(d=>d.z===a.z):!city?{x:320,y:330}:null);this.arrow.setText(dest?'OBJETIVO '+Math.round(Math.hypot(dest.x-p.x,dest.y-p.y))+' px · '+(Math.abs(dest.x-p.x)>Math.abs(dest.y-p.y)?(dest.x<p.x?'←':'→'):(dest.y<p.y?'↑':'↓')):'');
}
}
return new Phaser.Game({type:Phaser.AUTO,parent:container,width:640,height:360,pixelArt:true,roundPixels:true,antialias:false,backgroundColor:'#101c2a',scene:World,render:{pixelArt:true,antialias:false,roundPixels:true},input:{keyboard:false},banner:false,scale:{mode:Phaser.Scale.NONE}});
}};
})();