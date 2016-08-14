var request = require("request"),
    async = require("async"),
    moment = require("moment"),
    util = require("util"),
    _ = require("lodash"),

    config = require(__dirname + "/../config.js").config,
    db = require(__dirname + "/../lib/db.js").db;

var Base = function(table) {
    this.table = table;

    this.find = function(x, cb) {
        var _this = this,
            data = {
                table: _this.table,
                where: x.where,
                columns: x.columns,
                limit: 1
            };

        db.get(data, cb);
    };

    this.findAll = function(x, cb) {
        var _this = this,
            data = {
                table: _this.table,
                where: x.where,
                columns: x.columns,
            };

        db.get(data, cb);
    };

    this.create = function(x, cb) {
        var _this = this,
            data = {
                table: _this.table,
                data: x
            };

        db.insert(data, cb);
    };

    this.upsert = function(x, cb) {
        var _this = this,
            data = {
                table: _this.table,
                data: x
            };

        db.upsert(data, cb);
    };

    this.update = function(x, cb) {
        var _this = this,
            data = {
                table: _this.table,
                data: x.data,
                where: x.where
            };

        db.update(data, cb);
    };

    this.delete = function(id, cb) {
        var _this = this,
            data = {
                table: _this.table,
                data: {
                    is_active: 0
                },
                where: {
                    id: id
                }
            };

        db.update(data, cb);
    };
};

exports.Base = Base;