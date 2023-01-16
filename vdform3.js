
$(function(){
    $('form').submit(function(){
        var val = true;
        $('input[type=file][data-max-size]').each(function(){
            if(typeof this.files[0] !== 'undefined'){
                var max = parseInt($(this).attr('max-size'),10),
                mySize = this.files[0].size;
                val = max > mySize;
                return val;
            }
        });
    return val;
    });
});
