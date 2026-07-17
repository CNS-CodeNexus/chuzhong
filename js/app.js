(function () {
  'use strict';

  const data = [
    {
      id: 'biyu',
      icon: '🎯',
      name: '比喻',
      summary: '比喻是一种常用的修辞手法，用跟甲事物有相似之点的乙事物来描写或说明甲事物。比喻由本体、喻体和比喻词三部分组成。恰当运用比喻可使语言生动形象、化抽象为具体。',
      path: 'jiao/比喻',
      files: ['1.png', '2.png', '3.png', '4.png', '5.png']
    }
  ];

  /* ── Render ── */

  function render() {
    renderNav();
    renderOverview();
    renderTopics();
    renderYear();
  }

  function renderNav() {
    const list = document.getElementById('navList');
    list.innerHTML = '<li><a class="nav-link" href="#overview">📋 概览</a></li>';

    data.forEach(function (topic) {
      const li = document.createElement('li');
      const a = document.createElement('a');
      a.className = 'nav-link';
      a.href = '#' + topic.id;
      a.textContent = topic.icon + ' ' + topic.name;
      li.appendChild(a);
      list.appendChild(li);
    });

    setActiveNav();
  }

  function setActiveNav() {
    const links = document.querySelectorAll('.nav-link');
    const observer = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          links.forEach(function (l) { l.classList.remove('active'); });
          const id = entry.target.id;
          document.querySelectorAll('.nav-link').forEach(function (l) {
            if (l.getAttribute('href') === '#' + id) {
              l.classList.add('active');
            }
          });
        }
      });
    }, { rootMargin: '-20% 0px -70% 0px' });

    document.querySelectorAll('.topic').forEach(function (el) {
      observer.observe(el);
    });
  }

  function renderOverview() {
    var totalTopics = data.length;
    var totalImages = data.reduce(function (acc, t) { return acc + t.files.length; }, 0);
    document.getElementById('totalTopics').textContent = totalTopics;
    document.getElementById('totalImages').textContent = totalImages;

    var container = document.getElementById('overviewStats');
    container.innerHTML = '';

    data.forEach(function (topic) {
      var tag = document.createElement('span');
      tag.className = 'stat-tag';
      tag.textContent = topic.icon + ' ' + topic.name + '（' + topic.files.length + ' 图）';
      container.appendChild(tag);
    });
  }

  function renderTopics() {
    var wrapper = document.getElementById('topics');
    wrapper.innerHTML = '';

    data.forEach(function (topic) {
      var section = document.createElement('section');
      section.className = 'topic';
      section.id = topic.id;

      /* header */
      var header = document.createElement('div');
      header.className = 'topic-header';
      header.innerHTML =
        '<div class="topic-header-left">' +
          '<span class="topic-icon">' + topic.icon + '</span>' +
          '<h2 class="topic-name">' + topic.name + '</h2>' +
        '</div>' +
        '<span class="topic-toggle">▼</span>';
      header.addEventListener('click', function () {
        section.classList.toggle('collapsed');
      });

      /* summary */
      var summaryDiv = document.createElement('div');
      summaryDiv.className = 'topic-summary';
      summaryDiv.textContent = topic.summary;

      /* body */
      var body = document.createElement('div');
      body.className = 'topic-body';

      var grid = document.createElement('div');
      grid.className = 'image-grid';

      topic.files.forEach(function (file, i) {
        var src = topic.path + '/' + file;
        var card = document.createElement('div');
        card.className = 'image-card';
        card.setAttribute('data-src', src);
        card.setAttribute('data-index', i + 1);
        card.setAttribute('data-topic', topic.name);

        var img = document.createElement('img');
        img.loading = 'lazy';
        img.src = src;
        img.alt = topic.name + ' 图示 ' + (i + 1);

        var caption = document.createElement('div');
        caption.className = 'image-card-caption';
        caption.innerHTML =
          '<span class="image-card-index">' + (i + 1) + '</span>' +
          '<span>' + topic.name + ' · 图 ' + (i + 1) + '</span>';

        card.appendChild(img);
        card.appendChild(caption);
        card.addEventListener('click', function () {
          openModal(src, topic.name + ' · 第 ' + (i + 1) + ' 张');
        });

        grid.appendChild(card);
      });

      body.appendChild(grid);
      section.appendChild(header);
      section.appendChild(summaryDiv);
      section.appendChild(body);
      wrapper.appendChild(section);
    });
  }

  function renderYear() {
    document.getElementById('year').textContent = new Date().getFullYear();
  }

  /* ── Modal ── */

  var modal = document.getElementById('modal');
  var modalImage = document.getElementById('modalImage');
  var modalInfo = document.getElementById('modalInfo');
  var modalClose = document.getElementById('modalClose');
  var modalOverlay = document.getElementById('modalOverlay');

  function openModal(src, info) {
    modalImage.src = src;
    modalImage.alt = info;
    modalInfo.textContent = info;
    modal.classList.add('open');
    document.body.style.overflow = 'hidden';
  }

  function closeModal() {
    modal.classList.remove('open');
    document.body.style.overflow = '';
  }

  modalClose.addEventListener('click', closeModal);
  modalOverlay.addEventListener('click', closeModal);

  document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape' && modal.classList.contains('open')) {
      closeModal();
    }
  });

  /* ── Init ── */

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', render);
  } else {
    render();
  }

})();
