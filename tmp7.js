
  const STORAGE_KEY = "mogux_demo_v1";

  const I18N = {
    en:{
      sub:"Retail performance system (Demo)", tenant:"Tenant", lang:"Language", reset:"Reset", login:"Login", logout:"Logout",
      demoMode:"Demo mode", welcome:"Welcome to Mogux",
      welcomeDesc:"Choose a role and explore the full experience. All data is stored locally in your browser — perfect for client demos.",
      platformTitle:"Platform Admin",
      platformDesc:"Create and manage company accounts (tenants). Each company has its own data and subdomain.",
      tenants:"Tenants",
      createTenant:"Create tenant",
      companyName:"Company name",
      subdomainLabel:"Subdomain",
      create:"Create",
      openTenant:"Open tenant URL",
      lockTenant:"This page is locked to tenant subdomain",
      tenantAdminCreated:"Tenant created with a default Admin user.",
      missingFields:"Please fill company name and subdomain.",
      subdomainExists:"Subdomain already exists.",
      colCompany:"Company",
      colSubdomain:"Subdomain",
      colUsers:"Users",
      colBranches:"Branches",
      colEvals:"Evaluations",
      quickLogin:"Quick login", quickHint:"Pick a role, then press “Enter demo”.", role:"Role", role_admin:"Admin", role_manager:"Branch manager", role_area:"City manager", role_sales:"Sales manager", role_employee:"Employee", role_shopper:"Mystery shopper", user:"User", enter:"Enter demo",
      adminTip:"Tip: Admin can edit cities, branches, targets, checklists, and UI labels.",
      whatYouCanDo:"What you can do",
      do1:"Create cities & numbered branches", do2:"Set sales targets", do3:"Build checklists & weights",
      do4:"Run staff evaluations with photos", do5:"Mystery shopper program", do6:"See performance by city/branch/employee",
      nav_overview:"Overview", nav_reports:"Reports", nav_eval:"New evaluation", nav_my:"My performance", nav_shop:"Mystery shopper", nav_admin:"Admin",
      nav_platform:"Platform",
      nav_org:"Cities & branches", nav_targets:"Sales targets", nav_checklists:"Checklists", nav_labels:"UI labels", nav_users:"Users",
      kpi_ops:"Operational score", kpi_sales:"Sales attainment", kpi_visits:"Visits", kpi_risk:"Risk count",
      filter_city:"City", filter_branch:"Branch", filter_employee:"Employee", scope:"Scope", allAccess:"All access",
      add:"Add", save:"Save", delete:"Delete", cancel:"Cancel", export:"Export CSV",
      cities:"Cities", branches:"Branches", addCity:"Add city", cityName:"City name",
      numbering:"Numbering", from:"From", to:"To", generate:"Generate",
      monthlyTarget:"Monthly target", checklists:"Checklists", category:"Category", weight:"Weight", question:"Question", requiredPhoto:"Photo required",

      answerType:"Answer type",
      type_bool:"True / False",
      type_mcq:"Multiple choice",
      type_scale:"Scale",
      type_text:"Text",
      type_number:"Number",
      optionsEn:"Options (EN)",
      optionsAr:"Options (AR)",
      optionsHint:"Use | to separate options. You may add :points (0–1). If points are omitted, Mogux auto-distributes based on scoring direction.",
      scoringDirection:"Scoring direction",
      dir_high:"Higher is better",
      dir_low:"Lower is better",
      min:"Min",
      max:"Max",
      yes:"Yes",
      no:"No",
      addCategory:"Add category", addQuestion:"Add question",
      startEval:"Start evaluation", notes:"Notes", attachPhoto:"Attach photo", submit:"Submit", score:"Score",
      startVisit:"Start visit", identify:"Identify employee", dontKnow:"I don’t know the name", appearance:"Appearance description", submitVisit:"Submit visit",
      labelKey:"Key", labelValue:"Value", labelsHint:"Admin can change UI wording anytime for this tenant.",
      checklistType:"Checklist type", managerChecklist:"Manager checklist", shopperChecklist:"Mystery shopper checklist", copyToShopper:"Copy to shopper", copyToManager:"Copy to manager", all:"All",
      company:"Company",
      reportsDesc:"Company → City → Branch → Employee (drilldown)",
      resetFilters:"Reset filters",
      breakdown:"Breakdown",
      records:"Records",
      managerAvg:"Manager avg",
      shopperAvg:"Mystery shopper avg",
      branchTargets:"Branch targets",
      employeeTargets:"Employee targets",
      assignBranch:"Assigned branch",
      employeeTarget:"Employee target",
      autoDistribute:"Auto distribute",
      open:"Open",
      nav_branding:"Branding",
      brandingTitle:"White labeling",
      companyLogo:"Company logo",
      uploadLogo:"Upload logo",
      removeLogo:"Remove logo",
      logoHint:"PNG/SVG recommended. Transparent background works best.",
      poweredBy:"Show “Powered by Mogux”",
      poweredByMogux:"Powered by Mogux",
      companyName:"Company name",
      nav_import:"Import",
      importTitle:"Import data (Excel/CSV)",
      importDesc:"Upload one Excel file with sheets (Tenants, Cities, Branches, Users, Sales, Evaluations, Checklists).",
      chooseFile:"Choose file",
      downloadTemplate:"Download Excel template",
      downloadCsvTemplates:"Download CSV templates",
      importIntoCurrent:"Import into current company only",
      replaceExisting:"Replace existing items (same IDs)",
      parseFile:"Read file",
      preview:"Preview",
      applyImport:"Apply import",
      importReady:"File parsed successfully.",
      importDone:"Import completed.",
      importNeedXlsx:"Excel import needs the XLSX library. If you opened this page offline, use CSV templates instead.",
      sheetMissing:"No supported sheets found.",
      badFile:"Could not read file.",
      saved:"Saved", removed:"Removed", resetDone:"Demo data reset"
    },
    ar:{
      sub:"نظام تقييم أداء التجزئة (عرض تجريبي)", tenant:"الشركة", lang:"اللغة", reset:"إعادة ضبط", login:"دخول", logout:"تسجيل خروج",
      demoMode:"وضع العرض", welcome:"مرحبًا بك في Mogux",
      welcomeDesc:"اختر الدور واستكشف التجربة الكاملة. كل البيانات تُحفظ محليًا داخل المتصفح — مناسبة لعرض العملاء.",
      quickLogin:"دخول سريع", quickHint:"اختر الدور ثم اضغط “دخول العرض”.", role:"الدور", role_admin:"أدمن", role_manager:"مدير فرع", role_area:"مدير مدينة", role_sales:"مدير المبيعات", role_employee:"موظف", role_shopper:"عميل خفي", user:"المستخدم", enter:"دخول العرض",
      adminTip:"معلومة: الأدمن يقدر يعدّل المدن والفروع والأهداف وقوائم التقييم ونصوص الواجهة.",
      whatYouCanDo:"ماذا يمكنك فعله",
      do1:"إنشاء مدن وفروع بالأرقام", do2:"تحديد أهداف المبيعات", do3:"بناء قوائم التقييم والأوزان",
      do4:"تنفيذ تقييمات الموظفين مع صور", do5:"برنامج العميل الخفي", do6:"متابعة الأداء حسب المدينة/الفرع/الموظف",
      nav_overview:"نظرة عامة", nav_reports:"التقارير", nav_eval:"تقييم جديد", nav_my:"أدائي", nav_shop:"العميل الخفي", nav_admin:"إعدادات الأدمن",
      nav_org:"المدن والفروع", nav_targets:"أهداف المبيعات", nav_checklists:"قوائم التقييم", nav_labels:"نصوص الواجهة", nav_users:"المستخدمون",
      kpi_ops:"المؤشر التشغيلي", kpi_sales:"تحقق المبيعات", kpi_visits:"الزيارات", kpi_risk:"مخاطر",
      filter_city:"المدينة", filter_branch:"الفرع", filter_employee:"الموظف", scope:"النطاق", allAccess:"صلاحية كاملة",
      add:"إضافة", save:"حفظ", delete:"حذف", cancel:"إلغاء", export:"تصدير CSV",
      cities:"المدن", branches:"الفروع", addCity:"إضافة مدينة", cityName:"اسم المدينة",
      numbering:"ترقيم", from:"من", to:"إلى", generate:"إنشاء",
      monthlyTarget:"الهدف الشهري", checklists:"قوائم التقييم", category:"الفئة", weight:"الوزن", question:"السؤال", requiredPhoto:"يتطلب صورة",
      addCategory:"إضافة فئة", addQuestion:"إضافة سؤال",
      startEval:"بدء تقييم", notes:"ملاحظات", attachPhoto:"إرفاق صورة", submit:"إرسال", score:"الدرجة",
      startVisit:"بدء زيارة", identify:"تحديد الموظف", dontKnow:"لا أعرف اسم الموظف", appearance:"وصف الشكل", submitVisit:"إرسال الزيارة",
      labelKey:"المفتاح", labelValue:"النص", labelsHint:"الأدمن يقدر يغيّر كلمات الواجهة في أي وقت لهذا التينانت.",
      checklistType:"نوع القائمة", managerChecklist:"قائمة المدير", shopperChecklist:"قائمة العميل الخفي", copyToShopper:"نسخ للعميل الخفي", copyToManager:"نسخ للمدير", all:"الكل",
      company:"الشركة",
      reportsDesc:"الشركة → المدينة → الفرع → الموظف (تدرّج)",
      resetFilters:"إعادة تعيين الفلاتر",
      breakdown:"التفصيل",
      records:"السجلات",
      managerAvg:"متوسط المدير",
      shopperAvg:"متوسط العميل الخفي",
      branchTargets:"أهداف الفروع",
      employeeTargets:"أهداف الموظفين",
      assignBranch:"الفرع المخصص",
      employeeTarget:"هدف الموظف",
      autoDistribute:"توزيع تلقائي",
      open:"فتح",
      nav_branding:"الهوية",
      brandingTitle:"تخصيص الهوية (White labeling)",
      companyLogo:"شعار الشركة",
      uploadLogo:"رفع الشعار",
      removeLogo:"حذف الشعار",
      logoHint:"يفضل PNG/SVG وخلفية شفافة.",
      poweredBy:"إظهار “Powered by Mogux”",
      poweredByMogux:"مدعوم من Mogux",
      companyName:"اسم الشركة",
      nav_import:"استيراد",
      importTitle:"استيراد البيانات (Excel/CSV)",
      importDesc:"ارفع ملف Excel واحد يحتوي Sheets: Tenants, Cities, Branches, Users, Sales, Evaluations, Checklists.",
      chooseFile:"اختيار ملف",
      downloadTemplate:"تحميل قالب Excel",
      downloadCsvTemplates:"تحميل قوالب CSV",
      importIntoCurrent:"الاستيراد داخل الشركة الحالية فقط",
      replaceExisting:"استبدال العناصر الموجودة (نفس المعرّفات)",
      parseFile:"قراءة الملف",
      preview:"معاينة",
      applyImport:"تنفيذ الاستيراد",
      importReady:"تمت قراءة الملف بنجاح.",
      importDone:"تم الاستيراد.",
      importNeedXlsx:"استيراد Excel يحتاج مكتبة XLSX. إذا فتحت الصفحة بدون إنترنت استخدم CSV بدلًا من ذلك.",
      sheetMissing:"لا توجد Sheets مدعومة في الملف.",
      badFile:"تعذّر قراءة الملف.",
      saved:"تم الحفظ", removed:"تم الحذف", resetDone:"تمت إعادة ضبط بيانات العرض"
    }
  };

  const DEFAULT = {
  platformUsers:[{id:'sa_1', name:'Platform Admin', email:'admin@mogux.ca', role:'superadmin'}],
    tenants:{
      mogu:{
        id:"mogu", companyName:"Mogu Consulting", subdomain:"moguconsulting.ca",
        cities:[
          {id:"halifax", name:{en:"Halifax", ar:"هاليفاكس"}, branches:[
            {id:"halifax-1", name:{en:"Halifax 1", ar:"هاليفاكس 1"}},
            {id:"halifax-2", name:{en:"Halifax 2", ar:"هاليفاكس 2"}}
          ]},
          {id:"toronto", name:{en:"Toronto", ar:"تورونتو"}, branches:[
            {id:"toronto-1", name:{en:"Toronto 1", ar:"تورونتو 1"}},
            {id:"toronto-2", name:{en:"Toronto 2", ar:"تورونتو 2"}},
            {id:"toronto-3", name:{en:"Toronto 3", ar:"تورونتو 3"}}
          ]},
          {id:"vancouver", name:{en:"Vancouver", ar:"فانكوفر"}, branches:[
            {id:"vancouver-1", name:{en:"Vancouver 1", ar:"فانكوفر 1"}}
          ]}
        ],
        users:[
          {id:"u_admin", name:"Salom (Admin)", role:"admin", email:"admin@moguconsulting.ca"},
          {id:"u_sales", name:"Sophia (Sales Manager)", role:"sales", email:"sales@moguconsulting.ca"},
          {id:"u_area", name:"Noah (City Manager)", role:"area", email:"area@moguconsulting.ca"},
          {id:"u_mgr", name:"Amina (Branch Manager)", role:"manager", email:"manager@moguconsulting.ca"},
          {id:"u_emp1", name:"Omar (Employee)", role:"employee", email:"omar@moguconsulting.ca"},
          {id:"u_emp2", name:"Lina (Employee)", role:"employee", email:"lina@moguconsulting.ca"},
          {id:"u_shop", name:"Mystery Shopper", role:"shopper", email:"shopper@moguconsulting.ca"}
        ],
        assignments:{
          "u_sales":{cityId:"", branchId:""},
          "u_area":{cityId:"toronto", branchId:""},
          "u_mgr":{cityId:"halifax", branchId:"halifax-1"},
          "u_emp1":{cityId:"halifax", branchId:"halifax-1"},
          "u_emp2":{cityId:"toronto", branchId:"toronto-2"}
        },
        targets:{"halifax-1":350000,"halifax-2":280000,"toronto-1":420000,"toronto-2":390000,"toronto-3":460000,"vancouver-1":310000},
        checklists:{
          manager:{
          ops:{id:"ops", name:{en:"Operations", ar:"التشغيل"}, weight:40, questions:[
            {id:"op1", q:{en:"Store is clean and showcases are spotless.", ar:"المحل نظيف والواجهات الزجاجية لامعة."}, photo:false},
            {id:"op2", q:{en:"Staff appearance matches luxury standards.", ar:"مظهر الموظف مطابق لمعايير الفخامة."}, photo:false},
            {id:"op3", q:{en:"Phone usage is minimal and professional.", ar:"استخدام الجوال محدود وباحترافية."}, photo:false}
          ]},
          svc:{id:"svc", name:{en:"Customer service", ar:"خدمة العملاء"}, weight:40, questions:[
            {id:"sv1", q:{en:"Warm greeting within 10 seconds.", ar:"ترحيب خلال 10 ثوانٍ."}, photo:false},
            {id:"sv2", q:{en:"Asked discovery questions (budget/style/occasion).", ar:"طرح أسئلة لفهم الاحتياج (ميزانية/ستايل/مناسبة)."}, photo:false},
            {id:"sv3", q:{en:"Presented 2–3 options with clear benefits.", ar:"عرض 2–3 خيارات مع توضيح المميزات."}, photo:false}
          ]},
          daily:{id:"daily", name:{en:"Daily sales basics", ar:"أساسيات البيع اليومية"}, weight:20, questions:[
            {id:"ds1", q:{en:"Knows today’s targets and focuses on upsell.", ar:"يعرف هدف اليوم ويركز على رفع قيمة السلة."}, photo:false},
            {id:"ds2", q:{en:"Followed up with client/contact captured.", ar:"قام بمتابعة العميل وأخذ بيانات التواصل."}, photo:false}
          ]}
          },
          shopper:{
          ops:{id:"ops", name:{en:"Operations", ar:"التشغيل"}, weight:40, questions:[
            {id:"op1", q:{en:"Store is clean and showcases are spotless.", ar:"المحل نظيف والواجهات الزجاجية لامعة."}, photo:false},
            {id:"op2", q:{en:"Staff appearance matches luxury standards.", ar:"مظهر الموظف مطابق لمعايير الفخامة."}, photo:false},
            {id:"op3", q:{en:"Phone usage is minimal and professional.", ar:"استخدام الجوال محدود وباحترافية."}, photo:false}
          ]},
          svc:{id:"svc", name:{en:"Customer service", ar:"خدمة العملاء"}, weight:40, questions:[
            {id:"sv1", q:{en:"Warm greeting within 10 seconds.", ar:"ترحيب خلال 10 ثوانٍ."}, photo:false},
            {id:"sv2", q:{en:"Asked discovery questions (budget/style/occasion).", ar:"طرح أسئلة لفهم الاحتياج (ميزانية/ستايل/مناسبة)."}, photo:false},
            {id:"sv3", q:{en:"Presented 2–3 options with clear benefits.", ar:"عرض 2–3 خيارات مع توضيح المميزات."}, photo:false},
            {id:"svX", q:{en:"Introduced themselves and asked open-ended questions before showing items.", ar:"قدّم نفسه وطرح أسئلة مفتوحة قبل عرض القطع."}, photo:false},
          ]},
          daily:{id:"daily", name:{en:"Daily sales basics", ar:"أساسيات البيع اليومية"}, weight:20, questions:[
            {id:"ds1", q:{en:"Knows today’s targets and focuses on upsell.", ar:"يعرف هدف اليوم ويركز على رفع قيمة السلة."}, photo:false},
            {id:"ds2", q:{en:"Followed up with client/contact captured.", ar:"قام بمتابعة العميل وأخذ بيانات التواصل."}, photo:false}
          ]}
          ,
    probation:{
      probation_attendance:{id:"probation_attendance", name:{en:"Attendance & Regularity", ar:"الانتظام والحضور"}, weight:60, questions:[
        {id:"p1", q:{en:"Arrives on time during probation", ar:"يحضر في الوقت خلال فترة التجربة"}, type:"boolean", dir:"high", photo:false},
        {id:"p2", q:{en:"Unscheduled absences (0=none)", ar:"الغياب بدون إذن (0 = لا يوجد)"}, type:"number", dir:"low", opts:{min:0, max:10}, photo:false},
        {id:"p3", q:{en:"Follows daily opening/closing checklist", ar:"يلتزم بمهام الافتتاح/الإغلاق اليومية"}, type:"scale", dir:"high", opts:{min:1, max:5}, photo:false},
        {id:"p4", q:{en:"Adheres to mobile phone policy", ar:"يلتزم بسياسة استخدام الجوال"}, type:"boolean", dir:"high", photo:false}
      ]},
      probation_behavior:{id:"probation_behavior", name:{en:"Professionalism", ar:"الاحترافية"}, weight:40, questions:[
        {id:"p5", q:{en:"Follows dress code and grooming standards", ar:"يلتزم بالمظهر والزي"}, type:"scale", dir:"high", opts:{min:1, max:5}, photo:false},
        {id:"p6", q:{en:"Accepts feedback and improves quickly", ar:"يتقبل الملاحظات ويتحسن بسرعة"}, type:"mcq", dir:"high", opts:{items: buildMcqItems("Excellent:1|Good:0.75|OK:0.5|Poor:0.25|Bad:0","ممتاز:1|جيد:0.75|مقبول:0.5|ضعيف:0.25|سيئ:0")}, photo:false},
        {id:"p7", q:{en:"Notes / follow-up", ar:"ملاحظات / متابعة"}, type:"text", photo:false}
      ]}
    }
  }
        },
        evaluations:[],
        sales:{"u_emp1":{month:"2026-01", amount:312000},"u_emp2":{month:"2026-01", amount:188000}},
        labels:{en:{}, ar:{}}
      }
    },
    session:{tenantId:"mogu", userId:null, role:null, lang:"en", route:null}
  };

  let state = loadState();
  
  function refreshBrand(){
    const ten = currentTenant();
    ten.branding = ten.branding || {logo:null, companyName:(ten.companyName||ten.name||ten.id||""), poweredBy:true};
    if(ten.branding.poweredBy === undefined) ten.branding.poweredBy = true;

    const logoEl = document.getElementById('brandLogo');
    const nameEl = document.getElementById('brandName');
    const subEl  = document.getElementById('brandSub');
    if(!logoEl || !nameEl || !subEl) return;

    const hasLogo = !!ten.branding.logo;
    logoEl.src = hasLogo ? ten.branding.logo : "./assets/mogux_logo.png";
    // slightly larger when tenant logo is used
    logoEl.style.height = hasLogo ? "52px" : "44px";

    const company = (ten.branding.companyName || ten.companyName || ten.name || "Mogux").trim();
    // If no tenant logo, keep Mogux name; else show company name
    nameEl.textContent = hasLogo ? company : "Mogux";

    // Subline: powered-by (optional) vs demo tagline
    if(hasLogo){
      if(ten.branding.poweredBy){
        subEl.textContent = t('poweredByMogux');
        subEl.removeAttribute('data-i18n');
      }else{
        subEl.textContent = "";
        subEl.removeAttribute('data-i18n');
      }
    }else{
      subEl.setAttribute('data-i18n','sub');
      subEl.textContent = t('sub');
    }
  }

