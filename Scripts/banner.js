/* author: Raimis */
/* creation date: 2002.04.11 */

function SDMGrotuvasTrys(){
     document.write('<a href="http://www.polarhome.com/~sdmgrotuvas3">');
	 document.write('<img src="Images/sdmgrotuvas3.gif"');
	 document.write('width="468" height="60" border="0" alt="SDM Grotuvas 3" align="middle"></a>');
}

 
function zPasaulis(){
 	 document.write('<a href="http://www.zpasaulis.lt">');
	 document.write('<img src="Images/zaliasispasaulis.gif"');
	 document.write('width="468" height="60" border="0" alt="�aliasis Pasaulis" align="middle"></a>'); 
 }
 
  function Bitas(){
 	 document.write('<a href="http://www.bitas.visiems.lt">');
	 document.write('<img src="Images/bitas.gif"');
	 document.write('width="468" height="60" border="0" alt="#Bitas - IRC Kanalas" align="middle"></a>'); 
 }

function NushaukJas(){
 	 document.write('<a href="http://www.polarhome.com/~nushaukjas">');
	 document.write('<img src="Images/nushaukjas.gif"');
	 document.write('width="468" height="60" border="0" alt="Nu�auk Jas!" align="middle"></a>'); 
 }

function WertejasANDSDMPX(){
 	 document.write('<a href="http://www.polarhome.com/~wertejas">');
	 document.write('<img src="Images/wertejas.gif"');
	 document.write('width="468" height="60" border="0" alt="Wertejas ir SCMPX Grotuvas" align="middle"></a>'); 
 }

 
// Atrinkimas
var i=0;
 i=Math.random()*10;
 i=Math.round(i);
 if (i==0) zPasaulis();
 if (i==1) Bitas();
 if (i==2) SDMGrotuvasTrys();
 if (i==3) WertejasANDSDMPX();
 if (i==4) NushaukJas();
 if (i>4) Bitas();
