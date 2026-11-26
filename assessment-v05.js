/* v0.5 — assessment and task types; no private data */
const CE05=(()=>{
const weights=[.35,.25,.20,.15,.05];
const clamp=(x,a,b)=>Math.max(a,Math.min(b,x));
const round=x=>Math.round((x+1e-9)*10)/10;
const penalty=(attempts,units=1)=>round(Math.min(2.4,.3*Math.max(0,Number(attempts)/Math.max(1,units)-1)));
function grade(base,attempts,units=1){base=clamp(Number(base)||0,0,10);return base===0?0:round(Math.max(Math.min(.5,base),base-penalty(attempts,units)))}
function rubric(scores){return round(scores.reduce((a,x,i)=>a+clamp(Number(x)||0,0,10)*weights[i],0))}
function code(first,last,id,attempts,base){const b=String(Math.round(clamp(Number(base)||0,0,10)*10)).padStart(3,'0');return b+CE04.code(first,last,id,attempts,'v05:'+b).slice(-5)}
function decode(raw,first,last,id,attempts){const c=String(raw).replace(/\s/g,'');if(!/^\d{8}$/.test(c)||Number(c.slice(0,3))>100)return null;const b=Number(c.slice(0,3))/10;return c===code(first,last,id,attempts,b)?b:null}
const items=[
['headphones','headphones','archive','bright','Noa'],['printer','printers','library','quiet','Ari'],['router','routers','workshop','busy','Sam'],['camera','cameras','classroom','ready','Dani'],['tablet','tablets','office','new','Robin'],['switch','switches','warehouse','safe','Toni'],['sensor','sensors','studio','clean','Sasha'],['projector','projectors','control room','open','Cris'],['microphone','microphones','training centre','empty','Eva']
];
const Q=(kind,instruction,prompt,answers,extra={})=>({kind,instruction,prompt,answers,...extra});
function instruction(p){if(/^Translate/i.test(p))return 'Traduce al inglés la frase completa; comprueba el sujeto, el verbo y los posesivos.';if(/negative|negatively/i.test(p))return 'Usa una negación o respuesta negativa completa según el enunciado.';if(/question|ask whether|ask about|ask using/i.test(p))return 'Formula una pregunta: coloca el verbo adecuado delante del sujeto.';if(/pronoun|replace the subject/i.test(p))return 'Sustituye el sujeto por el pronombre personal adecuado y conserva el resto.';if(/correct|rewrite/i.test(p))return 'Corrige la frase entera, sin cambiar su significado salvo que el enunciado indique que es falsa.';if(/respond|answer|where|whose|what|who|which|^are |^is /i.test(p))return 'Lee los datos del texto y responde en inglés según lo que se pide.';return 'Lee el enunciado y escribe la respuesta completa en inglés.'}
function extras(m,variant){const n=Number(m.id.slice(-2)),[a,ap,place,adj,name]=items[(variant+n)%items.length];const gender=n%2===0;
const orderSentence=n%3===0?'Where are the '+ap+'?':n%3===1?'Our '+ap+' are in the '+place+'.':'The '+place+' is not '+adj+'.';
const tokens=orderSentence.trim().replace(/[.?]$/,'').split(' ');let scrambled=tokens.slice(1).reverse().concat(tokens[0]);if(scrambled.join(' ')===tokens.join(' '))scrambled.push(scrambled.shift());
const order=Q('order','Pulsa las palabras en el orden correcto. Usa Deshacer o Reiniciar si te equivocas.','Reconstruye la frase en inglés.',[orderSentence],{tokens:scrambled});
const trans=n%2===0?Q('write','Transforma la afirmativa en interrogativa sin cambiar la información.','The '+place+' is '+adj+'.',['Is the '+place+' '+adj+'?']):Q('write','Transforma la afirmativa en negativa. Se acepta la forma completa o contraída.','The '+ap+' are '+adj+'.',['The '+ap+' are not '+adj+'.','The '+ap+' aren’t '+adj+'.']);
const gen=gender?Q('write','Cambia el referente masculino a femenino (pronombre y posesivo); conserva los demás elementos.','He is '+adj+' and his '+a+' is new.',['She is '+adj+' and her '+a+' is new.']):Q('write','Cambia el sujeto singular a plural; ajusta el verbo y el sustantivo.','The '+(a==='headphones'?'device':a)+' is '+adj+'.',['The '+(a==='headphones'?'devices':ap)+' are '+adj+'.']);
const fill=Q('select','Elige la forma correcta de to be para completar la frase.','Our '+ap+' ___ in the '+place+'.',['are'],{options:['am','is','are']});
return [order,trans,gen,fill]}
function task(m,variant){const base=CE04.variants(m,variant);return {...base,questions:base.questions.map(q=>({...q,kind:'write',instruction:instruction(q.prompt)})).concat(extras(m,variant))}}
const totalAttempts=states=>Object.values(states).reduce((a,r)=>a+Math.max(1,Number(r.tries)||0),0);
return {penalty,grade,rubric,code,decode,task,totalAttempts,round,weights};
})();