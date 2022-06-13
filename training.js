let sout,i,j;
sout="<table border='4' width='300' cellspacing='5' cellpadding='15'>";
for(i=1; i<=9; i++) {
    sout = sout + '<tr>';
    for(j=1; j<=8; j++) {
        sout = sout + '<td>' + i + '*'+ j + '=' + i*j + '</td>';
    }
    sout= sout + '</tr>';
}
sout = sout + '<table>';
document.write(sout);