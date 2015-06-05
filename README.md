namespace FFN

  addComponent( string name, react-component component,  array data-require, array support-actions )
      example : 
        var component = React.createClass({ 
              render : function() { return (<div>Hello World</div>);}
        });
        FFN.addComponent('Hello', component, []);

  getComponent( string name )
      example : 
        var HelloWorld = FFN.getComponent('Hello'),
            data = FFN.getData({
              component : 'Hello',
              filter    : {  }
            });
        FFN.addComponent('Hello', component, []);

  getData(type, {filter, callback}) - 會return local 資料, callback給server資料


  FFN.action('create:event', { date_start : '2015-04-07', time_start : '10:00:00' })


======
note:
  action - 就是component提供的api, component內部不用透過這方式溝通
  data 的 filter結構

======
需要component: 

  (整頁)30天板大日曆 - CalendarMonthView - Data: 請假, 事件, 日期資訊(節日) -action: show:month-calendar (option: 顯示的開始日, 選定的Datetime, filter)
  (整頁) 7天板大日曆 - CalendarMonthView - Data: 請假, 事件, 日期資訊(節日) -action: show:week-calendar  (option: 顯示的開始日, 選定的Datetime, filter)
  (整頁) 1天板大日曆 - CalendarDayView   - Data: 請假, 事件, 日期資訊(節日) -action: show:day-calendar   (option: 顯示的開始日, 選定的Datetime, filter)
  (整頁)Dashboard - DashBoardView - Data: 請假, 事件, 日期資訊, 公告, 專案, 天氣資訊 -- 這邊有大量的小view, 看能不能做比較reusable
  (整頁)公告列表 - NoticeView - Data: 公告 -action:show-notice (option: 選擇的公告)

  (整頁)搜尋功能
  (整頁)專案列表 - 低優先度

  (浮動)新增事件 - CreateEventView  - action: create:event
  (浮動)新增公告 - CreateNoticeView - action: create:notice
  (浮動)新增假單 - CreateLeaveView  - action: create:leave
  (浮動)新增專案 - CreateProjectView- action: create:project

  (系統)登入
  (系統)上方列
  (系統)左側列

======
需要action: 

======
需要data:
  1. 員工 - filter : group
  2. 假單 - filter : date_start, date_end, user, last_update, status
  3. 公告 - filter : date_start, date_end
  4. 


======
模擬

  - (在月份Calendar View)新增假單 -> action('create:leave', {}) -> 顯示CreateLeaveView, 預設日期為現在 -> ajax顯示成功, 通知Data update 6月假單 -> 判斷當前view有用到此type資料 -> run filter -> currentView.setProps('leave' : [....])