function ensureTenantFields(){
    Object.values(state.tenants||{}).forEach(ten=>{
      ten.branding = ten.branding || {logo:null, companyName:(ten.companyName||ten.name||ten.id||""), poweredBy:true};
      if(ten.branding.poweredBy === undefined) ten.branding.poweredBy = true;
      ten.sales = ten.sales || {};
      ten.targets = ten.targets || {};
      ten.empTargets = ten.empTargets || ten.employeeTargets || {};
      ten.employeeTargets = ten.employeeTargets || ten.empTargets;
      ten.assignments = ten.assignments || {};
      ten.evaluations = ten.evaluations || [];

      // Normalize role scopes into assignments (manager → branch, area → city)
      const _cities = (ten.cities||[]);
      const _branches = _cities.flatMap(c=>(c.branches||[]).map(b=>({cityId:c.id, branchId:b.id})));
      (ten.users||[]).forEach(u=>{
        ten.assignments = ten.assignments || {};
        const a0 = ten.assignments[u.id];
        if(a0) return;

        const sc = u.scope || {};
        if(u.role==='manager' || u.role==='employee'){
          const bid = sc.branchId || (_branches[0]?.branchId||"");
          const cid = sc.cityId || (_branches.find(x=>x.branchId===bid)?.cityId || _branches[0]?.cityId || "");
          ten.assignments[u.id] = {cityId:cid, branchId:bid};
        } else if(u.role==='area'){
          const cid = sc.cityId || (_cities[0]?.id||"");
          ten.assignments[u.id] = {cityId:cid, branchId:""};
        } else {
          ten.assignments[u.id] = {cityId:"", branchId:""};
        }
      });

      // Ensure checklist question schemas (type/options) exist
      ten.checklists = ten.checklists || {manager:{}, shopper:{}, probation:{}};
      ["manager","shopper","probation"].forEach(kind=>{
        const set = ten.checklists[kind] || {};
        Object.values(set).forEach(cat=>{
          cat.questions = cat.questions || [];
          cat.questions.forEach(q=>{
            q.type = q.type || "boolean";
            q.dir = q.dir || "high";
            if(q.type==="mcq"){
              q.opts = q.opts || {items: buildMcqItems("", "", (q.dir||"high"))};
              if(!Array.isArray(q.opts.items)) q.opts.items = [];
            } else if(q.type==="scale"){
              q.opts = q.opts || {min:1, max:5};
              if(q.opts.min==null) q.opts.min=1;
              if(q.opts.max==null) q.opts.max=5;
            } else if(q.type==="number"){
              q.opts = q.opts || {min:0, max:100};
              if(q.opts.min==null) q.opts.min=0;
              if(q.opts.max==null) q.opts.max=100;
            } else if(q.type==="text"){
              q.opts = q.opts || {};
            } else {
              // boolean
              if(q.opts) delete q.opts;
            }
          });
        });
        ten.checklists[kind]=set;
      });


      const branches = (ten.cities||[]).flatMap(c=>(c.branches||[]));
      const employees = (ten.users||[]).filter(u=>u.role==='employee');
      const managers = (ten.users||[]).filter(u=>u.role==='manager');

      // Stable-ish demo sales values (no randomness so it stays consistent).
      employees.forEach((u,i)=>{
        if(!ten.assignments[u.id]){
          const b = branches[i % Math.max(1, branches.length)];
          ten.assignments[u.id] = b ? b.id : "";
        }
        if(!ten.sales[u.id]) ten.sales[u.id] = {amount: Math.round(120000 + (i*38000)%110000)};
      });
      managers.forEach((u,i)=>{
        if(!ten.sales[u.id]) ten.sales[u.id] = {amount: Math.round(180000 + (i*22000)%90000)};
      });

      // Auto-distribute employee targets if missing (based on assigned branch target).
      const byBranch = {};
      employees.forEach(u=>{
        const bid = ten.assignments[u.id];
        if(!bid) return;
        byBranch[bid]=byBranch[bid]||[]; byBranch[bid].push(u.id);
      });
      Object.entries(byBranch).forEach(([bid,uids])=>{
        const bt = Number(ten.targets[bid]||0);
        const each = Math.round(bt / Math.max(1,uids.length));
        uids.forEach(uid=>{
          if(ten.empTargets[uid]==null) ten.empTargets[uid]=each;
        });
      });

      // Ensure numeric
      Object.keys(ten.empTargets).forEach(uid=> ten.empTargets[uid]=Number(ten.empTargets[uid]||0));
    });
  }
  ensureTenantFields();


  const $ = (q, el=document)=>el.querySelector(q);
  const $$ = (q, el=document)=>Array.from(el.querySelectorAll(q));

  function structuredCloneSafe(o){ return JSON.parse(JSON.stringify(o)); }
  function loadState(){
    try{ const raw=localStorage.getItem(STORAGE_KEY); return raw?JSON.parse(raw):structuredCloneSafe(DEFAULT); }
    catch(e){ return structuredCloneSafe(DEFAULT); }
  }
  function saveState(){ localStorage.setItem(STORAGE_KEY, JSON.stringify(state)); }
  function currentTenant(){ return state.tenants[state.session.tenantId]; }
  function currentUser(){ return currentTenant().users.find(u=>u.id===state.session.userId) || null; }
  function uid(p="id"){ return p+"_"+Math.random().toString(16).slice(2)+Date.now().toString(16); }
function toId(s,p='id'){
  s = String(s||'').trim().toLowerCase();
  s = s.replace(/[^a-z0-9]+/g,'-').replace(/(^-|-$)/g,'');
  return (s ? s : uid(p));
}
function parseCSV(text){
  // basic CSV with quotes support
  const rows=[]; let row=[]; let cur=''; let q=false;
  for(let i=0;i<text.length;i++){
    const c=text[i];
    if(q){
      if(c==='"' && text[i+1]==='"'){ cur+='"'; i++; }
      else if(c==='"'){ q=false; }
      else { cur+=c; }
    } else {
      if(c==='"'){ q=true; }
      else if(c===','){ row.push(cur); cur=''; }
      else if(c==='\n'){ row.push(cur); rows.push(row); row=[]; cur=''; }
      else if(c==='\r'){ /* ignore */ }
      else { cur+=c; }
    }
  }
  row.push(cur); rows.push(row);
  const head = (rows.shift()||[]).map(h=>String(h||'').trim());
  return rows.filter(r=>r.some(x=>String(x||'').trim()!=='')).map(r=>{
    const obj={};
    head.forEach((h,idx)=>{ if(!h) return; obj[h]=String(r[idx]??'').trim(); });
    return obj;
  });
}


function clamp01(x){ x=Number(x); if(!isFinite(x)) return 0; return Math.max(0, Math.min(1, x)); }
function parseOptToken(tok){
  tok = String(tok||'').trim();
  if(!tok) return null;
  const m = tok.match(/^(.*?)(?:\s*:\s*([0-9]*\.?[0-9]+))?\s*$/);
  const label = (m ? m[1] : tok).trim();
  const v = (m && m[2]!=null && m[2]!=='' ? Number(m[2]) : null);
  return {label, v};
}
function splitOptions(str){
  return String(str||'').split('|').map(s=>parseOptToken(s)).filter(Boolean);
}
function buildMcqItems(enStr, arStr, direction){
  const en = splitOptions(enStr);
  const ar = splitOptions(arStr);
  const n = Math.max(en.length, ar.length);
  const dir = (String(direction||"high").toLowerCase()==="low") ? "low" : "high";
  const items = [];
  for(let i=0;i<n;i++){
    const enL = (en[i]?.label || en[i-1]?.label || `Option ${i+1}`).trim();
    const arL = (ar[i]?.label || ar[i-1]?.label || enL).trim();
    const v = (en[i]?.v ?? ar[i]?.v ?? null);
    items.push({en:enL, ar:arL, v});
  }
  // If any points missing, auto-distribute.
  // high: first option is best (1 -> 0). low: first option is worst (0 -> 1).
  if(items.some(it=>it.v==null)){
    const denom = Math.max(1, items.length-1);
    items.forEach((it, idx)=>{
      if(it.v==null){
        it.v = (dir==="low") ? (idx/denom) : (1 - (idx/denom));
      }
    });
  }
  items.forEach(it=> it.v = clamp01(it.v));
  return items;
}
function mcqToString(q, lang){
  const items = (q && q.opts && Array.isArray(q.opts.items)) ? q.opts.items : [];
  if(!items.length) return "";
  return items.map(it=>{
    const label = String(it?.[lang]||'').trim();
    const v = (it?.v==null || label==='' ? '' : `:${Math.round(Number(it.v)*100)/100}`);
    return label + v;
  }).join(' | ');
}
function normFromRange(value, min, max){
  value = Number(value);
  min = Number(min); max = Number(max);
  if(!isFinite(value) || !isFinite(min) || !isFinite(max) || max===min) return 0;
  return clamp01((value - min) / (max - min));
}
function normalizeAnswerValue(q, raw){
  const type = (q && q.type) ? String(q.type).toLowerCase() : "boolean";
  const dir = (q && q.dir && String(q.dir).toLowerCase()==="low") ? "low" : "high";

  if(type==="boolean"){
    const v = clamp01(raw);
    return (dir==="low") ? (1 - v) : v;
  }
  if(type==="mcq"){
    // MCQ uses explicit option points (0–1). Direction is handled by points.
    return clamp01(raw);
  }
  if(type==="scale"){
    const min = (q.opts && q.opts.min!=null) ? q.opts.min : 1;
    const max = (q.opts && q.opts.max!=null) ? q.opts.max : 5;
    const v = normFromRange(raw, min, max);
    return (dir==="low") ? (1 - v) : v;
  }
  if(type==="number"){
    const min = (q.opts && q.opts.min!=null) ? q.opts.min : 0;
    const max = (q.opts && q.opts.max!=null) ? q.opts.max : 100;
    const v = normFromRange(raw, min, max);
    return (dir==="low") ? (1 - v) : v;
  }
  return null; // text (not scored)
}


function getAssign(userId){
  const ten=currentTenant();
  const a = ten.assignments?.[userId];
  if(!a) return {cityId:'', branchId:''};
  if(typeof a === 'string'){
    const bb = branchById(a);
    return {cityId: bb?bb.city.id:'', branchId: a};
  }
  return {cityId: a.cityId||'', branchId: a.branchId||''};
}
function sessionScope(){
  const role=state.session.role;
  const uid=state.session.userId;
  const a=getAssign(uid);
  if(role==='manager'){ return {cityId:a.cityId, branchId:a.branchId}; }
  if(role==='area'){ return {cityId:a.cityId}; }
  if(role==='employee'){ return {employeeId:uid, cityId:a.cityId, branchId:a.branchId}; }
  return {}; // admin + sales + shopper
}
function inScope(obj, scope){
  if(scope.employeeId && obj.employeeId && obj.employeeId!==scope.employeeId) return false;
  if(scope.cityId && obj.cityId && obj.cityId!==scope.cityId) return false;
  if(scope.branchId && obj.branchId && obj.branchId!==scope.branchId) return false;
  return true;
}
function scopedEmployeeIds(){
  const ten=currentTenant();
  const scope=sessionScope();
  const employees=(ten.users||[]).filter(u=>u.role==='employee');
  if(scope.employeeId) return [scope.employeeId];
  if(scope.branchId){
    return employees.filter(u=>getAssign(u.id).branchId===scope.branchId).map(u=>u.id);
  }
  if(scope.cityId){
    const city = (ten.cities||[]).find(c=>c.id===scope.cityId);
    const bids = (city?.branches||[]).map(b=>b.id);
    return employees.filter(u=>bids.includes(getAssign(u.id).branchId)).map(u=>u.id);
  }
  return employees.map(u=>u.id);
}
function scopeLabel(){
  const ten=currentTenant(); const lang=state.session.lang;
  const scope=sessionScope();
  if(state.session.role==='admin' || state.session.role==='sales') return t('allAccess');
  if(state.session.role==='shopper') return t('nav_shop');
  const parts=[];
  if(scope.cityId){
    const c=(ten.cities||[]).find(x=>x.id===scope.cityId);
    if(c) parts.push(c.name[lang]);
  }
  if(scope.branchId){
    const b=branchById(scope.branchId);
    if(b) parts.push(b.branch.name[lang]);
  }
  if(scope.employeeId){
    const u=ten.users.find(x=>x.id===scope.employeeId);
    if(u) parts.push(u.name);
  }
  return parts.join(" • ") || t('allAccess');
}




  function t(key){
    const lang = state.session.lang||"en";
    const ten = currentTenant();
    const ov = ten?.labels?.[lang]?.[key];
    if(ov) return ov;
    return (I18N[lang]&&I18N[lang][key]) || key;
  }
  function applyI18n(){
    document.documentElement.lang = state.session.lang;
    document.documentElement.dir = state.session.lang==="ar"?"rtl":"ltr";
    $$('[data-i18n]').forEach(el=>{ el.textContent = t(el.getAttribute('data-i18n')); });
  }

  function toast(msg){ const el=$('#toast'); el.textContent=msg; el.style.display='block'; clearTimeout(toast._t); toast._t=setTimeout(()=>el.style.display='none', 2200); }

  function money(n){
    try{ return new Intl.NumberFormat(state.session.lang==="ar"?"ar-SA":"en-CA", {style:"currency", currency:"CAD", maximumFractionDigits:0}).format(n||0); }
    catch(e){ return (n||0).toLocaleString()+" CAD"; }
  }

  function detectTenantFromHost(){
    try{
      const host = (location.hostname||"").toLowerCase();
      // expects <subdomain>.mogux.ca (or any domain you deploy)
      const parts = host.split('.').filter(Boolean);
      if(parts.length >= 3){
        const sub = parts[0];
        if(sub && sub!=="www" && sub!=="app"){
          const match = Object.values(state.tenants).find(t=>String(t.subdomain||'').toLowerCase()===sub);
          if(match){
            state.session.tenantId = match.id;
            state.session.hostTenantLocked = true;
            return;
          }
        }
      }
    }catch(e){}
    state.session.hostTenantLocked = false;
  }



  function syncTenantSelect(){
    const sel=$('#tenantSelect'); 
    sel.innerHTML='';
    const role = state.session.role;

    // Detect tenant from host subdomain once per load/session
    if(state.session.hostTenantLocked==null) detectTenantFromHost();

    const locked = !!state.session.hostTenantLocked && role!=='superadmin';
    const canSwitch = (role==='superadmin') || (!state.session.userId && !state.session.role && !locked);

    const tenants = Object.values(state.tenants);
    const list = locked ? tenants.filter(t=>t.id===state.session.tenantId) : tenants;

    list.forEach(ten=>{
      const opt=document.createElement('option'); 
      opt.value=ten.id; 
      opt.textContent=`${ten.companyName} (${ten.subdomain})`; 
      sel.appendChild(opt);
    });

    sel.value=state.session.tenantId;

    // Hide selector for non-superadmin once logged in (tenant isolation feel)
    const chip = sel.closest('.chip');
    if(chip){
      if(role && role!=='superadmin') chip.style.display='none';
      else chip.style.display='flex';
    }

    sel.disabled = !canSwitch;
    sel.onchange=()=>{
      if(!canSwitch) return;
      state.session.tenantId=sel.value; 
      state.session.userId=null; 
      state.session.role=null; 
      state.session.route=null;
      state.session.hostTenantLocked=false;
      saveState(); 
      render();
    };
  }
