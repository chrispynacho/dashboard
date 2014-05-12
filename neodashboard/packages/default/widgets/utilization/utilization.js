widget = {
    //runs when we receive data from the job
  onData: function(el, data) {
    data.utilization = 60
    $('.content', el).css({ width: data.utilization + '%' });
  }
};
