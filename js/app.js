(function () {
  'use strict';

  document.getElementById('year').textContent = new Date().getFullYear();

  var isHome = document.body.classList.contains('page-home');
  var isTopic = document.body.classList.contains('page-topic');

  /* ── Home Page ── */

  if (isHome) {
    renderHome();
  }

  /* ── Topic Page ── */

  if (isTopic) {
    renderTopic();
  }

  /* ==========================================
     HOME
     ========================================== */

  function renderHome() {
    var grid = document.getElementById('topicGrid');
    grid.innerHTML = '';

    TOPICS.forEach(function (t) {
      var a = document.createElement('a');
      a.className = 'topic-card';
      a.href = 'topic.html?id=' + encodeURIComponent(t.id);

      a.innerHTML =
        '<span class="topic-card-icon">' + t.icon + '</span>' +
        '<div class="topic-card-name">' + t.name + '</div>' +
        '<div class="topic-card-summary">' + t.summary + '</div>' +
        '<div class="topic-card-meta">' +
          '<span>📄 ' + t.files.length + ' 张图示</span>' +
        '</div>';

      grid.appendChild(a);
    });
  }

  /* ==========================================
     TOPIC
     ========================================== */

  function renderTopic() {
    var params = new URLSearchParams(window.location.search);
    var id = params.get('id');
    var topic = findTopic(id);

    if (!topic) {
      document.body.innerHTML = '<div style="text-align:center;padding:80px 24px;color:#999;"><h2>板块未找到</h2><p style="margin-top:12px;"><a href="index.html" style="color:#8b5a2b;">返回首页</a></p></div>';
      return;
    }

    document.title = topic.name + ' — 初中语文笔记';
    document.getElementById('pageTitle').textContent = document.title;

    document.getElementById('topicHeaderInfo').textContent = topic.icon + ' ' + topic.name;
    document.getElementById('topicDescription').textContent = topic.summary;

    var container = document.getElementById('topicImages');
    container.innerHTML = '';

    topic.files.forEach(function (file, i) {
      var img = document.createElement('img');
      img.loading = 'lazy';
      img.src = topic.path + '/' + file;
      img.alt = topic.name + ' 图示 ' + (i + 1);
      container.appendChild(img);
    });
  }

  function findTopic(id) {
    for (var i = 0; i < TOPICS.length; i++) {
      if (TOPICS[i].id === id) {
        return TOPICS[i];
      }
    }
    return null;
  }

})();
