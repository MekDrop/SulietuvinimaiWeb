/* author: Raimondas */
/* creation date: 2002.04.12 */
/* title: duomenu baze*/

//Duomenu baze
var MaxValue=27;
var LastPosition=26;
Suliet = new Array(MaxValue); 
Failai = new Array(MaxValue);
Dydis = new Array(MaxValue);
Koment = new Array(MaxValue);
Taskai = new Array(MaxValue);
Page = new Array(MaxValue);
Money = new Array(MaxValue);

//Reikalingos dalys
function AddToDatabase(Vieta, Pavadinimas, URL, FailoDydis, Ivertinimas, OfPsl, Kaina, Komentaras){
 Suliet[Vieta] = Pavadinimas;
 Failai[Vieta] = URL;
 Dydis[Vieta] = FailoDydis;
 Taskai[Vieta] = Ivertinimas;
 Page[Vieta] = OfPsl;
 Money[Vieta] = Kaina;
 Koment[Vieta] = Komentaras;
 }

//Pridedami elementai i duomenu baze
 AddToDatabase(0,"Grand Prix 3","Downloads/gp3liet1.exe","95,2Kb","3","-","-","Sulietuvina Grand Prix 3 Quick Race skyri�.");
 AddToDatabase(1,"Windows LT Games","Downloads/ltgames.exe","81,5Kb","5","-","-","Sulietuvina Solitaire ir Mimesweeper �aidim� vartotojo s�sajas.");
 AddToDatabase(2,"Mirc","Downloads/mirc.Lit.zip","0,646Kb","2","-","-","Sulietuvina Mirc Join ir Quit komandas.");
 AddToDatabase(3,"Outlook Express 5.5","Downloads/outlook.zip","246Kb","4","-","-","Sulietuvina Microsoft Outlook 5.5 programos vartotojo s�saj�. Tinka ir kai kurioms kitoms Outlook versijoms.<br>Deja, da�nai �i sulietuvinim� �diegus dingsta Outlook programoje kai kurios piktogramos.");
 AddToDatabase(4,"Paquet Builder","Downloads/PaquetBuilderSulietuvinimas.exe","75Kb","5","-","-","Lietuvi� kalbos paketas �diegimo program� k�rimui.");
 AddToDatabase(5,"Sonique","Downloads/soniqueltpack.exe","82Kb","3","-","-","Sulietuvina Sonique grotuvo vartotojo s�saj�. Atrodo, kad �is sulietuvinimas tinka visoms 1.x grotuvo versijoms. Ta�iau kadangi �is sulietuvinimas darytas ne profesional� o meg�j�, vartojama ��vepla� kalba.");
 AddToDatabase(6,"WinACE 1.x","Downloads/WinAceLT.exe","262Kb","5","-","-","Sulietuvina visi�kai WinAce vartotojo s�saj� ir pagalbos failus.");
 AddToDatabase(7,"WinAmp 2.72","Downloads/winamplt.exe","64,5Kb","5","-","-","Sulietuvina WinAmp. Su kitomis versijomis gali neveikti.");
 AddToDatabase(8,"Windows Administrator 3.b+","Downloads/LtWinA3b.zip","5,81Kb","n","-","-","Deja, �io sulietuvinimo mes negal�jome i�bandyti, nes mes netur�jome tokios programos, ta�iau tik�na, kad jis gerai sulietuvina Windows Adminstrator 3.b+.");
 AddToDatabase(9,"LitWin 2000/ME","Downloads/wmillt50.exe","239Kb","5","http://www.kada.lt/litwin","-","Papildomi lietuvinimui skirti �rankiai Windows 2000 ir Windows Me operacin�ms sistemoms.");
 AddToDatabase(10,"LitWin NT 4.0 (4.11.2)","Downloads/wntlt411.exe","249Kb","5","http://www.kada.lt/litwin","-","Papildomi lietuvinimui skirti �rankiai Windows NT 4.0 operacinei sistemai.");
 AddToDatabase(11,"LitWin NT 4.0 (4.13.05)","Downloads/wntlt413.exe","261Kb","5","http://www.kada.lt/litwin","-","Papildomi lietuvinimui skirti �rankiai Windows NT 4.0 operacinei sistemai.");
 AddToDatabase(12,"LitWin XP","Downloads/wXPlt501.exe","149Kb","5","http://www.kada.lt/litwin","-","Papildomi lietuvinimui skirti �rankiai Windows XP operacinei sistemai.");
 AddToDatabase(13,"WinRAR 2.90 beta 2","Downloads/winrar2.0beta4.exe","314Kb","4","-","-","Sulietuvina WinRar. Jeigu j�s naudojote pilna WinRAR versija, po �io sulietuvinimo �diegimo ji pasidarys <i>Shareware</i>. Taigi teks j� v�l u�registruoti...");
 AddToDatabase(14,"LitWin 98","Downloads/w98lt4161.exe","359Kb","5","http://www.kada.lt/litwin","-","Lietuvi�ki priedai. Sulietuvina klaviat�r� ir kai kuriuos �riftus. Tinka Windows 98, Windows 98 SE, Windows 95, Windows 95 OSR 2, Windows 95 PE, Windows 95 OSR 2 PE operacin�ms sistemoms.");
 AddToDatabase(15,"Dark Basic","Downloads/DarkBasicLT.exe","46,7Kb","3","-","-","Dark Basic sulietuvinimas. Sulietuvina tik programos meniu ir kai kuriuos dialogus");
 AddToDatabase(16,"LT Pack Beta 2","Downloads/LTPackBeta2Install.exe","605Kb","4","-","-","�is paketas yra skirtas �aidim�, kurie naudoja Unreal grafin� varikl� sulietuvinimui. Tai Adventure Pinball: Forgotten Island, Clive Barker's Undying, Nerf: Arena Blast, Deus Ex, Unreal, Unreal Tournament, Unreal: Return To Napali, Unrealty, Wheel of Time..."); 
 AddToDatabase(17,"WinLiet 1.05 Beta","Downloads/Winliet_1.05_full.exe","3,39Mb","2","-","-","�is paketas sulietuvina beveik vis� vartotojo s�saj�, ta�iau j� rekomenduojame �diegti jau pa�engusiems vartotojams. Jeigu j�s nar�ote su Internet Explorer nar�ykle, mes nerekomenduojame �diegti �io paketo visai. Paketas tinka Windows 98, Windows 98 SE ir Windows Me operacin�ms sistemoms.");
 AddToDatabase(18,"Advanced Grapher","Downloads/AdvancedGrapher.zip","8Kb","n","-","-","Sulietuvina Advanced Grapher.");
 AddToDatabase(19,"KDE 2.x","Downloads/kde-i18n-lt-2.2.2.tar.bz2","840Kb","n","-","-","Deja, �io paketo mes nei�band�me, nes netur�jome kaip tai padaryti. Ta�iau i� apra�ym� pasidaro ai�ku, kad jis yra skirtas prid�ti bent ka�kiek lietuvyb�s � KDE. Jeigu netingite, i�bandykite ir savo �sp�d�ius para�ykite mums.");
 AddToDatabase(20,"FAR 1.63","Downloads/far_lng_lithuanian.rar","18Kb","5","http://www.rarsoft.com","-","FAR sulietuvinimas.");
 AddToDatabase(21,"PGP 2.6.3(i)","Downloads/pgp263i-lithuanian.zip","42Kb","n","-","-","PGP sulietuvinimas.");
 AddToDatabase(22,"WinRAR 2.90 Beta 3","Downloads/Rar_lith.rar","63Kb","5","http://www.rarsoft.com","-","Sulietuvina WinRAR program�. Tai yra oficialus sulietuvinimas.");
 AddToDatabase(23,"Setup Generator","Downloads/SetupGenerator.zip","8Kb","5","-","-","Sulietuvina Setup Generator program�.");
 AddToDatabase(24,"Popper","Downloads/Popper.zip","4Kb","n","-","-","Atleiskit, bet mes nei�band�me �io sulietuvinimo. Nes netur�jome reikiamos programos. Jeigu turite galite pabandyti �� sulietuvinim�.");
 AddToDatabase(25,"Netscape Communicator","Downloads/x-lt-2.05.tar.gz","205Kb","n","-","-","Ka�kiek sulietuvina Netscape Communicator. Tinka tik Unix pagrindu veikiancioms OS: Linux, FreeBSD, Unix, BSD.");
 AddToDatabase(26,"MP3 CD Maker 1.50","Downloads/MP3CDMaker1.50_LT.exe","75Kb","5","-","-","Sulietuvina CD Maker vartotojo s�saj�. Tinka 1.5 ir naujesn�ms versijoms.");
 AddToDatabase(27,"Worms World Party/Armagedon","Downloads/Worms_Sulietuvinimas.exe","6,81Mb","5","-","-","Kirm�liukai moka kalb�ti lietuvi�kai. Netikite? Tada, patys i�bandykite ir tuo �sitikinsite. Tinke Worms World Party ir Worms Armagedon �aidimams.");