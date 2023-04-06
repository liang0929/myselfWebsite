window.addEventListener('scroll', function() {
    // 取得目標區域的位置和高度
    const targetSection = document.getElementById('target-section');
    const targetSectionTop = targetSection.offsetTop;
    const targetSectionHeight = targetSection.offsetHeight;
  
    // 取得視窗的位置和高度
    const windowHeight = window.innerHeight;
    const windowTop = window.pageYOffset;
  
    // 如果視窗的底部已經超過目標區域的頂部，就觸發加載入動畫的相關動作
    if (windowTop + windowHeight > targetSectionTop) {
      // 加載入動畫的相關動作
    }
  });