function showAuth(){ $('#auth').style.display='block'; $('#shell').style.display='none'; renderAuthSelectors(); }

  function renderAuthSelectors(){
    const ten=currentTenant();
    const roleSel=$('#roleSelect');
    const userSel=$('#userSelect');
    roleSel.innerHTML='';
    [
      {k:'superadmin', label:t('role_superadmin')},
      {k:'admin', label:t('role_admin')},
      {k:'sales', label:t('role_sales')},
      {k:'area', label:t('role_area')},
      {k:'manager', label:t('role_manager')},
      {k:'employee', label:t('role_employee')},
      {k:'shopper', label:t('role_shopper')}
    ].forEach(r=>{ const o=document.createElement('option'); o.value=r.k; o.textContent=r.label; roleSel.appendChild(o); });

    function fillUsers(){
      userSel.innerHTML='';
      const role = roleSel.value;
      const users = (role==='superadmin') ? (state.platformUsers||[]) : ten.users.filter(u=>u.role===role);
      users.forEach(u=>{ const o=document.createElement('option'); o.value=u.id; o.textContent=`${u.name} — ${u.email}`; userSel.appendChild(o); });
      if(users[0]) userSel.value=users[0].id;
    }

    roleSel.value='admin';
    roleSel.onchange=fillUsers;
    fillUsers();

    $('#enterBtn').onclick=()=>{
      state.session.role=roleSel.value; state.session.userId=userSel.value; state.session.route=null; saveState(); render();
    };
  }

  function logout(){ state.session.userId=null; state.session.role=null; state.session.route=null; saveState(); render(); }
  function resetDemo(){ localStorage.removeItem(STORAGE_KEY); state=structuredCloneSafe(DEFAULT); saveState(); toast(t('resetDone')); detectTenantFromHost();
    syncTenantSelect(); render(); }

  const ROUTES = {
    overview:{roles:['admin','sales','area','manager','employee'], label:'nav_overview', render:renderOverview},
    reports:{roles:['admin','sales','area','manager'], label:'nav_reports', render:renderReports},
    eval:{roles:['admin','sales','area','manager'], label:'nav_eval', render:renderEvaluation},
    my:{roles:['employee'], label:'nav_my', render:renderMy},
    shop:{roles:['shopper'], label:'nav_shop', render:renderShopper},
    admin:{roles:['admin'], label:'nav_admin', render:renderAdmin},
    platform:{roles:['superadmin'], label:'nav_platform', render:renderPlatform}
  };

  function navItems(role){
    return Object.entries(ROUTES)
      .filter(([k,r])=>r.roles.includes(role))
      .map(([k,r])=>({key:k, label:t(r.label)}));
  }

  function setRoute(key){ state.session.route=key; saveState(); render(); }

  function renderNav(){
    const role=state.session.role;
    const nav=$('#nav'); nav.innerHTML='';
    navItems(role).forEach(it=>{
      const a=document.createElement('a'); a.href='#'+it.key; a.className=(state.session.route===it.key)?'active':'';
      a.innerHTML=`<span>${it.label}</span><small>›</small>`;
      a.onclick=(e)=>{ e.preventDefault(); setRoute(it.key); };
      nav.appendChild(a);
    });
    const out=document.createElement('a'); out.href='#logout'; out.style.marginTop='8px'; out.innerHTML=`⎋ <span>${t('logout')}</span>`;
    out.onclick=(e)=>{ e.preventDefault(); logout(); };
    nav.appendChild(out);
  }

  // KPIs
  function opsScore(){
    const ten=currentTenant();
    const scope=sessionScope();
    const ev=(ten.evaluations||[]).filter(e=>inScope(e, scope));
    if(!ev.length) return 82;
    return Math.round(ev.reduce((a,x)=>a+Number(x.score||0),0)/ev.length);
  }
  function visits(){
    const ten=currentTenant();
    const scope=sessionScope();
    return (ten.evaluations||[]).filter(e=>e.type==='shopper' && inScope(e, scope)).length;
  }

  function render(){
    applyI18n();
    $('#tenantBadge').textContent=currentTenant().subdomain;

    const user=currentUser();
    const authed=!!user;
    $('#authBtn').innerHTML = authed ? `⎋ <span>${t('logout')}</span>` : `🔐 <span>${t('login')}</span>`;
    $('#authBtn').onclick = ()=> authed ? logout() : showAuth();

    if(!authed){
      $('#auth').style.display='block';
      $('#shell').style.display='none';
      renderAuthSelectors();
      return;
    }

    $('#auth').style.display='none';
    $('#shell').style.display='grid';

    $('#whoName').textContent=user.name;
    $('#whoRole').textContent=state.session.role;

    if(!state.session.route || !ROUTES[state.session.route] || !ROUTES[state.session.route].roles.includes(state.session.role)){
      state.session.route = navItems(state.session.role)[0]?.key || 'overview';
      saveState();
    }

    renderNav();

    const view=$('#view');
    view.innerHTML='';
    ROUTES[state.session.route].render(view);
  }

  function kpiCard(title, value, tone){
    return `<div class="card"><div class="row"><h3 style="margin:0">${title}</h3><span class="pill ${tone}">${tone.toUpperCase()}</span></div><div class="big" style="margin-top:8px">${value}</div><div class="muted" style="margin-top:6px">—</div></div>`;
  }

  function branchById(id){
    for(const c of currentTenant().cities){
      const b=c.branches.find(x=>x.id===id);
      if(b) return {city:c, branch:b};
    }
    return null;
  }
  function renderPlatform(area){
    const lang = state.session.lang;
    area.innerHTML = `
      <div class="row" style="align-items:flex-start">
        <div style="min-width:0">
          <h2 style="margin:0">${t('platformTitle')}</h2>
          <div class="muted" style="margin-top:6px">${t('platformDesc')}</div>
        </div>
        ${state.session.hostTenantLocked?`<div class="pill">🔒 ${t('lockTenant')}</div>`:''}
      </div>

      <div class="divider"></div>

      <div class="grid c2" style="gap:12px">
        <div class="card">
          <h3 style="margin:0 0 6px">${t('createTenant')}</h3>
          <div class="muted" style="font-size:12px">Example: companyName = "Mansour Gold", subdomain = "mansour"</div>
          <div class="divider"></div>
          <div class="form">
            <div class="field">
              <label>${t('companyName')}</label>
              <input id="pt_company" placeholder="Mansour Gold" />
            </div>
            <div class="field">
              <label>${t('subdomainLabel')}</label>
              <input id="pt_sub" placeholder="mansour" />
              <div class="muted" style="font-size:12px; margin-top:6px">Will be used as: https://&lt;subdomain&gt;.mogux.ca</div>
            </div>
            <button class="btn primary" id="pt_create">＋ ${t('create')}</button>
            <div class="muted" style="font-size:12px; margin-top:8px">A default tenant admin user will be created automatically.</div>
          </div>
        </div>

        <div class="card">
          <h3 style="margin:0 0 6px">${t('tenants')}</h3>
          <div class="divider"></div>
          <div class="tableWrap">
            <table>
              <thead><tr>
                <th>${t('colCompany')}</th>
                <th>${t('colSubdomain')}</th>
                <th>${t('colUsers')}</th>
                <th>${t('colBranches')}</th>
                <th>${t('colEvals')}</th>
                <th></th>
              </tr></thead>
              <tbody>
                ${Object.values(state.tenants).map(ten=>{
                  const users=(ten.users||[]).length;
                  const branches = (ten.cities||[]).reduce((a,c)=>a+(c.branches||[]).length,0);
                  const evals = (ten.evaluations||[]).length;
                  const url = `https://${ten.subdomain}.mogux.ca`;
                  return `
                    <tr>
                      <td><b>${escapeHtml(ten.companyName||ten.id)}</b></td>
                      <td><span class="pill">${escapeHtml(ten.subdomain||ten.id)}</span></td>
                      <td>${users}</td>
                      <td>${branches}</td>
                      <td>${evals}</td>
                      <td style="white-space:nowrap; text-align:right">
                        <button class="btn" onclick="platformOpenTenant('${ten.id}')">↩ ${t('openTenant')}</button>
                      </td>
                    </tr>
                  `;
                }).join('')}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    `;

    $('#pt_create').onclick = ()=>{
      const company = ($('#pt_company').value||'').trim();
      const sub = ($('#pt_sub').value||'').trim().toLowerCase().replace(/[^a-z0-9-]/g,'-').replace(/(^-|-$)/g,'');
      if(!company || !sub){ toast(t('missingFields')); return; }
      const id = toId(company,'ten');
      // Ensure unique subdomain
      const exists = Object.values(state.tenants).some(t=>String(t.subdomain||'').toLowerCase()===sub);
      if(exists){ toast(t('subdomainExists')); return; }

      state.tenants[id] = {
        id,
        name: company,
        companyName: company,
        subdomain: sub,
        cities: [],
        branches: {},
        users: [
          {id:'adm_'+sub, name:'Tenant Admin', email:`admin@${sub}.mogux.ca`, role:'admin', scope:{type:'all'}},
          {id:'sales_'+sub, name:'Sales Director', email:`sales@${sub}.mogux.ca`, role:'sales', scope:{type:'all'}},
          {id:'area_'+sub, name:'City Manager', email:`area@${sub}.mogux.ca`, role:'area', scope:{type:'city', cityId:''}},
          {id:'mgr_'+sub, name:'Branch Manager', email:`manager@${sub}.mogux.ca`, role:'manager', scope:{type:'branch', branchId:''}},
          {id:'emp_'+sub, name:'Employee', email:`employee@${sub}.mogux.ca`, role:'employee', scope:{type:'branch', branchId:''}},
          {id:'shop_'+sub, name:'Mystery Shopper', email:`shopper@${sub}.mogux.ca`, role:'shopper', scope:{type:'entry'}}
        ],
        assignments: {},
        targets: {},
        employeeTargets: {},
        checklists: {manager:{}, shopper:{}, probation:{}},
        evaluations: [],
        sales: {},
        labels: {en:{}, ar:{}},
        branding: {logo:null, companyName: company, poweredBy:true}
      };
      ensureTenantFields();
      saveState();
      syncTenantSelect();
      toast(t('tenantAdminCreated'));
      render();
    };
  }

  function platformOpenTenant(tenantId){
    // In a real deployment, you open https://<subdomain>.mogux.ca.
    // In demo, we switch tenant context.
    state.session.tenantId = tenantId;
    state.session.userId = null;
    state.session.role = null;
    state.session.route = null;
    state.session.hostTenantLocked = false;
    saveState();
    syncTenantSelect();
    render();
    showAuth();
  }



  function renderOverview(root){
    const ten=currentTenant();
    const ops=opsScore();
    const sa=salesAttainment();
    const vi=visits();
    const rk=risk();

    root.innerHTML = `
      <div class="row">
        <div>
          <div class="pill">🏷️ ${ten.companyName} • ${ten.subdomain}</div>
          <h2 style="margin:10px 0 0; font-size:22px; letter-spacing:-.3px">${t('nav_overview')}</h2>
          <div class="muted" style="margin-top:6px">City → Branch → Employee</div><div class="row" style="margin-top:10px; justify-content:flex-start; gap:10px; flex-wrap:wrap"><span class="pill">🔒 ${t('scope')}: ${escapeHtml(scopeLabel())}</span></div>
        </div>
        <div class="row" style="gap:10px; flex-wrap:wrap; justify-content:flex-end">
          ${state.session.role!=='employee' ? `<button class="btn" onclick="setRoute('reports')">📊 ${t('nav_reports')}</button>` : ''}
          ${state.session.role==='admin' ? `<button class="btn primary" onclick="setRoute('admin')">⚙️ ${t('nav_admin')}</button>` : ''}
        </div>
      </div>
      <div class="divider"></div>
      <div class="grid kpis">
        ${kpiCard(t('kpi_ops'), ops, ops>=85?'good':ops>=70?'warn':'bad')}
        ${kpiCard(t('kpi_sales'), sa+'%', sa>=100?'good':sa>=80?'warn':'bad')}
        ${kpiCard(t('kpi_visits'), vi, 'warn')}
        ${kpiCard(t('kpi_risk'), rk, rk===0?'good':'bad')}
      </div>
      <div class="grid c2" style="margin-top:14px">
        <div class="card">
          <div class="row"><h3 style="margin:0">Sales</h3><span class="pill">CAD</span></div>
          <div class="divider"></div>
          ${scopedEmployeeIds().map(uid=>{ const s=ten.sales?.[uid]||{amount:0}; const u=ten.users.find(x=>x.id===uid); return `<div class="row" style="margin:10px 0"><b>${u?u.name:'—'}</b><span class="muted">${money(s.amount||0)}</span></div>`; }).join('')}
        </div>
        <div class="card">
          <div class="row"><h3 style="margin:0">Targets</h3><span class="pill">Monthly</span></div>
          <div class="divider"></div>
          ${(()=>{ const scope=sessionScope(); const cities=ten.cities||[]; const bids = scope.branchId?[scope.branchId] : scope.cityId? ((cities.find(c=>c.id===scope.cityId)?.branches||[]).map(b=>b.id)) : Object.keys(ten.targets||{}); return bids.slice(0,5).map(bid=>{ const v=ten.targets?.[bid]||0;
            const b=branchById(bid);
            return `<div class="row" style="margin:10px 0"><b>${b?b.branch.name[state.session.lang]:'—'}</b><span class="muted">${money(v||0)}</span></div>`;
          }).join(''); })()}
        </div>
      </div>
    `;
  }

  function renderReports(root){
    const ten=currentTenant();
    const lang=state.session.lang;
    ensureTenantFields();

    ten.__rep = ten.__rep || {cityId:'', branchId:'', empId:''};
    const f=ten.__rep;

    // Role scope enforcement
    const _scope=sessionScope();
    if(state.session.role==='manager'){
      if(_scope.cityId) f.cityId=_scope.cityId;
      if(_scope.branchId) f.branchId=_scope.branchId;
      f.empId='';
    }else if(state.session.role==='area'){
      if(_scope.cityId) f.cityId=_scope.cityId;
      if(f.branchId){ const bb=branchById(f.branchId); if(!bb || bb.city.id!==_scope.cityId) f.branchId=''; }
      if(f.empId && f.branchId==='') f.empId='';
    }

    const lockCity = (state.session.role==='manager' || state.session.role==='area') && !!_scope.cityId;
    const lockBranch = (state.session.role==='manager') && !!_scope.branchId;

    const cities = ten.cities||[];
    const allBranches = cities.flatMap(c=>(c.branches||[]).map(b=>({city:c, branch:b})));

    const cityObj = f.cityId ? cities.find(c=>c.id===f.cityId) : null;
    const branchesForCity = cityObj ? (cityObj.branches||[]).map(b=>({city:cityObj, branch:b})) : allBranches;

    // Keep filters consistent (if user picks a city, drop incompatible branch/employee)
    if(f.cityId && f.branchId){
      const bb = branchById(f.branchId);
      if(!bb || bb.city.id !== f.cityId){ f.branchId=''; f.empId=''; saveState(); }
    }

    const employees = (ten.users||[]).filter(u=>u.role==='employee');

    const branchEmployees = (branchId)=>{
      const ids = employees
        .filter(u=>getAssign(u.id).branchId===branchId)
        .map(u=>u.id);
      return ids.length ? ids : ((state.session.role==='manager' || state.session.role==='area') ? [] : employees.map(u=>u.id)); // fallback
    };
    const cityEmployees = (cityId)=>{
      const city = cities.find(c=>c.id===cityId);
      const branchIds = (city?.branches||[]).map(b=>b.id);
      const ids = employees.filter(u=>branchIds.includes(getAssign(u.id).branchId)).map(u=>u.id);
      return ids.length ? ids : ((state.session.role==='manager' || state.session.role==='area') ? [] : employees.map(u=>u.id));
    };

    const cityOptions=[{id:'', name:`${t('all')} ${t('filter_city')}`}].concat(cities.map(c=>({id:c.id, name:c.name[lang]})));
    const branchOptions=[{id:'', name:`${t('all')} ${t('filter_branch')}`}].concat(branchesForCity.map(x=>({id:x.branch.id, name:x.branch.name[lang]})));
    let empList = employees;
    if(f.branchId){
      const ids=new Set(branchEmployees(f.branchId));
      empList = employees.filter(u=>ids.has(u.id));
    }else if(f.cityId){
      const ids=new Set(cityEmployees(f.cityId));
      empList = employees.filter(u=>ids.has(u.id));
    }
    const empOptions=[{id:'', name:`${t('all')} ${t('filter_employee')}`}].concat(empList.map(u=>({id:u.id, name:u.name})));

    const ev = (ten.evaluations||[]).filter(e=>{
      if(f.cityId && e.cityId!==f.cityId) return false;
      if(f.branchId && e.branchId!==f.branchId) return false;
      if(f.empId && e.employeeId!==f.empId) return false;
      return true;
    }).slice().sort((a,b)=>b.date-a.date);

    const mgr = ev.filter(e=>e.type==='manager');
    const shp = ev.filter(e=>e.type==='shopper');
    const prb = ev.filter(e=>e.type==='probation');

    const avg = (arr)=> arr.length ? Math.round(arr.reduce((a,x)=>a+Number(x.score||0),0)/arr.length) : 0;
    const tone = (s)=> s>=85?'good':s>=70?'warn':'bad';

    const mgrAvg = avg(mgr);
    const shpAvg = avg(shp);
    const prbAvg = avg(prb);
    const riskCount = ev.filter(e=>Number(e.score||0)<70).length;
    const visitsCount = shp.length;

    const clampPct = (p)=>Math.max(0, Math.min(100, Math.round(p||0)));
    const bar = (pct)=>`<div class="progress" title="${clampPct(pct)}%"><i style="width:${clampPct(pct)}%"></i></div>`;

    const salesForEmployee = (uid)=> Number(ten.sales?.[uid]?.amount||0);
    const targetForEmployee = (uid)=> Number(ten.empTargets?.[uid]||0);

    const salesForBranch = (bid)=>{
      const ids = branchEmployees(bid);
      return ids.reduce((a,uid)=>a+salesForEmployee(uid),0);
    };
    const targetForBranch = (bid)=> Number(ten.targets?.[bid]||0);

    const salesForCity = (cid)=>{
      const city = cities.find(c=>c.id===cid);
      const bids = (city?.branches||[]).map(b=>b.id);
      return bids.reduce((a,bid)=>a+salesForBranch(bid),0);
    };
    const targetForCity = (cid)=>{
      const city = cities.find(c=>c.id===cid);
      const bids = (city?.branches||[]).map(b=>b.id);
      return bids.reduce((a,bid)=>a+targetForBranch(bid),0);
    };

    const salesForCompany = ()=>{
      const bids = allBranches.map(x=>x.branch.id);
      return bids.reduce((a,bid)=>a+salesForBranch(bid),0);
    };
    const targetForCompany = ()=>{
      const bids = allBranches.map(x=>x.branch.id);
      return bids.reduce((a,bid)=>a+targetForBranch(bid),0);
    };

    const level = f.empId ? 'employee' : f.branchId ? 'branch' : f.cityId ? 'city' : 'company';

    const scopeSales =
      level==='employee' ? salesForEmployee(f.empId) :
      level==='branch' ? salesForBranch(f.branchId) :
      level==='city' ? salesForCity(f.cityId) :
      salesForCompany();

    const scopeTarget =
      level==='employee' ? targetForEmployee(f.empId) :
      level==='branch' ? targetForBranch(f.branchId) :
      level==='city' ? targetForCity(f.cityId) :
      targetForCompany();

    const attainment = Math.round((scopeSales/Math.max(1,scopeTarget))*100);

    const breadcrumb = ()=>{
      const parts = [`<span class="pill" style="gap:6px">🏢 ${t('company')}</span>`];
      if(f.cityId){
        const c=cities.find(x=>x.id===f.cityId);
        parts.push(`<span class="pill" style="gap:6px; cursor:pointer" data-bc="city">🏙️ ${c?c.name[lang]:t('filter_city')}</span>`);
      }
      if(f.branchId){
        const b=branchById(f.branchId);
        parts.push(`<span class="pill" style="gap:6px; cursor:pointer" data-bc="branch">🏬 ${b?b.branch.name[lang]:t('filter_branch')}</span>`);
      }
      if(f.empId){
        const u=ten.users.find(x=>x.id===f.empId);
        parts.push(`<span class="pill" style="gap:6px">👤 ${u?u.name:t('filter_employee')}</span>`);
      }
      return `<div class="row" style="justify-content:flex-start; gap:10px; flex-wrap:wrap">${parts.join('<span class="muted">›</span>')}</div>`;
    };

    const sectionTitle =
      level==='company' ? t('company') :
      level==='city' ? t('filter_city') :
      level==='branch' ? t('filter_branch') :
      t('filter_employee');

    const breakdownCard = ()=>{
      // Company → cities
      if(level==='company'){
        const rows = cities.map(c=>{
          const evc = (ten.evaluations||[]).filter(e=>e.cityId===c.id);
          const mgrc = evc.filter(e=>e.type==='manager');
          const shpc = evc.filter(e=>e.type==='shopper');
          const mgrAvgC = avg(mgrc);
          const shpAvgC = avg(shpc);
          const riskC = evc.filter(e=>Number(e.score||0)<70).length;
          const visitsC = shpc.length;
          const s = salesForCity(c.id);
          const t0 = targetForCity(c.id);
          const att = Math.round((s/Math.max(1,t0))*100);
          return {id:c.id, name:c.name[lang], mgrAvgC, shpAvgC, riskC, visitsC, att};
        });
        return `
          <div class="card" style="margin-top:14px">
            <div class="row"><h3 style="margin:0">${t('breakdown')} — ${t('filter_city')}</h3><span class="muted">${rows.length}</span></div>
            <div class="divider"></div>
            <table>
              <thead><tr><th>${t('filter_city')}</th><th>${t('managerAvg')}</th><th>${t('shopperAvg')}</th><th>${t('kpi_sales')}</th><th>${t('kpi_risk')}</th><th>${t('kpi_visits')}</th><th></th></tr></thead>
              <tbody>
                ${rows.map(r=>`
                  <tr style="cursor:pointer" data-city="${r.id}">
                    <td><b>${r.name}</b></td>
                    <td><span class="pill ${tone(r.mgrAvgC||0)}">${r.mgrAvgC||'—'}</span></td>
                    <td><span class="pill ${tone(r.shpAvgC||0)}">${r.shpAvgC||'—'}</span></td>
                    <td style="min-width:170px">${bar(r.att)}<div class="muted" style="font-size:12px; margin-top:6px">${clampPct(r.att)}%</div></td>
                    <td><span class="pill ${r.riskC? 'bad':'good'}">${r.riskC}</span></td>
                    <td><span class="pill">${r.visitsC}</span></td>
                    <td class="muted">›</td>
                  </tr>
                `).join('')}
              </tbody>
            </table>
          </div>
        `;
      }

      // City → branches
      if(level==='city'){
        const rows = (cityObj?.branches||[]).map(b=>{
          const evb = (ten.evaluations||[]).filter(e=>e.branchId===b.id);
          const mgrb = evb.filter(e=>e.type==='manager');
          const shpb = evb.filter(e=>e.type==='shopper');
          const mgrAvgB = avg(mgrb);
          const shpAvgB = avg(shpb);
          const riskB = evb.filter(e=>Number(e.score||0)<70).length;
          const visitsB = shpb.length;
          const s = salesForBranch(b.id);
          const t0 = targetForBranch(b.id);
          const att = Math.round((s/Math.max(1,t0))*100);
          return {id:b.id, name:b.name[lang], mgrAvgB, shpAvgB, riskB, visitsB, att};
        });
        return `
          <div class="card" style="margin-top:14px">
            <div class="row"><h3 style="margin:0">${t('breakdown')} — ${t('filter_branch')}</h3><span class="muted">${rows.length}</span></div>
            <div class="divider"></div>
            <table>
              <thead><tr><th>${t('filter_branch')}</th><th>${t('managerAvg')}</th><th>${t('shopperAvg')}</th><th>${t('kpi_sales')}</th><th>${t('kpi_risk')}</th><th>${t('kpi_visits')}</th><th></th></tr></thead>
              <tbody>
                ${rows.map(r=>`
                  <tr style="cursor:pointer" data-branch="${r.id}">
                    <td><b>${r.name}</b></td>
                    <td><span class="pill ${tone(r.mgrAvgB||0)}">${r.mgrAvgB||'—'}</span></td>
                    <td><span class="pill ${tone(r.shpAvgB||0)}">${r.shpAvgB||'—'}</span></td>
                    <td style="min-width:170px">${bar(r.att)}<div class="muted" style="font-size:12px; margin-top:6px">${clampPct(r.att)}%</div></td>
                    <td><span class="pill ${r.riskB? 'bad':'good'}">${r.riskB}</span></td>
                    <td><span class="pill">${r.visitsB}</span></td>
                    <td class="muted">›</td>
                  </tr>
                `).join('')}
              </tbody>
            </table>
          </div>
        `;
      }

      // Branch → employees
      if(level==='branch'){
        const ids = branchEmployees(f.branchId);
        const rows = ids.map(uid=>{
          const u = ten.users.find(x=>x.id===uid);
          const evu = (ten.evaluations||[]).filter(e=>e.employeeId===uid && e.branchId===f.branchId);
          const mgru = evu.filter(e=>e.type==='manager');
          const shpu = evu.filter(e=>e.type==='shopper');
          const mgrAvgU = avg(mgru);
          const shpAvgU = avg(shpu);
          const riskU = evu.filter(e=>Number(e.score||0)<70).length;
          const s = salesForEmployee(uid);
          const t0 = targetForEmployee(uid);
          const att = Math.round((s/Math.max(1,t0))*100);
          return {id:uid, name:u?u.name:'—', mgrAvgU, shpAvgU, riskU, att};
        });
        return `
          <div class="card" style="margin-top:14px">
            <div class="row"><h3 style="margin:0">${t('breakdown')} — ${t('filter_employee')}</h3><span class="muted">${rows.length}</span></div>
            <div class="divider"></div>
            <table>
              <thead><tr><th>${t('filter_employee')}</th><th>${t('managerAvg')}</th><th>${t('shopperAvg')}</th><th>${t('kpi_sales')}</th><th>${t('kpi_risk')}</th><th></th></tr></thead>
              <tbody>
                ${rows.map(r=>`
                  <tr style="cursor:pointer" data-emp="${r.id}">
                    <td><b>${r.name}</b></td>
                    <td><span class="pill ${tone(r.mgrAvgU||0)}">${r.mgrAvgU||'—'}</span></td>
                    <td><span class="pill ${tone(r.shpAvgU||0)}">${r.shpAvgU||'—'}</span></td>
                    <td style="min-width:170px">${bar(r.att)}<div class="muted" style="font-size:12px; margin-top:6px">${clampPct(r.att)}%</div></td>
                    <td><span class="pill ${r.riskU? 'bad':'good'}">${r.riskU}</span></td>
                    <td class="muted">›</td>
                  </tr>
                `).join('')}
              </tbody>
            </table>
          </div>
        `;
      }

      // Employee → details
      const u = ten.users.find(x=>x.id===f.empId);
      const sales = scopeSales;
      const target = scopeTarget;
      const att = Math.round((sales/Math.max(1,target))*100);

      const byCat = ()=>{
        const acc = {};
        mgr.forEach(e=>{
          Object.entries(e.breakdown||{}).forEach(([catId,score])=>{
            acc[catId]=acc[catId]||[];
            acc[catId].push(Number(score||0));
          });
        });
        const cl = (ten.checklists && ten.checklists.manager) ? ten.checklists.manager : (ten.checklists||{});
        const rows = Object.entries(acc).map(([catId,arr])=>{
          const cat = cl[catId];
          return {cat:cat?.name?.[lang]||catId, v:Math.round(arr.reduce((a,x)=>a+x,0)/arr.length)};
        }).sort((a,b)=>b.v-a.v);
        return rows.length ? rows : [];
      };

      const catRows = byCat();

      return `
        <div class="grid c2" style="margin-top:14px">
          <div class="card">
            <div class="row"><h3 style="margin:0">${u?u.name:t('filter_employee')}</h3><span class="pill">Sales</span></div>
            <div class="divider"></div>
            <div class="row"><b>${money(sales)}</b><span class="muted">${t('employeeTarget')}: ${money(target)}</span></div>
            <div style="margin-top:10px">${bar(att)}<div class="muted" style="font-size:12px; margin-top:6px">${clampPct(att)}%</div></div>
          </div>
          <div class="card">
            <div class="row"><h3 style="margin:0">${t('breakdown')}</h3><span class="pill">${catRows.length||0}</span></div>
            <div class="divider"></div>
            ${catRows.length ? catRows.map(r=>`
              <div class="row" style="margin:10px 0"><b>${r.cat}</b><span class="pill ${tone(r.v)}">${r.v}</span></div>
            `).join('') : `<div class="muted">—</div>`}
          </div>
        </div>
      `;
    };

    root.innerHTML = `
      <div class="row">
        <div style="min-width:0">
          <div class="pill">📊 ${t('nav_reports')}</div>
          <h2 style="margin:10px 0 0; font-size:22px; letter-spacing:-.3px">${t('nav_reports')}</h2>
          <div class="muted" style="margin-top:6px">${t('reportsDesc')}</div>
          <div style="margin-top:10px">${breadcrumb()}</div>
        </div>
        <div class="row" style="gap:10px; flex-wrap:wrap; justify-content:flex-end">
          <button class="btn" id="resetFilters">↺ ${t('resetFilters')}</button>
          <button class="btn" id="exportBtn">⬇️ ${t('export')}</button>
        </div>
      </div>
      <div class="divider"></div>

      <div class="grid c3">
        <div class="card"><label>${t('filter_city')}</label><select id="fCity" ${lockCity?'disabled':''}>${cityOptions.map(o=>`<option value="${o.id}" ${o.id===f.cityId?'selected':''}>${o.name}</option>`).join('')}</select></div>
        <div class="card"><label>${t('filter_branch')}</label><select id="fBranch" ${lockBranch?'disabled':''}>${branchOptions.map(o=>`<option value="${o.id}" ${o.id===f.branchId?'selected':''}>${o.name}</option>`).join('')}</select></div>
        <div class="card"><label>${t('filter_employee')}</label><select id="fEmp">${empOptions.map(o=>`<option value="${o.id}" ${o.id===f.empId?'selected':''}>${o.name}</option>`).join('')}</select></div>
      </div>

      <div class="grid kpis" style="margin-top:14px">
        ${kpiCard(t('kpi_ops'), mgrAvg||'—', tone(mgrAvg||0))}
        ${kpiCard(t('kpi_probation'), prbAvg||'—', tone(prbAvg||0))}
        ${kpiCard(t('kpi_visits'), visitsCount, visitsCount===0?'warn':'good')}
        ${kpiCard(t('kpi_sales'), clampPct(attainment)+'%', attainment>=100?'good':attainment>=85?'warn':'bad')}
        ${kpiCard(t('kpi_risk'), riskCount, riskCount===0?'good':'bad')}
      </div>

      <div class="card" style="margin-top:14px">
        <div class="row">
          <div style="min-width:0">
            <h3 style="margin:0">${t('scoreDistribution')}</h3>
            <div class="muted" style="margin-top:6px">${t('records')}: <b>${ev.length}</b></div>
          </div>
          <span class="pill">${level.toUpperCase()}</span>
        </div>
        <div class="divider"></div>
        ${(()=>{
          const buckets=[
            {k:'90–100', a:90, b:100},
            {k:'80–89', a:80, b:89},
            {k:'70–79', a:70, b:79},
            {k:'60–69', a:60, b:69},
            {k:'<60', a:0, b:59}
          ];
          const counts=buckets.map(x=>({k:x.k, c: ev.filter(e=>Number(e.score||0)>=x.a && Number(e.score||0)<=x.b).length}));
          const max=Math.max(1, ...counts.map(x=>x.c));
          return `<div class="grid" style="gap:10px">
            ${counts.map(x=>`<div class="row" style="gap:12px; justify-content:flex-start">
              <div class="muted" style="min-width:70px">${x.k}</div>
              <div class="progress" style="flex:1"><i style="width:${Math.round((x.c/max)*100)}%"></i></div>
              <span class="pill">${x.c}</span>
            </div>`).join('')}
          </div>`;
        })()}
      </div>

      <div class="card" style="margin-top:14px">
        <div class="row">
          <div style="min-width:0">
            <h3 style="margin:0">${sectionTitle}</h3>
            <div class="muted" style="margin-top:6px">${t('records')}: <b>${ev.length}</b></div>
          </div>
          <span class="pill">${level.toUpperCase()}</span>
        </div>
        <div class="divider"></div>
        ${ev.length ? `
          <table>
            <thead><tr><th>Type</th><th>Date</th><th>${t('filter_city')}</th><th>${t('filter_branch')}</th><th>${t('filter_employee')}</th><th>${t('score')}</th></tr></thead>
            <tbody>
              ${ev.slice(0,12).map(e=>{
                const b=branchById(e.branchId);
                const emp=e.employeeId ? ten.users.find(u=>u.id===e.employeeId)?.name : (e.appearance||'—');
                const when=new Date(e.date).toLocaleDateString(lang==="ar"?"ar-SA":"en-CA", {dateStyle:'medium'});
                const t0=tone(Number(e.score||0));
                return `<tr><td>${e.type==='shopper'?'🕵️':(e.type==='probation'?'🧪':'📝')}</td><td>${when}</td><td>${b?.city?.name[lang]||'—'}</td><td>${b?.branch?.name[lang]||'—'}</td><td>${emp}</td><td><span class="pill ${t0}">${e.score}</span></td></tr>`;
              }).join('')}
            </tbody>
          </table>
        ` : `<div class="muted">—</div>`}
      </div>

      ${breakdownCard()}
    `;

    // Events
    $('#fCity').onchange=e=>{
      f.cityId=e.target.value;
      if(!f.cityId){ f.branchId=''; f.empId=''; }
      saveState(); render();
    };
    $('#fBranch').onchange=e=>{
      f.branchId=e.target.value;
      if(!f.branchId) f.empId='';
      saveState(); render();
    };
    $('#fEmp').onchange=e=>{ f.empId=e.target.value; saveState(); render(); };

    $('#resetFilters').onclick=()=>{
      f.cityId=''; f.branchId=''; f.empId='';
      saveState(); render();
    };

    // breadcrumb clicks
    $$('[data-bc="city"]').forEach(el=>el.onclick=()=>{ f.branchId=''; f.empId=''; saveState(); render(); });
    $$('[data-bc="branch"]').forEach(el=>el.onclick=()=>{ f.empId=''; saveState(); render(); });

    // breakdown row clicks
    $$('[data-city]').forEach(tr=>tr.onclick=()=>{ f.cityId=tr.getAttribute('data-city'); f.branchId=''; f.empId=''; saveState(); render(); });
    $$('[data-branch]').forEach(tr=>tr.onclick=()=>{ f.branchId=tr.getAttribute('data-branch'); f.empId=''; saveState(); render(); });
    $$('[data-emp]').forEach(tr=>tr.onclick=()=>{ f.empId=tr.getAttribute('data-emp'); saveState(); render(); });

    $('#exportBtn').onclick=()=>{
      const rows=[['type','date','city','branch','employee','score','notes']];
      ev.forEach(e=>{
        const b=branchById(e.branchId);
        const emp=e.employeeId ? ten.users.find(u=>u.id===e.employeeId)?.name : (e.appearance||'');
        rows.push([e.type, new Date(e.date).toISOString(), b?.city?.name.en||'', b?.branch?.name.en||'', emp, e.score, (e.notes||'').replace(/\n/g,' ')]);
      });
      const csv=rows.map(r=>r.map(x=>`"${String(x??'').replace(/"/g,'""')}"`).join(',')).join('\n');
      const blob=new Blob([csv], {type:'text/csv;charset=utf-8'});
      const url=URL.createObjectURL(blob);
      const a=document.createElement('a'); a.href=url; a.download='mogux_reports.csv'; document.body.appendChild(a); a.click(); a.remove();
      setTimeout(()=>URL.revokeObjectURL(url), 800);
    };
  }

  async function fileToDataUrl(file){
    return new Promise((res, rej)=>{ const r=new FileReader(); r.onload=()=>res(r.result); r.onerror=()=>rej(r.error); r.readAsDataURL(file); });
  }

  
