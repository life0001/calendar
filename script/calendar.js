YUI({
    modules: {
        'trip-calendar': {
            fullpath: 'script/trip-calendar.js',
            type    : 'js',
            requires: ['trip-calendar-css']
        },
        'trip-calendar-css': {
            fullpath: 'css/trip-calendar.css',
            type    : 'css'
        }
    }
}).use('trip-calendar', function(Y) {
    //配置日历
    var oCal = new Y.TripCalendar({
        minDate         : new Date,  //设置最小时间（过去日期不可选）
        triggerNode     : '#J_DepDate, #J_DepDate3', //行程开始日期
        finalTriggerNode:'#J_DepDate2, #J_DepDate4', //行程结束日期
        count            : 1  //日历个数
    });
    //日历事件
    oCal.on('dateclick', function(e) {
        var athis=this.getCurrentNode()._node; //点击获取当前的元素
        $(athis).find('input').val(e.date);     //e.date是选择日期
    });
    $('.startDate').click(function(e){
        e.stopPropagation();
    });
});
