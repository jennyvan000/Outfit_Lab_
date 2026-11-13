/* ================= 1. APP: closet, Fit Roulette gacha, colours, lookbook, community ================= */
const $=s=>document.querySelector(s),R=a=>a[Math.random()*a.length|0];
const esc=s=>String(s).replace(/[&<>"]/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;'}[c]));
const ld=(k,d)=>{try{return JSON.parse(localStorage.getItem(k))||d}catch(e){return d}},sv=(k,v)=>{try{localStorage.setItem(k,JSON.stringify(v))}catch(e){}};
const CATS=['top','bottom','shoes','bag','head','neck','tie','glasses','acc'],OPT=['bag','head','neck','tie','glasses','acc'],LAB={top:'TOPS',bottom:'BOTTOMS',shoes:'SHOES',bag:'BAG',head:'CAP',neck:'SCARF',tie:'TIE',glasses:'GLASSES',acc:'ACCESSORY'},CN={top:'Top',bottom:'Bottom',shoes:'Shoes',bag:'Bag',head:'Cap',neck:'Scarf',tie:'Tie',glasses:'Glasses',acc:'Accessory'};
const QBG=[['#ff2e93','#fff'],['#ffe94d','#111'],['#bfe5da','#111'],['#f3f1b9','#111'],['#ffc2d8','#111'],['#d6efd0','#111'],['#f6f3c6','#111'],['#2b3a67','#fff']];
const NM={top:['Oversized tee','Knit polo','Boxy sweatshirt','Denim jacket'],bottom:['Wide denim','Pleated skirt','Cargo pants','Striped trousers'],shoes:['Bit loafers','Metallic sneakers','Canvas sneakers'],bag:['Mini shoulder bag','Canvas tote'],head:['Baseball cap','Beret'],neck:['Printed scarf','Knit scarf'],tie:['Striped tie','Knit tie'],glasses:['Round sunglasses','Clear frames'],acc:['Silver bracelet','Chunky ring']};
const STY={chill:{en:'CHILL',hand:'ゆるっと、いこう。',copy:'Easy, breezy, flower-field energy.',mood:['☁️','Easy breezy','Take a slow walk and buy a melon soda.'],top:['#ffffff','#a8e3da','#f4efe0'],bottom:['#1f2d4d','#2b3a67','#e8e2d0'],shoes:['#8a1f2d','#14463f','#ffffff'],bag:['#c8282d','#f2e04a'],head:['#c8282d','#1f2d4d'],neck:['#c8282d','#ff2e93']},
girly:{en:'SWEET',hand:'ちょっと、あまく。',copy:'Soft pinks with one bright accent.',mood:['🎀','Sweet and shiny','Message a friend something kind.'],top:['#f2c6d4','#ffffff','#fbe7a1'],bottom:['#c8282d','#6fcfc3','#ffffff'],shoes:['#ffffff','#c8282d','#e6b3c2'],bag:['#f2e04a','#c8282d'],head:['#e6b3c2','#ffffff'],neck:['#f2e04a','#c8282d']},
street:{en:'STREET',hand:'堂々と、歩こう。',copy:'Loose shapes, main-character walk.',mood:['🛹','Main character','Walk like the crosswalk is your runway.'],top:['#3b3f4a','#8a9a5b','#d9d4c5'],bottom:['#4a5a3a','#222831','#9fb4c7'],shoes:['#c0c7cf','#ffffff','#222831'],bag:['#222831','#8a9a5b'],head:['#222831','#9fb4c7'],neck:['#c8282d','#222831']},
clean:{en:'CLEAN',hand:'しずかに、きれいに。',copy:'Calm tones, tidy lines.',mood:['🌿','Calm and polished','Tidy your bag first, then your day.'],top:['#ffffff','#d9cdb8','#a8e3da'],bottom:['#2b3a67','#d9cdb8','#14463f'],shoes:['#14463f','#222831','#ffffff'],bag:['#d9cdb8','#14463f'],head:['#2b3a67','#d9cdb8'],neck:['#d9cdb8','#ff2e93']}};
const PAL=[['Sakura Milk',['#e6b3c2','#ffe94d','#f6e9ee']],['Sea Glass',['#5fd0c4','#ffe94d','#fff0f5']],['Butter Cream',['#f2e04a','#8fd3e8','#fbf6d6']],['Matcha Latte',['#9bb88a','#d9cdb8','#f2e04a']],['Showa Cafe',['#d9784a','#f2e04a','#d9cdb8']],['Lavender Dusk',['#a9a4f0','#f2c6d4','#e9e6fb']],['Open Sea',['#ff2e93','#ffe94d','#fff0f5']]];
const QUOTES=[['Dress like today is the good day.','今日がいい日になるように。'],['Soft colours, strong walk.','やさしい色、つよい歩き方。'],['Wear the thing you keep saving for later.','とっておきは、今日着よう。'],['A little blue goes a long way.','ちょっとの青が効く。'],['Simple is not boring, it is calm.','シンプルは、落ち着き。'],['Your outfit is the first sentence.','コーデは、最初のひとこと。'],['Walk like the crosswalk is yours.','横断歩道は、あなたのもの。'],['Make room for one small joy.','小さな嬉しいを、探そう。']];
const G={top:'M30 14L42 10Q50 22 58 10L70 14L92 34L80 46L72 40V90H28V40L20 46L8 34Z',pants:'M26 6H74L80 94H56L50 42L44 94H20Z',skirt:'M32 8H68L94 92H6Z',shoes:'M6 58Q6 40 26 40L40 48Q62 50 82 56Q96 60 96 72V80H6Z',bag:'M24 38H76V90H24ZM34 38V28Q50 12 66 28V38',head:'M12 62Q12 20 50 20Q84 20 86 62ZM58 62H98Q98 72 60 72Z',neck:'M8 16H92L70 52L56 92H44L30 52Z',glasses:'M4 36H96V50Q96 66 78 66Q60 66 56 48H44Q40 66 22 66Q4 66 4 50Z',tie:'M40 4H60L64 22L58 28L74 88L50 98L26 88L42 28L36 22Z',acc:'M50 12A38 38 0 1 0 50 88A38 38 0 1 0 50 12ZM50 28A22 22 0 1 1 50 72A22 22 0 1 1 50 28Z'};
const SF={head:[270,104,100,80,8],top:[66,104,190,180,-4],bottom:[150,212,160,200,3],shoes:[24,330,134,96,-6],bag:[262,334,112,100,5],neck:[16,236,100,96,-10],tie:[190,130,70,100,0],glasses:[268,184,100,100,6],acc:[190,392,60,60,0]};
const SM={head:[296,98,80,64,6],top:[300,160,88,88,3],bottom:[300,252,88,96,-3],shoes:[296,350,92,66,4],bag:[8,364,88,88,-6],neck:[12,96,90,76,-8],tie:[10,278,60,90,-4],glasses:[10,186,96,96,-6],acc:[100,372,60,60,0]};
const BL='M60 108H270A70 70 0 0 1 340 178V410H130A70 70 0 0 1 60 340Z';
const hx=(r,g,b)=>'#'+[r,g,b].map(v=>Math.round(v).toString(16).padStart(2,'0')).join('');
function hs(h){const[r,g,b]=[1,3,5].map(i=>parseInt(h.substr(i,2),16)/255),M=Math.max(r,g,b),m=Math.min(r,g,b),d=M-m;let H=0;if(d){H=M==r?((g-b)/d)%6:M==g?(b-r)/d+2:(r-g)/d+4;H=(H*60+360)%360}return[H,M?d/M:0]}
function hsl(h,s,l){h=((h%360)+360)%360;const a=s*Math.min(l,1-l),f=n=>{const k=(n+h/30)%12;return(l-a*Math.max(-1,Math.min(k-3,9-k,1)))*255};return hx(f(0),f(8),f(4))}
const hd=(a,b)=>{const d=Math.abs(a-b)%360;return d>180?360-d:d};
function cutout(img,tol){const M=380,s=Math.min(1,M/Math.max(img.width,img.height)),w=Math.max(1,img.width*s|0),h=Math.max(1,img.height*s|0),c=document.createElement('canvas');c.width=w;c.height=h;
 const x=c.getContext('2d',{willReadFrequently:true});x.drawImage(img,0,0,w,h);const d=x.getImageData(0,0,w,h),p=d.data;
 if(tol>0){let br=0,bg=0,bb=0;[[0,0],[w-1,0],[0,h-1],[w-1,h-1]].forEach(([a,b])=>{const i=(b*w+a)*4;br+=p[i]/4;bg+=p[i+1]/4;bb+=p[i+2]/4});
  const seen=new Uint8Array(w*h),q=[],push=i=>{if(!seen[i]&&Math.hypot(p[i*4]-br,p[i*4+1]-bg,p[i*4+2]-bb)<tol){seen[i]=1;q.push(i)}};
  for(let a=0;a<w;a++){push(a);push((h-1)*w+a)}for(let b=0;b<h;b++){push(b*w);push(b*w+w-1)}
  while(q.length){const i=q.pop();p[i*4+3]=0;const a=i%w;if(a>0)push(i-1);if(a<w-1)push(i+1);if(i>=w)push(i-w);if(i<w*(h-1))push(i+w)}}
 let x0=w,y0=h,x1=0,y1=0,r=0,g=0,b=0,n=0;
 for(let i=0;i<w*h;i++)if(p[i*4+3]>0){const a=i%w,e=i/w|0;if(a<x0)x0=a;if(a>x1)x1=a;if(e<y0)y0=e;if(e>y1)y1=e;r+=p[i*4];g+=p[i*4+1];b+=p[i*4+2];n++}
 if(!n)return{src:c.toDataURL(),color:'#888888'};x.putImageData(d,0,0);const bw=x1-x0+1,bh=y1-y0+1,o=document.createElement('canvas');o.width=bw;o.height=bh;o.getContext('2d').drawImage(c,x0,y0,bw,bh,0,0,bw,bh);
 const bd=[0,0,0,0];let gc=0;for(let i=0;i<w*h;i++)if(p[i*4+3]>0){const a=i%w,e=i/w|0;if(a<x0||a>x1||e<y0||e>y1)continue;const k=Math.min(3,((e-y0)*4/bh)|0);bd[k]++;if(k==3&&Math.abs(a-(x0+x1)/2)<bw*.1)gc++}
 const q=bw*bh/4;return{src:o.toDataURL('image/png'),color:hx(r/n,g/n,b/n),ar:bw/bh,fill:n/(bw*bh),bd:bd.map(v=>v/q),gap:gc/Math.max(1,bw*.2*bh/4)}}
function guess(r,fn){const n=(fn||'').toLowerCase().replace(/[_\-.\d]+/g,' '),K=[['shoes',/\b(shoe|sneaker|boot|loafer|heel|sandal|trainer)s?\b/],['bottom',/\b(pant|jean|denim|trouser|skirt|short|legging|chino|cargo)s?\b/],['bag',/\b(bag|tote|purse|backpack|clutch)s?\b/],['head',/\b(cap|hat|beanie|beret|bucket)s?\b/],['neck',/\b(scarf|scarves|muffler|shawl)\b/],['glasses',/\b(glass|glasses|sunnies|shades|eyewear)\b/],['tie',/\b(tie|necktie|bowtie)s?\b/],['acc',/\b(watch|belt|bracelet|ring|necklace|earring|jewelry|accessory|sock|glove)s?\b/],['top',/\b(shirt|tee|top|jacket|hoodie|sweater|knit|polo|dress|coat|cardigan|blouse)s?\b/]];
 for(const[c,re]of K)if(re.test(n))return c;
 const a=r.ar||1,f=r.fill||.6,b=r.bd||[.5,.5,.5,.5];
 if(a>2.3)return f<.62?'glasses':'acc';if(a<.36)return 'tie';if(a>=1.5)return 'shoes';
 if(a>=1.1)return b[0]<b[3]*.85&&f>.6?'head':'top';
 if(a<.62||(r.gap<.5&&a<1))return 'bottom';if(b[0]<b[1]*.75&&f>.65)return 'bag';return 'top'}
function shrink(img,M=560){const s=Math.min(1,M/Math.max(img.width,img.height)),c=document.createElement('canvas');c.width=img.width*s;c.height=img.height*s;c.getContext('2d').drawImage(img,0,0,c.width,c.height);return c.toDataURL('image/jpeg',.82)}
let uidn=0;const uid=()=>'m'+uidn++;
function svg(L){const k=uid(),P=L.pal,I=L.items,D=STY[L.st],SL=L.model?SM:SF,nm=c=>I[c]?esc(I[c].name):'';
 let o=`<svg class="sp" viewBox="0 0 400 560" role="img" aria-label="Outfit spread"><defs><clipPath id="${k}"><path d="${BL}"/></clipPath></defs><rect width="400" height="560" fill="#fff"/>`+[[392,16],[392,34],[362,54],[326,78],[284,92],[240,98]].map(q=>`<rect x="${q[0]-6}" y="${q[1]}" width="6" height="6" fill="${P[0]}"/>`).join('')+`<path d="${BL}" fill="${P[0]}"/>`+
 (L.model?`<image href="${L.model}" x="50" y="100" width="300" height="316" preserveAspectRatio="xMidYMid slice" clip-path="url(#${k})"/>`:'')+
 `<text x="16" y="44" font-size="32" style="font-family:'Space Mono',sans-serif;font-weight:900" fill="#111">Today’s Look</text><text x="16" y="60" font-size="8.2" letter-spacing=".8" fill="#111">OUTFIT LAB · AW26 · ${D.en}</text><text x="6" y="108" style="writing-mode:vertical-rl" font-size="7.7" letter-spacing=".8" fill="#111" opacity=".7">${esc(D.copy)}</text>`;
 let n=0;['bottom','top','tie','shoes','bag','head','neck','glasses','acc'].forEach(c=>{const it=I[c];if(!it)return;const[x,y,w,h,r]=SL[c];n++;
  o+=`<g transform="rotate(${r} ${x+w/2} ${y+h/2})" filter="url(#st)">`+(it.src?`<image href="${it.src}" x="${x}" y="${y}" width="${w}" height="${h}" preserveAspectRatio="xMidYMid meet"/>`:`<svg x="${x}" y="${y}" width="${w}" height="${h}" viewBox="0 0 100 100"><g filter="url(#fab)"><path fill-rule="evenodd" d="${G[it.kind]}" fill="${it.color}"/><path fill-rule="evenodd" d="${G[it.kind]}" fill="url(#sh)"/></g><path d="M50 14V86" stroke="#0002" stroke-width="1" stroke-dasharray="3 2" fill="none"/></svg>`)+`</g>`;
  o+=`<rect x="${x+2}" y="${y+h-14}" width="12" height="12" fill="#fff" stroke="#111"/><text x="${x+8}" y="${y+h-5}" font-size="8.8" text-anchor="middle">${n}</text>`;
  if(it.src)o+=`<rect x="${x+w-34}" y="${y}" width="34" height="12" fill="#111"/><text x="${x+w-17}" y="${y+9}" font-size="7.7" fill="#fff" text-anchor="middle" letter-spacing=".8">マイ</text>`});
 const ac=nm('bag')||nm('head')||nm('neck')||nm('glasses')||nm('acc');
 o+=`<text x="352" y="116" font-size="8.8" letter-spacing=".8" transform="rotate(90 352 116)">${D.en}</text><line x1="14" x2="386" y1="448" y2="448" stroke="#111" stroke-width="1"/>`+
 `<text x="14" y="468" font-size="8.8" letter-spacing=".8">HOW TO WEAR</text>`+
 `<text font-size="8.8" letter-spacing=".8"><tspan x="14" y="490">01 / ${nm('top')}</tspan><tspan x="14" y="504">02 / ${nm('bottom')}</tspan><tspan x="14" y="518">03 / ${nm('shoes')}</tspan><tspan x="14" y="532">04 / ${ac||'a little colour'}</tspan></text>`+
 `<text x="214" y="468" font-size="8.8" letter-spacing=".8">TAGS</text><text font-size="8.8" letter-spacing=".8"><tspan x="214" y="490">#${D.en.toLowerCase()} #aw26</tspan><tspan x="214" y="504">#freshfit #outfitlab</tspan></text>`+
 `<text x="214" y="530" style="font-family:'Zen Kurenaido',cursive" font-size="17.6" transform="rotate(-4 214 530)">${D.hand}</text>`+P.map((c,i)=>`<rect x="${344+i*14}" y="524" width="9" height="9" fill="${c}" stroke="#111" stroke-width=".8"/>`).join('');
 return o+'</svg>'}
function mood(){return `<svg class="ps" viewBox="0 0 1200 600" role="img" aria-label="Outfit Lab poster"><defs><filter id="wc" x="-15%" y="-15%" width="130%" height="130%"><feTurbulence type="fractalNoise" baseFrequency=".009 .013" numOctaves="3" seed="12" result="n"/><feDisplacementMap in="SourceGraphic" in2="n" scale="90" result="d"/><feGaussianBlur in="d" stdDeviation="18"/></filter><clipPath id="pc"><rect x="40" y="90" width="820" height="470"/></clipPath></defs><rect width="1200" height="600" fill="#fff"/><g clip-path="url(#pc)"><rect x="40" y="90" width="820" height="470" fill="#d3ecef"/><g filter="url(#wc)"><ellipse cx="760" cy="200" rx="250" ry="130" fill="#ffc2d8"/><ellipse cx="260" cy="260" rx="240" ry="150" fill="#f3f1b9" opacity=".85"/><ellipse cx="620" cy="470" rx="260" ry="120" fill="#bfe5da"/><ellipse cx="200" cy="520" rx="220" ry="100" fill="#d6efd0"/><ellipse cx="520" cy="150" rx="130" ry="80" fill="#f6f3c6" opacity=".8"/></g><circle cx="770" cy="410" r="72" fill="none" stroke="#fff" stroke-width="1.5" opacity=".85"/></g>`+
`<text x="335" y="515" style="font-family:'Zen Old Mincho',serif" font-size="230" fill="#ff2e93" opacity=".9" text-anchor="middle">着</text><rect x="1010" y="0" width="190" height="40" fill="#ff2e93"/><rect x="500" y="124" width="88" height="88" fill="#ff2e93" opacity=".85"/><rect x="0" y="470" width="170" height="130" fill="#ff2e93"/><text x="85" y="526" font-size="12" fill="#fff" text-anchor="middle" letter-spacing="4">AW26</text><text x="85" y="548" font-size="11" fill="#fff" text-anchor="middle" letter-spacing="3">VOL.021</text>`+
`<text x="40" y="54" font-size="11" letter-spacing="7" fill="#111">OUTFIT LAB <tspan font-size="9" fill="#777">PRESENTS</tspan></text><text x="690" y="66" style="font-family:'Zen Kurenaido',cursive" font-size="22" fill="#ff2e93" transform="rotate(-3 690 66)">cute little ♡</text>`+
`<text x="916" y="120" style="writing-mode:vertical-rl;font-family:'Zen Old Mincho',serif" font-size="28" letter-spacing="8" fill="#222">かわいくて、あおい</text><text x="630" y="130" style="writing-mode:vertical-rl;font-family:'Zen Old Mincho',serif" font-size="32" letter-spacing="8" fill="#222">わたしの服に</text>`+
`<text x="452" y="340" font-size="12" letter-spacing="5" fill="#111">MIX × MATCH</text><line x1="452" x2="580" y1="349" y2="349" stroke="#111" stroke-width="1"/>`+
`<text x="902" y="448" font-size="14" letter-spacing="9" font-weight="500" fill="#111">OUTFIT LAB</text><text x="902" y="470" font-size="14" letter-spacing="9" font-weight="500" fill="#111">WARDROBE</text><text x="902" y="490" font-size="8" letter-spacing="4" fill="#777">UPLOAD · MIX · WEAR</text></svg>`}
const ALT={chill:'LADYLIKE',girly:'SWEET POP',street:'WIDE PANTS',clean:'MINIMAL'},JPH={chill:'ゆるさを一点、が成功の鍵。',girly:'甘さは一点だけ、がちょうどいい。',street:'ストリート派なら、ワイドパンツ。',clean:'きれいめは、色を絞るのがコツ。'},JPS={chill:'力を抜いて、軽やかに。',girly:'ちょっと甘く、かわいく。',street:'堂々と歩こう。',clean:'静かに、きれいに。'};
const price=q=>{let h=0;for(const c of q)h=(h*31+c.charCodeAt(0))%9973;return '¥'+(2000+h%90*100).toLocaleString('en-US')};
function pn(list,bg,vb='0 0 400 400'){return `<svg class="pn" viewBox="${vb}" preserveAspectRatio="xMidYMid meet" style="background:${bg}" role="img" aria-label="Outfit detail">`+list.filter(l=>l[0]).map(([it,x,y,w,h])=>`<g filter="url(#st)">`+(it.src?`<image href="${it.src}" x="${x}" y="${y}" width="${w}" height="${h}" preserveAspectRatio="xMidYMid meet"/>`:`<svg x="${x}" y="${y}" width="${w}" height="${h}" viewBox="0 0 100 100"><g filter="url(#fab)"><path fill-rule="evenodd" d="${G[it.kind]}" fill="${it.color}"/><path fill-rule="evenodd" d="${G[it.kind]}" fill="url(#sh)"/></g></svg>`)+`</g>`).join('')+`</svg>`}
let MV=-1;
const dt=id=>{const t=+String(id).slice(1),d=isNaN(t)?new Date():new Date(t);return String(d.getMonth()+1).padStart(2,'0')+'.'+String(d.getDate()).padStart(2,'0')};
const STK={chill:'sock',girly:'bow',street:'shoe',clean:'hang'};
function mag(){const L=(MV>=0&&LB[MV])?LB[MV].L:CUR,I=L.items,P=L.pal,D=STY[L.st],nm=c=>I[c]?esc(I[c].name):'—',acc=['bag','head','neck','acc','glasses','tie'].find(c=>I[c]),no=MV<0?'NOW':String(MV+1).padStart(2,'0');
 const A=L.model?`<img class="pn" src="${L.model}" alt="Model photo">`:pn([[I.bottom,300,160,190,220],[I.top,190,16,220,200]],P[1],'0 0 560 400');
 const sl=t=>'#'+String(t).replace(/[^\w]+/g,''),tg=['#'+D.en.toLowerCase(),'#aw26','#outfitlab','#vol2026',...CATS.filter(c=>I[c]).map(c=>sl(I[c].name)),'#きょうのコーデ','#ゆるコーデ','#足元','#配色','#着回し','#cutelittle','#fitroulette','#ワイドパンツ','#小物','#thrifted','#シンプル','#ぬけ感','#ootd','#ちいさな幸せ','#もっと自由に'].filter(t=>t.length>1);
 return `<div class="mg a"><div class="cover">${A}<div class="ctitle">${esc(D.hand)}</div><div class="ccap">${esc(D.copy)}<br>${nm('top')} × ${nm('bottom')}</div></div></div>
 <div class="mg b"><div class="ph">${pn([[I.shoes,70,60,300,250]],P[2],'0 0 560 400')}</div><div class="date"><small>ルック</small><b>${no}</b><em>${D.en}</em><div class="dn"><button data-mv="-1" aria-label="Previous look">◀</button><button data-mv="1" aria-label="Next look">▶</button></div></div><span class="cred">靴 / ${nm('shoes')}</span></div>
 <div class="mg c"><div class="idx"><span class="out">OUTFIT<br>LAB.</span><b>コーデ INDEX</b><a href="#saved">～あれこれの<br>ルックリスト ↓</a></div></div>
 <div class="mg d"><p>${JPH[L.st]}<br>${nm('bottom')}でボリュームのバランスを。トップスは前だけインして、ウエストをすっきり。</p><small>POINT_02 / ${nm('top')}</small></div>
 <div class="mg e"><span class="lt">コラム</span><div class="ph">${pn(acc?[[I[acc],150,50,260,260]]:[[I.top,130,30,300,330]],P[1],'0 0 560 400')}</div></div>
 <div class="mg f"><svg class="bs" viewBox="0 0 100 100" aria-hidden="true"><use href="#k-${STK[L.st]}"/></svg><small>ステッカー by Outfit Lab</small></div>
 <div class="mg g"><div class="tags">${tg.map((t,i)=>`<span style="font-size:${[12,14,18,22][(i*7+3)%4]}px">${esc(t)}</span>`).join(' ')}</div><svg class="stk" style="right:-8px;top:-40px;--w:66px;--r:6deg" viewBox="0 0 100 100" aria-hidden="true"><use href="#k-hang"/></svg><span class="lt r">TAG タグ</span></div>`}
let S={st:'chill',pal:0,tol:45,lock:{},model:null,acc:null},CLO=[],CUR=null,LB=ld('cd_lb',[]),MINE=ld('cd_posts',[]),POSTS=[],QO=0;
function gen(c,st=S.st,avoid){const D=STY[st];let col,t=0;do col=Math.random()<.35?R(PAL[S.pal][1]):R(D[c]||D.neck);while(t++<8&&avoid&&hs(col)[1]>.25&&hd(hs(col)[0],avoid)<35);
 return{cat:c,color:col,kind:c=='bottom'?R(['pants','skirt']):c,name:R(NM[c])}}
const ref=()=>{const u=CLO[0];return u?hs(u.p.color)[0]:null};
function roll(c){if(S.lock[c])return;const u=CLO.filter(i=>i.cat==c),opt=OPT.includes(c);
 CUR.items[c]=u.length&&Math.random()<.8?R(u).p:opt&&Math.random()<.4?null:gen(c,S.st,ref())}
function chaos(){const ks=Object.keys(STY);S.pal=Math.random()*PAL.length|0;CATS.forEach(c=>{if(S.lock[c])return;const u=CLO.filter(i=>i.cat==c);CUR.items[c]=u.length&&Math.random()<.35?R(u).p:OPT.includes(c)&&Math.random()<.2?null:{...gen(c,R(ks)),color:hsl(Math.random()*360,.7,.55)}})}
function all(){CATS.forEach(roll)}
function recolor(){CATS.forEach(c=>{const it=CUR.items[c];if(it&&!it.user&&!S.lock[c])it.color=gen(c,S.st,ref()).color})}
function sync(){CUR.st=S.st;CUR.pal=PAL[S.pal][1];CUR.model=S.model}
function seedLook(){const st=R(Object.keys(STY)),pi=Math.random()*PAL.length|0,items={};CATS.forEach(c=>items[c]=OPT.includes(c)&&Math.random()<.5?null:gen(c,st));return{st,pal:PAL[pi][1],items,model:null}}
const H=['s.N','mina_tokyo','haru.k','nanami','yuu_09','kokoro','sora.fit'],CP=['Chill but make it weird','Thrifted the denim!','Weekend walk fit','Wore this wrong on purpose','Sunday fit','Colour matching practice'],CMT=['So cute!','Where is the bag from?','ate. no crumbs.','Trying this tomorrow','Love the colours'];
function seed(){POSTS=[...MINE];for(let i=0;i<7;i++)POSTS.push({id:'s'+i,L:seedLook(),by:H[i],cap:CP[i%CP.length],likes:8+Math.random()*190|0,liked:0,cm:[[R(H),R(CMT)]]})}
const nm=c=>CUR.items[c]?esc(CUR.items[c].name):'—';
function sc(c){const it=CUR.items[c];return `<div class="sl ${S.lock[c]?'lk':''}"><div class="lab">${LAB[c]}</div><div class="bd">${it?`<div class="th">${it.src?`<img src="${it.src}" alt="">`:`<i style="background:${it.color}"></i>`}</div><b>${esc(it.name)}</b><small>${it.user?'Your photo':'Suggested'}</small>`:'<b>None</b>'}<div class="tl"><button data-r="${c}" aria-label="Re-roll ${LAB[c]}">🎲</button><button data-k="${c}" aria-pressed="${!!S.lock[c]}">${S.lock[c]?'🔒 Locked':'🔓 Lock'}</button></div></div></div>`}
function view(pop){sync();
 const trs=S.tray?CLO:CLO.slice(0,3),cnt={};CLO.forEach(i=>cnt[i.cat]=(cnt[i.cat]||0)+1);
 $('#cgrid').innerHTML=CATS.map(c=>`<label class="cd ${cnt[c]?'has':''}" data-cat="${c}"><input type="file" accept="image/*" multiple data-cat="${c}"><b>＋</b><span>${CN[c]}</span><small>${cnt[c]?cnt[c]+' added':'Drop or tap'}</small></label>`).join('');
 $('#tray').className='tray'+(S.tray?' open':'');
 $('#tray').innerHTML=trs.map((it,i)=>`<div class="it"><img src="${it.img.src}" alt=""><select data-i="${i}" aria-label="Category">${CATS.map(c=>`<option value="${c}" ${c==it.cat?'selected':''}>${CN[c]}</option>`).join('')}</select><button data-rm="${i}" aria-label="Remove">×</button></div>`).join('');
 $('#tinfo').innerHTML=(AIN?`<span class="note">Sorting ${AIN} photo${AIN>1?'s':''} with Claude…</span>`:'')+(CLO.length?`<div class="row">${Object.entries(cnt).map(([c,n])=>`<span class="tg">${CN[c]} ${n}</span>`).join('')}</div>`:'')+(CLO.length>3?`<button class="btn" data-g="tray" aria-expanded="${!!S.tray}">${S.tray?'▲ Show less':'▼ Show all '+CLO.length+' items'}</button>`:'');
 $('#styles').innerHTML=Object.entries(STY).map(([k,v])=>`<button class="pill ${k==S.st?'on':''}" data-s="${k}">${v.en}</button>`).join('');
 $('#pals').innerHTML=PAL.map((p,i)=>`<button class="sw ${i==S.pal?'on':''}" data-p="${i}" aria-label="${p[0]}">${p[1].map(c=>`<span style="background:${c}"></span>`).join('')}</button>`).join('');$('#pn').textContent=PAL[S.pal][0];
 $('#L').innerHTML=['head','neck','top','tie'].map(sc).join('');$('#R').innerHTML=['bottom','shoes','bag','glasses','acc'].map(sc).join('');
 $('#prev').innerHTML=svg(CUR);$('#mag').innerHTML=mag();$('#cap').innerHTML=`<em>${nm('top')} + ${nm('bottom')}</em><br>${STY[S.st].copy}`;
 if(pop){const s=$('#stage');s.classList.remove('pop');void s.offsetWidth;s.classList.add('pop')}
 const an=CUR.items[S.an]?S.an:(CATS.find(c=>CUR.items[c])||'top'),ai=CUR.items[an]||{color:'#ff2e93'},[H0]=hs(ai.color);
 $('#cb').textContent=LAB[an].toLowerCase()+(ai.user?' (your photo)':'');$('#cpv').innerHTML=svg(CUR);
 $('#can').innerHTML=CATS.filter(c=>CUR.items[c]).map(c=>`<button class="cc ${c==an?'on':''}" data-an="${c}"><i style="background:${CUR.items[c].color}"></i>${CN[c]}</button>`).join('');
 const rgb=h=>[1,3,5].map(i=>parseInt(h.substr(i,2),16)),cd=(a,b)=>{const x=rgb(a),y=rgb(b);return Math.hypot(x[0]-y[0],x[1]-y[1],x[2]-y[2])};
 const CB=[['01','Complement',[ai.color,hsl(H0+180,.5,.55),'#f3f0e6']],['02','Analogous',[ai.color,hsl(H0+30,.45,.6),hsl(H0-30,.45,.6)]],['03','Triad',[ai.color,hsl(H0+120,.5,.55),hsl(H0+240,.5,.55)]],['04','Tone on tone',[ai.color,hsl(H0,.4,.85),hsl(H0,.45,.28)]],['05','Neutral base',[ai.color,'#f3f0e6','#2b3a67']],['06','Soft beige',[ai.color,'#d9cdb8','#f3f0e6']]],ci=Math.min(S.cb||0,CB.length-1),cs=CB[ci][2];
 $('#cmb').innerHTML=CB.map((c,i)=>`<button class="cmo ${i==ci?'on':''}" data-cb="${i}"><span class="sws">${c[2].map(x=>`<i style="background:${x}"></i>`).join('')}</span><b>${c[0]}</b><small>${c[1]}</small></button>`).join('');
 const oth=CLO.filter(i=>i.p&&i.p!==CUR.items[an]&&i.cat!=an);
 $('#cmt').innerHTML=cs.slice(1).map(col=>{const m=oth.map(i=>[i,cd(col,i.p.color)]).sort((a,b)=>a[1]-b[1]).slice(0,3);
  return `<div class="crow"><i class="cs" style="background:${col}"></i><b>${col.toUpperCase()}</b>${m.length?`<span class="mt">${m.map(([i,d])=>`<button class="mi" data-sw="${i.id}" title="Try this piece"><img src="${i.p.src}" alt=""><small>${d<60?'◎':d<110?'○':'△'} ${CN[i.cat]}</small></button>`).join('')}</span>`:`<span class="note">${CLO.length?'No other pieces in your closet yet.':'Add photos to see closet matches.'}</span>`}<button class="btn" data-c="${col}">Paint suggested</button></div>`}).join('');
 $('#cbox').style.setProperty('--tint',hsl(H0,.6,.93));$('#cbox').style.setProperty('--tint2',hsl(H0,.55,.82));$('#cmsg').textContent=S.cm||'';
 const qi=(Math.floor((Date.now()-new Date(new Date().getFullYear(),0,0))/864e5)+QO)%QUOTES.length,q=QUOTES[qi],m=STY[S.st].mood,lis=CATS.filter(c=>CUR.items[c]),li=R(lis.length?lis:['top']),lit=CUR.items[li],lc=(CUR.items.bag||CUR.items.top||{color:'#ff2e93'}).color,bg=k=>{const b=QBG[(qi+k)%QBG.length];return `style="background:${b[0]};color:${b[1]};border-color:#e4e4e4"`};
 $('#strip').innerHTML=`<div class="fc quote" ${bg(0)}><small>今日のひとこと</small><q>${q[0]}</q><span class="hand">${q[1]}</span><button class="btn" data-g="quote">Another one</button></div><div class="fc"><small>ラッキーカラー</small><i class="big" style="background:${lc}"></i><b>${lc.toUpperCase()}</b><span>Let it peek out somewhere today.</span></div><div class="fc"><small>ラッキーアイテム</small>${lit&&lit.src?`<img src="${lit.src}" alt="">`:`<i class="big" style="background:${lit?lit.color:'#ccc'}"></i>`}<b>${lit?esc(lit.name):'—'}</b><span>Put it on first.</span></div><div class="fc"><small>今日のムード</small><b>${m[0]} ${m[1]}</b><span>${m[2]}</span></div>`;
 viewC()}
function viewC(){const ls=[$('#lb'),$('#feed')].map(e=>e.scrollLeft);$('#lb').innerHTML=LB.length?LB.map(p=>`<div class="post"><span class="lt">${dt(p.id)} UP</span>${svg(p.L)}<div class="act"><button data-ld="${p.id}">Open</button><button data-del="${p.id}">Delete</button></div></div>`).join(''):'<p class="empty">Your lookbook is empty. Press “Save to lookbook” on a look you like.</p>';
 $('#feed').innerHTML=POSTS.map(p=>`<article class="post">${svg(p.L)}<div class="meta"><b>@${esc(p.by)}</b> ${esc(p.cap||'')}</div><div class="act"><button data-lk="${p.id}" class="${p.liked?'on':''}">♥ ${p.likes}</button><button data-cmt="${p.id}">💬 ${p.cm.length}</button><button data-star="${p.id}">★ Save</button><button data-rx="${p.id}">Remix ↻</button></div>${p.open?`<div class="cms">${p.cm.map(c=>`<span><b>${esc(c[0])}</b> ${esc(c[1])}</span>`).join('')}<input type="text" data-ci="${p.id}" placeholder="Add a comment, press Enter" maxlength="80"></div>`:''}</article>`).join('');[$('#lb'),$('#feed')].forEach((e,i)=>e.scrollTo({left:ls[i],behavior:'instant'}))}
const copy=L=>JSON.parse(JSON.stringify(L)),find=id=>POSTS.find(p=>String(p.id)==id);
const keep=()=>sv('cd_lb',LB.slice(0,8));
document.addEventListener('click',e=>{const t=e.target.closest('button');if(!t)return;const d=t.dataset;let pop=0;
 if(d.r){roll(d.r);pop=1}else if(d.k)S.lock[d.k]=!S.lock[d.k];
 else if(d.s){S.st=d.s;all();pop=1}else if(d.p!==undefined){S.pal=+d.p;recolor()}
 else if(d.rm!==undefined){CLO.splice(+d.rm,1);CATS.forEach(c=>{if(CUR.items[c]&&CUR.items[c].user&&!CLO.some(i=>i.p.id==CUR.items[c].id))CUR.items[c]=gen(c)})}
 else if(d.mv){const n=LB.length+1;MV=((MV+1+ +d.mv)%n+n)%n-1}
 else if(d.an){S.an=d.an;S.cm=''}
 else if(d.cb!==undefined){S.cb=+d.cb;S.cm=''}
 else if(d.sw){const it=CLO.find(i=>i.id==d.sw);if(it){if(S.lock[it.cat])S.cm='That slot is locked. Unlock it first.';else{CUR.items[it.cat]=it.p;S.cm='Swapped in your '+CN[it.cat].toLowerCase()+' photo ✓'}}}
 else if(d.sc){const e=$('#'+d.sc);e.scrollBy({left:d.dir*e.clientWidth*.8,behavior:'smooth'});return}
 else if(d.c){const tg=CATS.filter(c=>c!=S.an&&CUR.items[c]&&!CUR.items[c].user&&!S.lock[c]);S.ap=(S.ap||0)+1;const o=tg[S.ap%tg.length];if(o){CUR.items[o].color=d.c;S.cm='Painted a suggested piece ✓ Tap again for the next one.'}else S.cm='Photos can’t be recoloured. Tap a closet match instead.'}
 else if(d.ld){CUR=copy(LB.find(p=>p.id==d.ld).L);S.st=CUR.st;S.model=CUR.model;location.hash='studio'}
 else if(d.del){LB=LB.filter(p=>p.id!=d.del);keep()}
 else if(d.lk){const p=find(d.lk);p.liked=!p.liked;p.likes+=p.liked?1:-1;sv('cd_posts',MINE)}
 else if(d.cmt){const p=find(d.cmt);p.open=!p.open}
 else if(d.star){LB.unshift({id:'b'+Date.now(),L:copy(find(d.star).L)});keep()}
 else if(d.rx){CUR=copy(find(d.rx).L);S.st=CUR.st;S.model=CUR.model;location.hash='studio';pop=1}
 else if(d.g){const g=d.g;
  if(g=='all'){all();pop=1}else if(g=='pal'){S.pal=(S.pal+1+Math.random()*(PAL.length-1)|0)%PAL.length;recolor()}
  else if(g=='style'){S.st=R(Object.keys(STY).filter(k=>k!=S.st));recolor();pop=1}
  else if(g=='feet'){roll('shoes');roll('bag');pop=1}else if(g=='chaos'){chaos();pop=1}
  else if(g=='save'){sync();LB.unshift({id:'b'+Date.now(),L:copy(CUR)});keep();t.textContent='Saved ✓'}
  else if(g=='share')$('#share').classList.toggle('open');
  else if(g=='post'){sync();const p={id:'u'+Date.now(),L:copy(CUR),by:$('#by').value.trim()||'you',cap:$('#cp').value.trim(),likes:0,liked:0,cm:[]};MINE.unshift(p);POSTS.unshift(p);sv('cd_posts',MINE.slice(0,6));$('#share').classList.remove('open');$('#cp').value='';view();location.hash='community';return}
  else if(g=='quote')QO++;else if(g=='nomodel')S.model=null;else if(g=='tray')S.tray=!S.tray}
 view(pop)});
document.addEventListener('keydown',e=>{if(e.code=='Space'&&e.target==document.body){e.preventDefault();all();view(1)}
 if(e.key=='Enter'&&e.target.dataset.ci){const p=find(e.target.dataset.ci),v=e.target.value.trim();if(v){p.cm.push([$('#by').value.trim()||'you',v]);sv('cd_posts',MINE);viewC()}}});
let AIN=0,AQ=Promise.resolve(),AIOFF=false;
async function aiCat(img){if(AIOFF||!window.claude||!claude.use)return null;try{const sm=await claude.use('sample');if(!sm)return AIOFF=true,null;const lm=await sm.limits();if(!lm||!lm.images)return AIOFF=true,null;const c=document.createElement('canvas'),k=Math.min(1,320/Math.max(img.width,img.height));c.width=Math.max(1,img.width*k);c.height=Math.max(1,img.height*k);const x=c.getContext('2d');x.fillStyle='#fff';x.fillRect(0,0,c.width,c.height);x.drawImage(img,0,0,c.width,c.height);const b=await new Promise(r=>c.toBlob(r,'image/jpeg',.8));
 const r=await sm('Classify the single clothing item or accessory in this photo. Reply with exactly one word from: top, bottom, shoes, bag, head, neck, tie, glasses, acc. top = shirts, jackets, dresses, knitwear. bottom = pants, skirts, shorts. shoes = shoes, boots, sneakers. bag = any handbag or backpack. head = hat or cap. neck = scarf. tie = necktie. glasses = eyewear. acc = jewellery, belt, watch, anything else.',{images:[b],modelTier:'quick'});const w=String(r.text||'').toLowerCase().match(/\b(top|bottom|shoes|bag|head|neck|tie|glasses|acc)\b/);return w?w[1]:null}catch(e){if(e&&e.code=='not_granted')AIOFF=true;return null}}
function recat(it,c){if(it.cat==c)return;const old=it.p;CATS.forEach(k=>{if(CUR.items[k]===old)CUR.items[k]=gen(k)});it.cat=c;proc(it);if(!S.lock[c])CUR.items[c]=it.p}
const proc=(it,auto)=>{const r=cutout(it.img,S.tol);if(auto)it.cat=guess(r,it.fn);it.p={...r,cat:it.cat,id:it.id,user:1,name:'Your '+CN[it.cat].toLowerCase()}};
const rd=(f,cb)=>{const r=new FileReader();r.onload=()=>{const im=new Image();im.onload=()=>cb(im);im.src=r.result};r.readAsDataURL(f)};
const addTo=(files,cat)=>[...files].filter(f=>f.type.startsWith('image/')).forEach(f=>rd(f,im=>{const it={id:'i'+Date.now()+Math.random(),img:im,cat,fn:f.name};proc(it);CLO.push(it);if(!S.lock[cat])CUR.items[cat]=it.p;view(1)}));
['dragenter','dragover'].forEach(ev=>document.addEventListener(ev,e=>{const b=e.target.closest&&e.target.closest('.cd');if(b){e.preventDefault();b.classList.add('over')}}));
 document.addEventListener('dragleave',e=>{const b=e.target.closest&&e.target.closest('.cd');if(b)b.classList.remove('over')});
 document.addEventListener('drop',e=>{const b=e.target.closest&&e.target.closest('.cd');if(b){e.preventDefault();b.classList.remove('over');addTo(e.dataTransfer.files,b.dataset.cat)}});
document.addEventListener('change',e=>{const t=e.target;
 if(t.type=='file'&&t.dataset.cat){const fs=[...t.files];t.value='';addTo(fs,t.dataset.cat)}
 else if(t.id=='file'){[...t.files].forEach(f=>rd(f,im=>{const it={id:'i'+Date.now()+Math.random(),img:im,cat:'top',fn:f.name};proc(it,1);CLO.push(it);if(!S.lock[it.cat])CUR.items[it.cat]=it.p;view(1);AIN++;AQ=AQ.then(()=>aiCat(im)).then(c=>{AIN--;if(c&&CLO.includes(it))recat(it,c);view(1)})}));t.value=''}
 else if(t.id=='mdl'&&t.files[0]){rd(t.files[0],im=>{S.model=shrink(im);view(1)})}
 else if(t.dataset.i!==undefined){const it=CLO[+t.dataset.i];recat(it,t.value);view(1)}
 else if(t.id=='tol'){S.tol=+t.value;CLO.forEach(proc);CATS.forEach(c=>{const x=CUR.items[c];if(x&&x.user){const f=CLO.find(i=>i.id==x.id);if(f)CUR.items[c]=f.p}});view()}});
$('#tol').addEventListener('input',e=>$('#tv').textContent=e.target.value);
$('#mood').innerHTML=mood();CUR={items:{}};seed();all();view();
const stk=(k,css)=>`<svg class="stk" viewBox="0 0 100 100" style="${css};--d:-${(Math.random()*5).toFixed(1)}s;--t:${(2.6+Math.random()*1.8).toFixed(1)}s" aria-hidden="true"><use href="#k-${k}"/></svg>`;
$('#hs').innerHTML=[['sock','left:86%;top:30%',48,-8],['gl','left:36%;top:5%',54,8],['heart','left:1.2%;top:12%',44,12],['shoe','left:50%;bottom:1%',56,-6],['bag','left:64%;bottom:1%',48,8],['spark','left:70%;top:48%',40,0]].map(a=>stk(a[0],`${a[1]};--w:${a[2]}px;--r:${a[3]}deg`)).join('');
const KS=['gl','sock','shoe','bag','cap','heart','star','spark','tee','bow','hang'];
document.querySelectorAll('section').forEach(sec=>{let h='';for(let j=0;j<2;j++)h+=stk(R(KS),`right:${14+j*16+Math.random()*6|0}%;top:${4+Math.random()*30|0}px;--w:${36+Math.random()*16|0}px;--r:${-28+Math.random()*56|0}deg`);sec.insertAdjacentHTML('afterbegin',h)});


/* ================= 2. CLASH MACHINE: aesthetics data, spin, bridge ideas, mission ================= */
(()=>{
const AE=[
{n:'Coquette',pt:'dots',a:[1,3,7],c:['#f6c6d8','#fff','#c8102e'],p:['bows','lace trim','ballet flats','pearls','baby pink'],f:'nipped-waist, bow-tied',m:'lace and satin',t:'tiny sweet details',sty:'girly',pal:0,ic:'bow',w:['Lace','Bow']},
{n:'Grunge',pt:'plaid',a:[9,4,6],c:['#1b1b1b','#5a6b3a','#b01e2e'],p:['ripped tee','flannel','combat boots','chains','all black'],f:'oversized, slouchy',m:'worn flannel and denim',t:'looking lived-in',sty:'street',pal:3,ic:'sock',w:['Rust','Riot']},
{n:'Office Siren',pt:'stripes',a:[5,3,3],c:['#e9dccb','#222','#8a1f2d'],p:['pencil skirt','fitted blazer','sheer tights','thin glasses','kitten heels'],f:'sharp, fitted tailoring',m:'crisp suiting and sheer',t:'polished confidence',sty:'clean',pal:1,ic:'gl',w:['Sharp','Heels']},
{n:'Gorpcore',pt:'check',a:[6,8,4],c:['#a8b08a','#ff6a13','#3d4a40'],p:['shell jacket','cargo pants','trail shoes','carabiner','bucket hat'],f:'boxy technical layers',m:'nylon shell',t:'function first',sty:'street',pal:3,ic:'cap',w:['Trail','Shell']},
{n:'Vintage',pt:'dots',a:[4,0,5],c:['#d9784a','#f2e04a','#d9cdb8'],p:['high-waist denim','cardigan','loafers','silk scarf','old bag'],f:'high-waisted retro',m:'thrifted cotton and knit',t:'a story in the fabric',sty:'chill',pal:4,ic:'hang',w:['Thrift','Ghost']},
{n:'Futuristic',pt:'chrome',a:[7,10,4],c:['#c0c7cf','#2fa6cf','#111'],p:['chrome','wrap shades','metallic puffer','sleek cargos','silver sneakers'],f:'sleek, sculpted',m:'metallic and vinyl',t:'looking ahead',sty:'street',pal:6,ic:'spark',w:['Chrome','Signal']},
{n:'Minimalism',pt:'grid',a:[4,6,0],c:['#fff','#d9cdb8','#111'],p:['white tee','straight trousers','clean sneakers','one watch'],f:'clean straight lines',m:'plain cotton',t:'fewer, better things',sty:'clean',pal:1,ic:'tee',w:['Blank','Edit']},
{n:'Maximalism',pt:'stripes',a:[3,5,10],c:['#ff2e93','#ffe94d','#2b3cff'],p:['clashing prints','stacked rings','colour-block','statement hat'],f:'layered and loud',m:'prints on prints',t:'more is more',sty:'chill',pal:2,ic:'star',w:['Loud','Pile']},
{n:'Punk',pt:'plaid',a:[10,3,8],c:['#d00','#111','#fff'],p:['studs','tartan','safety pins','leather jacket'],f:'cropped, hardware-heavy',m:'leather and tartan',t:'breaking rules',sty:'street',pal:5,ic:'spark',w:['Spike','Static']},
{n:'Preppy',pt:'plaid',a:[3,2,3],c:['#1f2d4d','#fff','#14463f'],p:['pleated skirt','polo','loafers','knit vest'],f:'tidy and structured',m:'oxford and knit',t:'neat details',sty:'clean',pal:6,ic:'tee',w:['Crest','Polo']},
{n:'Y2K',pt:'dots',a:[3,5,7],c:['#ff9ad5','#9be7ff','#c0c7cf'],p:['baby tee','low-rise','butterfly clips','mini bag'],f:'low and cropped',m:'glossy and sparkly',t:'playful nostalgia',sty:'girly',pal:5,ic:'heart',w:['Gloss','Pixel']},
{n:'Cottagecore',pt:'check',a:[0,1,5],c:['#9bb88a','#f4efe0','#d9a066'],p:['prairie dress','apron','knit cardigan','straw bag'],f:'flowy and loose',m:'linen and cotton',t:'soft, slow living',sty:'chill',pal:3,ic:'heart',w:['Meadow','Apron']},
{n:'Dark Academia',pt:'stripes',a:[5,1,4],c:['#4a2f27','#14463f','#d9cdb8'],p:['tweed blazer','pleated skirt','oxfords','turtleneck'],f:'layered tailoring',m:'tweed and wool',t:'old-library mood',sty:'clean',pal:3,ic:'hang',w:['Ink','Tweed']},
{n:'Balletcore',pt:'net',a:[0,2,2],c:['#f6e9ee','#e6b3c2','#fff'],p:['wrap cardigan','tulle skirt','ballet flats','leg warmers'],f:'wrapped and soft',m:'tulle and jersey',t:'graceful lightness',sty:'girly',pal:0,ic:'bow',w:['Tulle','Barre']},
{n:'Cyber Goth',pt:'net',a:[10,9,8],c:['#111','#c6ff00','#7a2cff'],p:['platforms','mesh top','neon clips','utility straps'],f:'strappy, platform-high',m:'mesh and PVC',t:'night-club armour',sty:'street',pal:5,ic:'spark',w:['Neon','Void']},
{n:'Skater',pt:'check',a:[7,5,4],c:['#222831','#ffe94d','#2b3cff'],p:['baggy jeans','graphic tee','chunky sneakers','beanie'],f:'baggy and easy',m:'heavy denim and cotton',t:'moving freely',sty:'street',pal:2,ic:'shoe',w:['Baggy','Grip']}];
const WILD=['Wear one piece "wrong" on purpose: inside-out, backwards or upside-down.','No black allowed. At all.','Shoes must come from the OTHER aesthetic.','Borrow one piece from someone else\'s closet.','Add one thrifted piece under $5.','Everything in one colour family, except ONE item.','Tie it together with an accessory you never wear.'];
const LVD=['Gentle: two styles that sit fairly close. Easier to combine.','Spicy: properly far apart. You will need to think.','Unhinged: total opposites, plus a wildcard rule you must follow.'];

let A=AE[0],B=AE[1],lv=0,spinning=0,chk=[0,0,0,0],IMG={A:'',B:''};
const h6=c=>c.length==4?'#'+[...c.slice(1)].map(x=>x+x).join(''):c;
const d2=(x,y)=>Math.hypot(x.a[0]-y.a[0],x.a[1]-y.a[1],x.a[2]-y.a[2]);
const ok=(x,y)=>{const d=d2(x,y);return x!==y&&(lv==0?d<7:lv==1?d>=6.5&&d<10.5:d>=10.5)};
function pair(kA,kB){let t=0,x,y;do{x=kA||R(AE);y=kB||R(AE)}while(!ok(x,y)&&t++<400);if(x===y)y=AE.find(e=>e!==x);return[x,y]}
function patBg(e){const[c0,c1,c2]=e.c.map(h6);
 return({plaid:`repeating-linear-gradient(0deg,${c1}99 0 9px,transparent 9px 22px),repeating-linear-gradient(90deg,${c2}88 0 9px,transparent 9px 22px),${c0}`,
 dots:`radial-gradient(${c1} 22%,transparent 24%) 0 0/16px 16px,${c0}`,
 stripes:`repeating-linear-gradient(90deg,${c0} 0 12px,${c1} 12px 24px)`,
 check:`conic-gradient(${c0} 25%,${c1} 0 50%,${c0} 0 75%,${c1} 0) 0 0/30px 30px`,
 net:`repeating-linear-gradient(45deg,${c2} 0 2px,transparent 2px 12px),repeating-linear-gradient(-45deg,${c2} 0 2px,transparent 2px 12px),${c0}`,
 chrome:`linear-gradient(120deg,${c0},#fff 30%,${c1} 55%,${c0} 80%,#fff)`,
 grid:`linear-gradient(${c2}55 1px,transparent 1px) 0 0/22px 22px,linear-gradient(90deg,${c2}55 1px,transparent 1px) 0 0/22px 22px,${c0}`})[e.pt]}
function tornClip(){const p=[];for(let x=0;x<=100;x+=7)p.push(`${x}% ${(Math.random()*5).toFixed(1)}%`);for(let y=8;y<=100;y+=9)p.push(`${(100-Math.random()*4).toFixed(1)}% ${y}%`);for(let x=100;x>=0;x-=7)p.push(`${x}% ${(100-Math.random()*5).toFixed(1)}%`);for(let y=92;y>=8;y-=9)p.push(`${(Math.random()*4).toFixed(1)}% ${y}%`);return`polygon(${p.join(',')})`}
function card(el,e,tag,anim){
 el.style.setProperty('--rot',(tag=='A'?-1:1)*(.8+Math.random()*1.4)+'deg');
 const src=anim?'':IMG[tag];
 el.innerHTML=`<span class="tg2">AESTHETIC ${tag}</span><div class="stage2"><div class="fl pat"><i style="background:${patBg(e)};clip-path:${tornClip()}"></i></div><div class="fl ico"><svg viewBox="0 0 100 100"><use href="#k-${e.ic}"/></svg></div><label class="refbox">${src?`<img src="${src}" alt="Reference">`:'+ add your<br>reference<br>photo'}<input type="file" accept="image/*"></label><div class="nmstrip">${esc(e.n)}</div><div class="dabs">${e.c.map(c=>`<i style="background:${c}"></i>`).join('')}</div></div><p class="lkx">${esc(e.t)}</p><div class="pcs">${e.p.map(x=>`<span style="--t:${(Math.random()*5-2.5).toFixed(1)}deg">${esc(x)}</span>`).join('')}</div><button class="rr" data-rr="${tag}">↻ re-roll ${tag} only</button>`;
 el.querySelector('input').onchange=ev=>{const f=ev.target.files[0];if(!f)return;const r=new FileReader();r.onload=()=>{IMG[tag]=r.result;card(el,e,tag)};r.readAsDataURL(f)};
 el.querySelector('.rr').onclick=()=>spin(tag=='B',tag=='A');
}
const sw=cs=>`<span class="sw3">${cs.map(c=>`<i style="background:${c}"></i>`).join('')}</span>`;
function bridge(){
 const T=[
 ['Swap the material',`Take a ${A.f} shape (try the ${A.p[0]}) and make it in ${B.m}.`],
 ['Swap the colours',`Dress ${A.n} pieces in ${B.n}'s palette.`+sw(B.c)],
 ['One hero, the rest quiet',`Pick one ${B.n} piece (${B.p[0]}). Keep everything else ${A.n}.`],
 ['Wear it the wrong way',`Style the ${A.p[1]} the way ${B.n} would: with ${B.p[1]}.`],
 ['Find the thread',`${A.n} is about ${A.t}. ${B.n} is about ${B.t}. Make an outfit where both show up.`],
 ['Borrow the proportions',`Keep ${B.n}'s ${B.f} proportions, but use ${A.n} details (${A.p[2]||A.p[0]}).`]];
 const BC=['#ff2e93','#2b3cff','#16a36a'];
 const pick=T.map(x=>[Math.random(),x]).sort((a,b)=>a[0]-b[0]).slice(0,3).map(x=>x[1]);
 $('#bridge').innerHTML=pick.map((t,i)=>`<div class="bn" style="--r:${(Math.random()*2-1).toFixed(1)}deg;--bc:${BC[i]}"><span class="num">${i+1}</span><b>${esc(t[0])}</b><p>${t[1]}</p></div>`).join('')}
function sync2(){document.querySelectorAll('#mis input').forEach((x,i)=>{x.checked=!!chk[i];x.closest('li').classList.toggle('done',!!chk[i])})}
function mission(){
 const wd=$('#wild'),w=lv==2?R(WILD):null;wd.hidden=!w;if(w)wd.innerHTML='<b>wildcard rule!</b>'+esc(w);
 $('#cnm').textContent=A.w[0]+' '+B.w[1];$('#lvd').textContent=LVD[lv];
 $('#ctg').innerHTML=`<span class="chp">${esc(A.n)}</span><span>×</span><span class="chp">${esc(B.n)}</span>`;
 chk=[0,0,0,0];$('#disc').value='';
 $('#mis').innerHTML=['Use at least 1 item from each aesthetic.','Complete the outfit using your own wardrobe.','Save your final look to your collection.','Write down one combo you wouldn\'t have tried before.'].map((t,i)=>`<li><label><input type="checkbox" data-m="${i}"><span>${esc(t)}</span></label></li>`).join('');
 bridge()}
function show(){card($('#cA'),A,'A');card($('#cB'),B,'B');mission()}
function spin(kA,kB){
 if(spinning)return;spinning=1;const[a,b]=pair(kA?A:null,kB?B:null),cA=$('#cA'),cB=$('#cB'),red=matchMedia('(prefers-reduced-motion:reduce)').matches;let n=0;
 if(!red){if(!kA)cA.classList.add('slot-spin');if(!kB)cB.classList.add('slot-spin')}
 const iv=setInterval(()=>{if(red||++n>10){clearInterval(iv);cA.classList.remove('slot-spin');cB.classList.remove('slot-spin');if(!kA)IMG.A='';if(!kB)IMG.B='';A=a;B=b;show();spinning=0;return}
  if(!kA)card(cA,R(AE),'A',1);if(!kB)card(cB,R(AE),'B',1)},80)}
document.querySelectorAll('[data-lv]').forEach(b=>b.onclick=()=>{lv=+b.dataset.lv;document.querySelectorAll('[data-lv]').forEach(x=>x.classList.toggle('on',x==b));spin(0,0)});
$('#spin').onclick=()=>spin(0,0);
$('#dress').onclick=()=>{
 S.st=A.sty;S.pal=A.pal;const ks=[A,B];
 CATS.forEach(c=>{if(S.lock[c])return;const u=CLO.filter(i=>i.cat==c),e=R(ks);
  CUR.items[c]=u.length&&Math.random()<.5?R(u).p:OPT.includes(c)&&Math.random()<.2?null:{...gen(c,e.sty),color:Math.random()<.6?R(e.c):gen(c,e.sty).color}});
 view(1);setCap();chk[0]=1;sync2();location.hash='studio'};
function setCap(){const cp=$('#cp');if(cp)cp.value=`${$('#cnm').textContent}: ${A.n} × ${B.n}${$('#disc').value.trim()?' — '+$('#disc').value.trim():''}`}
$('#disc').oninput=()=>{chk[3]=$('#disc').value.trim()?1:0;sync2();setCap()};
document.addEventListener('change',e=>{const m=e.target.dataset&&e.target.dataset.m;if(m!==undefined){chk[+m]=e.target.checked?1:0;sync2()}});
document.addEventListener('click',e=>{const t=e.target.closest('button');if(t&&t.dataset.g=='save'){chk[2]=1;chk[1]=1;sync2()}});
show();
})();