function scoreFromChecklist(prefix, role){
    const ten=currentTenant();
    const breakdown={};
    const answers={}; // per-question raw answers for future use
    let total=0;
    const cl = (ten.checklists && ten.checklists[role]) ? ten.checklists[role] : ten.checklists;

    Object.values(cl).forEach(cat=>{
      let sum=0;
      let count=0;

      (cat.questions||[]).forEach(q=>{
        const type = (q.type||"boolean").toLowerCase();
        let raw = null;

        if(type==="boolean" || type==="mcq" || type==="scale"){
          raw = document.querySelector(`input[name="${prefix}${q.id}"]:checked`)?.value ?? null;
          raw = (raw==null?null:Number(raw));
          const v = normalizeAnswerValue(q, raw);
          if(v!=null){ sum += v; count += 1; }
          answers[q.id] = {type, value: raw};
        } else if(type==="number"){
          raw = document.getElementById(`${prefix}${q.id}`)?.value ?? null;
          raw = (raw==null || raw==="" ? null : Number(raw));
          const v = normalizeAnswerValue(q, raw);
          if(v!=null){ sum += v; count += 1; }
          answers[q.id] = {type, value: raw};
        } else { // text
          raw = document.getElementById(`${prefix}${q.id}`)?.value ?? "";
          answers[q.id] = {type, value: String(raw||"").trim()};
        }
      });

      const pct = (count ? (sum/count)*100 : 0);
      breakdown[cat.id]=Math.round(pct);
      total += pct*(Number(cat.weight||0)/100);
    });

    return {score:Math.round(total), breakdown, answers};
  }

  function renderChecklist(prefix, role){
    const ten=currentTenant();
    const lang=state.session.lang;
    const cl = (ten.checklists && ten.checklists[role]) ? ten.checklists[role] : ten.checklists;
    return `
      <h3 style="margin:0 0 6px">${t('checklists')}</h3>
      <div class="muted">Auto-calculated score</div>
      <div class="divider"></div>
      <div class="form">
        ${Object.values(cl).map(cat=>`
          <div class="row" style="margin-top:6px"><b>${cat.name[lang]}</b><span class="pill">${cat.weight}%</span></div>
          ${(cat.questions||[]).map(q=>{
            const qt = (q.type||"boolean").toLowerCase();
            const nm = `${prefix}${q.id}`;
            const photoTag = q.photo?`<span class="pill" style="margin-inline-start:8px">📷 ${t('requiredPhoto')}</span>`:'';
            const title = `<div style="min-width:0"><b style="font-size:13px">${escapeHtml(q.q[lang])}</b> ${photoTag}<div class="muted" style="font-size:12px">${escapeHtml(cat.name[lang])}</div></div>`;

            const booleanUi = `
              <div class="row" style="gap:8px">
                <label class="pill good" style="cursor:pointer"><input type="radio" name="${nm}" value="1" ${((q.dir||"high")!=="low")?"checked":""}> ${t('yes')}</label>
                <label class="pill bad" style="cursor:pointer"><input type="radio" name="${nm}" value="0" ${((q.dir||"high")==="low")?"checked":""}> ${t('no')}</label>
              </div>
            `;

            const mcqUi = (()=>{
              const items = (q.opts && Array.isArray(q.opts.items) && q.opts.items.length) ? q.opts.items : buildMcqItems("Excellent:1|Good:0.75|OK:0.5|Poor:0.25|Bad:0","ممتاز:1|جيد:0.75|مقبول:0.5|ضعيف:0.25|سيئ:0",(q.dir||"high"));
              return `
                <div class="row" style="gap:8px; flex-wrap:wrap; justify-content:flex-end">
                  ${items.map((it,i)=>`
                    <label class="pill" style="cursor:pointer"><input type="radio" name="${nm}" value="${it.v}" ${i===0?'checked':''}> ${escapeHtml(it[lang])}</label>
                  `).join('')}
                </div>
              `;
            })();

            const scaleUi = (()=>{
              const min = Number(q.opts?.min ?? 1);
              const max = Number(q.opts?.max ?? 5);
              const lo = Math.min(min,max), hi = Math.max(min,max);
              const denom = Math.max(1, hi-lo);
              const pills = [];
              for(let n=lo;n<=hi;n++){
                const v = (n-lo)/denom; // 0..1
                pills.push(`<label class="pill" style="cursor:pointer"><input type="radio" name="${nm}" value="${n}" ${n===hi?'checked':''}> ${n}</label>`);
              }
              return `<div class="row" style="gap:8px; flex-wrap:wrap; justify-content:flex-end">${pills.join('')}</div>`;
            })();

            const numberUi = (()=>{
              const min = (q.opts && q.opts.min!=null) ? q.opts.min : "";
              const max = (q.opts && q.opts.max!=null) ? q.opts.max : "";
              return `
                <div style="min-width:220px; max-width:320px">
                  <input id="${nm}" type="number" ${min!==""?`min="${min}"`:''} ${max!==""?`max="${max}"`:''} placeholder="${min!==''&&max!==''?`${min} - ${max}`:''}" style="width:100%; padding:10px 12px; border-radius:14px; border:1px solid rgba(234,236,240,.95); background:rgba(255,255,255,.96)">
                </div>
              `;
            })();

            const textUi = `
              <div style="min-width:240px; max-width:420px">
                <textarea id="${nm}" placeholder="..." style="min-height:44px"></textarea>
              </div>
            `;

            const right = (qt==="mcq") ? mcqUi :
                          (qt==="scale") ? scaleUi :
                          (qt==="number") ? numberUi :
                          (qt==="text") ? textUi : booleanUi;

            return `
              <div class="card" style="box-shadow:none; background:rgba(242,244,247,.55)">
                <div class="row" style="align-items:flex-start; gap:12px">
                  ${title}
                  ${right}
                </div>
              </div>
            `;
          }).join('')}
        `).join('')}
      </div>
    `;
  }


  function renderEvaluation(root){
    const ten=currentTenant();
    const lang=state.session.lang;
    const allEmployees=ten.users.filter(u=>u.role==='employee');
    const scope=sessionScope();
    let employees=allEmployees;
    if(state.session.role==='manager' && scope.branchId){ employees = allEmployees.filter(u=>getAssign(u.id).branchId===scope.branchId); }
    else if(state.session.role==='area' && scope.cityId){ const city=(ten.cities||[]).find(c=>c.id===scope.cityId); const bids=(city?.branches||[]).map(b=>b.id); employees = allEmployees.filter(u=>bids.includes(getAssign(u.id).branchId)); }


    const cityOptions=ten.cities.map(c=>({id:c.id, name:c.name[lang]}));
    const branchesFor=(cityId)=> (ten.cities.find(x=>x.id===cityId)||ten.cities[0]).branches.map(b=>({id:b.id, name:b.name[lang]}));


    // Role scope
    const lockCity = (state.session.role==='manager' || state.session.role==='area') && scope.cityId;
    const lockBranch = (state.session.role==='manager') && scope.branchId;

    root.innerHTML = `
      <div class="row"><div><div class="pill">📝 ${t('nav_eval')}</div><h2 style="margin:10px 0 0; font-size:22px; letter-spacing:-.3px">${t('startEval')}</h2><div class="muted" style="margin-top:6px" id="evSub"></div></div></div>
      <div class="divider"></div>
      <div class="grid c2">
        <div class="card">
          <div class="form">
            <div class="split">
              <div class="field"><label>${t('filter_city')}</label><select id="evCity">${cityOptions.map(o=>`<option value="${o.id}">${o.name}</option>`).join('')}</select></div>
              <div class="field"><label>${t('filter_branch')}</label><select id="evBranch"></select></div>
            </div>
            <div class="field"><label>${t('evalType')}</label><select id="evType"><option value="manager">${t('eval_operational')}</option><option value="probation">${t('eval_probation')}</option></select></div>
<div class="field"><label>${t('filter_employee')}</label><select id="evEmp">${employees.map(u=>`<option value="${u.id}">${u.name}</option>`).join('')}</select></div>
            <div class="field"><label>${t('notes')}</label><textarea id="evNotes" placeholder="..."></textarea></div>
            <div class="field"><label>${t('attachPhoto')}</label><input id="evPhoto" type="file" accept="image/*" capture="environment"><div class="muted" style="font-size:12px">Optional</div></div>
          </div>
        </div>
        <div class="card" id="evChecklist"></div>
      </div>
      <div class="row" style="margin-top:14px"><button class="btn primary" id="evSubmit">✅ ${t('submit')}</button></div>
    `;

    const syncBranches=()=>{ const cityId=$('#evCity').value; const opts=branchesFor(cityId); $('#evBranch').innerHTML=opts.map(o=>`<option value="${o.id}">${o.name}</option>`).join(''); };
    $('#evCity').onchange=syncBranches; syncBranches();

    // Apply scope locks
    if(lockCity){ $('#evCity').value = scope.cityId; syncBranches(); $('#evCity').disabled=true; }
    if(lockBranch){ $('#evBranch').value = scope.branchId; $('#evBranch').disabled=true; }


    const syncEvalType = ()=>{
      const tp = $('#evType').value;
      const sub = document.getElementById('evSub');
      if(sub) sub.textContent = (tp==='probation') ? t('eval_probation') : t('eval_operational');
      $('#evChecklist').innerHTML = renderChecklist('ev_', tp);
    };

    syncEvalType();
    $('#evType').onchange = syncEvalType;

    $('#evSubmit').onclick = async ()=>{
      const cityId=$('#evCity').value;
      const branchId=$('#evBranch').value;
      const employeeId=$('#evEmp').value;
      const notes=$('#evNotes').value.trim();
      const photoFile=$('#evPhoto').files?.[0]||null;

      const evType = $('#evType').value;
      const {score, breakdown, answers} = scoreFromChecklist('ev_', evType);
      const photos=[];
      if(photoFile) photos.push(await fileToDataUrl(photoFile));

      ten.evaluations.push({id:uid('ev'), type: evType==='probation' ? 'probation' : 'manager', date:Date.now(), cityId, branchId, employeeId, score, breakdown, answers, notes, photos});
      saveState(); toast(t('saved')); setRoute('reports');
    };
  }

  function renderMy(root){
    const ten=currentTenant();
    const u=currentUser();
    ensureTenantFields();

    const mySales=ten.sales[u.id]?.amount||0;
    const myTarget=Number(ten.empTargets?.[u.id]||0);
    const fallbackTarget=Math.round(Object.values(ten.targets||{}).reduce((a,x)=>a+Number(x||0),0) / Math.max(1,Object.values(ten.targets||{}).length||1));
    const target = myTarget || fallbackTarget || 1;
    const att=Math.round((mySales/Math.max(1,target))*100);

    const ev=ten.evaluations.filter(e=>e.employeeId===u.id);
    const avg=ev.length ? Math.round(ev.reduce((a,x)=>a+x.score,0)/ev.length) : 83;

    root.innerHTML = `
      <div class="row"><div><div class="pill">📈 ${t('nav_my')}</div><h2 style="margin:10px 0 0; font-size:22px; letter-spacing:-.3px">${u.name}</h2><div class="muted" style="margin-top:6px">${u.email}</div></div></div>
      <div class="divider"></div>
      <div class="grid c3">
        <div class="card"><h3>${t('kpi_ops')}</h3><div class="big">${avg}</div><div class="muted">Average</div></div>
        <div class="card"><h3>Sales</h3><div class="big">${money(mySales)}</div><div class="muted">${att}% vs target (estimate)</div></div>
        <div class="card"><h3>${t('kpi_visits')}</h3><div class="big">${ev.filter(x=>x.type==='shopper').length}</div><div class="muted">Mystery visits</div></div>
      </div>
    `;
  }

  function renderShopper(root){
    const ten=currentTenant();
    const lang=state.session.lang;
    const allEmployees=ten.users.filter(u=>u.role==='employee');
    const scope=sessionScope();
    let employees=allEmployees;
    if(state.session.role==='manager' && scope.branchId){ employees = allEmployees.filter(u=>getAssign(u.id).branchId===scope.branchId); }
    else if(state.session.role==='area' && scope.cityId){ const city=(ten.cities||[]).find(c=>c.id===scope.cityId); const bids=(city?.branches||[]).map(b=>b.id); employees = allEmployees.filter(u=>bids.includes(getAssign(u.id).branchId)); }


    const cityOptions=ten.cities.map(c=>({id:c.id, name:c.name[lang]}));
    const branchesFor=(cityId)=> (ten.cities.find(x=>x.id===cityId)||ten.cities[0]).branches.map(b=>({id:b.id, name:b.name[lang]}));


    // Role scope
    const lockCity = (state.session.role==='manager' || state.session.role==='area') && scope.cityId;
    const lockBranch = (state.session.role==='manager') && scope.branchId;

    root.innerHTML = `
      <div class="row"><div><div class="pill">🕵️ ${t('nav_shop')}</div><h2 style="margin:10px 0 0; font-size:22px; letter-spacing:-.3px">${t('startVisit')}</h2><div class="muted" style="margin-top:6px">${t('shopperHint')}</div></div></div>
      <div class="divider"></div>
      <div class="grid c2">
        <div class="card">
          <div class="form">
            <div class="split">
              <div class="field"><label>${t('filter_city')}</label><select id="msCity">${cityOptions.map(o=>`<option value="${o.id}">${o.name}</option>`).join('')}</select></div>
              <div class="field"><label>${t('filter_branch')}</label><select id="msBranch"></select></div>
            </div>
            <div class="field"><label>${t('identify')}</label>
              <select id="msEmp"><option value="">—</option>${employees.map(u=>`<option value="${u.id}">${u.name}</option>`).join('')}</select>
              <div class="muted" style="font-size:12px"><a href="#" id="msUnknown">${t('dontKnow')}</a></div>
            </div>
            <div class="field" id="msAppWrap" style="display:none"><label>${t('appearance')}</label><textarea id="msAppearance" placeholder="..."></textarea></div>
            <div class="field"><label>${t('notes')}</label><textarea id="msNotes" placeholder="..."></textarea></div>
            <div class="field"><label>${t('attachPhoto')}</label><input id="msPhoto" type="file" accept="image/*" capture="environment"><div class="muted" style="font-size:12px">Optional</div></div>
          </div>
        </div>
        <div class="card" id="msChecklist"></div>
      </div>
      <div class="row" style="margin-top:14px"><button class="btn primary" id="msSubmit">✅ ${t('submitVisit')}</button></div>
    `;

    const syncBranches=()=>{ const cityId=$('#msCity').value; const opts=branchesFor(cityId); $('#msBranch').innerHTML=opts.map(o=>`<option value="${o.id}">${o.name}</option>`).join(''); };
    $('#msCity').onchange=syncBranches; syncBranches();

    $('#msChecklist').innerHTML = renderChecklist('ms_','shopper');

    $('#msUnknown').onclick = (e)=>{ e.preventDefault(); $('#msEmp').value=''; $('#msAppWrap').style.display='block'; $('#msAppearance').focus(); };
    $('#msEmp').onchange = ()=>{ if($('#msEmp').value){ $('#msAppWrap').style.display='none'; $('#msAppearance').value=''; } };

    $('#msSubmit').onclick = async ()=>{
      const cityId=$('#msCity').value;
      const branchId=$('#msBranch').value;
      const employeeId=$('#msEmp').value || null;
      const appearance=$('#msAppearance').value.trim() || null;
      const notes=$('#msNotes').value.trim();
      const photoFile=$('#msPhoto').files?.[0]||null;

      if(!employeeId && !appearance){
        toast(state.session.lang==='ar' ? 'اختر موظف أو اكتب وصف.' : 'Select an employee or add a description.');
        return;
      }

      const {score, breakdown, answers} = scoreFromChecklist('ms_','shopper');
      const photos=[];
      if(photoFile) photos.push(await fileToDataUrl(photoFile));

      ten.evaluations.push({id:uid('ms'), type:'shopper', date:Date.now(), cityId, branchId, employeeId, appearance, score, breakdown, answers, notes, photos});
      saveState(); toast(t('visitSaved')); setRoute('shop');
    };
  }

  function renderAdmin(root){
    const ten=currentTenant();
    root.innerHTML = `
      <div class="row"><div><div class="pill">⚙️ ${t('nav_admin')}</div><h2 style="margin:10px 0 0; font-size:22px; letter-spacing:-.3px">${t('nav_admin')}</h2><div class="muted" style="margin-top:6px">Cities, branches, targets, checklists, import, branding, labels</div></div></div>
      <div class="divider"></div>
      <div class="grid c3">
        <button class="btn" onclick="adminTab('org')">🏙️ ${t('nav_org')}</button>
        <button class="btn" onclick="adminTab('targets')">🎯 ${t('nav_targets')}</button>
        <button class="btn" onclick="adminTab('checklists')">🧾 ${t('nav_checklists')}</button>
                      <button class=\"btn\" onclick=\"adminTab('import')\">📥 ${t('nav_import')}</button>
<button class="btn" onclick="adminTab('branding')">✨ ${t('nav_branding')}</button>
      </div>
      <div class="grid c2" style="margin-top:10px">
        <button class="btn" onclick="adminTab('users')">👥 ${t('nav_users')}</button>
        <button class="btn" onclick="adminTab('labels')">🈯 ${t('nav_labels')}</button>
              <button class="btn" onclick="adminTab('branding')">✨ ${t('nav_branding')}</button>
      </div>
      <div class="card" style="margin-top:14px" id="adminArea"></div>
    `;
    adminTab(ten.__tab || 'org');
  }

  function adminTab(tab){
    const ten=currentTenant(); ten.__tab=tab; saveState();
    const area=$('#adminArea');
    if(tab==='org') return renderAdminOrg(area);
    if(tab==='targets') return renderAdminTargets(area);
    if(tab==='checklists') return renderAdminChecklists(area);
    if(tab==='users') return renderAdminUsers(area);
    if(tab==='labels') return renderAdminLabels(area);
    if(tab==='branding') return renderAdminBranding(area);
    if(tab==='import') return renderAdminImport(area);
  }

  
  let __pendingImport = null;

  function renderAdminImport(area){
    const ten=currentTenant();
    const lang=state.session.lang;
    ten.__import = ten.__import || {intoCurrent:true, replace:false};

    area.innerHTML = `
      <div class="row" style="align-items:flex-start">
        <div style="min-width:0">
          <h3 style="margin:0">${t('importTitle')}</h3>
          <div class="muted" style="margin-top:6px">${t('importDesc')}</div>
        </div>
        <div class="row" style="gap:10px; flex-wrap:wrap; justify-content:flex-end">
          <button class="btn" id="dlXlsx">${t('downloadTemplate')}</button>
          <button class="btn" id="dlCsv">${t('downloadCsvTemplates')}</button>
        </div>
      </div>

      <div class="divider"></div>

      <div class="grid c2" style="gap:12px">
        <div class="card">
          <b>${t('chooseFile')}</b>
          <div class="muted" style="margin-top:6px; font-size:12px">.xlsx / .csv</div>
          <div class="divider"></div>
          <input id="importFile" type="file" accept=".xlsx,.xls,.csv" />
          <div class="row" style="margin-top:12px; gap:10px; flex-wrap:wrap">
            <label class="pill" style="cursor:pointer">
              <input id="intoCurrent" type="checkbox" ${ten.__import.intoCurrent?'checked':''}/> ${t('importIntoCurrent')}
            </label>
            <label class="pill" style="cursor:pointer">
              <input id="replaceExisting" type="checkbox" ${ten.__import.replace?'checked':''}/> ${t('replaceExisting')}
            </label>
            <button class="btn primary" id="parseBtn">${t('parseFile')}</button>
          </div>
          <div class="muted" style="margin-top:10px; font-size:12px" id="importMsg"></div>
        </div>

        <div class="card" id="importPreview">
          <b>${t('preview')}</b>
          <div class="divider"></div>
          <div class="muted">—</div>
        </div>
      </div>

      <div class="row" style="justify-content:flex-end; margin-top:12px">
        <button class="btn primary" id="applyBtn" disabled>${t('applyImport')}</button>
      </div>
    `;

    const msg = $('#importMsg');
    const prev = $('#importPreview');
    const fileEl = $('#importFile');
    const intoCurrent = $('#intoCurrent');
    const replaceExisting = $('#replaceExisting');

    intoCurrent.onchange = ()=>{ ten.__import.intoCurrent = intoCurrent.checked; saveState(); };
    replaceExisting.onchange = ()=>{ ten.__import.replace = replaceExisting.checked; saveState(); };

    $('#dlXlsx').onclick = ()=>{
      if(!window.XLSX){ toast(t('importNeedXlsx')); return; }
      downloadExcelTemplate();
    };
    $('#dlCsv').onclick = ()=> downloadCsvTemplates();

    $('#parseBtn').onclick = async ()=>{
      const f = fileEl.files && fileEl.files[0];
      if(!f){ msg.textContent = t('badFile'); return; }

      ten.__import.intoCurrent = intoCurrent.checked;
      ten.__import.replace = replaceExisting.checked;
      saveState();

      try{
        __pendingImport = await readImportFile(f);
        if(!__pendingImport || !__pendingImport.any){
          msg.textContent = t('sheetMissing');
          prev.innerHTML = `<b>${t('preview')}</b><div class="divider"></div><div class="muted">—</div>`;
          $('#applyBtn').disabled = true;
          return;
        }
        msg.textContent = t('importReady');
        prev.innerHTML = renderImportPreview(__pendingImport);
        $('#applyBtn').disabled = false;
      }catch(e){
        console.error(e);
        msg.textContent = t('badFile');
        $('#applyBtn').disabled = true;
      }
    };

    $('#applyBtn').onclick = ()=>{
      if(!__pendingImport) return;
      applyImport(__pendingImport);
      __pendingImport = null;
      toast(t('importDone'));
      render();
    };
  }

  async function readImportFile(file){
    const name = (file.name||'').toLowerCase();
    const intoCurrent = !!currentTenant().__import?.intoCurrent;
    const replaceExisting = !!currentTenant().__import?.replace;

    const result = {intoCurrent, replaceExisting, sheets:{}, any:false, stats:{}};

    if(name.endsWith('.csv')){
      const text = await file.text();
      // CSV import expects filename: cities.csv, branches.csv, users.csv, sales.csv, evaluations.csv, checklists.csv, tenants.csv
      const base = name.replace('.csv','');
      const key = base.split('/').pop();
      result.sheets[key] = parseCSV(text);
      result.any = true;
      return normalizeImport(result);
    }

    if(!window.XLSX){
      result.stats.error = t('importNeedXlsx');
      return result;
    }
    const buf = await file.arrayBuffer();
    const wb = XLSX.read(buf, {type:'array'});
    const wanted = ["Tenants","Cities","Branches","Users","Sales","Evaluations","Checklists"];
    wanted.forEach(s=>{
      const ws = wb.Sheets[s];
      if(ws){
        const rows = XLSX.utils.sheet_to_json(ws, {defval:""});
        result.sheets[s.toLowerCase()] = rows;
        result.any = true;
      }
    });
    return normalizeImport(result);
  }

  function normalizeImport(pack){
    // Normalize keys + trim values
    const normRows = (rows)=> (rows||[]).map(r=>{
      const o={};
      Object.keys(r||{}).forEach(k=>{
        const nk = String(k||'').trim().toLowerCase();
        o[nk] = (typeof r[k]==='string') ? r[k].trim() : r[k];
      });
      return o;
    });

    const sheets = pack.sheets;
    Object.keys(sheets).forEach(k=> sheets[k] = normRows(sheets[k]));

    // basic stats
    pack.stats = {
      tenants: (sheets.tenants||[]).length,
      cities: (sheets.cities||[]).length,
      branches: (sheets.branches||[]).length,
      users: (sheets.users||[]).length,
      sales: (sheets.sales||[]).length,
      evaluations: (sheets.evaluations||[]).length,
      checklists: (sheets.checklists||[]).length
    };
    return pack;
  }

  function renderImportPreview(pack){
    const s = pack.stats||{};
    return `
      <b>${t('preview')}</b>
      <div class="divider"></div>
      <div class="grid c2" style="gap:10px">
        <div class="card" style="box-shadow:none; background:rgba(242,244,247,.55)"><b>Tenants</b><div class="muted">${s.tenants||0}</div></div>
        <div class="card" style="box-shadow:none; background:rgba(242,244,247,.55)"><b>Cities</b><div class="muted">${s.cities||0}</div></div>
        <div class="card" style="box-shadow:none; background:rgba(242,244,247,.55)"><b>Branches</b><div class="muted">${s.branches||0}</div></div>
        <div class="card" style="box-shadow:none; background:rgba(242,244,247,.55)"><b>Users</b><div class="muted">${s.users||0}</div></div>
        <div class="card" style="box-shadow:none; background:rgba(242,244,247,.55)"><b>Sales</b><div class="muted">${s.sales||0}</div></div>
        <div class="card" style="box-shadow:none; background:rgba(242,244,247,.55)"><b>Evaluations</b><div class="muted">${s.evaluations||0}</div></div>
      </div>
      <div class="muted" style="margin-top:10px; font-size:12px">
        Tip: For multi-company import, include tenant_id column in each sheet and add Tenants sheet.
      </div>
    `;
  }

  function applyImport(pack){
    const intoCurrent = !!pack.intoCurrent;
    const replaceExisting = !!pack.replaceExisting;
    const sheets = pack.sheets || {};

    const getTenant = (tenantId)=>{
      if(intoCurrent){
        return currentTenant();
      }
      tenantId = String(tenantId||'').trim();
      if(!tenantId) return currentTenant();
      state.tenants = state.tenants || {};
      if(!state.tenants[tenantId]){
        state.tenants[tenantId] = {
          id:tenantId,
          name:tenantId,
          companyName:tenantId,
          cities:[],
          branches:{},
          users:{},
          assignments:{},
          targets:{},
          employeeTargets:{},
          checklists:{manager:{}, shopper:{}},
          evaluations:[],
          sales:{},
          labels:{en:{}, ar:{}},
          branding:{logo:null, companyName:tenantId, poweredBy:true}
        };
      }
      return state.tenants[tenantId];
    };

    // Tenants
    (sheets.tenants||[]).forEach(r=>{
      const tid = String(r.tenant_id || r.id || r.subdomain || r.company || r.company_name || "").trim();
      if(!tid) return;
      const ten = getTenant(tid);
      ten.id = tid;
      ten.name = String(r.name || r.company_name || r.company || ten.name || tid);
      ten.companyName = String(r.company_name || r.name || ten.companyName || ten.name);
      ten.branding = ten.branding || {logo:null, companyName:ten.companyName, poweredBy:true};
      ten.branding.companyName = ten.companyName;
    });

    // Cities
    (sheets.cities||[]).forEach(r=>{
      const ten = getTenant(r.tenant_id);
      ten.cities = ten.cities || [];
      const cid = String(r.city_id || r.id || toId(r.city_en||r.city_ar||'', 'city')).trim();
      const en = String(r.city_en || r.city || r.en || "").trim();
      const ar = String(r.city_ar || r.ar || "").trim();
      const existing = ten.cities.find(c=>c.id===cid);
      if(existing){
        if(replaceExisting){
          existing.name.en = en || existing.name.en;
          existing.name.ar = ar || existing.name.ar;
        }
      } else {
        ten.cities.push({id:cid, name:{en:en||cid, ar:ar||en||cid}, branches:[]});
      }
    });

    // Branches
    (sheets.branches||[]).forEach(r=>{
      const ten = getTenant(r.tenant_id);
      ten.cities = ten.cities || [];
      ten.targets = ten.targets || {};
      const cityId = String(r.city_id || "").trim();
      const cityEn = String(r.city_en || r.city || "").trim();
      let city = ten.cities.find(c=>c.id===cityId) || (cityEn ? ten.cities.find(c=>c.name?.en===cityEn) : null);
      if(!city){
        const cid = cityId || toId(cityEn||"city", "city");
        ten.cities.push({id:cid, name:{en:cityEn||cid, ar:cityEn||cid}, branches:[]});
        city = ten.cities[ten.cities.length-1];
      }
      const bid = String(r.branch_id || r.id || toId(r.branch_en||r.branch_ar||r.branch||'', 'b')).trim();
      const ben = String(r.branch_en || r.branch || r.en || bid).trim();
      const bar = String(r.branch_ar || r.ar || ben).trim();
      city.branches = city.branches || [];
      const ex = city.branches.find(b=>b.id===bid);
      if(ex){
        if(replaceExisting){
          ex.name.en = ben || ex.name.en;
          ex.name.ar = bar || ex.name.ar;
        }
      } else {
        city.branches.push({id:bid, name:{en:ben, ar:bar}});
      }
      const target = Number(r.target || r.target_branch || r.branch_target || 0) || 0;
      if(target) ten.targets[bid] = target;
    });

    // Users
    (sheets.users||[]).forEach(r=>{
      const ten = getTenant(r.tenant_id);
      ten.users = ten.users || {};
      ten.assignments = ten.assignments || {};
      ten.employeeTargets = ten.employeeTargets || {};
      const uid0 = String(r.user_id || r.id || toId(r.name||"user","u")).trim();
      const name = String(r.name || r.full_name || uid0).trim();
      const role = String(r.role || "employee").trim().toLowerCase();
      const email = String(r.email || "").trim();
      const cityId = String(r.city_id || "").trim();
      const branchId = String(r.branch_id || "").trim();

      if(!ten.users[uid0] || replaceExisting){
        ten.users[uid0] = {id:uid0, name, role, email};
      }
      if(branchId) ten.assignments[uid0] = {cityId, branchId};
      const targ = Number(r.target || r.target_employee || 0) || 0;
      if(targ) ten.employeeTargets[uid0] = targ;
    });

    // Sales
    (sheets.sales||[]).forEach(r=>{
      const ten = getTenant(r.tenant_id);
      ten.sales = ten.sales || {};
      const uid0 = String(r.user_id || r.employee_id || r.id || "").trim();
      if(!uid0) return;
      const month = String(r.month || r.period || "2026-01").trim();
      const amount = Number(r.amount || r.sales || 0) || 0;
      ten.sales[uid0] = {month, amount};
    });

    // Evaluations
    (sheets.evaluations||[]).forEach(r=>{
      const ten = getTenant(r.tenant_id);
      ten.evaluations = ten.evaluations || [];

      // Ensure checklist question schemas (type/options) exist
      ten.checklists = ten.checklists || {manager:{}, shopper:{}, probation:{}};
      ["manager","shopper","probation"].forEach(kind=>{
        const set = ten.checklists[kind] || {};
        Object.values(set).forEach(cat=>{
          cat.questions = cat.questions || [];
          cat.questions.forEach(q=>{
            q.type = q.type || "boolean";
            q.dir = q.dir || "high";
            if(q.type==="mcq"){
              q.opts = q.opts || {items: buildMcqItems("", "", (q.dir||"high"))};
              if(!Array.isArray(q.opts.items)) q.opts.items = [];
            } else if(q.type==="scale"){
              q.opts = q.opts || {min:1, max:5};
              if(q.opts.min==null) q.opts.min=1;
              if(q.opts.max==null) q.opts.max=5;
            } else if(q.type==="number"){
              q.opts = q.opts || {min:0, max:100};
              if(q.opts.min==null) q.opts.min=0;
              if(q.opts.max==null) q.opts.max=100;
            } else if(q.type==="text"){
              q.opts = q.opts || {};
            } else {
              // boolean
              if(q.opts) delete q.opts;
            }
          });
        });
        ten.checklists[kind]=set;
      });

      const type = String(r.type || "manager").trim().toLowerCase();
      const cityId = String(r.city_id || "").trim();
      const branchId = String(r.branch_id || "").trim();
      const employeeId = String(r.employee_id || r.user_id || "").trim() || null;
      const appearance = String(r.appearance || r.description || "").trim();
      const score = Number(r.score || r.total || 0) || 0;
      const notes = String(r.notes || r.note || "").trim();
      let date = r.date || r.timestamp || "";
      let dt = Date.now();
      if(typeof date === "number") dt = date;
      else if(String(date).trim()){
        const parsed = Date.parse(String(date));
        if(!isNaN(parsed)) dt = parsed;
      }
      const obj = {id:uid(type==='shopper'?'ms':'ev'), type, date:dt, cityId, branchId, employeeId, score, breakdown:{}, notes, photos:[]};
      if(type==='shopper') obj.appearance = appearance;
      ten.evaluations.push(obj);
    });

    // Checklists
    (sheets.checklists||[]).forEach(r=>{
      const ten = getTenant(r.tenant_id);
      ten.checklists = ten.checklists || {manager:{}, shopper:{}, probation:{}};
      const type = String(r.type || r.checklist_type || "manager").trim().toLowerCase();
      const set = ten.checklists[type] || ten.checklists.manager;

      const catId = String(r.category_id || r.cat_id || toId(r.cat_en||r.cat_ar||"section","cat")).trim();
      const catEn = String(r.cat_en || r.category_en || r.category || catId).trim();
      const catAr = String(r.cat_ar || r.category_ar || catEn).trim();
      const weight = Number(r.weight || r.cat_weight || 0) || 0;

      if(!set[catId] || replaceExisting){
        set[catId] = {id:catId, name:{en:catEn, ar:catAr}, weight:weight||10, questions:[]};
      } else {
        if(weight) set[catId].weight = weight;
      }

      const qId = String(r.question_id || r.q_id || "").trim();
      const qEn = String(r.q_en || r.question_en || "").trim();
      const qAr = String(r.q_ar || r.question_ar || "").trim();
      if(qId || qEn || qAr){
        const qid = qId || uid("q");
        const photo = String(r.photo_required || r.photo || "0").trim();
        const req = (photo==="1" || photo==="true" || photo==="yes" || photo==="نعم");

        const rawType = String(r.answer_type || r.q_type || r.type_answer || "boolean").trim().toLowerCase();
        const type = (rawType==='truefalse' || rawType==='yesno' || rawType==='bool') ? 'boolean'
                   : (rawType==='multiple' || rawType==='mcq' || rawType==='choice') ? 'mcq'
                   : (rawType==='rating' || rawType==='likert' || rawType==='scale') ? 'scale'
                   : (rawType==='numeric' || rawType==='number') ? 'number'
                   : (rawType==='text' || rawType==='note') ? 'text'
                   : 'boolean';

        const dirRaw = String(r.direction || r.score_direction || r.scoring_direction || r.higher_is_better || r.better || "").trim().toLowerCase();
        const dir = (dirRaw==='low' || dirRaw==='lower' || dirRaw==='min' || dirRaw==='smaller' || dirRaw==='0' || dirRaw==='false' || dirRaw==='no' || dirRaw==='الأقل' || dirRaw==='اقل') ? 'low' : 'high';

        let opts = null;
        if(type==='mcq'){
          const enOpts = String(r.options_en || r.choices_en || r.options || "").trim();
          const arOpts = String(r.options_ar || r.choices_ar || "").trim();
          opts = {items: buildMcqItems(enOpts, arOpts, dir)};
        } else if(type==='scale'){
          const min = Number(r.scale_min ?? r.min ?? 1) || 1;
          const max = Number(r.scale_max ?? r.max ?? 5) || 5;
          opts = {min, max};
        } else if(type==='number'){
          const min = Number(r.num_min ?? r.number_min ?? r.scale_min ?? r.min ?? 0) || 0;
          const max = Number(r.num_max ?? r.number_max ?? r.scale_max ?? r.max ?? 100) || 100;
          opts = {min, max};
        } else if(type==='text'){
          const maxLen = Number(r.max_len || r.maxlen || 0) || 0;
          opts = maxLen ? {maxLen} : {};
        }

        const existingQ = (set[catId].questions||[]).find(x=>x.id===qid);
        if(existingQ){
          if(replaceExisting){
            existingQ.q.en = qEn || existingQ.q.en;
            existingQ.q.ar = qAr || existingQ.q.ar;
            existingQ.photo = req;
            existingQ.type = type;
            existingQ.dir = dir;
            if(opts) existingQ.opts = opts; else if(existingQ.opts) delete existingQ.opts;
          }
        } else {
          const qObj = {id:qid, q:{en:qEn||qid, ar:qAr||qEn||qid}, type, dir, photo:req};
          if(opts) qObj.opts = opts;
          set[catId].questions.push(qObj);
        }
      }
    });

    ensureTenantFields();
    saveState();
    refreshBrand();
  }

  function downloadText(filename, text){
    const blob = new Blob([text], {type:"text/plain;charset=utf-8"});
    const a = document.createElement('a');
    a.href = URL.createObjectURL(blob);
    a.download = filename;
    document.body.appendChild(a);
    a.click();
    a.remove();
    setTimeout(()=>URL.revokeObjectURL(a.href), 1200);
  }

  function downloadCsvTemplates(){
    const templates = {
      "tenants.csv":"tenant_id,company_name\nmogu,Mogux Demo Company\n",
      "cities.csv":"tenant_id,city_id,city_en,city_ar\nmogu,halifax,Halifax,هاليفاكس\n",
      "branches.csv":"tenant_id,city_id,branch_id,branch_en,branch_ar,target_branch\nmogu,halifax,halifax-1,Halifax 1,هاليفاكس 1,250000\n",
      "users.csv":"tenant_id,user_id,name,role,email,city_id,branch_id,target_employee\nmogu,u_emp3,Sara,employee,sara@example.com,halifax,halifax-1,80000\n",
      "sales.csv":"tenant_id,user_id,month,amount\nmogu,u_emp3,2026-01,72000\n",
      "evaluations.csv":"tenant_id,type,date,city_id,branch_id,employee_id,appearance,score,notes\nmogu,shopper,2026-01-12,halifax,halifax-1,,Tall, 92,Excellent greeting\n",
      "checklists.csv":"tenant_id,type,category_id,cat_en,cat_ar,weight,question_id,q_en,q_ar,answer_type,direction,options_en,options_ar,scale_min,scale_max,num_min,num_max,max_len,photo_required\nmogu,manager,service,Customer Service,خدمة العملاء,25,q1,Greets within 10 seconds,يُرحّب خلال 10 ثوانٍ,boolean,high,,,,,,,0\nmogu,manager,service,Customer Service,خدمة العملاء,25,q4,Seconds until greeting,ثواني حتى الترحيب,number,low,,,,0,60,,1\nmogu,manager,service,Customer Service,خدمة العملاء,25,q2,Rate the greeting quality,قيّم جودة الترحيب,mcq,high,Excellent:1|Good:0.75|OK:0.5|Poor:0.25|Bad:0,ممتاز:1|جيد:0.75|مقبول:0.5|ضعيف:0.25|سيئ:0,,,,,0\nmogu,manager,appearance,Appearance,المظهر,15,q3,Appearance rating,تقييم المظهر,scale,high,,,1,5,,,,1\n"
    };
    Object.keys(templates).forEach(fn=>downloadText(fn, templates[fn]));
  }

  function downloadExcelTemplate(){
    const wb = XLSX.utils.book_new();
    const add = (name, rows)=> {
      const ws = XLSX.utils.json_to_sheet(rows);
      XLSX.utils.book_append_sheet(wb, ws, name);
    };
    add("Tenants", [{tenant_id:"mogu", company_name:"Mogux Demo Company"}]);
    add("Cities", [{tenant_id:"mogu", city_id:"halifax", city_en:"Halifax", city_ar:"هاليفاكس"}]);
    add("Branches", [{tenant_id:"mogu", city_id:"halifax", branch_id:"halifax-1", branch_en:"Halifax 1", branch_ar:"هاليفاكس 1", target_branch:250000}]);
    add("Users", [{tenant_id:"mogu", user_id:"u_emp3", name:"Sara", role:"employee", email:"sara@example.com", city_id:"halifax", branch_id:"halifax-1", target_employee:80000}]);
    add("Sales", [{tenant_id:"mogu", user_id:"u_emp3", month:"2026-01", amount:72000}]);
    add("Evaluations", [{tenant_id:"mogu", type:"shopper", date:"2026-01-12", city_id:"halifax", branch_id:"halifax-1", employee_id:"", appearance:"Tall", score:92, notes:"Excellent greeting"}]);
    add("Checklists", [
      {tenant_id:"mogu", type:"manager", category_id:"service", cat_en:"Customer Service", cat_ar:"خدمة العملاء", weight:25, question_id:"q1", q_en:"Greets within 10 seconds", q_ar:"يُرحّب خلال 10 ثوانٍ", answer_type:"boolean", direction:"high", options_en:"", options_ar:"", scale_min:"", scale_max:"", num_min:"", num_max:"", max_len:"", photo_required:0},
      {tenant_id:"mogu", type:"manager", category_id:"service", cat_en:"Customer Service", cat_ar:"خدمة العملاء", weight:25, question_id:"q4", q_en:"Seconds until greeting", q_ar:"ثواني حتى الترحيب", answer_type:"number", direction:"low", options_en:"", options_ar:"", scale_min:"", scale_max:"", num_min:0, num_max:60, max_len:"", photo_required:1},
      {tenant_id:"mogu", type:"manager", category_id:"service", cat_en:"Customer Service", cat_ar:"خدمة العملاء", weight:25, question_id:"q2", q_en:"Rate the greeting quality", q_ar:"قيّم جودة الترحيب", answer_type:"mcq", direction:"high", options_en:"Excellent:1|Good:0.75|OK:0.5|Poor:0.25|Bad:0", options_ar:"ممتاز:1|جيد:0.75|مقبول:0.5|ضعيف:0.25|سيئ:0", scale_min:"", scale_max:"", num_min:"", num_max:"", max_len:"", photo_required:0},
      {tenant_id:"mogu", type:"manager", category_id:"appearance", cat_en:"Appearance", cat_ar:"المظهر", weight:15, question_id:"q3", q_en:"Appearance rating", q_ar:"تقييم المظهر", answer_type:"scale", direction:"high", options_en:"", options_ar:"", scale_min:1, scale_max:5, num_min:"", num_max:"", max_len:"", photo_required:1}
    ]);
const out = XLSX.write(wb, {bookType:'xlsx', type:'array'});
    const blob = new Blob([out], {type:"application/vnd.openxmlformats-officedocument.spreadsheetml.sheet"});
    const a = document.createElement('a');
    a.href = URL.createObjectURL(blob);
    a.download = "mogux_import_template.xlsx";
    document.body.appendChild(a);
    a.click();
    a.remove();
    setTimeout(()=>URL.revokeObjectURL(a.href), 1200);
  }

