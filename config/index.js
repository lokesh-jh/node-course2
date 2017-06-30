var configValues = require("./config");

module.exports = {
    getDbConnectionString : function(){
        return "mongodb://"+configValues.uname+":"+configValues.pwd+"@ds119772.mlab.com:19772/nodetodolist";
    }
};