myApp.controller('lobbyController', 
  function($scope) {


var rowNum = 0;
function addRow(frm) {

rowNum ++;

var row = '<span class="glyphicon glyphicon-comment"</span><input type="text" name="name[]" value="'+frm.add_name.value+'"></p>';
jQuery('#itemRows').append(row);
frm.add_name.value = '';

}



