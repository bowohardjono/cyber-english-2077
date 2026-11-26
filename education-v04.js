/* v0.4 — grammar library and retry variants */
const CE04=(()=>{
const theory=[
["Identity Protocol","To be, pronombres y posesivos",[
["Pronombres y concordancia","I = yo; you = tú/usted/vosotros; he = él; she = ella; it = cosa/animal; we = nosotros; they = ellos. El sujeto normalmente es obligatorio. I + am; he/she/it + is; you/we/they + are. Nombres singulares usan is; plurales usan are.","I am punctual. The bicycle is clean. The flowers are yellow."],
["Afirmación y negación","Sujeto + am/is/are + complemento. Negación: añade not después del verbo. Contracciones: I'm, you're, he's, she's, it's, we're, they're; isn't, aren't, I'm not.","She is curious. She isn't nervous. We aren't late."],
["Preguntas y respuestas cortas","Am/Is/Are + sujeto + complemento? Con WH: What/Where/Who/How old + am/is/are + sujeto? En respuesta afirmativa corta no se contrae el verbo.","Are the books heavy? Yes, they are. Where is the museum?"],
["Adjetivos posesivos","I→my, you→your, he→his, she→her, it→its, we→our, they→their. Van delante de un sustantivo. Its = posesivo; it's = it is. His/her dependen del poseedor.","Her garden is lovely. Their kitchen is bright. Its tail is short."],
["Identidad, edad, origen, profesión y estado","Be expresa ser y estar. Edad: be + número + years old, no have. Origen: be from. Profesión singular: a/an según sonido. El adjetivo va después de be o antes del nombre.","He is sixteen years old. I am from Madrid. She is an artist."],
["Lectura, escritura y errores frecuentes","Localiza sujeto y número; distingue posesión de identidad; identifica información explícita y contradicciones. Responde con frase completa. En preguntas, inversión, no do/does con be.","Incorrecto: My shoes is wet. Correcto: My shoes are wet."]]],
["Hardware District","Have got y posesivos",[
["Afirmación","I/you/we/they have got; he/she/it has got. Expresa posesión y características. Have got es común en inglés británico; have/has también es válido con su propia estructura.","Our workstation has got two fans."],
["Negación, preguntas y respuestas","Haven't got / hasn't got. Have/Has + sujeto + got? Yes, I have. No, she hasn't. Con have sin got se usa do/does en preguntas y negación.","Has the laptop got a camera? No, it hasn't."],
["Sustantivos y cuantificadores","A/an con singular contable; plurales -s/-es e irregulares frecuentes. Some en afirmativas; any en negativas y preguntas; much con incontables, many con plurales.","We have got some spare screws."],
["Posesión","My/your/his/her/its/our/their; 's para poseedor singular. Diferencia hardware, software, RAM, motherboard, drive y ports.","The technician's toolkit has got a tester."]]],
["Neon City","There is / There are",[
["Existencia","There is + singular contable o incontable; there are + plural. No equivale a it is.","There is a router in the cabinet."],
["Negación e interrogación","There isn't/aren't; Is there...? Are there...? Yes, there is/are; No, there isn't/aren't.","Are there any lockers?"],
["Cantidad y lugar","A/an, some, any, how many/much; in, on, under, next to, between, opposite, behind, in front of.","There are three desks opposite the entrance."]]],
["Server Collapse","Present Simple",[
["Uso y afirmación","Rutinas, hechos y horarios. I/you/we/they + base; he/she/it + -s/-es (study→studies; go→goes; have→has).","The administrator checks the logs every morning."],
["Negación e interrogación","Don't/doesn't + base; Do/Does + sujeto + base? Con does no se añade -s al verbo principal.","Does the system restart at noon?"],
["Frecuencia y tiempo","Always, usually, often, sometimes, never antes del verbo normal y después de be. Every day, on Mondays, at eight.","The team usually works in pairs."]]],
["Android Revolution","Present Continuous",[
["Formación","Sujeto + am/is/are + verbo-ing. Acciones en curso y situaciones temporales. Make→making; run→running; lie→lying.","The students are configuring a switch."],
["Negación y preguntas","Be + not + -ing; Be + sujeto + -ing? Respuestas cortas con be.","Is the technician testing the cable?"],
["Contraste con Present Simple","Now, at the moment para acciones actuales; usually/every day para hábitos. Algunos verbos de estado normalmente no usan continuo.","She installs updates every week, but today she is repairing a screen."]]],
["Machine Repair","Can, must e imperativos",[
["Capacidad y permiso","Can/can't + verbo base, sin to ni -s. Can + sujeto + base?","Can this device record sound?"],
["Obligación y prohibición","Must + base; mustn't expresa prohibición; don't have to significa ausencia de obligación.","You must disconnect the power. You mustn't touch live wires."],
["Instrucciones","Imperativo: base sin sujeto; Don't + base. First, next, then, finally ordenan pasos. Please suaviza la instrucción.","First, switch off the device. Then check the connector."]]],
["Corporate Infiltration","Preposiciones y comparativos",[
["Lugar y dirección","In dentro, on sobre, at punto, under debajo, between entre dos, next to al lado, opposite enfrente; go past, turn left/right.","The reception is opposite the stairs."],
["Tiempo","At para horas; on para días y fechas; in para meses, años y partes del día.","The briefing is on Tuesday at nine."],
["Comparación","Adjetivo corto + -er + than; largo: more + adjetivo + than. Good→better, bad→worse. Superlativo: the -est / the most; as...as para igualdad.","This cable is longer than that one."]]],
["Digital Evidence","Past Simple",[
["Be en pasado","I/he/she/it was; you/we/they were. Wasn't/weren't; Was/Were + sujeto?","The workstation was ready yesterday."],
["Verbos regulares e irregulares","Regulares -ed (work→worked, study→studied); irregulares go→went, see→saw, make→made, find→found, take→took.","They found an old backup."],
["Negación y preguntas","Didn't + base; Did + sujeto + base? No usar pasado tras did. Yesterday, last week, ago, in 2025.","Did the operator save the file?"]]],
["Resistance Protocol","Will / Going to",[
["Will","Will + base; won't + base; Will + sujeto + base? Decisiones espontáneas, promesas y predicciones.","I will help you with the report."],
["Going to","Am/is/are + going to + base. Plan previo o predicción con evidencia. Negación y preguntas con be.","We are going to install a new router tomorrow."],
["Contraste y organización","Will para decisión en el momento; going to para intención previa. Next week, tomorrow, soon. First conditional básico: if + present simple, will + base.","If the test fails, we will check the cable."]]],
["The Fall of NEXUS","Repaso acumulativo",[
["Tiempo y aspecto","Be para identidad/estado; present simple para rutina; present continuous para acción en curso; past simple para hecho pasado; will/going to para futuro.","The lab is clean. We clean it daily. We are cleaning it now."],
["Preguntas, negativos y modales","Be invierte; do/does/did auxiliares con base; can/must/will + base. Have got invierte have/has. Revisa concordancia y negación.","Did they finish? Can they explain the issue?"],
["Redacción técnica","Ordena un informe: situación, hechos, acciones, resultado y plan. Usa and, but, because, first, then, finally. Revisa pronombres, posesivos, preposiciones y comparativos.","The old device was slow, but the new one is faster. We will test it tomorrow."]]]
];
const topics=[
["printer","printers","scanner","scanners","orange","library","technician","impresora","escáneres","técnico"],
["router","routers","monitor","monitors","yellow","workshop","operator","router","monitores","operador"],
["keyboard","keyboards","camera","cameras","purple","classroom","student","teclado","cámaras","estudiante"],
["tablet","tablets","speaker","speakers","white","office","assistant","tableta","altavoces","asistente"],
["switch","switches","projector","projectors","black","warehouse","engineer","conmutador","proyectores","ingeniero"],
["sensor","sensors","microphone","microphones","silver","studio","designer","sensor","micrófonos","diseñador"],
["battery","batteries","cable","cables","brown","control room","mechanic","batería","cables","mecánico"],
["terminal","terminals","headset","headsets","pink","training centre","instructor","terminal","auriculares","instructor"]
];
const clean=x=>String(x||'').trim().normalize('NFKC').replace(/\s+/g,' ');
const nameKey=(first,last)=>clean(clean(first)+' '+clean(last)).normalize('NFD').replace(/[\u0300-\u036f]/g,'').toLowerCase();
function code(first,last,mission,attempt,decision){let text='CE04|'+nameKey(first,last)+'|'+mission+'|'+Number(attempt)+'|'+decision,h=2166136261;for(let i=0;i<text.length;i++){h^=text.charCodeAt(i);h=Math.imul(h,16777619)>>>0}return String(h%100000000).padStart(8,'0')}
const Q=(prompt,...answers)=>({prompt,answers});
function variants(m,attempt){if(!attempt)return {...m,variant:0};let k=(attempt-1)%topics.length,[a,ap,b,bp,col,place,job,es,esbp,esjob]=topics[k],u=['Noa','Ari','Sam','Dani','Robin','Toni','Sasha','Cris'][k],v=['Eva','Nina','Lia','Sara','Luna','Vera','Mia','Alba'][k],role=/^[aeiou]/.test(job)?'an '+job:'a '+job;let reading='',questions=[],paper='',minimum=m.minimum,n=Number(m.id.slice(-2));
const record=u+' is '+role+'. '+v+' is a visitor. Her '+a+' is '+col+'. Their '+bp+' are offline. The '+place+' is open. The robot is near the '+place+'. Its power unit is low.';
const fix=Q('Correct: Their '+bp+' is offline.','Their '+bp+' are offline.');
const jobq=Q('Rewrite: I is '+role+'.','I am '+role+'.');
const neg=Q('Make negative: The '+a+' is broken.','The '+a+' is not broken.','The '+a+' isn’t broken.');
const ask=Q('Turn into a question: The '+place+' is open.','Is the '+place+' open?');
const color=Q('What colour is '+v+'’s '+a+'?','Her '+a+' is '+col+'.',v+'’s '+a+' is '+col+'.','It is '+col+'.','It’s '+col+'.');
const where=Q('Where is the robot?','It is near the '+place+'.','The robot is near the '+place+'.');
const translate=Q('Translate: Sus '+esbp+' (de ellos) están desconectados.','Their '+bp+' are offline.','Their '+bp+' are disconnected.');
switch(n){
case 1:reading=record;questions=[jobq,color,fix,Q('Translate: Yo soy '+esjob+'.','I am '+role+'.','I’m '+role+'.')];paper='Create an identity for a fictional '+job+' working at the '+place+'. Include the '+a+', badge colour '+col+', age, origin, role, team and two negative statements. Use at least four subjects, three possessives and underline all forms of be.';break;
case 2:reading=record;questions=[Q('Replace the subject: '+u+' and '+v+' are colleagues.','They are colleagues.'),color,Q('Correct: She is '+v+' and his '+a+' is '+col+'.','She is '+v+' and her '+a+' is '+col+'.'),translate];paper='Describe '+u+', '+v+' and a third fictional colleague. Invent two consistent facts per person. Compare their roles, '+ap+' and '+bp+' using pronouns and possessives; identify two similarities or differences.';break;
case 3:reading='Repair each corrupted record. Check subject, number and word order.';questions=[jobq,Q('Correct: The '+ap+' is clean.','The '+ap+' are clean.'),Q('Correct: We am not at the '+place+'.','We are not at the '+place+'.','We aren’t at the '+place+'.'),Q('Correct: Is you '+role+'?','Are you '+role+'?'),Q('Correct: Her '+bp+' is new.','Her '+bp+' are new.')];paper='Correct these 15 sentences and explain five rules: 1. I are here. 2. She am '+role+'. 3. We is late. 4. They am ready. 5. You is busy. 6. The '+a+' are clean. 7. My '+ap+' is old. 8. Is you ready? 9. Are he here? 10. I is not lost. 11. Her '+b+' are '+col+'. 12. It am broken. 13. Our '+bp+' is new. 14. They am not there. 15. Am she at the '+place+'?';break;
case 4:reading=record;questions=[ask,Q('Answer negatively: Is '+v+' '+role+'?','No, she is not.','No, she isn’t.','No, she’s not.'),Q('Ask about location: The robot is near the '+place+'.','Where is the robot?'),Q('Turn into a question: The '+bp+' are offline.','Are the '+bp+' offline?')];paper='Interview the service robot near the '+place+'. Ask ten questions with ten answers based on the record and plausible invented facts; four yes/no, four WH and two about contradictory claims.';break;
case 5:reading='Record: the '+a+' is ready; the '+bp+' are offline; '+v+' is a visitor; the '+place+' is open.';questions=[neg,Q('Make negative: The '+bp+' are online.','The '+bp+' are not online.','The '+bp+' aren’t online.'),Q('Make negative: I am '+role+'.','I am not '+role+'.','I’m not '+role+'.'),Q('Correct the false claim: The '+place+' is closed.','The '+place+' is not closed.','The '+place+' isn’t closed.','The '+place+' is open.')];paper='Make these 12 statements negative, six full forms and six contractions: I am early; she is '+role+'; they are busy; we are at the '+place+'; you are a visitor; the '+a+' is ready; the '+bp+' are clean; he is late; it is '+col+'; our '+ap+' are new; my '+b+' is old; the doors are closed. Identify plural subjects and explain you.';break;
case 6:reading='Translate complete messages. Check possessives, singular/plural and inversion.';questions=[Q('Translate: Mi '+es+' está roto/a.','My '+a+' is broken.'),translate,Q('Translate: Soy '+esjob+'.','I am '+role+'.','I’m '+role+'.'),Q('Translate: Ella no es '+esjob+'.','She is not '+role+'.','She isn’t '+role+'.'),Q('Translate: ¿Tus '+esbp+' están desconectados?','Are your '+bp+' offline?','Are your '+bp+' disconnected?')];paper='Translate 10 messages: 1 Soy '+esjob+'. 2 Mi '+es+' está roto/a. 3 Ella no es visitante. 4 Sus '+esbp+' (de ellos) están desconectados. 5 ¿Estás ocupado/a? 6 Nuestro taller es seguro. 7 ¿Dónde está tu tarjeta? 8 Ellos son estudiantes. 9 Su batería (del robot) está baja. 10 Nosotros no estamos en la oficina. Rewrite three as questions.';break;
case 7:reading=record+' The north entrance is closed. The west entrance is open.';questions=[where,Q('Are the '+bp+' offline?','Yes, they are.'),color,Q('Is '+v+' a visitor?','Yes, she is.'),Q('Which entrance is open?','The west entrance is open.')];paper='Answer in full sentences: 1 What is '+u+'’s job? 2 Who is the visitor? 3 What colour is her '+a+'? 4 Are the '+bp+' online? 5 Is the '+place+' open? 6 Where is the robot? 7 Is its power unit low? 8 Which entrance is closed? Then describe two differences between the entrances.';break;
case 8:reading='Fictional ID: '+u+'; role: '+job+'; badge: '+col+'; colleague: '+v+'; password: unavailable.';questions=[Q('Respond: Who are you?','I am '+u+'.','I’m '+u+'.','My name is '+u+'.'),Q('Respond: What is your job?','I am '+role+'.','I’m '+role+'.'),Q('Respond: What colour is your badge?','My badge is '+col+'.','It is '+col+'.','It’s '+col+'.'),Q('Respond: Who is your colleague?','My colleague is '+v+'.','It is '+v+'.'),Q('Respond: Is the password available?','No, it is not.','No, it isn’t.','The password is not available.')];paper='Write a checkpoint dialogue between a guard and '+u+' using the fictional ID. Include greeting, job, badge, colleague, a denial, clarification and farewell, with at least six questions.';break;
case 9:reading='Verified A: '+u+' is '+role+'; badge '+col+'; workplace '+place+'. False B: '+u+' is a guard; badge red. C: '+v+' and Lin are technicians; their badges are green.';questions=[Q('Correct B: '+u+' is a guard.',u+' is not a guard.',u+' is '+role+'.',u+' isn’t a guard.'),Q('Correct B: The badge is red.','The badge is '+col+'.','The badge is not red.'),Q('Who are the technicians in C?',v+' and Lin are technicians.','They are '+v+' and Lin.'),Q('Ask about the badge colour.','What colour is the badge?','What color is the badge?')];paper='Write a dossier (Identity, Verified facts, Contradictions, Conclusion) for '+u+', '+v+' and Lin. Use the records; explain why B is false with at least three negatives and two possessives.';break;
default:reading=record+' The north entrance is closed. '+v+' is not at the '+place+'.';questions=[fix,Q('Ask whether '+v+' is at the '+place+'.','Is '+v+' at the '+place+'?'),Q('Answer: Is the north entrance open?','No, it is not.','No, it isn’t.','No, the north entrance is not open.'),translate,Q('Use a pronoun: '+u+' and '+v+' are colleagues.','They are colleagues.'),Q('Correct: She are not at the '+place+'.','She is not at the '+place+'.','She isn’t at the '+place+'.')];paper='Write a 60–80-word report based on the record, five questions with answers and correct four false claims: '+v+' is at the '+place+'; the '+bp+' are online; the north entrance is open; the robot is far from the '+place+'. Include four subject pronouns, four possessives and three negatives.';break;}
return {...m,reading,questions,paper,minimum,variant:attempt}}
return {theory,variants,code,nameKey,clean};
})();