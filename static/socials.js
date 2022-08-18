$(document).ready(function(){
  $("#dicrordicon").hover(function(){
    $("#discordtag").show();
    $("#discordtagclick").show();
  },
  function(){
    $("#discordtag").hide();
    $("#discordtagclick").hide();
  });
  $("#dicrordicon").click(function(){
    var $temp = $("<input>");
    $("body").append($temp);
    $temp.val($("#discordtag").text()).select();
    document.execCommand("copy");
    $temp.remove();
    $("#discordcopied").show().delay(1250).fadeOut();
  });
  $("#tgicon").hover(function(){
    $("#tgtag").show();
    $("#tgtagclick").show();
  },
  function(){
    $("#tgtag").hide();
    $("#tgtagclick").hide();
  }),
  $("#tgicon").click(function(){
    var $temp = $("<input>");
    $("body").append($temp);
    $temp.val($("#tgtag").text()).select();
    document.execCommand("copy");
    $temp.remove();
    $("#tgcopied").show().delay(1250).fadeOut();
  });
  $("#gmailicon").hover(function(){
    $("#gmailtag").show();
    $("#gmailtagclick").show();
  },
  function(){
    $("#gmailtag").hide();
    $("#gmailtagclick").hide();
  }),
  $("#gmailicon").click(function(){
    var $temp = $("<input>");
    $("body").append($temp);
    $temp.val($("#gmailtag").text()).select();
    document.execCommand("copy");
    $temp.remove();
    $("#gmailcopied").show().delay(1250).fadeOut();
  });
});