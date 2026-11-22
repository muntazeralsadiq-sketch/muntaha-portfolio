/**
 * أرشيف المحفوظات والشعر للبطلة منتهى محمد جاسم
 * محرك الفلترة، البحث الفوري، والتفاعل والمشاركة
 */

document.addEventListener('DOMContentLoaded', () => {
  // DOM Elements
  const memoryGrid = document.getElementById('memory-grid');
  const searchInput = document.getElementById('memory-search-input');
  const searchClearBtn = document.getElementById('search-clear-btn');
  const tabButtons = document.querySelectorAll('.memory-tab-btn');
  const currentCountEl = document.getElementById('current-count');
  const totalCountEl = document.getElementById('total-count');
  const currentCategoryLabelEl = document.getElementById('current-category-label');
  const toastBox = document.getElementById('toast-notification');
  const toastMessage = document.getElementById('toast-message');

  // Theme elements
  const themeToggleBtn = document.getElementById('theme-toggle-btn');
  const mobileThemeToggleBtn = document.getElementById('mobile-theme-toggle-btn');
  const themeIcon = document.getElementById('theme-icon');

  // Mobile menu elements
  const mobileMenuToggle = document.getElementById('mobile-menu-toggle');
  const mobileDrawer = document.getElementById('mobile-drawer');

  // Scroll to top
  const scrollTopBtn = document.getElementById('scroll-top-btn');

  // Theme & Language Helpers
  function isEnglish() {
    return (typeof getCurrentLanguage === 'function' ? getCurrentLanguage() : (localStorage.getItem('muntaha_language') || 'ar')) === 'en';
  }

  // State
  let activeCategory = 'all';
  let searchQuery = '';
  const allPoems = window.MEMORY_POEMS || [];

  // Initialize total count
  if (totalCountEl) totalCountEl.textContent = allPoems.length;

  // React to language toggle dynamically
  window.addEventListener('muntahaLanguageChanged', () => {
    renderPoems();
    updateTabCounts();
  });

  // Initialize Category Counts on Tab Pills
  function updateTabCounts() {
    tabButtons.forEach(btn => {
      const cat = btn.getAttribute('data-cat');
      const countPill = btn.querySelector('.tab-count-pill');
      if (countPill) {
        if (cat === 'all') {
          countPill.textContent = allPoems.length;
        } else {
          const count = allPoems.filter(p => p.category === cat).length;
          countPill.textContent = count;
        }
      }
    });
  }

  // Toast Helper
  function showToast(msg) {
    if (!toastBox || !toastMessage) return;
    toastMessage.textContent = msg;
    toastBox.classList.add('visible');
    setTimeout(() => {
      toastBox.classList.remove('visible');
    }, 3200);
  }

  // Format Poem Verses into Clean HTML Lines
  function formatVersesHTML(text) {
    if (!text) return '';
    const rawLines = text.split('\n').map(l => l.trim()).filter(Boolean);
    
    return rawLines.map(line => {
      // Check if line has divider like '...', '***', '/', or '-'
      let formatted = line;
      if (line.includes('...')) {
        const parts = line.split('...');
        if (parts.length === 2) {
          formatted = `<span>${parts[0].trim()}</span><span class="shatr-divider">...</span><span>${parts[1].trim()}</span>`;
        }
      } else if (line.includes('***')) {
        const parts = line.split('***');
        if (parts.length === 2) {
          formatted = `<span>${parts[0].trim()}</span><span class="shatr-divider">***</span><span>${parts[1].trim()}</span>`;
        }
      } else if (line.includes(' - ') && !line.startsWith('1-') && !line.startsWith('2-')) {
        const parts = line.split(' - ');
        if (parts.length === 2) {
          formatted = `<span>${parts[0].trim()}</span><span class="shatr-divider">⬥</span><span>${parts[1].trim()}</span>`;
        }
      } else if (line.includes(' / ')) {
        const parts = line.split(' / ');
        if (parts.length === 2) {
          formatted = `<span>${parts[0].trim()}</span><span class="shatr-divider">/</span><span>${parts[1].trim()}</span>`;
        }
      }
      return `<div class="poem-verse-line">${formatted}</div>`;
    }).join('');
  }

  // Render Poems
  function renderPoems() {
    if (!memoryGrid) return;

    // Filter by category
    let filtered = allPoems;
    if (activeCategory !== 'all') {
      filtered = filtered.filter(p => p.category === activeCategory);
    }

    // Filter by search query
    if (searchQuery.trim() !== '') {
      const q = searchQuery.trim().toLowerCase();
      filtered = filtered.filter(p => {
        const titleMatch = (p.title || '').toLowerCase().includes(q);
        const poetMatch = (p.poet || '').toLowerCase().includes(q);
        const occasionMatch = (p.occasion || '').toLowerCase().includes(q);
        const textMatch = (p.text || '').toLowerCase().includes(q);
        return titleMatch || poetMatch || occasionMatch || textMatch;
      });
    }

    // Update Counter
    if (currentCountEl) currentCountEl.textContent = filtered.length;

    const en = isEnglish();

    // Update Category Label in status bar
    if (currentCategoryLabelEl) {
      const activeBtn = document.querySelector(`.memory-tab-btn[data-cat="${activeCategory}"]`);
      if (activeBtn) {
        const textSpan = activeBtn.querySelector('span:nth-child(2)');
        if (textSpan) currentCategoryLabelEl.textContent = textSpan.textContent.trim();
      }
    }

    // Empty state
    if (filtered.length === 0) {
      memoryGrid.innerHTML = `
        <div class="memory-empty-state">
          <div style="font-size: 3rem; margin-bottom: 0.5rem;">🔍</div>
          <h3>${en ? 'No results found matching your search' : 'لم يتم العثور على نتائج تطابق بحثك'}</h3>
          <p style="color: var(--text-secondary); max-width: 500px; margin: 0 auto 1.5rem;">
            ${en ? 'Try searching with another keyword or pick a different category from above.' : 'جرّب البحث بكلمة أخرى، أو اختيار تصنيف مختلف من القائمة أعلاه.'}
          </p>
          <button id="reset-filter-btn" class="poem-toggle-expand-btn">
            ${en ? 'Reset Filters' : 'إعادة تعيين الفلاتر'}
          </button>
        </div>
      `;
      const resetBtn = document.getElementById('reset-filter-btn');
      if (resetBtn) {
        resetBtn.addEventListener('click', () => {
          activeCategory = 'all';
          searchQuery = '';
          if (searchInput) searchInput.value = '';
          if (searchClearBtn) searchClearBtn.classList.remove('visible');
          tabButtons.forEach(btn => {
            btn.classList.toggle('active', btn.getAttribute('data-cat') === 'all');
          });
          renderPoems();
        });
      }
      return;
    }

    // Render Cards
    memoryGrid.innerHTML = filtered.map(poem => {
      const linesCount = poem.versesCount || (poem.text ? poem.text.split('\n').length : 1);
      const isLongPoem = linesCount > 6 || (poem.text && poem.text.length > 350);

      const shareLabel = en ? 'Share' : 'مشاركة';
      const copyLabel = en ? 'Copy' : 'نسخ';
      const expandLabel = en ? `View full poem (${linesCount} lines) ↓` : `عرض الأبيات كاملة (${linesCount} بيتاً) ↓`;
      const verseCounterText = en ? `Verses / Lines: <strong>${linesCount}</strong>` : `عدد الأبيات / الأسطر: <strong>${linesCount}</strong>`;
      const honoreeTagText = en ? 'Memorized by Hero Muntaha' : 'حفظ البطلة منتهى';
      const narrativeHeading = en ? '📖 Background & Story:' : '📖 الأثر والقصة:';

      return `
        <article class="poem-card" id="${poem.id}">
          <div class="poem-card-top">
            <span class="poem-cat-pill">${poem.categoryLabel || (en ? 'Classical Poem' : 'شعر فصيح')}</span>
            <div class="poem-actions-group">
              <button class="poem-action-btn share-poem-btn" data-id="${poem.id}" title="${en ? 'Share poem' : 'مشاركة القصيدة'}">
                <span>📤</span>
                <span>${shareLabel}</span>
              </button>
              <button class="poem-action-btn copy-poem-btn" data-id="${poem.id}" title="${en ? 'Copy poem text' : 'نسخ نص القصيدة'}">
                <span>📋</span>
                <span>${copyLabel}</span>
              </button>
            </div>
          </div>

          <h3 class="poem-title">${poem.title}</h3>

          <div class="poem-meta-row">
            <div class="poem-poet">
              <span>✒️</span>
              <span>${poem.poet}</span>
            </div>
            ${poem.occasion ? `
              <div class="poem-occasion">
                <span>📌</span>
                <span>${poem.occasion}</span>
              </div>
            ` : ''}
          </div>

          ${poem.narrative ? `
            <div class="poem-narrative-box">
              <strong>${narrativeHeading}</strong> ${poem.narrative}
            </div>
          ` : ''}

          <div class="poem-verses-box ${isLongPoem ? 'is-long' : 'expanded'}" id="box-${poem.id}">
            ${formatVersesHTML(poem.text)}
            ${isLongPoem ? `
              <div class="poem-expand-fade">
                <button class="poem-toggle-expand-btn" data-target="box-${poem.id}">
                  ${expandLabel}
                </button>
              </div>
            ` : ''}
          </div>

          <div class="poem-card-bottom">
            <div class="poem-verse-counter">
              <span>📜</span>
              <span>${verseCounterText}</span>
            </div>
            <span style="color: var(--pink-light); font-size: 0.78rem;">${honoreeTagText}</span>
          </div>
        </article>
      `;
    }).join('');

    // Attach Event Handlers for Buttons
    attachCardEvents();
  }

  // Attach Card Action Events
  function attachCardEvents() {
    // 1. Share Poem Handler
    document.querySelectorAll('.share-poem-btn').forEach(btn => {
      btn.addEventListener('click', async (e) => {
        const poemId = btn.getAttribute('data-id');
        const poem = allPoems.find(p => p.id === poemId);
        if (!poem) return;

        const shareTitle = `${poem.title} - إلقاء وحفظ البطلة منتهى محمد جاسم`;
        const shareText = `«${poem.title}»\n${poem.poet}\n\n${poem.text}\n\nمن أرشيف محفوظات البطلة المذهلة منتهى محمد جاسم:\n${window.location.href}`;

        if (navigator.share) {
          try {
            await navigator.share({
              title: shareTitle,
              text: shareText,
              url: window.location.href
            });
            showToast('تمت مشاركة القصيدة بنجاح ✨');
          } catch (err) {
            if (err.name !== 'AbortError') {
              copyToClipboard(shareText, 'تم نسخ القصيدة ورابطها للحافظة بنجاح ✨');
            }
          }
        } else {
          copyToClipboard(shareText, 'تم نسخ القصيدة ورابطها للحافظة بنجاح ✨');
        }
      });
    });

    // 2. Copy Poem Handler
    document.querySelectorAll('.copy-poem-btn').forEach(btn => {
      btn.addEventListener('click', () => {
        const poemId = btn.getAttribute('data-id');
        const poem = allPoems.find(p => p.id === poemId);
        if (!poem) return;

        const textToCopy = `«${poem.title}»\nالقائل: ${poem.poet}\nالمناسبة: ${poem.occasion || ''}\n\n${poem.text}\n\n— من أرشيف محفوظات البطلة منتهى محمد جاسم`;
        copyToClipboard(textToCopy, 'تم نسخ نص القصيدة كاملاً للحافظة 📋');
      });
    });

    // 3. Expand / Collapse Handler
    document.querySelectorAll('.poem-toggle-expand-btn').forEach(btn => {
      btn.addEventListener('click', () => {
        const targetId = btn.getAttribute('data-target');
        const box = document.getElementById(targetId);
        if (box) {
          box.classList.toggle('expanded');
          const en = isEnglish();
          if (box.classList.contains('expanded')) {
            btn.textContent = en ? 'Show less ↑' : 'طي الأبيات ↑';
          } else {
            btn.textContent = en ? 'View full poem ↓' : 'عرض الأبيات كاملة ↓';
          }
        }
      });
    });
  }

  // Copy to Clipboard Fallback
  function copyToClipboard(text, successMessage) {
    if (navigator.clipboard && navigator.clipboard.writeText) {
      navigator.clipboard.writeText(text).then(() => {
        showToast(successMessage);
      }).catch(() => {
        fallbackCopy(text, successMessage);
      });
    } else {
      fallbackCopy(text, successMessage);
    }
  }

  function fallbackCopy(text, successMessage) {
    const textarea = document.createElement('textarea');
    textarea.value = text;
    textarea.style.position = 'fixed';
    textarea.style.opacity = '0';
    document.body.appendChild(textarea);
    textarea.select();
    try {
      document.execCommand('copy');
      showToast(successMessage);
    } catch (e) {
      showToast(isEnglish() ? 'Automatic copy unavailable' : 'تعذر النسخ التلقائي');
    }
    document.body.removeChild(textarea);
  }

  // Tab Filter Buttons
  tabButtons.forEach(btn => {
    btn.addEventListener('click', () => {
      tabButtons.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      activeCategory = btn.getAttribute('data-cat');
      
      if (currentCategoryLabelEl) {
        currentCategoryLabelEl.textContent = btn.innerText.replace(/[0-9]/g, '').trim();
      }
      renderPoems();
    });
  });

  // Search Input Handler
  if (searchInput) {
    searchInput.addEventListener('input', (e) => {
      searchQuery = e.target.value;
      if (searchClearBtn) {
        searchClearBtn.classList.toggle('visible', searchQuery.length > 0);
      }
      renderPoems();
    });
  }

  if (searchClearBtn) {
    searchClearBtn.addEventListener('click', () => {
      if (searchInput) {
        searchInput.value = '';
        searchInput.focus();
      }
      searchQuery = '';
      searchClearBtn.classList.remove('visible');
      renderPoems();
    });
  }

  // Mobile Drawer Toggle
  if (mobileMenuToggle && mobileDrawer) {
    mobileMenuToggle.addEventListener('click', (e) => {
      e.stopPropagation();
      mobileDrawer.classList.toggle('open');
    });

    const mobileDrawerClose = document.getElementById('mobile-drawer-close');
    if (mobileDrawerClose) {
      mobileDrawerClose.addEventListener('click', (e) => {
        e.stopPropagation();
        mobileDrawer.classList.remove('open');
      });
    }

    document.querySelectorAll('.mobile-drawer .nav-link').forEach(link => {
      link.addEventListener('click', () => {
        mobileDrawer.classList.remove('open');
      });
    });

    const mainNavbar = document.getElementById('main-navbar');
    document.addEventListener('click', (e) => {
      if (mainNavbar && !mainNavbar.contains(e.target)) {
        mobileDrawer.classList.remove('open');
      }
    });
  }

  // Scroll to top
  if (scrollTopBtn) {
    scrollTopBtn.addEventListener('click', () => {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
  }

  // Initial Boot
  updateTabCounts();
  renderPoems();
});

