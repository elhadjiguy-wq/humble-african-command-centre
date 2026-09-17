export const initialData = {
  metadata: {
    Title: "HUMBLE AFRICAN", Subtitle: "Rooted in Africa. Made for everyone.", Author: "El Hadji", Edition: "Business Command Centre v2", Language: "English", "Reader age": "All audiences", "Book description": "Stories, wisdom, art, learning and meaningful heritage products rooted in Africa and made for everyone.", "Short description": "HUMBLE AFRICAN business operations dashboard.", Keywords: "African stories, African learning, African wisdom, heritage art, Adinkra, meaningful clothing", Categories: "Stories • Wisdom • Art • Learning • Heritage Wear", "Publisher / imprint": "HUMBLE AFRICAN", ISBN: "Product dependent", "Publication date": "Product dependent", "Ebook price": "Product dependent", "Paperback price": "Product dependent", Copyright: "HUMBLE AFRICAN / El Hadji", "Rights territories": "Product dependent"
  },
  tasks: [
    {id:"t1",task:"Complete Amazon KDP identity verification",category:"STORE",priority:"CRITICAL",status:"BLOCKED",blocker:"Amazon identity-verification handoff failed to load in the browser.",next:"Retry KDP identity verification before 24 September 2026.",why:"KDP publishing features depend on successful identity verification.",steps:["Open KDP Account","Choose Fix now under Identity verification required","Complete the Amazon verification flow"],notes:"Do not enter banking or identity documents anywhere except the official Amazon verification flow.",order:1},
    {id:"t2",task:"Publish the three educational products beyond Etsy",category:"STORE",priority:"HIGH",status:"IN PROGRESS",blocker:"TPT requires account access; Payhip status of the combined bundle must be verified.",next:"Verify the 48-page bundle on Payhip, then publish Aisha Literacy Unit, Fatima Literacy Unit and bundle to the strongest available education channels.",why:"These products already exist; wider distribution is faster than creating another product.",steps:["Check Payhip Products","Confirm which education products are already live","Publish missing finished products","Prepare TPT listings when account access is available"],notes:"Revenue-first: distribute existing finished assets before starting unnecessary new products.",order:2},
    {id:"t3",task:"Publish Sankofa apparel listing",category:"STORE",priority:"HIGH",status:"IN PROGRESS",blocker:"Final owner-side Printify/Etsy publish confirmation is still required.",next:"Verify the accurate Printify product and publish the Etsy-connected listing.",why:"The product, pricing, tags and accurate mockups are already prepared.",steps:["Open Printify product","Confirm approved flat product artwork","Publish to Etsy","Verify the live Etsy listing"],notes:"Do not use inaccurate generated lifestyle images.",order:3},
    {id:"t4",task:"Resolve Starlight Breaths publication route",category:"PUBLISHING",priority:"HIGH",status:"IN PROGRESS",blocker:"KDP identity verification currently affects Amazon publishing.",next:"Preserve the release-candidate files and move through channels that are currently available while KDP is resolved.",why:"The product package is already near commercial readiness.",steps:["Verify release-candidate package","Use available direct-sale route","Return to KDP after identity verification"],notes:"Do not rewrite the approved manuscript.",order:4},
    {id:"t5",task:"Measure current campaign and improve conversion",category:"MARKETING",priority:"NORMAL",status:"IN PROGRESS",blocker:"Need post-publication performance data and store traffic/sales evidence.",next:"Review Metricool performance and store results after the scheduled campaign has accumulated data.",why:"Future promotion should follow evidence rather than assumptions.",steps:["Review scheduled/published posts","Compare engagement and clicks","Check Etsy/Payhip sales evidence","Improve the strongest product/listing first"],notes:"Avoid duplicate posts and conserve posting allowance.",order:5}
  ],
  files: [],
  quality: {epub:["Approved product files available","Cover/listing image available","Title confirmed","Author/brand confirmed","Metadata reviewed","Description prepared","Pricing prepared"],paperback:["Interior PDF available","Trim size confirmed","Page count confirmed","Cover wrap available","ISBN decision completed","Print settings confirmed","Proof checked"]},
  qualityStates:{},
  marketplaces: [
    {name:"Etsy",phase:1,status:"LIVE",account:"YES",book:"YES",cover:"YES",description:"YES",price:"YES",payment:"YES",published:"YES",url:"https://www.etsy.com/uk/listing/4574417741",outstanding:"Expand finished educational listings and apparel; improve conversion using evidence",notes:"Confirmed storefront with multiple HUMBLE AFRICAN products"},
    {name:"Payhip",phase:1,status:"LIVE",account:"YES",book:"YES",cover:"YES",description:"YES",price:"YES",payment:"YES",published:"YES",url:"https://payhip.com/HUMBLEAFRICAN",outstanding:"Verify which educational products, especially the combined bundle, are live",notes:"Aisha and Fatima previously confirmed live"},
    {name:"Amazon KDP",phase:1,status:"BLOCKED",account:"YES",book:"NO",cover:"NO",description:"NO",price:"NO",payment:"YES",published:"NO",url:"",outstanding:"Complete identity verification before 24 September 2026",notes:"Bank payout screen reported set up; identity verification remains the blocker"},
    {name:"Teachers Pay Teachers",phase:1,status:"BLOCKED",account:"NO",book:"NO",cover:"NO",description:"NO",price:"NO",payment:"NO",published:"NO",url:"",outstanding:"Account access/setup required before educational products can be listed",notes:"Strong fit for Grades 2–4 literacy products"},
    {name:"Pinterest",phase:1,status:"LIVE",account:"YES",book:"YES",cover:"YES",description:"YES",price:"NO",payment:"NO",published:"YES",url:"",outstanding:"Continue direct-linked product Pins based on campaign evidence",notes:"Seven HUMBLE AFRICAN boards established"},
    {name:"Metricool / Social",phase:1,status:"LIVE",account:"YES",book:"YES",cover:"YES",description:"YES",price:"NO",payment:"NO",published:"YES",url:"",outstanding:"Measure campaign results; avoid duplicate scheduling",notes:"Facebook, Instagram, LinkedIn, Pinterest, TikTok and YouTube connected"},
    {name:"Printify",phase:1,status:"IN PROGRESS",account:"YES",book:"YES",cover:"YES",description:"YES",price:"YES",payment:"NO",published:"NO",url:"",outstanding:"Publish accurate Sankofa product to Etsy",notes:"Comfort Colors 1717; approved product mockups prepared"},
    {name:"Ko-fi",phase:2,status:"SETTING UP",account:"YES",book:"NO",cover:"NO",description:"YES",price:"NO",payment:"YES",published:"NO",url:"",outstanding:"Use only when it adds revenue value; previous Cloudflare verification challenge",notes:"Stripe connected"}
  ],
  kdp:[{name:"ACCOUNT",status:"DONE"},{name:"PAYMENT DETAILS",status:"DONE"},{name:"IDENTITY VERIFICATION",status:"BLOCKED"},{name:"BOOK DETAILS",status:"NOT STARTED"},{name:"MANUSCRIPT",status:"NOT STARTED"},{name:"COVER",status:"NOT STARTED"},{name:"PRICING",status:"NOT STARTED"},{name:"PREVIEW",status:"NOT STARTED"},{name:"SUBMISSION",status:"NOT STARTED"}],
  korakite:[{name:"Legacy route — not current priority",status:"DONE"}],
  shopify:[{name:"Future channel — not current priority",status:"NOT STARTED"}],
  illustrations:["Aisha","Fatima and the Lost Drum","African Wisdom","African Heritage Wall Art","Aisha Literacy Unit","Fatima Literacy Unit","48-page Literacy Bundle","Starlight Breaths","Sankofa Heritage Wear","Dwennimmen Heritage Wear","Gye Nyame Heritage Wear"].map(name=>({name,status:"FINAL",prompt:"",notes:"Product/collection tracked at business level",location:"",filename:"",preview:""})),
  characters:[],
  marketing:[
    {name:"Aisha discovery content",channel:"TikTok / social",status:"PUBLISHED"},
    {name:"48-page Literacy Bundle campaign",channel:"Instagram / LinkedIn / Pinterest",status:"PUBLISHED"},
    {name:"HUMBLE AFRICAN cross-product/store post",channel:"Facebook / Instagram",status:"SCHEDULED"},
    {name:"Dwennimmen heritage post",channel:"Facebook / Instagram",status:"SCHEDULED"},
    {name:"Sankofa heritage post",channel:"Facebook / Instagram",status:"SCHEDULED"},
    {name:"Heritage Collection carousel",channel:"Facebook / Instagram",status:"SCHEDULED"}
  ],
  episodes:[],
  milestones:[
    {name:"ETSY STOREFRONT ESTABLISHED",done:true,date:"2026"},
    {name:"PAYHIP STORE ESTABLISHED",done:true,date:"2026"},
    {name:"PINTEREST BUSINESS PRESENCE ESTABLISHED",done:true,date:"2026"},
    {name:"SOCIAL DISTRIBUTION CONNECTED",done:true,date:"2026"},
    {name:"EDUCATIONAL PRODUCT PACKAGES COMPLETE",done:true,date:"2026"},
    {name:"KDP IDENTITY VERIFIED",done:false,date:""},
    {name:"TPT EDUCATIONAL PRODUCTS LIVE",done:false,date:""},
    {name:"SANKOFA APPAREL LIVE",done:false,date:""},
    {name:"STARLIGHT BREATHS LIVE",done:false,date:""}
  ],
  decisions:[
    {id:"d1",decision:"Operate revenue-first",date:"2026-09",reason:"Use existing finished assets before unnecessary new product creation",status:"CONFIRMED",notes:"Market evidence → existing assets → execute → publish → traffic → measure → improve → scale."},
    {id:"d2",decision:"Brand positioning",date:"2026-09",reason:"Inclusive international HUMBLE AFRICAN identity",status:"CONFIRMED",notes:"Rooted in Africa. Made for everyone."},
    {id:"d3",decision:"Apparel visual hierarchy",date:"2026-09",reason:"Lifestyle imagery should lead while exact product accuracy is preserved",status:"CONFIRMED",notes:"People wearing products primary; accurate clean mockups support details; no inaccurate symbols."},
    {id:"d4",decision:"Keep sensitive information out of public dashboard",date:"2026-09",reason:"The Command Centre is publicly hosted",status:"CONFIRMED",notes:"Never store passwords, bank details, identity documents, tokens or private source material here."}
  ]
};
