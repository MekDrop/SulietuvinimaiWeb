function FindWordInDatabase(FindWhat){
  var i=0;rasta=0;
  var o=0;k=0;m=0;
  FindWhat= ConvertToStandart(FindWhat);
  str = new String();
  document.write('<table width="100%" border="0" cellspacing="2" cellpadding="2">');
  rasta=0;
  for (i=0; i < MaxValue ; i++){
    str=Suliet[i];
	str=str.toLowerCase();
	FindWhat=FindWhat.toLowerCase();
	o=str.search(FindWhat);
//	document.write(Failai[i],' ',Suliet[i],' ',Dydis[i],' ',Koment[i],' ');
//    document.write(Suliet[i],' ',o);
    if (o==0){
	  k=str.charAt(0);
	  m=FindWhat.charAt(0);
	  if (k==m) o=1;
	}
    if (o>0){
		rasta=rasta+1;
		if (rasta==1){
		  document.write('<tr>'); 
		  document.write('<td bgcolor="#CC3333" align="center" valign="middle">'); 
		  document.write('<b><font color="#FFFFFF" size="2">Programos Pavadinimas</font></b>'); 
		  document.write('</td>');
		  document.write('<td bgcolor="#CC3333" align="center" valign="middle"><b><font color="#FFFFFF" size="2">Dydis</font></b></td>');
		  document.write('<td bgcolor="#CC3333" align="center" valign="middle"><b><font color="#FFFFFF" size="2">Komentarai</font></b></td>');
		  document.write('</tr>');
		}
	    document.write('<tr valign="top">'); 
    	document.write('<td width="30%" align="left"><a href="',Failai[i],'" class="black" onMouseOut="MX_Text(nsTXT)" onMouseOver="MX_Text(\'Paspausk �ia, kad atsisi�stum ',Suliet[i],' sulietuvinim�.\')">',Suliet[i],'</td>');
	    document.write('<td width="15%" align="center">',Dydis[i],'</td>');
    	document.write('<td width="55%" align="left">',Koment[i],'</td>');
	    document.write('</tr>');
	}	   
  }
  if (rasta==0){
  	    document.write('<tr>'); 
    	document.write('<td width="41%" colspan="3">Deja, paie�ka buvo nes�kminga.</td>');
	    document.write('</tr>');
  } 
  document.write('</table>');
}
