
var lineChartData = {
    //X��������
    labels : ["Mon","Thus","Wed","Thur","Fri","Sat","Sun"],
    datasets : [
        {
            //ͳ�Ʊ�ı�����ɫ
            fillColor : "rgba(0,0,255,0.5)",
            //ͳ�Ʊ�����ɫ
            strokeColor : "#f60",
            //�����ɫ
            pointColor : "#000;",
            //��߿����ɫ
            pointStrokeColor : "red",
            //��괥��ʱ�����ɫ
            pointHighlightFill : "red",
            //��괥��ʱ��߿����ɫ
            pointHighlightStroke : "#000",
            //Y��������
            data : [300,555,655,714,899,905,1000]
        },{
            fillColor : "rgba(0,255,0,0.5)",
            strokeColor : "rgba(92, 184, 92, 1)",
            pointColor : "rgba(23, 126, 23, 1)",
            pointStrokeColor : "#fff",
            pointHighlightFill : "#fff",
            pointHighlightStroke : "rgba(151,187,205,1)",
            data : [314,455,755,814,999,905,1000]
        }
        ,{
            fillColor : "rgba(255,0,0,0.5)",
            strokeColor : "blue",
            pointColor : "rgba(23, 126, 23, 1)",
            pointStrokeColor : "#fff",
            pointHighlightFill : "#fff",
            pointHighlightStroke : "rgba(151,187,205,1)",
            data : [114,255,455,414,599,605,500]
        }
    ]

}

window.onload = function(){
    var ctx = document.getElementById("canvas").getContext("2d");
    window.myLine = new Chart(ctx).Line(lineChartData, {
        responsive: true
    });
}