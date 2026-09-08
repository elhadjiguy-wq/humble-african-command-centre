export const initialData = {
  metadata: {
    Title: "Aisha", Subtitle: "A Daughter of the Savannah", Author: "EL HADJI", Edition: "TO BE CONFIRMED", Language: "TO BE CONFIRMED", "Reader age": "8–12", "Book description": "An illustrated children's chapter book about family, community, the savannah, environmental responsibility, resilience, learning and community action.", "Short description": "TO BE CONFIRMED", Keywords: "TO BE CONFIRMED", Categories: "TO BE CONFIRMED", "Publisher / imprint": "TO BE CONFIRMED", ISBN: "TO BE CONFIRMED", "Publication date": "TO BE CONFIRMED", "Ebook price": "TO BE CONFIRMED", "Paperback price": "TO BE CONFIRMED", Copyright: "TO BE CONFIRMED", "Rights territories": "TO BE CONFIRMED"
  },
  tasks: [
    {id:"t1",task:"Confirm the final ebook file",category:"BOOK",priority:"CRITICAL",status:"IN PROGRESS",blocker:"The final EPUB has not been registered.",next:"Find the latest EPUB, check that it opens, then add it to Book Files.",why:"Every Phase 1 store needs the final ebook before publication can move forward.",steps:["Find the latest Aisha EPUB on your computer","Open it and check the first and last pages","Use Book Files → Add file to register it"],notes:"Do not replace an earlier version; register the final copy separately.",order:1},
    {id:"t2",task:"Approve the final ebook cover",category:"ILLUSTRATIONS",priority:"HIGH",status:"NOT STARTED",blocker:"",next:"Choose and register the approved cover.",why:"Amazon, Payhip and KoraKite all need one approved cover.",steps:["Review the latest cover","Confirm the title and author are correct","Register the approved image in Book Files"],notes:"",order:2},
    {id:"t3",task:"Complete the master book information",category:"PUBLISHING",priority:"HIGH",status:"IN PROGRESS",blocker:"Price, language and publication details need confirmation.",next:"Open Book Information and fill in confirmed details.",why:"The same accurate details should appear in every store.",steps:["Open Book Information","Complete only details you have approved","Leave uncertain answers as NOT CONFIRMED"],notes:"",order:3},
    {id:"t4",task:"Prepare Amazon KDP ebook listing",category:"STORE",priority:"HIGH",status:"NOT STARTED",blocker:"Final EPUB and cover are needed first.",next:"Complete the Book Details section.",why:"Amazon KDP is a Phase 1 priority route to readers.",steps:["Confirm your KDP account","Enter the approved book details","Stop before submission until files are ready"],notes:"Never submit without explicit approval.",order:4},
    {id:"t5",task:"Prepare the launch announcement",category:"MARKETING",priority:"NORMAL",status:"NOT STARTED",blocker:"Publication date is not confirmed.",next:"Draft a reusable announcement without a date.",why:"A prepared announcement makes launch day calmer.",steps:["Write a short introduction to Aisha","Add the approved cover later","Do not schedule until the date is confirmed"],notes:"",order:5}
  ],
  files: [],
  quality: {
    epub:["EPUB available","Cover available","Title confirmed","Author confirmed","Language confirmed","Metadata reviewed","Description prepared","Pricing prepared"],
    paperback:["Interior PDF available","Trim size confirmed","Page count confirmed","Cover wrap available","ISBN decision completed","Print settings confirmed","Proof ordered","Proof approved"]
  },
  qualityStates:{},
  marketplaces: [
    {name:"Amazon KDP",phase:1,status:"NOT STARTED",account:"NO",book:"NO",cover:"NO",description:"NO",price:"NO",payment:"NO",published:"NO",url:"",outstanding:"Final ebook, cover and metadata",notes:"Phase 1: ebook first"},
    {name:"Payhip",phase:1,status:"NOT STARTED",account:"NO",book:"NO",cover:"NO",description:"NO",price:"NO",payment:"NO",published:"NO",url:"",outstanding:"Set up direct ebook product",notes:"Phase 1"},
    {name:"KoraKite",phase:1,status:"SETTING UP",account:"YES",book:"NO",cover:"NO",description:"NO",price:"NO",payment:"NO",published:"NO",url:"",outstanding:"Connect the final downloadable ebook",notes:"Public page may already exist"},
    {name:"Amazon paperback",phase:2,status:"NOT STARTED",account:"YES",book:"NO",cover:"NO",description:"NO",price:"NO",payment:"NO",published:"NO",url:"",outstanding:"Complete print files and proof",notes:"Phase 2"},
    {name:"Shopify",phase:2,status:"NOT STARTED",account:"NO",book:"NO",cover:"NO",description:"NO",price:"NO",payment:"NO",published:"NO",url:"",outstanding:"Verify store and payouts",notes:"Phase 2"},
    {name:"Draft2Digital",phase:3,status:"NOT STARTED",account:"NO",book:"NO",cover:"NO",description:"NO",price:"NO",payment:"NO",published:"NO",url:"",outstanding:"Wait until Phase 1 is complete",notes:"Phase 3"},
    {name:"Etsy",phase:3,status:"NOT STARTED",account:"NO",book:"NO",cover:"NO",description:"NO",price:"NO",payment:"NO",published:"NO",url:"",outstanding:"Plan educational/family bundle",notes:"Phase 3"},
    {name:"IngramSpark",phase:4,status:"BLOCKED",account:"NO",book:"NO",cover:"NO",description:"NO",price:"NO",payment:"NO",published:"NO",url:"",outstanding:"Settle print edition and ISBN strategy",notes:"Phase 4"}
  ],
  kdp:["ACCOUNT","BOOK DETAILS","MANUSCRIPT","COVER","PRICING","RIGHTS","PREVIEW","SUBMISSION"].map((name,i)=>({name,status:i===0?"IN PROGRESS":"NOT STARTED"})),
  korakite:["Aisha library page","Story previews","Interest form","Final ebook","Download link","Product page","Price","Customer delivery","Testing"].map((name,i)=>({name,status:i<3?"DONE":"NOT STARTED"})),
  shopify:["Store active","Business verification","Payout account verified","Payments active","Aisha product created","Cover uploaded","Description","Digital file attached","Price","Checkout tested","Confirmation email tested","Product live"].map(name=>({name,status:"NOT STARTED"})),
  illustrations:["Cover","Aisha character reference","Omar","Fatima","Karim","Mariama","Zahra","Elara","Savannah establishing scenes","Village/community scenes","Environmental restoration scenes","Chapter illustrations","Marketing artwork"].map((name,i)=>({name,status:i===0?"PROMPT READY":"NOT STARTED",prompt:"",notes:"",location:"",filename:"",preview:""})),
  characters:["Aisha","Omar","Fatima","Karim","Mariama","Zahra","Elara"].map(name=>({name,age:"TO BE CONFIRMED",description:"TO BE CONFIRMED",clothing:"TO BE CONFIRMED",colours:"TO BE CONFIRMED",hair:"TO BE CONFIRMED",objects:"TO BE CONFIRMED",personality:"TO BE CONFIRMED",relationship:name==="Aisha"?"Main character":"TO BE CONFIRMED",rules:"TO BE CONFIRMED",image:""})),
  marketing:["Book trailer","Short videos","Character introductions","Story excerpts","Educational posts","Behind-the-scenes content","Launch announcement","Cover reveal","Author introduction","Product images"].map((name,i)=>({name,channel:["YouTube","YouTube Shorts","TikTok","Instagram","Facebook","Email","Shopify","KoraKite"][i%8],status:"IDEA"})),
  episodes:Array.from({length:10},(_,i)=>({number:i+1,title:"TO BE CONFIRMED",hook:"",voiceover:"",scenes:"",imagePrompts:"",videoPrompts:"",sound:"",music:"",thumbnail:"",description:"",tags:"",status:"IDEA"})),
  milestones:["MANUSCRIPT COMPLETE","PUBLISHING FILES COMPLETE","KDP EBOOK SUBMITTED","KDP EBOOK LIVE","PAYHIP LIVE","KORAKITE LIVE","PAPERBACK PROOF ORDERED","PAPERBACK APPROVED","SHOPIFY LIVE","MARKETING LAUNCH"].map(name=>({name,done:false,date:""})),
  decisions:[
    {id:"d1",decision:"Final title approved",date:"",reason:"Title supplied for this project",status:"CONFIRMED",notes:"Aisha: A Daughter of the Savannah"},
    {id:"d2",decision:"Reader age approved",date:"",reason:"Primary reader age supplied as approximately 8–12",status:"NEEDS CONFIRMATION",notes:"Confirm before marketplace submission"}
  ]
};
