function News(){
  var i=0;rasta=0;
  var o=0;k=0;m=0;
  str = new String();
    for (i=LastPosition; i < MaxValue ; i++){
       rasta=rasta+1;
	}
	document.write('&nbsp; <font color="#003366">Naujienos</font> ');
	if (rasta==0) document.write('</b></font></p><p>&nbsp; Joki� naujien� n�ra.<font face="Georgia, Times New Roman, Times, serif"><b>'); else     document.write('</b></font></p><p>&nbsp; �iuo metu yra ', rasta,' naujien�(-a).<br>&nbsp; Jeigu norite k� nors atsi�sti, tiesiog paspauskite ant to sulietuvinimo pavadinimo, kur� j�s norite atsisi�sti.<font face="Georgia, Times New Roman, Times, serif"><b>');
  for (i=LastPosition; i < MaxValue ; i++){
			document.write('<p><table width="98%" border="0" cellspacing="0" cellpadding="0" height="3" background="9854.png" align="left">');
			document.write('<tr> ');
			document.write('<td><img src="9642.png" width="183" height="3"></td>');
			document.write('</tr>');
			document.write('</table>');
            document.write('<br>');
            document.write('<table width="100%" border="0" cellspacing="0" cellpadding="0">');
            document.write('<tr> ');
            document.write('<td><font face="Georgia, Times New Roman, Times, serif"><b> &nbsp; <a href="',Failai[i],'">',Suliet[i],'</a></b></font></td>');
            document.write('</tr>');
            document.write('<tr>');
            document.write('<td>&nbsp;</td>');
            document.write('</tr>');
            document.write('<tr> ');
            document.write('<td> <font face="Georgia, Times New Roman, Times, serif" size="-1"><b>&nbsp; ');
            document.write('</b></font><font color="#0099FF" size="-1">Kaina:</font><font color="#006699" size="-1">');
			if (Money[i]=='-') document.write('Nemokama'); else document.write(Money[i]);
			document.write('</font></td>');
            document.write('</tr>');
            document.write('<tr> ');
            document.write('<td><font face="Georgia, Times New Roman, Times, serif" size="-1"><b>&nbsp; ');
            document.write('</b></font><font color="#0099FF" size="-1">Dydis:</font> <font color="#006699" size="-1">',Dydis[i],'</font></td>');
            document.write('</tr>');
            document.write('<tr> ');
            document.write('<td><font face="Georgia, Times New Roman, Times, serif" size="-1"><b>&nbsp; ');
            document.write('</b></font><font color="#0099FF" size="-1">�vertinimas:</font> ');
            document.write('<font color="#006699" size="-1">',Taskai[i],'</font></td>');
            document.write('</tr>');
            document.write('<tr> ');
            document.write('<td><font face="Georgia, Times New Roman, Times, serif" size="-1"><b>&nbsp; ');
            document.write('</b></font><font color="#0099FF" size="-1">Svetain�:</font> ');
            document.write('<font color="#006699" size="-1">',Page[i],'</font></td>');
            document.write('</tr>');
            document.write('<tr> ');
            document.write('<td>&nbsp;</td>');
            document.write('</tr>');
            document.write('<tr> ');
            document.write('<td> <font face="Times New Roman, Times, serif">', Koment[i],'</font></td>');
            document.write('</tr>');
            document.write('</table>');
		}
  }