function renderAdminOrg(area){
    const ten=currentTenant();
    const lang=state.session.lang;

    area.innerHTML = `
      <div class="row"><h3 style="margin:0">${t('nav_org')}</h3><button class="btn" id="addCityBtn">＋ ${t('addCity')}</button></div>
      <div class="muted" style="margin-top:6px">Manage cities, then generate numbered branches.</div>
      <div class="divider"></div>
      <div class="grid" style="gap:12px">
        ${ten.cities.map(c=>`
          <div class="card">
            <div class="row">
              <div style="min-width:0"><b>${c.name[lang]}</b><div class="muted" style="font-size:12px">${c.id}</div></div>
              <div class="row" style="gap:10px; flex-wrap:wrap; justify-content:flex-end">
                <button class="btn" onclick="saveCity('${c.id}')">${t('save')}</button>
                <button class="btn danger" onclick="delCity('${c.id}')">${t('delete')}</button>
              </div>
            </div>
            <div class="divider"></div>
            <div class="split">
              <div class="field"><label>${t('cityName')} (EN)</label><input id="city_en_${c.id}" type="text" value="${escapeHtml(c.name.en)}"></div>
              <div class="field"><label>${t('cityName')} (AR)</label><input id="city_ar_${c.id}" type="text" value="${escapeHtml(c.name.ar)}"></div>
            </div>
            <div class="divider"></div>
            <div class="row"><b>${t('branches')}</b><span class="pill">${c.branches.length}</span></div>
            <div style="margin-top:8px">
              ${c.branches.map(b=>`
                <div class="row" style="margin:8px 0"><div style="min-width:0"><b>${b.name[lang]}</b><div class="muted" style="font-size:12px">${b.id}</div></div><button class="btn danger" onclick="delBranch('${c.id}','${b.id}')">${t('delete')}</button></div>
              `).join('') || `<div class="muted">No branches yet.</div>`}
            </div>
            <div class="divider"></div>
            <div class="row"><b>${t('numbering')}</b><span class="muted" style="font-size:12px">${t('generate')}</span></div>
            <div class="split" style="margin-top:10px">
              <div class="field"><label>${t('from')}</label><input id="from_${c.id}" type="number" min="1" value="1"></div>
              <div class="field"><label>${t('to')}</label><input id="to_${c.id}" type="number" min="1" value="5"></div>
            </div>
            <button class="btn primary" style="margin-top:10px" onclick="genBranches('${c.id}')">＋ ${t('generate')}</button>
          </div>
        `).join('')}
      </div>
    `;

    $('#addCityBtn').onclick=()=>{
      const id=uid('city');
      ten.cities.push({id, name:{en:'New city', ar:'مدينة جديدة'}, branches:[]});
      saveState(); toast(t('saved')); render();
    };
  }

  function saveCity(cityId){
    const ten=currentTenant();
    const c=ten.cities.find(x=>x.id===cityId);
    if(!c) return;
    c.name.en=$('#city_en_'+cityId).value.trim() || c.name.en;
    c.name.ar=$('#city_ar_'+cityId).value.trim() || c.name.ar;
    saveState(); toast(t('saved')); render();
  }
  function delCity(cityId){
    const ten=currentTenant();
    ten.cities=ten.cities.filter(x=>x.id!==cityId);
    const keep=new Set(ten.cities.flatMap(c=>c.branches.map(b=>b.id)));
    Object.keys(ten.targets).forEach(k=>{ if(!keep.has(k)) delete ten.targets[k]; });
    saveState(); toast(t('removed')); render();
  }
  function delBranch(cityId, branchId){
    const ten=currentTenant();
    const c=ten.cities.find(x=>x.id===cityId);
    if(!c) return;
    c.branches=c.branches.filter(b=>b.id!==branchId);
    delete ten.targets[branchId];
    saveState(); toast(t('removed')); render();
  }
  function genBranches(cityId){
    const ten=currentTenant();
    const c=ten.cities.find(x=>x.id===cityId);
    if(!c) return;
    const from=Math.max(1, Number($('#from_'+cityId).value||1));
    const to=Math.max(from, Number($('#to_'+cityId).value||from));
    const existing=new Set(c.branches.map(b=>{ const m=(b.name.en||'').match(/(\d+)$/); return m?Number(m[1]):null; }).filter(Boolean));
    for(let i=from;i<=to;i++){
      if(existing.has(i)) continue;
      const id=`${cityId}-${i}`;
      c.branches.push({id, name:{en:`${c.name.en} ${i}`, ar:`${c.name.ar} ${i}`}});
      if(!ten.targets[id]) ten.targets[id]=300000+(i*10000);
    }
    saveState(); toast(t('saved')); render();
  }

  function renderAdminTargets(area){
    const ten=currentTenant();
    const lang=state.session.lang;
    ensureTenantFields();

    state.ui = state.ui || {};
    state.ui.targetsTab = state.ui.targetsTab || "branches";
    const tab = state.ui.targetsTab;

    const branches = (ten.cities||[]).flatMap(c=>(c.branches||[]).map(b=>({city:c, branch:b})));
    const employees = (ten.users||[]).filter(u=>u.role==='employee');
    const branchOptions = branches.map(x=>({id:x.branch.id, name:`${x.city.name[lang]} — ${x.branch.name[lang]}`}));

    area.innerHTML = `
      <div class="row" style="align-items:flex-end; flex-wrap:wrap; gap:12px">
        <div style="min-width:0">
          <h3 style="margin:0">${t('nav_targets')}</h3>
          <div class="muted" style="margin-top:6px">${tab==='branches' ? t('branchTargets') : t('employeeTargets')}</div>
        </div>
        <div class="row" style="gap:10px; flex-wrap:wrap; justify-content:flex-end; margin-inline-start:auto">
          <button class="btn ${tab==='branches'?'primary':''}" id="tabBranches">${t('branchTargets')}</button>
          <button class="btn ${tab==='employees'?'primary':''}" id="tabEmployees">${t('employeeTargets')}</button>
          ${tab==='employees' ? `<button class="btn" id="autoDist">${t('autoDistribute')}</button>` : ``}
        </div>
      </div>
      <div class="divider"></div>

      ${tab==='branches' ? `
        <table>
          <thead><tr><th>${t('filter_city')}</th><th>${t('filter_branch')}</th><th>${t('monthlyTarget')}</th><th></th></tr></thead>
          <tbody>
            ${branches.map(x=>{
              const v=ten.targets[x.branch.id] ?? 0;
              return `<tr>
                <td>${x.city.name[lang]}</td>
                <td><b>${x.branch.name[lang]}</b><div class="muted" style="font-size:12px">${x.branch.id}</div></td>
                <td style="width:260px"><input type="number" min="0" id="t_${x.branch.id}" value="${v}"></td>
                <td><button class="btn" onclick="saveTarget('${x.branch.id}')">${t('save')}</button></td>
              </tr>`;
            }).join('')}
          </tbody>
        </table>
      ` : `
        <table>
          <thead><tr><th>${t('filter_employee')}</th><th>${t('assignBranch')}</th><th>${t('employeeTarget')}</th><th></th></tr></thead>
          <tbody>
            ${employees.map(u=>{
              const assigned = (getAssign(u.id).branchId || '');
              const tgt = ten.empTargets?.[u.id] ?? 0;
              return `<tr>
                <td><b>${u.name}</b><div class="muted" style="font-size:12px">${u.email||u.id}</div></td>
                <td style="width:320px">
                  <select id="as_${u.id}">
                    ${branchOptions.map(o=>`<option value="${o.id}" ${o.id===assigned?'selected':''}>${escapeHtml(o.name)}</option>`).join('')}
                  </select>
                </td>
                <td style="width:260px"><input type="number" min="0" id="et_${u.id}" value="${tgt}"></td>
                <td><button class="btn" onclick="saveEmpTarget('${u.id}')">${t('save')}</button></td>
              </tr>`;
            }).join('')}
          </tbody>
        </table>
      `}
    `;

    $('#tabBranches').onclick=()=>{ state.ui.targetsTab='branches'; saveState(); render(); };
    $('#tabEmployees').onclick=()=>{ state.ui.targetsTab='employees'; saveState(); render(); };

    if(tab==='employees' && $('#autoDist')){
      $('#autoDist').onclick=()=>{
        // Distribute each branch target over its assigned employees.
        const byBranch = {};
        employees.forEach(u=>{
          const bid = $('#as_'+u.id)?.value || getAssign(u.id).branchId || '';
          if(!bid) return;
          byBranch[bid]=byBranch[bid]||[]; byBranch[bid].push(u.id);
        });
        Object.entries(byBranch).forEach(([bid,uids])=>{
          const bt = Number(ten.targets?.[bid]||0);
          const each = Math.round(bt / Math.max(1,uids.length));
          uids.forEach(uid=>{ ten.empTargets[uid]=each; });
        });
        saveState(); toast(t('saved')); render();
      };
    }
  }

  function saveTarget(branchId){
    const ten=currentTenant();
    ten.targets = ten.targets || {};
    ten.targets[branchId]=Number($('#t_'+branchId).value||0);
    // keep employee targets reasonable if they were auto-distributed
    ensureTenantFields();
    saveState(); toast(t('saved')); render();
  }

  function saveEmpTarget(userId){
    const ten=currentTenant();
    ten.assignments = ten.assignments || {};
    ten.empTargets = ten.empTargets || ten.employeeTargets || {};
      ten.employeeTargets = ten.employeeTargets || ten.empTargets;
    const bid = $('#as_'+userId)?.value || getAssign(userId).branchId || '';
    const bb = branchById(bid);
    ten.assignments[userId] = bid ? {cityId: bb?bb.city.id:'', branchId: bid} : {cityId:'', branchId:''};
    ten.empTargets[userId] = Number($('#et_'+userId).value||0);
    ensureTenantFields();
    saveState(); toast(t('saved')); render();
  }

  
  function renderUserScopeCell(u){
    const ten=currentTenant();
    const lang=state.session.lang;
    const cities=(ten.cities||[]);
    const branches=cities.flatMap(c=>(c.branches||[]).map(b=>({city:c, branch:b})));
    const a=getAssign(u.id);
    if(u.role==='admin' || u.role==='sales' || u.role==='shopper'){
      return `<span class="pill">${t('allAccess')}</span>`;
    }
    if(u.role==='area'){
      const opts = cities.map(c=>`<option value="${c.id}" ${c.id===a.cityId?'selected':''}>${escapeHtml(c.name[lang])}</option>`).join('');
      return `<div class="row" style="gap:8px; justify-content:flex-start; flex-wrap:wrap">
        <select id="sc_${u.id}" style="min-width:180px">${opts}</select>
        <button class="btn" onclick="saveUserScope('${u.id}','area')">${t('save')}</button>
      </div>`;
    }
    // employee / manager -> branch
    const opts = branches.map(x=>`<option value="${x.branch.id}" ${x.branch.id===a.branchId?'selected':''}>${escapeHtml(x.city.name[lang]+' — '+x.branch.name[lang])}</option>`).join('');
    return `<div class="row" style="gap:8px; justify-content:flex-start; flex-wrap:wrap">
      <select id="sc_${u.id}" style="min-width:220px">${opts}</select>
      <button class="btn" onclick="saveUserScope('${u.id}','branch')">${t('save')}</button>
    </div>`;
  }
  function saveUserScope(userId, mode){
    const ten=currentTenant();
    ten.assignments = ten.assignments || {};
    const val = $('#sc_'+userId)?.value || '';
    if(mode==='area'){
      ten.assignments[userId] = {cityId: val, branchId:''};
    }else{
      const bb=branchById(val);
      ten.assignments[userId] = val ? {cityId: bb?bb.city.id:'', branchId: val} : {cityId:'', branchId:''};
    }
    saveState(); toast(t('saved')); render();
  }


