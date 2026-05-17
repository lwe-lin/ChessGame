// 選擇要觀察變更的目標節點（通常是父元素）
const targetNode = document.querySelector('body');

// 配置觀察器選項（監聽子節點的變更）
const config = { childList: true, subtree: true };

// 當觀察到變更時執行的回呼函式
const callback = function (mutationsList, observer) {
    for (let mutation of mutationsList) {
        if (mutation.type === 'childList' && mutation.addedNodes.length > 0) {
            // console.log('有新的元素被添加了！', mutation.addedNodes);
            // 這裡可以處理新添加的元素，例如綁定事件
            mutation.addedNodes.forEach(node => {
                if (node.nodeType === Node.ELEMENT_NODE) {
                    if (node.tagName == "CANVAS") {
                        function resizeFyroxCanvas() {
                            const canvas = document.querySelector('canvas');
                            if (!canvas) return;

                            // 1. 取得網頁外層真正可以顯示的空間（完全不含捲軸）
                            const width = window.innerWidth;
                            const height = window.innerHeight;

                            // 2. 強制設定 CSS 的顯示大小為滿版
                            canvas.style.width = width + 'px';
                            canvas.style.height = height + 'px';

                            // 3. 關鍵：考量裝置像素比，正確修正 HTML 屬性（內部渲染解析度）
                            const dpr = window.devicePixelRatio || 1;
                            canvas.width = width * dpr;
                            canvas.height = height * dpr;

                            // 4. 通知 Fyrox 內部的 Winit 引擎，解析度已經改變，請重新計算畫面
                            window.dispatchEvent(new Event('resize'));
                        }

                        // 監聽您最初詢問的視窗大小變化事件
                        window.addEventListener('resize', resizeFyroxCanvas);

                        // 由於 WASM 初始化需要時間，在載入後延遲一下再確保執行一次
                        setTimeout(resizeFyroxCanvas, 5000);
                    }
                }
            });
        }
    }
};

// 建立一個連結到回呼函式的觀察器執行個體
const observer = new MutationObserver(callback);

// 開始觀察目標節點
observer.observe(targetNode, config);

// 之後，如果停止觀察：
// observer.disconnect();
