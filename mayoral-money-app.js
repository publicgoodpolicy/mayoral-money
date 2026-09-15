/* Institute for the Public Good — Mayoral money. Self-contained loader. */
(function(){
  var CSS = "\n:root{\n  --teal:#044127; --sage:#508F88; --coral:#B0553A; --tan:#EBDAC6; --cream:#F6EFE9; --ink:#342828;\n  --ochre:#C9973A; --plum:#6E4B6B; --mist:#8FB8B3; --sand:#D9C2A3; --ash:#8A7E7E; --pale:#EFE6DA;\n  --bg:var(--cream); --fg:var(--ink); --rule:#DCCDB9; --muted:#6F6363; --panel:#FBF7F2;\n  --c-ind:#044127; --c-small:#8FB8B3; --c-self:#B0553A; --c-labor:#508F88; --c-biz:#C9973A;\n  --c-cand:#6E4B6B; --c-party:#A07EA0; --c-issue:#D9A98F; --c-loan:#8A7E7E;\n  --serif:\"Newsreader\", Georgia, \"Times New Roman\", serif;\n  --sans:\"Poppins\", \"Helvetica Neue\", Arial, sans-serif;\n}\n@media (prefers-color-scheme: dark){\n  :root:not([data-theme=\"light\"]){ --bg:#1E1A18; --fg:#EFE6DA; --rule:#3C3431; --muted:#B8AAA5; --panel:#262120; --pale:#2E2826; --tan:#3C3431; --c-ind:#8FB8B3; --c-cand:#B899B8; --c-party:#7E5F7E; }\n}\n:root[data-theme=\"dark\"]{ --bg:#1E1A18; --fg:#EFE6DA; --rule:#3C3431; --muted:#B8AAA5; --panel:#262120; --pale:#2E2826; --tan:#3C3431; --c-ind:#8FB8B3; --c-cand:#B899B8; --c-party:#7E5F7E; }\n*{box-sizing:border-box}\nhtml{scroll-behavior:smooth}\n@media (prefers-reduced-motion:reduce){html{scroll-behavior:auto}}\nbody{margin:0;background:var(--bg);color:var(--fg);font-family:var(--sans);font-size:15px;line-height:1.55;-webkit-font-smoothing:antialiased}\na{color:inherit}\nh1,h2,h3{font-family:var(--serif);font-weight:500;line-height:1.1;margin:0}\nh1{font-size:clamp(40px,6vw,72px);letter-spacing:-0.01em}\nh2{font-size:clamp(28px,3.6vw,40px);margin-bottom:8px}\nh3{font-size:22px;margin-bottom:6px}\np{max-width:none}\n.lede{font-family:var(--serif);font-size:clamp(19px,2vw,23px);line-height:1.4;margin:22px 0 0}\n.wrap{max-width:1140px;margin:0 auto;padding:0 28px}\nheader.hero{padding:64px 0 28px}\n.byline{color:var(--muted);font-size:13.5px;margin-top:18px}\n.byline span+span::before{content:\"  \u00b7  \";color:var(--rule)}\nsection{padding:44px 0 12px;border-top:1px solid var(--rule)}\nsection .intro{color:var(--muted);margin:6px 0 22px}\n.controls{position:sticky;top:var(--stick-top,0px);z-index:20;background:var(--bg);border-top:1px solid var(--rule);border-bottom:1px solid var(--rule);padding:12px 0;margin-top:26px}\n.controls .wrap{display:flex;flex-wrap:wrap;gap:10px 26px;align-items:center}\n.secnav{display:flex;flex-wrap:wrap;gap:2px 14px;padding-top:8px;margin-top:8px;border-top:1px solid var(--rule);font-size:12.5px}\n.secnav a{color:var(--muted);text-decoration:none;padding:2px 0;border-bottom:2px solid transparent;white-space:nowrap}\n.secnav a.on{color:var(--teal);border-bottom-color:var(--teal);font-weight:500}\n.secnav a:hover{color:var(--fg)}\n.m-only{display:none}\n@media (max-width:700px){\n  .controls .secnav{display:none}\n  .controls .d-only{display:none}\n  .controls .m-only{display:inline-block}\n  .controls{padding:8px 0}\n  .controls .wrap{gap:8px 14px}\n  .controls label.ctl-head{display:none}\n  .controls select{font-size:13px;padding:6px 8px;max-width:58vw}\n  .controls label{font-size:13px}\n}\n.seg{display:inline-flex;border:1px solid var(--rule);border-radius:999px;padding:3px;gap:2px;background:var(--panel)}\n.seg button{border:0;background:transparent;font:inherit;font-size:13px;font-weight:500;color:var(--fg);padding:5px 12px;border-radius:999px;cursor:pointer}\n.seg button[aria-pressed=\"true\"]{background:var(--teal);color:#fff}\n:root[data-theme=\"dark\"] .seg button[aria-pressed=\"true\"],:root:not([data-theme=\"light\"]) .seg button[aria-pressed=\"true\"]{}\n.controls label{font-size:13px;display:inline-flex;align-items:center;gap:6px;color:var(--fg)}\n.controls label.ctl-head{color:var(--muted)}\n.controls input[type=checkbox]{accent-color:var(--teal);width:15px;height:15px}\n.hint{font-size:12.5px;color:var(--muted)}\n.panel{background:var(--panel);border:1px solid var(--rule);border-radius:6px;padding:20px 22px;margin:0 0 26px}\n.panel-head{display:flex;justify-content:space-between;align-items:baseline;gap:16px;flex-wrap:wrap;margin-bottom:12px}\n.panel-head h3{margin:0}\n.btns{display:inline-flex;gap:6px}\n.panel-head .cap{color:var(--muted);font-size:13px}\n.dl{font:inherit;font-size:12.5px;font-weight:500;color:var(--teal);background:transparent;border:1px solid var(--sage);border-radius:4px;padding:4px 10px;cursor:pointer;white-space:nowrap;text-decoration:none}\n.dl:hover{background:var(--pale)}\n:root[data-theme=\"dark\"] .dl{color:var(--mist);border-color:var(--sage)}\nbutton:focus-visible,select:focus-visible,input:focus-visible{outline:2px solid var(--coral);outline-offset:2px}\nsvg text{font-family:var(--sans)}\n.legend{display:flex;flex-wrap:wrap;gap:6px 16px;font-size:12.5px;margin:6px 0 14px}\n.legend span{display:inline-flex;align-items:center;gap:6px}\n.legend i{width:12px;height:12px;border-radius:2px;display:inline-block}\ntable{border-collapse:collapse;width:100%;font-size:13.5px}\nth,td{text-align:left;padding:8px 8px;border-bottom:1px solid var(--rule);vertical-align:top}\nth{font-weight:500;color:var(--muted);font-size:12.5px}\ntd.num,th.num{text-align:right;font-variant-numeric:tabular-nums}\ntr.sub td{color:var(--muted)}\n.scroll{overflow-x:auto}\n.score th:first-child,.score td:first-child{font-family:var(--serif);font-size:16px;white-space:nowrap}\n.score td.bar{min-width:120px}\n.score td:nth-child(2){white-space:nowrap}\n.mini{display:inline-block;height:8px;background:var(--sage);border-radius:2px;vertical-align:middle;margin-right:6px}\n.grid2{display:grid;grid-template-columns:repeat(auto-fit,minmax(320px,1fr));gap:18px 28px}\n.race h3{font-size:19px;margin-bottom:2px}\n.race .cap{font-size:12.5px;color:var(--muted);margin-bottom:8px}\n.grid3{display:grid;grid-template-columns:repeat(auto-fit,minmax(300px,1fr));gap:16px 28px}\nselect{font:inherit;font-size:13.5px;padding:6px 10px;border:1px solid var(--rule);border-radius:4px;background:var(--panel);color:var(--fg)}\n.cand-select{display:flex;gap:10px;align-items:center;margin-bottom:14px;flex-wrap:wrap}\n.note{font-size:13px;color:var(--muted);margin-top:10px}\n.callout{border-left:3px solid var(--coral);padding:4px 0 4px 16px;margin:16px 0 20px}\n.callout p{margin:0}\n.method dt{font-weight:500;margin-top:14px}\n.method dd{margin:4px 0 0;color:var(--muted)}\n.method code{font-size:12.5px;background:var(--pale);padding:1px 5px;border-radius:3px}\nfooter{padding:36px 0 60px;color:var(--muted);font-size:13px;border-top:1px solid var(--rule);margin-top:40px}\n.hero-bars{margin:36px 0 8px}\n.era-row{display:grid;grid-template-columns:200px 1fr;gap:14px;align-items:start;padding:10px 0;border-top:1px solid var(--rule)}\n.era-row:first-child{border-top:0}\n.era-row .name{font-family:var(--serif);font-size:19px;padding-top:4px}\n.era-row .name small{display:block;font-family:var(--sans);font-size:12px;color:var(--muted);margin-top:2px}\n@media (max-width:700px){.era-row{grid-template-columns:1fr}.wrap{padding:0 18px}header.hero{padding-top:40px}}\n.tags{display:flex;flex-wrap:wrap;gap:6px;margin-top:6px}\n.tag{font-size:11.5px;border:1px solid var(--rule);border-radius:3px;padding:1px 7px;color:var(--muted)}\n.toast{position:fixed;bottom:18px;left:50%;transform:translateX(-50%);background:var(--teal);color:#fff;padding:8px 14px;border-radius:4px;font-size:13px;opacity:0;transition:opacity .2s;pointer-events:none}\n.toast.on{opacity:1}\n.sr{position:absolute;left:-9999px}\n.findings{border-top:0;padding:8px 0 28px}\n.findings h2{font-size:clamp(24px,3vw,32px);margin-bottom:14px}\n.stats{display:grid;grid-template-columns:repeat(auto-fit,minmax(200px,1fr));gap:14px 22px;margin:6px 0 18px}\n.stat{border-top:2px solid var(--teal);padding-top:8px}\n.stat b{display:block;font-family:var(--serif);font-weight:500;font-size:clamp(30px,3.6vw,44px);line-height:1;color:var(--teal);font-variant-numeric:tabular-nums}\n.stat span{display:block;font-size:13px;color:var(--muted);margin-top:6px;line-height:1.35}\nul.kf{margin:0;padding:0;list-style:none;display:grid;grid-template-columns:repeat(auto-fit,minmax(300px,1fr));gap:10px 28px}\nul.kf li{padding:8px 0 8px 14px;border-left:3px solid var(--sage);font-size:14.5px;line-height:1.5}\nul.kf li b{font-weight:600}\n.kf-link{margin-top:16px;font-size:14px}\n.kf-link a{color:var(--teal);font-weight:500}\n.kf-link[hidden]{display:none}\n.rv{opacity:0;transform:translateY(14px);transition:opacity .6s ease,transform .6s ease}\n.rv.in{opacity:1;transform:none}\n#hero-bars rect{transition:width .9s cubic-bezier(.2,.7,.2,1)}\n@media (prefers-reduced-motion:reduce){.rv{opacity:1;transform:none;transition:none}#hero-bars rect{transition:none}}\n.fb-open{position:fixed;right:18px;bottom:18px;z-index:2147482000;font:inherit;font-size:13.5px;font-weight:600;color:#fff;background:var(--teal);border:0;border-radius:999px;padding:10px 18px;cursor:pointer;box-shadow:0 6px 20px rgba(0,0,0,.2)}\n.fb-open:hover{background:var(--sage)}\n.fbf label{display:block;font-size:13px;margin:10px 0 0;color:var(--muted)}\n.fbf input,.fbf select,.fbf textarea{display:block;width:100%;margin-top:4px;font:inherit;font-size:14px;padding:8px 10px;border:1px solid var(--rule);border-radius:4px;background:var(--panel);color:var(--fg)}\n.fbf label.chk{display:flex;align-items:center;gap:8px;color:var(--fg);margin-top:14px}\n.fbf label.chk input{width:auto;margin:0}\n.fbrow{display:flex;gap:10px;flex-wrap:wrap;margin-top:16px;align-items:center}\n.fbrow a.dl{text-decoration:none;display:inline-block}\n.dl.primary{background:var(--teal);color:#fff;border-color:var(--teal);padding:7px 16px}\n#fb-done{font-size:14px;margin-top:8px}\n@media print{.fb-open,.controls{display:none}}\n.modal{position:fixed;inset:0;z-index:2147483000;display:flex;align-items:flex-start;justify-content:center;padding:24px;overflow-y:auto;-webkit-overflow-scrolling:touch}\n.modal[hidden]{display:none}\n.modal-back{position:absolute;inset:0;background:rgba(52,40,40,.55)}\n.modal-box{position:relative;margin:4vh auto;background:var(--bg);color:var(--fg);border:1px solid var(--rule);border-radius:8px;width:min(1040px,100%);max-height:88vh;display:flex;flex-direction:column;box-shadow:0 20px 60px rgba(0,0,0,.25)}\n.modal-head{display:flex;justify-content:space-between;align-items:flex-start;gap:16px;padding:18px 22px 12px;border-bottom:1px solid var(--rule)}\n.modal-head .cap{color:var(--muted);font-size:13px;margin-top:4px}\n.modal-body{overflow:auto;padding:6px 22px 22px}\n.modal-body details{border-bottom:1px solid var(--rule)}\n.modal-body summary{cursor:pointer;list-style:none;display:grid;grid-template-columns:1fr 150px 110px 60px;gap:12px;padding:9px 4px;align-items:baseline;font-size:13.5px}\n.modal-body summary::-webkit-details-marker{display:none}\n.modal-body.mx summary,.modal-body.mx .mhead{grid-template-columns:1fr 16px 150px 150px}\n.modal-body.mx summary>span:nth-child(3),.modal-body.mx summary>span:nth-child(4){white-space:nowrap}\n.modal-body summary:hover{background:var(--pale)}\n.modal-body summary .cand{color:var(--muted);font-size:12.5px}\n.modal-body .gifts{padding:2px 4px 10px 18px;font-size:12.5px}\n.modal-body .gifts table td{padding:4px 8px;border-bottom:1px solid var(--pale)}\n.modal-body .gifts a{color:var(--sage)}\n.modal-body .who{color:var(--muted);font-size:12px;display:block}\n.mhead{display:grid;grid-template-columns:1fr 150px 110px 60px;gap:12px;padding:10px 4px 6px;font-size:12px;color:var(--muted);border-bottom:1px solid var(--rule);position:sticky;top:0;background:var(--bg)}\nsvg .clk{cursor:pointer}\nsvg .clk:hover rect{opacity:.85}\n#ind-matrix td.clk,#ind-matrix td.rowk{cursor:pointer}\n#top-panel tr.src{cursor:pointer}\n#net-table{font-size:11.5px}\n#net-table th{font-size:11.5px;line-height:1.25}\n#net-table th.grp{border-bottom:0;color:var(--fg);font-family:var(--serif);font-size:14px;padding-bottom:2px;text-align:center}\n#net-table .g-il{background:color-mix(in srgb, var(--sage) 7%, var(--bg))}\n#net-table .g-fed{background:color-mix(in srgb, var(--plum) 7%, var(--bg))}\n#net-table th.g-il,#net-table th.g-fed{border-bottom:2px solid var(--sage)}\n#net-table th.g-fed{border-bottom-color:var(--plum)}\n#net-table th.grp.g-il{color:var(--sage)}#net-table th.grp.g-fed{color:var(--plum)}\n#net-table td.g-fed:first-of-type,#net-table th.g-fed:first-of-type{border-left:2px solid var(--plum)}\n.ovl-ctl{position:sticky;top:calc(var(--stick-top,0px) + var(--ctlh,58px));z-index:15;background:var(--bg);padding:10px 0;margin-bottom:0;border-bottom:1px solid var(--rule)}\n#ovl-desc{font-size:14px;margin:14px 0 18px}\n.ovl-row{display:grid;grid-template-columns:170px 1fr 150px;gap:14px;align-items:center;padding:10px 0;border-top:1px solid var(--rule);cursor:pointer}\n.ovl-row:hover{background:var(--pale)}\n.ovl-row .nm{font-family:var(--serif);font-size:18px}\n.ovl-row .nm small{display:block;font-family:var(--sans);font-size:11.5px;color:var(--muted)}\n.ovl-row .amt{text-align:right;font-variant-numeric:tabular-nums}\n.ovl-row .amt b{font-size:17px}\n.ovl-row .amt small{display:block;color:var(--muted);font-size:11.5px}\n.ovl-row .who{font-size:12px;color:var(--muted);margin-top:4px;line-height:1.35}\n.ovl-row .who b{color:var(--fg);font-weight:500}\n@media (max-width:700px){.ovl-row{grid-template-columns:1fr}.ovl-row .amt{text-align:left}}\n#ovl-table tr.clk{cursor:pointer}\n#ovl-table tr.clk:hover td{background:var(--pale)}\n.scroll.sticky{max-height:76vh;overflow:auto}\n.scroll.sticky thead th{position:sticky;top:0;background:var(--bg);z-index:2;box-shadow:0 1px 0 var(--rule)}\n.scroll.sticky thead tr:nth-child(2) th{top:var(--h1,28px)}\n#net-matrix td{padding:7px 8px;white-space:nowrap;vertical-align:middle}\n#net-matrix td.name{font-family:var(--serif);font-size:16px}\n#net-matrix td.cell{text-align:right;font-variant-numeric:tabular-nums;cursor:pointer}\n#net-matrix td.cell:hover{outline:2px solid var(--sage);outline-offset:-2px}\n#net-matrix td.cell small{display:block;color:var(--muted);font-size:10.5px}\n#net-matrix td.cell.none{color:var(--muted);cursor:default}\n#net-matrix th.num{white-space:normal;min-width:128px;max-width:140px;vertical-align:bottom;text-align:right}\n#net-matrix td.name{min-width:130px;white-space:normal}\n#net-matrix td,#org-matrix td{padding:7px 6px}\n#org-matrix td{white-space:nowrap;vertical-align:middle}\n#org-matrix td.name{font-family:var(--serif);font-size:15px;min-width:110px;white-space:normal}\n#org-matrix td.cell{text-align:right;font-variant-numeric:tabular-nums;cursor:pointer}\n#org-matrix td.cell:hover{outline:2px solid var(--sage);outline-offset:-2px}\n#org-matrix td.cell small{display:block;color:var(--muted);font-size:10.5px}\n#org-matrix td.cell.none{color:var(--muted);cursor:default}\n#org-matrix th.num{white-space:normal;min-width:104px;max-width:124px;vertical-align:bottom;text-align:right;font-size:11.5px}\n#org-matrix td.cell{font-size:12px}\n#org-defs{margin-top:14px;font-size:13px}#org-defs summary{cursor:pointer;color:var(--sage)}\n#net-defs{margin-top:14px;font-size:13px}#net-defs summary{cursor:pointer;color:var(--sage)}\n#net-table td{padding:4px 5px;white-space:nowrap}\n#net-table td.name{font-family:var(--serif);font-size:14px;cursor:pointer}\n#net-table tr:hover td{background:var(--pale)}\n#net-table td.cell{text-align:right;font-variant-numeric:tabular-nums}\n#net-table td.sev{min-width:150px;white-space:normal}\n#net-table td.sev small{display:block;color:var(--muted);font-size:11px;line-height:1.3}\n#net-table td.name{min-width:150px;white-space:normal}\n#net-table th.num{white-space:normal;max-width:70px;padding:4px 5px}\n.prof{display:grid;grid-template-columns:1fr 1fr;gap:18px 32px}\n.prof h4{font-family:var(--serif);font-weight:500;font-size:18px;margin:8px 0 4px}\n.prof .tot{color:var(--muted);font-size:12.5px;margin-bottom:8px}\n.prof table{font-size:12.5px}\n.prof td{padding:4px 6px}\n.prof .tags{margin:6px 0 12px}\n.prof .tag b{color:var(--fg)}\n@media (max-width:760px){.prof{grid-template-columns:1fr}}\n#top-panel tr.src:hover td{background:var(--pale)}\n.dsum{display:flex;flex-wrap:wrap;gap:8px 22px;margin:10px 0 6px;font-size:13.5px}\n.dsum b{font-family:var(--serif);font-size:17px;font-weight:500}\n.dlink{display:inline-block;margin:6px 0 12px;color:var(--sage);font-size:13.5px}\n#ind-matrix td.clk:hover,#ind-matrix td.rowk:hover{outline:2px solid var(--sage);outline-offset:-2px}\n#ind-matrix td small{display:block;color:var(--muted);font-size:11px}\n@media (max-width:700px){.modal{padding:8px}.modal-body summary,.mhead{grid-template-columns:1fr 90px 80px}.modal-body summary>span:nth-child(4),.mhead>span:nth-child(4){display:none}}\n";
  var HTML = "<header class=\"hero\">\n  <div class=\"wrap\">\n    <h1>Who is funding Chicago\u2019s 2026 mayoral candidates?</h1>\n    <p class=\"lede\">Every itemized dollar contributed directly to the twelve declared 2027 candidates across their political careers \u2014 <span id=\"lede-total\"></span> in state-reported receipts, classified by who gave it, where they live, what they do, and when.</p>\n    <div class=\"byline\"><span>Institute for the Public Good</span><span>Illinois State Board of Elections filings through <b id=\"vintage\"></b></span><span>Direct contributions only \u2014 outside spending is tracked separately</span></div>\n  </div>\n</header>\n\n<section id=\"findings\" class=\"findings\">\n  <div class=\"wrap\">\n    <h2>Key findings</h2>\n    <div class=\"stats\" id=\"kf-stats\"></div>\n    <ul class=\"kf\" id=\"kf-list\"></ul>\n    <p class=\"kf-link\"><a id=\"brief-link\" href=\"#\" target=\"_blank\" rel=\"noopener\">Read the full brief \u2197</a></p>\n  </div>\n</section>\n\n<div class=\"controls\" id=\"controls\">\n  <div class=\"wrap\">\n    <label class=\"ctl-head\">Window</label>\n    <select id=\"win-sel\" class=\"m-only\" aria-label=\"Time window\"><option value=\"all\">Full career</option><option value=\"2023-04-05\" selected>2027 cycle (since Apr 2023)</option><option value=\"2025-01-01\">Since 2025</option><option value=\"2026-01-01\">2026 only</option></select>\n    <div class=\"seg d-only\" id=\"win-seg\" role=\"group\" aria-label=\"Time window\">\n      <button data-win=\"all\">Full career</button>\n      <button data-win=\"2023-04-05\" aria-pressed=\"true\">2027 cycle (since Apr 2023)</button>\n      <button data-win=\"2025-01-01\">Since 2025</button>\n      <button data-win=\"2026-01-01\">2026 only</button>\n    </div>\n    <label><input type=\"checkbox\" id=\"ck-inkind\" checked> <span class=\"d-only\">Include </span>in-kind</label>\n    <label><input type=\"checkbox\" id=\"ck-loans\" checked> <span class=\"d-only\">Include </span>loans</label>\n    <span class=\"hint d-only\" id=\"win-hint\"></span>\n    <select id=\"sec-sel\" class=\"m-only\" aria-label=\"Jump to section\"><option value=\"\">Jump to\u2026</option></select>\n  </div>\n  <nav class=\"secnav wrap d-only\" id=\"secnav\" aria-label=\"Sections\"></nav>\n</div>\n\n<section id=\"overview\" style=\"border-top:0;padding-top:28px\">\n  <div class=\"wrap\">\n    <div class=\"panel-head\"><h2>Who\u2019s got the money\u2026 and from where?</h2><span class=\"btns\"><button class=\"dl\" data-dl=\"hero-svg\" data-name=\"ipg-mayoral-money-by-source\">Download PNG</button><button class=\"dl\" data-csv=\"hero-bars\" data-name=\"ipg-mayoral-money-by-source\">Download CSV</button></span></div>\n    <p class=\"intro\">Total direct contributions to each candidate in the selected window, stacked by source. Transfers between a candidate's own committees, interest, and refunds are removed so no dollar is counted twice.</p>\n    <div class=\"legend\" id=\"legend-cat\"></div>\n    <div class=\"hero-bars\" id=\"hero-bars\"></div>\n    <p class=\"note\" id=\"hero-note\"></p>\n    <div class=\"panel-head\" style=\"margin-top:26px\"><h3>War chests: cash on hand, spending and debt</h3><span class=\"btns\"><button class=\"dl\" data-dl=\"cash-table\" data-name=\"ipg-mayoral-cash-on-hand\">Download PNG</button><button class=\"dl\" data-csv=\"cash-table\" data-name=\"ipg-mayoral-cash-on-hand\">Download CSV</button></span></div>\n    <p class=\"intro\" style=\"margin-top:0\">From each committee\u2019s most recent quarterly report. Cash on hand is what the committee reported holding at the end of that quarter; raising a lot and spending little is why a candidate\u2019s bank balance can match what they raised. Debts are mostly loans the candidate or family made to the committee. This panel does not change with the window.</p>\n    <div class=\"scroll\"><table id=\"cash-table\"></table></div>\n  </div>\n</section>\n\n<section id=\"scorecard\">\n  <div class=\"wrap\">\n    <div class=\"panel-head\"><h2>Who has the big money</h2><span class=\"btns\"><button class=\"dl\" data-dl=\"race-wrap\" data-name=\"ipg-mayoral-money-by-source\">Download PNG</button><button class=\"dl\" data-csv=\"race-wrap\" data-name=\"ipg-mayoral-money-by-source\">Download CSV</button></span></div>\n    <p class=\"intro\">The same dollars as above, one source at a time. Each panel ranks the twelve by what that kind of donor has given them in the selected window.</p>\n    <div id=\"race-wrap\" class=\"grid2\"></div>\n  </div>\n</section>\n\n<section id=\"networks\">\n  <div class=\"wrap\">\n    <div class=\"panel-head\"><h2>Where the big money goes</h2><span class=\"btns\"><button class=\"dl\" data-dl=\"net-matrix\" data-name=\"ipg-mayoral-network-matrix\">Matrix PNG</button><button class=\"dl\" data-csv=\"net-matrix\" data-name=\"ipg-mayoral-network-matrix\">Matrix CSV</button><button class=\"dl\" data-dl=\"net-table\" data-name=\"ipg-mayoral-donor-networks\">Donors PNG</button><button class=\"dl\" data-csv=\"net-table\" data-name=\"ipg-mayoral-donor-networks\">Donors CSV</button></span></div>\n    <p class=\"intro\">The 50 largest individual donors to the twelve, followed across every Illinois committee they have funded (State Board of Elections) and every federal committee (FEC). This view is career-wide and does not change with the window above. Dollars to a network are colored by size; click a row for the full profile.</p>\n    <h3 style=\"margin-top:6px\">Who the candidates\u2019 biggest individual donors also fund</h3>\n    <p class=\"intro\" style=\"margin-top:0\"><b>Why these networks.</b> A candidate\u2019s largest individual donors are people who give across many committees, and the pattern of that giving says something the contribution record alone does not. The columns are the networks that either dominated outside spending in the most recent Illinois elections (the AIPAC-aligned super PACs and the crypto, AI and big-tech super PACs together were the largest independent spenders in the March 2026 primaries), or have defined the money coalitions in Chicago mayoral politics (charter-school money; the Emanuel- and Vallas-era independent-expenditure committees, covered in the next section), or signal a donor\u2019s partisan and ideological commitments (Republican giving; the No Labels and Problem Solvers network; Democratic party infrastructure). The test for inclusion is dollars and stakes, not ideology: each column is a network that spends at scale in elections that affect Chicago. The crypto/AI column is kept even though it is empty, because its absence is itself the finding.</p>\n    <p class=\"intro\" style=\"margin-top:0\">For each candidate: money received from donors who are also major funders (<span id=\"mat-th\"></span> or more, career) of each network. Read across a row to see which networks a candidate\u2019s big-donor base is embedded in. A dash means none of the 50 largest donors to the twelve is a major funder of that network and a donor to that candidate.</p>\n    <div class=\"scroll sticky\"><table id=\"net-matrix\" class=\"net\"></table></div>\n    <p class=\"note\" id=\"mat-note\"></p>\n    <!-- ORG-MATRIX BLOCK: optional. Remove this div (or set SHOW_ORG_MATRIX=false in the script) to drop it. -->\n    <div id=\"org-block\">\n      <h3 style=\"margin-top:34px\">Who the candidates\u2019 biggest organizational donors also fund</h3>\n      <p class=\"intro\" style=\"margin-top:0\">The same test applied to unions, PACs and businesses: money each candidate received in the selected window from organizations that are also major funders (<span id=\"omat-th\"></span> or more, career, in Illinois) of each network. Transfers to an organization\u2019s own affiliated committees are excluded. Click a cell for the organizations.</p>\n      <div class=\"scroll sticky\"><table id=\"org-matrix\" class=\"net\"></table></div>\n      <p class=\"note\" id=\"omat-note\"></p>\n      <details id=\"org-defs\"></details>\n    </div>\n    <!-- /ORG-MATRIX BLOCK -->\n    <h3 style=\"margin-top:28px\">The 50 largest donors, one by one</h3>\n    <div class=\"legend\" id=\"legend-net\"></div>\n    <div class=\"scroll sticky\"><table id=\"net-table\" class=\"net\"></table></div>\n    <p class=\"note\" id=\"net-note\"></p>\n    <details id=\"net-defs\"></details>\n  </div>\n</section>\n\n<section id=\"overlap\">\n  <div class=\"wrap\">\n    <div class=\"panel-head\"><h2>Shared donors with outside-money committees</h2><span class=\"btns\"><button class=\"dl\" data-dl=\"ovl-wrap\" data-name=\"ipg-mayoral-donor-overlap\">Download PNG</button><button class=\"dl\" data-csv=\"ovl-table\" data-name=\"ipg-mayoral-donor-overlap\">Download CSV</button></span></div>\n    <p class=\"intro\">How much of each candidate\u2019s direct money comes from people and organizations that also fund the major independent-expenditure and PAC vehicles in Chicago politics \u2014 and, when available, other candidates\u2019 own committees. Donors are matched on name plus ZIP or city. This view follows the window selected above for the candidate side; the comparison committee\u2019s donors are counted across its whole life.</p>\n    <div id=\"ovl-wrap\">\n      <div class=\"cand-select ovl-ctl\"><label for=\"ovl-set\">Compare with</label><select id=\"ovl-set\"></select><span class=\"hint\" id=\"ovl-set-note\"></span><span style=\"flex:1\"></span><label><input type=\"checkbox\" id=\"ovl-nolabor\"> Exclude labor</label><label><input type=\"checkbox\" id=\"ovl-noloans\"> Exclude loans</label></div>\n      <p class=\"callout\" id=\"ovl-desc\"></p>\n      <div class=\"legend\" id=\"legend-ovl\"></div>\n      <div id=\"ovl-bars\"></div>\n      <div class=\"scroll\" style=\"margin-top:18px\"><table id=\"ovl-table\"></table></div>\n    </div>\n    <p class=\"note\">Each bar is what the shared donors gave the candidate in the window, colored by what kind of donor they are, against the faint bar of the candidate\u2019s total (clipped where it runs off the scale). Click a row for the full list of shared donors.</p>\n  </div>\n</section>\n\n<section id=\"industries\">\n  <div class=\"wrap\">\n    <div class=\"panel-head\"><h2>Which industries give</h2><span class=\"btns\"><button class=\"dl\" data-dl=\"ind-panel\" data-name=\"ipg-mayoral-industries\">Download PNG</button><button class=\"dl\" data-csv=\"ind-panel\" data-name=\"ipg-mayoral-industries\">Download CSV</button></span></div>\n    <p class=\"intro\">Contributions grouped by the donor's industry \u2014 from the organization's name for businesses and PACs, and from reported occupation and employer for individuals. Roughly half of individual gifts before 2011 carry no occupation or employer, so \"Not reported\" is real and shown.</p>\n    <div class=\"cand-select\"><label for=\"ind-cand\">Candidate</label><select id=\"ind-cand\"></select><label><input type=\"checkbox\" id=\"ind-hide-labor\"> Hide labor</label><span class=\"hint\">Top 12 by dollars \u00b7 click a bar to see the donors</span></div>\n    <div id=\"ind-panel\" class=\"panel\"></div>\n    <div class=\"panel-head\"><h3>All twelve at once</h3><span class=\"cap\" style=\"flex:1\">Dollars, with share of each candidate\u2019s total beneath \u00b7 click an industry name or a cell for the donors</span><span class=\"btns\"><button class=\"dl\" data-dl=\"ind-matrix\" data-name=\"ipg-mayoral-industry-matrix\">Download PNG</button><button class=\"dl\" data-csv=\"ind-matrix\" data-name=\"ipg-mayoral-industry-matrix\">Download CSV</button></span></div>\n    <div class=\"scroll\"><table id=\"ind-matrix\"></table></div>\n  </div>\n</section>\n\n<section id=\"size\">\n  <div class=\"wrap\">\n    <div class=\"panel-head\"><h2>How big the checks are</h2><span class=\"btns\"><button class=\"dl\" data-dl=\"size-svg\" data-name=\"ipg-mayoral-gift-size\">Download PNG</button><button class=\"dl\" data-csv=\"size-svg\" data-name=\"ipg-mayoral-gift-size\">Download CSV</button></span></div>\n    <p class=\"intro\">Share of dollars by the size of each itemized gift. Illinois committees itemize any contributor whose gifts exceed $150 in a reporting period; smaller gifts appear only in the unitemized lump sum, which is added here as its own band from the quarterly totals.</p>\n    <div class=\"legend\" id=\"legend-size\"></div>\n    <div id=\"size-svg\"></div>\n  </div>\n</section>\n\n<section id=\"donors\">\n  <div class=\"wrap\">\n    <div class=\"panel-head\"><h2>Largest sources</h2><span class=\"btns\"><button class=\"dl\" data-dl=\"top-panel\" data-name=\"ipg-mayoral-top-donors\">Download PNG</button><button class=\"dl\" data-csv=\"top-panel\" data-name=\"ipg-mayoral-top-donors\">Download CSV</button></span></div>\n    <p class=\"intro\">The largest contributors to each candidate in the selected window, with gifts combined across name variants where the filings make the match clear. Click a source to see everything it has given across the twelve candidates, with a link to its full Illinois giving on Illinois Sunshine.</p>\n    <div class=\"cand-select\"><label for=\"top-cand\">Candidate</label><select id=\"top-cand\"></select><label for=\"top-n\">Show</label><select id=\"top-n\"><option value=\"15\">Top 15</option><option value=\"25\">Top 25</option><option value=\"50\">Top 50</option></select><label><input type=\"checkbox\" id=\"top-ind-only\"> Individuals only</label></div>\n    <div id=\"top-panel\" class=\"panel scroll\"></div>\n  </div>\n</section>\n\n<section id=\"shared\">\n  <div class=\"wrap\">\n    <div class=\"panel-head\"><h2>Donors who back several candidates</h2><span class=\"btns\"><button class=\"dl\" data-dl=\"shared-table\" data-name=\"ipg-mayoral-shared-donors\">Download PNG</button><button class=\"dl\" data-csv=\"shared-table\" data-name=\"ipg-mayoral-shared-donors\">Download CSV</button></span></div>\n    <p class=\"intro\">Sources that have given to three or more of the twelve over their careers. Filled cells show dollars to each candidate.</p>\n    <div class=\"scroll\"><table id=\"shared-table\"></table></div>\n    <p class=\"note\" id=\"shared-note\"></p>\n  </div>\n</section>\n\n<section id=\"method\">\n  <div class=\"wrap\">\n    <h2>How this was built</h2>\n    <dl class=\"method\" id=\"method-list\"></dl>\n  </div>\n</section>\n\n<footer><div class=\"wrap\">Institute for the Public Good \u00b7 Source: Illinois State Board of Elections bulk filings (receipts, committees, D-2 totals), pulled <span id=\"vintage2\"></span>. Classification of donors by type, industry, and geography is IPG's, applied by rule and reviewed by hand for the largest sources; corrections welcome.</div></footer>\n<button class=\"fb-open\" id=\"fb-open\" type=\"button\">Feedback</button>\n<div class=\"modal\" id=\"fb\" hidden role=\"dialog\" aria-modal=\"true\" aria-labelledby=\"fb-title\">\n  <div class=\"modal-back\" data-close></div>\n  <div class=\"modal-box\" style=\"width:min(560px,100%)\">\n    <div class=\"modal-head\"><div><h3 id=\"fb-title\">Questions, corrections, feedback</h3><div class=\"cap\">Goes to the Institute for the Public Good communications team.</div></div><button class=\"dl\" data-close>Close</button></div>\n    <div class=\"modal-body\">\n      <form id=\"fb-form\" class=\"fbf\">\n        <label>What is this about?<select name=\"kind\" required><option>Question</option><option>Error or correction</option><option>Other</option></select></label>\n        <label>Full name<input name=\"name\" type=\"text\" required autocomplete=\"name\"></label>\n        <label>Email<input name=\"email\" type=\"email\" required autocomplete=\"email\"></label>\n        <label>Phone <span class=\"hint\">(optional)</span><input name=\"phone\" type=\"tel\" autocomplete=\"tel\"></label>\n        <label>Message<textarea name=\"message\" rows=\"5\" required placeholder=\"If you\u2019re reporting an error, tell us the section and the donor or number in question.\"></textarea></label>\n        <label class=\"chk\"><input type=\"checkbox\" name=\"list\"> Add me to IPG\u2019s email list</label>\n        <div class=\"fbrow\"><button class=\"dl primary\" type=\"submit\">Send</button><a class=\"dl\" id=\"fb-news\" href=\"#\" target=\"_blank\" rel=\"noopener\">Contact / join the list</a><a class=\"dl\" id=\"fb-donate\" href=\"#\" target=\"_blank\" rel=\"noopener\">Donate to IPG</a></div>\n      </form>\n      <p id=\"fb-done\" hidden>Thanks \u2014 your message is on its way to comms@i4pg.org. If your mail app opened, press send there to finish.</p>\n    </div>\n  </div>\n</div>\n<div class=\"toast\" id=\"toast\"></div>\n<div class=\"modal\" id=\"modal\" hidden role=\"dialog\" aria-modal=\"true\" aria-labelledby=\"modal-title\">\n  <div class=\"modal-back\" data-close></div>\n  <div class=\"modal-box\">\n    <div class=\"modal-head\"><div><h3 id=\"modal-title\"></h3><div class=\"cap\" id=\"modal-cap\"></div></div><button class=\"dl\" data-close>Close</button></div>\n    <div class=\"modal-body\" id=\"modal-body\"></div>\n  </div>\n</div>\n";
  var FONTS = 'https://fonts.googleapis.com/css2?family=Newsreader:ital,opsz,wght@0,6..72,400;0,6..72,500;0,6..72,600;1,6..72,400;1,6..72,500&family=Poppins:wght@400;500;600&display=swap';
  var H2C = 'https://cdnjs.cloudflare.com/ajax/libs/html2canvas/1.4.1/html2canvas.min.js';
  function el(tag, attrs){ var e=document.createElement(tag); for(var k in attrs) e.setAttribute(k, attrs[k]); return e; }
  var root = document.getElementById('mm-root') || (function(){ var d=el('div',{id:'mm-root'}); document.body.appendChild(d); return d; })();
  if(!document.querySelector('link[href="'+FONTS+'"]')) document.head.appendChild(el('link',{rel:'stylesheet',href:FONTS}));
  var style=el('style',{id:'mm-style'}); style.textContent=CSS; document.head.appendChild(style);
  root.innerHTML = HTML;
  ['fb-open','fb','modal','toast'].forEach(function(id){ var n=document.getElementById(id); if(n) document.body.appendChild(n); });
  var s=el('script',{src:H2C}); document.head.appendChild(s);
  (function app(){
// Data loads as three <script> files (window globals). Defaults to the GitHub Pages host; override by setting window.MM_DATA_BASE (a folder URL ending in /) before this script.
const MM_BASE = (typeof window!=='undefined' && window.MM_DATA_BASE) ? window.MM_DATA_BASE : 'https://publicgoodpolicy.github.io/mayoral-money/';
const DATA_SCRIPTS = ['mayoral-money-data.js','mayoral-money-networks.js','mayoral-money-overlap.js'].map(f=>MM_BASE+f);
let DATA, ROWS, CANDS, CAT_LABEL, NET, OVL; const F = {};
function bindData(data, net, ovl){
  DATA=data; NET=net; OVL=ovl; DATA.fields.forEach((f,i)=>F[f]=i); F.dcat=DATA.fields.length; ROWS=DATA.rows; CANDS=DATA.candidates;
  Object.assign(CAT_LABEL_BASE, DATA.cat_labels); CAT_LABEL=Object.assign({}, CAT_LABEL_BASE, {large:'Large donors (over $2,500)', small:'Small donors ($2,500 and under, incl. unitemized)', biz:'Businesses, trade groups & their PACs', cand:"Other politicians' committees"});
}
const CAT_LABEL_BASE = {};
const CAND_ORDER = ['giannoulias','johnson','mendoza','wilson','quigley','cardenas','kelly','holberg','pappas','brewer','nee','carterwalters'];
const CATS = ['large','small','self','labor','biz','cand','party','issue','loan'];
const LARGE_MIN = 2500; // large donor = individual whose gifts in the window total more than this

const css = v => getComputedStyle(document.documentElement).getPropertyValue(v).trim();
const CAT_COLOR = c => css('--c-'+(c==='large'?'ind':c));
const fmt$ = v => { const a=Math.abs(v); if(a>=1e6) return '$'+(v/1e6).toFixed(a>=1e7?0:1)+'M'; if(a>=1e3) return '$'+Math.round(v/1e3)+'K'; return '$'+Math.round(v); };
const fmtFull = v => '$'+Math.round(v).toLocaleString('en-US');
const pct = (a,b) => b>0 ? Math.round(100*a/b)+'%' : '—';
const pct1 = (a,b) => b>0 ? (100*a/b).toFixed(1)+'%' : '—';
const LIGHT=new Set(['small','issue','party']);
function inkOn(fill){ const m=/^#?([0-9a-f]{2})([0-9a-f]{2})([0-9a-f]{2})$/i.exec(fill.trim()); if(!m) return '#fff'; const L=(0.299*parseInt(m[1],16)+0.587*parseInt(m[2],16)+0.114*parseInt(m[3],16)); return L>150?'#342828':'#fff'; }
const esc = s => String(s).replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;').replace(/"/g,'&quot;');

const state = { win:'2023-04-05', inkind:true, loans:true, ovlNoLabor:false, ovlNoLoans:false };

function filtered(){
  const w = state.win==='all' ? null : state.win;
  const rows = ROWS.filter(r => {
    const cat=r[F.cat];
    if(cat==='intra'||cat==='other') return false;
    if(w && r[F.date] < w) return false;
    if(!state.inkind && r[F.part]==='5A') return false;
    if(!state.loans && r[F.part]==='3A') return false;
    return true;
  });
  // large vs small individual donors, by each person's total within the window (per candidate)
  const tot=new Map(); for(const r of rows) if(r[F.cat]==='ind'){ const k=r[F.cand]+'|'+r[F.donor_id]; tot.set(k,(tot.get(k)||0)+r[F.amt]); }
  for(const r of rows){ const c=r[F.cat]; r[F.dcat] = c==='ind' ? (tot.get(r[F.cand]+'|'+r[F.donor_id])>LARGE_MIN ? 'large':'small') : c; }
  return rows;
}
function uniPeriods(cand){ // [beg,end,indivNI,xferNI,inkindNI,doc] for every current D-2 of the candidate's committees
  const out=[]; for(const c of Object.values(DATA.committees)) if(c.cand===cand) for(const p of (c.periods||[])) out.push(p); return out; }
function uniAmt(p){ return p[2]+p[3]+(state.inkind?p[4]:0); }
function unitemized(cand){ const w=state.win==='all'?null:state.win; let s=0; for(const p of uniPeriods(cand)) if(!w||p[1]>=w) s+=uniAmt(p); return s; }
function unitemizedByYear(cand){ const w=state.win==='all'?null:state.win; const m=new Map(); for(const p of uniPeriods(cand)) if(!w||p[1]>=w){ const y=+p[1].slice(0,4); m.set(y,(m.get(y)||0)+uniAmt(p)); } return m; }
function sumBy(rows, keyFn){ const m=new Map(); for(const r of rows){ const k=keyFn(r); m.set(k,(m.get(k)||0)+r[F.amt]); } return m; }
function byCand(rows){ const m={}; for(const c of CAND_ORDER) m[c]=[]; for(const r of rows) m[r[F.cand]].push(r); return m; }

// ---------- SVG helpers ----------
const NS='http://www.w3.org/2000/svg';
function el(tag, attrs, parent){ const e=document.createElementNS(NS,tag); for(const k in attrs) e.setAttribute(k,attrs[k]); if(parent) parent.appendChild(e); return e; }
function text(parent, x, y, str, attrs){ const t=el('text',Object.assign({x,y,fill:css('--fg')},attrs||{}),parent); t.textContent=str; return t; }

function legend(elId, items){
  const box=document.getElementById(elId); box.innerHTML='';
  for(const [k,label,color] of items){ const s=document.createElement('span'); s.innerHTML=`<i style="background:${color}"></i>${esc(label)}`; box.appendChild(s); }
}

// ---------- hero stacked bars ----------
function renderHero(rows){
  const bc=byCand(rows);
  const totals = CAND_ORDER.map(c=>{ const m=sumBy(bc[c], r=>r[F.dcat]); const uni=unitemized(c); if(uni) m.set('small',(m.get('small')||0)+uni); let t=0; m.forEach(v=>t+=v); return {c,m,t}; }).sort((a,b)=>b.t-a.t);
  const max=Math.max(...totals.map(t=>t.t),1);
  const W=1000, L=210, R=110, rowH=54, top=8;
  const H=top+rowH*totals.length+4;
  const box=document.getElementById('hero-bars'); box.innerHTML='';
  const svg=el('svg',{viewBox:`0 0 ${W} ${H}`,width:'100%',id:'hero-svg',role:'img','aria-label':'Direct contributions by candidate and source'},box);
  totals.forEach((t,i)=>{
    const y=top+i*rowH;
    text(svg, L-14, y+26, CANDS[t.c], {'text-anchor':'end','font-size':20,style:'font-family:var(--serif)'});
    let x=L; const bw=(W-L-R);
    for(const cat of CATS){ const v=t.m.get(cat)||0; if(!v) continue; const w=v/max*bw; const g=el('g',{},svg);
      const rc=el('rect',{x,y:y+8,width:0.5,height:30,fill:CAT_COLOR(cat)},g); requestAnimationFrame(()=>requestAnimationFrame(()=>rc.setAttribute('width',Math.max(w,0.5))));
      const tt=el('title',{},g); tt.textContent=`${CAT_LABEL[cat]}: ${fmtFull(v)} (${pct(v,t.t)})`;
      if(w>44) text(svg, x+6, y+27, pct(v,t.t), {'font-size':11.5,fill:inkOn(CAT_COLOR(cat))});
      x+=w; }
    text(svg, x+8, y+27, fmt$(t.t), {'font-size':14,'font-weight':600});
  });
  CSV['hero-bars']=[['Candidate',...CATS.map(c=>CAT_LABEL[c]),'Total']].concat(totals.map(t=>[CANDS[t.c],...CATS.map(c=>Math.round(t.m.get(c)||0)),Math.round(t.t)]));
  const grand=totals.reduce((s,t)=>s+t.t,0);
  document.getElementById('hero-note').textContent = `${fmt$(grand)} across the twelve in this window. Unitemized small-dollar receipts are added from each committee\u2019s quarterly totals, assigned to the reporting period they were filed for. Alexi Giannoulias’s 2025–26 receipts were raised while he was also seeking re-election as Secretary of State in November 2026, and cannot be separated by purpose.`;
}

// ---------- scorecard ----------
function median(arr){ if(!arr.length) return 0; const s=[...arr].sort((a,b)=>a-b); const m=s.length>>1; return s.length%2? s[m] : (s[m-1]+s[m])/2; }
function renderScore(rows){
  const bc=byCand(rows);
  const cols=[['Total','num'],['Itemized donors','num'],['Large donors','num'],['Small-dollar','num'],['Unions','num'],['Business','num'],['Political cmtes','num'],['Self & family','num'],['Loans','num'],['Chicago','num'],['Out of state','num'],['Top-10 share','num'],['Median gift','num'],['Mean gift','num']];
  let html='<thead><tr><th>Candidate</th>'+cols.map(c=>`<th class="${c[1]}">${c[0]}</th>`).join('')+'</tr></thead><tbody>';
  const recs = CAND_ORDER.map(c=>{
    const rs=bc[c]; const m=sumBy(rs,r=>r[F.dcat]); const uni=unitemized(c); let t=uni; m.forEach(v=>t+=v);
    const donors=new Set(rs.map(r=>r[F.donor_id])).size;
    const smallInd=m.get('small')||0;
    const geo=sumBy(rs,r=>r[F.geo]); let geoKnown=0; geo.forEach((v,k)=>{ if(k!=='Unknown'&&k!=='n/a') geoKnown+=v; });
    const dm=sumBy(rs,r=>r[F.donor_id]); const top10=[...dm.values()].sort((a,b)=>b-a).slice(0,10).reduce((s,v)=>s+v,0);
    const gifts=rs.filter(r=>r[F.part]!=='3A').map(r=>r[F.amt]); const med=median(gifts); const mean=gifts.length?gifts.reduce((a,b)=>a+b,0)/gifts.length:0;
    return {c,t,donors,m,uni,smallInd,geo,geoKnown,top10,med,mean};
  });
  const maxT=Math.max(...recs.map(r=>r.t));
  for(const r of recs){
    const g=k=>r.m.get(k)||0;
    html+=`<tr><td>${esc(CANDS[r.c])}</td>`+
      `<td class="num"><b>${fmt$(r.t)}</b></td>`+
      `<td class="num">${r.donors.toLocaleString()}</td>`+
      `<td class="num">${pct(g('large'),r.t)}</td>`+
      `<td class="num">${pct(r.uni+r.smallInd,r.t)}</td>`+
      `<td class="num">${pct(g('labor'),r.t)}</td>`+
      `<td class="num">${pct(g('biz'),r.t)}</td>`+
      `<td class="num">${pct(g('cand')+g('party')+g('issue'),r.t)}</td>`+
      `<td class="num">${pct(g('self'),r.t)}</td>`+
      `<td class="num">${pct(g('loan'),r.t)}</td>`+
      `<td class="num">${pct(r.geo.get('Chicago')||0,r.geoKnown)}</td>`+
      `<td class="num">${pct(r.geo.get('Out of state')||0,r.geoKnown)}</td>`+
      `<td class="num">${pct(r.top10,r.t)}</td>`+
      `<td class="num">${r.med?fmtFull(r.med):'—'}</td>`+
      `<td class="num">${r.mean?fmtFull(r.mean):'—'}</td></tr>`;
  }
  document.getElementById('score-table').innerHTML=html+'</tbody>';
}

// ---------- war chests ----------
function renderCash(){
  const C=DATA.cash||{}; const rows=CAND_ORDER.filter(c=>C[c]).sort((x,y)=>C[y].cash-C[x].cash);
  const asof=[...new Set(rows.map(c=>C[c].asof).filter(Boolean))].sort().pop();
  let html=`<thead><tr><th>Candidate</th><th class="num">Cash on hand</th><th class="num">Spent since Apr 2023</th><th class="num">Spent, career</th><th class="num">Debts owed</th><th>Report</th></tr></thead><tbody>`;
  for(const c of rows){ const x=C[c]; html+=`<tr><td>${esc(CANDS[c])}</td><td class="num"><b>${fmtFull(x.cash)}</b></td><td class="num">${fmtFull(x.spent_cycle)}</td><td class="num">${fmtFull(x.spent_career)}</td><td class="num">${x.debts?fmtFull(x.debts):'\u2014'}</td><td class="hint">${x.asof?`quarter ending ${x.asof}`:''}</td></tr>`; }
  document.getElementById('cash-table').innerHTML=html+'</tbody>';
  CSV['cash-table']=[['Candidate','Cash on hand','Spent since Apr 2023','Spent career','Debts owed','As of']].concat(rows.map(c=>[CANDS[c],C[c].cash,C[c].spent_cycle,C[c].spent_career,C[c].debts,C[c].asof]));
}

// ---------- who has the big money: per-source races ----------
const RACE=[['large','Large donors (over $2,500)'],['biz','Businesses, trade groups & their PACs'],['labor','Unions & labor PACs'],['small','Small donors ($2,500 and under, incl. unitemized)'],['self','Candidate, family & loans'],['cand','Other politicians\u2019 committees']];
function renderRace(rows){
  const bc=byCand(rows); const wrap=document.getElementById('race-wrap'); wrap.innerHTML='';
  const per={}; for(const c of CAND_ORDER){ const m=sumBy(bc[c],r=>r[F.dcat]); const uni=unitemized(c); if(uni) m.set('small',(m.get('small')||0)+uni); const loan=bc[c].filter(r=>r[F.cat]==='loan').reduce((s,r)=>s+r[F.amt],0); m.set('self',(m.get('self')||0)+loan); per[c]=m; }
  const csv=[['Source',...CAND_ORDER.map(c=>CANDS[c])]];
  for(const [k,label] of RACE){
    const vals=CAND_ORDER.map(c=>[c,per[c].get(k)||0]).sort((x,y)=>y[1]-x[1]); const max=Math.max(vals[0][1],1); const tot=vals.reduce((s,v)=>s+v[1],0);
    const box=document.createElement('div'); box.className='race';
    const lead=vals[0]; const second=vals[1];
    box.innerHTML=`<h3>${esc(label)}</h3><div class="cap">${fmt$(tot)} across the twelve${lead[1]&&second[1]?` \u00b7 ${esc(CANDS[lead[0]].split(' ').pop())} has ${(lead[1]/second[1]).toFixed(1)}\u00d7 the next candidate`:''}</div>`;
    const W=520,rowH=24,L=130,H=vals.length*rowH+4; const svg=el('svg',{viewBox:`0 0 ${W} ${H}`,width:'100%',role:'img','aria-label':label},box);
    vals.forEach(([c,v],i)=>{ const y=i*rowH; text(svg,L-8,y+16,CANDS[c],{'text-anchor':'end','font-size':12.5,style:'font-family:var(--serif)'}); const w=v/max*(W-L-70); el('rect',{x:L,y:y+4,width:Math.max(w,1),height:16,fill:CAT_COLOR(k)},svg); text(svg,L+w+6,y+16,fmt$(v),{'font-size':12,'font-weight':600}); });
    wrap.appendChild(box); csv.push([label,...CAND_ORDER.map(c=>Math.round(per[c].get(k)||0))]);
  }
  CSV['race-wrap']=csv;
}

// ---------- industries ----------
function renderIndustries(rows){
  const bc=byCand(rows); const sel=document.getElementById('ind-cand').value; const hideLabor=document.getElementById('ind-hide-labor').checked;
  const rs=bc[sel].filter(r=>!(hideLabor&&r[F.industry]==='Labor'));
  const m=sumBy(rs,r=>r[F.industry]); const tot=[...m.values()].reduce((a,b)=>a+b,0);
  const items=[...m.entries()].sort((a,b)=>b[1]-a[1]).slice(0,12);
  CSV['ind-panel']=[['Industry','Dollars','Share of '+CANDS[sel]]].concat([...m.entries()].sort((a,b)=>b[1]-a[1]).map(([k,v])=>[k,Math.round(v),(100*v/tot).toFixed(1)+'%']));
  const panel=document.getElementById('ind-panel'); panel.innerHTML='';
  const W=900,rowH=26,L=380,H=items.length*rowH+8; const max=items[0]?items[0][1]:1;
  const svg=el('svg',{viewBox:`0 0 ${W} ${H}`,width:'100%',role:'img','aria-label':'Industries for '+CANDS[sel]},panel);
  const shade=k=>({'Labor':css('--c-labor'),'Political committees':css('--c-cand'),'Candidate & family':css('--c-self')})[k]||css('--sage');
  items.forEach(([k,v],i)=>{ const y=i*rowH; const g=el('g',{class:'clk',tabindex:0,role:'button','aria-label':`${k}: show donors`},svg); g.addEventListener('click',()=>openIndustry(k,sel)); g.addEventListener('keydown',e=>{ if(e.key==='Enter'||e.key===' '){ e.preventDefault(); openIndustry(k,sel);} }); el('rect',{x:0,y,width:W,height:rowH,fill:'transparent'},g); text(g,L-10,y+17,k,{'text-anchor':'end','font-size':12.5}); const w=v/max*(W-L-90); el('rect',{x:L,y:y+5,width:w,height:16,fill:shade(k)},g); text(g,L+w+6,y+17,`${fmt$(v)} · ${pct(v,tot)}`,{'font-size':12}); });
  const h=document.createElement('p'); h.className='note'; h.textContent=`${CANDS[sel]}: ${fmtFull(tot)} across ${m.size} industry groups${hideLabor?' (labor hidden)':''}. Gifts from people with no reported occupation or employer are shown as "Not reported".`; panel.appendChild(h);
  // matrix
  const all=sumBy(rows,r=>r[F.industry]); const order=[...all.entries()].sort((a,b)=>b[1]-a[1]).map(e=>e[0]);
  const per={}; for(const c of CAND_ORDER){ per[c]=sumBy(bc[c],r=>r[F.industry]); per[c].__t=bc[c].reduce((s,r)=>s+r[F.amt],0); }
  let html='<thead><tr><th>Industry</th>'+CAND_ORDER.map(c=>`<th class="num">${esc(CANDS[c].split(' ').pop())}</th>`).join('')+'<th class="num">All twelve</th></tr></thead><tbody>';
  for(const k of order){ html+=`<tr><td class="rowk" data-ind="${esc(k)}">${esc(k)}</td>`+CAND_ORDER.map(c=>{ const v=per[c].get(k)||0; const t=per[c].__t; const p=t?100*v/t:0; const bg=p>0?`background:color-mix(in srgb, var(--sage) ${Math.min(90,p*2)}%, transparent)`:''; return `<td class="num ${v?'clk':''}" data-ind="${esc(k)}" data-cand="${c}" style="${bg}" title="${fmtFull(v)} · ${pct1(v,t)}">${v?fmt$(v)+`<small>${p>=0.5?p.toFixed(0)+'%':'<1%'}</small>`:''}</td>`; }).join('')+`<td class="num">${fmt$(all.get(k))}</td></tr>`; }
  CSV['ind-matrix']=[['Industry',...CAND_ORDER.map(c=>CANDS[c]),'All twelve']].concat(order.map(k=>[k,...CAND_ORDER.map(c=>Math.round(per[c].get(k)||0)),Math.round(all.get(k))]));
  const mx=document.getElementById('ind-matrix'); mx.innerHTML=html+'</tbody>';
  mx.querySelectorAll('td.rowk').forEach(td=>td.addEventListener('click',()=>openIndustry(td.dataset.ind,null)));
  mx.querySelectorAll('td.clk').forEach(td=>td.addEventListener('click',()=>openIndustry(td.dataset.ind,td.dataset.cand)));
}

// ---------- industry detail modal ----------
const SUN='https://illinoissunshine.org';
const slug=n=>n.toLowerCase().replace(/[^a-z0-9]+/g,'-').replace(/^-|-$/g,'');
function sunCommittee(cid){ const c=DATA.committees[cid]; return `${SUN}/committees/${slug(c.name)}-${cid}/`; }
function sunReceipt(id){ return `${SUN}/contributions/${id}/`; }
function sunSearch(name){ return `${SUN}/search/?term=${encodeURIComponent(name)}&table_name=receipts`; }
function openIndustry(ind, cand){
  document.getElementById('modal-body').classList.remove('mx');
  const rows=filtered().filter(r=>r[F.industry]===ind && (!cand||r[F.cand]===cand));
  const m=new Map(); for(const r of rows){ const k=r[F.cand]+'|'+r[F.donor_id]; if(!m.has(k)) m.set(k,{name:r[F.donor],cand:r[F.cand],cat:r[F.cat],amt:0,occ:r[F.occ],emp:r[F.emp],city:r[F.city],st:r[F.state],gifts:[]}); const d=m.get(k); d.amt+=r[F.amt]; d.gifts.push(r); if(r[F.occ]&&!d.occ) d.occ=r[F.occ]; if(r[F.emp]&&!d.emp) d.emp=r[F.emp]; }
  const items=[...m.values()].sort((a,b)=>b.amt-a.amt); const tot=items.reduce((s,d)=>s+d.amt,0); const cap=300;
  document.getElementById('modal-title').textContent = ind + (cand?` — ${CANDS[cand]}`:' — all twelve');
  document.getElementById('modal-cap').textContent = `${fmtFull(tot)} from ${items.length.toLocaleString()} source${items.length===1?'':'s'} · ${rows.length.toLocaleString()} gifts · ${windowLabel()}${items.length>cap?` · showing the ${cap} largest`:''}. Click a row for each gift, linked to Illinois Sunshine.`;
  const body=document.getElementById('modal-body');
  let html=`<div class="mhead"><span>Source</span><span>${cand?'Type':'Candidate'}</span><span style="text-align:right">Total</span><span style="text-align:right">Gifts</span></div>`;
  for(const d of items.slice(0,cap)){
    const who=(d.cat==='ind'||d.cat==='self')? [d.occ,d.emp].filter(Boolean).join(', ') : CAT_LABEL[d.cat]||'';
    const loc=[d.city,d.st].filter(Boolean).join(', ');
    html+=`<details><summary><span><b>${esc(d.name)}</b><span class="who">${esc([who,loc].filter(Boolean).join(' · '))}</span></span><span class="cand">${cand?esc(CAT_LABEL[d.cat]||d.cat):esc(CANDS[d.cand])}</span><span style="text-align:right">${fmtFull(d.amt)}</span><span style="text-align:right">${d.gifts.length}</span></summary>`;
    html+=`<div class="gifts"><table><tbody>`+d.gifts.sort((a,b)=>a[F.date]<b[F.date]?1:-1).map(g=>`<tr><td>${g[F.date]}</td><td class="num">${fmtFull(g[F.amt])}</td><td>${g[F.part]==='5A'?'in-kind':g[F.part]==='3A'?'loan':g[F.part]==='2A'?'transfer':'contribution'}</td><td><a href="${sunCommittee(g[F.comm])}" target="_blank" rel="noopener">${esc(DATA.committees[g[F.comm]].name)}</a></td><td><a href="${sunReceipt(g[F.id])}" target="_blank" rel="noopener">receipt ${g[F.id]}</a></td></tr>`).join('')+`</tbody></table><a href="${sunSearch(d.name)}" target="_blank" rel="noopener">Search this name on Illinois Sunshine</a></div></details>`;
  }
  body.innerHTML=html; body.scrollTop=0;
  const modal=document.getElementById('modal'); modal.hidden=false; document.body.style.overflow='hidden'; modal.querySelector('button[data-close]').focus();
}
function openDonor(donorId){
  document.getElementById('modal-body').classList.remove('mx');
  // career-wide, across all twelve candidates; in-kind/loan toggles still apply, the window does not
  const rows=ROWS.filter(r=>r[F.donor_id]===donorId && r[F.cat]!=='intra' && r[F.cat]!=='other' && (state.inkind||r[F.part]!=='5A') && (state.loans||r[F.part]!=='3A'));
  if(!rows.length) return;
  const name=rows[0][F.donor]; const tot=rows.reduce((s,r)=>s+r[F.amt],0);
  const per=sumBy(rows,r=>r[F.cand]); const cands=CAND_ORDER.filter(c=>per.get(c));
  const inWin=rows.filter(r=>state.win==='all'||r[F.date]>=state.win).reduce((s,r)=>s+r[F.amt],0);
  const occ=rows.map(r=>r[F.occ]).find(Boolean)||'', emp=rows.map(r=>r[F.emp]).find(Boolean)||'';
  const who=(rows[0][F.cat]==='ind'||rows[0][F.cat]==='self')? [occ,emp].filter(Boolean).join(', ') : CAT_LABEL[rows[0][F.cat]]||'';
  document.getElementById('modal-title').textContent=name;
  document.getElementById('modal-cap').textContent=[who, rows[0][F.industry], [rows[0][F.city],rows[0][F.state]].filter(Boolean).join(', ')].filter(Boolean).join(' · ');
  let html=`<div class="dsum"><span><b>${fmtFull(tot)}</b> to ${cands.length} of the twelve, all years</span><span><b>${fmtFull(inWin)}</b> in this window (${esc(windowLabel())})</span><span><b>${rows.length}</b> gifts</span></div>`;
  html+=`<a class="dlink" href="${sunSearch(name)}" target="_blank" rel="noopener">See everything this source has given in Illinois, on Illinois Sunshine ↗</a>`;
  html+=`<div class="mhead"><span>Candidate</span><span>Years</span><span style="text-align:right">Total</span><span style="text-align:right">Gifts</span></div>`;
  for(const c of cands.sort((a,b)=>per.get(b)-per.get(a))){
    const g=rows.filter(r=>r[F.cand]===c).sort((a,b)=>a[F.date]<b[F.date]?1:-1); const y0=Math.min(...g.map(r=>r[F.year])), y1=Math.max(...g.map(r=>r[F.year]));
    html+=`<details${html.includes('<details')?'':' open'}><summary><span><b>${esc(CANDS[c])}</b></span><span class="cand">${y0===y1?y0:y0+'–'+y1}</span><span style="text-align:right">${fmtFull(per.get(c))}</span><span style="text-align:right">${g.length}</span></summary>`;
    html+=`<div class="gifts"><table><tbody>`+g.map(r=>`<tr><td>${r[F.date]}</td><td class="num">${fmtFull(r[F.amt])}</td><td>${r[F.part]==='5A'?'in-kind':r[F.part]==='3A'?'loan':r[F.part]==='2A'?'transfer':'contribution'}</td><td><a href="${sunCommittee(r[F.comm])}" target="_blank" rel="noopener">${esc(DATA.committees[r[F.comm]].name)}</a></td><td><a href="${sunReceipt(r[F.id])}" target="_blank" rel="noopener">receipt ${r[F.id]}</a></td></tr>`).join('')+`</tbody></table></div></details>`;
  }
  html+=`<p class="note">Only the twelve mayoral candidates\u2019 committees are in this dataset; giving to other Illinois committees is on the Sunshine page linked above.</p>`;
  const body=document.getElementById('modal-body'); body.innerHTML=html; body.scrollTop=0;
  const modal=document.getElementById('modal'); modal.hidden=false; document.body.style.overflow='hidden'; modal.querySelector('button[data-close]').focus();
}
function closeModal(){ const modal=document.getElementById('modal'); modal.hidden=true; document.body.style.overflow=''; }

function stacked100(elId, groups, keys, colorFn, label){
  const box=document.getElementById(elId); box.innerHTML='';
  const W=1000,L=210,R=90,rowH=40,H=rowH*groups.length+6;
  const svg=el('svg',{viewBox:`0 0 ${W} ${H}`,width:'100%',role:'img','aria-label':label},box);
  groups.forEach((g,i)=>{ const y=i*rowH; text(svg,L-14,y+22,g.name,{'text-anchor':'end','font-size':17,style:'font-family:var(--serif)'}); let x=L; const bw=W-L-R;
    for(const k of keys){ const v=g.m.get(k)||0; if(!v||!g.t) continue; const w=v/g.t*bw; const rc=el('rect',{x,y:y+8,width:w,height:22,fill:colorFn(k)},svg); const tt=el('title',{},rc); tt.textContent=`${k}: ${fmtFull(v)} (${pct1(v,g.t)})`; if(w>40) text(svg,x+5,y+23,pct(v,g.t),{'font-size':11.5,fill:inkOn(colorFn(k))}); x+=w; }
    text(svg,W-R+8,y+23,fmt$(g.t),{'font-size':12.5,fill:css('--muted')}); });
}
// ---------- size ----------
const SIZES=['Unitemized (under $150)','Under $500','$500–999','$1,000–4,999','$5,000–9,999','$10,000–49,999','$50,000+'];
const SIZE_COLOR={'Unitemized (under $150)':css('--mist'),'Under $500':css('--sage'),'$500–999':css('--teal'),'$1,000–4,999':css('--ochre'),'$5,000–9,999':css('--sand'),'$10,000–49,999':css('--coral'),'$50,000+':css('--plum')};
function sizeBucket(a){ return a<500?'Under $500':a<1000?'$500–999':a<5000?'$1,000–4,999':a<10000?'$5,000–9,999':a<50000?'$10,000–49,999':'$50,000+'; }
function renderSize(rows){
  const bc=byCand(rows);
  const groups=CAND_ORDER.map(c=>{ const m=sumBy(bc[c],r=>sizeBucket(r[F.amt])); const uni=unitemized(c); if(uni) m.set('Unitemized (under $150)',uni); let t=0; m.forEach(v=>t+=v); return {name:CANDS[c],m,t}; });
  CSV['size-svg']=[['Candidate',...SIZES,'Total']].concat(groups.map(g=>[g.name,...SIZES.map(k=>Math.round(g.m.get(k)||0)),Math.round(g.t)]));
  stacked100('size-svg', groups, SIZES, k=>SIZE_COLOR[k], 'Dollars by gift size');
  legend('legend-size', SIZES.map(k=>[k,k,SIZE_COLOR[k]]));
}

// ---------- top donors ----------
function renderTop(rows){
  const bc=byCand(rows); const sel=document.getElementById('top-cand').value; const n=+document.getElementById('top-n').value; const indOnly=document.getElementById('top-ind-only').checked;
  const rs=bc[sel].filter(r=>!indOnly||r[F.cat]==='ind'||r[F.cat]==='self');
  const tot=bc[sel].reduce((s,r)=>s+r[F.amt],0)+unitemized(sel);
  const m=new Map(); for(const r of rs){ const k=r[F.donor_id]; if(!m.has(k)) m.set(k,{id:k,name:r[F.donor],cat:r[F.cat],amt:0,n:0,y0:9999,y1:0,ind:r[F.industry],occ:r[F.occ],emp:r[F.emp],city:r[F.city],st:r[F.state],loan:0,inkind:0}); const d=m.get(k); d.amt+=r[F.amt]; d.n++; d.y0=Math.min(d.y0,r[F.year]); d.y1=Math.max(d.y1,r[F.year]); if(r[F.part]==='3A') d.loan+=r[F.amt]; if(r[F.part]==='5A') d.inkind+=r[F.amt]; if(r[F.occ]&&!d.occ) d.occ=r[F.occ]; if(r[F.emp]&&!d.emp) d.emp=r[F.emp]; }
  const items=[...m.values()].sort((a,b)=>b.amt-a.amt).slice(0,n);
  CSV['top-panel']=[['Rank','Source','Type','Industry','Occupation','Employer','City','State','Total','Share','Gifts','First year','Last year','Loans','In-kind']].concat(items.map((d,i)=>[i+1,d.name,CAT_LABEL[d.cat]||d.cat,d.ind,d.occ,d.emp,d.city,d.st,Math.round(d.amt),(100*d.amt/tot).toFixed(2)+'%',d.n,d.y0,d.y1,Math.round(d.loan),Math.round(d.inkind)]));
  let html=`<table><thead><tr><th>#</th><th>Source</th><th>Type</th><th>Industry / employer</th><th>Location</th><th class="num">Total</th><th class="num">Share</th><th class="num">Gifts</th><th>Years</th></tr></thead><tbody>`;
  items.forEach((d,i)=>{ const who=(d.cat==='ind'||d.cat==='self')? [d.occ,d.emp].filter(Boolean).join(', ') : d.ind; const flags=[d.loan?`loan ${fmt$(d.loan)}`:'',d.inkind?`in-kind ${fmt$(d.inkind)}`:''].filter(Boolean).join(' · ');
    html+=`<tr class="src" data-id="${esc(d.id)}" tabindex="0" role="button"><td class="num">${i+1}</td><td><b>${esc(d.name)}</b>${flags?`<div class="hint">${esc(flags)}</div>`:''}</td><td>${esc(CAT_LABEL[d.cat]||d.cat)}</td><td>${esc(who||d.ind||'')}</td><td>${esc([d.city,d.st].filter(Boolean).join(', '))}</td><td class="num">${fmtFull(d.amt)}</td><td class="num">${pct1(d.amt,tot)}</td><td class="num">${d.n}</td><td>${d.y0===d.y1?d.y0:d.y0+'–'+d.y1}</td></tr>`; });
  const tp=document.getElementById('top-panel'); tp.innerHTML=html+'</tbody></table>'+`<p class="note">Share is of ${CANDS[sel]}\u2019s total in this window (${fmtFull(tot)}). Loans are counted at face value and flagged; repayments are not netted.</p>`;
  tp.querySelectorAll('tr.src').forEach(tr=>{ tr.addEventListener('click',()=>openDonor(tr.dataset.id)); tr.addEventListener('keydown',e=>{ if(e.key==='Enter'||e.key===' '){ e.preventDefault(); openDonor(tr.dataset.id);} }); });
}

// ---------- shared donors ----------
function renderShared(rows){
  const m=new Map(); for(const r of rows){ const k=r[F.donor_id]; if(!m.has(k)) m.set(k,{name:r[F.donor],cat:r[F.cat],per:{},t:0}); const d=m.get(k); d.per[r[F.cand]]=(d.per[r[F.cand]]||0)+r[F.amt]; d.t+=r[F.amt]; }
  const items=[...m.values()].filter(d=>Object.keys(d.per).length>=3).sort((a,b)=>b.t-a.t);
  CSV['shared-table']=[['Source','Type',...CAND_ORDER.map(c=>CANDS[c]),'Total','Candidates funded']].concat(items.map(d=>[d.name,CAT_LABEL[d.cat]||'',...CAND_ORDER.map(c=>Math.round(d.per[c]||0)),Math.round(d.t),Object.keys(d.per).length]));
  let html='<thead><tr><th>Source</th><th>Type</th>'+CAND_ORDER.map(c=>`<th class="num">${esc(CANDS[c].split(' ').pop())}</th>`).join('')+'<th class="num">Total</th></tr></thead><tbody>';
  for(const d of items.slice(0,60)){ html+=`<tr><td>${esc(d.name)}</td><td>${esc(CAT_LABEL[d.cat]||'')}</td>`+CAND_ORDER.map(c=>{ const v=d.per[c]; return `<td class="num" style="${v?'background:color-mix(in srgb, var(--sage) 18%, transparent)':''}">${v?fmt$(v):''}</td>`; }).join('')+`<td class="num">${fmt$(d.t)}</td></tr>`; }
  document.getElementById('shared-table').innerHTML=html+'</tbody>';
  const two=[...m.values()].filter(d=>Object.keys(d.per).length>=2).length;
  document.getElementById('shared-note').textContent=`${items.length} sources gave to three or more of the twelve in this window (showing up to 60); ${two.toLocaleString()} gave to at least two. Individuals are matched on name plus ZIP prefix, so a person who moved may appear twice.`;
}

// ---------- overlap with outside-money committees ----------
function vennDistance(r1,r2,target){ // distance between centres giving intersection area = target
  if(target<=0) return r1+r2+6; const full=Math.PI*Math.min(r1,r2)**2; if(target>=full) return Math.abs(r1-r2);
  const area=d=>{ if(d>=r1+r2) return 0; if(d<=Math.abs(r1-r2)) return full; const a1=r1*r1*Math.acos((d*d+r1*r1-r2*r2)/(2*d*r1)), a2=r2*r2*Math.acos((d*d+r2*r2-r1*r1)/(2*d*r2)); const k=0.5*Math.sqrt((-d+r1+r2)*(d+r1-r2)*(d-r1+r2)*(d+r1+r2)); return a1+a2-k; };
  let lo=Math.abs(r1-r2), hi=r1+r2; for(let i=0;i<40;i++){ const mid=(lo+hi)/2; if(area(mid)>target) lo=mid; else hi=mid; } return (lo+hi)/2; }
const OVL_GROUPS=[['labor','Unions & labor PACs'],['biz','Businesses, trade groups & PACs'],['ind','Individuals'],['other','Political committees & other']];
const OVL_COLOR={labor:css('--c-labor'),biz:css('--c-biz'),ind:css('--c-ind'),other:css('--c-cand')};
function ovlGroup(cat){ return cat==='labor'?'labor':cat==='biz'||cat==='loan'?'biz':cat==='ind'||cat==='self'?'ind':'other'; }
function renderOverlap(){
  const sel=document.getElementById('ovl-set'); if(!sel.options.length){ sel.innerHTML=OVL.sets.map(s=>`<option value="${s.id}">${esc(s.label)}</option>`).join(''); const v=OVL.sets.find(s=>s.id==='vallas-2023'); if(v) sel.value='vallas-2023'; }
  const sid=sel.value; const set=OVL.sets.find(s=>s.id===sid); const wk=state.win; const short=set.label.split(' (')[0];
  document.getElementById('ovl-set-note').textContent=`${set.donors.toLocaleString()} donors \u00b7 ${fmt$(set.total)}`;
  document.getElementById('ovl-desc').textContent=set.desc||'';
  legend('legend-ovl', OVL_GROUPS.map(([k,l])=>[k,l,OVL_COLOR[k]]).concat([['t','Candidate\u2019s total in window',css('--pale')]]));
  const keep=d=>!(state.ovlNoLabor&&d.cat==='labor')&&!(state.ovlNoLoans&&d.cat==='loan');
  const fr=filtered(); const ctot={}; for(const c of CAND_ORDER) ctot[c]={n:new Set(),t:0}; for(const r of fr){ const c=r[F.cand]; if(state.ovlNoLabor&&r[F.cat]==='labor') continue; if(state.ovlNoLoans&&r[F.cat]==='loan') continue; ctot[c].n.add(r[F.donor_id]); ctot[c].t+=r[F.amt]; }
  const rows=CAND_ORDER.map(c=>{ const raw=OVL.cells[`${sid}|${c}|${wk}`]; const shared=raw.shared.filter(keep); return [c,{shared,n:shared.length,to_cand:shared.reduce((s,d)=>s+d.to_cand,0),to_set:shared.reduce((s,d)=>s+d.to_set,0),cand_n:ctot[c].n.size,cand_total:ctot[c].t}]; }).sort((x,y)=>y[1].to_cand-x[1].to_cand);
  const max=Math.max(...rows.map(([c,cell])=>cell.to_cand),1)*1.1;
  const box=document.getElementById('ovl-bars'); box.innerHTML='';
  for(const [c,cell] of rows){
    const comp={labor:0,biz:0,ind:0,other:0}; for(const d of cell.shared) comp[ovlGroup(d.cat)]+=d.to_cand;
    const top=cell.shared.slice(0,3).map(d=>`<b>${esc(d.name)}</b> ${fmt$(d.to_cand)}`).join(', ');
    const lead=OVL_GROUPS.map(([k,l])=>[k,l,comp[k]]).sort((x,y)=>y[2]-x[2])[0];
    const read=cell.to_cand? (lead[2]/cell.to_cand>=0.5? `${pct(lead[2],cell.to_cand)} from ${lead[1].toLowerCase()}`:'mixed sources') : 'no shared donors';
    const W=1000,H=30; let svg=`<svg viewBox="0 0 ${W} ${H}" width="100%" preserveAspectRatio="none" role="img" aria-label="${esc(CANDS[c])} shared-donor dollars"><rect x="0" y="4" width="${Math.min(cell.cand_total/max*W,W)}" height="22" fill="${css('--pale')}"/>${cell.cand_total/max*W>W?`<text x="${W-6}" y="19" text-anchor="end" font-size="11" fill="${css('--muted')}">total ${fmt$(cell.cand_total)} \u2192</text>`:''}`;
    let x=0; for(const [k] of OVL_GROUPS){ const v=comp[k]; if(!v) continue; const w=v/max*W; svg+=`<rect x="${x}" y="4" width="${Math.max(w,1)}" height="22" fill="${OVL_COLOR[k]}"><title>${esc(OVL_GROUPS.find(g=>g[0]===k)[1])}: ${fmtFull(v)}</title></rect>`; x+=w; }
    svg+='</svg>';
    const row=document.createElement('div'); row.className='ovl-row'; row.dataset.c=c;
    row.innerHTML=`<div class="nm">${esc(CANDS[c])}<small>${cell.n} shared donor${cell.n===1?'':'s'} of ${cell.cand_n.toLocaleString()}</small></div><div>${svg}<div class="who">${cell.n?`${esc(read)}. Largest: ${top}`:'None in this window.'}</div></div><div class="amt"><b>${fmt$(cell.to_cand)}</b><small>of ${fmt$(cell.cand_total)} to ${esc(CANDS[c].split(' ').pop())}</small><small>these donors gave ${esc(short)} ${fmt$(cell.to_set)}</small></div>`;
    row.addEventListener('click',()=>openOverlap(sid,c)); box.appendChild(row);
  }
  let html=`<thead><tr><th>Candidate</th><th class="num">Donors in window</th><th class="num">Shared donors</th><th class="num">$ shared donors gave candidate</th><th class="num">Candidate total</th><th class="num">$ they gave ${esc(short)}</th><th class="num">From unions</th><th class="num">From business</th><th class="num">From individuals</th></tr></thead><tbody>`;
  const csv=[['Candidate','Donors in window','Shared donors','$ shared donors gave candidate','Candidate total','$ they gave '+set.label,'From unions & labor PACs','From businesses & PACs','From individuals','From political committees & other']];
  for(const [c,cell] of rows){ const comp={labor:0,biz:0,ind:0,other:0}; for(const d of cell.shared) comp[ovlGroup(d.cat)]+=d.to_cand;
    html+=`<tr class="clk" data-c="${c}"><td>${esc(CANDS[c])}</td><td class="num">${cell.cand_n.toLocaleString()}</td><td class="num">${cell.n}</td><td class="num"><b>${fmtFull(cell.to_cand)}</b></td><td class="num">${fmtFull(cell.cand_total)}</td><td class="num">${fmtFull(cell.to_set)}</td><td class="num">${fmtFull(comp.labor)}</td><td class="num">${fmtFull(comp.biz)}</td><td class="num">${fmtFull(comp.ind)}</td></tr>`;
    csv.push([CANDS[c],cell.cand_n,cell.n,cell.to_cand,cell.cand_total,cell.to_set,Math.round(comp.labor),Math.round(comp.biz),Math.round(comp.ind),Math.round(comp.other)]); }
  const tb=document.getElementById('ovl-table'); tb.innerHTML=html+'</tbody>'; tb.querySelectorAll('tr.clk').forEach(tr=>tr.addEventListener('click',()=>openOverlap(sid,tr.dataset.c)));
  CSV['ovl-table']=csv;
}
function openOverlap(sid,c){
  document.getElementById('modal-body').classList.remove('mx');
  const set=OVL.sets.find(s=>s.id===sid); const raw=OVL.cells[`${sid}|${c}|${state.win}`]; const shared=raw.shared.filter(d=>!(state.ovlNoLabor&&d.cat==='labor')&&!(state.ovlNoLoans&&d.cat==='loan')); const cell={shared,n:shared.length,to_cand:shared.reduce((s,d)=>s+d.to_cand,0),to_set:shared.reduce((s,d)=>s+d.to_set,0),cand_total:raw.cand_total};
  document.getElementById('modal-title').textContent=`${CANDS[c]} ∩ ${set.label}`;
  document.getElementById('modal-cap').textContent=`${cell.n} shared donors gave ${CANDS[c]} ${fmtFull(cell.to_cand)} (${pct1(cell.to_cand,cell.cand_total)} of the candidate’s ${windowLabel().toLowerCase()} total) and gave ${set.label.split(' (')[0]} ${fmtFull(cell.to_set)}.`;
  let html=`<div class="mhead"><span>Donor</span><span>Type</span><span style="text-align:right">To ${esc(CANDS[c].split(' ').pop())}</span><span style="text-align:right">To ${esc(set.label.split(' ')[0])}</span></div>`;
  for(const d of cell.shared) html+=`<details><summary><span><b>${esc(d.name)}</b></span><span class="cand">${esc(CAT_LABEL[d.cat]||d.cat)}</span><span style="text-align:right">${fmtFull(d.to_cand)}</span><span style="text-align:right">${fmtFull(d.to_set)}</span></summary></details>`;
  if(!cell.shared.length) html+='<p class="note">No shared donors in this window.</p>';
  const body=document.getElementById('modal-body'); body.innerHTML=html; body.scrollTop=0;
  const modal=document.getElementById('modal'); modal.hidden=false; document.body.style.overflow='hidden'; modal.querySelector('button[data-close]').focus();
}

// ---------- donor networks ----------
const NET_COLS = [['state','Charter schools & ed reform','Charter / ed reform'],['state','Vallas 2023','Vallas 2023'],['state','Other Chicago mayoral rivals','Other mayoral rivals'],['state','Chicago IE committees','Chicago IE cmtes'],['state','Personal PAC','Personal PAC'],['state','Republican (state)','Republican'],
  ['fed','Pro-Israel (incl. AIPAC/UDP-aligned super PACs)','Pro-Israel / AIPAC-aligned'],['fed','Democratic party & super PACs','Dem party & super PACs'],['fed','Republican (federal)','Republican'],['fed','Centrist & bipartisan','Centrist / bipartisan'],['fed','Anti-Trump Republican','Anti-Trump R']];
const NET_DEFS={'Charter schools & ed reform':'INCS Action (IE and PAC), Stand for Children, One Chance Illinois, The Children\u2019s Future','Vallas 2023':'Vallas For Mayor','Other Chicago mayoral rivals':'Emanuel, Daley, Chico, Lightfoot, McCarthy, Preckwinkle, Garcia, Wilson committees','Chicago IE committees':'Chicago Forward, Get Stuff Done PAC, Common Ground Collective, Urban Center, IMPACT Chicago Fund, The Chicago Committee','Personal PAC':'Personal PAC Inc and its Independent Committee','Republican (state)':'Rauner, Irvin, Bailey, Dabrowski, Durkin, Radogno, Cross, House Republican Organization and other Republican committees; a curated list, so a floor','Pro-Israel (incl. AIPAC/UDP-aligned super PACs)':'AIPAC PAC, United Democracy Project, DMFI, Zioness, JACPAC, NORPAC, Pro-Israel America, RJC, plus the UDP-funded pop-up super PACs: Elect Chicago Women, Affordable Chicago Now! and Chicago Progressive Partnership (Illinois, 2026; UDP funding confirmed by FEC filings and reported by NBC, the Evanston RoundTable and Semafor) and Voters for Responsive Government (2024; UDP gave $1.3M of its $4M and it spent $3.2M opposing Susheela Jayapal in OR-3)','Democratic party & super PACs':'DNC, DCCC, DSCC, SMP, HMP, Priorities USA, American Bridge, Future Forward, presidential victory funds, Illinois Future PAC (Pritzker/Stratton), One For All Committee (Reid Hoffman), Fight for America\u2019s Future, Defend Our Constitution PAC (Democratic-aligned; boosted a Constitution Party candidate against McCormick in PA 2024)','Republican (federal)':'RNC, NRSC, NRCC, Republican presidential and congressional committees, Senate/Congressional Leadership Funds, Pine Tree Results (Collins); a curated list, so a floor','Centrist & bipartisan':'Problem Solvers, No Labels and its 2018 super PAC network (Citizens for a Strong America, United for Progress, Govern or Go Home, Forward Not Back), Forward Party, Mainstream Democrats PAC, Welcome PAC, Unite America, Third Way','Anti-Trump Republican':'Lincoln Project, Republican Women for Progress, Republican Accountability','Crypto / AI / tech super PACs':'Fairshake, Protect Progress, Defend American Jobs, HODLpac, Leading the Future, Think Big, American Mission, Public First, Jobs and Democracy, Defending Our Values; Meta\u2019s vehicles (American Technology Excellence Project, Making Our Tomorrow, Forge the Future) are non-federal and corporate-funded','Quigley / Giannoulias federal':'Quigley for Congress; Alexi for Illinois (2010 U.S. Senate)'};
function heat(v,max,side){ if(!v) return ''; const p=Math.min(1,Math.sqrt(v/max)); const c=side==='fed'?'var(--plum)':'var(--sage)'; return `background:color-mix(in srgb, ${c} ${Math.round(10+p*65)}%, transparent)`; }
function renderMatrix(){
  const M=NET.matrix; document.getElementById('mat-th').textContent=fmt$(M.threshold);
  const max=Math.max(...Object.values(M.cells).map(x=>x.to_cand),1);
  let html='<thead><tr><th>Candidate</th>'+M.nets.map(k=>`<th class="num">${esc(k)}</th>`).join('')+'</tr></thead><tbody>';
  for(const c of CAND_ORDER){ html+=`<tr><td class="name">${esc(CANDS[c])}</td>`+M.nets.map(k=>{ const x=M.cells[`${k}|${c}`]; if(!x.n) return `<td class="cell none">\u2014</td>`; const p=Math.sqrt(x.to_cand/max); return `<td class="cell" data-k="${esc(k)}" data-c="${c}" style="background:color-mix(in srgb, var(--sage) ${Math.round(8+p*62)}%, transparent)"><b>${fmt$(x.to_cand)}</b> from ${x.n} donor${x.n===1?"":"s"}<small>who gave the network ${fmt$(x.to_net)}</small></td>`; }).join('')+'</tr>'; }
  const tb=document.getElementById('net-matrix'); tb.innerHTML=html+'</tbody>';
  tb.querySelectorAll('td.cell[data-k]').forEach(td=>td.addEventListener('click',()=>openMatrix(td.dataset.k,td.dataset.c)));
  const crypto=M.nets.find(k=>/crypto/i.test(k)); const cr=CAND_ORDER.reduce((s,c)=>s+M.cells[`${crypto}|${c}`].n,0);
  document.getElementById('mat-note').textContent=`Career dollars from the 50 largest individual donors to the twelve; unions and PACs are not in this group, which is why Brandon Johnson\u2019s row is empty. The crypto / AI column is a tested zero, not a gap: every itemized contributor to the twelve candidates (13,103 distinct sources, 7,751 of them people) was matched against the full donor lists of Fairshake, Protect Progress, Defend American Jobs, Leading the Future, Think Big, Public First and the DraftKings/FanDuel vehicles Win for America and American Future. None appears. Those super PACs were, with AIPAC, the largest outside spenders in the March 2026 Illinois primaries, and their money comes from a few dozen corporate and Silicon Valley principals \u2014 including Chicago\u2019s Jump Crypto, which gave Fairshake $25M and none of the candidates anything. The one crypto gift among the 50 is $15,000 to HODLpac.`;
  CSV['net-matrix']=[['Candidate',...M.nets.flatMap(k=>[`$ to candidate from major ${k} funders`,`# donors`,`$ they gave ${k}`])]].concat(CAND_ORDER.map(c=>[CANDS[c],...M.nets.flatMap(k=>{ const x=M.cells[`${k}|${c}`]; return [x.to_cand,x.n,x.to_net]; })]));
}
function openMatrix(k,c){
  const x=NET.matrix.cells[`${k}|${c}`]; document.getElementById('modal-body').classList.add('mx');
  document.getElementById('modal-title').textContent=`${CANDS[c]} \u2190 major ${k} funders`;
  document.getElementById('modal-cap').textContent=`${x.n} of the 50 largest donors gave ${CANDS[c]} ${fmtFull(x.to_cand)} (career) and gave ${k} committees ${fmtFull(x.to_net)}. Threshold: ${fmt$(NET.matrix.threshold)} to the network.`;
  let html=`<div class="mhead"><span>Donor</span><span></span><span style="text-align:right">To ${esc(CANDS[c].split(' ').pop())}</span><span style="text-align:right">To network</span></div>`;
  for(const d of x.donors){ const i=NET.donors.findIndex(z=>z.name===d.name); html+=`<details><summary><span><b>${esc(d.name)}</b>${i>=0?`<span class="who">${esc([NET.donors[i].occ,NET.donors[i].emp].filter(Boolean).join(', '))}</span>`:''}</span><span></span><span style="text-align:right">${fmtFull(d.to_cand)}</span><span style="text-align:right">${fmtFull(d.to_net)}</span></summary></details>`; }
  const body=document.getElementById('modal-body'); body.innerHTML=html; body.scrollTop=0;
  const modal=document.getElementById('modal'); modal.hidden=false; document.body.style.overflow='hidden'; modal.querySelector('button[data-close]').focus();
}
// ---------- ORG-MATRIX BLOCK (optional; set SHOW_ORG_MATRIX=false to remove) ----------
const SHOW_ORG_MATRIX = true;
function renderOrgMatrix(){
  const blk=document.getElementById('org-block'); if(!blk) return; if(!SHOW_ORG_MATRIX||!NET.orgmatrix){ blk.hidden=true; return; }
  const M=NET.orgmatrix; document.getElementById('omat-th').textContent=fmt$(M.threshold); const wk=state.win;
  const cells=M.nets.map(k=>CAND_ORDER.map(c=>M.cells[`${k}|${c}|${wk}`])).flat(); const max=Math.max(...cells.map(x=>x.to_cand),1);
  const SHORT={'Republican committees (Illinois)':'Republican (Illinois)','Paul Vallas 2023':'Vallas 2023','Emanuel & Chicago Forward':'Emanuel / Chicago Forward','Business-aligned Chicago IE committees':'Business IE cmtes','Progressive IE / UWF network':'Progressive IE / UWF','Democratic leadership (Harmon, Welch, Madigan, DPI)':'Dem leadership'};
  let html='<thead><tr><th>Candidate</th>'+M.nets.map(k=>`<th class="num" title="${esc(NET.orgdefs[k]||'')}">${esc(SHORT[k]||k)}</th>`).join('')+'</tr></thead><tbody>';
  for(const c of CAND_ORDER){ html+=`<tr><td class="name">${esc(CANDS[c])}</td>`+M.nets.map(k=>{ const x=M.cells[`${k}|${c}|${wk}`]; if(!x.n) return `<td class="cell none">\u2014</td>`; const p=Math.sqrt(x.to_cand/max); return `<td class="cell" data-k="${esc(k)}" data-c="${c}" style="background:color-mix(in srgb, var(--plum) ${Math.round(8+p*62)}%, transparent)"><b>${fmt$(x.to_cand)}</b> from ${x.n} org${x.n===1?'':'s'}<small>who gave the network ${fmt$(x.to_net)}</small></td>`; }).join('')+'</tr>'; }
  const tb=document.getElementById('org-matrix'); tb.innerHTML=html+'</tbody>';
  tb.querySelectorAll('td.cell[data-k]').forEach(td=>td.addEventListener('click',()=>openOrgMatrix(td.dataset.k,td.dataset.c)));
  document.getElementById('omat-note').textContent=`Organizational donors are the largest unions, PACs and businesses that fund the candidates \u2014 49 in all \u2014 followed across every Illinois committee they have funded (State Board of Elections receipts, ${DATA.vintage}). Federal giving by union and trade PACs is not included. Network labels are keyword tags on committee names; the Republican list is curated and understates.`;
  const defs=document.getElementById('org-defs'); if(defs) defs.innerHTML='<summary>What each network column includes</summary><dl class="method" style="margin:0">'+M.nets.map(k=>`<dt>${esc(k)}</dt><dd>${esc(NET.orgdefs[k]||'')}</dd>`).join('')+'</dl>';
  CSV['org-matrix']=[['Candidate',...M.nets.flatMap(k=>[`$ to candidate from major ${k} funders`,`# organizations`,`$ they gave ${k}`])]].concat(CAND_ORDER.map(c=>[CANDS[c],...M.nets.flatMap(k=>{ const x=M.cells[`${k}|${c}|${wk}`]; return [x.to_cand,x.n,x.to_net]; })]));
}
function openOrgMatrix(k,c){
  const x=NET.orgmatrix.cells[`${k}|${c}|${state.win}`]; document.getElementById('modal-body').classList.add('mx');
  document.getElementById('modal-title').textContent=`${CANDS[c]} \u2190 organizations that are major ${k} funders`;
  document.getElementById('modal-cap').textContent=`${x.n} organization${x.n===1?'':'s'} gave ${CANDS[c]} ${fmtFull(x.to_cand)} (${windowLabel()}) and have given ${k} committees ${fmtFull(x.to_net)} over their lives. Open a row for the recipients.`;
  let html=`<div class="mhead"><span>Organization</span><span></span><span style="text-align:right">To ${esc(CANDS[c].split(' ').pop())}</span><span style="text-align:right">To network</span></div>`;
  for(const d of x.donors){ const o=NET.orgs[d.name]; const items=(o&&o.tags[k]?o.tags[k].items:[]);
    html+=`<details><summary><span><b>${esc(d.name)}</b><span class="who">${o?`${fmt$(o.total)} to Illinois committees, ${o.first}\u2013${o.last}`:''}</span></span><span></span><span style="text-align:right">${fmtFull(d.to_cand)}</span><span style="text-align:right">${fmtFull(d.to_net)}</span></summary><div class="gifts"><table><tbody>${items.map(i=>`<tr><td>${esc(i[0])}</td><td class="num">${fmtFull(i[1])}</td></tr>`).join('')}</tbody></table></div></details>`; }
  const body=document.getElementById('modal-body'); body.innerHTML=html; body.scrollTop=0;
  const modal=document.getElementById('modal'); modal.hidden=false; document.body.style.overflow='hidden'; modal.querySelector('button[data-close]').focus();
}
// ---------- /ORG-MATRIX BLOCK ----------
function renderNetworks(){
  renderMatrix(); renderOrgMatrix();
  const ds=NET.donors; const max=Math.max(...ds.flatMap(d=>[...Object.values(d.state_tags),...Object.values(d.fed_tags)].map(x=>x.amt)),1);
  let html='<thead><tr><th></th><th class="grp" colspan="3">Totals</th><th class="grp g-il" colspan="6">Illinois committees (SBE)</th><th class="grp g-fed" colspan="5">Federal committees (FEC)</th></tr>';
  html+='<tr><th>Donor</th><th class="num">To the twelve</th><th class="num g-il">Other Illinois</th><th class="num g-fed">Federal</th>'+NET_COLS.map(c=>`<th class="num ${c[0]==='state'?'g-il':'g-fed'}" title="${esc(NET_DEFS[c[1]]||'')}">${esc(c[2])}</th>`).join('')+'</tr></thead><tbody>';
  ds.forEach((d,i)=>{
    const sev=Object.entries(d.to_seven).sort((a,b)=>b[1]-a[1]).map(([c,v])=>`${CANDS[c].split(' ').pop()} ${fmt$(v)}`).join(', ');
    html+=`<tr data-i="${i}"><td class="name">${esc(d.name)}<small style="display:block;font-family:var(--sans);font-size:10.5px;color:var(--muted)">${esc(d.emp||d.occ)}</small></td>`;
    html+=`<td class="cell sev"><b>${d.seven_total?fmt$(d.seven_total):'—'}</b><small>${esc(sev)}</small></td><td class="cell g-il">${d.state_other===null?'<span class="hint">not pulled</span>':fmt$(d.state_other)}</td><td class="cell g-fed">${d.fed_total===null?'<span class="hint">not pulled</span>':(d.fed_total===0?'<span class="hint">none found</span>':fmt$(d.fed_total))}</td>`;
    for(const [side,key] of NET_COLS){ const v=(side==='state'?d.state_tags:d.fed_tags)[key]?.amt||0; html+=`<td class="cell ${side==='state'?'g-il':'g-fed'}" style="${heat(v,max,side)}">${v?fmt$(v):''}</td>`; }
    html+='</tr>';
  });
  CSV['net-table']=[['Donor','Occupation','Employer',...CAND_ORDER.map(c=>'To '+CANDS[c]),'To the twelve','Other Illinois committees','Federal committees',...NET_COLS.map(c=>(c[0]==='state'?'IL: ':'Fed: ')+c[1]),'Fed: Crypto / AI / tech super PACs','Fed: Quigley / Giannoulias federal']].concat(ds.map(d=>[d.name,d.occ,d.emp,...CAND_ORDER.map(c=>Math.round(d.to_seven[c]||0)),d.seven_total,d.state_other===null?'not pulled':d.state_other,d.fed_total===null?'not pulled':d.fed_total,...NET_COLS.map(([side,key])=>Math.round((side==='state'?d.state_tags:d.fed_tags)[key]?.amt||0)),Math.round(d.fed_tags['Crypto / AI / tech super PACs']?.amt||0),Math.round(d.fed_tags['Quigley / Giannoulias federal']?.amt||0)]));
  const tb=document.getElementById('net-table'); tb.innerHTML=html+'</tbody>';
  requestAnimationFrame(()=>{ const r1=tb.querySelector('thead tr'); if(r1) tb.style.setProperty('--h1', r1.getBoundingClientRect().height+'px'); });
  tb.querySelectorAll('tbody tr').forEach(tr=>tr.addEventListener('click',()=>openProfile(+tr.dataset.i)));
  const unp=ds.filter(d=>d.pulled===false).map(d=>d.name);
  document.getElementById('net-note').textContent=`Illinois giving is every current receipt filed with the State Board of Elections under the donor’s name (matched on name and ZIP), excluding the candidates’ own committees. Federal giving is the FEC individual-contribution record pulled by name on ${NET.fec_pulled} (six donors have no itemized federal record${unp.length?`; ${unp.length} who entered the top 50 with the ${DATA.vintage} data have not yet been pulled: ${unp.join(', ')}`:''}), supplemented by the receipts of the pro-Israel committees (AIPAC PAC, UDP, DMFI, JACPAC, Zioness, the three 2026 Illinois pop-ups) and of the Republican, centrist and unidentified super PACs the donors funded, matched back to the donors by name and ZIP \u2014 which recovered about $4.5M the name searches had missed. Earmark and joint-fundraising memo entries are removed so a dollar is counted once. AIPAC PAC entries are contributions the donor routed through AIPAC to a named candidate; the candidate is shown. Network columns are keyword tags on committee names (definitions below); untagged giving still appears in the totals and in each profile. Crypto/AI/tech super PACs and the candidates\u2019 own federal committees are tagged in profiles but not shown as columns because almost none of these donors gave to them.`;
  legend('legend-net',[['a','Illinois committees (SBE) \u2014 darker is larger','color-mix(in srgb, var(--sage) 70%, transparent)'],['b','Federal committees (FEC) \u2014 darker is larger','color-mix(in srgb, var(--plum) 70%, transparent)']]);
  const defs=document.getElementById('net-defs'); if(defs) defs.innerHTML='<summary>What each network column includes</summary><dl class="method" style="margin:0">'+[...NET_COLS.map(c=>c[1]),'Crypto / AI / tech super PACs','Quigley / Giannoulias federal'].map(k=>`<dt>${esc(k)}</dt><dd>${esc(NET_DEFS[k])}</dd>`).join('')+'</dl>';
}
function openProfile(i){
  document.getElementById('modal-body').classList.remove('mx');
  const d=NET.donors[i];
  document.getElementById('modal-title').textContent=d.name;
  document.getElementById('modal-cap').textContent=[[d.occ,d.emp].filter(Boolean).join(', '),d.city].filter(Boolean).join(' · ');
  const sev=Object.entries(d.to_seven).sort((a,b)=>b[1]-a[1]).map(([c,v])=>`<tr><td>${esc(CANDS[c])}</td><td class="num">${fmtFull(v)}</td></tr>`).join('');
  const tagList=(tags,order)=>order.filter(k=>tags[k]).map(k=>`<span class="tag"><b>${esc(k)}</b> ${fmt$(tags[k].amt)} — ${esc(tags[k].items.slice(0,4).map(x=>x[0]).join('; '))}${tags[k].items.length>4?' …':''}</span>`).join('');
  let html=`<div class="prof"><div><h4>To the twelve mayoral candidates</h4><div class="tot">${fmtFull(d.seven_total)} all years</div><table><tbody>${sev||'<tr><td class="hint">none</td></tr>'}</tbody></table></div>`;
  html+=`<div><h4>Other Illinois committees</h4><div class="tot">${d.state_other===null?'Statewide record not yet pulled for this donor':`${fmtFull(d.state_other)} · ${d.state_n} gifts`}${d.state_years[0]?` · ${d.state_years[0]}–${d.state_years[1]}`:''}</div><div class="tags">${tagList(d.state_tags,NET.state_tags)}</div><table><tbody>${d.state_top.map(x=>`<tr><td>${esc(x[0])}<span class="who">${esc(x[1]||'')}</span></td><td class="num">${fmtFull(x[2])}</td></tr>`).join('')}</tbody></table></div>`;
  html+=`<div><h4>Federal committees</h4><div class="tot">${d.fed_total===null?'FEC record not pulled for this donor':d.fed_total===0?'No itemized federal contributions found under this name on fec.gov':`${fmtFull(d.fed_total)} · ${d.fed_n} gifts · ${d.fed_years[0]}–${d.fed_years[1]} cycles`}</div><div class="tags">${tagList(d.fed_tags,NET.fed_tags)}</div><table><tbody>${d.fed_top.map(x=>`<tr><td>${esc(x[0])}</td><td class="num">${fmtFull(x[1])}</td></tr>`).join('')}</tbody></table></div></div>`;
  html+=`<p class="note">Illinois: State Board of Elections receipts, current filings only, loans at face value. Federal: FEC Schedule A itemized contributions under this name, memo (earmark / joint-fundraiser) entries removed. Top-15 lists on each side.</p>`;
  const body=document.getElementById('modal-body'); body.innerHTML=html; body.scrollTop=0;
  const modal=document.getElementById('modal'); modal.hidden=false; document.body.style.overflow='hidden'; modal.querySelector('button[data-close]').focus();
}

// ---------- methodology ----------
function renderMethod(){
  const comms=Object.entries(DATA.committees).map(([id,c])=>`<code>${id}</code> ${esc(c.name)} (${esc(CANDS[c.cand])})`).join('; ');
  const items=[
    ['What this covers','Direct contributions to every Illinois State Board of Elections committee controlled by each of the twelve declared 2027 candidates over their careers: '+comms+'. Mike Quigley\u2019s congressional committee files with the FEC and is excluded; transfers his state committee received from that federal account are treated as transfers between his own committees and removed. The Giannoulias transition committee is included but flagged: it was a 2006 inauguration account, not a campaign fund.'],
    ['Sources and vintage','Illinois State Board of Elections bulk exports of committees, receipts, D-2 quarterly totals and filed documents as of '+DATA.vintage+'. Committees that had not yet filed a D-2 (Brewer, CARDENAS4CHICAGO) appear through their A-1 large-contribution reports only. Federal data is from FEC Schedule A exports pulled on '+NET.fec_pulled+'. Outside-committee receipts (Vallas, INCS, Chicago Forward, Get Stuff Done, Common Ground, IMPACT Chicago) are SBE contribution exports for those committees.'],
    ['What "direct" means','Money a committee reported receiving: itemized individual and organizational contributions, transfers in from other committees, loans, in-kind contributions, plus each committee\u2019s reported unitemized (non-itemized) totals from its D-2 reports, assigned to the report\u2019s period end date. Independent expenditures for or against a candidate, and money spent by outside groups, are never combined with these figures; the outside committees appear only as comparison sets for their donors.'],
    ['De-duplication','Only current (non-archived) filings are used, so amended reports are not double counted. Two superseded filings the Board never archived were dropped by hand (a 2010 Cardenas semiannual re-filed as a later document; a 2022 Quigley in-kind receipt filed twice). Transfers from a candidate\u2019s own other committees are excluded so a dollar given to one committee and moved to another counts once. Interest, refunds and returned funds are excluded.'],
    ['Cash on hand and spending','From the most recent current D-2 quarterly report of each committee: end-of-period funds available, total expenditures, and outstanding debts (which are mostly loans from the candidate or family). Committees that have filed a Final report are excluded. Spending since April 2023 is the sum of quarterly expenditure totals for reports ending after the 2023 runoff.'],
    ['Loans','Counted at face value in the year received and flagged. Loans from the candidate or immediate family are self-funding; other loans are their own category. Repayments are not netted.'],
    ['Source type','Assigned by rule from the contributor name for organizations, reviewed by hand for the roughly 300 largest organizational sources (about four-fifths of organizational dollars), and then reviewed by IPG in a spreadsheet of every organizational source and every individual giving $2,500 or more; corrections from that review are applied by name on top of the rules. Unions and their PACs, party organizations, other candidates\u2019 committees, issue and ideological PACs, and businesses with their trade associations and PACs are separated. "Candidate & family" is exact-name matching. Trusts are counted with individuals.'],
    ['Large and small donors','A person is a "large donor" to a candidate when their gifts to that candidate within the selected window add up to more than $2,500; everyone else is small-dollar, together with the committee\u2019s unitemized receipts. Unions, businesses, PACs and political committees are never in either group.'],
    ['Industry','For organizations, from words in the name; for individuals, from the occupation and employer they reported, with IPG\u2019s corrections. Illinois did not require occupation and employer before 2011 and enforcement remains uneven, so "Not reported" is a real and large category, especially for older gifts.'],
    ['Geography','From the address the committee reported. Chicago is the city name or a 606 ZIP; out of state is any other state. Organizations are placed by their office address.'],
    ['Donor matching','Organizations are matched on a cleaned name with a hand-maintained alias list for the largest recurring union and trade PACs. Individuals are matched on first and last name plus the first three digits of their ZIP code; across different filers (outside committees, FEC), name plus ZIP or city.'],
    ['Shared donors with outside-money committees','Candidate donors are matched against the itemized contributor lists of six comparison sets: Paul Vallas\u2019s 2019 and 2023 campaign committees; Get Stuff Done PAC; Common Ground Collective (its independent-expenditure committee and PAC combined); IMPACT Chicago Fund; INCS Action (independent committee and PAC combined); and Chicago Forward. Refunds and interest are excluded from the comparison sets. Counts understate true overlap where a donor uses different names or addresses across committees.'],
    ['The 50 largest donors: Illinois giving','For the 50 largest individual donors, every receipt under their name was pulled from the full SBE receipts file (matched on surname, first name and ZIP), including giving routed through family foundations and firms, and excluding the candidates\u2019 own committees.'],
    ['The 50 largest donors: federal giving','Federal giving was assembled in two passes. First, an FEC individual-contribution search by name for each of the 50 (Zachary Abraham, Jacob Levy, Aileen Brown, Robert Lozins, David Schwartz and Harsh Patel have no itemized federal record). Second, the receipts of the committees themselves \u2014 AIPAC PAC, United Democracy Project, DMFI, JACPAC, Zioness, the three 2026 Illinois pop-up super PACs, Voters for Responsive Government, Pine Tree Results, Citizens for a Strong America, Defend Our Constitution, One For All, Fight for America\u2019s Future, Republican Women for Progress, Maryland\u2019s Future, Hogan Victory Fund, Tell It Like It Is, NRSC Victory, Scalise Leadership Fund, Senate Conservatives Fund and Action, No Labels, Forward Party, Mainstream Democrats \u2014 were pulled and matched back to the 50 by name and ZIP, which recovered about $4.5M the name searches had missed. Transactions are de-duplicated on the FEC transaction ID; earmark and joint-fundraising memo entries are removed so a dollar is counted once. AIPAC PAC entries are contributions the donor routed through AIPAC to a named candidate, and the candidate is shown.'],
    ['Network labels','Keyword tags on committee names, listed in full under the network table. The pro-Israel label includes the UDP-funded pop-up super PACs (Elect Chicago Women, Affordable Chicago Now!, Chicago Progressive Partnership, Voters for Responsive Government) because their own FEC receipts show United Democracy Project as a principal funder, as reported by NBC News, the Evanston RoundTable and Semafor. Citizens for a Strong America is tagged centrist because a Chicago Sun-Times investigation identified it as part of the No Labels super PAC network. Defend Our Constitution is tagged Democratic because it was a Democratic-aligned tactical super PAC in the 2024 Pennsylvania Senate race. "Centrist & bipartisan" is a narrow list (Problem Solvers, No Labels and its 2018 network, Forward Party, Mainstream Democrats, Welcome PAC, Unite America, Third Way) and says nothing about a donor beyond that they funded those groups. The candidate-by-network matrix counts a donor as a major funder of a network at $25,000 or more, career.'],
    ['Organizational donors (optional block)','The largest unions, PACs and businesses that fund the candidates \u2014 49 in all \u2014 were pulled from the full State Board of Elections receipts file by name, with transfers to their own affiliated committees removed, and their giving was tagged by network in the same way as the individual donors: Republican committees, Vallas 2023, the Emanuel-era and current business-aligned independent-expenditure committees, the progressive independent-expenditure network, and the Democratic legislative leadership. Their federal PACs are not included.'],
    ['Crypto, AI and big-tech super PACs','Their FEC receipts (Fairshake, Protect Progress, Defend American Jobs, Leading the Future, Think Big, Public First, Win for America, American Future) were pulled and every contributor was matched against every itemized donor to the candidates. No donor to any of the candidates appears in any of them. Meta\u2019s American Technology Excellence Project and its Illinois affiliate Making Our Tomorrow are state-level committees funded by the company itself and were not cross-matched.'],
    ['Links','Each gift in the detail views links to its record on Illinois Sunshine (Reform for Illinois), which mirrors the same State Board of Elections filings; committee links go to the Sunshine committee page.'],
  ];
  document.getElementById('method-list').innerHTML=items.map(([t,d])=>`<dt>${esc(t)}</dt><dd>${d}</dd>`).join('');
}

// ---------- CSV export ----------
const CSV={};
function csvEscape(v){ v=v==null?'':String(v); return /[",\n]/.test(v)?'"'+v.replace(/"/g,'""')+'"':v; }
function downloadCSV(key,name){
  let rows=CSV[key]; if(!rows){ const tb=document.getElementById(key); const t=tb?.tagName==='TABLE'?tb:tb?.querySelector('table'); if(!t) return toast('Nothing to export'); rows=[...t.querySelectorAll('tr')].map(tr=>[...tr.children].map(td=>{ const c=td.cloneNode(true); c.querySelectorAll('small,.hint,.who').forEach(x=>x.remove()); return c.textContent.trim(); })); }
  const meta=[[`Institute for the Public Good \u2014 direct contributions to 2027 Chicago mayoral candidates`],[`Window: ${windowLabel()}${state.inkind?'':' \u00b7 in-kind excluded'}${state.loans?'':' \u00b7 loans excluded'}`],[`Source: Illinois State Board of Elections filings as of ${DATA.vintage}; FEC data pulled ${NET.fec_pulled} where shown`],[]];
  const text=meta.concat(rows).map(r=>r.map(csvEscape).join(',')).join('\n');
  const a=document.createElement('a'); a.href='data:text/csv;charset=utf-8,\uFEFF'+encodeURIComponent(text); a.download=name+'.csv'; a.click(); toast('Downloaded '+name+'.csv');
}

// ---------- downloads ----------
function toast(msg){ const t=document.getElementById('toast'); t.textContent=msg; t.classList.add('on'); setTimeout(()=>t.classList.remove('on'),1800); }
async function download(id,name){
  const node=document.getElementById(id); if(!node) return;
  const wrapper=document.createElement('div'); wrapper.style.cssText='position:fixed;left:-10000px;top:0;width:1200px;padding:28px 32px;background:'+css('--bg')+';color:'+css('--fg')+';font-family:'+css('--sans');
  const title=node.closest('section')?.querySelector('h2')?.textContent||'';
  wrapper.innerHTML=`<div style="font-family:${css('--serif')};font-size:28px;margin-bottom:6px">${esc(title)}</div><div style="font-size:13px;color:${css('--muted')};margin-bottom:14px">Direct contributions · ${esc(windowLabel())} · Institute for the Public Good, from Illinois State Board of Elections filings</div>`;
  const clone=node.cloneNode(true); clone.querySelectorAll('button.dl').forEach(b=>b.remove()); wrapper.appendChild(clone);
  const lg=node.closest('section')?.querySelector('.legend'); if(lg && !node.contains(lg)){ const l2=lg.cloneNode(true); wrapper.insertBefore(l2, clone); }
  document.body.appendChild(wrapper);
  try{ if(typeof html2canvas==='undefined') throw new Error('renderer unavailable'); const canvas=await html2canvas(wrapper,{scale:2,backgroundColor:css('--bg'),useCORS:true}); const a=document.createElement('a'); a.download=name+'.png'; a.href=canvas.toDataURL('image/png'); a.click(); toast('Downloaded '+name+'.png'); }
  catch(e){ toast('Could not render image: '+e.message); }
  finally{ wrapper.remove(); }
}
function windowLabel(){ return {all:'Full career','2023-04-05':'2027 cycle (since April 2023)','2025-01-01':'Since January 2025','2026-01-01':'2026 only'}[state.win]; }

// ---------- feedback ----------
const FEEDBACK_EMAIL='comms@i4pg.org';
const FEEDBACK_ENDPOINT='';            // optional: a form endpoint (e.g. Formspree) that emails comms@i4pg.org; blank = open the visitor's mail client
const NEWSLETTER_URL='https://www.publicgoodpolicy.org/keepintouch';
const DONATE_URL='https://www.zeffy.com/en-US/donation-form/support-the-institute-for-the-public-good';
function initFeedback(){
  const fb=document.getElementById('fb'); document.getElementById('fb-open').addEventListener('click',()=>{ fb.hidden=false; document.body.style.overflow='hidden'; fb.querySelector('input').focus(); });
  fb.querySelectorAll('[data-close]').forEach(b=>b.addEventListener('click',()=>{ fb.hidden=true; document.body.style.overflow=''; }));
  document.getElementById('fb-news').href=NEWSLETTER_URL; document.getElementById('fb-donate').href=DONATE_URL;
  const form=document.getElementById('fb-form');
  form.addEventListener('submit',async e=>{
    e.preventDefault(); if(!form.reportValidity()) return;
    const f=Object.fromEntries(new FormData(form).entries()); f.list=form.querySelector('[name=list]').checked?'yes':'no'; f.page=location.href; f.window=windowLabel();
    const subject=`[Mayoral money] ${f.kind}: from ${f.name}`;
    const body=`Type: ${f.kind}\nName: ${f.name}\nEmail: ${f.email}\nPhone: ${f.phone||'\u2014'}\nAdd to email list: ${f.list}\n\n${f.message}\n\n\u2014\nSent from ${f.page} (window: ${f.window})`;
    if(FEEDBACK_ENDPOINT){ try{ const r=await fetch(FEEDBACK_ENDPOINT,{method:'POST',headers:{'Content-Type':'application/json','Accept':'application/json'},body:JSON.stringify(Object.assign({_subject:subject},f))}); if(!r.ok) throw new Error(r.status); document.getElementById('fb-done').hidden=false; form.hidden=true; return; } catch(err){ toast('Could not send; opening your mail app instead'); } }
    location.href=`mailto:${FEEDBACK_EMAIL}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    document.getElementById('fb-done').hidden=false; form.hidden=true;
  });
}

// ---------- key findings, reveal-on-scroll, count-up ----------
const BRIEF_URL='https://www.publicgoodpolicy.org/who-is-funding-2026-mayoral-race';
function countUp(el, target, fmt){ const reduce=window.matchMedia&&window.matchMedia('(prefers-reduced-motion: reduce)').matches; if(reduce){ el.textContent=fmt(target); return; } const t0=performance.now(), dur=1100; const step=now=>{ const p=Math.min(1,(now-t0)/dur); const e=1-Math.pow(1-p,3); el.textContent=fmt(target*e); if(p<1) requestAnimationFrame(step); }; requestAnimationFrame(step); }
function renderFindings(){
  const saveWin=state.win; state.win='2023-04-05'; const rows=filtered(); const bc=byCand(rows);
  const tot=c=>{ const m=sumBy(bc[c],r=>r[F.dcat]); const u=unitemized(c); m.set('small',(m.get('small')||0)+u); let t=0; m.forEach(v=>t+=v); return {t,m}; };
  const g=tot('giannoulias'), j=tot('johnson'); const all=CAND_ORDER.reduce((s,c)=>s+tot(c).t,0);
  const uniJ=unitemized('johnson'); const uniOthers=CAND_ORDER.filter(c=>c!=='johnson').reduce((s,c)=>s+unitemized(c),0);
  const M=NET.matrix.cells; const ai=M['Pro-Israel / AIPAC-aligned|giannoulias']||{n:0,to_cand:0,to_net:0}; const rep=M['Republican (federal + Illinois)|giannoulias']||{n:0,to_cand:0,to_net:0};
  const ov=OVL.cells['vallas-2023|giannoulias|2023-04-05']||{n:0,to_cand:0,to_set:0};
  const cash=(DATA.cash||{}); const gc=cash.giannoulias?cash.giannoulias.cash:0, jc=cash.johnson?cash.johnson.cash:0;
  state.win=saveWin;
  const stats=[[all,'raised by the twelve candidates since the April 2023 runoff',fmt$],[g.t,'of it raised by Alexi Giannoulias \u2014 with '+fmt$(gc)+' still in the bank',fmt$],[ai.to_cand,'to Giannoulias from '+ai.n+' donors who are major funders of AIPAC-aligned super PACs',fmt$],[0,'from crypto, AI or big-tech super PAC donors, to any candidate',v=>'$0']];
  const box=document.getElementById('kf-stats'); box.innerHTML=stats.map(()=>`<div class="stat"><b></b><span></span></div>`).join('');
  [...box.children].forEach((el,i)=>{ el.querySelector('span').textContent=stats[i][1]; countUp(el.querySelector('b'),stats[i][0],stats[i][2]); });
  const items=[
    `<b>Where the money is.</b> Giannoulias has raised ${fmt$(g.t)} this cycle, more than six times the next candidate, and spent ${fmt$((DATA.cash.giannoulias||{}).spent_cycle||0)}; he has ${fmt$(gc)} on hand. Mayor Johnson has raised ${fmt$(j.t)} and has ${fmt$(jc)} on hand.`,
    `<b>Where it comes from.</b> ${pct(g.m.get('large')||0,g.t)} of Giannoulias\u2019s money is from large individual donors giving over $2,500 and ${pct(g.m.get('biz')||0,g.t)} from businesses and their corporate PACs. Johnson\u2019s is ${pct(j.m.get('labor')||0,j.t)} unions and ${pct((j.m.get('small')||0),j.t)} small donors.`,
    `<b>Small-dollar money.</b> Johnson has raised ${fmt$(uniJ)} in unitemized gifts under $150 \u2014 more than every other candidate combined (${fmt$(uniOthers)}).`,
    `<b>What the largest donors also fund.</b> ${ai.n} of Giannoulias\u2019s largest individual donors are major funders of AIPAC\u2019s super PAC network (${fmt$(ai.to_net)} to it) and ${rep.n} of Republican candidates and committees (${fmt$(rep.to_net)}). Johnson\u2019s largest organizational donors, CTU and SEIU, fund the progressive independent-expenditure network; Giannoulias\u2019s, the building trades, are the most bipartisan money in Illinois.`,
    `<b>The 2023 Vallas coalition.</b> ${ov.n} of Giannoulias\u2019s donors this cycle also funded Paul Vallas in 2023; they gave Vallas ${fmt$(ov.to_set)} and Giannoulias ${fmt$(ov.to_cand)}.`,
    `<b>Crypto and AI money has not arrived \u2014 and likely would not arrive this way.</b> None of the donors to Fairshake, Leading the Future, Think Big or Public First has given any candidate a dollar; that money will likely arrive as corporate-funded independent expenditures, not contributions.`];
  document.getElementById('kf-list').innerHTML=items.map(s=>`<li>${s}</li>`).join('');
  const bl=document.getElementById('brief-link'); if(BRIEF_URL){ bl.href=BRIEF_URL; bl.parentElement.hidden=false; } else bl.parentElement.hidden=true;
}
function initReveal(){
  const els=[...document.querySelectorAll('section')].filter(s=>s.id!=='overview'&&s.id!=='findings'); els.forEach(e=>e.classList.add('rv'));
  if(!('IntersectionObserver' in window)){ els.forEach(e=>e.classList.add('in')); return; }
  const io=new IntersectionObserver(en=>{ en.forEach(x=>{ if(x.isIntersecting){ x.target.classList.add('in'); io.unobserve(x.target); } }); },{rootMargin:'0px 0px -8% 0px'});
  els.forEach(e=>io.observe(e));
}

// ---------- section nav / scrollspy ----------
function initSecNav(){
  const nav=document.getElementById('secnav'); if(!nav) return;
  const secs=[...document.querySelectorAll('section[id]')].filter(s=>s.querySelector('h2'));
  const short={findings:'Key findings',overview:'Overview',scorecard:'Big money',networks:'Donor networks',overlap:'Shared donors',industries:'Industries',size:'Gift size',donors:'Largest sources',shared:'Multi-candidate donors',method:'Method'};
  nav.innerHTML=secs.map(s=>`<a href="#${s.id}" data-s="${s.id}">${esc(short[s.id]||s.querySelector('h2').textContent)}</a>`).join('');
  const sel=document.getElementById('sec-sel'); if(sel){ sel.innerHTML='<option value="">Jump to\u2026</option>'+secs.map(s=>`<option value="${s.id}">${esc(short[s.id]||s.querySelector('h2').textContent)}</option>`).join(''); sel.addEventListener('change',()=>{ const el=document.getElementById(sel.value); if(!el) return; const top=el.getBoundingClientRect().top+window.scrollY-(document.getElementById('controls').offsetHeight)-8; window.scrollTo({top,behavior:'smooth'}); sel.value=''; }); }
  const links=[...nav.querySelectorAll('a')];
  links.forEach(l=>l.addEventListener('click',e=>{ e.preventDefault(); const el=document.getElementById(l.dataset.s); const top=el.getBoundingClientRect().top+window.scrollY-(document.getElementById('controls').offsetHeight+parseFloat(getComputedStyle(document.documentElement).getPropertyValue('--stick-top'))||0)-8; window.scrollTo({top,behavior:'smooth'}); history.replaceState(null,'','#'+l.dataset.s); }));
  const spy=()=>{ const off=(document.getElementById('controls').offsetHeight||0)+40; let cur=secs[0].id; for(const s of secs){ if(s.getBoundingClientRect().top-off<=0) cur=s.id; } links.forEach(l=>l.classList.toggle('on',l.dataset.s===cur)); };
  window.addEventListener('scroll',spy,{passive:true}); spy();
}

// ---------- wiring ----------
function fillSelects(){ for(const id of ['ind-cand','top-cand']){ const s=document.getElementById(id); s.innerHTML=CAND_ORDER.map(c=>`<option value="${c}">${esc(CANDS[c])}</option>`).join(''); } }
function renderAll(){
  const rows=filtered();
  legend('legend-cat', CATS.map(c=>[c,CAT_LABEL[c],CAT_COLOR(c)]));
    document.getElementById('win-hint').textContent = windowLabel() + (state.inkind?'':' · in-kind excluded') + (state.loans?'':' · loans excluded');
  renderHero(rows); renderRace(rows); renderIndustries(rows); renderOverlap(); if(typeof renderOrgMatrix==='function'&&NET) renderOrgMatrix(); renderSize(rows); renderTop(rows); renderShared(rows);
}
function init(){
  const setCtl=()=>document.documentElement.style.setProperty('--ctlh',(document.getElementById('controls').offsetHeight+1)+'px'); setCtl(); window.addEventListener('resize',setCtl);
  document.getElementById('vintage').textContent=new Date(DATA.vintage+'T12:00:00').toLocaleDateString('en-US',{month:'long',day:'numeric',year:'numeric'});
  document.getElementById('vintage2').textContent=document.getElementById('vintage').textContent;
  const _w=state.win; state.win='all'; const career=ROWS.filter(r=>r[F.cat]!=='intra'&&r[F.cat]!=='other').reduce((s,r)=>s+r[F.amt],0)+CAND_ORDER.reduce((s,c)=>s+unitemized(c),0); state.win=_w;
  document.getElementById('lede-total').textContent=fmt$(career);
  fillSelects(); renderMethod(); renderNetworks(); renderCash(); initFeedback(); renderFindings(); initSecNav(); initReveal();
  const setWin=w=>{ state.win=w; document.querySelectorAll('#win-seg button').forEach(x=>x.setAttribute('aria-pressed',x.dataset.win===w?'true':'false')); const s=document.getElementById('win-sel'); if(s) s.value=w; renderAll(); };
  document.querySelectorAll('#win-seg button').forEach(b=>b.addEventListener('click',()=>setWin(b.dataset.win)));
  const ws=document.getElementById('win-sel'); if(ws) ws.addEventListener('change',e=>setWin(e.target.value));
  document.getElementById('ck-inkind').addEventListener('change',e=>{state.inkind=e.target.checked; renderAll();});
  document.getElementById('ck-loans').addEventListener('change',e=>{state.loans=e.target.checked; renderAll();});
  document.getElementById('ind-cand').addEventListener('change',()=>renderIndustries(filtered()));
  document.getElementById('ovl-set').addEventListener('change',renderOverlap);
  document.getElementById('ovl-nolabor').addEventListener('change',e=>{state.ovlNoLabor=e.target.checked; renderOverlap();});
  document.getElementById('ovl-noloans').addEventListener('change',e=>{state.ovlNoLoans=e.target.checked; renderOverlap();});
  document.getElementById('ind-hide-labor').addEventListener('change',()=>renderIndustries(filtered()));
  document.getElementById('top-cand').addEventListener('change',()=>renderTop(filtered()));
  document.getElementById('top-n').addEventListener('change',()=>renderTop(filtered()));
  document.getElementById('top-ind-only').addEventListener('change',()=>renderTop(filtered()));
  document.querySelectorAll('button.dl[data-dl]').forEach(b=>b.addEventListener('click',()=>download(b.dataset.dl,b.dataset.name)));
  document.querySelectorAll('button.dl[data-csv]').forEach(b=>b.addEventListener('click',()=>downloadCSV(b.dataset.csv,b.dataset.name)));
  document.querySelectorAll('#modal [data-close]').forEach(b=>b.addEventListener('click',closeModal));
  document.addEventListener('keydown',e=>{ if(e.key==='Escape') closeModal(); });
  if(window.matchMedia) window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change',renderAll);
  renderAll();
}
(function boot(){
  const emb=document.getElementById('data');
  if(emb && emb.textContent.trim().length>2){ bindData(JSON.parse(emb.textContent), JSON.parse(document.getElementById('net-data').textContent), JSON.parse(document.getElementById('ovl-data').textContent)); init(); return; }
  const note=document.getElementById('hero-note'); if(note) note.textContent='Loading contribution data\u2026';
  let loaded=0, failed=false;
  DATA_SCRIPTS.forEach(src=>{ const s=document.createElement('script'); s.src=src; s.async=false;
    s.onload=()=>{ if(++loaded===DATA_SCRIPTS.length && !failed){ try{ bindData(window.__MM_DATA__, window.__MM_NET__, window.__MM_OVL__); init(); }catch(e){ if(note) note.textContent='The contribution data loaded but could not be read ('+e.message+').'; } } };
    s.onerror=()=>{ if(failed) return; failed=true; if(note) note.textContent='The contribution data could not be loaded from '+src+'.'; };
    document.head.appendChild(s); });
})();

  })();
})();