function renderAdminUsers(area){
    const ten=currentTenant();
    area.innerHTML = `
      <div class="row"><h3 style="margin:0">${t('nav_users')}</h3><span class="pill">${ten.users.length}</span></div>
      <div class="divider"></div>
      <table>
        <thead><tr><th>${t('user')}</th><th>${t('role')}</th><th>${t('scope')}</th><th>Email</th><th></th></tr></thead>
        <tbody>
          ${ten.users.map(u=>`<tr><td><b>${u.name}</b><div class="muted" style="font-size:12px">${u.id}</div></td><td><span class="pill">${u.role}</span></td><td>${renderUserScopeCell(u)}</td><td>${u.email||''}</td><td><button class="btn danger" onclick="delUser('${u.id}')">${t('delete')}</button></td></tr>`).join('')}
        </tbody>
      </table>
      <div class="divider"></div>
      <div class="grid c2">
        <div class="card">
          <h3 style="margin:0">${t('add')}</h3>
          <div class="divider"></div>
          <div class="form">
            <div class="field"><label>Name</label><input id="nuName" type="text" placeholder="John Doe"></div>
            <div class="field"><label>Email</label><input id="nuEmail" type="email" placeholder="user@company.ca"></div>
            <div class="field"><label>${t('role')}</label>
              <select id="nuRole">
                <option value="manager">manager</option>
                <option value="area">area</option>
                <option value="sales">sales</option>
                <option value="employee">employee</option>
                <option value="shopper">shopper</option>
                <option value="admin">admin</option>
              </select>
            </div>
            <button class="btn primary" id="nuCreate">＋ ${t('add')}</button>
          </div>
        </div>
        <div class="card"><h3 style="margin:0">Note</h3><div class="muted" style="margin-top:6px">In production, roles are enforced server-side.</div></div>
      </div>
    `;

    $('#nuCreate').onclick=()=>{
      const ten=currentTenant();
      const name=$('#nuName').value.trim();
      const email=$('#nuEmail').value.trim();
      const role=$('#nuRole').value;
      if(!name){ toast(state.session.lang==='ar'?'اكتب الاسم':'Enter a name'); return; }
      const id=uid('u');
      ten.users.push({id, name, email, role});

      // Default scope (editable in the table)
      ten.assignments = ten.assignments || {};
      if(role==='manager' || role==='employee'){
        const bid = (ten.cities?.[0]?.branches?.[0]?.id) || '';
        const bb = branchById(bid);
        ten.assignments[id] = bid ? {cityId: bb?bb.city.id:'', branchId: bid} : {cityId:'', branchId:''};
      }else if(role==='area'){
        const cid = (ten.cities?.[0]?.id) || '';
        ten.assignments[id] = {cityId: cid, branchId:''};
      }else{
        ten.assignments[id] = {cityId:'', branchId:''};
      }

      saveState(); toast(t('saved')); render();
    };
  }
  function delUser(userId){
    const ten=currentTenant();
    ten.users = ten.users.filter(u=>u.id!==userId);
    if(ten.sales) delete ten.sales[userId];
    if(ten.empTargets) delete ten.empTargets[userId];
    if(ten.assignments) delete ten.assignments[userId];
    saveState(); toast(t('removed')); render();
  }

  function renderAdminChecklists(area){
    const ten=currentTenant();
    const lang=state.session.lang;

    state.ui = state.ui || {};
    state.ui.checklistMode = state.ui.checklistMode || "manager";

    ten.checklists = ten.checklists || {manager:{}, shopper:{}, probation:{}};
    ten.checklists.manager = ten.checklists.manager || {};
    ten.checklists.shopper = ten.checklists.shopper || {};
    ten.checklists.probation = ten.checklists.probation || {};

    const mode = state.ui.checklistMode; // manager | shopper
    const clSet = ten.checklists[mode];
    const cats = Object.values(clSet);

    area.innerHTML = `
      <div class="row" style="gap:12px; flex-wrap:wrap; justify-content:space-between; align-items:center">
        <div>
          <h3 style="margin:0">${t('nav_checklists')}</h3>
          <div class="muted" style="margin-top:6px">${t('checklistType')}: <b>${mode==='manager'?t('managerChecklist'):mode==='shopper'?t('shopperChecklist'):t('probationChecklist')}</b></div>
        </div>
        <div class="row" style="gap:10px; flex-wrap:wrap; justify-content:flex-end">
          <select id="clMode" style="padding:10px 12px; border-radius:14px; border:1px solid rgba(234,236,240,.95); background:rgba(255,255,255,.96)">
            <option value="manager">${t('managerChecklist')}</option>
            <option value="shopper">${t('shopperChecklist')}</option>
            <option value="probation">${t('probationChecklist')}</option>
          </select>
          <button class="btn" id="copyBtn">⇄ <span id="copyLbl"></span></button>
          <button class="btn" id="addCatBtn">＋ ${t('addCategory')}</button>
        </div>
      </div>
      <div class="divider"></div>

      <div class="grid" style="gap:12px">
        ${cats.map(cat=>`
          <div class="card">
            <div class="row"><div style="min-width:0"><b>${cat.name[lang]}</b><div class="muted" style="font-size:12px">${cat.id}</div></div>
              <div class="row" style="gap:10px; flex-wrap:wrap; justify-content:flex-end">
                <button class="btn" onclick="saveCat('${mode}','${cat.id}')">${t('save')}</button>
                <button class="btn danger" onclick="delCat('${mode}','${cat.id}')">${t('delete')}</button>
              </div>
            </div>
            <div class="divider"></div>
            <div class="split">
              <div class="field"><label>${t('category')} (EN)</label><input id="cat_en_${cat.id}" type="text" value="${escapeHtml(cat.name.en)}"></div>
              <div class="field"><label>${t('category')} (AR)</label><input id="cat_ar_${cat.id}" type="text" value="${escapeHtml(cat.name.ar)}"></div>
            </div>
            <div class="split" style="margin-top:10px">
              <div class="field"><label>${t('weight')} (%)</label><input id="cat_w_${cat.id}" type="number" min="0" max="100" value="${cat.weight}"></div>
              <div class="card" style="box-shadow:none; background:rgba(242,244,247,.55)"><div class="muted">Tip: total weights ideally = 100</div></div>
            </div>
            <div class="divider"></div>
            <div class="row"><b>${t('question')}</b><button class="btn" onclick="addQ('${mode}','${cat.id}')">＋ ${t('addQuestion')}</button></div>
            <div class="grid" style="gap:10px; margin-top:10px">
              ${(cat.questions||[]).map(q=>`
                <div class="card" style="box-shadow:none; background:rgba(242,244,247,.55)">
                  <div class="row" style="align-items:flex-start"><div style="min-width:0"><b style="font-size:13px">${q.q[lang]}</b><div class="muted" style="font-size:12px">${q.id}</div></div>
                    <button class="btn danger" onclick="delQ('${mode}','${cat.id}','${q.id}')">${t('delete')}</button>
                  </div>
                  <div class="divider"></div>
                  <div class="split">
                    <div class="field"><label>EN</label><input id="q_en_${q.id}" type="text" value="${escapeHtml(q.q.en)}"></div>
                    <div class="field"><label>AR</label><input id="q_ar_${q.id}" type="text" value="${escapeHtml(q.q.ar)}"></div>
                  </div>
                  <div class="split" style="margin-top:10px">
                    <div class="field">
                      <label>${t('answerType')}</label>
                      <select id="q_type_${q.id}">
                        <option value="boolean" ${((q.type||'boolean')==='boolean')?'selected':''}>${t('type_bool')}</option>
                        <option value="mcq" ${((q.type||'boolean')==='mcq')?'selected':''}>${t('type_mcq')}</option>
                        <option value="scale" ${((q.type||'boolean')==='scale')?'selected':''}>${t('type_scale')}</option>
                        <option value="number" ${((q.type||'boolean')==='number')?'selected':''}>${t('type_number')}</option>
                        <option value="text" ${((q.type||'boolean')==='text')?'selected':''}>${t('type_text')}</option>
                      </select>
                    </div>

                    <div class="field" id="q_cfg_dirwrap_${q.id}" style="display:${((q.type||'boolean')==='text')?'none':'block'}">
                      <label>${t('scoringDirection')}</label>
                      <select id="q_dir_${q.id}">
                        <option value="high" ${((q.dir||'high')==='high')?'selected':''}>${t('dir_high')}</option>
                        <option value="low" ${((q.dir||'high')==='low')?'selected':''}>${t('dir_low')}</option>
                      </select>
                    </div>

                    <div class="field" style="display:flex; align-items:flex-end">
                      <label class="pill" style="cursor:pointer; margin:0">
                        <input id="q_photo_${q.id}" type="checkbox" ${q.photo?'checked':''}> 📷 ${t('requiredPhoto')}
                      </label>
                    </div>
                  </div>

                  <div id="q_cfg_mcq_${q.id}" style="margin-top:10px; display:${((q.type||'boolean')==='mcq')?'block':'none'}">
                    <div class="split">
                      <div class="field"><label>${t('optionsEn')}</label>
                        <textarea id="q_opts_en_${q.id}" placeholder="Excellent:1 | Good:0.75 | OK:0.5 | Poor:0.25 | Bad:0">${escapeHtml(mcqToString(q,'en'))}</textarea>
                      </div>
                      <div class="field"><label>${t('optionsAr')}</label>
                        <textarea id="q_opts_ar_${q.id}" placeholder="ممتاز:1 | جيد:0.75 | مقبول:0.5 | ضعيف:0.25 | سيئ:0">${escapeHtml(mcqToString(q,'ar'))}</textarea>
                      </div>
                    </div>
                    <div class="muted" style="margin-top:6px; font-size:12px">${t('optionsHint')}</div>
                  </div>

                  <div id="q_cfg_scale_${q.id}" style="margin-top:10px; display:${((q.type||'boolean')==='scale')?'block':'none'}">
                    <div class="split">
                      <div class="field"><label>${t('min')}</label><input id="q_min_${q.id}" type="number" value="${(q.opts&&q.opts.min!=null)?q.opts.min:1}"></div>
                      <div class="field"><label>${t('max')}</label><input id="q_max_${q.id}" type="number" value="${(q.opts&&q.opts.max!=null)?q.opts.max:5}"></div>
                    </div>
                  </div>

                  <div id="q_cfg_number_${q.id}" style="margin-top:10px; display:${((q.type||'boolean')==='number')?'block':'none'}">
                    <div class="split">
                      <div class="field"><label>${t('min')}</label><input id="q_nmin_${q.id}" type="number" value="${(q.opts&&q.opts.min!=null)?q.opts.min:0}"></div>
                      <div class="field"><label>${t('max')}</label><input id="q_nmax_${q.id}" type="number" value="${(q.opts&&q.opts.max!=null)?q.opts.max:100}"></div>
                    </div>
                  </div>

                  <div id="q_cfg_text_${q.id}" style="margin-top:10px; display:${((q.type||'boolean')==='text')?'block':'none'}">
                    <div class="field"><label>Max length</label><input id="q_tmax_${q.id}" type="number" value="${(q.opts&&q.opts.maxLen!=null)?q.opts.maxLen:''}" placeholder="(optional)"></div>
                  </div>

                  <div class="row" style="margin-top:10px; gap:10px; flex-wrap:wrap">
                    <button class="btn" onclick="saveQ('${mode}','${cat.id}','${q.id}')">${t('save')}</button>
                  </div>
                </div>
              `).join('') || `<div class="muted">No questions yet.</div>`}
            </div>
          </div>
        `).join('') || `<div class="muted">No categories yet.</div>`}
      </div>
    `;

    $('#clMode').value = mode;
    $('#clMode').onchange = ()=>{
      state.ui.checklistMode = $('#clMode').value;
      saveState();
      render();
    };

    $('#copyLbl').textContent = mode==='manager' ? t('copyToShopper') : t('copyToManager');
    $('#copyBtn').onclick = ()=>{
      const from = state.ui.checklistMode;
      const to = from==='manager' ? 'shopper' : 'manager';
      ten.checklists[to] = JSON.parse(JSON.stringify(ten.checklists[from]||{}));
      saveState(); toast(t('saved')); render();
    };

    $('#addCatBtn').onclick=()=>{
      const id=uid('cat');
      clSet[id]={id, name:{en:'New section', ar:'قسم جديد'}, weight:10, questions:[]};
      saveState(); toast(t('saved')); render();
    };


    // Live toggle of question config blocks
    $$('select[id^="q_type_"]').forEach(sel=>{
      sel.onchange = ()=>{
        const qid = sel.id.replace('q_type_','');
        ['mcq','scale','number','text'].forEach(tp=>{
          const el = document.getElementById(`q_cfg_${tp}_${qid}`);
          if(el) el.style.display = (sel.value===tp) ? 'block' : 'none';
        });
        const dirWrap = document.getElementById(`q_cfg_dirwrap_${qid}`);
        if(dirWrap) dirWrap.style.display = (sel.value==='text') ? 'none' : 'block';
      };
    });
  }
  function saveCat(mode, catId){
    const ten=currentTenant();
    const cat=ten.checklists[mode][catId];
    cat.name.en=$('#cat_en_'+catId).value.trim() || cat.name.en;
    cat.name.ar=$('#cat_ar_'+catId).value.trim() || cat.name.ar;
    cat.weight=Math.max(0, Math.min(100, Number($('#cat_w_'+catId).value||cat.weight)));
    saveState(); toast(t('saved')); render();
  }
  function delCat(mode, catId){
    const ten=currentTenant();
    delete ten.checklists[mode][catId];
    saveState(); toast(t('removed')); render();
  }
  function addQ(mode, catId){
    const ten=currentTenant();
    const cat=ten.checklists[mode][catId];
    const id=uid('q');
    cat.questions = cat.questions || [];
    cat.questions.push({id, q:{en:'New question', ar:'سؤال جديد'}, type:'boolean', dir:'high', photo:false});
    saveState(); toast(t('saved')); render();
  }
  function saveQ(mode, catId, qId){
    const ten=currentTenant();
    const q=ten.checklists[mode][catId].questions.find(x=>x.id===qId);
    q.q.en=$('#q_en_'+qId).value.trim() || q.q.en;
    q.q.ar=$('#q_ar_'+qId).value.trim() || q.q.ar;
    q.photo = $('#q_photo_'+qId).checked;

    const type = ($('#q_type_'+qId)?.value || q.type || 'boolean').toLowerCase();
    q.type = type;

    const dirRaw = ($('#q_dir_'+qId)?.value || q.dir || 'high');
    const dir = (String(dirRaw).toLowerCase()==='low') ? 'low' : 'high';
    q.dir = dir;

    if(type==='mcq'){
      const enStr = $('#q_opts_en_'+qId)?.value || '';
      const arStr = $('#q_opts_ar_'+qId)?.value || '';
      q.opts = {items: buildMcqItems(enStr, arStr, (q.dir||"high"))};
    } else if(type==='scale'){
      const min = Number($('#q_min_'+qId)?.value || 1);
      const max = Number($('#q_max_'+qId)?.value || 5);
      q.opts = {min, max};
    } else if(type==='number'){
      const min = Number($('#q_nmin_'+qId)?.value || 0);
      const max = Number($('#q_nmax_'+qId)?.value || 100);
      q.opts = {min, max};
    } else if(type==='text'){
      const maxLenRaw = ($('#q_tmax_'+qId)?.value || '').trim();
      const maxLen = maxLenRaw==='' ? null : Number(maxLenRaw);
      q.opts = {};
      if(maxLen!=null && isFinite(maxLen) && maxLen>0) q.opts.maxLen = Math.floor(maxLen);
    } else {
      // boolean
      if(q.opts) delete q.opts;
    }

    saveState(); toast(t('saved'));
  }
  function delQ(mode, catId, qId){
    const ten=currentTenant();
    ten.checklists[mode][catId].questions = ten.checklists[mode][catId].questions.filter(x=>x.id!==qId);
    saveState(); toast(t('removed')); render();
  }


  function renderAdminBranding(area){
    const ten=currentTenant();
    const lang=state.session.lang;
    ten.branding = ten.branding || {logo:null, companyName:(ten.companyName||ten.name||ten.id||""), poweredBy:true};
    if(ten.branding.poweredBy === undefined) ten.branding.poweredBy = true;

    area.innerHTML = `
      <div class="row">
        <div style="min-width:0">
          <h3 style="margin:0">${t('brandingTitle')}</h3>
          <div class="muted" style="margin-top:6px">${t('logoHint')}</div>
        </div>
        <div class="row" style="gap:10px; flex-wrap:wrap; justify-content:flex-end">
          <button class="btn primary" id="brandSaveBtn">${t('save')}</button>
        </div>
      </div>
      <div class="divider"></div>

      <div class="grid" style="gap:12px">
        <div class="card">
          <b>${t('companyName')}</b>
          <div class="muted" style="margin-top:6px; font-size:12px">Shown in dashboards and exports.</div>
          <div class="divider"></div>
          <input id="brandCompanyName" type="text" value="${escapeHtml(ten.branding.companyName||'')}" placeholder="Company name"/>
        </div>

        <div class="card">
          <div class="row" style="align-items:flex-start">
            <div style="min-width:0">
              <b>${t('companyLogo')}</b>
              <div class="muted" style="margin-top:6px; font-size:12px">Header logo for this company.</div>
            </div>
            <div class="row" style="gap:10px; flex-wrap:wrap; justify-content:flex-end">
              <label class="btn" style="cursor:pointer">
                ${t('uploadLogo')}
                <input id="brandLogoFile" type="file" accept="image/png,image/svg+xml,image/webp,image/jpeg" style="display:none"/>
              </label>
              <button class="btn danger" id="brandRemoveLogo" ${ten.branding.logo ? '' : 'disabled'}>${t('removeLogo')}</button>
            </div>
          </div>
          <div class="divider"></div>

          <div class="row" style="gap:16px; align-items:center; flex-wrap:wrap">
            <div class="card" style="width:220px; height:110px; display:flex; align-items:center; justify-content:center; background:rgba(242,244,247,.6); box-shadow:none">
              ${ten.branding.logo ? `<img src="${ten.branding.logo}" alt="logo" style="max-width:200px; max-height:90px; object-fit:contain"/>` : `<span class="muted">No logo</span>`}
            </div>
            <div style="flex:1; min-width:240px">
              <label class="pill" style="cursor:pointer; display:inline-flex; gap:10px; align-items:center">
                <input id="brandPowered" type="checkbox" ${ten.branding.poweredBy ? 'checked' : ''}/> ${t('poweredBy')}
              </label>
              <div class="muted" style="margin-top:10px; font-size:12px">
                Tip: transparent PNG looks best on light/dark backgrounds.
              </div>
            </div>
          </div>
        </div>
      </div>
    `;

    const file = $('#brandLogoFile');
    file.onchange = ()=>{
      const f = file.files && file.files[0];
      if(!f) return;
      const reader = new FileReader();
      reader.onload = ()=>{
        ten.branding.logo = String(reader.result || '');
        saveState();
        toast(t('saved'));
        refreshBrand();
        renderAdminBranding(area);
      };
      reader.readAsDataURL(f);
    };

    $('#brandRemoveLogo').onclick = ()=>{
      ten.branding.logo = null;
      saveState();
      toast(t('removed'));
      refreshBrand();
      renderAdminBranding(area);
    };

    $('#brandSaveBtn').onclick = ()=>{
      ten.branding.companyName = $('#brandCompanyName').value.trim() || ten.branding.companyName;
      ten.branding.poweredBy = $('#brandPowered').checked;
      saveState();
      toast(t('saved'));
      refreshBrand();
      renderAdminBranding(area);
    };
  }

