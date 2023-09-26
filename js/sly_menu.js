$(function(){
    const $frame = $('#basic');
    const $wrap = $frame.parent();

    $frame.sly({
        horizontal:1,
        itemNav:'basic',
        smart:1,
        activateOn:'click',
        mouseDragging:1,
        touchDragging:1,
        releaseSwing:1,
        startAt:0,   // 숫자값을 지정하면 그 숫자부터 시작됨
        // scrollBy:1,
        // pagesBar:$wrap.find('.pages'),
        activatePageOn:'click',
        speed:300,
        elasticBounds:1,
        dragHandle:1,
        dynamicHandle:1,
        //clickBar:1
    });

});