/** 
 * @file FFN 請假系統核心功能
 * @author Chris Chu
 */


/** @namespace FFN  */
self.FFN = (function(){
    var ffn = {  // self.FFN 
            components: {},
            settings: {},
            data: {}
        },  
        /** @access private */
        app;

/*
==================== MEMBER(PRIVATE) FUNCTIONS ====================
*/

    /** 
     * @function _extend
     * @memberof FFN
     * @access private
     * @param {Backbone.Model} parent
     * @param {Function} prototype of child
     * @param {Object} static properties
     * @return {Backbone.Model}
     */
    function _extend(parent, child_proto, child_static) {
        child_proto.defaults = _.extend(parent.prototype.defaults, child_proto.defaults);
        return parent.extend(child_proto, child_static);
    }

/*
==================== PRIVATE CLASSES ====================
*/

    /** 
     * @class FFN.App
     * @memberof FFN
     * @constructor 
     */
    function App() {
        /** @access private */
        var private = true;

        /** @access protected */
        this._protected = {};

        /** @access public */
        this.public = function trytry() {}
    }


/*
==================== PUBLIC CLASSES ====================
*/

    /**
     * @class ApplicationForm
     * @memberof FFN
     * @desc Backbone model, 基本申請表單
     */
    ffn.ApplicationForm = Backbone.Model.extend({  //申請表
        defaults: {
          id : '',
          flow_id: 0,  //每種表單有自己的流程
          status : 0   //表單在流程中的狀態
        },
        delete : function(){ console.log('deleted'); }
    });

/*
==================== PUBLIC FUNCTIONS ====================
*/

    /**
     * @function getApp
     * @return {FFN.App} instance of app 
     * @memberof FFN
     * @description 取得整個App object, 可關閉程式...etc
     */
    ffn.getApp = function getApp() {
        //TODO: singleton pattern 取得整個app
        if (!app) {
          app = new App();
        }
        return app;
    };

    /**
     * This callback type is called `requestCallback` and is displayed as a global symbol.
     *
     * @callback customClass
     * @param {object} data
     * @param {DOMElement} container - 用來顯示新增class的容器
     * @return {object} refs to connect with your new class.
     */

    /**
     * @function addClass
     * @param {string} name
     * @param {customClass} custom_class - 自定義的Class
     * @param {(string|string[])} require_data - 會在初始化時提供所需資料, 並在該類型資料更新時觸發callback
     * @param {string} [type='custom'] - 新增的Class類型, 目前支援custom | react
     * @return {object} FFN
     * @memberof FFN
     * @description 註冊一個新的FFN Class
     */
    ffn.addClass = function addClass(name, custom_class, require_data, type) {
        var _type = ('string' === typeof(type)) ? type.toLowerCase() : 'custom',
            _com  = ffn.components || {};

        if (name && custom_class && !_com[name]) { 
            _com[name] = {
                class : custom_class,
                type  : _type
            }
            return this;
        } else {
            throw Error('FFN.addClass: 無效的命名或建構式, 或是名稱重複');
        }
    };

    ffn.addReactClass = function addReactClass(name, react_class, require_data) {
        debugger;
        return addClass.apply(this, name, react_class, require_data, 'react');
    }

    ffn.addData = function addData(name, callback){
        //callback object內可optional 支援 filter, sort
        //callback object內可支援query(id|all|filter,sort) / sync(從server拉資料) / clear(id|all) / save(存到local, append | replace模式)
    }

    return ffn;
}());

        
/**
 * 設定檔
 */
FFN.Setting = Backbone.Model.extend({ 
  defaults: {
    name : '',
    on   : false  //每個設定假設都有開關, 之後依照各自需求加入value
  },
  toggle : function() {  //開關切換, 之後存到local
    this.save({
      on : !this.get('on')
    });
  }
});


//單位假單


//使用者資料

//Collections


!function config_require(){
    require.config({
        baseUrl : './', 
        paths : {
          "jquery" : "libs/jquery-2.1.3.min",
        },
        shim : {
          "underscore" : { expors : '_' },
          "backbone"   : { deps : ['underscore', 'jquery'], expors : 'Backbone' }
        }

    });
}();

/** 
  Page JS
**/
!function(){

  var CONFIG = {
    //每個功能各自需要的設定檔
    calendar    : { id: 'calendar',     show: true },
    announcement: { id: 'announcement', show: true },
    tool        : { id: 'tool',         show: true }


  };

  self.FFN.CONFIG = CONFIG;


}();

    