function renderAdminLabels(area){
    const ten=currentTenant();
    const lang=state.session.lang;
    const keys=Object.keys(I18N.en);

    area.innerHTML = `
      <div class="row"><h3 style="margin:0">${t('nav_labels')}</h3><span class="pill">${t('lang')}: ${lang.toUpperCase()}</span></div>
      <div class="muted" style="margin-top:6px">${t('labelsHint')}</div>
      <div class="divider"></div>
      <table>
        <thead><tr><th>${t('labelKey')}</th><th>${t('labelValue')}</th><th></th><th></th></tr></thead>
        <tbody>
          ${keys.slice(0,40).map(k=>{
            const v=ten.labels?.[lang]?.[k] || '';
            const ph=(I18N[lang]&&I18N[lang][k]) || '';
            return `<tr><td><span class="pill">${k}</span></td><td><input id="lbl_${k}" type="text" value="${escapeHtml(v)}" placeholder="${escapeHtml(ph)}"></td><td><button class="btn" onclick="saveLbl('${k}')">${t('save')}</button></td><td><button class="btn danger" onclick="clrLbl('${k}')">${t('delete')}</button></td></tr>`;
          }).join(''); })()}
        </tbody>
      </table>
      <div class="divider"></div>
      <div class="muted" style="font-size:12px">(Demo) This covers key UI strings. For production, a full translation editor can be added.</div>
    `;
  }
  function saveLbl(key){
    const ten=currentTenant(); const lang=state.session.lang;
    ten.labels=ten.labels||{en:{}, ar:{}};
    ten.labels[lang][key]=$('#lbl_'+key).value.trim();
    saveState(); toast(t('saved')); render();
  }
  function clrLbl(key){
    const ten=currentTenant(); const lang=state.session.lang;
    if(ten.labels?.[lang]?.[key]) delete ten.labels[lang][key];
    saveState(); toast(t('removed')); render();
  }

  function escapeHtml(s){ return String(s??'').replace(/[&<>"']/g, m=>({"&":"&amp;","<":"&lt;",">":"&gt;","\"":"&quot;","'":"&#39;"}[m])); }

  // boot
  syncTenantSelect();
  $('#langSelect').value = state.session.lang || 'en';
  $('#langSelect').onchange = (e)=>{ state.session.lang=e.target.value; saveState(); render(); };
  $('#resetBtn').onclick = resetDemo;

  render();
