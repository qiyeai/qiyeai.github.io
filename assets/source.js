// 记录首次进站来源（与首页共用 sessionStorage 的 lead_src）
// 访客从文章页进站、再到首页提交咨询时，线索里仍能看到最初的搜索来源和落地页
(function(){
try {
if (sessionStorage.getItem("lead_src")) return;
var q = new URLSearchParams(location.search);
sessionStorage.setItem("lead_src", JSON.stringify({
referrer: document.referrer || "直接访问",
utm: ["utm_source","utm_medium","utm_campaign","utm_term"].map(function(k){ return q.get(k);}).filter(Boolean).join(" / ") || "无",
landing: location.href
}));
} catch(e){}
})();
