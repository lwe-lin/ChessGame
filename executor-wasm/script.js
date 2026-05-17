// 選擇要觀察變更的目標節點（通常是父元素）
const targetNode = document.querySelector('body');

// 配置觀察器選項（監聽子節點的變更）
const config = { childList: true, subtree: true };

// 當觀察到變更時執行的回呼函式
const callback = function(mutationsList, observer) {
    for(let mutation of mutationsList) {
        if (mutation.type === 'childList' && mutation.addedNodes.length > 0) {
            // console.log('有新的元素被添加了！', mutation.addedNodes);
            // 這裡可以處理新添加的元素，例如綁定事件
            mutation.addedNodes.forEach(node => {
                if(node.nodeType === Node.ELEMENT_NODE) {
                    if(node.tagName == "CANVAS"){
                        // document.querySelector("canvas").setAttribute('width', '1000');
                        // document.querySelector("canvas").setAttribute('height', '750');
                        // document.querySelector("canvas").style.cssText = "width: 800px; height: 600px;";
                        const canvas = document.querySelector("canvas");
                            window.addEventListener('resize', () => {
                            canvas.setAttribute('width', document.documentElement.clientWidth);
                            canvas.setAttribute('height', document.documentElement.clientHeight);
                            canvas.style.cssText = `width: ${document.documentElement.clientWidth*0.95}px; height: ${document.documentElement.clientHeight*0.95}px;`;
                        });
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
