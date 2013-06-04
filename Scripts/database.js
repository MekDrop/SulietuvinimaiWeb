/* author: Raimondas */
/* creation date: 2002.04.12 */
/* title: duomenu baze ir paieshka joje */

//Duomenu baze
var MaxValue=45;
var LastPosition=44;
Suliet = new Array(MaxValue); 
Failai = new Array(MaxValue);
Dydis = new Array(MaxValue);
Koment = new Array(MaxValue);

//Reikalingos dalys
function AddToDatabase(Vieta,Pavadinimas, URL, FailoDydis, Komentaras){
 Suliet[Vieta] = Pavadinimas;
 Failai[Vieta] = URL;
 Dydis[Vieta] = FailoDydis;
 if (Komentaras=="") Komentaras="-";
 if (Komentaras==undefined) Komentaras="-";
 Koment[Vieta] = Komentaras;
 }

//Pridedami elementai i duomenu baze
 AddToDatabase(0,"Grand Prix 3","http://sulietuvinimai.mekdrop.name/gp3liet1.exe","95,2Kb","Dar tik alpha versija");
 AddToDatabase(1,"Mimesweeper","http://sulietuvinimai.mekdrop.name/ltgames.exe","81,5Kb","Kartu su lietuviðku Solitaire.");
 AddToDatabase(2,"Mirc","http://sulietuvinimai.mekdrop.name/mirc.Lit.zip","0,646Kb","Sulietuvina tik Join ir Quit komandas.");
 AddToDatabase(3,"Outlook Express 5.5","http://sulietuvinimai.mekdrop.name/outlook.zip","246Kb","Tinka ir kai kurioms kitoms Outlook versijoms.<br>Deja, daþnai ði sulietuvinimà ádiegus dingsta Outlook programoje kai kurios piktogramos.");
 AddToDatabase(4,"Paquet Builder","http://sulietuvinimai.mekdrop.name/PaquetBuilderSulietuvinimas.exe","75Kb");
 AddToDatabase(5,"Solitaire","http://sulietuvinimai.mekdrop.name/ltgames.exe","81,5Kb","Kartu su lietuviðku Mimesweeper."); 
 AddToDatabase(6,"Sonique","http://sulietuvinimai.mekdrop.name/soniqueltpack.exe","82Kb");
 AddToDatabase(7,"WinACE 1.x","http://sulietuvinimai.mekdrop.name/WinAceLT.exe","262Kb");
 AddToDatabase(8,"WinAmp v2.72","http://sulietuvinimai.mekdrop.name/winamplt.exe","64,5Kb","Su kitom WinAmp versijomis gali neveikti.");
 AddToDatabase(9,"Windows Administrator 3.b+","http://sulietuvinimai.mekdrop.name/LtWinA3b.zip","5,81Kb");
 AddToDatabase(10,"Windows 2000","http://sulietuvinimai.mekdrop.name/wmillt50.exe","239Kb","LitWin Paketas.<br>Sulietuvina tik klaviatûrà.");
 AddToDatabase(11,"Windows ME","http://sulietuvinimai.mekdrop.name/wmillt50.exe","239Kb","LitWin Paketas.<br>Sulietuvina tik klaviatûrà.");
 AddToDatabase(12,"Windows NT 4.0","http://sulietuvinimai.mekdrop.name/wntlt411.exe","249Kb","LitWin Paketas.<br>Sulietuvina tik klaviatûrà.<br>Versija 4.11.2.");
 AddToDatabase(13,"Windows NT 4.0","http://sulietuvinimai.mekdrop.name/wntlt413.exe","261Kb","LitWin Paketas.<br>Sulietuvina tik klaviatûrà.<br>Versija 4.13.05.");
 AddToDatabase(14,"Windows XP","http://sulietuvinimai.mekdrop.name/wXPlt501.exe","149Kb","LitWin Paketas.<br>Papildomi árankiai klaviatûros sulietuvinimui.");
 AddToDatabase(15,"WinRAR 2.90 beta 2","http://sulietuvinimai.mekdrop.name/winrar2.0beta4.exe","314Kb","Jeigu jûs naudojote pilna WinRAR versija, po ðio sulietuvinimo ádiegimo ji pasidarys <i>Shareware</i>. Taigi teks jà vël uþregistruoti...");
 AddToDatabase(16,"Windows 98","http://sulietuvinimai.mekdrop.name/w98lt4161.exe","359Kb","LitWin'98 Paketas.<br>Lietuviðki priedai. Sulietuvina klaviatûrà ir kai kuriuos ðriftus.<br>Versija 4.16.02");
 AddToDatabase(17,"Windows 98 Second Edition","http://sulietuvinimai.mekdrop.name/w98lt4161.exe","359Kb","LitWin'98 Paketas.<br>Lietuviðki priedai. Sulietuvina klaviatûrà ir kai kuriuos ðriftus.<br>Versija 4.16.02");
 AddToDatabase(18,"Windows 95","http://sulietuvinimai.mekdrop.name/w98lt4161.exe","359Kb","LitWin'98 Paketas.<br>Lietuviðki priedai. Sulietuvina klaviatûrà ir kai kuriuos ðriftus.<br>Versija 4.16.02");
 AddToDatabase(19,"Windows 95 PE","http://sulietuvinimai.mekdrop.name/w98lt4161.exe","359Kb","LitWin'98 Paketas.<br>Lietuviðki priedai. Sulietuvina klaviatûrà ir kai kuriuos ðriftus.<br>Versija 4.16.02");
 AddToDatabase(20,"Windows 95 OSR2","http://sulietuvinimai.mekdrop.name/w98lt416.exe","359Kb","LitWin'98 Paketas.<br>Lietuviðki priedai. Sulietuvina klaviatûrà ir kai kuriuos ðriftus.<br>Versija 4.16.02");
 AddToDatabase(21,"Windows 95 OSR2 PE","http://sulietuvinimai.mekdrop.name/w98lt4161.exe","359Kb","LitWin'98 Paketas.<br>Lietuviðki priedai. Sulietuvina klaviatûrà ir kai kuriuos ðriftus.<br>Versija 4.16.02");
 AddToDatabase(22,"Dark Basic","http://sulietuvinimai.mekdrop.name/DarkBasicLT.exe","46,7Kb","Sulietuvina tik programos meniu ir kai kuriuos dialogus");
 AddToDatabase(23,"Adventure Pinball: Forgotten Island","http://sulietuvinimai.mekdrop.name/LTPackBeta2Install.exe","605Kb","LT Pack Beta 2"); 
 AddToDatabase(24,"Clive Barker's Undying","http://sulietuvinimai.mekdrop.name/LTPackBeta2Install.exe","605Kb","LT Pack Beta 2");
 AddToDatabase(25,"Deus Ex","http://sulietuvinimai.mekdrop.name/LTPackBeta2Install.exe","605Kb","LT Pack Beta 2");
 AddToDatabase(26,"Nerf: Arena Blast","http://sulietuvinimai.mekdrop.name/LTPackBeta2Install.exe","605Kb","LT Pack Beta 2");
 AddToDatabase(27,"Unreal","http://sulietuvinimai.mekdrop.name/LTPackBeta2Install.exe","605Kb","LT Pack Beta 2");
 AddToDatabase(28,"Unreal: Return To Napaly","http://sulietuvinimai.mekdrop.name/LTPackBeta2Install.exe","605Kb","LT Pack Beta 2");
 AddToDatabase(29,"Unrealty","http://sulietuvinimai.mekdrop.name/LTPackBeta2Install.exe","605Kb","LT Pack Beta 2");
 AddToDatabase(30,"Unreal Tournament","http://sulietuvinimai.mekdrop.name/LTPackBeta2Install.exe","605Kb","LT Pack Beta 2");
 AddToDatabase(31,"Wheel of Time","http://sulietuvinimai.mekdrop.name/LTPackBeta2Install.exe","605Kb","LT Pack Beta 2");
 AddToDatabase(32,"Windows 98","http://sulietuvinimai.mekdrop.name/Winliet_1.05_full.exe","3,39Mb","WinLiet 1.05 Beta<br>Ðis paketas sulietuvina beveik visà vartotojo sàsajà, taèiau ðá sulietuvinimà rekomenduojame ádiegti jau paþengusiems vartotojams. Jeigu jûs neraðote su Internet Explorer narðykle po internetà, mes nerekomenduojame ádiegti ðio paketo visai.");
 AddToDatabase(33,"Windows 98 Second Edition","http://sulietuvinimai.mekdrop.name/Winliet_1.05_full.exe","3,39Mb","WinLiet 1.05 Beta<br>Ðis paketas sulietuvina beveik visà vartotojo sàsajà, taèiau ðá sulietuvinimà rekomenduojame ádiegti jau paþengusiems vartotojams. Jeigu jûs neraðote su Internet Explorer narðykle po internetà, mes nerekomenduojame ádiegti ðio paketo visai.");
 AddToDatabase(34,"Windows Me","http://sulietuvinimai.mekdrop.name/Winliet_1.05_full.exe","3,39Mb","WinLiet 1.05 Beta<br>Ðis paketas sulietuvina beveik visà vartotojo sàsajà, taèiau ðá sulietuvinimà rekomenduojame ádiegti jau paþengusiems vartotojams. Jeigu jûs neraðote su Internet Explorer narðykle po internetà, mes nerekomenduojame ádiegti ðio paketo visai.");
 AddToDatabase(35,"Advanced Grapher","http://sulietuvinimai.mekdrop.name/AdvancedGrapher.zip","8Kb");
 AddToDatabase(36,"KDE 2.x","http://sulietuvinimai.mekdrop.name/kde-i18n-lt-2.2.2.tar.bz2","840Kb");
 AddToDatabase(37,"FAR 1.63","http://sulietuvinimai.mekdrop.name/far_lng_lithuanian.rar","18Kb");
 AddToDatabase(38,"PGP 2.6.3(i)","http://sulietuvinimai.mekdrop.name/pgp263i-lithuanian.zip","42Kb");
 AddToDatabase(39,"WinRAR 2.80 Beta 3","http://sulietuvinimai.mekdrop.name/Rar_lith.rar","63Kb");
 AddToDatabase(40,"Setup Generator","http://sulietuvinimai.mekdrop.name/SetupGenerator.zip","8Kb");
 AddToDatabase(41,"Popper","http://sulietuvinimai.mekdrop.name/Popper.zip","4Kb");
 AddToDatabase(42,"Netscape Communicator","http://sulietuvinimai.mekdrop.name/x-lt-2.05.tar.gz","205Kb","Tinka tik Unix pagrindu veikiancioms OS: Linux, FreeBSD, Unix, BSD.");
 AddToDatabase(43,"MP3 CD Maker 1.50","http://sulietuvinimai.mekdrop.name/MP3CDMaker1.50_LT.exe","75Kb");
 AddToDatabase(44,"Worms World Party","http://sulietuvinimai.mekdrop.name/Worms_Sulietuvinimas.exe","6,81Mb");
 AddToDatabase(45,"Worms Armagedon","http://sulietuvinimai.mekdrop.name/Worms_Sulietuvinimas.exe","6,81Mb");