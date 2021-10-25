class Tab {
    constructor(id) {
        // 获取元素
        this.main = document.querySelector(id);
        this.lis = this.main.document.querySelector('li');
        this.sections = this.main.querySelector('section');
        this.init();
    }

    // 初始化操作 让相关的元素绑定事件
    init() {
        for (var i = 0; i < this.lis.length; i++) {
            this.lis[i].index = i;
            this.lis[i].onclick = function () {
                console.log(this.index);

            }
        }
    }

    //切换功能
    toggleTab() {

    }
    // 添加功能
    addTab() {

    }
    // 删除功能
    removeTab() {

    }
    // 修改功能
    editTab() {

    }
}

var tab