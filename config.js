/**
 * Domino 知識資料導出工具 — Landing Page Config
 *
 * 統一設定聯絡 email / 信件主旨。
 * 修改下方 SITE_CONFIG，三版頁面 (v1 / v2 / v3) 會同步生效。
 */
window.SITE_CONFIG = {
  contactEmail: 'support@domino.com.tw',
  emailSubject: 'Domino 知識資料導出工具 - 諮詢',
  emailBody: ''   // 可選；留空字串代表不帶 body
};

(function () {
  function applyContact() {
    var cfg = window.SITE_CONFIG || {};
    if (!cfg.contactEmail) return;

    var params = [];
    if (cfg.emailSubject) params.push('subject=' + encodeURIComponent(cfg.emailSubject));
    if (cfg.emailBody)    params.push('body=' + encodeURIComponent(cfg.emailBody));
    var href = 'mailto:' + cfg.contactEmail + (params.length ? '?' + params.join('&') : '');

    document.querySelectorAll('a[data-mailto]').forEach(function (a) {
      a.href = href;
    });
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', applyContact);
  } else {
    applyContact();
  }
})();
